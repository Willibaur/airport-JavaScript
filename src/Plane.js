'user strict';

function Plane(initialStatus) {
  this.status = typeof initialStatus !== 'undefined' ? initialStatus : 'landed';
}

Plane.prototype.getStatus = function () {
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
