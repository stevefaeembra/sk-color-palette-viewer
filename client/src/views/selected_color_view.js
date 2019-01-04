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
  divSelectedInfo.innerHTML=`<h1>${colorEntry.name}</h1>`;
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
