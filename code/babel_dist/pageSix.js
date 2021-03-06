"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSix = void 0;

var _utils = require("../JS/utils");

var _rocket = _interopRequireDefault(require("../../res/rocket.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JavaScript pagina 6
var runSix = function runSix() {
  var navBar = (0, _utils.createNavBar)();
  document.body.appendChild(navBar);
  var title = document.createElement("div");
  title.setAttribute("class", "title_background");
  var titleText = document.createElement("h1");
  titleText.setAttribute("class", "title");
  titleText.innerHTML = "Desenlace";
  title.appendChild(titleText);
  document.body.appendChild(title);
  var text = document.createElement("p");
  var boldText = document.createElement("b");
  boldText.innerText = "Al volver pude verme a m� mismo salir de mi casa por primera vez (cuando me encontr� a Manchas). As� que sin meditarlo fui al lado m�o y me dispar� en la cabeza, ya que no pueden haber dos versiones de m� al mismo tiempo. Luego tom� un lanzacohetes y con �l destru� la nave espacial cuando vino. Finalmente, volv� a mi casa, recog� la basura, enterr� mi cuerpo y me acost� tranquilamente luego de un d�a tan agitado.";
  text.appendChild(boldText);
  document.body.appendChild(text);
  var profilePic = document.createElement("img");
  profilePic.setAttribute("src", _rocket["default"]);
  profilePic.setAttribute("alt", "Imagen de Perfil");
  profilePic.setAttribute("class", "rocket");
  document.body.appendChild(profilePic);
  var titleTwo = document.createElement("div");
  titleTwo.setAttribute("class", "title_background");
  var titleTextTwo = document.createElement("h1");
  titleTextTwo.setAttribute("class", "title");
  titleTextTwo.innerHTML = "Fin?";
  titleTwo.appendChild(titleTextTwo);
  document.body.appendChild(titleTwo);
  var bottomNavBar = (0, _utils.createNavButtons)("pageFive.html", "./index.html");
  document.body.appendChild(bottomNavBar);
};

exports.runSix = runSix;