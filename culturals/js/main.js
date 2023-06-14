/*  ---------------------------------------------------
  Template Name: Activitar
  Description:  Activitar Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
        $(".owl-next").hover(()=>{
            $(this).css("background-color","black");
        })
        $(".owl-prev").attr("id","back");
        $(".owl-next").attr("id","next");
        // $(".arrow_carrot-right").attr("id","next");

        // function shuffle(array) {
        //     var currentIndex = array.length, temporaryValue, randomIndex;
          
        //     // While there remain elements to shuffle...
        //     while (0 !== currentIndex) {
          
        //       // Pick a remaining element...
        //       randomIndex = Math.floor(Math.random() * currentIndex);
        //       currentIndex -= 1;
          
        //       // And swap it with the current element.
        //       temporaryValue = array[currentIndex];
        //       array[currentIndex] = array[randomIndex];
        //       array[randomIndex] = temporaryValue;
        //     }
          
        //     return array;
        //   }
    
        // let arr =[];
        // for(let i=1;i<50;i++){
        //     arr.push(i);
        // }
    
        // shuffle(arr);
        // console.log(arr);
    
        // for(let j=1;j<16;j++){
        //     let mess= `<img src="./img/main/${arr[j]}.jpg" class="bgimage" />`;
        //     $("#carousel").prepend(mess);
        // }



        /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls ul li').on('click', function() {
            $('.gallery-controls ul li').removeClass('active');
            $(this).addClass('active');
        });
        if($('.gallery-filter').length > 0 ) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

        $('.blog-gird').masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
		});

    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Menu Hover
	--------------------*/
    $(".header-section .nav-menu .mainmenu ul li").on('mousehover', function() {
        $(this).addClass('active');
    });
    $(".header-section .nav-menu .mainmenu ul li").on('mouseleave', function() {
        $('.header-section .nav-menu .mainmenu ul li').removeClass('active');
    });

    $(".navigation__link").click(function() {
        $("#navi-toggle").prop("checked", false);
    });

    /*------------------
        Carousel Slider
    --------------------*/
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        smartSpeed: 1200,
        autoHeight: true,
    });

    


    // $('.carousel').carousel({
    //     interval: 2000
    //   })
    /*------------------
        Testimonial Slider
    --------------------*/
   $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.show-result-select').niceSelect();

    /*------------------
       Timetable Filter
    --------------------*/
    $('.timetable-controls ul li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.timetable-controls ul li').removeClass('active');
        $(this).addClass('active');
        
        if(tsfilter == 'all') {
            $('.classtime-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.classtime-table').addClass('filtering');
        }
        $('.ts-item').each(function(){
            $(this).removeClass('show');
            if($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

})(jQuery);