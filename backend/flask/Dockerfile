FROM alpine:3.7
MAINTAINER Alin <rcijov@gmail.com>

# Update
RUN apk add --update python py-pip

# Install app dependencies
RUN pip install Flask --upgrade
RUN pip install flask-cors --upgrade
RUN pip install flask-restful
RUN pip install requests

# Bundle app source
COPY . /

RUN python /test.py

EXPOSE  9999
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "9999"]
