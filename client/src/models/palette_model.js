const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const PaletteModel = function() {
  this.fetchPalette();
  this.data = [];
}

PaletteModel.prototype.bindEvents = function () {
  PubSub.subscribe("sortView:changeSortBy", (event) => {
    PubSub.signForDelivery(this,event);
    console.log(`Now going to sort by ${event.detail.sortBy}`);
    this.fetchPaletteSorted(event.detail.sortBy);
  })
};

PaletteModel.prototype.fetchPaletteSorted = function (sortedBy) {
  // fetch palette sorted by field, ascending.
  const host = window.location.href;
  const request = new RequestHelper(`${host}colors?sortedBy=${sortedBy}`);
  request.get().then((data) => {
    console.dir(data);
    this.data = data;
    PubSub.publish("palettemodel:gotpalette", {palette: data});
  });
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
