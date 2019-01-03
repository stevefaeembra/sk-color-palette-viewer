const SwatchView = function(colorEntry) {
  this.color = colorEntry; // palette object for this color
}

SwatchView.prototype.render = function () {
  // returns an element (div) to render this particular colour.
  const divSwatch = document.createElement("div");
  divSwatch.innerHTML = this.color.name;
  return divSwatch;
};

module.exports = SwatchView;
