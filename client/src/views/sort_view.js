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
  const options = ["Sort by:","name","red","green","blue","cyan","yellow","magenta","key","hue","saturation", "value","luma","neutrality","lab_l","lab_a","lab_b"];
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
    //console.log(event.target);
    const indexOfSortField = event.target.selectedIndex;
    const selectedSortOption = event.target[indexOfSortField];
    PubSub.publish("sortView:changeSortBy", {sortBy: selectedSortOption["name"]});
  })
  div.appendChild(formDiv);
  this.element.appendChild(div);
};

SortView.prototype.bindEvents = function () {
  PubSub.subscribe("palettemodel:gotpalette", (event) => {
    PubSub.signForDelivery(this,event);
    this.render();
  });
};

module.exports = SortView;
