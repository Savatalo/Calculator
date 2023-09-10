const input = document.getElementById('input');
const plusBtn = document.getElementById('btn-1');
const minusBtn = document.getElementById('btn-2');
const multipleBtn = document.getElementById('btn-3');
const divideBtn = document.getElementById('btn-4');
const operation = document.getElementById('para');
const resultPara = document.getElementById('result');

let result = 0;

plusBtn.addEventListener('click', () => {
    result += parseInt(input.value);
    operation.innerHTML = `NUMBER: ${input.value}`
    resultPara.innerHTML = `RESULT: ${result}`;
});

minusBtn.addEventListener('click', () => {
    result -= parseInt(input.value);
    operation.innerHTML = `NUMBER: ${input.value}`
    resultPara.innerHTML = `RESULT: ${result}`;
})

multipleBtn.addEventListener('click', () => {
    result *= parseInt(input.value);
    operation.innerHTML = `NUMBER: ${input.value}`
    resultPara.innerHTML = `RESULT: ${result}`;
})

divideBtn.addEventListener('click', () => {
    result /= parseInt(input.value);
    operation.innerHTML = `NUMBER: ${input.value}`
    resultPara.innerHTML = `RESULT: ${result}`;
});