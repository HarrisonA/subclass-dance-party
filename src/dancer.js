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
  //console.log("dancer step", this);
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
    width: '200px',
    height: '200px',
    //color: 'rgb(' + Math.random()*255 + "," + Math.random()*255 "," + Math.random()*255 + ")"
    //background: 'blue',
    "background-image":'url(http://successmentor.com/wp-content/uploads/2015/01/Russell-WIlson-glorifies-God-transparent-272x300.png)',
    "background-repeat": "no-repeat",
    border: '5px solid blue'
  };
  this.$node.css(styleSettings);
  console.log("set position");
};

makeDancer.prototype.lineUp = function(fromTop){
  this.$node.animate( {'left': '0px', 'top': fromTop + 'px'}, 2000);

};


makeDancer.prototype.changeLocation = function(topValue, leftValue){
  this.$node.animate( {
    top:  topValue,
    left: leftValue,    
  }, 1000);

};


makeDancer.prototype.calcDistance = function (otherDancer) {
  var myTopValue = parseInt(this.$node.css("top"));
  var myLeftValue = parseInt(this.$node.css("left"));

  var otherTopValue = parseInt(otherDancer.$node.css("top"));
  var otherLeftValue = parseInt(otherDancer.$node.css("left"));

  //console.log(parseInt(this.$node.css("left")),this.$node.css("left"))
  //console.log(typeof myTopValue, myLeftValue, otherLeftValue, otherTopValue,myTopValue - otherTopValue,myLeftValue - otherLeftValue,Math.pow(myTopValue - otherTopValue,2),Math.pow((myLeftValue - otherLeftValue),2));
  var distance = Math.sqrt(Math.pow(myTopValue - otherTopValue,2) + Math.pow((myLeftValue - otherLeftValue),2));
  console.log(distance)
  return distance;

  // body...
}