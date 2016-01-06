function Airport(capacity,weather) {
  this.capacity = 20;
  this.weather = new Weather();
}

  Airport.prototype.land = function(plane) {
    if (this.weatherCheck() === 'Stormy') {
      throw new Error('Plane can not land');
    }
    return 'Plane Has Landed!';
  };

  Airport.prototype.takeOff = function(plane) {
    if (this.weatherCheck() === 'Stormy') {
      throw new Error('Plane cannot take off');
    }
    return 'Plane Has Taken Off!';
  };

  Airport.prototype.weatherCheck = function() {
    if (this.weather.isStormy() === true) {
    return 'Stormy';
    }
    else {
      return 'Sunny';
    }
  };
