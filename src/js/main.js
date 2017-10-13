'use strict'





/////   anim 3d welcome-login
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
//////    anim blog-accordeon
$(document).ready(function(){
    $('.circle-nav').on('click', function(){
        $('.blog-nav__wrap').toggleClass('blog-nav__wrap_active');
    })
})

// //////// blog-nav
let blogNav = function(){
    const menu = document.querySelector(".blog .blog-nav");
    const wrap = document.querySelector(".blog .blog-nav__wrap");
    if(menu != null){
        document.addEventListener('scroll', function (e) {
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
    } 
}
blogNav();


///////// SlideArrow
const SlideArrow = function(){
    const btnDown = $('.btn-down');
    const btnTop = $('.btn-top');
    let scrollDown = $('.section-head').outerHeight();
    let scrollUp = 0;
    
    btnDown.on('click', function(){        
        $('html').animate({ scrollTop: scrollDown }, 1100);
    })
    btnTop.on('click', function(){
        $('html').animate({ scrollTop: scrollUp }, 1100);
    })
}
SlideArrow();

///////// hamburger
const toHamburger = function(){
    const hamburger = document.querySelector(".hamburger");
    // const btnDown = document.getElementsByClassName('.btn-down');
    if(hamburger){
        hamburger.addEventListener('click', function(){
            hamburger.classList.toggle('hamburger_active');
            $('.btn-down').toggleClass('btn-down_hidden');
        })
    }
}
toHamburger();


//// slider
const toSlider = function(){
    const slides = document.querySelectorAll('.works__slides-item');
    const slidesText = document.querySelectorAll('.works__slides-add');
    const nav = document.getElementsByClassName('works-slide__nav');
    const navItems = document.getElementsByClassName('works-row__circle');
    // console.log(typeof navItems);
    // let a = [1,1,2,3,'a'];
    let current = 0;
    // let navItemsArr = [];
    // for (let i=0;i < navItems.length; i++){
    //     navItemsArr.push(navItems[i]);

    // }
    // console.log(typeof navItemsArr);
    // console.log(typeof slides);
    // console.log('navItemsArr=',navItemsArr);
    // let active = $('.works__slides-item').filter('.works__slides-item_active');
    // let indexActive = active.index();
    
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
toSlider();

///////// circles

const animCircles = function(){
    const circles = $('.about-skils__row .circle-second');
    if(circles.length !== 0){
        const circles = $('.about-skils__row .circle-second');
        const circlesRow = $('.about-skils__row');
        let trigger  = $('.section-head').outerHeight(); // задаю переменной trigger значение 100vh, она указывает начало анимации
        $(document).on('scroll', function(){
            if (circlesRow[0].getBoundingClientRect().top < trigger){
                setTimeout(function(){
                    for(let i=0; i < circles.length; i++){
                        circles.addClass('circle-second_active');
                    }
                },1000);
            }
        })
    }
}
animCircles();

// blog-anchor
const blogAnchor = function(){
    const articles = $('.blog-nav__item');
    const article1 = document.getElementById('article1');
    const article2 = document.getElementById('article2');
    const article3 = document.getElementById('article3');
    const article1_link = $('#article1_link');
    const article2_link = $('#article2_link');
    const article3_link = $('#article3_link');

    // $('#article2_link').addClass('blog-nav__item_active');               //так работает
    // article2_link.addClass('blog-nav__item_active');   // так не работает, пишет 
                                                    //main.js:153 Uncaught TypeError: article2_link.addClass 
                                                    //is not a function
    const changeNav = function(article,article_link){
        
            if(article.getBoundingClientRect().bottom < 0){
                articles.removeClass('blog-nav__item_active');
                article_link.next().addClass('blog-nav__item_active');
            }else{
                articles.removeClass('blog-nav__item_active');
                article_link.addClass('blog-nav__item_active');
            }
    }
    if (articles.length !== 0){
        // changeNav(article1,article2_link);
        document.onscroll = function(){
            if(article1.getBoundingClientRect().bottom > 0){
                changeNav(article1,article1_link);
            }else{
                changeNav(article2,article2_link);
            }
        }
    }
};
blogAnchor();