var DEFAULT_CAPACITY = 20;

function Airport(capacity, weather) {
  this.capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
  this.weather = new Weather();
  this.stormy = Symbol();
}

  Airport.prototype.land = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane can not land'); }
    return 'Plane Has Landed!';
  };

  Airport.prototype.takeOff = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane cannot take off');}
    return 'Plane Has Taken Off!';
  };

  Airport.prototype.weatherCheck = function() {
    return this.weather.isStormy();
  };
