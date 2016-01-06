describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeAll(function() {
    airport = new Airport();
    weather = new Weather();
    plane   = new Plane();
  });

  describe('when sunny weather,', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.2);
    });

    describe('allows a plane to', function() {
      it('land', function() {
        expect(airport.land(plane)).toEqual('Plane Has Landed!');
      });

      it('take off', function() {
        expect(airport.takeOff(plane)).toEqual('Plane Has Taken Off!');
      });
    });

  });

  describe('when stormy weather,', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.9);
    });

    describe('prevents a plane to', function() {
      it('take off', function() {
        expect(airport.weatherCheck()).toEqual('Stormy');
        expect(function() { airport.land(plane); }).toThrowError('Plane can not land');
      });

      it('land', function() {
        expect(airport.weatherCheck()).toEqual('Stormy');
        expect(function() { airport.takeOff(plane); }).toThrowError('Plane cannot take off');
      });
    });
  });

  describe('Initial capacity', function() {
    it('has a capacity of 20', function() {
      expect(airport.capacity).toEqual(20);
    });
  });
});
