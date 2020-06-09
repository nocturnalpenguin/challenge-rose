/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app.scss":
/*!**************************!*\
  !*** ./src/css/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/CanvasBase.js":
/*!******************************!*\
  !*** ./src/js/CanvasBase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasBase; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CanvasBase = /*#__PURE__*/function () {
  function CanvasBase() {
    _classCallCheck(this, CanvasBase);

    this.animationRequest = null;
    this.canvas = document.querySelector('#canvas');
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext('2d');
  }

  _createClass(CanvasBase, [{
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "updateFrame",
    value: function updateFrame(callback) {
      var _this = this;

      callback();
      this.animationRequest = requestAnimationFrame(function () {
        return _this.updateFrame(callback);
      });
    }
  }, {
    key: "stopFrameUpdate",
    value: function stopFrameUpdate() {
      if (this.animationRequest) {
        cancelAnimationFrame(this.animationRequest);
      }
    }
  }, {
    key: "toPolarCoordinates",
    value: function toPolarCoordinates(_ref) {
      var x = _ref.x,
          y = _ref.y;
      return {
        x: x + this.canvas.width / 2,
        y: y + this.canvas.height / 2
      };
    }
  }]);

  return CanvasBase;
}();



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasBase */ "./src/js/CanvasBase.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Rose = /*#__PURE__*/function (_CanvasBase) {
  _inherits(Rose, _CanvasBase);

  var _super = _createSuper(Rose);

  function Rose(props) {
    var _this;

    _classCallCheck(this, Rose);

    _this = _super.call(this, props);
    _this.scale = 280;
    _this.n = 6;
    _this.d = 5;
    _this.k = null;
    _this.duration = 5; // seconds

    _this.vertices = [];
    _this.minAngle = 0.002;
    _this.colorOffset = 173;
    return _this;
  }

  _createClass(Rose, [{
    key: "getVertices",
    value: function getVertices() {
      this.k = this.n / this.d;
      this.vertices = [];
      var maxAngle = Math.PI * 2 * this.d;

      for (var angle = 0; angle < maxAngle; angle += this.minAngle) {
        var r = this.scale * Math.cos(this.k * angle);
        var vertex = this.toPolarCoordinates({
          x: r * Math.cos(angle),
          y: r * Math.sin(angle)
        });
        this.vertices.push(vertex);
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.attachControls();
      this.startAnimation();
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this2 = this;

      this.getVertices();
      var iterationsPerFrame = Math.floor(this.vertices.length / (this.duration * 60));
      this.ctx.lineWidth = 2;
      var iteration = 1;
      this.updateFrame(function () {
        if (iteration < _this2.vertices.length) {
          _this2.ctx.beginPath();

          _this2.ctx.moveTo(_this2.vertices[iteration - 1].x, _this2.vertices[iteration - 1].y);

          for (var i = 0; i < iterationsPerFrame; i++) {
            var index = iteration + i;

            if (index < _this2.vertices.length) {
              _this2.ctx.lineTo(_this2.vertices[index].x, _this2.vertices[index].y); // color


              var dx = Math.pow(_this2.canvas.width / 2 - _this2.vertices[index].x, 2);
              var dy = Math.pow(_this2.canvas.height / 2 - _this2.vertices[index].y, 2);

              var distanceFromCenter = Math.sqrt(dx + dy) + _this2.colorOffset;

              _this2.ctx.strokeStyle = "hsl(".concat(360 - distanceFromCenter % 361, ", 85%, 60%)");
            }
          }

          _this2.ctx.stroke();

          iteration += iterationsPerFrame;
        } else {
          _this2.stopFrameUpdate();
        }
      });
    }
  }, {
    key: "attachControls",
    value: function attachControls() {
      var _this3 = this;

      var numeratorInput = document.querySelector('#controls input[name="numerator"]');
      var denominatorInput = document.querySelector('#controls input[name="denominator"]');
      var colorOffsetInput = document.querySelector('#controls input[name="color_offset"]');
      var durationInput = document.querySelector('#controls input[name="duration"]');
      numeratorInput.addEventListener('input', this.updateInputValueLabel);
      denominatorInput.addEventListener('input', this.updateInputValueLabel);
      colorOffsetInput.addEventListener('input', this.updateInputValueLabel);
      durationInput.addEventListener('input', this.updateInputValueLabel);
      numeratorInput.addEventListener('change', function (e) {
        return _this3.controlListener(e, 'n');
      });
      denominatorInput.addEventListener('change', function (e) {
        return _this3.controlListener(e, 'd');
      });
      colorOffsetInput.addEventListener('change', function (e) {
        return _this3.controlListener(e, 'colorOffset');
      });
      durationInput.addEventListener('change', function (e) {
        return _this3.controlListener(e, 'duration');
      });
    }
  }, {
    key: "controlListener",
    value: function controlListener(e, property) {
      this.stopFrameUpdate();
      this.clearCanvas();
      this[property] = Number(e.target.value);
      this.startAnimation();
    }
  }, {
    key: "updateInputValueLabel",
    value: function updateInputValueLabel(e) {
      e.target.parentElement.parentElement.querySelector('td small').innerText = e.target.value;
    }
  }]);

  return Rose;
}(_CanvasBase__WEBPACK_IMPORTED_MODULE_0__["default"]); // initialize


var rose = new Rose();
rose.init();

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/js/app.js ./src/css/app.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nikmax/code/challenges/rose/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/nikmax/code/challenges/rose/src/css/app.scss */"./src/css/app.scss");


/***/ })

/******/ });