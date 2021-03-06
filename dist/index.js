(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("dyna-ui-fast-click"), require("dyna-ui-loading-ghost"), require("dyna-ui-styles"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-button", ["react", "dyna-ui-fast-click", "dyna-ui-loading-ghost", "dyna-ui-styles"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-button"] = factory(require("react"), require("dyna-ui-fast-click"), require("dyna-ui-loading-ghost"), require("dyna-ui-styles"));
	else
		root["dyna-ui-button"] = factory(root["react"], root["dyna-ui-fast-click"], root["dyna-ui-loading-ghost"], root["dyna-ui-styles"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaButton_1 = __webpack_require__(2);
exports.DynaButton = DynaButton_1.DynaButton;
exports.EStyle = DynaButton_1.EStyle;
exports.EColor = DynaButton_1.EColor;
exports.ESize = DynaButton_1.ESize;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var dyna_ui_fast_click_1 = __webpack_require__(4);
var dyna_ui_loading_ghost_1 = __webpack_require__(5);
var dyna_ui_styles_1 = __webpack_require__(6);
exports.EColor = dyna_ui_styles_1.EColor;
__webpack_require__(7);
var EStyle;
(function (EStyle) {
    EStyle["ROUNDED"] = "ROUNDED";
    EStyle["FLAT"] = "FLAT";
})(EStyle = exports.EStyle || (exports.EStyle = {}));
var ESize;
(function (ESize) {
    ESize["XSMALL"] = "XSMALL";
    ESize["SMALL"] = "SMALL";
    ESize["MEDIUM"] = "MEDIUM";
    ESize["LARGE"] = "LARGE";
    ESize["XLARGE"] = "XLARGE";
    ESize["XXLARGE"] = "XXLARGE";
})(ESize = exports.ESize || (exports.ESize = {}));
var DynaButton = /** @class */ (function (_super) {
    __extends(DynaButton, _super);
    function DynaButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaButton.prototype.handleClick = function () {
        var _a = this.props, disabled = _a.disabled, onClick = _a.onClick;
        if (disabled)
            return;
        onClick();
    };
    DynaButton.prototype.render = function () {
        var _a = this.props, cn = _a.className, children = _a.children, style = _a.style, color = _a.color, size = _a.size, disabled = _a.disabled, ghost = _a.ghost, href = _a.href, target = _a.target;
        var className = [
            'dyna-button',
            "dnbtn-style-" + style,
            "dnbtn-color-" + color,
            "dnbtn-size-" + size,
        ].join(' ').trim();
        var ghostClassName = [
            'dyna-button-ghost',
            "dyna-button-ghost" + (ghost && !disabled ? "--show" : "--hide"),
        ].join(' ').trim();
        return (React.createElement("a", { className: className, href: href, target: href && target || null },
            React.createElement(dyna_ui_fast_click_1.DynaFastClick, { onClick: this.handleClick.bind(this) },
                React.createElement("button", { className: cn || '', disabled: disabled },
                    React.createElement(dyna_ui_loading_ghost_1.DynaLoadingGhost, { className: ghostClassName }),
                    children))));
    };
    DynaButton.defaultProps = {
        className: '',
        children: null,
        style: EStyle.ROUNDED,
        color: dyna_ui_styles_1.EColor.WHITE_BLACK,
        size: ESize.MEDIUM,
        disabled: false,
        ghost: false,
        href: null,
        target: "_blank",
        onClick: function () { return undefined; },
    };
    return DynaButton;
}(React.Component));
exports.DynaButton = DynaButton;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(10)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./dyna-button.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./dyna-button.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".dyna-button {\n  outline: none;\n}\n.dyna-button button {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  overflow: hidden;\n}\n.dyna-button button:disabled {\n  pointer-events: none;\n}\n.dyna-button-ghost {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n}\n.dyna-button-ghost--show {\n  display: block;\n}\n.dyna-button-ghost--hide {\n  display: none;\n}\n.dyna-button.dnbtn-style-ROUNDED {\n  font-size: 0;\n}\n.dyna-button.dnbtn-style-ROUNDED button {\n  outline: none;\n  border-style: solid;\n  cursor: pointer;\n  -webkit-transition: background-color 200ms ease-out;\n  transition: background-color 200ms ease-out;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-XSMALL button {\n  border-radius: 8px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-XSMALL button:active {\n  top: 1px;\n  left: 1px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-SMALL button {\n  border-radius: 14px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-SMALL button:active {\n  top: 1px;\n  left: 1px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-MEDIUM button {\n  border-radius: 16px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-MEDIUM button:active {\n  top: 1px;\n  left: 1px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-LARGE button {\n  border-radius: 32px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-LARGE button:active {\n  top: 1px;\n  left: 1px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-XLARGE button {\n  border-radius: 64px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-XLARGE button:active {\n  top: 1px;\n  left: 1px;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-XXLARGE button {\n  border-radius: 64px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-style-ROUNDED.dnbtn-size-XXLARGE button:active {\n  top: 2px;\n  left: 2px;\n}\n.dyna-button.dnbtn-style-FLAT {\n  font-size: 0;\n}\n.dyna-button.dnbtn-style-FLAT button {\n  outline: none;\n  border-style: solid;\n  cursor: pointer;\n  -webkit-transition: background-color 200ms ease-out;\n  transition: background-color 200ms ease-out;\n}\n.dyna-button.dnbtn-size-XSMALL button {\n  padding: 1px 8px 0 8px;\n  font-size: 8px;\n  line-height: 13px;\n  border-width: 1px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-size-SMALL button {\n  padding: 1px 8px 0 8px;\n  font-size: 10px;\n  line-height: 25px;\n  border-width: 1px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-size-MEDIUM button {\n  padding: 0 16px;\n  font-size: 12px;\n  line-height: 30px;\n  border-width: 1px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-size-LARGE button {\n  padding: 0 32px;\n  font-size: 22px;\n  line-height: 46px;\n  border-width: 1px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-size-XLARGE button {\n  padding: 0 38px;\n  font-size: 28px;\n  line-height: 52px;\n  border-width: 2px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-size-XXLARGE button {\n  padding: 0 42px;\n  font-size: 32px;\n  line-height: 60px;\n  border-width: 2px;\n  font-weight: bold;\n}\n.dyna-button.dnbtn-color-WHITE_BLACK button {\n  border-color: #222223;\n  background: #D0D3D4;\n  color: #222223;\n}\n.dyna-button.dnbtn-color-WHITE_BLACK button:hover {\n  background-color: #C1C6C8;\n}\n.dyna-button.dnbtn-color-WHITE_BLACK button:active {\n  background-color: #A2AAAD;\n}\n.dyna-button.dnbtn-color-WHITE_BLACK button:disabled {\n  border-color: rgba(34, 34, 35, 0.7);\n  color: rgba(33, 39, 33, 0.5);\n}\n.dyna-button.dnbtn-color-WHITE_RED button {\n  border-color: #DA291C;\n  background: #D0D3D4;\n  color: #DA291C;\n}\n.dyna-button.dnbtn-color-WHITE_RED button:hover {\n  background-color: #C1C6C8;\n}\n.dyna-button.dnbtn-color-WHITE_RED button:active {\n  background-color: #A2AAAD;\n}\n.dyna-button.dnbtn-color-WHITE_RED button:disabled {\n  border-color: rgba(218, 41, 28, 0.7);\n  color: rgba(218, 41, 28, 0.5);\n}\n.dyna-button.dnbtn-color-BLACK_WHITE button {\n  border-color: #222223;\n  background: #222223;\n  color: #D0D3D4;\n}\n.dyna-button.dnbtn-color-BLACK_WHITE button:hover {\n  background-color: #101820;\n}\n.dyna-button.dnbtn-color-BLACK_WHITE button:active {\n  background-color: #212721;\n}\n.dyna-button.dnbtn-color-BLACK_WHITE button:disabled {\n  border-color: rgba(34, 34, 35, 0.7);\n  color: rgba(208, 211, 212, 0.5);\n}\n.dyna-button.dnbtn-color-GREY_WHITE button {\n  border-color: #7E7F74;\n  background: #51534A;\n  color: #D0D3D4;\n}\n.dyna-button.dnbtn-color-GREY_WHITE button:hover {\n  background-color: #65665C;\n}\n.dyna-button.dnbtn-color-GREY_WHITE button:active {\n  background-color: #7E7F74;\n}\n.dyna-button.dnbtn-color-GREY_WHITE button:disabled {\n  border-color: rgba(126, 127, 116, 0.7);\n  color: rgba(208, 211, 212, 0.5);\n}\n.dyna-button.dnbtn-color-RED_WHITE button {\n  border-color: #AF272F;\n  background: #DA291C;\n  color: #D0D3D4;\n}\n.dyna-button.dnbtn-color-RED_WHITE button:hover {\n  background-color: #D22630;\n}\n.dyna-button.dnbtn-color-RED_WHITE button:active {\n  background-color: #AF272F;\n}\n.dyna-button.dnbtn-color-RED_WHITE button:disabled {\n  border-color: rgba(175, 39, 47, 0.7);\n  color: rgba(208, 211, 212, 0.5);\n}\n.dyna-button.dnbtn-color-TRANSPARENT_ORANGE button {\n  border-color: #FF6900;\n  background: transparent;\n  color: #FF6900;\n}\n.dyna-button.dnbtn-color-TRANSPARENT_ORANGE button:hover {\n  color: #FF8F1C;\n}\n.dyna-button.dnbtn-color-TRANSPARENT_ORANGE button:active {\n  color: #FFAE62;\n}\n.dyna-button.dnbtn-color-TRANSPARENT_ORANGE button:disabled {\n  border-color: rgba(255, 105, 0, 0.7);\n  color: rgba(255, 105, 0, 0.5);\n}\n.dyna-button.dnbtn-color-ORANGE_WHITE button {\n  border-color: #FFAE62;\n  background: #FF6900;\n  color: #D9D9D6;\n}\n.dyna-button.dnbtn-color-ORANGE_WHITE button:hover {\n  background-color: #FF8F1C;\n}\n.dyna-button.dnbtn-color-ORANGE_WHITE button:active {\n  background-color: #FFAE62;\n}\n.dyna-button.dnbtn-color-ORANGE_WHITE button:disabled {\n  border-color: rgba(255, 174, 98, 0.7);\n  color: rgba(217, 217, 214, 0.5);\n}\n.dyna-button.dnbtn-color-WHITE_ORANGE button {\n  border-color: #FF6900;\n  background: #D9D9D6;\n  color: #FF6900;\n}\n.dyna-button.dnbtn-color-WHITE_ORANGE button:hover {\n  background-color: #D0D0CE;\n}\n.dyna-button.dnbtn-color-WHITE_ORANGE button:active {\n  background-color: #C8C9C7;\n}\n.dyna-button.dnbtn-color-WHITE_ORANGE button:disabled {\n  border-color: rgba(255, 143, 28, 0.7);\n  color: rgba(255, 105, 0, 0.5);\n}\n.dyna-button.dnbtn-color-BLACK_ORANGE button {\n  border-color: #FF6900;\n  background: #222223;\n  color: #FF6900;\n}\n.dyna-button.dnbtn-color-BLACK_ORANGE button:hover {\n  background-color: #101820;\n}\n.dyna-button.dnbtn-color-BLACK_ORANGE button:active {\n  background-color: #212721;\n  color: #FFAE62;\n}\n.dyna-button.dnbtn-color-BLACK_ORANGE button:disabled {\n  border-color: rgba(255, 105, 0, 0.7);\n  color: rgba(255, 105, 0, 0.5);\n}\n.dyna-button.dnbtn-color-TRANSPARENT_WHITE button {\n  border-color: #D0D3D4;\n  background: transparent;\n  color: #D0D3D4;\n}\n.dyna-button.dnbtn-color-TRANSPARENT_WHITE button:hover {\n  border-color: #C1C6C8;\n  color: #C1C6C8;\n}\n.dyna-button.dnbtn-color-TRANSPARENT_WHITE button:active {\n  border-color: #A2AAAD;\n  color: #A2AAAD;\n}\n.dyna-button.dnbtn-color-TRANSPARENT_WHITE button:disabled {\n  border-color: rgba(208, 211, 212, 0.7);\n  color: rgba(208, 211, 212, 0.5);\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});