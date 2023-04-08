$(function(){
    // banner slider start
    $('.banner-section').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:1000,
      });
    // banner slider end

    // about video start
    new VenoBox({
        selector: '.about-video',
    });
    // about video end

    // gallery start
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
    // gallery end

    // team start
    $('.team-container').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      prevArrow:".team-left",
      nextArrow:".team-right",
    });
    // team end

    // testimonial start
    $('.user-item').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:500,
      dots: true,
      arrows: false,
    });
    // testimonial end

    // membership start
    $('.membership-container').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:500,
      dots: true,
      prevArrow:".memb-left",
      nextArrow:".memb-right",
    });
    // membership end

    // count start
    $('.counter-1').counterUp({
      delay: 5,
      time: 1500
    });
    // count end

    // tabs start
    $('.tabs li').click(function(){
      if(! $(this).hasClass('active')){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        let tabId = $(this).data('toggle');
        $('.tab-content').hide();
        $('#' + tabId).fadeIn();
      }
    })
    // tabs end

    // collaboration start
    $('.collab-container').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:500,
      dots: false,
      centerMode: true,
      centerPadding:"0",
      prevArrow:".collab-left",
      nextArrow:".collab-right",
    });
    // collaboration end
})