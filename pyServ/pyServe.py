from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask import request
from flask import jsonify
from flask_cors import CORS


app = Flask(__name__, static_url_path='', static_folder='loghelp/src')
CORS(app)
api = Api(app)

app.config['SERVER_NAME'] = '127.0.0.1:5000'

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/')
def index():pass

@app.route('/user', methods=['POST'])
def user():
    fpath = request.form.get("fpath", "")
    searchStrings = request.form.get("searchStrings", "")
    anonymize = request.form.get("anonymize", "")
    return jsonify(fpath=fpath, searchStrings=searchStrings, anonymize=anonymize)