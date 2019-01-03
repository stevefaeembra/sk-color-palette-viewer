const paletteJson = require("../db/palette.js")
const Colour = require("./colour.js")

const PaletteModel = function () {
  this.palette = paletteJson;
  this.data = [];
  Object.keys(this.palette).forEach((colourName) => {
    const colorEntry = new Colour(this.palette[colourName]);
    const entry = ({
      name: colourName,
      hexcode: colorEntry.hexRgb(),
      red: colorEntry.red(),
      green: colorEntry.green(),
      blue: colorEntry.blue(),
      cyan: colorEntry.cyan(),
      magenta: colorEntry.magenta(),
      key: colorEntry.key(),
      hue: colorEntry.hue(),
      saturation: colorEntry.saturation(),
      lightness: colorEntry.lightness(),
      luma: colorEntry.luma()
    });
    //console.log(entry);
    this.data.push(entry);
  })
}

PaletteModel.prototype.sortedBy = function (fieldName) {
  // clone array and sort it by one of the fields.
  var clone = this.data.slice(0);
  clone.sort((color1,color2) => {
    if (color1[fieldName] > color2[fieldName]) {
      return 1;
    } else if (color1[fieldName] < color2[fieldName]) {
      return -1;
    } else {
      return 0;
    }
  });
  return clone;
};

PaletteModel.prototype.getAll = function () {
  return this.sortedBy("luma");
};

module.exports = PaletteModel;
