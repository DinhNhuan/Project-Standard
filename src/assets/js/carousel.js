// carousel
window.onload = () => {
    owlCarousel.init()
}

const owlCarousel = {
    init: function() {
        this.setupHomeBannerCarousel('#section-home-carousel')
    },
    setupHomeBannerCarousel: function(carouselId) {

        const carousel = $(carouselId).owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
            },
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 300,
            dots: true,
            nav: false,
            center: true,
            margin: 15,
        });
    },

}