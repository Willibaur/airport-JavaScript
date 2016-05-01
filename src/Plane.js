'user strict';

function Plane(initialStatus) {
  this.status = typeof initialStatus !== 'undefined' ? initialStatus : 'landed';
}

Plane.prototype.getStatus = function () {
  return this.status;
};

Plane.prototype.changeStatus = function () {
  this.status = (this.status === 'in flight') ? 'landed' : 'in flight';
};
