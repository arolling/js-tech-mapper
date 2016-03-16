exports.addMarker = function(map, description, point) {

  var info = new google.maps.InfoWindow({
    content: description,
    maxWidth: 200
  });
  var marker = new google.maps.Marker({
    position: point,
    map: map,
    title: "Success!"
  });
  marker.addListener('click', function() {
    info.open(map, marker);
  });
};
