let currentSlide = 0;
let slideToScroll = 1;
let slideToShow = 1;

let sliderWrap = document.querySelector('.slider__wrapper');
let btnPrev = document.querySelector('.slider__btn-prev');
let btnNext = document.querySelector('.slider__btn-next');
let slides = document.querySelectorAll('.slide');

// create function for slider
function slider(slideToScroll, slideToShow)
{
	let itemWidth = slides[0].offsetWidth;
	let items = slides.length;
	let sliderWidth = itemWidth * items;
	sliderWrap.style.width = sliderWidth + 'px';
	let position = 0;

	btnPrev.addEventListener('click', function ()
	{
		position += itemWidth * slideToScroll;
		if (position >= 0)
		{
			position = 0;
		}
		sliderWrap.style.transform = 'translateX(' + position + 'px)';
	});

	btnNext.addEventListener('click', function ()
	{
		position -= itemWidth * slideToScroll;
		if (position <= -(sliderWidth - itemWidth * slideToShow))
		{
			position = -(sliderWidth - itemWidth * slideToShow);
		}
		sliderWrap.style.transform = 'translateX(' + position + 'px)';
	}
	);
}




// btnNext.addEventListener('click', nextSlide);
// btnPrev.addEventListener('click', prevSlide);



