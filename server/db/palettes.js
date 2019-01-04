// serves up a palette by name

const palette_css = require('./palette_css');
const palette_websafe = require('./palette_websafe');
const palette_rgb15 = require('./palette_rgb15');

const Palettes = function() {
  this.palettes = {
    "css": palette_css,
    "websafe": palette_websafe,
    "rgb15": palette_rgb15
  }
}

Palettes.prototype.fetchPalette = function (paletteName) {
  return this.palettes[paletteName];
};

module.exports = Palettes;
