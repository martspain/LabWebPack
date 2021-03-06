"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runTwo = void 0;

var _utils = require("../JS/utils");

var _cuchillo = _interopRequireDefault(require("../../res/cuchillo.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JavaScript de la pagina dos
var runTwo = function runTwo() {
  var navBar = (0, _utils.createNavBar)();
  document.body.appendChild(navBar);
  var title = document.createElement("div");
  title.setAttribute("class", "title_background");
  var titleText = document.createElement("h1");
  titleText.setAttribute("class", "title");
  titleText.innerHTML = "El elevador de la muerte";
  title.appendChild(titleText);
  document.body.appendChild(title);
  var profilePic = document.createElement("img");
  profilePic.setAttribute("src", _cuchillo["default"]);
  profilePic.setAttribute("alt", "Imagen de Perfil");
  document.body.appendChild(profilePic);
  var text = document.createElement("p");
  var boldText = document.createElement("b");
  boldText.innerText = "Iba de camino a mi curso, como dije anteriormente, cuando de repente un hombre encapuchado sali� del callej�n de la izquierda. Comenz� a correr hacia mi con un cuchillo y gritando que me iba a matar. Naturalmente comenc� a correr con toda mi energ�a, aunque a veces me mareaba por el golpe que ten�a en la cabeza. Aun as�, sin titubear segu� huyendo lo m�s lejos que pude. Hasta que llegu� a un punto en el que ya no escuche los gritos del loco coleccionista de cuchillos. Aunque ya no lo escuchaba, segu�a nervioso por los eventos acontecidos. As� que busqu� un lugar donde refugiarme, ya que hab�a comenzado a llover. El primer lugar que encontr� fue un hotel: El Westin Camino Real. Le dije al portero que iba a visitar a un huesped. Aunque el portero no estaba muy convencido, me logr� colar al hotel y r�pidamente ingres� a un elevador y presion� el bot�n para ir al �ltimo piso. Sin embargo, a medio camino se apagan las luces del elevador y �ste se detiene. Recuerdo haber pensado: \"justo lo que necesito para completar un p�simo d�a\". Aunque no sab�a que ese, era solo el comienzo.";
  text.appendChild(boldText);
  document.body.appendChild(text);
  var bottomNavBar = (0, _utils.createNavButtons)("pageOne.html", "pageThree.html");
  document.body.appendChild(bottomNavBar);
};

exports.runTwo = runTwo;