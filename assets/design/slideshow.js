let slideIndex = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
// add more "1" to the array if you need more slideshows


// arrow controls
function plusSlides(n,slideshowIndex) {
	showSlides(slideIndex[slideshowIndex] += n,slideshowIndex);
}

function showSlides(n,slideshowIndex) {

	// select the right slideshow
	let classname = "mySlides" + slideshowIndex;
	let slides = document.getElementsByClassName(classname);
	
	// go to first slide when reach end
	if (n > slides.length) {slideIndex[slideshowIndex] = 1}
	// go to last slide when going back from 1st slide
	if (n < 1) {slideIndex[slideshowIndex] = slides.length}

	// hide all slides
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	// only display selected slide
	slides[slideIndex[slideshowIndex] - 1].style.display = "block";
}
