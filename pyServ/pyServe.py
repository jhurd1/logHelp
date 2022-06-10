from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
import Data

db = sqlalchemy
app = Flask(__name__)

@app.route('/data', methods=['POST'])
def data():
    data = request.get_json()
    new_data = Data(content=data['content'])
    db.session.add(new_data)
    db.session.commit()
    return 'Done', 201

if __name__ == '__main__':
    app.run(debug=True)