import unittest
import requests
import json
import app as flaskapi
from flask import jsonify

class TestFlaskApi(unittest.TestCase):
    def setUp(self):
        self.app = flaskapi.app.test_client()

    def test_postjson(self):
        response = self.app.post('/postjson', data=json.dumps(dict(request='test post')),content_type='application/json')
        data = json.loads(response.data)
        assert "success['test post']" in data['response']

if __name__ == "__main__":
    unittest.main()
