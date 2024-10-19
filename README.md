# vercel-graph-test

## Setup instructions

1. Create a Python virtual environment and load the requirements with
   `pip install -r requirements.txt`

1. You need to have a couple of things in your `.env` file.

   - a long term HA token: `api_token=<token>`

1. Create a cron job to run the script at your desired frequency

For example, to run the script every 10 minutes, add the following line to crontab

`*/10 * * * * /path/to/update_vercel.sh`
