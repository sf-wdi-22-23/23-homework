$(document).ready(function() {

	var map;
	var gaImage= 'ga_cog.png';

//basic map
//adding directions windwow
	function initMap() {     
	  var directionsDisplay = new google.maps.DirectionsRenderer;
      var directionsService = new google.maps.DirectionsService;
	  map = new google.maps.Map(document.getElementById('map-canvas'), {
	    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
	    zoom: 8
	  });
	}

	initMap();


	// make a marker & give it an info box
	var myHouse = 'house.png';
	var contentString = '<div id="content">'+
      		'<div id="siteNotice">'+
      		'</div>'+
      		'<h1 id="firstHeading" class="firstHeading">340 Paula Lane</h1>'+
      		'<div id="bodyContent">'+
      		'<p><b>Breanas House</b>,  It lies west of the town, Petaluma.</p>' +
      		'</div>'+
      		'</div>';
	

	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});

	    var breanaMarkerWithInfoWindow = new google.maps.Marker({
        position: {lat: 38.23759, lng: -122.660188}, // pos
        map: map,
        icon: myHouse,
        title: "Breana's House"
    });

    // if clicked display information box

    breanaMarkerWithInfoWindow.addListener('click', function() {
        infowindow.open(map, breanaMarkerWithInfoWindow);
    });

    //directions box
    //function initMap() {
      // var directionsDisplay = new google.maps.DirectionsRenderer;
      // var directionsService = new google.maps.DirectionsService;
    //  var map = new google.maps.Map(document.getElementById('map'), {
    //    zoom: 7,
    //   center: {lat: 41.85, lng: -87.65}
    //  });
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById('right-panel'));

      var control = document.getElementById('floating-panel');
      control.style.display = 'block';
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

      var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
      };
      document.getElementById('start').addEventListener('change', onChangeHandler);
      document.getElementById('end').addEventListener('change', onChangeHandler);
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
		  var start = document.getElementById('start').value;
		  var end = document.getElementById('end').value;
		  directionsService.route({
		    	origin: start,
		    	destination: end,
		    	travelMode: google.maps.TravelMode.DRIVING
		  }, function(response, status) {
		    if (status === google.maps.DirectionsStatus.OK) {
		      directionsDisplay.setDirections(response);
		    } else {
		      window.alert('Directions request failed due to ' + status);
		    }
		  });

});

//var newMarker = new google.maps.Marker({
	//     position: {
	//         lat: 38.23759, 
	//         lng: -122.660188
	//     },
	//     map: map,
	//     icon: myHouse
	// });
