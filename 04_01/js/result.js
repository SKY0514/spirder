document.write("<script src='json.js'></script>")
let problems = document.querySelector('.wrong_ul');
// 클라이언트 선택 답 내려주기
// anserNm.append(1)

// 답안체크
for(let i = 0; i <= 3; i++){
  if ($('.anserNm1').text() == mzQuestion[0]['answer'] +1){
    document.querySelector('.wrong_li').style.backgroundColor = 'white'
  } else {
    document.querySelector('.wrong_li').style.backgroundColor = '#ffa'
  };
}

// 오답 문제리스트
for(let i = 0; i <= 9; i++){
  let ul = document.querySelector('.wrrate_ul') 
  var pro = mzQuestion[i]['question']
  // let tm = `$<li class="wrrate_li">
  // <h4>${pro}</h4>
  // <p>오답 <span>3</span>번 <span>억까</span> 47%</p>
  // </li>`
  // ul.appendChild(tm)

 

}





let total = document.querySelector('.total');
let totalPoint = 80;

total.append(totalPoint)
let level = document.querySelector('.level')
let title = document.querySelector('.title')
let desc = document.querySelector('.desc')
if(totalPoint <= 20){
  level.append(mzLevel[0]["level"])
  title.append(mzLevel[0]["title"])
  desc.append(mzLevel[0]["desc"])
}else if(totalPoint <= 40){
  level.append(mzLevel[1]["level"])
  title.append(mzLevel[1]["title"])
  desc.append(mzLevel[1]["desc"])
}else if(totalPoint <= 60){
  level.append(mzLevel[2]["level"])
  title.append(mzLevel[2]["title"])
  desc.append(mzLevel[2]["desc"])
}else if(totalPoint <= 80){
  level.append(mzLevel[3]["level"])
  title.append(mzLevel[3]["title"])
  desc.append(mzLevel[3]["desc"])
}else if(totalPoint <= 100){
  level.append(mzLevel[4]["level"])
  title.append(mzLevel[4]["title"])
  desc.append(mzLevel[4]["desc"])
}
  
let anserNm = document.querySelector('.anserNm')


