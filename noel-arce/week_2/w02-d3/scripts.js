$(document).ready(function() {
	
	function initMap() {

		//[STEP #0 - Simple Map]
		// var map;
		// function initMap() {
		//   map = new google.maps.Map(document.getElementById('map-canvas'), {
		//     center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
		//     zoom: 8
		//   });
		// }

		//[STEP #1 - Styled Map (build-on to Map 1)]
	  var customMapType = new google.maps.StyledMapType([
	      {
	        stylers: [
	          {hue: '#d2b84c'},
	          {visibility: 'simplified'},
	          {gamma: 0.5},
	          {weight: 0.5}
	        ]
	      },
	      {
	        elementType: 'labels',
	        stylers: [{visibility: 'on'}]
	      },
	      {
	        featureType: 'water',
	        stylers: [{color: '#6495ed'}]
	      }
	    ], {
	      name: 'Custom Style'
	  });
	  var customMapTypeId = 'custom_style';

	  var map = new google.maps.Map(document.getElementById('map-canvas'), {
	    zoom: 15,
	    center: {lat: 37.790841, lng: -122.401280},  // GA.
	    mapTypeControlOptions: {
	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
	    }
	  });

	  map.mapTypes.set(customMapTypeId, customMapType);
	  map.setMapTypeId(customMapTypeId);

	  //[STEP #2 - Add Markers]
	  // var marker = new google.maps.Marker({
    //    	 position: {lat: 37.790841, lng: -122.401280},
    //    	 map: map,
    //    	 title: 'Hello World!'
  	// });

  	//[STEP #3 - Simple Marker Icon]
  	var image = 'ga_cog.png';
  	var gaMarker = new google.maps.Marker({
    	position: {lat: 37.790841, lng: -122.401280},
    	map: map,
    	icon: image
    });

    //[STEP #4 - Info Window]
    var contentString = '<h2>General Assembly</h2>' + '<p>The best developer bootcamp! Great full-time and part-time courses.  WDI 23 > 22!!! GO SPACE JAMMERS!!!</p>';

    var infowindow = new google.maps.InfoWindow({
    	content: contentString
  	});

  	gaMarker.addListener('click', function() {
    	infowindow.open(map, gaMarker);
  	});

	}

	initMap();
});
