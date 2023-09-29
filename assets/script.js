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

let selectedSlide = 0;
const maxSlide = slides.length - 1
const minSlide = 0

function slideContent (slide) {
	document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + slide.image)
	document.querySelector("#banner p").innerHTML = slide.tagLine
}

for (slideIndex in slides) {
	let dot = document.createElement("div")
	dot.classList.add("dot")

	let dots = document.querySelector(".dots")
	dots.appendChild(dot)
}

let dotSelected = document.querySelectorAll(".dot")
dotSelected[selectedSlide].classList.add("dot_selected")

let arrowRight = document.querySelector(".arrow_right")
let arrowLeft = document.querySelector(".arrow_left")

arrowRight.addEventListener("click", () => {
	dotSelected[selectedSlide].classList.remove("dot_selected")

	let nextSlide = null;
	if (selectedSlide === maxSlide) {
		nextSlide = minSlide 
	} else {
		nextSlide = selectedSlide + 1
	}

	const slide = slides[nextSlide]
	slideContent(slide)
	
	selectedSlide = nextSlide

	dotSelected[selectedSlide].classList.add("dot_selected")
})

arrowLeft.addEventListener("click", () => {
	dotSelected[selectedSlide].classList.remove("dot_selected")
	
	let previousSlide = null;
	if (selectedSlide === minSlide) {
		previousSlide = maxSlide
	} else {
		previousSlide = selectedSlide - 1
	}

	const slide = slides[previousSlide]
	slideContent(slide)

	selectedSlide = previousSlide

	dotSelected[selectedSlide].classList.add("dot_selected")
})