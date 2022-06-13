
addEventListener('DOMContentLoaded', () =>
{
	let position = 0;
	const slideToShow = 1;
	const slideToscroll = 1;

	const container = document.querySelector('.main-slider__container');
	const track = document.querySelector('.main-slider__track');
	const slide = document.querySelectorAll('.main-slider__slide');
	const btnPrev = document.querySelector('.main-slider__button--prev');
	const btnNext = document.querySelector('.main-slider__button--next');
	const slideWidth = container.clientWidth / slideToShow;
	const movePosition = slideToscroll * slideWidth;
	const totalSlides = slide.length * slideWidth;


	console.log(position);
	slide.forEach((item) =>
	{
		item.style.minWidth = slideWidth;
	});
	btnNext.addEventListener('click',() =>
	{
		position -= movePosition;
		console.log(position);
		setPosition();
	});
	btnPrev.addEventListener('click',() =>
	{
		position += movePosition;
		console.log(position);
		setPosition();
		restartSlider();
	});
	function setPosition()
	{
		track.style.transform = `translateX(${position}px)`;
	}
	function restartSlider()
	{
		if(position > 0)
		{
			track.style.transform = `translateX(${position = 0}px)`;
		}
		else if(position === -totalSlides)
		{
			track.style.transform = `translateX(${position = 0}px)`;
		}
	}
});