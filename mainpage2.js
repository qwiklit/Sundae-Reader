YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236751/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].author + '</h4>'
            feedmarkup += '<h3>' + feed[i].description + '</h3>' + '</p>' + '</div>' + '<hr>'
        }
        document.getElementById('tapestrylaunch2').innerHTML = feedmarkup
        
    })
    $( "h4:contains('undefined')" ).css( "color", "red" );

})


