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