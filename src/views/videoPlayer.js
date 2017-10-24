var VideoPlayerView = Backbone.View.extend({

  events: { 'select': 'handleSelection'},
  
  title: 'Learn Backbone.js Tutorial by Building an App! (1/6) - Models and Collections',  //default value
  description: 'Learn how to create a blogroll app using BackboneJS. In this video, we talk about how to use models and collections. Github source code: This part (clientside) ...',  //default value
  vidID: '4WJLlWpzpP0',  //default value
  baseSource: 'https://www.youtube.com/embed/',
  // append videoId to base URL structure -> https://www.youtube.com/embed/${videoId}
  
  // sourceVid: 'https://www.youtube.com/embed/4WJLlWpzpP0',
  
  

  render: function() {
    this.$el.html(this.template({source: (this.baseSource + this.vidID), title: this.title, description: this.description}));
    return this;
  },
  
  handleSelection: function() {
    debugger;
    this.vidId = this.model.get('id');
    this.title = this.model.get('title');
    this.description = this.model.get('description');
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});


 // <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4WJLlWpzpP0" allowFullScreen></iframe>

