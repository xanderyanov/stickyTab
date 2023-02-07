var $window;
var prevWindowWidth = 0;
var windowWidth;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
//in selector we set style, for example
//height: calc(var(--vh, 1vh) * 100); for 100vh

function initVars() {
  $window = $(window);
  windowWidth = $window.width();
  windowHeight = $window.height();

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

$(function () {
  
});
