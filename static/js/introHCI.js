'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$(".project").click(projectClick);
	$("#testjs").click(jsButtonClick);
}

function projectClick(e){
	console.log("Project clicked")
	e.preventDefault();

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");

       $('.project').fadeOut();
    }
}

function jsButtonClick(e){
	console.log("Test Javascript button clicked")
	e.preventDefault();

	$(".jumbotron h1").text("Jumbotron header changed");
	$("#testjs").text("Please wait...");

	$(".jumbotron p").toggleClass("active");
}