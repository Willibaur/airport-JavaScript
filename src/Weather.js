function Weather() {
}

Weather.prototype.isStormy = function () {
  if (Math.random() > 0.7) {
    return true;
  }
  else {
    return false;
  }

};
