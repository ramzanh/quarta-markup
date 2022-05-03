// ==========================================================================
// gmap
// ==========================================================================
import GoogleMapsLoader from 'google-maps';

export default class Gmap {
    constructor() {

        let elem = document.getElementById('js-gmap'),
            $elem = $(elem),
            googleMapLat = $elem.attr('data-lat'),
            googleMapLon = $elem.attr('data-lon'),
            googleMapKey = $elem.attr('data-api-key'),
            googleMapZoom = $elem.attr('data-zoom'),
            googleMapMarkerPath = $elem.attr('data-marker');

        if (elem) {
            GoogleMapsLoader.KEY = googleMapKey;
            GoogleMapsLoader.load(function (google) {

                let options = {
                    zoom: parseInt(googleMapZoom, 10),
                    center: new google.maps.LatLng(googleMapLat, googleMapLon),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true
                };
                let map = new google.maps.Map(elem, options);

                new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(googleMapLat, googleMapLon),
                    icon: {
                        url: googleMapMarkerPath,
                        size: new google.maps.Size(32, 46)
                    }
                });

            });
        }

    }
}
