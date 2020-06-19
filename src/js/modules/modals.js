let modalRequest = document.querySelector(".modal-request");
let modalBackground = document.querySelector('.modal-request .modal__background');
let modalCloseIco = document.querySelector('.modal-request .modal__close');
let modalRequestForm = document.querySelector(".modal-request__form");
let modalRequestThanks = document.querySelector(".modal-request-thanks");
let buttonModalRequest = document.querySelector(".homeNeed__get");
let modalSend = document.querySelector('.modal-request__form .btn');
let modalCloseBtn = document.querySelector('.modal-request-thanks .btn');

modalSend.onclick = () => {
    modalRequestForm.classList.remove('modal-request__form--active');
    modalRequestThanks.classList.add('modal-request-thanks--active');
};

modalCloseIco.onclick = () => {
    modalClose();
};

modalCloseBtn.onclick = () => {
    modalClose();
};

modalBackground.onclick = () => {
    modalClose();
};

buttonModalRequest.onclick = (e) => {
    document.body.classList.add('overflow-hidden');
    modalRequest.classList.add('modal--active');
    modalRequest.classList.remove('modal--un-active');
};

function modalClose() {
    document.body.classList.remove('overflow-hidden');
    modalRequest.classList.remove('modal--active');
    modalRequest.classList.add('modal--un-active');
    setTimeout(function () {
        modalRequestForm.classList.add('modal-request__form--active');
        modalRequestThanks.classList.remove('modal-request-thanks--active');
    }, 500)
}

/*---------*/
let modalPlan = document.querySelector(".modal-plan");
let modalPlanBackground = document.querySelector('.modal-plan .modal__background');
let modalPlanCloseIco = document.querySelector('.modal-plan .modal__close');
let buttonsModalPlan = document.querySelectorAll(".plans__tab path");
let modalPlanBack = document.querySelector('.modal-plan__back');

modalPlanBack.onclick = () => {
    modalPlanClose();
};

modalPlanCloseIco.onclick = () => {
    modalPlanClose();
};

modalPlanBackground.onclick = () => {
    modalPlanClose();
};

for (let i = 0; i < buttonsModalPlan.length; i++) {
    buttonsModalPlan[i].onclick = () => {
        document.body.classList.add('overflow-hidden')
        modalPlan.classList.add('modal--active');
        modalPlan.classList.remove('modal--un-active');
    };
}

function modalPlanClose() {
    document.body.classList.remove('overflow-hidden');
    modalPlan.classList.remove('modal--active');
    modalPlan.classList.add('modal--un-active');
}

/*---------*/
export let modalThanks = document.querySelector(".modal-thanks");
let modalThanksBackground = document.querySelector('.modal-thanks .modal__background');
let modalThanksCloseIco = document.querySelector('.modal-thanks .modal__close');
let modalThanksCloseBtn = document.querySelector('.modal-thanks .btn');
let buttonsModalThanks = document.querySelectorAll(".btn-thanks");

modalThanksCloseIco.onclick = () => {
    modalThanksClose();
};

modalThanksBackground.onclick = () => {
    modalThanksClose();
};

modalThanksCloseBtn.onclick = () => {
    modalThanksClose();
};

for (let i = 0; i < buttonsModalThanks.length; i++) {
    buttonsModalThanks[i].onclick = () => {
        document.body.classList.add('overflow-hidden')
        modalThanks.classList.add('modal--active');
        modalThanks.classList.remove('modal--un-active');
    };
}

function modalThanksClose() {
    document.body.classList.remove('overflow-hidden')
    modalThanks.classList.remove('modal--active');
    modalThanks.classList.add('modal--un-active');
}
