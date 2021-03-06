"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNavBar = createNavBar;
exports.createNavElement = createNavElement;
exports.createNavButtons = createNavButtons;

var _index = _interopRequireDefault(require("../../src/index.html"));

var _pageOne = _interopRequireDefault(require("../../src/HTML/pageOne.html"));

var _pageTwo = _interopRequireDefault(require("../../src/HTML/pageTwo.html"));

var _pageThree = _interopRequireDefault(require("../../src/HTML/pageThree.html"));

var _pageFour = _interopRequireDefault(require("../../src/HTML/pageFour.html"));

var _pageFive = _interopRequireDefault(require("../../src/HTML/pageFive.html"));

var _pageSix = _interopRequireDefault(require("../../src/HTML/pageSix.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Utilities
function createNavBar() {
  var navBar = document.createElement("ul");
  navBar.setAttribute("class", "navbar");
  var navElementHome = createNavElement("./index.html", "Pagina Principal");
  navBar.appendChild(navElementHome);
  var navElementOne = createNavElement("./pageOne.html", "1. Manchas");
  navBar.appendChild(navElementOne);
  var navElementTwo = createNavElement("./pageTwo.html", "2. Elevador");
  navBar.appendChild(navElementTwo);
  var navElementThree = createNavElement("./pageThree.html", "3. Zombies");
  navBar.appendChild(navElementThree);
  var navElementFour = createNavElement("./pageFour.html", "4. Aliens");
  navBar.appendChild(navElementFour);
  var navElementFive = createNavElement("./pageFive.html", "5. Tiempo");
  navBar.appendChild(navElementFive);
  var navElementSix = createNavElement("./pageSix.html", "6. Fin");
  navBar.appendChild(navElementSix);
  return navBar;
}

function createNavElement(path, name) {
  var navElement = document.createElement("li");
  var link = document.createElement("a");
  link.setAttribute("href", path);
  link.innerHTML = name;
  navElement.appendChild(link);
  return navElement;
}

function createNavButtons(prevPath, nextPath) {
  var navBar = document.createElement("ul");
  navBar.setAttribute("class", "navbar");
  var navElementOne = createNavElement(prevPath, "Anterior");
  navBar.appendChild(navElementOne);
  var navElementHome = createNavElement("./index.html", "Pagina Principal");
  navBar.appendChild(navElementHome);
  var navElementTwo = createNavElement(nextPath, "Siguiente");
  navBar.appendChild(navElementTwo);
  return navBar;
}