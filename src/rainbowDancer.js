var makeRainbowDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this,top,left,timeBetweenSteps);

};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;


makeRainbowDancer.prototype.step = function(){

  //do old step
  //console.log("stepped");
  makeDancer.prototype.step.call(this);
  var randomColor = function(){
    return Math.round(Math.random()*255);
  };

  var randomRGB1 = "rgb(" + randomColor() + ","+  randomColor()  + "," +  randomColor()  +")"
  var randomRGB2 = "rgb(" + randomColor() + ","+  randomColor()  + "," +  randomColor()  +")"


  //makeDancer.prototype.step();
  this.$node.css({
    background:randomRGB1,
    border: "3px solid " + randomRGB2
  });

};