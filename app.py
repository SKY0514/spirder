from flask import Flask, render_template, jsonify, request
app = Flask(__name__)
# with open('C:\Users\dnjsd\OneDrive\바탕 화면\스.코 팀프로젝트\mzQuestion.json','r') as f1
#     json_data = json.load(f1)
#     print(json.)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main.html')
def mainhtml():
    return render_template('main.html')

@app.route('/result.html')
def resulthtml():
    return render_template('result.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)