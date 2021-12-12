const span = document.querySelector('span');
const button = document.querySelector('button');
let randomString = '';
const abc = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function random() {
    randomString = '';
    for (let i = 0; i < 6; i++) {
        let str = abc[Math.floor(Math.random() * abc.length)];
        randomString += str;
    }
    return randomString;
}

button.addEventListener('click', function () {
    let rc = '#' + random();
    document.body.style.backgroundColor = rc;
    span.innerText = rc;
})
