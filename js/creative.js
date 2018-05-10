(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 48
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('#escaliers_gallery').magnificPopup({
        items: [
          {src: './img/portfolio/fullsize/IMG_0544_DxO.jpg'},
          {src: './img/portfolio/fullsize/IMG_0528_DxO.jpg'},
          {src: './img/portfolio/fullsize/escalier.jpg'},
          {src: './img/portfolio/fullsize/IMG_3782.jpg'},
          {src: './img/portfolio/fullsize/escalier_2.jpg'},
          {src: './img/portfolio/fullsize/DSC_0068_web.jpg'},
          {src: './img/portfolio/fullsize/DSC_0060_t_web.jpg'},
          {src: './img/portfolio/fullsize/IMG_4965_web.jpg'},
          {src: './img/portfolio/fullsize/IMG_4969_web.jpg'},
          {src: './img/portfolio/fullsize/IMG_4972_web.jpg'},
          {src: './img/portfolio/fullsize/DSC_0079_web.jpg'}
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });

    $('#charpente_gallery').magnificPopup({
        items: [
          {src: './img/portfolio/fullsize/charpente.jpg'},
          {src: './img/portfolio/fullsize/IMG_0338_DxO.jpg'},
          {src: './img/portfolio/fullsize/IMG_0328_DxO.jpg'},
          {src: './img/portfolio/fullsize/IMG_4314_web.jpg'},
          {src: './img/portfolio/fullsize/IMG_3788_web.jpg'},
          {src: './img/portfolio/fullsize/2002_web.jpg'},
          {src: './img/portfolio/fullsize/2001_web.jpg'},
          {src: './img/portfolio/fullsize/2000_web.jpg'},
          {src: './img/portfolio/fullsize/2003_web.jpg'},
          {src: './img/portfolio/fullsize/IMG_3962_web.jpg'}
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });
    $('#couverture_gallery').magnificPopup({
        items: [
          {src: './img/portfolio/fullsize/couverture.jpg'},
          {src: './img/portfolio/fullsize/couverture_3.jpg'},
          {src: './img/portfolio/fullsize/IMG_4333_web.jpg'},
          {src: './img/portfolio/fullsize/couverture_4.jpg'},
          {src: './img/portfolio/fullsize/couverture_2.jpg'},
          {src: './img/portfolio/fullsize/IMG_4054_web.jpg'},
          {src: './img/portfolio/fullsize/IMG_4054_web.jpg'},
          {src: './img/portfolio/fullsize/IMG_4210_web.jpg'}
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });
    $('#autres_gallery').magnificPopup({
        items: [
          {src: './img/portfolio/fullsize/balanceoire.jpg'},
          {src: './img/portfolio/fullsize/201 023_DxO.jpg'},
          {src: './img/portfolio/fullsize/IMG_5070_web.jpg'}
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });
    $('#terrasses_gallery').magnificPopup({
        items: [
          {src: './img/portfolio/fullsize/terrasse.jpg'},
          {src: './img/portfolio/fullsize/DSC_0057_web.jpg'},
          {src: './img/portfolio/fullsize/DSC_0074_web.jpg'},
          {src: './img/portfolio/fullsize/3000_web.jpg'},
          {src: './img/portfolio/fullsize/3001_web.jpg'}
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });
    $('#menuiserie_gallery').magnificPopup({
        items: [
          {src: './img/portfolio/fullsize/IMG_0554_DxO.jpg'},
          {src: './img/portfolio/fullsize/IMG_0556_DxO.jpg'},
          {src: './img/portfolio/fullsize/roulotte.jpg'}
        ],
        gallery: {
          enabled: true
        },
        type: 'image' // this is default type
    });

})(jQuery); // End of use strict
