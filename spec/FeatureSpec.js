'user strict';

describe('Feature Test:', function () {
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

  it('sets airport capacity', function () {
    airport = new Airport(77);
    expect(airport.capacity).toEqual(77);
  });
});
