describe('Plane',function(){
  var planeInFlight;
  var planeLanded;

  beforeEach(function() {
    planeInFlight = new Plane('in flight');
    planeLanded   = new Plane('landed');
  });

  describe('receives initial status when created as', function() {
    it('in flight', function() {
      expect(planeInFlight.readStatus()).toEqual('in flight');
    });

    it('landed', function() {
      expect(planeLanded.readStatus()).toEqual('landed');
    });
  });

  describe('changes status to', function() {
    it('landed when at airport',function(){
      planeInFlight.changeStatus();
      expect(planeInFlight.readStatus()).toEqual('landed');
    });

    it('in flight when leaves airport',function(){
      planeLanded.changeStatus();
      expect(planeLanded.readStatus()).toEqual('in flight');
    });
  });
});
