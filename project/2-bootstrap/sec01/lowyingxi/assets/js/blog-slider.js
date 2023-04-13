/*--------------- Blog Slider ---------------*/
var swiper = new Swiper(".blog-slider", { 

    spaceBetween: 20,
    loop: true,
    autoplay: {
        display: 2500,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination2",
        clickable:true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },

});