const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //This array is going to be used to generate random hex colors
// #f15025 Format of hex colors
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
let hexColor = '#';
for(let i = 0; i < 6; i++) {
	hexColor += hex[getRandomNumber()] //Here I'm hardcoding, to generate a black color.
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})

function getRandomNumber() {
	return Math.floor(Math.random()*hex.length);
}