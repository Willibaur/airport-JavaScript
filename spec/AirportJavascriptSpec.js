'user strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeAll(function() {
    airport = new Airport();
    plane   = jasmine.createSpy('plane');
    weather = jasmine.createSpy('weather');
  });

  describe('when sunny weather allows a plane to', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
    });

    it('land', function() {
      expect(airport.land(plane)).toEqual('Plane Has Landed!');
    });

    it('take off', function() {
      expect(airport.takeOff(plane)).toEqual('Plane Has Taken Off!');
    });
  });

  describe('when stormy weather prevents a plane to', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
    });

    it('take off', function() {
      expect(airport.weatherCheck()).toEqual(true);
      expect(function() { airport.land(plane); }).toThrowError('Plane can not land');
    });

    it('land', function() {
      expect(airport.weatherCheck()).toEqual(true);
      expect(function() { airport.takeOff(plane); }).toThrowError('Plane cannot take off');
    });
  });

  describe('sets capacity by', function() {
    it('default 20 planes', function() {
      expect(airport.capacity).toEqual(20);
    });

    it('quantity entered by user', function() {
      airport = new Airport(77);
      expect(airport.capacity).toEqual(77);
    });
  });
});
