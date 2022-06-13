
addEventListener('DOMContentLoaded', () =>
{
	const slideToShow = 1;
	const slideToscroll = 1;

	const container = document.querySelector('.main-slider__container');
	const track = document.querySelector('.main-slider__track');
	const slides = document.querySelectorAll('.main-slider__slide');
	const btnPrev = document.querySelector('.main-slider__button--prev');
	const btnNext = document.querySelector('.main-slider__button--next');
	const slideWidth = container.clientWidth / slideToShow;
	const movePosition = slideToscroll * slideWidth;
	const totalSlides = slides.length * slideWidth;
	let currentIndexSlide = 0;

	slides.forEach((item) =>
	{
		item.style.minWidth = slideWidth;
	});
	btnNext.addEventListener('click',() =>
	{
		if(currentIndexSlide === slides.length - 1)
		{
			currentIndexSlide = - 1;
		}
		else
		{
			currentIndexSlide++;
			setPosition(currentIndexSlide);
		}
	});
	btnPrev.addEventListener('click',() =>
	{
		if(currentIndexSlide - 1 === -1)
		{
			currentIndexSlide = slides.length;
		}
		else
		{
			currentIndexSlide--;
			setPosition(currentIndexSlide);
		}
	});
	function setPosition(index)
	{
		let position = 0;
		position = (index * slideWidth) * -1;
		track.style.transform = `translateX(${position}px)`;
	}
});