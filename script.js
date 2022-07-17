let sliderWrap = document.querySelector('.slider__wrapper');
let btnPrev = document.querySelector('.slider__btn-prev');
let btnNext = document.querySelector('.slider__btn-next');
let slides = document.querySelectorAll('.slide');
let sliderItemWidth = slides[0].offsetWidth;
let trackWidth = sliderWrap.offsetWidth * slides.length;


let currentSlide = 0;
console.log(slides);



btnNext.addEventListener('click', function() {
	console.log(currentSlide);
	currentSlide++;
	if (currentSlide >= slides.length - 1) {
		currentSlide = -1;
	}
	sliderWrap.style.transform = 'translateX(' + (-currentSlide * sliderItemWidth) + 'px)';
});
btnPrev.addEventListener('click', function() {
	currentSlide--;
	console.log(currentSlide);
	if (currentSlide <= -slides.length + 1) {
		currentSlide = slides.length - 1;
	}
	sliderWrap.style.transform = 'translateX(' + (-currentSlide * sliderItemWidth) + 'px)';
});