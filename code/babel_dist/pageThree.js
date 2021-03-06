"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runThree = void 0;

var _utils = require("../JS/utils");

// JavaScript pagina 3
var runThree = function runThree() {
  var navBar = (0, _utils.createNavBar)();
  document.body.appendChild(navBar);
  var title = document.createElement("div");
  title.setAttribute("class", "title_background");
  var titleText = document.createElement("h1");
  titleText.setAttribute("class", "title");
  titleText.innerHTML = "Apocalipsis Zombie";
  title.appendChild(titleText);
  document.body.appendChild(title);
  /*
  let audio = document.createElement("audio");
  audio.setAttribute("controls", "controls");
  audio.setAttribute("autoplay", "autoplay");
  let source = document.createElement("source");
  source.setAttribute("src","./res/zombie.mp3");
  source.setAttribute("type","audio/mpeg");
  audio.appendChild(source);
  document.body.appendChild(audio);
  */

  var text = document.createElement("p");
  var boldText = document.createElement("b");
  boldText.innerText = "No ten�a reloj, as� que no puedo decirlo exactamente, pero calculo que pas� cerca de dos horas en el elevador esperando a que alguien me rescatara. Pude haber esperado m�s pero comenc� a escuchar gritos fuera, adem�s de fuertes golpes. Parec�an explosiones. Me arm� de valor y sal� por la compuerta de arriba del elevador. Al entrar a un pasillo del hotel, vi que todo segu�a apagado, excepto las luces de emergencia rojas del hotel. Con esa tenue iluminaci�n pude ver a una persona al otro lado del pasillo. Le grit� por auxilio pero la persona no respond�a. Conforme me fui acercando me iba percatando de los extra�os sonidos que emit�a. O m�s bien, parec�an rugidos de una bestia enfurecida. De cualquier manera me acerqu� m�s sin meditar. Pens� que tal vez ten�a un resfriado o algo parecido. Pero no. Result� ser un zombie. Sal� huyendo al lado contrario del pasillo, vi una puerta abierta y aprovech� para encerrarme en ese cuarto. El zombie por poco consigue una cena. Comence a buscar cosas que me sirvieran, pero era dif�cil considerando la falta de luz. Luego de un rato de explorar el cuarto con mis manos y permitir que mis ojos se acostumbraran a la oscuridad me di cuenta que me encontraba en un Penthouse. Hab�a olvidado que me encontraba en el �ltimo piso del hotel. Busque en la cocina y encontr� un encendedor. Con el encendedor encontr� una linterna. Y con la linterna busque algo con lo que me pudiera defender. Tras mucha b�squeda, finalmente encontr� una katana en el armario del cuarto principal. Y adem�s de eso, algunos trajes antiguos Samurai. Al parecer me encontraba en la habitaci�n de un coleccionista de objetos Samurai. De cualquier manera, me arm� como pude y sin pensarlo mucho sal� del cuarto. Me encontr� al primer zombie que vi, pero con la katana no tuve miedo de enfrentarme a �l. Sin mucho esfuerzo, lo part� en dos pedazos. Con esta katana me fui abriendo paso por las gradas del hotel, hasta llegar a la planta baja. Aqu� me encontr� muchos zombies. Adem�s, reconoc� a uno de ellos, era el loco que me persegu�a anteriormente con un cuchillo. Con mucho placer lo quit� de mi camino, llegu� al parqueo y tom� la primera motocicleta que encontr� con llaves. Luego de recorrer varios kil�metros y observar muchas ciudades destruidas, un zombie se lanz� a m� con tal fuerza que me tir� de la moto. Aturdido por el impacto logr� observar un r�o, y al otro lado una horda de zombies que ven�an hacia m�. As� que me quite los zapatos y comenc� a nadar con todas mis fuerzas.";
  text.appendChild(boldText);
  document.body.appendChild(text);
  var bottomNavBar = (0, _utils.createNavButtons)("pageTwo.html", "pageFour.html");
  document.body.appendChild(bottomNavBar);
};

exports.runThree = runThree;