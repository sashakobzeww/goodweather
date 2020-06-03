let menuButton = document.querySelector(".header__menu-button");
let headerClose = document.querySelector(".header__close");

let headerNav = document.querySelector(".header-nav");
let headerCenter = document.querySelector(".header__center");
let headerRight = document.querySelector(".header__right-wrapper");
let headerTel = document.querySelector(".header__tel");

function toggle() {
    headerNav.classList.toggle("header-nav--active");
    headerCenter.classList.toggle("header__center--active");
    headerRight.classList.toggle("header__right-wrapper--active");
    headerTel.classList.toggle("header__tel--active");
    headerClose.classList.toggle("header__close--active");
};

menuButton.onclick = () => {
    toggle();
};

headerClose.onclick = () => {
    toggle();
};
