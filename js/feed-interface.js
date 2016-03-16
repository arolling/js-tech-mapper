var moment = require("moment");

var feed = [];
$(document).ready(function(){
  $('#feedMe').click(function(){
    $.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20atom%20WHERE%20url%3D%22http%3A%2F%2Fcalagator.org%2Fevents.atom%22%20%7C%20truncate(count%3D4)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', function() {
      alert( "success" );
    })
    .done(function(data) {
      alert( "second success" );
      feed = data.query.results.entry; //this is an array
      console.log(feed);
      for(var i = 0; i < feed.length; i++) {
        start = moment(feed[i].start_time);
        $("#feed").append("<tr><td>" + feed[i].title + "</td><td>" + start.format('MMMM Do YYYY, h:mm a') +  "</td><td>" + feed[i].point + "</td><td><a href='" + feed[i].url + "' target='_blank'>More information</a></td></tr>");
      }

    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "finished" );
    });


  });
});
