from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Data(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    content = db.Column(db.String)

  