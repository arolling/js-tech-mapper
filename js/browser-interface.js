var GoogleMapsLoader = require('google-maps');
var apiKey = require('./../.env').apiKey;
var addMarker = require("./../js/addmarker.js").addMarker;
var geoLocation = require("./../js/geolocation.js").geoLocation;
GoogleMapsLoader.KEY = apiKey;

var myMap;

$(document).ready(function() {
  GoogleMapsLoader.load(function(google) {
    myMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 14,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    geoLocation(myMap);
  });

  $(".directions").on("click", function(e){
    e.preventDefault();
    alert("You clicked");
  });
});
