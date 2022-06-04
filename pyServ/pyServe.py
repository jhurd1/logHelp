from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask import request
#from flask import jsonify
from flask_cors import CORS
from Manage import Manage


app = Flask(__name__, static_url_path='', static_folder='/loghelp/public')
CORS(app)
api = Api(app)

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/', defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

api.add_resource(Manage, '/')