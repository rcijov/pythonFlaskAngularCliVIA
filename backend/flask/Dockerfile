FROM alpine:3.7
MAINTAINER Alin <rcijov@gmail.com>

# Update
RUN apk add --update python py-pip

# Install app dependencies
RUN pip install Flask --upgrade
RUN pip install flask-cors --upgrade

# Bundle app source
COPY . /

EXPOSE  9999
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "9999"]
