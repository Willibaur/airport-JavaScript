'user strict';

var DEFAULT_CAPACITY = 20;

function Airport(capacity) {
  this.capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
  this.weather  = new Weather();
  this.planes   = [];
}

  Airport.prototype.land = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane cannot land'); }
    else if (this.isFull()) {throw new Error('Airport full plane cannot land');}
    else {
      this.storePlane(plane);
      return 'Plane Has Landed!';
    }
  };

  Airport.prototype.takeOff = function(plane) {
    if (this.weatherCheck()) { throw new Error('Plane cannot take off'); }
    else if (this.angarPlace(plane) === -1) { throw new Error('Plane does not exist within airport') ;}
    else {
      this.removePlane(plane);
      return 'Plane Has Taken Off!';
    }
  };

  Airport.prototype.removePlane = function (plane) {
    plane.changeStatus();
    this.planes.splice(this.angarPlace(plane),1);
  };

  Airport.prototype.angarPlace = function (plane) {
    return this.planes.indexOf(plane);
  };

  Airport.prototype.storePlane = function (plane) {
    plane.changeStatus(plane);
    this.planes.push(plane);
  };

  Airport.prototype.isFull = function () {
    return this.planes.length === this.capacity;
  };

  Airport.prototype.weatherCheck = function() {
    return this.weather.isStormy();
  };
