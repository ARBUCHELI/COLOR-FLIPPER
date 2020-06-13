const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
	// get a random number between 0 and 3
	const randomNumber = 2; //But here I'm hardcodig this
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});