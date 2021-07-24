import { debounce } from './utils.js';

const SCROLL_TIMEOUT = 500;
const SCROLL_OFFSET = 600;

export const setHeader = () => {
  const menu = document.querySelector(".menu");
  const menuToggle = document.querySelector(".menu__toggle");
  const pageHeader = document.querySelector(".page-header");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("menu--open");
    menuToggle.classList.toggle("menu__toggle--open");
    pageHeader.classList.toggle("page-header--expanded");
  });

  const debounceOnScroll = debounce(() => {
    if (window.pageYOffset > SCROLL_OFFSET && !pageHeader.classList.contains("page-header--expanded")) {
      pageHeader.classList.add("page-header--on-scroll");
    } else {
      pageHeader.classList.remove("page-header--on-scroll");
    }
  }, SCROLL_TIMEOUT);

  window.addEventListener("scroll", () => {
    debounceOnScroll();
  });
};
