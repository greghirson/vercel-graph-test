import requests
import json
import os
from dotenv import load_dotenv
import pandas as pd
from datetime import datetime, timedelta, UTC

# Step 1: Load the token from .env file
load_dotenv()  # Load environment variables from .env file
api_token = os.getenv("API_TOKEN")

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
    now = datetime.now(UTC)
    six_hours_ago = now - timedelta(hours=6)

    for entry in data:
        last_reported = entry.get('last_reported', '')
        state = entry.get('state', '')

        if state.lower() in ("unavailable", "unknown"):
                continue

        if last_reported and state:
                # Remove the 'Z' from the string and convert to datetime
                last_reported = last_reported.replace('Z', '')
                last_reported_dt = datetime.fromisoformat(last_reported)

                # Filter only data from the last 6 hours
                if last_reported_dt >= six_hours_ago:
                    records.append({
                        "last_reported": last_reported_dt,
                        "state": float(state)
                    })

# Convert to DataFrame for aggregation
    df = pd.DataFrame(records)

    # Group by 5-minute intervals and calculate the mean state
    df.set_index('last_reported', inplace=True)
    df = df.resample('5T').mean().dropna().reset_index()

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