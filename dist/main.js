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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  outline: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #cc9767;\\r\\n  color: #fff;\\r\\n  font-size: 0.89rem;\\r\\n}\\r\\n\\r\\n.to-do-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 95vw;\\r\\n  margin-top: 10rem;\\r\\n}\\r\\n\\r\\n.section-title {\\r\\n  font-size: 2rem;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.list-wrapper {\\r\\n  background-color: #f5f5dd;\\r\\n  color: #cc9767;\\r\\n  width: 50vw;\\r\\n  height: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-inline: 1rem;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.text-para {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.refresh {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.form-input {\\r\\n  display: flex;\\r\\n  margin-inline: 0.5rem;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#list-input {\\r\\n  width: 95%;\\r\\n  border: 0.5px solid #cc9767;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n#list-input:hover {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#add {\\r\\n  width: 10%;\\r\\n  justify-self: flex-end;\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 900;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.clean-btn {\\r\\n  padding: 1rem 2rem;\\r\\n  margin-top: 3rem;\\r\\n  justify-content: center;\\r\\n  color: #cc9767;\\r\\n}\\r\\n\\r\\n.clean-btn:hover {\\r\\n  background-color: #cc9767;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-inline: 1rem;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.input-class {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background-color: #f5f5dd;\\r\\n}\\r\\n\\r\\n#message-container {\\r\\n  position: absolute;\\r\\n  top: 2%;\\r\\n  right: 2%;\\r\\n  width: 250px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  animation: fade-in 3s ease;\\r\\n}\\r\\n\\r\\n.alert {\\r\\n  padding: 1.5rem 1rem;\\r\\n  margin: 0.5rem;\\r\\n  width: 250px;\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  background-color: red;\\r\\n}\\r\\n\\r\\n.success {\\r\\n  background-color: green;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  background-color: orange;\\r\\n}\\r\\n\\r\\n.fadeout {\\r\\n  animation: fade-out 1s ease 3s forwards;\\r\\n}\\r\\n\\r\\n@keyframes fade-in {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes fade-out {\\r\\n  0% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n.line_through {\\r\\n  text-decoration-line: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/function/complete.js":
/*!**********************************!*\
  !*** ./src/function/complete.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst completeStatus = (todoList, isChecked, taskId) => {\r\n  todoList.find((el) => parseInt(el.id, 10) === parseInt(taskId, 10)).complete = isChecked;\r\n  localStorage.setItem('todoList', JSON.stringify(todoList));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeStatus);\r\n\n\n//# sourceURL=webpack://webpack-project/./src/function/complete.js?");

/***/ }),

/***/ "./src/function/displayList.js":
/*!*************************************!*\
  !*** ./src/function/displayList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowList)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/function/localStorage.js\");\n\r\n\r\nconst container = document.getElementById('container');\r\n\r\nclass ShowList {\r\n  static displayList() {\r\n    const todoList = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\r\n    todoList.forEach((list) => {\r\n      ShowList.addLists(list);\r\n    });\r\n  }\r\n\r\n  static addLists(list) {\r\n    const checkedLists = list.complete ? 'checked' : '';\r\n    const div = document.createElement('div');\r\n    div.classList.add('todo-item');\r\n\r\n    div.innerHTML = `\r\n    <form action=\"\" class=\"form\">\r\n    <input type=\"checkbox\" class=\"check-btn\" id=\"${list.id}\" ${checkedLists}>\r\n    <input type=\"text\" data-id=\"${list.id}\" value=\"${\r\n  list.name\r\n}\" class=\"input-class ${checkedLists ? 'line_through' : ''}\">\r\n    <i class=\"uil uil-ellipsis-v delete\" data-id=\"${list.id}\" ></i>\r\n    </form>`;\r\n\r\n    const checkBtn = div.lastElementChild.querySelector('.check-btn');\r\n    const taskDescription = div.querySelector('.input-class');\r\n    const optionsIcon = div.querySelector('.delete');\r\n\r\n    checkBtn.addEventListener('click', (e) => {\r\n      const todoList = _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getList();\r\n      _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].completeLists(todoList, e.target.checked, e.target.id);\r\n      taskDescription.classList.toggle('line_through');\r\n    });\r\n\r\n    taskDescription.addEventListener('input', (ev) => {\r\n      const updatedDesc = ev.target.value;\r\n      _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editList(list.id, updatedDesc);\r\n    });\r\n\r\n    optionsIcon.addEventListener('click', () => {\r\n      div.remove();\r\n      _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeLists(list.id);\r\n      //  alertMessage('error', '<b>Success:</b> list removed successfully', 4000);\r\n    });\r\n\r\n    container.appendChild(div);\r\n  }\r\n\r\n  static deleteList(icon) {\r\n    if (icon.classList.contains('uil-trash')) {\r\n      icon.parentElement.parentElement.remove();\r\n    }\r\n  }\r\n\r\n  static clearLists() {\r\n    const items = document.querySelectorAll('.todo-item');\r\n    if (items.length > 0) {\r\n      items.forEach((item) => {\r\n        container.removeChild(item);\r\n      });\r\n    }\r\n    localStorage.removeItem('todoList');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-project/./src/function/displayList.js?");

/***/ }),

/***/ "./src/function/localStorage.js":
/*!**************************************!*\
  !*** ./src/function/localStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StoreLists)\n/* harmony export */ });\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete.js */ \"./src/function/complete.js\");\n\r\n\r\nclass StoreLists {\r\n  static getList() {\r\n    let todoList;\r\n    if (localStorage.getItem('todoList') === null) {\r\n      todoList = [];\r\n    } else {\r\n      todoList = JSON.parse(localStorage.getItem('todoList'));\r\n    }\r\n    return todoList;\r\n  }\r\n\r\n  static addList(list) {\r\n    const todoList = StoreLists.getList();\r\n    todoList.push(list);\r\n    localStorage.setItem('todoList', JSON.stringify(todoList));\r\n  }\r\n\r\n  static removeLists(id) {\r\n    let todoList = StoreLists.getList();\r\n    todoList = todoList.filter((list) => list.id !== id);\r\n    localStorage.setItem('todoList', JSON.stringify(todoList));\r\n  }\r\n\r\n  static editList(id, name) {\r\n    const todoList = StoreLists.getList();\r\n    const update = todoList.map((list) => {\r\n      if (list.id === id) {\r\n        return { ...list, name };\r\n      }\r\n      return list;\r\n    });\r\n    localStorage.setItem('todoList', JSON.stringify(update));\r\n  }\r\n\r\n  static completeLists(todoList, isChecked, taskId) {\r\n    (0,_complete_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todoList, isChecked, taskId);\r\n  }\r\n\r\n  static clearChecked() {\r\n    const todoList = StoreLists.getList();\r\n    this.todoList = todoList.filter((list) => !list.complete);\r\n    localStorage.setItem('todoList', JSON.stringify(this.todoList));\r\n  }\r\n}\n\n//# sourceURL=webpack://webpack-project/./src/function/localStorage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _function_displayList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/displayList.js */ \"./src/function/displayList.js\");\n/* harmony import */ var _function_localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/localStorage.js */ \"./src/function/localStorage.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', _function_displayList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayList);\r\n\r\nconst form = document.getElementById('form');\r\nconst listInput = document.getElementById('list-input');\r\nconst cleanBtn = document.getElementById('clean-btn');\r\n\r\nconst messageContainer = document.getElementById('message-container');\r\n\r\nfunction alertMessage(type, message, time) {\r\n  const paragraph = document.createElement('p');\r\n  paragraph.classList.add('alert');\r\n  paragraph.innerHTML = `${message}`;\r\n  if (type === 'error') {\r\n    paragraph.classList.add('error');\r\n  } else if (type === 'success') {\r\n    paragraph.classList.add('success');\r\n  } else if (type === 'remove') {\r\n    paragraph.classList.add('remove');\r\n  }\r\n  messageContainer.appendChild(paragraph);\r\n  paragraph.classList.add('fadeout');\r\n  setTimeout(() => {\r\n    messageContainer.removeChild(paragraph);\r\n  }, time);\r\n}\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const inputClass = document.getElementById('list-input');\r\n\r\n  const name = inputClass.value;\r\n\r\n  if (name === null || name === ' ') {\r\n    alertMessage('error', '<b>Error: </b> Please fill the empty filed!', 4000);\r\n  } else {\r\n    const todoList = _function_localStorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getList();\r\n    const name = listInput.value;\r\n    const complete = false;\r\n    const index = todoList.length + 1;\r\n    const id = Date.now().toString();\r\n    const todo = {\r\n      name, complete, id, index,\r\n    };\r\n    _function_displayList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addLists(todo);\r\n    _function_localStorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addList(todo);\r\n    listInput.value = ' ';\r\n    alertMessage('success', '<b>Success:</b> List saved successfully', 4000);\r\n  }\r\n});\r\n\r\ncleanBtn.addEventListener('click', () => {\r\n  _function_localStorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearChecked();\r\n  document.querySelectorAll('.todo-item').forEach((node) => node.remove());\r\n  _function_displayList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayList();\r\n  alertMessage('error', '<b>Error:</b> list removed successfully', 4000);\r\n});\r\n\n\n//# sourceURL=webpack://webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;