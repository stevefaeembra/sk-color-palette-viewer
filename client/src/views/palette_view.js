const PubSub = require('../helpers/pub_sub.js');

const PaletteView = function(attachment) {
  this.element = document.querySelector(attachment);
}

PaletteView.prototype.bindEvents = function () {
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    const data = event.detail.palette;
    debugger;
    console.log(data);
  })
};

module.exports = PaletteView;
