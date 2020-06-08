import Swiper from 'swiper';

var slider1 = new Swiper('.swiper-container--1', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        }
    }
})

var slider2 = new Swiper('.swiper-container--2', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        }
    }
})

var slider3 = new Swiper('.swiper-container--3', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        }
    }
})

var slider41 = new Swiper('.swiper-container--4-1', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        }
    }
})

var slider42 = new Swiper('.swiper-container--4-2', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        }
    }
})
