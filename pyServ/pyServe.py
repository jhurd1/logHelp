from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def add_data():
    fpath = request.json['fpath']
    searchStrings = request.json['searchStrings']
    return {'fpath':'Test success for ' + fpath,
    'searchStrings': 'Test success for ' + searchStrings}

if __name__ == '__main__':
    app.run(debug=True)