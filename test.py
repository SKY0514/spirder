import json
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.spider

with open("./static/json/mzQuestion.json", "r", encoding='UTF-8') as f1:
    json1 = json.load(f1)

with open("./static/json/mzLevel.json", "r", encoding='UTF-8') as f2:
    json2 = json.load(f2)

# 문제 중 몇번이 얼마나 틀렸는지 체크 & 한 번만 실행 해야함-PJ#1
for base in range(0, 10):
    doc_Qbase = {"number": base, "q1": 0, "q2": 0, "q3": 0, "q4": 0}
    db.question.insert_one(doc_Qbase)

# number는 문제를 푼 사람 수 sum은 점수 base와 db_level은 db에 넣기 위한 작업
number = 5
sum = 0
level = 0
db_level = ""
base = ""

# 어떤 유형의 레벨이 가장 많은지 체크하기위해 데베에 삽입 & 한번만 실행
doc_Lbase = {"key": 1, "number": number, "lv1": 0, "lv2": 0, "lv3": 0, "lv4": 0, "lv5": 0, }
db.level.insert_one(doc_Lbase)

# 임의로 10문제를 풀었을때 나오는 리스트 작성 html에서 받아오는 값 & 반복받아야함
testlist = [0, 2, 3, 2, 2, 2, 3, 3, 3, 1]

# 몇번 문제를 틀렸는지 알려주기 & 반복 초기화해야함
checklist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# 점수 확인 함수
for a in range(0, 10):
    print("{}번문제 사용자 입력값:{} 답 : {}".format(a, testlist[a], json1["mzQuestion"][a]["answer"]))
    if testlist[a] == (json1["mzQuestion"][a]["answer"]):
        sum = sum + 1
        print("%d번은 입력값과 정답이 일치" % a)

    else:
        # 틀린문제 체크
        checklist[a] = 1
        print("{}번 문제를 틀렸습니다.".format(a))

        # 문제당 몇번을 얼마나 틀렸는지 확인
        if testlist[a] == 0:
            base = "q1"
        elif testlist[a] == 1:
            base = "q2"
        elif testlist[a] == 2:
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
doc = {"number": number, "answer": testlist, "result": sum, "level": level}
db.people.insert_one(doc)

# 사용자수는 계속 늘어야함
number = number + 1

##################################
# 데베값 가져오기


user = db.level.find_one({'key': 1})
level = [user['lv1'], user['lv2'], user['lv3'], user['lv4'], user['lv5']]

# mostlevel 앞이 level값 뒤가 해당 level이 몇명이 있는지 & 계속 초기화해야함
resultlevel = 0
mostlevel = [0, 0]
for in_level in range(len(level)):
    if mostlevel[1] < level[in_level]:
        mostlevel[1] = level[in_level]
        mostlevel[0] = in_level

resultlevel = mostlevel[1] / number * 100

print("level{} 유형이 {}%만큼있습니다".format(mostlevel[0], int(resultlevel)))