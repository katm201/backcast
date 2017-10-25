var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    console.log(this.videos);
    console.log(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView({ el: '.search' }).render();
    new VideoPlayerView({ el: '.player', model: this.videos.models[0] }).render();
    new VideoListView({ el: '.list', collection: this.videos }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
