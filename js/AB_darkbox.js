/**
 * AB_darkbox
 * version: 1.0.0
 *
 * darkbox() - A lightbox
 */

function darkbox() {

	// If window is above 768px
	if (window.innerWidth > 768) {

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
				darkboxTemplate.innerHTML = "<div class='darkbox-content'><span>&times;</span> <span>Click to close</span><img src='" + darkboxImageSrc + "'></div>";

				// Append new element
				document.body.appendChild(darkboxTemplate);
			});
		}

		// Add click event listener to body
		document.body.addEventListener('click', function() {

			// If darkbox exists
			if (document.getElementById('darkbox') != undefined) {

				// Add event listener to darkbox
				document.getElementById('darkbox').addEventListener('click', function() {

					// Target darkbox-overlay
					var darkboxOverlay = document.getElementById('darkbox');

					// Remove darkbox
					document.body.removeChild(darkboxOverlay);
				});

				// On any key press
				window.onkeydown = function (e) {
					
					// If escape key
					if(e.keyCode == 27) {

				        // Target darkbox-overlay
						var darkboxOverlay = document.getElementById('darkbox');

						// Remove darkbox
						document.body.removeChild(darkboxOverlay);
				    }
				}
			}
		});
	}
}