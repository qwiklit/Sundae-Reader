
var url =
"https://push.superfeedr.com/?hub.mode=retrieve&hub.topic=http%3A%2F%2Ffeeds.feedburner.com%2Fbrainpickings%2Frss&count=5&authorization=cXdpa2xpdDo0MDhmMTRjNDQ0MWNhYjIwYThmOWM2YTMyOWJkYjE4Yg%3D%3D&"; // See above!

$.ajax({
  url: url,
  dataType: 'json',
  success: function(data) {
    // Data now contains the feed data!
    // Check our schema for details: http://documentation.superfeedr.com/schema.html#json
    console.log(data);
    // This will log the content to your browser's console.
  }
});

