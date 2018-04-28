from app import app
from flask import request, jsonify

@app.route('/postjson', methods = ['POST'])
def postJsonHandler():
    content = request.get_json()
    return jsonify(response="success['" + content.get('request') + "']")
