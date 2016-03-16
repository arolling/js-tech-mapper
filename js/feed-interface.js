$(document).ready(function(){
  $('#feedMe').click(function(){
    $.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20atom%20WHERE%20url%3D%22http%3A%2F%2Fcalagator.org%2Fevents.atom%22%20%7C%20truncate(count%3D4)&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function() {
      alert( "success" );
    })
    .done(function() {
      alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "finished" );
    });
  });
});
