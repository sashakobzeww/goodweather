ymaps.ready(initMap);

function initMap() {

    var myMap = new ymaps.Map(
        "map", {
            center: [45.091644, 39.020081],
            zoom: 15,
            height: 520,
            controls: []
        }
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.087191, 39.016463], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/map__1.png',
                iconImageSize: [200, 200],
                iconImageOffset: [-100,-150],
                zIndex: 2
            }
        )
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.090678, 39.025003], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/map__2.svg',
                iconImageSize: [200, 200],
                iconImageOffset: [-100,-150],
                zIndex: 2
            }
        )
    );

    if (window.innerWidth <= 768) {
        myMap.behaviors.disable('drag')
    }
};
