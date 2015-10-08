var map;

var gaMarker;

function initMap() {

	

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
    zoom: 13,
    styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
  });
	
	var gaLatLng = map.center;

	var gaIcon = "ga_cog.png";

	var gaContent = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">General Assembly, SF</h1><div id="bodyContent"><p>At General Assembly, we are creating a global community of individuals empowered to pursue work they love, by offering full-time immersive programs, long-form courses, and classes and workshops on the most relevant skills of the 21st century – from web development and user experience design, to business fundamentals, to data science, to product management and digital marketing.</p><p>Website: ' + '<a href="https://generalassemb.ly/"">https://generalassemb.ly/</a></p></div></div>';

	var infoWindow = new google.maps.InfoWindow({
		content: gaContent
	});

	var gaMarker = new google.maps.Marker({
		position: gaLatLng,
		zoom: 4,
		map: map,
		title: 'General Assembly!',
		icon: gaIcon,
});
  gaMarker.addListener('click', function() {
    infoWindow.open(map, gaMarker);
  });
}

initMap();