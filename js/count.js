'use strict';

const summa = (v1,v2,v3,span,sum)=>{
  sum.addEventListener('click',()=>{
    span.textContent = v1.value * v2.value * v3.value;
  })
  }
  
  summa(document.querySelector('.inp1'),document.querySelector('.inp2'),document.querySelector('.inp3'),
    document.querySelector('.sum1'),document.querySelector('.btn-sum1'));
  summa(document.querySelector('.inp4'),document.querySelector('.inp5'),document.querySelector('.inp6'),
    document.querySelector('.sum2'),document.querySelector('.btn-sum2'));

  summa(document.querySelector('.inp7'),document.querySelector('.inp8'),document.querySelector('.inp9'),
    document.querySelector('.sum3'),document.querySelector('.btn-sum3'));
  summa(document.querySelector('.inp10'),document.querySelector('.inp11'),document.querySelector('.inp12'),
    document.querySelector('.sum4'),document.querySelector('.btn-sum4'));

  summa(document.querySelector('.inp13'),document.querySelector('.inp14'),document.querySelector('.inp15'),
  document.querySelector('.sum5'),document.querySelector('.btn-sum5'));
  summa(document.querySelector('.inp16'),document.querySelector('.inp17'),document.querySelector('.inp18'),
  document.querySelector('.sum6'),document.querySelector('.btn-sum6'));

  summa(document.querySelector('.inp19'),document.querySelector('.inp20'),document.querySelector('.inp21'),
  document.querySelector('.sum7'),document.querySelector('.btn-sum7'));
  summa(document.querySelector('.inp22'),document.querySelector('.inp23'),document.querySelector('.inp24'),
  document.querySelector('.sum8'),document.querySelector('.btn-sum8'));

  summa(document.querySelector('.inp25'),document.querySelector('.inp26'),document.querySelector('.inp27'),
  document.querySelector('.sum9'),document.querySelector('.btn-sum9'));
  summa(document.querySelector('.inp28'),document.querySelector('.inp29'),document.querySelector('.inp30'),
  document.querySelector('.sum10'),document.querySelector('.btn-sum10'));


/*// Получите все элементы ввода и кнопки суммы
const sumButtons = document.querySelectorAll('.btn-sum');
console.log(sumButtons);
// Добавьте обработчик события для каждой кнопки суммы
sumButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Найдите родительский элемент, чтобы найти все соответствующие элементы ввода и вывода суммы
        const parentExercise = button.closest('.exercise');
         console.log(parentExercise);
        // Найдите все элементы ввода для этого упражнения
        const inputs = parentExercise.querySelectorAll('.input-count');
        console.log(inputs);
        // Инициализируйте переменную для хранения суммы
        let sum = 0;

        // Переберите все элементы ввода и умножьте их значения
        inputs.forEach(function(input) {
            sum *= parseFloat(input.value) || 0;
        });

        // Найдите элемент для вывода суммы и установите его содержимое
        const sumDisplay = parentExercise.querySelector('.sum');
        console.log(sumDisplay);
        sumDisplay.textContent = sum;
    });
});*/


