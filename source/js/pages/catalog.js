export const catalogPage = () => {
  const countryFilter = document.querySelector(".country-filter");
  const countryFilterButton = countryFilter.querySelector(".country-filter__collapse-button");
  const countryFilterExpandButton = countryFilter.querySelector(".country-filter__expand-button");

  countryFilterButton.addEventListener("click", () => {
    countryFilter.classList.toggle("country-filter--expanded");
  });

  countryFilterExpandButton.addEventListener("click", () => {
    countryFilter.classList.toggle("country-filter--expanded");
  });
};
