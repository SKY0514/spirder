document.write("<script src='json.js'></script>")

//문제 항목 4가지 출력
function addItem(itemText, qIdx) {
    var item = document.querySelector('.iBox');
    var itemList = document.createElement('button');
    itemList.classList.add('iList');
    itemList.classList.add('my-1');
    itemList.classList.add('py-4')
    item.appendChild(itemList);
    itemList.innerHTML = itemText;

    itemList.addEventListener("click", function () {
        var children = document.querySelectorAll('.iList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        setInnerText(++qIdx);
    }, false);
}

//버튼 누르면 전체 문제 출력
function setInnerText(qIdx) {
    // const element1 = document.getElementById('div2_text');
    // const element2 = document.getElementById('div3');
    //
    // element1.innerHTML = mzQuestion[0]["question"];
    // element2.innerHTML = `<button id="button1">${mzQuestion[0]["item"][0]}</button>
    //                 <button id="button2">${mzQuestion[0]["item"][1]}</button>
    //                 <button id="button3">${mzQuestion[0]["item"][2]}</button>
    //                 <button id="button4">${mzQuestion[0]["item"][3]}</button>`;
    var question = document.querySelector('.qBox');
    question.innerHTML = mzQuestion[qIdx]["question"];
    for (let i in mzQuestion[qIdx]["item"]) {
        addItem(mzQuestion[qIdx]["item"][i]["list"], qIdx);
    }

}

//setInnerText의 버튼 함수
function begin() {
    let qIdx = 0;
    setInnerText(qIdx);

}