let tabsHeaders = document.querySelectorAll('.report__tabs-header');
let tabsBorder = document.querySelector('.report__tabs-border');
let tabs = document.querySelectorAll('.report__tab');

for (let i = 0; i < tabsHeaders.length; i++) {
    tabsHeaders[i].onclick = () => {

        for (let i = 0; i < tabsHeaders.length; i++) {
            tabsHeaders[i].classList.remove('report__tabs-header--active')
            tabs[i].classList.remove('report__tab--active')
        }

        tabsHeaders[i].classList.add('report__tabs-header--active');
        tabs[i].classList.add('report__tab--active')

        if (i === 0) {
            tabsBorder.classList.remove('report__tabs-border--2')
            tabsBorder.classList.add('report__tabs-border--1');
        }
        if (i === 1) {
            tabsBorder.classList.remove('report__tabs-border--1')
            tabsBorder.classList.add('report__tabs-border--2');
        }

    }
}

