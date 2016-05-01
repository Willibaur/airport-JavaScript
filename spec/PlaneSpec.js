'user strict';

describe('Plane',function(){
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('sets up default status to landed', function () {
    expect(plane.getStatus()).toEqual('landed');
  });

  describe('receives initial status when created as', function() {
    it('in flight', function() {
      plane = new Plane("in flight");
      expect(plane.getStatus()).toEqual('in flight');
    });

    it('landed', function() {
      plane = new Plane('landed');
      expect(plane.getStatus()).toEqual('landed');
    });
  });

  describe('changes status to', function() {
    it('landed when at airport',function(){
      plane = new Plane('in flight');
      plane.changeStatus();
      expect(plane.getStatus()).toEqual('landed');
    });

    it('in flight when leaves airport',function(){
      plane.changeStatus();
      expect(plane.getStatus()).toEqual('in flight');
    });
  });
});
