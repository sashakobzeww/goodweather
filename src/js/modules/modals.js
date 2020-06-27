/* Модальное окно формы */

let modalRequest = document.querySelector(".modal-request");
let modalBackground = document.querySelector('.modal-request .modal__background');
let modalCloseIco = document.querySelector('.modal-request .modal__close');
let modalRequestForm = document.querySelector(".modal-request__form");
let modalRequestThanks = document.querySelector(".modal-request-thanks");
let buttonModalRequest = document.querySelectorAll(".btn-modal");
let modalSend = document.querySelector('.modal-request__form .btn');
let modalCloseBtn = document.querySelector('.modal-request-thanks .btn');
let modalTitle = document.getElementById('modal-title');
let modalBtn = document.getElementById('modal-btn');
let modalText = document.getElementById('modal-text');
let elementsCloseModalRequest = [modalCloseIco, modalCloseBtn, modalBackground];

for (let i = 0; i < buttonModalRequest.length; i++) {
    buttonModalRequest[i].addEventListener('click', () => {
        document.body.classList.add('overflow-hidden');
        modalRequest.classList.add('modal--active');
        modalRequest.classList.remove('modal--un-active');
        modalTitle.textContent = buttonModalRequest[i].dataset.title;
        modalBtn.textContent = buttonModalRequest[i].dataset.btn;
        modalText.textContent = buttonModalRequest[i].dataset.text;
    });
}

modalSend.addEventListener('click', () => {
    modalRequestForm.classList.remove('modal-request__form--active');
    modalRequestThanks.classList.add('modal-request-thanks--active');
});

for (let el of elementsCloseModalRequest) {
    el.addEventListener('click', modalClose);
}

window.addEventListener('keyup', function (e) {
    if (e.code === 'Escape' && modalRequest.classList.contains('modal--active')) {
        modalClose();
    }
});

function modalClose() {
    document.body.classList.remove('overflow-hidden');
    modalRequest.classList.remove('modal--active');
    modalRequest.classList.add('modal--un-active');
    setTimeout(function () {
        modalRequestForm.classList.add('modal-request__form--active');
        modalRequestThanks.classList.remove('modal-request-thanks--active');
    }, 500)
}

/* Модальное окно плана помещения */

let modalPlan = document.querySelector(".modal-plan");
let modalPlanBackground = document.querySelector('.modal-plan .modal__background');
let modalPlanCloseIco = document.querySelector('.modal-plan .modal__close');
let buttonsModalPlan = document.querySelectorAll(".plans__tab path");
let modalPlanBack = document.querySelector('.modal-plan__back');
let elementsCloseModalPlan = [modalPlanCloseIco, modalPlanBack, modalPlanBackground];

for (let i = 0; i < buttonsModalPlan.length; i++) {
    buttonsModalPlan[i].addEventListener('click', () => {
        document.body.classList.add('overflow-hidden');
        modalPlan.classList.add('modal--active');
        modalPlan.classList.remove('modal--un-active');
    });
}

for (let el of elementsCloseModalPlan) {
    el.addEventListener('click', modalPlanClose);
}

window.addEventListener('keyup', function (e) {
    if (e.code === 'Escape' && modalPlan.classList.contains('modal--active')) {
        modalPlanClose();
    }
});

function modalPlanClose() {
    document.body.classList.remove('overflow-hidden');
    modalPlan.classList.remove('modal--active');
    modalPlan.classList.add('modal--un-active');
}

/* Модальное благодарности */

export let modalThanks = document.querySelector(".modal-thanks");
let modalThanksBackground = document.querySelector('.modal-thanks .modal__background');
let modalThanksCloseIco = document.querySelector('.modal-thanks .modal__close');
let modalThanksCloseBtn = document.querySelector('.modal-thanks .btn');
let buttonsModalThanks = document.querySelectorAll(".btn-thanks");
let elementsCloseModalThanks = [modalThanksCloseIco, modalThanksCloseBtn, modalThanksBackground];

for (let i = 0; i < buttonsModalThanks.length; i++) {
    buttonsModalThanks[i].addEventListener('click', () => {
        document.body.classList.add('overflow-hidden');
        modalThanks.classList.add('modal--active');
        modalThanks.classList.remove('modal--un-active');
    });
}

for (let el of elementsCloseModalThanks) {
    el.addEventListener('click', modalThanksClose);
}

window.addEventListener('keyup', function (e) {
    if (e.code === 'Escape' && modalThanks.classList.contains('modal--active')) {
        modalThanksClose();
    }
});

function modalThanksClose() {
    document.body.classList.remove('overflow-hidden');
    modalThanks.classList.remove('modal--active');
    modalThanks.classList.add('modal--un-active');
}
