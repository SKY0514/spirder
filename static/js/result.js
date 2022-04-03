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

// 나의 포인트
let total = document.querySelector('.total');
// 클라이언트 점수 함수 넣기
let totalPoint = 90
total.append(totalPoint) // 함수 바꾸기

// 나의 유형

let level = document.querySelector('.level')
let title = document.querySelector('.title')
let desc = document.querySelector('.desc')
let cateimg = document.querySelector('.cateimg')

if(totalPoint <= 20){ // 클라이언트 점수
  level.append(mzLevel[0]["level"])
  title.append(mzLevel[0]["title"])
  desc.append(mzLevel[0]["desc"])
  cateimg.style.backgroundImage = "url('../static/images/egg.png')";
  cateimg.style.backgroundSize = "300px 300px";
  cateimg.style.backgroundPosition = "center center";
}else if(totalPoint <= 40){
  level.append(mzLevel[1]["level"])
  title.append(mzLevel[1]["title"])
  desc.append(mzLevel[1]["desc"])
  cateimg.style.backgroundImage = "url('../static/images/baby.png')";
  cateimg.style.backgroundSize = "300px 300px";
  cateimg.style.backgroundPosition = "center center";
}else if(totalPoint <= 60){
  level.append(mzLevel[2]["level"])
  title.append(mzLevel[2]["title"])
  desc.append(mzLevel[2]["desc"])
  cateimg.style.backgroundImage = "url('../static/images/삐삐.png')";
  cateimg.style.backgroundSize = "300px 300px";
  cateimg.style.backgroundPosition = "center center";
}else if(totalPoint <= 80){
  level.append(mzLevel[3]["level"])
  title.append(mzLevel[3]["title"])
  desc.append(mzLevel[3]["desc"])
  cateimg.style.backgroundImage = "url('../static/images/싸이월드.png')";
  cateimg.style.backgroundSize = "350px 500px";
  cateimg.style.backgroundPosition = "center center";

}else if(totalPoint <= 100){
  level.append(mzLevel[4]["level"])
  title.append(mzLevel[4]["title"])
  desc.append(mzLevel[4]["desc"])
  cateimg.style.backgroundImage = "url('../static/images/mz세대 이미지.jpg')";
  cateimg.style.backgroundSize = "200px 300px";
  cateimg.style.backgroundPosition = "center center";

}

// 평균 유형

let level1 = document.querySelector('.level1')
let title1 = document.querySelector('.title1')
let desc1 = document.querySelector('.desc1')
let cateimg1 = document.querySelector('.cateimg1')

if(totalPoint <= 20){ // 클라이언트 점수
  level1.append(mzLevel[0]["level"])
  title1.append(mzLevel[0]["title"])
  desc1.append(mzLevel[0]["desc"])
  cateimg1.style.backgroundImage = "url('../static/images/egg.png')";
  cateimg1.style.backgroundSize = "300px 300px";
  cateimg1.style.backgroundPosition = "center center";
}else if(totalPoint <= 40){
  level1.append(mzLevel[1]["level"])
  title1.append(mzLevel[1]["title"])
  desc1.append(mzLevel[1]["desc"])
  cateimg1.style.backgroundImage = "url('../static/images/baby.png')";
  cateimg1.style.backgroundSize = "300px 300px";
  cateimg.style.backgroundPosition = "center center";
}else if(totalPoint <= 60){
  level1.append(mzLevel[2]["level"])
  title1.append(mzLevel[2]["title"])
  desc1.append(mzLevel[2]["desc"])
  cateimg1.style.backgroundImage = "url('../static/images/삐삐.png')";
  cateimg1.style.backgroundSize = "300px 300px";
  cateimg1.style.backgroundPosition = "center center";
}else if(totalPoint <= 80){
  level1.append(mzLevel[3]["level"])
  title1.append(mzLevel[3]["title"])
  desc1.append(mzLevel[3]["desc"])
  cateimg1.style.backgroundImage = "url('../static/images/싸이월드.png')";
  cateimg1.style.backgroundSize = "350px 500px";
  cateimg1.style.backgroundPosition = "center center";

}else if(totalPoint <= 100){
  level1.append(mzLevel[4]["level"])
  title1.append(mzLevel[4]["title"])
  desc1.append(mzLevel[4]["desc"])
  cateimg1.style.backgroundImage = "url('../static/images/mz세대 이미지.jpg')";
  cateimg1.style.backgroundSize = "200px 300px";
  cateimg1.style.backgroundPosition = "center center";

}

// 내가 틀린 답 : 클라이언트 답 번호와
// 가장 많은 오답률 : 가장많이 오답선택번호와 퍼센티지

let anserNm = document.querySelector('.anserNm')






// 서버에 저장했던 사용자의 답안 불러오기
$(document).ready(function () {
    showAnswer()
});

function showAnswer() {
    $.ajax({
        type: "GET",
        url: "/quiz",
        data: {},
        success: function (response) {
            let answers = response['all_answers']
            // for (let i = 0; i < answers.length; i++){
            //     let numbers_users = answers[i]
            //     console.log(numbers_users)
            // }
                console.log(answers)
        }
    })
}