import {modalThanks} from '../modules/modals';
import {close} from '../includes/header';

/*Квиз в шапке*/
let headerQuizPrev = document.getElementById('headerQuizPrev');
let headerQuizNext = document.getElementById('headerQuizNext');
let headerQuizSteps = document.querySelectorAll(".header-quiz__step");

headerQuizPrev.addEventListener('click', decrement);
headerQuizNext.addEventListener('click', increment);

function decrement() {
    changeQuizStep(-1)
}

function increment() {
    changeQuizStep(+1)
}

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
        headerQuizNext.textContent = 'Отправить';
        headerQuizNext.removeEventListener("click", increment);
        headerQuizNext.addEventListener("click", function () {
            modalThanks.classList.add("modal--active");
            modalThanks.classList.remove("modal--un-active");
            close();
        });
    }

    currentEl.classList.remove('header-quiz__step--active');
    if (e > 0 && nextEl) {
        nextEl.classList.add('header-quiz__step--active');
    } else if (e < 0 && prevEl) {
        prevEl.classList.add('header-quiz__step--active');
    }

}


/*Квиз второй*/
let selectionQuizPrev = document.getElementById('secondQuizPrev');
let selectionQuizNext = document.getElementById('secondQuizNext');
let selectionQuizStep = document.querySelectorAll(".selection__step");

selectionQuizPrev.addEventListener('click', decrementSelection);
selectionQuizNext.addEventListener('click', incrementSelection);

function decrementSelection() {
    changeQuizStep2(-1)
}

function incrementSelection() {
    changeQuizStep2(+1)
}

function changeQuizStep2(e) {
    // Определяем номер активного шага
    for (let i = 0; i < selectionQuizStep.length; i++) {
        let has = selectionQuizStep[i].classList.contains('selection__step--active');
        if (has) var numberOfActiveQuizStep = i;
    }

    let selectionForm = document.querySelector('.selection__form');
    let prevEl = selectionQuizStep[numberOfActiveQuizStep].previousElementSibling;
    let currentEl = selectionQuizStep[numberOfActiveQuizStep];
    let nextEl = selectionQuizStep[numberOfActiveQuizStep].nextElementSibling;
    let currentStep = numberOfActiveQuizStep + e + 1;

    if (currentStep === 1) {
        selectionQuizPrev.disabled = true;
    } else if (currentStep > 1 && currentStep < selectionQuizStep.length) {
        selectionQuizPrev.disabled = false;
        selectionQuizNext.textContent = 'Дальше'
    } else if (currentStep === selectionQuizStep.length) {
        selectionQuizNext.textContent = 'Отправить';
        selectionQuizNext.removeEventListener("click", increment);
        selectionQuizNext.addEventListener("click", function () {
            modalThanks.classList.add("modal--active");
            modalThanks.classList.remove("modal--un-active");
            selectionForm.classList.add('selection__form--send');
        });
    }

    currentEl.classList.remove('selection__step--active');
    if (e > 0 && nextEl) {
        nextEl.classList.add('selection__step--active');
    } else if (e < 0 && prevEl) {
        prevEl.classList.add('selection__step--active');
    }

}
