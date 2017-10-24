var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.title = this.model.get('title');
    this.description = this.model.get('description');
    this.vidID = this.model.get('id');
    this.baseSource = 'https://www.youtube.com/embed/';
  },

  render: function() {
    this.$el.html(this.template({source: (this.baseSource + this.vidID), title: this.title, description: this.description}));
    return this;
  },
  
  handleSelection: function() {
    debugger;
    // re-render video player when select from a model fires off
  },

  template: templateURL('src/templates/videoPlayer.html')

});


 // <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4WJLlWpzpP0" allowFullScreen></iframe>

