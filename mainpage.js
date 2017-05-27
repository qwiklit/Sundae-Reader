YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://lithub.com/feed/"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].creator + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].creator + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3>' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('tapestrylaunch').innerHTML = feedmarkup
        
    })
        //Here is where you can alter what goes in the query
        /*
        q._params.q = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236751/rss.xml"'
        q.send();
        */

})
//THE ANTHILL
YUI().use('yql', function(Y){
    var query = 'select * from rss(0,30) where url = "http://rssmix.com/u/8236918/rss.xml"'
    var q = Y.YQL(query, function(r){
        //r now contains the result of the YQL Query as a JSON
        var feedmarkup = '<p>'
        var feed = r.query.results.item // get feed as array of entries
        for (var i=0; i<feed.length; i++){
            feedmarkup += '<div class="row">'
            feedmarkup += '<a href="' + feed[i].link + '">'
            feedmarkup += '<h2 class="read">' + feed[i].title  + '<h2>' + '</a>' 
            feedmarkup += '<h4 class="author">' + '<span class="boldby">' + "by " + '</span>' + feed[i].author + '<a href="http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + feed[i].author + '">' + '<img style="height: 23px; width: 23px; margin-left: 10px; " src="icons/amazon.png">' + '</a>' + '</h4>'
            feedmarkup += '<h3 maxlength="100">' + feed[i].description + '</h3>' + '</p>' + '</div>'  
            feedmarkup += '<hr>'
        }
        document.getElementById('tapestrylaunch2').innerHTML = feedmarkup
        
    })
      
})


   