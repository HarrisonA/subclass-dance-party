describe("rainbowDancer", function() {

  var rainbowDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    //ADDED NEW
    rainbowDancer = new makeRainbowDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its change color", function() {
    sinon.spy(rainbowDancer.$node, 'css');

    rainbowDancer.step();
    expect(rainbowDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rainbowDancer, "step");
      expect(rainbowDancer.step.callCount).to.be.equal(0);
    //rainbowDancer = new makerainbowDancer(10, 20, timeBetweenSteps);
      console.log("start test");
      clock.tick(timeBetweenSteps);

      expect(rainbowDancer.step.callCount).to.be.equal(1);
      console.log("end test");
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(2);
    });
  });
});
