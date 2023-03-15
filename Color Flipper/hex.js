const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', "C", 'D', 'E', 'F'];

// hex color consists of #, and 6 values - numbers 0-9 colors wich represent 10-15 ()values with come from array
// set up loop (to run 6 times for each value) which will generate hex color
// target body bg color
// change the value of the color displayed

var btn = document.querySelector('#btn');
var color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexColor = '#'; //value to hold hash tag
  for (let i =0; i<6; i++){
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
};