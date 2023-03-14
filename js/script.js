'use strict';

const counterTake = document.querySelector('.counter_js')
const plus = document.querySelector('.plus');
const clear = document.querySelector('.clear');
let counter = 0;
plus.addEventListener('click', function () {
    counter++;
    this.previousElementSibling.textContent = counter;
});
clear.addEventListener('click', function () {
    counter = 0;
    counterTake.textContent = counter;
});

let counterTake1 = document.querySelector('.counter_js1');
let plus1 = document.querySelector('.plus1');
let clear1 = document.querySelector('.clear1');
let counter1 = 0;
plus1.addEventListener('click', function () {
    counter1++;
    this.previousElementSibling.textContent = counter1;
});
clear1.addEventListener('click', function () {
    counter1 = 0;
    counterTake1.textContent = counter1;
});


let counterTake2 = document.querySelector('.counter_js2')
let plus2 = document.querySelector('.plus2');
let clear2 = document.querySelector('.clear2');
let counter2 = 0;
plus2.addEventListener('click', function () {
    counter2++;
    this.previousElementSibling.textContent = counter2;
});
clear2.addEventListener('click', function () {
    counter2 = 0;
    counterTake2.textContent = counter2;
});


const counterTake3 = document.querySelector('.counter_js3');
const plus3 = document.querySelector('.plus3');
const clear3 = document.querySelector('.clear3');
let counter3 = 0;
plus3.addEventListener('click', function () {
    counter3++;
    this.previousElementSibling.textContent = counter3;
});
clear3.addEventListener('click', function () {
    counter3 = 0;
    counterTake3.textContent = counter3;
})


const counterTake4 = document.querySelector('.counter_js4');
const plus4 = document.querySelector('.plus4');
const clear4 = document.querySelector('.clear4');
let counter4 = 0;
plus4.addEventListener('click', function () {
    counter4++;
    this.previousElementSibling.textContent = counter4;
});
clear4.addEventListener('click', function () {
    counter4 = 0;
    counterTake4.textContent = counter4;
})





/////////////////////////////////////////////////////////
/*let counter = 0;
console.log(counter);
function plusA() {
    counter++;
}
function clearing() {
    counter = 0;
}
const counterTake = document.querySelector('.counter_js');
console.log(counterTake);
const plus = document.querySelector('.plus');
const clear = document.querySelector('.clear');
console.log(plus);
console.log(clear);
function render() {
    counterTake.innerHTML = counter;
}
plus.addEventListener('click', () => {
    plusA();
    render();
});
clear.addEventListener('click', () => {
    clearing();
    render();
});
render();

const counterTake1 = document.querySelector('.counter_js1');
const plus1 = document.querySelector('.plus1');
const clear1 = document.querySelector('.clear1');
function render1() {
    counterTake1.innerHTML = counter1;
}
let counter1 = 0;
function plusA1() {
    counter1++;
}
function clearing1() {
    counter1 = 0;
}
plus1.addEventListener('click', () => {
    plusA1();
    render1();
});
clear1.addEventListener('click', () => {
    clearing1();
    render1();
});
render1();

const counterTake2 = document.querySelector('.counter_js2');
console.log(counterTake2);
const plus2 = document.querySelector('.plus2');
const clear2 = document.querySelector('.clear2');
let counter2 = 0;
function plusA2() {
    counter2++;
}
function clearing2() {
    counter2 = 0;
}
function render2() {
    counterTake2.innerHTML = counter2;
}
plus2.addEventListener('click', () => {
    plusA2();
    render2();
});
clear2.addEventListener('click', () => {
    clearing2();
    render2();
});

const counterTake3 = document.querySelector('.counter_js3');
console.log(counterTake3);
const plus3 = document.querySelector('.plus3');
const clear3 = document.querySelector('.clear3');
function render3() {
    counterTake3.innerHTML = counter3;
}
let counter3 = 0;
function plusA3() {
    counter3++;
}
function clearing3() {
    counter3 = 0;
}
plus3.addEventListener('click', () => {
    plusA3();
    render3();
});
clear3.addEventListener('click', () => {
    clearing3();
    render3();
});

const counterTake4 = document.querySelector('.counter_js4');
const plus4 = document.querySelector('.plus4');
const clear4 = document.querySelector('.clear4');
let counter4 = 0;
function render4() {
    counterTake4.innerHTML = counter4;
}
function plusA4() {
    counter4++;
}
function clearing4() {
    counter4 = 0;
}
plus4.addEventListener('click', () => {
    plusA4();
    render4();
});
clear4.addEventListener('click', () => {
    clearing4();
    render4();
});

/*let counter = 0;
const take = document.querySelectorAll('counter_js');
const plus = document.querySelectorAll('.plus');
const clear = document.querySelectorAll('.clear');
//plus.addEventListener('click', plusA);

function render() {
    take.innerHTML = counter;
}

function plusA(e) {
    counter++;
    console.log(e)
}

function clearing() {
    counter = 0;
}

/* plus.forEach(btn => {
     btn.addEventListener('click',plusA);
     btn.addEventListener('click',render);
 })*/


