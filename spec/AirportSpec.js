'user strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeAll(function() {
    airport = new Airport();
    plane   = jasmine.createSpyObj('plane', ['changeStatus']);
    weather = jasmine.createSpy('weather');
  });

  describe('when sunny weather', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
    });

    it('allows to land', function() {
      expect(airport.land(plane)).toEqual('Plane Has Landed!');
      expect(plane.changeStatus).toHaveBeenCalled();
    });

    it('allows to take off', function() {
      expect(airport.takeOff(plane)).toEqual('Plane Has Taken Off!');
      expect(plane.changeStatus).toHaveBeenCalled();
    });

    it('does not allow to land if airport full', function () {
      for (var i = 1; i < airport.capacity; i++) {
        airport.land(plane);
      }
      msg = "Airport full plane cannot land";
      expect(airport.planes.length).toEqual(airport.capacity);
      expect( function() { airport.land(plane); }).toThrowError(msg);
    });
  });

  describe('when stormy weather prevents a plane to', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
    });

    it('take off', function() {
      msg = 'Plane cannot land';
      expect(airport.weatherCheck()).toEqual(true);
      expect( function() { airport.land(plane); } ).toThrowError(msg);
    });

    it('land', function() {
      msg = 'Plane cannot take off';
      expect(airport.weatherCheck()).toEqual(true);
      expect( function() { airport.takeOff(plane); } ).toThrowError(msg);
    });
  });

  describe('sets capacity to', function() {
    it('default of 20 planes', function() {
      airport = new Airport();
      expect(airport.capacity).toEqual(20);
    });

    it('quantity entered by user', function() {
      airport = new Airport(77);
      expect(airport.capacity).toEqual(77);
    });
  });
});
