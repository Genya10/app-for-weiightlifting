'use strict';
const totalKg = document.querySelector('.span-kg');
const totalNumb = document.querySelector('.span-numb');
const average = document.querySelector('.span-average');

const btnTotalKg = document.querySelector('.btn-total1');
const btnTotalNumb = document.querySelector('.btn-total2');
const btnAverage = document.querySelector('.btn-total3');


btnTotalKg.addEventListener('click',  ()=> {
 let sumAll = document.querySelectorAll('.sum');
 let sum = 0;
  for (let i = 0; i < sumAll.length; i++) {
    let sumNumb = sumAll[i];
    let numb = Number(sumNumb.textContent);
    sum += numb;
  }
  totalKg.textContent = sum;
});

btnTotalNumb.addEventListener('click', () => {
  let sum = 0;
  for (let i = 2; i <= 29; i += 3) {
      const inp1 = document.querySelector(`.inp${i}`).value;
      const inp2 = document.querySelector(`.inp${i + 1}`).value;
      sum += inp1 * inp2;
  }
  totalNumb.textContent = sum;
});

btnAverage.addEventListener('click', ()=> {
  let aver = totalKg.textContent / totalNumb.textContent;
  let averMath = aver.toFixed(2);
  average.textContent = averMath;
});



