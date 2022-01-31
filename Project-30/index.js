const number = document.querySelector("#phonenum");

function telephoneCheck(str) {
  const format0 = /^\d{10}$/;
  const format1 = /^\d{3}\-\d{3}\-\d{4}$/;
  const format2 = /^\(\d{3}\)\d{3}\-\d{4}$/;
  const format3 = /^\(\d{3}\) \d{3}\-\d{4}$/;
  const format4 = /^\d{3} \d{3} \d{4}$/;
  const format5 = /^1 \d{3} \d{3} \d{4}$/;
  const format6 = /^1 \(\d{3}\) \d{3}\-\d{4}$/;
  const format7 = /^1\(\d{3}\)\d{3}\-\d{4}$/;
  const format8 = /^1 \d{3}\-\d{3}\-\d{4}$/;

  return (
    format0.test(str) ||
    format1.test(str) ||
    format2.test(str) ||
    format3.test(str) ||
    format4.test(str) ||
    format5.test(str) ||
    format6.test(str) ||
    format7.test(str) ||
    format8.test(str)
  );
}

document.querySelector("#check").addEventListener("click", () => {
  const result = telephoneCheck(number.value);
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
