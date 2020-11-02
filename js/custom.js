$(function(){
    
      $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        asNavFor:'.banner-slider-main',
        autoplaySpeed: 1500,
          infinite:true,
          dots:false,
          arrows:false,
          
    });
    
      $('.banner-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        asNavFor: '.banner-main',
        centerMode:true,
        arrows:false,
        centerPadding:0,
        infinite:true,
          dots:false,
          focusOnSelect: true,
    });
    
    $('.services-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        centerPadding:0,
        arrows:false,
        dots: true,
        
          responsive: [
   
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    
    $('.test-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
          infinite:true,
        arrows:false,
        dots: true,
    });
    
    $('.back-top').click(function(){
    $('html, body').animate({scrollTop:0},1000);
    });
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        
        if(scrolling>200){
            $('.back-top').fadeIn(500);
        }else{
            $('.back-top').fadeOut(500);
        }
        
    }); 
  
    $('.counter').counterUp();
    
      var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top + 5
                }, 1000);
                return false;
            }
        }
    });
    
});