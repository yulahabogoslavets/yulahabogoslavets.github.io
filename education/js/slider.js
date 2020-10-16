const slides = document.querySelector('.slider-items').children,
    nextSlide = document.querySelector('.right-slide'),
    prevSlide = document.querySelector('.left-slide'),
    totalSlides = slides.length;
let index = 0;

nextSlide.onclick = function (){
    next('next');
    //resetTimer();
}
prevSlide.onclick = function (){
    next('prev');
    //resetTimer();
}

function next(direction){
    if(direction ==='next'){
        index++;
        if(index===totalSlides){
            index=0;
        }
    } else{
        if(index===0){
            index=totalSlides-1;
        } else {
            index--;
        }
    }

    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

/*autoplay slider
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay,5000);
}

function autoPlay(){
    next('next');
}

let timer = setInterval(autoPlay,5000);*/