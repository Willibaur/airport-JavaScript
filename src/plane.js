function Plane(initialStatus) {
  this.status =  initialStatus;
}

Plane.prototype.readStatus = function () {
  return this.status;
};

Plane.prototype.changeStatus = function () {
  if (this.status === 'in flight') {
    this.status = 'landed';
  }
  else {
    this.status = 'in flight';
  }
};
