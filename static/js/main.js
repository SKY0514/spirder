
// animation 구현 추가하기

var select = []; //선택한 답안 저장 배열
const endItem = 10; //문제 개수


//addItem() 문제 항목 4가지 출력 함수
function addItem(itemText, qIdx, iIdx) {
    //0번쨰의 문제 항목을 HTML에서 class이름이 qBox인 곳에 출력
    //createElement를 이용하여 문제 항목의 button을 생성
    var item = document.querySelector('#div3');
    var itemBtn = document.createElement('button');
    //만든 버튼들에는 class나 id가 없기 때문에 모든 버튼을 선택하기 위해 iList란 class값을 넣어준다.
    itemBtn.classList.add('iList');
    //버튼 크기 및 간격 조정
    itemBtn.classList.add('my-1');
    itemBtn.classList.add('py-4');

    //appendChild을 사용하여 <div> div3 태그 내부에 itemBtn을 추가

    item.appendChild(itemBtn);

    //0번쨰의 문제 항목을 버튼안에 넣는다.
    itemBtn.innerHTML = itemText;

    //addEventListener: 지정한 이벤트가 대상에 전달될 떄마다 호출할 함수 설정
    //버튼을 누르면 다음 문제가 나올수 있도록 한다.
    itemBtn.addEventListener("click", function () {
        var itemBtnAll = document.querySelectorAll('.iList');
        var status = document.querySelector('.statusBar');
        status.style.width = (100/endItem) * (qIdx+1) + '%';
        for (let i = 0; i < itemBtnAll.length; i++) {
            itemBtnAll[i].disabled = true; //버튼 비 활성화
            itemBtnAll[i].style.WebkitAnimation = "fadeOut .8s"; //버튼 비 활성화
            itemBtnAll[i].animation = "fadeOut .8s"; //버튼 비 활성화

            //버튼 사라짐
        }
        setTimeout(() => {
          for (let i = 0; i < itemBtnAll.length; i++) {
            itemBtnAll[i].style.display = 'none';
          }
          select[qIdx] = iIdx;
          addQuestion(++qIdx)
        }, 750)
        //버튼을 선택할 때 마다 그 버튼의 iIdx값을 넣는다.
       ; //문제 출력 함수의 qIdx를 1증가해 다음 문제 불러옴
    }, false);
}

//addQuestion() 문제 출력 함수
function addQuestion(qIdx) {
    //마지막 문제를 풀면 내가 선택한 답들을 출력
    if (qIdx === endItem) {
        getAnswer(select);
        window.location = 'result.html';
    }
    //0번쨰의 문제를 HTML에서 class이름이 problem_text인 곳에 출력
    var question = document.querySelector('#problem_text');
    question.innerHTML = mzQuestion[qIdx]["question"];
    //0번쨰의 item들을 출력해 addItem 함수에 파라미터으로 넣는다.
    //이떄 i는 몇번쨰의 문제인지의 값을 의미하기 때문에 addItem의 파라미터로 넣는다.
    for (let i in mzQuestion[qIdx]["item"]) {
        addItem(mzQuestion[qIdx]["item"][i]["list"], qIdx, i);
    }
}

//addQuestion() 실행 함수 버튼
function begin() {
    let startbtn = document.querySelector('.starting')
    startbtn.style.display = 'none';
    let qIdx = 0;
    addQuestion(qIdx);
}

//사용자의 답안 서버로 저장하기 위해 보내기
function getAnswer(select) {
    var answer = select;
        console.log(answer);
    $.ajax({
        type: "POST",
        url: "/quiz",
        data: {answer_give: answer},
        success: function (response) {
        }
    })
}

