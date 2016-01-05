describe('Plane',function(){
  var plane = new Plane();

  it('When landed',function(){
    expect(plane.readStatus()).toEqual('landed');
  });

  it('When airbourne',function(){
    expect(plane.readStatus()).toEqual('airbourne');
  });
});
