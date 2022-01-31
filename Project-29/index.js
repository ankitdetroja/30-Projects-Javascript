const number = document.querySelector("#phonenum");

function palindrome(str) {
  let fstr = str.replace(/[^a-zA-Z0-9]/g, "");

  let temp = [];
  let rtemp = [];

  for (let i = 0; i < fstr.length; i++) {
    temp[i] = fstr[i];
  }
  rtemp = temp.reverse();
  rtemp = rtemp.toString();
  rtemp = rtemp.replace(/,/g, "");

  if (fstr.toLowerCase() === rtemp.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

document.querySelector("#check").addEventListener("click", () => {
  const result = palindrome(number.value);
  console.log(number.value);
  console.log(result);

  if (result) {
    document.querySelector(".valid").style.display = "block";
    document.querySelector(".invalid").style.display = "none";
  } else {
    document.querySelector(".invalid").style.display = "block";
    document.querySelector(".valid").style.display = "none";
  }
});
