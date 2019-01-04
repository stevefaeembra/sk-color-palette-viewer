// serves up a palette by name

const palette_css = require('./palette_css');
const palette_websafe = require('./palette_websafe');
const palette_rgb16 = require('./palette_rgb16');

const Palettes = function() {
  this.palettes = {
    "css": palette_css,
    "websafe": palette_websafe,
    "rgb16": palette_rgb16
  }
}

Palettes.prototype.fetchPalette = function (paletteName) {
  return this.palettes[paletteName];
};

module.exports = Palettes;
