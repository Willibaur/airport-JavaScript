function Airport(capacity,weather) {
  this.capacity = 20;
  this.weather = new Weather();

}

Airport.prototype.land = function(plane) {
  this.weatherCheck();
  return 'Plane Has Landed!';
};

Airport.prototype.takeOff = function(plane) {
  this.weatherCheck();
  return 'Plane Has Taken Off!';

};

Airport.prototype.weatherCheck = function() {
  if (this.weather.isStormy() === true) {
  return 'Stormy';
  // throw('Stormy weather no travel allowed');
  }
  else {
    return 'Sunny';
  }
  // return true;
};
