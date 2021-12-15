const nav = document.querySelector('.navigation');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');

close.style.cursor = 'pointer';

nav.addEventListener('click', function () {
    sidebar.classList.toggle('left');
});

close.addEventListener('click', function () {
    sidebar.classList.toggle('left');
})