// websafe palette
// these are the colours which can be represented in 3 hex digits
// old school e.g. #3a3 = #33aa33

var palette = {
};

function toHex(number) {
  let hexString = number.toString(16);
  if (hexString.length % 2) {
    hexString = '0' + hexString;
  };
  return hexString;
};

for (var r=0; r<256; r+=51) {
  const red = toHex(r);
  for (var g=0; g<256; g+=51) {
    const green = toHex(g);
    for (var b=0; b<256; b+=51) {
      const blue = toHex(b);
      const hexcode = `#${red}${green}${blue}`;
      palette[hexcode] = hexcode;
    };
  };
};

module.exports = palette;
