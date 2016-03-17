var getDirections = require("./../js/getDirections.js").getDirections;

exports.addMarker = function(thisMap, meeting, point) {
  var displayInfo = '<h4>' + meeting.title + '</h4>' +
              '<button class="btn btn-default btn-xs directions" value="' + meeting.point + '">Get Directions</button>';
  var info = new google.maps.InfoWindow({
    content: displayInfo,
    maxWidth: 200
  });
  var marker = new google.maps.Marker({
    position: point,
    map: thisMap,
    title: "Success!"
  });
  marker.addListener('click', function() {
    info.open(thisMap, marker);
    var buttonClick = document.querySelector('button[value="' + meeting.point + '"]');
    buttonClick.addEventListener('click', function(e) {
      e.preventDefault();
      //alert("it works!");
      getDirections($(this).val(), thisMap);
    });
  });
  thisMap.setCenter(point);
};
