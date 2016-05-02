'user strict';


describe('Feature Test:', function () {
  var landedPlane;
  var inFlightPlane;
  var airport;
  var weather;

  beforeEach(function() {
    weather       = jasmine.createSpy('weather');
    landedPlane   = new Plane("landed");
    inFlightPlane = new Plane("in flight");
    airport = new Airport();
  });

  describe('when sunny weather instructs a plane to', function () {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
    });

    it('land and receive confirmation', function () {
      expect(airport.land(inFlightPlane)).toEqual('Plane Has Landed!');
      expect(inFlightPlane.getStatus()).toEqual('landed');
    });

    it('take off and receive confirmation', function () {
      expect(airport.takeOff(landedPlane)).toEqual('Plane Has Taken Off!');
      expect(landedPlane.getStatus()).toEqual('in flight');
    });

    it('not to land when airport is full', function () {
      for (var i = 0; i < airport.capacity; i++) {
    	  airport.land(inFlightPlane);
    	}
      msg = "Airport full plane cannot land";
      expect( function() { airport.land(inFlightPlane); }).toThrowError(msg);
    });
  });

  describe('when Stormy weather prevents a plane to', function () {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
    });

    it('land', function () {
      msg = 'Plane cannot land';
      expect( function() { airport.land(inFlightPlane); }).toThrowError(msg);
      expect(inFlightPlane.getStatus()).toEqual('in flight');
    });

    it('take off', function () {
      msg = 'Plane cannot take off';
      expect( function() { airport.takeOff(landedPlane); }).toThrowError(msg);
      expect(landedPlane.getStatus()).toEqual('landed');
    });
  });
});
