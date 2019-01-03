const PubSub = require('../helpers/pub_sub.js');
const SwatchView = require("./swatch_view.js");

const PaletteView = function(attachment) {
  this.element = document.querySelector(attachment);
}

PaletteView.prototype.render = function (data) {
  this.element.innerHTML = '';
  data.forEach((colorEntry) => {
    const divSwatch = new SwatchView(colorEntry);
    this.element.appendChild(divSwatch.render());
  })
};

PaletteView.prototype.bindEvents = function () {
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    const data = event.detail.palette;
    this.render(data);
  })
};

module.exports = PaletteView;
