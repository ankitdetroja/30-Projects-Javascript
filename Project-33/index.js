const button = document.querySelector('button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const output = document.querySelector('#output');

button.addEventListener('click', function () {
    console.log('h');
    let rolls = [roll(6), roll(6)];
    console.log(rolls);
    let temp;
    if (rolls[0] == rolls[1]) { temp = 'It was a Draw'; }
    else if (rolls[0] > rolls[1]) { temp = 'Player 1 Win!' }
    else { temp = 'Player 2 Win!' }
    player1.innerHTML = rolls[0];
    player2.innerHTML = rolls[1];
    output.innerHTML = temp;


})

function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1;
    let n = 9855 + rNumber;
    let char = '&#' + n + ';';
    return rNumber + ' ' + char;
}
