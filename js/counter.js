'use strict';

  const setUpCounter =(btnPlus,btnClear,countElement)=>{
  let counter = 0;
  btnPlus.addEventListener("click",()=>{
    counter++;
    countElement.textContent = counter;
  })
  btnClear.addEventListener("click", ()=>{
    counter = 0;
    countElement.textContent = counter;
  })
}

setUpCounter(document.querySelector('.plus'),document.querySelector('.clear'),document.querySelector('.counter_js'));
setUpCounter(document.querySelector('.plus1'),document.querySelector('.clear1'),document.querySelector('.counter_js1'));
setUpCounter(document.querySelector('.plus2'),document.querySelector('.clear2'),document.querySelector('.counter_js2'));
setUpCounter(document.querySelector('.plus3'),document.querySelector('.clear3'),document.querySelector('.counter_js3'));
setUpCounter(document.querySelector('.plus4'),document.querySelector('.clear4'),document.querySelector('.counter_js4'));






