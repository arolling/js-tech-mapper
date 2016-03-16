exports.addMarker = function(map) {
  var myLatLng = {lat: 45.51, lng: -122.59};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Success!"
  });
}
