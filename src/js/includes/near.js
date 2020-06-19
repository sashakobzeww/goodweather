let button = document.querySelector('.look-map');
let map = document.querySelector('.near__map');

button.addEventListener("click", () => {
    if (!map.classList.contains('near__map--active')) {
        map.classList.add('near__map--active');
        map.classList.remove('near__map--un-active');
    } else {
        map.classList.add('near__map--un-active');
        map.classList.remove('near__map--active');
    }
});

ymaps.ready(initMap);

function initMap() {

    var myMap = new ymaps.Map(
        "mapNear", {
            center: [45.091644, 39.020081],
            zoom: 15,
            height: 520,
            controls: []
        }
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.082179, 39.008773], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/near__ico--1.svg',
                iconImageSize: [242, 158],
                iconImageOffset: [-121,-80],
                zIndex: 2
            }
        )
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.089612, 38.996889], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/near__ico--2.svg',
                iconImageSize: [216, 158],
                iconImageOffset: [-108,-79],
                zIndex: 2
            }
        )
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.093402, 39.035691], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/near__ico--3.svg',
                iconImageSize: [317, 158],
                iconImageOffset: [-158,-79],
                zIndex: 2
            }
        )
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.083121, 38.994254], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/near__ico--4.svg',
                iconImageSize: [282, 158],
                iconImageOffset: [-141,-79],
                zIndex: 2
            }
        )
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.087724, 39.016496], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/near__ico--5.svg',
                iconImageSize: [275, 158],
                iconImageOffset: [-137,-79],
                zIndex: 2
            }
        )
    );

    myMap.geoObjects.add(
        new ymaps.Placemark(
            [45.083086, 39.034671], {
                balloonContent: '',
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/near__ico--6.svg',
                iconImageSize: [266, 158],
                iconImageOffset: [-133,-79],
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
                iconImageHref: './img/near__ico--pointer.svg',
                iconImageSize: [250, 208],
                iconImageOffset: [-125,-200],
                zIndex: 2
            }
        )
    );
};
