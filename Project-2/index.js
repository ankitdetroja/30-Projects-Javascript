const cnt = document.querySelector('.cnt');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let counter = 0;

reset.addEventListener('click', function () {
    counter = 0;
    cnt.innerText = '0';
})

increase.addEventListener('click', function () {
    counter++;
    cnt.innerText = counter;
})

decrease.addEventListener('click', function () {
    counter--;
    cnt.innerText = counter;
})