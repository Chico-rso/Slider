
addEventListener('DOMContentLoaded', ()=> {
	let positon = 0;
	const slideToShow = 1;
	const slideToscroll = 1;

	const container = document.querySelector('.main-slider__container');
	const track = document.querySelector('.main-slider__track');
	const slide = document.querySelectorAll('.main-slider__slide');
	const btnPrev = document.querySelector('.main-slider__button--prev');
	const btnNext = document.querySelector('.main-slider__button--next');
	const slideWidth = container.clientWidth / slideToShow;
	const movePosition = slideToscroll * slideWidth;
	console.log(movePosition);

	const totalSlides = slide.length * slideWidth;

	slide.forEach((item) =>
	{
		item.style.minWidth = slideWidth;
	});
	btnNext.addEventListener('click',() =>
	{
		positon -= movePosition;
		setPosition();
		checkButtons();
	});
	btnPrev.addEventListener('click',() =>
	{
		positon += movePosition;
		setPosition();
		checkButtons();
	});
	function setPosition()
	{
		track.style.transform = `translateX(${positon}px)`
	}
	function restartSlider()
	{
		
	}
});