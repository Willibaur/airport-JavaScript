describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeAll(function() {
    airport = new Airport();
    weather = new Weather();
  });

  describe('When Sunny Weather', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.2);
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
  });

  describe('When Stormy weather', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.9);
    });

    it('prevent takeoff', function() {
      expect(airport.weatherCheck()).toEqual('Stormy');
    });

    it('prevent landing', function() {
      expect(airport.weatherCheck()).toEqual('Stormy');
    });
  });

});
