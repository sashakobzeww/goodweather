let spots = document.querySelectorAll('.spot');
let spotTriggers = document.querySelectorAll('[id^="spot-trigger"]');

for (let i = 0; i < spotTriggers.length; i++) {

    spotTriggers[i].addEventListener('mouseover', function () {
        spots[i].classList.add("scale-in-center-transform")
    });

    spotTriggers[i].addEventListener('mouseout', function () {
        spots[i].classList.remove("scale-in-center-transform")
    });

}

/*----*/

document.addEventListener("DOMContentLoaded", scrolling, false);

let listItems = document.querySelectorAll(".infographics");

function scrolling(e) {

    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("animation");
        }
    }
}

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
