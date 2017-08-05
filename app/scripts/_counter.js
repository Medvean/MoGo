'use strict';

const counter = ( () => {

	let facts = document.getElementById('facts'),
	counters = document.getElementsByClassName('js-fact-number'),
	factsTop = facts.getBoundingClientRect().top;

	let startCounter = counter => {
		let start = +counter.innerHTML,
		end = +counter.getAttribute('data-count');

		let interval = setInterval( () => {
			counter.innerHTML = ++start;
			if(start === end) {
				clearInterval(interval);
			}
		}, 50);
	};

	function onScroll() {
		if(window.pageYOffset > factsTop - window.innerHeight / 2)  {
			this.removeEventListener('scroll', onScroll);
			for (let i = 0; i < counters.length; i++) {
				startCounter(counters[i]);
			}
		}
	}

	window.addEventListener('scroll', onScroll);

})();