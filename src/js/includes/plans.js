let tabsHeadersPorch = document.querySelectorAll('.plans__tabs-headers--porch .plans__tabs-header');
let tabsHeadersPorchP = document.querySelectorAll('.plans__tabs-headers--porch .plans__tabs-header-p');
let tabsHeadersPorchMob = document.querySelectorAll('.plans__tabs-headers--porch.only-mobile .plans__tabs-header');
let tabsHeadersLiter = document.querySelectorAll('.plans__tabs-headers--liter .plans__tabs-header');
let tabs = document.querySelectorAll(".plans__tab");
let windowWidth = window.outerWidth;

let tabs11 = document.querySelector(".plans__tab--1-1");
let tabs12 = document.querySelector(".plans__tab--1-2");
let tabs13 = document.querySelector(".plans__tab--1-3");
let tabs21 = document.querySelector(".plans__tab--2-1");
let tabs22 = document.querySelector(".plans__tab--2-2");
let tabs23 = document.querySelector(".plans__tab--2-3");

var currentTabPorch;
var currentTabLitter;

for (let i = 0; i < tabsHeadersLiter.length; i++) {
    tabsHeadersLiter[i].onclick = () => {
        for (let i = 0; i < tabs.length; i++)  {
            tabs[i].classList.remove('plan__tab--active-liter');
            if (tabsHeadersLiter[i] !== undefined) {
                tabsHeadersLiter[i].classList.remove('plans__tabs-header--active')
            }
        }

        tabsHeadersLiter[i].classList.add('plans__tabs-header--active');
        currentTabPorch = i + 1;

        changeTab(currentTabPorch, currentTabLitter);

    };
}

if (windowWidth > 768) {
    for (let i = 0; i < tabsHeadersPorch.length; i++) {
        tabsHeadersPorch[i].onclick = () => clickTab(i);
        if (tabsHeadersPorchP[i] !== undefined) {
            tabsHeadersPorchP[i].onclick = () => clickTab(i);
        }
    }
} else {
    for (let i = 0; i < tabsHeadersPorchMob.length; i++) {
        tabsHeadersPorchMob[i].onclick = () => clickTab(i);
    }
}

function clickTab(i) {
    if (windowWidth > 768) {
        for (let i = 0; i < tabs.length; i++)  {
            tabs[i].classList.remove('plan__tab--active-porch');
            if (tabsHeadersPorch[i] !== undefined) {
                tabsHeadersPorch[i].classList.remove('plans__tabs-header--active')
            }
            if (tabsHeadersPorchP[i] !== undefined) {
                tabsHeadersPorchP[i].classList.remove('plans__tabs-header-p--active')
            }
        }
        tabsHeadersPorch[i].classList.add('plans__tabs-header--active');
        if (tabsHeadersPorchP[i] !== undefined) {
            tabsHeadersPorchP[i].classList.add('plans__tabs-header-p--active');
        }
    } else {
        for (let i = 0; i < tabsHeadersPorchMob.length; i++)  {
            tabsHeadersPorchMob[i].classList.remove('plan__tab--active-porch');
            if (tabsHeadersPorchMob[i] !== undefined) {
                tabsHeadersPorchMob[i].classList.remove('plans__tabs-header--active')
            }
        }
        tabsHeadersPorchMob[i].classList.add('plans__tabs-header--active');
    }

    currentTabLitter = i + 1;

    changeTab(currentTabPorch, currentTabLitter);

}

function changeTab (currentTabPorch, currentTabLitter) {
    currentTabPorch === undefined ? currentTabPorch = 1 : currentTabPorch = currentTabPorch;
    currentTabLitter === undefined ? currentTabLitter = 1 : currentTabLitter = currentTabLitter;

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('plans__tab--active');
    }

    if (currentTabPorch === 1 && currentTabLitter === 1) {
        tabs11.classList.add('plans__tab--active');
    }
    if (currentTabPorch === 1 && currentTabLitter === 2) {
        tabs12.classList.add('plans__tab--active');
    }
    if (currentTabPorch === 1 && currentTabLitter === 3) {
        tabs13.classList.add('plans__tab--active');
    }
    if (currentTabPorch === 2 && currentTabLitter === 1) {
        tabs21.classList.add('plans__tab--active');
    }
    if (currentTabPorch === 2 && currentTabLitter === 2) {
        tabs22.classList.add('plans__tab--active');
    }
    if (currentTabPorch === 2 && currentTabLitter === 3) {
        tabs23.classList.add('plans__tab--active');
    }

}
