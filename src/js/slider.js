const $ = require('jquery'); 

const slider = function(){
    const slides = document.querySelectorAll('.works__slides-item');
    const slidesText = document.querySelectorAll('.works__slides-add');
    const nav = document.getElementsByClassName('works-slide__nav');
    const navItems = document.getElementsByClassName('works-row__circle');
    let current = 0;
    
    if(slides.length !== 0){
        function goToSlide(n){
            slides[current].className = 'works__slides-item';
            slidesText[current].className = 'works__slides-add';
            navItems[current].className = 'works-row__circle';
            current = current + n;
            if (current > 2){
                current = 0
            }
            if (current < 0){
                current = 2
            }
            slides[current].className = 'works__slides-item works__slides-item_active';
            slidesText[current].className = 'works__slides-add works__slides-add_active';
            navItems[current].className = 'works-row__circle works-row__circle_active';
        }
        $('.btn-next').on('click', function(){
            goToSlide(1);
        })
        $('.btn-prev').on('click', function(){
            goToSlide(-1);
        })
        $('.works-row__circle').on('click', function(){
            let indexActive = $(this).index();
            slides[current].className = 'works__slides-item';
            slidesText[current].className = 'works__slides-add';
            navItems[current].className = 'works-row__circle';
            current = indexActive;
            if (current > 2){
                current = 0
            }
            if (current < 0){
                current = 2
            }
            slides[current].className = 'works__slides-item works__slides-item_active';
            slidesText[current].className = 'works__slides-add works__slides-add_active';
            navItems[current].className = 'works-row__circle works-row__circle_active';
        })
                /////// slideInterval
        let setIntFun = function(){
            goToSlide(1);
        }
        setInterval(setIntFun, 5000);
    }
}

module.export = slider;
