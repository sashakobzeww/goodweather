let modal = document.querySelector('.modal--active');
let modalBackground = document.querySelector('.modal--active .modal__background');
let modalClose = document.querySelector('.modal--active .modal__close');

let modalRequest = document.querySelector(".modal-request");
let buttonModalRequest = document.querySelector(".homeNeed__get-link");


modalClose.onclick = () => {
    modal.classList.remove('modal--active');
};

modalBackground.onclick = () => {
    modal.classList.remove('modal--active');
};

buttonModalRequest.onclick = (e) => {
    e.preventDefault();
    modalRequest.classList.add('modal--active');
};
