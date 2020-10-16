class Slider {
    constructor({container = null,
                    btns = null,
                    next = null,
                    prev = null,
                    activeClass = '',
                    animate,
                    autoplay } = {}){
        this.container = document.querySelector(container);
        try{this.slides = this.container.children;}catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}

class MiniSlider extends Slider{
    constructor(container, next, prev){
        super(container, next, prev);
    }

    init(){
        console.log(this.prev, this.next, this.container);
    }
}

const showUpSlider = new MiniSlider({
    container: '.showup_content-slider',
    next: '.card_controls-arrow'
})
showUpSlider.init();