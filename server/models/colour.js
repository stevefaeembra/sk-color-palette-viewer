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
    this.hsl = this.color.hsl();
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

  hue() {
    return this.hsl.color[0];
  }

  saturation() {
    return this.hsl.color[1];
  }

  lightness() {
    return this.hsl.color[2];
  }

  luma(color) {
    // perceptual luminosity
    // (most accurate conversion to greyscale, takes into account that
    // greens are lighter than reds and blues)
    var r = this.rgb.color[0];
    var g = this.rgb.color[1];
    var b = this.rgb.color[2];
    var lum = ((0.2126*r)+(0.7152*g)+(0.0722*b));
    return lum;
  }

  neutrality() {
    // custom function I devised, work out rms error of deviation from
    // rgb average. Low values are more neutral (RGB values closer
    // together). NOT PERCEPTUAL, i.e. channels equally weighted.
    var r = this.rgb.color[0];
    var g = this.rgb.color[1];
    var b = this.rgb.color[2];
    var lum = (r+g+b)/3.0; // non-perceptual
    return ((r-lum)*(r-lum)) + ((g-lum)*(g-lum)) + ((b-lum)*(b-lum));
  }

};

module.exports = Colour;
