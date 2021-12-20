const ol = document.querySelector('.ol');
const video = document.querySelector('video');


ol.addEventListener('click', () => {
    ol.classList.toggle('add');
    if (ol.classList.contains('add')) {
        video.pause();
    }
    else {
        video.play();
    }
})
