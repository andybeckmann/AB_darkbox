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

			/**
			 * Add event listener to each .darkbox to open the darkbox overlay
			 */
			darkboxes[i].addEventListener('click', function(e, darkboxLoadPosition) {

				e.preventDefault();

				darkboxLoadPosition = e.srcElement;

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
				darkboxTemplate.innerHTML = "<div id='darkbox-top'><svg version='1.1' id='ICON-FILL-CIRCLE-X' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 53.9 53.8' style='enable-background:new 0 0 53.9 53.8;' xml:space='preserve'><path d='M26.9,0C12,0,0,12,0,26.9s12,26.9,26.9,26.9s26.9-12,26.9-26.9S41.8,0,26.9,0z M37.7,34L34,37.7l-6.9-6.9l-7.4,7.4 l-4.1-4.1l7.4-7.4l-6.9-6.9l3.7-3.7l6.9,6.9l7.4-7.4l4.1,4.1l-7.4,7.4L37.7,34z'/></svg><span>Click to close</span></div><div id='darkbox-content'><div id='darkbox-content-back'" + backButtonStatus + "><svg version='1.1' id='ICON-FILL-BOX-ARROW-LEFT' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'x='0px' y='0px' viewBox='0 0 54 54' style='enable-background:new 0 0 54 54;' xml:space='preserve'><path d='M38,0H16C7.2,0,0,7.2,0,16v22c0,8.8,7.2,16,16,16h22c8.8,0,16-7.2,16-16V16C54,7.2,46.8,0,38,0z M30.7,36l-9-9l9-9V36z'/></svg></div><div id='darkbox-content-image'><img id='darkbox-content-image-element' src='" + darkboxImageSrc + "' alt='" + darkboxCaptionText + "'><div id='darkbox-caption'>" + darkboxCaptionText + "</div></div><div id='darkbox-content-next'" + nextButtonStatus + "><svg version='1.1' id='ICON-FILL-BOX-ARROW-RIGHT' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 54 54' style='enable-background:new 0 0 54 54;' xml:space='preserve'><path d='M16,54h22c8.8,0,16-7.2,16-16V16c0-8.8-7.2-16-16-16H16C7.2,0,0,7.2,0,16v22C0,46.8,7.2,54,16,54z M23.3,18l9,9l-9,9V18z'/></svg></div></div></div>";

				document.body.appendChild(darkboxTemplate);

				/**
				 * Add event listener to navigate to previous darkbox
				 */
				document.getElementById('darkbox-content-back').addEventListener('click', function() { 

					var previousElement = darkboxLoadPosition.previousElementSibling;
					var previousElementSrc = darkboxLoadPosition.previousElementSibling.href;
					var previousElementCaption = '';

					if (darkboxLoadPosition.previousElementSibling.children[0] != undefined) {
						previousElementCaption = darkboxLoadPosition.previousElementSibling.children[0].alt;
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

					if (darkboxLoadPosition.parentElement.previousElementSibling == null) {
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
					var nextElementCaption = '';

					if (darkboxLoadPosition.nextElementSibling.children[0] != undefined) {
						nextElementCaption = darkboxLoadPosition.nextElementSibling.children[0].alt;
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

					if (darkboxLoadPosition.parentElement.nextElementSibling == null) {
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
				};
			});
		}
	}
}