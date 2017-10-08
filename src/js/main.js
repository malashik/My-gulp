'use strict'

/////   anim 3d  
$(document).ready(function(){
    $('.autorization').on('click', function() {
        
        if($('.welcom-wrapper').hasClass('animation')){
                $('.welcom-wrapper').removeClass('animation');
                $('.welcom-wrapper').addClass('anti-animation');
        } else {
                $('.welcom-wrapper').removeClass('anti-animation');
                $('.welcom-wrapper').addClass('animation');
        }
    })
})
//////    anim blog-slider
$(document).ready(function(){
    $('.circle-nav').on('click', function(){
        console.log('click')
        $('.blog-nav__wrap').toggleClass('blog-nav__wrap_active');
    })
})

//////// blog-nav
const menu = document.querySelector(".blog .blog-nav");
const wrap = document.querySelector(".blog .blog-nav__wrap");

document.addEventListener('scroll', function (e) {
    console.log(outerWidth);
    if(outerWidth>768){
        if (wrap.getBoundingClientRect().top<20){
            menu.classList.remove('blog-nav_fixed');        
            menu.classList.add('blog-nav_fixed');
        } 
        if (wrap.getBoundingClientRect().top>20){
            menu.classList.remove('blog-nav_fixed');
        }
    }
    if(outerWidth<480){
        menu.classList.remove('blog-nav_fixed');
    }
})

///////// hamburger
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger_active');
})

//// slider
const slider = document.getElementsByClassName('works__slides');
const slides = document.querySelectorAll('.works__slides-item');
const slideActive = document.getElementsByClassName('.works__slides-item_active');
const prev = document.getElementsByClassName('btn-prev');
// const next = document.getElementsByClassName('btn-next');
const nav = document.getElementsByClassName('works-slide__nav');
const navItems = document.getElementsByClassName('works-row__circle');

let current = 0;
let offset0 = 410;
console.log(slides);

function goToSlide(n){
    slides[current].className = 'works__slides-item';
    navItems[current].className = 'works-row__circle';
    
    

    current = current + n;
    if (current > 2){
        current = 0
    }
    if (current < 0){
        current = 2
    }
    // let offset = n * offset0 + 'px';
    // slides[navItemActive].css("transform: translateX(410px)");
    slides[current].className = 'works__slides-item works__slides-item_active';
    navItems[current].className = 'works-row__circle works-row__circle_active';
}

// next.onclick = function(){
//     // goToSlide(navItemActive + 1);
// }
// next.addEventListener('click', function() {
    
//     console.log('next')
// })
// prev.onclick = function(){
//     goToSlide(navItemActive - 1);
//     console.log('prev');
// }



$('.btn-next').on('click', function(){
    

    goToSlide(1);
    // slides[navItemActive].hasClass('works__slides-item_active');
    // navItemActive +=1;
    // slides[navItemActive].addClass('works__slides-item_active');
    console.log('next');
    console.log('navItemActive=', current);
    
    
})
$('.btn-prev').on('click', function(){
    goToSlide(-1);
    // slides[navItemActive].removeClass('works__slides-item_active');
    
    // navItemActive -=1;
    // slides[navItemActive].addClass('works__slides-item_active');
    
    console.log('navItemActive=', current);
    console.log('prev');
})












/// jquery

// $(document).on('scroll', function(e){
//     console.log(e );
//     let offsetTop = $('.blog-nav').position().top;
//     console.log('offsetTop=', offsetTop );
//     // var target = $('.blog-nav').e.pageX;
//     //     console.log('done');
//     //     console.log('target');
//     //     console.log(e);
//     //     console.log('e.clientWidth', e.clientWidth);


//     //     .css({'position':'fixed', 'top':'0' });
// })

 
 