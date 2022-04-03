from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

import json
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.spider

with open("./static/json/mzQuestion.json", "r", encoding='UTF-8') as f1:
    json1 = json.load(f1)

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


##고정 변수
number = 1
sum = 0
total_sum=0
level = 0
db_level = ""
base = ""
checklist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# 문제 중 몇번이 얼마나 틀렸는지 체크 & 한 번만 실행 해야함-PJ#1
for base in range(0, 10):
    doc_Qbase = {"number": base, "q1": 0, "q2": 0, "q3": 0, "q4": 0}
    db.question.insert_one(doc_Qbase)

# 어떤 유형의 레벨이 가장 많은지 체크하기위해 데베에 삽입 & 한번만 실행
doc_Lbase = {"key": 1, "number": number, "lv1": 0, "lv2": 0, "lv3": 0, "lv4": 0, "lv5": 0, }
db.level.insert_one(doc_Lbase)




## 사용자의 답안 서버에 저장
@app.route("/quiz", methods=['POST'])
def save_answer():

    global total_sum,checklist,sum

    answer_receive = request.form.getlist('answer_give[]')

    for change_num in range(0,10):
        answer_receive[change_num]=int(answer_receive[change_num])

    print(answer_receive)


    # 점수 확인 함수
    for a in range(0, 10):
        print("{}번문제 사용자 입력값:{} 답 : {}".format(a, answer_receive[a], json1["mzQuestion"][a]["answer"]))
        if answer_receive[a] == (json1["mzQuestion"][a]["answer"]):
            sum = sum + 1
            print("{}번은 입력값과 정답이 일치".format(a))

        else:
            # 틀린문제 체크
            checklist[a] = 1
            print("{}번 문제를 틀렸습니다.".format(a))

            # 문제당 몇번을 얼마나 틀렸는지 확인
            if answer_receive[a] == 0:
                base = "q1"
            elif answer_receive[a] == 1:
                base = "q2"
            elif answer_receive[a] == 2:
                base = "q3"
            else:
                base = "q4"
            db.question.update_one({'number': a}, {'$inc': {base: 1}})

    print("총 점수:{}".format(sum))

    # 랭크 확인 함수
    if sum <= 2:
        level = 0
        db_level = "lv1"

    elif sum <= 4:
        level = 1
        db_level = "lv2"

    elif sum <= 6:
        level = 2
        db_level = "lv3"

    elif sum <= 8:
        level = 3
        db_level = "lv4"

    elif sum <= 10:
        level = 4
        db_level = "lv5"
    else:
        level = -1

    db.level.update_one({'key': 1}, {'$inc': {db_level: 1}})

    print("level은 {}입니다".format(level))

    # 사용자 문제 풀고난 데이터 데베에 저장
    doc = {"number": number, "answer": answer_receive, "result": sum, "level": level}
    db.people.insert_one(doc)
    total_sum=total_sum+sum
    sum=0



    return jsonify({'msg':'skd'})




## 서버에서 사용자의 답안 내리기
@app.route('/quiz', methods=['GET'])
def read_answer():
    global number,checklist,total_sum

    # 문제 푼사람 점수 = user_sum["result"]
    user_sum = db.people.find_one({'number': number})
    print('점수')  ## 표시를 위한 print
    print(user_sum["result"])

    # 평균 점수 = avr_sum

    print('평균 점수')  ## 표시를 위한 print
    print('총 점수 {}, 사용자수 {}'.format(total_sum,number))
    avr_sum = int(total_sum / number)
    print(avr_sum)

    # 문제 푼사람이 선택한 정답 = user_choice["answer"]
    user_choice = db.people.find_one({'number': number})
    print('사용자가 선택한 정답')  ## 표시를 위한 print
    print(user_choice["answer"])

    # 문제 푼사람이 틀린 문제만 1로 체크 = checklist
    print('사용자의 틀린 문제, 1로 표시')  ## 표시를 위한 print
    print(checklist)

    user = db.level.find_one({'key': 1})
    level = [user['lv1'], user['lv2'], user['lv3'], user['lv4'], user['lv5']]

    ####가장 많은 유형 나타내기 위한 함수
    # mostlevel 앞이 level값 뒤가 해당 level이 몇명이 있는지 & 계속 초기화해야함

    resultlevel = 0
    mostlevel = [0, 0]
    for in_level in range(len(level)):
        if mostlevel[1] < level[in_level]:
            mostlevel[1] = level[in_level]
            mostlevel[0] = in_level

    resultlevel = mostlevel[1] / number * 100
    ####
    #가장 많은 유형 퍼센트 = resultlevel
    print("level{} 유형이 {}%만큼있습니다".format(mostlevel[0], int(resultlevel)))

    ### 가장 많이 틀린답 찾기 위한 함수

    most_miss =[0,0,0,0,0,0,0,0,0,0]
    most_misspercent=[0,0,0,0,0,0,0,0,0,0]
    for in_number in range(0,10):
        # most_choose의 첫번째 인자는 가장 많이 틀린 번호의 횟수 두번째 인자는 가장 많이 틀린번호
        most_choose = [-1,-1]
        total_miss = db.question.find_one({'number': in_number})
        answer = [total_miss["q1"], total_miss["q2"], total_miss["q3"], total_miss["q4"]]
        for in_answer in range(len(answer)):
            if most_choose[0] < answer[in_answer]:
                most_choose[0]= answer[in_answer]
                most_choose[1] = in_answer

        most_misspercent[in_number]= int( (most_choose[0] / number) * 100)
        most_miss[in_number] = most_choose[1]
    # 가장 많이 틀린 답 번호 = most_miss 가장 많이 틀린답 퍼센트 =most_misspercent
    print(most_misspercent)
    print(most_miss)
    ###

    ## 사용자의 점수
    point = user_sum['result'] * 10

    ## 사용자의 레벨


    ## 평균 점수
    average = avr_sum * 10

    ## 사용자가 선택한 정답
    user_answer = user_choice['answer']

    ## 사용자가 틀린 문제 ( 틀린 문제는 1로 표시)
    user_wrong = checklist
    checklist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    ## 다른 사용자들이 틀린 답의 백분율



    number = number + 1

    return jsonify({
        'user_point': point,
        'average': average,
        'choice': user_answer,
        'wrong': user_wrong,
    })



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
