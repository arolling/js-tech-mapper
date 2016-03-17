var addMarker = require("./../js/addmarker.js").addMarker;
var parseLocation = require("./../js/parseLocation.js").parseLocation;
exports.displayData = function(data, dataMap, day) {
  $("#feed").empty();
  var feed = data.query.results.entry; //this is an array
  for(var i = 0; i < 50; i++) {
    var start = moment(feed[i].start_time);
    if (start.toObject().date === day.toObject().date && start.toObject().months === day.toObject().months) {
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
      $("#feed").append("<tr><td>" + feed[i].title + "</td><td>" + start.calendar() +  "</td><td id='cell" + i + "'></td><td><a href='" + feed[i].url + "' target='_blank'>More information</a></td></tr>");
      var td = document.getElementById("cell" + i);
      td.appendChild(eventLocation);
      if(coordinates !== undefined){
        eventLocation.addEventListener('click', function(e) {
          var id = parseInt(e.target.getAttribute('id'));
          console.log(feed[id]);
          addMarker(dataMap, feed[id], parseLocation(feed[id].point));
        });
      }
    }
  }
};
