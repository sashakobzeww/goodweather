import Swiper from 'swiper';

/* slider 1 */

var slider1 = new Swiper('.swiper-container--1', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--1',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next--1',
        prevEl: '.swiper-button-prev--1',
    },
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1801: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})


/* slider 2 */

var slider2 = new Swiper('.swiper-container--2', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next--2',
        prevEl: '.swiper-button-prev--2',
    },
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1801: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
})


/* slider 3 */

var slider3 = new Swiper('.swiper-container--3', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination--3',
        clickable: true,

    },
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next--3',
        prevEl: '.swiper-button-prev--3',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1801: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})


/* slider 4-1 */

var slider41 = new Swiper('.swiper-container--4-1', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination--4-1',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next--4-1',
        prevEl: '.swiper-button-prev--4-1',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1801: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})


/* slider 4-2 */

var slider42 = new Swiper('.swiper-container--4-2', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--4-2',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next--4-2',
        prevEl: '.swiper-button-prev--4-2',
    },
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1801: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
})

