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
