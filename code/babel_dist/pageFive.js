"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runFive = void 0;

var _utils = require("../JS/utils");

var _delorean = _interopRequireDefault(require("../../res/delorean.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JavaScript pagina 5
var runFive = function runFive() {
  var navBar = (0, _utils.createNavBar)();
  document.body.appendChild(navBar);
  var title = document.createElement("div");
  title.setAttribute("class", "title_background");
  var titleText = document.createElement("h1");
  titleText.setAttribute("class", "title");
  titleText.innerHTML = "Viaje en el Tiempo";
  title.appendChild(titleText);
  document.body.appendChild(title);
  var profilePic = document.createElement("img");
  profilePic.setAttribute("src", _delorean["default"]);
  profilePic.setAttribute("alt", "Imagen de Delorean");
  profilePic.setAttribute("class", "delorean");
  document.body.appendChild(profilePic);
  var text = document.createElement("p");
  var boldText = document.createElement("b");
  boldText.innerText = "Entonces, volv� al Planeta Birig Bamba muy enojado. Pero pens� en una soluci�n: le ped� a los cient�ficos m�s listos que dise�aran una m�quina del tiempo y un ant�doto para evitar que los zombies destruyeran todo. Hicieron todo lo que les ped�, as� que luego de agradecerles me march� y volv� al d�a en que empez� todo.";
  text.appendChild(boldText);
  document.body.appendChild(text);
  var bottomNavBar = (0, _utils.createNavButtons)("pageFour.html", "pageSix.html");
  document.body.appendChild(bottomNavBar);
};

exports.runFive = runFive;