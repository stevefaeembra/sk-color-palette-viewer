// class to contain a colour and all its constituent components
// in different colour spaces, together with scalar measurements
// such as luminosity
// e.g. r, g. b, c, y, m , k...

var color = require("color");


class Colour {

  constructor(hexcode) {
    this.hex = hexcode;
    this.color = color(hexcode);
    this.rgb = this.color.rgb();
    this.cmyk = this.color.cmyk();
  }

  hexRgb() {
    return this.hex;
  };

  red() {
    return this.rgb.color[0];
  };

  green() {
    return this.rgb.color[1];
  }

  blue() {
    return this.rgb.color[2];
  }

  cyan() {
    return this.cmyk.color[0];
  };

  magenta() {
    return this.cmyk.color[1];
  }

  yellow() {
    return this.cmyk.color[2];
  }

  key() { // black in CMYK (actually called 'Key', not Black. Hence K.)
    return this.cmyk.color[3];
  }

};

module.exports = Colour;
