function siteResizeFunction() {
  prevWindowWidth = windowWidth;
  initVars();

  if (prevWindowWidth <= 1280 && windowWidth > 1280) {
  }
  if (prevWindowWidth > 1280 && windowWidth <= 1280) {
  }
}

$(function () {
  $window.on('resize', siteResizeFunction);
});
