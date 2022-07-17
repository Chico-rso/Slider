let sliderWrap = document.querySelector('.slider__wrapper');
let btnPrev = document.querySelector('.slider__btn-prev');
let btnNext = document.querySelector('.slider__btn-next');
let slides = document.querySelectorAll('.slide');
let sliderItemWidth = slides[0].offsetWidth;
let trackWidth = sliderWrap.offsetWidth * slides.length;
let counterSlide = 0;

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);


function nextSlide()
{
	if(counterSlide < slides.length - 1)
	{
		counterSlide++;
	}
	else
	{
		counterSlide = 0;
	}
	sliderWrap.style.transform = 'translateX(' + (-counterSlide * sliderItemWidth) + 'px)';
	dotsActive();
}

function prevSlide()
{
	if(counterSlide > 0)
	{
		counterSlide--;
	}
	else
	{
		counterSlide = slides.length - 1;
	}
	sliderWrap.style.transform = 'translateX(' + (-counterSlide * sliderItemWidth) + 'px)';
	dotsActive();
}


function dotsActive()
{
	let dots = document.querySelectorAll('.dot');
	for(let i = 0; i < dots.length; i++)
	{
		dots[i].classList.remove('active');
	}
	dots[counterSlide].classList.add('active');
}
dotsActive();

function dotsClick()
{
	let dots = document.querySelectorAll('.dot');
	for(let i = 0; i < dots.length; i++)
	{
		dots[i].addEventListener('click', function()
		{
			counterSlide = i;
			sliderWrap.style.transform = 'translateX(' + (-counterSlide * sliderItemWidth) + 'px)';
			dotsActive();
		});
	}
};
dotsClick();