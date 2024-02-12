'use strict';


const exercises = [
    { name: "Snatch", inputs: ["inp1", "inp2", "inp3", "sum1", "btn-sum1","counter_js","plus","clear","inp4", "inp5", "inp6", "sum2", "btn-sum2"] },
    { name: "Pull snatch", inputs: ["inp7", "inp8", "inp9", "sum3", "btn-sum3","counter_js1","plus1","clear1" , "inp10", "inp11", "inp12", "sum4", "btn-sum4"] },
    { name: "Squats", inputs: ["inp13", "inp14", "inp15", "sum5", "btn-sum5","counter_js2","plus2","clear2" , "inp16", "inp17", "inp18", "sum6", "btn-sum6"] },
    { name: "Press", inputs: ["inp19", "inp20", "inp21", "sum7", "btn-sum7","counter_js3","plus3","clear3" , "inp22", "inp23", "inp24", "sum8", "btn-sum8"] },
    { name: "Hyperextension", inputs: ["inp25", "inp26", "inp27", "sum9","btn-sum9","counter_js4","plus4","clear4" , "inp28", "inp29", "inp30", "sum10", "btn-sum10"] },
];

const exerciseList = document.getElementById("exercise-list");
exercises.forEach((exercise, index) => {
    const li = document.createElement("li");
    li.classList.add("exercise");
    li.innerHTML = `
        <span class="exc-numb">${index + 1}</span>
        <input placeholder="${exercise.name}" type="text" class="input">
        <span class="input-group">
            <input type="text" class="input-count ${exercise.inputs[0]}"> kg *
            <input type="text" class="input-count numb ${exercise.inputs[1]}"> *
            <input type="text" class="input-count numb ${exercise.inputs[2]}"> =
            <span class="sum ${exercise.inputs[3]}">0</span>
            <button class="btn-sum ${exercise.inputs[4]}">Sum</button>
        </span>
        <div class="two-row">
            <div class="buttons">
                <span class="${exercise.inputs[5]}">0</span>
                <button class="${exercise.inputs[6]} btn1">Attempt</button>
                <button class="${exercise.inputs[7]} btn2">Reset</button>
            </div>

            <span class="input-group">
                <input type="text" class="input-count ${exercise.inputs[8]}"> kg *
                <input type="text" class="input-count numb ${exercise.inputs[9]}"> *
                <input type="text" class="input-count numb ${exercise.inputs[10]}"> =
                <span class="sum ${exercise.inputs[11]}">0</span>
                <button class="btn-sum ${exercise.inputs[12]}">Sum</button>
            </span>
        </div>
    `;
    exerciseList.appendChild(li);
});

