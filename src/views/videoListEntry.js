var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  
  initialize() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
