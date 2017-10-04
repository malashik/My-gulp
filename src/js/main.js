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
const menu = document.querySelector(".blog-nav");
const wrap = document.querySelector(".blog-nav__wrap");

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

 
 