var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  parse: function(object) {
    return object.items;
  }

});