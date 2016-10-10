(function() {

	// Declaring carimages so they can be used

	var websiteImages = document.querySelector(".websiteImages");

	// Declaring the variable car images onclicked

	websiteImages.addEventListener("click", function(e) {

		// Gets the source of the click

		if(e.target.tagName === "IMG") {

			// Creates a new element, which is a div/span and assigns it to a variable

			var overlay = document.createElement("div");

			var closeButton = document.createElement("span");

			// Assigns id to newly created div

			overlay.id = "overlay";
			
			closeButton.id = "closeButt"

			// Append overlay to body

			document.body.appendChild(overlay);

			document.body.appendChild(closeButton);

			// Get image source

			var imageSource = e.target.src;

			// Create image

			var popUpImage = document.createElement("img");
			popUpImage.id = "popimage";
			popUpImage.src = imageSource;

			// Append image to the overlay
			closeButton.appendChild(popUpImage);
			overlay.appendChild(popUpImage);

			popUpImage.addEventListener('click', function() {

				if(overlay) {

					overlay.parentElement.removeChild(overlay);
					closeButton.parentElement.removeChild(closeButton);

				}

			})
			
			closeButton.addEventListener('click', function() {
				
					overlay.parentElement.removeChild(overlay);
					closeButton.parentElement.removeChild(closeButton);
					
			})
			
		}


	});

}());








/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show2');
      }
    }
  }
}
