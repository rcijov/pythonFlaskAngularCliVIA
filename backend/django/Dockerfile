FROM python:2.7.14

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
RUN pip install django
RUN pip install django-cors-headers

COPY . .

RUN python manage.py test 

EXPOSE 9999
CMD ["python", "manage.py", "runserver", "0.0.0.0:9999"]
