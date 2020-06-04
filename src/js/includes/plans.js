let tabsHeadersLiter = document.querySelectorAll('.plans__tabs-headers--liter .plans__tabs-header');
let tabsHeadersPorch = document.querySelectorAll('.plans__tabs-headers--porch .plans__tabs-header');
let tabsBorderLiter = document.querySelector('.plans__tabs-border');
let tabs = document.querySelectorAll(".plans__tab");
let tabsLiter1 = document.querySelectorAll(".plans__tab--liter-1");
let tabsLiter2 = document.querySelectorAll(".plans__tab--liter-2");
let tabsPorch1 = document.querySelectorAll(".plans__tab--porch-1");
let tabsPorch2 = document.querySelectorAll(".plans__tab--porch-2");
let tabsPorch3 = document.querySelectorAll(".plans__tab--porch-3");

for (let i = 0; i < tabsHeadersLiter.length; i++) {
    tabsHeadersLiter[i].onclick = () => {
        for (let i = 0; i < tabs.length; i++)  {
            tabs[i].classList.remove('plan__tab--active-liter')
            if (tabsHeadersLiter[i] !== undefined) {
                tabsHeadersLiter[i].classList.remove('plans__tabs-header--active')
            }
        }

        if (i === 0) {
            for (let j = 0; j < tabsLiter1.length; j++) {
                tabsLiter1[j].classList.add('plan__tab--active-liter')
                tabsHeadersLiter[i].classList.add('plans__tabs-header--active')
            }
        }

        if (i === 1) {
            for (let j = 0; j < tabsLiter2.length; j++) {
                tabsLiter2[j].classList.add('plan__tab--active-liter')
                tabsHeadersLiter[i].classList.add('plans__tabs-header--active')
            }
        }

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
            for (let j = 0; j < tabsPorch1.length; j++) {
                tabsPorch1[j].classList.add('plan__tab--active-porch')
                tabsHeadersPorch[i].classList.add('plans__tabs-header--active')
            }
        }

        if (i === 1) {
            for (let j = 0; j < tabsPorch2.length; j++) {
                tabsPorch2[j].classList.add('plan__tab--active-porch')
                tabsHeadersPorch[i].classList.add('plans__tabs-header--active')
            }
        }

        if (i === 2) {
            for (let j = 0; j < tabsPorch3.length; j++) {
                tabsPorch3[j].classList.add('plan__tab--active-porch')
                tabsHeadersPorch[i].classList.add('plans__tabs-header--active')
            }
        }

    };
}
