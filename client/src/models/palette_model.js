const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const PaletteModel = function() {
  this.fetchPalette();
  this.data = [];
}

PaletteModel.prototype.bindEvents = function () {
};

PaletteModel.prototype.fetchPalette = function () {
  const host = window.location.href;
  const request = new RequestHelper(`${host}colors`);
  request.get().then((data) => {
    console.dir(data);
    this.data = data;
    PubSub.publish("palettemodel:gotpalette", {palette: data});
  })
};

module.exports = PaletteModel;