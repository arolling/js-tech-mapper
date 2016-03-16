var addMarker = require("./../js/addmarker.js").addMarker;

exports.displayData = function(data, dataMap) {
  feed = data.query.results.entry; //this is an array
  console.log(feed);
  for(var i = 0; i < feed.length; i++) {
    var start = moment(feed[i].start_time);
    var coordinates = feed[i].point;

    if(coordinates !== undefined) {
      coordArray = (coordinates).split(' ');
      var location = {
        lat: parseFloat(coordArray[0]),
        lng: parseFloat(coordArray[1])

      }
      addMarker(dataMap, feed[i].title, location);
    };
    $("#feed").append("<tr><td>" + feed[i].title + "</td><td>" + start.format('MMMM Do YYYY, h:mm a') +  "</td><td>" + feed[i].point + "</td><td><a href='" + feed[i].url + "' target='_blank'>More information</a></td></tr>");
  }
}
