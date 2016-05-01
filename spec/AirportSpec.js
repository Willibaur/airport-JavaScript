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
