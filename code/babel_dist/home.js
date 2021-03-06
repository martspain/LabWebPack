"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var _utils = require("../JS/utils");

var _imagen = _interopRequireDefault(require("../../res/imagen.jpeg"));

var _pageOne = _interopRequireDefault(require("../HTML/pageOne.html"));

var _pageSix = _interopRequireDefault(require("../HTML/pageSix.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Javascript de la p�gina de home
//import img from "../res/imagen.jpeg";
var run = function run() {
  var navBar = (0, _utils.createNavBar)();
  document.body.appendChild(navBar);
  var title = document.createElement("div");
  title.setAttribute("class", "title_background");
  var titleText = document.createElement("h1");
  titleText.setAttribute("class", "title");
  titleText.innerHTML = "Mi aventura al planeta BirigBamba";
  title.appendChild(titleText);
  document.body.appendChild(title);
  var profilePic = document.createElement("img");
  profilePic.setAttribute("src", _imagen["default"]);
  profilePic.setAttribute("alt", "Imagen de Perfil");
  document.body.appendChild(profilePic);
  var text = document.createElement("p");
  var boldText = document.createElement("b");
  boldText.innerText = "Todo comenz� en la ma�ana de un martes 13. Era un d�a como cualquier otro. Acababa de despertar, y cuando me di cuenta mi reloj marcaba las 9 A.M. Esto significa que iba tarde para mi clase de Sistemas y Tecnolog�as Web. Me alist� en menos de 5 minutos, y al salir de casa, el perro de mis vecinos, Manchas, se encontraba rompiendo la bolsa de basura frente a mi puerta. Al darme cuenta de esto lo intent� capturar, pero Manchas r�pidamente me esquiv�, dispers� la basura por toda la entrada y seguidament� se infiltr� a mi casa.";
  text.appendChild(boldText);
  document.body.appendChild(text);
  var bottomNavBar = (0, _utils.createNavButtons)(_pageSix["default"], _pageOne["default"]);
  document.body.appendChild(bottomNavBar);
};

exports.run = run;