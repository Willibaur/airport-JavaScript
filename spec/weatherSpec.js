describe ('Weather', function() {
var weather;

beforeEach(function() {

  weather =  new Weather();
});

  it ('responds to isStormy',function(){
    expect(weather.isStormy).toBeDefined();
  });

});
