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

let currentSlideIndex = 0;

generateDots();
updateSlide(0, currentSlideIndex)

document.querySelector('.arrow_right').addEventListener("click", () => {
	let nextSlideIndex = currentSlideIndex + 1;
	if (currentSlideIndex === (slides.length - 1)) {
		nextSlideIndex = 0 
	}

	updateSlide(currentSlideIndex, nextSlideIndex)
	currentSlideIndex = nextSlideIndex
})

document.querySelector('.arrow_left').addEventListener("click", () => {
	let previousSlideIndex = currentSlideIndex - 1
	if (currentSlideIndex === 0) {
		previousSlideIndex = (slides.length - 1)
	}

	updateSlide(currentSlideIndex, previousSlideIndex)
	currentSlideIndex = previousSlideIndex
})

function generateDots() {
	const dots = document.querySelector(".dots")
	for (slideIndex in slides) {
		let dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)

		slides[slideIndex].dotElement = dot
	}
}

function updateSlide(currentSlideIndex, newSlideIndex) {
	const currentSlideObject = slides[currentSlideIndex]
	const newSlideObject = slides[newSlideIndex]

	currentSlideObject.dotElement.classList.remove('dot_selected')
	newSlideObject.dotElement.classList.add('dot_selected')

	document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + newSlideObject.image)
	document.querySelector("#banner p").innerHTML = newSlideObject.tagLine
}