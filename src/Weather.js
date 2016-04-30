function Weather() {
}

Weather.prototype.isStormy = function () {
  return (Math.random() > 0.7) ? true : false;
};
