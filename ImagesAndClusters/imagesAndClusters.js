ymaps.ready(function() {
    var map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    var objectManager = new ymaps.ObjectManager({
        clusterize: true
    });

    map.geoObjects.add(objectManager);

    objectManager.add({
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "id": 0,
                "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 1,
                "geometry": {"type": "Point", "coordinates": [55.863338, 37.665466]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 2,
                "geometry": {"type": "Point", "coordinates": [55.863338, 37.665466]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 3,
                "geometry": {"type": "Point", "coordinates": [55.744522, 37.616378]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 4,
                "geometry": {"type": "Point", "coordinates": [55.780898, 37.642889]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 5,
                "geometry": {"type": "Point", "coordinates": [55.793559, 37.435983]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 6,
                "geometry": {"type": "Point", "coordinates": [55.800584, 37.675638]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 7,
                "geometry": {"type": "Point", "coordinates": [55.716733, 37.589988]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 8,
                "geometry": {"type": "Point", "coordinates": [55.775724, 37.56084]},
                "properties": {"hintContent": "Simple Point"}
            },
            {
                "type": "Feature",
                "id": 9,
                "geometry": {"type": "Point", "coordinates": [55.822144, 37.433781]},
                "properties": {"hintContent": "V Simple Point"},
                "options": {
                    "iconLayout": 'default#image',
                    "iconImageHref": 'https://yastatic.net/s3/lpc/svg/lc-share/round/colorful/youtube-2.svg',
                    "iconImageSize": [17, 17],
                    "iconImageOffset": [-9, -9]            
                }
            }
        ]
    });

    // Меткам можно задавать оформление индивидуально
    objectManager.objects.setObjectOptions('0', {preset: 'islands#violetDotIcon'});
    objectManager.objects.setObjectOptions('1', {preset: 'islands#pinkCircleDotIcon'});
    objectManager.objects.setObjectOptions('2', {preset: 'islands#blackCircleDotIcon'});
    objectManager.objects.setObjectOptions('3', {preset: 'islands#redStretchyIcon'});
    objectManager.objects.setObjectOptions('4', {preset: 'islands#darkBlueIcon'});
    objectManager.objects.setObjectOptions('5', {preset: 'islands#orangeAutoIcon'});
    objectManager.objects.setObjectOptions('6', {preset: 'islands#darkOrangeCarWashIcon'});
    objectManager.objects.setObjectOptions('7', {preset: 'islands#redDeliveryCircleIcon'});

    // Также можно задавать более сложное оформление, например, изображение вместо метки
    objectManager.objects.setObjectOptions('8', {
        iconLayout: 'default#image',
        iconImageHref: 'https://yastatic.net/s3/lpc/svg/lc-share/round/colorful/youtube-2.svg',
        iconImageSize: [17, 17],
        iconImageOffset: [-9, -9]
    });

    // У кластера можно поменять метку по какому-нибудь событию мыши (например, навередение)
    objectManager.clusters.events.add(['mouseenter', 'mouseleave'], function (e) {
        objectManager.clusters.setClusterOptions(e.get('objectId'), {
            preset: e.get('type') == 'mouseenter' ? 'islands#redClusterIcons' : 'islands#blueClusterIcons'
        });
    });
});
