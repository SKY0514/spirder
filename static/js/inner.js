document.write("<script src='json.js'></script>")

function setInnerText() {
    const element1 = document.getElementById('div2_text');
    const element2 = document.getElementById('div3');

    element1.innerHTML = mzQuestion[0]["question"];
    element2.innerHTML = `<button id="button1">${mzQuestion[0]["item"][0]}</button>
                    <button id="button2">${mzQuestion[0]["item"][1]}</button>
                    <button id="button3">${mzQuestion[0]["item"][2]}</button>
                    <button id="button4">${mzQuestion[0]["item"][3]}</button>`;

}