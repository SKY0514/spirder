let btns = document.getElementsByTagName('button')
let qzBox = document.querySelector('#div3')
let newBtn = document.createElement('button')
function dis(){
  
  for(let i = 0; i < btns.length; i++){
    btns.disabled = true;
    btns[i].style.display ="none"
  }
  btns.disabled = false;
  goNext()
  
  // btns.fadeOut('slow')
  // setTimeout(() => {
  //   for(let i = 0; i <btns.length; i++){
  //     btns[i].style.display = 'none'
  //   }
  // }, 950);
  //애니구현

  function goNext(){
  
    let btnAry = []
    for(let i = 0; i < 4; i++){
      
      btnAry[i] = newBtn
      btnAry[i].classList.add('btns')
      btnAry[i].innerHTML=`다음문제${i}`
      qzBox.appendChild(btnAry[i]);}
    
      
      // btnAry[0] = newBtn
      // btnAry[0].classList.add(`btns1`)
      // btnAry[0].innerHTML=`다음문제0`
      // qzBox.appendChild(btnAry[0]);
      // console.log(btnAry[0])
      // btnAry[1] = newBtn
      // btnAry[1].classList.add(`btns`)
      // btnAry[1].innerHTML=`다음문제1`
      // document.body.appendChild(btnAry[1]);
      // console.log(btnAry[1])
    
    
      
      // btnAry[i].innerHTML=`다음문제${i}`
      // btnAry[i].classList.add('only')
      // q.appendChild(btnAry[i]);
      // btnAry[2] = newBtn
      // btnAry[2].innerHTML=`다음문제${2}`
      // btnAry[2].classList.add('oly')
      // w.appendChild(btnAry[2]);
    
  }
  $('.btns').click(function(){
    dis()
  });
  


  

}
let i = 0;
function question(i){
  let questionBox = document.querySelector('#problem_text')
  questionBox.innerHTML = mzQuestion[i]["question"]
  i++
}

function begin(){
  // btns.style.WebkitAnimation = 'fadeOut'
  // btns.style.display = 'none'
}