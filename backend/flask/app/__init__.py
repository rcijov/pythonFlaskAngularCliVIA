from flask import Flask
import flask_restful
from flask_cors import CORS

app = Flask(__name__)
api = flask_restful.Api(app)

CORS(app)

from app import routes

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9999)
