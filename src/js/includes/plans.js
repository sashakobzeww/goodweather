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
        }

        if (i === 0) {
            for (let i = 0; i < tabsLiter1.length; i++) {
                tabsLiter1[i].classList.add('plan__tab--active-liter')
            }
        }

        if (i === 1) {
            for (let i = 0; i < tabsLiter2.length; i++) {
                tabsLiter2[i].classList.add('plan__tab--active-liter')
            }
        }

    };
}


for (let i = 0; i < tabsHeadersPorch.length; i++) {
    tabsHeadersPorch[i].onclick = () => {
        for (let i = 0; i < tabs.length; i++)  {
            tabs[i].classList.remove('plan__tab--active-porch')
        }

        if (i === 0) {
            for (let i = 0; i < tabsPorch1.length; i++) {
                tabsPorch1[i].classList.add('plan__tab--active-porch')
            }
        }

        if (i === 1) {
            for (let i = 0; i < tabsPorch2.length; i++) {
                tabsPorch2[i].classList.add('plan__tab--active-porch')
            }
        }

        if (i === 2) {
            for (let i = 0; i < tabsPorch3.length; i++) {
                tabsPorch3[i].classList.add('plan__tab--active-porch')
            }
        }

    };
}
