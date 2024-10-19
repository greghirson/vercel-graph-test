#!/usr/bin/env bash

cd ~/vercel-graph-test

dt=$(date '+%d/%m/%Y %H:%M:%S')

echo "starting extraction for $dt...."

source venv/bin/activate
python extract.py

echo "extraction complete. Pushing to github...."

git add .
git commit -m "new data at $dt"
git push

echo "process complete. No errors"
