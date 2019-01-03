const PubSub = require('../helpers/pub_sub.js');

const SortView = function(attachment) {
  this.element = document.querySelector(attachment);
}

SortView.prototype.render = function () {
  this.element.innerHTML = "";
  const div = document.createElement("div");
  const formDiv = document.createElement("form");
  const select = document.createElement("select");
  select.id = "sortBy";
  const options = ["name","red","green","blue","cyan","yellow","magenta","key","hue","luminosity","value","luma","neutrality"];
  options.forEach((optionName) => {
    const option = document.createElement("option");
    option.name = optionName;
    option.value = optionName;
    option.innerHTML = optionName;
    select.appendChild(option);
  })
  formDiv.appendChild(select);
  div.appendChild(formDiv);
  this.element.appendChild(div);
};

SortView.prototype.bindEvents = function () {
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    this.render();
  })
};

module.exports = SortView;
