/**
 * AB_darkbox
 * version: 1.0.0
 *
 * darkbox() - A lightbox with navigation and captions
 */

function darkbox() {

	if (window.innerWidth > 768) {

		var darkboxes = document.getElementsByClassName('darkbox');

		for (var i = 0; i < darkboxes.length; i++) {

			var darkboxLoadPosition = i;

			/**
			 * Add event listener to each .darkbox to open the darkbox overlay
			 */
			darkboxes[i].addEventListener('click', function(e, darkboxLoadPosition) {

				e.preventDefault();

				var darkboxLoadPosition = e.srcElement;

				var darkboxImage = this.getElementsByTagName('img');
				var darkboxImageSrc = darkboxImage[0].src;
				var darkboxCaptionText = darkboxImage[0].alt;

				var backButtonStatus = '',
					nextButtonStatus = '';

				if (this.previousElementSibling.classList.contains('darkbox') == false) {
					backButtonStatus = 'class="inactive"';

				} else if (this.nextElementSibling.classList.contains('darkbox') == false) {
					nextButtonStatus = ' class="inactive"';
				}

				var darkboxTemplate = document.createElement('div');
				darkboxTemplate.setAttribute('id', 'darkbox');
				darkboxTemplate.innerHTML = "<div id='darkbox-top'><span>&times;</span><span>Click to close</span></div><div id='darkbox-content'><div id='darkbox-content-back'" + backButtonStatus + "><span>▸</span></div><div id='darkbox-content-image'><img id='darkbox-content-image-element' src='" + darkboxImageSrc + "' alt='" + darkboxCaptionText + "'><div id='darkbox-caption'>" + darkboxCaptionText + "</div></div><div id='darkbox-content-next'" + nextButtonStatus + "><span>▸</span></div></div></div>";

				document.body.appendChild(darkboxTemplate);

				/**
				 * Add event listener to navigate to previous darkbox
				 */
				document.getElementById('darkbox-content-back').addEventListener('click', function() { 

					var previousElement = darkboxLoadPosition.previousElementSibling;
					var previousElementSrc = darkboxLoadPosition.previousElementSibling.href;

					if (darkboxLoadPosition.previousElementSibling.children[0] != undefined) {
						var	previousElementCaption = darkboxLoadPosition.previousElementSibling.children[0].alt;
					} else {
						return;
					}

					darkboxImageSrc = previousElementSrc;
					darkboxCaptionText = previousElementCaption;

					var oldImage = document.getElementById('darkbox-content-image-element');
					document.getElementById('darkbox-content-image-element').parentNode.removeChild(oldImage);

					var oldCaption = document.getElementById('darkbox-caption');
					document.getElementById('darkbox-caption').parentNode.removeChild(oldCaption);

					var darkboxContentImage = document.getElementById('darkbox-content-image');
					darkboxContentImage.insertAdjacentHTML("afterbegin", "<img id='darkbox-content-image-element' src='" + darkboxImageSrc + "' alt='" + darkboxCaptionText + "'><div id='darkbox-caption'>" + darkboxCaptionText + "</div>");

					darkboxLoadPosition = darkboxLoadPosition.previousElementSibling;

					if (darkboxLoadPosition.previousElementSibling.classList.contains('darkbox') == false) {
						backButtonStatus = 'class="inactive"';
						document.getElementById('darkbox-content-back').classList.add('inactive');
					}

					document.getElementById('darkbox-content-next').classList.remove('inactive');
				});

				/**
				 * Add event listener to navigate to next darkbox
				 */
				document.getElementById('darkbox-content-next').addEventListener('click', function() { 

					var nextElement = darkboxLoadPosition.nextElementSibling;
					var nextElementSrc = darkboxLoadPosition.nextElementSibling.href;

					if (darkboxLoadPosition.nextElementSibling.children[0] != undefined) {
						var	nextElementCaption = darkboxLoadPosition.nextElementSibling.children[0].alt;
					} else {
						return;
					}

					darkboxImageSrc = nextElementSrc;
					darkboxCaptionText = nextElementCaption;

					var oldImage = document.getElementById('darkbox-content-image-element');
					document.getElementById('darkbox-content-image-element').parentNode.removeChild(oldImage);

					var oldCaption = document.getElementById('darkbox-caption');
					document.getElementById('darkbox-caption').parentNode.removeChild(oldCaption);

					var darkboxContentImage = document.getElementById('darkbox-content-image');
					darkboxContentImage.insertAdjacentHTML("afterbegin", "<img id='darkbox-content-image-element' src='" + darkboxImageSrc + "' alt='" + darkboxCaptionText + "'><div id='darkbox-caption'>" + darkboxCaptionText + "</div>");

					darkboxLoadPosition = darkboxLoadPosition.nextElementSibling;

					if (darkboxLoadPosition.nextElementSibling.classList.contains('darkbox') == false) {
						nextButtonStatus = 'class="inactive"';
						document.getElementById('darkbox-content-next').classList.add('inactive');
					}

					document.getElementById('darkbox-content-back').classList.remove('inactive');
				});				

				/**
				 *	Add event listner to close darkbox when the close button is clicked
				 */
				document.getElementById('darkbox-top').addEventListener('click', function() {

					var darkboxOverlay = document.getElementById('darkbox');

					if (document.getElementById('darkbox') != null) {
						document.body.removeChild(darkboxOverlay);
					}
				});

				/**
				 * Close darkbox when ESC is pressed
				 */
				window.onkeydown = function (e) {

					if(e.keyCode == 27) {

						var darkboxOverlay = document.getElementById('darkbox');
						document.body.removeChild(darkboxOverlay);
				    }
				}
			});
		}
	}
}