#!/usr/bin/env bash

dt=$(date '+%d/%m/%Y %H:%M:%S')

echo "starting extraction for $dt....\n"

source venv/bin/activate
python extract.py

echo "extraction complete. Pushing to github....\n"

git add .
git commit -m "new data at $dt"
git push

echo "process complete. No errors"
