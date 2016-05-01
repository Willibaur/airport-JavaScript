'user strict';

var DEFAULT_CAPACITY = 20;

function Airport(capacity) {
  this.capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
  this.weather  = new Weather();
}

  Airport.prototype.land = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane cannot land'); }
    else {
      plane.changeStatus();
      return 'Plane Has Landed!';
    }
  };

  Airport.prototype.takeOff = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane cannot take off');}
    else {
      plane.changeStatus();
      return 'Plane Has Taken Off!';
    }
  };

  Airport.prototype.weatherCheck = function() {
    return this.weather.isStormy();
  };
