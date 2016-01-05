function Plane(status) {
  this.status = 'airbourne';
}

Plane.prototype.readStatus = function () {
  return this.status;
};

Plane.prototype.changeStatus = function () {
  if (this.status === 'airbourne') {
    this.status = 'landed';
  } else (this.status === 'landed') {
    this.status = 'airbourne';
  }
};

// Plane.prototype.changeStatus = function () {
//   if (this.status === 'landed') {
//     return this.status;
//   }
//   else {
//     this.status = 'landed';
//   }
//   };
