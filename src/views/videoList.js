var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function() {
    // put event handler for changing an individual video entry view
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderEntry, this);
    return this.$el;
  },
  
  renderEntry: function(video) {
    let listEntry = new VideoListEntryView({model: video});
    this.$el.append(listEntry);
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
