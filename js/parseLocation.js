exports.parseLocation = function(point) {
  coordArray = (point).split(' ');
  var location = {
    lat: parseFloat(coordArray[0]),
    lng: parseFloat(coordArray[1])
  };
  return location;
};
