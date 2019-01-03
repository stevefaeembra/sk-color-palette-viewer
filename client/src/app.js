const PaletteModel = require("./models/palette_model");
const PaletteView = require("./views/palette_view");
const SortView = require("./views/sort_view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM has loaded");
  const items = [
    new PaletteModel(),
    new PaletteView("#paletteView"),
    new SortView("#sortForm"),
  ]
  items.forEach((item) => {
    item.bindEvents();
  })
});
