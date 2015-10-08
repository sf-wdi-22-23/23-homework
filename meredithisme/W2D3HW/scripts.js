var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 37.790841, lng: -122.401280},  // General Assembly, SF
    zoom: 13,

    styles: [{
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "stylers": [
            {
                "saturation": -17
            },
            {
                "gamma": 0.36
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3f518c"
            }
        ]
    }]


  });

	var img = 'https://github.com/sf-wdi-22-23/modules/blob/master/w02-working-with-objects/d3-homework/starter-code/ga_cog.png?raw=true';

    var marker = new google.maps.Marker({
    position: {lat: 37.790841, lng: -122.401280},
    map: map,
    icon: img
 	});

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">General Assembly</h1>'+
      '<div id="bodyContent">'+
      '<p><b>General Assembly</b>, also referred to as the best Web Development Program Everrrr \n'+
      'San Francisco Based.'+
       'Tech, Design, All Things Creative and Problem Solvers lie here.'+
      
      '<p>GA, <a href="https://generalassemb.ly/">'+
      'https://generalassemb.ly/</a> '+
      '(last visited Oct 08, 201).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString


  });

    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

initMap();