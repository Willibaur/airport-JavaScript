describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  it('allows a plane to land', function() {
    expect(airport.land(plane)).toEqual('Plane Has Landed!');
  });

  // it('', function() {

  // });

  // it('', function() {

  // });

  // it('', function() {

  // });

});
