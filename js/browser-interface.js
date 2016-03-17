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
      zoom: 15,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    geoLocation(myMap);
  });

  $("#marker").click(function(e){
    e.preventDefault();
    var myLatLng = {lat: 45.51, lng: -122.59};
    addMarker(myMap, 'Mt Tabor', myLatLng);
  });
});
