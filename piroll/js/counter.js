var number = document.querySelector('.numbers'),
	numberTop = number.getBoundingClientRect().top,
    start = 0,
	end = this.number.dataset.num;


window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
    		this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
        		number.innerHTML = ++start;
            if(start == end) {
            	clearInterval(interval);
            }
        }, 10);
    }
});