exports.addMarker = function(thisMap, meeting, point) {
  var info = '<h4>' + meeting.title + '</h4>' +
              '<button class="btn btn-default btn-xs directions" value="' + meeting.point + '">Get Directions</button>';
  var info = new google.maps.InfoWindow({
    content: info,
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
    console.log('button[value="' + meeting.point + '"]');
    console.log(buttonClick);
    buttonClick.addEventListener('click', function(e) {
      e.preventDefault();
      alert("it works!");
    });
  });
  thisMap.setCenter(point);


};
