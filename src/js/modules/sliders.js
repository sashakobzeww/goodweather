import Swiper from 'swiper';

var slider1 = new Swiper('.swiper-container--1', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--1',
        clickable: true,
    },
    speed: 0,
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

slider1.on('slideChangeTransitionStart', () => {
    let slides = document.querySelectorAll('.swiper-container--1 li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('scale-in-left');

        setTimeout(() => {
            slides[i].classList.remove('scale-in-left');
        }, 1000)
    }
})

var slider2 = new Swiper('.swiper-container--2', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next--2',
        prevEl: '.swiper-button-prev--2',
    },
    speed: 0,
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

slider1.on('slideChangeTransitionStart', () => {
    let slides = document.querySelectorAll('.swiper-container--2 li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('scale-in-left');

        setTimeout(() => {
            slides[i].classList.remove('scale-in-left');
        }, 1000)
    }
})

var slider3 = new Swiper('.swiper-container--3', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination--3',
        clickable: true,

    },
    speed: 0,
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

slider1.on('slideChangeTransitionStart', () => {
    let slides = document.querySelectorAll('.swiper-container--3 li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('scale-in-left');

        setTimeout(() => {
            slides[i].classList.remove('scale-in-left');
        }, 1000)
    }
})

var slider41 = new Swiper('.swiper-container--4-1', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination--4-1',
        clickable: true,
    },
    speed: 0,
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

slider1.on('slideChangeTransitionStart', () => {
    let slides = document.querySelectorAll('.swiper-container--4-1 li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('scale-in-left');

        setTimeout(() => {
            slides[i].classList.remove('scale-in-left');
        }, 1000)
    }
})

var slider42 = new Swiper('.swiper-container--4-2', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination--4-2',
        clickable: true,
    },
    speed: 0,
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

slider1.on('slideChangeTransitionStart', () => {
    let slides = document.querySelectorAll('.swiper-container--4-2 li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('scale-in-left');

        setTimeout(() => {
            slides[i].classList.remove('scale-in-left');
        }, 1000)
    }
})
