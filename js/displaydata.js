var addMarker = require("./../js/addmarker.js").addMarker;

exports.displayData = function(data, dataMap) {
  var feed = data.query.results.entry; //this is an array
  for(var i = 0; i < feed.length; i++) {
    var start = moment(feed[i].start_time);
    var coordinates = feed[i].point;
    var eventLocation;
    if(coordinates !== undefined) {
      coordArray = (coordinates).split(' ');
      var location = {
        lat: parseFloat(coordArray[0]),
        lng: parseFloat(coordArray[1])
      };
      eventLocation = document.createElement("button");
      eventLocation.setAttribute("class", "btn btn-info btn-xs");
      eventLocation.setAttribute("id", i);
      eventLocation.innerHTML = "I'm a button";

    } else {
      eventLocation = "See Link";
    }
    $("#feed").append("<tr><td>" + feed[i].title + "</td><td>" + start.format('MMMM Do YYYY, h:mm a') +  "</td><td id='cell" + i + "'></td><td><a href='" + feed[i].url + "' target='_blank'>More information</a></td></tr>");
    var td = document.getElementById("cell" + i);
    td.appendChild(eventLocation);
    if(coordinates !== undefined){
      eventLocation.addEventListener('click', function(e) {
        var id = parseInt(e.target.getAttribute('id'));
        alert("clicked on " + feed[id].title);
      });
    }


    // var el = document.getElementById("marker" + i);
    // console.log(el);
    //
  }
};
var testClick = function(feed, i) {
  alert("clicked on " + feed[i].title);
  // $("#" + i).click(function() {
  //   console.log(feed);
  //   //addMarker(dataMap, feed[i].title, location);
  //
  // };
};
