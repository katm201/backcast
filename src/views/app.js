var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    let videoList = new VideoListView({collection: this.videos});
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
