let tabsHeadersLiter = document.querySelectorAll('.plans__tabs-headers--liter .plans__tabs-header');
let tabsHeadersPorch = document.querySelectorAll('.plans__tabs-headers--porch .plans__tabs-header');
let tabs = document.querySelectorAll(".plans__tab");

let tabs11 = document.querySelector(".plans__tab--1-1");
let tabs12 = document.querySelector(".plans__tab--1-2");
let tabs13 = document.querySelector(".plans__tab--1-3");
let tabs21 = document.querySelector(".plans__tab--2-1");
let tabs22 = document.querySelector(".plans__tab--2-2");
let tabs23 = document.querySelector(".plans__tab--2-3");

var a;
var b;

for (let i = 0; i < tabsHeadersLiter.length; i++) {
    tabsHeadersLiter[i].onclick = () => {
        for (let i = 0; i < tabs.length; i++)  {
            tabs[i].classList.remove('plan__tab--active-liter')
            if (tabsHeadersLiter[i] !== undefined) {
                tabsHeadersLiter[i].classList.remove('plans__tabs-header--active')
            }
        }

        if (i === 0) {
            tabsHeadersLiter[i].classList.add('plans__tabs-header--active');
            a = i;
        }

        if (i === 1) {
            tabsHeadersLiter[i].classList.add('plans__tabs-header--active');
            a = i;
        }

        changeTab(a, b);

    };
}

for (let i = 0; i < tabsHeadersPorch.length; i++) {
    tabsHeadersPorch[i].onclick = () => {
        for (let i = 0; i < tabs.length; i++)  {
            tabs[i].classList.remove('plan__tab--active-porch')
            if (tabsHeadersPorch[i] !== undefined) {
                tabsHeadersPorch[i].classList.remove('plans__tabs-header--active')
            }
        }

        if (i === 0) {
            tabsHeadersPorch[i].classList.add('plans__tabs-header--active');
            b = i;
        }

        if (i === 1) {
            tabsHeadersPorch[i].classList.add('plans__tabs-header--active');
            b = i;
        }

        if (i === 2) {
            tabsHeadersPorch[i].classList.add('plans__tabs-header--active');
            b = i;
        }

        changeTab(a, b);
    };
}

function changeTab (a, b) {
    if (a === undefined) {
        a = 0
    }
    if (b === undefined) {
        b = 0
    }
    console.log({a, b});

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('plans__tab--active');
    }

    if (a === 0 && b === 0) {
        tabs11.classList.add('plans__tab--active');
    }

    if (a === 1 && b === 1) {
        tabs22.classList.add('plans__tab--active');
    }

    if (a === 2 && b === 0) {
        tabs13.classList.add('plans__tab--active');
    }

    if (a === 0 && b === 1) {
        tabs12.classList.add('plans__tab--active');
    }

    if (a === 1 && b === 0) {
        tabs21.classList.add('plans__tab--active');
    }

    if (a === 2 && b === 1) {
        tabs23.classList.add('plans__tab--active');
    }
}
