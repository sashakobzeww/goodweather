let spots = document.querySelectorAll('.spot');
let spotTriggers = document.querySelectorAll('[id^="spot-trigger"]');

for (let i = 0; i < spotTriggers.length; i++) {

    spotTriggers[i].addEventListener('mouseover', function () {
        spots[i].classList.add("scale-in-center-transform")
    });

}

/*----*/

document.addEventListener("scroll", scrolling, false);

let listItems = document.querySelectorAll("[id^='animation-section-']");

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
    let result = ((top + height >= 0) && (height + window.innerHeight >= bottom));

    return result
}
