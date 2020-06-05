let spots = document.querySelectorAll('.spot');
let spotTriggers = document.querySelectorAll('[id^="spot-trigger"]');

for (let i = 0; i < spotTriggers.length; i++) {

    spotTriggers[i].addEventListener('mouseover', function () {
        spots[i].classList.add("scale-in-center")
    });

    spotTriggers[i].addEventListener('mouseout', function () {
        spots[i].classList.remove("scale-in-center")
    });

}
