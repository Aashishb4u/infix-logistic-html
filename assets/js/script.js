var mySwiper = new Swiper('.hero-swiper', {
    // Optional parameters
    direction: 'horizontal',
    effect: "fade",
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,


    on: {
        transitionStart: function () {

            var videos = document.querySelectorAll('video');

            Array.prototype.forEach.call(videos, function (video) {
                video.pause();
            });
        },

        transitionEnd: function () {

            var activeIndex = this.activeIndex;
            var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
            var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
            activeSlideVideo.play();

        },

    }


});

new Swiper(".testimonials", {
    navigation: {
        nextEl: ".testimonials-swiper-button-next",
        prevEl: ".testimonials-swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 4000,
    },
    effect: 'slide',
    slidesPerView: 1,
    direction: 'horizontal',
    speed: 1000,
    watchSlidesProgress: true,
});