const pops = document.querySelectorAll(".popup");
const popmsg = document.querySelector(".pmsg");
const popdiv = document.querySelector(".popupmsg");
const clb = document.querySelector(".clsbtn");
const sm = document.querySelector(".sigmabtn");
let audio = new Audio("sigma.mp3");

for (let i = 0; i < pops.length; i++) {
  pops[i].addEventListener("click", function () {
    let msg = this.getAttribute("data-msg");
    showpopup(msg);
  });
}

sm.addEventListener("click", function () {
  {
    audio.play();
  }
});

function showpopup(msg) {
  popdiv.classList.remove("hide");
  popmsg.innerText = msg;
}

clb.addEventListener("click", function () {
  popdiv.classList.add("hide");
  audio.pause();
});
