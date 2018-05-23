from django.test import TestCase
import json
from django.http import JsonResponse

class ViaTest(TestCase):

    def test_postjson(self):
        response = self.client.post('/postjson', data=json.dumps(dict(request='test post')),content_type='application/json')
        expected = JsonResponse({"response":"success['test post']"})
        assert response.content in expected.content
