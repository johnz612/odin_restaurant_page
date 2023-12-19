/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Hero.jpg */ "./assets/Hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merienda:wght@800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  width: 100vw;
  background-color: rgb(46, 45, 45);
  font-family: "Lato";
  overflow-x: hidden;
}

#content {
  display: flex;
  justify-content: center;
}

.home {
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.26),
      rgba(67, 67, 67, 0.253)
    ),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  /* height: 100%; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5% 95%;
  color: white;
}

.nav {
  grid-column: 1 / span 2;
  padding-top: 1.8rem;
  width: 100%;
  height: 8em;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.514);
  align-items: center;
  padding: 3rem 20rem;
}

.logo {
  font-size: 4rem;
  letter-spacing: 0.4rem;
  font-weight: 900;
  font-family: "Merienda";
  display: flex;
  align-items: center;
}

.logo1 {
  color: #e69500;
  /* fin */
}
.navigation {
  gap: 12rem;
  height: 100%;
  list-style: none;
  display: flex;
  color: white;
  font-size: 1.6rem;
  justify-content: end;
  align-items: center;
  font-weight: 900;
}

.nav-list:hover {
  cursor: pointer;
  color: #e69500;
}

.hero {
  margin-left: 25rem;
  margin-top: 25rem;
  padding-right: 25rem;
  grid-row: 2;

  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.hero-main-text {
  font-size: 9rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  letter-spacing: 0.2rem;
}

.main-titile-1 {
  color: #e69500;
}

.description {
  font-size: 3rem;
  font-weight: 600;
  line-height: 4.5rem;
}

.button-container {
  margin-top: 8rem;
  display: flex;
  gap: 2rem;
}

.btn {
  font-size: 3rem;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  border: none;
  font-weight: 700;
  color: inherit;
}

.menu-btn {
  background-color: #e69500;
  color: black;
}

.contact-btn {
  background-color: rgba(0, 0, 0, 0);
}

.menu-btn:hover {
  background-color: #cf8600;
  cursor: pointer;
}
.contact-btn:hover {
  color: #e69500;
  cursor: pointer;
}

/* Menu */

.menu {
  width: 100vw;
}

.menu-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  position: sticky;
  top: 0;
  background-color: rgb(0, 0, 0);
  z-index: 1;
}

.menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100%; */
  gap: 10rem;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  height: 50%;
  width: 120rem;
}

.menu-container:hover {
  cursor: pointer;
}

.left-container {
  width: 100%;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all, 0.3s;
}

.right-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 100%;
  transition: all, 0.3s;
}

.left-container:hover,
.right-container:hover {
  transform: scale(1.01);
}

.food img {
  height: 25rem;
  width: 40rem;
}

.food-name {
  color: #e69500;
  margin-bottom: 3rem;
}

.description-menu {
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.514);
  height: 90%;
  font-size: 2rem;
  color: white;
  width: 100%;
}

.price {
  font-size: 3rem;
  font-weight: 700;
  margin-top: 3rem;
  color: #e69500;
}

.footer {
  height: 6rem;
  background-color: rgb(0, 0, 0);
  margin-top: 10rem;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  width: 100%;
}

/* Contact */

.contact {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.contact-container {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  font-size: 2.5rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Merienda:wght@800&display=swap\");\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  width: 100vw;\n  background-color: rgb(46, 45, 45);\n  font-family: \"Lato\";\n  overflow-x: hidden;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n}\n\n.home {\n  height: 100vh;\n  background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.26),\n      rgba(67, 67, 67, 0.253)\n    ),\n    url(\"../assets/Hero.jpg\");\n  background-size: cover;\n  /* height: 100%; */\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 5% 95%;\n  color: white;\n}\n\n.nav {\n  grid-column: 1 / span 2;\n  padding-top: 1.8rem;\n  width: 100%;\n  height: 8em;\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.514);\n  align-items: center;\n  padding: 3rem 20rem;\n}\n\n.logo {\n  font-size: 4rem;\n  letter-spacing: 0.4rem;\n  font-weight: 900;\n  font-family: \"Merienda\";\n  display: flex;\n  align-items: center;\n}\n\n.logo1 {\n  color: #e69500;\n  /* fin */\n}\n.navigation {\n  gap: 12rem;\n  height: 100%;\n  list-style: none;\n  display: flex;\n  color: white;\n  font-size: 1.6rem;\n  justify-content: end;\n  align-items: center;\n  font-weight: 900;\n}\n\n.nav-list:hover {\n  cursor: pointer;\n  color: #e69500;\n}\n\n.hero {\n  margin-left: 25rem;\n  margin-top: 25rem;\n  padding-right: 25rem;\n  grid-row: 2;\n\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n.hero-main-text {\n  font-size: 9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  letter-spacing: 0.2rem;\n}\n\n.main-titile-1 {\n  color: #e69500;\n}\n\n.description {\n  font-size: 3rem;\n  font-weight: 600;\n  line-height: 4.5rem;\n}\n\n.button-container {\n  margin-top: 8rem;\n  display: flex;\n  gap: 2rem;\n}\n\n.btn {\n  font-size: 3rem;\n  padding: 1rem 2rem;\n  border-radius: 0.8rem;\n  border: none;\n  font-weight: 700;\n  color: inherit;\n}\n\n.menu-btn {\n  background-color: #e69500;\n  color: black;\n}\n\n.contact-btn {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.menu-btn:hover {\n  background-color: #cf8600;\n  cursor: pointer;\n}\n.contact-btn:hover {\n  color: #e69500;\n  cursor: pointer;\n}\n\n/* Menu */\n\n.menu {\n  width: 100vw;\n}\n\n.menu-nav {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10rem;\n  position: sticky;\n  top: 0;\n  background-color: rgb(0, 0, 0);\n  z-index: 1;\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* height: 100%; */\n  gap: 10rem;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10rem;\n  height: 50%;\n  width: 120rem;\n}\n\n.menu-container:hover {\n  cursor: pointer;\n}\n\n.left-container {\n  width: 100%;\n  height: 25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all, 0.3s;\n}\n\n.right-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 25rem;\n  width: 100%;\n  transition: all, 0.3s;\n}\n\n.left-container:hover,\n.right-container:hover {\n  transform: scale(1.01);\n}\n\n.food img {\n  height: 25rem;\n  width: 40rem;\n}\n\n.food-name {\n  color: #e69500;\n  margin-bottom: 3rem;\n}\n\n.description-menu {\n  padding: 3rem;\n  background-color: rgba(0, 0, 0, 0.514);\n  height: 90%;\n  font-size: 2rem;\n  color: white;\n  width: 100%;\n}\n\n.price {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-top: 3rem;\n  color: #e69500;\n}\n\n.footer {\n  height: 6rem;\n  background-color: rgb(0, 0, 0);\n  margin-top: 10rem;\n  color: white;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 2rem;\n  width: 100%;\n}\n\n/* Contact */\n\n.contact {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.contact-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  text-align: center;\n  font-size: 2.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const Contact = () => {
  const contactElement = document.createElement("div");
  const contactContainer = document.createElement("div");
  const labelPhone = document.createElement("h2");
  const phone = document.createElement("p");
  const labelAddress = document.createElement("h2");
  const address = document.createElement("p");
  const nav = document.createElement("div");
  const navListContainer = document.createElement("ul");
  const navListHome = document.createElement("li");
  const navListMenu = document.createElement("li");
  const navListContact = document.createElement("li");

  const footer = document.createElement("div");

  const resourcesCopyright = document.createElement("p");

  contactElement.classList.add("contact");
  contactContainer.classList.add("contact-container");
  labelPhone.classList.add("label");
  labelAddress.classList.add("label");

  footer.classList.add("footer");

  navListContainer.classList.add("navigation");
  navListHome.classList.add("nav-list");
  navListMenu.classList.add("nav-list");
  navListContact.classList.add("nav-list");
  nav.classList.add("nav", "menu-nav");

  navListHome.textContent = "Home";
  navListMenu.textContent = "Menu";
  navListContact.textContent = "Contact";
  resourcesCopyright.textContent = "Copyright johnz612";
  labelPhone.textContent = "Phone";
  phone.textContent = "+63 907519112";
  labelAddress.textContent = "Address";
  address.textContent = "Lorem ipsum dolor sit amet, consectetur";

  footer.appendChild(resourcesCopyright);

  navListContainer.appendChild(navListHome);
  navListContainer.appendChild(navListMenu);
  navListContainer.appendChild(navListContact);

  contactContainer.appendChild(labelPhone);
  contactContainer.appendChild(phone);
  contactContainer.appendChild(labelAddress);
  contactContainer.appendChild(address);

  const contactScreen = function () {
    content.innerHTML = "";

    nav.appendChild(navListContainer);

    contactElement.appendChild(nav);
    contactElement.appendChild(contactContainer);
    contactElement.appendChild(footer);
    return contactElement;
  };

  return { contactScreen, navListHome, navListMenu };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact());


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_Logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Logo.png */ "./assets/Logo.png");

// import menu from "./menu.js";


const Home = () => {
  const homeElement = document.createElement("div");

  // Navigation
  const nav = document.createElement("div");
  const logo = document.createElement("div");
  const logoText1 = document.createElement("span");
  const logoText2 = document.createElement("p");
  const navListContainer = document.createElement("ul");
  const navListHome = document.createElement("li");
  const navListMenu = document.createElement("li");
  const navListContact = document.createElement("li");

  logo.classList.add("logo");
  navListContainer.classList.add("navigation");
  navListHome.classList.add("nav-list");
  navListMenu.classList.add("nav-list");
  navListContact.classList.add("nav-list");
  nav.classList.add("nav");
  homeElement.classList.add("home");
  logoText1.classList.add("logo1");

  logoText1.textContent = "2";
  logoText2.textContent = "MuchMeat";
  navListHome.textContent = "Home";
  navListMenu.textContent = "Menu";
  navListContact.textContent = "Contact";

  logo.appendChild(logoText1);
  logo.appendChild(logoText2);

  navListContainer.appendChild(navListHome);
  navListContainer.appendChild(navListMenu);
  navListContainer.appendChild(navListContact);

  nav.appendChild(logo);
  nav.appendChild(navListContainer);

  // Hero
  const hero = document.createElement("div");
  const title = document.createElement("h1");
  const mainTitle1 = document.createElement("span");
  const mainTitle2 = document.createElement("span");
  const heroPart2Container = document.createElement("div");
  const description = document.createElement("p");
  const buttonContainer = document.createElement("div");
  const buttonMenu = document.createElement("button");
  const buttonContact = document.createElement("button");

  mainTitle1.textContent = "Best Meat?";
  mainTitle2.textContent = "We Got It!";
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id egestas arcu";
  buttonMenu.textContent = "Grab a Meat";
  buttonContact.textContent = "Contact";

  hero.classList.add("hero");
  mainTitle1.classList.add("main-titile-1");
  buttonContainer.classList.add("button-container");
  buttonContact.classList.add("btn", "contact-btn");
  buttonMenu.classList.add("btn", "menu-btn");

  title.appendChild(mainTitle1);
  title.appendChild(mainTitle2);
  title.classList.add("hero-main-text");
  description.classList.add("description");

  const homeScreen = function () {
    buttonContainer.appendChild(buttonMenu);
    buttonContainer.appendChild(buttonContact);

    heroPart2Container.appendChild(description);
    heroPart2Container.appendChild(buttonContainer);

    hero.appendChild(title);
    hero.appendChild(heroPart2Container);

    homeElement.appendChild(nav);
    homeElement.appendChild(hero);
    return homeElement;
  };

  return {
    homeScreen,
    navListMenu,
    navListHome,
    buttonMenu,
    navListContact,
    buttonContact,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home());


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_balsamic_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/balsamic.png */ "./src/images/balsamic.png");
/* harmony import */ var _images_beef_willington_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/beef-willington.png */ "./src/images/beef-willington.png");
/* harmony import */ var _images_Chateaubriand_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Chateaubriand.jpg */ "./src/images/Chateaubriand.jpg");
/* harmony import */ var _images_Fraldinha_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Fraldinha.jpg */ "./src/images/Fraldinha.jpg");
/* harmony import */ var _images_Bife_de_Chorizo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Bife de Chorizo.jpg */ "./src/images/Bife de Chorizo.jpg");
/* harmony import */ var _images_Pa_dakia_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Païdakia.jpg */ "./src/images/Païdakia.jpg");









const menus = [
  [
    {
      name: "Beef Willington",
      description:
        "Beef tenderloin wrapped in layers of pâté, duxelles (a finely chopped mushroom mixture), parma ham, and puff pastry, then baked.",
      price: "$50.00",
      image: _images_beef_willington_png__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
      name: "Balsamic Marinated Skirt Steaks w/ Charred Peppers",
      description:
        "Herbs and smashed garlic quickly infuse charred sweet peppers, capturing their heat straight from the grill.",
      price: "$35.30",
      image: _images_balsamic_png__WEBPACK_IMPORTED_MODULE_0__,
    },
  ],
  [
    {
      name: "Châteaubriand",
      description: "Grilled thick cut of beef tenderloin",
      price: "$32.60",
      image: _images_Chateaubriand_jpg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
      name: "Fraldinha",
      description:
        "a meat cut that's traditionally used for churrasco and is made up of part flank, part short loin, and part bottom sirloin.",
      price: "$25.00",
      image: _images_Fraldinha_jpg__WEBPACK_IMPORTED_MODULE_3__,
    },
  ],
  [
    {
      name: "Bife de Chorizo",
      description:
        "Bife de chorizo a strip steak, sirloin, and top loin traditionally used for asado. It is a thick, juicy steak with a sizable layer of fat on top.",
      price: "$46.60",
      image: _images_Bife_de_Chorizo_jpg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
      name: "Païdakia",
      description:
        "Lamb chops marinated in various combinations of olive oil, lemon juice, and a variety of fresh herbs before they are grilled on traditional charcoal barbecues.",
      price: "$28.00",
      image: _images_Pa_dakia_jpg__WEBPACK_IMPORTED_MODULE_5__,
    },
  ],
];

const Menu = () => {
  const menuElement = document.createElement("div");
  const nav = document.createElement("div");
  const navListContainer = document.createElement("ul");
  const navListHome = document.createElement("li");
  const navListMenu = document.createElement("li");
  const navListContact = document.createElement("li");

  const menuContent = document.createElement("div");

  const footer = document.createElement("div");
  const resourcesFooter = document.createElement("p");
  const resourcesCopyright = document.createElement("p");

  menuElement.classList.add("menu");
  menuContent.classList.add("menu-content");
  footer.classList.add("footer");

  navListContainer.classList.add("navigation");
  navListHome.classList.add("nav-list");
  navListMenu.classList.add("nav-list");
  navListContact.classList.add("nav-list");
  nav.classList.add("nav", "menu-nav");

  navListHome.textContent = "Home";
  navListMenu.textContent = "Menu";
  navListContact.textContent = "Contact";
  resourcesFooter.textContent = "Images from tasteatlas.com";
  resourcesCopyright.textContent = "Copyright johnz612";
  footer.appendChild(resourcesFooter);
  footer.appendChild(resourcesCopyright);

  navListContainer.appendChild(navListHome);
  navListContainer.appendChild(navListMenu);
  navListContainer.appendChild(navListContact);

  menus.forEach((menu) => {
    const menuContainer = document.createElement("div");
    const leftContainer = document.createElement("div");
    const rightContainer = document.createElement("div");
    const rightContainerFood = document.createElement("div");
    const leftContainerDescription = document.createElement("div");
    const rightContainerDescription = document.createElement("div");
    const leftContainerFood = document.createElement("div");

    const imageBalsamicLeft = document.createElement("img");
    const foodNameRight = document.createElement("h2");
    const foodDescriptionRight = document.createElement("p");
    const foodPriceRight = document.createElement("p");

    const imageBalsamicRight = document.createElement("img");
    const foodNameLeft = document.createElement("h2");
    const foodDescriptionLeft = document.createElement("p");
    const foodPriceLeft = document.createElement("p");

    leftContainerFood.classList.add("food");
    rightContainerDescription.classList.add("description-menu");
    rightContainerFood.classList.add("food");
    leftContainerDescription.classList.add("description-menu");
    menuContainer.classList.add("menu-container");
    menuContent.classList.add("menu-content");
    rightContainer.classList.add("right-container");
    leftContainer.classList.add("left-container");
    foodNameLeft.classList.add("food-name");
    foodNameRight.classList.add("food-name");
    foodPriceLeft.classList.add("price");
    foodPriceRight.classList.add("price");

    // Left Side Picture
    imageBalsamicLeft.src = menu[0].image;
    foodNameRight.textContent = menu[0].name;
    foodDescriptionRight.textContent = menu[0].description;
    foodPriceRight.textContent = menu[0].price;

    // Right side Picture
    imageBalsamicRight.src = menu[1].image;
    foodNameLeft.textContent = menu[1].name;
    foodDescriptionLeft.textContent = menu[1].description;
    foodPriceLeft.textContent = menu[1].price;

    leftContainerFood.appendChild(imageBalsamicLeft);
    rightContainerDescription.appendChild(foodNameRight);
    rightContainerDescription.appendChild(foodDescriptionRight);
    rightContainerDescription.appendChild(foodPriceRight);

    rightContainerFood.appendChild(imageBalsamicRight);
    leftContainerDescription.appendChild(foodNameLeft);
    leftContainerDescription.appendChild(foodDescriptionLeft);
    leftContainerDescription.appendChild(foodPriceLeft);

    leftContainer.appendChild(leftContainerFood);
    leftContainer.appendChild(rightContainerDescription);

    rightContainer.appendChild(leftContainerDescription);
    rightContainer.appendChild(rightContainerFood);

    menuContainer.appendChild(leftContainer);
    menuContainer.appendChild(rightContainer);
    menuContent.appendChild(menuContainer);
  });

  const menuScreen = function () {
    content.innerHTML = "";

    nav.appendChild(navListContainer);

    menuElement.appendChild(nav);
    menuElement.appendChild(menuContent);
    menuElement.appendChild(footer);
    return menuElement;
  };

  return { menuScreen, navListHome, navListContact };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu());


/***/ }),

/***/ "./assets/Hero.jpg":
/*!*************************!*\
  !*** ./assets/Hero.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c399bcc2f940a6846de5.jpg";

/***/ }),

/***/ "./assets/Logo.png":
/*!*************************!*\
  !*** ./assets/Logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d7f52450ae5957aa644.png";

/***/ }),

/***/ "./src/images/Bife de Chorizo.jpg":
/*!****************************************!*\
  !*** ./src/images/Bife de Chorizo.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "086778de0c71198d2740.jpg";

/***/ }),

/***/ "./src/images/Chateaubriand.jpg":
/*!**************************************!*\
  !*** ./src/images/Chateaubriand.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85df0fea54ca1da7d237.jpg";

/***/ }),

/***/ "./src/images/Fraldinha.jpg":
/*!**********************************!*\
  !*** ./src/images/Fraldinha.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "551ed15c94ae9131adbe.jpg";

/***/ }),

/***/ "./src/images/Païdakia.jpg":
/*!*********************************!*\
  !*** ./src/images/Païdakia.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50e441d19cde9bef0a44.jpg";

/***/ }),

/***/ "./src/images/balsamic.png":
/*!*********************************!*\
  !*** ./src/images/balsamic.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "902b4708eedfa79181ca.png";

/***/ }),

/***/ "./src/images/beef-willington.png":
/*!****************************************!*\
  !*** ./src/images/beef-willington.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a29cc20cefd0f93848e7.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





let currentScreen = _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].homeScreen();
const contentContainer = document.getElementById("content");

////////////////// Home Page

// Menuy Button
_home_js__WEBPACK_IMPORTED_MODULE_1__["default"].navListMenu.addEventListener("click", function () {
  currentScreen = _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].menuScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

_home_js__WEBPACK_IMPORTED_MODULE_1__["default"].buttonMenu.addEventListener("click", function () {
  currentScreen = _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].menuScreen();
  contentContainer.appendChild(currentScreen);
});

// Contact BUtton
_home_js__WEBPACK_IMPORTED_MODULE_1__["default"].navListContact.addEventListener("click", function () {
  currentScreen = _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].contactScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

_home_js__WEBPACK_IMPORTED_MODULE_1__["default"].buttonContact.addEventListener("click", function () {
  currentScreen = _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].contactScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

////////////////// Menu Page

_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].navListHome.addEventListener("click", function () {
  currentScreen = _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].homeScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].navListContact.addEventListener("click", function () {
  currentScreen = _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].contactScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

////////////////// Contact Page

_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].navListHome.addEventListener("click", function () {
  currentScreen = _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].homeScreen();
  contentContainer.innerHTML = "";
  contentContainer.appendChild(currentScreen);
});

_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"].navListMenu.addEventListener("click", function () {
  currentScreen = _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].menuScreen();
  contentContainer.appendChild(currentScreen);
});

contentContainer.appendChild(currentScreen);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDRHQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZHQUE2RyxJQUFJLElBQUksa0JBQWtCO0FBQ3ZJLCtIQUErSDtBQUMvSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFNBQVMsT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFWjtBQUNiO0FBQ3VDOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHVDs7QUFFeUM7QUFDUztBQUNUO0FBQ0Y7QUFDVTtBQUNaOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ3RCO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdEQUFJO0FBQ0osa0JBQWtCLG1EQUFPO0FBQ3pCO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLG1EQUFPO0FBQ1Asa0JBQWtCLGdEQUFJO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFPO0FBQ1Asa0JBQWtCLGdEQUFJO0FBQ3RCO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5fcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvSGVyby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVyaWVuZGE6d2dodEA4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNDUsIDQ1KTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMjYpLFxuICAgICAgcmdiYSg2NywgNjcsIDY3LCAwLjI1MylcbiAgICApLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUlIDk1JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG4gIHBhZGRpbmctdG9wOiAxLjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDhlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTE0KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbSAyMHJlbTtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcmllbmRhXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvMSB7XG4gIGNvbG9yOiAjZTY5NTAwO1xuICAvKiBmaW4gKi9cbn1cbi5uYXZpZ2F0aW9uIHtcbiAgZ2FwOiAxMnJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLm5hdi1saXN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2U2OTUwMDtcbn1cblxuLmhlcm8ge1xuICBtYXJnaW4tbGVmdDogMjVyZW07XG4gIG1hcmdpbi10b3A6IDI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyNXJlbTtcbiAgZ3JpZC1yb3c6IDI7XG5cbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xufVxuLmhlcm8tbWFpbi10ZXh0IHtcbiAgZm9udC1zaXplOiA5cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG59XG5cbi5tYWluLXRpdGlsZS0xIHtcbiAgY29sb3I6ICNlNjk1MDA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubWVudS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY5NTAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWN0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5tZW51LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjg2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWN0LWJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjZTY5NTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE1lbnUgKi9cblxuLm1lbnUge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5tZW51LW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIGdhcDogMTByZW07XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTByZW07XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTIwcmVtO1xufVxuXG4ubWVudS1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZWZ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XG59XG5cbi5sZWZ0LWNvbnRhaW5lcjpob3Zlcixcbi5yaWdodC1jb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4uZm9vZCBpbWcge1xuICBoZWlnaHQ6IDI1cmVtO1xuICB3aWR0aDogNDByZW07XG59XG5cbi5mb29kLW5hbWUge1xuICBjb2xvcjogI2U2OTUwMDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLmRlc2NyaXB0aW9uLW1lbnUge1xuICBwYWRkaW5nOiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTE0KTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBjb2xvcjogI2U2OTUwMDtcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogQ29udGFjdCAqL1xuXG4uY29udGFjdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUtBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtF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WUFBWTs7QUFFWjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJpZW5kYTp3Z2h0QDgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA0NSwgNDUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIHJpZ2h0LFxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNiksXFxuICAgICAgcmdiYSg2NywgNjcsIDY3LCAwLjI1MylcXG4gICAgKSxcXG4gICAgdXJsKFxcXCIuLi9hc3NldHMvSGVyby5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUlIDk1JTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gIHBhZGRpbmctdG9wOiAxLjhyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOGVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MTQpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNyZW0gMjByZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJpZW5kYVxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28xIHtcXG4gIGNvbG9yOiAjZTY5NTAwO1xcbiAgLyogZmluICovXFxufVxcbi5uYXZpZ2F0aW9uIHtcXG4gIGdhcDogMTJyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLm5hdi1saXN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZTY5NTAwO1xcbn1cXG5cXG4uaGVybyB7XFxuICBtYXJnaW4tbGVmdDogMjVyZW07XFxuICBtYXJnaW4tdG9wOiAyNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cmVtO1xcbiAgZ3JpZC1yb3c6IDI7XFxuXFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVyZW07XFxufVxcbi5oZXJvLW1haW4tdGV4dCB7XFxuICBmb250LXNpemU6IDlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxufVxcblxcbi5tYWluLXRpdGlsZS0xIHtcXG4gIGNvbG9yOiAjZTY5NTAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiA0LjVyZW07XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLm1lbnUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjk1MDA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250YWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ubWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmODYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRhY3QtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjZTY5NTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuXFxuLm1lbnUge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWVudS1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICBnYXA6IDEwcmVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHJlbTtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEyMHJlbTtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxlZnQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XFxufVxcblxcbi5yaWdodC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCwgMC4zcztcXG59XFxuXFxuLmxlZnQtY29udGFpbmVyOmhvdmVyLFxcbi5yaWdodC1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLmZvb2QgaW1nIHtcXG4gIGhlaWdodDogMjVyZW07XFxuICB3aWR0aDogNDByZW07XFxufVxcblxcbi5mb29kLW5hbWUge1xcbiAgY29sb3I6ICNlNjk1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbWVudSB7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUxNCk7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBjb2xvcjogI2U2OTUwMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcblxcbi5jb250YWN0IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBsYWJlbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgbmF2TGlzdEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG5hdkxpc3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBuYXZMaXN0Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHJlc291cmNlc0NvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnRhY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcbiAgbGFiZWxQaG9uZS5jbGFzc0xpc3QuYWRkKFwibGFiZWxcIik7XG4gIGxhYmVsQWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwibGFiZWxcIik7XG5cbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgbmF2TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcbiAgbmF2TGlzdEhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0XCIpO1xuICBuYXZMaXN0TWVudS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpc3RcIik7XG4gIG5hdkxpc3RDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdFwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIiwgXCJtZW51LW5hdlwiKTtcblxuICBuYXZMaXN0SG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBuYXZMaXN0TWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBuYXZMaXN0Q29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICByZXNvdXJjZXNDb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCBqb2huejYxMlwiO1xuICBsYWJlbFBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZVwiO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiKzYzIDkwNzUxOTExMlwiO1xuICBsYWJlbEFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3NcIjtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKHJlc291cmNlc0NvcHlyaWdodCk7XG5cbiAgbmF2TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaXN0SG9tZSk7XG4gIG5hdkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlzdE1lbnUpO1xuICBuYXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpc3RDb250YWN0KTtcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsUGhvbmUpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbEFkZHJlc3MpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGNvbnN0IGNvbnRhY3RTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkxpc3RDb250YWluZXIpO1xuXG4gICAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIHJldHVybiBjb250YWN0RWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4geyBjb250YWN0U2NyZWVuLCBuYXZMaXN0SG9tZSwgbmF2TGlzdE1lbnUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGltYWdlIGZyb20gXCIuLi9hc3NldHMvTG9nby5wbmdcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIE5hdmlnYXRpb25cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvZ29UZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBsb2dvVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbmF2TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgbmF2TGlzdEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG5hdkxpc3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBuYXZMaXN0Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICBuYXZMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xuICBuYXZMaXN0SG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpc3RcIik7XG4gIG5hdkxpc3RNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdFwiKTtcbiAgbmF2TGlzdENvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgaG9tZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIGxvZ29UZXh0MS5jbGFzc0xpc3QuYWRkKFwibG9nbzFcIik7XG5cbiAgbG9nb1RleHQxLnRleHRDb250ZW50ID0gXCIyXCI7XG4gIGxvZ29UZXh0Mi50ZXh0Q29udGVudCA9IFwiTXVjaE1lYXRcIjtcbiAgbmF2TGlzdEhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbmF2TGlzdE1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbmF2TGlzdENvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBsb2dvLmFwcGVuZENoaWxkKGxvZ29UZXh0MSk7XG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQyKTtcblxuICBuYXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpc3RIb21lKTtcbiAgbmF2TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaXN0TWVudSk7XG4gIG5hdkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlzdENvbnRhY3QpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbmF2LmFwcGVuZENoaWxkKG5hdkxpc3RDb250YWluZXIpO1xuXG4gIC8vIEhlcm9cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBtYWluVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IG1haW5UaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgaGVyb1BhcnQyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIG1haW5UaXRsZTEudGV4dENvbnRlbnQgPSBcIkJlc3QgTWVhdD9cIjtcbiAgbWFpblRpdGxlMi50ZXh0Q29udGVudCA9IFwiV2UgR290IEl0IVwiO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gaWQgZWdlc3RhcyBhcmN1XCI7XG4gIGJ1dHRvbk1lbnUudGV4dENvbnRlbnQgPSBcIkdyYWIgYSBNZWF0XCI7XG4gIGJ1dHRvbkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBtYWluVGl0bGUxLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRpdGlsZS0xXCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gIGJ1dHRvbkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImNvbnRhY3QtYnRuXCIpO1xuICBidXR0b25NZW51LmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJtZW51LWJ0blwiKTtcblxuICB0aXRsZS5hcHBlbmRDaGlsZChtYWluVGl0bGUxKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWFpblRpdGxlMik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZXJvLW1haW4tdGV4dFwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGNvbnN0IGhvbWVTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWN0KTtcblxuICAgIGhlcm9QYXJ0MkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgaGVyb1BhcnQyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBoZXJvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9QYXJ0MkNvbnRhaW5lcik7XG5cbiAgICBob21lRWxlbWVudC5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGhvbWVFbGVtZW50LmFwcGVuZENoaWxkKGhlcm8pO1xuICAgIHJldHVybiBob21lRWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhvbWVTY3JlZW4sXG4gICAgbmF2TGlzdE1lbnUsXG4gICAgbmF2TGlzdEhvbWUsXG4gICAgYnV0dG9uTWVudSxcbiAgICBuYXZMaXN0Q29udGFjdCxcbiAgICBidXR0b25Db250YWN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBpbWFnZUZvb2RCYWxzYW1pYyBmcm9tIFwiLi9pbWFnZXMvYmFsc2FtaWMucG5nXCI7XG5pbXBvcnQgaW1hZ2VCZWVmV2lsbGluZ3RvbiBmcm9tIFwiLi9pbWFnZXMvYmVlZi13aWxsaW5ndG9uLnBuZ1wiO1xuaW1wb3J0IGltYWdlQ2hhdGVhdSBmcm9tIFwiLi9pbWFnZXMvQ2hhdGVhdWJyaWFuZC5qcGdcIjtcbmltcG9ydCBpbWFnZUZyYWxkaW5oYSBmcm9tIFwiLi9pbWFnZXMvRnJhbGRpbmhhLmpwZ1wiO1xuaW1wb3J0IGltYWdlQmlmZWRlQ2hycml6byBmcm9tIFwiLi9pbWFnZXMvQmlmZSBkZSBDaG9yaXpvLmpwZ1wiO1xuaW1wb3J0IGltYWdlUGHDr2Rha2lhIGZyb20gXCIuL2ltYWdlcy9QYcOvZGFraWEuanBnXCI7XG5cbmNvbnN0IG1lbnVzID0gW1xuICBbXG4gICAge1xuICAgICAgbmFtZTogXCJCZWVmIFdpbGxpbmd0b25cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkJlZWYgdGVuZGVybG9pbiB3cmFwcGVkIGluIGxheWVycyBvZiBww6J0w6ksIGR1eGVsbGVzIChhIGZpbmVseSBjaG9wcGVkIG11c2hyb29tIG1peHR1cmUpLCBwYXJtYSBoYW0sIGFuZCBwdWZmIHBhc3RyeSwgdGhlbiBiYWtlZC5cIixcbiAgICAgIHByaWNlOiBcIiQ1MC4wMFwiLFxuICAgICAgaW1hZ2U6IGltYWdlQmVlZldpbGxpbmd0b24sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkJhbHNhbWljIE1hcmluYXRlZCBTa2lydCBTdGVha3Mgdy8gQ2hhcnJlZCBQZXBwZXJzXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJIZXJicyBhbmQgc21hc2hlZCBnYXJsaWMgcXVpY2tseSBpbmZ1c2UgY2hhcnJlZCBzd2VldCBwZXBwZXJzLCBjYXB0dXJpbmcgdGhlaXIgaGVhdCBzdHJhaWdodCBmcm9tIHRoZSBncmlsbC5cIixcbiAgICAgIHByaWNlOiBcIiQzNS4zMFwiLFxuICAgICAgaW1hZ2U6IGltYWdlRm9vZEJhbHNhbWljLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkNow6J0ZWF1YnJpYW5kXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJHcmlsbGVkIHRoaWNrIGN1dCBvZiBiZWVmIHRlbmRlcmxvaW5cIixcbiAgICAgIHByaWNlOiBcIiQzMi42MFwiLFxuICAgICAgaW1hZ2U6IGltYWdlQ2hhdGVhdSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRnJhbGRpbmhhXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJhIG1lYXQgY3V0IHRoYXQncyB0cmFkaXRpb25hbGx5IHVzZWQgZm9yIGNodXJyYXNjbyBhbmQgaXMgbWFkZSB1cCBvZiBwYXJ0IGZsYW5rLCBwYXJ0IHNob3J0IGxvaW4sIGFuZCBwYXJ0IGJvdHRvbSBzaXJsb2luLlwiLFxuICAgICAgcHJpY2U6IFwiJDI1LjAwXCIsXG4gICAgICBpbWFnZTogaW1hZ2VGcmFsZGluaGEsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQmlmZSBkZSBDaG9yaXpvXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJCaWZlIGRlIGNob3Jpem8gYSBzdHJpcCBzdGVhaywgc2lybG9pbiwgYW5kIHRvcCBsb2luIHRyYWRpdGlvbmFsbHkgdXNlZCBmb3IgYXNhZG8uIEl0IGlzIGEgdGhpY2ssIGp1aWN5IHN0ZWFrIHdpdGggYSBzaXphYmxlIGxheWVyIG9mIGZhdCBvbiB0b3AuXCIsXG4gICAgICBwcmljZTogXCIkNDYuNjBcIixcbiAgICAgIGltYWdlOiBpbWFnZUJpZmVkZUNocnJpem8sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlBhw69kYWtpYVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTGFtYiBjaG9wcyBtYXJpbmF0ZWQgaW4gdmFyaW91cyBjb21iaW5hdGlvbnMgb2Ygb2xpdmUgb2lsLCBsZW1vbiBqdWljZSwgYW5kIGEgdmFyaWV0eSBvZiBmcmVzaCBoZXJicyBiZWZvcmUgdGhleSBhcmUgZ3JpbGxlZCBvbiB0cmFkaXRpb25hbCBjaGFyY29hbCBiYXJiZWN1ZXMuXCIsXG4gICAgICBwcmljZTogXCIkMjguMDBcIixcbiAgICAgIGltYWdlOiBpbWFnZVBhw69kYWtpYSxcbiAgICB9LFxuICBdLFxuXTtcblxuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuYXZMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBuYXZMaXN0SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbmF2TGlzdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG5hdkxpc3RDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByZXNvdXJjZXNGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcmVzb3VyY2VzQ29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgbWVudUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIG5hdkxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XG4gIG5hdkxpc3RIb21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdFwiKTtcbiAgbmF2TGlzdE1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1saXN0XCIpO1xuICBuYXZMaXN0Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWxpc3RcIik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwibWVudS1uYXZcIik7XG5cbiAgbmF2TGlzdEhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbmF2TGlzdE1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbmF2TGlzdENvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgcmVzb3VyY2VzRm9vdGVyLnRleHRDb250ZW50ID0gXCJJbWFnZXMgZnJvbSB0YXN0ZWF0bGFzLmNvbVwiO1xuICByZXNvdXJjZXNDb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCBqb2huejYxMlwiO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocmVzb3VyY2VzRm9vdGVyKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHJlc291cmNlc0NvcHlyaWdodCk7XG5cbiAgbmF2TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaXN0SG9tZSk7XG4gIG5hdkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlzdE1lbnUpO1xuICBuYXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpc3RDb250YWN0KTtcblxuICBtZW51cy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyRm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGVmdENvbnRhaW5lckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByaWdodENvbnRhaW5lckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsZWZ0Q29udGFpbmVyRm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBpbWFnZUJhbHNhbWljTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgZm9vZE5hbWVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBmb29kRGVzY3JpcHRpb25SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGZvb2RQcmljZVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCBpbWFnZUJhbHNhbWljUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGZvb2ROYW1lTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBmb29kRGVzY3JpcHRpb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZm9vZFByaWNlTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbGVmdENvbnRhaW5lckZvb2QuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gICAgcmlnaHRDb250YWluZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbWVudVwiKTtcbiAgICByaWdodENvbnRhaW5lckZvb2QuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gICAgbGVmdENvbnRhaW5lckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tZW51XCIpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG4gICAgcmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJpZ2h0LWNvbnRhaW5lclwiKTtcbiAgICBsZWZ0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWNvbnRhaW5lclwiKTtcbiAgICBmb29kTmFtZUxlZnQuY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgICBmb29kTmFtZVJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gICAgZm9vZFByaWNlTGVmdC5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgZm9vZFByaWNlUmlnaHQuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuXG4gICAgLy8gTGVmdCBTaWRlIFBpY3R1cmVcbiAgICBpbWFnZUJhbHNhbWljTGVmdC5zcmMgPSBtZW51WzBdLmltYWdlO1xuICAgIGZvb2ROYW1lUmlnaHQudGV4dENvbnRlbnQgPSBtZW51WzBdLm5hbWU7XG4gICAgZm9vZERlc2NyaXB0aW9uUmlnaHQudGV4dENvbnRlbnQgPSBtZW51WzBdLmRlc2NyaXB0aW9uO1xuICAgIGZvb2RQcmljZVJpZ2h0LnRleHRDb250ZW50ID0gbWVudVswXS5wcmljZTtcblxuICAgIC8vIFJpZ2h0IHNpZGUgUGljdHVyZVxuICAgIGltYWdlQmFsc2FtaWNSaWdodC5zcmMgPSBtZW51WzFdLmltYWdlO1xuICAgIGZvb2ROYW1lTGVmdC50ZXh0Q29udGVudCA9IG1lbnVbMV0ubmFtZTtcbiAgICBmb29kRGVzY3JpcHRpb25MZWZ0LnRleHRDb250ZW50ID0gbWVudVsxXS5kZXNjcmlwdGlvbjtcbiAgICBmb29kUHJpY2VMZWZ0LnRleHRDb250ZW50ID0gbWVudVsxXS5wcmljZTtcblxuICAgIGxlZnRDb250YWluZXJGb29kLmFwcGVuZENoaWxkKGltYWdlQmFsc2FtaWNMZWZ0KTtcbiAgICByaWdodENvbnRhaW5lckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGZvb2ROYW1lUmlnaHQpO1xuICAgIHJpZ2h0Q29udGFpbmVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uUmlnaHQpO1xuICAgIHJpZ2h0Q29udGFpbmVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZm9vZFByaWNlUmlnaHQpO1xuXG4gICAgcmlnaHRDb250YWluZXJGb29kLmFwcGVuZENoaWxkKGltYWdlQmFsc2FtaWNSaWdodCk7XG4gICAgbGVmdENvbnRhaW5lckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGZvb2ROYW1lTGVmdCk7XG4gICAgbGVmdENvbnRhaW5lckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbkxlZnQpO1xuICAgIGxlZnRDb250YWluZXJEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChmb29kUHJpY2VMZWZ0KTtcblxuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lckZvb2QpO1xuICAgIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXJEZXNjcmlwdGlvbik7XG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyRGVzY3JpcHRpb24pO1xuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyRm9vZCk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICB9KTtcblxuICBjb25zdCBtZW51U2NyZWVuID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0Q29udGFpbmVyKTtcblxuICAgIG1lbnVFbGVtZW50LmFwcGVuZENoaWxkKG5hdik7XG4gICAgbWVudUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICAgIG1lbnVFbGVtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgcmV0dXJuIG1lbnVFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiB7IG1lbnVTY3JlZW4sIG5hdkxpc3RIb21lLCBuYXZMaXN0Q29udGFjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5sZXQgY3VycmVudFNjcmVlbiA9IGhvbWUuaG9tZVNjcmVlbigpO1xuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vIEhvbWUgUGFnZVxuXG4vLyBNZW51eSBCdXR0b25cbmhvbWUubmF2TGlzdE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3VycmVudFNjcmVlbiA9IG1lbnUubWVudVNjcmVlbigpO1xuICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFNjcmVlbik7XG59KTtcblxuaG9tZS5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGN1cnJlbnRTY3JlZW4gPSBtZW51Lm1lbnVTY3JlZW4oKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50U2NyZWVuKTtcbn0pO1xuXG4vLyBDb250YWN0IEJVdHRvblxuaG9tZS5uYXZMaXN0Q29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjdXJyZW50U2NyZWVuID0gY29udGFjdC5jb250YWN0U2NyZWVuKCk7XG4gIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50U2NyZWVuKTtcbn0pO1xuXG5ob21lLmJ1dHRvbkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3VycmVudFNjcmVlbiA9IGNvbnRhY3QuY29udGFjdFNjcmVlbigpO1xuICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFNjcmVlbik7XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vIE1lbnUgUGFnZVxuXG5tZW51Lm5hdkxpc3RIb21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGN1cnJlbnRTY3JlZW4gPSBob21lLmhvbWVTY3JlZW4oKTtcbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRTY3JlZW4pO1xufSk7XG5cbm1lbnUubmF2TGlzdENvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3VycmVudFNjcmVlbiA9IGNvbnRhY3QuY29udGFjdFNjcmVlbigpO1xuICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFNjcmVlbik7XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vIENvbnRhY3QgUGFnZVxuXG5jb250YWN0Lm5hdkxpc3RIb21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGN1cnJlbnRTY3JlZW4gPSBob21lLmhvbWVTY3JlZW4oKTtcbiAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRTY3JlZW4pO1xufSk7XG5cbmNvbnRhY3QubmF2TGlzdE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3VycmVudFNjcmVlbiA9IG1lbnUubWVudVNjcmVlbigpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRTY3JlZW4pO1xufSk7XG5cbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFNjcmVlbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=