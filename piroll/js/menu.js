let hamburger = document.querySelector('.menu-mob');
let menu = document.querySelector('nav');

	const toggleMenu = function(){
		menu.classList.toggle('open');
	}

	hamburger.addEventListener('click', function(e) {
		e.stopPropagation();

		toggleMenu();
	});


document.addEventListener('click', function(e) {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains('open');

  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});



// Get the container element
var btnContainer = document.querySelector(".nav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu-elem");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}