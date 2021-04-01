const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu__toggle");
const pageHeader = document.querySelector(".page-header");
const logoImage = document.querySelector(".page-header__logo .logo__image");
const modalTrigger = document.querySelector(".add-profile__link");
const modalWindow = document.getElementById("business-rates");
const modalCloseTrigger = document.querySelector(".modal__button");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    pageHeader.classList.toggle("menu--open");
    menuToggle.classList.toggle("menu__toggle--open")
    if (pageHeader.classList.contains("menu--open") || pageHeader.classList.contains("page-header--on-scroll")) {
      logoImage.src = "img/logo-mobile.png";
    } else {
      logoImage.src = "img/logo-mobile-light.png"
    }
  })
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 600) {
    pageHeader.classList.add("page-header--on-scroll");
    logoImage.src = "img/logo-mobile.png";
  } else {
    pageHeader.classList.remove("page-header--on-scroll");
    if (pageHeader.classList.contains("menu--open")) {
      logoImage.src = "img/logo-mobile.png"
    } else {
      logoImage.src = "img/logo-mobile-light.png"
    }
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
