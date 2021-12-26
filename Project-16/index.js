const btn = document.querySelector('button');
const content = document.querySelector('.joke');
const url = "https://api.icndb.com/jokes/random?escape=javascript";
const chuck = document.querySelector('.chuckimg');
btn.addEventListener('click', async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.value.joke);
        displayjoke(data.value.joke);
    } catch (error) {
        console.log('oops..something went wrong', error);
    }
})

function displayjoke(joke) {
    chuck.classList.add('shakechuck')
    content.innerText = joke;

    setTimeout(() => {
        chuck.classList.remove('shakechuck');
    }, 1000);
}