import requests
import json
import os
from dotenv import load_dotenv
import pandas as pd
#from datetime import datetime, timedelta, UTC
from datetime import datetime, timedelta, timezone # change for 3.10
from zoneinfo import ZoneInfo  # Available in Python 3.9+

# Step 1: Load the token from .env file
load_dotenv()  # Load environment variables from .env file
api_token = os.getenv("API_TOKEN2")

# Step 2: Set your local timezone (adjust as needed)
local_timezone = ZoneInfo("America/Los_Angeles")  # Replace with your timezone if needed

if not api_token:
    print("API token is missing. Please check your .env file.")
    exit()

# Step 2: Make the API call with Authorization header
url = "https://ha.hirson.xyz/api/history/period?filter_entity_id=sensor.co2_mh_z19_co2_value"
headers = {
    "Authorization": f"Bearer {api_token}"
}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()[0]

    # Step 3: Parse the "last_reported" and "state" fields
    records = []
    #now = datetime.now(UTC)
    now = datetime.now().replace(tzinfo=timezone.utc) # change for 3.10
    six_hours_ago = now - timedelta(hours=6)

    for entry in data:
        last_reported = entry.get('last_changed', '') #was last_reported before 2024-11-23
        state = entry.get('state', '')

        if state.lower() in ("unavailable", "unknown"):
                continue

        if last_reported and state:
                # Remove the 'Z' from the string and convert to datetime
                last_reported = last_reported.replace('Z', '')
                last_reported_dt = datetime.fromisoformat(last_reported)

                # Filter only data from the last 6 hours
                if last_reported_dt >= six_hours_ago:
                    last_reported_local = last_reported_dt.astimezone(local_timezone)
                    records.append({
                        "last_reported": last_reported_local,
                        "state": float(state)
                    })

# Convert to DataFrame for aggregation
    df = pd.DataFrame(records)
    
    # Group by 5-minute intervals and calculate the mean state
    df.set_index('last_reported', inplace=True)
    df = df.resample('5min').mean().dropna().reset_index()

    # Prepare data for Vega-Lite
    values = [
        {"a": row["last_reported"].strftime("%Y-%m-%d %H:%M:%S"), "b": row["state"]}
        for _, row in df.iterrows()
    ]

    # Step 4: Prepare the Vega-Lite script.js content
    vega_script = f"""
    var yourVlSpec = {{
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {{
        values: {json.dumps(values)},
      }},
      mark: "line",
      width: "container",
      encoding: {{
        x: {{ field: "a", type: "ordinal", title: "Last Reported" }},
        y: {{ field: "b", type: "quantitative", title: "CO2 State" }},
      }},
    }};
    vegaEmbed("#vis", yourVlSpec);
    """

    # Step 5: Write the Vega-Lite script to the script.js file
    with open("script.js", "w") as f:
        f.write(vega_script)

    print("Vega-Lite script has been successfully generated in script.js.")

else:
    print(f"Failed to fetch data. Status code: {response.status_code}")
