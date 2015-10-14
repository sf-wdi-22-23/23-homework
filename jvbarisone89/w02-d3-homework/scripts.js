var map;

var image = "capPoint.png";

var myLatLng = {lat: 37.790841, lng: -122.401280};

var contentString = '<h2>General Assembly</h2>' + '<p>An Ecosystem For Lifelong Learners. 14 Campuses Wordlwide. Apply Meow!</p>';

var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

function initMap() {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
    zoom: 13,
    styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
  });

  var gaMarker = new google.maps.Marker({
  	position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon: image
  });

gaMarker.addListener('click', function() {
    infowindow.open(map, gaMarker);
  });

}


initMap();


