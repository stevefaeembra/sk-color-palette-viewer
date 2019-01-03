const PubSub = require('../helpers/pub_sub.js');

const PaletteView = function(attachment) {
  this.element = document.querySelector(attachment);
}

PaletteView.prototype.render = function (data) {
  this.element.innerHTML = '';
  data.forEach((colorEntry) => {
    const divSwatch = document.createElement("div");
    divSwatch.innerHTML = colorEntry.name;
    this.element.appendChild(divSwatch);
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
