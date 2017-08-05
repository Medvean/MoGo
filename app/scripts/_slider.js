const slider = ( () => {
	'use strict';

	const sliders = help.getArray('.quote-slider');

	sliders.forEach(elem => bindEvent(elem));

	function bindEvent(item) {
		const slide = item.querySelector('.quote-slide'),
					slideWidth = parseFloat(slide.firstElementChild.getBoundingClientRect().width),
					numberSlides = slide.childElementCount,
					nav = item.querySelector('.quote-slider_nav');

		let median = Math.floor(numberSlides/2);

		let startImage,
				currentImage,
				prevImage,
				imagesLength,
				images;

		let setPosition = arg =>
			slide.style.marginLeft = (arg * -slideWidth) + 'px';

		slide.startPosition = setPosition(median);


		if (item.classList.contains('testi-slider')) {
			images = help.getArray('.testi-slider_pic-mask', item);
			imagesLength = images.length;
			startImage = images[median];

			startImage.style.opacity = '1';
		}

		nav.addEventListener('click', moveSlide, true);

		function moveSlide(event) {
			event.stopPropagation();

			const currentBtn = event.target;

			if (currentBtn.tagName != 'BUTTON')
				return;

			const inverseBtn = currentBtn.nextElementSibling || currentBtn.previousElementSibling,
						isPrev = currentBtn.classList.contains('prev-btn'),
						isHide = inverseBtn.classList.contains('hide');

			prevImage = currentImage;

			if (isHide)
				inverseBtn.classList.remove('hide');

			if (isPrev)
				median++;
			else
				median--;

			if (median === (numberSlides - 1) || median === 0) {
				currentBtn.classList.add('hide');
			}

			slide.position = setPosition(median);

			if (images !== undefined) {
				if (prevImage !== undefined) {
					prevImage.style.opacity = '0';
				}

				currentImage = images[median];

				startImage.style.opacity = '0';
				currentImage.style.opacity = '1';
			}
		}
	}
})();