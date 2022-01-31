const paragraph = document.querySelector("textarea[name=paragraph]");
const emails = document.querySelector("textarea[name=emails]");
const button = document.querySelector("button");
const count = document.querySelector(".count");

let earry = [];

button.addEventListener("click", function () {
  let temp = paragraph.value;
  let regex = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]+)/gi;
  let emaildata = temp.match(regex);
  let holder = [];

  for (let x = 0; x < emaildata.length; x++) {
    if (holder.indexOf(emaildata[x]) == -1) {
      holder.push(emaildata[x]);
    }
  }

  emails.value = holder;
  count.innerText = holder.length;
});
