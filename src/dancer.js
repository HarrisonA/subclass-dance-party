// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  
  this.timeBetweenSteps = timeBetweenSteps;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
  this.setPosition(top, left);

  this.step();
};


makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //console.log('outside',this);
  var dancer = this;
  console.log("dancer step", this);
  // setTimeout.call(dancer,dancer.step, dancer.timeBetweenStep);
  
  //setTimeout.call(dancer,dancer.step, dancer.timeBetweenStep);

  //setTimeout(dancer.step,dancer.timeBetweenSteps);
  setTimeout(function(){
    //console.log('stepped',Date());
    this.step();
    //makeDancer.prototype.step();
  }.bind(dancer),this.timeBetweenSteps);


};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
    width: '10px',
    height: '10px',
    //color: 'rgb(' + Math.random()*255 + "," + Math.random()*255 "," + Math.random()*255 + ")"
    color: 'rgb(255,0,255)'
  };
  this.$node.css(styleSettings);
  console.log("set position");
};