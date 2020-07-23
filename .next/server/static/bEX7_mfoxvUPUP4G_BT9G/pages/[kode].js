module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Jozs");


/***/ }),

/***/ "G9/G":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"gbr\":\"/images/gambar 1.jpg\",\"model\":\"Gamis Syar'i : \",\"Harga\":\"Rp.120.000\"},{\"id\":2,\"gbr\":\"/images/gambar 2.jpg\",\"model\":\"Kaos Pria Skymo : \",\"Harga\":\"Rp.55.000\"},{\"id\":3,\"gbr\":\"/images/gambar 3.jpg\",\"model\":\"Gaun Anak-Anak AMISSC : \",\"Harga\":\"Rp.105.000\"},{\"id\":4,\"gbr\":\"/images/gambar 4.jpg\",\"model\":\"Set Pakaian Anak Laki-laki : \",\"Harga\":\"Rp.95.000\"},{\"id\":5,\"gbr\":\"/images/Product1_resize_6.jpg\",\"model\":\"Gamis Syar'i Lilla : \",\"Harga\":\"Rp.180.000\"},{\"id\":6,\"gbr\":\"/images/Product2_resize_67.jpg\",\"model\":\"Gaun Pesta Anak-anak : \",\"Harga\":\"Rp.135.000\"},{\"id\":7,\"gbr\":\"/images/Product3_resize_13.jpg\",\"model\":\"Set Pakain Santai Anak Laki-laki : \",\"Harga\":\"Rp.75.000\"},{\"id\":8,\"gbr\":\"/images/Product4_resize_74.jpg\",\"model\":\"Kacamata Anti Radiasi : \",\"Harga\":\"Rp.67.000\"},{\"id\":9,\"gbr\":\"/images/Product6_resize_35.jpg\",\"model\":\"Realme 5 : \",\"Harga\":\"Rp.3.999.000\"},{\"id\":10,\"gbr\":\"/images/Product7_resize_13.jpg\",\"model\":\"Pakaian Bayi Umur 0-3 Bulan : \",\"Harga\":\"Rp.25.000\"},{\"id\":11,\"gbr\":\"/images/Product8.jpg\",\"model\":\"Kaos Classic Pria : \",\"Harga\":\"Rp.75.000\"},{\"id\":12,\"gbr\":\"/images/Product9.jpg\",\"model\":\"Balon Pesta : \",\"Harga\":\"Rp.250/pcs\"},{\"id\":13,\"gbr\":\"/images/Product10.jpg\",\"model\":\"Softcase : \",\"Harga\":\"Rp.20.000\"},{\"id\":14,\"gbr\":\"/images/Product11.jpg\",\"model\":\"Pashmina : \",\"Harga\":\"Rp.35.000\"},{\"id\":15,\"gbr\":\"/images/Product12.jpg\",\"model\":\"Kacamata Fashion : \",\"Harga\":\"Rp.27.000\"},{\"id\":16,\"gbr\":\"/images/Product13.jpg\",\"model\":\"Gamis Brukat : \",\"Harga\":\"Rp.190.000\"},{\"id\":17,\"gbr\":\"/images/Product14.jpg\",\"model\":\"Hijab Syar'i : \",\"Harga\":\"Rp.45.000\"},{\"id\":18,\"gbr\":\"/images/Product15.jpg\",\"model\":\"Kaos Polos Pria : \",\"Harga\":\"Rp.35.000\"},{\"id\":19,\"gbr\":\"/images/Product16.jpg\",\"model\":\"Kemeja Flanel Pria : \",\"Harga\":\"Rp.125.000\"},{\"id\":20,\"gbr\":\"/images/Product17.jpg\",\"model\":\"Kaos Karakter Anak Laki-laki : \",\"Harga\":\"Rp.40.000\"},{\"id\":21,\"gbr\":\"/images/Product18.jpg\",\"model\":\"Baju Tidur Anak-anak :\",\"Harga\":\"Rp.120.000\"},{\"id\":22,\"gbr\":\"/images/Product19.jpg\",\"model\":\"Pita Meteran :\",\"Harga\":\"Rp.1.500/m\"},{\"id\":23,\"gbr\":\"/images/Product20.jpg\",\"model\":\"Tirai Foil : \",\"Harga\":\"Rp.10.000\"},{\"id\":24,\"gbr\":\"/images/Product21.jpg\",\"model\":\"Topi New Stylish : \",\"Harga\":\"Rp.55.000\"},{\"id\":25,\"gbr\":\"/images/Product22.jpg\",\"model\":\"Kacamata Fashion Korean : \",\"Harga\":\"Rp.40.000\"},{\"id\":26,\"gbr\":\"/images/Product23.jpg\",\"model\":\"Realme C3 : \",\"Harga\":\"Rp.2.999.000 : \"},{\"id\":27,\"gbr\":\"/images/Product24.jpg\",\"model\":\"Airpods Universal : \",\"Harga\":\"Rp.140.000\"}]");

/***/ }),

/***/ "Jozs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("G9/G");
var _components_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("G9/G", 1);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const dataku = props => {
  return __jsx("div", {
    className: "container"
  }, __jsx("p", null, props.gbr), __jsx("p", null, props.model), __jsx("p", null, props.Harga));
};

async function getStaticProps(context) {
  let kode = context.prams.kode;
  let data = dataku.find(x => x.id == kode);
  let {
    gbr,
    model,
    Harga
  } = data;
  return {
    props: {
      gbr,
      model,
      Harga
    }
  };
}
async function getStaticPaths() {
  return {
    paths: [{
      params: {
        kode: '1'
      }
    }, {
      params: {
        kode: '2'
      }
    }, {
      params: {
        kode: '3'
      }
    }, {
      params: {
        kode: '4'
      }
    }, {
      params: {
        kode: '5'
      }
    }, {
      params: {
        kode: '6'
      }
    }],
    fallback: false
  };
}
/* harmony default export */ __webpack_exports__["default"] = (dataku);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });