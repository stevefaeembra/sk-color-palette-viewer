const PubSub = require('../helpers/pub_sub.js');

const SelectedColourView = function(attachment) {
  this.element = document.querySelector(attachment);
}

SelectedColourView.prototype.hide = function () {
  // hide the selected colour info panel
  this.element.innerHTML = "";
};

SelectedColourView.prototype.render = function (colorEntry) {
  // render info about the selected colour
  this.element.innerHTML = "";
  const divSelectedInfo = document.createElement("div");
  divSelectedInfo.className = "selectedInfo";
  const divSwatch = document.createElement("div");
  divSwatch.className = "selectedInfo--swatch";
  divSwatch.style.backgroundColor = colorEntry.hexcode;
  // create an info element for each field in the colorEntry

  Object.keys(colorEntry).forEach((fieldName, index, array) => {
    if (index === 0) {
      divSelectedInfo.appendChild(divSwatch);
    }
    const divField = document.createElement("div");
    divField.className = "selectedInfo--field";

      const divFieldName = document.createElement("div");
      divFieldName.className = "selectedInfo--field--title";
      divFieldName.innerHTML = `${fieldName}`

      const divFieldValue = document.createElement("div");
      divFieldValue.className = "selectedInfo--field--value";

      // if a number, round to 2 dps
      const fieldValue = colorEntry[fieldName];
      if (parseFloat(fieldValue)) {
        divFieldValue.innerHTML = `${colorEntry[fieldName].toFixed(2)}`;
      } else {
        divFieldValue.innerHTML = `${colorEntry[fieldName]}`;
      };
      divField.appendChild(divFieldName);
      divField.appendChild(divFieldValue);

    divSelectedInfo.appendChild(divField);
  })

  // add a close button at the end of the grid

  const closeButton = document.createElement("div");
  closeButton.className = "selectedInfo--field";
  closeButton.innerHTML = "Close";

  // add event listener to close button
  closeButton.addEventListener("click", (event) => {
    PubSub.publish("SwatchView:close", {});
  })

  divSelectedInfo.appendChild(closeButton);

  this.element.appendChild(divSelectedInfo);
};

SelectedColourView.prototype.bindEvents = function () {
  PubSub.subscribe("SwatchView:clicked", (event) => {
    PubSub.signForDelivery(this,event);
    this.render(event.detail.data);
  });
  PubSub.subscribe("SwatchView:close", (event) => {
    PubSub.signForDelivery(this,event);
    this.hide();
  });
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    this.render();
  });
};

module.exports = SelectedColourView;
