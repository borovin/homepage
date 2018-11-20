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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// CONCATENATED MODULE: ./resources/jobs.js


var ReltioJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "Working on UI services for MDM (Master Data Management) system (Single Page Application, ReactJS, ES6, NodeJS). ", external__react__default.a.createElement("br", null), "Integration with REST API and metadata configuration. ", external__react__default.a.createElement("br", null), "Implementing SSO (Single Sign On) flow for all internal services (OAuth2, NodeJS auth-middleware) ", external__react__default.a.createElement("br", null), "Contributing to the cross-project UI kit and NodeJS libraries. ", external__react__default.a.createElement("br", null), "Working on UI localization workflow and internal localization tools ", external__react__default.a.createElement("br", null), "Unit and integration testing (Jest, CodeceptJS). ", external__react__default.a.createElement("br", null), "Participating in process management as kanban-master.");
var CrystalsJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "Development of front-end automation system for retail trade (Single Page Application, Backbone).", external__react__default.a.createElement("br", null), "Working with RESTful API. The introduction of modular architecture (AMD, BEM, Requirejs, Bower). ", external__react__default.a.createElement("br", null), "Unit-testing (Jasmine, Karma, Code-coverage). ", external__react__default.a.createElement("br", null), "Working with CI-server (Teamcity). ", external__react__default.a.createElement("br", null), "Using Agile methodology (Scrum)");
var AISJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "Develop multi window online terminal for currency exchange (Single Page Application, WebSockets).", external__react__default.a.createElement("br", null), "Working with exchange server via WebSockets (SocketIO).", external__react__default.a.createElement("br", null), "Templating and rendering highly dynamic data on the client side (KnockoutJS, CanJS).", external__react__default.a.createElement("br", null), "The modular architecture design (BEM, RequireJS).");
var YandexMoneyJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "Html-coding, refactoring", external__react__default.a.createElement("br", null), "The introduction of the BEM methodology, development of javascript components", external__react__default.a.createElement("br", null), "Development of the build system for project", external__react__default.a.createElement("br", null), "Participation in the development of the third version of Yandex.Money", external__react__default.a.createElement("a", {
  href: "http://www.artlebedev.ru/everything/yandex/money3/",
  target: "_blank"
}, "http://www.artlebedev.ru/everything/yandex/money3/"));
var GeometriaJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "Front-end development of new functionality of the media site (photo, video, music)", external__react__default.a.createElement("br", null), "Refactoring and optimization of existing code", external__react__default.a.createElement("br", null), "Interface design and usability");
var InlineJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "Optimization and refactoring of the client part high load Internet services (", external__react__default.a.createElement("a", {
  href: "http://meatinfo.ru/",
  target: "_blank"
}, "meatinfo.ru"), ",", external__react__default.a.createElement("a", {
  href: "http://foodretail.ru/",
  target: "_blank"
}, "foodretail.ru"), " and others)", external__react__default.a.createElement("br", null), "Development, interface design, html-coding, javascript programming (JQuery, AJAX) and integration (Smarty template engine) of new components and modules.", external__react__default.a.createElement("br", null), "Close interaction with a team of PHP programmers. Work on AGILE methodology. Work with version control systems (SVN/GIT).");
var DevellabJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "HTML-coding, client-side graphics optimization, Development and testing of dynamic features (Animations, AJAX). ", external__react__default.a.createElement("br", null), "Participation in the design of interfaces in conjunction with the designer. ", external__react__default.a.createElement("br", null), "Working closely with web programmer in integrating client side with popular CMS(Drupal, Bitrix, ModX) and other solutions on PHP, JSP.");
var SpbAllianceJobDescription = external__react__default.a.createElement(external__react_["Fragment"], null, "Cross-browser(ie6+, FF2+, Opera9+), valid coding based on .psd-layouts. Close interactions with php programmer, flash developer and designer.");
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
/* harmony default export */ var resources_jobs = (jobs);
// CONCATENATED MODULE: ./resources/projects.js
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
/* harmony default export */ var resources_projects = (projects);
// CONCATENATED MODULE: ./components/ProjectSlider/ProjectSlider.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ProjectSlider_ProjectSlider =
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
      return external__react__default.a.createElement("div", {
        className: "slider"
      }, external__react__default.a.createElement("div", {
        className: "slider__mask"
      }, this.props.project.items.map(function (item, i) {
        return external__react__default.a.createElement("div", {
          key: "item-".concat(i),
          className: "slider__item"
        }, external__react__default.a.createElement("a", {
          className: "slider__itemLink",
          target: "_blank",
          "data-navigate": "0",
          href: item.url
        }, external__react__default.a.createElement("img", {
          alt: "#",
          src: item.screenUrl
        })));
      })));
    }
  }]);

  return ProjectSlider;
}(external__react_["PureComponent"]);

Object.defineProperty(ProjectSlider_ProjectSlider, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    project: {}
  }
});

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// CONCATENATED MODULE: ./components/Resume/Resume.js


function Resume__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Resume__typeof = function _typeof(obj) { return typeof obj; }; } else { Resume__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Resume__typeof(obj); }

function Resume__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Resume__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Resume__createClass(Constructor, protoProps, staticProps) { if (protoProps) Resume__defineProperties(Constructor.prototype, protoProps); if (staticProps) Resume__defineProperties(Constructor, staticProps); return Constructor; }

function Resume__possibleConstructorReturn(self, call) { if (call && (Resume__typeof(call) === "object" || typeof call === "function")) { return call; } return Resume__assertThisInitialized(self); }

function Resume__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Resume__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Resume_Resume =
/*#__PURE__*/
function (_PureComponent) {
  Resume__inherits(Resume, _PureComponent);

  function Resume() {
    Resume__classCallCheck(this, Resume);

    return Resume__possibleConstructorReturn(this, (Resume.__proto__ || Object.getPrototypeOf(Resume)).apply(this, arguments));
  }

  Resume__createClass(Resume, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement(core_["Typography"], {
        variant: "title",
        style: {
          paddingBottom: '20px'
        }
      }, "Professional knowledge and skills"), external__react__default.a.createElement(core_["Typography"], {
        component: "p"
      }, "HTML5/CSS3 - coding with ", external__react__default.a.createElement("a", {
        href: "https://en.bem.info/method/",
        target: "_blank"
      }, "BEM methodology"), external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), "Strong knowledge of Javascript: native, HTML5-API, Javascript frameworks (BackboneJS, ReactJS), Javascript OOP, AMD/ES6 modules (RequireJS, BabelJS), JS-templates (EJS, Handlebars), WebSockets, Local Storage, CORS.", external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), "Unit-testing: Jest, Jasmine, Karma, Code coverage (Istanbul)", external__react__default.a.createElement("br", null), "Acceptance-testing: Selenium, CodeceptJS, WebdriverIO, CasperJs", external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), "Front-end optimization, code refactoring. Working with GIT (Gitflow). Working with Continuous Static Analysis (", external__react__default.a.createElement("a", {
        href: "https://codacy.com/",
        target: "_blank"
      }, "codacy"), ",", external__react__default.a.createElement("a", {
        href: "https://codeclimate.com/",
        target: "_blank"
      }, "codeclimate"), ") and Continuous Integration tools (", external__react__default.a.createElement("a", {
        href: "https://www.jetbrains.com/teamcity/",
        target: "_blank"
      }, "teamcity"), ",", external__react__default.a.createElement("a", {
        href: "https://circleci.com/",
        target: "_blank"
      }, "circleci"), ",", external__react__default.a.createElement("a", {
        href: "https://travis-ci.org/",
        target: "_blank"
      }, "Travis CI"), ") Experience in UX and UI design (", external__react__default.a.createElement("a", {
        href: "http://www.google.com/design/",
        target: "_blank"
      }, "Material Design"), "). Certified Scrum-Master."));
    }
  }]);

  return Resume;
}(external__react_["PureComponent"]);


// EXTERNAL MODULE: ./components/Experience/Experience.css
var Experience_Experience = __webpack_require__(7);
var Experience_default = /*#__PURE__*/__webpack_require__.n(Experience_Experience);

// CONCATENATED MODULE: ./components/Experience/Experience.js


function Experience__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Experience__typeof = function _typeof(obj) { return typeof obj; }; } else { Experience__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Experience__typeof(obj); }

function Experience__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Experience__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Experience__createClass(Constructor, protoProps, staticProps) { if (protoProps) Experience__defineProperties(Constructor.prototype, protoProps); if (staticProps) Experience__defineProperties(Constructor, staticProps); return Constructor; }

function Experience__possibleConstructorReturn(self, call) { if (call && (Experience__typeof(call) === "object" || typeof call === "function")) { return call; } return Experience__assertThisInitialized(self); }

function Experience__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Experience__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Experience_Experience_Experience =
/*#__PURE__*/
function (_PureComponent) {
  Experience__inherits(Experience, _PureComponent);

  function Experience() {
    Experience__classCallCheck(this, Experience);

    return Experience__possibleConstructorReturn(this, (Experience.__proto__ || Object.getPrototypeOf(Experience)).apply(this, arguments));
  }

  Experience__createClass(Experience, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__react_["Fragment"], null, this.props.jobs.map(function (job, i) {
        return external__react__default.a.createElement(external__react_["Fragment"], {
          key: job.company
        }, external__react__default.a.createElement(core_["Typography"], {
          variant: "title",
          style: {
            paddingBottom: '8px'
          }
        }, job.url ? external__react__default.a.createElement("a", {
          href: job.url
        }, job.company) : job.company), external__react__default.a.createElement(core_["Typography"], {
          variant: "caption",
          style: {
            paddingBottom: '20px'
          }
        }, job.dateFrom, " - ", job.dateTo), external__react__default.a.createElement(core_["Typography"], {
          component: "p"
        }, job.Description), external__react__default.a.createElement(core_["Divider"], {
          style: {
            margin: '40px 0'
          }
        }));
      }));
    }
  }]);

  return Experience;
}(external__react_["PureComponent"]);

Object.defineProperty(Experience_Experience_Experience, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    jobs: []
  }
});

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__(8);
var LocationOn__default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: external "@material-ui/icons/Work"
var Work_ = __webpack_require__(9);
var Work__default = /*#__PURE__*/__webpack_require__.n(Work_);

// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__(10);
var Email__default = /*#__PURE__*/__webpack_require__.n(Email_);

// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__(11);
var Phone__default = /*#__PURE__*/__webpack_require__.n(Phone_);

// EXTERNAL MODULE: external "@material-ui/icons/Public"
var Public_ = __webpack_require__(12);
var Public__default = /*#__PURE__*/__webpack_require__.n(Public_);

// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_MainPage; });
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var pages_MainPage =
/*#__PURE__*/
function (_PureComponent) {
  pages__inherits(MainPage, _PureComponent);

  function MainPage() {
    pages__classCallCheck(this, MainPage);

    return pages__possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
  }

  pages__createClass(MainPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        id: "page"
      }, external__react__default.a.createElement("div", {
        className: "page__content"
      }, external__react__default.a.createElement(core_["Typography"], {
        variant: "display1"
      }, "Andrew Borovin"), external__react__default.a.createElement("div", {
        className: "resume"
      }, external__react__default.a.createElement("div", {
        className: "resume__top"
      }, external__react__default.a.createElement("div", {
        className: "resume__photo"
      }, external__react__default.a.createElement("img", {
        src: "/static/img/ava3.jpg",
        alt: "\u0410\u043D\u0434\u0440\u0435\u0439 \u0411\u043E\u0440\u043E\u0432\u0438\u043D"
      })), external__react__default.a.createElement("div", {
        className: "resume__info"
      }, external__react__default.a.createElement("div", {
        className: "resume__infoRow"
      }, external__react__default.a.createElement("div", {
        className: "resume__infoTitle"
      }, external__react__default.a.createElement(LocationOn__default.a, null)), external__react__default.a.createElement("div", {
        className: "resume__infoText"
      }, "Saint-Petersburg")), external__react__default.a.createElement("div", {
        className: "resume__infoRow"
      }, external__react__default.a.createElement("div", {
        className: "resume__infoTitle"
      }, external__react__default.a.createElement(Work__default.a, null)), external__react__default.a.createElement("div", {
        className: "resume__infoText"
      }, "Front-end developer")), external__react__default.a.createElement("div", {
        className: "resume__infoRow"
      }, external__react__default.a.createElement("div", {
        className: "resume__infoTitle"
      }, external__react__default.a.createElement(Phone__default.a, null)), external__react__default.a.createElement("div", {
        className: "resume__infoText",
        locator: "phone"
      }, "+7-921-890-2868")), external__react__default.a.createElement("div", {
        className: "resume__infoRow"
      }, external__react__default.a.createElement("div", {
        className: "resume__infoTitle"
      }, external__react__default.a.createElement(Email__default.a, null)), external__react__default.a.createElement("div", {
        className: "resume__infoText"
      }, external__react__default.a.createElement("a", {
        href: "mailto:a@borovin.com",
        "data-navigate": "0",
        locator: "email"
      }, "a@borovin.com"))), external__react__default.a.createElement("div", {
        className: "resume__infoRow"
      }, external__react__default.a.createElement("div", {
        className: "resume__infoTitle"
      }, external__react__default.a.createElement(Public__default.a, null)), external__react__default.a.createElement("div", {
        className: "resume__infoText"
      }, external__react__default.a.createElement("a", {
        locator: "githubLink",
        target: "_blank",
        "data-navigate": "0",
        href: "https://github.com/borovin"
      }, "github.com/borovin"))))), external__react__default.a.createElement(core_["Divider"], {
        style: {
          margin: '40px 0'
        }
      }), external__react__default.a.createElement(Experience_Experience_Experience, {
        jobs: resources_jobs
      }), external__react__default.a.createElement(Resume_Resume, null))), external__react__default.a.createElement("div", {
        className: "page__content page__content_projects"
      }, external__react__default.a.createElement("div", {
        className: "page__header"
      }, external__react__default.a.createElement(core_["Typography"], {
        variant: "display1"
      }, "Projects")), external__react__default.a.createElement("noindex", null, external__react__default.a.createElement("div", {
        className: "portfolio"
      }, resources_projects.map(function (project, i) {
        return external__react__default.a.createElement("div", {
          key: "project-".concat(i),
          className: "portfolio__item"
        }, external__react__default.a.createElement(core_["Typography"], {
          variant: "title",
          style: {
            paddingBottom: '20px'
          }
        }, project.title), external__react__default.a.createElement(ProjectSlider_ProjectSlider, {
          project: project
        }));
      })))));
    }
  }]);

  return MainPage;
}(external__react_["PureComponent"]);



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"card": "app-Experience__card"
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Work");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Public");

/***/ })
/******/ ]);