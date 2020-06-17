const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Removes all borders
function removeBorders() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

//Removes all content
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//Select tab content item
function selectItem(e) {
  removeBorders();
  removeShow();
  //Add border to current tab
  this.classList.add("tab-border");
  //Grab content item from DOM
  const tabContentItem = document.getElementById(`${this.id}-content`);
  //Add show class
  tabContentItem.classList.add("show");
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
