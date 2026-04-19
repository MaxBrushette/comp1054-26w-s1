// STEP 6: Nab all the SUMMARY elements
const details = document.querySelectorAll("details");

// STEP 7: Loop through the element array to add an event listener, and reference a function called closeOpenDetails
details.forEach((detail) => {
	detail.addEventListener("toggle",(event)=>{
// STEP 8a: Create the closeOpenDetails() function
		if(event.target.open){
	// STEP 8b: Loop through the summaries array again
			details.forEach((detail) => {
		// STEp 8c: Check to make sure the DETAILS element is not the parent of the SUMMARY that was clicked 
				if(detail !== event.target){
					detail.removeAttribute("open");
				}

// STEP 9: Check in the browser to make sure there are no errors - use the console, then proceed to the CSS for the final step.
			});
		};
	});
});