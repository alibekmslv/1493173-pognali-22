const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu__toggle");
const pageHeader = document.querySelector(".page-header");
const modalTrigger = document.querySelector(".add-profile__link");
const modalWindow = document.getElementById("business-rates");
const modalCloseTrigger = document.querySelector(".modal__button");
const noJs = document.querySelector(".no-js");
const countryFilter = document.querySelector(".country-filter");
const countryFilterButton = document.querySelector(".country-filter__collapse-button");
const countryFilterExpandButton = document.querySelector(".country-filter__expand-button");

noJs.classList.remove("no-js");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
    pageHeader.classList.toggle("page-header--expanded");
    menuToggle.classList.toggle("menu__toggle--open");
  })
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 600 && !pageHeader.classList.contains("page-header--expanded")) {
    pageHeader.classList.add("page-header--on-scroll");
  } else {
    pageHeader.classList.remove("page-header--on-scroll");
  }
})

if (modalTrigger) {
  modalTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    modalWindow.classList.add("modal--show");
  })
}

if (modalCloseTrigger) {
  modalCloseTrigger.addEventListener("click", function () {
    modalWindow.classList.remove("modal--show");
  })
}

if (countryFilterButton) {
  countryFilterButton.addEventListener("click", function () {
    countryFilter.classList.toggle("country-filter--expanded");
  })

  countryFilterExpandButton.addEventListener("click", function () {
    countryFilter.classList.toggle("country-filter--expanded");
  })
}
