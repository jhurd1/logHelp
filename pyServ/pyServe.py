from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
from OtherData import OtherData, data_schema

#equivalent to the routes.py file in the example project

db = sqlalchemy
app = Flask(__name__)

@app.route('/data', methods=['POST'])
def add_data():
    fpath = request.json['fpath']
    searchStrings = request.json['searchStrings']

    data = OtherData (
        fpath = fpath,
        searchStrings = searchStrings
    )

    db.session.add(data)
    db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)