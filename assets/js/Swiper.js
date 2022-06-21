const swiper = new Swiper ('.Swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    Keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown:true,
    },

    slidesPerView: 3,
    spaceBetween: 15,

    

    

    autoplay: {
        delay:3000,
        disableoninteraction: false,
    },

    speed: 900,

    breakpoints: {
        320: {
            slidesPerView:1,
        },
        480: {
            slidesPerView:1,
        },
        992: {
            slidesPerView:2,
        },
        1200: {
            slidesPerView:3,
        }
    }
  });