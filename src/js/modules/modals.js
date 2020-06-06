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
    modalRequest.classList.add('modal--active');
    document.body.classList.add('overflow-hidden')
};

function modalClose() {
    document.body.classList.remove('overflow-hidden')
    modalRequest.classList.remove('modal--active');
    setTimeout(function () {
        modalRequestForm.classList.add('modal-request__form--active');
        modalRequestThanks.classList.remove('modal-request-thanks--active');
    }, 500)
}

/*---------*/
let modalPlan = document.querySelector(".modal-plan");
let modalPlanBackground = document.querySelector('.modal-plan .modal__background');
let modalPlanCloseIco = document.querySelector('.modal-plan .modal__close');
let buttonsModalPlan = document.querySelectorAll(".plan__tab--active-liter.plan__tab--active-porch path");
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
        modalPlan.classList.add('modal--active');
        document.body.classList.add('overflow-hidden')
    };
}

function modalPlanClose() {
    document.body.classList.remove('overflow-hidden')
    modalPlan.classList.remove('modal--active');
}

/*---------*/
let modalThanks = document.querySelector(".modal-thanks");
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
        modalThanks.classList.add('modal--active');
        document.body.classList.add('overflow-hidden')
    };
}

function modalThanksClose() {
    document.body.classList.remove('overflow-hidden')
    modalThanks.classList.remove('modal--active');
}
