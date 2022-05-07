/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_dotdotdot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery.dotdotdot */ "./node_modules/jquery.dotdotdot/dist/jquery.dotdotdot.js");
/* harmony import */ var jquery_dotdotdot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dotdotdot__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remodal */ "./node_modules/remodal/dist/remodal.js");
/* harmony import */ var remodal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remodal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/index */ "./src/scripts/modules/index.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./src/scripts/modules/tabs.js");
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/auth */ "./src/scripts/modules/auth.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/accordion */ "./src/scripts/modules/accordion.js");
/* harmony import */ var _modules_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/form-field */ "./src/scripts/modules/form-field.js");
/* harmony import */ var _modules_dotdotdot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/dotdotdot */ "./src/scripts/modules/dotdotdot.js");

window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());









var app = {
  init: function init() {
    (0,_modules_dotdotdot__WEBPACK_IMPORTED_MODULE_9__.default)();
    (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_7__.default)();
    (0,_modules_index__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.default)();
    (0,_modules_auth__WEBPACK_IMPORTED_MODULE_6__.default)();
    (0,_modules_form_field__WEBPACK_IMPORTED_MODULE_8__.default)();
  },
  load: function load() {},
  resize: function resize() {},
  scroll: function scroll() {}
};
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  app.init();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', app.load);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', app.resize);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', app.scroll);
});

/***/ }),

/***/ "./src/scripts/modules/accordion.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/accordion.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ accordion; }
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
var ClassName = {
  ROOT: 'js-accordion',
  ITEM: 'js-accordion-item',
  CONTENT: 'js-accordion-content',
  ACTIVE: 'is-active',
  ANCHOR: 'js-moder-anchor'
};
function accordion() {
  $(document).on('click', ".".concat(ClassName.ITEM), handleItemClick);
  console.log('work');

  function handleItemClick(e) {
    var $item = $(e.currentTarget);

    if ($item.hasClass(ClassName.ACTIVE)) {
      if (!$(e.target).parents(".".concat(ClassName.CONTENT)).length) {
        $item.toggleClass(ClassName.ACTIVE);
      }
    } else {
      $item.toggleClass(ClassName.ACTIVE);
    }
  }
}

/***/ }),

/***/ "./src/scripts/modules/auth.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/auth.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ authSystem; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

var ClassName = {
  ROOT: 'js-auth-modal',
  MODAL: 'js-auth-modal',
  MODAL_CLOSE: 'js-modal-close',
  TRIGGER: 'js-open-auth-modal'
};
function authSystem() {
  var $modalOpenButton = $(".".concat(ClassName.TRIGGER));
  var $modal = $(".".concat(ClassName.MODAL));
  var $modalCloseButton = $modal.find(".".concat(ClassName.MODAL_CLOSE));
  var $modalWindow = $modal.remodal();
  $modalOpenButton.on('click', handleTriggerClick);
  $modalCloseButton.on('click', handleCloseButtonClick);

  function handleCloseButtonClick() {
    closeModal();
  }

  function handleTriggerClick() {
    openModal();
  }

  function openModal() {
    $modalWindow.open();
  }

  function closeModal() {
    $modalWindow.close(function (e) {
      e.preventDefault();
    });
  }
}

/***/ }),

/***/ "./src/scripts/modules/dotdotdot.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/dotdotdot.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var jquery_dotdotdot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery.dotdotdot */ "./node_modules/jquery.dotdotdot/dist/jquery.dotdotdot.js");
/* harmony import */ var jquery_dotdotdot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dotdotdot__WEBPACK_IMPORTED_MODULE_0__);
// eslint-disable-next-line no-unused-vars

var ELEMENTS_SELECTOR = {
  truncateBox: '[data-truncate]'
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $(ELEMENTS_SELECTOR.truncateBox).each(function () {
    var $truncateBox = $(this);
    $truncateBox.dotdotdot({
      watch: 'window',
      fallbackToLetter: true,
      truncate: 'word'
    });
  });
}

/***/ }),

/***/ "./src/scripts/modules/form-field.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/form-field.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ initializeFormFields; },
/* harmony export */   "initializeFormField": function() { return /* binding */ initializeFormField; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

var CLEAR_BTN_TEMPLATE = "\n<button type=\"button\" class=\"form-field__clear-button js-form-field-clear-button\">\n        <svg class=\"form-field__clear-icon icon\">\n            <use xlink:href=\"/static/icons/sprite.svg#clearInput\"></use>\n        </svg>\n</button>";
var ClassName = {
  ROOT: 'js-form-field',
  INPUT: 'js-form-field-input',
  ACTIVE: 'is-active',
  CLEAR_BTN: 'js-form-field-clear-button',
  WITHOUT_CLEAR: 'js-without-clear-btn'
};
function initializeFormFields() {
  var $elements = $(".".concat(ClassName.ROOT));
  $elements.each(function (index, elem) {
    initializeFormField(elem);
  });
}
function initializeFormField(elem) {
  var $element = $(elem);
  var $input = $element.find(".".concat(ClassName.INPUT));
  var $clearBtn;
  $element.on('focusin', handleFocusIn);
  $element.on('focusout', handleFocusOut);
  $input.on('input', handleInput);

  if (!isEmptyInput($input)) {
    showClearBtn();
  }

  function isEmptyInput($input) {
    return !$input.val();
  }

  function isInput($element) {
    return $element.hasClass(ClassName.INPUT);
  }

  function activate($field) {
    $field.addClass(ClassName.ACTIVE);
  }

  function deactivate($field) {
    $field.removeClass(ClassName.ACTIVE);
  }

  function createClearBtn() {
    var $btn = $(CLEAR_BTN_TEMPLATE);
    $btn.one('click', handleClick);
    return $btn;
  }

  function hideClearBtn() {
    if ($clearBtn !== undefined) {
      $clearBtn.remove();
    }
  }

  function showClearBtn() {
    if ($clearBtn !== undefined) {
      hideClearBtn();
    }

    if (!$input.hasClass(ClassName.WITHOUT_CLEAR)) {
      $clearBtn = createClearBtn();
      $input.parent().append($clearBtn);
    }
  }

  function clearInput() {
    $input.val('');
  }

  function handleFocusIn(_ref) {
    var target = _ref.target;
    var $target = $(target);
    var $closestRoot = $target.closest(".".concat(ClassName.ROOT));
    activate($closestRoot);
  }

  function handleFocusOut(_ref2) {
    var target = _ref2.target;
    var $target = $(target);
    var $closestRoot = $target.closest(".".concat(ClassName.ROOT));
    if (!isInput($target)) return;
    if (!isEmptyInput($target)) return;
    deactivate($closestRoot);
  }

  function handleInput(_ref3) {
    var target = _ref3.target;
    var $target = $(target);

    if (isEmptyInput($target)) {
      hideClearBtn($clearBtn);
    } else {
      showClearBtn($clearBtn);
    }
  }

  function handleClick(_ref4) {
    var target = _ref4.target;
    clearInput();
    deactivate($element);
    hideClearBtn($clearBtn);
  }
}

/***/ }),

/***/ "./src/scripts/modules/index.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function index() {
  console.log('2hey');
}

/***/ }),

/***/ "./src/scripts/modules/tabs.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/tabs.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dotdotdot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dotdotdot */ "./src/scripts/modules/dotdotdot.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tabs__items').on('click', '.tabs__item:not(.tabs__item.is-active):not(.tabs__item.is-disabled)', function (event) {
    event.preventDefault();
    var tab = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('tab');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('is-active').siblings().removeClass('is-active').closest('.tabs').find('.tabs__block[data-tab="' + tab + '"]').addClass('is-active').siblings().removeClass('is-active');
    (0,_dotdotdot__WEBPACK_IMPORTED_MODULE_2__.default)();
  });
}

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_core-js_modules_es_array_find_js-node_modules_jquery_dotdotdot_dist_jque-eb2adf"], function() { return __webpack_require__("./src/scripts/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FFaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2F1dGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9kb3Rkb3Rkb3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9mb3JtLWZpZWxkLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy90YWJzLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LiQgPSAkO1xud2luZG93LmpRdWVyeSA9ICQ7XG5pbXBvcnQgJ2pxdWVyeS5kb3Rkb3Rkb3QnO1xuaW1wb3J0ICdyZW1vZGFsJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vbW9kdWxlcy9pbmRleCc7XG5pbXBvcnQgdGFicyBmcm9tICcuL21vZHVsZXMvdGFicyc7XG5pbXBvcnQgYXV0aFN5c3RlbSBmcm9tICcuL21vZHVsZXMvYXV0aCc7XG5pbXBvcnQgYWNjb3JkaW9uIGZyb20gJy4vbW9kdWxlcy9hY2NvcmRpb24nO1xuaW1wb3J0IGZvcm1GaWVsZCBmcm9tICcuL21vZHVsZXMvZm9ybS1maWVsZCc7XG5pbXBvcnQgZG90ZG90ZG90IGZyb20gXCIuL21vZHVsZXMvZG90ZG90ZG90XCI7XG52YXIgYXBwID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIGRvdGRvdGRvdCgpO1xuICAgIGFjY29yZGlvbigpO1xuICAgIGluZGV4KCk7XG4gICAgdGFicygpO1xuICAgIGF1dGhTeXN0ZW0oKTtcbiAgICBmb3JtRmllbGQoKTtcbiAgfSxcbiAgbG9hZDogZnVuY3Rpb24gbG9hZCgpIHt9LFxuICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHt9LFxuICBzY3JvbGw6IGZ1bmN0aW9uIHNjcm9sbCgpIHt9XG59O1xuJChmdW5jdGlvbiAoKSB7XG4gIGFwcC5pbml0KCk7XG4gICQod2luZG93KS5vbignbG9hZCcsIGFwcC5sb2FkKTtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBhcHAucmVzaXplKTtcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBhcHAuc2Nyb2xsKTtcbn0pOyIsInZhciBDbGFzc05hbWUgPSB7XG4gIFJPT1Q6ICdqcy1hY2NvcmRpb24nLFxuICBJVEVNOiAnanMtYWNjb3JkaW9uLWl0ZW0nLFxuICBDT05URU5UOiAnanMtYWNjb3JkaW9uLWNvbnRlbnQnLFxuICBBQ1RJVkU6ICdpcy1hY3RpdmUnLFxuICBBTkNIT1I6ICdqcy1tb2Rlci1hbmNob3InXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWNjb3JkaW9uKCkge1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBcIi5cIi5jb25jYXQoQ2xhc3NOYW1lLklURU0pLCBoYW5kbGVJdGVtQ2xpY2spO1xuICBjb25zb2xlLmxvZygnd29yaycpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUl0ZW1DbGljayhlKSB7XG4gICAgdmFyICRpdGVtID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgaWYgKCRpdGVtLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICBpZiAoISQoZS50YXJnZXQpLnBhcmVudHMoXCIuXCIuY29uY2F0KENsYXNzTmFtZS5DT05URU5UKSkubGVuZ3RoKSB7XG4gICAgICAgICRpdGVtLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkaXRlbS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qc1wiO1xudmFyIENsYXNzTmFtZSA9IHtcbiAgUk9PVDogJ2pzLWF1dGgtbW9kYWwnLFxuICBNT0RBTDogJ2pzLWF1dGgtbW9kYWwnLFxuICBNT0RBTF9DTE9TRTogJ2pzLW1vZGFsLWNsb3NlJyxcbiAgVFJJR0dFUjogJ2pzLW9wZW4tYXV0aC1tb2RhbCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoU3lzdGVtKCkge1xuICB2YXIgJG1vZGFsT3BlbkJ1dHRvbiA9ICQoXCIuXCIuY29uY2F0KENsYXNzTmFtZS5UUklHR0VSKSk7XG4gIHZhciAkbW9kYWwgPSAkKFwiLlwiLmNvbmNhdChDbGFzc05hbWUuTU9EQUwpKTtcbiAgdmFyICRtb2RhbENsb3NlQnV0dG9uID0gJG1vZGFsLmZpbmQoXCIuXCIuY29uY2F0KENsYXNzTmFtZS5NT0RBTF9DTE9TRSkpO1xuICB2YXIgJG1vZGFsV2luZG93ID0gJG1vZGFsLnJlbW9kYWwoKTtcbiAgJG1vZGFsT3BlbkJ1dHRvbi5vbignY2xpY2snLCBoYW5kbGVUcmlnZ2VyQ2xpY2spO1xuICAkbW9kYWxDbG9zZUJ1dHRvbi5vbignY2xpY2snLCBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKCkge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRyaWdnZXJDbGljaygpIHtcbiAgICBvcGVuTW9kYWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICAkbW9kYWxXaW5kb3cub3BlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAkbW9kYWxXaW5kb3cuY2xvc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxufSIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IGRvdGRvdGRvdCBmcm9tICdqcXVlcnkuZG90ZG90ZG90JztcbnZhciBFTEVNRU5UU19TRUxFQ1RPUiA9IHtcbiAgdHJ1bmNhdGVCb3g6ICdbZGF0YS10cnVuY2F0ZV0nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAkKEVMRU1FTlRTX1NFTEVDVE9SLnRydW5jYXRlQm94KS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRydW5jYXRlQm94ID0gJCh0aGlzKTtcbiAgICAkdHJ1bmNhdGVCb3guZG90ZG90ZG90KHtcbiAgICAgIHdhdGNoOiAnd2luZG93JyxcbiAgICAgIGZhbGxiYWNrVG9MZXR0ZXI6IHRydWUsXG4gICAgICB0cnVuY2F0ZTogJ3dvcmQnXG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzXCI7XG52YXIgQ0xFQVJfQlROX1RFTVBMQVRFID0gXCJcXG48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImZvcm0tZmllbGRfX2NsZWFyLWJ1dHRvbiBqcy1mb3JtLWZpZWxkLWNsZWFyLWJ1dHRvblxcXCI+XFxuICAgICAgICA8c3ZnIGNsYXNzPVxcXCJmb3JtLWZpZWxkX19jbGVhci1pY29uIGljb25cXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiL3N0YXRpYy9pY29ucy9zcHJpdGUuc3ZnI2NsZWFySW5wdXRcXFwiPjwvdXNlPlxcbiAgICAgICAgPC9zdmc+XFxuPC9idXR0b24+XCI7XG52YXIgQ2xhc3NOYW1lID0ge1xuICBST09UOiAnanMtZm9ybS1maWVsZCcsXG4gIElOUFVUOiAnanMtZm9ybS1maWVsZC1pbnB1dCcsXG4gIEFDVElWRTogJ2lzLWFjdGl2ZScsXG4gIENMRUFSX0JUTjogJ2pzLWZvcm0tZmllbGQtY2xlYXItYnV0dG9uJyxcbiAgV0lUSE9VVF9DTEVBUjogJ2pzLXdpdGhvdXQtY2xlYXItYnRuJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVGb3JtRmllbGRzKCkge1xuICB2YXIgJGVsZW1lbnRzID0gJChcIi5cIi5jb25jYXQoQ2xhc3NOYW1lLlJPT1QpKTtcbiAgJGVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtKSB7XG4gICAgaW5pdGlhbGl6ZUZvcm1GaWVsZChlbGVtKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUZvcm1GaWVsZChlbGVtKSB7XG4gIHZhciAkZWxlbWVudCA9ICQoZWxlbSk7XG4gIHZhciAkaW5wdXQgPSAkZWxlbWVudC5maW5kKFwiLlwiLmNvbmNhdChDbGFzc05hbWUuSU5QVVQpKTtcbiAgdmFyICRjbGVhckJ0bjtcbiAgJGVsZW1lbnQub24oJ2ZvY3VzaW4nLCBoYW5kbGVGb2N1c0luKTtcbiAgJGVsZW1lbnQub24oJ2ZvY3Vzb3V0JywgaGFuZGxlRm9jdXNPdXQpO1xuICAkaW5wdXQub24oJ2lucHV0JywgaGFuZGxlSW5wdXQpO1xuXG4gIGlmICghaXNFbXB0eUlucHV0KCRpbnB1dCkpIHtcbiAgICBzaG93Q2xlYXJCdG4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRW1wdHlJbnB1dCgkaW5wdXQpIHtcbiAgICByZXR1cm4gISRpbnB1dC52YWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSW5wdXQoJGVsZW1lbnQpIHtcbiAgICByZXR1cm4gJGVsZW1lbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOUFVUKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCRmaWVsZCkge1xuICAgICRmaWVsZC5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUoJGZpZWxkKSB7XG4gICAgJGZpZWxkLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xlYXJCdG4oKSB7XG4gICAgdmFyICRidG4gPSAkKENMRUFSX0JUTl9URU1QTEFURSk7XG4gICAgJGJ0bi5vbmUoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIHJldHVybiAkYnRuO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUNsZWFyQnRuKCkge1xuICAgIGlmICgkY2xlYXJCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgJGNsZWFyQnRuLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDbGVhckJ0bigpIHtcbiAgICBpZiAoJGNsZWFyQnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhpZGVDbGVhckJ0bigpO1xuICAgIH1cblxuICAgIGlmICghJGlucHV0Lmhhc0NsYXNzKENsYXNzTmFtZS5XSVRIT1VUX0NMRUFSKSkge1xuICAgICAgJGNsZWFyQnRuID0gY3JlYXRlQ2xlYXJCdG4oKTtcbiAgICAgICRpbnB1dC5wYXJlbnQoKS5hcHBlbmQoJGNsZWFyQnRuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgICRpbnB1dC52YWwoJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRm9jdXNJbihfcmVmKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuICAgIHZhciAkY2xvc2VzdFJvb3QgPSAkdGFyZ2V0LmNsb3Nlc3QoXCIuXCIuY29uY2F0KENsYXNzTmFtZS5ST09UKSk7XG4gICAgYWN0aXZhdGUoJGNsb3Nlc3RSb290KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZvY3VzT3V0KF9yZWYyKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYyLnRhcmdldDtcbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KTtcbiAgICB2YXIgJGNsb3Nlc3RSb290ID0gJHRhcmdldC5jbG9zZXN0KFwiLlwiLmNvbmNhdChDbGFzc05hbWUuUk9PVCkpO1xuICAgIGlmICghaXNJbnB1dCgkdGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmICghaXNFbXB0eUlucHV0KCR0YXJnZXQpKSByZXR1cm47XG4gICAgZGVhY3RpdmF0ZSgkY2xvc2VzdFJvb3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoX3JlZjMpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjMudGFyZ2V0O1xuICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuXG4gICAgaWYgKGlzRW1wdHlJbnB1dCgkdGFyZ2V0KSkge1xuICAgICAgaGlkZUNsZWFyQnRuKCRjbGVhckJ0bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dDbGVhckJ0bigkY2xlYXJCdG4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKF9yZWY0KSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWY0LnRhcmdldDtcbiAgICBjbGVhcklucHV0KCk7XG4gICAgZGVhY3RpdmF0ZSgkZWxlbWVudCk7XG4gICAgaGlkZUNsZWFyQnRuKCRjbGVhckJ0bik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc29sZS5sb2coJzJoZXknKTtcbn0iLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qc1wiO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBkb3Rkb3Rkb3QgZnJvbSBcIi4vZG90ZG90ZG90XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICQoJy50YWJzX19pdGVtcycpLm9uKCdjbGljaycsICcudGFic19faXRlbTpub3QoLnRhYnNfX2l0ZW0uaXMtYWN0aXZlKTpub3QoLnRhYnNfX2l0ZW0uaXMtZGlzYWJsZWQpJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdGFiID0gJCh0aGlzKS5kYXRhKCd0YWInKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKS5jbG9zZXN0KCcudGFicycpLmZpbmQoJy50YWJzX19ibG9ja1tkYXRhLXRhYj1cIicgKyB0YWIgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIGRvdGRvdGRvdCgpO1xuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3N0YXJ0ZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja19zdGFydGVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXlfZmluZF9qcy1ub2RlX21vZHVsZXNfanF1ZXJ5X2RvdGRvdGRvdF9kaXN0X2pxdWUtZWIyYWRmXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==