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
      lightness: colorEntry.lightness()
    });
    console.log(entry);
    this.data.push(entry);
  })
}

PaletteModel.prototype.getAll = function () {
  return this.data;
};

module.exports = PaletteModel;
