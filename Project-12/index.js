const countdown = () => {
    const countDate = new Date('1 Jan, 2022 00:00:00').getTime();
    const now = new Date();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textday = Math.floor(gap / day);
    const texthour = Math.floor((gap % day) / hour);
    const textminute = Math.floor((gap % hour) / minute);
    const textsecond = Math.floor((gap % minute) / second);

    document.querySelector('.daystimer').innerText = textday;
    document.querySelector('.hourstimer').innerText = texthour;
    document.querySelector('.minstimer').innerText = textminute;
    document.querySelector('.secstimer').innerText = textsecond;

}

setInterval(countdown, 1000);