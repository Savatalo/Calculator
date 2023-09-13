const input = document.getElementById('input');
const plusBtn = document.getElementById('btn-1');
const minusBtn = document.getElementById('btn-2');
const multipleBtn = document.getElementById('btn-3');
const divideBtn = document.getElementById('btn-4');
const btn1 = document.getElementById('number-1'); 
const btn2 = document.getElementById('number-2'); 
const btn3 = document.getElementById('number-3'); 
const btn4 = document.getElementById('number-4'); 
const btn5 = document.getElementById('number-5'); 
const btn6 = document.getElementById('number-6'); 
const btn7 = document.getElementById('number-7'); 
const btn8 = document.getElementById('number-8'); 
const btn9 = document.getElementById('number-9'); 
const btn0 = document.getElementById('number-0');
const clear = document.getElementById('clear'); 
const equel = document.getElementById('equel');

let result = 0;

btn1.addEventListener ('click', () => {
    input.value += 1;
});

btn2.addEventListener ('click', () => {
    input.value += 2;
});

btn3.addEventListener ('click', () => {
    input.value += 3;
});

btn4.addEventListener ('click', () => {
    input.value += 4;
});

btn5.addEventListener ('click', () => {
    input.value += 5;
});

btn6.addEventListener ('click', () => {
    input.value += 6;
});

btn7.addEventListener ('click', () => {
    input.value += 7;
});

btn8.addEventListener ('click', () => {
    input.value += 8;
});

btn9.addEventListener ('click', () => {
    input.value += 9;
});

btn0.addEventListener ('click', () => {
    input.value += 0;
});

clear.addEventListener('click', () => {
    input.value = '';
})

plusBtn.addEventListener('click', () => {
    result += parseInt(input.value);
    input.value = '';
});

minusBtn.addEventListener('click', () => {
    result -= parseInt(input.value);
    input.value = '';
});

multipleBtn.addEventListener('click', () => {
    result *= parseInt(input.value);
    input.value = '';
});

divideBtn.addEventListener('click', () => {
    result /= parseInt(input.value);
    input.value = '';
});

equel.addEventListener('click', () => {
    input.value = result;
})