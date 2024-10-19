#!/bin/bash

dt=$(date '+%d/%m/%Y %H:%M:%S')


source venv/bin/activate

python extract.py

git add .

git commit -m "new data at $dt"

git push

