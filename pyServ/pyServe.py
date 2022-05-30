from flask import Flask

@app.route('/user', methods=['POST'])
def user():
    data = request.get_json()
    print(data)
    return data