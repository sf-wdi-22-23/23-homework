$(document).ready(function() {
var map;
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};
  var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#890000'},
          {visibility: 'simplified'},
          {gamma: 0.5},
          {weight: 0.5}
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#890000'}]
      }
    ], {
      name: 'Custom Style'
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 12,
    center: myLatLng,  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

}
	initMap();
});
	
