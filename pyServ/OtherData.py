from app import db,ma

#Reflects the Articles or models referent in the example code.

class OtherData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fpath = db.Column(db.String(100),nullable=False)
    searchString = db.Column(db.Text, nullable=False)
    output = db.Column(db.Text, nullable=True)


    def __repr__(self):
        return "<OtherData %r>" % self.fpath

# Generate marshmallow Schemas from your models
class DataSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","fpath", "searchStrings", "output")


data_schema = DataSchema()
data_schema = DataSchema(many=True)