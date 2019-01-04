const PubSub = require('../helpers/pub_sub.js');

const SwatchView = function(colorEntry) {
  this.color = colorEntry; // palette object for this color
}

SwatchView.prototype.render = function () {
  // returns an element (div) to render this particular colour.
  const divSwatch = document.createElement("div");
  const divColorBit = document.createElement("div");
  const divNameBit = document.createElement("div");
  divSwatch.className = "swatch-card";
  divSwatch.id = this.color.hexcode;
  // color swatch
  divColorBit.style.backgroundColor = this.color.hexcode;
  // add event listener for click
  divColorBit.addEventListener("click", (event) => {
    PubSub.publish("SwatchView:clicked", {data: this.color});
  })
  divColorBit.className = "swatch-card--swatch";
  // title
  divNameBit.innerHTML = this.color.name;
  divNameBit.className = "swatch-card--name";
  // add kids to parent
  divSwatch.appendChild(divColorBit);
  divSwatch.appendChild(divNameBit);
  return divSwatch;
};

module.exports = SwatchView;
