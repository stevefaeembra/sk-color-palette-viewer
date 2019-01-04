const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const PaletteModel = function() {
  this.data = [];
  this.paletteName = "css";
  this.sortedBy = "name";
  this.fetchPaletteSorted();
}

PaletteModel.prototype.bindEvents = function () {
  PubSub.subscribe("sortView:changeSortBy", (event) => {
    PubSub.signForDelivery(this,event);
    //console.log(`Now going to sort by ${event.detail.sortBy}`);
    this.sortedBy = event.detail.sortBy;
    this.fetchPaletteSorted();
  })
  PubSub.subscribe("paletteSelectView:changePalette", (event) => {
    PubSub.signForDelivery(this, event);
    const newPaletteName = event.detail.paletteName;
    this.paletteName = newPaletteName;
    //console.log(`going to fetch the palette called ${this.paletteName}`);
    this.fetchPaletteSorted();
  })
};

PaletteModel.prototype.fetchPaletteSorted = function () {
  // fetch palette given palette name and sorting option
  const host = window.location.href;
  const request = new RequestHelper(`${host}colors?sortedBy=${this.sortedBy}&palette=${this.paletteName}`);
  request.get().then((data) => {
    //console.dir(data);
    this.data = data;
    PubSub.publish("palettemodel:gotpalette", {palette: data});
  });
};

// PaletteModel.prototype.fetchPalette = function () {
//   const host = window.location.href;
//   const request = new RequestHelper(`${host}colors`);
//   request.get().then((data) => {
//     console.dir(data);
//     this.data = data;
//     PubSub.publish("palettemodel:gotpalette", {palette: data});
//   })
// };

module.exports = PaletteModel;
