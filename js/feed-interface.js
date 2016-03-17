var moment = require("moment");
var displayData = require("./../js/displaydata.js").displayData;

var query = 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20atom%20WHERE%20url%3D%22http%3A%2F%2Fcalagator.org%2Fevents.atom%22%20%7C%20truncate(count%3D15)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';

var queryAll = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20atom%20where%20url%3D'http%3A%2F%2Fcalagator.org%2Fevents.atom'&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";


$(document).ready(function(){
  var day = moment();

  var rss = $.get(queryAll).error(function() {
    $("#success").text("failed");
  });

  rss.then(function(data) {
    $("#success").text( "done success" );
    displayData(data, myMap, day);
  });

  $("#next").click(function(){
    rss.done(function(data) {
      if (day.diff(moment(), "days") === 0) {
        $(".previous").removeClass("disabled");
      }
      console.log(day);
      displayData(data, myMap, day.add(1, 'days'));
      $("#success").text("Day" + day.calendar());
    });
  });

  $("#prev").click(function(){
    rss.done(function(data) {
      console.log(day);
      displayData(data, myMap, day.subtract(1, 'days'));
      $("#success").text("Day" + day.calendar());
      if (moment().toObject().date === day.toObject().date && moment().toObject().months === day.toObject().months) {
        $(".previous").addClass("disabled");
      }
    });
  });


});
