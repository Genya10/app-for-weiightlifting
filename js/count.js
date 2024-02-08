'use strict';

document.querySelectorAll('.btn-sum').forEach(button => {
  button.addEventListener('click', () => {
    const inputGroup = button.closest('.input-group');
      const inputs = inputGroup.querySelectorAll('.input-count');
      let count = 1;
      inputs.forEach(inp =>{
        count *= Number(inp.value);
      })
      const sumDisplay = inputGroup.querySelector('.sum');
      sumDisplay.textContent = count;
  })
})
