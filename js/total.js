'use strict'
const totalKg = document.querySelector('.span-kg');
const totalNumb = document.querySelector('.span-numb');
const average = document.querySelector('.span-average');

const btnKg1 = document.querySelector('.btn-total1');
const btnKg2 = document.querySelector('.btn-total2');
const btnKg3 = document.querySelector('.btn-total3');


let sumAll = document.querySelectorAll('.sum');
console.log(sumAll);
let sum = 0;

btnKg1.addEventListener('click', function () {
  for (let i = 0; i < sumAll.length; i++) {
    let sumNumb = sumAll[i];
    console.log(sumNumb);
    let numb = Number(sumNumb.textContent);
    sum += numb;
  }
  totalKg.textContent = sum;
});


/*let numbAll = document.querySelectorAll('.numb');
console.log(numbAll);
let number = 0;
btnKg2.addEventListener('click', function () {
  for (let i = 0; i < numbAll.length; i++) {
    let suNumb = numbAll[i];
    console.log(suNumb);
    let numb1 = Number(suNumb.textContent);
    console.log(numb1);
    number += numb1;
  }
  totalNumb.textContent = number;
});*/

btnKg2.addEventListener('click', function () {
  let sumNumb = (inp1Two.value * inp1Three.value)
    + (inp1Five.value * inp1Six.value)
    + (inp2Two.value * inp2Three.value)
    + (inp2Five.value * inp2Six.value)
    + (inp3Two.value * inp3Three.value)
    + (inp3Five.value * inp3Six.value)
    + (inp4Two.value * inp4Three.value)
    + (inp4Five.value * inp4Six.value)
    + (inp5Two.value * inp5Three.value)
    + (inp5Five.value * inp5Six.value)
  totalNumb.textContent = sumNumb;
});

btnKg3.addEventListener('click', function () {
  let aver = totalKg.textContent / totalNumb.textContent;
  let averMath = aver.toFixed(2);
  average.textContent = averMath;
});

