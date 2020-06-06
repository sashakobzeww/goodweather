let menuButton = document.querySelector(".header__menu-button");
let headerClose = document.querySelector(".header__close");

let headerNav = document.querySelector(".header-nav");
let headerCenter = document.querySelector(".header__center");
let headerRight = document.querySelector(".header__right-wrapper");
let headerTel = document.querySelector(".header__tel");

let openQuiz = document.querySelector('#openQuiz');
let headerQuiz = document.querySelector('.header-quiz');

menuButton.onclick = () => {
    headerCenter.classList.remove("header__center--active");
    headerClose.classList.add("header__close--active");
    headerNav.classList.add("header-nav--active");
    headerRight.classList.remove("header__right-wrapper--active");
    headerTel.classList.remove("header__tel--active");
    headerQuiz.classList.remove("header-quiz--active");
    document.body.classList.remove('overflow-hidden')
};

headerClose.onclick = () => {
    headerCenter.classList.add("header__center--active");
    headerClose.classList.remove("header__close--active");
    headerNav.classList.remove("header-nav--active");
    headerRight.classList.add("header__right-wrapper--active");
    headerTel.classList.add("header__tel--active");
    headerQuiz.classList.remove("header-quiz--active");
    document.body.classList.remove('overflow-hidden')
};

openQuiz.onclick = () => {
    headerCenter.classList.remove("header__center--active");
    headerClose.classList.add("header__close--active");
    headerRight.classList.remove("header__right-wrapper--active");
    headerTel.classList.remove("header__tel--active");
    headerQuiz.classList.add("header-quiz--active");
    document.body.classList.add('overflow-hidden')
};


/*Листаем квиз*/
let headerQuizPrev = document.getElementById('headerQuizPrev');
let headerQuizNext = document.getElementById('headerQuizNext');
let headerQuizSteps = document.querySelectorAll(".header-quiz__step");

headerQuizPrev.addEventListener('click', function () {
    changeQuizStep(-1)
})

headerQuizNext.addEventListener('click', function () {
    changeQuizStep(+1)
})

function changeQuizStep(e) {
    // Определяем номер активного шага
    for (let i = 0; i < headerQuizSteps.length; i++) {
        let has = headerQuizSteps[i].classList.contains('header-quiz__step--active');
        if (has) var numberOfActiveQuizStep = i;
    }

    let prevEl = headerQuizSteps[numberOfActiveQuizStep].previousElementSibling;
    let currentEl = headerQuizSteps[numberOfActiveQuizStep];
    let nextEl = headerQuizSteps[numberOfActiveQuizStep].nextElementSibling;
    let currentStep = numberOfActiveQuizStep + e + 1;

    if (currentStep === 1) {
        headerQuizPrev.disabled = true;
    } else if (currentStep > 1 && currentStep < headerQuizSteps.length) {
        headerQuizPrev.disabled = false;
        headerQuizNext.textContent = 'Дальше'
    } else if (currentStep === headerQuizSteps.length) {
        headerQuizNext.textContent = 'Отправить'
    }

    currentEl.classList.remove('header-quiz__step--active');
    if (e > 0 && nextEl) {
        nextEl.classList.add('header-quiz__step--active');
    } else if (e < 0 && prevEl) {
        prevEl.classList.add('header-quiz__step--active');
    }

}

