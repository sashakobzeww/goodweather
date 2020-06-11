/* Элементы управления */
let menuButton = document.querySelector(".header__menu-button");
let headerClose = document.querySelector(".header__close");
let openQuiz = document.querySelector('#openQuiz');

/* Скрываемые и появляемые элементы */
let headerNav = document.querySelector(".header-nav");
let headerCenter = document.querySelector(".header__center");
let headerRight = document.querySelector(".header__right-wrapper");
let headerTel = document.querySelector(".header__tel");
let headerQuiz = document.querySelector('.header-quiz');

/* Открыть меню */
menuButton.onclick = () => {
    headerCenter.classList.remove("header__center--active");
    headerClose.classList.add("header__close--active");
    headerNav.classList.add("header-nav--active");
    headerRight.classList.remove("header__right-wrapper--active");
    headerTel.classList.remove("header__tel--active");
    headerQuiz.classList.remove("header-quiz--active");
    document.body.classList.remove('overflow-hidden');
    if (window.innerWidth < 768) {
        menuButton.classList.remove("header__menu-button--active")
    }
};

/* Открыть квиз */
openQuiz.onclick = () => {
    headerCenter.classList.remove("header__center--active");
    headerClose.classList.add("header__close--active");
    headerRight.classList.remove("header__right-wrapper--active");
    headerTel.classList.remove("header__tel--active");
    headerQuiz.classList.add("header-quiz--active");
    document.body.classList.add('overflow-hidden');
    if (window.innerWidth < 768) {
        menuButton.classList.remove("header__menu-button--active")
    }
};

/* Закрыть меню или квиз */
headerClose.onclick = () => {
    headerCenter.classList.add("header__center--active");
    headerClose.classList.remove("header__close--active");
    headerNav.classList.remove("header-nav--active");
    headerRight.classList.add("header__right-wrapper--active");
    headerTel.classList.add("header__tel--active");
    headerQuiz.classList.remove("header-quiz--active");
    document.body.classList.remove('overflow-hidden');
    menuButton.classList.add("header__menu-button--active")
};
