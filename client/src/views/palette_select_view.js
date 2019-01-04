const PubSub = require('../helpers/pub_sub.js');

const PaletteSelectView = function(attachment) {
  this.element = document.querySelector(attachment);
}

PaletteSelectView.prototype.render = function () {
  this.element.innerHTML = "";
  const div = document.createElement("div");
  const formDiv = document.createElement("form");
  const select = document.createElement("select");
  select.id = "palette";
  const options = ["Palette:","css","websafe", "rgb16"];
  options.forEach((optionName) => {
    const option = document.createElement("option");
    option.name = optionName;
    option.value = optionName;
    option.innerHTML = optionName;
    select.appendChild(option);
  })
  formDiv.appendChild(select);
  // if we change the selection, trigger an event
  select.addEventListener("change", (event) => {
    const selectedOption = "";
    //debugger;
    console.log(event.target);
    const indexOfPaletteField = event.target.selectedIndex;
    const selectedPaletteOption = event.target[indexOfPaletteField];
    PubSub.publish("paletteSelectView:changePalette", {paletteName: selectedPaletteOption["name"]});
  })
  div.appendChild(formDiv);
  this.element.appendChild(div);
};

PaletteSelectView.prototype.bindEvents = function () {
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    this.render();
  });
};

module.exports = PaletteSelectView;
