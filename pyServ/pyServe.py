from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

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