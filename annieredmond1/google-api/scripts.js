$(document).ready(function() {
  
    var map;

    function initMap() {
        var myLatLng = {lat: -25.363, lng: 131.044};
      var customMapType = new google.maps.StyledMapType([
          {
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
        }
        ], {
          name: 'Custom Style'
      });
  var customMapTypeId = 'custom_style';
   var generalAssembly = {lat: 37.79, lng: -122.40};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: generalAssembly,  
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });
  var image = 'https://github.com/sf-wdi-22-23/modules/blob/master/w02-working-with-objects/d3-homework/starter-code/ga_cog.png?raw=true';
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">General Assembly</h1>'+
      '<div id="bodyContent">'+
      '<p><b>General Assembly</b>, also referred to as <b>best coding school ever</b>, is a well-known ' +
      'coding bootcamp.  They offer many other courses as well, but seriously '+
      'their Web Development Program is the best and has the best students. '+
      'Especially Annie, she rocks the most!</p>'+
      '<p><a href="https://generalassemb.ly">General Assembly</a>' +
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: generalAssembly,
    map: map,
    icon: image
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  // var marker = new google.maps.Marker({
  //       position: myLatLng,
  //       map: map,
  //       icon: image

  // });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}
    
    initMap();

    // Specify image for later use
    var image = 'https://github.com/sf-wdi-22-23/modules/blob/master/w02-working-with-objects/d3-homework/starter-code/ga_cog.png?raw=true';


    var newMarker = new google.maps.Marker({
        position: {
            lat: 37.790841, 
            lng: -122.401280
        },
        map: map,
        icon: image
    });

    // Content for the info window is a concatenated HTML string
    // var contentString = "<div class='infowindow'><h2>General Assembly</h2>" + "<p>This InfoWindow opened because you clicked on the marker it that has an event listener which accepts the marker itself and the map as parameters for <code>.open</code> callback.</p>" + "<h3>Marker</h3>" + "<p>The Marker is instantiated using a configuration object which you can customize to specify position, title, image, map, and other properties.</p></div>";

    // Instantiate a new InfoWindow instance, passing configurable Javascript object to set the content
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


/////////////////////
// The following geolocation code does not work
// in part because 'pos' is undefined...
////////////////////

    // Check for geolocation and set position if possible
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         pos = {
        //             lat: position.coords.latitude,
        //             lng: position.coords.longitude
        //         };
        //     })
        // }

/////////////////////

    /* Create another marker, with a position in General Assembly, SF
     swap in 'pos' after restructuring code to find location
     before initializing map, or reload map in geolocation callback */

    // var markerWithInfoWindow = new google.maps.Marker({
    //     position: {lat: 37.790841, lng: -122.401280}, // pos
    //     map: map,
    //     title: "General Assembly"
    // });

    // // Attach event listener to markerWithInfoWindow callback

    // markerWithInfoWindow.addListener('click', function() {
    //     infowindow.open(map, markerWithInfoWindow);
    // });
});