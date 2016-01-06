describe('Plane',function(){
  var plane = new Plane();

  it('When landed',function(){
    expect(plane.readStatus()).toEqual('landed');
  });

  it('When in flight',function(){
    expect(plane.readStatus()).toEqual('in flight');
  });
});
