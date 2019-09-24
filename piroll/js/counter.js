
/*function counter(time){
	let start = 0;
	let progressElement = document.querySelector('.numbers');
	let num = progressElement.dataset.num;
	let intervalId = setInterval(function(){
		if(start>num){
			clearInterval(intervalId);
		}else{
			progressElement.value = start;
		}
		start++;
	}, time);
}

counter(100);*/

var number = document.querySelector('.numbers'),
	numberTop = number.getBoundingClientRect().top,
    start = 0,
    //end = 300;
	end = number.dataset.num;


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