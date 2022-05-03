// ==========================================================================
// ymap
// ==========================================================================
import ymaps from 'ymaps';

export default class Ymap {

    constructor() {

        let
            $elem = $('#js-ymap'),
            mapLat = $elem.attr('data-lat'),
            mapLon = $elem.attr('data-lon'),
            mapZoom = $elem.attr('data-zoom'),
            markerName = $elem.attr('data-name'),
            markerDescr = $elem.attr('data-descr'),
            markerPath = $elem.attr('data-marker'),
            markerWidth = $elem.attr('data-marker-width'),
            markerHeight = $elem.attr('data-marker-height'),
            markerOffsetX = markerWidth * (-0.5),
            markerOffsetY = markerHeight * (-1.0);

        ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
            const map = new maps.Map($elem[0], {
                center: [mapLat, mapLon],
                zoom: mapZoom,
            });

            const marker = new maps.Placemark(map.getCenter(), {
                iconContent: markerName,
                hintContent: markerDescr,
            }, {
                iconLayout: 'default#image',
                iconImageHref: markerPath,
                iconImageSize: [markerWidth, markerHeight],
                iconImageOffset: [markerOffsetX, markerOffsetY],
            });
            map.geoObjects.add(marker);
        })
            .catch(error => console.error(error));

    }

}
