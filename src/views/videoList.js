var VideoListView = Backbone.View.extend({
  
  // initialize: function() {
  //   // put event handler for changing an individual video entry view

  // },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this.collection);
    this.collection.forEach(this.renderEntry, this);
    return this.$el;
  },
  
  renderEntry: function(video) {
    console.log(video);
    new VideoListEntryView({ el: '.video-list', model: video }).render();
    console.log(this.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
