from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

if __name__ == '__main__':
    app.run()

@app.route('/user', methods=['POST'])
def user():
    fpath = request.form.get("fpath", "")
    searchStrings = request.form.get("searchStrings", "")
    anonymize = request.form.get("anonymize", "")
    return jsonify(fpath=fpath, searchStrings=searchStrings, anonymize=anonymize)