const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const box = document.querySelectorAll('.box');
let counter = 0;

box.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
})

next.addEventListener('click', function () {
    counter++;
    crousal();
});

prev.addEventListener('click', function () {
    counter--;
    crousal();
})

function crousal() {

    if (counter < 0) {
        counter = 0;
    }
    if (counter < box.length - 1) {
        next.style.display = 'inline-block';
    } else {
        next.style.display = 'none';
    }
    if (counter > 0) {
        prev.style.display = 'inline-block';
    } else {
        prev.style.display = 'none';
    }

    box.forEach(item => {
        item.style.transform = `translateX(-${counter * 100}%)`
    })
}

prev.style.display = 'none';