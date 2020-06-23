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

export function activeQuizStep() {
    // Определяем номер активного шага
    for (let i = 0; i < headerQuizSteps.length; i++) {
        let has = headerQuizSteps[i].classList.contains('header-quiz__step--active');
        if (has) {
            let numberOfActiveQuizStep = i;
            return numberOfActiveQuizStep;
        }
    }
}

function changeQuizStep(e) {

    let numberOfActiveQuizStep = activeQuizStep();

    let prevEl = headerQuizSteps[numberOfActiveQuizStep].previousElementSibling;
    let currentEl = headerQuizSteps[numberOfActiveQuizStep];
    let nextEl = headerQuizSteps[numberOfActiveQuizStep].nextElementSibling;
    let currentStep = numberOfActiveQuizStep + e + 1;

    if (currentStep === 1) {
        headerQuizPrev.disabled = true;
    } else if (currentStep > 1 && currentStep < headerQuizSteps.length) {
        headerQuizPrev.disabled = false;
        headerQuizNext.textContent = 'Дальше';
        headerQuizNext.disabled = true;
    } else if (currentStep === headerQuizSteps.length) {
        headerQuizNext.textContent = 'Отправить';
        headerQuizNext.disabled = true;
        headerQuizNext.removeEventListener("click", increment);
        headerQuizNext.addEventListener("click", function () {
            modalThanks.classList.add("modal--active");
            modalThanks.classList.remove("modal--un-active");
            close();
        });
    }

    currentEl.classList.remove('header-quiz__step--active');
    currentEl.classList.add('header-quiz__step--un-active');
    if (e > 0 && nextEl) {
        nextEl.classList.add('header-quiz__step--active');
    } else if (e < 0 && prevEl) {
        prevEl.classList.add('header-quiz__step--active');
        prevEl.classList.remove('header-quiz__step--un-active');
        currentEl.classList.remove('header-quiz__step--un-active');
    }

    if (e < 0) {
        headerQuizNext.disabled = false;
    }

}


let checkboxes = document.querySelectorAll('.header-quiz__step [type="checkbox"]');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', () => {
        let name = checkboxes[i].name;
        let checkboxesOfStep = document.querySelectorAll(`[name=${name}]`);
        let headerQuizNext = document.getElementById('headerQuizNext');

        // Включён хотя бы один чекбокс?
        let checkOne = checkedOne(checkboxesOfStep);
        console.log(checkOne);
        if (checkOne) {
            headerQuizNext.disabled = false;
        } else {
            headerQuizNext.disabled = true;
        }
    })
}

function checkedOne(checkboxesOfStep) {
    for (let j = 0; j < checkboxesOfStep.length; j++) {
        if (checkboxesOfStep[j].checked) {
            return true
        }
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

function activeQuizStep2() {
    // Определяем номер активного шага
    for (let i = 0; i < selectionQuizStep.length; i++) {
        let has = selectionQuizStep[i].classList.contains('selection__step--active');
        if (has) {
            let numberOfActiveQuizStep = i;
            return numberOfActiveQuizStep;
        }
    }
}

function changeQuizStep2(e) {

    let numberOfActiveQuizStep = activeQuizStep2();

    let selectionForm = document.querySelector('.selection__form');
    let prevEl = selectionQuizStep[numberOfActiveQuizStep].previousElementSibling;
    let currentEl = selectionQuizStep[numberOfActiveQuizStep];
    let nextEl = selectionQuizStep[numberOfActiveQuizStep].nextElementSibling;
    let currentStep = numberOfActiveQuizStep + e + 1;

    if (currentStep === 1) {
        selectionQuizPrev.disabled = true;
    } else if (currentStep > 1 && currentStep < selectionQuizStep.length) {
        selectionQuizPrev.disabled = false;
        selectionQuizNext.textContent = 'Дальше';
        selectionQuizNext.disabled = true;
    } else if (currentStep === selectionQuizStep.length) {
        selectionQuizNext.textContent = 'Отправить';
        selectionQuizNext.disabled = true;
        selectionQuizNext.removeEventListener("click", increment);
        selectionQuizNext.addEventListener("click", function () {
            modalThanks.classList.add("modal--active");
            modalThanks.classList.remove("modal--un-active");
            selectionForm.classList.add('selection__form--send');
        });
    }

    currentEl.classList.remove('selection__step--active');
    currentEl.classList.add('selection__step--un-active');
    if (e > 0 && nextEl) {
        nextEl.classList.add('selection__step--active');
    } else if (e < 0 && prevEl) {
        prevEl.classList.add('selection__step--active');
        prevEl.classList.remove('selection__step--un-active');
        currentEl.classList.remove('selection__step--un-active');
    }

    if (e < 0) {
        selectionQuizNext.disabled = false;
    }

}

let checkboxesSelect = document.querySelectorAll('.selection__step [type="checkbox"]');

for (let i = 0; i < checkboxesSelect.length; i++) {
    checkboxesSelect[i].addEventListener('click', () => {
        let name = checkboxesSelect[i].name;
        let checkboxesSelectOfStep = document.querySelectorAll(`[name=${name}]`);
        let secondQuizNext = document.getElementById('secondQuizNext');

        // Включён хотя бы один чекбокс?
        let checkOne = checkedOne(checkboxesSelectOfStep);
        console.log(checkOne);
        if (checkOne) {
            secondQuizNext.disabled = false;
        } else {
            secondQuizNext.disabled = true;
        }
    })
}
