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
};

headerClose.onclick = () => {
    headerCenter.classList.add("header__center--active");
    headerClose.classList.remove("header__close--active");
    headerNav.classList.remove("header-nav--active");
    headerRight.classList.add("header__right-wrapper--active");
    headerTel.classList.add("header__tel--active");
    headerQuiz.classList.remove("header-quiz--active");
};

openQuiz.onclick = () => {
    headerCenter.classList.remove("header__center--active");
    headerClose.classList.add("header__close--active");
    headerRight.classList.remove("header__right-wrapper--active");
    headerTel.classList.remove("header__tel--active");
    headerQuiz.classList.add("header-quiz--active");
};
