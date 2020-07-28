/*! gmt v2.0.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/go-make-things | Credits: https://github.com/toddmotto/fluidvids */
(function () {
	'use strict';

	if (navigator && navigator.serviceWorker) {
		navigator.serviceWorker.register('/sw.js');
	}

	if (navigator.serviceWorker.controller) {
		window.addEventListener('load', function () {
			navigator.serviceWorker.controller.postMessage('cleanUp');
		});
	}

}());
