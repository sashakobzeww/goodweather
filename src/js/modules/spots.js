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
