const PaletteModel = require("./models/palette_model");
const PaletteView = require("./views/palette_view");
const SortView = require("./views/sort_view.js");
const PaletteSelectView = require("./views/palette_select_view");
const SelectedColourView = require("./views/selected_color_view");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM has loaded");
  const items = [
    new PaletteModel(),
    new PaletteView("#paletteView"),
    new SortView("#sortForm"),
    new PaletteSelectView("#paletteForm"),
    new SelectedColourView("#selectedColor")
  ]
  items.forEach((item) => {
    item.bindEvents();
  })
});
