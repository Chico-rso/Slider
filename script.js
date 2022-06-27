
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
	let currentIndexSlide = 0;

	slides.forEach((item) =>
	{
		item.style.minWidth = slideWidth;
	});
	btnNext.addEventListener('click', function()
	{
		currentIndexSlide++;
		if (currentIndexSlide >= slides.length)
		{
			currentIndexSlide = 0;
		}
		trackTransform(currentIndexSlide);
	})
	btnPrev.addEventListener('click', function()
	{
		currentIndexSlide--;
		if (currentIndexSlide < 0)
		{
			currentIndexSlide = slides.length - 1;
		}
		trackTransform(currentIndexSlide);
	})
	function trackTransform(index)
	{
		track.style.transform = `translateX(-${index * movePosition}px)`;
		activeDot(currentIndexSlide);
	}

	function initDots()
	{
		const dots = document.querySelectorAll('.main-slider__dot');
		dots.forEach((item, index) =>
		{
			item.addEventListener('click', function()
			{
				currentIndexSlide = index;
				trackTransform(currentIndexSlide);
			})
		})
	}
	initDots();

	let activeDot = function(indexCur)
	{
		const dots = document.querySelectorAll('.main-slider__dot');
		dots.forEach((item, index) =>
		{
			console.log(index);
			console.log('cur', indexCur);
			if (index === indexCur)
			{
				item.classList.add('active');
			}
			else
			{
				item.classList.remove('active');
			}
		})
	}
	activeDot(currentIndexSlide);
});