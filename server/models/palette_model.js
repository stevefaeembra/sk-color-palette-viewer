const paletteJson = require("../db/palette.js")

const PaletteModel = function () {
  this.palette = paletteJson;
}

PaletteModel.prototype.getUnsorted = function () {
  return this.palette;
};

module.exports = PaletteModel;
