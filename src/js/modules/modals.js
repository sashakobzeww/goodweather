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
};

function modalClose() {
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
    };
}

function modalPlanClose() {
    modalPlan.classList.remove('modal--active');
}
