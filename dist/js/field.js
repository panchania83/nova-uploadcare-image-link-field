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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(16);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router) {
    Vue.component('index-uploadcare', __webpack_require__(3));
    Vue.component('detail-uploadcare', __webpack_require__(6));
    Vue.component('form-uploadcare', __webpack_require__(9));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/IndexField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e63f81a", Component.options)
  } else {
    hotAPI.reload("data-v-9e63f81a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resourceName', 'field']
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", {}, [
    _vm.field.value
      ? _c(
          "a",
          {
            staticClass: "btn btn-link dim cursor-pointer text-80",
            attrs: { href: _vm.field.value, target: "_blank" }
          },
          [_vm._v("View File")]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9e63f81a", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(7)
/* template */
var __vue_template__ = __webpack_require__(8)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/DetailField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0224618e", Component.options)
  } else {
    hotAPI.reload("data-v-0224618e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource', 'resourceName', 'resourceId', 'field']
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex border-b border-40" }, [
    _c("div", { staticClass: "w-1/4 py-4" }, [
      _c("h4", { staticClass: "font-normal text-80" }, [
        _vm._v("\n            " + _vm._s(_vm.field.name) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "w-3/4 py-4" }, [
      _c(
        "div",
        {
          staticClass: "mt-2 w-full bg-white rounded-lg px-0",
          staticStyle: { width: "400px" }
        },
        [
          _c(
            "a",
            {
              staticClass: "btn btn-link dim cursor-pointer text-80",
              attrs: { href: _vm.field.value, target: "_blank" }
            },
            [_vm._v("View File")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0224618e", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(15)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/FormField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c023248a", Component.options)
  } else {
    hotAPI.reload("data-v-c023248a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_nova__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_nova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_laravel_nova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uploadcare_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uploadcare_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0_laravel_nova__["FormField"], __WEBPACK_IMPORTED_MODULE_0_laravel_nova__["HandlesValidationErrors"]],

    props: ['resourceName', 'resourceId', 'field'],

    components: { Uploadcare: __WEBPACK_IMPORTED_MODULE_1_uploadcare_vue___default.a },

    created: function created() {},

    methods: {
        setInitialValue: function setInitialValue() {
            this.value = this.field.value || '';
        },
        fill: function fill(formData) {
            formData.append(this.field.attribute, this.value || '');
        },
        onSuccess: function onSuccess(file) {
            console.log(file);
            this.value = file.cdnUrl;
        },
        clear: function clear() {
            this.value = null;
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["laravel-nova"] = factory();
	else
		root["laravel-nova"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(46);
var isBuffer = __webpack_require__(156);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(60)('wks');
var uid = __webpack_require__(65);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(16);
var hide = __webpack_require__(7);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(59);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(122);
var toPrimitive = __webpack_require__(142);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(68);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    getRawTag = __webpack_require__(188),
    objectToString = __webpack_require__(213);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(197);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isLength = __webpack_require__(73);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(109);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(42);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(42);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(113);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(60)('keys');
var uid = __webpack_require__(65);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(170),
    getValue = __webpack_require__(189);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['1/2', '1/3', '2/3', '1/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '5/6'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(154);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});
Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _Errors = __webpack_require__(66);

Object.defineProperty(exports, 'Errors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Errors).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(101);
var buildURL = __webpack_require__(104);
var parseHeaders = __webpack_require__(110);
var isURLSameOrigin = __webpack_require__(108);
var createError = __webpack_require__(45);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(103);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(106);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(100);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardSizes = exports.SingularOrPlural = exports.Minimum = exports.Capitalize = exports.Inflector = exports.Errors = exports.TogglesTrashed = exports.PerPageable = exports.PerformsSearches = exports.Paginatable = exports.InteractsWithResourceInformation = exports.InteractsWithQueryString = exports.InteractsWithDates = exports.HasCards = exports.HandlesValidationErrors = exports.FormField = exports.Filterable = exports.Deletable = exports.BehavesAsPanel = undefined;

var _BehavesAsPanel = __webpack_require__(77);

var _BehavesAsPanel2 = _interopRequireDefault(_BehavesAsPanel);

var _Deletable = __webpack_require__(78);

var _Deletable2 = _interopRequireDefault(_Deletable);

var _Filterable = __webpack_require__(79);

var _Filterable2 = _interopRequireDefault(_Filterable);

var _FormField = __webpack_require__(80);

var _FormField2 = _interopRequireDefault(_FormField);

var _HandlesValidationErrors = __webpack_require__(81);

var _HandlesValidationErrors2 = _interopRequireDefault(_HandlesValidationErrors);

var _HasCards = __webpack_require__(82);

var _HasCards2 = _interopRequireDefault(_HasCards);

var _InteractsWithDates = __webpack_require__(83);

var _InteractsWithDates2 = _interopRequireDefault(_InteractsWithDates);

var _InteractsWithQueryString = __webpack_require__(84);

var _InteractsWithQueryString2 = _interopRequireDefault(_InteractsWithQueryString);

var _InteractsWithResourceInformation = __webpack_require__(85);

var _InteractsWithResourceInformation2 = _interopRequireDefault(_InteractsWithResourceInformation);

var _Paginatable = __webpack_require__(86);

var _Paginatable2 = _interopRequireDefault(_Paginatable);

var _PerformsSearches = __webpack_require__(88);

var _PerformsSearches2 = _interopRequireDefault(_PerformsSearches);

var _PerPageable = __webpack_require__(87);

var _PerPageable2 = _interopRequireDefault(_PerPageable);

var _TogglesTrashed = __webpack_require__(89);

var _TogglesTrashed2 = _interopRequireDefault(_TogglesTrashed);

var _inflectorJs = __webpack_require__(93);

var _inflectorJs2 = _interopRequireDefault(_inflectorJs);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

var _capitalize = __webpack_require__(90);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _minimum = __webpack_require__(91);

var _minimum2 = _interopRequireDefault(_minimum);

var _formBackendValidation = __webpack_require__(41);

var _singularOrPlural = __webpack_require__(92);

var _singularOrPlural2 = _interopRequireDefault(_singularOrPlural);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Util
exports.BehavesAsPanel = _BehavesAsPanel2.default;
exports.Deletable = _Deletable2.default;
exports.Filterable = _Filterable2.default;
exports.FormField = _FormField2.default;
exports.HandlesValidationErrors = _HandlesValidationErrors2.default;
exports.HasCards = _HasCards2.default;
exports.InteractsWithDates = _InteractsWithDates2.default;
exports.InteractsWithQueryString = _InteractsWithQueryString2.default;
exports.InteractsWithResourceInformation = _InteractsWithResourceInformation2.default;
exports.Paginatable = _Paginatable2.default;
exports.PerformsSearches = _PerformsSearches2.default;
exports.PerPageable = _PerPageable2.default;
exports.TogglesTrashed = _TogglesTrashed2.default;
exports.Errors = _formBackendValidation.Errors;
exports.Inflector = _inflectorJs2.default;
exports.Capitalize = _capitalize2.default;
exports.Minimum = _minimum2.default;
exports.SingularOrPlural = _singularOrPlural2.default;
exports.CardSizes = _cardSizes2.default; // Mixins

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(138);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(126);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(134);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(135);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(31);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var invoke = __webpack_require__(123);
var html = __webpack_require__(53);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Errors);

        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */


    _createClass(Errors, [{
        key: "all",
        value: function all() {
            return this.errors;
        }

        /**
         * Determine if any errors exists for the given field or object.
         *
         * @param {string} field
         */

    }, {
        key: "has",
        value: function has(field) {
            var hasError = this.errors.hasOwnProperty(field);

            if (!hasError) {
                var errors = Object.keys(this.errors).filter(function (e) {
                    return e.startsWith(field + ".") || e.startsWith(field + "[");
                });

                hasError = errors.length > 0;
            }

            return hasError;
        }
    }, {
        key: "first",
        value: function first(field) {
            return this.get(field)[0];
        }
    }, {
        key: "get",
        value: function get(field) {
            return this.errors[field] || [];
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record() {
            var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.errors = errors;
        }

        /**
         * Clear a specific field, object or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (!field) {
                this.errors = {};

                return;
            }

            var errors = Object.assign({}, this.errors);

            Object.keys(errors).filter(function (e) {
                return e === field || e.startsWith(field + ".") || e.startsWith(field + "[");
            }).forEach(function (e) {
                return delete errors[e];
            });

            this.errors = errors;
        }
    }]);

    return Errors;
}();

exports.default = Errors;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(177),
    isArguments = __webpack_require__(229),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(230),
    isIndex = __webpack_require__(70),
    isTypedArray = __webpack_require__(231);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObject = __webpack_require__(8);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(178);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['resourceName', 'resourceId', 'resource', 'panel'],

  methods: {
    /**
     * Handle the actionExecuted event and pass it up the chain.
     */
    actionExecuted: function actionExecuted() {
      this.$emit('actionExecuted');
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(114);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Open the delete menu modal.
     */
    openDeleteModal: function openDeleteModal() {
      this.deleteModalOpen = true;
    },


    /**
     * Delete the given resources.
     */
    deleteResources: function deleteResources(resources) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.viaManyToMany) {
        return this.detachResources(resources);
      }

      return Nova.request({
        url: '/nova-api/' + this.resourceName,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this.deleteModalOpen = false;
        _this.getResources();
      });
    },


    /**
     * Delete the selected resources.
     */
    deleteSelectedResources: function deleteSelectedResources() {
      this.deleteResources(this.selectedResources);
    },


    /**
     * Delete all of the matching resources.
     */
    deleteAllMatchingResources: function deleteAllMatchingResources() {
      var _this2 = this;

      if (this.viaManyToMany) {
        return this.detachAllMatchingResources();
      }

      return Nova.request({
        url: this.deleteAllMatchingResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this2.deleteModalOpen = false;
        _this2.getResources();
      });
    },


    /**
     * Detach the given resources.
     */
    detachResources: function detachResources(resources) {
      var _this3 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(function () {
        _this3.deleteModalOpen = false;
        _this3.getResources();
      });
    },


    /**
     * Detach all of the matching resources.
     */
    detachAllMatchingResources: function detachAllMatchingResources() {
      var _this4 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this4.deleteModalOpen = false;
        _this4.getResources();
      });
    },


    /**
     * Force delete the given resources.
     */
    forceDeleteResources: function forceDeleteResources(resources) {
      var _this5 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/force',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this5.deleteModalOpen = false;

        _this5.getResources();
      });
    },


    /**
     * Force delete the selected resources.
     */
    forceDeleteSelectedResources: function forceDeleteSelectedResources() {
      this.forceDeleteResources(this.selectedResources);
    },


    /**
     * Force delete all of the matching resources.
     */
    forceDeleteAllMatchingResources: function forceDeleteAllMatchingResources() {
      var _this6 = this;

      return Nova.request({
        url: this.forceDeleteSelectedResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this6.deleteModalOpen = false;
        _this6.getResources();
      });
    },


    /**
     * Restore the given resources.
     */
    restoreResources: function restoreResources(resources) {
      var _this7 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/restore',
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this7.restoreModalOpen = false;

        _this7.getResources();
      });
    },


    /**
     * Restore the selected resources.
     */
    restoreSelectedResources: function restoreSelectedResources() {
      this.restoreResources(this.selectedResources);
    },


    /**
     * Restore all of the matching resources.
     */
    restoreAllMatchingResources: function restoreAllMatchingResources() {
      var _this8 = this;

      return Nova.request({
        url: this.restoreAllMatchingResourcesEndpoint,
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this8.restoreModalOpen = false;
        _this8.getResources();
      });
    }
  },

  computed: {
    /**
     * Get the delete all matching resources endpoint.
     */
    deleteAllMatchingResourcesEndpoint: function deleteAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens;
      }

      return '/nova-api/' + this.resourceName;
    },


    /**
     * Get the force delete all of the matching resources endpoint.
     */
    forceDeleteSelectedResourcesEndpoint: function forceDeleteSelectedResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/force';
      }

      return '/nova-api/' + this.resourceName + '/force';
    },


    /**
     * Get the restore all of the matching resources endpoint.
     */
    restoreAllMatchingResourcesEndpoint: function restoreAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/restore';
      }

      return '/nova-api/' + this.resourceName + '/restore';
    },


    /**
     * Get the query string for a deletable resource request.
     */
    queryString: function queryString() {
      return {
        search: this.currentSearch,
        filters: this.encodedFilters,
        trashed: this.currentTrashed,
        viaResource: this.viaResource,
        viaResourceId: this.viaResourceId,
        viaRelationship: this.viaRelationship
      };
    }
  }
};


function mapResources(resources) {
  return _.map(resources, function (resource) {
    return resource.id.value;
  });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _each = __webpack_require__(226);

var _each2 = _interopRequireDefault(_each);

var _get = __webpack_require__(228);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Clear filters and reset the resource table
     */
    clearSelectedFilters: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(lens) {
        var _updateQueryString;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!lens) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName
                });

              case 7:

                this.updateQueryString((_updateQueryString = {}, (0, _defineProperty3.default)(_updateQueryString, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString, this.filterParameter, ''), _updateQueryString));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clearSelectedFilters(_x) {
        return _ref.apply(this, arguments);
      }

      return clearSelectedFilters;
    }(),


    /**
     * Handle a filter state change.
     */
    filterChanged: function filterChanged() {
      var _updateQueryString2;

      this.updateQueryString((_updateQueryString2 = {}, (0, _defineProperty3.default)(_updateQueryString2, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString2, this.filterParameter, this.$store.getters[this.resourceName + '/currentEncodedFilters']), _updateQueryString2));
    },


    /**
     * Set up filters for the current view
     */
    initializeFilters: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(lens) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Clear out the filters from the store first
                this.$store.commit(this.resourceName + '/clearFilters');

                _context2.next = 3;
                return this.$store.dispatch(this.resourceName + '/fetchFilters', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context2.next = 5;
                return this.initializeState(lens);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initializeFilters(_x2) {
        return _ref2.apply(this, arguments);
      }

      return initializeFilters;
    }(),


    /**
     * Initialize the filter state
     */
    initializeState: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(lens) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.initialEncodedFilters) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.$store.dispatch(this.resourceName + '/initializeCurrentFilterValuesFromQueryString', this.initialEncodedFilters);

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initializeState(_x3) {
        return _ref3.apply(this, arguments);
      }

      return initializeState;
    }()
  },

  computed: {
    /**
     * Get the name of the filter query string variable.
     */
    filterParameter: function filterParameter() {
      return this.resourceName + '_filter';
    }
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    resourceName: {},
    field: {}
  },

  data: function data() {
    return {
      value: ''
    };
  },

  mounted: function mounted() {
    var _this = this;

    this.setInitialValue();

    // Add a default fill method for the field
    this.field.fill = this.fill;

    // Register a global event for setting the field's value
    Nova.$on(this.field.attribute + '-value', function (value) {
      _this.value = value;
    });
  },
  destroyed: function destroyed() {
    Nova.$off(this.field.attribute + '-value');
  },


  methods: {
    /*
     * Set the initial value for the field
     */
    setInitialValue: function setInitialValue() {
      this.value = !(this.field.value === undefined || this.field.value === null) ? this.field.value : '';
    },


    /**
     * Provide a function that fills a passed FormData object with the
     * field's internal value attribute
     */
    fill: function fill(formData) {
      formData.append(this.field.attribute, String(this.value));
    },


    /**
     * Update the field's internal value
     */
    handleChange: function handleChange(value) {
      this.value = value;
    }
  },

  computed: {
    /**
     * Determine if the field is in readonly mode
     */
    isReadonly: function isReadonly() {
      return this.field.readonly || _.get(this.field, 'extraAttributes.readonly');
    }
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formBackendValidation = __webpack_require__(41);

exports.default = {
  props: {
    errors: {
      default: function _default() {
        return new _formBackendValidation.Errors();
      }
    }
  },

  data: function data() {
    return {
      errorClass: 'border-danger'
    };
  },

  computed: {
    errorClasses: function errorClasses() {
      return this.hasError ? [this.errorClass] : [];
    },
    fieldAttribute: function fieldAttribute() {
      return this.field.attribute;
    },
    hasError: function hasError() {
      return this.errors.has(this.fieldAttribute);
    },
    firstError: function firstError() {
      if (this.hasError) {
        return this.errors.first(this.fieldAttribute);
      }
    }
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        loadCards: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return { cards: [] };
    },

    /**
     * Fetch all of the metrics panels for this view
     */
    created: function created() {
        this.fetchCards();
    },


    watch: {
        cardsEndpoint: function cardsEndpoint() {
            this.fetchCards();
        }
    },

    methods: {
        fetchCards: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _ref2, cards;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.loadCards) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 3;
                                return Nova.request().get(this.cardsEndpoint, {
                                    params: this.extraCardParams
                                });

                            case 3:
                                _ref2 = _context.sent;
                                cards = _ref2.data;

                                this.cards = cards;

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchCards() {
                return _ref.apply(this, arguments);
            }

            return fetchCards;
        }()
    },

    computed: {
        /**
         * Determine whether we have cards to show on the Dashboard
         */
        shouldShowCards: function shouldShowCards() {
            return this.cards.length > 0;
        },


        /**
         * Return the small cards used for the Dashboard
         */
        smallCards: function smallCards() {
            return _.filter(this.cards, function (c) {
                return _cardSizes2.default.indexOf(c.width) !== -1;
            });
        },


        /**
         * Return the full-width cards used for the Dashboard
         */
        largeCards: function largeCards() {
            return _.filter(this.cards, function (c) {
                return c.width == 'full';
            });
        },


        /**
         * Get the extra card params to pass to the endpoint.
         */
        extraCardParams: function extraCardParams() {
            return null;
        }
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    /**
     * Convert the given localized date time string to the application's timezone.
     */
    toAppTimezone: function toAppTimezone(value) {
      return value ? moment.tz(value, this.userTimezone).clone().tz(Nova.config.timezone).format('YYYY-MM-DD HH:mm:ss') : value;
    },


    /**
     * Convert the given application timezone date time string to the local timezone.
     */
    fromAppTimezone: function fromAppTimezone(value) {
      if (!value) {
        return value;
      }

      return moment.tz(value, Nova.config.timezone).clone().tz(this.userTimezone).format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date time for the given field.
     */
    localizeDateTimeField: function localizeDateTimeField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return this.usesTwelveHourTime ? localized.format('YYYY-MM-DD h:mm:ss A') : localized.format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date for the given field.
     */
    localizeDateField: function localizeDateField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return localized.format('YYYY-MM-DD');
    }
  },

  computed: {
    /**
     * Get the user's local timezone.
     */
    userTimezone: function userTimezone() {
      return Nova.config.userTimezone ? Nova.config.userTimezone : moment.tz.guess();
    },


    /**
     * Determine if the user is used to 12 hour time.
     */
    usesTwelveHourTime: function usesTwelveHourTime() {
      return _.endsWith(new Date().toLocaleString(), 'AM') || _.endsWith(new Date().toLocaleString(), 'PM');
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaults = __webpack_require__(225);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        /**
         * Update the given query string values.
         */
        updateQueryString: function updateQueryString(value) {
            this.$router.push({ query: (0, _defaults2.default)(value, this.$route.query) });
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    /**
     * Get the resource information object for the current resource.
     */
    resourceInformation: function resourceInformation() {
      var _this = this;

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this.resourceName;
      });
    },


    /**
     * Get the resource information object for the current resource.
     */
    viaResourceInformation: function viaResourceInformation() {
      var _this2 = this;

      if (!this.viaResource) {
        return;
      }

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this2.viaResource;
      });
    },


    /**
     * Determine if the user is authorized to create the current resource.
     */
    authorizedToCreate: function authorizedToCreate() {
      return this.resourceInformation.authorizedToCreate;
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Select the previous page.
     */
    selectPreviousPage: function selectPreviousPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage - 1));
    },


    /**
     * Select the next page.
     */
    selectNextPage: function selectNextPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage + 1));
    }
  },

  computed: {
    /**
     * Get the current page from the query string.
     */
    currentPage: function currentPage() {
      return parseInt(this.$route.query[this.pageParameter] || 1);
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return { perPage: 25 };
  },

  methods: {
    /**
     * Sync the per page values from the query string.
     */
    initializePerPageFromQueryString: function initializePerPageFromQueryString() {
      this.perPage = this.currentPerPage;
    },


    /**
     * Update the desired amount of resources per page.
     */
    perPageChanged: function perPageChanged() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.perPageParameter, this.perPage));
    }
  },

  computed: {
    /**
     * Get the current per page value from the query string.
     */
    currentPerPage: function currentPerPage() {
      return this.$route.query[this.perPageParameter] || 25;
    }
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = __webpack_require__(224);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      search: '',
      selectedResource: '',
      availableResources: []
    };
  },

  methods: {
    /**
     * Set the currently selected resource
     */
    selectResource: function selectResource(resource) {
      this.selectedResource = resource;
    },


    /**
     * Handle the search box being cleared.
     */
    handleSearchCleared: function handleSearchCleared() {
      this.availableResources = [];
    },


    /**
     * Clear the selected resource and availableResources
     */
    clearSelection: function clearSelection() {
      this.selectedResource = '';
      this.availableResources = [];
    },


    /**
     * Perform a search to get the relatable resources.
     */
    performSearch: function performSearch(search) {
      var _this = this;

      this.search = search;

      var trimmedSearch = search.trim();
      // If the user performs an empty search, it will load all the results
      // so let's just set the availableResources to an empty array to avoid
      // loading a huge result set
      if (trimmedSearch == '') {
        this.clearSelection();

        return;
      }

      this.debouncer(function () {
        _this.selectedResource = '';
        _this.getAvailableResources(trimmedSearch);
      }, 500);
    },


    /**
     * Debounce function for the search handler
     */
    debouncer: (0, _debounce2.default)(function (callback) {
      return callback();
    }, 500)
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      withTrashed: false
    };
  },

  methods: {
    /**
     * Toggle the trashed state of the search
     */
    toggleWithTrashed: function toggleWithTrashed() {
      this.withTrashed = !this.withTrashed;
    },


    /**
     * Enable searching for trashed resources
     */
    enableWithTrashed: function enableWithTrashed() {
      this.withTrashed = true;
    },


    /**
     * Disable searching for trashed resources
     */
    disableWithTrashed: function disableWithTrashed() {
      this.withTrashed = false;
    }
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string) {
    return (0, _upperFirst2.default)(string);
};

var _upperFirst = __webpack_require__(238);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (originalPromise) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return _promise2.default.all([originalPromise, new _promise2.default(function (resolve) {
        setTimeout(function () {
            return resolve();
        }, delay);
    })]).then(function (result) {
        return result[0];
    });
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = singularOrPlural;

var _ = __webpack_require__(47);

function singularOrPlural(value, suffix) {
    if (value > 1 || value == 0) return _.Inflector.pluralize(suffix);
    return _.Inflector.singularize(suffix);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Javascript inflector
 * 
 * @author Dida Nurwanda <didanurwanda@gmail.com>
 * @since 1.0
 */


var _Inflector = {

    uncountableWords : [
        'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
    ],

    pluralRules: [
        [new RegExp('(m)an$', 'gi'),                 '$1en'],
        [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
        [new RegExp('(child)$', 'gi'),               '$1ren'],
        [new RegExp('^(ox)$', 'gi'),                 '$1en'],
        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
        [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
        [new RegExp('(alias|status)$', 'gi'),        '$1es'],
        [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
        [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
        [new RegExp('([ti])um$', 'gi'),              '$1a'],
        [new RegExp('sis$', 'gi'),                   'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
        [new RegExp('(hive)$', 'gi'),                '$1s'],
        [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
        [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
        [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
        [new RegExp('(quiz)$', 'gi'),                '$1zes'],
        [new RegExp('s$', 'gi'),                     's'],
        [new RegExp('$', 'gi'),                      's']
    ],

    singularRules: [
        [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
        [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
        [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
        [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
        [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
        [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
        [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
        [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
        [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
        [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
        [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
        [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
        [new RegExp('(o)es$', 'gi'),                                                       '$1'],
        [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
        [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
        [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
        [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
        [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
        [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
        [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
        [new RegExp('s$', 'gi'),                                                           '']
    ],

    nonTitlecasedWords: [
        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
        'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
        'with', 'for'
    ],

    idSuffix: new RegExp('(_ids|_id)$', 'g'),
    underbar: new RegExp('_', 'g'),
    spaceOrUnderbar: new RegExp('[\ _]', 'g'),
    uppercase: new RegExp('([A-Z])', 'g'),
    underbarPrefix: new RegExp('^_'),

    applyRules: function(str, rules, skip, override) {
        if (override) {
            str = override;
        } else {
            var ignore = (skip.indexOf(str.toLowerCase()) > -1);
            if (!ignore) {
                for (var x = 0; x < rules.length; x++) {
                    if (str.match(rules[x][0])) {
                        str = str.replace(rules[x][0], rules[x][1]);
                        break;
                    }
                }
            }
        }
        return str;
    },


    /*
    Inflector.pluralize('person')           -> 'people'
    Inflector.pluralize('octopus')          -> 'octopi'
    Inflector.pluralize('Hat')              -> 'Hats'
    Inflector.pluralize('person', 'guys')   -> 'guys'    
    */
    pluralize: function(str, plural) {
        return this.applyRules(
            str,
            this.pluralRules,
            this.uncountableWords,
            plural
        );
    },

    /*
    Inflector.singularize('person')         -> 'person'
    Inflector.singularize('octopi')         -> 'octopus'
    Inflector.singularize('hats')           -> 'hat'
    Inflector.singularize('guys', 'person') -> 'person'
    */
    singularize: function(str, singular) {
        return this.applyRules(
            str,
            this.singularRules,
            this.uncountableWords, 
            singular
        );
    },

    /*
    Inflector.camelize('message_properties')        -> 'MessageProperties'
    Inflector.camelize('message_properties', true)  -> 'messageProperties'
    */
    camelize: function(str, lowFirstLetter) {
       // var str = str.toLowerCase();
        var str_path = str.split('/');
        for (var i = 0; i < str_path.length; i++)
        {
            var str_arr = str_path[i].split('_');
            var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
            for (var x = initX; x < str_arr.length; x++)
            {
                str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
            }
            str_path[i] = str_arr.join('');
        }
        str = str_path.join('::');

        // fix 
        if (lowFirstLetter === true) {
          var first = str.charAt(0).toLowerCase();
          var last = str.slice(1);
          str = first + last;
        }

        return str;
    },

    /*
    Inflector.underscore('MessageProperties')       -> 'message_properties'
    Inflector.underscore('messageProperties')       -> 'message_properties'
    */
    underscore: function(str) { 
        var str_path = str.split('::');
        for (var i = 0; i < str_path.length; i++)
        {
            str_path[i] = str_path[i].replace(this.uppercase, '_$1');
            str_path[i] = str_path[i].replace(this.underbarPrefix, '');
        }
        str = str_path.join('/').toLowerCase();
        return str;
    },

    /*
    Inflector.humanize('message_properties')        -> 'Message properties'
    Inflector.humanize('message_properties')        -> 'message properties'
    */
    humanize: function(str, lowFirstLetter) {
        var str = str.toLowerCase();
        str = str.replace(this.idSuffix, '');
        str = str.replace(this.underbar, ' ');
        if (!lowFirstLetter)
        {
            str = this.capitalize(str);
        }
        return str;
    },

    /*
    Inflector.capitalize('message_properties')      -> 'Message_properties'
    Inflector.capitalize('message properties')      -> 'Message properties'
    */
    capitalize: function(str) {
        var str = str.toLowerCase();
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.dasherize('message_properties')       -> 'message-properties'
    Inflector.dasherize('message properties')       -> 'message-properties'
    */
    dasherize: function(str) {
        str = str.replace(this.spaceOrUnderbar, '-');
        return str;
    },

    /*
    Inflector.camel2words('message_properties')         -> 'Message Properties'
    Inflector.camel2words('message properties')         -> 'Message Properties'
    Inflactor.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
    */
    camel2words: function(str, allFirstUpper) {
        //var str = str.toLowerCase();
        if (allFirstUpper === true) {
            str = this.camelize(str);
            str = this.underscore(str);
        } else {
            str = str.toLowerCase();
        }

        str = str.replace(this.underbar, ' ');
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var d = str_arr[x].split('-');
            for (var i = 0; i < d.length; i++)
            {
                if (this.nonTitlecasedWords.indexOf(d[i].toLowerCase()) < 0)
                {
                    d[i] = this.capitalize(d[i]);
                }
            }
            str_arr[x] = d.join('-');
        }
        str = str_arr.join(' ');
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
    */
    demodulize: function(str) {
        var str_arr = str.split('::');
        str = str_arr[str_arr.length - 1];
        return str;
    },

    /*
    Inflector.tableize('MessageBusProperty')    -> 'message_bus_properties'
    */
    tableize: function(str) {
        str = this.pluralize(this.underscore(str));
        return str;
    },

    /*
    Inflector.classify('message_bus_properties')    -> 'MessageBusProperty'
    */
    classify: function(str) {
        str = this.singularize(this.camelize(str));
        return str;
    },

    /*
    Inflector.foreignKey('MessageBusProperty')       -> 'message_bus_property_id'
    Inflector.foreignKey('MessageBusProperty', true) -> 'message_bus_propertyid'
    */   
    foreignKey: function(str, dropIdUbar) {
        str = this.underscore(this.demodulize(str)) + ((dropIdUbar) ? ('') : ('_')) + 'id';
        return str;
    },

    /*
    Inflector.ordinalize('the 1 pitch')     -> 'the 1st pitch'
    */
    ordinalize: function(str) {
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var i = parseInt(str_arr[x]);
            if (i === NaN)
            {
                var ltd = str_arr[x].substring(str_arr[x].length - 2);
                var ld = str_arr[x].substring(str_arr[x].length - 1);
                var suf = "th";
                if (ltd != "11" && ltd != "12" && ltd != "13")
                {
                    if (ld === "1")
                    {
                        suf = "st";
                    }
                    else if (ld === "2")
                    {
                        suf = "nd";
                    }
                    else if (ld === "3")
                    {
                        suf = "rd";
                    }
                }
                str_arr[x] += suf;
            }
        }
        str = str_arr.join(' ');
        return str;
    }
}

if (true) {
    module.exports = _Inflector;
} else if (typeof define === "function" && define.amd) {
    define([], function(){
        return _Inflector;
    });
} else {
    window.Inflector = _Inflector;
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(46);
var Axios = __webpack_require__(97);
var defaults = __webpack_require__(25);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(96);
axios.isCancel = __webpack_require__(44);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(111);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(43);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(25);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(98);
var dispatchRequest = __webpack_require__(99);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(102);
var isCancel = __webpack_require__(44);
var defaults = __webpack_require__(25);
var isAbsoluteURL = __webpack_require__(107);
var combineURLs = __webpack_require__(105);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(45);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(112);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
__webpack_require__(150);
__webpack_require__(153);
__webpack_require__(149);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(63);
var toAbsoluteIndex = __webpack_require__(141);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(124);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(63);
var getIterFn = __webpack_require__(144);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(29)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(131);
var descriptor = __webpack_require__(59);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(62).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(56);
var gOPS = __webpack_require__(133);
var pIE = __webpack_require__(136);
var toObject = __webpack_require__(64);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(29)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(132);
var enumBugKeys = __webpack_require__(52);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 133 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(64);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(120)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(118);
var step = __webpack_require__(128);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(130) });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 148 */
/***/ (function(module, exports) {



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(1);
var ctx = __webpack_require__(16);
var classof = __webpack_require__(51);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(119);
var forOf = __webpack_require__(121);
var speciesConstructor = __webpack_require__(61);
var task = __webpack_require__(62).set;
var microtask = __webpack_require__(129)();
var newPromiseCapabilityModule = __webpack_require__(31);
var perform = __webpack_require__(57);
var userAgent = __webpack_require__(143);
var promiseResolve = __webpack_require__(58);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(137)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(139)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(127)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(140)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(3);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(61);
var promiseResolve = __webpack_require__(58);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(31);
var perform = __webpack_require__(57);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Errors = __webpack_require__(66);

var _Errors2 = _interopRequireDefault(_Errors);

var _util = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    function Form() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Form);

        this.processing = false;
        this.successful = false;

        this.withData(data).withOptions(options).withErrors({});
    }

    _createClass(Form, [{
        key: 'withData',
        value: function withData(data) {
            if ((0, _util.isArray)(data)) {
                data = data.reduce(function (carry, element) {
                    carry[element] = '';
                    return carry;
                }, {});
            }

            this.setInitialValues(data);

            this.errors = new _Errors2.default();
            this.processing = false;
            this.successful = false;

            for (var field in data) {
                (0, _util.guardAgainstReservedFieldName)(field);

                this[field] = data[field];
            }

            return this;
        }
    }, {
        key: 'withErrors',
        value: function withErrors(errors) {
            this.errors = new _Errors2.default(errors);

            return this;
        }
    }, {
        key: 'withOptions',
        value: function withOptions(options) {
            this.__options = {
                resetOnSuccess: true
            };

            if (options.hasOwnProperty('resetOnSuccess')) {
                this.__options.resetOnSuccess = options.resetOnSuccess;
            }

            if (options.hasOwnProperty('onSuccess')) {
                this.onSuccess = options.onSuccess;
            }

            if (options.hasOwnProperty('onFail')) {
                this.onFail = options.onFail;
            }

            this.__http = options.http || window.axios || __webpack_require__(94);

            if (!this.__http) {
                throw new Error('No http library provided. Either pass an http option, or install axios.');
            }

            return this;
        }

        /**
         * Fetch all relevant data for the form.
         */

    }, {
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.initial) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Fetch specific data for the form.
         *
         * @param {array} fields
         * @return {object}
         */

    }, {
        key: 'only',
        value: function only(fields) {
            var _this = this;

            return fields.reduce(function (filtered, field) {
                filtered[field] = _this[field];
                return filtered;
            }, {});
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            (0, _util.merge)(this, this.initial);

            this.errors.clear();
        }
    }, {
        key: 'setInitialValues',
        value: function setInitialValues(values) {
            this.initial = {};

            (0, _util.merge)(this.initial, values);
        }
    }, {
        key: 'populate',
        value: function populate(data) {
            var _this2 = this;

            Object.keys(data).forEach(function (field) {
                (0, _util.guardAgainstReservedFieldName)(field);

                if (_this2.hasOwnProperty(field)) {
                    (0, _util.merge)(_this2, _defineProperty({}, field, data[field]));
                }
            });

            return this;
        }

        /**
         * Clear the form fields.
         */

    }, {
        key: 'clear',
        value: function clear() {
            for (var field in this.initial) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this3 = this;

            this.__validateRequestType(requestType);
            this.errors.clear();
            this.processing = true;
            this.successful = false;

            return new Promise(function (resolve, reject) {
                _this3.__http[requestType](url, _this3.hasFiles() ? (0, _util.objectToFormData)(_this3.data()) : _this3.data()).then(function (response) {
                    _this3.processing = false;
                    _this3.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this3.processing = false;
                    _this3.onFail(error);

                    reject(error);
                });
            });
        }
    }, {
        key: 'hasFiles',
        value: function hasFiles() {
            for (var property in this.initial) {
                if (this[property] instanceof File || this[property] instanceof FileList) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.successful = true;

            if (this.__options.resetOnSuccess) {
                this.reset();
            }
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onFail',
        value: function onFail(error) {
            this.successful = false;

            if (error.response && error.response.data.errors) {
                this.errors.record(error.response.data.errors);
            }
        }

        /**
         * Get the error message(s) for the given field.
         *
         * @param field
         */

    }, {
        key: 'hasError',
        value: function hasError(field) {
            return this.errors.has(field);
        }

        /**
         * Get the first error message for the given field.
         *
         * @param {string} field
         * @return {string}
         */

    }, {
        key: 'getError',
        value: function getError(field) {
            return this.errors.first(field);
        }

        /**
         * Get the error messages for the given field.
         *
         * @param {string} field
         * @return {array}
         */

    }, {
        key: 'getErrors',
        value: function getErrors(field) {
            return this.errors.get(field);
        }
    }, {
        key: '__validateRequestType',
        value: function __validateRequestType(requestType) {
            var requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];

            if (requestTypes.indexOf(requestType) === -1) {
                throw new Error('`' + requestType + '` is not a valid request type, ' + ('must be one of: `' + requestTypes.join('`, `') + '`.'));
            }
        }
    }], [{
        key: 'create',
        value: function create() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Form().withData(data);
        }
    }]);

    return Form;
}();

exports.default = Form;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArray = isArray;
exports.guardAgainstReservedFieldName = guardAgainstReservedFieldName;
exports.merge = merge;
exports.cloneDeep = cloneDeep;
exports.objectToFormData = objectToFormData;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

var reservedFieldNames = exports.reservedFieldNames = ['__http', '__options', '__validateRequestType', 'clear', 'data', 'delete', 'errors', 'getError', 'getErrors', 'hasError', 'initial', 'onFail', 'only', 'onSuccess', 'patch', 'populate', 'post', 'processing', 'successful', 'put', 'reset', 'submit', 'withData', 'withErrors', 'withOptions'];

function guardAgainstReservedFieldName(fieldName) {
    if (reservedFieldNames.indexOf(fieldName) !== -1) {
        throw new Error('Field name ' + fieldName + ' isn\'t allowed to be used in a Form or Errors instance.');
    }
}

function merge(a, b) {
    for (var key in b) {
        a[key] = cloneDeep(b[key]);
    }
}

function cloneDeep(object) {
    if (object === null) {
        return null;
    }

    if (Array.isArray(object)) {
        return [].concat(_toConsumableArray(object));
    }

    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
        var clone = {};

        for (var key in object) {
            clone[key] = cloneDeep(object[key]);
        }

        return clone;
    }

    return object;
}

function objectToFormData(object) {
    var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (var property in object) {
        _appendToFormData(formData, _getKey(parent, property), object[property]);
    }

    return formData;
}

function _getKey(parent, property) {
    return parent ? parent + '[' + property + ']' : property;
}

function _appendToFormData(formData, key, value) {
    if (value instanceof Date) {
        return formData.append(key, value.toISOString());
    }

    if (value instanceof File) {
        return formData.append(key, value, value.name);
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        return formData.append(key, value);
    }

    objectToFormData(value, formData, key);
}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(190),
    hashDelete = __webpack_require__(191),
    hashGet = __webpack_require__(192),
    hashHas = __webpack_require__(193),
    hashSet = __webpack_require__(194);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(199),
    listCacheDelete = __webpack_require__(200),
    listCacheGet = __webpack_require__(201),
    listCacheHas = __webpack_require__(202),
    listCacheSet = __webpack_require__(203);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(204),
    mapCacheDelete = __webpack_require__(205),
    mapCacheGet = __webpack_require__(206),
    mapCacheHas = __webpack_require__(207),
    mapCacheSet = __webpack_require__(208);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(167),
    createBaseEach = __webpack_require__(184);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(185);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(166),
    keys = __webpack_require__(232);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(181),
    toKey = __webpack_require__(220);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isMasked = __webpack_require__(198),
    isObject = __webpack_require__(8),
    toSource = __webpack_require__(221);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isLength = __webpack_require__(73),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(71),
    nativeKeys = __webpack_require__(210);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isPrototype = __webpack_require__(71),
    nativeKeysIn = __webpack_require__(211);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39),
    overRest = __webpack_require__(215),
    setToString = __webpack_require__(216);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(223),
    defineProperty = __webpack_require__(187),
    identity = __webpack_require__(39);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    arrayMap = __webpack_require__(163),
    isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(196),
    stringToPath = __webpack_require__(219),
    toString = __webpack_require__(74);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(176);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(22);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(182),
    hasUnicode = __webpack_require__(69),
    stringToArray = __webpack_require__(218),
    toString = __webpack_require__(74);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38),
    isArrayLike = __webpack_require__(22),
    isIndex = __webpack_require__(70),
    isObject = __webpack_require__(8);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(183);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(157),
    ListCache = __webpack_require__(158),
    Map = __webpack_require__(159);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(234);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(214);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(68);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(161);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(175),
    shortOut = __webpack_require__(217);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(164),
    hasUnicode = __webpack_require__(69),
    unicodeToArray = __webpack_require__(222);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(209);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    now = __webpack_require__(235),
    toNumber = __webpack_require__(237);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(174),
    eq = __webpack_require__(38),
    isIterateeCall = __webpack_require__(195),
    keysIn = __webpack_require__(233);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(162),
    baseEach = __webpack_require__(165),
    castFunction = __webpack_require__(180),
    isArray = __webpack_require__(13);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(168);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(169),
    isObjectLike = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(236);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(171),
    baseUnary = __webpack_require__(179),
    nodeUtil = __webpack_require__(212);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeys = __webpack_require__(172),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeysIn = __webpack_require__(173),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(160);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(186);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(240);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 241 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(13));
	else if(typeof define === 'function' && define.amd)
		define("uploadcare-vue", ["uploadcare-widget"], factory);
	else if(typeof exports === 'object')
		exports["uploadcare-vue"] = factory(require("uploadcare-widget"));
	else
		root["uploadcare-vue"] = factory(root["uploadcare-widget"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//
//
//
//
//
//
var uploadcare = __webpack_require__(5);

var _default = {
  props: {
    publicKey: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    multipleMax: {
      type: Number
    },
    multipleMin: {
      type: Number
    },
    imagesOnly: {
      type: Boolean,
      default: false
    },
    // Default value does not match the UploadCare API default.
    previewStep: {
      type: Boolean,
      default: true
    },
    crop: {
      type: String,
      default: ''
    },
    imageShrink: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: String,
      default: 'file url camera dropbox gdrive box skydrive'
    },
    inputAcceptTypes: {
      type: String
    },
    preferredTypes: {
      type: String
    },
    // Default value does not match the UploadCare API default.
    systemDialog: {
      type: Boolean,
      default: true
    },
    multipartMinSize: {
      type: Number,
      default: 26214400
    },
    secureSignature: {
      type: String
    },
    secureExpire: {
      type: Number
    },
    previewProxy: {
      type: String
    },
    previewUrlCallback: {
      type: Function
    },
    cdnBase: {
      type: String
    },
    doNotStore: {
      type: Boolean,
      default: false
    },
    validators: {
      type: Array
    }
  },
  methods: {
    onClick: function onClick() {
      var _this = this;

      var publicKey = this.publicKey,
          multiple = this.multiple,
          multipleMax = this.multipleMax,
          multipleMin = this.multipleMin,
          imagesOnly = this.imagesOnly,
          previewStep = this.previewStep,
          crop = this.crop,
          imageShrink = this.imageShrink,
          clearable = this.clearable,
          tabs = this.tabs,
          inputAcceptTypes = this.inputAcceptTypes,
          preferredTypes = this.preferredTypes,
          systemDialog = this.systemDialog,
          multipartMinSize = this.multipartMinSize,
          secureSignature = this.secureSignature,
          secureExpire = this.secureExpire,
          previewProxy = this.previewProxy,
          previewUrlCallback = this.previewUrlCallback,
          cdnBase = this.cdnBase,
          doNotStore = this.doNotStore,
          validators = this.validators;
      var options = {
        publicKey: publicKey,
        multiple: multiple,
        multipleMax: multipleMax,
        multipleMin: multipleMin,
        imagesOnly: imagesOnly,
        previewStep: previewStep,
        crop: crop,
        imageShrink: imageShrink,
        clearable: clearable,
        tabs: tabs,
        inputAcceptTypes: inputAcceptTypes,
        preferredTypes: preferredTypes,
        systemDialog: systemDialog,
        multipartMinSize: multipartMinSize,
        secureSignature: secureSignature,
        secureExpire: secureExpire,
        previewProxy: previewProxy,
        previewUrlCallback: previewUrlCallback,
        cdnBase: cdnBase,
        doNotStore: doNotStore
      };

      if (validators && validators.length) {
        Object.assign(options, {
          validators: validators
        });
      }

      this.fileGroup = uploadcare.openDialog([], options);
      this.fileGroup.done(function (filePromise) {
        if (_this.multiple) {
          var promise = filePromise.promise();
          promise.done(function () {
            var files = filePromise.files();
            files.forEach(function (fileProm) {
              fileProm.done(function (file) {
                _this.$emit('success', file);
              });
              fileProm.fail(function (err) {
                _this.$emit('error', err);
              });
            });
          });
          promise.fail(function (err) {
            _this.$emit('error', err);
          });
        } else {
          filePromise.done(function (file) {
            _this.$emit('success', file);
          });
          filePromise.fail(function (err) {
            _this.$emit('error', err);
          });
        }
      });
      this.fileGroup.fail(function (err) {
        _this.$emit('error', err);
      });
    }
  }
};
exports.default = _default;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Uploadcare_vue_vue_type_template_id_16f3004b__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__ = __webpack_require__(0);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(6);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__Uploadcare_vue_vue_type_template_id_16f3004b__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Uploadcare_vue_vue_type_template_id_16f3004b__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/patrickjs/Code/tipe/uploadcare-vue/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('16f3004b', component.options)
    } else {
      api.reload('16f3004b', component.options)
    }
    module.hot.accept("./Uploadcare.vue?vue&type=template&id=16f3004b", function () {
      api.rerender('16f3004b', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/Uploadcare.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_template_id_16f3004b__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_template_id_16f3004b__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_template_id_16f3004b__["b"]; });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.onClick($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Uploadcare (3.7.6)
 * Date: 2019-07-11 16:13:15 +0300
 * Rev: 0581a4a365
 */
!function(e,t){e.document&&("object"==typeof module&&module.exports?module.exports=t(e,__webpack_require__(14)):e.uploadcare=t(e))}("undefined"!=typeof window?window:this,function(F,a){var C,pe=F.document,de;return function(){C={__exports:{},namespace:function(e,t){var i,a,r,n,o;if(a=C,e)for(r=0,n=(o=e.split(".")).length;r<n;r++)a[i=o[r]]||(a[i]={}),a=a[i];return t(a)},expose:function(e,t){var i,a,r,n,o,l,s;for(i=(r=e.split(".")).pop(),o=C.__exports,n=C,l=0,s=r.length;l<s;l++)o[a=r[l]]||(o[a]={}),o=o[a],n=null!=n?n[a]:void 0;return o[i]=t||n[i]}}}.call(this),function(){var e,t;if((t=C).version="3.7.6",t.jQuery=a||F.jQuery,"undefined"==typeof t.jQuery)throw new ReferenceError("jQuery is not defined");(e=t.expose)("version"),e("jQuery"),e("plugin",function(e){return e(t)})}.call(this),F.XDomainRequest&&C.jQuery.ajaxTransport(function(i){var n;if(i.crossDomain&&i.async)return i.timeout&&(i.xdrTimeout=i.timeout,delete i.timeout),{send:function(e,r){function t(e,t,i,a){n.onload=n.onerror=n.ontimeout=function(){},n=undefined,r(e,t,i,a)}(n=new XDomainRequest).onload=function(){t(200,"OK",{text:n.responseText},"Content-Type: "+n.contentType)},n.onerror=function(){t(404,"Not Found")},n.onprogress=function(){},n.ontimeout=function(){t(0,"timeout")},n.timeout=i.xdrTimeout||Number.MAX_VALUE,n.open(i.type,i.url.replace(/^https?:/,"")),n.send(i.hasContent&&i.data||null)},abort:function(){n&&(n.onerror=function(){},n.abort())}}}),function(){C.namespace("utils.abilities",function(e){var t,i,a,r,n,o;e.fileAPI=!!(F.File&&F.FileList&&F.FileReader),e.sendFileAPI=!(!F.FormData||!e.fileAPI),e.dragAndDrop="draggable"in(n=pe.createElement("div"))||"ondragstart"in n&&"ondrop"in n,e.canvas=!(!(o=pe.createElement("canvas")).getContext||!o.getContext("2d")),e.fileDragAndDrop=e.fileAPI&&e.dragAndDrop,e.iOSVersion=null,(t=/^[^(]+\(iP(?:hone|od|ad);\s*(.+?)\)/.exec(navigator.userAgent))&&(a=/OS (\d)_(\d)/.exec(t[1]))&&(e.iOSVersion=+a[1]+a[2]/10),e.Blob=!1;try{new F.Blob&&(e.Blob=F.Blob)}catch(l){}return i=F.URL||F.webkitURL||!1,e.URL=i&&i.createObjectURL&&i,e.FileReader=(null!=(r=F.FileReader)?r.prototype.readAsArrayBuffer:void 0)&&F.FileReader})}.call(this),function(){var o,r={}.hasOwnProperty,i=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e},n=[].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t;return-1},l=function(e,t){return function(){return e.apply(t,arguments)}},s=[].slice;o=C.jQuery,C.namespace("utils",function(e){var t;return e.Collection=function(){function e(e){var t,i,a;for(null==e&&(e=[]),this.onAdd=o.Callbacks(),this.onRemove=o.Callbacks(),this.onSort=o.Callbacks(),this.onReplace=o.Callbacks(),this.__items=[],i=0,a=e.length;i<a;i++)t=e[i],this.add(t)}return e.prototype.add=function(e){return this.__add(e,this.__items.length)},e.prototype.__add=function(e,t){return this.__items.splice(t,0,e),this.onAdd.fire(e,t)},e.prototype.remove=function(e){var t;if(-1!==(t=o.inArray(e,this.__items)))return this.__remove(e,t)},e.prototype.__remove=function(e,t){return this.__items.splice(t,1),this.onRemove.fire(e,t)},e.prototype.clear=function(){var e,t,i,a,r,n;for(i=this.get(),n=[],e=a=this.__items.length=0,r=i.length;a<r;e=++a)t=i[e],n.push(this.onRemove.fire(t,e));return n},e.prototype.replace=function(e,t){var i;if(e!==t&&-1!==(i=o.inArray(e,this.__items)))return this.__replace(e,t,i)},e.prototype.__replace=function(e,t,i){return this.__items[i]=t,this.onReplace.fire(e,t,i)},e.prototype.sort=function(e){return this.__items.sort(e),this.onSort.fire()},e.prototype.get=function(e){return null!=e?this.__items[e]:this.__items.slice(0)},e.prototype.length=function(){return this.__items.length},e}(),e.UniqCollection=function(e){function a(){return t=a.__super__.constructor.apply(this,arguments)}return i(a,e),a.prototype.add=function(e){if(!(0<=n.call(this.__items,e)))return a.__super__.add.apply(this,arguments)},a.prototype.__replace=function(e,t,i){return 0<=n.call(this.__items,t)?this.remove(e):a.__super__.__replace.apply(this,arguments)},a}(e.Collection),e.CollectionOfPromises=function(e){function a(){this.onAnyProgress=l(this.onAnyProgress,this),this.onAnyFail=l(this.onAnyFail,this),this.onAnyDone=l(this.onAnyDone,this),this.anyDoneList=o.Callbacks(),this.anyFailList=o.Callbacks(),this.anyProgressList=o.Callbacks(),this._thenArgs=null,this.anyProgressList.add(function(e,t){return o(e).data("lastProgress",t)}),a.__super__.constructor.apply(this,arguments)}return i(a,e),a.prototype.onAnyDone=function(e){var t,i,a,r,n;for(this.anyDoneList.add(e),n=[],i=0,a=(r=this.__items).length;i<a;i++)"resolved"===(t=r[i]).state()?n.push(t.done(function(){return e.apply(null,[t].concat(s.call(arguments)))})):n.push(void 0);return n},a.prototype.onAnyFail=function(e){var t,i,a,r,n;for(this.anyFailList.add(e),n=[],i=0,a=(r=this.__items).length;i<a;i++)"rejected"===(t=r[i]).state()?n.push(t.fail(function(){return e.apply(null,[t].concat(s.call(arguments)))})):n.push(void 0);return n},a.prototype.onAnyProgress=function(e){var t,i,a,r,n;for(this.anyProgressList.add(e),n=[],i=0,a=(r=this.__items).length;i<a;i++)t=r[i],n.push(e(t,o(t).data("lastProgress")));return n},a.prototype.lastProgresses=function(){var e,t,i,a,r;for(r=[],t=0,i=(a=this.__items).length;t<i;t++)e=a[t],r.push(o(e).data("lastProgress"));return r},a.prototype.add=function(e){if(e&&e.then)return this._thenArgs&&(e=e.then.apply(e,this._thenArgs)),a.__super__.add.apply(this,arguments),this.__watchItem(e)},a.prototype.__replace=function(e,t,i){return t&&t.then?(a.__super__.__replace.apply(this,arguments),this.__watchItem(t)):this.remove(e)},a.prototype.__watchItem=function(t){var e,i=this;return e=function(e){return function(){if(0<=n.call(i.__items,t))return e.fire.apply(e,[t].concat(s.call(arguments)))}},t.then(e(this.anyDoneList),e(this.anyFailList),e(this.anyProgressList))},a.prototype.autoThen=function(){var e,t,i,a,r,n;if(this._thenArgs)throw new Error("CollectionOfPromises.then() could be used only once");for(this._thenArgs=arguments,n=[],e=i=0,a=(r=this.__items).length;i<a;e=++i)t=r[e],n.push(this.__replace(t,t.then.apply(t,this._thenArgs),e));return n},a}(e.UniqCollection)})}.call(this),function(){var r;r=C.jQuery,C.namespace("utils",function(t){var i;return i=function(e,t){var i,a=this;return i=r.Deferred(),t&&(e.src=t),e.complete?i.resolve(e):(r(e).one("load",function(){return i.resolve(e)}),r(e).one("error",function(){return i.reject(e)})),i.promise()},t.imageLoader=function(e){return r.isArray(e)?r.when.apply(null,r.map(e,t.imageLoader)):e.src?i(e):i(new Image,e)},t.videoLoader=function(e){var t;return t=r.Deferred(),r("<video/>").on("loadeddata",t.resolve).on("error",t.reject).attr("src",e).get(0).load(),t.promise()}})}.call(this),function(){var r=[].slice;C.namespace("utils",function(a){var t;return a.log=function(){var e;try{return null!=(e=F.console)&&"function"==typeof e.log?e.log.apply(e,arguments):void 0}catch(t){}},a.debug=function(){var e,t;if(null==(e=F.console)||!e.debug)return a.log.apply(a,["Debug:"].concat(r.call(arguments)));try{return(t=F.console).debug.apply(t,arguments)}catch(i){}},a.warn=function(){var e,t;if(null==(e=F.console)||!e.warn)return a.log.apply(a,["Warning:"].concat(r.call(arguments)));try{return(t=F.console).warn.apply(t,arguments)}catch(i){}},t={},a.warnOnce=function(e){if(null==t[e])return t[e]=!0,a.warn(e)}})}.call(this),function(){var i;i=C.jQuery,C.namespace("utils",function(e){var c,t=this;return c={},i(F).on("message",function(e){var t,i,a,r,n,o,l;t=e.originalEvent;try{a=JSON.parse(t.data)}catch(s){return}if((null!=a?a.type:void 0)&&a.type in c){for(l=[],r=0,n=(o=c[a.type]).length;r<n;r++)i=o[r],t.source===i[0]?l.push(i[1](a)):l.push(void 0);return l}}),e.registerMessage=function(e,t,i){return e in c||(c[e]=[]),c[e].push([t,i])},e.unregisterMessage=function(e,t){if(e in c)return c[e]=i.grep(c[e],function(e){return e[0]!==t})}})}.call(this),function(){var p,n=[].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t;return-1},i=[].slice;p=C.jQuery,C.namespace("utils",function(s){var t
;return s.unique=function(e){var t,i,a,r;for(i=[],a=0,r=e.length;a<r;a++)t=e[a],n.call(i,t)<0&&i.push(t);return i},s.defer=function(e){return setTimeout(e,0)},s.gcd=function(e,t){var i;while(t)i=e%t,e=t,t=i;return e},s.once=function(e){var t,i;return t=!1,i=null,function(){return t||(i=e.apply(this,arguments),t=!0),i}},s.wrapToPromise=function(e){return p.Deferred().resolve(e).promise()},s.then=function(e,t,i,a){var r,n;return n=p.Deferred(),r=function(e,t){return e&&t?function(){return t.call(this,e.apply(this,arguments))}:e||t},e.then(r(t,n.resolve),r(i,n.reject),r(a,n.notify)),n.promise()},s.bindAll=function(a,e){var r;return r={},p.each(e,function(e,t){var i;return i=a[t],p.isFunction(i)?r[t]=function(){var e;return(e=i.apply(a,arguments))===a?r:e}:r[t]=i}),r},s.upperCase=function(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()},s.publicCallbacks=function(e){var t;return(t=e.add).add=e.add,t.remove=e.remove,t},s.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t,i;return t=16*Math.random()|0,(i="x"===e?t:3&t|8).toString(16)})},s.splitUrlRegex=/^(?:([^:\/?#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)\??([^\#]*)\#?(.*)$/,s.uuidRegex=/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i,s.groupIdRegex=new RegExp(s.uuidRegex.source+"~[0-9]+","i"),s.cdnUrlRegex=new RegExp("^/?("+s.uuidRegex.source+")(?:/(-/(?:[^/]+/)+)?([^/]*))?$","i"),s.splitCdnUrl=function(e){return s.cdnUrlRegex.exec(s.splitUrlRegex.exec(e)[3])},s.escapeRegExp=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},s.globRegexp=function(e,t){var i;return null==t&&(t="i"),i=p.map(e.split("*"),s.escapeRegExp),new RegExp("^"+i.join(".+")+"$",t)},s.normalizeUrl=function(e){var t;return"http:"!==(t=pe.location.protocol)&&(t="https:"),e.replace(/^\/\//,t+"//").replace(/\/+$/,"")},s.fitText=function(e,t){var i,a;return e.length>t?(i=Math.ceil((t-3)/2),a=Math.floor((t-3)/2),e.slice(0,i)+"..."+e.slice(-a)):e},s.fitSizeInCdnLimit=function(e){return s.fitSize(e,[2048,2048])},s.fitSize=function(e,t,i){var a,r;return e[0]>t[0]||e[1]>t[1]||i?(r=t[0]/e[0],a=t[1]/e[1],!t[0]||t[1]&&a<r?[Math.round(a*e[0]),t[1]]:[t[0],Math.round(r*e[1])]):e.slice()},s.applyCropCoordsToInfo=function(e,t,i,a){var r,n,o,l,s,c,u;return c=a.width,n=a.height,l=t.preferedSize,o="",(u=c===i[0]&&n===i[1])||(o+="-/crop/"+c+"x"+n+"/"+a.left+","+a.top+"/"),r=t.downscale&&(c>l[0]||n>l[1]),s=t.upscale&&(c<l[0]||n<l[1]),r||s?(a.sw=l[0],a.sh=l[1],o+="-/resize/"+l.join("x")+"/"):u||(o+="-/preview/"),(e=p.extend({},e)).cdnUrlModifiers=o,e.cdnUrl=""+e.originalUrl+(o||""),e.crop=a,e},s.fileInput=function(e,t,i){var a,n,r;return n=null,""===(a=t.inputAcceptTypes)&&(a=t.imagesOnly?"image/*":null),(r=function(){return n=(t.multiple?p('<input type="file" multiple>'):p('<input type="file">')).attr("accept",a).css({position:"absolute",top:0,opacity:0,margin:0,padding:0,width:"auto",height:"auto",cursor:e.css("cursor")}).on("change",function(){return i(this),p(this).hide(),r()}),e.append(n)})(),e.css({position:"relative",overflow:"hidden"}).mousemove(function(e){var t,i,a,r;return t=(r=p(this).offset()).left,i=r.top,a=n.width(),n.css({left:e.pageX-t-a+10,top:e.pageY-i-10})})},s.fileSelectDialog=function(e,t,i,a){var r;return null==a&&(a={}),""===(r=t.inputAcceptTypes)&&(r=t.imagesOnly?"image/*":null),p(t.multiple?'<input type="file" multiple>':'<input type="file">').attr("accept",r).attr(a).css({position:"fixed",bottom:0,opacity:0}).on("change",function(){return i(this),p(this).remove()}).appendTo(e).focus().click().hide()},s.fileSizeLabels="B KB MB GB TB PB EB ZB YB".split(" "),s.readableFileSize=function(e,t,i,a){var r,n,o,l;if(null==t&&(t=""),null==i&&(i=""),null==a&&(a=""),e=parseInt(e,10),isNaN(e))return t;r=2,o=0,l=1e3-5*Math.pow(10,2-Math.max(r,3));while(l<e&&o<s.fileSizeLabels.length-1)o++,e/=1024;return e+=1e-15,n=Math.max(0,r-Math.floor(e).toFixed(0).length),""+i+(e=Number(e.toFixed(n)))+" "+s.fileSizeLabels[o]+a},s.ajaxDefaults={dataType:"json",crossDomain:!0,cache:!1},s.jsonp=function(r,e,t,i){return null==i&&(i={}),p.ajax(p.extend({url:r,type:e,data:t},i,s.ajaxDefaults)).then(function(e){var t;return e.error?(t=e.error.content||e.error,p.Deferred().reject(t)):e},function(e,t,i){var a;return a=t+" ("+i+")",s.warn("JSONP unexpected error: "+a+" while loading "+r),a})},s.canvasToBlob=function(e,t,i,a){var r,n,o,l,s,c;if(HTMLCanvasElement.prototype.toBlob)return e.toBlob(a,t,i);for(o=(o=e.toDataURL(t,i)).split(","),n=atob(o[1]),r=new Uint8Array(n.length),l=s=0,c=n.length;s<c;l=s+=1)r[l]=n.charCodeAt(l);return a(new Blob([r],{type:/:(.+\/.+);/.exec(o[0])[1]}))},s.taskRunner=function(t){var i,a,e,r;return r=0,i=[],a=function(){var e;return i.length?(e=i.shift(),s.defer(function(){return e(a)})):r-=1},function(e){return!t||r<t?(r+=1,s.defer(function(){return e(a)})):i.push(e)}},t=[["notify","progress",2],["resolve","done",0],["reject","fail",1]],s.fixedPipe=function(e){var r,n;return n=e,r=2<=arguments.length?i.call(arguments,1):[],p.Deferred(function(a){return p.each(t,function(e,t){var i;return i=p.isFunction(r[t[2]])&&r[t[2]],n[t[1]](function(){var e;return(e=i&&i.apply(this,arguments))&&p.isFunction(e.promise)?e.promise().progress(a.notify).done(a.resolve).fail(a.reject):a[t[0]+"With"](this===n?a.promise():this,i?[e]:arguments)})})}).promise()}})}.call(this),function(){var y,x,w,k,z=[].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t;return-1};x=C.expose,w=C.utils,y=C.jQuery,k=C.version,C.namespace("settings",function(a){var i,r,n,o,l,s,c,e,u,p,d,h,f,t,g,m,_,b,v;return l={live:!0,manualStart:!1,locale:null,localePluralize:null,localeTranslations:null,systemDialog:!1,crop:!1,previewStep:!1,imagesOnly:!1,clearable:!1,multiple:!1,multipleMax:1e3,multipleMin:1,multipleMaxStrict:!1,imageShrink:!1,pathValue:!0,tabs:"file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive",preferredTypes:"",inputAcceptTypes:"",doNotStore:!1,publicKey:null,secureSignature:"",secureExpire:"",pusherKey:"79ae88bd931ea68464d9",cdnBase:"https://ucarecdn.com",urlBase:"https://upload.uploadcare.com",socialBase:"https://social.uploadcare.com",previewProxy:null,previewUrlCallback:null,imagePreviewMaxSize:26214400,multipartMinSize:10485760,multipartPartSize:5242880,multipartMinLastPartSize:1048576,multipartConcurrency:4,multipartMaxAttempts:3,parallelDirectUploads:10,passWindowOpen:!1,audioBitsPerSecond:null,videoBitsPerSecond:null,scriptBase:"//ucarecdn.com/widget/"+C.version+"/uploadcare/",debugUploads:!1,integration:""},_={multipleMax:{from:0,to:1e3}},n={multipleMax:{min:1,max:1e3}},f={tabs:{all:"file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive box vk huddle","default":l.tabs}},t=pe.currentScript||(v=pe.getElementsByTagName("script"))[v.length-1],void 0!==(e=y(t).data("integration"))&&(l=y.extend(l,{integration:e})),g=function(e){return y.isArray(e)||(e=(e=y.trim(e))?e.split(" "):[]),e},i=function(e,t){var i,a,r,n,o,l,s,c;for(o=0,s=t.length;o<s;o++){if(a=t[o],n=r=g(e[a]),f.hasOwnProperty(a))for(n=[],l=0,c=r.length;l<c;l++)i=r[l],f[a].hasOwnProperty(i)?n=n.concat(g(f[a][i])):n.push(i);e[a]=w.unique(n)}return e},b=function(e,t){var i,a,r;for(a=0,r=t.length;a<r;a++)null!=e[i=t[a]]&&(e[i]=w.normalizeUrl(e[i]));return e},s=function(e,t){var i,a,r,n;for(r=0,n=t.length;r<n;r++)null!=e[i=t[r]]&&("string"==typeof(a=e[i])?(a=y.trim(a).toLowerCase(),e[i]=!("false"===a||"disabled"===a)):e[i]=!!a);return e},c=function(e,t){var i,a,r;for(a=0,r=t.length;a<r;a++)null!=e[i=t[a]]&&(e[i]=parseInt(e[i]));return e},u=function(e){return e._userAgent="UploadcareWidget/"+k+"/"+e.publicKey+" (JavaScript"+(e.integration?"; "+e.integration:"")+")",e},m=function(e,t){var i,a;for(i in t)a=t[i],null!=e[i]&&e[i]===a.from&&(e[i]=a.to);return e},r=function(e,t){var i,a,r,n;for(i in t)r=(n=t[i]).min,a=n.max,null!=e[i]&&(e[i]=Math.min(Math.max(e[i],r),a));return e},d=function(e){var t,i;return{downscale:"x"===(t=(i=/^([0-9]+)([x:])([0-9]+)\s*(|upscale|minimum)$/i).exec(y.trim(e.toLowerCase()))||[])[2],upscale:!!t[4],notLess:"minimum"===t[4],preferedSize:t.length?[+t[1],+t[3]]:void 0}},h=function(e){var t,i,a
;return!!(i=(t=/^([0-9]+)x([0-9]+)(?:\s+(\d{1,2}|100)%)?$/i).exec(y.trim(e.toLowerCase()))||[]).length&&(5e6<(a=i[1]*i[2])?(w.warnOnce("Shrinked size can not be larger than 5MP. You have set "+i[1]+"x"+i[2]+" ("+Math.ceil(a/1e3/100)/10+"MP)."),!1):{quality:i[3]?i[3]/100:void 0,size:a})},o=function(e,t){var i,a,r,n;return this.previewProxy?(a=(r=!/\?/.test(this.previewProxy))||!/\=$/.test(this.previewProxy),i=!r&&!/[\&\?\=]$/.test(this.previewProxy),n=encodeURIComponent(e),a&&(n="url="+n),i&&(n="&"+n),r&&(n="?"+n),this.previewProxy+n):e},p=function(e){var t;return i(e,["tabs","preferredTypes"]),b(e,["cdnBase","socialBase","urlBase","scriptBase"]),s(e,["doNotStore","imagesOnly","multiple","clearable","pathValue","previewStep","systemDialog","debugUploads","multipleMaxStrict"]),c(e,["multipleMax","multipleMin","multipartMinSize","multipartPartSize","multipartMinLastPartSize","multipartConcurrency","multipartMaxAttempts","parallelDirectUploads"]),m(e,_),r(e,n),u(e),!1===e.crop||y.isArray(e.crop)||(/^(disabled?|false|null)$/i.test(e.crop)?e.crop=!1:y.isPlainObject(e.crop)?e.crop=[e.crop]:e.crop=y.map((""+e.crop).split(","),d)),e.imageShrink&&!y.isPlainObject(e.imageShrink)&&(e.imageShrink=h(e.imageShrink)),(e.crop||e.multiple)&&(e.previewStep=!0),w.abilities.sendFileAPI||(e.systemDialog=!1),e.validators&&(e.validators=e.validators.slice()),e.previewProxy&&!e.previewUrlCallback&&(e.previewUrlCallback=o),-1!==(t=e.tabs.indexOf("skydrive"))&&(e.tabs[t]="onedrive"),e},x("defaults",y.extend({allTabs:f.tabs.all},l)),a.globals=function(){var e,t,i;for(e in t={},l)void 0!==(i=F["UPLOADCARE_"+w.upperCase(e)])&&(t[e]=i);return t},a.common=w.once(function(e,t){var i;return t||(l=y.extend(l,a.globals())),i=p(y.extend(l,e||{})),a.waitForSettings.fire(i),i}),a.build=function(e){var t;return t=y.extend({},a.common()),y.isEmptyObject(e)||(t=p(y.extend(t,e))),t},a.waitForSettings=y.Callbacks("once memory"),a.CssCollector=function(){function e(){this.urls=[],this.styles=[]}return e.prototype.addUrl=function(e){if(!/^https?:\/\//i.test(e))throw new Error("Embedded urls should be absolute. "+e);if(!(0<=z.call(this.urls,e)))return this.urls.push(e)},e.prototype.addStyle=function(e){return this.styles.push(e)},e}(),C.tabsCss=new a.CssCollector,l._emptyKeyText='<div class="uploadcare--tab__content">\n<div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">Hello!</div>\n<div class="uploadcare--text">Your <a class="uploadcare--link" href="https://uploadcare.com/dashboard/">public key</a> is not set.</div>\n<div class="uploadcare--text">Add this to the &lt;head&gt; tag to start uploading files:</div>\n<div class="uploadcare--text uploadcare--text_pre">&lt;script&gt;\nUPLOADCARE_PUBLIC_KEY = \'your_public_key\';\n&lt;/script&gt;</div>\n</div>'})}.call(this),function(){C.namespace("locale.translations",function(e){return e.en={uploading:"Uploading... Please wait.",loadingInfo:"Loading info...",errors:{"default":"Error",baddata:"Incorrect value",size:"File too big",upload:"Can’t upload",user:"Upload canceled",info:"Can’t load info",image:"Only images allowed",createGroup:"Can’t create file group",deleted:"File was deleted"},draghere:"Drop a file here",file:{one:"%1 file",other:"%1 files"},buttons:{cancel:"Cancel",remove:"Remove",choose:{files:{one:"Choose a file",other:"Choose files"},images:{one:"Choose an image",other:"Choose images"}}},dialog:{close:"Close",openMenu:"Open menu",done:"Done",showFiles:"Show files",tabs:{names:{"empty-pubkey":"Welcome",preview:"Preview",file:"Local Files",url:"Direct Link",camera:"Camera",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",gphotos:"Google Photos",instagram:"Instagram",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"drag & drop<br>any files",nodrop:"Upload files from your&nbsp;computer",cloudsTip:"Cloud storages<br>and social networks",or:"or",button:"Choose a local file",also:"or choose from"},url:{title:"Files from the Web",line1:"Grab any file off the web.",line2:"Just provide the link.",input:"Paste your link here...",button:"Upload"},camera:{title:"File from web camera",capture:"Take a photo",mirror:"Mirror",startRecord:"Record a video",stopRecord:"Stop",cancelRecord:"Cancel",retry:"Request permissions again",pleaseAllow:{title:"Please allow access to your camera",text:"You have been prompted to allow camera access from this site.<br>In order to take pictures with your camera you must approve this request."},notFound:{title:"No camera detected",text:"Looks like you have no camera connected to this device."}},preview:{unknownName:"unknown",change:"Cancel",back:"Back",done:"Add",unknown:{title:"Uploading... Please wait for a preview.",done:"Skip preview and accept"},regular:{title:"Add this file?",line1:"You are about to add the file above.",line2:"Please confirm."},image:{title:"Add this image?",change:"Cancel"},crop:{title:"Crop and add this image",done:"Done",free:"free"},video:{title:"Add this video?",change:"Cancel"},error:{"default":{title:"Oops!",text:"Something went wrong during the upload.",back:"Please try again"},image:{title:"Only image files are accepted.",text:"Please try again with another file.",back:"Choose image"},size:{title:"The file you selected exceeds the limit.",text:"Please try again with another file."},loadImage:{title:"Error",text:"Can’t load image"}},multiple:{title:"You’ve chosen %files%.",question:"Add %files%?",tooManyFiles:"You’ve chosen too many files. %max% is maximum.",tooFewFiles:"You’ve chosen %files%. At least %min% required.",clear:"Remove all",done:"Add",file:{preview:"Preview %file%",remove:"Remove %file%"}}}},footer:{text:"powered by",link:"uploadcare"}}}}),C.namespace("locale.pluralize",function(e){return e.en=function(e){return 1===e?"one":"other"}})}.call(this),function(){var s,a,t;t=C.utils,a=C.settings,s=C.jQuery,C.namespace("locale",function(r){var n,e,o,l,i;return o={lang:e="en",translations:r.translations[e],pluralize:r.pluralize[e]},i=function(e){var t,i,a;return{lang:t=e.locale||o.lang,translations:a=s.extend(!0,{},r.translations[t],e.localeTranslations),pluralize:i=s.isFunction(e.localePluralize)?e.localePluralize:r.pluralize[t]}},n=t.once(function(){return i(a.build())}),r.rebuild=function(e){var t;return t=i(a.build(e)),n=function(){return t}},l=function(e,t){var i,a,r,n;for(r=0,n=(i=e.split(".")).length;r<n;r++){if(a=i[r],null==t)return null;t=t[a]}return t},r.t=function(e,t){var i,a,r;return i=n(),null==(a=l(e,i.translations))&&i.lang!==o.lang&&(a=l(e,(i=o).translations)),null!=t&&(a=null!=i.pluralize?(null!=(r=a[i.pluralize(t)])?r.replace("%1",t):void 0)||t:""),a||""}})}.call(this),function(){var r,n,o;n=C.locale,o=C.utils,r=C.jQuery,C.namespace("templates",function(a){return a.JST={},a.tpl=function(e,t){var i;return null==t&&(t={}),null!=(i=a.JST[e])?i(r.extend({t:n.t,utils:o,uploadcare:C},t)):""}})}.call(this),C.templates.JST.dialog=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--dialog">\n  <div class="uploadcare--dialog__container">\n    <button type="button" title="',(""+e.t("dialog.close")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--dialog__close">\n      <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n        <use xlink:href="#uploadcare--icon-close"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--dialog__placeholder"></div>\n  </div>\n  <div class="uploadcare--powered-by uploadcare--dialog__powered-by">\n    ',(""+e.t("dialog.footer.text")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/',(""+e.uploadcare.version).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),
'/"\n       target="_blank">\n      <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n      ',(""+e.t("dialog.footer.link")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n    </a>\n  </div>\n</div>\n"),__p.join("")},C.templates.JST.dialog__panel=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--panel">\n  <div class="uploadcare--menu uploadcare--panel__menu">\n    <button type="button" title="',(""+e.t("dialog.openMenu")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--menu__toggle">\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_menu">\n        <use xlink:href="#uploadcare--icon-menu"></use>\n      </svg>\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_back">\n        <use xlink:href="#uploadcare--icon-back"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--menu__items"></div>\n  </div>\n\n  <div class="uploadcare--panel__content">\n\n    <div class="uploadcare--footer uploadcare--panel__footer">\n      <div class="uploadcare--footer__additions uploadcare--panel__message"></div>\n\n      <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--panel__show-files">\n        ',(""+e.t("dialog.showFiles")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),' <div class="uploadcare--panel__file-counter"></div>\n      </button>\n\n      <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--panel__done">\n          ',(""+e.t("dialog.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n      </button>\n    </div>\n\n    <div class="uploadcare--powered-by uploadcare--panel__powered-by">\n        ',(""+e.t("dialog.footer.text")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n      <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/',(""+e.uploadcare.version).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'/"\n         target="_blank">\n        <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n          ',(""+e.t("dialog.footer.link")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n      </a>\n    </div>\n  </div>\n</div>\n"),__p.join("")},C.templates.JST.icons=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push(
'<svg width="0" height="0" style="position:absolute"><symbol viewBox="0 0 32 32" id="uploadcare--icon-back"><path d="M21.132 9.06a1.5 1.5 0 0 0-2.122-2.12L9.88 16.07l9.06 9.061a1.5 1.5 0 1 0 2.122-2.121l-6.94-6.94 7.01-7.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-box"><path d="M4.962 9C4.385 9 4 9.384 4 9.96v8.243C4 20.793 6.213 23 8.811 23c1.829 0 3.464-1.043 4.33-2.578.866 1.535 2.406 2.578 4.33 2.578 2.695 0 4.812-2.206 4.812-4.797 0-2.686-2.117-4.886-4.811-4.886-1.829 0-3.465 1.043-4.33 2.578-.77-1.535-2.406-2.578-4.33-2.578a4.957 4.957 0 0 0-2.887.96V9.958c0-.48-.482-.959-.963-.959zm17.08 4.257a.841.841 0 0 0-.33.15c-.385.288-.5.965-.211 1.349l2.526 3.357-2.526 3.358c-.289.384-.174 1.061.21 1.35.385.287 1.065.173 1.354-.21l2.105-2.879 2.105 2.878c.288.384.968.498 1.353.21.385-.288.499-.965.21-1.349l-2.526-3.358 2.526-3.357c.289-.384.175-1.061-.21-1.35-.385-.287-1.065-.203-1.353.18l-2.105 2.879-2.105-2.878c-.217-.288-.657-.406-1.023-.33zm-13.23 2.068c1.539 0 2.886 1.344 2.886 2.878.096 1.535-1.25 2.878-2.887 2.878a2.89 2.89 0 0 1-2.886-2.878c0-1.63 1.347-2.878 2.886-2.878zm8.66 0a2.89 2.89 0 0 1 2.886 2.878c0 1.535-1.347 2.878-2.886 2.878a2.89 2.89 0 0 1-2.887-2.878c0-1.63 1.347-2.878 2.887-2.878z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-camera"><path d="M21 10h3c1.653 0 3 1.343 3 3v9c0 1.656-1.344 3-3.001 3H8A3 3 0 0 1 5 22v-9a3 3 0 0 1 3-3h3v-.999C11 7.901 11.895 7 13 7h6c1.113 0 2 .896 2 2.001V10zm-5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-close"><path d="M10.06 7.94a1.5 1.5 0 0 0-2.12 2.12L13.878 16l-5.94 5.94a1.5 1.5 0 0 0 2.122 2.12L16 18.122l5.94 5.94a1.5 1.5 0 0 0 2.12-2.122L18.122 16l5.94-5.94a1.5 1.5 0 0 0-2.122-2.12L16 13.878l-5.94-5.94z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-crop-free"><path d="M8 12a2.004 2.004 0 0 1-2-2.01V8.01C6 6.897 6.893 6 8.01 6h1.98c1.109 0 2.005.888 2.01 2h8c.005-1.107.896-2 2.01-2h1.98C25.103 6 26 6.893 26 8.01v1.98A2.004 2.004 0 0 1 24 12v8c1.107.005 2 .896 2 2.01v1.98c0 1.112-.893 2.01-2.01 2.01h-1.98A2.004 2.004 0 0 1 20 24h-8a2.004 2.004 0 0 1-2.01 2H8.01A2.004 2.004 0 0 1 6 23.99v-1.98c0-1.109.888-2.005 2-2.01v-8zm2 0v8a2.004 2.004 0 0 1 2 2h8a2.004 2.004 0 0 1 2-2v-8a2.004 2.004 0 0 1-2-2h-8a2.004 2.004 0 0 1-2 2zm12 10.01v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01h-1.98c-.01 0-.01 0-.01.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C24 8 24 8 23.99 8h-1.98C22 8 22 8 22 8.01zm-14 14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01H8.01C8 22 8 22 8 22.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C10 8 10 8 9.99 8H8.01C8 8 8 8 8 8.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-dropbox"><path d="M9.5 5L16 9.141l-6.5 4.141L3 9.141 9.5 5zm13 0L29 9.141l-6.5 4.141L16 9.141 22.5 5zM3 17.423l6.5-4.141 6.5 4.141-6.5 4.141L3 17.423zm19.5-4.141l6.5 4.141-6.5 4.141-6.5-4.141 6.5-4.141zm-13 9.662l6.5-4.14 6.5 4.14-6.5 4.141-6.5-4.14z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-empty-pubkey"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-error"><path d="M18.122 23.93V21a.583.583 0 0 0-.179-.434.585.585 0 0 0-.423-.175h-2.616a.585.585 0 0 0-.424.175.583.583 0 0 0-.179.434v2.93c0 .172.06.316.18.433.118.117.26.175.423.175h2.616a.585.585 0 0 0 .423-.175.583.583 0 0 0 .18-.434zm-.037-6.326l.339-9.05a.404.404 0 0 0-.189-.351c-.163-.135-.313-.203-.452-.203H14.64c-.138 0-.288.068-.452.203-.125.086-.188.215-.188.388l.32 9.013c0 .123.063.224.188.304.126.08.277.12.452.12h2.484c.176 0 .324-.04.443-.12a.41.41 0 0 0 .198-.304z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-evernote"><path d="M7.998 8.648h2.245a.233.233 0 0 0 .232-.233s-.028-1.931-.028-2.468v-.006c0-.441.093-.825.253-1.148l.077-.144a.05.05 0 0 0-.026.014l-4.359 4.34a.05.05 0 0 0-.016.025c.09-.044.213-.106.23-.113.38-.172.84-.267 1.392-.267M24.196 6.56c-.553-.2-1.675-.408-3.084-.575-1.134-.134-2.467-.123-3.272-.098-.097-.665-.56-1.272-1.08-1.482-1.384-.56-3.523-.424-4.071-.27-.437.123-.92.373-1.188.76-.18.258-.297.59-.298 1.051 0 .262.007.878.014 1.426.006.548.014 1.04.014 1.043a.887.887 0 0 1-.884.888H8.103c-.479 0-.845.08-1.124.208-.28.127-.478.3-.628.503-.3.404-.352.902-.351 1.411 0 0 .004.416.104 1.22.083.622.756 4.971 1.394 6.294.248.514.413.73.9.956 1.083.466 3.559.984 4.72 1.133 1.158.148 1.885.46 2.318-.451.002-.003.087-.227.204-.557.377-1.144.43-2.16.43-2.894 0-.075.108-.078.108 0 0 .519-.098 2.354 1.283 2.847.545.194 1.676.367 2.826.502 1.039.12 1.793.53 1.793 3.208 0 1.628-.34 1.851-2.122 1.851-1.444 0-1.994.038-1.994-1.113 0-.932.917-.834 1.596-.834.304 0 .083-.226.083-.8 0-.572.357-.902.02-.91-2.35-.066-3.733-.003-3.733 2.947 0 2.679 1.021 3.176 4.357 3.176 2.614 0 3.536-.086 4.616-3.45.213-.663.73-2.69 1.043-6.092.197-2.15-.187-8.644-.491-10.282-.178-.958-.746-1.43-1.259-1.616zm-3.3 8.792a4.75 4.75 0 0 0-.923.056c.081-.66.353-1.473 1.316-1.439 1.066.037 1.216 1.049 1.22 1.734-.45-.201-1.006-.33-1.613-.35"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-facebook"><path fill-rule="evenodd" d="M24.897 6H7.103C6.494 6 6 6.494 6 7.103v17.794C6 25.506 6.494 26 7.103 26h9.587v-7.734h-2.604v-3.028h2.604V13.01c0-2.582 1.579-3.99 3.882-3.99.777-.001 1.552.038 2.325.118v2.7H21.31c-1.255 0-1.5.593-1.5 1.469v1.927h3l-.39 3.028h-2.627V26h5.104c.609 0 1.103-.494 1.103-1.103V7.103C26 6.494 25.506 6 24.897 6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-file"><path d="M19 6l5 5h-4c-.556 0-1-.448-1-1V6zm5 7v11.192c0 .995-.808 1.808-1.804 1.808H9.804A1.808 1.808 0 0 1 8 24.2V7.74C8 6.602 8.627 6 9.778 6H17v4.994c0 1.12.898 2.006 2.006 2.006H24z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-flickr"><path d="M11 20c-2.212 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 0 8zm10.001 0a4 4 0 1 1-.002-8 4 4 0 0 1 .002 8z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gdrive"><path d="M19.461 6l7.109 12h-7.004L12.539 6h6.922zm-9.27 19l3.467-6H27l-3.466 6H10.192zM5 18.841l6.618-11.36 3.566 5.929-6.722 11.36L5 18.84z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gphotos"><path d="M8.797 9.5l-5.632 5.841c-.064.07-.165.228-.165.33 0 .202.127.329.33.329h8.869c1.444 0 2.501-1.09 2.501-2.534V9.5H8.797zM28.67 16H19.8c-1.444 0-2.501 1.09-2.501 2.534V22.5h5.903l5.632-5.841c.064-.07.165-.228.165-.33 0-.202-.127-.329-.33-.329zM16.659 3.165C16.589 3.1 16.43 3 16.329 3c-.202 0-.329.127-.329.33v8.869c0 1.444 1.09 2.501 2.534 2.501H22.5V8.797l-5.841-5.632zM13.466 17.3H9.5v5.903l5.841 5.632c.07.064.228.165.33.165.202 0 .329-.127.329-.33v-8.869c0-1.444-1.09-2.501-2.534-2.501z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-huddle"><path d="M13.63 14.39c.07-.102.17-.26.2-.313 1.474-2.683 6.857-2.686 8.49 1.002.43.968.67 1.97.675 3.023.008 1.978.004 3.957.002 5.936 0 1.192-.68 1.945-1.763 1.962-1.087.016-1.856-.766-1.865-1.944-.014-1.874.003-3.749-.006-5.623-.006-1.351-.654-2.388-1.719-2.793-1.775-.675-3.59.305-3.892 2.159-.122.747-.104 1.52-.114 2.281-.016 1.336-.002 2.673-.005 4.01-.003 1.125-.669 1.866-1.707 1.907-1.06.042-1.828-.668-1.922-1.78-.007-.086-.003-.173-.003-.26 0-5.31-.002-10.622.002-15.932 0-1.2.731-2.016 1.79-2.025 1.05-.01 1.832.74 1.837 1.792.01 2.013.003 4.026.005 6.04 0 .12.002.391-.005.558"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-instagram"><path d="M16 5c2.987 0 3.362.013 4.535.066 1.171.054 1.97.24 2.67.511a5.391 5.391 0 0 1 1.949 1.27 5.392 5.392 0 0 1 1.269 1.948c.272.7.457 1.499.51 2.67.054 1.173.067 1.548.067 4.535s-.013 3.362-.066 4.535c-.054 1.171-.24 1.97-.511 2.67a5.392 5.392 0 0 1-1.27 1.949 5.391 5.391 0 0 1-1.948 1.269c-.7.271-1.499.457-2.67.51-1.173.054-1.548.067-4.535.067s-3.362-.013-4.535-.066c-1.171-.054-1.97-.24-2.67-.511a5.392 5.392 0 0 1-1.949-1.27 5.391 5.391 0 0 1-1.268-1.948c-.273-.7-.458-1.499-.512-2.67C5.013 19.362 5 18.987 5 16s.013-3.362.066-4.535c.054-1.171.24-1.97.512-2.67a5.391 5.391 0 0 1 1.268-1.949 5.392 5.392 0 0 1 1.949-1.269c.7-.271 1.499-.457 2.67-.51C12.638 5.012 13.013 5 16 5zm0 1.982c-2.937 0-3.285.011-4.445.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.41 3.41 0 0 0-.823 1.264c-.15.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.072.228 1.655.379 2.043.2.513.438.88.823 1.264.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.264.15-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.072-.228-1.655-.379-2.043-.2-.513-.438-.88-.823-1.264a3.408 3.408 0 0 0-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.16-.053-1.508-.064-4.445-.064zm0 3.37a5.649 5.649 0 1 1 0 11.297 5.649 5.649 0 0 1 0-11.298zm0 9.315a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-menu"><path d="M7.5 10a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-more"><path d="M21 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-onedrive"><path d="M11.715 16.427c.584-2.413 2.699-4.177 5.209-4.177 1.483 0 2.873.621 3.878 1.7.425-.14.922-.248 1.364-.258v-.16c0-3.054-2.214-5.532-4.944-5.532-1.952 0-3.624 1.278-4.428 3.115a3.55 3.55 0 0 0-2.033-.658c-2.142 0-3.877 1.94-3.877 4.336 0 .258.028.51.068.754-1.652.167-2.946 1.9-2.946 3.79 0 .02.005.037.005.056-.001.017-.011.035-.011.052 0 .757.257 1.449.673 2.007a3.14 3.14 0 0 0 2.568 1.317h1.513a4.49 4.49 0 0 1-.477-1.987c-.001-2.138 1.476-3.93 3.438-4.355zm13.752 2.375c-.03 0-.06.01-.09.01.008-.09.026-.18.026-.273 0-1.812-1.431-3.279-3.198-3.279-.703 0-1.347.24-1.877.635-.655-1.249-1.924-2.107-3.405-2.107-2.146 0-3.885 1.784-3.885 3.984 0 .029.008.053.009.082a2.764 2.764 0 0 0-.431-.045c-1.602 0-2.898 1.33-2.898 2.973 0 .205.02.406.059.599C10.05 22.87 11.322 24 12.856 24h12.847v-.023C26.99 23.85 28 22.753 28 21.402c0-1.435-1.134-2.6-2.533-2.6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-remove"><path d="M22.142 24.009c-.078 1.1-1.044 1.991-2.15 1.991h-7.983c-1.11 0-2.073-.897-2.151-1.991l-.786-11.002A.924.924 0 0 1 10.007 12h11.986c.556 0 .975.45.935 1.007l-.786 11.002zM13 7V6c0-.556.444-1 .99-1h4.02A1 1 0 0 1 19 6v1h4c.556 0 1 .447 1 .999v1.002A.997.997 0 0 1 23 10H9c-.555 0-1-.447-1-.999V7.999A.996.996 0 0 1 9 7h4z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-uploadcare"><path fill="#ffd800" d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-url"><path d="M16 5c6.074 0 11 4.926 11 11s-4.926 11-11 11S5 22.074 5 16 9.926 5 16 5zm6.076 6.327a.992.992 0 1 0-1.403-1.403l-1.128 1.128c-1.431-.92-3.47-.768-4.697.461l-3.186 3.185a3.7 3.7 0 0 0-1.09 2.636c0 .748.22 1.46.624 2.067l-1.272 1.272a.992.992 0 1 0 1.402 1.403l1.273-1.272c.606.405 1.32.623 2.067.623.997 0 1.933-.386 2.634-1.089l3.187-3.186a3.729 3.729 0 0 0 .464-4.7l1.125-1.125zm-4.252 3.841a.982.982 0 0 0 .701-.29l.95-.95c.067.188.114.385.114.591 0 .466-.178.904-.505 1.23l-3.186 3.187c-.472.47-1.197.588-1.813.382l.793-.792a.992.992 0 1 0-1.404-1.404l-.801.802a1.752 1.752 0 0 1-.115-.59c0-.468.179-.905.506-1.232l3.186-3.186a1.736 1.736 0 0 1 1.23-.507c.207 0 .404.049.592.116l-.948.95a.992.992 0 0 0 .7 1.693z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-vk"><path d="M27.791 21.484c-.416-.767-1.212-1.708-2.386-2.824l-.038-.038c-.558-.532-.895-.882-1.037-1.06-.258-.341-.316-.686-.175-1.036.1-.264.475-.821 1.125-1.673.341-.451.612-.813.812-1.086 1.441-1.959 2.066-3.21 1.874-3.756l-.074-.127c-.05-.077-.18-.147-.387-.211-.209-.064-.475-.075-.8-.032l-3.599.025a.457.457 0 0 0-.25.007l-.163.038-.062.032-.05.039a.56.56 0 0 0-.137.134.882.882 0 0 0-.125.223 21.072 21.072 0 0 1-1.337 2.875 27.31 27.31 0 0 1-.85 1.373c-.258.388-.475.673-.65.856a4.57 4.57 0 0 1-.475.44c-.141.112-.25.158-.324.141a8.987 8.987 0 0 1-.213-.05.843.843 0 0 1-.281-.314 1.425 1.425 0 0 1-.144-.498c-.025-.2-.04-.373-.044-.518-.003-.144-.002-.349.007-.613.008-.264.012-.443.012-.536 0-.324.007-.675.019-1.054l.031-.901c.009-.222.013-.456.013-.703 0-.247-.015-.44-.044-.581a2.02 2.02 0 0 0-.131-.409.684.684 0 0 0-.256-.307 1.426 1.426 0 0 0-.419-.172c-.441-.102-1.004-.158-1.687-.166-1.55-.017-2.545.085-2.986.307a1.69 1.69 0 0 0-.475.383c-.15.187-.171.29-.063.306.5.077.854.26 1.062.55l.075.153c.059.11.117.307.175.588.059.28.096.592.113.932.041.622.041 1.154 0 1.597-.042.443-.081.788-.119 1.035a2.107 2.107 0 0 1-.169.6 2.55 2.55 0 0 1-.15.281.217.217 0 0 1-.062.064.918.918 0 0 1-.337.064c-.117 0-.259-.06-.425-.179a3.024 3.024 0 0 1-.519-.492c-.179-.208-.38-.5-.606-.875a15.385 15.385 0 0 1-.7-1.328l-.2-.37a32.156 32.156 0 0 1-.512-1.042 20.306 20.306 0 0 1-.575-1.323.84.84 0 0 0-.3-.408l-.062-.039a.85.85 0 0 0-.2-.108 1.304 1.304 0 0 0-.287-.083L4.8 9.64c-.35 0-.587.081-.712.243l-.05.077a.421.421 0 0 0-.038.204c0 .094.025.209.075.345.5 1.201 1.043 2.36 1.63 3.475C6.294 15.1 6.804 16 7.237 16.68c.433.681.875 1.324 1.325 1.929.45.604.748.992.893 1.162.146.17.26.298.344.384l.312.306c.2.205.494.45.881.735.388.285.817.566 1.287.843.471.277 1.019.503 1.644.677a5.564 5.564 0 0 0 1.824.211h1.437c.292-.026.512-.12.662-.281l.05-.064a.858.858 0 0 0 .094-.236c.029-.107.044-.224.044-.351a4.301 4.301 0 0 1 .08-.99c.063-.294.134-.516.213-.665a1.632 1.632 0 0 1 .482-.562.806.806 0 0 1 .1-.045c.2-.068.434-.002.705.199.271.2.525.447.763.74.237.295.522.625.856.99.333.367.625.64.874.818l.25.154c.167.102.384.196.65.28.266.086.5.107.7.065l3.199-.051c.316 0 .562-.054.737-.16.175-.107.279-.224.312-.351.034-.128.035-.273.007-.435a1.632 1.632 0 0 0-.088-.338 1.694 1.694 0 0 0-.082-.16z"/></symbol></svg>\n'
),__p.join("")},C.templates.JST.progress__text=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--progress__text-container">\n  <div class="uploadcare--progress__text"></div>\n</div>\n'),__p.join("")},C.templates.JST.styles=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push(
'.uploadcare--jcrop-handle{box-sizing:border-box;padding:12.5px;width:45px;height:45px;background:transparent;z-index:2147483621}@media (min-width:760px){.uploadcare--jcrop-handle{height:35px;width:35px;padding:10px}}.uploadcare--jcrop-handle:before{content:"";display:block;width:20px;height:20px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);border-radius:50%}@media (min-width:760px){.uploadcare--jcrop-handle:before{height:15px;width:15px}}.uploadcare--jcrop-handle.ord-nw{margin-top:-22.5px;margin-left:-22.5px;top:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-nw{margin-left:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-ne{margin-top:-22.5px;margin-right:-22.5px;top:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-ne{margin-right:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-se{margin-bottom:-22.5px;margin-right:-22.5px;bottom:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-se{margin-right:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-handle.ord-sw{margin-bottom:-22.5px;margin-left:-22.5px;bottom:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-sw{margin-left:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-hline{width:100%;height:1px!important;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-hline.bottom{bottom:0}.uploadcare--jcrop-vline{width:1px!important;height:100%;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-vline.right{right:0}.uploadcare--jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uploadcare--jcrop-holder img{max-width:none;max-height:none}.uploadcare--text{margin:0 0 10px;padding:0;font-size:17.5px;line-height:25px}.uploadcare--text:empty{display:none}.uploadcare--text_muted{color:#a4a2a1}.uploadcare--text_pre{box-sizing:border-box;overflow-x:auto;padding:20px;max-width:100%;background:#e3e1e1;font-family:monospace;white-space:pre;text-align:left}.uploadcare--text_size_small{font-size:15px;line-height:20px}.uploadcare--text_size_medium{font-size:20px;font-weight:700;line-height:25px}.uploadcare--text_size_large{font-size:22px;font-weight:700;line-height:25px}.uploadcare--text_size_extra-large{font-size:35px;line-height:45px}@media (min-width:760px){.uploadcare--text_size_extra-large{font-size:42.5px;line-height:50px}}.uploadcare--icon{all:initial;color:inherit;fill:currentColor;margin:0;padding:0;max-width:100%;width:32px;height:32px;cursor:inherit}.uploadcare--link,.uploadcare--link:link,.uploadcare--link:visited{cursor:pointer;color:#157cfc;text-decoration:underline}.uploadcare--link:focus,.uploadcare--link:hover{color:#3891ff;text-decoration:none}.uploadcare--link:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--link:active{color:#0969ee}.uploadcare--button{all:initial;-ms-flex-negative:0;flex-shrink:0;display:inline-block;overflow:hidden;box-sizing:border-box;margin:0;padding:10px;width:auto;min-width:100px;height:auto;min-height:0;border-radius:6px;border:1px solid #157cfc;background:transparent;color:#157cfc;cursor:default;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-family:inherit;font-size:15px;font-weight:400;font-style:normal;line-height:20px;box-shadow:none;text-shadow:none;transition:background .3s,color .3s,border .3s}.uploadcare--button svg{pointer-events:none}.uploadcare--button:focus,.uploadcare--button:hover{background:transparent;border-color:#3891ff;color:#3891ff;font-weight:400;font-style:normal;box-shadow:none;text-shadow:none}.uploadcare--button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--button:active{border-color:#0969ee;color:#0969ee}.uploadcare--button:disabled,.uploadcare--button[aria-disabled=true]{background:transparent!important;border-color:#d4d2d2!important;color:#d4d2d2!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--button{padding:10px 20px;font-size:17.5px;line-height:25px}}.uploadcare--button_icon{padding:14px;min-width:0;width:60px;height:60px}.uploadcare--button_muted{border-color:transparent!important;color:#a4a2a1;border-radius:0}.uploadcare--button_muted:focus,.uploadcare--button_muted:hover{color:#157cfc}.uploadcare--button_muted:disabled,.uploadcare--button_muted[aria-disabled=true]{border-color:transparent!important}.uploadcare--button_overlay{background:rgba(53,53,53,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:focus,.uploadcare--button_overlay:hover{background:hsla(0,0%,40%,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:active{background:rgba(33,33,33,.5)}.uploadcare--button_primary{background:#157cfc;border-color:#157cfc;color:#fff}.uploadcare--button_primary:focus,.uploadcare--button_primary:hover{background:#3891ff;border-color:#3891ff;color:#fff}.uploadcare--button_primary:active{background:#0969ee;border-color:#0969ee}.uploadcare--button_primary:disabled,.uploadcare--button_primary[aria-disabled=true]{background:#d4d2d2!important;border-color:#d4d2d2!important;color:#fff!important}.uploadcare--button_size_big{padding:10px 25px;font-size:20px;line-height:30px}.uploadcare--button_size_small{padding:5px 10px;min-width:80px;font-size:15px;line-height:20px}.uploadcare--input{-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-negative:0;flex-shrink:0;display:block;box-sizing:border-box;margin:5px 0 15px;padding:10px 15px;width:100%;font-size:17.5px;line-height:25px;background:#fff;color:#353535;border:1px solid #a4a2a1;border-radius:2px;box-shadow:none}.uploadcare--input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--input::-webkit-input-placeholder{color:#a4a2a1}.uploadcare--input:-ms-input-placeholder,.uploadcare--input::-ms-input-placeholder{color:#a4a2a1}.uploadcare--input::placeholder{color:#a4a2a1}.uploadcare--form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;max-width:400px;width:100%}.uploadcare--error{color:#e66a6a}.uploadcare--powered-by{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7.5px 0;font-size:12.5px;line-height:15px;color:#fff;text-align:center}.uploadcare--powered-by__link{color:inherit!important;text-decoration:none!important}.uploadcare--powered-by__link,.uploadcare--powered-by__logo{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.uploadcare--powered-by__logo{width:20px;height:15px;vertical-align:text-bottom}.uploadcare--progress__canvas{width:100%;height:100%}.uploadcare--progress__text{display:table-cell;vertical-align:middle;text-align:center;font-size:60%;line-height:1}.uploadcare--progress__text-container{width:100%;height:100%;display:table;white-space:normal}.uploadcare--progress_type_canvas{padding:2px;width:32px;height:32px;color:#ffd800;border-color:#e3e1e1}.uploadcare--progressbar{overflow:hidden;width:100%;height:100%;background:#e3e1e1;border-radius:6px}.uploadcare--progressbar__value{width:0;height:100%;background:#ffd800}.uploadcare--menu{-ms-flex-negative:0;flex-shrink:0;width:100%;width:100vw;max-width:100%;height:100%;overflow:hidden}@media (min-width:760px){.uploadcare--menu{width:60px}}@media (max-width:759px){.uploadcare--menu{height:60px}}.uploadcare--menu__icon{-ms-flex-negative:0;flex-shrink:0;margin:14px}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__item_current:not(.uploadcare--menu__item_tab_file) .uploadcare--menu__icon{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-left:0}}.uploadcare--menu__item{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:60px;overflow:hidden;cursor:default;background:#e3e1e1;color:#666;transition:background .3s,color .3s}@media (min-width:760px){.uploadcare--menu__item{width:60px}}.uploadcare--menu__item:focus,.uploadcare--menu__item:hover{color:#157cfc}.uploadcare--menu__item:active{background-color:#fff;color:#0969ee}.uploadcare--menu__item:focus{outline:none;box-shadow:inset 0 0 0 2px rgba(21,124,252,.5)}.uploadcare--menu__item[aria-disabled=true]{background:#e3e1e1!important;color:#666!important;cursor:not-allowed}.uploadcare--menu__item:after{content:attr(title);-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;height:30px;font-size:17px;line-height:30px;white-space:nowrap}@media (min-width:760px){.uploadcare--menu__item:after{overflow:hidden;max-width:170px;text-overflow:ellipsis}}.uploadcare--menu__item_current,.uploadcare--menu__item_current:active,.uploadcare--menu__item_current:focus,.uploadcare--menu__item_current:hover{background-color:#fff;color:#353535}.uploadcare--menu__item_hidden{display:none}.uploadcare--menu__items{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-right:100vw;overflow-y:auto;overflow-x:hidden;background:#e3e1e1}.uploadcare--menu__toggle{width:60px;height:60px;transition:none}.uploadcare--menu__toggle:focus{outline-offset:-2px}@media (min-width:760px){.uploadcare--menu__toggle{display:none}}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__toggle-icon_back{display:none}}@media (max-width:759px){.uploadcare--menu_opened{position:relative;z-index:1000;height:100%}.uploadcare--menu_opened .uploadcare--menu__toggle{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;text-align:left;background:#e3e1e1}.uploadcare--menu_opened .uploadcare--menu__toggle-icon_menu{display:none}.uploadcare--menu_opened .uploadcare--menu__items{height:calc(100% - 60px)}}.uploadcare--footer{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;margin-top:10px;padding:5px 20px 15px}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer{display:block}}.uploadcare--footer:empty{display:none}.uploadcare--footer__additions{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:0 0 15px;text-align:center}@media (max-width:759px) and (orientation:landscape){.uploadcare--footer__additions{padding:0 20px}}@media (max-width:500px) and (orientation:landscape){.uploadcare--footer__additions{display:none}}@media (min-width:760px){.uploadcare--footer__additions{padding:0 20px}}.uploadcare--footer__additions:empty{visibility:hidden;padding:0}.uploadcare--footer__button{margin-top:5px;margin-bottom:5px}.uploadcare--footer__button:first-of-type{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.uploadcare--footer__button:nth-of-type(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media (max-width:759px){.uploadcare--footer__button{max-width:calc(50% - 20px)}}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer__button:first-of-type{float:left}.uploadcare--footer__button:nth-of-type(2){float:right}}.uploadcare--dragging .uploadcare--draganddrop{margin:20px;background:#e3e1e1;color:#a4a2a1;border:2px dashed;border-radius:20px}.uploadcare--draganddrop.uploadcare--dragging{color:#157cfc!important}@media (max-width:759px){.uploadcare--draganddrop__title{display:none}}.uploadcare--draganddrop:not(.uploadcare--draganddrop_supported) .uploadcare--draganddrop__supported,.uploadcare--draganddrop_supported .uploadcare--draganddrop__not-supported,.uploadcare--dragging .uploadcare--dialog__close,.uploadcare--dragging__show{display:none}.uploadcare--dragging .uploadcare--dragging__show{display:block}.uploadcare--dragging .uploadcare--dragging__hide{display:none}.uploadcare--file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;padding:5px 0 5px 20px;color:#353535;cursor:default}.uploadcare--file:hover{background:rgba(21,124,252,.1)}.uploadcare--file__description{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;padding-right:20px;text-align:left}.uploadcare--file__description:focus,.uploadcare--file__description:focus .uploadcare--file__preview,.uploadcare--file__description:hover,.uploadcare--file__description:hover .uploadcare--file__preview{color:#157cfc}.uploadcare--file__description:active,.uploadcare--file__description:active .uploadcare--file__preview{color:#0969ee}.uploadcare--file__description:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:2px}.uploadcare--file__icon{max-width:100%;max-height:100%}.uploadcare--file__name{overflow:hidden;margin:0;max-width:calc(100vw - 200px);line-height:25px;white-space:nowrap;text-overflow:ellipsis;transition:color .3s}@media (min-width:760px){.uploadcare--file__name{max-width:350px}}.uploadcare--file__preview{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;box-sizing:border-box;margin-right:10px;padding:2px;width:60px;height:60px;overflow:hidden;border:1px solid;border-radius:6px;background:transparent;color:#e3e1e1;transition:border .3s}.uploadcare--file__progressbar{-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;margin:0 10px;width:60px;height:10px}.uploadcare--file__size{font-size:12.5px;color:#a4a2a1}.uploadcare--file_status_error,.uploadcare--file_status_error .uploadcare--file__description,.uploadcare--file_status_error .uploadcare--file__preview{color:#e66a6a!important}.uploadcare--file_status_error .uploadcare--file__name{color:hsla(0,71%,66%,.5)!important}.uploadcare--file_status_error .uploadcare--file__progressbar,.uploadcare--file_status_error .uploadcare--file__size,.uploadcare--file_status_uploaded .uploadcare--file__progressbar{display:none}.uploadcare--file_status_uploading,.uploadcare--file_status_uploading .uploadcare--file__description{color:#353535!important}.uploadcare--file_status_uploading .uploadcare--file__name{max-width:calc(100vw - 280px)}@media (min-width:760px){.uploadcare--file_status_uploading .uploadcare--file__name{max-width:270px}}.uploadcare--file_status_uploading .uploadcare--file__preview{background:#ffd800;color:#ffd800!important}.uploadcare--files{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;width:100%;height:100%}.uploadcare--files__item{-ms-flex-negative:0;flex-shrink:0}.uploadcare--crop-sizes{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.uploadcare--crop-sizes__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;height:65px;background:transparent;border-color:transparent;color:#353535}.uploadcare--crop-sizes__item:focus,.uploadcare--crop-sizes__item:hover{background:transparent;border-color:transparent;color:#157cfc}.uploadcare--crop-sizes__item:active{background:transparent;border-color:transparent;color:#0969ee}.uploadcare--crop-sizes__item:disabled,.uploadcare--crop-sizes__item[aria-disabled=true]{border-color:transparent!important}.uploadcare--crop-sizes__item:after{content:attr(data-caption);display:block;font-size:14px;line-height:25px;text-transform:uppercase}@media (max-width:400px),(max-width:600px) and (orientation:landscape){.uploadcare--crop-sizes__item:after{font-size:12px}}.uploadcare--crop-sizes__item:before{content:"";display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;margin:1px 0;width:6px;height:6px;background:transparent;border-radius:50%}.uploadcare--crop-sizes__item_current:active,.uploadcare--crop-sizes__item_current:focus,.uploadcare--crop-sizes__item_current:hover{color:#353535}.uploadcare--crop-sizes__item_current:before{background:#157cfc}.uploadcare--crop-sizes__icon{box-sizing:border-box;width:30px;height:30px;border:2px solid;border-radius:2px;color:inherit;-webkit-transform:scale(.666);transform:scale(.666)}.uploadcare--crop-sizes__icon_free{border:none;border-radius:0;-webkit-transform:none;transform:none}.uploadcare--file-source{margin:10px;border-color:#e3e1e1;background:#e3e1e1;color:#353535}.uploadcare--file-source_all{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;border-color:currentColor;background:transparent;color:#157cfc}.uploadcare--file-sources{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}@media (max-width:759px) and (max-height:450px),(min-width:760px){.uploadcare--file-sources{display:none}}.uploadcare--file-sources__caption{margin:15px 0 5px}@media (max-width:759px) and (max-height:550px){.uploadcare--file-sources__item:nth-child(4),.uploadcare--file-sources__item:nth-child(5),.uploadcare--file-sources__item:nth-child(6){display:none}}.uploadcare--file-sources__items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:300px}.uploadcare--file-sources__items:empty,.uploadcare--file-sources__items:not(.uploadcare--file-sources__items_many) .uploadcare--file-source__all{display:none}.uploadcare--media{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:100%}.uploadcare--media__image{position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.uploadcare--media__video{all:initial;width:auto;max-width:100%;height:auto;min-height:100px;max-height:100%}@media (max-width:759px) and (max-height:379px){.uploadcare--media__video{max-height:120px}}@media (max-width:759px) and (min-height:380px) and (max-height:499px){.uploadcare--media__video{max-height:160px}}@media (max-width:759px) and (min-height:500px),(min-width:760px){.uploadcare--media__video{max-height:300px}}.uploadcare--camera__button{margin:5px 10px}.uploadcare--camera__button_type_mirror{position:absolute;top:15px;left:50%;margin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.uploadcare--camera__video{transition:-webkit-transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1),-webkit-transform .8s cubic-bezier(.23,1,.32,1)}.uploadcare--camera__video_mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.uploadcare--camera__video-container{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;position:relative;margin-bottom:10px}.uploadcare--camera_status_denied .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_capture,.uploadcare--camera_status_denied .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_denied .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_denied .uploadcare--camera__controls,.uploadcare--camera_status_denied .uploadcare--camera__not-found,.uploadcare--camera_status_denied .uploadcare--camera__please-allow,.uploadcare--camera_status_denied .uploadcare--camera__video-container,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_capture,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_retry,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_not-founded .uploadcare--camera__controls,.uploadcare--camera_status_not-founded .uploadcare--camera__please-allow,.uploadcare--camera_status_not-founded .uploadcare--camera__video-container,.uploadcare--camera_status_ready .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_ready .uploadcare--camera__button_type_retry,.uploadcare--camera_status_ready .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_ready .uploadcare--camera__not-found,.uploadcare--camera_status_ready .uploadcare--camera__please-allow,.uploadcare--camera_status_recording .uploadcare--camera__button_type_capture,.uploadcare--camera_status_recording .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_recording .uploadcare--camera__button_type_retry,.uploadcare--camera_status_recording .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_recording .uploadcare--camera__not-found,.uploadcare--camera_status_recording .uploadcare--camera__please-allow,.uploadcare--camera_status_requested .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_capture,.uploadcare--camera_status_requested .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_requested .uploadcare--camera__button_type_retry,.uploadcare--camera_status_requested .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_requested .uploadcare--camera__controls,.uploadcare--camera_status_requested .uploadcare--camera__not-found,.uploadcare--camera_status_requested .uploadcare--camera__video-container{display:none}.uploadcare--crop-widget>.uploadcare--preview__image{-webkit-filter:brightness(60%);filter:brightness(60%);-webkit-transform:none;transform:none}.uploadcare--tab{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;text-align:center}.uploadcare--tab,.uploadcare--tab__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploadcare--tab__content{-ms-flex-negative:1;flex-shrink:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;padding:0 20px}.uploadcare--tab__header{-ms-flex-negative:0;flex-shrink:0;padding:0 20px;overflow:hidden}@media (min-width:760px){.uploadcare--tab__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:60px;height:60px}}.uploadcare--tab__iframe{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;height:100%;border:0;opacity:0}.uploadcare--tab__title{margin-top:10px;margin-bottom:10px}.uploadcare--tab:not(.uploadcare--tab_current),.uploadcare--tab_name_preview.uploadcare--tab_current~.uploadcare--panel__footer{display:none}.uploadcare--tab_remote.uploadcare--tab_current~.uploadcare--panel__footer{margin-top:0}.uploadcare--panel{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;overflow:hidden;width:100%;height:500px;border:1px solid #a4a2a1;border-radius:6px;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px}@media (min-width:760px){.uploadcare--panel{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.uploadcare--panel__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.uploadcare--panel__file-counter{display:inline}.uploadcare--panel__footer{padding-top:15px;background:#fff9d8}.uploadcare--panel__icon{box-sizing:border-box;padding:3px}.uploadcare--panel__menu_hidden{display:none}.uploadcare--panel__message_hidden{color:#d4d2d2}.uploadcare--panel__powered-by{background:#353535;color:hsla(0,0%,100%,.5)}@media (min-width:760px){.uploadcare--panel__powered-by{display:none}}.uploadcare--tab:not(:nth-child(2)).uploadcare--tab_current~.uploadcare--panel__powered-by{display:none}@media (max-width:759px){.uploadcare--panel_menu-hidden .uploadcare--tab__header{padding:6px 60px 0;min-height:60px}}.uploadcare--panel:not(.uploadcare--panel_multiple) .uploadcare--panel__footer{display:none}.uploadcare--panel_multiple .uploadcare--tab_name_preview{height:100%}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__content{padding-left:0;padding-right:0}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer{position:relative;margin-top:0;padding-top:15px}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer:before{content:"";position:absolute;top:0;left:20px;width:calc(100% - 40px);height:1px;background:#e3e1e1}.uploadcare--preview__content{overflow:hidden}.uploadcare--preview__content_crop{padding:10px 20px}.uploadcare--dialog{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:fixed;top:0;left:0;z-index:2147483647;box-sizing:border-box;overflow:hidden;width:100%;height:100%;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px;opacity:0;transition:opacity .33s cubic-bezier(.05,.7,.25,1)}@media (min-width:760px){.uploadcare--dialog{-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;background:rgba(0,0,0,.5)}}@media (min-width:760px) and (max-height:559px){.uploadcare--dialog{padding-top:30px}}@media (min-width:760px) and (min-height:560px){.uploadcare--dialog{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.uploadcare--dialog__close{position:absolute;top:0;right:0;z-index:49}.uploadcare--dialog__close:focus{outline-offset:-2px}.uploadcare--dialog__container{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;overflow:hidden}@media (max-width:759px){.uploadcare--dialog__container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:100%}}@media (min-width:760px){.uploadcare--dialog__container{width:calc(100% - 60px);max-width:900px;height:calc(100% - 60px);min-height:500px;max-height:660px;border-radius:6px}}@media (min-width:1210px){.uploadcare--dialog__container{max-width:1050px}}.uploadcare--dialog__panel{height:100%;border:none;border-radius:0}@media (min-width:1210px){.uploadcare--dialog__panel .uploadcare--menu,.uploadcare--dialog__panel .uploadcare--menu__item{width:250px}}.uploadcare--dialog__powered-by{-ms-flex-negative:0;flex-shrink:0}@media (max-width:759px){.uploadcare--dialog__powered-by{display:none}}.uploadcare--dialog_status_active{opacity:1}.uploadcare--widget{display:inline-block;vertical-align:baseline}.uploadcare--dragging .uploadcare--widget,.uploadcare--widget.uploadcare--dragging{position:relative}.uploadcare--widget__button{all:initial;display:inline-block;box-sizing:border-box;margin:0;padding:.4em 1em;width:auto;min-width:0;height:auto;min-height:0;border-radius:6px;border:none;background:#c3c3c3;color:#fff;cursor:default;text-align:center;white-space:nowrap;font:inherit;line-height:inherit;box-shadow:none;text-shadow:inherit;transition:background .3s}.uploadcare--widget__button:focus,.uploadcare--widget__button:hover{background:#b3b3b3;color:#fff;font:inherit;box-shadow:none;text-shadow:inherit}.uploadcare--widget__button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--widget__button:active{background:#b3b3b3}.uploadcare--widget__button:disabled{background:#c3c3c3;color:#fff;cursor:not-allowed}.uploadcare--widget__button_type_open{background:#157cfc;color:#fff}.uploadcare--widget__button_type_open:focus,.uploadcare--widget__button_type_open:hover{background:#3891ff}.uploadcare--widget__button_type_open:active{background:#0969ee}.uploadcare--widget__button_type_open:disabled{background:#c3c3c3}.uploadcare--widget__dragndrop-area{position:absolute;top:0;left:0;box-sizing:border-box;min-width:100%;min-height:100%;margin:0;padding:calc(.4em - 1.5px) 1em;font:inherit;line-height:inherit;text-align:center;white-space:nowrap;border:1.5px dashed;border-radius:6px;background:#e3e1e1;color:#a4a2a1;transition:color .3s;display:none}.uploadcare--dragging .uploadcare--widget__dragndrop-area{display:block}.uploadcare--widget.uploadcare--dragging .uploadcare--widget__dragndrop-area{color:#157cfc}.uploadcare--widget__file-name,.uploadcare--widget__file-size{display:inline}.uploadcare--widget__progress{display:inline-block;width:1.8em;height:1.8em;margin:0 .2em 0 0;padding:0;line-height:0;vertical-align:middle}.uploadcare--widget__text{display:inline-block;box-sizing:border-box;margin-right:.2em;padding:.4em 0;white-space:nowrap}.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_error .uploadcare--widget__button_type_remove,.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_loaded .uploadcare--widget__button_type_remove,.uploadcare--widget_option_clearable.uploadcare--widget_status_error .uploadcare--widget__button_type_open,.uploadcare--widget_status_error .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_error .uploadcare--widget__progress,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_open,.uploadcare--widget_status_loaded .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_ready .uploadcare--widget__button_type_remove,.uploadcare--widget_status_ready .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__text,.uploadcare--widget_status_started .uploadcare--widget__button_type_open,.uploadcare--widget_status_started .uploadcare--widget__button_type_remove{display:none}.uploadcare--page{width:auto;min-width:0;max-width:100%;height:auto;min-height:0;max-height:100%;overflow:hidden}.uploadcare--mouse-focused:focus{outline:none}\n\n'
),__p.join("")},C.templates.JST["tab-camera-capture"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">\n    ',(""+e.t("dialog.tabs.camera.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_photo">\n      ',(""+e.t("dialog.tabs.camera.capture")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </button>\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_video">\n      ',(""+e.t("dialog.tabs.camera.startRecord")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n    </button>\n  </div>\n</div>\n"),__p.join("")},C.templates.JST["tab-camera"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">',(""+e.t("dialog.tabs.camera.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\n\n  <div class="uploadcare--media uploadcare--camera__video-container">\n    <video muted class="uploadcare--media__video uploadcare--camera__video uploadcare--camera__video_mirrored"></video>\n\n    <button type="button" class="uploadcare--button uploadcare--button_size_small uploadcare--button_overlay uploadcare--camera__button uploadcare--camera__button_type_mirror">\n      ',(""+e.t("dialog.tabs.camera.mirror")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_start-record">\n      ',(""+e.t("dialog.tabs.camera.startRecord")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_capture">\n      ',(""+e.t("dialog.tabs.camera.capture")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_cancel-record">\n      ',(""+e.t("dialog.tabs.camera.cancelRecord")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_stop-record">\n      ',(""+e.t("dialog.tabs.camera.stopRecord")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__please-allow">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ',(""+e.t("dialog.tabs.camera.pleaseAllow.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </div>\n    <div class="uploadcare--text">\n        ',e.t("dialog.tabs.camera.pleaseAllow.text"),'\n    </div>\n  </div>\n\n  <div class="uploadcare--camera__not-found">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ',(""+e.t("dialog.tabs.camera.notFound.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </div>\n    <div class="uploadcare--text">\n        ',(""+e.t("dialog.tabs.camera.notFound.text")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_retry">\n    ',(""+e.t("dialog.tabs.camera.retry")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n  </button>\n</div>\n"),__p.join("")},C.templates.JST["tab-file"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__content uploadcare--draganddrop">\n  <div class="uploadcare--text uploadcare--text_size_extra-large uploadcare--dragging__show">\n    ',e.t("draghere"),'\n  </div>\n\n  <div class="uploadcare--draganddrop__title uploadcare--dragging__hide">\n    <div class="uploadcare--draganddrop__supported">\n      <div class="uploadcare--text uploadcare--text_size_extra-large">\n        ',e.t("dialog.tabs.file.drag"),'\n      </div>\n      <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted">\n        ',(""+e.t("dialog.tabs.file.or")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n      </div>\n    </div>\n\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--draganddrop__not-supported">\n      ',e.t("dialog.tabs.file.nodrop"),'\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--tab__action-button needsclick  uploadcare--dragging__hide">\n    ',(""+e.t("dialog.tabs.file.button")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </button>\n\n  <div class="uploadcare--file-sources uploadcare--dragging__hide">\n    <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted uploadcare--file-sources__caption">\n      ',(""+e.t("dialog.tabs.file.also")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </div>\n    <div class="uploadcare--file-sources__items">\n      <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--file-source uploadcare--file-source_all uploadcare--file-sources_item">\n          <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n              <use xlink:href="#uploadcare--icon-more"></use>\n          </svg>\n      </button>\n    </div>\n  </div>\n</div>\n'),__p.join("")},C.templates.JST["tab-preview-error"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__content uploadcare--preview__content uploadcare--error">\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n      ',(""+e.t("dialog.tabs.preview.error."+e.error+".title")||e.t("dialog.tabs.preview.error.default.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </div>\n\n    <div class="uploadcare--text">',(""+e.t("dialog.tabs.preview.error."+e.error+".text")||e.t("dialog.tabs.preview.error.default.text")).replace(/&/g,"&amp;"
).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\n\n    <button type="button" class="uploadcare--button uploadcare--preview__back">\n        ',(""+e.t("dialog.tabs.preview.error."+e.error+".back")||e.t("dialog.tabs.preview.error.default.back")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n    </button>\n</div>\n"),__p.join("")},C.templates.JST["tab-preview-image"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ',(""+e.t("dialog.tabs.preview.image.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media"><!--\n      1162x684 is 1.5 size of conteiner\n      TODO Use picture and srcset for create responsive image\n    --><img\n        src="',(""+e.src).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\n        title="',(""+(e.name||"")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\n        alt="',(""+(e.name||"")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'"\n      class="uploadcare--media__image uploadcare--preview__image"\n    />\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions">\n    '),e.crop&&__p.push('\n    <div class="uploadcare--crop-sizes">\n      <div role="button" tabindex="0"\n           class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item" data-caption="free">\n        <div class="uploadcare--crop-sizes__icon"></div>\n      </div>\n    </div>\n    '),__p.push('\n  </div>\n\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ',(""+e.t("dialog.tabs.preview.image.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ',(""+e.t("dialog.tabs.preview.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n  </button>\n</div>\n"),__p.join("")},C.templates.JST["tab-preview-multiple-file"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--file uploadcare--files__item uploadcare--file_status_uploading">\n  <div class="uploadcare--file__description" tabindex="0">\n    <div class="uploadcare--file__preview"></div>\n    <div class="uploadcare--file__name">\n        ',(""+e.t("dialog.tabs.preview.unknownName")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n    </div>\n    <div class="uploadcare--file__size"></div>\n    <div class="uploadcare--file__error"></div>\n  </div>\n\n  <div class="uploadcare--file__progressbar">\n    <div class="uploadcare--progressbar">\n      <div class="uploadcare--progressbar__value"></div>\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--file__remove">\n    <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n      <use xlink:href="#uploadcare--icon-remove"></use>\n    </svg>\n  </button>\n</div>\n'),__p.join("")},C.templates.JST["tab-preview-multiple"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title"></div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--files"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions uploadcare--preview__message"></div>\n\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ',(""+e.t("dialog.tabs.preview.multiple.clear")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ',(""+e.t("dialog.tabs.preview.multiple.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n  </button>\n</div>\n"),__p.join("")},C.templates.JST["tab-preview-regular"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">',(""+e.t("dialog.tabs.preview.regular.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name">\n    ',(""+(e.file.name||e.t("dialog.tabs.preview.unknownName"))).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"",(""+e.utils.readableFileSize(e.file.size,"",", ")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ',(""+e.t("dialog.tabs.preview.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ',(""+e.t("dialog.tabs.preview.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n  </button>\n</div>\n\n"),__p.join("")},C.templates.JST["tab-preview-unknown"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ',(""+e.t("dialog.tabs.preview.unknown.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ',(""+e.t("dialog.tabs.preview.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,
"&#x2F;"),'\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ',(""+e.t("dialog.tabs.preview.unknown.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n  </button>\n</div>\n"),__p.join("")},C.templates.JST["tab-preview-video"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ',(""+e.t("dialog.tabs.preview.video.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media">\n    <video controls class="uploadcare--media__video uploadcare--preview__video"></video>\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ',(""+e.t("dialog.tabs.preview.video.change")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ',(""+e.t("dialog.tabs.preview.done")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n  </button>\n</div>\n"),__p.join("")},C.templates.JST["tab-url"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">',(""+e.t("dialog.tabs.url.title")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\n\n  <div class="uploadcare--text">',(""+e.t("dialog.tabs.url.line1")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\n  <div class="uploadcare--text">',(""+e.t("dialog.tabs.url.line2")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\n\n  <form class="uploadcare--form">\n    <input type="text" class="uploadcare--input" placeholder="',(""+e.t("dialog.tabs.url.input")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'">\n    <button type="submit" class="uploadcare--button uploadcare--button_primary uploadcare--tab__action-button" type="submit">',(""+e.t("dialog.tabs.url.button")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"</button>\n  </form>\n</div>\n"),__p.join("")},C.templates.JST["widget-button"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<button type="button" class="uploadcare--widget__button uploadcare--widget__button_type_',e.name,'">\n    ',(""+e.caption).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n</button>\n"),__p.join("")},C.templates.JST["widget-file-name"]=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--link uploadcare--widget__file-name"\n     tabindex="0" role="link">',(""+e.utils.fitText(e.name,20)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div><!--\n--><div class="uploadcare--widget__file-size">,\n    ',(""+e.utils.readableFileSize(e.size)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),"\n</div>\n"),__p.join("")},C.templates.JST.widget=function(e){e.__scope||(e.__scope={});var __p=[],t=function(){__p.push.apply(__p,arguments)};return __p.push('<div class="uploadcare--widget">\n  <div class="uploadcare--widget__dragndrop-area">',(""+e.t("draghere")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),'</div>\n  <div class="uploadcare--widget__progress"></div>\n  <div class="uploadcare--widget__text"></div>\n</div>\n'),__p.join("")},function(){var a,r;a=C.jQuery,r=C.templates.tpl,C.settings.waitForSettings.add(function(e){var t,i;return t=r("styles",{settings:e}),(i=pe.createElement("style")).setAttribute("type","text/css"),null!=i.styleSheet?i.styleSheet.cssText=t:i.appendChild(pe.createTextNode(t)),a("head").prepend(i)})}.call(this),(de=C.jQuery).Jcrop=function(e,t){var k=de.extend({},de.Jcrop.defaults),n,i;function z(e){return Math.round(e)+"px"}function C(e){return k.baseClass+"-"+e}function r(){return de.fx.step.hasOwnProperty("backgroundColor")}function o(e){var t=de(e).offset();return[t.left,t.top]}function u(e){return[e.pageX-n[0],e.pageY-n[1]]}function a(e){"object"!=typeof e&&(e={}),k=de.extend(k,e),de.each(["onChange","onSelect","onRelease","onDblClick"],function(e,t){"function"!=typeof k[t]&&(k[t]=function(){})})}function l(e,t){if(n=o(j),"move"===e)return X.activateHandlers(c(t),h);var i=H.getFixed(),a=p(e),r=H.getCorner(p(a));H.setPressed(H.getCorner(a)),H.setCurrent(r),X.activateHandlers(s(e,i),h)}function s(t,i){return function(e){if(k.aspectRatio)switch(t){case"e":case"w":e[1]=i.y+1;break;case"n":case"s":e[0]=i.x+1}else switch(t){case"e":case"w":e[1]=i.y2;break;case"n":case"s":e[0]=i.x2}H.setCurrent(e),Q.update()}}function c(e){var t=e;return Y.watchKeys(),function(e){H.moveOffset([e[0]-t[0],e[1]-t[1]]),t=e,Q.update()}}function p(e){switch(e){case"n":return"sw";case"s":case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function F(t){return function(e){return k.disabled||("move"!==t||k.allowMove)&&(n=o(j),N=!0,l(t,u(e)),e.stopPropagation(),e.preventDefault()),!1}}function d(e,t,i){var a=e.width(),r=e.height();t<a&&0<t&&(r=(a=t)/e.width()*e.height()),i<r&&0<i&&(a=(r=i)/e.height()*e.width()),L=e.width()/a,q=e.height()/r,e.width(a).height(r)}function S(e){return{x:e.x*L,y:e.y*q,x2:e.x2*L,y2:e.y2*q,w:e.w*L,h:e.h*q}}function h(e){var t=H.getFixed();Q.enableHandles(),Q.done()}function f(e){H.setCurrent(e),Q.update()}function T(){var e=de("<div></div>").addClass(C("tracker"));return e.css({opacity:0,backgroundColor:"white"}),e}"object"!=typeof e&&(e=de(e)[0]),"object"!=typeof t&&(t={}),a(t);var g={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},m=de(e),_=!0;if("IMG"==e.tagName){if(0!=m[0].width&&0!=m[0].height)m.width(m[0].width),m.height(m[0].height);else{var b=new Image;b.src=m[0].src,m.width(b.width),m.height(b.height)}var j=m.clone().removeAttr("id").css(g).show();j.width(m.width()),j.height(m.height()),m.after(j).hide()}else j=m.css(g).show(),_=!1,null===k.shade&&(k.shade=!0);d(j,k.boxWidth,k.boxHeight);var y=j.width(),x=j.height(),v=de("<div />").width(y).height(x).addClass(C("holder")).css({position:"relative",backgroundColor:k.bgColor}).insertAfter(m).append(j);k.addClass&&v.addClass(k.addClass);var A=de("<div />"),D=de("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),P=de("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var e=H.getFixed();k.onDblClick.call(ue,e)}).insertBefore(j).append(D);_&&(A=de("<img />").attr("src",j.attr("src")).css(g).width(y).height(x),D.append(A));var w=k.boundary,I=T().width(y+2*w).height(x+2*w).css({position:"absolute",
top:z(-w),left:z(-w),zIndex:290}),M=k.bgColor,O=k.bgOpacity,E,U,R,B,L,q,V=!0,N,W,K;n=o(j);var G=function(){function e(){var e={},t=["touchstart","touchmove","touchend"],i=pe.createElement("div"),a;try{for(a=0;a<t.length;a++){var r=t[a],n=(r="on"+r)in i;n||(i.setAttribute(r,"return;"),n="function"==typeof i[r]),e[t[a]]=n}return e.touchstart&&e.touchend&&e.touchmove}catch(o){return!1}}function t(){return!0===k.touchSupport||!1===k.touchSupport?k.touchSupport:e()}return{createDragger:function(t){return function(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,k.disabled||("move"!==t||k.allowMove)&&(N=!0,l(t,u(e)),e.stopPropagation(),e.preventDefault()),!1}},isSupported:e,support:t()}}(),H=function(){var h=0,f=0,g=0,m=0,t,i;function e(e){e=s(e),g=h=e[0],m=f=e[1]}function a(e){e=s(e),t=e[0]-g,i=e[1]-m,g=e[0],m=e[1]}function r(){return[t,i]}function n(e){var t=e[0],i=e[1];h+t<0&&(t-=t+h),f+i<0&&(i-=i+f),x<m+i&&(i+=x-(m+i)),y<g+t&&(t+=y-(g+t)),h+=t,g+=t,f+=i,m+=i}function o(e){var t=l();switch(e){case"ne":return[t.x2,t.y];case"nw":return[t.x,t.y];case"se":return[t.x2,t.y2];case"sw":return[t.x,t.y2]}}function l(){if(!k.aspectRatio)return b();var e=k.aspectRatio,t=k.minSize[0]/L,i=k.maxSize[0]/L,a=k.maxSize[1]/q,r=g-h,n=m-f,o=Math.abs(r),l=Math.abs(n),s,c,u,p,d;return 0===i&&(i=10*y),0===a&&(a=10*x),o/l<e?(u=m,p=l*e,(c=r<0?h-p:p+h)<0?(c=0,d=Math.abs((c-h)/e),u=n<0?f-d:d+f):y<c&&(c=y,d=Math.abs((c-h)/e),u=n<0?f-d:d+f)):(c=g,d=o/e,(u=n<0?f-d:f+d)<0?(u=0,p=Math.abs((u-f)*e),c=r<0?h-p:p+h):x<u&&(u=x,p=Math.abs(u-f)*e,c=r<0?h-p:p+h)),h<c?(c-h<t?c=h+t:i<c-h&&(c=h+i),u=f<u?f+(c-h)/e:f-(c-h)/e):c<h&&(h-c<t?c=h-t:i<h-c&&(c=h-i),u=f<u?f+(h-c)/e:f-(h-c)/e),c<0?(h-=c,c=0):y<c&&(h-=c-y,c=y),u<0?(f-=u,u=0):x<u&&(f-=u-x,u=x),v(_(h,f,c,u))}function s(e){return e[0]<0&&(e[0]=0),e[1]<0&&(e[1]=0),e[0]>y&&(e[0]=y),e[1]>x&&(e[1]=x),[e[0],e[1]]}function _(e,t,i,a){var r=e,n=i,o=t,l=a;return i<e&&(r=i,n=e),a<t&&(o=a,l=t),[r,o,n,l]}function b(){var e=g-h,t=m-f,i;return E&&Math.abs(e)>E&&(g=0<e?h+E:h-E),U&&Math.abs(t)>U&&(m=0<t?f+U:f-U),B/q&&Math.abs(t)<B/q&&(m=0<t?f+B/q:f-B/q),R/L&&Math.abs(e)<R/L&&(g=0<e?h+R/L:h-R/L),h<0&&(g-=h,h-=h),f<0&&(m-=f,f-=f),g<0&&(h-=g,g-=g),m<0&&(f-=m,m-=m),y<g&&(h-=i=g-y,g-=i),x<m&&(f-=i=m-x,m-=i),y<h&&(m-=i=h-x,f-=i),x<f&&(m-=i=f-x,f-=i),v(_(h,f,g,m))}function v(e){return{x:e[0],y:e[1],x2:e[2],y2:e[3],w:e[2]-e[0],h:e[3]-e[1]}}return{flipCoords:_,setPressed:e,setCurrent:a,getOffset:r,moveOffset:n,getCorner:o,getFixed:l}}(),J=function(){var i=!1,a=de("<div />").css({position:"absolute",zIndex:240,opacity:0}),r={top:o(),left:o().height(x),right:o().height(x),bottom:o()};function e(e,t){r.left.css({height:z(t)}),r.right.css({height:z(t)})}function t(){return n(H.getFixed())}function n(e){r.top.css({left:z(e.x),width:z(e.w),height:z(e.y)}),r.bottom.css({top:z(e.y2),left:z(e.x),width:z(e.w),height:z(x-e.y2)}),r.right.css({left:z(e.x2),width:z(y-e.x2)}),r.left.css({width:z(e.x)})}function o(){return de("<div />").css({position:"absolute",backgroundColor:k.shadeColor||k.bgColor}).appendTo(a)}function l(){i||(i=!0,a.insertBefore(j),t(),Q.setBgOpacity(1,0,1),A.hide(),s(k.shadeColor||k.bgColor,1),Q.isAwake()?u(k.bgOpacity,1):u(1,1))}function s(e,t){se(d(),e,t)}function c(){i&&(a.remove(),A.show(),i=!1,Q.isAwake()?Q.setBgOpacity(k.bgOpacity,1,1):(Q.setBgOpacity(1,1,1),Q.disableHandles()),se(v,0,1))}function u(e,t){i&&(k.bgFade&&!t?a.animate({opacity:1-e},{queue:!1,duration:k.fadeTime}):a.css({opacity:1-e}))}function p(){k.shade?l():c(),Q.isAwake()&&u(k.bgOpacity)}function d(){return a.children()}return{update:t,updateRaw:n,getShades:d,setBgColor:s,enable:l,disable:c,resize:e,refresh:p,opacity:u}}(),Q=function(){var a,r={},i={},e={},t=!1;function n(e){var t=de("<div />").css({position:"absolute"}).addClass(C(e));return P.append(t),t}function o(e){var t=de("<div />").mousedown(F(e)).css({cursor:e+"-resize",position:"absolute"}).append("<div/>").addClass("ord-"+e);return G.support&&t.on("touchstart.jcrop",G.createDragger(e)),P.append(t),t}function l(e){return o(e).addClass(C("handle"))}function s(e){var t,i;for(i=0;i<e.length;i++){switch(e[i]){case"n":t="hline";break;case"s":t="hline bottom";break;case"e":t="vline right";break;case"w":t="vline"}r[e[i]]=n(t)}}function c(e){var t;for(t=0;t<e.length;t++)i[e[t]]=l(e[t])}function u(e,t){k.shade||A.css({top:z(-t),left:z(-e)}),P.css({top:z(t),left:z(e)})}function p(e,t){P.width(Math.round(e)).height(Math.round(t))}function d(){var e=H.getFixed();H.setPressed([e.x,e.y]),H.setCurrent([e.x2,e.y2]),h()}function h(e){if(a)return f(e)}function f(e){var t=H.getFixed();p(t.w,t.h),u(t.x,t.y),k.shade&&J.updateRaw(t),a||m(),e?k.onSelect.call(ue,S(t)):k.onChange.call(ue,S(t))}function g(e,t,i){(a||t)&&(k.bgFade&&!i?j.animate({opacity:e},{queue:!1,duration:k.fadeTime}):j.css("opacity",e))}function m(){P.show(),k.shade?J.opacity(O):g(O,!0),a=!0}function _(){v(),P.hide(),k.shade?J.opacity(1):g(1),a=!1,k.onRelease.call(ue)}function b(){if(t=!0,k.allowResize)return!0}function v(){t=!1}function y(e){e?(W=!0,v()):(W=!1,b())}function x(){y(!1),d()}de.isArray(k.createHandles)&&c(k.createHandles),k.drawBorders&&de.isArray(k.createBorders)&&s(k.createBorders),de(pe).on("touchstart.jcrop-ios",function(e){de(e.currentTarget).hasClass("jcrop-tracker")&&e.stopPropagation()});var w=T().mousedown(F("move")).css({cursor:"move",position:"absolute",zIndex:360});return G.support&&w.on("touchstart.jcrop",G.createDragger("move")),D.append(w),v(),{updateVisible:h,update:f,release:_,refresh:d,isAwake:function(){return a},setCursor:function(e){w.css("cursor",e)},enableHandles:b,enableOnly:function(){t=!0},disableHandles:v,animMode:y,setBgOpacity:g,done:x}}(),X=function(){var i=function(){},a=function(){},e=k.trackDocument;function r(){I.css({zIndex:450}),G.support&&de(pe).on("touchmove.jcrop",s).on("touchend.jcrop",c),e&&de(pe).on("mousemove.jcrop",n).on("mouseup.jcrop",o)}function t(){I.css({zIndex:290}),de(pe).off(".jcrop")}function n(e){return i(u(e)),!1}function o(e){return e.preventDefault(),e.stopPropagation(),N&&(N=!1,a(u(e)),Q.isAwake()&&k.onSelect.call(ue,S(H.getFixed())),t(),i=function(){},a=function(){}),!1}function l(e,t){return N=!0,i=e,a=t,r(),!1}function s(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,n(e)}function c(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,o(e)}return e||I.mousemove(n).mouseup(o).mouseout(o),j.before(I),{activateHandlers:l}}(),Y=function(){var t=de('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),e=de("<div />").css({position:"absolute",overflow:"hidden"}).append(t);function i(){k.keySupport&&(t.show(),t.focus())}function a(e){t.hide()}function r(e,t,i){k.allowMove&&(H.moveOffset([t,i]),Q.updateVisible(!0)),e.preventDefault(),e.stopPropagation()}function n(e){if(e.ctrlKey||e.metaKey)return!0;var t=(K=!!e.shiftKey)?10:1;switch(e.keyCode){case 37:r(e,-t,0);break;case 39:r(e,t,0);break;case 38:r(e,0,-t);break;case 40:r(e,0,t);break;case 9:return!0}return!1}return k.keySupport&&(t.keydown(n).blur(a),t.css({position:"absolute",left:"-20px"}),e.append(t).insertBefore(j)),{watchKeys:i}}();function Z(e){v.removeClass().addClass(C("holder")).addClass(e)}function $(e){ee([e[0]/L,e[1]/q,e[2]/L,e[3]/q]),k.onSelect.call(ue,S(H.getFixed())),Q.enableHandles()}function ee(e){H.setPressed([e[0],e[1]]),H.setCurrent([e[2],e[3]]),Q.update()}function te(){return S(H.getFixed())}function ie(){return H.getFixed()}function ae(e){a(e),ce()}function re(){k.disabled=!0,Q.disableHandles(),Q.setCursor("default")}function ne(){k.disabled=!1,ce()}function oe(){Q.done(),X.activateHandlers(null,null)}function le(){v.remove(),m.show(),m.css("visibility","visible"),de(e).removeData("Jcrop")}function se(e,t,i){var a=t||k.bgColor;k.bgFade&&r()&&k.fadeTime&&!i?e.animate({backgroundColor:a},{queue:!1,duration:k.fadeTime}):e.css("backgroundColor",a)}function ce(e){k.allowResize?e?Q.enableOnly():Q.enableHandles():Q.disableHandles(),Q.setCursor(k.allowMove?"move":"default"),k.hasOwnProperty("trueSize")&&(L=k.trueSize[0]/y,
q=k.trueSize[1]/x),k.hasOwnProperty("setSelect")&&($(k.setSelect),Q.done(),delete k.setSelect),J.refresh(),k.bgColor!=M&&(se(k.shade?J.getShades():v,k.shade&&k.shadeColor||k.bgColor),M=k.bgColor),O!=k.bgOpacity&&(O=k.bgOpacity,k.shade?J.refresh():Q.setBgOpacity(O)),E=k.maxSize[0]||0,U=k.maxSize[1]||0,R=k.minSize[0]||0,B=k.minSize[1]||0,k.hasOwnProperty("outerImage")&&(j.attr("src",k.outerImage),delete k.outerImage),Q.refresh()}ce(!0);var ue={setSelect:$,setOptions:ae,tellSelect:te,tellScaled:ie,setClass:Z,disable:re,enable:ne,cancel:oe,release:Q.release,destroy:le,focus:Y.watchKeys,getBounds:function(){return[y*L,x*q]},getWidgetSize:function(){return[y,x]},getScaleFactor:function(){return[L,q]},getOptions:function(){return k},ui:{holder:v,selection:P}};return m.data("Jcrop",ue),ue},de.fn.Jcrop=function(e,t){var i;return this.each(function(){if(de(this).data("Jcrop")){if("api"===e)return de(this).data("Jcrop");de(this).data("Jcrop").setOptions(e)}else"IMG"==this.tagName?de.Jcrop.Loader(this,function(){de(this).css({display:"block",visibility:"hidden"}),i=de.Jcrop(this,e),de.isFunction(t)&&t.call(i)}):(de(this).css({display:"block",visibility:"hidden"}),i=de.Jcrop(this,e),de.isFunction(t)&&t.call(i))}),this},de.Jcrop.Loader=function(e,t,i){var a=de(e),r=a[0];function n(){r.complete?(a.off(".jcloader"),de.isFunction(t)&&t.call(r)):F.setTimeout(n,50)}a.on("load.jcloader",n).on("error.jcloader",function(e){a.off(".jcloader"),de.isFunction(i)&&i.call(r)}),r.complete&&de.isFunction(t)&&(a.off(".jcloader"),t.call(r))},de.Jcrop.defaults={allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:!1,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges:!0,fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}},function(){var a,n;a=C.jQuery,n=C.utils,C.namespace("crop",function(e){return e.CropWidget=function(){var i;function e(e,t,i){this.element=e,this.originalSize=t,null==i&&(i={}),this.__api=a.Jcrop(this.element[0],{trueSize:this.originalSize,baseClass:"uploadcare--jcrop",addClass:"uploadcare--crop-widget",createHandles:["nw","ne","se","sw"],bgColor:"transparent",bgOpacity:.8}),this.setCrop(i),this.setSelection()}return e.prototype.setCrop=function(e){return this.crop=e,this.__api.setOptions({aspectRatio:e.preferedSize?e.preferedSize[0]/e.preferedSize[1]:0,minSize:e.notLess?n.fitSize(e.preferedSize,this.originalSize):[0,0]})},e.prototype.setSelection=function(e){var t,i,a,r;return e?(t=e.center,a=[e.width,e.height]):(t=!0,a=this.originalSize),this.crop.preferedSize&&(a=n.fitSize(this.crop.preferedSize,a,!0)),t?(i=(this.originalSize[0]-a[0])/2,r=(this.originalSize[1]-a[1])/2):(i=e.left||0,r=e.top||0),this.__api.setSelect([i,r,a[0]+i,a[1]+r])},i=/-\/crop\/([0-9]+)x([0-9]+)(\/(center|([0-9]+),([0-9]+)))?\//i,e.prototype.__parseModifiers=function(e){var t;if(t=null!=e?e.match(i):void 0)return{width:parseInt(t[1],10),height:parseInt(t[2],10),center:"center"===t[4],left:parseInt(t[5],10)||void 0,top:parseInt(t[6],10)||void 0}},e.prototype.setSelectionFromModifiers=function(e){return this.setSelection(this.__parseModifiers(e))},e.prototype.getSelection=function(){var e,t,i;return e=this.__api.tellSelect(),{left:t=Math.round(Math.max(0,e.x)),top:i=Math.round(Math.max(0,e.y)),width:Math.round(Math.min(this.originalSize[0],e.x2))-t,height:Math.round(Math.min(this.originalSize[1],e.y2))-i}},e.prototype.applySelectionToFile=function(e){var t=this;return e.then(function(e){return n.applyCropCoordsToInfo(e,t.crop,t.originalSize,t.getSelection())})},e}()})}.call(this),function(){var t,e,i,n,r=function(e,t){return function(){return e.apply(t,arguments)}},a=[].slice;e=C.namespace,i=C.settings,t=C.jQuery,n=C.utils,e("files",function(e){return e.BaseFile=function(){function e(e,t,i){var a;this.settings=t,this.sourceInfo=null!=i?i:{},this.__extendApi=r(this.__extendApi,this),this.__cancel=r(this.__cancel,this),this.__resolveApi=r(this.__resolveApi,this),this.__rejectApi=r(this.__rejectApi,this),this.__runValidators=r(this.__runValidators,this),this.__fileInfo=r(this.__fileInfo,this),this.__handleFileData=r(this.__handleFileData,this),this.__updateInfo=r(this.__updateInfo,this),this.__completeUpload=r(this.__completeUpload,this),this.fileId=null,this.fileName=null,this.sanitizedName=null,this.fileSize=null,this.isStored=null,this.cdnUrlModifiers=null,this.isImage=null,this.imageInfo=null,this.mimeType=null,this.s3Bucket=null,(a=this.sourceInfo).source||(a.source=this.sourceName),this.__setupValidation(),this.__initApi()}return e.prototype.__startUpload=function(){return t.Deferred().resolve()},e.prototype.__completeUpload=function(){var e,t,i,a,r=this;return i=0,this.settings.debugUploads&&(n.debug("Load file info.",this.fileId,this.settings.publicKey),t=setInterval(function(){return n.debug("Still waiting for file ready.",i,r.fileId,r.settings.publicKey)},5e3),this.apiDeferred.done(function(){return n.debug("File uploaded.",i,r.fileId,r.settings.publicKey)}).always(function(){return clearInterval(t)})),a=100,(e=function(){if("pending"===r.apiDeferred.state())return i+=1,r.__updateInfo().done(function(){return setTimeout(e,a),a+=50})})()},e.prototype.__updateInfo=function(){var t=this;return n.jsonp(this.settings.urlBase+"/info/","GET",{jsonerrors:1,file_id:this.fileId,pub_key:this.settings.publicKey,wait_is_ready:+(null===this.isImage)},{headers:{"X-UC-User-Agent":this.settings._userAgent}}).fail(function(e){return t.settings.debugUploads&&n.log("Can't load file info. Probably removed.",t.fileId,t.settings.publicKey,e),t.__rejectApi("info")}).done(this.__handleFileData)},e.prototype.__handleFileData=function(e){if(this.fileName=e.original_filename,this.sanitizedName=e.filename,this.fileSize=e.size,this.isImage=e.is_image,this.imageInfo=e.image_info,this.mimeType=e.mime_type,this.isStored=e.is_stored,this.s3Bucket=e.s3_bucket,e.default_effects&&(this.cdnUrlModifiers="-/"+e.default_effects),this.s3Bucket&&this.cdnUrlModifiers&&this.__rejectApi("baddata"),this.__runValidators(),e.is_ready)return this.__resolveApi()},e.prototype.__progressInfo=function(){var e;return{state:this.__progressState,uploadProgress:this.__progress,progress:"ready"===(e=this.__progressState)||"error"===e?1:.9*this.__progress,incompleteFileInfo:this.__fileInfo()}},e.prototype.__fileInfo=function(){var e;return e=this.s3Bucket?"https://"+this.s3Bucket+".s3.amazonaws.com/"+this.fileId+"/"+this.sanitizedName:this.settings.cdnBase+"/"+this.fileId+"/",{uuid:this.fileId,name:this.fileName,size:this.fileSize,isStored:this.isStored,isImage:!this.s3Bucket&&this.isImage,originalImageInfo:this.imageInfo,mimeType:this.mimeType,originalUrl:this.fileId?e:null,cdnUrl:this.fileId?""+e+(this.cdnUrlModifiers||""):null,cdnUrlModifiers:this.cdnUrlModifiers,sourceInfo:this.sourceInfo}},e.prototype.__setupValidation=function(){if(this.validators=this.settings.validators||this.settings.__validators||[],this.settings.imagesOnly)return this.validators.push(function(e){if(!1===e.isImage)throw new Error("image")})},e.prototype.__runValidators=function(){var e,t,i,a,r,n,o;t=this.__fileInfo();try{for(n=this.validators,o=[],a=0,r=n.length;a<r;a++)i=n[a],o.push(i(t));return o}catch(l){return e=l,this.__rejectApi(e.message)}},e.prototype.__initApi=function(){return this.apiDeferred=t.Deferred(),this.__progressState="uploading",this.__progress=0,this.__notifyApi()},e.prototype.__notifyApi=function(){return this.apiDeferred.notify(this.__progressInfo())},e.prototype.__rejectApi=function(e){return this.__progressState="error",this.__notifyApi(),this.apiDeferred.reject(e,this.__fileInfo())},e.prototype.__resolveApi=function(){return this.__progressState="ready",this.__notifyApi(),this.apiDeferred.resolve(this.__fileInfo())},e.prototype.__cancel=function(){return this.__rejectApi("user")},e.prototype.__extendApi=function(e){var t=this;return e.cancel=this.__cancel,e.pipe=e.then=function(){return t.__extendApi(
n.fixedPipe.apply(n,[e].concat(a.call(arguments))))},e},e.prototype.promise=function(){var e,t=this;return this.__apiPromise||(this.__apiPromise=this.__extendApi(this.apiDeferred.promise()),this.__runValidators(),"pending"===this.apiDeferred.state()&&((e=this.__startUpload()).done(function(){return t.__progressState="uploaded",t.__progress=1,t.__notifyApi(),t.__completeUpload()}),e.progress(function(e){if(e>t.__progress)return t.__progress=e,t.__notifyApi()}),e.fail(function(){return t.__rejectApi("upload")}),this.apiDeferred.always(e.reject))),this.__apiPromise},e}()}),e("utils",function(i){return i.isFile=function(e){return e&&e.done&&e.fail&&e.cancel},i.valueToFile=function(e,t){return e&&!i.isFile(e)&&(e=C.fileFrom("uploaded",e,t)),e||null}})}.call(this),function(){var _,b,a,r,v,e,t;_=C.jQuery,v=C.utils,t=(e=C.utils).abilities,b=t.Blob,a=t.FileReader,r=t.URL,C.namespace("utils.image",function(m){var g,t;return g=F.DataView,t=v.taskRunner(1),m.shrinkFile=function(i,o){var l,e=this;return l=_.Deferred(),r&&g&&b?(t(function(e){var n;return l.always(e),(n=v.imageLoader(r.createObjectURL(i))).always(function(e){return r.revokeObjectURL(e.src)}),n.fail(function(){return l.reject("not image")}),n.done(function(t){return l.notify(.1),m.getExif(i).always(function(a){var e,r;return l.notify(.2),r="resolved"===n.state(),(n=m.shrinkImage(t,o)).progress(function(e){return l.notify(.2+.6*e)}),n.fail(l.reject),n.done(function(t){var e,i;return e="image/jpeg",i=o.quality||.8,!r&&m.hasTransparency(t)&&(e="image/png",i=void 0),v.canvasToBlob(t,e,i,function(e){return t.width=t.height=1,l.notify(.9),a?((n=m.replaceJpegChunk(e,225,[a.buffer])).done(l.resolve),n.fail(function(){return l.resolve(e)})):l.resolve(e)})}),null})})}),l.promise()):l.reject("support")},m.shrinkImage=function(i,e){var t,a,r,n,o,l,s,c,u,p,d,h,f;return a=_.Deferred(),h=.71,i.width*h*i.height*h<e.size?a.reject("not required"):(d=l=i.width,p=i.height,s=d/p,f=Math.floor(Math.sqrt(e.size*s)),r=Math.floor(e.size/Math.sqrt(e.size*s)),o=5e6,n=4096,c=function(){if(!(d<=f))return v.defer(function(){var e;return d=Math.round(d*h),p=Math.round(p*h),d*h<f&&(d=f,p=r),o<d*p&&(d=Math.floor(Math.sqrt(o*s)),p=Math.floor(o/Math.sqrt(o*s))),n<d&&(d=n,p=Math.round(d/s)),n<p&&(p=n,d=Math.round(s*p)),(e=pe.createElement("canvas")).width=d,e.height=p,e.getContext("2d").drawImage(i,0,0,d,p),i.src="//:0",i.width=i.height=1,i=e,a.notify((l-d)/(l-f)),c()});a.resolve(i)},u=function(){var e,t;return(e=pe.createElement("canvas")).width=f,e.height=r,(t=e.getContext("2d")).imageSmoothingQuality="high",t.drawImage(i,0,0,f,r),i.src="//:0",i.width=i.height=1,a.resolve(e)},"imageSmoothingQuality"in(t=pe.createElement("canvas").getContext("2d"))?u():c(),a.promise())},m.drawFileToCanvas=function(e,d,h,f,t){var g,i;return g=_.Deferred(),r?((i=v.imageLoader(r.createObjectURL(e))).always(function(e){return r.revokeObjectURL(e.src)}),i.fail(function(){return g.reject("not image")}),i.done(function(p){return g.always(function(){return p.src="//:0"}),t&&p.width*p.height>t?g.reject("max source"):m.getExif(e).always(function(e){var t,i,a,r,n,o,l,s,c,u;return o=(l=4<(n=m.parseExifOrientation(e)||1))?[p.height,p.width]:[p.width,p.height],(s=[[1,0,0,1,0,0],[-1,0,0,1,r=(c=v.fitSize(o,[d,h]))[0],0],[-1,0,0,-1,r,a=c[1]],[1,0,0,-1,0,a],[0,1,1,0,0,0],[0,1,-1,0,r,0],[0,-1,-1,0,r,a],[0,-1,1,0,0,a]][n-1])?((t=pe.createElement("canvas")).width=r,t.height=a,(i=t.getContext("2d")).transform.apply(i,s),l&&(r=(u=[a,r])[0],a=u[1]),f&&(i.fillStyle=f,i.fillRect(0,0,r,a)),i.drawImage(p,0,0,r,a),g.resolve(t,o)):g.reject("bad image")})}),g.promise()):g.reject("support")},m.readJpegChunks=function(r){var n,o,l,s,c;return c=function(e,t){var i;return(i=new a).onload=function(){return t(new g(i.result))},i.onerror=function(e){return n.reject("reader",e)},i.readAsArrayBuffer(e)},l=function(){return c(r.slice(o,o+128),function(e){var t,i,a;for(t=i=0,a=e.byteLength;0<=a?i<a:a<i;t=0<=a?++i:--i)if(255===e.getUint8(t)){o+=t;break}return s()})},s=function(){var a;return a=o,c(r.slice(o,o+=4),function(e){var t,i;return 4!==e.byteLength||255!==e.getUint8(0)?n.reject("corrupted"):218===(i=e.getUint8(1))?n.resolve():(t=e.getUint16(2)-2,c(r.slice(o,o+=t),function(e){return e.byteLength!==t?n.reject("corrupted"):(n.notify(a,t,i,e),l())}))})},n=_.Deferred(),a&&g?(o=2,c(r.slice(0,2),function(e){return 65496!==e.getUint16(0)?n.reject("not jpeg"):l()}),n.promise()):n.reject("support")},m.replaceJpegChunk=function(c,u,p){var d,h,f,e;return d=_.Deferred(),f=[],h=[],(e=m.readJpegChunks(c)).fail(d.reject),e.progress(function(e,t,i){if(i===u)return f.push(e),h.push(t)}),e.done(function(){var e,t,i,a,r,n,o,l,s;for(a=[c.slice(0,2)],n=0,l=p.length;n<l;n++)e=p[n],(i=new g(new ArrayBuffer(4))).setUint16(0,65280+u),i.setUint16(2,e.byteLength+2),a.push(i.buffer),a.push(e);for(r=2,t=o=0,s=f.length;0<=s?o<s:s<o;t=0<=s?++o:--o)f[t]>r&&a.push(c.slice(r,f[t])),r=f[t]+h[t]+4;return a.push(c.slice(r,c.size)),d.resolve(new b(a,{type:c.type}))}),d.promise()},m.getExif=function(e){var r,t;return r=null,(t=m.readJpegChunks(e)).progress(function(e,t,i,a){if(!r&&225===i&&14<=a.byteLength&&1165519206===a.getUint32(0)&&0===a.getUint16(4))return r=a}),t.then(function(){return r},function(e){return _.Deferred().reject(r,e)})},m.parseExifOrientation=function(e){var t,i,a,r,n;if(!e||e.byteLength<14||1165519206!==e.getUint32(0)||0!==e.getUint16(4))return null;if(18761===e.getUint16(6))a=!0;else{if(19789!==e.getUint16(6))return null;a=!1}if(42!==e.getUint16(8,a))return null;for(r=8+e.getUint32(10,a),t=e.getUint16(r-2,a),i=n=0;0<=t?n<t:t<n;i=0<=t?++n:--n){if(e.byteLength<r+10)return null;if(274===e.getUint16(r,a))return e.getUint16(r+8,a);r+=12}return null},m.hasTransparency=function(e){var t,i,a,r,n,o,l;for(n=50,(t=pe.createElement("canvas")).width=t.height=n,(i=t.getContext("2d")).drawImage(e,0,0,n,n),a=i.getImageData(0,0,n,n).data,t.width=t.height=1,r=o=3,l=a.length;o<l;r=o+=4)if(a[r]<254)return!0;return!1}})}.call(this),function(){var m,_,a=function(e,t){return function(){return e.apply(t,arguments)}},r={}.hasOwnProperty,n=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};m=C.jQuery,_=C.utils,C.namespace("files",function(e){return e.ObjectFile=function(e){var t;function i(e){this.__file=e,this.setFile=a(this.setFile,this),i.__super__.constructor.apply(this,arguments),this.fileName=this.__file.name||"original",this.__notifyApi()}return n(i,e),t=null,i.prototype.sourceName="local",i.prototype.setFile=function(e){if(e&&(this.__file=e),this.sourceInfo.file=this.__file,this.__file)return this.fileSize=this.__file.size,this.fileType=this.__file.type||"application/octet-stream",this.settings.debugUploads&&_.debug("Use local file.",this.fileName,this.fileType,this.fileSize),this.__runValidators(),this.__notifyApi()},i.prototype.__startUpload=function(){var t,e,i,a=this;return this.apiDeferred.always(function(){return a.__file=null}),this.__file.size>=this.settings.multipartMinSize&&_.abilities.Blob?(this.setFile(),this.multipartUpload()):(e=_.abilities.iOSVersion,!this.settings.imageShrink||e&&e<8?(this.setFile(),this.directUpload()):(t=m.Deferred(),i=.4,_.image.shrinkFile(this.__file,this.settings.imageShrink).progress(function(e){return t.notify(e*i)}).done(this.setFile).fail(function(){return a.setFile(),i*=.1}).always(function(){return t.notify(i),a.directUpload().done(t.resolve).fail(t.reject).progress(function(e){return t.notify(i+e*(1-i))})}),t))},i.prototype.__autoAbort=function(e){return this.apiDeferred.fail(e.abort),e},i.prototype.directRunner=function(e){return t||(t=_.taskRunner(this.settings.parallelDirectUploads)),t(e)},i.prototype.directUpload=function(){var i,a=this;return i=m.Deferred(),this.__file?104857600<this.fileSize?this.__rejectApi("size"):this.directRunner(function(e){var t;if(i.always(e),"pending"===a.apiDeferred.state())return(t=new FormData).append("UPLOADCARE_PUB_KEY",a.settings.publicKey),t.append("signature",a.settings.secureSignature),t.append("expire",a.settings.secureExpire),t.append("UPLOADCARE_STORE",a.settings.doNotStore?"":"auto"),t.append("file",a.__file,
a.fileName),t.append("file_name",a.fileName),t.append("source",a.sourceInfo.source),a.__autoAbort(m.ajax({xhr:function(){var e;return(e=m.ajaxSettings.xhr()).upload&&e.upload.addEventListener("progress",function(e){return i.notify(e.loaded/e.total)},!1),e},crossDomain:!0,type:"POST",url:a.settings.urlBase+"/base/?jsonerrors=1",headers:{"X-UC-User-Agent":a.settings._userAgent},contentType:!1,processData:!1,data:t,dataType:"json",error:i.reject,success:function(e){return(null!=e?e.file:void 0)?(a.fileId=e.file,i.resolve()):i.reject()}}))}):this.__rejectApi("baddata"),i},i.prototype.multipartUpload=function(){var t,i=this;return t=m.Deferred(),this.__file&&this.multipartStart().done(function(e){return i.uploadParts(e.parts,e.uuid).done(function(){return i.multipartComplete(e.uuid).done(function(e){return i.fileId=e.uuid,i.__handleFileData(e),t.resolve()}).fail(t.reject)}).progress(t.notify).fail(t.reject)}).fail(t.reject),t},i.prototype.multipartStart=function(){var t,i=this;return t={UPLOADCARE_PUB_KEY:this.settings.publicKey,signature:this.settings.secureSignature,expire:this.settings.secureExpire,filename:this.fileName,source:this.sourceInfo.source,size:this.fileSize,content_type:this.fileType,part_size:this.settings.multipartPartSize,UPLOADCARE_STORE:this.settings.doNotStore?"":"auto"},this.__autoAbort(_.jsonp(this.settings.urlBase+"/multipart/start/?jsonerrors=1","POST",t,{headers:{"X-UC-User-Agent":this.settings._userAgent}}).fail(function(e){if(i.settings.debugUploads)return _.log("Can't start multipart upload.",e,t)}))},i.prototype.uploadParts=function(n,o){var l,e,s,c,u,p,d,h,f,t,i,g=this;for(u=[],c=Date.now(),f=function(e,t){var i,a,r;if(u[e]=t,!(Date.now()-c<250)){for(c=Date.now(),a=i=0,r=u.length;a<r;a++)i+=t=u[a];return l.notify(i/g.fileSize)}},l=m.Deferred(),p=function(){var e,t,i,a,r;if(!(d>=g.fileSize))return i=d+g.settings.multipartPartSize,g.fileSize<i+g.settings.multipartMinLastPartSize&&(i=g.fileSize),t=g.__file.slice(d,i),d=i,a=h,s+=1,h+=1,e=0,(r=function(){if("pending"===g.apiDeferred.state())return u[a]=0,g.__autoAbort(m.ajax({xhr:function(){var e;return(e=m.ajaxSettings.xhr()).responseType="text",e.upload&&e.upload.addEventListener("progress",function(e){return f(a,e.loaded)},!1),e},url:n[a],crossDomain:!0,type:"PUT",processData:!1,contentType:g.fileType,data:t,error:function(){return(e+=1)>g.settings.multipartMaxAttempts?(g.settings.debugUploads&&_.log("Part #"+a+" and file upload is failed.",o),l.reject()):(g.settings.debugUploads&&_.debug("Part #"+a+"("+e+") upload is failed.",o),r())},success:function(){if(s-=1,p(),!s)return l.resolve()}}))})()},e=t=d=h=s=0,i=this.settings.multipartConcurrency;0<=i?t<i:i<t;e=0<=i?++t:--t)p();return l},i.prototype.multipartComplete=function(t){var e,i=this;return e={UPLOADCARE_PUB_KEY:this.settings.publicKey,uuid:t},this.__autoAbort(_.jsonp(this.settings.urlBase+"/multipart/complete/?jsonerrors=1","POST",e,{headers:{"X-UC-User-Agent":this.settings._userAgent}}).fail(function(e){if(i.settings.debugUploads)return _.log("Can't complete multipart upload.",t,i.settings.publicKey,e)}))},i}(e.BaseFile)})}.call(this),function(){var r,i,a=function(e,t){return function(){return e.apply(t,arguments)}},n={}.hasOwnProperty,o=function(e,t){for(var i in t)n.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};r=C.jQuery,i=C.utils,C.namespace("files",function(e){return e.InputFile=function(e){function t(e){this.__input=e,this.__cleanUp=a(this.__cleanUp,this),t.__super__.constructor.apply(this,arguments),this.fileId=i.uuid(),this.fileName=r(this.__input).val().split("\\").pop(),this.__notifyApi()}return o(t,e),t.prototype.sourceName="local-compat",t.prototype.__startUpload=function(){var e,t,i,a;return e=r.Deferred(),a=this.settings.urlBase+"/iframe/",i="uploadcare--iframe-"+this.fileId,this.__iframe=r("<iframe>").attr({id:i,name:i}).css("display","none").appendTo("body").on("load",e.resolve).on("error",e.reject),t=function(e,t){return r("<input/>",{type:"hidden",name:e,value:t})},r(this.__input).attr("name","file"),this.__iframeForm=r("<form>").attr({method:"POST",action:a,enctype:"multipart/form-data",target:i}).append(t("UPLOADCARE_PUB_KEY",this.settings.publicKey)).append(t("UPLOADCARE_SIGNATURE",this.settings.secureSignature)).append(t("UPLOADCARE_EXPIRE",this.settings.secureExpire)).append(t("UPLOADCARE_FILE_ID",this.fileId)).append(t("UPLOADCARE_STORE",this.settings.doNotStore?"":"auto")).append(t("UPLOADCARE_SOURCE",this.sourceInfo.source)).append(this.__input).css("display","none").appendTo("body").submit(),e.always(this.__cleanUp)},t.prototype.__cleanUp=function(){var e,t;return null!=(e=this.__iframe)&&e.off("load error").remove(),null!=(t=this.__iframeForm)&&t.remove(),this.__iframe=null,this.__iframeForm=null},t}(e.BaseFile)})}.call(this),function(){var C,o,e;Function.prototype.scopedTo===undefined&&(Function.prototype.scopedTo=function(e,t){var i=this;return function(){return i.apply(e,Array.prototype.slice.call(t||[]).concat(Array.prototype.slice.call(arguments)))}}),(C=function(e,t){this.options=t||{},this.key=e,this.channels=new C.Channels,this.global_emitter=new C.EventsDispatcher;var a=this;this.checkAppKey(),this.connection=new C.Connection(this.key,this.options),this.connection.bind("connected",function(){a.subscribeAll()}).bind("message",function(e){var t=0===e.event.indexOf("pusher_internal:"),i;e.channel&&(i=a.channel(e.channel))&&i.emit(e.event,e.data),t||a.global_emitter.emit(e.event,e.data)}).bind("disconnected",function(){a.channels.disconnect()}).bind("error",function(e){C.warn("Error",e)}),C.instances.push(this),C.isReady&&a.connect()}).instances=[],C.prototype={channel:function(e){return this.channels.find(e)},connect:function(){this.connection.connect()},disconnect:function(){this.connection.disconnect()},bind:function(e,t){return this.global_emitter.bind(e,t),this},bind_all:function(e){return this.global_emitter.bind_all(e),this},subscribeAll:function(){var e;for(channelName in this.channels.channels)this.channels.channels.hasOwnProperty(channelName)&&this.subscribe(channelName)},subscribe:function(i){var a=this,r=this.channels.add(i,this);return"connected"===this.connection.state&&r.authorize(this.connection.socket_id,this.options,function(e,t){e?r.emit("pusher:subscription_error",t):a.send_event("pusher:subscribe",{channel:i,auth:t.auth,channel_data:t.channel_data})}),r},unsubscribe:function(e){this.channels.remove(e),"connected"===this.connection.state&&this.send_event("pusher:unsubscribe",{channel:e})},send_event:function(e,t,i){return this.connection.send_event(e,t,i)},checkAppKey:function(){null!==this.key&&this.key!==undefined||C.warn("Warning","You must pass your app key when you instantiate Pusher.")}},C.Util={extend:function a(e,t){for(var i in t)t[i]&&t[i].constructor&&t[i].constructor===Object?e[i]=a(e[i]||{},t[i]):e[i]=t[i];return e},stringify:function r(){for(var e=["Pusher"],t=0;t<arguments.length;t++)"string"==typeof arguments[t]?e.push(arguments[t]):F.JSON==undefined?e.push(arguments[t].toString()):e.push(JSON.stringify(arguments[t]));return e.join(" : ")},arrayIndexOf:function(e,t){var a=Array.prototype.indexOf;if(null==e)return-1;if(a&&e.indexOf===a)return e.indexOf(t);for(i=0,l=e.length;i<l;i++)if(e[i]===t)return i;return-1}},C.debug=function(){C.log&&C.log(C.Util.stringify.apply(this,arguments))},C.warn=function(){if(F.console&&F.console.warn)F.console.warn(C.Util.stringify.apply(this,arguments));else{if(!C.log)return;C.log(C.Util.stringify.apply(this,arguments))}},C.VERSION="1.12.2",C.host="ws.pusherapp.com",C.ws_port=80,C.wss_port=443,C.channel_auth_endpoint="/pusher/auth",C.cdn_http="http://js.pusher.com/",C.cdn_https="https://d3dy5gmtp8yhk7.cloudfront.net/",C.dependency_suffix=".min",C.channel_auth_transport="ajax",C.activity_timeout=12e4,C.pong_timeout=3e4,C.isReady=!1,C.ready=function(){C.isReady=!0;for(var e=0,t=C.instances.length;e<t;e++)C.instances[e].connect()},function(){function t(){this._callbacks={}}function e(e){this.callbacks=new t,this.global_callbacks=[],this.failThrough=e}t.prototype.get=function(e){return this._callbacks[this._prefix(e)]},
t.prototype.add=function(e,t){var i=this._prefix(e);this._callbacks[i]=this._callbacks[i]||[],this._callbacks[i].push(t)},t.prototype.remove=function(e,t){if(this.get(e)){var i=C.Util.arrayIndexOf(this.get(e),t);this._callbacks[this._prefix(e)].splice(i,1)}},t.prototype._prefix=function(e){return"_"+e},e.prototype.bind=function(e,t){return this.callbacks.add(e,t),this},e.prototype.unbind=function(e,t){return this.callbacks.remove(e,t),this},e.prototype.emit=function(e,t){for(var i=0;i<this.global_callbacks.length;i++)this.global_callbacks[i](e,t);var a=this.callbacks.get(e);if(a)for(var i=0;i<a.length;i++)a[i](t);else this.failThrough&&this.failThrough(e,t);return this},e.prototype.bind_all=function(e){return this.global_callbacks.push(e),this},C.EventsDispatcher=e}(),function(){function r(e){return e.substr(0,1).toUpperCase()+e.substr(1)}function n(e,t,i){t[e]!==undefined&&t[e](i)}function e(e,t,i){C.EventsDispatcher.call(this),this.state=undefined,this.errors=[],this.stateActions=i,this.transitions=t,this.transition(e)}e.prototype.transition=function(e,t){var i=this.state,a=this.stateActions;if(i&&-1==C.Util.arrayIndexOf(this.transitions[i],e))throw this.emit("invalid_transition_attempt",{oldState:i,newState:e}),new Error("Invalid transition ["+i+" to "+e+"]");n(i+"Exit",a,t),n(i+"To"+r(e),a,t),n(e+"Pre",a,t),this.state=e,this.emit("state_change",{oldState:i,newState:e}),n(e+"Post",a,t)},e.prototype.is=function(e){return this.state===e},e.prototype.isNot=function(e){return this.state!==e},C.Util.extend(e.prototype,C.EventsDispatcher.prototype),C.Machine=e}(),(e=function(){var e=this;C.EventsDispatcher.call(this),F.addEventListener!==undefined&&(F.addEventListener("online",function(){e.emit("online",null)},!1),F.addEventListener("offline",function(){e.emit("offline",null)},!1))}).prototype.isOnLine=function(){return F.navigator.onLine===undefined||F.navigator.onLine},C.Util.extend(e.prototype,C.EventsDispatcher.prototype),C.NetInfo=e,function(){var _={initialized:["waiting","failed"],waiting:["connecting","permanentlyClosed"],connecting:["open","permanentlyClosing","impermanentlyClosing","waiting"],open:["connected","permanentlyClosing","impermanentlyClosing","waiting"],connected:["permanentlyClosing","waiting"],impermanentlyClosing:["waiting","permanentlyClosing"],permanentlyClosing:["permanentlyClosed"],permanentlyClosed:["waiting","failed"],failed:["permanentlyClosed"]},b=2e3,v=2e3,y=2e3,x=5*b,w=5*v,k=5*y;function z(e){e.connectionWait=0,"flash"===C.TransportType?e.openTimeout=5e3:e.openTimeout=2e3,e.connectedTimeout=2e3,e.connectionSecure=e.compulsorySecure,e.connectionAttempts=0}function e(e,t){var a=this;function i(){a.connectionWait<x&&(a.connectionWait+=b),a.openTimeout<w&&(a.openTimeout+=v),a.connectedTimeout<k&&(a.connectedTimeout+=y),!0!==a.compulsorySecure&&(a.connectionSecure=!a.connectionSecure),a.connectionAttempts++}function r(e,t){var i=C.ws_port,a="ws://";(t||"https:"===pe.location.protocol)&&(i=C.wss_port,a="wss://");var r="flash"===C.TransportType?"true":"false";return a+C.host+":"+i+"/app/"+e+"?protocol=5&client=js&version="+C.VERSION+"&flash="+r}function n(){a._machine.transition("impermanentlyClosing")}function o(){a._activityTimer&&clearTimeout(a._activityTimer),a._activityTimer=setTimeout(function(){a.send_event("pusher:ping",{}),a._activityTimer=setTimeout(function(){a.socket.close()},a.options.pong_timeout||C.pong_timeout)},a.options.activity_timeout||C.activity_timeout)}function l(){a._activityTimer&&clearTimeout(a._activityTimer)}function s(){var e=a.connectionWait;if(0===e&&a.connectedAt){var t=1e3,i=(new Date).getTime()-a.connectedAt;i<t&&(e=t-i)}return e}function c(){a._machine.transition("open")}function u(e,t){a.emit("error",{type:"PusherError",data:{code:e,message:t}}),4e3===e?(a.compulsorySecure=!0,a.connectionSecure=!0,a.options.encrypted=!0,n()):e<4100?a._machine.transition("permanentlyClosing"):e<4200?(a.connectionWait=1e3,a._machine.transition("waiting")):e<4300?n():a._machine.transition("permanentlyClosing")}function p(e){var t=h(e);t!==undefined&&("pusher:connection_established"===t.event?a._machine.transition("connected",t.data.socket_id):"pusher:error"===t.event&&u(t.data.code,t.data.message))}function d(e){o();var t=h(e);if(t!==undefined){switch(C.debug("Event recd",t),t.event){case"pusher:error":a.emit("error",{type:"PusherError",data:t.data});break;case"pusher:ping":a.send_event("pusher:pong",{})}a.emit("message",t)}}function h(e){try{var t=JSON.parse(e.data);if("string"==typeof t.data)try{t.data=JSON.parse(t.data)}catch(i){if(!(i instanceof SyntaxError))throw i}return t}catch(i){a.emit("error",{type:"MessageParseError",error:i,data:e.data})}}function f(){a._machine.transition("waiting")}function g(e){a.emit("error",{type:"WebSocketError",error:e})}function m(e,t){var i=a.state;i!==(a.state=e)&&(C.debug("State changed",i+" -> "+e),a.emit("state_change",{previous:i,current:e}),a.emit(e,t))}C.EventsDispatcher.call(this),this.options=C.Util.extend({encrypted:!1},t),this.netInfo=new C.NetInfo,this.netInfo.bind("online",function(){a._machine.is("waiting")&&(a._machine.transition("connecting"),m("connecting"))}),this.netInfo.bind("offline",function(){a._machine.is("connected")&&(a.socket.onclose=undefined,a.socket.onmessage=undefined,a.socket.onerror=undefined,a.socket.onopen=undefined,a.socket.close(),a.socket=undefined,a._machine.transition("waiting"))}),this._machine=new C.Machine("initialized",_,{initializedPre:function(){a.compulsorySecure=a.options.encrypted,a.key=e,a.socket=null,a.socket_id=null,a.state="initialized"},waitingPre:function(){0<a.connectionWait&&a.emit("connecting_in",a.connectionWait),a.netInfo.isOnLine()&&a.connectionAttempts<=4?m("connecting"):m("unavailable"),a.netInfo.isOnLine()&&(a._waitingTimer=setTimeout(function(){a._machine.transition("connecting")},s()))},waitingExit:function(){clearTimeout(a._waitingTimer)},connectingPre:function(){if(!1===a.netInfo.isOnLine())return a._machine.transition("waiting"),void m("unavailable");var e=r(a.key,a.connectionSecure);C.debug("Connecting",e),a.socket=new C.Transport(e),a.socket.onopen=c,a.socket.onclose=f,a.socket.onerror=g,a._connectingTimer=setTimeout(n,a.openTimeout)},connectingExit:function(){clearTimeout(a._connectingTimer),a.socket.onopen=undefined},connectingToWaiting:function(){i()},connectingToImpermanentlyClosing:function(){i()},openPre:function(){a.socket.onmessage=p,a.socket.onerror=g,a.socket.onclose=f,a._openTimer=setTimeout(n,a.connectedTimeout)},openExit:function(){clearTimeout(a._openTimer),a.socket.onmessage=undefined},openToWaiting:function(){i()},openToImpermanentlyClosing:function(){i()},connectedPre:function(e){a.socket_id=e,a.socket.onmessage=d,a.socket.onerror=g,a.socket.onclose=f,z(a),a.connectedAt=(new Date).getTime(),o()},connectedPost:function(){m("connected")},connectedExit:function(){l(),m("disconnected")},impermanentlyClosingPost:function(){a.socket&&(a.socket.onclose=f,a.socket.close())},permanentlyClosingPost:function(){a.socket?(a.socket.onclose=function(){z(a),a._machine.transition("permanentlyClosed")},a.socket.close()):(z(a),a._machine.transition("permanentlyClosed"))},failedPre:function(){m("failed"),C.debug("WebSockets are not available in this browser.")},permanentlyClosedPost:function(){m("disconnected")}})}e.prototype.connect=function(){this._machine.is("failed")||C.Transport?this._machine.is("initialized")?(z(this),this._machine.transition("waiting")):this._machine.is("waiting")&&!0===this.netInfo.isOnLine()?this._machine.transition("connecting"):this._machine.is("permanentlyClosed")&&(z(this),this._machine.transition("waiting")):this._machine.transition("failed")},e.prototype.send=function(e){if(this._machine.is("connected")){var t=this;return setTimeout(function(){t.socket.send(e)},0),!0}return!1},e.prototype.send_event=function(e,t,i){var a={event:e,data:t};return i&&(a.channel=i),C.debug("Event sent",a),this.send(JSON.stringify(a))},e.prototype.disconnect=function(){this._machine.is("permanentlyClosed")||(this._machine.is("waiting")||this._machine.is("failed")?this._machine.transition("permanentlyClosed"):this._machine.transition("permanentlyClosing"))},C.Util.extend(e.prototype,
C.EventsDispatcher.prototype),C.Connection=e}(),function(){C.Channels=function(){this.channels={}},C.Channels.prototype={add:function(e,t){var i=this.find(e);if(i)return i;var a=C.Channel.factory(e,t);return this.channels[e]=a},find:function(e){return this.channels[e]},remove:function(e){delete this.channels[e]},disconnect:function(){for(var e in this.channels)this.channels[e].disconnect()}},C.Channel=function(i,e){var t=this;C.EventsDispatcher.call(this,function(e,t){C.debug("No callbacks on "+i+" for "+e)}),this.pusher=e,this.name=i,this.subscribed=!1,this.bind("pusher_internal:subscription_succeeded",function(e){t.onSubscriptionSucceeded(e)})},C.Channel.prototype={init:function(){},disconnect:function(){this.subscribed=!1,this.emit("pusher_internal:disconnected")},onSubscriptionSucceeded:function(e){this.subscribed=!0,this.emit("pusher:subscription_succeeded")},authorize:function(e,t,i){return i(!1,{})},trigger:function(e,t){return this.pusher.send_event(e,t,this.name)}},C.Util.extend(C.Channel.prototype,C.EventsDispatcher.prototype),C.Channel.PrivateChannel={authorize:function(e,t,i){var a=this,r;return new C.Channel.Authorizer(this,C.channel_auth_transport,t).authorize(e,function(e,t){e||a.emit("pusher_internal:authorized",t),i(e,t)})}},C.Channel.PresenceChannel={init:function(){this.members=new e(this)},onSubscriptionSucceeded:function(e){this.subscribed=!0}};var e=function(i){var a=this,e=function(){this._members_map={},this.count=0,this.me=null};e.call(this),i.bind("pusher_internal:authorized",function(e){var t=JSON.parse(e.channel_data);i.bind("pusher_internal:subscription_succeeded",function(e){a._members_map=e.presence.hash,a.count=e.presence.count,a.me=a.get(t.user_id),i.emit("pusher:subscription_succeeded",a)})}),i.bind("pusher_internal:member_added",function(e){null===a.get(e.user_id)&&a.count++,a._members_map[e.user_id]=e.user_info,i.emit("pusher:member_added",a.get(e.user_id))}),i.bind("pusher_internal:member_removed",function(e){var t=a.get(e.user_id);t&&(delete a._members_map[e.user_id],a.count--,i.emit("pusher:member_removed",t))}),i.bind("pusher_internal:disconnected",function(){e.call(a)})};e.prototype={each:function(e){for(var t in this._members_map)e(this.get(t))},get:function(e){return this._members_map.hasOwnProperty(e)?{id:e,info:this._members_map[e]}:null}},C.Channel.factory=function(e,t){var i=new C.Channel(e,t);return 0===e.indexOf("private-")?C.Util.extend(i,C.Channel.PrivateChannel):0===e.indexOf("presence-")&&(C.Util.extend(i,C.Channel.PrivateChannel),C.Util.extend(i,C.Channel.PresenceChannel)),i.init(),i}}(),C.Channel.Authorizer=function(e,t,i){this.channel=e,this.type=t,this.authOptions=(i||{}).auth||{}},C.Channel.Authorizer.prototype={composeQuery:function(e){var t="&socket_id="+encodeURIComponent(e)+"&channel_name="+encodeURIComponent(this.channel.name);for(var i in this.authOptions.params)t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(this.authOptions.params[i]);return t},authorize:function(e,t){return C.authorizers[this.type].call(this,e,t)}},C.auth_callbacks={},C.authorizers={ajax:function(e,a){var t=this,r;for(var i in(r=C.XHR?new C.XHR:F.XMLHttpRequest?new F.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("POST",C.channel_auth_endpoint,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this.authOptions.headers)r.setRequestHeader(i,this.authOptions.headers[i]);return r.onreadystatechange=function(){if(4==r.readyState)if(200==r.status){var e,t=!1;try{e=JSON.parse(r.responseText),t=!0}catch(i){a(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+r.responseText)}t&&a(!1,e)}else C.warn("Couldn't get auth info from your webapp",r.status),a(!0,r.status)},r.send(this.composeQuery(e)),r},jsonp:function(e,t){this.authOptions.headers!==undefined&&C.warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var i=pe.createElement("script");C.auth_callbacks[this.channel.name]=function(e){t(!1,e)};var a="Pusher.auth_callbacks['"+this.channel.name+"']";i.src=C.channel_auth_endpoint+"?callback="+encodeURIComponent(a)+this.composeQuery(e);var r=pe.getElementsByTagName("head")[0]||pe.documentElement;r.insertBefore(i,r.firstChild)}};var o=function(){function r(e,t){pe.addEventListener?e.addEventListener("load",t,!1):e.attachEvent("onreadystatechange",function(){"loaded"!=e.readyState&&"complete"!=e.readyState||t()})}function n(e,t){var i=pe.getElementsByTagName("head")[0],a=pe.createElement("script");a.setAttribute("src",e),a.setAttribute("type","text/javascript"),a.setAttribute("async",!0),r(a,function(){t()}),i.appendChild(a)}return function(e,t){for(var i=0,a=0;a<e.length;a++)n(e[a],function(){e.length==++i&&setTimeout(t,0)})}}();!function(){!F.WebSocket&&F.MozWebSocket&&(F.WebSocket=F.MozWebSocket),F.WebSocket&&(C.Transport=F.WebSocket,C.TransportType="native");var e,t=("http:"==pe.location.protocol?C.cdn_http:C.cdn_https)+C.VERSION,i=[];F.JSON||i.push(t+"/json2"+C.dependency_suffix+".js"),F.WebSocket||(F.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0,i.push(t+"/flashfallback"+C.dependency_suffix+".js"));var a=F.WebSocket?function(){C.ready()}:function(){F.WebSocket?(C.Transport=F.WebSocket,C.TransportType="flash",F.WEB_SOCKET_SWF_LOCATION="https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf",WebSocket.__addTask(function(){C.ready()}),WebSocket.__initialize()):(C.Transport=null,C.TransportType="none",C.ready())},r=function(e){var t=function(){pe.body?e():setTimeout(t,0)};t()},n=function(){r(a)};0<i.length?o(i,n):n()}(),this.Pusher=C}.call(C),function(){var r,n={}.hasOwnProperty,o=function(e,t){for(var i in t)n.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};r=C.jQuery,C.namespace("utils.pusher",function(e){var t,i,a;return i={},C.Pusher.prototype.constructor=C.Pusher,t=function(e){function i(){return a=i.__super__.constructor.apply(this,arguments)}return o(i,e),i.prototype.subscribe=function(e){return this.disconnectTimeout&&(clearTimeout(this.disconnectTimeout),this.disconnectTimeout=null),this.connect(),i.__super__.subscribe.apply(this,arguments)},i.prototype.unsubscribe=function(e){var t=this;if(i.__super__.unsubscribe.apply(this,arguments),r.isEmptyObject(this.channels.channels))return this.disconnectTimeout=setTimeout(function(){return t.disconnectTimeout=null,t.disconnect()},5e3)},i}(C.Pusher),e.getPusher=function(e){return null==i[e]&&(i[e]=new t(e)),i[e].connect(),i[e]}})}.call(this),function(){var s,i,c,n=function(e,t){return function(){return e.apply(t,arguments)}},r={}.hasOwnProperty,t=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};s=C.jQuery,c=C.utils,i=C.utils.pusher,C.namespace("files",function(e){var o,l;return e.UrlFile=function(e){function r(e){var t,i;if(this.__url=e,this.__listenWatcher=n(this.__listenWatcher,this),r.__super__.constructor.apply(this,arguments),i=c.splitUrlRegex.exec(this.__url)[3].split("/").pop())try{this.fileName=decodeURIComponent(i)}catch(a){t=a,this.fileName=i}this.__notifyApi()}return t(r,e),r.prototype.sourceName="url",r.prototype.allEvents="progress success error fail",r.prototype.setName=function(e){return this.fileName=e,this.__realFileName=e,this.__notifyApi()},r.prototype.setIsImage=function(e){return this.isImage=e,this.__notifyApi()},r.prototype.__startUpload=function(){var t,i,a,r,n=this;return i=s.Deferred(),r=new l(this.settings),a=new o(this.settings),t={pub_key:this.settings.publicKey,signature:this.settings.secureSignature,expire:this.settings.secureExpire,source_url:this.__url,filename:this.__realFileName||"",source:this.sourceInfo.source,store:this.settings.doNotStore?"":"auto",jsonerrors:1},c.defer(function(){if("pending"===n.apiDeferred.state())return c.jsonp(n.settings.urlBase+"/from_url/","GET",t,{headers:{"X-UC-User-Agent":n.settings._userAgent}}).fail(function(e){return n.settings.debugUploads&&c.debug("Can't start upload from URL.",e,t),i.reject()}).done(function(e){var t;if("pending"===n.apiDeferred.state()
)return n.settings.debugUploads&&(c.debug("Start watchers.",e.token),t=setInterval(function(){return c.debug("Still watching.",e.token)},5e3),i.done(function(){return c.debug("Stop watchers.",e.token)}).always(function(){return clearInterval(t)})),n.__listenWatcher(i,s([r,a])),i.always(function(){return s([r,a]).off(n.allEvents),r.stopWatching(),a.stopWatching()}),s(r).one(n.allEvents,function(){if(a.interval)return n.settings.debugUploads&&c.debug("Start using pusher.",e.token),a.stopWatching()}),r.watch(e.token),a.watch(e.token)})}),i},r.prototype.__listenWatcher=function(i,e){var a=this;return e.on("progress",function(e,t){return a.fileSize=t.total,i.notify(t.done/t.total)}).on("success",function(e,t){return s(e.target).trigger("progress",t),a.fileId=t.uuid,a.__handleFileData(t),i.resolve()}).on("error fail",i.reject)},r}(e.BaseFile),l=function(){function e(e){this.settings=e;try{this.pusher=i.getPusher(this.settings.pusherKey)}catch(t){this.pusher=null}}return e.prototype.watch=function(e){var t,i=this;if(this.token=e,this.pusher)return(t=this.pusher.subscribe("task-status-"+this.token)).bind_all(function(e,t){return s(i).trigger(e,t)})},e.prototype.stopWatching=function(){if(this.pusher)return this.pusher.unsubscribe("task-status-"+this.token)},e}(),o=function(){function e(e){this.settings=e,this.poolUrl=this.settings.urlBase+"/from_url/status/"}return e.prototype.watch=function(e){var t,i=this;return this.token=e,(t=function(){return i.interval=setTimeout(function(){return i.__updateStatus().done(function(){if(i.interval)return t()})},333)})()},e.prototype.stopWatching=function(){return this.interval&&clearTimeout(this.interval),this.interval=null},e.prototype.__updateStatus=function(){var t=this;return c.jsonp(this.poolUrl,"GET",{token:this.token},{headers:{"X-UC-User-Agent":this.settings._userAgent}}).fail(function(e){return s(t).trigger("error")}).done(function(e){return s(t).trigger(e.status,e)})},e}()})}.call(this),function(){var e,a,r={}.hasOwnProperty,n=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};e=C.jQuery,a=C.utils,C.namespace("files",function(e){return e.UploadedFile=function(e){function i(e){var t;i.__super__.constructor.apply(this,arguments),(t=a.splitCdnUrl(e))?(this.fileId=t[1],t[2]&&(this.cdnUrlModifiers=t[2])):this.__rejectApi("baddata")}return n(i,e),i.prototype.sourceName="uploaded",i}(e.BaseFile),e.ReadyFile=function(e){function t(e){t.__super__.constructor.apply(this,arguments),e?(this.fileId=e.uuid,this.__handleFileData(e)):this.__rejectApi("deleted")}return n(t,e),t.prototype.sourceName="uploaded",t}(e.BaseFile)})}.call(this),function(){var o,e,n,t,u,p,i,l=[].slice,r={}.hasOwnProperty,s=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};e=C.namespace,o=C.jQuery,p=C.utils,i=C.locale,t=i.t,n=C.settings,u=C.files,e("files",function(e){return e.FileGroup=function(){function e(e,t){var i=this,r;this.__uuid=null,this.settings=n.build(t),this.__fileColl=new p.CollectionOfPromises(e),this.__allFilesDf=o.when.apply(o,this.files()),this.__fileInfosDf=(e=function(){var e,t,i,a;for(a=[],e=0,t=(i=this.files()).length;e<t;e++)r=i[e],a.push(r.then(null,function(e,t){return o.when(t)}));return a}.call(i),o.when.apply(o,e)),this.__createGroupDf=o.Deferred(),this.__initApiDeferred()}return e.prototype.files=function(){return this.__fileColl.get()},e.prototype.__save=function(){var t=this;if(!this.__saved)return this.__saved=!0,this.__allFilesDf.done(function(){return t.__createGroup().done(function(e){return t.__uuid=e.id,t.__buildInfo(function(e){return t.settings.imagesOnly&&!e.isImage?t.__createGroupDf.reject("image",e):t.__createGroupDf.resolve(e)})}).fail(function(){return t.__createGroupDf.reject("createGroup")})})},e.prototype.promise=function(){return this.__save(),this.__apiDf.promise()},e.prototype.__initApiDeferred=function(){var t,e,i,a=this;return this.__apiDf=o.Deferred(),this.__progressState="uploading",e=function(t){return a.__buildInfo(function(e){return a.__apiDf.reject(t,e)})},i=function(e){return a.__apiDf.resolve(e)},(t=function(){return a.__apiDf.notify(a.__progressInfo())})(),this.__fileColl.onAnyProgress(t),this.__allFilesDf.done(function(){return a.__progressState="uploaded",t()}).fail(e),this.__createGroupDf.done(function(e){return a.__progressState="ready",t(),i(e)}).fail(e)},e.prototype.__progressInfo=function(){var e,t,i,a,r;for(a=e=0,r=(i=this.__fileColl.lastProgresses()).length;a<r;a++)e+=((null!=(t=i[a])?t.progress:void 0)||0)/i.length;return{state:this.__progressState,uploadProgress:e,progress:"ready"===this.__progressState?1:.9*e}},e.prototype.__buildInfo=function(r){var n;return n={uuid:this.__uuid,cdnUrl:this.__uuid?this.settings.cdnBase+"/"+this.__uuid+"/":null,name:t("file",this.__fileColl.length()),count:this.__fileColl.length(),size:0,isImage:!0,isStored:!0},this.__fileInfosDf.done(function(){var e,t,i,a;for(t=0,a=(e=1<=arguments.length?l.call(arguments,0):[]).length;t<a;t++)i=e[t],n.size+=i.size,i.isImage||(n.isImage=!1),i.isStored||(n.isStored=!1);return r(n)})},e.prototype.__createGroup=function(){var t,i=this;return t=o.Deferred(),this.__fileColl.length()?this.__fileInfosDf.done(function(){var a,r;return r=1<=arguments.length?l.call(arguments,0):[],p.jsonp(i.settings.urlBase+"/group/","POST",{pub_key:i.settings.publicKey,signature:i.settings.secureSignature,expire:i.settings.secureExpire,files:function(){var e,t,i;for(i=[],e=0,t=r.length;e<t;e++)a=r[e],i.push("/"+a.uuid+"/"+(a.cdnUrlModifiers||""));return i}()},{headers:{"X-UC-User-Agent":i.settings._userAgent}}).fail(function(e){return i.settings.debugUploads&&p.log("Can't create group.",i.settings.publicKey,e),t.reject()}).done(t.resolve)}):t.reject(),t.promise()},e.prototype.api=function(){return this.__api||(this.__api=p.bindAll(this,["promise","files"])),this.__api},e}(),e.SavedFileGroup=function(e){function a(e,t){var i;this.__data=e,i=C.filesFrom("ready",this.__data.files,t),a.__super__.constructor.call(this,i,t)}return s(a,e),a.prototype.__createGroup=function(){return p.wrapToPromise(this.__data)},a}(e.FileGroup)}),e("",function(e){return e.FileGroup=function(e,t){var i,a,r,n,o,l,s,c;for(null==e&&(e=[]),a=[],n=0,l=e.length;n<l;n++)if(r=e[n],p.isFile(r))a.push(r);else if(p.isFileGroup(r))for(o=0,s=(c=r.files()).length;o<s;o++)i=c[o],a.push(i);return new u.FileGroup(a,t).api()},e.loadFileGroup=function(e,i){var a,t,r=this;return i=n.build(i),a=o.Deferred(),(t=p.groupIdRegex.exec(e))?p.jsonp(i.urlBase+"/group/info/","GET",{jsonerrors:1,pub_key:i.publicKey,group_id:t[0]},{headers:{"X-UC-User-Agent":i._userAgent}}).fail(function(e){return i.debugUploads&&p.log("Can't load group info. Probably removed.",t[0],i.publicKey,e),a.reject()}).done(function(e){var t;return t=new u.SavedFileGroup(e,i),a.resolve(t.api())}):a.reject(),a.promise()}}),e("utils",function(s){return s.isFileGroup=function(e){return e&&e.files&&e.promise},s.valueToGroup=function(a,r){var e,n;if(a)if(o.isArray(a))e=function(){var e,t,i;for(i=[],e=0,t=a.length;e<t;e++)n=a[e],i.push(s.valueToFile(n,r));return i}(),a=C.FileGroup(e,r);else if(!s.isFileGroup(a))return C.loadFileGroup(a,r);return s.wrapToPromise(a||null)},s.isFileGroupsEqual=function(e,t){var i,a,r,n,o,l;if(e===t)return!0;if(!s.isFileGroup(e)||!s.isFileGroup(t))return!1;if(a=e.files(),r=t.files(),a.length!==r.length)return!1;for(n=o=0,l=a.length;o<l;n=++o)if((i=a[n])!==r[n])return!1;return!0}})}.call(this),function(){var c,e,u,t;t=C.utils,c=C.jQuery,e=C.files,u=C.settings,C.namespace("",function(a){var s;return a.fileFrom=function(e,t,i){return a.filesFrom(e,[t],i)[0]},a.filesFrom=function(e,t,i){var a,r,n,o,l;for(i=u.build(i||{}),l=[],n=0,o=t.length;n<o;n++)r=t[n],a=null,c.isArray(r)&&(a=r[1],r=r[0]),l.push(new s[e](r,i,a).promise());return l},s={object:e.ObjectFile,input:e.InputFile,url:e.UrlFile,uploaded:e.UploadedFile,ready:e.ReadyFile}})}.call(this),function(){var s,r,e;e=C.utils,r=C.settings,s=C.jQuery,C.namespace("dragdrop",function(t){
return t.support=e.abilities.fileDragAndDrop,t.uploadDrop=function(e,i,a){return a=r.build(a),t.receiveDrop(e,function(e,t){return i(a.multiple?C.filesFrom(e,t,a):C.fileFrom(e,t[0],a))})},t.support?(t.receiveDrop=function(e,l){return t.watchDragging(e),s(e).on({dragover:function(e){return e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy"},drop:function(e){var t,i,a,r,n,o;if(e.preventDefault(),t=e.originalEvent.dataTransfer){if(t.files.length)return l("object",t.files);for(a=[],r=0,n=(o=t.getData("text/uri-list").split()).length;r<n;r++)i=o[r],(i=s.trim(i))&&"#"!==i[0]&&a.push(i);return a?l("url",a):void 0}}})},t.watchDragging=function(t,e){var i,a,r;return r=!1,a=0,i=function(e){if(r!==e)return s(t).toggleClass("uploadcare--dragging",r=e)},s(e||t).on({dragenter:function(){return a+=1,i(!0)},dragleave:function(){if(0===(a-=1))return i(!1)},"drop mouseenter":function(){return a=0,i(!1)}})},t.watchDragging("body",pe)):t.receiveDrop=function(){}})}.call(this),function(){var i,a,e,r,t,n,o=function(e,t){return function(){return e.apply(t,arguments)}},l={}.hasOwnProperty,s=function(e,t){for(var i in t)l.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};e=C.files,i=C.jQuery,t=C.utils,a=t.abilities,n=C.templates,r=n.tpl,C.namespace("ui.progress",function(t){return t.Circle=function(){function e(e){this.update=o(this.update,this),a.canvas?this.renderer=new t.CanvasRenderer(e):this.renderer=new t.TextRenderer(e),this.observed=null}return e.prototype.listen=function(t,i){var a,r=this;return this.reset(),a=null!=i?function(e){return e[i]}:function(e){return e},this.observed=t,"resolved"===this.observed.state()?this.renderer.setValue(1,!0):this.observed.progress(function(e){if(t===r.observed)return r.renderer.setValue(a(e))}).always(function(e){if(t===r.observed)return r.renderer.setValue(1,!1)}),this},e.prototype.reset=function(e){return null==e&&(e=!1),this.observed=null,this.renderer.setValue(e?1:0,!0)},e.prototype.update=function(){return this.renderer.update()},e}(),t.BaseRenderer=function(){function e(e){this.element=i(e),this.element.data("uploadcare-progress-renderer",this),this.element.addClass("uploadcare--progress")}return e.prototype.update=function(){},e}(),t.TextRenderer=function(e){function t(){t.__super__.constructor.apply(this,arguments),this.element.addClass("uploadcare--progress_type_text"),this.element.html(r("progress__text")),this.text=this.element.find(".uploadcare--progress__text")}return s(t,e),t.prototype.setValue=function(e){return e=Math.round(100*e),this.text.html(e+" %")},t}(t.BaseRenderer),t.CanvasRenderer=function(e){function t(){t.__super__.constructor.apply(this,arguments),this.canvasEl=i("<canvas>").addClass("uploadcare--progress__canvas").get(0),this.element.addClass("uploadcare--progress_type_canvas"),this.element.html(this.canvasEl),this.setValue(0,!0)}return s(t,e),t.prototype.update=function(){var e,a,r,t;if(t=2*(r=Math.floor(Math.min(this.element.width(),this.element.height()))),r)return this.canvasEl.width===t&&this.canvasEl.height===t||(this.canvasEl.width=t,this.canvasEl.height=t),e=function(e,t){var i;return i=-Math.PI/2,a.beginPath(),a.moveTo(r,r),a.arc(r,r,e,i,i+2*Math.PI*t,!1),a.fill()},(a=this.canvasEl.getContext("2d")).clearRect(0,0,t,t),a.globalCompositeOperation="source-over",a.fillStyle=this.element.css("border-left-color"),e(r-.5,1),a.fillStyle=this.element.css("color"),e(r,this.val),a.globalCompositeOperation="destination-out",e(r/7,1)},t.prototype.__animateValue=function(t){var i,a,r,n=this;return r=this.val,a=new Date,i=r<t?2:-2,this.__animIntervalId=setInterval(function(){var e;return e=r+(new Date-a)/1e3*i,(e=(0<i?Math.min:Math.max)(e,t))===t&&n.__stopAnimation(),n.__setValue(e)},15)},t.prototype.__stopAnimation=function(){return this.__animIntervalId&&clearInterval(this.__animIntervalId),this.__animIntervalId=null},t.prototype.__setValue=function(e){return this.val=e,this.update()},t.prototype.setValue=function(e,t){return null==t&&(t=!1),this.__stopAnimation(),t?this.__setValue(e):this.__animateValue(e)},t}(t.BaseRenderer)})}.call(this),function(){var i,a,r,n,e,t,o,l;i=C.jQuery,e=C.utils,t=C.ui,a=t.progress,o=C.locale,r=o.t,l=C.templates,n=l.tpl,C.namespace("widget",function(e){return e.Template=function(){function e(e,t){this.settings=e,this.element=t,this.content=i(n("widget")),this.element.after(this.content),this.circle=new a.Circle(this.content.find(".uploadcare--widget__progress").removeClass("uploadcare--widget__progress")),this.content.find(".uploadcare--progress").addClass("uploadcare--widget__progress"),this.statusText=this.content.find(".uploadcare--widget__text"),this.content.toggleClass("uploadcare--widget_option_clearable",this.settings.clearable)}return e.prototype.addButton=function(e,t){return null==t&&(t=""),i(n("widget-button",{name:e,caption:t})).appendTo(this.content)},e.prototype.setStatus=function(e){var t;return t="uploadcare--widget_status_",this.content.removeClass(t+this.content.attr("data-status")),this.content.attr("data-status",e),this.content.addClass(t+e),this.element.trigger(e+".uploadcare")},e.prototype.reset=function(){return this.circle.reset(),this.setStatus("ready"),this.__file=null},e.prototype.loaded=function(){return this.setStatus("loaded"),this.circle.reset(!0)},e.prototype.listen=function(t){var i=this;return this.__file=t,this.circle.listen(t,"uploadProgress"),this.setStatus("started"),t.progress(function(e){if(t===i.__file)switch(e.state){case"uploading":return i.statusText.text(r("uploading"));case"uploaded":return i.statusText.text(r("loadingInfo"))}})},e.prototype.error=function(e){return this.statusText.text(r("errors."+(e||"default"))),this.setStatus("error")},e.prototype.setFileInfo=function(e){return this.statusText.html(n("widget-file-name",e)).find(".uploadcare--widget__file-name").toggleClass("needsclick",this.settings.systemDialog)},e}()})}.call(this),function(){var r,t,n,o,a,e,i,l=function(e,t){return function(){return e.apply(t,arguments)}};a=C.utils,t=C.dragdrop,e=C.locale,n=e.t,r=C.jQuery,i=C.templates,o=i.tpl,C.namespace("widget.tabs",function(e){return e.FileTab=function(){function e(e,t,i,a,r){this.container=e,this.tabButton=t,this.dialogApi=i,this.settings=a,this.name=r,this.__initTabsList=l(this.__initTabsList,this),this.container.append(o("tab-file")),this.__setupFileButton(),this.__initDragNDrop(),this.__initTabsList()}return e.prototype.__initDragNDrop=function(){var e,i=this;if(e=this.container.find(".uploadcare--draganddrop"),a.abilities.fileDragAndDrop)return t.receiveDrop(e,function(e,t){return i.dialogApi.addFiles(e,t),i.dialogApi.switchTab("preview")}),e.addClass("uploadcare--draganddrop_supported")},e.prototype.__setupFileButton=function(){var e,t=this;return e=this.container.find(".uploadcare--tab__action-button"),a.abilities.sendFileAPI?e.on("click",function(){return a.fileSelectDialog(t.container,t.settings,function(e){return t.dialogApi.addFiles("object",e.files),t.dialogApi.switchTab("preview")}),!1}):a.fileInput(e,this.settings,function(e){return t.dialogApi.addFiles("input",[e]),t.dialogApi.switchTab("preview")})},e.prototype.__initTabsList=function(){var e,t,i,a,r,n,o,l=this;for((t=this.container.find(".uploadcare--file-sources__items")).remove(".uploadcare--file-sources__item:not(.uploadcare--file-source_all)"),r=i=0,n=(o=this.settings.tabs).length;r<n;r++)"file"!==(a=o[r])&&"url"!==a&&"camera"!==a&&this.dialogApi.isTabVisible(a)&&(5<(i+=1)||t.append([this.__tabButton(a)," "]));return e=t.find(".uploadcare--file-source_all").on("click",function(){return l.dialogApi.openMenu()}),5<i&&t.addClass("uploadcare--file-sources__items_many"),this.container.find(".uploadcare--file-sources").attr("hidden",0===i)},e.prototype.__tabButton=function(e){var t,i,a=this;return i=r("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-"+e+"'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--file-source__icon"),r("<button>").addClass("uploadcare--button").addClass("uploadcare--button_icon").addClass("uploadcare--file-source").addClass("uploadcare--file-source_"+e).addClass(
"uploadcare--file-sources__item").attr("type","button").attr("title",n("dialog.tabs.names."+e)).attr("data-tab",e).append(i).on("click",function(){return a.dialogApi.switchTab(e)})},e}()})}.call(this),function(){var c,e,u,t;c=C.jQuery,t=C.templates,u=t.tpl,e=C.locale.t,C.namespace("widget.tabs",function(e){return e.UrlTab=function(){var s,t;function e(e,t,i,a,r){var n,o,l=this;this.container=e,this.tabButton=t,this.dialogApi=i,this.settings=a,this.name=r,this.container.append(u("tab-url")),(o=this.container.find(".uploadcare--input")).on("change keyup input",function(){return n.attr("disabled",!c.trim(this.value))}),n=this.container.find(".uploadcare--button[type=submit]").attr("disabled",!0),this.container.find(".uploadcare--form").on("submit",function(){var e;return(e=s(o.val()))&&(l.dialogApi.addFiles("url",[[e,{source:"url-tab"}]]),o.val("").trigger("change")),!1})}return t=/^[a-z][a-z0-9+\-.]*:?\/\//,s=function(e){return e=c.trim(e),t.test(e)?e:"http://"+e},e}()})}.call(this),function(){var t,o,l,e,s=function(e,t){return function(){return e.apply(t,arguments)}};l=C.utils,t=C.jQuery,e=C.templates,o=e.tpl,C.namespace("widget.tabs",function(e){var i;return i="https:"===pe.location.protocol,e.CameraTab=function(){function e(e,t,i,a,r){var n;if(this.container=e,this.tabButton=t,this.dialogApi=i,this.settings=a,this.name=r,this.__cancelRecording=s(this.__cancelRecording,this),this.__stopRecording=s(this.__stopRecording,this),this.__startRecording=s(this.__startRecording,this),this.__capture=s(this.__capture,this),this.__mirror=s(this.__mirror,this),this.__revoke=s(this.__revoke,this),this.__requestCamera=s(this.__requestCamera,this),this.__setState=s(this.__setState,this),this.__captureInputHandle=s(this.__captureInputHandle,this),this.__captureInput=s(this.__captureInput,this),this.__checkCapture())this.container.append(o("tab-camera-capture")),this.container.addClass("uploadcare--camera"),this.container.find(".uploadcare--camera__button_type_photo").on("click",this.__captureInput("image/*")),n=this.container.find(".uploadcare--camera__button_type_video").on("click",this.__captureInput("video/*")),this.settings.imagesOnly&&n.hide();else{if(!this.__checkCompatibility())return void this.dialogApi.hideTab(this.name);this.__initCamera()}}return e.prototype.__captureInput=function(e){var t=this;return function(){return l.fileSelectDialog(t.container,{inputAcceptTypes:e},t.__captureInputHandle,{capture:"camera"})}},e.prototype.__captureInputHandle=function(e){return this.dialogApi.addFiles("object",e.files),this.dialogApi.switchTab("preview")},e.prototype.__initCamera=function(){var e,t=this;return this.__loaded=!1,this.mirrored=!0,this.container.append(o("tab-camera")),this.container.addClass("uploadcare--camera"),this.container.addClass("uploadcare--camera_status_requested"),this.container.find(".uploadcare--camera__button_type_capture").on("click",this.__capture),e=this.container.find(".uploadcare--camera__button_type_start-record").on("click",this.__startRecording),this.container.find(".uploadcare--camera__button_type_stop-record").on("click",this.__stopRecording),this.container.find(".uploadcare--camera__button_type_cancel-record").on("click",this.__cancelRecording),this.container.find(".uploadcare--camera__button_type_mirror").on("click",this.__mirror),this.container.find(".uploadcare--camera__button_type_retry").on("click",this.__requestCamera),this.MediaRecorder&&!this.settings.imagesOnly||e.hide(),this.video=this.container.find(".uploadcare--camera__video"),this.video.on("loadeddata",function(){return this.play()}),this.dialogApi.progress(function(e){if(e===t.name){if(!t.__loaded)return t.__requestCamera()}else if(t.__loaded&&i)return t.__revoke()}),this.dialogApi.always(this.__revoke)},e.prototype.__checkCompatibility=function(){var e;return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?this.getUserMedia=function(e,t,i){return navigator.mediaDevices.getUserMedia(e).then(t)["catch"](i)}:this.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,this.URL=F.URL||F.webkitURL,this.MediaRecorder=F.MediaRecorder,i||l.warn("Camera is not allowed for HTTP. Please use HTTPS connection."),e="localhost"===pe.location.hostname,!!this.getUserMedia&&Uint8Array&&(i||e)},e.prototype.__checkCapture=function(){var e;return(e=pe.createElement("input")).setAttribute("capture","camera"),!!e.capture},e.prototype.__setState=function(e){var t;return t=["","ready","requested","denied","not-founded","recording"].join(" uploadcare--camera_status_"),this.container.removeClass(t).addClass("uploadcare--camera_status_"+e)},e.prototype.__requestCamera=function(){var t=this;return this.__loaded=!0,this.getUserMedia.call(navigator,{audio:!0,video:{optional:[{minWidth:320},{minWidth:640},{minWidth:1024},{minWidth:1280},{minWidth:1920}]}},function(e){return t.__setState("ready"),t.__stream=e,"srcObject"in t.video[0]?(t.video.prop("srcObject",e),t.video.on("loadedmetadata",function(){return t.video[0].play()})):(t.URL?(t.__streamObject=t.URL.createObjectURL(e),t.video.prop("src",t.__streamObject)):t.video.prop("src",e),t.video[0].play())},function(e){return"NO_DEVICES_FOUND"===e||"DevicesNotFoundError"===e.name?t.__setState("not-founded"):t.__setState("denied"),t.__loaded=!1})},e.prototype.__revoke=function(){var e;if(this.__setState("requested"),this.__loaded=!1,this.__stream)return this.__streamObject&&this.URL.revokeObjectURL(this.__streamObject),this.__stream.getTracks?t.each(this.__stream.getTracks(),function(){return"function"==typeof this.stop?this.stop():void 0}):"function"==typeof(e=this.__stream).stop&&e.stop(),this.__stream=null},e.prototype.__mirror=function(){return this.mirrored=!this.mirrored,this.video.toggleClass("uploadcare--camera__video_mirrored",this.mirrored)},e.prototype.__capture=function(){var t,e,i,a,r,n=this;return r=(a=this.video[0]).videoWidth,i=a.videoHeight,(t=pe.createElement("canvas")).width=r,t.height=i,e=t.getContext("2d"),this.mirrored&&(e.translate(r,0),e.scale(-1,1)),e.drawImage(a,0,0,r,i),l.canvasToBlob(t,"image/jpeg",.9,function(e){return t.width=t.height=1,e.name="camera.jpg",n.dialogApi.addFiles("object",[[e,{source:"camera"}]]),n.dialogApi.switchTab("preview")})},e.prototype.__startRecording=function(){var e,t=this;return this.__setState("recording"),this.__chunks=[],e={},null!==this.settings.audioBitsPerSecond&&(e.audioBitsPerSecond=this.settings.audioBitsPerSecond),null!==this.settings.videoBitsPerSecond&&(e.videoBitsPerSecond=this.settings.videoBitsPerSecond),0!==Object.keys(e).length?this.__recorder=new this.MediaRecorder(this.__stream,e):this.__recorder=new this.MediaRecorder(this.__stream),this.__recorder.start(),this.__recorder.ondataavailable=function(e){return t.__chunks.push(e.data)}},e.prototype.__stopRecording=function(){var i=this;return this.__setState("ready"),this.__recorder.onstop=function(){var e,t;return e=new Blob(i.__chunks,{type:i.__recorder.mimeType}),t=i.__guessExtensionByMime(i.__recorder.mimeType),e.name="record."+t,i.dialogApi.addFiles("object",[[e,{source:"camera"}]]),i.dialogApi.switchTab("preview"),i.__chunks=[]},this.__recorder.stop()},e.prototype.__cancelRecording=function(){return this.__setState("ready"),this.__recorder.stop(),this.__chunks=[]},e.prototype.__guessExtensionByMime=function(e){var t,i;return i={mp4:"mp4",ogg:"ogg",webm:"webm",quicktime:"mov","x-matroska":"mkv"},""===e?"webm":e&&"video"===(e=e.split("/"))[0]&&i[t=(e=e.slice(1).join("/")).split(";")[0]]?i[t]:"avi"},e}()})}.call(this),function(){var a,r,e,t,c,o,i,l=function(e,t){return function(){return e.apply(t,arguments)}};e=C.locale,o=C.utils,c=C.tabsCss,a=C.jQuery,t=(i=C.locale).t,r=C.files,C.namespace("widget.tabs",function(e){return e.RemoteTab=function(){function e(e,t,i,a,r){var n=this;this.container=e,this.tabButton=t,this.dialogApi=i,this.settings=a,this.name=r,this.__createIframe=l(this.__createIframe,this),this.dialogApi.progress(function(e){return e===n.name&&n.__createIframe(),n.__sendMessage({type:"visibility-changed",visible:e===n.name})})}return e.prototype.remoteUrl=function(){return this.settings.socialBase+"/window3/"+this.name+"?"+a.param({
lang:this.settings.locale,public_key:this.settings.publicKey,widget_version:C.version,images_only:this.settings.imagesOnly,pass_window_open:this.settings.passWindowOpen})},e.prototype.__sendMessage=function(e){var t,i;return null!=(t=this.iframe)&&null!=(i=t[0].contentWindow)?i.postMessage(JSON.stringify(e),"*"):void 0},e.prototype.__createIframe=function(){var e,s=this;if(!this.iframe)return this.iframe=a("<iframe>",{src:this.remoteUrl(),marginheight:0,marginwidth:0,frameborder:0,allowTransparency:"true"}).addClass("uploadcare--tab__iframe").appendTo(this.container).on("load",function(){var e,t,i,a,r,n,o,l;for(s.iframe.css("opacity","1"),i=0,r=(o=c.urls).length;i<r;i++)t=o[i],s.__sendMessage({type:"embed-css",url:t});for(a=0,n=(l=c.styles).length;a<n;a++)e=l[a],s.__sendMessage({type:"embed-css",style:e})}),this.container.addClass("uploadcare--tab_remote"),e=this.iframe[0].contentWindow,o.registerMessage("file-selected",e,function(n){var e,t,i;return i=function(){var e,t,i,a,r;if(n.alternatives)for(i=0,a=(r=s.settings.preferredTypes).length;i<a;i++)for(e in t=r[i],t=o.globRegexp(t),n.alternatives)if(t.test(e))return n.alternatives[e];return n.url}(),t=a.extend({source:s.name},n.info||{}),e=new r.UrlFile(i,s.settings,t),n.filename&&e.setName(n.filename),null!=n.is_image&&e.setIsImage(n.is_image),s.dialogApi.addFiles([e.promise()])}),o.registerMessage("open-new-window",e,function(e){var t,i,a;if(s.settings.debugUploads&&o.debug("Open new window message.",s.name),i=F.open(e.url,"_blank"))return a=function(){return s.settings.debugUploads&&o.debug("Window is closed.",s.name),s.__sendMessage({type:"navigate",fragment:""})},"closed"in i?t=setInterval(function(){if(i.closed)return clearInterval(t),a()},100):i.addEventListener("exit",a);o.warn("Can't open new window. Possible blocked.",s.name)}),this.dialogApi.done(function(){return o.unregisterMessage("file-selected",e),o.unregisterMessage("open-new-window",e)})},e}()})}.call(this),function(){var a,r,e,t;t=(e=C.ui).progress,r=t.Circle,a=C.jQuery,C.namespace("widget.tabs",function(e){return e.BasePreviewTab=function(){function e(e,t,i,a,r){var n,o=this;this.container=e,this.tabButton=t,this.dialogApi=i,this.settings=a,this.name=r,this.__initTabButtonCircle(),this.container.addClass("uploadcare--preview"),n=":not(:disabled)",this.container.on("click",".uploadcare--preview__back"+n,function(){return o.dialogApi.fileColl.clear()}),this.container.on("click",".uploadcare--preview__done"+n,this.dialogApi.resolve)}return e.prototype.__initTabButtonCircle=function(){var e,n,t,i,o=this;return t=this.tabButton.find(".uploadcare--panel__icon"),n=a.Deferred(),i=function(){var e,t,i,a,r;for(a=t=0,r=(e=o.dialogApi.fileColl.lastProgresses()).length;a<r;a++)t+=((null!=(i=e[a])?i.progress:void 0)||0)/e.length;return n.notify(t)},this.dialogApi.fileColl.onAnyProgress(i),this.dialogApi.fileColl.onAdd.add(i),this.dialogApi.fileColl.onRemove.add(i),i(),e=new r(t).listen(n.promise()),this.dialogApi.progress(e.update)},e}()})}.call(this),function(){var d,l,s,e,h,i,f,t,a,r,n,o,c,u=function(e,t){return function(){return e.apply(t,arguments)}},p={}.hasOwnProperty,g=function(e,t){for(var i in t)p.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};f=C.utils,a=(t=C.utils).abilities,s=a.URL,e=(r=C.ui).progress,n=C.templates,i=n.tpl,d=C.jQuery,o=C.crop,l=o.CropWidget,c=C.locale,h=c.t,C.namespace("widget.tabs",function(e){return e.PreviewTab=function(e){function o(e,t,i,a,r){var n=this;this.container=e,this.tabButton=t,this.dialogApi=i,this.settings=a,this.name=r,this.populateCropSizes=u(this.populateCropSizes,this),this.initImage=u(this.initImage,this),this.__setState=u(this.__setState,this),this.__tryToLoadVideoPreview=u(this.__tryToLoadVideoPreview,this),this.__tryToLoadImagePreview=u(this.__tryToLoadImagePreview,this),this.__setFile=u(this.__setFile,this),o.__super__.constructor.apply(this,arguments),d.each(this.dialogApi.fileColl.get(),function(e,t){return n.__setFile(t)}),this.dialogApi.fileColl.onAdd.add(this.__setFile),this.widget=null,this.__state=null}return g(o,e),o.prototype.__setFile=function(r){var e,n,o,l=this;return this.file=r,e=function(e){return function(){if(r===l.file)return e.apply(null,arguments)}},n=f.once(this.__tryToLoadImagePreview),o=f.once(this.__tryToLoadVideoPreview),this.__setState("unknown",{}),this.file.progress(e(function(e){var t,i,a;if(i=((e=e.incompleteFileInfo).name||"")+f.readableFileSize(e.size,"",", "),l.container.find(".uploadcare--preview__file-name").text(i),a=e.sourceInfo,t=f.abilities.Blob,a.file&&t&&a.file instanceof t)return n(r,a.file).fail(function(){return o(r,a.file)})})),this.file.done(e(function(e){var t,i;if("video"!==l.__state)return e.isImage?"image"!==l.__state?(i=e.originalUrl,i+="-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/",l.settings.previewUrlCallback&&(i=l.settings.previewUrlCallback(i,e)),t=e.originalImageInfo,l.__setState("image",{src:i,name:e.name,info:e}),l.initImage([t.width,t.height],e.cdnUrlModifiers)):void 0:l.__setState("regular",{file:e})})),this.file.fail(e(function(e,t){return l.__setState("error",{error:e,file:t})}))},o.prototype.__tryToLoadImagePreview=function(r,e){var n,o=this;return n=d.Deferred(),"pending"!==r.state()||!e.size||e.size>=this.settings.multipartMinSize?n.reject().promise():(f.image.drawFileToCanvas(e,1550,924,"#ffffff",this.settings.imagePreviewMaxSize).done(function(i,a){return f.canvasToBlob(i,"image/jpeg",.95,function(e){var t;if(n.resolve(),i.width=i.height=1,"pending"===r.state()&&"pending"===o.dialogApi.state()&&o.file===r)return t=s.createObjectURL(e),o.dialogApi.always(function(){return s.revokeObjectURL(t)}),"image"!==o.__state?(o.__setState("image",{src:t,name:""}),o.initImage(a)):void 0})}).fail(n.reject),n.promise())},o.prototype.__tryToLoadVideoPreview=function(e,t){var i,a,r,n=this;return i=d.Deferred(),s&&t.size?(r=s.createObjectURL(t),(a=f.videoLoader(r)).fail(function(){return s.revokeObjectURL(r),i.reject()}).done(function(){var t;return i.resolve(),n.dialogApi.always(function(){return s.revokeObjectURL(r)}),n.__setState("video"),(t=n.container.find(".uploadcare--preview__video")).on("loadeddata",function(){var e;return(e=t.get(0)).currentTime=36e4,t.off("loadeddata")}),t.on("ended",function(){var e;return(e=t.get(0)).currentTime=0,t.off("ended")}),t.attr("src",r),t.get(0).load()}),i.promise()):i.reject().promise()},o.prototype.__setState=function(e,t){if(this.__state=e,(t=t||{}).crop=this.settings.crop,this.container.empty().append(i("tab-preview-"+e,t)),this.container.removeClass(function(e,t){return t.split(" ").filter(function(e){return!!~e.indexOf("uploadcare--preview_status_")}).join(" ")}),"unknown"===e&&this.settings.crop&&this.container.find(".uploadcare--preview__done").hide(),"error"===e)return this.container.addClass("uploadcare--preview_status_error-"+t.error)},o.prototype.initImage=function(e,t){var i,a,r,n,o=this;if(a=this.container.find(".uploadcare--preview__image"),i=this.container.find(".uploadcare--preview__done"),r=f.imageLoader(a[0]).done(function(){return o.container.addClass("uploadcare--preview_status_loaded")}).fail(function(){return o.file=null,o.__setState("error",{error:"loadImage"})}),n=function(){return o.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled",!1).attr("tabindex",0),i.attr("disabled",!1),o.widget=new l(a,e,o.settings.crop[0]),t&&o.widget.setSelectionFromModifiers(t),i.on("click",function(){var e;return e=o.widget.applySelectionToFile(o.file),o.dialogApi.fileColl.replace(o.file,e),!0})},this.settings.crop)return this.container.find(".uploadcare--preview__title").text(h("dialog.tabs.preview.crop.title")),this.container.find(".uploadcare--preview__content").addClass("uploadcare--preview__content_crop"),i.attr("disabled",!0),i.text(h("dialog.tabs.preview.crop.done")),this.populateCropSizes(),this.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled",!0).attr("tabindex",-1),r.done(function(){return f.defer(n)})},o.prototype.populateCropSizes=function(){var s,c,u,p=this;return s=this.container.find(".uploadcare--crop-sizes"),u=s.children(),
c="uploadcare--crop-sizes__item_current",d.each(this.settings.crop,function(e,t){var i,a,r,n,o,l;return(o=t.preferedSize)?(a=f.gcd(o[0],o[1]),i=o[0]/a+":"+o[1]/a):i=h("dialog.tabs.preview.crop.free"),n=u.clone().appendTo(s).attr("data-caption",i).on("click",function(e){"true"!==d(e.currentTarget).attr("aria-disabled")&&!d(e.currentTarget).hasClass(c)&&1<p.settings.crop.length&&p.widget&&(p.widget.setCrop(t),s.find(">*").removeClass(c),n.addClass(c))}),o?(l=f.fitSize(o,[30,30],!0),n.children().css({width:Math.max(20,l[0]),height:Math.max(12,l[1])})):(r=d("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-crop-free'/></svg>").attr("role","presentation").attr("class","uploadcare--icon"),n.children().append(r).addClass("uploadcare--crop-sizes__icon_free"))}),u.remove(),s.find(">*").eq(0).addClass(c)},o}(e.BasePreviewTab)})}.call(this),function(u){function o(e){this.targets=e,this.last=null,this.update()}o.prototype={update:function(){var i={};this.targets.each(function(e){var t=u(this).offset();t.top in i||(i[t.top]=[]),i[t.top].push([t.left+this.offsetWidth/2,this])}),this.rows=i},find:function(e,t){var i=Infinity,a=this.rows,r,n,o;for(n in a){var l;(l=Math.abs(n-t))<i&&(i=l,r=a[n])}i=Math.abs(r[0][0]-e),o=r[0][1];for(var s=1;s<r.length;s++){var l;(l=Math.abs(r[s][0]-e))<i&&(i=l,o=r[s][1])}return o},findNotLast:function(e,t){var i=this.find(e,t);return this.last&&i&&this.last==i?null:this.last=i}};var p="uploadcareMovable",e="uploadcareSortable",t={};t[p]=function(s){function c(e){if(s.touch){var t,i;if((i=e.originalEvent.touches)&&i.length)t=i[0];else{if(!(i=e.originalEvent.changedTouches)||!i.length)return;t=i[0]}e.pageX=t.pageX,e.pageY=t.pageY,e.which=1}}s=u.extend({distance:4,anyButton:!1,axis:!1,zIndex:1e3,start:u.noop,move:u.noop,finish:u.noop,items:null,keepFake:!1,touch:!0},s);var e="mousedown.{} touchstart.{}".replace(/\{}/g,p);this.on(e,s.items,null,function(r){if(c(r),s.anyButton||1==r.which){r.preventDefault();var n=!1,o=u(this),l=!1,a=o.position();a.top+=o.offsetParent().scrollTop(),a.left+=o.offsetParent().scrollLeft();var e="mousemove.{} touchmove.{}".replace(/\{}/g,p);u(pe).on(e,function(e){if(c(e),!n&&(Math.abs(e.pageX-r.pageX)>s.distance||Math.abs(e.pageY-r.pageY)>s.distance)&&(n=!0,l=o.clone().css({position:"absolute",zIndex:s.zIndex,width:o.width()}).appendTo(o.offsetParent()),s.start({event:e,dragged:o,fake:l})),n){e.preventDefault();var t="y"==s.axis?0:e.pageX-r.pageX,i="x"==s.axis?0:e.pageY-r.pageY;l.css({left:t+a.left,top:i+a.top}),s.move({event:e,dragged:o,fake:l,dx:t,dy:i})}});var e="mouseup.{} touchend.{} touchcancel.{} touchleave.{}";u(pe).on(e.replace(/\{}/g,p),function(e){c(e);var t="mousemove.{} touchmove.{} mouseup.{} touchend.{} touchcancel.{} touchleave.{}";if(u(pe).off(t.replace(/\{}/g,p)),n){e.preventDefault();var i=e.pageX-r.pageX,a=e.pageY-r.pageY;n=!1,s.finish({event:e,dragged:o,fake:l,dx:i,dy:a}),s.keepFake||l.remove()}})}})},t[e]=function(a){var t=u.extend({items:">*"},a),a=u.extend({checkBounds:function(){return!0},start:u.noop,attach:u.noop,move:u.noop,finish:u.noop},a),r,n=!1,i=this;return t.start=function(e){a.start(e),r=new o(i.find(t.items).not(e.fake)),n=e.dragged.next()},t.move=function(e){if(e.nearest=null,a.checkBounds(e)){var t=e.fake.offset(),i=r.findNotLast(t.left+e.dragged.width()/2,t.top);e.nearest=u(i),i&&i!=e.dragged[0]&&(0<e.dragged.nextAll().filter(i).length?e.dragged.insertAfter(i):e.dragged.insertBefore(i),a.attach(e),r.last=null,r.update())}else null!==r.last&&(r.last=null,n.length?e.dragged.insertBefore(n):e.dragged.parent().append(e.dragged),a.attach(e),r.update());a.move(e)},t.finish=function(e){var t=e.fake.offset();e.nearest=null,a.checkBounds(e)&&(e.nearest=u(r.find(t.left+e.dragged.width()/2,t.top))),a.finish(e),r=null},this[p](t)},u.fn.extend(t)}(C.jQuery),function(){var o,e,l,a,s,r,t,i,n,c=function(e,t){return function(){return e.apply(t,arguments)}},u={}.hasOwnProperty,p=function(e,t){for(var i in t)u.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};r=C.utils,e=(t=C.ui).progress,i=C.templates,a=i.tpl,o=C.jQuery,n=C.locale,l=n.t,(s=C).namespace("widget.tabs",function(e){return e.PreviewTabMultiple=function(e){function t(){this.__fileReplaced=c(this.__fileReplaced,this),this.__fileRemoved=c(this.__fileRemoved,this),this.__fileAdded=c(this.__fileAdded,this),this.__fileFailed=c(this.__fileFailed,this),this.__fileDone=c(this.__fileDone,this),this.__fileProgress=c(this.__fileProgress,this),this.__updateContainerView=c(this.__updateContainerView,this);var i=this;t.__super__.constructor.apply(this,arguments),this.container.append(a("tab-preview-multiple")),this.__fileTpl=o(a("tab-preview-multiple-file")),this.fileListEl=this.container.find(".uploadcare--files"),this.doneBtnEl=this.container.find(".uploadcare--preview__done"),o.each(this.dialogApi.fileColl.get(),function(e,t){return i.__fileAdded(t)}),this.__updateContainerView(),this.dialogApi.fileColl.onAdd.add(this.__fileAdded,this.__updateContainerView),this.dialogApi.fileColl.onRemove.add(this.__fileRemoved,this.__updateContainerView),this.dialogApi.fileColl.onReplace.add(this.__fileReplaced,this.__updateContainerView),this.dialogApi.fileColl.onAnyProgress(this.__fileProgress),this.dialogApi.fileColl.onAnyDone(this.__fileDone),this.dialogApi.fileColl.onAnyFail(this.__fileFailed),this.fileListEl.addClass(this.settings.imagesOnly?"uploadcare--files_type_tiles":"uploadcare--files_type_table"),this.__setupSorting()}return p(t,e),t.prototype.__setupSorting=function(){var a=this;return this.fileListEl.uploadcareSortable({touch:!1,axis:this.settings.imagesOnly?"xy":"y",start:function(e){return e.dragged.css("visibility","hidden")},finish:function(e){var t,i;return e.dragged.css("visibility","visible"),t=a.container.find(".uploadcare--file"),i=function(e){return t.index(a.__fileToEl(e))},a.dialogApi.fileColl.sort(function(e,t){return i(e)-i(t)})}})},t.prototype.__updateContainerView=function(){var e,t,i,a,r,n,o;if(n=(t=this.dialogApi.fileColl.length())>this.settings.multipleMax,r=t<this.settings.multipleMin,i=n||r,this.doneBtnEl.attr("disabled",i),a=l("dialog.tabs.preview.multiple.question").replace("%files%",l("file",t)),this.container.find(".uploadcare--preview__title").text(a),(e=this.container.find(".uploadcare--preview__message")).empty(),i)return o=n?l("dialog.tabs.preview.multiple.tooManyFiles").replace("%max%",this.settings.multipleMax):t&&r?l("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%",this.settings.multipleMin).replace("%files%",l("file",t)):void 0,e.addClass("uploadcare--error").text(o)},t.prototype.__updateFileInfo=function(e,t){var i;return i=t.name||l("dialog.tabs.preview.unknownName"),e.find(".uploadcare--file__name").text(i),e.find(".uploadcare--file__description").attr("title",l("dialog.tabs.preview.multiple.file.preview").replace("%file%",i)),e.find(".uploadcare--file__remove").attr("title",l("dialog.tabs.preview.multiple.file.remove").replace("%file%",i)),e.find(".uploadcare--file__size").text(r.readableFileSize(t.size,"–"))},t.prototype.__fileProgress=function(e,t){var i;return(i=this.__fileToEl(e)).find(".uploadcare--progressbar__value").css("width",Math.round(100*t.progress)+"%"),this.__updateFileInfo(i,t.incompleteFileInfo)},t.prototype.__fileDone=function(t,e){var i,a,r,n=this;return(a=this.__fileToEl(t).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_uploaded")).find(".uploadcare--progressbar__value").css("width","100%"),this.__updateFileInfo(a,e),e.isImage?(i=e.cdnUrl+"-/quality/lightest/-/preview/108x108/",this.settings.previewUrlCallback&&(i=this.settings.previewUrlCallback(i,e)),r=o("<img>").attr("src",i).addClass("uploadcare--file__icon")):r=o("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-file'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--file__icon"),a.find(".uploadcare--file__preview").html(r),a.find(".uploadcare--file__description").on("click",function(){return s.openPreviewDialog(t,n.settings).done(function(e){return n.dialogApi.fileColl.replace(t,e)})})},t.prototype.__fileFailed=function(e,t,i){
var a,r;return(a=this.__fileToEl(e).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_error")).find(".uploadcare--file__error").text(l("errors."+t)),r=o("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-error'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--file__icon"),a.find(".uploadcare--file__preview").html(r)},t.prototype.__fileAdded=function(e){var t;return(t=this.__createFileEl(e)).appendTo(this.fileListEl)},t.prototype.__fileRemoved=function(e){return this.__fileToEl(e).remove(),o(e).removeData()},t.prototype.__fileReplaced=function(e,t){var i;return(i=this.__createFileEl(t)).insertAfter(this.__fileToEl(e)),this.__fileRemoved(e)},t.prototype.__fileToEl=function(e){return o(e).data("dpm-el")||o()},t.prototype.__createFileEl=function(e){var t,i=this;return t=this.__fileTpl.clone().on("click",".uploadcare--file__remove",function(){return i.dialogApi.fileColl.remove(e)}),o(e).data("dpm-el",t),t},t}(e.BasePreviewTab)})}.call(this),function(){var f,a,g,m,_,b,v,e,t,i,y=function(e,t){return function(){return e.apply(t,arguments)}};v=C.utils,e=C.locale,m=e.t,t=C.templates,b=t.tpl,a=C.files,i=C.widget,_=i.tabs,g=C.settings,f=C.jQuery,C.namespace("",function(o){var l,s,c,t,u,p,d,h,e=this;return t=function(e){return!e.shiftKey&&c.last().is(e.target)?(e.preventDefault(),c.first().focus()):e.shiftKey&&c.first().is(e.target)?(e.preventDefault(),c.last().focus()):void 0},u=function(e,t){var i,a;return a=e.scrollTop(),i=e.scrollLeft(),t&&e.scrollTop(0).scrollLeft(0),function(){return e.scrollTop(a).scrollLeft(i)}},f(F).on("keydown",function(e){if(o.isDialogOpened()&&(27===e.which&&(e.stopImmediatePropagation(),null!=s&&s.reject()),9===e.which))return t(e)}),p="uploadcare--page",c=d=s=null,o.isDialogOpened=function(){return null!==s},o.closeDialog=function(){var e;e=[];while(s)e.push(s.reject());return e},o.openDialog=function(e,t,i){var a,r,n;return o.closeDialog(),d=pe.activeElement,r=f(b("dialog")).appendTo("body"),n=o.openPanel(r.find(".uploadcare--dialog__placeholder"),e,t,i),r.find(".uploadcare--panel").addClass("uploadcare--dialog__panel"),r.addClass("uploadcare--dialog_status_active"),n.dialogElement=r,(c=r.find("select, input, textarea, button, a[href]")).first().focus(),a=u(f(F),"absolute"===r.css("position")),f("html, body").addClass(p),r.find(".uploadcare--dialog__close").on("click",n.reject),r.on("dblclick",function(e){var t;if(f.contains(pe.documentElement,e.target)&&(t=".uploadcare--dialog__panel, .uploadcare--dialog__powered-by",!f(e.target).is(t)&&!f(e.target).parents(t).length))return n.reject()}),s=n.always(function(){return f("html, body").removeClass(p),s=null,r.remove(),a(),d.focus()})},o.openPreviewDialog=function(e,t){var i,a,r=this;return a=s,s=null,t=f.extend({},t,{multiple:!1,tabs:""}),i=C.openDialog(e,"preview",t),null!=a&&a.dialogElement.addClass("uploadcare--dialog_status_inactive"),i.always(function(){if(null!=(s=a))return f("html, body").addClass(p),a.dialogElement.removeClass("uploadcare--dialog_status_inactive")}),i.onTabVisibility(function(e,t){if("preview"===e&&!t)return i.reject()}),i},o.openPanel=function(e,t,i,a){var r,n;return f.isPlainObject(i)&&(a=i,i=null),t?v.isFileGroup(t)?t=t.files():f.isArray(t)||(t=[t]):t=[],a=g.build(a),n=new l(a,e,t,i).publicPromise(),r=function(e){return a.multiple?C.FileGroup(e,a):e[0]},v.then(n,r,r).promise(n)},h={},o.registerTab=function(e,t){return h[e]=t},o.registerTab("file",_.FileTab),o.registerTab("url",_.UrlTab),o.registerTab("camera",_.CameraTab),o.registerTab("facebook",_.RemoteTab),o.registerTab("dropbox",_.RemoteTab),o.registerTab("gdrive",_.RemoteTab),o.registerTab("gphotos",_.RemoteTab),o.registerTab("instagram",_.RemoteTab),o.registerTab("flickr",_.RemoteTab),o.registerTab("vk",_.RemoteTab),o.registerTab("evernote",_.RemoteTab),o.registerTab("box",_.RemoteTab),o.registerTab("onedrive",_.RemoteTab),o.registerTab("huddle",_.RemoteTab),o.registerTab("empty-pubkey",function(e,t,i,a){return e.append(a._emptyKeyText)}),o.registerTab("preview",function(e,t,i,a,r){var n;if(a.previewStep||0!==i.fileColl.length())return new(n=a.multiple?_.PreviewTabMultiple:_.PreviewTab)(e,t,i,a,r)}),l=function(){function e(e,t,i,a){var r,n=this;this.settings=e,this.openMenu=y(this.openMenu,this),this.isTabVisible=y(this.isTabVisible,this),this.hideTab=y(this.hideTab,this),this.showTab=y(this.showTab,this),this.switchTab=y(this.switchTab,this),this.__closePanel=y(this.__closePanel,this),this.__updateFooter=y(this.__updateFooter,this),this.__reject=y(this.__reject,this),this.__resolve=y(this.__resolve,this),this.addFiles=y(this.addFiles,this),this.dfd=f.Deferred(),this.dfd.always(this.__closePanel),r=".uploadcare--panel",this.content=f(b("dialog__panel")),this.panel=this.content.find(r).add(this.content.filter(r)),this.placeholder=f(t),this.placeholder.replaceWith(this.content),this.panel.append(f(b("icons"))),this.settings.multiple&&this.panel.addClass("uploadcare--panel_multiple"),this.panel.find(".uploadcare--menu__toggle").on("click",function(){return n.panel.find(".uploadcare--menu").toggleClass("uploadcare--menu_opened")}),this.files=new v.CollectionOfPromises(i),this.files.onRemove.add(function(){if(0===n.files.length())return n.hideTab("preview")}),this.__autoCrop(this.files),this.tabs={},this.__prepareFooter(),this.onTabVisibility=f.Callbacks().add(function(e,t){return n.panel.find(".uploadcare--menu__item_tab_"+e).toggleClass("uploadcare--menu__item_hidden",!t)}),this.settings.publicKey?this.__prepareTabs(a):this.__welcome()}return e.prototype.publicPromise=function(){return this.promise||(this.promise=this.dfd.promise({reject:this.__reject,resolve:this.__resolve,fileColl:this.files,addFiles:this.addFiles,switchTab:this.switchTab,hideTab:this.hideTab,showTab:this.showTab,isTabVisible:this.isTabVisible,openMenu:this.openMenu,onTabVisibility:v.publicCallbacks(this.onTabVisibility)})),this.promise},e.prototype.addFiles=function(e,t){var i,a,r;for(t&&(e=o.filesFrom(e,t,this.settings)),this.settings.multiple||(this.files.clear(),e=[e[0]]),a=0,r=e.length;a<r;a++)i=e[a],this.settings.multipleMaxStrict&&this.files.length()>=this.settings.multipleMax?i.cancel():this.files.add(i);return this.settings.previewStep?(this.showTab("preview"),this.settings.multiple?void 0:this.switchTab("preview")):this.__resolve()},e.prototype.__autoCrop=function(e){var t,i,a,r,n=this;if(this.settings.crop&&this.settings.multiple){for(i=0,a=(r=this.settings.crop).length;i<a;i++)if(!(t=r[i]).preferedSize)return;return e.autoThen(function(e){var t,i;return!e.isImage||e.cdnUrlModifiers||e.crop?e:(t=e.originalImageInfo,i=v.fitSize(n.settings.crop[0].preferedSize,[t.width,t.height],!0),v.applyCropCoordsToInfo(e,n.settings.crop[0],[t.width,t.height],{width:i[0],height:i[1],left:Math.round((t.width-i[0])/2),top:Math.round((t.height-i[1])/2)}))})}},e.prototype.__resolve=function(){return this.dfd.resolve(this.files.get())},e.prototype.__reject=function(){return this.dfd.reject(this.files.get())},e.prototype.__prepareTabs=function(e){var t,i,a,r;for(this.addTab("preview"),i=0,a=(r=this.settings.tabs).length;i<a;i++)t=r[i],this.addTab(t);if(this.files.length()?(this.showTab("preview"),this.switchTab("preview")):(this.hideTab("preview"),this.switchTab(e||this.__firstVisibleTab())),0===this.settings.tabs.length)return this.panel.addClass("uploadcare--panel_menu-hidden"),this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--panel__menu_hidden")},e.prototype.__prepareFooter=function(){var e,t=this;return this.footer=this.panel.find(".uploadcare--panel__footer"),e=":not(:disabled)",this.footer.on("click",".uploadcare--panel__show-files"+e,function(){return t.switchTab("preview")}),this.footer.on("click",".uploadcare--panel__done"+e,this.__resolve),this.__updateFooter(),this.files.onAdd.add(this.__updateFooter),this.files.onRemove.add(this.__updateFooter)},e.prototype.__updateFooter=function(){var e,t,i;return i=(a=this.files.length())>this.settings.multipleMax,t=a<this.settings.multipleMin,this.footer.find(".uploadcare--panel__done").attr("disabled",i||t),this.footer.find(".uploadcare--panel__show-files").attr("disabled",0===a),e=i?m(
"dialog.tabs.preview.multiple.tooManyFiles").replace("%max%",this.settings.multipleMax):a&&t?m("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%",this.settings.multipleMin):m("dialog.tabs.preview.multiple.title"),this.footer.find(".uploadcare--panel__message").toggleClass("uploadcare--panel__message_hidden",0===a).toggleClass("uploadcare--error",i||t).text(e.replace("%files%",m("file",a))),this.footer.find(".uploadcare--panel__file-counter").toggleClass("uploadcare--error",i||t).text(a?"("+a+")":"")},e.prototype.__closePanel=function(){return this.panel.replaceWith(this.placeholder),this.content.remove()},e.prototype.addTab=function(e){var t,i,a,r,n=this;if(!(e in this.tabs)){if(!(t=h[e]))throw new Error("No such tab: "+e);return r=f("<div>").addClass("uploadcare--tab").addClass("uploadcare--tab_name_"+e).insertBefore(this.footer),a="preview"===e?f('<div class="uploadcare--menu__icon uploadcare--panel__icon">'):f("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-"+e+"'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--menu__icon"),i=f("<div>",{role:"button",tabindex:"0"}).addClass("uploadcare--menu__item").addClass("uploadcare--menu__item_tab_"+e).attr("title",m("dialog.tabs.names."+e)).append(a).appendTo(this.panel.find(".uploadcare--menu__items")).on("click",function(){return e===n.currentTab?n.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened"):n.switchTab(e)}),this.tabs[e]=new t(r,i,this.publicPromise(),this.settings,e)}},e.prototype.switchTab=function(e){var t;if(e&&this.currentTab!==e)return this.currentTab=e,this.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened").attr("data-current",e),this.panel.find(".uploadcare--menu__item").removeClass("uploadcare--menu__item_current").filter(".uploadcare--menu__item_tab_"+e).addClass("uploadcare--menu__item_current"),t="uploadcare--tab",this.panel.find("."+t).removeClass(t+"_current").filter("."+t+"_name_"+e).addClass(t+"_current"),this.dfd.notify(e)},e.prototype.showTab=function(e){return this.onTabVisibility.fire(e,!0)},e.prototype.hideTab=function(e){if(this.onTabVisibility.fire(e,!1),this.currentTab===e)return this.switchTab(this.__firstVisibleTab())},e.prototype.isTabVisible=function(e){return!this.panel.find(".uploadcare--menu__item_tab_"+e).is(".uploadcare--menu__item_hidden")},e.prototype.openMenu=function(){return this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--menu_opened")},e.prototype.__firstVisibleTab=function(){var e,t,i,a;for(t=0,i=(a=this.settings.tabs).length;t<i;t++)if(e=a[t],this.isTabVisible(e))return e},e.prototype.__welcome=function(){var e,t,i,a;for(this.addTab("empty-pubkey"),this.switchTab("empty-pubkey"),t=0,i=(a=this.settings.tabs).length;t<i;t++)e=a[t],this.__addFakeTab(e);return null},e.prototype.__addFakeTab=function(e){var t;return t=f("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-"+e+"'/></svg>").attr("role","presentation").attr("class","uploadcare--icon uploadcare--menu__icon"),"empty-pubkey"===e&&t.addClass("uploadcare--panel__icon"),f("<div>").addClass("uploadcare--menu__item").addClass("uploadcare--menu__item_tab_"+e).attr("aria-disabled",!0).attr("title",m("dialog.tabs.names."+e)).append(t).appendTo(this.panel.find(".uploadcare--menu__items"))},e}()})}.call(this),function(){var a,r,n,o,e,l=function(e,t){return function(){return e.apply(t,arguments)}};o=C.utils,a=C.jQuery,r=C.dragdrop,e=C.locale,n=e.t,C.namespace("widget",function(i){return i.BaseWidget=function(){function e(e,t){var i=this;this.element=e,this.settings=t,this.reloadInfo=l(this.reloadInfo,this),this.__setObject=l(this.__setObject,this),this.__reset=l(this.__reset,this),this.validators=this.settings.validators=[],this.currentObject=null,this.__onDialogOpen=a.Callbacks(),this.__onUploadComplete=a.Callbacks(),this.__onChange=a.Callbacks().add(function(e){return null!=e?e.promise().done(function(e){return i.__onUploadComplete.fire(e)}):void 0}),this.__setupWidget(),this.element.on("change.uploadcare",this.reloadInfo),this.__hasValue=!1,o.defer(function(){if(!i.__hasValue)return i.reloadInfo()})}return e.prototype.__setupWidget=function(){var e,t=this;return this.template=new i.Template(this.settings,this.element),(e=["buttons.choose"]).push(this.settings.imagesOnly?"images":"files"),e.push(this.settings.multiple?"other":"one"),this.template.addButton("open",n(e.join("."))).toggleClass("needsclick",this.settings.systemDialog).on("click",function(){return t.openDialog()}),this.template.addButton("cancel",n("buttons.cancel")).on("click",function(){return t.__setObject(null)}),this.template.addButton("remove",n("buttons.remove")).on("click",function(){return t.__setObject(null)}),this.template.content.on("click",".uploadcare--widget__file-name",function(){return t.openDialog()}),r.receiveDrop(this.template.content,this.__handleDirectSelection),this.template.reset()},e.prototype.__infoToValue=function(e){return e.cdnUrlModifiers||this.settings.pathValue?e.cdnUrl:e.uuid},e.prototype.__reset=function(){var e;return e=this.currentObject,(this.currentObject=null)!=e&&"function"==typeof e.cancel&&e.cancel(),this.template.reset()},e.prototype.__setObject=function(e){if(e!==this.currentObject)return this.__reset(),e?(this.currentObject=e,this.__watchCurrentObject()):this.element.val(""),this.__onChange.fire(this.currentObject)},e.prototype.__watchCurrentObject=function(){var t,i=this;if(t=this.__currentFile())return this.template.listen(t),t.done(function(e){if(t===i.__currentFile())return i.__onUploadingDone(e)}).fail(function(e){if(t===i.__currentFile())return i.__onUploadingFailed(e)})},e.prototype.__onUploadingDone=function(e){return this.element.val(this.__infoToValue(e)),this.template.setFileInfo(e),this.template.loaded()},e.prototype.__onUploadingFailed=function(e){return this.template.reset(),this.template.error(e)},e.prototype.__setExternalValue=function(e){return this.__setObject(o.valueToFile(e,this.settings))},e.prototype.value=function(e){return void 0!==e?(this.__hasValue=!0,this.__setExternalValue(e),this):this.currentObject},e.prototype.reloadInfo=function(){return this.value(this.element.val())},e.prototype.openDialog=function(e){var t=this;return this.settings.systemDialog?o.fileSelectDialog(this.template.content,this.settings,function(e){return t.__handleDirectSelection("object",e.files)}):this.__openDialog(e)},e.prototype.__openDialog=function(e){var t;return t=C.openDialog(this.currentObject,e,this.settings),this.__onDialogOpen.fire(t),t.done(this.__setObject)},e.prototype.api=function(){return this.__api||(this.__api=o.bindAll(this,["openDialog","reloadInfo","value","validators"]),this.__api.onChange=o.publicCallbacks(this.__onChange),this.__api.onUploadComplete=o.publicCallbacks(this.__onUploadComplete),this.__api.onDialogOpen=o.publicCallbacks(this.__onDialogOpen),this.__api.inputElement=this.element.get(0)),this.__api},e}()})}.call(this),function(){var e,t,i,a=function(e,t){return function(){return e.apply(t,arguments)}},r={}.hasOwnProperty,n=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};i=C.utils,t=C.files,e=C.jQuery,C.namespace("widget",function(e){var i;return e.Widget=function(e){function t(){return this.__handleDirectSelection=a(this.__handleDirectSelection,this),i=t.__super__.constructor.apply(this,arguments)}return n(t,e),t.prototype.__currentFile=function(){return this.currentObject},t.prototype.__handleDirectSelection=function(e,t){var i;return i=C.fileFrom(e,t[0],this.settings),this.settings.systemDialog||!this.settings.previewStep?this.__setObject(i):this.__openDialog("preview").addFiles([i])},t}(e.BaseWidget),e.Widget._name="SingleWidget"})}.call(this),function(){var e,a,r,t,n=function(e,t){return function(){return e.apply(t,arguments)}},o={}.hasOwnProperty,l=function(e,t){for(var i in t)o.call(t,i)&&(e[i]=t[i]);function a(){this.constructor=e}return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};r=C.utils,e=C.jQuery,t=C.locale,a=t.t,C.namespace("widget",function(e){var i
;return e.MultipleWidget=function(e){function t(){return this.__handleDirectSelection=n(this.__handleDirectSelection,this),this.__setObject=n(this.__setObject,this),i=t.__super__.constructor.apply(this,arguments)}return l(t,e),t.prototype.__currentFile=function(){var e;return null!=(e=this.currentObject)?e.promise():void 0},t.prototype.__setObject=function(e){return r.isFileGroupsEqual(this.currentObject,e)?e?void 0:(this.__reset(),this.element.val("")):t.__super__.__setObject.apply(this,arguments)},t.prototype.__setExternalValue=function(e){var t,i=this;return this.__lastGroupPr=t=r.valueToGroup(e,this.settings),e&&(this.template.setStatus("started"),this.template.statusText.text(a("loadingInfo"))),t.done(function(e){if(i.__lastGroupPr===t)return i.__setObject(e)}).fail(function(){if(i.__lastGroupPr===t)return i.__onUploadingFailed("createGroup")})},t.prototype.__handleDirectSelection=function(e,t){var i;return i=C.filesFrom(e,t,this.settings),this.settings.systemDialog?this.__setObject(C.FileGroup(i,this.settings)):this.__openDialog("preview").addFiles(i)},t}(e.BaseWidget),e.MultipleWidget._name="MultipleWidget"})}.call(this),function(){var d,h,f;f=C.utils,h=C.settings,d=C.jQuery,C.namespace("",function(l){var s,c,u,o,p;return c="uploadcareWidget",p='[role~="uploadcare-uploader"]',l.initialize=function(e){var t,i,a,r,n,o;for(null==e&&(e=":root"),i=[],r=0,n=(o=d(e)).length;r<n;r++)t=o[r],a=u(t.querySelectorAll(p)),i=i.concat(a);return i},u=function(e){var t,i,a,r,n;for(n=[],a=0,r=e.length;a<r;a++)t=e[a],(i=d(t).data(c))&&i.inputElement===t||n.push(o(t));return n},l.SingleWidget=function(e){return o(e,l.widget.Widget)},l.MultipleWidget=function(e){return o(e,l.widget.MultipleWidget)},l.Widget=function(e){return o(e)},o=function(e,t){var i,a,r,n,o;if(0===(r=d(e)).length)throw new Error("No DOM elements found matching selector");if(1<r.length&&f.warn("There are multiple DOM elements matching selector"),e=r.eq(0),i=(n=h.build(e.data())).multiple?l.widget.MultipleWidget:l.widget.Widget,t&&i!==t)throw new Error("This element should be processed using "+i._name);return(a=e.data(c))&&a.inputElement===e[0]||(s(e),a=(o=new i(e,n)).api(),e.data(c,a),o.template.content.data(c,a)),a},s=function(e){return e.off(".uploadcare").each(function(){var e,t;if((e=(t=d(this).next(".uploadcare--widget")).data(c))&&e.inputElement===this)return t.remove()})},l.start=f.once(function(e,t){if(e=h.common(e,t),!t)return e.live&&setInterval(l.initialize,100),l.initialize()}),d(function(){if(!F.UPLOADCARE_MANUAL_START)return l.start()})})}.call(this),function(){var t,i,e,a,r,n;t=C.jQuery,i=function(e){var t;return t="[data-status=started], [data-status=error]",!e.find(".uploadcare--widget").is(t)},a=function(e,t){return e.attr("data-uploadcare-submitted",t),e.find(":submit").attr("disabled",t)},r=(n='[role~="uploadcare-upload-form"]')+"[data-uploadcare-submitted]",t(pe).on("submit",n,function(){var e;return e=t(this),!!i(e)||(a(e,!0),!1)}),t(pe).on("loaded.uploadcare",r,function(){return t(this).submit()}),e="ready.uploadcare error.uploadcare",t(pe).on(e,r,function(){var e;if(e=t(this),i(e))return a(e,!1)})}.call(this),function(){var t,e,i,a;a=C.utils,t=C.jQuery,e=[".uploadcare--menu__item",".uploadcare--file__description",".uploadcare--crop-sizes__item"].join(", "),i="uploadcare--mouse-focused",t(pe.documentElement).on("mousedown",e,function(e){return a.defer(function(){var e;if((e=pe.activeElement)&&e!==pe.body)return t(e).addClass(i).one("blur",function(){return t(e).removeClass(i)})})}).on("keypress",e,function(e){if(13===e.which||32===e.which)return t(this).click(),e.preventDefault(),e.stopPropagation()})}.call(this),function(){var e;(e=C.expose)("globals",C.settings.common),e("start"),e("initialize"),e("fileFrom"),e("filesFrom"),e("FileGroup"),e("loadFileGroup"),e("openDialog"),e("closeDialog"),e("openPanel"),e("registerTab"),e("Circle",C.ui.progress.Circle),e("SingleWidget"),e("MultipleWidget"),e("Widget"),e("tabsCss"),e("dragdrop.support"),e("dragdrop.receiveDrop"),e("dragdrop.uploadDrop")}.call(this),function(){C.namespace("locale.translations",function(e){return e.ar={uploading:"جاري الرفع... الرجاء الانتظار",loadingInfo:"جار تحميل المعلومات ...",errors:{"default":"خطأ",baddata:"قيمة غير صحيحة",size:"ملف كبير جداً",upload:"يتعذر الرفع",user:"تم إلغاء الرفع",info:"يتعذر تحميل المعلومات",image:"يسمح بالصور فقط",createGroup:"لا يمكن إنشاء مجموعة ملفات",deleted:"تم حذف الملف"},draghere:"أسقط ملف هنا",file:{one:"%1 ملف",other:"%1 ملفات"},buttons:{cancel:"إلغاء",remove:"إزالة",choose:{files:{one:"اختر ملف",other:"اختر ملفات"},images:{one:"اختر صورة",other:"اختر صور"}}},dialog:{close:"أغلق",openMenu:"افتح القائمة",done:"موافق",showFiles:"اظهار الملفات",tabs:{names:{"empty-pubkey":"مرحبا!",preview:"معاينة",file:"ملفات محلية",url:"رابط مباشر",camera:"كاميرا",facebook:"فيس بوك",dropbox:"دروب بوكس",gdrive:"جوجل دريف",gphotos:"صور غوغل",instagram:"إينستجرام",vk:"في كي",evernote:"إيفرنوت",box:"بوكس",onedrive:"ون درايف",flickr:"فليكر",huddle:"هادل"},file:{drag:"سحب وإفلات<br>أي ملف",nodrop:"رفع ملفات من&nbsp;الحاسوب",cloudsTip:"مخازن على السحابة<br>والشبكات الاجتماعية",or:"أو",button:"اختر ملف محلي",also:"أو اختر من"},url:{title:"ملفات من شبكة الإنترنت",line1:"التقاط أي ملف من على شبكة الإنترنت",line2:"فقط قم بتوفير الرابط",input:"الصق الرابط هنا...",button:"رفع"},camera:{title:"ملف من كاميرا الويب",capture:"التقاط صورة",mirror:"عكس الصورة",startRecord:"سجل فيديو",stopRecord:"توقف",cancelRecord:"إلغاء",retry:"طلب الإذن مرة أخرى",pleaseAllow:{title:"يرجى السماح بالوصول إلى الكاميرا",text:"تمت مطالبتك بالسماح بالدخول إلى الكاميرا من هذا الموقع<br>من أجل التقاط الصور من الكاميرا يجب عليك الموافقة على هذا الطلب"},notFound:{title:"لم يتم اكتشاف أي كاميرا",text:"يبدو أنه ليس لديك كاميرا متصلة بهذا الجهاز"}},preview:{unknownName:"غير معروف",change:"إلغاء",back:"الرجوع",done:"إضافة",unknown:{title:"جار الرفع ... يرجى الانتظار للحصول على معاينة",done:"تخطي المعاينة والقبول"},regular:{title:"إضافة هذا الملف؟",line1:"أنت على وشك إضافة الملف أعلاه",line2:"يرجى التأكيد"},image:{title:"إضافة هذة الصورة",change:"إلغاء"},crop:{title:"قص وإضافة هذه الصورة",done:"موافق",free:"حر"},video:{title:"إضافة هذا الفيديو",change:"إلغاء"},error:{"default":{title:"عفوا آسف",text:"حدث خطأ أثناء الرفع",back:"حاول مرة اخرى"},image:{title:"يتم قبول ملفات الصور فقط",text:"الرجاء إعادة المحاولة باستخدام ملف آخر",back:"اختر صورة"},size:{title:"الملف الذي حددتة يتجاوز الحد المسموح بة",text:"الرجاء إعادة المحاولة باستخدام ملف آخر"},loadImage:{title:"خطأ",text:"لا يمكن تحميل الصورة"}},multiple:{title:"لقد اخترت %files%",question:"إضافة %files%?",tooManyFiles:"لقد اخترت عددا كبيرا جدا من الملفات %max% هو الحد الأقصى",tooFewFiles:"لقد اخترت %files%. على الأقل %min% مطلوب",clear:"حذف الكل",done:"إضافة",file:{preview:"معاينة %file%",remove:"حذف %file%"}}}},footer:{text:"مدعوم بواسطة",link:"ابلود كير"}}}}),C.namespace("locale.pluralize",function(e){return e.ar=function(e){var t;return 0===e?"zero":1===e?"one":2===e?"two":3<=(t=e%100)&&t<=10?"few":11<=t&&t<=99?"many":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.az={uploading:"Yüklənilir... Lütfən, gözləyin.",loadingInfo:"İnfo yüklənilir...",errors:{"default":"Xəta",baddata:"Yanlış dəyər",size:"Fayl çox böyükdür",upload:"Yüklənilə bilmədi",user:"Yükləmə ləğv edildi",info:"İnfo yüklənə bilmədi",image:"Yalnız təsvirlərə icazə verilir",createGroup:"Fayl qrupu yaradıla bilmir",deleted:"Fayl silindi"},draghere:"Faylı bura atın",file:{one:"%1 fayl",other:"%1 fayl"},buttons:{cancel:"Ləğv edin",remove:"Silin",choose:{files:{one:"Fayl seçin",other:"Fayllar seçin"},images:{one:"Təsvir seçin",other:"Təsvirlər seçin"}}},dialog:{done:"Hazırdır",showFiles:"Faylları göstərin",tabs:{names:{"empty-pubkey":"Xoş gəlmisiniz",preview:"Önbaxış",file:"Lokal Fayllar",url:"İxtiyari linklər",camera:"Kamera",gdrive:"Google Disk"},file:{drag:"Faylı bura atın",nodrop:"Kompüterinizdən faylları yükləyin",cloudsTip:"Bulud yaddaşlar <br>və sosial xidmətlər",or:"or",button:"Lokal fayl seçin",also:"Həmçinin, buradan seçə bilərsiniz"},url:{title:"Vebdən fayllar",line1:"Vebdən istənilən faylı götürün.",line2:"Sadəcə, link verin.",
input:"Linkinizi bura yerləşdirin...",button:"Yükləyin"},camera:{capture:"Şəkil çəkin",mirror:"Güzgü",retry:"Yenidən icazə sorğusu göndərin.",pleaseAllow:{title:"Lütfən, kameranıza giriş hüququ verin",text:"Bu saytdan kameranıza daxil olmaq icazəsi verildi. Kameranız ilə şəkil çəkmək üçün bu sorğunu təsdiq etməlisiniz."},notFound:{title:"Kamera aşkar edilmədi",text:"Görünür, bu cihaza kamera qoşulmayıb."}},preview:{unknownName:"naməlum",change:"Ləğv edin",back:"Geri",done:"Əlavə edin",unknown:{title:"Yüklənilir... Lütfən, önbaxış üçün gözləyin.",done:"Önbaxışı ötürün və qəbul edin"},regular:{title:"Bu fayl əlavə edilsin?",line1:"Yuxarıdakı faylı əlavə etmək üzrəsiniz.",line2:"Lütfən, təsdiq edin."},image:{title:"Bu təsvir əlavə edilsin?",change:"Ləğv edin"},crop:{title:"Bu təsviri kəsin və əlavə edin",done:"Hazırdır",free:"pulsuz"},error:{"default":{title:"Ups!",text:"Yükləmə zamanı nəsə xəta baş verdi.",back:"Lütfən, y enidən cəhd edin."},image:{title:"Yaınız təsvir faylları qəbul olunur.",text:"Lütfən, başqa fayl ilə cəhd edin.",back:"Təsvir seçin"},size:{title:"Seçdiyiniz fayl limiti keçir.",text:"Lütfən, başqa fayl ilə cəhd edin."},loadImage:{title:"Xəta",text:"Təsvir yüklənilə bilmir"}},multiple:{title:"%files% fayl seçdiniz.",question:"Bütün bu faylları əlavə etmək istəyirsiniz?",tooManyFiles:"Həddindən çox fayl seçdiniz. %max% maksimumdur.",tooFewFiles:"%files% fayl seçdiniz. Ən azı %min% tələb olunur.",clear:"Hamısını silin",done:"Hazırdır"}}}}}}),C.namespace("locale.pluralize",function(e){return e.az=function(e){return"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.ca={uploading:"Carregant... Si us plau esperi.",loadingInfo:"Carregant informació...",errors:{"default":"Error",baddata:"Valor incorrecte",size:"Massa gran",upload:"No s'ha pogut carregar",user:"Carrega cancel·lada",info:"No s'ha pogut carregar la informació",image:"Només es permeten imatges",createGroup:"No es pot crear el grup d'arxius",deleted:"Fitxer eliminat"},draghere:"Arrossega els fitxers fins aquí",file:{one:"%1 fitxer",other:"%1 fitxers"},buttons:{cancel:"Cancel·lar",remove:"Eliminar",choose:{files:{one:"Escull un fitxer",other:"Escull fitxers"},images:{one:"Escull una imatge",other:"Escull imatges"}}},dialog:{done:"Fet",showFiles:"Mostra fitxers",tabs:{names:{"empty-pubkey":"Benvingut",preview:"Avanci",file:"Ordinador",url:"Enllaços arbitraris",camera:"Càmera"},file:{drag:"Arrossega un fitxer aquí",nodrop:"Carrega fitxers des del teu ordinador",cloudsTip:"Emmagatzematge al núvol<br>i xarxes socials",or:"o",button:"Escull un fitxer des del teu ordinador",also:"També pots seleccionar-lo de"},url:{title:"Fitxers de la web",line1:"Selecciona qualsevol fitxer de la web.",line2:"Només proporcioni el link.",input:"Copiï el link aquí...",button:"Pujar"},camera:{capture:"Realitza una foto",mirror:"Mirall",retry:"Demanar permisos una altra vegada",pleaseAllow:{title:"Si us plau, permet accés a la teva càmera",text:"Aquest lloc t'ha demanat de permetre accés a la càmera. Per tal de realitzar imatges amb la teva càmera has d'acceptar aquesta petició."},notFound:{title:"No s'ha detectat cap càmera",text:"Sembla que no tens cap càmera connectada a aquest dispositiu."}},preview:{unknownName:"desconegut",change:"Cancel·lar",back:"Endarrere",done:"Pujar",unknown:{title:"Carregant. Si us plau esperi per la visualització prèvia.",done:"Saltar visualització prèvia i acceptar"},regular:{title:"Vols pujar aquest fitxer?",line1:"Estàs a punt de pujar el fitxer superior.",line2:"Confirmi, si us plau."},image:{title:"Vols pujar aquesta imatge?",change:"Cancel·lar"},crop:{title:"Tallar i pujar aquesta imatge",done:"Fet",free:"lliure"},error:{"default":{title:"La pujada ha fallat!",text:"S'ha produït un error durant la pujada.",back:"Si us plau, provi-ho de nou."},image:{title:"Només s'accepten fitxers d'imatges.",text:"Si us plau, provi-ho de nou amb un altre fitxer.",back:"Escull imatge"},size:{title:"La mida del fitxer que has seleccionat sobrepassa el límit.",text:"Si us plau, provi-ho de nou amb un altre fitxer."},loadImage:{title:"Error",text:"No s'ha pogut carregar la imatge"}},multiple:{title:"N'has escollit %files%",question:"Vols afegir tots aquests fitxers?",tooManyFiles:"Has escollit massa fitxers. %max% és el màxim.",tooFewFiles:"Has escollit %files%. Com a mínim en calen %min%.",clear:"Eliminar-los tots",done:"Fet"}}}}}}),C.namespace("locale.pluralize",function(e){return e.ca=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.cs={uploading:"Nahrávám... Malý moment.",loadingInfo:"Nahrávám informace...",errors:{"default":"Chyba",baddata:"Neplatná hodnota",size:"Soubor je příliš velký",upload:"Nelze nahrát",user:"Nahrávání zrušeno",info:"Nelze nahrát informace",image:"Lze nahrát pouze obrázky",createGroup:"Nelze vytvořit adresář",deleted:"Soubor byl smazán"},draghere:"Přetáhněte soubor sem",file:{one:"%1 soubor",few:"%1 soubory",many:"%1 souborů"},buttons:{cancel:"Zrušit",remove:"Odstranit",choose:{files:{one:"Vyberte soubor",other:"Vyberte soubory"},images:{one:"Vyberte obrázek",other:"Vyberte obrázky"}}},dialog:{done:"Hotovo",showFiles:"Zobrazit soubory",tabs:{names:{"empty-pubkey":"Vítejte",preview:"Náhled",file:"Soubor z počítače",url:"Soubor z internetu",camera:"Webkamera",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",instagram:"Instagram",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"Přetáhněte soubor sem",nodrop:"Nahrajte soubory z vašeho počítače",cloudsTip:"Cloudové úložiště<br>a sociální sítě",or:"nebo",button:"Vyberte soubor z počítače",also:"Můžete také nahrát soubor z"},url:{title:"Soubory z internetu",line1:"Nahrajte jakýkoliv soubor z internetu.",line2:"Stačí vložit odkaz.",input:"Odkaz vložte zde...",button:"Nahrát"},camera:{capture:"Pořídit fotografii",mirror:"Zrcadlo",retry:"Znovu požádat o povolení",pleaseAllow:{title:"Prosím povolte přístup k webkameře",text:"Byl(a) jste požádán(a) o přístup k webkameře. Abyste mohl(a) pořídit fotografii, musíte přístup povolit."},notFound:{title:"Nebyla nalezena webkamera",text:"Zdá se, že k tomuto zařízení není připojena žádná webkamera."}},preview:{unknownName:"neznámý",change:"Zrušit",back:"Zpět",done:"Přidat",unknown:{title:"Nahrávám... Prosím vyčkejte na náhled.",done:"Přeskočit náhled a odeslat"},regular:{title:"Přidat tento soubor?",line1:"Tímto přidáte výše vybraný soubor.",line2:"Prosím potvrďte."},image:{title:"Přidat tento obrázek?",change:"Zrušit"},crop:{title:"Oříznout a přidat tento obrázek",done:"Hotovo",free:"zdarma"},error:{"default":{title:"Jejda!",text:"Něco se v průběhu nahrávání nepodařilo.",back:"Zkuste to prosím znovu."},image:{title:"Lze nahrávat pouze obrázky.",text:"Zkuste to prosím s jiným souborem.",back:"Vyberte obrázek"},size:{title:"Soubor přesahuje povolenou velikost.",text:"Prosím zkuste to s jiným souborem."},loadImage:{title:"Chyba",text:"Nelze nahrát obrázek"}},multiple:{title:"Bylo vybráno %files% souborů",question:"Chcete přidat všechny tyto soubory?",tooManyFiles:"Bylo vybráno moc souborů. Maximum je %max%",tooFewFiles:"Bylo vybráno %files% souborů. Musíte vybrat minimálně %min%",clear:"Odstranit vše",done:"Hotovo"}}}}}}),C.namespace("locale.pluralize",function(e){return e.cs=function(e){return 1===e?"one":2<=e&&e<=4?"few":"many"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.da={uploading:"Uploader... Vent venligst.",loadingInfo:"Henter information...",errors:{"default":"Fejl",baddata:"Forkert værdi",size:"Filen er for stor",upload:"Kan ikke uploade / sende fil",user:"Upload fortrudt",info:"Kan ikke hente information",image:"Kun billeder er tilladt",createGroup:"Kan ikke oprette fil gruppe",deleted:"Filen blev slettet"},draghere:"Drop en fil her",file:{one:"%1 fil",other:"%1 filer"},buttons:{cancel:"Annuller",remove:"Fjern",choose:{files:{one:"Vælg en fil",other:"Vælg filer"},images:{one:"Vælg et billede",other:"Vælg billeder"}}},dialog:{done:"Færdig",showFiles:"Vis filer",tabs:{names:{preview:"Vis",file:"Computer",gdrive:"Google Drev",url:"Direkte link"},file:{
drag:"Drop en fil her",nodrop:"Hent filer fra din computer",or:"eller",button:"Hent fil fra din computer",also:"Du kan også hente fra"},url:{title:"Filer fra en Web adresse",line1:"Vælg en fil fra en web adresse.",line2:"Skriv bare linket til filen.",input:"Indsæt link her...",button:"Upload / Send"},preview:{unknownName:"ukendt",change:"Annuller",back:"Tilbage",done:"Fortsæt",unknown:{title:"Uploader / sender... Vent for at se mere.",done:"Fortsæt uden at vente på resultat"},regular:{title:"Tilføje fil?",line1:"Du er ved at tilføje filen ovenfor.",line2:"Venligst accepter."},image:{title:"Tilføj billede?",change:"Annuller"},crop:{title:"Beskær og tilføj dette billede",done:"Udfør"},error:{"default":{title:"Hov!",text:"Noget gik galt under upload.",back:"Venligst prøv igen"},image:{title:"Du kan kun vælge billeder.",text:"Prøv igen med en billedfil.",back:"Vælg billede"},size:{title:"Den fil du valgte, er desværre større end tilladt.",text:"Venligst prøv med en mindre fil."},loadImage:{title:"Fejl",text:"Kan ikke åbne billede"}},multiple:{title:"Du har valgt %files% filer",question:"Vil du tilføje alle disse filer?",tooManyFiles:"Du har valgt for mange filer. %max% er maximum.",tooFewFiles:"Du har valgt %files% filer. Men du skal vælge mindst %min%.",clear:"Fjern alle",done:"Fortsæt"}}}}}}),C.namespace("locale.pluralize",function(e){return e.da=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.de={uploading:"Hochladen... Bitte warten.",loadingInfo:"Laden der Informationen...",errors:{"default":"Error",baddata:"Falscher Wert",size:"Datei zu groß",upload:"Kann nicht hochgeladen werden",user:"Hochladen abgebrochen",info:"Informationen können nicht geladen werden",image:"Nur Bilder sind erlaubt",createGroup:"Datei-Gruppe kann nicht erstellt werden",deleted:"Datei wurde gelöscht"},draghere:"Ziehen Sie eine Datei hier hinein",file:{one:"%1 Datei",other:"%1 Dateien"},buttons:{cancel:"Abbrechen",remove:"Löschen",choose:{files:{one:"Wählen Sie eine Datei",other:"Wählen Sie die Dateien"},images:{one:"Wählen Sie ein Bild",other:"Wählen Sie Bilder"}}},dialog:{done:"Fertig",showFiles:"Dateien anzeigen",tabs:{names:{"empty-pubkey":"Willkommen",preview:"Vorschau",file:"Lokale Dateien",url:"Web-Links",camera:"Kamera"},file:{drag:"Ziehen Sie eine Datei hier hinein",nodrop:"Laden Sie Dateien von Ihrem PC hoch",cloudsTip:"Cloud Speicher<br>und soziale Dienste",or:"oder",button:"Wählen Sie eine lokale Datei",also:"Sie können sie auch wählen von"},url:{title:"Dateien vom Web",line1:"Holen Sie sich irgendeine Datei vom Web.",line2:"Geben Sie einfach den Link an.",input:"Bitte geben Sie den Link hier an...",button:"Hochladen"},camera:{capture:"Machen Sie ein Foto",mirror:"Spiegel",retry:"Berechtigungen erneut anfordern",pleaseAllow:{title:"Bitte erlauben Sie den Zugriff auf Ihre Kamera",text:"Sie wurden gebeten, dieser Website den Zugriff auf Ihre Kamera zu erlauben. Um mit Ihrer Kamera Fotos machen zu können, müssen Sie diese Erlaubnis erteilen."},notFound:{title:"Keine Kamera festgestellt",text:"Es sieht so aus, als hätten Sie keine Kamera an dieses Gerät angeschlossen."}},preview:{unknownName:"nicht bekannt",change:"Abbrechen",back:"Zurück",done:"Hinzufügen",unknown:{title:"Hochladen... Bitte warten Sie auf die Vorschau.",done:"Vorschau überspringen und Datei annehmen"},regular:{title:"Diese Datei hinzufügen?",line1:"Diese Datei wird nun hinzugefügt.",line2:"Bitte bestätigen Sie."},image:{title:"Dieses Bild hinzufügen?",change:"Abbrechen"},crop:{title:"Dieses Bild beschneiden und hinzufügen",done:"Fertig",free:"frei"},error:{"default":{title:"Oops!",text:"Etwas ist während dem Hochladen schief gelaufen.",back:"Bitte versuchen Sie es erneut"},image:{title:"Nur Bilder sind akzeptiert.",text:"Bitte veruschen Sie es erneut mit einer anderen Datei.",back:"Bild wählen"},size:{title:"Die gewählte Datei überschreitet das Limit.",text:"Bitte veruschen Sie es erneut mit einer anderen Datei."},loadImage:{title:"Fehler",text:"Das Bild kann nicht geladen werden"}},multiple:{title:"Sie haben %files% Dateien gewählt",question:"Möchten Sie all diese Dateien hinzufügen?",tooManyFiles:"Sie haben zu viele Dateien gewählt. %max% ist das Maximum.",tooFewFiles:"Sie haben %files% Dateien. Es sind mindestens %min% nötig.",clear:"Alle löschen",done:"Fertig"}}}}}}),C.namespace("locale.pluralize",function(e){return e.de=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.el={loadingInfo:"Φόρτωση πληροφοριών...",errors:{"default":"Σφάλμα",baddata:"Λανθασμένη αξία",size:"Πολύ μεγάλο αρχείο",upload:"Δεν μπορεί να γίνει φόρτωση",user:"Η φόρτωση ακυρώθηκε",info:"Δεν μπορούν να φορτωθούν πληροφορίες",image:"Μόνο εικόνες επιτρέπονται",createGroup:"Δεν μπορεί να δημιουργηθεί ομάδα αρχείων",deleted:"Το αρχείο διαγράφηκε"},uploading:"Φόρτωση... Παρακαλούμε περιμένετε.",draghere:"Αποθέστε ένα αρχείο εδώ",file:{one:"%1 αρχείο",other:"%1 αρχεία"},buttons:{cancel:"Ακύρωση",remove:"Κατάργηση",choose:{files:{one:"Επιλέξτε ένα αρχείο",other:"Επιλέξτε αρχεία"},images:{one:"Επιλέξτε μία εικόνα",other:"Επιλέξτε εικόνες"}}},dialog:{close:"Κλείσιμο",openMenu:"Άνοιγμα μενού",done:"Εντάξει",showFiles:"Προβολή αρχείων",tabs:{names:{"empty-pubkey":"Καλώς ήρθατε",preview:"Προεπισκόπηση",file:"Τοπικά αρχεία",url:"Απευθείας σύνδεσμος",camera:"Κάμερα",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",instagram:"Instagram",gphotos:"Google Photos",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"σύρετε & αποθέστε<br>οποιαδήποτε αρχεία",nodrop:"Φορτώστε αρχεία από τον&nbsp;υπολογιστή σας",cloudsTip:"Αποθήκευση νέφους<br>και κοινωνικά δίκτυα",or:"ή",button:"Επιλέξτε ένα τοπικό αρχείο",also:"ή επιλέξτε από"},url:{title:"Αρχεία από τον Ιστό",line1:"Πάρτε οποιοδήποτε αρχείο από το διαδίκτυο.",line2:"Γράψτε απλώς τον σύνδεσμο.",input:"Επικολλήστε τον σύνδεσμό σας εδώ...",button:"Φόρτωση"},camera:{title:"Αρχείο από κάμερα web",capture:"Τραβήξτε μια φωτογραφία",mirror:"Καθρέφτης",startRecord:"Εγγραφή βίντεο",cancelRecord:"Ακύρωση",stopRecord:"Διακοπή",retry:"Νέο αίτημα για άδεια",pleaseAllow:{text:"Έχετε δεχτεί υπόδειξη να επιτρέψετε την πρόσβαση στην κάμερα από αυτόν τον ιστότοπο.<br>Για να τραβήξετε φωτογραφίες με την κάμερά σας πρέπει να εγκρίνετε αυτό το αίτημα.",title:"Παρακαλούμε επιτρέψτε την πρόσβαση στην κάμερά σας"},notFound:{title:"Δεν εντοπίστηκε κάμερα",text:"Φαίνεται ότι δεν έχετε κάμερα συνδεδεμένη με αυτή τη συσκευή."}},preview:{unknownName:"άγνωστο",change:"Ακύρωση",back:"Πίσω",done:"Προσθήκη",unknown:{title:"Φόρτωση... Παρακαλούμε περιμένετε για προεπισκόπηση.",done:"Παράλειψη επισκόπησης και αποδοχή"},regular:{title:"Να προστεθεί αυτό το αρχείο;",line1:"Πρόκειται να προσθέσετε το παραπάνω αρχείο.",line2:"Παρακαλούμε επιβεβαιώστε."},image:{title:"Να προστεθεί αυτή η εικόνα;",change:"Ακύρωση"},crop:{title:"Περικοπή και προσθήκη αυτής της εικόνας",done:"Εντάξει",free:"δωρεάν"},video:{title:"Να προστεθεί αυτό το βίντεο;",change:"Ακύρωση"},error:{"default":{title:"Ουπς!",back:"Παρακαλούμε προσπαθήστε ξανά",text:"Κάτι πήγε στραβά κατά τη φόρτωση."},image:{title:"Μόνο αρχεία εικόνων γίνονται δεκτά.",text:"Δοκιμάστε ξανά με άλλο αρχείο.",back:"Επιλέξτε εικόνα"},size:{title:"Το αρχείο που επιλέξατε υπερβαίνει το όριο.",text:"Δοκιμάστε ξανά με άλλο αρχείο."},loadImage:{title:"Σφάλμα",text:"Δεν μπορεί να φορτωθεί η εικόνα"}},multiple:{title:"Έχετε επιλέξει %files%",question:"Προσθήκη %files%;",tooManyFiles:"Έχετε επιλέξει πάρα πολλά αρχεία. Το μέγιστο είναι %max%.",tooFewFiles:"Έχετε επιλέξει %files%. Απαιτούνται τουλάχιστον %min%.",clear:"Κατάργηση όλων",file:{preview:"Προεπισκόπηση %file%",remove:"Αφαίρεση %file%"},done:"Προσθήκη"}}},footer:{text:"παρέχεται από",link:"uploadcare"}}}}),C.namespace("locale.pluralize",function(e){return e.el=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.es={uploading:"Subiendo... Por favor espere.",loadingInfo:"Cargando información...",errors:{"default":"Error",baddata:"Valor incorrecto",
size:"Archivo demasiado grande",upload:"No se puede subir",user:"Subida cancelada",info:"No se puede cargar la información",image:"Solo se permiten imágenes",createGroup:"No se puede crear el grupo de archivos",deleted:"El archivo fue eliminado"},draghere:"Arrastra un archivo aquí",file:{one:"%1 archivo",other:"%1 archivos"},buttons:{cancel:"Cancelar",remove:"Eliminar",choose:{files:{one:"Escoge un archivo",other:"Escoge archivos"},images:{one:"Escoge una imagen",other:"Escoge imágenes"}}},dialog:{close:"Cerrar",openMenu:"Menú abierto",done:"Hecho",showFiles:"Mostrar archivos",tabs:{names:{"empty-pubkey":"Bienvenido",preview:"Previsualización",file:"Archivos locales",url:"Enlaces arbitrarios",camera:"Cámara"},file:{drag:"Arrastra un archivo aquí",nodrop:"Sube fotos desde tu ordenador",cloudsTip:"Almacenamiento en la nube<br>y redes sociales",or:"o",button:"Elige un archivo de tu ordenador",also:"Tambien puedes seleccionarlo de"},url:{title:"Archivos de la Web",line1:"Coge cualquier archivo de la web.",line2:"Solo danos el link.",input:"Pega tu link aquí...",button:"Subir"},camera:{title:"Archivo desde la cámara web",capture:"Hacer una foto",mirror:"Espejo",startRecord:"Grabar un video",stopRecord:"Detener",cancelRecord:"Cancelar",retry:"Solicitar permisos de nuevo",pleaseAllow:{title:"Por favor, permite el acceso a tu cámara",text:"Este sitio ha pedido permiso para acceder a la cámara. Para tomar imágenes con tu cámara debes aceptar esta petición."},notFound:{title:"No se ha detectado ninguna cámara",text:"Parece que no tienes ninguna cámara conectada a este dispositivo."}},preview:{unknownName:"desconocido",change:"Cancelar",back:"Atrás",done:"Añadir",unknown:{title:"Subiendo. Por favor espera para una vista previa.",done:"Saltar vista previa y aceptar"},regular:{title:"¿Quieres subir este archivo?",line1:"Estás a punto de subir el archivo de arriba.",line2:"Confírmalo por favor."},image:{title:"¿Quieres subir esta imagen?",change:"Cancelar"},crop:{title:"Cortar y añadir esta imagen",done:"Listo",free:"libre"},video:{title:"¿Añadir este video?",change:"Cancelar"},error:{"default":{title:"Ups!",text:"Algo salió mal durante la subida.",back:"Por favor, inténtalo de nuevo."},image:{title:"Solo se aceptan archivos de imagen.",text:"Por favor, inténtalo de nuevo con otro archivo.",back:"Escoger imagen"},size:{title:"El archivo que has seleccinado excede el límite.",text:"Por favor, inténtalo de nuevo con otro archivo."},loadImage:{title:"Error",text:"No puede cargar la imagen"}},multiple:{title:"Has escogido %files%",question:"¿Quieres añadir todos estos archivos?",tooManyFiles:"Has escogido demasiados archivos. %max% es el máximo.",tooFewFiles:"Has escogido %files%. Hacen falta al menos %min%.",clear:"Eliminar todo",done:"Hecho",file:{preview:"Vista previa %file%",remove:"Quitar %file%"}}}},footer:{text:"alimentado por"}}}}),C.namespace("locale.pluralize",function(e){return e.es=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.et={uploading:"Üleslaadimine… Palun oota.",loadingInfo:"Info laadimine...",errors:{"default":"Viga",baddata:"Incorrect value",size:"Fail on liiga suur",upload:"Ei saa üles laadida",user:"Üleslaadimine tühistatud",info:"Ei saa infot laadida",image:"Ainult pildid lubatud",createGroup:"Ei saa luua failigruppi",deleted:"Fail on kustutatud"},draghere:"Tiri fail siia",file:{one:"%1 fail",other:"%1 failid"},buttons:{cancel:"Tühista",remove:"Kustuta",choose:{files:{one:"Vali fail",other:"Vali failid"},images:{one:"Vali pilt",other:"Vali pildid"}}},dialog:{done:"Valmis",showFiles:"Näita faile",tabs:{names:{"empty-pubkey":"Tere",preview:"Eelvaade",file:"Failid Kõvakettalt",url:"Veebilink",camera:"Kaamera"},file:{drag:"Tiri failid siia",nodrop:"Lae failid arvutist",cloudsTip:"Pilv<br>ja sotsiaalmeedia",or:"või",button:"Vali fail kõvakettalt",also:"Saad samuti valida"},url:{title:"Failid veebist",line1:"Ükskõik mis fail otse veebist.",line2:"Lihtsalt sisesta URL.",input:"Kleebi link siia...",button:"Lae üles"},camera:{capture:"Take a photo",mirror:"Mirror",startRecord:"Record a video",stopRecord:"Stop",cancelRecord:"Cancel",retry:"Request permissions again",pleaseAllow:{title:"Please allow access to your camera",text:"You have been prompted to allow camera access from this site. In order to take pictures with your camera you must approve this request."},notFound:{title:"No camera detected",text:"Looks like you have no camera connected to this device."}},preview:{unknownName:"teadmata",change:"Tühista",back:"Tagasi",done:"Lisa",unknown:{title:"Üleslaadimine... Palun oota eelvaadet.",done:"Jäta eelvaade vahele ja nõustu"},regular:{title:"Lisa see fail?",line1:"Oled lisamas ülaltoodud faili.",line2:"Palun kinnita."},image:{title:"Lisa pilt?",change:"Tühista"},crop:{title:"Lõika ja lisa pilt",done:"Valmis",free:"vaba"},video:{title:"Lisa video?",change:"Tühista"},error:{"default":{title:"Oihh!",text:"Midagi läks üleslaadimisel valesti.",back:"Palun proovi uuesti"},image:{title:"Ainult pildifailid on lubatud.",text:"Palun proovi uuesti teise failiga.",back:"Vali pilt"},size:{title:"Valitud fail ületab maksimaalse suuruse.",text:"Palun proovi uuesti teise failiga."},loadImage:{title:"Viga",text:"Ei saa pilti laadida"}},multiple:{title:"Oled valinud %files%",question:"Kas sa soovid lisada kõik failid?",tooManyFiles:"Oled valinud liiga suure hulga faile. %max% on maksimaalne.",tooFewFiles:"Oled valinud %files%. Vähemalt %min% nõutud.",clear:"Eemalda kõik",done:"Valmis"}}}}}}),C.namespace("locale.pluralize",function(e){return e.et=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.fr={uploading:"Envoi en cours... Merci de patienter.",loadingInfo:"Chargement des informations...",errors:{"default":"Erreur",baddata:"Valeur incorrecte",size:"Fichier trop volumineux",upload:"Envoi impossible",user:"Envoi annulé",info:"Impossible de charger les informations",image:"Seules les images sont autorisées",createGroup:"Création d'1 groupe impossible",deleted:"Le fichier a été supprimé"},draghere:"Glissez-déposez un fichier ici",file:{one:"%1 fichier",other:"%1 fichiers"},buttons:{cancel:"Annuler",remove:"Supprimer",choose:{files:{one:"Sélectionner un fichier",other:"Sélectionner des fichiers"},images:{one:"Sélectionner une image",other:"Sélectionner des images"}}},dialog:{close:"Fermer",openMenu:"Ouvrir le menu",done:"Terminer",showFiles:"Voir les fichiers",tabs:{names:{"empty-pubkey":"Bienvenue",preview:"Avant-première",file:"Fichier en local",url:"Une adresse web",camera:"Caméra",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",gphotos:"Google Photos",instagram:"Instagram",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"Glissez-déposez un fichier ici",nodrop:"Envoyez des fichiers depuis votre ordinateur",cloudsTip:"Stockage sur le cloud<br>et réseaux sociaux",or:"ou",button:"Choisir un fichier local",also:"Vous pouvez également le sélectionner depuis"},url:{title:"Fichiers depuis le Web",line1:"Prenez n'importe quel fichier depuis un site web.",line2:"Saisissez simplement son adresse.",input:"Collez le lien ici...",button:"Envoi"},camera:{title:"Fichier depuis la caméra",capture:"Prendre une photo",mirror:"Miroir",startRecord:"Enregistrer une vidéo",stopRecord:"Arrêter",cancelRecord:"Annuler",retry:"Envoyer une nouvelle demande de permission",pleaseAllow:{title:"Autorisez l'accès à votre appareil photo",text:"Vous avez été invité à autoriser l'accès à votre appareil photo. Pour prendre des photos avec votre caméra vous devez approuver cette demande."},notFound:{title:"Aucun appareil photo détecté",text:"Il semblerait que vous n'ayez pas d'appareil photo connecté à cet appareil."}},preview:{unknownName:"inconnu",change:"Annuler",back:"Retour",done:"Ajouter",unknown:{title:"Envoi en cours... Merci de patienter pour prévisualiser.",done:"Passer la prévisualisation et accepter"},regular:{title:"Ajouter ce fichier ?",line1:"Vous êtes sur le point d'ajouter le fichier ci-dessus.",line2:"Merci de confirmer."},image:{title:"Ajouter cette image ?",
change:"Annuler"},crop:{title:"Recadrer et ajouter cette image",done:"Terminer",free:"libre"},video:{title:"Ajouter cette vidéo ?",change:"Annuler"},error:{"default":{title:"Oups!",text:"Quelque chose n'a pas fonctionné pendant l'envoi.",back:"Merci de bien vouloir recommencer"},image:{title:"Seules les images sont acceptées.",text:"Merci de bien vouloir recommencer avec un autre fichier.",back:"Choisir une image"},size:{title:"Le fichier sélectionné est trop volumineux.",text:"Merci de bien vouloir recommencer avec un autre fichier."},loadImage:{title:"Erreur",text:"Impossible de charger l'image"}},multiple:{title:"Vous avez choisi %files%",question:"Voulez vous ajouter tous ces fichiers ?",tooManyFiles:"Vous avez choisi trop de fichiers. %max% est le maximum.",tooFewFiles:"Vous avez choisi %fichiers%. %min% est le minimum.",clear:"Tout retirer",done:"Terminer",file:{preview:"Prévisualiser %file%",remove:"Supprimer %file%"}}}}}}}),C.namespace("locale.pluralize",function(e){return e.fr=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.he={uploading:"טוען... אנא המתן.",loadingInfo:"טוען מידע...",errors:{"default":"שגיאה",baddata:"ערך שגוי",size:"קובץ גדול מידי",upload:"לא ניתן להעלות",user:"העלאה בוטלה",info:"לא ניתן לטעון מידע",image:"ניתן להעלות רק תמונות",createGroup:"לא ניתן ליצור קבוצה",deleted:"הקובץ נמחק"},draghere:"שחרר כאן קובץ",file:{one:"קובץ %1",other:"%1 קבצים"},buttons:{cancel:"ביטול",remove:"הסר",choose:{files:{one:"בחר קובץ",other:"בחר קבצים"},images:{one:"בחר תמונה",other:"בחר תמונות"}}},dialog:{done:"סיום",showFiles:"הצג קבצים",tabs:{names:{facebook:"פייסבוק",dropbox:"דרופבוקס",gdrive:"כונן גוגל",instagram:"אינסטגרם",url:"לינק מהאינטרנט"},file:{drag:"שחרר כאן קובץ",nodrop:"העלה קבצים מהמחשב",or:"או",button:"בחר קובץ מהמחשב",also:"ניתן לבחור גם מ"},url:{title:"קובץ מהאינטרנט",line1:"גרור קובץ מהאינטרנט",line2:"ספק את כתובת הקובץ",input:"הדבק את כתובת הקובץ...",button:"העלה"},preview:{unknownName:"לא ידוע",change:"ביטול",back:"חזרה",done:"הוסף",unknown:{title:"מעלה... נא המתן לתצוגה מקדימה.",done:"דלג על תצוגה מקדימה"},regular:{title:"להוסיף קובץ זה?",line1:"קובץ זה יועלה",line2:"נא אשר."},image:{title:"להוסיף תמונה זו?",change:"ביטול"},crop:{title:"חתוך והוסף תמונה זו",done:"סיום"},error:{"default":{title:"אופס!",text:"משהו השתבש בזמן ההעלאה.",back:"נא נסה שוב"},image:{title:"ניתן לקבל רק קבצי תמונות.",text:"נא נסה שוב עם קובץ אחר.",back:"בחר תמונה"},size:{title:"הקובץ שבחרת חורג מהגבול.",text:"נא נסה שוב עם קובץ אחר."},loadImage:{title:"שגיאה",text:"טעינת התמונה נכשלה"}},multiple:{title:"בחרת %files%",question:"אתה מעוניין להוסיף את כל הקבצים האלו?",tooManyFiles:"בחרת יותר מידי קבצים. יש לבחור מקסימום %max% קבצים.",tooFewFiles:"בחרת %files%. יש לבחור לפחות %min%.",clear:"הסר הכל",done:"סיום"}}}}}}),C.namespace("locale.pluralize",function(e){return e.he=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.it={uploading:"Caricamento in corso... Si prega di attendere.",loadingInfo:"Caricamento informazioni in corso...",errors:{"default":"Errore",baddata:"Valore errato",size:"Il file è troppo grande",upload:"Impossibile fare l’upload",user:"Upload cancellato",info:"Impossibile caricare le informazioni",image:"Sono ammesse solo immagini",createGroup:"Impossibile creare gruppo di file",deleted:"Il file è stato eliminato"},draghere:"Trascina un file qui",file:{one:"file %1",other:"file %1"},buttons:{cancel:"Cancella",remove:"Rimuovi",choose:{files:{one:"Seleziona un file",other:"Seleziona file"},images:{one:"Seleziona un’immagine",other:"Seleziona immagini"}}},dialog:{done:"Fatto",showFiles:"Mostra file",tabs:{names:{"empty-pubkey":"Benvenuto",preview:"Anteprima",file:"File locali",url:"Link arbitrari",camera:"Fotocamera"},file:{drag:"Trascina un file qui",nodrop:"Carica file dal tuo computer",cloudsTip:"Salvataggi nel cloud<br>e servizi sociali",or:"o",button:"Seleziona un file locale",also:"Puoi anche scegliere da"},url:{title:"File dal web",line1:"Preleva un file dal web.",line2:"È sufficiente fornire il link.",input:"Incolla il tuo link qui...",button:"Carica"},camera:{capture:"Scatta una foto",mirror:"Specchio",retry:"Richiedi di nuovo le autorizzazioni",pleaseAllow:{title:"Consenti l’accesso alla tua fotocamera",text:"Ti è stato richiesto di consentire l’accesso alla fotocamera da questo sito. Per scattare le foto con la tua fotocamera devi accettare questa richiesta."},notFound:{title:"Nessuna fotocamera rilevata",text:"Non risulta che tu non abbia una fotocamera collegata a questo dispositivo."}},preview:{unknownName:"sconosciuto",change:"Cancella",back:"Indietro",done:"Aggiungi",unknown:{title:"Caricamento in corso... Attendi l’anteprima.",done:"Salta l’anteprima e accetta"},regular:{title:"Vuoi aggiungere questo file?",line1:"Stai per aggiungere il file sopra.",line2:"Conferma."},image:{title:"Vuoi aggiungere questa immagine?",change:"Cancella"},crop:{title:"Ritaglia e aggiungi questa immagine",done:"Fatto",free:"gratis"},error:{"default":{title:"Ops!",text:"Si è verificato un problema durante l’upload.",back:"Si prega di riprovare"},image:{title:"Sono accettati solo file immagine.",text:"Riprova con un altro file.",back:"Scegli immagine"},size:{title:"Il file selezionato supera il limite.",text:"Riprova con un altro file."},loadImage:{title:"Errore",text:"Impossibile caricare l’immagine"}},multiple:{title:"Hai selezionato %files%",question:"Vuoi aggiungere tutti questi file?",tooManyFiles:"Hai selezionato troppi file. %max% è il massimo.",tooFewFiles:"Hai selezionato %files%. È richiesto almeno %min%.",clear:"Rimuovi tutto",done:"Fatto"}}}}}}),C.namespace("locale.pluralize",function(e){return e.it=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.ja={uploading:"アップロードしています… 完了までお待ち下さい。",loadingInfo:"読み込み中…",errors:{"default":"エラー",baddata:"間違った値",size:"ファイルが大きすぎます",upload:"アップロードできませんでした",user:"アップロードがキャンセルされました",info:"読み込みに失敗しました",image:"アップロードできるのは画像ファイルのみです",createGroup:"グループの作成に失敗しました",deleted:"削除されたファイルです"},draghere:"ここにファイルをドロップ",file:{other:"%1ファイル"},buttons:{cancel:"キャンセル",remove:"削除",choose:{files:{one:"ファイルを選択",other:"ファイルを選択"},images:{one:"画像を選択",other:"画像を選択"}}},dialog:{done:"完了",showFiles:"ファイルを表示",tabs:{names:{preview:"プレビュー",file:"ローカルファイル",url:"URLを直接入力"},file:{drag:"ここにファイルをドロップ",nodrop:"ファイルを選択してアップロード",cloudsTip:"クラウドストレージ<br>およびソーシャルサービス",or:"もしくは",button:"ローカルのファイルを選択",also:"次からも選択可能です："},url:{title:"ウェブ上のファイル",line1:"ウェブ上からファイルを取得します。",line2:"URLを入力してください。",input:"ここにURLを貼り付けしてください…",button:"アップロード"},preview:{unknownName:"不明なファイル",change:"キャンセル",back:"戻る",done:"追加",unknown:{title:"アップロードしています… プレビューの表示をお待ちください。",done:"プレビューの確認をスキップして完了"},regular:{title:"このファイルを追加しますか？",line1:"こちらのファイルを追加しようとしています。",line2:"確認してください。"},image:{title:"この画像を追加しますか？",change:"キャンセル"},crop:{title:"画像の切り取りと追加",done:"完了",free:"リセット"},error:{"default":{title:"失敗しました",text:"アップロード中に不明なエラーが発生しました。",back:"もう一度お試し下さい"},image:{title:"画像ファイルのみ許可されています",text:"他のファイルで再度お試し下さい。",back:"画像を選択"},size:{title:"ファイルサイズが大きすぎます。",text:"他のファイルで再度お試し下さい。"},loadImage:{title:"エラー",text:"画像のロードに失敗しました。"}},multiple:{title:"%files%つのファイルを選択中",question:"これら全てのファイルを追加しますか？",tooManyFiles:"選択ファイルが多すぎます。%max%つ以下にしてください。",tooFewFiles:"選択ファイルが少なすぎます。%files%つ選択中です。少なくとも%min%つ選択してください。",clear:"全て削除",done:"完了"}}}}}}),C.namespace("locale.pluralize",function(e){return e.ja=function(e){return"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.ko={uploading:"업로드중 기다려주세요",loadingInfo:"정보 로드중...",errors:{"default":"오류",baddata:"잘못된 값",size:"파일용량 초과",upload:"업로드 실패",user:"업로드 취소됨",info:"정보를 불러올 수 없습니다",image:"허용된 이미지만 가능",createGroup:"파일 그룹 만들기 실패",deleted:"파일이 삭제되었습니다"},draghere:"여기에 끌어다 놓기",file:{one:"%1 파일",other:"%1 파일"},buttons:{cancel:"취소",remove:"삭제",choose:{files:{one:"파일 첨부",other:"파일 첨부"},images:{one:"이미지 첨부",other:"이미지 첨부"}}},dialog:{close:"닫기",openMenu:"메뉴 열기",done:"완료",showFiles:"파일 표시",tabs:{names:{"empty-pubkey":"반갑습니다",preview:"미리보기",file:"파일 첨부",url:"링크 연결",camera:"카메라",facebook:"페이스북",dropbox:"드롭박스",
gdrive:"구글 드라이브",gphotos:"구글 포토",instagram:"인스타그램",evernote:"에버노트",box:"박스",onedrive:"스카이드라이브",flickr:"플리커"},file:{drag:"모든 파일을<br>드래그 & 드롭",nodrop:"파일 업로드",cloudsTip:"클라우드 스토리지 및 소셜",or:"또는",button:"파일 선택",also:"또는 선택하십시오"},url:{title:"웹에서 파일 링크 연결",line1:"웹에서 모든파일을 가져옵니다",line2:"링크만 연결합니다.",input:"링크 붙여 넣기...",button:"업로드"},camera:{title:"카메라 연결",capture:"사진 찍기",mirror:"거울",startRecord:"비디오 녹화",stopRecord:"정지",cancelRecord:"취소",retry:"재 시도",pleaseAllow:{title:"카메라 접근 허용",text:"카메라 접근을 허용하시겠습니까?<br>승인 요청을 해주셔야 합니다"},notFound:{title:"카메라가 없습니다",text:"이 기기에 연결된 카메라가 없습니다"}},preview:{unknownName:"알수없음",change:"취소",back:"뒤로",done:"추가",unknown:{title:"업로드중, 기다려주세요",done:"미리보기 건너뛰기"},regular:{title:"이 파일을 추가하시겠습니까?",line1:"위 파일을 추가하려고 합니다",line2:"확인 하십시오"},image:{title:"이미지를 추가하시겠습니까?",change:"취소"},crop:{title:"이미지 자르기 및 추가",done:"완료",free:"무료"},video:{title:"비디오를 추가하시겠습니까?",change:"취소"},error:{"default":{title:"죄송합니다",text:"업로드에 문제가 있습니다",back:"다시 시도해 주세요"},image:{title:"이미지 파일만 허용됩니다",text:"다른 파일로 다시 시도하세요",back:"이미지 선택"},size:{title:"선택한 파일이 한도 초과하였습니다",text:"다른 파일로 다시 시도하세요"},loadImage:{title:"오류",text:"이미지를 불러올 수 없습니다"}},multiple:{title:"%files%을(를) 선택하였습니다",question:"%files%을 추가하시겠습니까?",tooManyFiles:"너무 많은 파일을 추가하셨습니다. %max%가 최대 한도입니다",tooFewFiles:"%files%을(를) 선택하였습니다 최소 %min%이상 필요합니다",clear:"모두 삭제",done:"추가",file:{preview:"%file% 미리보기",remove:"%file% 삭제"}}}},footer:{text:"powered by",link:"uploadcare"}}}}),C.namespace("locale.pluralize",function(e){return e.ko=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.lv={uploading:"Augšupielādē... Lūdzu, gaidiet.",errors:{"default":"Kļūda",image:"Atļauti tikai attēli"},draghere:"Velciet failus šeit",file:{zero:"%1 failu",one:"%1 fails",other:"%1 faili"},buttons:{cancel:"Atcelt",remove:"Dzēst"},dialog:{title:"Ielādēt jebko no jebkurienes",poweredby:"Darbināts ar",support:{images:"Attēli",audio:"Audio",video:"Video",documents:"Dokumenti"},tabs:{file:{title:"Mans dators",line1:"Paņemiet jebkuru failu no jūsu datora.",line2:"Izvēlēties ar dialogu vai ievelciet iekšā.",button:"Meklēt failus"},url:{title:"Faili no tīmekļa",line1:"Paņemiet jebkuru failu no tīmekļa.",line2:"Tikai uzrādiet linku.",input:"Ielīmējiet linku šeit...",button:"Ielādēt"}}}}}),C.namespace("locale.pluralize",function(e){return e.lv=function(e){return 0===e?"zero":e%10==1&&e%100!=11?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.nb={uploading:"Laster opp... Vennligst vent.",loadingInfo:"Laster inn info...",errors:{"default":"Feil",baddata:"Ugyldig verdi",size:"Filen er for stor",upload:"Kan ikke laste opp",user:"Opplasting avbrutt",info:"Kan ikke laste inn info",image:"Kun bilder er tillatt",createGroup:"Kan ikke opprette filgruppe",deleted:"Filen er slettet"},draghere:"Dra en fil hit",file:{one:"%1 fil",other:"%1 filer"},buttons:{cancel:"Avbryt",remove:"Fjern",choose:{files:{one:"Velg en fil",other:"Velg filer"},images:{one:"Velg et bilde",other:"Velg bilder"}}},dialog:{done:"Ferdig",showFiles:"Vis filer",tabs:{names:{preview:"Forhåndsvising",file:"Lokale filer",url:"Direktelink"},file:{drag:"Dra og slipp en fil her",nodrop:"Last opp filer fra datamaskinen",cloudsTip:"Skylagring<br>og sosiale tjenester",or:"eller",button:"Velg en lokal fil",also:"Du kan også velge det fra"},url:{title:"Filer fra internett",line1:"Velg hvilken som helst fil fra internett.",line2:"Bare gi oss linken.",input:"Lim inn linken her...",button:"Last opp"},preview:{unknownName:"ukjent",change:"Avbryt",back:"Tilbake",done:"Legg til",unknown:{title:"Laster opp... Vennligst vent på forhåndsvisning.",done:"Hopp over forhåndsvisning og godkjenn"},regular:{title:"Legge til denne filen?",line1:"Filen legges nå til.",line2:"Vennligst bekreft."},image:{title:"Legge til dette bildet?",change:"Avbryt"},crop:{title:"Kutt og legg til dette bildet",done:"Ferdig",free:"frigjør"},error:{"default":{title:"Ops!",text:"Noe gikk galt under opplastingen.",back:"Vennligst prøv igjen"},image:{title:"Kun bilder er akseptert.",text:"Prøv igjen med en annen fil.",back:"Velg bilde"},size:{title:"Den valgte filen overskrider tilatt størrelse.",text:"Vennligst prøv igjen med en annen fil."},loadImage:{title:"Feil",text:"Kan ikke laste bildet"}},multiple:{title:"Du har valgt %files%",question:"Ønsker du å legge til alle filene?",tooManyFiles:"Du har valgt for mange filer. %max% er maksimum.",tooFewFiles:"Du har valgt %files%. Minimum %min% er påkrevd.",clear:"Fjern alle",done:"Ferdig"}}}}}}),C.namespace("locale.pluralize",function(e){return e.nb=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.nl={uploading:"Uploaden... Even geduld.",loadingInfo:"Laden informatie...",errors:{"default":"Fout",baddata:"Ongeldige waarde",size:"Bestand is te groot",upload:"Kan niet uploaden",user:"Upload geannuleerd",info:"Kan informatie niet laden",image:"Alleen afbeeldingen toegestaan",createGroup:"Kan bestandsgroep niet maken",deleted:"Bestand is verwijderd"},draghere:"Drop hier een bestand",file:{one:"%1 bestand",other:"%1 bestanden"},buttons:{cancel:"Annuleren",remove:"Verwijderen",choose:{files:{one:"Kies een bestand",other:"Kies bestanden"},images:{one:"Kies een afbeelding",other:"Kies afbeeldingen"}}},dialog:{done:"Klaar",showFiles:"Toon bestanden",tabs:{names:{preview:"Voorvertoning",file:"Computer",url:"Directe links"},file:{drag:"Drop hier een bestand",nodrop:"Upload bestanden van je computer",or:"of",button:"Selecteer een bestand op je computer",also:"Je kan ook selecteren van"},url:{title:"Bestanden op het web",line1:"Selecteer een bestand op het web.",line2:"Voer de link in.",input:"Plak de link hier...",button:"Upload"},preview:{unknownName:"onbekend",change:"Annuleren",back:"Terug",done:"Toevoegen",unknown:{title:"Uploaden... Wacht op de voorvertoning.",done:"Voorvertoning overslaan an accepteren"},regular:{title:"Dit bestand toevoegen?",line1:"Je staat op het punt bovenstaand bestand toe te voegen.",line2:"Bevestig"},image:{title:"Voeg deze afbeelding toe?",change:"Annuleren"},crop:{title:"Afbeelding bijknippen en toevoegen",done:"Klaar"},error:{"default":{title:"Oeps!",text:"Er is een fout opgetreden tijdens het uploaden.",back:"Probeer opnieuw"},image:{title:"Alleen afbeeldingen worden geaccepteerd.",text:"Probeer opnieuw met een andere bestand.",back:"Selecteer afbeelding"},size:{title:"Het geselecteerd bestand is groter dan de limiet.",text:"Probeer opnieuw met een andere bestand."},loadImage:{title:"Fout",text:"Kan afbeelding niet laden"}},multiple:{title:"Je hebt de volgende bestanden geselecteerd %files%",question:"Wil je al deze bestanden toevoegen?",tooManyFiles:"Je hebt teveel bestanden geselecteerd. %max% is het maximum.",tooFewFiles:"Je hebt de volgende bestanden geselecteerd %files%. Minimaal %min% is verplicht.",clear:"Verwijder alle bestanden",done:"Klaar"}}}}}}),C.namespace("locale.pluralize",function(e){return e.nl=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.pl={uploading:"Przesyłanie... Proszę czekać.",loadingInfo:"Ładowanie...",errors:{"default":"Błąd",baddata:"Niepoprawna wartość",size:"Plik zbyt duży",upload:"Nie udało się przesłać",user:"Przesyłanie anulowane",info:"Nie udało się załadować informacji",image:"Dozwolone są tylko obrazy",createGroup:"Nie udało się utworzyć grupy plików",deleted:"Plik został usunięty"},draghere:"Upuść plik tutaj",file:{one:"%1 plik",few:"%1 pliki",many:"%1 plików"},buttons:{cancel:"Anuluj",remove:"Usuń",choose:{files:{one:"Wybierz plik",other:"Wybierz pliki"},images:{one:"Wybierz obraz",other:"Wybierz obrazy"}}},dialog:{close:"Zamknij",openMenu:"Otwórz menu",done:"Wykonano",showFiles:"Pokaż pliki",tabs:{names:{"empty-pubkey":"Witaj",preview:"Podgląd",file:"Pliki lokalne",url:"Plik z Sieci",camera:"Aparat"},file:{drag:"Upuść plik tutaj",nodrop:"Prześlij pliki z Twojego komputera",cloudsTip:"Dane w chmurze<br>i sieci społecznościowe",or:"lub",button:"Wybierz plik lokalny",also:"Możesz również wybrać z"},url:{title:"Pliki z Sieci",line1:"Złap jakikolwiej plik z sieci.",
line2:"Podaj adres.",input:"Wklej link...",button:"Prześlij"},camera:{title:"Plik z kamery internetowej",capture:"Zrób zdjęcie",mirror:"Odbicie lustrzane",startRecord:"Nagraj film",stopRecord:"Zakończ",cancelRecord:"Anuluj",retry:"Poproś ponownie o dostęp",pleaseAllow:{title:"Prośba o udostępnienie aparatu",text:"Zostałeś poproszony przez tę stronę o dostęp do aparatu. Aby robić zdjecia, musisz zaakceptować tę prośbę."},notFound:{title:"Nie wykryto aparatu.",text:"Wygląda na to, że nie masz podłączonego aparatu do tego urządzenia."}},preview:{unknownName:"nieznany",change:"Anuluj",back:"Wstecz",done:"Dodaj",unknown:{title:"Przesyłanie... Proszę czekać na podgląd.",done:"Omiń podgląd i zaakceptuj."},regular:{title:"Dodać ten plik?",line1:"Zamierzasz dodać nowy plik.",line2:"Potwierdź, proszę."},image:{title:"Dodać ten obraz?",change:"Anuluj"},crop:{title:"Przytnij i dodaj ten obraz",done:"Wykonano",free:"wolny"},video:{title:"Dodać ten film?",change:"Anuluj"},error:{"default":{title:"Oops!",text:"Coś poszło nie tak podczas przesyłania.",back:"Spróbuj ponownie"},image:{title:"Akceptowane są tylko obrazy.",text:"Spróbuj ponownie z innym plikiem.",back:"Wybierz obraz"},size:{title:"Plik, który wybrałeś, przekracza dopuszczalny rozmiar",text:"Spróbuj ponownie z innym plikiem."},loadImage:{title:"Błąd",text:"Nie udało się załadować obrazu"}},multiple:{title:"Wybrałeś %files%",question:"Czy chcesz dodać wszystkie te pliki?",tooManyFiles:"Wybrałeś zbyt wiele plików. Maksimum to %max%.",tooFewFiles:"Wybrałeś %files%. Wymagane jest co najmniej %min%.",clear:"Usuń wszystkie",done:"Wykonano",file:{preview:"Zobacz %file%",remove:"Usuń %file%"}}}}}}}),C.namespace("locale.pluralize",function(e){return e.pl=function(e){var t;return 1===e?"one":2<=(t=e%10)&&t<=4&&1!=(e/10%10|0)?"few":"many"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.pt={uploading:"Fazendo upload... Aguarde.",loadingInfo:"Carregando informações...",errors:{"default":"Erro",baddata:"Valor incorreto",size:"Arquivo muito grande",upload:"Não foi possível fazer o upload",user:"Upload cancelado",info:"Não foi possível carregar as informações",image:"Apenas imagens são permitidas",createGroup:"Não foi possível criar o grupo de arquivos",deleted:"O arquivo foi excluído"},draghere:"Arraste um arquivo aqui",file:{one:"%1 arquivo",other:"%1 arquivos"},buttons:{cancel:"Cancelar",remove:"Excluir",choose:{files:{one:"Escolha um arquivo",other:"Escolha arquivos"},images:{one:"Escolha uma imagem",other:"Escolha imagens"}}},dialog:{done:"OK",showFiles:"Mostrar arquivos",tabs:{names:{preview:"Pré-estréia",file:"Computador",url:"Link da web"},file:{drag:"Arraste um arquivo aqui",nodrop:"Faça upload de arquivos do seu computador",or:"ou",button:"Escolha um arquivo do computador",also:"Você também pode escolher arquivos de"},url:{title:"Arquivos da web",line1:"Faça upload de qualquer arquivo da web.",line2:"Apenas informe o link.",input:"Cole seu link aqui...",button:"Upload"},camera:{capture:"Tirar uma foto",mirror:"Espelhar",startRecord:"Gravar um vídeo",stopRecord:"Parar",cancelRecord:"Cancelar",retry:"Requisitar permissão novamente",pleaseAllow:{title:"Por favor permita o acesso a sua câmera",text:"Você foi solicitado a permitir o acesso à câmera a partir deste site. Para tirar fotos com sua câmera, você deve aprovar este pedido."},notFoud:{title:"Câmera não detectada",text:"Parece que você não tem uma câmera conectada a este dispositivo"}},preview:{unknownName:"desconhecido",change:"Cancelar",back:"Voltar",done:"Adicionar",unknown:{title:"Fazendo upload... Aguarde a visualização.",done:"Pular visualização e aceitar"},regular:{title:"Adicionar esse arquivo?",line1:"Você está prestes a adicionar o arquivo acima.",line2:"Por favor, confirme."},image:{title:"Adicionar essa imagem?",change:"Cancelar"},crop:{title:"Cortar e adicionar essa imagem",done:"OK",free:"livre"},error:{"default":{title:"Oops!",text:"Alguma coisa deu errado durante o upload.",back:"Por favor, tente novamente"},image:{title:"Apenas arquivos de imagem são aceitos.",text:"Por favor, tente novamente com outro arquivo.",back:"Escolher a imagem"},size:{title:"O arquivo que você escolheu excede o limite.",text:"Por favor, tente novamente com outro arquivo."},loadImage:{title:"Erro",text:"Não foi possível carregar a imagem"}},multiple:{title:"Você escolheu",question:"Você quer adicionar todos esses arquivos?",clear:"Excluir todos",done:"OK"}}}}}}),C.namespace("locale.pluralize",function(e){return e.pt=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.ro={uploading:"Se încarcă... Răbdare.",loadingInfo:"Info încărcare...",errors:{"default":"Eroare",baddata:"Valoare incorectă",size:"Fișier prea mare",upload:"Nu pot încărca",user:"Încărcare anulată",info:"Nu pot încărca info",image:"Doar imagini, vă rog",createGroup:"Nu pot crea grup de fișiere",deleted:"Fișierul a fost șters"},draghere:"Trage un fișier aici",file:{one:"%1 fișier",other:"%1 fișiere"},buttons:{cancel:"Anulare",remove:"Șterge",choose:{files:{one:"Alege un fișier",other:"Alege fișiere"},images:{one:"Alege o imagine",other:"Alege imagini"}}},dialog:{close:"Închide",openMenu:"Deschide meniu",done:"Gata",showFiles:"Arată fișiere",tabs:{names:{"empty-pubkey":"Bine ai venit",preview:"Previzualizare",file:"Fișiere locale",url:"Link direct",camera:"Camera",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",gphotos:"Google Photos",instagram:"Instagram",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"trage aici<br>fișierele",nodrop:"Încarcă fișiere din computer",cloudsTip:"Cloud <br>și rețle sociale",or:"sau",button:"Alege un fișier local",also:"sau alege din"},url:{title:"Fișiere din Web",line1:"Ia orice fișier din Web.",line2:"Trebuie să ai doar linkul.",input:"Lipește linkul aici...",button:"Încarcă"},camera:{title:"Fișier din camera web",capture:"Fă o fotografie",mirror:"Mirror",startRecord:"Înregistrează un video",stopRecord:"Stop",cancelRecord:"Anulează",retry:"Cere permisiune din nou",pleaseAllow:{title:"Te rog sa-mi dai acces la cameră",text:"Ai fost rugat să dai acces la cameră de acest site.<br>Pentru a putea face fotografii cu camera, trebuie să aprobi această cerere."},notFound:{title:"Nicio cameră detectată",text:"Se pare că nu ai nicio cameră atașată acestui device."}},preview:{unknownName:"necunoscut",change:"Anulează",back:"Înapoi",done:"Adaugă",unknown:{title:"Se încarcă... Te rog așteaptă previzualizarea.",done:"Sari peste previzualizare și acceptă"},regular:{title:"Adaug acest fișier?",line1:"Ești pe punctul de a adăuga fișierul de mai sus.",line2:"Te rog confirmă."},image:{title:"Adaug această imagine?",change:"Anulează"},crop:{title:"Decupează și adaugă aceasta imagine",done:"Gata",free:"gratis"},video:{title:"Adaug acest video?",change:"anulează"},error:{"default":{title:"Oops!",text:"A intervenit o problemă la încărcare.",back:"te rog încearcă din nou"},image:{title:"Sunt acceptate doar imagini.",text:"Te rog încearcă din nou cu un alt fișier.",back:"Alege imagine"},size:{title:"Fișierul selectat de tine este prea mare.",text:"Te rog să încerci cu alt fișier."},loadImage:{title:"Eroare",text:"Nu pot încărca imaginea"}},multiple:{title:"Ai ales %files%.",question:"Adaug %files%?",tooManyFiles:"Ai ales prea multe fișiere. %max% is maximum.",tooFewFiles:"Ai ales %files%. Minimul este %min% .",clear:"Șterge toate",done:"Adaugă",file:{preview:"Previzualizare %file%",remove:"Șterge %file%"}}}},footer:{text:"powered by",link:"uploadcare"}}}}),C.namespace("locale.pluralize",function(e){return e.ro=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.ru={uploading:"Идет загрузка",loadingInfo:"Загрузка информации...",errors:{"default":"Ошибка",baddata:"Некорректные данные",size:"Слишком большой файл",upload:"Ошибка при загрузке",user:"Загрузка прервана",info:"Ошибка при загрузке информации",image:"Разрешены только изображения",createGroup:"Не удалось создать группу файлов",deleted:"Файл удалён"},draghere:"Перетащите файл сюда",file:{
one:"%1 файл",few:"%1 файла",many:"%1 файлов"},buttons:{cancel:"Отмена",remove:"Удалить",choose:{files:{one:"Выбрать файл",other:"Выбрать файлы"},images:{one:"Выбрать изображение",other:"Выбрать изображения"}}},dialog:{done:"Готово",showFiles:"Показать файлы",tabs:{names:{preview:"Предпросмотр","empty-pubkey":"Приветствие",file:"Локальные файлы",vk:"ВКонтакте",url:"Ссылка",camera:"Камера"},file:{drag:"Перетащите файл сюда",nodrop:"Загрузка файлов с вашего компьютера",cloudsTip:"Облачные хранилища<br>и социальные сети",or:"или",button:"Выберите локальный файл",also:"Вы также можете загрузить файлы, используя:"},url:{title:"Файлы с других сайтов",line1:"Загрузите любой файл из сети.",line2:"",input:"Укажите здесь ссылку...",button:"Загрузить"},camera:{capture:"Сделать снимок",mirror:"Отразить",retry:"Повторно запросить разрешение",pleaseAllow:{title:"Пожалуйста, разрешите доступ к камере",text:"Для того, чтобы сделать снимок, мы запросили разрешение на доступ к камере с этого сайта."},notFound:{title:"Камера не найдена",text:"Скорее всего камера не подключена или не настроена."}},preview:{unknownName:"неизвестно",change:"Отмена",back:"Назад",done:"Добавить",unknown:{title:"Загрузка... Пожалуйста подождите.",done:"Пропустить предварительный просмотр"},regular:{title:"Загрузить этот файл?",line1:"Вы собираетесь добавить этот файл:",line2:"Пожалуйста, подтвердите."},image:{title:"Добавить это изображение?",change:"Отмена"},video:{title:"Добавить это видео?",change:"Отмена"},crop:{title:"Обрезать и добавить это изображение",done:"Готово",free:"произв."},error:{"default":{title:"Ой!",text:"Что-то пошло не так во время загрузки.",back:"Пожалуйста, попробуйте ещё раз"},image:{title:"Можно загружать только изображения.",text:"Попробуйте загрузить другой файл.",back:"Выберите изображение"},size:{title:"Размер выбранного файла превышает лимит.",text:"Попробуйте загрузить другой файл."},loadImage:{title:"Ошибка",text:"Изображение не удалось загрузить"}},multiple:{title:"Вы выбрали %files%",question:"Добавить все эти файлы?",tooManyFiles:"Вы выбрали слишком много файлов. %max% максимум.",tooFewFiles:"Вы выбрали %files%. Нужно не меньше %min%.",clear:"Удалить все",done:"Добавить",file:{preview:"Предпросмотр %file%",remove:"Удалить %file%"}}}}}}}),C.namespace("locale.pluralize",function(e){return e.ru=function(e){return 1==(e/10%10|0)||e%10==0||4<e%10?"many":e%10==1?"one":"few"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.sk={uploading:"Nahrávam... Prosím počkajte.",loadingInfo:"Nahrávam informácie...",errors:{"default":"Chyba",baddata:"Nesprávna hodnota",size:"Súbor je príliš veľký",upload:"Nedá sa nahrať",user:"Nahrávanie bolo zrušené",info:"Informácie sa nedajú nahrať",image:"Povolené sú len obrázky",createGroup:"Nie je možné vytvoriť priečinok",deleted:"Súbor bol odstránený"},draghere:"Sem presuňte súbor",file:{one:"%1 súbor",few:"%1 súbory",other:"%1 súborov"},buttons:{cancel:"Zrušiť",remove:"Odstrániť",choose:{files:{one:"Vyberte súbor",other:"Vyberte súbory"},images:{one:"Vyberte obrázok",other:"Vyberte obrázky"}}},dialog:{close:"Zavrieť",openMenu:"Otvoriť menu",done:"Hotovo",showFiles:"Ukázať súbory",tabs:{names:{"empty-pubkey":"Vitajte",preview:"Náhľad",file:"Z počítača",url:"Z internetu",camera:"Kamera",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Disk Google",gphotos:"Google Obrázky",instagram:"Instagram",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"presuňte a vložte<br>akékoľvek súbory",nodrop:"Nahrajte súbory z vášho&nbsp;počítača",cloudsTip:"Cloud úložiská<br>a sociálne siete",or:"alebo",button:"Vyberte súbor z počítača",also:"alebo vyberte z"},url:{title:"Súbory z internetu",line1:"Uložte akýkoľvek súbor z internetu.",line2:"Stačí pridať odkaz na neho.",input:"Vložte svoj odkaz sem...",button:"Nahrať"},camera:{title:"Súbor z webkamery",capture:"Odfotiť",mirror:"Zrkadliť",startRecord:"Natočte video",stopRecord:"Prestať natáčať",cancelRecord:"Zrušiť",retry:"Znovu požiadať o prístup",pleaseAllow:{title:"Prosím povoľte prístup k vašej kamere",text:"Boli ste vyzvaní aby ste umožnili tejto stránke prístup ku kamere.<br>Prístup musíte povolit aby ste mohli fotiť s vašou kamerou."},notFound:{title:"Kamera nebola nájdená",text:"Zdá sa, že k tomuto zariadeniu nemáte pripojenú kameru."}},preview:{unknownName:"neznámy",change:"Zrušiť",back:"Späť",done:"Pridať",unknown:{title:"Nahráva sa... Prosím počkajte na náhľad.",done:"Preskočiť náhľad a nahrať"},regular:{title:"Pridať tento súbor?",line1:"Chystáte sa pridať vyššie uvedený súbor.",line2:"Prosím potvrďte váš výber."},image:{title:"Pridať tento obrázok?",change:"Zrušiť"},crop:{title:"Orezať a pridať túto fotku",done:"Hotovo",free:"obnoviť"},video:{title:"Pridať toto video?",change:"Zrušiť"},error:{"default":{title:"Ejha!",text:"Pri nahrávaní sa vyskytla chyba.",back:"Skúste to znovu"},image:{title:"Je možné nahrávať len obrázky",text:"Skúste to znovu s iným súborom.",back:"Vybrať obrázok"},size:{title:"Súbor, ktorý ste vybrali presahuje povolenú veľkosť.",text:"Skúste to znovu s iným súborom."},loadImage:{title:"Chyba",text:"Obrázok nie je možné vyhľadať"}},multiple:{title:"Vybrali ste %files%.",question:"Pridať %files%?",tooManyFiles:"Vybrali ste príliš veľa súborov. Maximum je %max%.",tooFewFiles:"Vybrali ste %files%. Potrebných je aspoň %min%.",clear:"Odstrániť všetky",done:"Pridať",file:{preview:"Nahliadnuť na %file%",remove:"Odstrániť %file%"}}}}}}}),C.namespace("locale.pluralize",function(e){return e.sk=function(e){return 1===e?"one":2<=e&&e<=4?"few":"many"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.sr={uploading:"Шаљем... Молимо сачекајте.",loadingInfo:"Учитавам информације...",errors:{"default":"Грешка",baddata:"Погрешна вредност",size:"Фајл је сувише велик",upload:"Не могу да пошаљем",user:"Слање прекинуто",info:"Не могу да учитам информације",image:"Дозвољене су само слике",createGroup:"Не могу да направим групу фајлова",deleted:"Фајл је обрисан"},draghere:"Убаците фајл овде",file:{one:"%1 фајл",other:"%1 фајлова"},buttons:{cancel:"Поништи",remove:"Избаци",choose:{files:{one:"Изабери фајл",other:"Изабери фајлове"},images:{one:"Изабери слику",other:"Изабери слике"}}},dialog:{close:"Затвори",openMenu:"Отвори мени",done:"Готово",showFiles:"Покажи фајлове",tabs:{names:{"empty-pubkey":"Добродошли",preview:"Погледај",file:"Локални фајлови",url:"Директан линк",camera:"Камера",facebook:"Фејсбук",dropbox:"Dropbox",gdrive:"Google Drive",gphotos:"Google Photos",instagram:"Инстаграм",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"превуци<br>било које фајлове",nodrop:"Пошаљи фајлове са твог&nbsp;компјутера",cloudsTip:"Клауд<br>и социјалне мреже",or:"или",button:"Изабери локални фајл",also:"или изабери"},url:{title:"Фајлове са Интернета",line1:"Изабери било који фајл са Интернета.",line2:"Само убаци линк.",input:"Убаци линк овде...",button:"Пошаљи"},camera:{title:"Фајл са камере",capture:"Усликај",mirror:"Огледало",startRecord:"Сними видео",stopRecord:"Заустави",cancelRecord:"Поништи",retry:"Тражи дозволу поново",pleaseAllow:{title:"Молимо вас да дозволите приступ вашој камери",text:"Упитани сте да дозволите приступ вашој камери са овог сајта.<br>Уколико желите да сликате, морате одобрити овај захтев."},notFound:{title:"Камера није препозната",text:"Изгледа да немате камеру на овом уређају."}},preview:{unknownName:"непознато",change:"Поништи",back:"Назад",done:"Додај",unknown:{title:"Шаљем... Сачекајте за приказ.",done:"Прескочи приказ и прихвати"},regular:{title:"Додај овај фајл?",line1:"Управо ћете додати овај фајл изнад.",line2:"Молимо потврдите."},image:{title:"Додај ову слику?",change:"Поништи"},crop:{title:"Кропуј и додај ову слику",done:"Урађено",free:"слободно"},video:{title:"Додај овај видео?",change:"Поништи"},error:{"default":{title:"Ооопс!",text:"Нешто је искрсло у току слања.",back:"Молимо покушајте поново"},image:{title:"Дозвљене су само слике.",text:"Молимо покушајте са другим фајлом.",back:"Изабери слику"},size:{title:"Фајл који сте изабрали премашује лимит.",text:"Молимо покушајте са другим фајлом."
},loadImage:{title:"Грешка",text:"Не могу да учитам слику"}},multiple:{title:"Изабрали сте %files%.",question:"Додај %files%?",tooManyFiles:"Изабрали сте превише фајлова. %max% је максимално.",tooFewFiles:"Изабрали сте %files%. Морате најмање %min% фајла.",clear:"Избаци све",done:"Додај",file:{preview:"Прегледај %file%",remove:"Избаци %file%"}}}},footer:{text:"направио",link:"uploadcare"}}}}),C.namespace("locale.pluralize",function(e){return e.sr=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.sv={uploading:"Laddar... Var god vänta.",loadingInfo:"Laddar info...",errors:{"default":"Fel",baddata:"Felaktigt värde",size:"Filen är för stor",upload:"Kan inte ladda upp",user:"Uppladdning avbruten",info:"Kan inte ladda informationen",image:"Endast bilder tillåtna",createGroup:"Kan inte skapa filgrupp",deleted:"Fil raderad"},draghere:"Dra filen hit",file:{one:"%1 fil",other:"%1 filer"},buttons:{cancel:"Avbryt",remove:"Ta bort",choose:{files:{one:"Välj fil",other:"Välj filer"},images:{one:"Välj en bild",other:"Välj bilder"}}},dialog:{done:"Klar",showFiles:"Visa filer",tabs:{names:{"empty-pubkey":"Välkommen",preview:"Förhandsgranskning",file:"Lokala filer",url:"Direkta länkar",camera:"Kamera"},file:{drag:"Släpp filen här",nodrop:"Ladda upp filer från din dator",cloudsTip:"Molnlagring<br>och sociala nätverk",or:"eller",button:"Välj en lokal fil",also:"Du kan också välja den från"},url:{title:"Filer från webben",line1:"Välj en fil från en webbadress.",line2:"Ange bara länken till filen.",input:"Klistra in din länk här...",button:"Ladda upp"},camera:{capture:"Ta ett foto",mirror:"Spegel",retry:"Begär tillstånd igen",pleaseAllow:{title:"Vänligen ge tillgång till din kamera",text:"Du har uppmanats att tillåta att denna webbplats får tillgång till din kamera.För att ta bilder med din kamera måste du godkänna denna begäran."},notFound:{title:"Ingen kamera hittades",text:"Det verkar som att du inte har någon kamera ansluten till denna enheten."}},preview:{unknownName:"okänd",change:"Avbryt",back:"Tillbaka",done:"Lägg till",unknown:{title:"Laddar... Vänligen vänta på förhandsgranskning.",done:"Skippa förhandsgranskning och acceptera"},regular:{title:"Lägg till denna filen?",line1:"Du håller på att lägga till filen ovan.",line2:"Vänligen bekräfta."},image:{title:"Lägg till denna bilden?",change:"Avbryt"},crop:{title:"Beskär och lägg till denna bild",done:"Klar",free:"fri"},error:{"default":{title:"Oops!",text:"Någonting gick fel under uppladdningen.",back:"Vänligen försök igen"},image:{title:"Endast bildfiler accepteras.",text:"Vänligen försök igen med en annan fil.",back:"Välj bild"},size:{title:"Filen du har valt är för stor.",text:"Vänligen försök igen med en annan fil."},loadImage:{title:"Fel",text:"Kan inte ladda bild"}},multiple:{title:"Du har valt %files%",question:"Vill du lägga till alla dessa filer?",tooManyFiles:"Du har valt för många filer. %max% är max.",tooFewFiles:"Du har valt %files%. Minst %min% krävs.",clear:"Ta bort alla",done:"Klar"}}}}}}),C.namespace("locale.pluralize",function(e){return e.sv=function(e){return 1===e?"one":"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.tr={uploading:"Yükleniyor... Lütfen bekleyin.",loadingInfo:"Bilgiler yükleniyor...",errors:{"default":"Hata",baddata:"Geçersiz değer",size:"Dosya çok büyük",upload:"Yüklenemedi",user:"Yükleme iptal edildi",info:"Bilgiler getirilemedi",image:"Sadece resim dosyası yüklenebilir",createGroup:"Dosya grubu yaratılamıyor",deleted:"Dosya silinmiş"},draghere:"Buraya bir dosya bırakın",file:{other:"%1 dosya"},buttons:{cancel:"İptal",remove:"Kaldır",choose:{files:{one:"Dosya Seçin",other:"Dosya Seçin"},images:{one:"Resim Dosyası Seçin",other:"Resim Dosyası Seçin"}}},dialog:{done:"Bitti",showFiles:"Dosyaları Göster",tabs:{names:{"empty-pubkey":"Hoş geldiniz",preview:"Önizleme",file:"Bilgisayar",url:"Dış Bağlantılar",camera:"Kamera"},file:{drag:"Buraya bir dosya bırakın",nodrop:"Bilgisayarınızdan dosya yükleyin",or:"ya da",button:"Bilgisayardan bir dosya seç",also:"Diğer yükleme seçenekleri",cloudsTip:"Bulut depolamalar<br>ve sosyal hizmetler"},url:{title:"Webden dosyalar",line1:"Webden herhangi bir dosya seçin.",line2:"Dosya bağlantısını sağlayın.",input:"Bağlantınızı buraya yapıştırın...",button:"Yükle"},camera:{capture:"Fotoğraf çek",mirror:"Ayna",retry:"Tekrar izin iste",pleaseAllow:{title:"Lütfen kameranıza erişilmesine izin verin",text:"Bu siteden kamera erişimine izin vermeniz talep ediliyor. Kameranızla fotoğraf çekmek için bu isteği onaylamanız gerekmektedir."},notFound:{title:"Kamera algılanamadı",text:"Bu cihaza kamera bağlantısının olmadığı görünüyor."}},preview:{unknownName:"bilinmeyen",change:"İptal",back:"Geri",done:"Ekle",unknown:{title:"Yükleniyor... Önizleme için lütfen bekleyin.",done:"Önizlemeyi geç ve kabul et"},regular:{title:"Bu dosya eklensin mi?",line1:"Yukarıdaki dosyayı eklemek üzeresiniz.",line2:"Lütfen onaylayın."},image:{title:"Bu görsel eklensin mi?",change:"İptal"},crop:{title:"Bu görseli kes ve ekle",done:"Bitti"},error:{"default":{title:"Aman!",text:"Yükleme sırasında bir hata oluştu.",back:"Lütfen tekrar deneyin."},image:{title:"Sadece resim dosyaları kabul edilmektedir.",text:"Lütfen başka bir dosya ile tekrar deneyin.",back:"Resim dosyası seç"},size:{title:"Seçtiğiniz dosya limitleri aşıyor.",text:"Lütfen başka bir dosya ile tekrar deneyin."},loadImage:{title:"Hata",text:"Resim dosyası yüklenemedi"}},multiple:{title:"%files% dosya seçtiniz",question:"Bu dosyaların hepsini eklemek istiyor musunuz?",tooManyFiles:"Fazla sayıda dosya seçtiniz, en fazla %max% dosya olabilir.",tooFewFiles:"%files% dosya seçtiniz, en az %min% dosya olmalıdır.",clear:"Hepsini kaldır",done:"Bitti"}}}}}}),C.namespace("locale.pluralize",function(e){return e.tr=function(e){return"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.vi={loadingInfo:"Đang tải thông tin...",errors:{"default":"Lỗi",baddata:"Giá trị không đúng",size:"Tệp quá lớn",upload:"Không thể tải lên",user:"Tải lên bị hủy",info:"Không thể nạp thông tin",image:"Chỉ cho phép các hình ảnh",createGroup:"Không thể tạo nhóm tệp",deleted:"Tệp đã bị xóa"},uploading:"Đang tải lên... Vui lòng chờ đợi.",draghere:"Thả một tệp vào đây",file:{other:"%1 tệp"},buttons:{cancel:"Hủy",remove:"Xóa",choose:{files:{other:"Lựa chọn các tệp"},images:{other:"Lựa chọn hình ảnh"}}},dialog:{close:"Đóng",openMenu:"Mở menu",done:"Xong",showFiles:"Hiển thị tệp",tabs:{names:{"empty-pubkey":"Chào mừng",preview:"Xem trước",file:"Các tệp trên máy",url:"Liên kết tr.tiếp",camera:"Máy ảnh",facebook:"Facebook",dropbox:"Dropbox",gdrive:"Google Drive",instagram:"Instagram",gphotos:"Google Photos",vk:"VK",evernote:"Evernote",box:"Box",onedrive:"OneDrive",flickr:"Flickr",huddle:"Huddle"},file:{drag:"kéo & thả<br>bất kỳ tệp nào",nodrop:"Tải lên các tệp từ &nbsp;máy tính của bạn",cloudsTip:"Lưu trữ Đám mây<br>và các mạng xã hội",or:"hoặc",button:"Lựa chọn một tệp trên máy",also:"hoặc lựa chọn từ"},url:{title:"Các tệp trên Web",line1:"Chọn bất từ tệp nào từ web.",line2:"Chỉ cần cung cấp liên kết.",input:"Dán liên kết của bạn xuống đây...",button:"Tải lên"},camera:{title:"Tệp từ web cam",capture:"Chụp một bức ảnh",mirror:"Gương",startRecord:"Quay một video",cancelRecord:"Hủy",stopRecord:"Dừng",retry:"Yêu cầu cấp phép lần nữa",pleaseAllow:{text:"Bạn đã được nhắc nhở để cho phép truy cập vào camera từ trang này.<br>Để có thể chụp ảnh với camera, bạn phải chấp thuận yêu cầu này.",title:"Vui lòng cho phép truy cập tới camera của bạn"},notFound:{title:"Không tìm thấy camera nào",text:"Có vẻ như bạn không có camera nào nối với thiết bị này."}},preview:{unknownName:"vô danh",change:"Hủy",back:"Quay lại",done:"Thêm",unknown:{title:"Đang tải lên...Vui lòng đợi để xem trước.",done:"Bỏ qua và chấp nhận"},regular:{title:"Thêm tệp này?",line1:"Bạn dự định thêm tệp ở trên.",line2:"Vui lòng chấp thuận."},image:{title:"Thêm hình ảnh này?",change:"Hủy"},crop:{title:"Cắt và thêm ảnh này",done:"Xong",free:"miễn phí"},video:{title:"Thêm video này?",change:"Hủy"},error:{"default":{title:"Ồ!",back:"Vui lòng thử lại",
text:"Có lỗi gì đó trong quá trình tải lên."},image:{title:"Chỉ chấp thuận các tệp hình ảnh.",text:"Vui lòng thử lại với một tệp mới.",back:"Lựa chọn hình ảnh"},size:{title:"Tệp bạn đã lựa chọn vượt quá giới hạn",text:"Vui lòng thử lại với một tệp khác."},loadImage:{title:"Lỗi",text:"Không thể tải hình ảnh"}},multiple:{title:"Bạn đã lựa chọn %files%",question:"Thêm %files%?",tooManyFiles:"Bạn đã lựa chọn quá nhiều tệp. %max% là tối đa.",tooFewFiles:"Bạn đã lựa chọn %files%. Ít nhất cần %min%",clear:"Xoá Tất cả",file:{preview:"Xem trước %file%",remove:"Xóa %file%"},done:"Thêm"}}},footer:{text:"được hỗ trợ bởi",link:"uploadcare"}}}}),C.namespace("locale.pluralize",function(e){return e.vi=function(e){return"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.zhTW={uploading:"上傳中...請等待",loadingInfo:"正在讀取資訊...",errors:{"default":"錯誤",baddata:"錯誤資料",size:"檔案太大",upload:"無法上傳",user:"上傳被取消",info:"無法讀取資訊",image:"只允許圖片檔案",createGroup:"無法建立檔案群組",deleted:"檔案已被刪除"},draghere:"拖放檔案到這裡",file:{other:"%1 個檔案"},buttons:{cancel:"取消",remove:"刪除",choose:{files:{one:"選擇檔案",other:"選擇檔案"},images:{one:"選擇圖片",other:"選擇圖片"}}},dialog:{done:"完成",showFiles:"顯示檔案",tabs:{names:{"empty-pubkey":"歡迎",preview:"預覽",file:"從本機上傳",url:"任意圖片連結",camera:"相機"},file:{drag:"拖放檔案到這裡",nodrop:"從你的本機中上傳",cloudsTip:"雲端硬碟<br>與社群網站",or:"或者",button:"從本機中選取檔案",also:"你也可以選自"},url:{title:"來自網際網路的檔案",line1:"從網際網路選取檔案",line2:"只需提供連結",input:"將連結複製至此...",button:"上傳"},camera:{capture:"拍照",mirror:"鏡像",retry:"重新取得相機權限",pleaseAllow:{title:"請允許使存取您的相機",text:"你一直在提示允許來自這個網站的訪問攝像頭。為了拍照用你的相機，你必須批准這一請求。"},notFound:{title:"沒有找到相機",text:"看起來你有沒有將連接相機。"}},preview:{unknownName:"未知",change:"取消",back:"返回",done:"加入",unknown:{title:"上傳中...請等待預覽",done:"跳過預覽，直接接受"},regular:{title:"加入這個檔案？",line1:"你將加入上面的檔案。",line2:"請確認。"},image:{title:"加入這個圖片？",change:"取消"},crop:{title:"裁切並加入這個圖片",done:"完成",free:"自由裁切"},error:{"default":{title:"錯誤！",text:"上傳過程中出錯。",back:"請重試"},image:{title:"只允許上傳圖片檔案。",text:"請選擇其他檔案重新上傳。",back:"選擇圖片"},size:{title:"你選取的檔案超過了100MB的上限",text:"請用另一個檔案再試一次。"},loadImage:{title:"錯誤",text:"無法讀取圖片"}},multiple:{title:"你已經選擇 %files%",question:"你要加入所有檔案嗎？",tooManyFiles:"你選了太多的檔案. 最多可選擇%max%. 請刪除一些。",tooFewFiles:"你所選擇的檔案 %files%. 至少要 %min% .",clear:"清空",done:"完成"}}}}}}),C.namespace("locale.pluralize",function(e){return e.zhTW=function(e){return"other"}})}.call(this),function(){C.namespace("locale.translations",function(e){return e.zh={uploading:"上传中...请等待",loadingInfo:"正在读取信息...",errors:{"default":"错误",baddata:"错误数据",size:"文件太大",upload:"无法上传",user:"上传被取消",info:"无法读取信息",image:"只允许图形文件",createGroup:"无法建立文件组",deleted:"文件已被删除"},draghere:"拖放文件到这里",file:{other:"%1 个文件"},buttons:{cancel:"取消",remove:"删除"},dialog:{done:"完成",showFiles:"显示文件",tabs:{names:{url:"任意图片链接"},file:{drag:"拖放文件到这里",nodrop:"从你的电脑中上传",or:"或者",button:"从电脑中选取文件",also:"你也可以选自"},url:{title:"来自互联网的文件",line1:"从互联网选取文件",line2:"只需提供链接",input:"将链接拷贝至此...",button:"上传"},preview:{unknownName:"未知",change:"取消",back:"返回",done:"添加",unknown:{title:"上传中...请等待预览",done:"跳过预览，直接接受"},regular:{title:"添加这个文件?",line1:"你将添加上面的文件。",line2:"请确认。"},image:{title:"添加这个图片?",change:"取消"},crop:{title:"剪裁并添加这个图片",done:"完成"},error:{"default":{title:"错误!",text:"上传过程中出错。",back:"请重试"},image:{title:"只允许上传图片文件。",text:"请选择其他文件重新上传。",back:"选择图片"},size:{title:"你选取的文件超过了100MB的上限",text:"请用另一个文件再试一次。"},loadImage:{title:"错误",text:"无法读取图片"}},multiple:{title:"你已经选择 %files%",question:"你要添加所有文件吗？",tooManyFiles:"你选了太多的文件. 最多可选择%max%. 请删除一些。",clear:"清空",done:"完成"}}}}}}),C.namespace("locale.pluralize",function(e){return e.zh=function(){return"other"}})}.call(this),function(){var t;C.expose("locales",function(){var e;for(t in e=[],C.locale.translations)e.push(t);return e}())}.call(this),C.__exports});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "default-field",
    { attrs: { field: _vm.field } },
    [
      _c(
        "template",
        { slot: "field" },
        [
          _vm.value
            ? _c("div", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-link text-primary cursor-pointer text-80 mr-3",
                    attrs: { href: _vm.value, target: "_blank" }
                  },
                  [_vm._v("View File")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-link text-danger opacity-50 cursor-pointer",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.clear($event)
                      }
                    }
                  },
                  [_vm._v("Clear")]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "uploadcare",
            {
              staticClass: "btn btn-default btn-primary cursor-pointer",
              attrs: {
                id: _vm.field.name,
                publicKey: _vm.field.key,
                imageShrink: "2000 x 2000 85%"
              },
              on: { success: _vm.onSuccess }
            },
            [
              _vm.value ? _c("div", [_vm._v("Upload new file")]) : _vm._e(),
              _vm._v(" "),
              !_vm.value ? _c("div", [_vm._v("Upload file")]) : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm.hasError
            ? _c("p", { staticClass: "my-2 text-danger" }, [
                _vm._v("\n            " + _vm._s(_vm.firstError) + "\n        ")
              ])
            : _vm._e()
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c023248a", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);