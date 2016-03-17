var addMarker = require("./../js/addmarker.js").addMarker;

exports.displayData = function(data, dataMap) {
  var feed = data.query.results.entry; //this is an array
  for(var i = 0; i < feed.length; i++) {
    var start = moment(feed[i].start_time);
    var coordinates = feed[i].point;
    var eventLocation;
    if(coordinates !== undefined) {
      eventLocation = document.createElement("button");
      eventLocation.setAttribute("class", "btn btn-info btn-xs");
      eventLocation.setAttribute("id", i);
      eventLocation.innerHTML = "Map It";

    } else {
      eventLocation = document.createElement("p");
      eventLocation.innerHTML = "See Link";
    }
    $("#feed").append("<tr><td>" + feed[i].title + "</td><td>" + start.format('MMMM Do YYYY, h:mm a') +  "</td><td id='cell" + i + "'></td><td><a href='" + feed[i].url + "' target='_blank'>More information</a></td></tr>");
    var td = document.getElementById("cell" + i);
    td.appendChild(eventLocation);
    if(coordinates !== undefined){
      eventLocation.addEventListener('click', function(e) {
        var id = parseInt(e.target.getAttribute('id'));
        addMarker(dataMap, feed[id].title, parseLocation(feed[id].point));
      });
    }
  }
};

var parseLocation = function(point) {
  coordArray = (point).split(' ');
  var location = {
    lat: parseFloat(coordArray[0]),
    lng: parseFloat(coordArray[1])
  };
  return location;
};
