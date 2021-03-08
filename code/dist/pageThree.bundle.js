/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/pageThree.js":
/*!*****************************!*\
  !*** ./src/JS/pageThree.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runThree\": () => (/* binding */ runThree)\n/* harmony export */ });\n/* harmony import */ var _JS_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../JS/utils */ \"./src/JS/utils.js\");\n// JavaScript pagina 3\n\n\n\nvar runThree = function runThree() {\n  var navBar = (0,_JS_utils__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();\n  document.body.appendChild(navBar);\n  var title = document.createElement(\"div\");\n  title.setAttribute(\"class\", \"title_background\");\n  var titleText = document.createElement(\"h1\");\n  titleText.setAttribute(\"class\", \"title\");\n  titleText.innerHTML = \"Apocalipsis Zombie\";\n  title.appendChild(titleText);\n  document.body.appendChild(title);\n  /*\r\n  let audio = document.createElement(\"audio\");\r\n  audio.setAttribute(\"controls\", \"controls\");\r\n  audio.setAttribute(\"autoplay\", \"autoplay\");\r\n  let source = document.createElement(\"source\");\r\n  source.setAttribute(\"src\",\"./res/zombie.mp3\");\r\n  source.setAttribute(\"type\",\"audio/mpeg\");\r\n  audio.appendChild(source);\r\n  document.body.appendChild(audio);\r\n  */\n\n  var text = document.createElement(\"p\");\n  var boldText = document.createElement(\"b\");\n  boldText.innerText = \"No ten�a reloj, as� que no puedo decirlo exactamente, pero calculo que pas� cerca de dos horas en el elevador esperando a que alguien me rescatara. Pude haber esperado m�s pero comenc� a escuchar gritos fuera, adem�s de fuertes golpes. Parec�an explosiones. Me arm� de valor y sal� por la compuerta de arriba del elevador. Al entrar a un pasillo del hotel, vi que todo segu�a apagado, excepto las luces de emergencia rojas del hotel. Con esa tenue iluminaci�n pude ver a una persona al otro lado del pasillo. Le grit� por auxilio pero la persona no respond�a. Conforme me fui acercando me iba percatando de los extra�os sonidos que emit�a. O m�s bien, parec�an rugidos de una bestia enfurecida. De cualquier manera me acerqu� m�s sin meditar. Pens� que tal vez ten�a un resfriado o algo parecido. Pero no. Result� ser un zombie. Sal� huyendo al lado contrario del pasillo, vi una puerta abierta y aprovech� para encerrarme en ese cuarto. El zombie por poco consigue una cena. Comence a buscar cosas que me sirvieran, pero era dif�cil considerando la falta de luz. Luego de un rato de explorar el cuarto con mis manos y permitir que mis ojos se acostumbraran a la oscuridad me di cuenta que me encontraba en un Penthouse. Hab�a olvidado que me encontraba en el �ltimo piso del hotel. Busque en la cocina y encontr� un encendedor. Con el encendedor encontr� una linterna. Y con la linterna busque algo con lo que me pudiera defender. Tras mucha b�squeda, finalmente encontr� una katana en el armario del cuarto principal. Y adem�s de eso, algunos trajes antiguos Samurai. Al parecer me encontraba en la habitaci�n de un coleccionista de objetos Samurai. De cualquier manera, me arm� como pude y sin pensarlo mucho sal� del cuarto. Me encontr� al primer zombie que vi, pero con la katana no tuve miedo de enfrentarme a �l. Sin mucho esfuerzo, lo part� en dos pedazos. Con esta katana me fui abriendo paso por las gradas del hotel, hasta llegar a la planta baja. Aqu� me encontr� muchos zombies. Adem�s, reconoc� a uno de ellos, era el loco que me persegu�a anteriormente con un cuchillo. Con mucho placer lo quit� de mi camino, llegu� al parqueo y tom� la primera motocicleta que encontr� con llaves. Luego de recorrer varios kil�metros y observar muchas ciudades destruidas, un zombie se lanz� a m� con tal fuerza que me tir� de la moto. Aturdido por el impacto logr� observar un r�o, y al otro lado una horda de zombies que ven�an hacia m�. As� que me quite los zapatos y comenc� a nadar con todas mis fuerzas.\";\n  text.appendChild(boldText);\n  document.body.appendChild(text);\n  var bottomNavBar = (0,_JS_utils__WEBPACK_IMPORTED_MODULE_0__.createNavButtons)(\"./pageTwo.html\", \"./pageFour.html\");\n  document.body.appendChild(bottomNavBar);\n};\n\n//# sourceURL=webpack://code/./src/JS/pageThree.js?");

/***/ }),

/***/ "./src/JS/utils.js":
/*!*************************!*\
  !*** ./src/JS/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNavBar\": () => (/* binding */ createNavBar),\n/* harmony export */   \"createNavElement\": () => (/* binding */ createNavElement),\n/* harmony export */   \"createNavButtons\": () => (/* binding */ createNavButtons)\n/* harmony export */ });\n/* harmony import */ var _src_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index.html */ \"./src/index.html\");\n/* harmony import */ var _src_HTML_pageOne_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/HTML/pageOne.html */ \"./src/HTML/pageOne.html\");\n/* harmony import */ var _src_HTML_pageTwo_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/HTML/pageTwo.html */ \"./src/HTML/pageTwo.html\");\n/* harmony import */ var _src_HTML_pageThree_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/HTML/pageThree.html */ \"./src/HTML/pageThree.html\");\n/* harmony import */ var _src_HTML_pageFour_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/HTML/pageFour.html */ \"./src/HTML/pageFour.html\");\n/* harmony import */ var _src_HTML_pageFive_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/HTML/pageFive.html */ \"./src/HTML/pageFive.html\");\n/* harmony import */ var _src_HTML_pageSix_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/HTML/pageSix.html */ \"./src/HTML/pageSix.html\");\n// Utilities\n\n\n\n\n\n\n\nfunction createNavBar() {\n  var navBar = document.createElement(\"ul\");\n  navBar.setAttribute(\"class\", \"navbar\");\n  var navElementHome = createNavElement(\"./index.html\", \"Pagina Principal\");\n  navBar.appendChild(navElementHome);\n  var navElementOne = createNavElement(\"./pageOne.html\", \"1. Manchas\");\n  navBar.appendChild(navElementOne);\n  var navElementTwo = createNavElement(\"./pageTwo.html\", \"2. Elevador\");\n  navBar.appendChild(navElementTwo);\n  var navElementThree = createNavElement(\"./pageThree.html\", \"3. Zombies\");\n  navBar.appendChild(navElementThree);\n  var navElementFour = createNavElement(\"./pageFour.html\", \"4. Aliens\");\n  navBar.appendChild(navElementFour);\n  var navElementFive = createNavElement(\"./pageFive.html\", \"5. Tiempo\");\n  navBar.appendChild(navElementFive);\n  var navElementSix = createNavElement(\"./pageSix.html\", \"6. Fin\");\n  navBar.appendChild(navElementSix);\n  return navBar;\n}\nfunction createNavElement(path, name) {\n  var navElement = document.createElement(\"li\");\n  var link = document.createElement(\"a\");\n  link.setAttribute(\"href\", path);\n  link.innerHTML = name;\n  navElement.appendChild(link);\n  return navElement;\n}\nfunction createNavButtons(prevPath, nextPath) {\n  var navBar = document.createElement(\"ul\");\n  navBar.setAttribute(\"class\", \"navbar\");\n  var navElementOne = createNavElement(prevPath, \"Anterior\");\n  navBar.appendChild(navElementOne);\n  var navElementHome = createNavElement(\"./index.html\", \"Pagina Principal\");\n  navBar.appendChild(navElementHome);\n  var navElementTwo = createNavElement(nextPath, \"Siguiente\");\n  navBar.appendChild(navElementTwo);\n  return navBar;\n}\n\n//# sourceURL=webpack://code/./src/JS/utils.js?");

/***/ }),

/***/ "./src/threeIndex.js":
/*!***************************!*\
  !*** ./src/threeIndex.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_JS_pageThree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/JS/pageThree.js */ \"./src/JS/pageThree.js\");\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSS/style.css */ \"./src/CSS/style.css\");\n\n\n(0,_src_JS_pageThree_js__WEBPACK_IMPORTED_MODULE_0__.runThree)();\n\n//# sourceURL=webpack://code/./src/threeIndex.js?");

/***/ }),

/***/ "./src/HTML/pageFive.html":
/*!********************************!*\
  !*** ./src/HTML/pageFive.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Pagina 5</title>\\r\\n</head>\\r\\n<body>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code/./src/HTML/pageFive.html?");

/***/ }),

/***/ "./src/HTML/pageFour.html":
/*!********************************!*\
  !*** ./src/HTML/pageFour.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Pagina 4</title>\\r\\n</head>\\r\\n<body>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code/./src/HTML/pageFour.html?");

/***/ }),

/***/ "./src/HTML/pageOne.html":
/*!*******************************!*\
  !*** ./src/HTML/pageOne.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Pagina 1</title>\\r\\n</head>\\r\\n<body>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code/./src/HTML/pageOne.html?");

/***/ }),

/***/ "./src/HTML/pageSix.html":
/*!*******************************!*\
  !*** ./src/HTML/pageSix.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Pagina 6</title>\\r\\n</head>\\r\\n<body>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code/./src/HTML/pageSix.html?");

/***/ }),

/***/ "./src/HTML/pageThree.html":
/*!*********************************!*\
  !*** ./src/HTML/pageThree.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Pagina 3</title>\\r\\n</head>\\r\\n<body>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code/./src/HTML/pageThree.html?");

/***/ }),

/***/ "./src/HTML/pageTwo.html":
/*!*******************************!*\
  !*** ./src/HTML/pageTwo.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Pagina Dos</title>\\r\\n</head>\\r\\n<body>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code/./src/HTML/pageTwo.html?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\" />\\r\\n    <title>Historia WebPack</title>\\r\\n</head>\\r\\n<body>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://code/./src/index.html?");

/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://code/./src/CSS/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/threeIndex.js");
/******/ 	
/******/ })()
;