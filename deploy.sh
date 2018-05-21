#!/bin/sh
cd backend/flask && docker build -t flask . && docker run -d -p 9999:9999 -t flask
cd ..
cd frontend && docker build -t angular . && docker run -d -p 8888:80 -t angular
