exports.addMarker = function(thisMap, description, point) {
  console.log(thisMap);
  var info = new google.maps.InfoWindow({
    content: description,
    maxWidth: 200
  });
  var marker = new google.maps.Marker({
    position: point,
    map: thisMap,
    title: "Success!"
  });
  marker.addListener('click', function() {
    info.open(thisMap, marker);
  });
  thisMap.setCenter(point);
};
