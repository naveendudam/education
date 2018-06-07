var winW = $(window).width();

var carousel = {
    config: {
        wrapper: '.owlCarousel',
        items: 1,
        loop: false,
        nav: true,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        margin: 10,
        navText: ["<img src='images/back.png'>","<img src='images/next.png'>"],
        responsive: false

    },

    init: function(config) {
        $.extend(carousel.config, config);
        this.cacheDom();
        this.render();
    },
    cacheDom: function() {
        var wrapper = carousel.config.wrapper;
    },
    render: function() {
        $(carousel.config.wrapper).owlCarousel({
            loop: carousel.config.loop,
            nav: carousel.config.nav,
            items: carousel.config.items,
            autoplay: carousel.config.autoplay,
            autoplayTimeout: carousel.config.autoplayTimeout,
            autoplayHoverPause: carousel.config.autoplayHoverPause,
            margin: carousel.config.margin,
            navText: carousel.config.navText,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items : carousel.config.mobile
                },
                // breakpoint from 768 up
                768 : {
                    items : carousel.config.tab
                },
                992:{
                    items: carousel.config.desktop
                }
            }
        });
    },
    setHeight: function() {
        console.log('setHeight');
    },
    destroy: function() {
        this.$wrapper.owlCarousel('destroy');
        this.$wrapper.find('.owl-stage').detach();
    }

};

$(document).ready(function() {

    if ($('.owlCarousel').length) {
        carousel.init({
            items: 3,
            margin: 10,
            navText: ["<img src='images/back.png'>","<img src='images/next.png'>"],
            autoplay: false,
            responsive: true,
            desktop:3,
            mobile:1
        })
    }
    if($('.info-carousel').length && winW < 768){
        
        carousel.init({
            wrapper: '.info-carousel',
            items: 1,
            margin: 10,
            navText: ["<img src='images/back.png'>","<img src='images/next.png'>"],
            autoplay: false
        })
    }
    if($('.stu-carousel').length && winW <768){
        carousel.init({
            wrapper: '.stu-carousel',
            items: 1,
            margin: 10,
            navText: ["<img src='images/back.png'>","<img src='images/next.png'>"],
            autoplay: false
        })
    }

    if($('.humburger').length && winW <768){
        $('.humburger').click(function(){
            $(this).toggleClass('open');
            $('.main-navigation').slideToggle();
        });
    }
    $('.js-popup').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $('.modal-wrapper').removeClass('open');
        $('.'+target).addClass('open');
        $('.page-wrapper').addClass('blur');
        return false;
    });
    if($('.password-visible').length){
            $('.password-visible').on('click',function(e){
                e.preventDefault();
                if($(this).hasClass('active')){
$(this).removeClass('active');
                 $(this).parents('.form-group').find('input').attr('type','password'); 
                }else{
                   $(this).addClass('active');
                 $(this).parents('.form-group').find('input').attr('type','text');  
                }
                 
            })
    }
    $('.js-closePopup').click(function(){
        if($(this).parents('.modal-wrapper').hasClass('open')){
            $(this).parents('.modal-wrapper').removeClass('open');
            $('.page-wrapper').removeClass('blur');
        }
    });
});





// accordian
$('.accordion-toggle').on('click', function() {
    $(this).closest('.panel-group').children().each(function() {
        $(this).find('>.panel-heading').removeClass('active');
    });

    $(this).closest('.panel-heading').toggleClass('active');
});

//Initiat WOW JS
// new WOW().init();

// portfolio filter
$(window).load(function() {

});


//goto top
$('.gototop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});


// dashboard js functions start here
 $(".accordProfile").on("click", ".accordLi .toggle", function() {

    // if($(this).hasClass('active')){
    //     $('.accordion-header').next().removeClass('active').slideUp();
    // }
    // $(this).next().addClass("active").slideDown();
    event.preventDefault();

       $(this).toggleClass("active").next().slideToggle();

       $(this).parent().siblings('li').find(".inner").slideUp();
       $(this).parent().siblings('li').find("a").removeClass('active')
 });
// dashboard js functions end here