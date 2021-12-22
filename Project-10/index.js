window.addEventListener('scroll', () => {
    const navheight = document.querySelector('.nav').getBoundingClientRect().height;
    const scrollheight = window.pageYOffset;

    if (scrollheight > navheight) {
        document.querySelector('.nav').classList.add('scrollnav')
    }
    else {
        document.querySelector('.nav').classList.remove('scrollnav')

    }
})