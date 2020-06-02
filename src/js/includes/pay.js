let tabsHeaders = document.querySelectorAll('.pay__tabs-header');
let tabsBorder = document.querySelector('.pay__tabs-border');
let tabs = document.querySelectorAll('.pay__tab');

for (let i = 0; i < tabsHeaders.length; i++) {
    tabsHeaders[i].onclick = () => {

        for (let i = 0; i < tabsHeaders.length; i++) {
            tabsHeaders[i].classList.remove('pay__tabs-header--active')
            tabs[i].classList.remove('pay__tab--active')
        }

        tabsHeaders[i].classList.add('pay__tabs-header--active');
        tabs[i].classList.add('pay__tab--active')

        if (i === 0) {
            tabsBorder.classList.remove('pay__tabs-border--2')
            tabsBorder.classList.remove('pay__tabs-border--3')
            tabsBorder.classList.add('pay__tabs-border--1');
        }
        if (i === 1) {
            tabsBorder.classList.remove('pay__tabs-border--1')
            tabsBorder.classList.remove('pay__tabs-border--3')
            tabsBorder.classList.add('pay__tabs-border--2');
        }
        if (i === 2) {
            tabsBorder.classList.remove('pay__tabs-border--1')
            tabsBorder.classList.remove('pay__tabs-border--2')
            tabsBorder.classList.add('pay__tabs-border--3');
        }

    }
}

