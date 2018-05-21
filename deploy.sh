#!/bin/sh

read -p  "Which backend to install [flask,django] : " doit 
case $doit in  
	  flask) cd backend/flask && docker build -t flask . && docker run -d -p 9999:9999 -t flask ;; 
  	  django) cd backend/django && docker build -t django . && docker run -d -p 9999:9999 -t django ;; 
	  *) echo Unknown command ;; 
esac

cd ../..
cd frontend && docker build -t angular . && docker run -d -p 8888:80 -t angular
