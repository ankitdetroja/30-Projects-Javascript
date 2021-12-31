let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBorad_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const smallUserWord = 'user'.fontsize(3).sub();
const smallComputerWord = 'computer'.fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function converToWord(word) {
    if (word === 'r') return "Rock";
    if (word === 'p') return "Paper";
    return "Scissor";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerText = userScore;
    result_div.innerHTML = `${converToWord(user)}${smallUserWord} beats ${converToWord(computer)}${smallComputerWord}. You Win...🔥`;
}

function loss(user, computer) {
    computerScore++;
    computerScore_span.innerText = computerScore;

    result_div.innerHTML = `${converToWord(user)}${smallUserWord} loses to ${converToWord(computer)}${smallComputerWord}. You lost...💩`;
}

function draw(user, computer) {
    result_div.innerHTML = `${converToWord(user)}${smallUserWord} equals ${converToWord(computer)}${smallComputerWord}. Drawww...`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            loss(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'))
    paper_div.addEventListener('click', () => game('p'))
    scissor_div.addEventListener('click', () => game('s'))
}

main();