const PaletteModel = require("./models/palette_model");
const PaletteView = require("./views/palette_view");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM has loaded");
  const items = [
    new PaletteModel(),
    new PaletteView("#paletteView")
  ]
  items.forEach((item) => {
    item.bindEvents();
  })
});
