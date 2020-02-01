/**
 * AB_darkbox
 * version: 1.0.0
 *
 * darkbox() - A lightbox
 */

function darkbox() {

	// If window is above 768px
	if (window.innerWidth > 768) {

		// Add click event listener to body
		document.getElementsByTagName('body')[0].addEventListener('click', function() {

			// If darkbox exists
			if (document.getElementById('darkbox') != undefined) {

				document.getElementById('darkbox').addEventListener('click', function() {

					// Target darkbox-overlay
					var darkboxOverlay = document.getElementById('darkbox');

					// Remove darkbox
					document.getElementsByTagName('body')[0].removeChild(darkboxOverlay);
				});
			}
		});

		// Select darkboxes
		var darkboxes = document.getElementsByClassName('darkbox');

		// For each darkbox
		for (var i = 0; i < darkboxes.length; i++) {

			// Add click event listener
			darkboxes[i].addEventListener('click', function(e) {

				// Hold up
				e.preventDefault();

				// Target img and its src
				var darkboxImage = this.getElementsByTagName('img');
				var darkboxImageSrc = darkboxImage[0].getAttribute('src');

				// Create darkbox with targeted img src
				var darkboxTemplate = document.createElement('div');
				darkboxTemplate.setAttribute('id', 'darkbox');
				darkboxTemplate.innerHTML = "<div class='darkbox-content'><img src='" + darkboxImageSrc + "'></div>";

				// Append new element
				document.getElementsByTagName('body')[0].appendChild(darkboxTemplate);
			});
		}
	}
}