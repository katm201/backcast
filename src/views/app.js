var AppView = Backbone.View.extend({

  el: '#app',
  
  events: {'click': 'onSearch'},

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView({ el: '.search' }).render();
    new VideoPlayerView({ el: '.player', collection: this.videos }).render();
    new VideoListView({ el: '.list', collection: this.videos }).render();
    return this;
  },
  
  fetchParams: {
    key: window.YOUTUBE_API_KEY,
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    reset: true,
    type: 'video',
    data: {
      part: 'snippet',
      maxResults: '5',
      q: 'puppies'
    },
    success: function(collection, data) {
      this.videos = new Videos(data);
      this.render();
    },
    failure: function(error) { 
      console.log('Fetch failed ', error); 
    }
  },
  
  onSearch: function(query) {
    console.log('app clicked');
    var params = _.extend(this.fetchParams, { q: 'puppies' });
    this.videos.fetch(this.fetchParams);
  },

  template: templateURL('src/templates/app.html')

});
