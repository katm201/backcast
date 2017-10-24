var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // set title
    this.set('title', video.snippet.title);
    // set description
    this.set('description', video.snippet.description);
    this.set('thumbnail', video.snippet.thumbnails.default.url);
  },

  select: function() {
    this.trigger('select', this);
  }

});
