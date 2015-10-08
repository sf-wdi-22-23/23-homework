$(document).ready(function() {
		var map;
	function initMap() {

		var map = new google.maps.Map(document.getElementById('map-canvas'), {
		  zoom: 11,
		  center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF.
		  // mapTypeControlOptions: {
		  //   mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
		  // }
		});

	  var customMapType = new google.maps.StyledMapType([
	      {
	        stylers: [
	          {hue: '#a2d7d8'},
	          {visibility: 'simplified'},
	          {gamma: 0.8},
	          {weight: 0.9}
	        ]
	      },
	      {
	        elementType: 'labels',
	        stylers: [{visibility: 'on'}]
	      },
	      {
	        featureType: 'water',
	        stylers: [{color: '#00ccd6'}]
	      }
	    ], {
	      name: 'Custom Style'
	  });
	  var customMapTypeId = 'custom_style';



	  map.mapTypes.set(customMapTypeId, customMapType);
	  map.setMapTypeId(customMapTypeId);

	   var image = 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/2/005/0a3/2df/1681553.png';
  		var beachMarker = new google.maps.Marker({
   			position: {lat: 37.790841, lng: -122.401280},
    		map: map,
    		icon: image
    		});

	}

	initMap();


});




// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map-canvas'), {
//     center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
//     zoom: 8
//   });     
// }

// initMap();
