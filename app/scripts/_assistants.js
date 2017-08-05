const help = ( () => {
	'use strict';

	function getStyles(elem) {
		return window.getComputedStyle( elem, null );
	}

	//convert NodeList to Array
	function getArray(selector, context = document) {
		const elements  =  context.querySelectorAll(selector);
		return Array.prototype.slice.call(elements);
	}

	return {
		getStyles: getStyles,
		getArray: getArray
	}

})();