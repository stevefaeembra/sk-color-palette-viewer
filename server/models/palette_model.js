const Palettes = require("../db/palettes.js")
const Colour = require("./colour.js")

const PaletteModel = function () {
  this.palettes = new Palettes();
  this.palette = {};
  this.data = [];
  this.loadPalette("websafe");
}

PaletteModel.prototype.loadPalette = function (paletteName) {
  this.palette = this.palettes.fetchPalette(paletteName);
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
      yellow: colorEntry.yellow(),
      magenta: colorEntry.magenta(),
      key: colorEntry.key(),
      hue: colorEntry.hue(),
      saturation: colorEntry.saturation(),
      lightness: colorEntry.lightness(),
      luma: colorEntry.luma(),
      neutrality: colorEntry.neutrality()
    });
    this.data.push(entry);
  })
};

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

PaletteModel.prototype.getAll = function (sortedBy = "name", paletteName="websafe") {
  this.loadPalette(paletteName);
  //console.log(this.data);
  return this.sortedBy(sortedBy);
};

module.exports = PaletteModel;
