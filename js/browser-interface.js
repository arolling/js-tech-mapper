var addMarker = require("./../js/addmarker.js").addMarker;

var myMap;
function initMap() {
  myMap = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: -34.397, lng: 150.644},
    zoom: 15,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  });
  var infoWindow = new google.maps.InfoWindow({map: myMap});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.close();
      myMap.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, myMap.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, myMap.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

$(document).ready(function() {
  initMap();
  $("#marker").click(function(e){
    e.preventDefault();
    var myLatLng = {lat: 45.51, lng: -122.59};
    addMarker(myMap, 'Mt Tabor', myLatLng);
  });
});
