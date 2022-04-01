from flask import Flask, render_template, jsonify, request
app = Flask(__name__)
# with open('C:\Users\dnjsd\OneDrive\바탕 화면\스.코 팀프로젝트\mzQuestion.json','r') as f1
#     json_data = json.load(f1)
#     print(json.)

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


## API 역할을 하는 부분
@app.route('/quiz', methods=['POST'])
def save_answer():
    print('test')
    answer_receive = request.form.getlist('answer_give[]')

    print(answer_receive)

    doc = {
        'answer': answer_receive
    }

    db.mzQuiz.insert_one(doc)

    return jsonify({'msg': '저장 완료!'})

#
# @app.route('/review', methods=['GET'])
# def read_reviews():
#     sample_receive = request.args.get('sample_give')
#     print(sample_receive)
#     return jsonify({'msg': '이 요청은 GET!'})



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

