export const setRoute = (path, runPage) => {
  if (location.pathname === path) {
    runPage();
  };
};
