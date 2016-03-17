var parseLocation = require("./../js/parseLocation.js").parseLocation;

exports.getDirections = function(latString, dirMap) {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  console.log(latString);
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(dirMap);
  var tabor = new google.maps.LatLng(45.51, -122.59);
  var dest = parseLocation(latString);
  var request = {
    origin: tabor, //CHANGE ME
    destination: dest,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
};
