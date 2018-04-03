$(document).ready(function() {
    // Preloader 
    $(window).on("load", function() {
        $('.spinner-wrapper').fadeOut('slow');
    });
    // navbar
    var stickyNavTop = $('#main-nav').offset().top;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('#main-nav').addClass('sticky');
        } else {
            $('#main-nav').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });

    // Animations
    window.sr = ScrollReveal();
    sr.reveal('.text-left', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2,
        mobile: true,
    });
    sr.reveal('.scroll-up', {
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
        viewFactor: 0.2,
        mobile: true,
    });
    sr.reveal('.scroll-up-delay', {
        duration: 1500,
        origin: 'bottom',
        distance: '300px',
        viewFactor: 0.2,
        mobile: true,
    });
    sr.reveal('.text-up', {
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
        viewFactor: 0.2,
        mobile: true,
    });
    //footer year
    $('#year').text(new Date().getFullYear());
});