from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.mzQuiz

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


## 사용자의 답안 서버에 저장
@app.route('/quiz', methods=['POST'])
def save_answer():
    answer_receive = request.form.getlist('answer_give[]')

    print(answer_receive)

    doc = {
        'answer': answer_receive
    }

    db.mzQuiz.insert_one(doc)

    return jsonify({'msg': '나의 결과는?!'})


## 서버에서 사용자의 답안 내리기
@app.route('/quiz', methods=['GET'])
def read_answer():
    answers = list(db.mzQuiz.find({}, {'_id': False}))

    print(answers)
    return jsonify({'all_answers': answers})



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

