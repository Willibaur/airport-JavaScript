'user strict';


describe('Feature Test:', function () {
  var landedPlane;
  var inFlightPlane;
  var airport;
  var weather;

  beforeAll(function() {
    weather       = jasmine.createSpy('weather');
    landedPlane   = new Plane("landed");
    inFlightPlane = new Plane("in flight");
  });

  describe('instructs a plane to', function () {
    beforeEach(function() {
      airport = new Airport();
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
    });

    it('land and receives confirmation', function () {
      expect(airport.land(inFlightPlane)).toEqual('Plane Has Landed!');
      expect(inFlightPlane.getStatus()).toEqual('landed');
    });
  });
});
