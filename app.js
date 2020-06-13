const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
	// get a random number between 0 and 3
	const randomNumber = getRandomNumber(); //But here I'm hardcodig this
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random()*colors.length); /*Because random only generates
	 numbers between a and 1.*/
	 /*We need Math.floor in order to round the generated numbers to integers*/
}