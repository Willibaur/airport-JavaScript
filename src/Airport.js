'user strict';

var DEFAULT_CAPACITY = 20;

function Airport(capacity, weather, plane) {
  this.capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
  this.weather  = typeof weather  !== 'undefined' ? weather  : new Weather();
  this.plane    = typeof plane    !== 'undefined' ? plane    : new Plane();
}

  Airport.prototype.land = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane cannot land'); }
    this.plane.changeStatus();
    return 'Plane Has Landed!';
  };

  Airport.prototype.takeOff = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane cannot take off');}
    this.plane.changeStatus();
    return 'Plane Has Taken Off!';
  };

  Airport.prototype.weatherCheck = function() {
    return this.weather.isStormy();
  };
