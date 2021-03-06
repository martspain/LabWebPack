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

/***/ "./src/JS/pageFive.js":
/*!****************************!*\
  !*** ./src/JS/pageFive.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runFive\": () => (/* binding */ runFive)\n/* harmony export */ });\n/* harmony import */ var _JS_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../JS/utils */ \"./src/JS/utils.js\");\n/* harmony import */ var _res_delorean_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../res/delorean.jpg */ \"./res/delorean.jpg\");\n// JavaScript pagina 5\n\n\n\n\nvar runFive = function runFive() {\n  var navBar = (0,_JS_utils__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();\n  document.body.appendChild(navBar);\n  var title = document.createElement(\"div\");\n  title.setAttribute(\"class\", \"title_background\");\n  var titleText = document.createElement(\"h1\");\n  titleText.setAttribute(\"class\", \"title\");\n  titleText.innerHTML = \"Viaje en el Tiempo\";\n  title.appendChild(titleText);\n  document.body.appendChild(title);\n  var profilePic = document.createElement(\"img\");\n  profilePic.setAttribute(\"src\", _res_delorean_jpg__WEBPACK_IMPORTED_MODULE_1__.default);\n  profilePic.setAttribute(\"alt\", \"Imagen de Delorean\");\n  profilePic.setAttribute(\"class\", \"delorean\");\n  document.body.appendChild(profilePic);\n  var text = document.createElement(\"p\");\n  var boldText = document.createElement(\"b\");\n  boldText.innerText = \"Entonces, volv� al Planeta Birig Bamba muy enojado. Pero pens� en una soluci�n: le ped� a los cient�ficos m�s listos que dise�aran una m�quina del tiempo y un ant�doto para evitar que los zombies destruyeran todo. Hicieron todo lo que les ped�, as� que luego de agradecerles me march� y volv� al d�a en que empez� todo.\";\n  text.appendChild(boldText);\n  document.body.appendChild(text);\n  var bottomNavBar = (0,_JS_utils__WEBPACK_IMPORTED_MODULE_0__.createNavButtons)(\"./pageFour.html\", \"./pageSix.html\");\n  document.body.appendChild(bottomNavBar);\n};\n\n//# sourceURL=webpack://code/./src/JS/pageFive.js?");

/***/ }),

/***/ "./src/JS/utils.js":
/*!*************************!*\
  !*** ./src/JS/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNavBar\": () => (/* binding */ createNavBar),\n/* harmony export */   \"createNavElement\": () => (/* binding */ createNavElement),\n/* harmony export */   \"createNavButtons\": () => (/* binding */ createNavButtons)\n/* harmony export */ });\n/* harmony import */ var _src_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index.html */ \"./src/index.html\");\n/* harmony import */ var _src_HTML_pageOne_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/HTML/pageOne.html */ \"./src/HTML/pageOne.html\");\n/* harmony import */ var _src_HTML_pageTwo_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/HTML/pageTwo.html */ \"./src/HTML/pageTwo.html\");\n/* harmony import */ var _src_HTML_pageThree_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/HTML/pageThree.html */ \"./src/HTML/pageThree.html\");\n/* harmony import */ var _src_HTML_pageFour_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/HTML/pageFour.html */ \"./src/HTML/pageFour.html\");\n/* harmony import */ var _src_HTML_pageFive_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/HTML/pageFive.html */ \"./src/HTML/pageFive.html\");\n/* harmony import */ var _src_HTML_pageSix_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/HTML/pageSix.html */ \"./src/HTML/pageSix.html\");\n// Utilities\n\n\n\n\n\n\n\nfunction createNavBar() {\n  var navBar = document.createElement(\"ul\");\n  navBar.setAttribute(\"class\", \"navbar\");\n  var navElementHome = createNavElement(\"./index.html\", \"Pagina Principal\");\n  navBar.appendChild(navElementHome);\n  var navElementOne = createNavElement(\"./pageOne.html\", \"1. Manchas\");\n  navBar.appendChild(navElementOne);\n  var navElementTwo = createNavElement(\"./pageTwo.html\", \"2. Elevador\");\n  navBar.appendChild(navElementTwo);\n  var navElementThree = createNavElement(\"./pageThree.html\", \"3. Zombies\");\n  navBar.appendChild(navElementThree);\n  var navElementFour = createNavElement(\"./pageFour.html\", \"4. Aliens\");\n  navBar.appendChild(navElementFour);\n  var navElementFive = createNavElement(\"./pageFive.html\", \"5. Tiempo\");\n  navBar.appendChild(navElementFive);\n  var navElementSix = createNavElement(\"./pageSix.html\", \"6. Fin\");\n  navBar.appendChild(navElementSix);\n  return navBar;\n}\nfunction createNavElement(path, name) {\n  var navElement = document.createElement(\"li\");\n  var link = document.createElement(\"a\");\n  link.setAttribute(\"href\", path);\n  link.innerHTML = name;\n  navElement.appendChild(link);\n  return navElement;\n}\nfunction createNavButtons(prevPath, nextPath) {\n  var navBar = document.createElement(\"ul\");\n  navBar.setAttribute(\"class\", \"navbar\");\n  var navElementOne = createNavElement(prevPath, \"Anterior\");\n  navBar.appendChild(navElementOne);\n  var navElementHome = createNavElement(\"./index.html\", \"Pagina Principal\");\n  navBar.appendChild(navElementHome);\n  var navElementTwo = createNavElement(nextPath, \"Siguiente\");\n  navBar.appendChild(navElementTwo);\n  return navBar;\n}\n\n//# sourceURL=webpack://code/./src/JS/utils.js?");

/***/ }),

/***/ "./src/fiveIndex.js":
/*!**************************!*\
  !*** ./src/fiveIndex.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_JS_pageFive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/JS/pageFive.js */ \"./src/JS/pageFive.js\");\n/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSS/style.css */ \"./src/CSS/style.css\");\n\n\n(0,_src_JS_pageFive_js__WEBPACK_IMPORTED_MODULE_0__.runFive)();\n\n//# sourceURL=webpack://code/./src/fiveIndex.js?");

/***/ }),

/***/ "./res/delorean.jpg":
/*!**************************!*\
  !*** ./res/delorean.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/4e3cfaee48f3dfb890b6c4aa9e1b7ad8.jpg\");\n\n//# sourceURL=webpack://code/./res/delorean.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/fiveIndex.js");
/******/ 	
/******/ })()
;