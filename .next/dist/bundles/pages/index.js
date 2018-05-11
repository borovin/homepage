module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Experience/Experience.css":
/***/ (function(module, exports) {

module.exports = {
	"card": "app-Experience__card"
};

/***/ }),

/***/ "./components/Experience/Experience.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experience; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Experience_css__ = __webpack_require__("./components/Experience/Experience.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Experience_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Experience_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui__ = __webpack_require__("material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui__);
var _jsxFileName = "C:\\hub\\homepage\\components\\Experience\\Experience.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Experience =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Experience, _PureComponent);

  function Experience() {
    _classCallCheck(this, Experience);

    return _possibleConstructorReturn(this, (Experience.__proto__ || Object.getPrototypeOf(Experience)).apply(this, arguments));
  }

  _createClass(Experience, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.jobs.map(function (job, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["Card"], {
          key: "job-".concat(i),
          className: __WEBPACK_IMPORTED_MODULE_1__Experience_css___default.a.card,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["CardHeader"], {
          title: job.url ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
            href: job.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }, job.company) : job.company,
          subheader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }, job.dateFrom, " - ", job.dateTo),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["CardContent"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__["Typography"], {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, job.Description)));
      }));
    }
  }]);

  return Experience;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Object.defineProperty(Experience, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    jobs: []
  }
});


/***/ }),

/***/ "./components/ProjectSlider/ProjectSlider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\hub\\homepage\\components\\ProjectSlider\\ProjectSlider.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ProjectSlider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProjectSlider, _PureComponent);

  function ProjectSlider() {
    _classCallCheck(this, ProjectSlider);

    return _possibleConstructorReturn(this, (ProjectSlider.__proto__ || Object.getPrototypeOf(ProjectSlider)).apply(this, arguments));
  }

  _createClass(ProjectSlider, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider__mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.project.items.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: "item-".concat(i),
          className: "slider__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: "slider__itemLink",
          target: "_blank",
          "data-navigate": "0",
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          alt: "#",
          src: item.screenUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        })));
      })));
    }
  }]);

  return ProjectSlider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Object.defineProperty(ProjectSlider, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    project: {}
  }
});


/***/ }),

/***/ "./components/Resume/Resume.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resume; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui__ = __webpack_require__("material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui__);
var _jsxFileName = "C:\\hub\\homepage\\components\\Resume\\Resume.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Resume =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Resume, _PureComponent);

  function Resume() {
    _classCallCheck(this, Resume);

    return _possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).apply(this, arguments));
  }

  _createClass(Resume, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["CardHeader"], {
        title: "Professional knowledge and skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["CardContent"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui__["Typography"], {
        component: "p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "HTML5/CSS3 - coding with ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://en.bem.info/method/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "BEM methodology"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), "Strong knowledge of Javascript: native, HTML5-API, Javascript frameworks (BackboneJS, ReactJS), Javascript OOP, AMD/ES6 modules (RequireJS, BabelJS), JS-templates (EJS, Handlebars), WebSockets, Local Storage, CORS.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), "Unit-testing: Jest, Jasmine, Karma, Code coverage (Istanbul)", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), "Acceptance-testing: Selenium, CodeceptJS, WebdriverIO, CasperJs", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), "Front-end optimization, code refactoring. Working with GIT (Gitflow). Working with Continuous Static Analysis (", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://codacy.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "codacy"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://codeclimate.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "codeclimate"), ") and Continuous Integration tools (", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.jetbrains.com/teamcity/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "teamcity"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://circleci.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "circleci"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://travis-ci.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Travis CI"), ") Experience in UX and UI design (", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "http://www.google.com/design/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Material Design"), "). Certified Scrum-Master.")));
    }
  }]);

  return Resume;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_jobs__ = __webpack_require__("./resources/jobs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_projects__ = __webpack_require__("./resources/projects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProjectSlider_ProjectSlider__ = __webpack_require__("./components/ProjectSlider/ProjectSlider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Resume_Resume__ = __webpack_require__("./components/Resume/Resume.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Experience_Experience__ = __webpack_require__("./components/Experience/Experience.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui__ = __webpack_require__("material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_LocationOn__ = __webpack_require__("material-ui-icons/LocationOn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_LocationOn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_LocationOn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Work__ = __webpack_require__("material-ui-icons/Work");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Work___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Work__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Email__ = __webpack_require__("material-ui-icons/Email");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Email___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Email__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Phone__ = __webpack_require__("material-ui-icons/Phone");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Phone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Phone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Public__ = __webpack_require__("material-ui-icons/Public");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Public___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Public__);
var _jsxFileName = "C:\\hub\\homepage\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var MainPage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MainPage, _PureComponent);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
  }

  _createClass(MainPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui__["Typography"], {
        variant: "display2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Andrew Borovin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/img/ava2.jpg",
        alt: "\u0410\u043D\u0434\u0440\u0435\u0439 \u0411\u043E\u0440\u043E\u0432\u0438\u043D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_LocationOn___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Saint-Petersburg")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Work___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Front-end developer")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Phone___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoText",
        locator: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "+7-921-890-2868")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Email___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto:a@borovin.com",
        "data-navigate": "0",
        locator: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "a@borovin.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Public___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "resume__infoText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        locator: "githubLink",
        target: "_blank",
        "data-navigate": "0",
        href: "https://github.com/borovin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "github.com/borovin"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui__["Divider"], {
        style: {
          margin: '40px 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Experience_Experience__["a" /* default */], {
        jobs: __WEBPACK_IMPORTED_MODULE_1__resources_jobs__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui__["Divider"], {
        style: {
          marginBottom: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Resume_Resume__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page__content page__content_projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "page__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "page__headerTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Projects")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noindex", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_2__resources_projects__["a" /* default */].map(function (project, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: "project-".concat(i),
          className: "portfolio__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          className: "portfolio__itemTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, project.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ProjectSlider_ProjectSlider__["a" /* default */], {
          project: project,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }));
      })))));
    }
  }]);

  return MainPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);



/***/ }),

/***/ "./resources/jobs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\hub\\homepage\\resources\\jobs.js";


var ReltioJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  }
}, "Working on UI services for MDM (Master Data Management) system (Single Page Application, ReactJS, ES6, NodeJS). ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  }
}), "Integration with REST API and metadata configuration. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  }
}), "Implementing SSO (Single Sign On) flow for all internal services (OAuth2, NodeJS auth-middleware) ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}), "Contributing to the cross-project UI kit and NodeJS libraries. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}), "Working on UI localization workflow and internal localization tools ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  }
}), "Unit and integration testing (Jest, CodeceptJS). ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  }
}), "Participating in process management as kanban-master.");
var CrystalsJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}, "Development of front-end automation system for retail trade (Single Page Application, Backbone).", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  }
}), "Working with RESTful API. The introduction of modular architecture (AMD, BEM, Requirejs, Bower). ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}), "Unit-testing (Jasmine, Karma, Code-coverage). ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
}), "Working with CI-server (Teamcity). ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  }
}), "Using Agile methodology (Scrum)");
var AISJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  }
}, "Develop multi window online terminal for currency exchange (Single Page Application, WebSockets).", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  }
}), "Working with exchange server via WebSockets (SocketIO).", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
}), "Templating and rendering highly dynamic data on the client side (KnockoutJS, CanJS).", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  }
}), "The modular architecture design (BEM, RequireJS).");
var YandexMoneyJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  }
}, "Html-coding, refactoring", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  }
}), "The introduction of the BEM methodology, development of javascript components", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  }
}), "Development of the build system for project", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  }
}), "Participation in the development of the third version of Yandex.Money", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "http://www.artlebedev.ru/everything/yandex/money3/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  }
}, "http://www.artlebedev.ru/everything/yandex/money3/"));
var GeometriaJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  }
}, "Front-end development of new functionality of the media site (photo, video, music)", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  }
}), "Refactoring and optimization of existing code", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  }
}), "Interface design and usability");
var InlineJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  }
}, "Optimization and refactoring of the client part high load Internet services (", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "http://meatinfo.ru/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  }
}, "meatinfo.ru"), ",", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
  href: "http://foodretail.ru/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  }
}, "foodretail.ru"), " and others)", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  }
}), "Development, interface design, html-coding, javascript programming (JQuery, AJAX) and integration (Smarty template engine) of new components and modules.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  }
}), "Close interaction with a team of PHP programmers. Work on AGILE methodology. Work with version control systems (SVN/GIT).");
var DevellabJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  }
}, "HTML-coding, client-side graphics optimization, Development and testing of dynamic features (Animations, AJAX). ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  }
}), "Participation in the design of interfaces in conjunction with the designer. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  }
}), "Working closely with web programmer in integrating client side with popular CMS(Drupal, Bitrix, ModX) and other solutions on PHP, JSP.");
var SpbAllianceJobDescription = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  }
}, "Cross-browser(ie6+, FF2+, Opera9+), valid coding based on .psd-layouts. Close interactions with php programmer, flash developer and designer.");
var jobs = [{
  title: 'Senior Front-end Developer',
  company: 'Reltio',
  url: 'http://www.reltio.com/',
  dateFrom: '01.07.2015',
  dateTo: 'current time',
  Description: ReltioJobDescription
}, {
  title: 'Senior Front-end Developer',
  company: 'Crystal Services',
  url: 'http://www.crystals.ru/',
  dateFrom: '19.04.2013',
  dateTo: '18.12.2014',
  Description: CrystalsJobDescription
}, {
  title: 'Senior Front-end Developer',
  company: 'AIS Group',
  url: 'http://aintsysgroup.com/',
  dateFrom: '15.03.2012',
  dateTo: '18.04.2013',
  Description: AISJobDescription
}, {
  title: 'Front-end Developer',
  company: 'Yandex.Money',
  url: 'https://money.yandex.ru/',
  dateFrom: '25.07.2011',
  dateTo: '14.03.2012',
  Description: YandexMoneyJobDescription
}, {
  title: 'Front-end Developer',
  company: 'Geometria.ru',
  url: 'http://geometria.ru/',
  dateFrom: '17.02.2010',
  dateTo: '18.07.2011',
  Description: GeometriaJobDescription
}, {
  title: 'Front-end Developer',
  company: 'Inline',
  url: 'http://inline-ltd.ru/',
  dateFrom: '01.07.2009',
  dateTo: '16.02.2010',
  Description: InlineJobDescription
}, {
  title: 'Html-coder',
  company: 'Devellab',
  url: 'http://devellab.ru/',
  dateFrom: '01.02.2009',
  dateTo: '01.07.2010',
  Description: DevellabJobDescription
}, {
  title: 'Html-coder',
  company: 'SpbAlliance',
  dateFrom: '01.03.2008',
  dateTo: '01.02.2009',
  Description: SpbAllianceJobDescription
}];
/* harmony default export */ __webpack_exports__["a"] = (jobs);

/***/ }),

/***/ "./resources/projects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var projects = [{
  name: 'dorproject',
  title: '"Dorproject" working group',
  items: [{
    url: 'https://borovin.github.io/dorproject/build/index.html',
    screenUrl: 'https://borovin.github.io/dorproject/screenshots/index.jpg'
  }, {
    url: 'https://borovin.github.io/dorproject/build/main.html',
    screenUrl: 'https://borovin.github.io/dorproject/screenshots/main.jpg'
  }]
}, {
  name: 'arsenal',
  title: 'Training center "Arsenal"',
  items: [{
    url: 'https://borovin.github.io/arsenal/build/index.html',
    screenUrl: 'https://borovin.github.io/arsenal/screenshots/index.jpg'
  }]
}, {
  name: 'ariaf',
  title: 'Restaurant "Ariaf"',
  items: [{
    url: 'https://borovin.github.io/ariaf/build/index.html',
    screenUrl: 'https://borovin.github.io/ariaf/screenshots/1.png'
  }]
}, {
  name: 'aflowt',
  title: '"Aflowt" working group',
  items: [{
    url: 'https://borovin.github.io/aflowt/build/index.html',
    screenUrl: 'https://borovin.github.io/aflowt/screenshots/1.png'
  }, {
    url: 'https://borovin.github.io/aflowt/build/about.html',
    screenUrl: 'https://borovin.github.io/aflowt/screenshots/2.png'
  }, {
    url: 'https://borovin.github.io/aflowt/build/catalog.html',
    screenUrl: 'https://borovin.github.io/aflowt/screenshots/3.png'
  }, {
    url: 'https://borovin.github.io/aflowt/build/details.html',
    screenUrl: 'https://borovin.github.io/aflowt/screenshots/4.png'
  }]
}, {
  name: 'marva2',
  title: 'Live-chat service "Marva"',
  items: [{
    url: '/static/projects/marva2/about.html',
    screenUrl: '/static/portfolio/marva2/1.jpg'
  }, {
    url: '/static/projects/marva2/clients.html',
    screenUrl: '/static/portfolio/marva2/2.jpg'
  }, {
    url: '/static/projects/marva2/features.html',
    screenUrl: '/static/portfolio/marva2/3.jpg'
  }, {
    url: '/static/projects/marva2/index.html',
    screenUrl: '/static/portfolio/marva2/4.jpg'
  }, {
    url: '/static/projects/marva2/partners.html',
    screenUrl: '/static/portfolio/marva2/5.jpg'
  }, {
    url: '/static/projects/marva2/product_table.html',
    screenUrl: '/static/portfolio/marva2/6.jpg'
  }, {
    url: '/static/projects/marva2/trial.html',
    screenUrl: '/static/portfolio/marva2/7.jpg'
  }]
}, {
  name: 'dominanta',
  title: 'Advertising agency "Dominanta"',
  items: [{
    url: '/static/projects/dominanta/address.html',
    screenUrl: '/static/portfolio/dominanta/1.jpg'
  }, {
    url: '/static/projects/dominanta/address.html',
    screenUrl: '/static/portfolio/dominanta/2.jpg'
  }, {
    url: '/static/projects/dominanta/indexday.html',
    screenUrl: '/static/portfolio/dominanta/3.jpg'
  }, {
    url: '/static/projects/dominanta/indexnight.html',
    screenUrl: '/static/portfolio/dominanta/4.jpg'
  }]
}, {
  name: 'oyster',
  title: 'Internet provider "Oyster"',
  items: [{
    url: '/static/projects/oyster/index.html',
    screenUrl: '/static/portfolio/oyster/1.jpg'
  }, {
    url: '/static/projects/oyster/inside.html',
    screenUrl: '/static/portfolio/oyster/2.jpg'
  }]
}, {
  name: 'vzlet',
  title: '"Aflowt" support service',
  items: [{
    url: '/static/projects/vzlet/index.html',
    screenUrl: '/static/portfolio/vzlet/1.jpg'
  }, {
    url: '/static/projects/vzlet/registration.html',
    screenUrl: '/static/portfolio/vzlet/2.jpg'
  }, {
    url: '/static/projects/vzlet/moderation.html',
    screenUrl: '/static/portfolio/vzlet/3.jpg'
  }, {
    url: '/static/projects/vzlet/podbor.html',
    screenUrl: '/static/portfolio/vzlet/4.jpg'
  }, {
    url: '/static/projects/vzlet/requestList.html',
    screenUrl: '/static/portfolio/vzlet/5.jpg'
  }, {
    url: '/static/projects/vzlet/requestPage.html',
    screenUrl: '/static/portfolio/vzlet/6.jpg'
  }, {
    url: '/static/projects/vzlet/settings.html',
    screenUrl: '/static/portfolio/vzlet/7.jpg'
  }, {
    url: '/static/projects/vzlet/userPage.html',
    screenUrl: '/static/portfolio/vzlet/8.jpg'
  }]
}];
/* harmony default export */ __webpack_exports__["a"] = (projects);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "material-ui":
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),

/***/ "material-ui-icons/Email":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Email");

/***/ }),

/***/ "material-ui-icons/LocationOn":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/LocationOn");

/***/ }),

/***/ "material-ui-icons/Phone":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Phone");

/***/ }),

/***/ "material-ui-icons/Public":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Public");

/***/ }),

/***/ "material-ui-icons/Work":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Work");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map