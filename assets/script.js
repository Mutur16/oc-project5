const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let selectedSlide = null;
for (slide of slides) {
	let dot = document.createElement("div")
	dot.classList.add("dot")

	let dots = document.querySelector(".dots")
	dots.appendChild(dot)

	if (selectedSlide === null) {
		dot.classList.add("dot_selected")
		selectedSlide = slide
	}
}

let arrowRight = document.querySelector(".arrow_right")
let arrowLeft = document.querySelector(".arrow_left")

arrowRight.addEventListener("click", () => {
	console.log("okR")
})

arrowLeft.addEventListener("click", () => {
	console.log("okL")
})