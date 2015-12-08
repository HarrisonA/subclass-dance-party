describe("sideDancer", function() {

  var sideDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    //ADDED NEW
    sideDancer = new makeSideDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(sideDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(sideDancer.$node, 'css');
    sideDancer.step();
    expect(sideDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(sideDancer, "step");
      expect(sideDancer.step.callCount).to.be.equal(0);
    //sideDancer = new makesideDancer(10, 20, timeBetweenSteps);
      console.log("start test");
      clock.tick(timeBetweenSteps);

      expect(sideDancer.step.callCount).to.be.equal(1);
      console.log("end test");
      clock.tick(timeBetweenSteps);
      expect(sideDancer.step.callCount).to.be.equal(2);
    });
  });
});
