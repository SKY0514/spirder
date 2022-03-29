//result 페이지의 내가 틀린 답, 정답 오답에 따른 색상 변화
let problems = document.querySelector('.wrong_ul')

if ($('.wrong_ul>.wrong_li1>p>span').text() == 1){
  document.querySelector('.wrong_li1').style.backgroundColor = 'white'
} else {
  document.querySelector('.wrong_li1').style.backgroundColor = '#ffa'
}


<!-- 테스트 중입니다-->
$(document).ready(function () {
    showLevel()
});

function calResult() {

}

function showLevel() {
  $.ajax({
      url: '../static/json/mzlevel.json',
      dataType: 'json',
      success: function (data) {
          let level = data['mzLevel']
          let point = calResult();

          let temp_html = ``
          if (point <= 2) {
              temp_html = `<div class="category1">
                  <h2>나의 유형</h2>
                  <h3>level ${level[0]['level']}</h3>
                  <P class="title">${level[0]['title']}</P>
                  <P class="desc">${level[0]['desc']}</P>
                  <div class="cateimg"></div>
                </div>`
          } else if (point > 2 && point <= 4) {
              temp_html = `<div class="category1">
                  <h2>나의 유형</h2>
                  <h3>level ${level[1]['level']}</h3>
                  <P class="title">${level[1]['title']}</P>
                  <P class="desc">${level[1]['desc']}</P>
                  <div class="cateimg"></div>
                </div>`
          } else if (point > 4 && point <= 6) {
              temp_html = `<div class="category1">
                  <h2>나의 유형</h2>
                  <h3>level ${level[2]['level']}</h3>
                  <P class="title">${level[2]['title']}</P>
                  <P class="desc">${level[2]['desc']}</P>
                  <div class="cateimg"></div>
                </div>`
          } else if (point > 6 && point <= 8) {
              temp_html = `<div class="category1">
                  <h2>나의 유형</h2>
                  <h3>level ${level[3]['level']}</h3>
                  <P class="title">${level[3]['title']}</P>
                  <P class="desc">${level[3]['desc']}</P>
                  <div class="cateimg"></div>
                </div>`
          } else {
              temp_html = `<div class="category1">
                  <h2>나의 유형</h2>
                  <h3>level ${level[4]['level']}</h3>
                  <P class="title">${level[4]['title']}</P>
                  <P class="desc">${level[4]['desc']}</P>
                  <div class="cateimg"></div>
                </div>`
          }
          $('#cate').append(temp_html)
      }
  })
}
