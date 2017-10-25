var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.title = this.model.get('title');
    this.description = this.model.get('description');
    this.thumbnail = this.model.get('thumbnail');
  },
  
  events: { 'click': 'handleSelect' }, 

  render: function() {
    this.$el.html(this.template({title: this.title, description: this.description, thumbnail: this.thumbnail}));
    return this.$el;
  },
  
  handleSelect: function () {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
