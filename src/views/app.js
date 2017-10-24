var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView({ el: '.search' }).render();
    new VideoPlayerView({ el: '.player' }).render();
    new VideoListView({ el: '.list', collection: window.exampleVideoData }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
