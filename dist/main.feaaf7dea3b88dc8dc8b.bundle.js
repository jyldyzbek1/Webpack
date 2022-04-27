/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background: hsl(210, 36%, 96%);\r\n    color: hsl(209, 61%, 16%);\r\n    line-height: 1.5;\r\n    font-size: 0.875rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n    letter-spacing: 0.25rem;\r\n    text-transform: capitalize;\r\n    line-height: 1.25;\r\n    margin-bottom: 0.75rem;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\np {\r\n    margin-bottom: 1.25rem;\r\n    margin-top: 1.25rem;\r\n    color: hsl(210, 22%, 49%);\r\n}\r\n\r\n.section {\r\n    padding-top: 1rem;\r\n    padding-bottom: 5rem;\r\n}\r\n\r\n.section-center {\r\n    width: 90vw;\r\n    margin: 0 auto;\r\n    max-width: 1170px;\r\n}\r\n\r\n.title h2 {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.title span {\r\n    color: hsla(182, 63%, 54%);\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.about-img {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\nimg:not(.logo) {\r\n    width: 100%;\r\n}\r\n\r\n.about-img img {\r\n    border-radius: 0.5rem;\r\n    object-fit: cover;\r\n    height: 20rem;\r\n}\r\n\r\n.about {\r\n    background: #fff;\r\n    border-radius: 0.5rem;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    min-height: 20rem;\r\n}\r\n\r\n.about-section {\r\n    padding-top: 3rem;\r\n}\r\n\r\n.about-title {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.about-inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    place-items: center;\r\n}\r\n\r\n.about-img-wrapper {\r\n    width: 100%;\r\n    border-radius: 0.8rem;\r\n    overflow: hidden;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.about-img {\r\n    width: 100%;\r\n    height: auto;\r\n    object-fit: cover;\r\n}\r\n\r\n.about-tabs-container {\r\n    border-top-left-radius: 0.5rem;\r\n    border-top-right-radius: 0.5rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.about-tab {\r\n    padding: 1rem;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    font-size: 1rem;\r\n    display: block;\r\n    background: hsl(212, 33%, 89%);\r\n    cursor: pointer;\r\n    transition: all 0.3s linear;\r\n    letter-spacing: 0.25rem;\r\n}\r\n\r\n.about-tab:nth-child(1) {\r\n    border-top-left-radius: 0.5rem;\r\n}\r\n\r\n.about-tab:nth-child(3) {\r\n    border-top-right-radius: 0.5rem;\r\n}\r\n\r\n.btn-container {\r\n    border-top-left-radius: 0.5rem;\r\n    border-top-right-radius: 0.5rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.tab-btn:nth-child(1) {\r\n    border-top-left-radius: 0.5rem;\r\n}\r\n\r\n.tab-btn:nth-child(3) {\r\n    border-top-right-radius: 0.5rem;\r\n}\r\n\r\n.tab-btn {\r\n    padding: 1rem 0;\r\n    padding-left: 20px;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    font-size: 1rem;\r\n    display: block;\r\n    background: hsl(212, 33%, 89%);\r\n    cursor: pointer;\r\n    transition: all 0.3s linear;\r\n    letter-spacing: 0.25rem;\r\n}\r\n\r\n.tab-btn:hover:not(.active) {\r\n    background: hsl(205, 100%, 96%);\r\n    color: #49a6e9;\r\n}\r\n\r\n.about-content {\r\n    border-bottom-left-radius: 0.5rem;\r\n    border-bottom-right-radius: 0.5rem;\r\n    padding: 2rem 1.5rem;\r\n}\r\n\r\n.content {\r\n    display: none;\r\n}\r\n\r\n.tab-btn.active {\r\n    background: #fff;\r\n}\r\n\r\n.content.active {\r\n    display: block;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    h1 {\r\n        font-size: 4rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    h4 {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    body {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    h1,\r\n    h2,\r\n    h3,\r\n    h4 {\r\n        line-height: 1;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    .section-center {\r\n        width: 95vw;\r\n    }\r\n\r\n    .about-img {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .about-center {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        column-gap: 2rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,8BAA8B;IAC9B,yBAAyB;IACzB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,0BAA0B;IAC1B,iBAAiB;IACjB,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,aAAa;IACb,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,0BAA0B;IAC1B,eAAe;IACf,cAAc;IACd,8BAA8B;IAC9B,eAAe;IACf,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,0BAA0B;IAC1B,eAAe;IACf,cAAc;IACd,8BAA8B;IAC9B,eAAe;IACf,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,kCAAkC;IAClC,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;;;;QAII,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,WAAW;IACf;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,gBAAgB;IACpB;AACJ","sourcesContent":["body {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background: hsl(210, 36%, 96%);\r\n    color: hsl(209, 61%, 16%);\r\n    line-height: 1.5;\r\n    font-size: 0.875rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n    letter-spacing: 0.25rem;\r\n    text-transform: capitalize;\r\n    line-height: 1.25;\r\n    margin-bottom: 0.75rem;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\np {\r\n    margin-bottom: 1.25rem;\r\n    margin-top: 1.25rem;\r\n    color: hsl(210, 22%, 49%);\r\n}\r\n\r\n.section {\r\n    padding-top: 1rem;\r\n    padding-bottom: 5rem;\r\n}\r\n\r\n.section-center {\r\n    width: 90vw;\r\n    margin: 0 auto;\r\n    max-width: 1170px;\r\n}\r\n\r\n.title h2 {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.title span {\r\n    color: hsla(182, 63%, 54%);\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.about-img {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\nimg:not(.logo) {\r\n    width: 100%;\r\n}\r\n\r\n.about-img img {\r\n    border-radius: 0.5rem;\r\n    object-fit: cover;\r\n    height: 20rem;\r\n}\r\n\r\n.about {\r\n    background: #fff;\r\n    border-radius: 0.5rem;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    min-height: 20rem;\r\n}\r\n\r\n.about-section {\r\n    padding-top: 3rem;\r\n}\r\n\r\n.about-title {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.about-inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    place-items: center;\r\n}\r\n\r\n.about-img-wrapper {\r\n    width: 100%;\r\n    border-radius: 0.8rem;\r\n    overflow: hidden;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.about-img {\r\n    width: 100%;\r\n    height: auto;\r\n    object-fit: cover;\r\n}\r\n\r\n.about-tabs-container {\r\n    border-top-left-radius: 0.5rem;\r\n    border-top-right-radius: 0.5rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.about-tab {\r\n    padding: 1rem;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    font-size: 1rem;\r\n    display: block;\r\n    background: hsl(212, 33%, 89%);\r\n    cursor: pointer;\r\n    transition: all 0.3s linear;\r\n    letter-spacing: 0.25rem;\r\n}\r\n\r\n.about-tab:nth-child(1) {\r\n    border-top-left-radius: 0.5rem;\r\n}\r\n\r\n.about-tab:nth-child(3) {\r\n    border-top-right-radius: 0.5rem;\r\n}\r\n\r\n.btn-container {\r\n    border-top-left-radius: 0.5rem;\r\n    border-top-right-radius: 0.5rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.tab-btn:nth-child(1) {\r\n    border-top-left-radius: 0.5rem;\r\n}\r\n\r\n.tab-btn:nth-child(3) {\r\n    border-top-right-radius: 0.5rem;\r\n}\r\n\r\n.tab-btn {\r\n    padding: 1rem 0;\r\n    padding-left: 20px;\r\n    border: none;\r\n    text-transform: capitalize;\r\n    font-size: 1rem;\r\n    display: block;\r\n    background: hsl(212, 33%, 89%);\r\n    cursor: pointer;\r\n    transition: all 0.3s linear;\r\n    letter-spacing: 0.25rem;\r\n}\r\n\r\n.tab-btn:hover:not(.active) {\r\n    background: hsl(205, 100%, 96%);\r\n    color: #49a6e9;\r\n}\r\n\r\n.about-content {\r\n    border-bottom-left-radius: 0.5rem;\r\n    border-bottom-right-radius: 0.5rem;\r\n    padding: 2rem 1.5rem;\r\n}\r\n\r\n.content {\r\n    display: none;\r\n}\r\n\r\n.tab-btn.active {\r\n    background: #fff;\r\n}\r\n\r\n.content.active {\r\n    display: block;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    h1 {\r\n        font-size: 4rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    h4 {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    body {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    h1,\r\n    h2,\r\n    h3,\r\n    h4 {\r\n        line-height: 1;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    .section-center {\r\n        width: 95vw;\r\n    }\r\n\r\n    .about-img {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    .about-center {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        column-gap: 2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");

var section = document.createElement('section');
section.className = "section about-section";
var title = document.createElement('div');
title.className = "title";
var h2 = document.createElement('h2');
h2.innerText = "about";
var sectionChild = document.createElement('div');
sectionChild.className = "about-center section-center";
var aboutImg = document.createElement('article');
aboutImg.className = "about-img";
var img = document.createElement('img');
img.src = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";
var about = document.createElement('article');
about.className = "about";
var btnContainer = document.createElement('div');
btnContainer.className = "btn-container";
var btn1 = document.createElement('btn');
btn1.className = "tab-btn active";
btn1.setAttribute('data-id', 'aboutUs');
btn1.innerText = "About Us";
var btn2 = document.createElement('btn');
btn2.className = "tab-btn";
btn2.setAttribute('data-id', 'mission');
btn2.innerText = "Our Mission";
var btn3 = document.createElement('btn');
btn3.className = "tab-btn";
btn3.setAttribute('data-id', 'goals');
btn3.innerText = "Our Goals";
var aboutContent = document.createElement('div');
aboutContent.className = "about-content";
var content1 = document.createElement('div');
content1.className = "content active";
content1.id = "aboutUs";
var h41 = document.createElement('h4');
h41.innerText = "About Us";
var p1 = document.createElement('p');
p1.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quasi adipisci id maiores sequi non harum repudiandae molestiae.Tenetur iste consequatur maiores doloribus, provident ea officia quam velit perspiciatis, fugiat, architecto magni fugit saepe.Perferendis cupiditate architecto sed ab adipisci excepturi molestias modi veniam quae ? ";
var content2 = document.createElement('div');
content2.className = "content";
content2.id = "mission";
var h42 = document.createElement('h4');
h42.innerText = "Our Mission";
var p2 = document.createElement('p');
p2.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cupiditate temporibus, velit optio reprehenderit nesciunt nostrum nemo dolorum fuga atque omnis odit pariatur? Qui accusamus odio commodi nihil distinctio inventore, ratione cupiditate reprehenderit? Recusandae labore soluta, reiciendis nam ab aut necessitatibus quo exercitationem esse magni aspernatur porro quod praesentium perferendis!";
var content3 = document.createElement('div');
content3.className = "content";
content3.id = "goals";
var h43 = document.createElement('h4');
h43.innerText = "Our Goals";
var p3 = document.createElement('p');
p3.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea placeat dolorum cumque dolorem incidunt dolor autem praesentium similique dolore natus quaerat ad adipisci accusamus aperiam veritatis, vitae labore voluptatem, in odio atque iste, omnis voluptatibus molestias? Dolore, illo similique.";
var elementsList1 = [btn1, btn2, btn3];

for (var i = 0; i < elementsList1.length; i++) {
  btnContainer.appendChild(elementsList1[i]);
}

var elementsList2 = [content1, content2, content3];

for (var _i = 0; _i < elementsList2.length; _i++) {
  aboutContent.appendChild(elementsList2[_i]);
}

document.body.appendChild(section);
section.append(title, sectionChild);
title.appendChild(h2);
sectionChild.append(aboutImg, about);
aboutImg.appendChild(img);
about.append(btnContainer, aboutContent);
content1.append(h41, p1);
content2.append(h42, p2);
content3.append(h43, p3);
about.addEventListener("click", function (e) {
  var id = e.target.dataset.id;

  if (id) {
    elementsList1.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    elementsList2.forEach(function (article) {
      article.classList.remove("active");
    });
    var tabConent = document.getElementById(id);
    tabConent.classList.add("active");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQkMsRUFBckI7QUFDQUMsUUFBUSxDQUFDWSxNQUFULENBQWdCWCxHQUFoQixFQUFxQkMsRUFBckI7QUFDQUMsUUFBUSxDQUFDUyxNQUFULENBQWdCUixHQUFoQixFQUFxQkMsRUFBckI7QUFHQWhCLEtBQUssQ0FBQ3dCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQVVDLENBQVYsRUFBYTtBQUMzQyxNQUFNakIsRUFBRSxHQUFHaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJuQixFQUE1Qjs7QUFFQSxNQUFJQSxFQUFKLEVBQVE7QUFDTlMsSUFBQUEsYUFBYSxDQUFDVyxPQUFkLENBQXNCLFVBQVVDLEdBQVYsRUFBZTtBQUNuQ0EsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsUUFBckI7QUFDRCxLQUZEO0FBSUFOLElBQUFBLENBQUMsQ0FBQ0MsTUFBRixDQUFTSSxTQUFULENBQW1CRSxHQUFuQixDQUF1QixRQUF2QjtBQUVBWCxJQUFBQSxhQUFhLENBQUNPLE9BQWQsQ0FBc0IsVUFBVUssT0FBVixFQUFtQjtBQUN2Q0EsTUFBQUEsT0FBTyxDQUFDSCxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QjtBQUNELEtBRkQ7QUFJQSxRQUFNRyxTQUFTLEdBQUc1QyxRQUFRLENBQUM2QyxjQUFULENBQXdCM0IsRUFBeEIsQ0FBbEI7QUFDQTBCLElBQUFBLFNBQVMsQ0FBQ0osU0FBVixDQUFvQkUsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDRDtBQUNGLENBakJELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQ6IGhzbCgyMTAsIDM2JSwgOTYlKTtcXHJcXG4gICAgY29sb3I6IGhzbCgyMDksIDYxJSwgMTYlKTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuICAgIGNvbG9yOiBoc2woMjEwLCAyMiUsIDQ5JSk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1jZW50ZXIge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTE3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBzcGFuIHtcXHJcXG4gICAgY29sb3I6IGhzbGEoMTgyLCA2MyUsIDU0JSk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbmltZzpub3QoLmxvZ28pIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWcgaW1nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWlubmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZy13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGFicy1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10YWIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjEyLCAzMyUsIDg5JSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRhYjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10YWI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1idG46bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogaHNsKDIxMiwgMzMlLCA4OSUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGhzbCgyMDUsIDEwMCUsIDk2JSk7XFxyXFxuICAgIGNvbG9yOiAjNDlhNmU5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1idG4uYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxLFxcclxcbiAgICBoMixcXHJcXG4gICAgaDMsXFxyXFxuICAgIGg0IHtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIC5zZWN0aW9uLWNlbnRlciB7XFxyXFxuICAgICAgICB3aWR0aDogOTV2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtaW1nIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LWNlbnRlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBOzs7O1FBSUksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQ6IGhzbCgyMTAsIDM2JSwgOTYlKTtcXHJcXG4gICAgY29sb3I6IGhzbCgyMDksIDYxJSwgMTYlKTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuICAgIGNvbG9yOiBoc2woMjEwLCAyMiUsIDQ5JSk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1jZW50ZXIge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTE3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBzcGFuIHtcXHJcXG4gICAgY29sb3I6IGhzbGEoMTgyLCA2MyUsIDU0JSk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbmltZzpub3QoLmxvZ28pIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWcgaW1nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWlubmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZy13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGFicy1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10YWIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjEyLCAzMyUsIDg5JSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRhYjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10YWI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250YWluZXIge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1idG46bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogaHNsKDIxMiwgMzMlLCA4OSUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YWItYnRuOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGhzbCgyMDUsIDEwMCUsIDk2JSk7XFxyXFxuICAgIGNvbG9yOiAjNDlhNmU5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1idG4uYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgxLFxcclxcbiAgICBoMixcXHJcXG4gICAgaDMsXFxyXFxuICAgIGg0IHtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIC5zZWN0aW9uLWNlbnRlciB7XFxyXFxuICAgICAgICB3aWR0aDogOTV2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQtaW1nIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LWNlbnRlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL21haW4uY3NzXCJcclxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuc2VjdGlvbi5jbGFzc05hbWUgPSBcInNlY3Rpb24gYWJvdXQtc2VjdGlvblwiO1xyXG5cclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxudGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xyXG5cclxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5oMi5pbm5lclRleHQgPSBcImFib3V0XCI7XHJcblxyXG5jb25zdCBzZWN0aW9uQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2VjdGlvbkNoaWxkLmNsYXNzTmFtZSA9IFwiYWJvdXQtY2VudGVyIHNlY3Rpb24tY2VudGVyXCI7XHJcblxyXG5jb25zdCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuYWJvdXRJbWcuY2xhc3NOYW1lID0gXCJhYm91dC1pbWdcIjtcclxuXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcuc3JjID0gXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1NzQyNjI3Mi1mYzc1OWZkZjdhOGQ/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MCZxPTgwXCI7XHJcblxyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuYWJvdXQuY2xhc3NOYW1lID0gXCJhYm91dFwiO1xyXG5cclxuY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImJ0bi1jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcclxuYnRuMS5jbGFzc05hbWUgPSBcInRhYi1idG4gYWN0aXZlXCI7XHJcbmJ0bjEuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJ2Fib3V0VXMnKTtcclxuYnRuMS5pbm5lclRleHQgPSBcIkFib3V0IFVzXCI7XHJcblxyXG5jb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XHJcbmJ0bjIuY2xhc3NOYW1lID0gXCJ0YWItYnRuXCI7XHJcbmJ0bjIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJ21pc3Npb24nKTtcclxuYnRuMi5pbm5lclRleHQgPSBcIk91ciBNaXNzaW9uXCI7XHJcblxyXG5jb25zdCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XHJcbmJ0bjMuY2xhc3NOYW1lID0gXCJ0YWItYnRuXCI7XHJcbmJ0bjMuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgJ2dvYWxzJyk7XHJcbmJ0bjMuaW5uZXJUZXh0ID0gXCJPdXIgR29hbHNcIjtcclxuXHJcbmNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5hYm91dENvbnRlbnQuY2xhc3NOYW1lID0gXCJhYm91dC1jb250ZW50XCI7XHJcblxyXG5jb25zdCBjb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250ZW50MS5jbGFzc05hbWUgPSBcImNvbnRlbnQgYWN0aXZlXCI7XHJcbmNvbnRlbnQxLmlkID0gXCJhYm91dFVzXCI7XHJcblxyXG5jb25zdCBoNDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG5oNDEuaW5uZXJUZXh0ID0gXCJBYm91dCBVc1wiO1xyXG5cclxuY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnAxLmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcGVsbGF0IHF1YXNpIGFkaXBpc2NpIGlkIG1haW9yZXMgc2VxdWkgbm9uIGhhcnVtIHJlcHVkaWFuZGFlIG1vbGVzdGlhZS5UZW5ldHVyIGlzdGUgY29uc2VxdWF0dXIgbWFpb3JlcyBkb2xvcmlidXMsIHByb3ZpZGVudCBlYSBvZmZpY2lhIHF1YW0gdmVsaXQgcGVyc3BpY2lhdGlzLCBmdWdpYXQsIGFyY2hpdGVjdG8gbWFnbmkgZnVnaXQgc2FlcGUuUGVyZmVyZW5kaXMgY3VwaWRpdGF0ZSBhcmNoaXRlY3RvIHNlZCBhYiBhZGlwaXNjaSBleGNlcHR1cmkgbW9sZXN0aWFzIG1vZGkgdmVuaWFtIHF1YWUgPyBcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRlbnQyLmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG5jb250ZW50Mi5pZCA9IFwibWlzc2lvblwiO1xyXG5cclxuY29uc3QgaDQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuaDQyLmlubmVyVGV4dCA9IFwiT3VyIE1pc3Npb25cIjtcclxuXHJcbmNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5wMi5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFYSBjdXBpZGl0YXRlIHRlbXBvcmlidXMsIHZlbGl0IG9wdGlvIHJlcHJlaGVuZGVyaXQgbmVzY2l1bnQgbm9zdHJ1bSBuZW1vIGRvbG9ydW0gZnVnYSBhdHF1ZSBvbW5pcyBvZGl0IHBhcmlhdHVyPyBRdWkgYWNjdXNhbXVzIG9kaW8gY29tbW9kaSBuaWhpbCBkaXN0aW5jdGlvIGludmVudG9yZSwgcmF0aW9uZSBjdXBpZGl0YXRlIHJlcHJlaGVuZGVyaXQ/IFJlY3VzYW5kYWUgbGFib3JlIHNvbHV0YSwgcmVpY2llbmRpcyBuYW0gYWIgYXV0IG5lY2Vzc2l0YXRpYnVzIHF1byBleGVyY2l0YXRpb25lbSBlc3NlIG1hZ25pIGFzcGVybmF0dXIgcG9ycm8gcXVvZCBwcmFlc2VudGl1bSBwZXJmZXJlbmRpcyFcIjtcclxuY29uc3QgY29udGVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29udGVudDMuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcbmNvbnRlbnQzLmlkID0gXCJnb2Fsc1wiO1xyXG5cclxuY29uc3QgaDQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuaDQzLmlubmVyVGV4dCA9IFwiT3VyIEdvYWxzXCI7XHJcblxyXG5jb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxucDMuaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gQWxpcXVpZCBlYSBwbGFjZWF0IGRvbG9ydW0gY3VtcXVlIGRvbG9yZW0gaW5jaWR1bnQgZG9sb3IgYXV0ZW0gcHJhZXNlbnRpdW0gc2ltaWxpcXVlIGRvbG9yZSBuYXR1cyBxdWFlcmF0IGFkIGFkaXBpc2NpIGFjY3VzYW11cyBhcGVyaWFtIHZlcml0YXRpcywgdml0YWUgbGFib3JlIHZvbHVwdGF0ZW0sIGluIG9kaW8gYXRxdWUgaXN0ZSwgb21uaXMgdm9sdXB0YXRpYnVzIG1vbGVzdGlhcz8gRG9sb3JlLCBpbGxvIHNpbWlsaXF1ZS5cIjtcclxuXHJcbmNvbnN0IGVsZW1lbnRzTGlzdDEgPSBbYnRuMSwgYnRuMiwgYnRuM107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNMaXN0MS5sZW5ndGg7IGkrKykge1xyXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50c0xpc3QxW2ldKTtcclxufVxyXG5cclxuY29uc3QgZWxlbWVudHNMaXN0MiA9IFtjb250ZW50MSwgY29udGVudDIsIGNvbnRlbnQzXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c0xpc3QyLmxlbmd0aDsgaSsrKSB7XHJcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnRzTGlzdDJbaV0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5zZWN0aW9uLmFwcGVuZCh0aXRsZSwgc2VjdGlvbkNoaWxkKTtcclxudGl0bGUuYXBwZW5kQ2hpbGQoaDIpO1xyXG5zZWN0aW9uQ2hpbGQuYXBwZW5kKGFib3V0SW1nLCBhYm91dCk7XHJcbmFib3V0SW1nLmFwcGVuZENoaWxkKGltZyk7XHJcbmFib3V0LmFwcGVuZChidG5Db250YWluZXIsIGFib3V0Q29udGVudCk7XHJcbmNvbnRlbnQxLmFwcGVuZChoNDEsIHAxKTtcclxuY29udGVudDIuYXBwZW5kKGg0MiwgcDIpO1xyXG5jb250ZW50My5hcHBlbmQoaDQzLCBwMyk7XHJcblxyXG5cclxuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGVsZW1lbnRzTGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgICBlbGVtZW50c0xpc3QyLmZvckVhY2goZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGFiQ29uZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgdGFiQ29uZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59KTsiXSwibmFtZXMiOlsic3R5bGUiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJoMiIsImlubmVyVGV4dCIsInNlY3Rpb25DaGlsZCIsImFib3V0SW1nIiwiaW1nIiwic3JjIiwiYWJvdXQiLCJidG5Db250YWluZXIiLCJidG4xIiwic2V0QXR0cmlidXRlIiwiYnRuMiIsImJ0bjMiLCJhYm91dENvbnRlbnQiLCJjb250ZW50MSIsImlkIiwiaDQxIiwicDEiLCJjb250ZW50MiIsImg0MiIsInAyIiwiY29udGVudDMiLCJoNDMiLCJwMyIsImVsZW1lbnRzTGlzdDEiLCJpIiwibGVuZ3RoIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50c0xpc3QyIiwiYm9keSIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsImZvckVhY2giLCJidG4iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhcnRpY2xlIiwidGFiQ29uZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9