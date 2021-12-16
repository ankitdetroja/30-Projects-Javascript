const btn = document.querySelector('button');
const closebtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
    overlay.classList.toggle('hide');
})

closebtn.addEventListener('click', () => {
    overlay.classList.toggle('hide');
})
