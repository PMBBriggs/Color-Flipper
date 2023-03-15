const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025"
];

var btn = document.querySelector("#btn");
var color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click",() => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

// let bgColor = colors[randomNumber]