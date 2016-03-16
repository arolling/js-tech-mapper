exports.addMarker = function(map, description) {
  var myLatLng = {lat: 45.51, lng: -122.59};
  var info = new google.maps.InfoWindow({
    content: description,
    maxWidth: 100
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Success!"
  });
  marker.addListener('click', function() {
    info.open(map, marker);
  });
};
