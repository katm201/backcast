var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children('.video-list').children().detach();
    for (var i = 0; i < this.collection.length; i++) {
      let video = new Video(this.collection[i]);
      this.$el.children('.video-list').append(new VideoListEntryView({ model: video }).render());
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
