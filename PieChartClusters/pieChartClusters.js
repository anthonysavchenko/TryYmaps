ymaps.ready(function() {
    var map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    var objectManager = new ymaps.ObjectManager({
        clusterize: true,
        // Макет метки кластера pieChart.
        clusterIconLayout: 'default#pieChart',
        // Радиус диаграммы в пикселях.
        clusterIconPieChartRadius: 25,
        // Радиус центральной части макета.
        clusterIconPieChartCoreRadius: 10,
        // Ширина линий-разделителей секторов и внешней обводки диаграммы.
        clusterIconPieChartStrokeWidth: 3,
        // Определяет наличие поля balloon.
        hasBalloon: false
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
                "properties": {"hintContent": "Simple Point"}
            }
        ]
    });

    objectManager.objects.setObjectOptions('0', {iconColor: '#DB425A'});
    objectManager.objects.setObjectOptions('1', {iconColor: '#DB425A'});
    objectManager.objects.setObjectOptions('2', {iconColor: '#DB425A'});
    objectManager.objects.setObjectOptions('3', {iconColor: '#4C4DA2'});
    objectManager.objects.setObjectOptions('4', {iconColor: '#4C4DA2'});
    objectManager.objects.setObjectOptions('5', {iconColor: '#4C4DA2'});
    objectManager.objects.setObjectOptions('6', {iconColor: '#DB425A'});
    objectManager.objects.setObjectOptions('7', {iconColor: '#DB425A'});
    objectManager.objects.setObjectOptions('8', {iconColor: '#DB425A'});
    objectManager.objects.setObjectOptions('9', {iconColor: '#00DEAD'});
});
