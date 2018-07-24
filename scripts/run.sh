#!/bin/bash
rm -rf /frontend-build/*
cp -r /frontend/dist/* /frontend-build
python manage.py migrate
python manage.py collectstatic --noinput
exec /opt/conda/envs/app/bin/uwsgi --ini /scripts/uwsgi.ini