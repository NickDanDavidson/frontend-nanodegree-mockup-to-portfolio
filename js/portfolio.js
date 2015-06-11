// This is an original implementation of modal functionality inspired by Twitter Bootstrap.
// It is not yet as fancy as Twitter's, but I will continue working out the kinks.

// These HTML vars are used to store chunks of HTML that are to be inserted into the DOM structure
// dynamically when a picture is clicked.
var modalHTML = '<div class="modal-container"><div class="modal"><div class="modal-inside">' +
				'<div class="modal-header"></div><div class="close">X</div></div></div></div>';

var gameHTML = '<div class="modal-info">With this project, I built an arcade game inspired by' +
			   ' the classic Frogger using the HTML5 Canvas and Object-Oriented JavaScript' +
			   ' programming principles.</div>';

var mapHTML = '<div class="modal-info">In this project, I built a single-page app that utilized' +
			  ' the Google Maps API and the Wikipedia API to request information for places in' +
			  ' my neighborhood.</div>';

var optimizationHTML = '<div class="modal-info">This project had two components. I was given' +
					   ' a portfolio that the instructor had built and was instructed to optimize' +
					   ' its loading speed using Google\'s PageSpeed Insights and best practices.' +
					   ' I was then given a fake pizza business website and instructed to optimize' +
					   ' its frame speed to under 60fps (frames per second), utilizing knowledge' +
					   ' and Chrome DevTools measurements for scripting, layout, painting, and' +
					   ' compositing.</div>';

var resumeHTML = '<div class="modal-info">In this project I had the opportunity to build an' +
				 ' interactive resume application that showcases both my resume and ability to' +
				 ' interact with the DOM via JavaScript.</div>';

var testsHTML = '<div class="modal-info">For this project I was given a feed reader application' +
				' and was tasked with writing Jasmine tests to ensure the functionality of the app' +
				' works as anticipated.</div>';

var wikiHTML = '<div class="modal-info">I built a wiki where users can sign in, edit pages,' +
			   ' and view pages. I utilized Google AppEngine, Datastore, and Python\'s Jinja2' +
			   ' templating framework.</div>';

var projects = ['ARCADE GAME CLONE', 'NEIGHBORHOOD MAP', 'WEBSITE OPTIMIZATION', 'INTERACTIVE RESUME',
				'FEED READER TESTING', 'MY WIKI'];

var main = function() {
	$('.project img').click(function(e) {

		// Retrieve the clicked elements info to find associated project name
		var self = e.target,
			sibling = self.nextElementSibling,
			caption = sibling.innerHTML;

		$('body').append(modalHTML);
		$('.modal-header').html(caption);

		// Based on which project, insert the desired HTML
		if (caption === projects[0]) {
			$('.modal-inside').append(gameHTML);
		}
		if (caption === projects[1]) {
			$('.modal-inside').append(mapHTML);
		}
		if (caption === projects[2]) {
			$('.modal-inside').append(optimizationHTML);
		}
		if (caption === projects[3]) {
			$('.modal-inside').append(resumeHTML);
		}
		if (caption === projects[4]) {
			$('.modal-inside').append(testsHTML);
		}
		if (caption === projects[5]) {
			$('.modal-inside').append(wikiHTML);
		}
	});

	// Close modal by clicking X
	$('body').on('click', '.close', function(e) {
		$(this).parents('div').remove();
	});
};

$(document).ready(main);