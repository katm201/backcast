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
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    reset: true,
    success: function(collection, data) {
      console.log('successful fetch');
      console.log(collection);
      new VideoListView({ el: '.list', collection: collection}).render();
    },
    failure: function(error) { 
      console.log('Fetch failed ', error); 
    }
  },
  
  fetchData: {
    part: 'snippet',
    maxResults: '5',
    key: window.YOUTUBE_API_KEY,
    type: 'video'
  },
  
  onSearch: function(query) {
    var dataParams = _.extend(this.fetchData, { q: query });
    var params = _.extend(this.fetchParams, { data: dataParams });
    this.videos.fetch(this.fetchParams);
  },

  template: templateURL('src/templates/app.html')

});
