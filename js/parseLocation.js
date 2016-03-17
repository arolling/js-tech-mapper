exports.parseLocation = function(point) {
  coordArray = (point).split(' ');
  var location = new google.maps.LatLng(parseFloat(coordArray[0]), parseFloat(coordArray[1]));
  return location;
};
