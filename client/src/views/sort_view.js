const PubSub = require('../helpers/pub_sub.js');

const SortView = function(attachment) {
  this.element = document.querySelector(attachment);
  debugger;
}

SortView.prototype.render = function () {
  this.element.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = "form goes here ta";
  this.element.appendChild(div);
};

SortView.prototype.bindEvents = function () {
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    this.render();
  })
};

module.exports = SortView;
