let problems = document.querySelector('.wrong_ul');
// 클라이언트 선택 답 내려주기
// anserNm.append(1)



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


// 나의 유형


// 평균 유형


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
            let point = response['user_point']  // 사용자의 점수
            let level = response['level']  // 사용자의 레벨
            let average = response['average']  // 전체 사용자의 평균 점수
            let choice = response['choice']  // 사용자의 선택 답안
            let wrong = response['wrong']  // 사용자가 틀린 문제 (1로 표시)
            let most_level = response['most_level']  // 사용자들의 가장 많은 레벨 유형
            let most_level_percentage = response['most_level_percentage']  // 사용자들의 가장 많은 유형(%)
            let most_wrong =response['most_wrong']//가장 많이 틀린 답
            let most_wrong_num = response['most_wrong_num']//가장 많이 틀린 답
            let most_wrong_percentage =response['most_wrong_percentage'] //가장 많이 틀린 답의 비율
            let all_user = response['all_user']  // 총 사용자수

            console.log(point, level, average, choice, wrong, most_level, most_level_percentage,most_wrong,most_wrong_num,most_wrong_percentage, all_user)
            console.log(point)
            console.log(choice)
            let total = document.querySelector('.total');
            // 클라이언트 점수 함수 넣기

            total.append(point) // 함수 바꾸기

            let levels = document.querySelector('.level')
            let title = document.querySelector('.title')
            let desc = document.querySelector('.desc')
            let cateimg = document.querySelector('.cateimg')

            if(point <= 20){ // 클라이언트 점수
                levels.append(mzLevel[0]["level"])
                title.append(mzLevel[0]["title"])
                desc.append(mzLevel[0]["desc"])
                cateimg.style.backgroundImage = "url('../static/images/egg.png')";
                cateimg.style.backgroundSize = "300px 300px";
                cateimg.style.backgroundPosition = "center center";
            }else if(point <= 40){
                levels.append(mzLevel[1]["level"])
                title.append(mzLevel[1]["title"])
                desc.append(mzLevel[1]["desc"])
                cateimg.style.backgroundImage = "url('../static/images/baby.png')";
                cateimg.style.backgroundSize = "300px 300px";
                cateimg.style.backgroundPosition = "center center";
            }else if(point <= 60){
                levels.append(mzLevel[2]["level"])
                title.append(mzLevel[2]["title"])
                desc.append(mzLevel[2]["desc"])
                cateimg.style.backgroundImage = "url('../static/images/삐삐.png')";
                cateimg.style.backgroundSize = "300px 300px";
                cateimg.style.backgroundPosition = "center center";
            }else if(point <= 80){
                levels.append(mzLevel[3]["level"])
                title.append(mzLevel[3]["title"])
                desc.append(mzLevel[3]["desc"])
                cateimg.style.backgroundImage = "url('../static/images/싸이월드.png')";
                cateimg.style.backgroundSize = "350px 500px";
                cateimg.style.backgroundPosition = "center center";

            }else if(point <= 100){
                levels.append(mzLevel[4]["level"])
                title.append(mzLevel[4]["title"])
                desc.append(mzLevel[4]["desc"])
                cateimg.style.backgroundImage = "url('../static/images/mz세대 이미지.jpg')";
                cateimg.style.backgroundSize = "200px 300px";
                cateimg.style.backgroundPosition = "center center";

            }


            //평균 유형
            let level1 = document.querySelector('.level1')
            let title1 = document.querySelector('.title1')
            let desc1 = document.querySelector('.desc1')
            let cateimg1 = document.querySelector('.cateimg1')

            if(average <= 20){ // 클라이언트 점수
                level1.append(mzLevel[0]["level"])
                title1.append(mzLevel[0]["title"])
                desc1.append(mzLevel[0]["desc"])
                cateimg1.style.backgroundImage = "url('../static/images/egg.png')";
                cateimg1.style.backgroundSize = "300px 300px";
                cateimg1.style.backgroundPosition = "center center";
            }else if(average <= 40){
                level1.append(mzLevel[1]["level"])
                title1.append(mzLevel[1]["title"])
                desc1.append(mzLevel[1]["desc"])
                cateimg1.style.backgroundImage = "url('../static/images/baby.png')";
                cateimg1.style.backgroundSize = "300px 300px";
                cateimg.style.backgroundPosition = "center center";
            }else if(average <= 60){
                level1.append(mzLevel[2]["level"])
                title1.append(mzLevel[2]["title"])
                desc1.append(mzLevel[2]["desc"])
                cateimg1.style.backgroundImage = "url('../static/images/삐삐.png')";
                cateimg1.style.backgroundSize = "300px 300px";
                cateimg1.style.backgroundPosition = "center center";
            }else if(average <= 80){
                level1.append(mzLevel[3]["level"])
                title1.append(mzLevel[3]["title"])
                desc1.append(mzLevel[3]["desc"])
                cateimg1.style.backgroundImage = "url('../static/images/싸이월드.png')";
                cateimg1.style.backgroundSize = "350px 500px";
                cateimg1.style.backgroundPosition = "center center";

            }else if(average <= 100){
                level1.append(mzLevel[4]["level"])
                title1.append(mzLevel[4]["title"])
                desc1.append(mzLevel[4]["desc"])
                cateimg1.style.backgroundImage = "url('../static/images/mz세대 이미지.jpg')";
                cateimg1.style.backgroundSize = "200px 300px";
                cateimg1.style.backgroundPosition = "center center";

            }

             // 답안체크

            for (let i = 0 ; i < 10; i++){
                let temp = `<li class="wrong_li">
                                <h4>${mzQuestion[i]['question']}</h4>
                                <p>정답<span class="anserNm1">${choice[i]+1}</span>번 ${mzQuestion[i]['item01']}</p>
                            </li>`
                $('.wrong_ul').append(temp)
            }

            for(let i = 0; i <= 9; i++){
                if (document.querySelectorAll('.anserNm1')[i].textContent == mzQuestion[i]['answer']+1){
                    $(".wrong_li")[i].style.backgroundColor = 'white'
                } else {
                    $(".wrong_li")[i].style.backgroundColor = '#ffa'
                };
            }




        }

    })
}

// 내가 틀립답 답지도 함께
// 오답률과 오답 번화와 오답선택지
// 답 맞췄는데 불구하고 점수 0점