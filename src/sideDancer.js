var makeSideDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this,top,left,timeBetweenSteps);
  this.lastMovement = "left";
};

makeSideDancer.prototype = Object.create(makeDancer.prototype);
makeSideDancer.prototype.constructor = makeSideDancer;


makeSideDancer.prototype.step = function(){

  //do old step
  //console.log("stepped");
  makeDancer.prototype.step.call(this);

  //makeDancer.prototype.step();
  //this.$node.css("background-color", "rgb(" + Math.round(Math.random()*255) + ","+  Math.round(Math.random()*255)  + "," +  Math.round(Math.random()*255)  +")");
  if (this.lastMovement === "left"){
    this.$node.css( 'left', '+=10px' );
    this.lastMovement = 'right';
  } else {
    this.$node.css( 'left', '-=10px' );
    this.lastMovement = 'left';
  }
};