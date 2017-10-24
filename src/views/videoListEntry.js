var VideoListEntryView = Backbone.View.extend({

  events: { 'select': 'handleSelect' }, 

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  handleSelect: function () {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
