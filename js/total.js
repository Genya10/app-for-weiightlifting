'use strict';
const totalKg = document.querySelector('.span-kg');
const totalNumb = document.querySelector('.span-numb');
const average = document.querySelector('.span-average');

const btnKg1 = document.querySelector('.btn-total1');
const btnKg2 = document.querySelector('.btn-total2');
const btnKg3 = document.querySelector('.btn-total3');

let sumAll = document.querySelectorAll('.sum');
console.log(sumAll);
let sum = 0;

btnKg1.addEventListener('click',  ()=> {
  for (let i = 0; i < sumAll.length; i++) {
    let sumNumb = sumAll[i];
    console.log(sumNumb);
    let numb = Number(sumNumb.textContent);
    sum += numb;
  }
  totalKg.textContent = sum;
});

btnKg2.addEventListener('click', () => {
  let sum = 0;
  sum += document.querySelector('.inp2').value * document.querySelector('.inp3').value;
  sum += document.querySelector('.inp5').value * document.querySelector('.inp6').value;
  sum += document.querySelector('.inp8').value * document.querySelector('.inp9').value;
  sum += document.querySelector('.inp11').value * document.querySelector('.inp12').value;
  sum += document.querySelector('.inp14').value * document.querySelector('.inp15').value;
  sum += document.querySelector('.inp17').value * document.querySelector('.inp18').value;
  sum += document.querySelector('.inp20').value * document.querySelector('.inp21').value;
  sum += document.querySelector('.inp23').value * document.querySelector('.inp24').value;
  sum += document.querySelector('.inp26').value * document.querySelector('.inp27').value;
  sum += document.querySelector('.inp29').value * document.querySelector('.inp30').value;
  totalNumb.textContent = sum;
});


/*btnKg2.addEventListener('click',()=>{
   const inp1= document.querySelector('.inp2');
   const inp2 = document.querySelector('.inp3');
   const inp3 = document.querySelector('.inp5');
   const inp4 = document.querySelector('.inp6');
   const inp5 = document.querySelector('.inp8');
   const inp6 = document.querySelector('.inp9');
   const inp7= document.querySelector('.inp11');
   const inp8 = document.querySelector('.inp12');
   const inp9 = document.querySelector('.inp14');
   const inp10 = document.querySelector('.inp15');
   const inp11 = document.querySelector('.inp17');
   const inp12 = document.querySelector('.inp18');
  let sum = (inp1.value*inp2.value)+(inp3.value*inp4.value)+(inp5.value*inp6.value)+
  (inp7.value*inp8.value)+(inp9.value*inp10.value)+(inp11.value*inp12.value);
  totalNumb.textContent = sum;
});
*/

btnKg3.addEventListener('click', ()=> {
  let aver = totalKg.textContent / totalNumb.textContent;
  let averMath = aver.toFixed(2);
  average.textContent = averMath;
});
