var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.newModel = this.collection.models[0];
    this.setVideo(this.newModel);
    
    this.baseSource = 'https://www.youtube.com/embed/';
    
    this.collection.on('select', function(model) {
      this.setVideo(model);
      this.render();
    }, this);
  },
  
  setVideo: function(model) {
    this.title = model.get('title');
    this.description = model.get('description');
    this.vidID = model.get('id');
  },

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },
  
  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});


 // <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4WJLlWpzpP0" allowFullScreen></iframe>

