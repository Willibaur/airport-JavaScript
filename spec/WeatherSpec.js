'user strict';

describe ('Weather', function() {
  var weather;

  beforeEach(function() {
    weather =  new Weather();
  });

  describe('forecast returns', function() {
    it('stormy conditions', function() {
      spyOn(Math, 'random').and.returnValue(true);
      expect(weather.isStormy()).toEqual(true);
    });

    it('sunny conditions', function() {
      spyOn(Math, 'random').and.returnValue(false);
      expect(weather.isStormy()).toEqual(false);
    });
  });
});
