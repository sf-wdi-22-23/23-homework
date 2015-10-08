$(document).ready(function () {


  var map;

  function initMap() {

    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
      zoom: 13,
      styles: [{"featureType":"all","elementType":"all","stylers":
      [{"hue":"#cd5720"},{"lightness":13}]},
      {"featureType":"administrative.locality","elementType":"labels.text","stylers":[
      {"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":
      [{"color":"#b3ada5"}]},{"featureType":"landscape.natural","elementType":"all","stylers":
      [{"color":"#d6cfc9"}]},{"featureType":"poi","elementType":"geometry","stylers":
      [{"color":"#d9d9d9"}]},{"featureType":"poi","elementType":"labels","stylers":
      [{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels","stylers":
      [{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":
      [{"visibility":"on"},{"color":"#cd5720"}]},
      {"featureType":"road.highway","elementType":"labels.icon","stylers":
      [{"gamma":5}]},{"featureType":"road.arterial","elementType":"geometry","stylers":
      [{"color":"#cd5720"}]},
      {"featureType":"road.arterial","elementType":"labels.text","stylers":
      [{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":
      [{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":
      [{"gamma":5}]},{"featureType":"road.local","elementType":"geometry","stylers":
      [{"color":"#a69e99"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":
      [{"visibility":"off"},{"weight":0.1},{"gamma":5}]},
      {"featureType":"water","elementType":"geometry","stylers":[{"color":"#31adcc"}]}]
    });
  
    var myLatLng = {lat: 37.783465, lng: -122.447585};
    var image = "ga_cog.png";
    var gaMarker = new google.maps.Marker({ 

      position: myLatLng,
      map: map,
      title: 'Gemeral Assembey is here!',
      icon: image  
    });

    var contentString = '<h2>General Assembly</h2>' + '<p>The best fucking school in the world!</p>';
    var infowindow = new google.maps.InfoWindow({
    content: contentString

  });
      infowindow.open(map, gaMarker);

  }

  initMap();

});