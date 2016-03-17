var parseLocation = require("./../js/parseLocation.js").parseLocation;

exports.getDirections = function(latString, start, dirMap) {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(dirMap);
  var tabor = new google.maps.LatLng(45.51, -122.59);
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {'address': start}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var dest = parseLocation(latString);
      var request = {
        origin: results[0].geometry.location, //CHANGE ME
        destination: dest,
        travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
      });
    } else {
      alert("Could not map origin address for the following reason: " + status);
    }
  });
  //start -> latlng

};
