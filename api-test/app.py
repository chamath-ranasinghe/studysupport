from flask import Flask
import json

app = Flask(__name__)

@app.get('/api')
def apiReturn():
    data = {'name':'Aneesah', 'age':30}
    dataJson = json.dumps(data)
    return dataJson

app.run(debug=True)