'user strict';

describe('Feature Test:', function () {
  var plane;
  var airport;
  var weather;

  beforeAll(function() {
    plane   = new Plane('landed');
    airport = new Airport();
    weather = jasmine.createSpy('weather');
  });

  describe('instructs a plane to', function () {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
    });

    it('land and receives confirmation', function () {
      airport.plane.changeStatus();
      expect(airport.land(plane)).toEqual('Plane Has Landed!');
      expect(airport.plane.getStatus()).toEqual('landed');
    });
  });
});
