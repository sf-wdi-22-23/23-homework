var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
    zoom: 11, 
    styles:[{"featureType":"all","elementType":"labels.icon","stylers":[{"color":"#d6837f"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#d6837f"},{"weight":"0.50"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#dde1d2"},{"weight":"0.50"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"color":"#d6837f"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#d6837f"},{"gamma":"1.00"},{"weight":"0.50"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"gamma":"0.65"},{"weight":"0.65"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#6ebfcc"},{"visibility":"on"},{"weight":"0.50"}]}],

  });
	var gaMarker; 
	var image = "ga_cog.png";
	gaMarker = new google.maps.Marker({
		position: {lat: 37.790841, lng: -122.401280},
		map: map,
		icon: image,
		title: "GA Marker"
	});

	var contentString = '<h2>General Assembly</h2>' +
'<p>Established in early 2011 as an innovative community in New York City for entrepreneurs and startup companies, General Assembly is an educational institution that transforms thinkers into creators through education in technology, business and design at fourteen campuses across four continents.</p>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	gaMarker.addListener('click', function() {
		infowindow.open(map, gaMarker);
	});
}
initMap();