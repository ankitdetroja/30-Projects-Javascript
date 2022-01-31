const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const input1 = document.querySelector("input");
  let tip = (input1.value * 0.15).toFixed(2);
  const head = document.querySelector("h3");
  head.innerText = `Your Tip: ${tip} on Bill: ${input1.value}`;
});
