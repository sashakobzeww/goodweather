/*Квиз в шапке*/
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


