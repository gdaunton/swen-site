var us = [
  'http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml',
  'http://rss.cnn.com/rss/cnn_us.rss',
  'http://news.yahoo.com/rss/us/',
]
var world = [
  'http://feeds.bbci.co.uk/news/world/rss.xml',
  'http://rss.cnn.com/rss/cnn_world.rss',
  'http://news.yahoo.com/rss/world/',
]
var tech = [
  'http://feeds.bbci.co.uk/news/technology/rss.xml',
  'http://rss.cnn.com/rss/cnn_tech.rss',
]
var sports = [
  'http://www.bbc.com/sport/rss.xml',
  'http://news.yahoo.com/rss/sports',
]
var weather = [
  'http://news.yahoo.com/rss/weather/',
]
google.load("feeds", "1");

var data = [];
var numLoops = 0;
var numCompile = 0;

function getData(options, numFromEach, callback) {
  data = [];
  numLoops = 0;
  numCompile = 0;

  if (options.us) {
    us.forEach(function(item){
      numLoops++;
      var feed = new google.feeds.Feed(item);
      feed.setNumEntries(numFromEach);
      feed.load(function(result) {
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          var image = null;
          if (entry.mediaGroups != null){
            image = entry.mediaGroups[0].contents[0].url;
          }
          data.push({title: entry.title, link: entry.link, description: entry.contentSnippet, date: new Date(entry.publishedDate), image: image, type: 'US'});
        }
        compileData(callback);
      });
    }, this);
  }
  if (options.world) {
    world.forEach(function(item){
      numLoops++;
      var feed = new google.feeds.Feed(item);
      feed.setNumEntries(numFromEach);
      feed.load(function(result) {
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          var image = null;
          if (entry.mediaGroups != null){
            image = entry.mediaGroups[0].contents[0].url;
          }
          data.push({title: entry.title, link: entry.link, description: entry.contentSnippet, date: new Date(entry.publishedDate), image: image, type: 'World'});
        }
        compileData(callback);
      });
    }, this);
  }
  if (options.tech) {
    tech.forEach(function(item){
      numLoops++;
      var feed = new google.feeds.Feed(item);
      feed.setNumEntries(numFromEach);
      feed.load(function(result) {
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          var image = null;
          if (entry.mediaGroups != null){
            image = entry.mediaGroups[0].contents[0].url;
          }
          data.push({title: entry.title, link: entry.link, description: entry.contentSnippet, date: new Date(entry.publishedDate), image: image, type: 'Tech'});
        }
        compileData(callback);
      });
    }, this);
  }
  if (options.sports) {
    sports.forEach(function(item){
      numLoops++;
      var feed = new google.feeds.Feed(item);
      feed.setNumEntries(numFromEach);
      feed.load(function(result) {
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          var image = null;
          if (entry.mediaGroups != null){
            image = entry.mediaGroups[0].contents[0].url;
          }
          data.push({title: entry.title, link: entry.link, description: entry.contentSnippet, date: new Date(entry.publishedDate), image: image, type: 'Sports'});
        }
        compileData(callback);
      });
    }, this);
  }
  if (options.weather) {
    weather.forEach(function(item){
      numLoops++;
      var feed = new google.feeds.Feed(item);
      feed.setNumEntries(numFromEach);
      feed.load(function(result) {
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          var image = null;
          if (entry.mediaGroups != null){
            image = entry.mediaGroups[0].contents[0].url;
          }
          data.push({title: entry.title, link: entry.link, description: entry.contentSnippet, date: new Date(entry.publishedDate), image: image, type: 'Weather'});
        }
        compileData(callback);
      });
    }, this);
  }
  if(!options.us && !options.world && !options.sports && !options.weather && !options.tech) {
    callback([]);
  }
}

function compileData(callback) {
  numCompile++;
  if(numCompile == numLoops) {
    data.sort(function(a,b){
      return b.date - a.date;
    });
    callback(data);
  }
}
