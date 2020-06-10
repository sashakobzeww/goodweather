import ymaps from 'ymaps';

ymaps
    .load()
    .then(maps => {
        const map = new maps.Map('map', {
            center: [45.092098, 39.016797],
            zoom: 15
        });
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));
