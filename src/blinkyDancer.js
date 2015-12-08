var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this,top,left,timeBetweenSteps);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function(){
  
  //console.log("blinky step", this);
  //do old step
  //console.log("stepped");
  makeDancer.prototype.step.call(this);

  //makeDancer.prototype.step();
  this.$node.toggle();

};