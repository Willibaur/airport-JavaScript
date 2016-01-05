describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    weather = new Weather();
  });

  it('allows a plane to land', function() {
    expect(airport.land(plane)).toEqual('Plane Has Landed!');
  });

  it('allows a plane to take off', function() {
    expect(airport.takeOff(plane)).toEqual('Plane Has Taken Off!');
  });

  it('has a capacity of 20', function() {
   expect(airport.capacity).toEqual(20);
  });

  it('prevent takeoff when weather is stormy', function() {
  spyOn(Math, 'random').and.returnValue(0.9);

  expect(airport.weatherCheck()).toEqual('Stormy');
  //  expect(airport.takeOff).toThrow(new Error('Stormy weather cannot takeoff'));
  });

});
