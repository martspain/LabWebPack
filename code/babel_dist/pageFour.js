"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runFour = void 0;

var _utils = require("../JS/utils");

var _video = _interopRequireDefault(require("../../res/video.mp4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JavaScript pagina 4
var runFour = function runFour() {
  var navBar = (0, _utils.createNavBar)();
  document.body.appendChild(navBar);
  var title = document.createElement("div");
  title.setAttribute("class", "title_background");
  var titleText = document.createElement("h1");
  titleText.setAttribute("class", "title");
  titleText.innerHTML = "Abduccion Alien";
  title.appendChild(titleText);
  document.body.appendChild(title);
  var text = document.createElement("p");
  var boldText = document.createElement("b");
  boldText.innerText = "Luego de nadar al otro lado del r�o comenc� a escuchar un sonido muy fuerte que ven�a del cielo. Cuando veo hacia arriba veo un platillo volador que lanza un destello tan fuerte que no me deja ver y luego de esto pierdo la conciencia. Cuando despierto, me doy cuenta que estoy en otro planeta: el Planeta Birig Bamba. Termin� siendo la mascota del l�der de este planeta. Al parecer era un planeta muy fiestero, porque vi que tambi�n abdujeron a Steve Aoki...";
  text.appendChild(boldText);
  document.body.appendChild(text);
  var video = document.createElement("video");
  video.setAttribute("heigth", "320px");
  video.setAttribute("width", "480px");
  video.setAttribute("controls", "controls");
  var source = document.createElement("source");
  source.setAttribute("src", _video["default"]);
  source.setAttribute("type", "video/mp4");
  video.appendChild(source);
  document.body.appendChild(video);
  var textTwo = document.createElement("p");
  var boldTextTwo = document.createElement("b");
  boldTextTwo.innerText = "Luego de un par de semanas de portarme bien y ganarme su confianza, le quit� un arma al guardia y tom� de reh�n al lider. Le dije que me llevara frente a su ejercito y ah� mismo le dispar� en la cabeza y me converti en el jefe del planeta. Entonces llev� a todo el ejercito Birig Bambiano a la Tierra para recuperarla. Utilizando todas sus armas de �ltima tecnolog�a vencimos a todos los zombies. Sin embargo, ya no quedaban humanos vivos.";
  textTwo.appendChild(boldTextTwo);
  document.body.appendChild(textTwo);
  var bottomNavBar = (0, _utils.createNavButtons)("pageThree.html", "pageFive.html");
  document.body.appendChild(bottomNavBar);
};

exports.runFour = runFour;