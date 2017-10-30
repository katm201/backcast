var AppView = Backbone.View.extend({

  el: '#app',
  
  events: {'click': 'onSearch'},

  initialize: function() {
    this.videos = new Videos();

    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('javascript tutorial');
    this.render();
  },


  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },
  
  render: function() {
    this.$el.html(this.template());

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
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
