describe('Plane',function(){
  var plane = new Plane();

  describe('status changes to', function() {
    it('landed when at airport',function(){
      plane.changeStatus();
      expect(plane.readStatus()).toEqual('landed');
    });

    it('in flight when leaves airport',function(){
      plane.changeStatus();
      expect(plane.readStatus()).toEqual('in flight');
    });
  });
});
