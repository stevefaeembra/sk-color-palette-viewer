const PubSub = require('../helpers/pub_sub.js');

const SelectedColourView = function(attachment) {
  this.element = document.querySelector(attachment);
}

SelectedColourView.prototype.render = function (colorEntry) {
  console.dir(colorEntry);
  this.element.innerHTML = "";
  const divSelectedInfo = document.createElement("div");
  divSelectedInfo.className = "selectedInfo";
  const divSwatch = document.createElement("div");
  divSwatch.className = "selectedInfo--swatch";
  divSwatch.style.backgroundColor = colorEntry.hexcode;
  // create an info element for each field in the colorEntry
  Object.keys(colorEntry).forEach((fieldName) => {
    const divField = document.createElement("div");
    divField.className = "selectedInfo--field";
    divField.innerHTML = `${fieldName} = ${colorEntry[fieldName]}`;
    divSelectedInfo.appendChild(divField);
  })
  divSelectedInfo.appendChild(divSwatch);
  this.element.appendChild(divSelectedInfo);
};

SelectedColourView.prototype.bindEvents = function () {
  PubSub.subscribe("SwatchView:clicked", (event) => {
    PubSub.signForDelivery(this,event);
    this.render(event.detail.data);
  });
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    this.render();
  });
};

module.exports = SelectedColourView;
