'user strict';

describe('Airport Feature Test:', function () {
  var planeInFlight;
  var planeLanded;
  var airport;
  var weather;

  beforeAll(function() {
    planeInFlight = new Plane('in flight');
    planeLanded   = new Plane('landed');
    airport       = new Airport();
    weather       = new Weather();
  });

  describe('sets capacity to', function () {
    it('default of 20 planes ', function () {
      airport = new Airport();
      expect(airport.capacity).toEqual(20);
    });

    it('sets airport capacity', function () {
      airport = new Airport(77);
      expect(airport.capacity).toEqual(77);
    });
  });
});
