import json
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.spider


with open("C:/Users/dnjsd/OneDrive/바탕 화면/스.코 팀프로젝트/mzQuestion.json","r",encoding ='UTF-8') as f1:
    json1 = json.load(f1)

with open("C:/Users/dnjsd/OneDrive/바탕 화면/스.코 팀프로젝트/mzLevel.json", "r", encoding='UTF-8') as f2:
    json2 = json.load(f2)

print(json1)





#데이터 넣기
for a in json1["mzQuestion"]:
    print(a['index'], a['answer'])
    doc = {'number': a['index'], 'answer': a['answer']}
    db.test.insert_one(doc)

#임의로 10문제를 풀었을때 나오는 리스트 작성
testlist=[4,4,4,4,4,4,4,4,4,4]

#number는 문제를 푼 사람 수 sum은 점수
number=4
sum=0

#db안 people에 문제를 몇번째로 풀은 사람인지(number) 그 사람이 선택한 문제번호(testlist)를 저장
doc = {"number":number , "answer" : testlist}
db.people.insert_one(doc)

##############################

#db에 저장하고 다시 데이터를 people_answer로 가져옴
people_answer = db.people.find_one({'number': number})

#10문제를 답과 사람이 선택한 번호를 비교
for a in range(1,10):
    find_db = db.test.find_one({'number': a})
    print("{}번문제 입력값 : {} 정답 : {}".format(a, people_answer['answer'][a-1], find_db['answer']))
    if people_answer['answer'][a-1] == find_db['answer']:
        sum= sum+1
        print("%d번은 입력값과 정답이 일치" %a )
print("총 점수:{}".format(sum))

number=number+1



# 점수확인해보기


# find_db = db.test.find_one({'number':1})
# print(user)