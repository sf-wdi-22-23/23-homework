var map;

function initMap() {
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
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }

  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

	var flamingo = "http://i.imgur.com/6I2hKTZ.png";

	var marker = new google.maps.Marker({
	    position: {lat: 37.790841, lng: -122.401280},
	    map: map,
	    icon: flamingo,
	    title: 'Hello World!'
	});

	var contentString="<h1>General Assembly</h1><p>This is where you go to learn technical skills</p>"

	var infowindow = new google.maps.InfoWindow({
    content: contentString
  	});

  	marker.addListener('click', function() {
    infowindow.open(map, marker);
    });

}

initMap();