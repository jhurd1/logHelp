from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy

db = sqlalchemy
app = Flask(__name__)

@app.route('/data', methods=['POST'])
def data():
    fpath = request.json['fpath']
    searchStrings = request.json['searchStrings']

    data = data (
        fpath = fpath,
        searchStrings = searchStrings
    )

    db.session.add(data)
    db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)