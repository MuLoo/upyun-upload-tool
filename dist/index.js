(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('fs'), require('constants'), require('stream'), require('util'), require('assert'), require('path'), require('os'), require('http'), require('https'), require('url'), require('tty'), require('zlib'), require('events'), require('timers')) :
	typeof define === 'function' && define.amd ? define(['fs', 'constants', 'stream', 'util', 'assert', 'path', 'os', 'http', 'https', 'url', 'tty', 'zlib', 'events', 'timers'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["upyun-upload-tool"] = factory(global.fs$1, global.constants, global.stream, global.util$1, global.assert, global.path$1, global.os, global.http, global.https, global.url$1, global.tty, global.zlib, global.events, global.timers));
})(this, (function (fs$1, constants, stream, util$1, assert, path$1, os, http, https, url$1, tty, zlib, events, timers) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs$1);
	var constants__default = /*#__PURE__*/_interopDefaultLegacy(constants);
	var stream__default = /*#__PURE__*/_interopDefaultLegacy(stream);
	var util__default = /*#__PURE__*/_interopDefaultLegacy(util$1);
	var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
	var path__default = /*#__PURE__*/_interopDefaultLegacy(path$1);
	var os__default = /*#__PURE__*/_interopDefaultLegacy(os);
	var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
	var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
	var url__default = /*#__PURE__*/_interopDefaultLegacy(url$1);
	var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
	var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
	var events__default = /*#__PURE__*/_interopDefaultLegacy(events);
	var timers__default = /*#__PURE__*/_interopDefaultLegacy(timers);

	var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule$1(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var arrayWithHoles = createCommonjsModule$1(function (module) {
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayWithHoles);

	var iterableToArrayLimit = createCommonjsModule$1(function (module) {
	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(iterableToArrayLimit);

	var arrayLikeToArray = createCommonjsModule$1(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayLikeToArray);

	var unsupportedIterableToArray = createCommonjsModule$1(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(unsupportedIterableToArray);

	var nonIterableRest = createCommonjsModule$1(function (module) {
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(nonIterableRest);

	var slicedToArray$1 = createCommonjsModule$1(function (module) {
	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _slicedToArray = unwrapExports(slicedToArray$1);

	var asyncToGenerator = createCommonjsModule$1(function (module) {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _asyncToGenerator = unwrapExports(asyncToGenerator);

	var classCallCheck$1 = createCommonjsModule$1(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _classCallCheck = unwrapExports(classCallCheck$1);

	var createClass$1 = createCommonjsModule$1(function (module) {
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _createClass = unwrapExports(createClass$1);

	var _typeof_1 = createCommonjsModule$1(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}

	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(_typeof_1);

	var regeneratorRuntime$1 = createCommonjsModule$1(function (module) {
	var _typeof = _typeof_1["default"];

	function _regeneratorRuntime() {
	  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return exports;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var exports = {},
	      Op = Object.prototype,
	      hasOwn = Op.hasOwnProperty,
	      $Symbol = "function" == typeof Symbol ? Symbol : {},
	      iteratorSymbol = $Symbol.iterator || "@@iterator",
	      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    return Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), obj[key];
	  }

	  try {
	    define({}, "");
	  } catch (err) {
	    define = function define(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	        generator = Object.create(protoGenerator.prototype),
	        context = new Context(tryLocsList || []);
	    return generator._invoke = function (innerFn, self, context) {
	      var state = "suspendedStart";
	      return function (method, arg) {
	        if ("executing" === state) throw new Error("Generator is already running");

	        if ("completed" === state) {
	          if ("throw" === method) throw arg;
	          return doneResult();
	        }

	        for (context.method = method, context.arg = arg;;) {
	          var delegate = context.delegate;

	          if (delegate) {
	            var delegateResult = maybeInvokeDelegate(delegate, context);

	            if (delegateResult) {
	              if (delegateResult === ContinueSentinel) continue;
	              return delegateResult;
	            }
	          }

	          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	            if ("suspendedStart" === state) throw state = "completed", context.arg;
	            context.dispatchException(context.arg);
	          } else "return" === context.method && context.abrupt("return", context.arg);
	          state = "executing";
	          var record = tryCatch(innerFn, self, context);

	          if ("normal" === record.type) {
	            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	            return {
	              value: record.arg,
	              done: context.done
	            };
	          }

	          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	        }
	      };
	    }(innerFn, self, context), generator;
	  }

	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }

	  exports.wrap = wrap;
	  var ContinueSentinel = {};

	  function Generator() {}

	  function GeneratorFunction() {}

	  function GeneratorFunctionPrototype() {}

	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = Object.getPrototypeOf,
	      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);

	      if ("throw" !== record.type) {
	        var result = record.arg,
	            value = result.value;
	        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	          invoke("next", value, resolve, reject);
	        }, function (err) {
	          invoke("throw", err, resolve, reject);
	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	          result.value = unwrapped, resolve(result);
	        }, function (error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }

	      reject(record.arg);
	    }

	    var previousPromise;

	    this._invoke = function (method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    };
	  }

	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];

	    if (undefined === method) {
	      if (context.delegate = null, "throw" === context.method) {
	        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
	        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	    var info = record.arg;
	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	  }

	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };
	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal", delete record.arg, entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
	  }

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) return iteratorMethod.call(iterable);
	      if ("function" == typeof iterable.next) return iterable;

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          for (; ++i < iterable.length;) {
	            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	          }

	          return next.value = undefined, next.done = !0, next;
	        };

	        return next.next = next;
	      }
	    }

	    return {
	      next: doneResult
	    };
	  }

	  function doneResult() {
	    return {
	      value: undefined,
	      done: !0
	    };
	  }

	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	    var ctor = "function" == typeof genFun && genFun.constructor;
	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	  }, exports.mark = function (genFun) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
	  }, exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    void 0 === PromiseImpl && (PromiseImpl = Promise);
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	    return this;
	  }), define(Gp, "toString", function () {
	    return "[object Generator]";
	  }), exports.keys = function (object) {
	    var keys = [];

	    for (var key in object) {
	      keys.push(key);
	    }

	    return keys.reverse(), function next() {
	      for (; keys.length;) {
	        var key = keys.pop();
	        if (key in object) return next.value = key, next.done = !1, next;
	      }

	      return next.done = !0, next;
	    };
	  }, exports.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(skipTempReset) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
	        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
	      }
	    },
	    stop: function stop() {
	      this.done = !0;
	      var rootRecord = this.tryEntries[0].completion;
	      if ("throw" === rootRecord.type) throw rootRecord.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(exception) {
	      if (this.done) throw exception;
	      var context = this;

	      function handle(loc, caught) {
	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i],
	            record = entry.completion;
	        if ("root" === entry.tryLoc) return handle("end");

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc"),
	              hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	          } else {
	            if (!hasFinally) throw new Error("try statement without catch or finally");
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];

	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	      var record = finallyEntry ? finallyEntry.completion : {};
	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	    },
	    complete: function complete(record, afterLoc) {
	      if ("throw" === record.type) throw record.arg;
	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	    },
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	      }
	    },
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];

	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;

	          if ("throw" === record.type) {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }

	          return thrown;
	        }
	      }

	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      return this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	    }
	  }, exports;
	}

	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(regeneratorRuntime$1);

	// TODO(Babel 8): Remove this file.

	var runtime = regeneratorRuntime$1();
	var regenerator = runtime;

	// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}

	var toString$1 = {}.toString;

	var _cof = function (it) {
	  return toString$1.call(it).slice(8, -1);
	};

	var _core = createCommonjsModule$1(function (module) {
	var core = module.exports = { version: '2.6.8' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	_core.version;

	var _global = createCommonjsModule$1(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _shared = createCommonjsModule$1(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _wks = createCommonjsModule$1(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$2 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$2) && _isObject(document$2.createElement);
	var _domCreate = function (it) {
	  return is ? document$2.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP$1 = Object.defineProperty;

	var f$4 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP$1(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f$4
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty$1 = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty$1.call(it, key);
	};

	var _functionToString = _shared('native-function-to-string', Function.toString);

	var _redefine = createCommonjsModule$1(function (module) {
	var SRC = _uid('src');

	var TO_STRING = 'toString';
	var TPL = ('' + _functionToString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return _functionToString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
	});
	});

	// 19.1.3.6 Object.prototype.toString()

	var test = {};
	test[_wks('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  _redefine(Object.prototype, 'toString', function toString() {
	    return '[object ' + _classof(this) + ']';
	  }, true);
	}

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
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

	var PROTOTYPE$1 = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE$1];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) _redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	var _iterators = {};

	// check on default Array iterator

	var ITERATOR$4 = _wks('iterator');
	var ArrayProto$1 = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$4] === it);
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min$1 = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min$1(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var ITERATOR$3 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var _forOf = createCommonjsModule$1(function (module) {
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
	  var f = _ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
	    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = _iterCall(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)


	var SPECIES$2 = _wks('species');
	var _speciesConstructor = function (O, D) {
	  var C = _anObject(O).constructor;
	  var S;
	  return C === undefined || (S = _anObject(C)[SPECIES$2]) == undefined ? D : _aFunction(S);
	};

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
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

	var document$1 = _global.document;
	var _html = document$1 && document$1.documentElement;

	var process$3 = _global.process;
	var setTask = _global.setImmediate;
	var clearTask = _global.clearImmediate;
	var MessageChannel = _global.MessageChannel;
	var Dispatch = _global.Dispatch;
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
	      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (_cof(process$3) == 'process') {
	    defer = function (id) {
	      process$3.nextTick(_ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(_ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = _ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
	    defer = function (id) {
	      _global.postMessage(id + '', '*');
	    };
	    _global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
	    defer = function (id) {
	      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
	        _html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(_ctx(run, id, 1), 0);
	    };
	  }
	}
	var _task = {
	  set: setTask,
	  clear: clearTask
	};

	var macrotask = _task.set;
	var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
	var process$2 = _global.process;
	var Promise$1 = _global.Promise;
	var isNode$1 = _cof(process$2) == 'process';

	var _microtask = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode$1 && (parent = process$2.domain)) parent.exit();
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
	  if (isNode$1) {
	    notify = function () {
	      process$2.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise$1.resolve(undefined);
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
	      macrotask.call(_global, flush);
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

	// 25.4.1.5 NewPromiseCapability(C)


	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = _aFunction(resolve);
	  this.reject = _aFunction(reject);
	}

	var f$3 = function (C) {
	  return new PromiseCapability(C);
	};

	var _newPromiseCapability = {
		f: f$3
	};

	var _perform = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};

	var navigator$1 = _global.navigator;

	var _userAgent = navigator$1 && navigator$1.userAgent || '';

	var _promiseResolve = function (C, x) {
	  _anObject(C);
	  if (_isObject(x) && x.constructor === C) return x;
	  var promiseCapability = _newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) _redefine(target, key, src[key], safe);
	  return target;
	};

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var SPECIES$1 = _wks('species');

	var _setSpecies = function (KEY) {
	  var C = _global[KEY];
	  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	var ITERATOR$2 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$2]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$2]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$2] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	var task = _task.set;
	var microtask = _microtask();




	var PROMISE = 'Promise';
	var TypeError$1 = _global.TypeError;
	var process$1 = _global.process;
	var versions = process$1 && process$1.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = _global[PROMISE];
	var isNode = _classof(process$1) == 'process';
	var empty$1 = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
	      exec(empty$1, empty$1);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty$1) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && _userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
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
	            reject(TypeError$1('Promise-chain cycle'));
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
	  task.call(_global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = _perform(function () {
	        if (isNode) {
	          process$1.emit('unhandledRejection', value, promise);
	        } else if (handler = _global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = _global.console) && console.error) {
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
	  task.call(_global, function () {
	    var handler;
	    if (isNode) {
	      process$1.emit('rejectionHandled', promise);
	    } else if (handler = _global.onrejectionhandled) {
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
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
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
	    _anInstance(this, $Promise, PROMISE, '_h');
	    _aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
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
	  Internal.prototype = _redefineAll($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process$1.domain : undefined;
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
	    this.resolve = _ctx($resolve, promise, 1);
	    this.reject = _ctx($reject, promise, 1);
	  };
	  _newPromiseCapability.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
	_setToStringTag($Promise, PROMISE);
	_setSpecies(PROMISE);
	Wrapper = _core[PROMISE];

	// statics
	_export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	_export(_export.S + _export.F * (!USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return _promiseResolve(this, x);
	  }
	});
	_export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
	  $Promise.all(iter)['catch'](empty$1);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = _perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      _forOf(iterable, false, function (promise) {
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
	    var result = _perform(function () {
	      _forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	var SPECIES = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (_isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
	    if (_isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex





	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	var _strictMethod = function (method, arg) {
	  return !!method && _fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};

	var $forEach = _arrayMethods(0);
	var STRICT = _strictMethod([].forEach, true);

	_export(_export.P + _export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	var max = Math.max;
	var min = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
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

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO$2 = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO$2) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR$1 = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
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
	  var $native = proto[ITERATOR$1] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (typeof IteratorPrototype[ITERATOR$1] != 'function') _hide(IteratorPrototype, ITERATOR$1, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((BUGGY || VALUES_BUG || !proto[ITERATOR$1])) {
	    _hide(proto, ITERATOR$1, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
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

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var ITERATOR = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = _global[NAME];
	  var proto$1 = Collection && Collection.prototype;
	  var key$1;
	  if (proto$1) {
	    if (!proto$1[ITERATOR]) _hide(proto$1, ITERATOR, ArrayValues);
	    if (!proto$1[TO_STRING_TAG]) _hide(proto$1, TO_STRING_TAG, NAME);
	    _iterators[NAME] = ArrayValues;
	    if (explicit) for (key$1 in es6_array_iterator) if (!proto$1[key$1]) _redefine(proto$1, key$1, es6_array_iterator[key$1], true);
	  }
	}

	var arraySlice$1 = [].slice;
	var factories = {};

	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	var _bind = Function.bind || function bind(that /* , ...args */) {
	  var fn = _aFunction(this);
	  var partArgs = arraySlice$1.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice$1.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
	  };
	  if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


	_export(_export.P, 'Function', { bind: _bind });

	// global key for user preferred registration
	var REGISTRATION_KEY = '@@any-promise/REGISTRATION',
	    // Prior registration (preferred or detected)
	    registered = null;

	/**
	 * Registers the given implementation.  An implementation must
	 * be registered prior to any call to `require("any-promise")`,
	 * typically on application load.
	 *
	 * If called with no arguments, will return registration in
	 * following priority:
	 *
	 * For Node.js:
	 *
	 * 1. Previous registration
	 * 2. global.Promise if node.js version >= 0.12
	 * 3. Auto detected promise based on first sucessful require of
	 *    known promise libraries. Note this is a last resort, as the
	 *    loaded library is non-deterministic. node.js >= 0.12 will
	 *    always use global.Promise over this priority list.
	 * 4. Throws error.
	 *
	 * For Browser:
	 *
	 * 1. Previous registration
	 * 2. window.Promise
	 * 3. Throws error.
	 *
	 * Options:
	 *
	 * Promise: Desired Promise constructor
	 * global: Boolean - Should the registration be cached in a global variable to
	 * allow cross dependency/bundle registration?  (default true)
	 */
	var loader = function(root, loadImplementation){
	  return function register(implementation, opts){
	    implementation = implementation || null;
	    opts = opts || {};
	    // global registration unless explicitly  {global: false} in options (default true)
	    var registerGlobal = opts.global !== false;

	    // load any previous global registration
	    if(registered === null && registerGlobal){
	      registered = root[REGISTRATION_KEY] || null;
	    }

	    if(registered !== null
	        && implementation !== null
	        && registered.implementation !== implementation){
	      // Throw error if attempting to redefine implementation
	      throw new Error('any-promise already defined as "'+registered.implementation+
	        '".  You can only register an implementation before the first '+
	        ' call to require("any-promise") and an implementation cannot be changed')
	    }

	    if(registered === null){
	      // use provided implementation
	      if(implementation !== null && typeof opts.Promise !== 'undefined'){
	        registered = {
	          Promise: opts.Promise,
	          implementation: implementation
	        };
	      } else {
	        // require implementation if implementation is specified but not provided
	        registered = loadImplementation(implementation);
	      }

	      if(registerGlobal){
	        // register preference globally in case multiple installations
	        root[REGISTRATION_KEY] = registered;
	      }
	    }

	    return registered
	  }
	};

	var register = loader(commonjsGlobal$1, loadImplementation);

	/**
	 * Node.js version of loadImplementation.
	 *
	 * Requires the given implementation and returns the registration
	 * containing {Promise, implementation}
	 *
	 * If implementation is undefined or global.Promise, loads it
	 * Otherwise uses require
	 */
	function loadImplementation(implementation){
	  var impl = null;

	  if(shouldPreferGlobalPromise(implementation)){
	    // if no implementation or env specified use global.Promise
	    impl = {
	      Promise: commonjsGlobal$1.Promise,
	      implementation: 'global.Promise'
	    };
	  } else if(implementation){
	    // if implementation specified, require it
	    var lib = commonjsRequire();
	    impl = {
	      Promise: lib.Promise || lib,
	      implementation: implementation
	    };
	  } else {
	    // try to auto detect implementation. This is non-deterministic
	    // and should prefer other branches, but this is our last chance
	    // to load something without throwing error
	    impl = tryAutoDetect();
	  }

	  if(impl === null){
	    throw new Error('Cannot find any-promise implementation nor'+
	      ' global.Promise. You must install polyfill or call'+
	      ' require("any-promise/register") with your preferred'+
	      ' implementation, e.g. require("any-promise/register/bluebird")'+
	      ' on application load prior to any require("any-promise").')
	  }

	  return impl
	}

	/**
	 * Determines if the global.Promise should be preferred if an implementation
	 * has not been registered.
	 */
	function shouldPreferGlobalPromise(implementation){
	  if(implementation){
	    return implementation === 'global.Promise'
	  } else if(typeof commonjsGlobal$1.Promise !== 'undefined'){
	    // Load global promise if implementation not specified
	    // Versions < 0.11 did not have global Promise
	    // Do not use for version < 0.12 as version 0.11 contained buggy versions
	    var version = (/v(\d+)\.(\d+)\.(\d+)/).exec(process.version);
	    return !(version && +version[1] == 0 && +version[2] < 12)
	  }

	  // do not have global.Promise or another implementation was specified
	  return false
	}

	/**
	 * Look for common libs as last resort there is no guarantee that
	 * this will return a desired implementation or even be deterministic.
	 * The priority is also nearly arbitrary. We are only doing this
	 * for older versions of Node.js <0.12 that do not have a reasonable
	 * global.Promise implementation and we the user has not registered
	 * the preference. This preserves the behavior of any-promise <= 0.1
	 * and may be deprecated or removed in the future
	 */
	function tryAutoDetect(){
	  var libs = [
	      "es6-promise",
	      "promise",
	      "native-promise-only",
	      "bluebird",
	      "rsvp",
	      "when",
	      "q",
	      "pinkie",
	      "lie",
	      "vow"];
	  var i = 0, len = libs.length;
	  for(; i < len; i++){
	    try {
	      return loadImplementation(libs[i])
	    } catch(e){}
	  }
	  return null
	}

	var anyPromise = register().Promise;

	var origCwd = process.cwd;
	var cwd = null;

	var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;

	process.cwd = function() {
	  if (!cwd)
	    cwd = origCwd.call(process);
	  return cwd
	};
	try {
	  process.cwd();
	} catch (er) {}

	// This check is needed until node.js 12 is required
	if (typeof process.chdir === 'function') {
	  var chdir = process.chdir;
	  process.chdir = function (d) {
	    cwd = null;
	    chdir.call(process, d);
	  };
	  if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
	}

	var polyfills = patch;

	function patch (fs) {
	  // (re-)implement some things that are known busted or missing.

	  // lchmod, broken prior to 0.6.2
	  // back-port the fix here.
	  if (constants__default["default"].hasOwnProperty('O_SYMLINK') &&
	      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
	    patchLchmod(fs);
	  }

	  // lutimes implementation, or no-op
	  if (!fs.lutimes) {
	    patchLutimes(fs);
	  }

	  // https://github.com/isaacs/node-graceful-fs/issues/4
	  // Chown should not fail on einval or eperm if non-root.
	  // It should not fail on enosys ever, as this just indicates
	  // that a fs doesn't support the intended operation.

	  fs.chown = chownFix(fs.chown);
	  fs.fchown = chownFix(fs.fchown);
	  fs.lchown = chownFix(fs.lchown);

	  fs.chmod = chmodFix(fs.chmod);
	  fs.fchmod = chmodFix(fs.fchmod);
	  fs.lchmod = chmodFix(fs.lchmod);

	  fs.chownSync = chownFixSync(fs.chownSync);
	  fs.fchownSync = chownFixSync(fs.fchownSync);
	  fs.lchownSync = chownFixSync(fs.lchownSync);

	  fs.chmodSync = chmodFixSync(fs.chmodSync);
	  fs.fchmodSync = chmodFixSync(fs.fchmodSync);
	  fs.lchmodSync = chmodFixSync(fs.lchmodSync);

	  fs.stat = statFix(fs.stat);
	  fs.fstat = statFix(fs.fstat);
	  fs.lstat = statFix(fs.lstat);

	  fs.statSync = statFixSync(fs.statSync);
	  fs.fstatSync = statFixSync(fs.fstatSync);
	  fs.lstatSync = statFixSync(fs.lstatSync);

	  // if lchmod/lchown do not exist, then make them no-ops
	  if (fs.chmod && !fs.lchmod) {
	    fs.lchmod = function (path, mode, cb) {
	      if (cb) process.nextTick(cb);
	    };
	    fs.lchmodSync = function () {};
	  }
	  if (fs.chown && !fs.lchown) {
	    fs.lchown = function (path, uid, gid, cb) {
	      if (cb) process.nextTick(cb);
	    };
	    fs.lchownSync = function () {};
	  }

	  // on Windows, A/V software can lock the directory, causing this
	  // to fail with an EACCES or EPERM if the directory contains newly
	  // created files.  Try again on failure, for up to 60 seconds.

	  // Set the timeout this long because some Windows Anti-Virus, such as Parity
	  // bit9, may lock files for up to a minute, causing npm package install
	  // failures. Also, take care to yield the scheduler. Windows scheduling gives
	  // CPU to a busy looping process, which can cause the program causing the lock
	  // contention to be starved of CPU by node, so the contention doesn't resolve.
	  if (platform === "win32") {
	    fs.rename = typeof fs.rename !== 'function' ? fs.rename
	    : (function (fs$rename) {
	      function rename (from, to, cb) {
	        var start = Date.now();
	        var backoff = 0;
	        fs$rename(from, to, function CB (er) {
	          if (er
	              && (er.code === "EACCES" || er.code === "EPERM")
	              && Date.now() - start < 60000) {
	            setTimeout(function() {
	              fs.stat(to, function (stater, st) {
	                if (stater && stater.code === "ENOENT")
	                  fs$rename(from, to, CB);
	                else
	                  cb(er);
	              });
	            }, backoff);
	            if (backoff < 100)
	              backoff += 10;
	            return;
	          }
	          if (cb) cb(er);
	        });
	      }
	      if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
	      return rename
	    })(fs.rename);
	  }

	  // if read() returns EAGAIN, then just try it again.
	  fs.read = typeof fs.read !== 'function' ? fs.read
	  : (function (fs$read) {
	    function read (fd, buffer, offset, length, position, callback_) {
	      var callback;
	      if (callback_ && typeof callback_ === 'function') {
	        var eagCounter = 0;
	        callback = function (er, _, __) {
	          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
	            eagCounter ++;
	            return fs$read.call(fs, fd, buffer, offset, length, position, callback)
	          }
	          callback_.apply(this, arguments);
	        };
	      }
	      return fs$read.call(fs, fd, buffer, offset, length, position, callback)
	    }

	    // This ensures `util.promisify` works as it does for native `fs.read`.
	    if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
	    return read
	  })(fs.read);

	  fs.readSync = typeof fs.readSync !== 'function' ? fs.readSync
	  : (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
	    var eagCounter = 0;
	    while (true) {
	      try {
	        return fs$readSync.call(fs, fd, buffer, offset, length, position)
	      } catch (er) {
	        if (er.code === 'EAGAIN' && eagCounter < 10) {
	          eagCounter ++;
	          continue
	        }
	        throw er
	      }
	    }
	  }})(fs.readSync);

	  function patchLchmod (fs) {
	    fs.lchmod = function (path, mode, callback) {
	      fs.open( path
	             , constants__default["default"].O_WRONLY | constants__default["default"].O_SYMLINK
	             , mode
	             , function (err, fd) {
	        if (err) {
	          if (callback) callback(err);
	          return
	        }
	        // prefer to return the chmod error, if one occurs,
	        // but still try to close, and report closing errors if they occur.
	        fs.fchmod(fd, mode, function (err) {
	          fs.close(fd, function(err2) {
	            if (callback) callback(err || err2);
	          });
	        });
	      });
	    };

	    fs.lchmodSync = function (path, mode) {
	      var fd = fs.openSync(path, constants__default["default"].O_WRONLY | constants__default["default"].O_SYMLINK, mode);

	      // prefer to return the chmod error, if one occurs,
	      // but still try to close, and report closing errors if they occur.
	      var threw = true;
	      var ret;
	      try {
	        ret = fs.fchmodSync(fd, mode);
	        threw = false;
	      } finally {
	        if (threw) {
	          try {
	            fs.closeSync(fd);
	          } catch (er) {}
	        } else {
	          fs.closeSync(fd);
	        }
	      }
	      return ret
	    };
	  }

	  function patchLutimes (fs) {
	    if (constants__default["default"].hasOwnProperty("O_SYMLINK") && fs.futimes) {
	      fs.lutimes = function (path, at, mt, cb) {
	        fs.open(path, constants__default["default"].O_SYMLINK, function (er, fd) {
	          if (er) {
	            if (cb) cb(er);
	            return
	          }
	          fs.futimes(fd, at, mt, function (er) {
	            fs.close(fd, function (er2) {
	              if (cb) cb(er || er2);
	            });
	          });
	        });
	      };

	      fs.lutimesSync = function (path, at, mt) {
	        var fd = fs.openSync(path, constants__default["default"].O_SYMLINK);
	        var ret;
	        var threw = true;
	        try {
	          ret = fs.futimesSync(fd, at, mt);
	          threw = false;
	        } finally {
	          if (threw) {
	            try {
	              fs.closeSync(fd);
	            } catch (er) {}
	          } else {
	            fs.closeSync(fd);
	          }
	        }
	        return ret
	      };

	    } else if (fs.futimes) {
	      fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb); };
	      fs.lutimesSync = function () {};
	    }
	  }

	  function chmodFix (orig) {
	    if (!orig) return orig
	    return function (target, mode, cb) {
	      return orig.call(fs, target, mode, function (er) {
	        if (chownErOk(er)) er = null;
	        if (cb) cb.apply(this, arguments);
	      })
	    }
	  }

	  function chmodFixSync (orig) {
	    if (!orig) return orig
	    return function (target, mode) {
	      try {
	        return orig.call(fs, target, mode)
	      } catch (er) {
	        if (!chownErOk(er)) throw er
	      }
	    }
	  }


	  function chownFix (orig) {
	    if (!orig) return orig
	    return function (target, uid, gid, cb) {
	      return orig.call(fs, target, uid, gid, function (er) {
	        if (chownErOk(er)) er = null;
	        if (cb) cb.apply(this, arguments);
	      })
	    }
	  }

	  function chownFixSync (orig) {
	    if (!orig) return orig
	    return function (target, uid, gid) {
	      try {
	        return orig.call(fs, target, uid, gid)
	      } catch (er) {
	        if (!chownErOk(er)) throw er
	      }
	    }
	  }

	  function statFix (orig) {
	    if (!orig) return orig
	    // Older versions of Node erroneously returned signed integers for
	    // uid + gid.
	    return function (target, options, cb) {
	      if (typeof options === 'function') {
	        cb = options;
	        options = null;
	      }
	      function callback (er, stats) {
	        if (stats) {
	          if (stats.uid < 0) stats.uid += 0x100000000;
	          if (stats.gid < 0) stats.gid += 0x100000000;
	        }
	        if (cb) cb.apply(this, arguments);
	      }
	      return options ? orig.call(fs, target, options, callback)
	        : orig.call(fs, target, callback)
	    }
	  }

	  function statFixSync (orig) {
	    if (!orig) return orig
	    // Older versions of Node erroneously returned signed integers for
	    // uid + gid.
	    return function (target, options) {
	      var stats = options ? orig.call(fs, target, options)
	        : orig.call(fs, target);
	      if (stats) {
	        if (stats.uid < 0) stats.uid += 0x100000000;
	        if (stats.gid < 0) stats.gid += 0x100000000;
	      }
	      return stats;
	    }
	  }

	  // ENOSYS means that the fs doesn't support the op. Just ignore
	  // that, because it doesn't matter.
	  //
	  // if there's no getuid, or if getuid() is something other
	  // than 0, and the error is EINVAL or EPERM, then just ignore
	  // it.
	  //
	  // This specific case is a silent failure in cp, install, tar,
	  // and most other unix tools that manage permissions.
	  //
	  // When running as root, or if other types of errors are
	  // encountered, then it's strict.
	  function chownErOk (er) {
	    if (!er)
	      return true

	    if (er.code === "ENOSYS")
	      return true

	    var nonroot = !process.getuid || process.getuid() !== 0;
	    if (nonroot) {
	      if (er.code === "EINVAL" || er.code === "EPERM")
	        return true
	    }

	    return false
	  }
	}

	var Stream = stream__default["default"].Stream;

	var legacyStreams = legacy;

	function legacy (fs) {
	  return {
	    ReadStream: ReadStream,
	    WriteStream: WriteStream
	  }

	  function ReadStream (path, options) {
	    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

	    Stream.call(this);

	    var self = this;

	    this.path = path;
	    this.fd = null;
	    this.readable = true;
	    this.paused = false;

	    this.flags = 'r';
	    this.mode = 438; /*=0666*/
	    this.bufferSize = 64 * 1024;

	    options = options || {};

	    // Mixin options into this
	    var keys = Object.keys(options);
	    for (var index = 0, length = keys.length; index < length; index++) {
	      var key = keys[index];
	      this[key] = options[key];
	    }

	    if (this.encoding) this.setEncoding(this.encoding);

	    if (this.start !== undefined) {
	      if ('number' !== typeof this.start) {
	        throw TypeError('start must be a Number');
	      }
	      if (this.end === undefined) {
	        this.end = Infinity;
	      } else if ('number' !== typeof this.end) {
	        throw TypeError('end must be a Number');
	      }

	      if (this.start > this.end) {
	        throw new Error('start must be <= end');
	      }

	      this.pos = this.start;
	    }

	    if (this.fd !== null) {
	      process.nextTick(function() {
	        self._read();
	      });
	      return;
	    }

	    fs.open(this.path, this.flags, this.mode, function (err, fd) {
	      if (err) {
	        self.emit('error', err);
	        self.readable = false;
	        return;
	      }

	      self.fd = fd;
	      self.emit('open', fd);
	      self._read();
	    });
	  }

	  function WriteStream (path, options) {
	    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

	    Stream.call(this);

	    this.path = path;
	    this.fd = null;
	    this.writable = true;

	    this.flags = 'w';
	    this.encoding = 'binary';
	    this.mode = 438; /*=0666*/
	    this.bytesWritten = 0;

	    options = options || {};

	    // Mixin options into this
	    var keys = Object.keys(options);
	    for (var index = 0, length = keys.length; index < length; index++) {
	      var key = keys[index];
	      this[key] = options[key];
	    }

	    if (this.start !== undefined) {
	      if ('number' !== typeof this.start) {
	        throw TypeError('start must be a Number');
	      }
	      if (this.start < 0) {
	        throw new Error('start must be >= zero');
	      }

	      this.pos = this.start;
	    }

	    this.busy = false;
	    this._queue = [];

	    if (this.fd === null) {
	      this._open = fs.open;
	      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
	      this.flush();
	    }
	  }
	}

	var clone_1 = clone;

	var getPrototypeOf$1 = Object.getPrototypeOf || function (obj) {
	  return obj.__proto__
	};

	function clone (obj) {
	  if (obj === null || typeof obj !== 'object')
	    return obj

	  if (obj instanceof Object)
	    var copy = { __proto__: getPrototypeOf$1(obj) };
	  else
	    var copy = Object.create(null);

	  Object.getOwnPropertyNames(obj).forEach(function (key) {
	    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
	  });

	  return copy
	}

	var gracefulFs = createCommonjsModule$1(function (module) {
	/* istanbul ignore next - node 0.x polyfill */
	var gracefulQueue;
	var previousSymbol;

	/* istanbul ignore else - node 0.x polyfill */
	if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
	  gracefulQueue = Symbol.for('graceful-fs.queue');
	  // This is used in testing by future versions
	  previousSymbol = Symbol.for('graceful-fs.previous');
	} else {
	  gracefulQueue = '___graceful-fs.queue';
	  previousSymbol = '___graceful-fs.previous';
	}

	function noop () {}

	function publishQueue(context, queue) {
	  Object.defineProperty(context, gracefulQueue, {
	    get: function() {
	      return queue
	    }
	  });
	}

	var debug = noop;
	if (util__default["default"].debuglog)
	  debug = util__default["default"].debuglog('gfs4');
	else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
	  debug = function() {
	    var m = util__default["default"].format.apply(util__default["default"], arguments);
	    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
	    console.error(m);
	  };

	// Once time initialization
	if (!fs__default["default"][gracefulQueue]) {
	  // This queue can be shared by multiple loaded instances
	  var queue = commonjsGlobal$1[gracefulQueue] || [];
	  publishQueue(fs__default["default"], queue);

	  // Patch fs.close/closeSync to shared queue version, because we need
	  // to retry() whenever a close happens *anywhere* in the program.
	  // This is essential when multiple graceful-fs instances are
	  // in play at the same time.
	  fs__default["default"].close = (function (fs$close) {
	    function close (fd, cb) {
	      return fs$close.call(fs__default["default"], fd, function (err) {
	        // This function uses the graceful-fs shared queue
	        if (!err) {
	          resetQueue();
	        }

	        if (typeof cb === 'function')
	          cb.apply(this, arguments);
	      })
	    }

	    Object.defineProperty(close, previousSymbol, {
	      value: fs$close
	    });
	    return close
	  })(fs__default["default"].close);

	  fs__default["default"].closeSync = (function (fs$closeSync) {
	    function closeSync (fd) {
	      // This function uses the graceful-fs shared queue
	      fs$closeSync.apply(fs__default["default"], arguments);
	      resetQueue();
	    }

	    Object.defineProperty(closeSync, previousSymbol, {
	      value: fs$closeSync
	    });
	    return closeSync
	  })(fs__default["default"].closeSync);

	  if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
	    process.on('exit', function() {
	      debug(fs__default["default"][gracefulQueue]);
	      assert__default["default"].equal(fs__default["default"][gracefulQueue].length, 0);
	    });
	  }
	}

	if (!commonjsGlobal$1[gracefulQueue]) {
	  publishQueue(commonjsGlobal$1, fs__default["default"][gracefulQueue]);
	}

	module.exports = patch(clone_1(fs__default["default"]));
	if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs__default["default"].__patched) {
	    module.exports = patch(fs__default["default"]);
	    fs__default["default"].__patched = true;
	}

	function patch (fs) {
	  // Everything that references the open() function needs to be in here
	  polyfills(fs);
	  fs.gracefulify = patch;

	  fs.createReadStream = createReadStream;
	  fs.createWriteStream = createWriteStream;
	  var fs$readFile = fs.readFile;
	  fs.readFile = readFile;
	  function readFile (path, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    return go$readFile(path, options, cb)

	    function go$readFile (path, options, cb, startTime) {
	      return fs$readFile(path, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$readFile, [path, options, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$writeFile = fs.writeFile;
	  fs.writeFile = writeFile;
	  function writeFile (path, data, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    return go$writeFile(path, data, options, cb)

	    function go$writeFile (path, data, options, cb, startTime) {
	      return fs$writeFile(path, data, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$writeFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$appendFile = fs.appendFile;
	  if (fs$appendFile)
	    fs.appendFile = appendFile;
	  function appendFile (path, data, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    return go$appendFile(path, data, options, cb)

	    function go$appendFile (path, data, options, cb, startTime) {
	      return fs$appendFile(path, data, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$appendFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$copyFile = fs.copyFile;
	  if (fs$copyFile)
	    fs.copyFile = copyFile;
	  function copyFile (src, dest, flags, cb) {
	    if (typeof flags === 'function') {
	      cb = flags;
	      flags = 0;
	    }
	    return go$copyFile(src, dest, flags, cb)

	    function go$copyFile (src, dest, flags, cb, startTime) {
	      return fs$copyFile(src, dest, flags, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$copyFile, [src, dest, flags, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$readdir = fs.readdir;
	  fs.readdir = readdir;
	  var noReaddirOptionVersions = /^v[0-5]\./;
	  function readdir (path, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    var go$readdir = noReaddirOptionVersions.test(process.version)
	      ? function go$readdir (path, options, cb, startTime) {
	        return fs$readdir(path, fs$readdirCallback(
	          path, options, cb, startTime
	        ))
	      }
	      : function go$readdir (path, options, cb, startTime) {
	        return fs$readdir(path, options, fs$readdirCallback(
	          path, options, cb, startTime
	        ))
	      };

	    return go$readdir(path, options, cb)

	    function fs$readdirCallback (path, options, cb, startTime) {
	      return function (err, files) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([
	            go$readdir,
	            [path, options, cb],
	            err,
	            startTime || Date.now(),
	            Date.now()
	          ]);
	        else {
	          if (files && files.sort)
	            files.sort();

	          if (typeof cb === 'function')
	            cb.call(this, err, files);
	        }
	      }
	    }
	  }

	  if (process.version.substr(0, 4) === 'v0.8') {
	    var legStreams = legacyStreams(fs);
	    ReadStream = legStreams.ReadStream;
	    WriteStream = legStreams.WriteStream;
	  }

	  var fs$ReadStream = fs.ReadStream;
	  if (fs$ReadStream) {
	    ReadStream.prototype = Object.create(fs$ReadStream.prototype);
	    ReadStream.prototype.open = ReadStream$open;
	  }

	  var fs$WriteStream = fs.WriteStream;
	  if (fs$WriteStream) {
	    WriteStream.prototype = Object.create(fs$WriteStream.prototype);
	    WriteStream.prototype.open = WriteStream$open;
	  }

	  Object.defineProperty(fs, 'ReadStream', {
	    get: function () {
	      return ReadStream
	    },
	    set: function (val) {
	      ReadStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });
	  Object.defineProperty(fs, 'WriteStream', {
	    get: function () {
	      return WriteStream
	    },
	    set: function (val) {
	      WriteStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });

	  // legacy names
	  var FileReadStream = ReadStream;
	  Object.defineProperty(fs, 'FileReadStream', {
	    get: function () {
	      return FileReadStream
	    },
	    set: function (val) {
	      FileReadStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });
	  var FileWriteStream = WriteStream;
	  Object.defineProperty(fs, 'FileWriteStream', {
	    get: function () {
	      return FileWriteStream
	    },
	    set: function (val) {
	      FileWriteStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });

	  function ReadStream (path, options) {
	    if (this instanceof ReadStream)
	      return fs$ReadStream.apply(this, arguments), this
	    else
	      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
	  }

	  function ReadStream$open () {
	    var that = this;
	    open(that.path, that.flags, that.mode, function (err, fd) {
	      if (err) {
	        if (that.autoClose)
	          that.destroy();

	        that.emit('error', err);
	      } else {
	        that.fd = fd;
	        that.emit('open', fd);
	        that.read();
	      }
	    });
	  }

	  function WriteStream (path, options) {
	    if (this instanceof WriteStream)
	      return fs$WriteStream.apply(this, arguments), this
	    else
	      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
	  }

	  function WriteStream$open () {
	    var that = this;
	    open(that.path, that.flags, that.mode, function (err, fd) {
	      if (err) {
	        that.destroy();
	        that.emit('error', err);
	      } else {
	        that.fd = fd;
	        that.emit('open', fd);
	      }
	    });
	  }

	  function createReadStream (path, options) {
	    return new fs.ReadStream(path, options)
	  }

	  function createWriteStream (path, options) {
	    return new fs.WriteStream(path, options)
	  }

	  var fs$open = fs.open;
	  fs.open = open;
	  function open (path, flags, mode, cb) {
	    if (typeof mode === 'function')
	      cb = mode, mode = null;

	    return go$open(path, flags, mode, cb)

	    function go$open (path, flags, mode, cb, startTime) {
	      return fs$open(path, flags, mode, function (err, fd) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$open, [path, flags, mode, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  return fs
	}

	function enqueue (elem) {
	  debug('ENQUEUE', elem[0].name, elem[1]);
	  fs__default["default"][gracefulQueue].push(elem);
	  retry();
	}

	// keep track of the timeout between retry() calls
	var retryTimer;

	// reset the startTime and lastTime to now
	// this resets the start of the 60 second overall timeout as well as the
	// delay between attempts so that we'll retry these jobs sooner
	function resetQueue () {
	  var now = Date.now();
	  for (var i = 0; i < fs__default["default"][gracefulQueue].length; ++i) {
	    // entries that are only a length of 2 are from an older version, don't
	    // bother modifying those since they'll be retried anyway.
	    if (fs__default["default"][gracefulQueue][i].length > 2) {
	      fs__default["default"][gracefulQueue][i][3] = now; // startTime
	      fs__default["default"][gracefulQueue][i][4] = now; // lastTime
	    }
	  }
	  // call retry to make sure we're actively processing the queue
	  retry();
	}

	function retry () {
	  // clear the timer and remove it to help prevent unintended concurrency
	  clearTimeout(retryTimer);
	  retryTimer = undefined;

	  if (fs__default["default"][gracefulQueue].length === 0)
	    return

	  var elem = fs__default["default"][gracefulQueue].shift();
	  var fn = elem[0];
	  var args = elem[1];
	  // these items may be unset if they were added by an older graceful-fs
	  var err = elem[2];
	  var startTime = elem[3];
	  var lastTime = elem[4];

	  // if we don't have a startTime we have no way of knowing if we've waited
	  // long enough, so go ahead and retry this item now
	  if (startTime === undefined) {
	    debug('RETRY', fn.name, args);
	    fn.apply(null, args);
	  } else if (Date.now() - startTime >= 60000) {
	    // it's been more than 60 seconds total, bail now
	    debug('TIMEOUT', fn.name, args);
	    var cb = args.pop();
	    if (typeof cb === 'function')
	      cb.call(null, err);
	  } else {
	    // the amount of time between the last attempt and right now
	    var sinceAttempt = Date.now() - lastTime;
	    // the amount of time between when we first tried, and when we last tried
	    // rounded up to at least 1
	    var sinceStart = Math.max(lastTime - startTime, 1);
	    // backoff. wait longer than the total time we've been retrying, but only
	    // up to a maximum of 100ms
	    var desiredDelay = Math.min(sinceStart * 1.2, 100);
	    // it's been long enough since the last retry, do it again
	    if (sinceAttempt >= desiredDelay) {
	      debug('RETRY', fn.name, args);
	      fn.apply(null, args.concat([startTime]));
	    } else {
	      // if we can't do this job yet, push it to the end of the queue
	      // and let the next iteration check again
	      fs__default["default"][gracefulQueue].push(elem);
	    }
	  }

	  // schedule our next run if one isn't already scheduled
	  if (retryTimer === undefined) {
	    retryTimer = setTimeout(retry, 0);
	  }
	}
	});

	var thenify_1 = thenify;

	/**
	 * Turn async functions into promises
	 *
	 * @param {Function} fn
	 * @return {Function}
	 * @api public
	 */

	function thenify(fn, options) {
	  assert__default["default"](typeof fn === 'function');
	  return createWrapper(fn, options)
	}

	/**
	 * Turn async functions into promises and backward compatible with callback
	 *
	 * @param {Function} fn
	 * @return {Function}
	 * @api public
	 */

	thenify.withCallback = function (fn, options) {
	  assert__default["default"](typeof fn === 'function');
	  options = options || {};
	  options.withCallback = true;
	  return createWrapper(fn, options)
	};

	function createCallback(resolve, reject, multiArgs) {
	  // default to true
	  if (multiArgs === undefined) multiArgs = true;
	  return function(err, value) {
	    if (err) return reject(err)
	    var length = arguments.length;

	    if (length <= 2 || !multiArgs) return resolve(value)

	    if (Array.isArray(multiArgs)) {
	      var values = {};
	      for (var i = 1; i < length; i++) values[multiArgs[i - 1]] = arguments[i];
	      return resolve(values)
	    }

	    var values = new Array(length - 1);
	    for (var i = 1; i < length; ++i) values[i - 1] = arguments[i];
	    resolve(values);
	  }
	}

	function createWrapper(fn, options) {
	  options = options || {};
	  var name = fn.name;
	  name = (name || '').replace(/\s|bound(?!$)/g, '');
	  var newFn = function () {
	    var self = this;
	    var len = arguments.length;
	    if (options.withCallback) {
	      var lastType = typeof arguments[len - 1];
	      if (lastType === 'function') return fn.apply(self, arguments)
	    }
	    var args = new Array(len + 1);
	    for (var i = 0; i < len; ++i) args[i] = arguments[i];
	    var lastIndex = i;
	    return new anyPromise(function (resolve, reject) {
	      args[lastIndex] = createCallback(resolve, reject, options.multiArgs);
	      fn.apply(self, args);
	    })
	  };
	  Object.defineProperty(newFn, 'name', { value: name });
	  return newFn
	}

	var thenifyAll_1 = thenifyAll;
	thenifyAll.withCallback = withCallback;
	thenifyAll.thenify = thenify_1;

	/**
	 * Promisifies all the selected functions in an object.
	 *
	 * @param {Object} source the source object for the async functions
	 * @param {Object} [destination] the destination to set all the promisified methods
	 * @param {Array} [methods] an array of method names of `source`
	 * @return {Object}
	 * @api public
	 */

	function thenifyAll(source, destination, methods) {
	  return promisifyAll(source, destination, methods, thenify_1)
	}

	/**
	 * Promisifies all the selected functions in an object and backward compatible with callback.
	 *
	 * @param {Object} source the source object for the async functions
	 * @param {Object} [destination] the destination to set all the promisified methods
	 * @param {Array} [methods] an array of method names of `source`
	 * @return {Object}
	 * @api public
	 */

	function withCallback(source, destination, methods) {
	  return promisifyAll(source, destination, methods, thenify_1.withCallback)
	}

	function promisifyAll(source, destination, methods, promisify) {
	  if (!destination) {
	    destination = {};
	    methods = Object.keys(source);
	  }

	  if (Array.isArray(destination)) {
	    methods = destination;
	    destination = {};
	  }

	  if (!methods) {
	    methods = Object.keys(source);
	  }

	  if (typeof source === 'function') destination = promisify(source);

	  methods.forEach(function (name) {
	    // promisify only if it's a function
	    if (typeof source[name] === 'function') destination[name] = promisify(source[name]);
	  });

	  // proxy the rest
	  Object.keys(source).forEach(function (name) {
	    if (deprecated(source, name)) return
	    if (destination[name]) return
	    destination[name] = source[name];
	  });

	  return destination
	}

	function deprecated(source, name) {
	  var desc = Object.getOwnPropertyDescriptor(source, name);
	  if (!desc || !desc.get) return false
	  if (desc.get.name === 'deprecated') return true
	  return false
	}

	var fs_1 = createCommonjsModule$1(function (module, exports) {
	var fs;
	try {
	  fs = gracefulFs;
	} catch(err) {
	  fs = fs__default["default"];
	}

	var api = [
	  'appendFile',
	  'chmod',
	  'chown',
	  'close',
	  'fchmod',
	  'fchown',
	  'fdatasync',
	  'fstat',
	  'fsync',
	  'ftruncate',
	  'futimes',
	  'lchown',
	  'link',
	  'lstat',
	  'mkdir',
	  'open',
	  'read',
	  'readFile',
	  'readdir',
	  'readlink',
	  'realpath',
	  'rename',
	  'rmdir',
	  'stat',
	  'symlink',
	  'truncate',
	  'unlink',
	  'utimes',
	  'write',
	  'writeFile'
	];

	typeof fs.access === 'function' && api.push('access');
	typeof fs.copyFile === 'function' && api.push('copyFile');
	typeof fs.mkdtemp === 'function' && api.push('mkdtemp');

	thenifyAll_1.withCallback(fs, exports, api);

	exports.exists = function (filename, callback) {
	  // callback
	  if (typeof callback === 'function') {
	    return fs.stat(filename, function (err) {
	      callback(null, !err);
	    })
	  }
	  // or promise
	  return new anyPromise(function (resolve) {
	    fs.stat(filename, function (err) {
	      resolve(!err);
	    });
	  })
	};
	});
	fs_1.exists;

	// simple mutable assign
	function assign () {
	  const args = [].slice.call(arguments).filter(i => i);
	  const dest = args.shift();
	  args.forEach(src => {
	    Object.keys(src).forEach(key => {
	      dest[key] = src[key];
	    });
	  });

	  return dest
	}

	var assign_1 = assign;

	// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
	function hasMillisResSync () {
	  let tmpfile = path__default["default"].join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2));
	  tmpfile = path__default["default"].join(os__default["default"].tmpdir(), tmpfile);

	  // 550 millis past UNIX epoch
	  const d = new Date(1435410243862);
	  gracefulFs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141');
	  const fd = gracefulFs.openSync(tmpfile, 'r+');
	  gracefulFs.futimesSync(fd, d, d);
	  gracefulFs.closeSync(fd);
	  return gracefulFs.statSync(tmpfile).mtime > 1435410243000
	}

	function hasMillisRes (callback) {
	  let tmpfile = path__default["default"].join('millis-test' + Date.now().toString() + Math.random().toString().slice(2));
	  tmpfile = path__default["default"].join(os__default["default"].tmpdir(), tmpfile);

	  // 550 millis past UNIX epoch
	  const d = new Date(1435410243862);
	  gracefulFs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', err => {
	    if (err) return callback(err)
	    gracefulFs.open(tmpfile, 'r+', (err, fd) => {
	      if (err) return callback(err)
	      gracefulFs.futimes(fd, d, d, err => {
	        if (err) return callback(err)
	        gracefulFs.close(fd, err => {
	          if (err) return callback(err)
	          gracefulFs.stat(tmpfile, (err, stats) => {
	            if (err) return callback(err)
	            callback(null, stats.mtime > 1435410243000);
	          });
	        });
	      });
	    });
	  });
	}

	function timeRemoveMillis (timestamp) {
	  if (typeof timestamp === 'number') {
	    return Math.floor(timestamp / 1000) * 1000
	  } else if (timestamp instanceof Date) {
	    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000)
	  } else {
	    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type')
	  }
	}

	function utimesMillis (path, atime, mtime, callback) {
	  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
	  gracefulFs.open(path, 'r+', (err, fd) => {
	    if (err) return callback(err)
	    gracefulFs.futimes(fd, atime, mtime, futimesErr => {
	      gracefulFs.close(fd, closeErr => {
	        if (callback) callback(futimesErr || closeErr);
	      });
	    });
	  });
	}

	var utimes = {
	  hasMillisRes,
	  hasMillisResSync,
	  timeRemoveMillis,
	  utimesMillis
	};

	// imported from ncp (this is temporary, will rewrite)





	function ncp (source, dest, options, callback) {
	  if (!callback) {
	    callback = options;
	    options = {};
	  }

	  var basePath = process.cwd();
	  var currentPath = path__default["default"].resolve(basePath, source);
	  var targetPath = path__default["default"].resolve(basePath, dest);

	  var filter = options.filter;
	  var transform = options.transform;
	  var overwrite = options.overwrite;
	  // If overwrite is undefined, use clobber, otherwise default to true:
	  if (overwrite === undefined) overwrite = options.clobber;
	  if (overwrite === undefined) overwrite = true;
	  var errorOnExist = options.errorOnExist;
	  var dereference = options.dereference;
	  var preserveTimestamps = options.preserveTimestamps === true;

	  var started = 0;
	  var finished = 0;
	  var running = 0;

	  var errored = false;

	  startCopy(currentPath);

	  function startCopy (source) {
	    started++;
	    if (filter) {
	      if (filter instanceof RegExp) {
	        console.warn('Warning: fs-extra: Passing a RegExp filter is deprecated, use a function');
	        if (!filter.test(source)) {
	          return doneOne(true)
	        }
	      } else if (typeof filter === 'function') {
	        if (!filter(source, dest)) {
	          return doneOne(true)
	        }
	      }
	    }
	    return getStats(source)
	  }

	  function getStats (source) {
	    var stat = dereference ? gracefulFs.stat : gracefulFs.lstat;
	    running++;
	    stat(source, function (err, stats) {
	      if (err) return onError(err)

	      // We need to get the mode from the stats object and preserve it.
	      var item = {
	        name: source,
	        mode: stats.mode,
	        mtime: stats.mtime, // modified time
	        atime: stats.atime, // access time
	        stats: stats // temporary
	      };

	      if (stats.isDirectory()) {
	        return onDir(item)
	      } else if (stats.isFile() || stats.isCharacterDevice() || stats.isBlockDevice()) {
	        return onFile(item)
	      } else if (stats.isSymbolicLink()) {
	        // Symlinks don't really need to know about the mode.
	        return onLink(source)
	      }
	    });
	  }

	  function onFile (file) {
	    var target = file.name.replace(currentPath, targetPath.replace('$', '$$$$')); // escapes '$' with '$$'
	    isWritable(target, function (writable) {
	      if (writable) {
	        copyFile(file, target);
	      } else {
	        if (overwrite) {
	          rmFile(target, function () {
	            copyFile(file, target);
	          });
	        } else if (errorOnExist) {
	          onError(new Error(target + ' already exists'));
	        } else {
	          doneOne();
	        }
	      }
	    });
	  }

	  function copyFile (file, target) {
	    var readStream = gracefulFs.createReadStream(file.name);
	    var writeStream = gracefulFs.createWriteStream(target, { mode: file.mode });

	    readStream.on('error', onError);
	    writeStream.on('error', onError);

	    if (transform) {
	      transform(readStream, writeStream, file);
	    } else {
	      writeStream.on('open', function () {
	        readStream.pipe(writeStream);
	      });
	    }

	    writeStream.once('close', function () {
	      gracefulFs.chmod(target, file.mode, function (err) {
	        if (err) return onError(err)
	        if (preserveTimestamps) {
	          utimes.utimesMillis(target, file.atime, file.mtime, function (err) {
	            if (err) return onError(err)
	            return doneOne()
	          });
	        } else {
	          doneOne();
	        }
	      });
	    });
	  }

	  function rmFile (file, done) {
	    gracefulFs.unlink(file, function (err) {
	      if (err) return onError(err)
	      return done()
	    });
	  }

	  function onDir (dir) {
	    var target = dir.name.replace(currentPath, targetPath.replace('$', '$$$$')); // escapes '$' with '$$'
	    isWritable(target, function (writable) {
	      if (writable) {
	        return mkDir(dir, target)
	      }
	      copyDir(dir.name);
	    });
	  }

	  function mkDir (dir, target) {
	    gracefulFs.mkdir(target, dir.mode, function (err) {
	      if (err) return onError(err)
	      // despite setting mode in fs.mkdir, doesn't seem to work
	      // so we set it here.
	      gracefulFs.chmod(target, dir.mode, function (err) {
	        if (err) return onError(err)
	        copyDir(dir.name);
	      });
	    });
	  }

	  function copyDir (dir) {
	    gracefulFs.readdir(dir, function (err, items) {
	      if (err) return onError(err)
	      items.forEach(function (item) {
	        startCopy(path__default["default"].join(dir, item));
	      });
	      return doneOne()
	    });
	  }

	  function onLink (link) {
	    var target = link.replace(currentPath, targetPath);
	    gracefulFs.readlink(link, function (err, resolvedPath) {
	      if (err) return onError(err)
	      checkLink(resolvedPath, target);
	    });
	  }

	  function checkLink (resolvedPath, target) {
	    if (dereference) {
	      resolvedPath = path__default["default"].resolve(basePath, resolvedPath);
	    }
	    isWritable(target, function (writable) {
	      if (writable) {
	        return makeLink(resolvedPath, target)
	      }
	      gracefulFs.readlink(target, function (err, targetDest) {
	        if (err) return onError(err)

	        if (dereference) {
	          targetDest = path__default["default"].resolve(basePath, targetDest);
	        }
	        if (targetDest === resolvedPath) {
	          return doneOne()
	        }
	        return rmFile(target, function () {
	          makeLink(resolvedPath, target);
	        })
	      });
	    });
	  }

	  function makeLink (linkPath, target) {
	    gracefulFs.symlink(linkPath, target, function (err) {
	      if (err) return onError(err)
	      return doneOne()
	    });
	  }

	  function isWritable (path, done) {
	    gracefulFs.lstat(path, function (err) {
	      if (err) {
	        if (err.code === 'ENOENT') return done(true)
	        return done(false)
	      }
	      return done(false)
	    });
	  }

	  function onError (err) {
	    // ensure callback is defined & called only once:
	    if (!errored && callback !== undefined) {
	      errored = true;
	      return callback(err)
	    }
	  }

	  function doneOne (skipped) {
	    if (!skipped) running--;
	    finished++;
	    if ((started === finished) && (running === 0)) {
	      if (callback !== undefined) {
	        return callback(null)
	      }
	    }
	  }
	}

	var ncp_1 = ncp;

	// get drive on windows
	function getRootPath (p) {
	  p = path__default["default"].normalize(path__default["default"].resolve(p)).split(path__default["default"].sep);
	  if (p.length > 0) return p[0]
	  return null
	}

	// http://stackoverflow.com/a/62888/10333 contains more accurate
	// TODO: expand to include the rest
	const INVALID_PATH_CHARS = /[<>:"|?*]/;

	function invalidWin32Path$2 (p) {
	  const rp = getRootPath(p);
	  p = p.replace(rp, '');
	  return INVALID_PATH_CHARS.test(p)
	}

	var win32 = {
	  getRootPath,
	  invalidWin32Path: invalidWin32Path$2
	};

	const invalidWin32Path$1 = win32.invalidWin32Path;

	const o777$1 = parseInt('0777', 8);

	function mkdirs$2 (p, opts, callback, made) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  } else if (!opts || typeof opts !== 'object') {
	    opts = { mode: opts };
	  }

	  if (process.platform === 'win32' && invalidWin32Path$1(p)) {
	    const errInval = new Error(p + ' contains invalid WIN32 path characters.');
	    errInval.code = 'EINVAL';
	    return callback(errInval)
	  }

	  let mode = opts.mode;
	  const xfs = opts.fs || gracefulFs;

	  if (mode === undefined) {
	    mode = o777$1 & (~process.umask());
	  }
	  if (!made) made = null;

	  callback = callback || function () {};
	  p = path__default["default"].resolve(p);

	  xfs.mkdir(p, mode, er => {
	    if (!er) {
	      made = made || p;
	      return callback(null, made)
	    }
	    switch (er.code) {
	      case 'ENOENT':
	        if (path__default["default"].dirname(p) === p) return callback(er)
	        mkdirs$2(path__default["default"].dirname(p), opts, (er, made) => {
	          if (er) callback(er, made);
	          else mkdirs$2(p, opts, callback, made);
	        });
	        break

	      // In the case of any other error, just see if there's a dir
	      // there already.  If so, then hooray!  If not, then something
	      // is borked.
	      default:
	        xfs.stat(p, (er2, stat) => {
	          // if the stat fails, then that's super weird.
	          // let the original error be the failure reason.
	          if (er2 || !stat.isDirectory()) callback(er, made);
	          else callback(null, made);
	        });
	        break
	    }
	  });
	}

	var mkdirs_1 = mkdirs$2;

	const invalidWin32Path = win32.invalidWin32Path;

	const o777 = parseInt('0777', 8);

	function mkdirsSync$1 (p, opts, made) {
	  if (!opts || typeof opts !== 'object') {
	    opts = { mode: opts };
	  }

	  let mode = opts.mode;
	  const xfs = opts.fs || gracefulFs;

	  if (process.platform === 'win32' && invalidWin32Path(p)) {
	    const errInval = new Error(p + ' contains invalid WIN32 path characters.');
	    errInval.code = 'EINVAL';
	    throw errInval
	  }

	  if (mode === undefined) {
	    mode = o777 & (~process.umask());
	  }
	  if (!made) made = null;

	  p = path__default["default"].resolve(p);

	  try {
	    xfs.mkdirSync(p, mode);
	    made = made || p;
	  } catch (err0) {
	    switch (err0.code) {
	      case 'ENOENT':
	        if (path__default["default"].dirname(p) === p) throw err0
	        made = mkdirsSync$1(path__default["default"].dirname(p), opts, made);
	        mkdirsSync$1(p, opts, made);
	        break

	      // In the case of any other error, just see if there's a dir
	      // there already.  If so, then hooray!  If not, then something
	      // is borked.
	      default:
	        let stat;
	        try {
	          stat = xfs.statSync(p);
	        } catch (err1) {
	          throw err0
	        }
	        if (!stat.isDirectory()) throw err0
	        break
	    }
	  }

	  return made
	}

	var mkdirsSync_1 = mkdirsSync$1;

	var mkdirs$1 = {
	  mkdirs: mkdirs_1,
	  mkdirsSync: mkdirsSync_1,
	  // alias
	  mkdirp: mkdirs_1,
	  mkdirpSync: mkdirsSync_1,
	  ensureDir: mkdirs_1,
	  ensureDirSync: mkdirsSync_1
	};
	mkdirs$1.mkdirs;
	mkdirs$1.mkdirsSync;
	mkdirs$1.mkdirp;
	mkdirs$1.mkdirpSync;
	mkdirs$1.ensureDir;
	mkdirs$1.ensureDirSync;

	function copy$1 (src, dest, options, callback) {
	  if (typeof options === 'function' && !callback) {
	    callback = options;
	    options = {};
	  } else if (typeof options === 'function' || options instanceof RegExp) {
	    options = {filter: options};
	  }
	  callback = callback || function () {};
	  options = options || {};

	  // Warn about using preserveTimestamps on 32-bit node:
	  if (options.preserveTimestamps && process.arch === 'ia32') {
	    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
	  }

	  // don't allow src and dest to be the same
	  const basePath = process.cwd();
	  const currentPath = path__default["default"].resolve(basePath, src);
	  const targetPath = path__default["default"].resolve(basePath, dest);
	  if (currentPath === targetPath) return callback(new Error('Source and destination must not be the same.'))

	  gracefulFs.lstat(src, (err, stats) => {
	    if (err) return callback(err)

	    let dir = null;
	    if (stats.isDirectory()) {
	      const parts = dest.split(path__default["default"].sep);
	      parts.pop();
	      dir = parts.join(path__default["default"].sep);
	    } else {
	      dir = path__default["default"].dirname(dest);
	    }

	    gracefulFs.exists(dir, dirExists => {
	      if (dirExists) return ncp_1(src, dest, options, callback)
	      mkdirs$1.mkdirs(dir, err => {
	        if (err) return callback(err)
	        ncp_1(src, dest, options, callback);
	      });
	    });
	  });
	}

	var copy_1 = copy$1;

	var copy = {
	  copy: copy_1
	};
	copy.copy;

	const BUF_LENGTH = 64 * 1024;
	const _buff = new Buffer(BUF_LENGTH);

	function copyFileSync (srcFile, destFile, options) {
	  const overwrite = options.overwrite;
	  const errorOnExist = options.errorOnExist;
	  const preserveTimestamps = options.preserveTimestamps;

	  if (gracefulFs.existsSync(destFile)) {
	    if (overwrite) {
	      gracefulFs.unlinkSync(destFile);
	    } else if (errorOnExist) {
	      throw new Error(`${destFile} already exists`)
	    } else return
	  }

	  const fdr = gracefulFs.openSync(srcFile, 'r');
	  const stat = gracefulFs.fstatSync(fdr);
	  const fdw = gracefulFs.openSync(destFile, 'w', stat.mode);
	  let bytesRead = 1;
	  let pos = 0;

	  while (bytesRead > 0) {
	    bytesRead = gracefulFs.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
	    gracefulFs.writeSync(fdw, _buff, 0, bytesRead);
	    pos += bytesRead;
	  }

	  if (preserveTimestamps) {
	    gracefulFs.futimesSync(fdw, stat.atime, stat.mtime);
	  }

	  gracefulFs.closeSync(fdr);
	  gracefulFs.closeSync(fdw);
	}

	var copyFileSync_1 = copyFileSync;

	function copySync$2 (src, dest, options) {
	  if (typeof options === 'function' || options instanceof RegExp) {
	    options = {filter: options};
	  }

	  options = options || {};
	  options.recursive = !!options.recursive;

	  // default to true for now
	  options.clobber = 'clobber' in options ? !!options.clobber : true;
	  // overwrite falls back to clobber
	  options.overwrite = 'overwrite' in options ? !!options.overwrite : options.clobber;
	  options.dereference = 'dereference' in options ? !!options.dereference : false;
	  options.preserveTimestamps = 'preserveTimestamps' in options ? !!options.preserveTimestamps : false;

	  options.filter = options.filter || function () { return true };

	  // Warn about using preserveTimestamps on 32-bit node:
	  if (options.preserveTimestamps && process.arch === 'ia32') {
	    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
	  }

	  const stats = (options.recursive && !options.dereference) ? gracefulFs.lstatSync(src) : gracefulFs.statSync(src);
	  const destFolder = path__default["default"].dirname(dest);
	  const destFolderExists = gracefulFs.existsSync(destFolder);
	  let performCopy = false;

	  if (options.filter instanceof RegExp) {
	    console.warn('Warning: fs-extra: Passing a RegExp filter is deprecated, use a function');
	    performCopy = options.filter.test(src);
	  } else if (typeof options.filter === 'function') performCopy = options.filter(src, dest);

	  if (stats.isFile() && performCopy) {
	    if (!destFolderExists) mkdirs$1.mkdirsSync(destFolder);
	    copyFileSync_1(src, dest, {
	      overwrite: options.overwrite,
	      errorOnExist: options.errorOnExist,
	      preserveTimestamps: options.preserveTimestamps
	    });
	  } else if (stats.isDirectory() && performCopy) {
	    if (!gracefulFs.existsSync(dest)) mkdirs$1.mkdirsSync(dest);
	    const contents = gracefulFs.readdirSync(src);
	    contents.forEach(content => {
	      const opts = options;
	      opts.recursive = true;
	      copySync$2(path__default["default"].join(src, content), path__default["default"].join(dest, content), opts);
	    });
	  } else if (options.recursive && stats.isSymbolicLink() && performCopy) {
	    const srcPath = gracefulFs.readlinkSync(src);
	    gracefulFs.symlinkSync(srcPath, dest);
	  }
	}

	var copySync_1 = copySync$2;

	var copySync$1 = {
	  copySync: copySync_1
	};
	copySync$1.copySync;

	const isWindows = (process.platform === 'win32');

	function defaults$1 (options) {
	  const methods = [
	    'unlink',
	    'chmod',
	    'stat',
	    'lstat',
	    'rmdir',
	    'readdir'
	  ];
	  methods.forEach(m => {
	    options[m] = options[m] || gracefulFs[m];
	    m = m + 'Sync';
	    options[m] = options[m] || gracefulFs[m];
	  });

	  options.maxBusyTries = options.maxBusyTries || 3;
	}

	function rimraf (p, options, cb) {
	  let busyTries = 0;

	  if (typeof options === 'function') {
	    cb = options;
	    options = {};
	  }

	  assert__default["default"](p, 'rimraf: missing path');
	  assert__default["default"].equal(typeof p, 'string', 'rimraf: path should be a string');
	  assert__default["default"].equal(typeof cb, 'function', 'rimraf: callback function required');
	  assert__default["default"](options, 'rimraf: invalid options argument provided');
	  assert__default["default"].equal(typeof options, 'object', 'rimraf: options should be object');

	  defaults$1(options);

	  rimraf_(p, options, function CB (er) {
	    if (er) {
	      if (isWindows && (er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
	          busyTries < options.maxBusyTries) {
	        busyTries++;
	        let time = busyTries * 100;
	        // try again, with the same exact callback as this one.
	        return setTimeout(() => rimraf_(p, options, CB), time)
	      }

	      // already gone
	      if (er.code === 'ENOENT') er = null;
	    }

	    cb(er);
	  });
	}

	// Two possible strategies.
	// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
	// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
	//
	// Both result in an extra syscall when you guess wrong.  However, there
	// are likely far more normal files in the world than directories.  This
	// is based on the assumption that a the average number of files per
	// directory is >= 1.
	//
	// If anyone ever complains about this, then I guess the strategy could
	// be made configurable somehow.  But until then, YAGNI.
	function rimraf_ (p, options, cb) {
	  assert__default["default"](p);
	  assert__default["default"](options);
	  assert__default["default"](typeof cb === 'function');

	  // sunos lets the root user unlink directories, which is... weird.
	  // so we have to lstat here and make sure it's not a dir.
	  options.lstat(p, (er, st) => {
	    if (er && er.code === 'ENOENT') {
	      return cb(null)
	    }

	    // Windows can EPERM on stat.  Life is suffering.
	    if (er && er.code === 'EPERM' && isWindows) {
	      return fixWinEPERM(p, options, er, cb)
	    }

	    if (st && st.isDirectory()) {
	      return rmdir(p, options, er, cb)
	    }

	    options.unlink(p, er => {
	      if (er) {
	        if (er.code === 'ENOENT') {
	          return cb(null)
	        }
	        if (er.code === 'EPERM') {
	          return (isWindows)
	            ? fixWinEPERM(p, options, er, cb)
	            : rmdir(p, options, er, cb)
	        }
	        if (er.code === 'EISDIR') {
	          return rmdir(p, options, er, cb)
	        }
	      }
	      return cb(er)
	    });
	  });
	}

	function fixWinEPERM (p, options, er, cb) {
	  assert__default["default"](p);
	  assert__default["default"](options);
	  assert__default["default"](typeof cb === 'function');
	  if (er) {
	    assert__default["default"](er instanceof Error);
	  }

	  options.chmod(p, 666, er2 => {
	    if (er2) {
	      cb(er2.code === 'ENOENT' ? null : er);
	    } else {
	      options.stat(p, (er3, stats) => {
	        if (er3) {
	          cb(er3.code === 'ENOENT' ? null : er);
	        } else if (stats.isDirectory()) {
	          rmdir(p, options, er, cb);
	        } else {
	          options.unlink(p, cb);
	        }
	      });
	    }
	  });
	}

	function fixWinEPERMSync (p, options, er) {
	  let stats;

	  assert__default["default"](p);
	  assert__default["default"](options);
	  if (er) {
	    assert__default["default"](er instanceof Error);
	  }

	  try {
	    options.chmodSync(p, 666);
	  } catch (er2) {
	    if (er2.code === 'ENOENT') {
	      return
	    } else {
	      throw er
	    }
	  }

	  try {
	    stats = options.statSync(p);
	  } catch (er3) {
	    if (er3.code === 'ENOENT') {
	      return
	    } else {
	      throw er
	    }
	  }

	  if (stats.isDirectory()) {
	    rmdirSync(p, options, er);
	  } else {
	    options.unlinkSync(p);
	  }
	}

	function rmdir (p, options, originalEr, cb) {
	  assert__default["default"](p);
	  assert__default["default"](options);
	  if (originalEr) {
	    assert__default["default"](originalEr instanceof Error);
	  }
	  assert__default["default"](typeof cb === 'function');

	  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
	  // if we guessed wrong, and it's not a directory, then
	  // raise the original error.
	  options.rmdir(p, er => {
	    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
	      rmkids(p, options, cb);
	    } else if (er && er.code === 'ENOTDIR') {
	      cb(originalEr);
	    } else {
	      cb(er);
	    }
	  });
	}

	function rmkids (p, options, cb) {
	  assert__default["default"](p);
	  assert__default["default"](options);
	  assert__default["default"](typeof cb === 'function');

	  options.readdir(p, (er, files) => {
	    if (er) return cb(er)

	    let n = files.length;
	    let errState;

	    if (n === 0) return options.rmdir(p, cb)

	    files.forEach(f => {
	      rimraf(path__default["default"].join(p, f), options, er => {
	        if (errState) {
	          return
	        }
	        if (er) return cb(errState = er)
	        if (--n === 0) {
	          options.rmdir(p, cb);
	        }
	      });
	    });
	  });
	}

	// this looks simpler, and is strictly *faster*, but will
	// tie up the JavaScript thread and fail on excessively
	// deep directory trees.
	function rimrafSync (p, options) {
	  let st;

	  options = options || {};
	  defaults$1(options);

	  assert__default["default"](p, 'rimraf: missing path');
	  assert__default["default"].equal(typeof p, 'string', 'rimraf: path should be a string');
	  assert__default["default"](options, 'rimraf: missing options');
	  assert__default["default"].equal(typeof options, 'object', 'rimraf: options should be object');

	  try {
	    st = options.lstatSync(p);
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      return
	    }

	    // Windows can EPERM on stat.  Life is suffering.
	    if (er.code === 'EPERM' && isWindows) {
	      fixWinEPERMSync(p, options, er);
	    }
	  }

	  try {
	    // sunos lets the root user unlink directories, which is... weird.
	    if (st && st.isDirectory()) {
	      rmdirSync(p, options, null);
	    } else {
	      options.unlinkSync(p);
	    }
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      return
	    } else if (er.code === 'EPERM') {
	      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
	    } else if (er.code !== 'EISDIR') {
	      throw er
	    }
	    rmdirSync(p, options, er);
	  }
	}

	function rmdirSync (p, options, originalEr) {
	  assert__default["default"](p);
	  assert__default["default"](options);
	  if (originalEr) {
	    assert__default["default"](originalEr instanceof Error);
	  }

	  try {
	    options.rmdirSync(p);
	  } catch (er) {
	    if (er.code === 'ENOENT') {
	      return
	    } else if (er.code === 'ENOTDIR') {
	      throw originalEr
	    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
	      rmkidsSync(p, options);
	    }
	  }
	}

	function rmkidsSync (p, options) {
	  assert__default["default"](p);
	  assert__default["default"](options);
	  options.readdirSync(p).forEach(f => rimrafSync(path__default["default"].join(p, f), options));
	  options.rmdirSync(p, options);
	}

	var rimraf_1 = rimraf;
	rimraf.sync = rimrafSync;

	function removeSync$1 (dir) {
	  return rimraf_1.sync(dir, {disableGlob: true})
	}

	function remove$1 (dir, callback) {
	  const options = {disableGlob: true};
	  return callback ? rimraf_1(dir, options, callback) : rimraf_1(dir, options, function () {})
	}

	var remove_1 = {
	  remove: remove$1,
	  removeSync: removeSync$1
	};
	remove_1.remove;
	remove_1.removeSync;

	var _fs;
	try {
	  _fs = gracefulFs;
	} catch (_) {
	  _fs = fs__default["default"];
	}

	function readFile (file, options, callback) {
	  if (callback == null) {
	    callback = options;
	    options = {};
	  }

	  if (typeof options === 'string') {
	    options = {encoding: options};
	  }

	  options = options || {};
	  var fs = options.fs || _fs;

	  var shouldThrow = true;
	  // DO NOT USE 'passParsingErrors' THE NAME WILL CHANGE!!!, use 'throws' instead
	  if ('passParsingErrors' in options) {
	    shouldThrow = options.passParsingErrors;
	  } else if ('throws' in options) {
	    shouldThrow = options.throws;
	  }

	  fs.readFile(file, options, function (err, data) {
	    if (err) return callback(err)

	    data = stripBom(data);

	    var obj;
	    try {
	      obj = JSON.parse(data, options ? options.reviver : null);
	    } catch (err2) {
	      if (shouldThrow) {
	        err2.message = file + ': ' + err2.message;
	        return callback(err2)
	      } else {
	        return callback(null, null)
	      }
	    }

	    callback(null, obj);
	  });
	}

	function readFileSync (file, options) {
	  options = options || {};
	  if (typeof options === 'string') {
	    options = {encoding: options};
	  }

	  var fs = options.fs || _fs;

	  var shouldThrow = true;
	  // DO NOT USE 'passParsingErrors' THE NAME WILL CHANGE!!!, use 'throws' instead
	  if ('passParsingErrors' in options) {
	    shouldThrow = options.passParsingErrors;
	  } else if ('throws' in options) {
	    shouldThrow = options.throws;
	  }

	  var content = fs.readFileSync(file, options);
	  content = stripBom(content);

	  try {
	    return JSON.parse(content, options.reviver)
	  } catch (err) {
	    if (shouldThrow) {
	      err.message = file + ': ' + err.message;
	      throw err
	    } else {
	      return null
	    }
	  }
	}

	function writeFile (file, obj, options, callback) {
	  if (callback == null) {
	    callback = options;
	    options = {};
	  }
	  options = options || {};
	  var fs = options.fs || _fs;

	  var spaces = typeof options === 'object' && options !== null
	    ? 'spaces' in options
	    ? options.spaces : this.spaces
	    : this.spaces;

	  var str = '';
	  try {
	    str = JSON.stringify(obj, options ? options.replacer : null, spaces) + '\n';
	  } catch (err) {
	    if (callback) return callback(err, null)
	  }

	  fs.writeFile(file, str, options, callback);
	}

	function writeFileSync (file, obj, options) {
	  options = options || {};
	  var fs = options.fs || _fs;

	  var spaces = typeof options === 'object' && options !== null
	    ? 'spaces' in options
	    ? options.spaces : this.spaces
	    : this.spaces;

	  var str = JSON.stringify(obj, options.replacer, spaces) + '\n';
	  // not sure if fs.writeFileSync returns anything, but just in case
	  return fs.writeFileSync(file, str, options)
	}

	function stripBom (content) {
	  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
	  if (Buffer.isBuffer(content)) content = content.toString('utf8');
	  content = content.replace(/^\uFEFF/, '');
	  return content
	}

	var jsonfile$2 = {
	  spaces: null,
	  readFile: readFile,
	  readFileSync: readFileSync,
	  writeFile: writeFile,
	  writeFileSync: writeFileSync
	};

	var jsonfile_1$1 = jsonfile$2;

	var jsonfile$1 = {
	  // jsonfile exports
	  readJson: jsonfile_1$1.readFile,
	  readJSON: jsonfile_1$1.readFile,
	  readJsonSync: jsonfile_1$1.readFileSync,
	  readJSONSync: jsonfile_1$1.readFileSync,
	  writeJson: jsonfile_1$1.writeFile,
	  writeJSON: jsonfile_1$1.writeFile,
	  writeJsonSync: jsonfile_1$1.writeFileSync,
	  writeJSONSync: jsonfile_1$1.writeFileSync,
	  spaces: 2 // default in fs-extra
	};
	jsonfile$1.readJson;
	jsonfile$1.readJSON;
	jsonfile$1.readJsonSync;
	jsonfile$1.readJSONSync;
	jsonfile$1.writeJson;
	jsonfile$1.writeJSON;
	jsonfile$1.writeJsonSync;
	jsonfile$1.writeJSONSync;
	jsonfile$1.spaces;

	function outputJsonSync (file, data, options) {
	  const dir = path__default["default"].dirname(file);

	  if (!gracefulFs.existsSync(dir)) {
	    mkdirs$1.mkdirsSync(dir);
	  }

	  jsonfile$1.writeJsonSync(file, data, options);
	}

	var outputJsonSync_1 = outputJsonSync;

	function outputJson (file, data, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  const dir = path__default["default"].dirname(file);

	  gracefulFs.exists(dir, itDoes => {
	    if (itDoes) return jsonfile$1.writeJson(file, data, options, callback)

	    mkdirs$1.mkdirs(dir, err => {
	      if (err) return callback(err)
	      jsonfile$1.writeJson(file, data, options, callback);
	    });
	  });
	}

	var outputJson_1 = outputJson;

	jsonfile$1.outputJsonSync = outputJsonSync_1;
	jsonfile$1.outputJson = outputJson_1;
	// aliases
	jsonfile$1.outputJSONSync = outputJsonSync_1;
	jsonfile$1.outputJSON = outputJson_1;

	var json = jsonfile$1;

	// most of this code was written by Andrew Kelley
	// licensed under the BSD license: see
	// https://github.com/andrewrk/node-mv/blob/master/package.json

	// this needs a cleanup




	const remove = remove_1.remove;
	const mkdirp = mkdirs$1.mkdirs;

	function move (source, dest, options, callback) {
	  if (typeof options === 'function') {
	    callback = options;
	    options = {};
	  }

	  const shouldMkdirp = ('mkdirp' in options) ? options.mkdirp : true;
	  const overwrite = options.overwrite || options.clobber || false;

	  if (shouldMkdirp) {
	    mkdirs();
	  } else {
	    doRename();
	  }

	  function mkdirs () {
	    mkdirp(path__default["default"].dirname(dest), err => {
	      if (err) return callback(err)
	      doRename();
	    });
	  }

	  function doRename () {
	    if (path__default["default"].resolve(source) === path__default["default"].resolve(dest)) {
	      setImmediate(callback);
	    } else if (overwrite) {
	      gracefulFs.rename(source, dest, err => {
	        if (!err) return callback()

	        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST') {
	          remove(dest, err => {
	            if (err) return callback(err)
	            options.overwrite = false; // just overwriteed it, no need to do it again
	            move(source, dest, options, callback);
	          });
	          return
	        }

	        // weird Windows shit
	        if (err.code === 'EPERM') {
	          setTimeout(() => {
	            remove(dest, err => {
	              if (err) return callback(err)
	              options.overwrite = false;
	              move(source, dest, options, callback);
	            });
	          }, 200);
	          return
	        }

	        if (err.code !== 'EXDEV') return callback(err)
	        moveAcrossDevice(source, dest, overwrite, callback);
	      });
	    } else {
	      gracefulFs.link(source, dest, err => {
	        if (err) {
	          if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
	            moveAcrossDevice(source, dest, overwrite, callback);
	            return
	          }
	          callback(err);
	          return
	        }
	        gracefulFs.unlink(source, callback);
	      });
	    }
	  }
	}

	function moveAcrossDevice (source, dest, overwrite, callback) {
	  gracefulFs.stat(source, (err, stat) => {
	    if (err) {
	      callback(err);
	      return
	    }

	    if (stat.isDirectory()) {
	      moveDirAcrossDevice(source, dest, overwrite, callback);
	    } else {
	      moveFileAcrossDevice(source, dest, overwrite, callback);
	    }
	  });
	}

	function moveFileAcrossDevice (source, dest, overwrite, callback) {
	  const flags = overwrite ? 'w' : 'wx';
	  const ins = gracefulFs.createReadStream(source);
	  const outs = gracefulFs.createWriteStream(dest, { flags });

	  ins.on('error', err => {
	    ins.destroy();
	    outs.destroy();
	    outs.removeListener('close', onClose);

	    // may want to create a directory but `out` line above
	    // creates an empty file for us: See #108
	    // don't care about error here
	    gracefulFs.unlink(dest, () => {
	      // note: `err` here is from the input stream errror
	      if (err.code === 'EISDIR' || err.code === 'EPERM') {
	        moveDirAcrossDevice(source, dest, overwrite, callback);
	      } else {
	        callback(err);
	      }
	    });
	  });

	  outs.on('error', err => {
	    ins.destroy();
	    outs.destroy();
	    outs.removeListener('close', onClose);
	    callback(err);
	  });

	  outs.once('close', onClose);
	  ins.pipe(outs);

	  function onClose () {
	    gracefulFs.unlink(source, callback);
	  }
	}

	function moveDirAcrossDevice (source, dest, overwrite, callback) {
	  const options = {
	    overwrite: false
	  };

	  if (overwrite) {
	    remove(dest, err => {
	      if (err) return callback(err)
	      startNcp();
	    });
	  } else {
	    startNcp();
	  }

	  function startNcp () {
	    ncp_1(source, dest, options, err => {
	      if (err) return callback(err)
	      remove(source, callback);
	    });
	  }
	}

	var move_1 = {
	  move
	};
	move_1.move;

	const copySync = copySync$1.copySync;
	const removeSync = remove_1.removeSync;
	const mkdirpSync = mkdirs$1.mkdirsSync;

	function moveSync (src, dest, options) {
	  options = options || {};
	  const overwrite = options.overwrite || options.clobber || false;

	  src = path__default["default"].resolve(src);
	  dest = path__default["default"].resolve(dest);

	  if (src === dest) return

	  if (isSrcSubdir(src, dest)) throw new Error(`Cannot move '${src}' into itself '${dest}'.`)

	  mkdirpSync(path__default["default"].dirname(dest));
	  tryRenameSync();

	  function tryRenameSync () {
	    if (overwrite) {
	      try {
	        return gracefulFs.renameSync(src, dest)
	      } catch (err) {
	        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST' || err.code === 'EPERM') {
	          removeSync(dest);
	          options.overwrite = false; // just overwriteed it, no need to do it again
	          return moveSync(src, dest, options)
	        }

	        if (err.code !== 'EXDEV') throw err
	        return moveSyncAcrossDevice(src, dest, overwrite)
	      }
	    } else {
	      try {
	        gracefulFs.linkSync(src, dest);
	        return gracefulFs.unlinkSync(src)
	      } catch (err) {
	        if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
	          return moveSyncAcrossDevice(src, dest, overwrite)
	        }
	        throw err
	      }
	    }
	  }
	}

	function moveSyncAcrossDevice (src, dest, overwrite) {
	  const stat = gracefulFs.statSync(src);

	  if (stat.isDirectory()) {
	    return moveDirSyncAcrossDevice(src, dest, overwrite)
	  } else {
	    return moveFileSyncAcrossDevice(src, dest, overwrite)
	  }
	}

	function moveFileSyncAcrossDevice (src, dest, overwrite) {
	  const BUF_LENGTH = 64 * 1024;
	  const _buff = new Buffer(BUF_LENGTH);

	  const flags = overwrite ? 'w' : 'wx';

	  const fdr = gracefulFs.openSync(src, 'r');
	  const stat = gracefulFs.fstatSync(fdr);
	  const fdw = gracefulFs.openSync(dest, flags, stat.mode);
	  let bytesRead = 1;
	  let pos = 0;

	  while (bytesRead > 0) {
	    bytesRead = gracefulFs.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
	    gracefulFs.writeSync(fdw, _buff, 0, bytesRead);
	    pos += bytesRead;
	  }

	  gracefulFs.closeSync(fdr);
	  gracefulFs.closeSync(fdw);
	  return gracefulFs.unlinkSync(src)
	}

	function moveDirSyncAcrossDevice (src, dest, overwrite) {
	  const options = {
	    overwrite: false
	  };

	  if (overwrite) {
	    removeSync(dest);
	    tryCopySync();
	  } else {
	    tryCopySync();
	  }

	  function tryCopySync () {
	    copySync(src, dest, options);
	    return removeSync(src)
	  }
	}

	// return true if dest is a subdir of src, otherwise false.
	// extract dest base dir and check if that is the same as src basename
	function isSrcSubdir (src, dest) {
	  try {
	    return gracefulFs.statSync(src).isDirectory() &&
	           src !== dest &&
	           dest.indexOf(src) > -1 &&
	           dest.split(path__default["default"].dirname(src) + path__default["default"].sep)[1].split(path__default["default"].sep)[0] === path__default["default"].basename(src)
	  } catch (e) {
	    return false
	  }
	}

	var moveSync_1 = {
	  moveSync
	};
	moveSync_1.moveSync;

	function emptyDir (dir, callback) {
	  callback = callback || function () {};
	  fs__default["default"].readdir(dir, (err, items) => {
	    if (err) return mkdirs$1.mkdirs(dir, callback)

	    items = items.map(item => path__default["default"].join(dir, item));

	    deleteItem();

	    function deleteItem () {
	      const item = items.pop();
	      if (!item) return callback()
	      remove_1.remove(item, err => {
	        if (err) return callback(err)
	        deleteItem();
	      });
	    }
	  });
	}

	function emptyDirSync (dir) {
	  let items;
	  try {
	    items = fs__default["default"].readdirSync(dir);
	  } catch (err) {
	    return mkdirs$1.mkdirsSync(dir)
	  }

	  items.forEach(item => {
	    item = path__default["default"].join(dir, item);
	    remove_1.removeSync(item);
	  });
	}

	var empty = {
	  emptyDirSync,
	  emptydirSync: emptyDirSync,
	  emptyDir,
	  emptydir: emptyDir
	};
	empty.emptyDirSync;
	empty.emptydirSync;
	empty.emptyDir;
	empty.emptydir;

	function createFile (file, callback) {
	  function makeFile () {
	    gracefulFs.writeFile(file, '', err => {
	      if (err) return callback(err)
	      callback();
	    });
	  }

	  gracefulFs.exists(file, fileExists => {
	    if (fileExists) return callback()
	    const dir = path__default["default"].dirname(file);
	    gracefulFs.exists(dir, dirExists => {
	      if (dirExists) return makeFile()
	      mkdirs$1.mkdirs(dir, err => {
	        if (err) return callback(err)
	        makeFile();
	      });
	    });
	  });
	}

	function createFileSync (file) {
	  if (gracefulFs.existsSync(file)) return

	  const dir = path__default["default"].dirname(file);
	  if (!gracefulFs.existsSync(dir)) {
	    mkdirs$1.mkdirsSync(dir);
	  }

	  gracefulFs.writeFileSync(file, '');
	}

	var file = {
	  createFile,
	  createFileSync,
	  // alias
	  ensureFile: createFile,
	  ensureFileSync: createFileSync
	};

	function createLink (srcpath, dstpath, callback) {
	  function makeLink (srcpath, dstpath) {
	    gracefulFs.link(srcpath, dstpath, err => {
	      if (err) return callback(err)
	      callback(null);
	    });
	  }

	  gracefulFs.exists(dstpath, destinationExists => {
	    if (destinationExists) return callback(null)
	    gracefulFs.lstat(srcpath, (err, stat) => {
	      if (err) {
	        err.message = err.message.replace('lstat', 'ensureLink');
	        return callback(err)
	      }

	      const dir = path__default["default"].dirname(dstpath);
	      gracefulFs.exists(dir, dirExists => {
	        if (dirExists) return makeLink(srcpath, dstpath)
	        mkdirs$1.mkdirs(dir, err => {
	          if (err) return callback(err)
	          makeLink(srcpath, dstpath);
	        });
	      });
	    });
	  });
	}

	function createLinkSync (srcpath, dstpath, callback) {
	  const destinationExists = gracefulFs.existsSync(dstpath);
	  if (destinationExists) return undefined

	  try {
	    gracefulFs.lstatSync(srcpath);
	  } catch (err) {
	    err.message = err.message.replace('lstat', 'ensureLink');
	    throw err
	  }

	  const dir = path__default["default"].dirname(dstpath);
	  const dirExists = gracefulFs.existsSync(dir);
	  if (dirExists) return gracefulFs.linkSync(srcpath, dstpath)
	  mkdirs$1.mkdirsSync(dir);

	  return gracefulFs.linkSync(srcpath, dstpath)
	}

	var link = {
	  createLink,
	  createLinkSync,
	  // alias
	  ensureLink: createLink,
	  ensureLinkSync: createLinkSync
	};

	/**
	 * Function that returns two types of paths, one relative to symlink, and one
	 * relative to the current working directory. Checks if path is absolute or
	 * relative. If the path is relative, this function checks if the path is
	 * relative to symlink or relative to current working directory. This is an
	 * initiative to find a smarter `srcpath` to supply when building symlinks.
	 * This allows you to determine which path to use out of one of three possible
	 * types of source paths. The first is an absolute path. This is detected by
	 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
	 * see if it exists. If it does it's used, if not an error is returned
	 * (callback)/ thrown (sync). The other two options for `srcpath` are a
	 * relative url. By default Node's `fs.symlink` works by creating a symlink
	 * using `dstpath` and expects the `srcpath` to be relative to the newly
	 * created symlink. If you provide a `srcpath` that does not exist on the file
	 * system it results in a broken symlink. To minimize this, the function
	 * checks to see if the 'relative to symlink' source file exists, and if it
	 * does it will use it. If it does not, it checks if there's a file that
	 * exists that is relative to the current working directory, if does its used.
	 * This preserves the expectations of the original fs.symlink spec and adds
	 * the ability to pass in `relative to current working direcotry` paths.
	 */

	function symlinkPaths$1 (srcpath, dstpath, callback) {
	  if (path__default["default"].isAbsolute(srcpath)) {
	    return gracefulFs.lstat(srcpath, (err, stat) => {
	      if (err) {
	        err.message = err.message.replace('lstat', 'ensureSymlink');
	        return callback(err)
	      }
	      return callback(null, {
	        'toCwd': srcpath,
	        'toDst': srcpath
	      })
	    })
	  } else {
	    const dstdir = path__default["default"].dirname(dstpath);
	    const relativeToDst = path__default["default"].join(dstdir, srcpath);
	    return gracefulFs.exists(relativeToDst, exists => {
	      if (exists) {
	        return callback(null, {
	          'toCwd': relativeToDst,
	          'toDst': srcpath
	        })
	      } else {
	        return gracefulFs.lstat(srcpath, (err, stat) => {
	          if (err) {
	            err.message = err.message.replace('lstat', 'ensureSymlink');
	            return callback(err)
	          }
	          return callback(null, {
	            'toCwd': srcpath,
	            'toDst': path__default["default"].relative(dstdir, srcpath)
	          })
	        })
	      }
	    })
	  }
	}

	function symlinkPathsSync$1 (srcpath, dstpath) {
	  let exists;
	  if (path__default["default"].isAbsolute(srcpath)) {
	    exists = gracefulFs.existsSync(srcpath);
	    if (!exists) throw new Error('absolute srcpath does not exist')
	    return {
	      'toCwd': srcpath,
	      'toDst': srcpath
	    }
	  } else {
	    const dstdir = path__default["default"].dirname(dstpath);
	    const relativeToDst = path__default["default"].join(dstdir, srcpath);
	    exists = gracefulFs.existsSync(relativeToDst);
	    if (exists) {
	      return {
	        'toCwd': relativeToDst,
	        'toDst': srcpath
	      }
	    } else {
	      exists = gracefulFs.existsSync(srcpath);
	      if (!exists) throw new Error('relative srcpath does not exist')
	      return {
	        'toCwd': srcpath,
	        'toDst': path__default["default"].relative(dstdir, srcpath)
	      }
	    }
	  }
	}

	var symlinkPaths_1 = {
	  symlinkPaths: symlinkPaths$1,
	  symlinkPathsSync: symlinkPathsSync$1
	};

	function symlinkType$1 (srcpath, type, callback) {
	  callback = (typeof type === 'function') ? type : callback;
	  type = (typeof type === 'function') ? false : type;
	  if (type) return callback(null, type)
	  gracefulFs.lstat(srcpath, (err, stats) => {
	    if (err) return callback(null, 'file')
	    type = (stats && stats.isDirectory()) ? 'dir' : 'file';
	    callback(null, type);
	  });
	}

	function symlinkTypeSync$1 (srcpath, type) {
	  let stats;

	  if (type) return type
	  try {
	    stats = gracefulFs.lstatSync(srcpath);
	  } catch (e) {
	    return 'file'
	  }
	  return (stats && stats.isDirectory()) ? 'dir' : 'file'
	}

	var symlinkType_1 = {
	  symlinkType: symlinkType$1,
	  symlinkTypeSync: symlinkTypeSync$1
	};

	const mkdirs = mkdirs$1.mkdirs;
	const mkdirsSync = mkdirs$1.mkdirsSync;


	const symlinkPaths = symlinkPaths_1.symlinkPaths;
	const symlinkPathsSync = symlinkPaths_1.symlinkPathsSync;


	const symlinkType = symlinkType_1.symlinkType;
	const symlinkTypeSync = symlinkType_1.symlinkTypeSync;

	function createSymlink (srcpath, dstpath, type, callback) {
	  callback = (typeof type === 'function') ? type : callback;
	  type = (typeof type === 'function') ? false : type;

	  gracefulFs.exists(dstpath, destinationExists => {
	    if (destinationExists) return callback(null)
	    symlinkPaths(srcpath, dstpath, (err, relative) => {
	      if (err) return callback(err)
	      srcpath = relative.toDst;
	      symlinkType(relative.toCwd, type, (err, type) => {
	        if (err) return callback(err)
	        const dir = path__default["default"].dirname(dstpath);
	        gracefulFs.exists(dir, dirExists => {
	          if (dirExists) return gracefulFs.symlink(srcpath, dstpath, type, callback)
	          mkdirs(dir, err => {
	            if (err) return callback(err)
	            gracefulFs.symlink(srcpath, dstpath, type, callback);
	          });
	        });
	      });
	    });
	  });
	}

	function createSymlinkSync (srcpath, dstpath, type, callback) {
	  type = (typeof type === 'function') ? false : type;

	  const destinationExists = gracefulFs.existsSync(dstpath);
	  if (destinationExists) return undefined

	  const relative = symlinkPathsSync(srcpath, dstpath);
	  srcpath = relative.toDst;
	  type = symlinkTypeSync(relative.toCwd, type);
	  const dir = path__default["default"].dirname(dstpath);
	  const exists = gracefulFs.existsSync(dir);
	  if (exists) return gracefulFs.symlinkSync(srcpath, dstpath, type)
	  mkdirsSync(dir);
	  return gracefulFs.symlinkSync(srcpath, dstpath, type)
	}

	var symlink = {
	  createSymlink,
	  createSymlinkSync,
	  // alias
	  ensureSymlink: createSymlink,
	  ensureSymlinkSync: createSymlinkSync
	};

	var ensure = {
	  // file
	  createFile: file.createFile,
	  createFileSync: file.createFileSync,
	  ensureFile: file.createFile,
	  ensureFileSync: file.createFileSync,
	  // link
	  createLink: link.createLink,
	  createLinkSync: link.createLinkSync,
	  ensureLink: link.createLink,
	  ensureLinkSync: link.createLinkSync,
	  // symlink
	  createSymlink: symlink.createSymlink,
	  createSymlinkSync: symlink.createSymlinkSync,
	  ensureSymlink: symlink.createSymlink,
	  ensureSymlinkSync: symlink.createSymlinkSync
	};
	ensure.createFile;
	ensure.createFileSync;
	ensure.ensureFile;
	ensure.ensureFileSync;
	ensure.createLink;
	ensure.createLinkSync;
	ensure.ensureLink;
	ensure.ensureLinkSync;
	ensure.createSymlink;
	ensure.createSymlinkSync;
	ensure.ensureSymlink;
	ensure.ensureSymlinkSync;

	function outputFile (file, data, encoding, callback) {
	  if (typeof encoding === 'function') {
	    callback = encoding;
	    encoding = 'utf8';
	  }

	  const dir = path__default["default"].dirname(file);
	  gracefulFs.exists(dir, itDoes => {
	    if (itDoes) return gracefulFs.writeFile(file, data, encoding, callback)

	    mkdirs$1.mkdirs(dir, err => {
	      if (err) return callback(err)

	      gracefulFs.writeFile(file, data, encoding, callback);
	    });
	  });
	}

	function outputFileSync (file, data, encoding) {
	  const dir = path__default["default"].dirname(file);
	  if (gracefulFs.existsSync(dir)) {
	    return gracefulFs.writeFileSync.apply(gracefulFs, arguments)
	  }
	  mkdirs$1.mkdirsSync(dir);
	  gracefulFs.writeFileSync.apply(gracefulFs, arguments);
	}

	var output = {
	  outputFile,
	  outputFileSync
	};
	output.outputFile;
	output.outputFileSync;

	const fse = {};


	// attach fs methods to fse
	Object.keys(gracefulFs).forEach(key => {
	  fse[key] = gracefulFs[key];
	});

	const fs = fse;

	assign_1(fs, copy);
	assign_1(fs, copySync$1);
	assign_1(fs, mkdirs$1);
	assign_1(fs, remove_1);
	assign_1(fs, json);
	assign_1(fs, move_1);
	assign_1(fs, moveSync_1);
	assign_1(fs, empty);
	assign_1(fs, ensure);
	assign_1(fs, output);

	var lib = fs;

	// maintain backwards compatibility for awhile
	const jsonfile = {};
	Object.defineProperty(jsonfile, 'spaces', {
	  get: () => fs.spaces, // found in ./json
	  set: val => {
	    fs.spaces = val;
	  }
	});

	var jsonfile_1 = jsonfile; // so users of fs-extra can modify jsonFile.spaces
	lib.jsonfile = jsonfile_1;

	var fsPromise = createCommonjsModule$1(function (module, exports) {

	// thenify-all for all fs-extra that make sense to be promises
	var fsExtraKeys = [
	  'copy',
	  'emptyDir',
	  'ensureFile',
	  'ensureDir',
	  'ensureLink',
	  'ensureSymlink',
	  'mkdirs',
	  'move',
	  'outputFile',
	  'outputJson',
	  'readJson',
	  'remove',
	  'writeJson',
	  // aliases
	  'createFile',
	  'createLink',
	  'createSymlink',
	  'emptydir',
	  'mkdirp',
	  'readJSON',
	  'outputJSON',
	  'writeJSON'
	];
	thenifyAll_1.withCallback(lib, exports, fsExtraKeys);

	// Delegate all normal fs to mz/fs
	// (this overwrites anything proxies directly above)
	var mzKeys = [
	  'rename',
	  'ftruncate',
	  'chown',
	  'fchown',
	  'lchown',
	  'chmod',
	  'fchmod',
	  'stat',
	  'lstat',
	  'fstat',
	  'link',
	  'symlink',
	  'readlink',
	  'realpath',
	  'unlink',
	  'rmdir',
	  'mkdir',
	  'mkdtemp',
	  'readdir',
	  'close',
	  'open',
	  'utimes',
	  'futimes',
	  'fsync',
	  'fdatasync',
	  'write',
	  'read',
	  'readFile',
	  'writeFile',
	  'appendFile',
	  'access',
	  'truncate',
	  'exists'
	];

	mzKeys.forEach(function(key){
	  exports[key] = fs_1[key];
	});
	});

	var bind = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

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
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer$1(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
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
	function trim$1(str) {
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
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
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
	 * Function equal to merge with the difference being that no reference
	 * to original objects is kept.
	 *
	 * @see merge
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function deepMerge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = deepMerge(result[key], val);
	    } else if (typeof val === 'object') {
	      result[key] = deepMerge({}, val);
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

	var utils$1 = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer$1,
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
	  deepMerge: deepMerge,
	  extend: extend,
	  trim: trim$1
	};

	function encode$1(val) {
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
	var buildURL = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils$1.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils$1.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils$1.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils$1.forEach(val, function parseValue(v) {
	        if (utils$1.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils$1.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode$1(key) + '=' + encode$1(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }

	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

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
	  utils$1.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	var InterceptorManager_1 = InterceptorManager;

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	var transformData = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils$1.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};

	var isCancel = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

	var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
	  utils$1.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

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
	var enhanceError = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }

	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;

	  error.toJSON = function() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code
	    };
	  };
	  return error;
	};

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
	var createError = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	var settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!validateStatus || validateStatus(response.status)) {
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

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	var isAbsoluteURL = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	var combineURLs = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 * @returns {string} The combined full path
	 */
	var buildFullPath = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};

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
	var parseHeaders = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils$1.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils$1.trim(line.substr(0, i)).toLowerCase();
	    val = utils$1.trim(line.substr(i + 1));

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

	var isURLSameOrigin = (
	  utils$1.isStandardBrowserEnv() ?

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
	        var parsed = (utils$1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
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

	var cookies = (
	  utils$1.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));

	          if (utils$1.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }

	          if (utils$1.isString(path)) {
	            cookie.push('path=' + path);
	          }

	          if (utils$1.isString(domain)) {
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

	var xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils$1.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    var fullPath = buildFullPath(config.baseURL, config.url);
	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
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
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }

	      reject(createError('Request aborted', config, 'ECONNABORTED', request));

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
	      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils$1.isStandardBrowserEnv()) {
	      var cookies$1 = cookies;

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies$1.read(config.xsrfCookieName) :
	        undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils$1.forEach(requestHeaders, function setRequestHeader(val, key) {
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
	    if (!utils$1.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
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

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	var ms = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse$1(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse$1(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

	var debug$1 = createCommonjsModule$1(function (module, exports) {
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = ms;

	/**
	 * Active `debug` instances.
	 */
	exports.instances = [];

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  var prevTime;

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	  debug.destroy = destroy;

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  exports.instances.push(debug);

	  return debug;
	}

	function destroy () {
	  var index = exports.instances.indexOf(this);
	  if (index !== -1) {
	    exports.instances.splice(index, 1);
	    return true;
	  } else {
	    return false;
	  }
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var i;
	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }

	  for (i = 0; i < exports.instances.length; i++) {
	    var instance = exports.instances[i];
	    instance.enabled = exports.enabled(instance.namespace);
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  if (name[name.length - 1] === '*') {
	    return true;
	  }
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}
	});
	debug$1.coerce;
	debug$1.disable;
	debug$1.enable;
	debug$1.enabled;
	debug$1.humanize;
	debug$1.instances;
	debug$1.names;
	debug$1.skips;
	debug$1.formatters;

	var browser$2 = createCommonjsModule$1(function (module, exports) {
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug$1;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
	  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
	  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
	  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
	  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
	  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
	  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
	  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
	  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
	  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
	  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // Internet Explorer and Edge do not support colors.
	  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
	    return false;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit');

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	});
	browser$2.log;
	browser$2.formatArgs;
	browser$2.save;
	browser$2.load;
	browser$2.useColors;
	browser$2.storage;
	browser$2.colors;

	var hasFlag = (flag, argv = process.argv) => {
		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
		const position = argv.indexOf(prefix + flag);
		const terminatorPosition = argv.indexOf('--');
		return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
	};

	const {env} = process;

	let forceColor;
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false') ||
		hasFlag('color=never')) {
		forceColor = 0;
	} else if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		forceColor = 1;
	}

	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			forceColor = 1;
		} else if (env.FORCE_COLOR === 'false') {
			forceColor = 0;
		} else {
			forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
		}
	}

	function translateLevel(level) {
		if (level === 0) {
			return false;
		}

		return {
			level,
			hasBasic: true,
			has256: level >= 2,
			has16m: level >= 3
		};
	}

	function supportsColor(haveStream, streamIsTTY) {
		if (forceColor === 0) {
			return 0;
		}

		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}

		if (haveStream && !streamIsTTY && forceColor === undefined) {
			return 0;
		}

		const min = forceColor || 0;

		if (env.TERM === 'dumb') {
			return min;
		}

		if (process.platform === 'win32') {
			// Windows 10 build 10586 is the first Windows release that supports 256 colors.
			// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
			const osRelease = os__default["default"].release().split('.');
			if (
				Number(osRelease[0]) >= 10 &&
				Number(osRelease[2]) >= 10586
			) {
				return Number(osRelease[2]) >= 14931 ? 3 : 2;
			}

			return 1;
		}

		if ('CI' in env) {
			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
				return 1;
			}

			return min;
		}

		if ('TEAMCITY_VERSION' in env) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
		}

		if (env.COLORTERM === 'truecolor') {
			return 3;
		}

		if ('TERM_PROGRAM' in env) {
			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

			switch (env.TERM_PROGRAM) {
				case 'iTerm.app':
					return version >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
				// No default
			}
		}

		if (/-256(color)?$/i.test(env.TERM)) {
			return 2;
		}

		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
			return 1;
		}

		if ('COLORTERM' in env) {
			return 1;
		}

		return min;
	}

	function getSupportLevel(stream) {
		const level = supportsColor(stream, stream && stream.isTTY);
		return translateLevel(level);
	}

	var supportsColor_1 = {
		supportsColor: getSupportLevel,
		stdout: translateLevel(supportsColor(true, tty__default["default"].isatty(1))),
		stderr: translateLevel(supportsColor(true, tty__default["default"].isatty(2)))
	};
	supportsColor_1.supportsColor;
	supportsColor_1.stdout;
	supportsColor_1.stderr;

	var node = createCommonjsModule$1(function (module, exports) {
	/**
	 * Module dependencies.
	 */




	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug$1;
	exports.init = init;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;

	/**
	 * Colors.
	 */

	exports.colors = [ 6, 2, 3, 4, 5, 1 ];

	try {
	  var supportsColor = supportsColor_1;
	  if (supportsColor && supportsColor.level >= 2) {
	    exports.colors = [
	      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
	      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
	      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
	      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
	      205, 206, 207, 208, 209, 214, 215, 220, 221
	    ];
	  }
	} catch (err) {
	  // swallow - we only care if `supports-color` is available; it doesn't have to be.
	}

	/**
	 * Build up the default `inspectOpts` object from the environment variables.
	 *
	 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
	 */

	exports.inspectOpts = Object.keys(process.env).filter(function (key) {
	  return /^debug_/i.test(key);
	}).reduce(function (obj, key) {
	  // camel-case
	  var prop = key
	    .substring(6)
	    .toLowerCase()
	    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

	  // coerce string value into JS value
	  var val = process.env[key];
	  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
	  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
	  else if (val === 'null') val = null;
	  else val = Number(val);

	  obj[prop] = val;
	  return obj;
	}, {});

	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */

	function useColors() {
	  return 'colors' in exports.inspectOpts
	    ? Boolean(exports.inspectOpts.colors)
	    : tty__default["default"].isatty(process.stderr.fd);
	}

	/**
	 * Map %o to `util.inspect()`, all on a single line.
	 */

	exports.formatters.o = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util__default["default"].inspect(v, this.inspectOpts)
	    .split('\n').map(function(str) {
	      return str.trim()
	    }).join(' ');
	};

	/**
	 * Map %o to `util.inspect()`, allowing multiple lines if needed.
	 */

	exports.formatters.O = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util__default["default"].inspect(v, this.inspectOpts);
	};

	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var name = this.namespace;
	  var useColors = this.useColors;

	  if (useColors) {
	    var c = this.color;
	    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
	    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

	    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
	    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
	  } else {
	    args[0] = getDate() + name + ' ' + args[0];
	  }
	}

	function getDate() {
	  if (exports.inspectOpts.hideDate) {
	    return '';
	  } else {
	    return new Date().toISOString() + ' ';
	  }
	}

	/**
	 * Invokes `util.format()` with the specified arguments and writes to stderr.
	 */

	function log() {
	  return process.stderr.write(util__default["default"].format.apply(util__default["default"], arguments) + '\n');
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  } else {
	    process.env.DEBUG = namespaces;
	  }
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  return process.env.DEBUG;
	}

	/**
	 * Init logic for `debug` instances.
	 *
	 * Create a new `inspectOpts` object in case `useColors` is set
	 * differently for a particular `debug` instance.
	 */

	function init (debug) {
	  debug.inspectOpts = {};

	  var keys = Object.keys(exports.inspectOpts);
	  for (var i = 0; i < keys.length; i++) {
	    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	  }
	}

	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */

	exports.enable(load());
	});
	node.init;
	node.log;
	node.formatArgs;
	node.save;
	node.load;
	node.useColors;
	node.colors;
	node.inspectOpts;

	var src$1 = createCommonjsModule$1(function (module) {
	/**
	 * Detect Electron renderer process, which is node, but we should
	 * treat as a browser.
	 */

	if (typeof process === 'undefined' || process.type === 'renderer') {
	  module.exports = browser$2;
	} else {
	  module.exports = node;
	}
	});

	var Writable = stream__default["default"].Writable;
	var debug = src$1("follow-redirects");

	// RFC7231§4.2.1: Of the request methods defined by this specification,
	// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
	var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

	// Create handlers that pass events from native requests
	var eventHandlers = Object.create(null);
	["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
	  eventHandlers[event] = function (arg) {
	    this._redirectable.emit(event, arg);
	  };
	});

	// An HTTP(S) request that can be redirected
	function RedirectableRequest(options, responseCallback) {
	  // Initialize the request
	  Writable.call(this);
	  options.headers = options.headers || {};
	  this._options = options;
	  this._redirectCount = 0;
	  this._redirects = [];
	  this._requestBodyLength = 0;
	  this._requestBodyBuffers = [];

	  // Since http.request treats host as an alias of hostname,
	  // but the url module interprets host as hostname plus port,
	  // eliminate the host property to avoid confusion.
	  if (options.host) {
	    // Use hostname if set, because it has precedence
	    if (!options.hostname) {
	      options.hostname = options.host;
	    }
	    delete options.host;
	  }

	  // Attach a callback if passed
	  if (responseCallback) {
	    this.on("response", responseCallback);
	  }

	  // React to responses of native requests
	  var self = this;
	  this._onNativeResponse = function (response) {
	    self._processResponse(response);
	  };

	  // Complete the URL object when necessary
	  if (!options.pathname && options.path) {
	    var searchPos = options.path.indexOf("?");
	    if (searchPos < 0) {
	      options.pathname = options.path;
	    }
	    else {
	      options.pathname = options.path.substring(0, searchPos);
	      options.search = options.path.substring(searchPos);
	    }
	  }

	  // Perform the first request
	  this._performRequest();
	}
	RedirectableRequest.prototype = Object.create(Writable.prototype);

	// Writes buffered data to the current native request
	RedirectableRequest.prototype.write = function (data, encoding, callback) {
	  // Validate input and shift parameters if necessary
	  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
	    throw new Error("data should be a string, Buffer or Uint8Array");
	  }
	  if (typeof encoding === "function") {
	    callback = encoding;
	    encoding = null;
	  }

	  // Ignore empty buffers, since writing them doesn't invoke the callback
	  // https://github.com/nodejs/node/issues/22066
	  if (data.length === 0) {
	    if (callback) {
	      callback();
	    }
	    return;
	  }
	  // Only write when we don't exceed the maximum body length
	  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
	    this._requestBodyLength += data.length;
	    this._requestBodyBuffers.push({ data: data, encoding: encoding });
	    this._currentRequest.write(data, encoding, callback);
	  }
	  // Error when we exceed the maximum body length
	  else {
	    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
	    this.abort();
	  }
	};

	// Ends the current native request
	RedirectableRequest.prototype.end = function (data, encoding, callback) {
	  // Shift parameters if necessary
	  if (typeof data === "function") {
	    callback = data;
	    data = encoding = null;
	  }
	  else if (typeof encoding === "function") {
	    callback = encoding;
	    encoding = null;
	  }

	  // Write data and end
	  var currentRequest = this._currentRequest;
	  this.write(data || "", encoding, function () {
	    currentRequest.end(null, null, callback);
	  });
	};

	// Sets a header value on the current native request
	RedirectableRequest.prototype.setHeader = function (name, value) {
	  this._options.headers[name] = value;
	  this._currentRequest.setHeader(name, value);
	};

	// Clears a header value on the current native request
	RedirectableRequest.prototype.removeHeader = function (name) {
	  delete this._options.headers[name];
	  this._currentRequest.removeHeader(name);
	};

	// Proxy all other public ClientRequest methods
	[
	  "abort", "flushHeaders", "getHeader",
	  "setNoDelay", "setSocketKeepAlive", "setTimeout",
	].forEach(function (method) {
	  RedirectableRequest.prototype[method] = function (a, b) {
	    return this._currentRequest[method](a, b);
	  };
	});

	// Proxy all public ClientRequest properties
	["aborted", "connection", "socket"].forEach(function (property) {
	  Object.defineProperty(RedirectableRequest.prototype, property, {
	    get: function () { return this._currentRequest[property]; },
	  });
	});

	// Executes the next native request (initial or redirect)
	RedirectableRequest.prototype._performRequest = function () {
	  // Load the native protocol
	  var protocol = this._options.protocol;
	  var nativeProtocol = this._options.nativeProtocols[protocol];
	  if (!nativeProtocol) {
	    this.emit("error", new Error("Unsupported protocol " + protocol));
	    return;
	  }

	  // If specified, use the agent corresponding to the protocol
	  // (HTTP and HTTPS use different types of agents)
	  if (this._options.agents) {
	    var scheme = protocol.substr(0, protocol.length - 1);
	    this._options.agent = this._options.agents[scheme];
	  }

	  // Create the native request
	  var request = this._currentRequest =
	        nativeProtocol.request(this._options, this._onNativeResponse);
	  this._currentUrl = url__default["default"].format(this._options);

	  // Set up event handlers
	  request._redirectable = this;
	  for (var event in eventHandlers) {
	    /* istanbul ignore else */
	    if (event) {
	      request.on(event, eventHandlers[event]);
	    }
	  }

	  // End a redirected request
	  // (The first request must be ended explicitly with RedirectableRequest#end)
	  if (this._isRedirect) {
	    // Write the request entity and end.
	    var i = 0;
	    var buffers = this._requestBodyBuffers;
	    (function writeNext() {
	      if (i < buffers.length) {
	        var buffer = buffers[i++];
	        request.write(buffer.data, buffer.encoding, writeNext);
	      }
	      else {
	        request.end();
	      }
	    }());
	  }
	};

	// Processes a response from the current native request
	RedirectableRequest.prototype._processResponse = function (response) {
	  // Store the redirected response
	  if (this._options.trackRedirects) {
	    this._redirects.push({
	      url: this._currentUrl,
	      headers: response.headers,
	      statusCode: response.statusCode,
	    });
	  }

	  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
	  // that further action needs to be taken by the user agent in order to
	  // fulfill the request. If a Location header field is provided,
	  // the user agent MAY automatically redirect its request to the URI
	  // referenced by the Location field value,
	  // even if the specific status code is not understood.
	  var location = response.headers.location;
	  if (location && this._options.followRedirects !== false &&
	      response.statusCode >= 300 && response.statusCode < 400) {
	    // RFC7231§6.4: A client SHOULD detect and intervene
	    // in cyclical redirections (i.e., "infinite" redirection loops).
	    if (++this._redirectCount > this._options.maxRedirects) {
	      this.emit("error", new Error("Max redirects exceeded."));
	      return;
	    }

	    // RFC7231§6.4: Automatic redirection needs to done with
	    // care for methods not known to be safe […],
	    // since the user might not wish to redirect an unsafe request.
	    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
	    // that the target resource resides temporarily under a different URI
	    // and the user agent MUST NOT change the request method
	    // if it performs an automatic redirection to that URI.
	    var header;
	    var headers = this._options.headers;
	    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
	      this._options.method = "GET";
	      // Drop a possible entity and headers related to it
	      this._requestBodyBuffers = [];
	      for (header in headers) {
	        if (/^content-/i.test(header)) {
	          delete headers[header];
	        }
	      }
	    }

	    // Drop the Host header, as the redirect might lead to a different host
	    if (!this._isRedirect) {
	      for (header in headers) {
	        if (/^host$/i.test(header)) {
	          delete headers[header];
	        }
	      }
	    }

	    // Perform the redirected request
	    var redirectUrl = url__default["default"].resolve(this._currentUrl, location);
	    debug("redirecting to", redirectUrl);
	    Object.assign(this._options, url__default["default"].parse(redirectUrl));
	    this._isRedirect = true;
	    this._performRequest();

	    // Discard the remainder of the response to avoid waiting for data
	    response.destroy();
	  }
	  else {
	    // The response is not a redirect; return it as-is
	    response.responseUrl = this._currentUrl;
	    response.redirects = this._redirects;
	    this.emit("response", response);

	    // Clean up
	    this._requestBodyBuffers = [];
	  }
	};

	// Wraps the key/value object of protocols with redirect functionality
	function wrap(protocols) {
	  // Default settings
	  var exports = {
	    maxRedirects: 21,
	    maxBodyLength: 10 * 1024 * 1024,
	  };

	  // Wrap each protocol
	  var nativeProtocols = {};
	  Object.keys(protocols).forEach(function (scheme) {
	    var protocol = scheme + ":";
	    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
	    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

	    // Executes a request, following redirects
	    wrappedProtocol.request = function (options, callback) {
	      if (typeof options === "string") {
	        options = url__default["default"].parse(options);
	        options.maxRedirects = exports.maxRedirects;
	      }
	      else {
	        options = Object.assign({
	          protocol: protocol,
	          maxRedirects: exports.maxRedirects,
	          maxBodyLength: exports.maxBodyLength,
	        }, options);
	      }
	      options.nativeProtocols = nativeProtocols;
	      assert__default["default"].equal(options.protocol, protocol, "protocol mismatch");
	      debug("options", options);
	      return new RedirectableRequest(options, callback);
	    };

	    // Executes a GET request, following redirects
	    wrappedProtocol.get = function (options, callback) {
	      var request = wrappedProtocol.request(options, callback);
	      request.end();
	      return request;
	    };
	  });
	  return exports;
	}

	// Exports
	var followRedirects = wrap({ http: http__default["default"], https: https__default["default"] });
	var wrap_1 = wrap;
	followRedirects.wrap = wrap_1;

	var _args = [
		[
			"axios@0.19.2",
			"/Users/liqingmu/work/upyun/upyun-upload-tool"
		]
	];
	var _from = "axios@0.19.2";
	var _id = "axios@0.19.2";
	var _inBundle = false;
	var _integrity = "sha512-fjgm5MvRHLhx+osE2xoekY70AhARk3a6hkN+3Io1jc00jtquGvxYlKlsFUhmUET0V5te6CcZI7lcv2Ym61mjHA==";
	var _location = "/axios";
	var _phantomChildren = {
	};
	var _requested = {
		type: "version",
		registry: true,
		raw: "axios@0.19.2",
		name: "axios",
		escapedName: "axios",
		rawSpec: "0.19.2",
		saveSpec: null,
		fetchSpec: "0.19.2"
	};
	var _requiredBy = [
		"/upyun"
	];
	var _resolved = "https://registry.npmjs.org/axios/-/axios-0.19.2.tgz";
	var _spec = "0.19.2";
	var _where = "/Users/liqingmu/work/upyun/upyun-upload-tool";
	var author$1 = {
		name: "Matt Zabriskie"
	};
	var browser$1 = {
		"./lib/adapters/http.js": "./lib/adapters/xhr.js"
	};
	var bugs$1 = {
		url: "https://github.com/axios/axios/issues"
	};
	var bundlesize = [
		{
			path: "./dist/axios.min.js",
			threshold: "5kB"
		}
	];
	var dependencies$1 = {
		"follow-redirects": "1.5.10"
	};
	var description$1 = "Promise based HTTP client for the browser and node.js";
	var devDependencies$1 = {
		bundlesize: "^0.17.0",
		coveralls: "^3.0.0",
		"es6-promise": "^4.2.4",
		grunt: "^1.0.2",
		"grunt-banner": "^0.6.0",
		"grunt-cli": "^1.2.0",
		"grunt-contrib-clean": "^1.1.0",
		"grunt-contrib-watch": "^1.0.0",
		"grunt-eslint": "^20.1.0",
		"grunt-karma": "^2.0.0",
		"grunt-mocha-test": "^0.13.3",
		"grunt-ts": "^6.0.0-beta.19",
		"grunt-webpack": "^1.0.18",
		"istanbul-instrumenter-loader": "^1.0.0",
		"jasmine-core": "^2.4.1",
		karma: "^1.3.0",
		"karma-chrome-launcher": "^2.2.0",
		"karma-coverage": "^1.1.1",
		"karma-firefox-launcher": "^1.1.0",
		"karma-jasmine": "^1.1.1",
		"karma-jasmine-ajax": "^0.1.13",
		"karma-opera-launcher": "^1.0.0",
		"karma-safari-launcher": "^1.0.0",
		"karma-sauce-launcher": "^1.2.0",
		"karma-sinon": "^1.0.5",
		"karma-sourcemap-loader": "^0.3.7",
		"karma-webpack": "^1.7.0",
		"load-grunt-tasks": "^3.5.2",
		minimist: "^1.2.0",
		mocha: "^5.2.0",
		sinon: "^4.5.0",
		typescript: "^2.8.1",
		"url-search-params": "^0.10.0",
		webpack: "^1.13.1",
		"webpack-dev-server": "^1.14.1"
	};
	var homepage$1 = "https://github.com/axios/axios";
	var keywords$1 = [
		"xhr",
		"http",
		"ajax",
		"promise",
		"node"
	];
	var license$1 = "MIT";
	var main$1 = "index.js";
	var name$1 = "axios";
	var repository$1 = {
		type: "git",
		url: "git+https://github.com/axios/axios.git"
	};
	var scripts$1 = {
		build: "NODE_ENV=production grunt build",
		coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
		examples: "node ./examples/server.js",
		fix: "eslint --fix lib/**/*.js",
		postversion: "git push && git push --tags",
		preversion: "npm test",
		start: "node ./sandbox/server.js",
		test: "grunt test && bundlesize",
		version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
	};
	var typings = "./index.d.ts";
	var version$1 = "0.19.2";
	var _package = {
		_args: _args,
		_from: _from,
		_id: _id,
		_inBundle: _inBundle,
		_integrity: _integrity,
		_location: _location,
		_phantomChildren: _phantomChildren,
		_requested: _requested,
		_requiredBy: _requiredBy,
		_resolved: _resolved,
		_spec: _spec,
		_where: _where,
		author: author$1,
		browser: browser$1,
		bugs: bugs$1,
		bundlesize: bundlesize,
		dependencies: dependencies$1,
		description: description$1,
		devDependencies: devDependencies$1,
		homepage: homepage$1,
		keywords: keywords$1,
		license: license$1,
		main: main$1,
		name: name$1,
		repository: repository$1,
		scripts: scripts$1,
		typings: typings,
		version: version$1
	};

	var _package$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		_args: _args,
		_from: _from,
		_id: _id,
		_inBundle: _inBundle,
		_integrity: _integrity,
		_location: _location,
		_phantomChildren: _phantomChildren,
		_requested: _requested,
		_requiredBy: _requiredBy,
		_resolved: _resolved,
		_spec: _spec,
		_where: _where,
		author: author$1,
		browser: browser$1,
		bugs: bugs$1,
		bundlesize: bundlesize,
		dependencies: dependencies$1,
		description: description$1,
		devDependencies: devDependencies$1,
		homepage: homepage$1,
		keywords: keywords$1,
		license: license$1,
		main: main$1,
		name: name$1,
		repository: repository$1,
		scripts: scripts$1,
		typings: typings,
		version: version$1,
		'default': _package
	});

	var pkg$1 = getCjsExportFromNamespace(_package$1);

	var httpFollow = followRedirects.http;
	var httpsFollow = followRedirects.https;






	var isHttps = /https:?/;

	/*eslint consistent-return:0*/
	var http_1 = function httpAdapter(config) {
	  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
	    var resolve = function resolve(value) {
	      resolvePromise(value);
	    };
	    var reject = function reject(value) {
	      rejectPromise(value);
	    };
	    var data = config.data;
	    var headers = config.headers;

	    // Set User-Agent (required by some servers)
	    // Only set header if it hasn't been set in config
	    // See https://github.com/axios/axios/issues/69
	    if (!headers['User-Agent'] && !headers['user-agent']) {
	      headers['User-Agent'] = 'axios/' + pkg$1.version;
	    }

	    if (data && !utils$1.isStream(data)) {
	      if (Buffer.isBuffer(data)) ; else if (utils$1.isArrayBuffer(data)) {
	        data = Buffer.from(new Uint8Array(data));
	      } else if (utils$1.isString(data)) {
	        data = Buffer.from(data, 'utf-8');
	      } else {
	        return reject(createError(
	          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
	          config
	        ));
	      }

	      // Add Content-Length header if data exists
	      headers['Content-Length'] = data.length;
	    }

	    // HTTP basic authentication
	    var auth = undefined;
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      auth = username + ':' + password;
	    }

	    // Parse url
	    var fullPath = buildFullPath(config.baseURL, config.url);
	    var parsed = url__default["default"].parse(fullPath);
	    var protocol = parsed.protocol || 'http:';

	    if (!auth && parsed.auth) {
	      var urlAuth = parsed.auth.split(':');
	      var urlUsername = urlAuth[0] || '';
	      var urlPassword = urlAuth[1] || '';
	      auth = urlUsername + ':' + urlPassword;
	    }

	    if (auth) {
	      delete headers.Authorization;
	    }

	    var isHttpsRequest = isHttps.test(protocol);
	    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

	    var options = {
	      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
	      method: config.method.toUpperCase(),
	      headers: headers,
	      agent: agent,
	      agents: { http: config.httpAgent, https: config.httpsAgent },
	      auth: auth
	    };

	    if (config.socketPath) {
	      options.socketPath = config.socketPath;
	    } else {
	      options.hostname = parsed.hostname;
	      options.port = parsed.port;
	    }

	    var proxy = config.proxy;
	    if (!proxy && proxy !== false) {
	      var proxyEnv = protocol.slice(0, -1) + '_proxy';
	      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
	      if (proxyUrl) {
	        var parsedProxyUrl = url__default["default"].parse(proxyUrl);
	        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
	        var shouldProxy = true;

	        if (noProxyEnv) {
	          var noProxy = noProxyEnv.split(',').map(function trim(s) {
	            return s.trim();
	          });

	          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
	            if (!proxyElement) {
	              return false;
	            }
	            if (proxyElement === '*') {
	              return true;
	            }
	            if (proxyElement[0] === '.' &&
	                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
	              return true;
	            }

	            return parsed.hostname === proxyElement;
	          });
	        }


	        if (shouldProxy) {
	          proxy = {
	            host: parsedProxyUrl.hostname,
	            port: parsedProxyUrl.port
	          };

	          if (parsedProxyUrl.auth) {
	            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
	            proxy.auth = {
	              username: proxyUrlAuth[0],
	              password: proxyUrlAuth[1]
	            };
	          }
	        }
	      }
	    }

	    if (proxy) {
	      options.hostname = proxy.host;
	      options.host = proxy.host;
	      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
	      options.port = proxy.port;
	      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

	      // Basic proxy authorization
	      if (proxy.auth) {
	        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
	        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
	      }
	    }

	    var transport;
	    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
	    if (config.transport) {
	      transport = config.transport;
	    } else if (config.maxRedirects === 0) {
	      transport = isHttpsProxy ? https__default["default"] : http__default["default"];
	    } else {
	      if (config.maxRedirects) {
	        options.maxRedirects = config.maxRedirects;
	      }
	      transport = isHttpsProxy ? httpsFollow : httpFollow;
	    }

	    if (config.maxContentLength && config.maxContentLength > -1) {
	      options.maxBodyLength = config.maxContentLength;
	    }

	    // Create the request
	    var req = transport.request(options, function handleResponse(res) {
	      if (req.aborted) return;

	      // uncompress the response body transparently if required
	      var stream = res;
	      switch (res.headers['content-encoding']) {
	      /*eslint default-case:0*/
	      case 'gzip':
	      case 'compress':
	      case 'deflate':
	        // add the unzipper to the body stream processing pipeline
	        stream = (res.statusCode === 204) ? stream : stream.pipe(zlib__default["default"].createUnzip());

	        // remove the content-encoding in order to not confuse downstream operations
	        delete res.headers['content-encoding'];
	        break;
	      }

	      // return the last request in case of redirects
	      var lastRequest = res.req || req;

	      var response = {
	        status: res.statusCode,
	        statusText: res.statusMessage,
	        headers: res.headers,
	        config: config,
	        request: lastRequest
	      };

	      if (config.responseType === 'stream') {
	        response.data = stream;
	        settle(resolve, reject, response);
	      } else {
	        var responseBuffer = [];
	        stream.on('data', function handleStreamData(chunk) {
	          responseBuffer.push(chunk);

	          // make sure the content length is not over the maxContentLength if specified
	          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
	            stream.destroy();
	            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
	              config, null, lastRequest));
	          }
	        });

	        stream.on('error', function handleStreamError(err) {
	          if (req.aborted) return;
	          reject(enhanceError(err, config, null, lastRequest));
	        });

	        stream.on('end', function handleStreamEnd() {
	          var responseData = Buffer.concat(responseBuffer);
	          if (config.responseType !== 'arraybuffer') {
	            responseData = responseData.toString(config.responseEncoding);
	          }

	          response.data = responseData;
	          settle(resolve, reject, response);
	        });
	      }
	    });

	    // Handle errors
	    req.on('error', function handleRequestError(err) {
	      if (req.aborted) return;
	      reject(enhanceError(err, config, null, req));
	    });

	    // Handle request timeout
	    if (config.timeout) {
	      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
	      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
	      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
	      // And then these socket which be hang up will devoring CPU little by little.
	      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
	      req.setTimeout(config.timeout, function handleRequestTimeout() {
	        req.abort();
	        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
	      });
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (req.aborted) return;

	        req.abort();
	        reject(cancel);
	      });
	    }

	    // Send the request
	    if (utils$1.isStream(data)) {
	      data.on('error', function handleStreamError(err) {
	        reject(enhanceError(err, config, null, req));
	      }).pipe(req);
	    } else {
	      req.end(data);
	    }
	  });
	};

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils$1.isUndefined(headers) && utils$1.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = xhr;
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = http_1;
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils$1.isFormData(data) ||
	      utils$1.isArrayBuffer(data) ||
	      utils$1.isBuffer(data) ||
	      utils$1.isStream(data) ||
	      utils$1.isFile(data) ||
	      utils$1.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils$1.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils$1.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils$1.isObject(data)) {
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

	utils$1.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils$1.merge(DEFAULT_CONTENT_TYPE);
	});

	var defaults_1 = defaults;

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
	var dispatchRequest = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils$1.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );

	  utils$1.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults_1.adapter;

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

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	var mergeConfig = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};

	  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
	  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
	  var defaultToConfig2Keys = [
	    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
	    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
	    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
	    'httpsAgent', 'cancelToken', 'socketPath'
	  ];

	  utils$1.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    }
	  });

	  utils$1.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
	    if (utils$1.isObject(config2[prop])) {
	      config[prop] = utils$1.deepMerge(config1[prop], config2[prop]);
	    } else if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (utils$1.isObject(config1[prop])) {
	      config[prop] = utils$1.deepMerge(config1[prop]);
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });

	  utils$1.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });

	  var axiosKeys = valueFromConfig2Keys
	    .concat(mergeDeepPropertiesKeys)
	    .concat(defaultToConfig2Keys);

	  var otherKeys = Object
	    .keys(config2)
	    .filter(function filterAxiosKeys(key) {
	      return axiosKeys.indexOf(key) === -1;
	    });

	  utils$1.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });

	  return config;
	};

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager_1(),
	    response: new InterceptorManager_1()
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
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
	  }

	  config = mergeConfig(this.defaults, config);

	  // Set config.method
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }

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

	Axios.prototype.getUri = function getUri(config) {
	  config = mergeConfig(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};

	// Provide aliases for supported request methods
	utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils$1.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils$1.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	var Axios_1 = Axios;

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

	var Cancel_1 = Cancel;

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

	    token.reason = new Cancel_1(message);
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

	var CancelToken_1 = CancelToken;

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
	var spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios_1(defaultConfig);
	  var instance = bind(Axios_1.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils$1.extend(instance, Axios_1.prototype, context);

	  // Copy context to instance
	  utils$1.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios$1 = createInstance(defaults_1);

	// Expose Axios class to allow class inheritance
	axios$1.Axios = Axios_1;

	// Factory for creating new instances
	axios$1.create = function create(instanceConfig) {
	  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios$1.Cancel = Cancel_1;
	axios$1.CancelToken = CancelToken_1;
	axios$1.isCancel = isCancel;

	// Expose all/spread
	axios$1.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios$1.spread = spread;

	var axios_1 = axios$1;

	// Allow use of default import syntax in TypeScript
	var default_1 = axios$1;
	axios_1.default = default_1;

	var axios = axios_1;

	/**
	  * UPYUN js-sdk 3.4.4
	  * (c) 2020
	  * @license MIT
	  */

	// NOTE: choose node.js first
	// process is defined in client test

	var isBrowser = typeof window !== 'undefined' && (typeof process === 'undefined' || process.title === 'browser');

	var PARTSIZE = 1024 * 1024;

	var isPromise_1 = isPromise;

	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var punycode = createCommonjsModule(function (module, exports) {
	/*! https://mths.be/punycode v1.3.2 by @mathias */
	(function(root) {

		/** Detect free variables */
		var freeExports = exports &&
			!exports.nodeType && exports;
		var freeModule = module &&
			!module.nodeType && module;
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(commonjsGlobal));
	});

	var util = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var decode = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	var encode = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var querystring = createCommonjsModule(function (module, exports) {

	exports.decode = exports.parse = decode;
	exports.encode = exports.stringify = encode;
	});

	var parse = urlParse;
	var resolve = urlResolve;
	var resolveObject = urlResolveObject;
	var format = urlFormat;

	var Url_1 = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i;
	var portPattern = /:[0-9]*$/;
	var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
	var delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'];
	var unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims);
	var autoEscape = ['\''].concat(unwise);
	var nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape);
	var hostEndingChars = ['/', '?', '#'];
	var hostnameMaxLen = 255;
	var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
	var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
	var unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    };
	var hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    };
	var slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    };

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	var url = {
		parse: parse,
		resolve: resolve,
		resolveObject: resolveObject,
		format: format,
		Url: Url_1
	};

	var adapter = axios.defaults.adapter;

	axios.defaults.adapter = function () {
	  // NOTE: in electron environment, support http and xhr both, use http adapter first
	  if (isBrowser) {
	    return adapter;
	  }

	  var http = require('axios/lib/adapters/http');
	  return http;
	}();

	var createReq = function (endpoint, service, getHeaderSign) {
	  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	      proxy = _ref.proxy;

	  var req = axios.create({
	    baseURL: endpoint + '/' + service.serviceName,
	    maxRedirects: 0,
	    proxy: proxy
	  });

	  req.interceptors.request.use(function (config) {
	    var method = config.method.toUpperCase();
	    var path = url.resolve('/', encodeURI(config.url || ''));

	    if (path.indexOf(config.baseURL) === 0) {
	      path = path.substring(config.baseURL.length);
	    }
	    config.url = path;
	    var headerSign = getHeaderSign(service, method, path, config.headers['Content-MD5']);
	    headerSign = isPromise_1(headerSign) ? headerSign : Promise.resolve(headerSign);

	    return headerSign.then(function (headers) {
	      config.headers.common = headers;
	      return Promise.resolve(config);
	    });
	  }, function (error) {
	    throw new Error('upyun - request failed: ' + error.message);
	  });

	  req.interceptors.response.use(function (response) {
	    return response;
	  }, function (error) {
	    var response = error.response;

	    if (typeof response === 'undefined') {
	      throw error;
	    }

	    if (response.status !== 404) {
	      var err = new Error('upyun - response error: ' + error.message);
	      if (error.response.data && error.response.data.code) {
	        err.code = error.response.data.code;
	      }
	      throw err;
	    } else {
	      return response;
	    }
	  });
	  return req;
	};

	function readBlockAsync(localFile, start, end) {
	  return new Promise(function (resolve, reject) {
	    var slice = localFile.slice || localFile.mozSlice || localFile.webkitSlice;
	    if (slice) {
	      return resolve(slice.call(localFile, start, end));
	    } else {
	      return reject(new Error('not support File type!'));
	    }
	  });
	}

	var utils = {
	  readBlockAsync: readBlockAsync
	};

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	function resolve$1() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : '/';

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	}

	// path.normalize(path)
	// posix version
	function normalize(path) {
	  var isPathAbsolute = isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isPathAbsolute).join('/');

	  if (!path && !isPathAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isPathAbsolute ? '/' : '') + path;
	}

	// posix version
	function isAbsolute(path) {
	  return path.charAt(0) === '/';
	}

	// posix version
	function join() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	}


	// path.relative(from, to)
	// posix version
	function relative(from, to) {
	  from = resolve$1(from).substr(1);
	  to = resolve$1(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	}

	var sep = '/';
	var delimiter = ':';

	function dirname(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	}

	function basename(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	}


	function extname(path) {
	  return splitPath(path)[3];
	}
	var path = {
	  extname: extname,
	  basename: basename,
	  dirname: dirname,
	  sep: sep,
	  delimiter: delimiter,
	  relative: relative,
	  join: join,
	  isAbsolute: isAbsolute,
	  normalize: normalize,
	  resolve: resolve$1
	};
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b' ?
	    function (str, start, len) { return str.substr(start, len) } :
	    function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    };

	function formUpload(remoteUrl, localFile, _ref) {
	  var authorization = _ref.authorization,
	      policy = _ref.policy;

	  var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	      filename = _ref2.filename;

	  var data = new FormData();
	  data.append('authorization', authorization);
	  data.append('policy', policy);
	  if (typeof localFile === 'string') {
	    localFile = new Blob([localFile], { type: 'text/plain' });
	  }

	  filename = filename ? path.basename(filename) : filename;
	  data.append('file', localFile, filename);
	  return axios.post(remoteUrl, data).then(function (_ref3) {
	    var status = _ref3.status,
	        data = _ref3.data;

	    if (status === 200) {
	      return Promise.resolve(data);
	    }

	    return false;
	  });
	}

	/* OAuthSimple
	* A simpler version of OAuth
	*
	* author:     jr conlin
	* mail:       src@anticipatr.com
	* copyright:  unitedHeroes.net
	* version:    1.0
	* url:        http://unitedHeroes.net/OAuthSimple
	*
	* Copyright (c) 2009, unitedHeroes.net
	* All rights reserved.
	*
	* Redistribution and use in source and binary forms, with or without
	* modification, are permitted provided that the following conditions are met:
	*     * Redistributions of source code must retain the above copyright
	*       notice, this list of conditions and the following disclaimer.
	*     * Redistributions in binary form must reproduce the above copyright
	*       notice, this list of conditions and the following disclaimer in the
	*       documentation and/or other materials provided with the distribution.
	*     * Neither the name of the unitedHeroes.net nor the
	*       names of its contributors may be used to endorse or promote products
	*       derived from this software without specific prior written permission.
	*
	* THIS SOFTWARE IS PROVIDED BY UNITEDHEROES.NET ''AS IS'' AND ANY
	* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	* DISCLAIMED. IN NO EVENT SHALL UNITEDHEROES.NET BE LIABLE FOR ANY
	* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	/**
	* Computes a HMAC-SHA1 code.
	*
	* @param {string} k Secret key.
	* @param {string} d Data to be hashed.
	* @return {string} The hashed string.
	*/
	function b64_hmac_sha1(k,d,_p,_z){
	  // heavily optimized and compressed version of http://pajhome.org.uk/crypt/md5/sha1.js
	  // _p = b64pad, _z = character size; not used here but I left them available just in case
	  if(!_p){_p='=';}if(!_z){_z=8;}function _f(t,b,c,d){if(t<20){return (b&c)|((~b)&d);}if(t<40){return b^c^d;}if(t<60){return (b&c)|(b&d)|(c&d);}return b^c^d;}function _k(t){return (t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514;}function _s(x,y){var l=(x&0xFFFF)+(y&0xFFFF),m=(x>>16)+(y>>16)+(l>>16);return (m<<16)|(l&0xFFFF);}function _r(n,c){return (n<<c)|(n>>>(32-c));}function _c(x,l){x[l>>5]|=0x80<<(24-l%32);x[((l+64>>9)<<4)+15]=l;var w=[80],a=1732584193,b=-271733879,c=-1732584194,d=271733878,e=-1009589776;for(var i=0;i<x.length;i+=16){var o=a,p=b,q=c,r=d,s=e;for(var j=0;j<80;j++){if(j<16){w[j]=x[i+j];}else {w[j]=_r(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);}var t=_s(_s(_r(a,5),_f(j,b,c,d)),_s(_s(e,w[j]),_k(j)));e=d;d=c;c=_r(b,30);b=a;a=t;}a=_s(a,o);b=_s(b,p);c=_s(c,q);d=_s(d,r);e=_s(e,s);}return [a,b,c,d,e];}function _b(s){var b=[],m=(1<<_z)-1;for(var i=0;i<s.length*_z;i+=_z){b[i>>5]|=(s.charCodeAt(i/8)&m)<<(32-_z-i%32);}return b;}function _h(k,d){var b=_b(k);if(b.length>16){b=_c(b,k.length*_z);}var p=[16],o=[16];for(var i=0;i<16;i++){p[i]=b[i]^0x36363636;o[i]=b[i]^0x5C5C5C5C;}var h=_c(p.concat(_b(d)),512+d.length*_z);return _c(o.concat(h),512+160);}function _n(b){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s='';for(var i=0;i<b.length*4;i+=3){var r=(((b[i>>2]>>8*(3-i%4))&0xFF)<<16)|(((b[i+1>>2]>>8*(3-(i+1)%4))&0xFF)<<8)|((b[i+2>>2]>>8*(3-(i+2)%4))&0xFF);for(var j=0;j<4;j++){if(i*8+j*6>b.length*32){s+=_p;}else {s+=t.charAt((r>>6*(3-j))&0x3F);}}}return s;}function _x(k,d){return _n(_h(k,d));}return _x(k,d);
	}
	var hmacsha1 = b64_hmac_sha1;

	var base64 = createCommonjsModule(function (module, exports) {
	/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
	(function(root) {

		// Detect free variables `exports`.
		var freeExports = exports;

		// Detect free variable `module`.
		var freeModule = module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code, and use
		// it as `root`.
		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var InvalidCharacterError = function(message) {
			this.message = message;
		};
		InvalidCharacterError.prototype = new Error;
		InvalidCharacterError.prototype.name = 'InvalidCharacterError';

		var error = function(message) {
			// Note: the error messages used throughout this file match those used by
			// the native `atob`/`btoa` implementation in Chromium.
			throw new InvalidCharacterError(message);
		};

		var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		// http://whatwg.org/html/common-microsyntaxes.html#space-character
		var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

		// `decode` is designed to be fully compatible with `atob` as described in the
		// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
		// The optimized base64-decoding algorithm used is based on @atk’s excellent
		// implementation. https://gist.github.com/atk/1020396
		var decode = function(input) {
			input = String(input)
				.replace(REGEX_SPACE_CHARACTERS, '');
			var length = input.length;
			if (length % 4 == 0) {
				input = input.replace(/==?$/, '');
				length = input.length;
			}
			if (
				length % 4 == 1 ||
				// http://whatwg.org/C#alphanumeric-ascii-characters
				/[^+a-zA-Z0-9/]/.test(input)
			) {
				error(
					'Invalid character: the string to be decoded is not correctly encoded.'
				);
			}
			var bitCounter = 0;
			var bitStorage;
			var buffer;
			var output = '';
			var position = -1;
			while (++position < length) {
				buffer = TABLE.indexOf(input.charAt(position));
				bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
				// Unless this is the first of a group of 4 characters…
				if (bitCounter++ % 4) {
					// …convert the first 8 bits to a single ASCII character.
					output += String.fromCharCode(
						0xFF & bitStorage >> (-2 * bitCounter & 6)
					);
				}
			}
			return output;
		};

		// `encode` is designed to be fully compatible with `btoa` as described in the
		// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
		var encode = function(input) {
			input = String(input);
			if (/[^\0-\xFF]/.test(input)) {
				// Note: no need to special-case astral symbols here, as surrogates are
				// matched, and the input is supposed to only contain ASCII anyway.
				error(
					'The string to be encoded contains characters outside of the ' +
					'Latin1 range.'
				);
			}
			var padding = input.length % 3;
			var output = '';
			var position = -1;
			var a;
			var b;
			var c;
			var buffer;
			// Make sure any padding is handled outside of the loop.
			var length = input.length - padding;

			while (++position < length) {
				// Read three bytes, i.e. 24 bits.
				a = input.charCodeAt(position) << 16;
				b = input.charCodeAt(++position) << 8;
				c = input.charCodeAt(++position);
				buffer = a + b + c;
				// Turn the 24 bits into four chunks of 6 bits each, and append the
				// matching character for each of them to the output.
				output += (
					TABLE.charAt(buffer >> 18 & 0x3F) +
					TABLE.charAt(buffer >> 12 & 0x3F) +
					TABLE.charAt(buffer >> 6 & 0x3F) +
					TABLE.charAt(buffer & 0x3F)
				);
			}

			if (padding == 2) {
				a = input.charCodeAt(position) << 8;
				b = input.charCodeAt(++position);
				buffer = a + b;
				output += (
					TABLE.charAt(buffer >> 10) +
					TABLE.charAt((buffer >> 4) & 0x3F) +
					TABLE.charAt((buffer << 2) & 0x3F) +
					'='
				);
			} else if (padding == 1) {
				buffer = input.charCodeAt(position);
				output += (
					TABLE.charAt(buffer >> 2) +
					TABLE.charAt((buffer << 4) & 0x3F) +
					'=='
				);
			}

			return output;
		};

		var base64 = {
			'encode': encode,
			'decode': decode,
			'version': '0.1.0'
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = base64;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (var key in base64) {
					base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.base64 = base64;
		}

	}(commonjsGlobal));
	});

	var name = "upyun";
	var version = "3.4.4";
	var description = "UPYUN js sdk";
	var main = "dist/upyun.common.js";
	var module$1 = "dist/upyun.esm.js";
	var scripts = { "build": "node build/build.js", "lint": "eslint .", "test": "npm run test:server && npm run test:client", "test:client": "karma start tests/karma.conf.js", "test:server": "mocha --compilers js:babel-register tests/server/*", "preversion": "npm run lint && npm run test", "version": "npm run build && git add -A dist", "postversion": "git push && git push --tags" };
	var repository = { "type": "git", "url": "git@github.com:upyun/node-sdk.git" };
	var engines = { "node": ">=8.0.0" };
	var keywords = ["upyun", "js", "nodejs", "sdk", "cdn", "cloud", "storage"];
	var author = "Leigh";
	var license = "MIT";
	var bugs = { "url": "https://github.com/upyun/node-sdk/issues" };
	var homepage = "https://github.com/upyun/node-sdk";
	var contributors = [{ "name": "yejingx", "email": "yejingx@gmail.com" }, { "name": "Leigh", "email": "i@zhuli.me" }, { "name": "kaidiren", "email": "kaidiren@gmail.com" }, { "name": "Gaara", "email": "sabakugaara@users.noreply.github.com" }];
	var devDependencies = { "babel-cli": "^6.24.1", "babel-loader": "^7.0.0", "babel-plugin-external-helpers": "^6.22.0", "babel-plugin-transform-runtime": "^6.23.0", "babel-preset-env": "^1.4.0", "babel-register": "^6.24.1", "builtin-modules": "^3.1.0", "chai": "^3.5.0", "delay": "^4.2.0", "eslint": "^5.16.0", "istanbul": "^0.4.3", "karma": "^1.7.0", "karma-chrome-launcher": "^2.1.1", "karma-mocha": "^1.3.0", "karma-sourcemap-loader": "^0.3.7", "karma-webpack": "^2.0.3", "mocha": "^3.4.1", "rollup": "^0.41.6", "rollup-plugin-alias": "^1.3.1", "rollup-plugin-babel": "^2.7.1", "rollup-plugin-commonjs": "^8.0.2", "rollup-plugin-json": "^2.1.1", "rollup-plugin-node-builtins": "^2.1.2", "rollup-plugin-node-resolve": "^3.0.0", "should": "^9.0.2", "uglify-js": "^3.0.11", "webpack": "^2.5.1" };
	var dependencies = { "axios": "^0.19.1", "base-64": "^0.1.0", "form-data": "^3.0.0", "hmacsha1": "^1.0.0", "is-promise": "^2.1.0", "md5": "^2.2.1", "mime-types": "^2.1.15" };
	var browser = { "./upyun/utils.js": "./upyun/browser-utils.js", "./upyun/form-upload.js": "./upyun/browser-form-upload.js" };
	var pkg = {
		name: name,
		version: version,
		description: description,
		main: main,
		module: module$1,
		scripts: scripts,
		repository: repository,
		engines: engines,
		keywords: keywords,
		author: author,
		license: license,
		bugs: bugs,
		homepage: homepage,
		contributors: contributors,
		devDependencies: devDependencies,
		dependencies: dependencies,
		browser: browser
	};

	var crypt = createCommonjsModule(function (module) {
	(function() {
	  var base64map
	      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

	  crypt = {
	    // Bit-wise rotation left
	    rotl: function(n, b) {
	      return (n << b) | (n >>> (32 - b));
	    },

	    // Bit-wise rotation right
	    rotr: function(n, b) {
	      return (n << (32 - b)) | (n >>> b);
	    },

	    // Swap big-endian to little-endian and vice versa
	    endian: function(n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }

	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++)
	        n[i] = crypt.endian(n[i]);
	      return n;
	    },

	    // Generate an array of any length of random bytes
	    randomBytes: function(n) {
	      for (var bytes = []; n > 0; n--)
	        bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },

	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function(bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
	        words[b >>> 5] |= bytes[i] << (24 - b % 32);
	      return words;
	    },

	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function(words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
	        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a hex string
	    bytesToHex: function(bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },

	    // Convert a hex string to a byte array
	    hexToBytes: function(hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2)
	        bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },

	    // Convert a byte array to a base-64 string
	    bytesToBase64: function(bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
	        for (var j = 0; j < 4; j++)
	          if (i * 8 + j * 6 <= bytes.length * 8)
	            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
	          else
	            base64.push('=');
	      }
	      return base64.join('');
	    },

	    // Convert a base-64 string to a byte array
	    base64ToBytes: function(base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
	          imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
	            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
	            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	      }
	      return bytes;
	    }
	  };

	  module.exports = crypt;
	})();
	});

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },

	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      for (var bytes = [], i = 0; i < str.length; i++)
	        bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++)
	        str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};

	var charenc_1 = charenc;

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */

	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	var isBuffer_1 = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	};

	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}

	var md5 = createCommonjsModule(function (module) {
	(function(){
	  var crypt$$1 = crypt,
	      utf8 = charenc_1.utf8,
	      isBuffer = isBuffer_1,
	      bin = charenc_1.bin,

	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String)
	      if (options && options.encoding === 'binary')
	        message = bin.stringToBytes(message);
	      else
	        message = utf8.stringToBytes(message);
	    else if (isBuffer(message))
	      message = Array.prototype.slice.call(message, 0);
	    else if (!Array.isArray(message))
	      message = message.toString();
	    // else, assume byte array already

	    var m = crypt$$1.bytesToWords(message),
	        l = message.length * 8,
	        a =  1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d =  271733878;

	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
	             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
	    }

	    // Padding
	    m[l >>> 5] |= 0x80 << (l % 32);
	    m[(((l + 64) >>> 9) << 4) + 14] = l;

	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;

	    for (var i = 0; i < m.length; i += 16) {

	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;

	      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
	      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
	      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
	      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
	      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
	      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i+10], 17, -42063);
	      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
	      d = FF(d, a, b, c, m[i+13], 12, -40341101);
	      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

	      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
	      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
	      c = GG(c, d, a, b, m[i+11], 14,  643717713);
	      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
	      d = GG(d, a, b, c, m[i+10],  9,  38016083);
	      c = GG(c, d, a, b, m[i+15], 14, -660478335);
	      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
	      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
	      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
	      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
	      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
	      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
	      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

	      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
	      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
	      b = HH(b, c, d, a, m[i+14], 23, -35309556);
	      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
	      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
	      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i+13],  4,  681279174);
	      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
	      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
	      d = HH(d, a, b, c, m[i+12], 11, -421815835);
	      c = HH(c, d, a, b, m[i+15], 16,  530742520);
	      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

	      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
	      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
	      c = II(c, d, a, b, m[i+14], 15, -1416354905);
	      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
	      a = II(a, b, c, d, m[i+12],  6,  1700485571);
	      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i+10], 15, -1051523);
	      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
	      d = II(d, a, b, c, m[i+15], 10, -30611744);
	      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i+13], 21,  1309151649);
	      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
	      d = II(d, a, b, c, m[i+11], 10, -1120210379);
	      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
	      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

	      a = (a + aa) >>> 0;
	      b = (b + bb) >>> 0;
	      c = (c + cc) >>> 0;
	      d = (d + dd) >>> 0;
	    }

	    return crypt$$1.endian([a, b, c, d]);
	  };

	  // Auxiliary functions
	  md5._ff  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._gg  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._hh  = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._ii  = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };

	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;

	  module.exports = function (message, options) {
	    if (message === undefined || message === null)
	      throw new Error('Illegal argument ' + message);

	    var digestbytes = crypt$$1.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes :
	        options && options.asString ? bin.bytesToString(digestbytes) :
	        crypt$$1.bytesToHex(digestbytes);
	  };

	})();
	});

	/**
	 * generate head sign for rest api
	 * {@link http://docs.upyun.com/api/authorization/#_2}
	 * @param {object} service
	 * @param {string} path - storage path on upyun server, e.g: /your/dir/example.txt
	 * @param {string} contentMd5 - md5 of the file that will be uploaded
	 */
	function getHeaderSign(service, method, path) {
	  var contentMd5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  var date = new Date().toGMTString();
	  path = '/' + service.serviceName + path;
	  var sign = genSign(service, {
	    method: method,
	    path: path,
	    date: date,
	    contentMd5: contentMd5
	  });
	  return {
	    'Authorization': sign,
	    'X-Date': date
	  };
	}

	/**
	 * generate signature string which can be used in head sign or body sign
	 * {@link http://docs.upyun.com/api/authorization/#_2}
	 * @param {object} service
	 * @param {object} options - must include key is method, path
	 */
	function genSign(service, options) {
	  var method = options.method,
	      path = options.path;


	  var data = [method, path];

	  // optional params
	  ['date', 'policy', 'contentMd5'].forEach(function (item) {
	    if (options[item]) {
	      data.push(options[item]);
	    }
	  });

	  // hmacsha1 return base64 encoded string
	  var sign = hmacsha1(service.password, data.join('&'));
	  return 'UPYUN ' + service.operatorName + ':' + sign;
	}

	/**
	 * get policy and authorization for form api
	 * @param {object} service
	 * @param {object} - other optional params @see http://docs.upyun.com/api/form_api/#_2
	 */
	function getPolicyAndAuthorization(service, params) {
	  params['service'] = service.serviceName;
	  if (typeof params['save-key'] === 'undefined') {
	    throw new Error('upyun - calclate body sign need save-key');
	  }

	  if (typeof params['expiration'] === 'undefined') {
	    // default 30 minutes
	    params['expiration'] = parseInt(new Date() / 1000 + 30 * 60, 10);
	  }

	  var policy = base64.encode(JSON.stringify(params));
	  var authorization = genSign(service, {
	    method: 'POST',
	    path: '/' + service.serviceName,
	    policy: policy,
	    contentMd5: params['content-md5']
	  });
	  return {
	    policy: policy,
	    authorization: authorization
	  };
	}

	/**
	 * get Authorization and Date for purge api
	 * {@link http://docs.upyun.com/api/purge/#_1}
	 *
	 * @param {!object} service
	 * @param {!string[]} urls
	 *
	 */
	function getPurgeHeaderSign(service, urls) {
	  var date = new Date().toGMTString();
	  var str = urls.join('\n');
	  var sign = md5(str + '&' + service.serviceName + '&' + date + '&' + service.password);

	  return {
	    'Authorization': 'UpYun ' + service.serviceName + ':' + service.operatorName + ':' + sign,
	    'Date': date,
	    'User-Agent': 'Js-Sdk/' + pkg.version
	  };
	}

	var sign = {
	  genSign: genSign,
	  getHeaderSign: getHeaderSign,
	  getPolicyAndAuthorization: getPolicyAndAuthorization,
	  getPurgeHeaderSign: getPurgeHeaderSign
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();



























	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	/**
	 * @class
	 */

	var Upyun = function () {
	  /**
	   * @param {object} service - a instance of Service class
	   * @param {object} params - optional params
	   * @param {callback} getHeaderSign - callback function to get header sign
	   */
	  function Upyun(service) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var getHeaderSign$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    classCallCheck(this, Upyun);

	    if (typeof service.serviceName === 'undefined') {
	      throw new Error('upyun - must config serviceName');
	    }

	    if (typeof params === 'function') {
	      getHeaderSign$$1 = params;
	      params = {};
	    }

	    if (typeof getHeaderSign$$1 !== 'function' && isBrowser) {
	      throw new Error('upyun - must config a callback function getHeaderSign in client side');
	    }

	    if (!isBrowser && (typeof service.operatorName === 'undefined' || typeof service.password === 'undefined')) {
	      throw new Error('upyun - must config operateName and password in server side');
	    }

	    var config = Object.assign({
	      domain: 'v0.api.upyun.com',
	      protocol: 'https'
	      // proxy: false // 禁用代理 // 参考 axios 配置. 如: {host: '127.0.0.1', post: 1081}
	    }, params);

	    this.endpoint = config.protocol + '://' + config.domain;
	    var proxy = config.proxy;

	    this.proxy = proxy;
	    this.req = createReq(this.endpoint, service, getHeaderSign$$1 || defaultGetHeaderSign, { proxy: proxy });
	    // NOTE this will be removed
	    this.bucket = service;
	    this.service = service;
	    if (!isBrowser) {
	      this.setBodySignCallback(sign.getPolicyAndAuthorization);
	    }
	  }

	  createClass(Upyun, [{
	    key: 'setService',
	    value: function setService(service) {
	      this.service = service;
	      this.req.defaults.baseURL = this.endpoint + '/' + service.serviceName;
	    }

	    // NOTE this will be removed

	  }, {
	    key: 'setBucket',
	    value: function setBucket(bucket) {
	      return this.setService(bucket);
	    }
	  }, {
	    key: 'setBodySignCallback',
	    value: function setBodySignCallback(getBodySign) {
	      if (typeof getBodySign !== 'function') {
	        throw new Error('upyun - getBodySign should be a function');
	      }
	      this.bodySignCallback = getBodySign;
	    }
	  }, {
	    key: 'usage',
	    value: function usage() {
	      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

	      return this.req.get(dir + '?usage').then(function (_ref) {
	        var data = _ref.data;

	        return Promise.resolve(data);
	      });
	    }
	  }, {
	    key: 'listDir',
	    value: function listDir() {
	      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

	      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          _ref2$limit = _ref2.limit,
	          limit = _ref2$limit === undefined ? 100 : _ref2$limit,
	          _ref2$order = _ref2.order,
	          order = _ref2$order === undefined ? 'asc' : _ref2$order,
	          _ref2$iter = _ref2.iter,
	          iter = _ref2$iter === undefined ? '' : _ref2$iter;

	      var requestHeaders = {};

	      // NOTE: 默认值可以省去请求头设置，避免跨域影响
	      if (limit !== 100) {
	        requestHeaders['x-list-limit'] = limit;
	      }

	      if (order !== 'asc') {
	        requestHeaders['x-list-order'] = order;
	      }

	      if (iter) {
	        requestHeaders['x-list-iter'] = iter;
	      }

	      return this.req.get(dir, {
	        headers: requestHeaders
	      }).then(function (_ref3) {
	        var data = _ref3.data,
	            headers = _ref3.headers,
	            status = _ref3.status;

	        if (status === 404) {
	          return false;
	        }

	        var next = headers['x-upyun-list-iter'];
	        if (!data) {
	          return Promise.resolve({
	            files: [],
	            next: next
	          });
	        }

	        var items = data.split('\n');
	        var files = items.map(function (item) {
	          var _item$split = item.split('\t'),
	              _item$split2 = slicedToArray(_item$split, 4),
	              name = _item$split2[0],
	              type = _item$split2[1],
	              size = _item$split2[2],
	              time = _item$split2[3];

	          return {
	            name: name,
	            type: type,
	            size: parseInt(size),
	            time: parseInt(time)
	          };
	        });

	        return Promise.resolve({
	          files: files,
	          next: next
	        });
	      });
	    }

	    /**
	     * @param localFile: file content, available type is Stream | String | Buffer for server; File | String for client
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
	     * @see https://github.com/mzabriskie/axios/blob/master/lib/adapters/http.js#L32
	     */

	  }, {
	    key: 'putFile',
	    value: function putFile(remotePath, localFile) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      // optional params
	      var keys = ['Content-MD5', 'Content-Length', 'Content-Type', 'Content-Secret', 'x-gmkerl-thumb'];
	      var headers = {};
	      var optionsLower = {};
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = Object.keys(options)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var key = _step.value;

	          optionsLower[key.toLowerCase()] = options[key];
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = Object.keys(optionsLower)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _key = _step2.value;

	          if (isMeta(_key) && optionsLower[_key]) {
	            headers[_key] = optionsLower[_key];
	          } else {
	            keys.forEach(function (key) {
	              var lower = key.toLowerCase();
	              var finded = optionsLower[lower];
	              if (finded) {
	                headers[key] = finded;
	              }
	            });
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return this.req.put(remotePath, localFile, {
	        headers: headers
	      }).then(function (_ref4) {
	        var responseHeaders = _ref4.headers,
	            status = _ref4.status;

	        if (status !== 200) {
	          return Promise.resolve(false);
	        }

	        var params = ['x-upyun-width', 'x-upyun-height', 'x-upyun-file-type', 'x-upyun-frames'];
	        var result = {};
	        params.forEach(function (item) {
	          var key = item.split('x-upyun-')[1];
	          if (responseHeaders[item]) {
	            result[key] = responseHeaders[item];
	            if (key !== 'file-type') {
	              result[key] = parseInt(result[key], 10);
	            }
	          }
	        });
	        return Promise.resolve(Object.keys(result).length > 0 ? result : true);
	      });
	    }
	  }, {
	    key: 'initMultipartUpload',
	    value: function initMultipartUpload(remotePath, fileOrPath) {
	      var _this = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var fileSizePromise = void 0;
	      var lowerOptions = key2LowerCase(options);
	      var contentType = lowerOptions['x-upyun-multi-type'];

	      if (isBrowser) {
	        fileSizePromise = Promise.resolve(fileOrPath.size);
	        contentType = contentType || fileOrPath.type;
	      } else {
	        fileSizePromise = utils.getFileSizeAsync(fileOrPath);
	        contentType = contentType || utils.getContentType(fileOrPath);
	      }

	      return fileSizePromise.then(function (fileSize) {
	        Object.assign(lowerOptions, {
	          'x-upyun-multi-disorder': true,
	          'x-upyun-multi-stage': 'initiate',
	          'x-upyun-multi-length': fileSize,
	          'x-upyun-multi-type': contentType
	        });

	        return _this.req.put(remotePath, null, {
	          headers: lowerOptions
	        }).then(function (_ref5) {
	          var headers = _ref5.headers,
	              status = _ref5.status;

	          if (status !== 204) {
	            return Promise.resolve(false);
	          }

	          var uuid = headers['x-upyun-multi-uuid'];

	          return Promise.resolve({
	            fileSize: fileSize,
	            partCount: Math.ceil(fileSize / PARTSIZE),
	            uuid: uuid
	          });
	        });
	      });
	    }
	  }, {
	    key: 'multipartUpload',
	    value: function multipartUpload(remotePath, fileOrPath, multiUuid, partId) {
	      var _this2 = this;

	      var start = partId * PARTSIZE;
	      var fileSizePromise = void 0;
	      // let contentType

	      if (isBrowser) {
	        fileSizePromise = Promise.resolve(fileOrPath.size);
	        // contentType = fileOrPath.type
	      } else {
	        fileSizePromise = utils.getFileSizeAsync(fileOrPath);
	        // contentType = utils.getContentType(fileOrPath)
	      }

	      var blockPromise = fileSizePromise.then(function (fileSize) {
	        var end = Math.min(start + PARTSIZE, fileSize);
	        return utils.readBlockAsync(fileOrPath, start, end);
	      });

	      return blockPromise.then(function (block) {
	        return _this2.req.put(remotePath, block, {
	          headers: {
	            'x-upyun-multi-stage': 'upload',
	            'x-upyun-multi-uuid': multiUuid,
	            'x-upyun-part-id': partId
	          }
	        }).then(function (_ref6) {
	          var status = _ref6.status;

	          return Promise.resolve(status === 204);
	        });
	      });
	    }
	  }, {
	    key: 'completeMultipartUpload',
	    value: function completeMultipartUpload(remotePath, multiUuid) {
	      return this.req.put(remotePath, null, {
	        headers: {
	          'x-upyun-multi-stage': 'complete',
	          'x-upyun-multi-uuid': multiUuid
	        }
	      }).then(function (_ref7) {
	        var status = _ref7.status;

	        return Promise.resolve(status === 204 || status === 201);
	      });
	    }
	  }, {
	    key: 'makeDir',
	    value: function makeDir(remotePath) {
	      return this.req.post(remotePath, null, {
	        headers: { folder: 'true' }
	      }).then(function (_ref8) {
	        var status = _ref8.status;

	        return Promise.resolve(status === 200);
	      });
	    }

	    /**
	     * copy file
	     *
	     * {@link https://help.upyun.com/knowledge-base/rest_api/#e5a48de588b6e69687e4bbb6 }
	     *
	     * @param {!string} targetPath
	     * @param {!string} sourcePath
	     * @param {?object} options={} - 可传入参数 `x-upyun-metadata-directive`, `content-md5`, `content-length`
	     */

	  }, {
	    key: 'copy',
	    value: function copy(targetPath, sourcePath) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var lowerOptions = key2LowerCase(options);

	      var headers = Object.assign(lowerOptions, {
	        'x-upyun-copy-source': path.join('/', this.service.serviceName, sourcePath)
	      });

	      return this.req.put(targetPath, null, {
	        headers: headers
	      }).then(function (_ref9) {
	        var status = _ref9.status;

	        return Promise.resolve(status >= 200 && status < 300);
	      });
	    }

	    /**
	     * move file
	     *
	     * {@link https://help.upyun.com/knowledge-base/rest_api/#e7a7bbe58aa8e69687e4bbb6 }
	     *
	     * @param {!string} targetPath
	     * @param {!string} sourcePath
	     * @param {?object} options={} - 可传入参数 `x-upyun-metadata-directive`, `content-md5`, `content-length`
	     */

	  }, {
	    key: 'move',
	    value: function move(targetPath, sourcePath) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var lowerOptions = key2LowerCase(options);

	      var headers = Object.assign(lowerOptions, {
	        'x-upyun-move-source': path.join('/', this.service.serviceName, sourcePath)
	      });

	      return this.req.put(targetPath, null, {
	        headers: headers
	      }).then(function (_ref10) {
	        var status = _ref10.status;

	        return Promise.resolve(status >= 200 && status < 300);
	      });
	    }
	  }, {
	    key: 'headFile',
	    value: function headFile(remotePath) {
	      return this.req.head(remotePath).then(function (_ref11) {
	        var headers = _ref11.headers,
	            status = _ref11.status;

	        if (status === 404) {
	          return Promise.resolve(false);
	        }

	        var params = ['x-upyun-file-type', 'x-upyun-file-size', 'x-upyun-file-date'];
	        var result = {
	          'Content-Md5': headers['content-md5'] || ''
	        };

	        params.forEach(function (item) {
	          var key = item.split('x-upyun-file-')[1];
	          if (headers[item]) {
	            result[key] = headers[item];
	            if (key === 'size' || key === 'date') {
	              result[key] = parseInt(result[key], 10);
	            }
	          }
	        });
	        return Promise.resolve(result);
	      });
	    }
	  }, {
	    key: 'deleteFile',
	    value: function deleteFile(remotePath) {
	      var isAsync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      var headers = {};
	      if (isAsync) {
	        headers['x-upyun-async'] = true;
	      }
	      return this.req.delete(remotePath, {
	        headers: headers
	      }).then(function (_ref12) {
	        var status = _ref12.status;

	        return Promise.resolve(status === 200);
	      });
	    }
	  }, {
	    key: 'deleteDir',
	    value: function deleteDir() {
	      for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return this.deleteFile.apply(this, args);
	    }
	  }, {
	    key: 'getFile',
	    value: function getFile(remotePath) {
	      var saveStream = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      if (saveStream && isBrowser) {
	        throw new Error('upyun - save as stream are only available on the server side.');
	      }

	      return this.req({
	        method: 'GET',
	        url: remotePath,
	        responseType: saveStream ? 'stream' : null
	      }).then(function (response) {
	        if (response.status === 404) {
	          return Promise.resolve(false);
	        }

	        if (!saveStream) {
	          return Promise.resolve(response.data);
	        }

	        var stream = response.data.pipe(saveStream);

	        return new Promise(function (resolve$$1, reject) {
	          stream.on('finish', function () {
	            return resolve$$1(stream);
	          });

	          stream.on('error', reject);
	        });
	      });
	    }
	  }, {
	    key: 'updateMetadata',
	    value: function updateMetadata(remotePath, metas) {
	      var operate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'merge';

	      var metaHeaders = {};
	      for (var key in metas) {
	        if (!isMeta(key)) {
	          metaHeaders['x-upyun-meta-' + key] = metas[key];
	        } else {
	          metaHeaders[key] = metas;
	        }
	      }

	      return this.req.patch(remotePath + '?metadata=' + operate, null, { headers: metaHeaders }).then(function (_ref13) {
	        var status = _ref13.status;

	        return Promise.resolve(status === 200);
	      });
	    }

	    // be careful: this will download the entire file

	  }, {
	    key: 'getMetadata',
	    value: function getMetadata(remotePath) {
	      return this.req.get(remotePath).then(function (_ref14) {
	        var headers = _ref14.headers,
	            status = _ref14.status;

	        if (status !== 200) {
	          return Promise.resolve(false);
	        }

	        var result = {};
	        for (var key in headers) {
	          if (isMeta(key)) {
	            result[key] = headers[key];
	          }
	        }

	        return Promise.resolve(result);
	      });
	    }

	    /**
	     * in browser: type of fileOrPath is File
	     * in server: type of fileOrPath is string: local file path
	     */

	  }, {
	    key: 'blockUpload',
	    value: function blockUpload(remotePath, fileOrPath) {
	      var _this3 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var fileSizePromise = void 0;
	      var contentType = void 0;
	      if (isBrowser) {
	        fileSizePromise = Promise.resolve(fileOrPath.size);
	        contentType = fileOrPath.type;
	      } else {
	        fileSizePromise = utils.getFileSizeAsync(fileOrPath);
	        contentType = utils.getContentType(fileOrPath);
	      }

	      return fileSizePromise.then(function (fileSize) {
	        Object.assign(options, {
	          'x-upyun-multi-stage': 'initiate',
	          'x-upyun-multi-length': fileSize,
	          'x-upyun-multi-type': contentType
	        });

	        var blockSize = 1024 * 1024;
	        var blocks = Math.ceil(fileSize / blockSize);

	        return _this3.req.put(remotePath, null, {
	          headers: options
	        }).then(function (_ref15) {
	          var headers = _ref15.headers;

	          var uuid = headers['x-upyun-multi-uuid'];
	          var nextId = headers['x-upyun-next-part-id'];

	          var p = Promise.resolve(nextId);
	          for (var index = 0; index < blocks; index++) {
	            p = p.then(function (nextId) {
	              var start = nextId * blockSize;
	              var end = Math.min(start + blockSize, fileSize);
	              var blockPromise = utils.readBlockAsync(fileOrPath, start, end);
	              return blockPromise.then(function (block) {
	                return _this3.req.put(remotePath, block, {
	                  headers: {
	                    'x-upyun-multi-stage': 'upload',
	                    'x-upyun-multi-uuid': uuid,
	                    'x-upyun-part-id': nextId
	                  }
	                }).then(function (_ref16) {
	                  var headers = _ref16.headers;

	                  nextId = headers['x-upyun-next-part-id'];
	                  return Promise.resolve(nextId);
	                });
	              });
	            });
	          }

	          return p.then(function () {
	            return _this3.req.put(remotePath, null, {
	              headers: {
	                'x-upyun-multi-stage': 'complete',
	                'x-upyun-multi-uuid': uuid
	              }
	            }).then(function (_ref17) {
	              var status = _ref17.status;

	              return Promise.resolve(status === 204 || status === 201);
	            });
	          });
	        });
	      });
	    }
	  }, {
	    key: 'formPutFile',
	    value: function formPutFile(remotePath, localFile) {
	      var _this4 = this;

	      var orignParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      var params = {};
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = Object.keys(orignParams)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var key = _step3.value;

	          params[key.toLowerCase()] = orignParams[key];
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      if (typeof this.bodySignCallback !== 'function') {
	        throw new Error('upyun - must setBodySignCallback first!');
	      }

	      params['service'] = this.service.serviceName;
	      params['save-key'] = remotePath;
	      var result = this.bodySignCallback(this.service, params);
	      result = isPromise_1(result) ? result : Promise.resolve(result);

	      return result.then(function (bodySign) {
	        return formUpload(_this4.endpoint + '/' + params['service'], localFile, bodySign, opts);
	      });
	    }
	  }, {
	    key: 'purge',
	    value: function purge(urls) {
	      if (typeof urls === 'string') {
	        urls = [urls];
	      }
	      var headers = sign.getPurgeHeaderSign(this.service, urls);
	      return axios.post('http://purge.upyun.com/purge/', 'purge=' + urls.join('\n'), {
	        headers: headers,
	        proxy: this.proxy
	      }).then(function (_ref18) {
	        var data = _ref18.data;

	        if (Object.keys(data.invalid_domain_of_url).length === 0) {
	          return true;
	        } else {
	          throw new Error('some url purge failed ' + data.invalid_domain_of_url.join(' '));
	        }
	      }, function (err) {
	        throw new Error('upyun - request failed: ' + err.message);
	      });
	    }
	  }]);
	  return Upyun;
	}();

	function isMeta(key) {
	  return key.indexOf('x-upyun-meta-') === 0;
	}

	function defaultGetHeaderSign() {
	  return sign.getHeaderSign.apply(sign, arguments);
	}

	function key2LowerCase(obj) {
	  var objLower = {};
	  var _iteratorNormalCompletion4 = true;
	  var _didIteratorError4 = false;
	  var _iteratorError4 = undefined;

	  try {
	    for (var _iterator4 = Object.keys(obj)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	      var key = _step4.value;

	      objLower[key.toLowerCase()] = obj[key];
	    }
	  } catch (err) {
	    _didIteratorError4 = true;
	    _iteratorError4 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion4 && _iterator4.return) {
	        _iterator4.return();
	      }
	    } finally {
	      if (_didIteratorError4) {
	        throw _iteratorError4;
	      }
	    }
	  }

	  return objLower;
	}

	/**
	 * @class
	 */

	var Service = function Service(serviceName) {
	  var operatorName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var password = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  classCallCheck(this, Service);

	  // NOTE bucketName will be removed
	  this.bucketName = serviceName;
	  this.serviceName = this.bucketName;
	  this.operatorName = operatorName;
	  this.password = md5(password);
	};

	var index = {
	  Client: Upyun,
	  sign: sign,
	  Bucket: Service,
	  Service: Service
	};

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])







	var rConstruct = (_global.Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = _fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !_fails(function () {
	  rConstruct(function () { /* empty */ });
	});

	_export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    _aFunction(Target);
	    _anObject(args);
	    var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (_bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return _isObject(result) ? result : instance;
	  }
	});

	var arrayWithoutHoles = createCommonjsModule$1(function (module) {
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return arrayLikeToArray(arr);
	}

	module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule$1(function (module) {
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(iterableToArray);

	var nonIterableSpread = createCommonjsModule$1(function (module) {
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule$1(function (module) {
	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	}

	module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var setPrototypeOf$1 = createCommonjsModule$1(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(setPrototypeOf$1);

	var inherits = createCommonjsModule$1(function (module) {
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) setPrototypeOf$1(subClass, superClass);
	}

	module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _inherits = unwrapExports(inherits);

	var assertThisInitialized = createCommonjsModule$1(function (module) {
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(assertThisInitialized);

	var possibleConstructorReturn = createCommonjsModule$1(function (module) {
	var _typeof = _typeof_1["default"];



	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return assertThisInitialized(self);
	}

	module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	var getPrototypeOf = createCommonjsModule$1(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _getPrototypeOf = unwrapExports(getPrototypeOf);

	// 20.3.3.1 / 15.9.4.4 Date.now()


	_export(_export.S, 'Date', { now: function () { return new Date().getTime(); } });

	var arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	_export(_export.P + _export.F * _fails(function () {
	  if (_html) arraySlice.call(_html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = _toLength(this.length);
	    var klass = _cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = _toAbsoluteIndex(begin, len);
	    var upTo = _toAbsoluteIndex(end, len);
	    var size = _toLength(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING$1 = 'toString';
	var $toString$1 = DateProto[TO_STRING$1];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  _redefine(DateProto, TO_STRING$1, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString$1.call(this) : INVALID_DATE;
	  });
	}

	// 21.2.5.3 get RegExp.prototype.flags

	var _flags = function () {
	  var that = _anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	// 21.2.5.3 get RegExp.prototype.flags()
	if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: _flags
	});

	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];

	var define = function (fn) {
	  _redefine(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = _anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	var $find = _arrayMethods(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	_export(_export.P + _export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY);

	var f$2 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$2
	};

	var gOPD$1 = Object.getOwnPropertyDescriptor;

	var f$1 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD$1(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$1
	};

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	var setPrototypeOf = _setProto.set;
	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f
	};

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var space = '[' + _stringWs + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = _fails(function () {
	    return !!_stringWs[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  _export(_export.P + _export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(_defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var gOPN = _objectGopn.f;
	var gOPD = _objectGopd.f;
	var dP = _objectDp.f;
	var $trim = _stringTrim.trim;
	var NUMBER = 'Number';
	var $Number = _global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = _toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? _fails(function () { proto.valueOf.call(that); }) : _cof(that) != NUMBER)
	        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = _descriptors ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (_has(Base, key = keys[j]) && !_has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  _redefine(_global, NUMBER, $Number);
	}

	_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = _speciesConstructor(this, _core.Promise || _global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return _promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return _promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	/**
	 * 并发任务控制器.
	 *  设置最大并发个数，其他的任务则在某个任务执行完成后继续执行。
	 */

	/**
	* 并发任务控制器.
	*  设置最大并发个数，其他的任务则在某个任务执行完成后继续执行。
	*/

	var clearTimeout$1 = timers__default["default"].clearTimeout;

	var Scheduler = /*#__PURE__*/function (_EventEmitter) {
	  _inherits(Scheduler, _EventEmitter);

	  var _super = _createSuper(Scheduler);

	  function Scheduler() {
	    var _this;

	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Scheduler);

	    _this = _super.call(this, props);

	    var _ref = props || {},
	        _ref$size = _ref.size,
	        size = _ref$size === void 0 ? 6 : _ref$size,
	        _ref$start = _ref.start,
	        start = _ref$start === void 0 ? true : _ref$start,
	        _ref$interval = _ref.interval,
	        interval = _ref$interval === void 0 ? null : _ref$interval;

	    _this._start = start;
	    _this._size = size;
	    _this._interval = interval;
	    _this._sizeMemorized = size;
	    _this._queue = [];
	    _this._shoulStop = false;
	    _this._timeoutId = null;
	    _this._lastRan = Date.now();
	    return _this;
	  }

	  _createClass(Scheduler, [{
	    key: "addTask",
	    value: function addTask(task) {
	      var _this2 = this;

	      return function () {
	        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
	          params[_key] = arguments[_key];
	        }

	        // 快捷生成一个uuid
	        var uuid = Math.random().toString(36).slice(2);
	        var promise = new Promise(function (resolve) {
	          // 存起来
	          _this2.pushTask({
	            resolve: resolve,
	            task: task,
	            params: params,
	            uuid: uuid
	          });

	          if (_this2._start) {
	            _this2.startTask();
	          }
	        }); // 如果还未执行，则跳过，返回true，已经执行了，返回false。

	        var skipTask = function skipTask() {
	          // 从队列中找到uuid的任务，删除掉。 如果队列中已经没有了，说明已经被执行了
	          var index = _this2._queue.findIndex(function (item) {
	            return item.uuid === uuid;
	          });

	          if (index < 0) return false;

	          _this2._queue.splice(index, 1);

	          return true;
	        };

	        return [promise, skipTask];
	      };
	    }
	  }, {
	    key: "startTask",
	    value: function startTask() {
	      // 区分是否要一个个间隔上传
	      if (this._interval) {
	        // 只启动一个即可
	        if (!this._timeoutId && this._size > 0) {
	          if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');

	          var _this$getTask = this.getTask(),
	              taskResolve = _this$getTask.resolve,
	              taskFunc = _this$getTask.task,
	              taskParams = _this$getTask.params;

	          taskResolve(this.executeTask(taskFunc, taskParams));
	        }
	      } else {
	        // 满足条件取出来执行
	        if (this._size > 0) {
	          if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');

	          var _this$getTask2 = this.getTask(),
	              _taskResolve = _this$getTask2.resolve,
	              _taskFunc = _this$getTask2.task,
	              _taskParams = _this$getTask2.params;

	          _taskResolve(this.executeTask(_taskFunc, _taskParams));
	        }
	      }
	    } // 当没有选择自动启动任务时，此方法交给用户手动调用

	  }, {
	    key: "dequeue",
	    value: function dequeue() {
	      if (this._start) return;

	      if (this._interval) {
	        if (!this._timeoutId && this._size > 0) {
	          if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');

	          var _this$getTask3 = this.getTask(),
	              taskResolve = _this$getTask3.resolve,
	              taskFunc = _this$getTask3.task,
	              taskParams = _this$getTask3.params;

	          taskResolve(this.executeTask(taskFunc, taskParams));
	        }
	      } else {
	        while (this._size > 0) {
	          if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');

	          var _this$getTask4 = this.getTask(),
	              _taskResolve2 = _this$getTask4.resolve,
	              _taskFunc2 = _this$getTask4.task,
	              _taskParams2 = _this$getTask4.params;

	          _taskResolve2(this.executeTask(_taskFunc2, _taskParams2));
	        }
	      }
	    }
	  }, {
	    key: "pushTask",
	    value: function pushTask(obj) {
	      if (!obj.resolve || !obj.task) return;

	      this._queue.push(obj);
	    }
	  }, {
	    key: "getTask",
	    value: function getTask() {
	      if (this._queue.length <= 0 || this._size <= 0) return; // 取出任务说明要执行了，这时候控制并发的标志位应该减1

	      if (this._size > 0) this._size--; // 返回头部的那个，与push进来的顺序对应

	      return this._queue.shift();
	    }
	  }, {
	    key: "executeTask",
	    value: function executeTask(task, params) {
	      var _this3 = this;

	      if (this._shouldStop) return Promise.resolve();

	      if (this._interval && Number(this._interval) > 0) {
	        var timeout = Math.max(0, this._interval - (Date.now() - this._lastRan));
	        return new Promise(function (resolve, reject) {
	          clearTimeout$1(_this3._timeoutId);
	          _this3._timeoutId = setTimeout(function () {
	            _this3._lastRan = Date.now();
	            var promise = Promise.resolve(task.apply(void 0, _toConsumableArray(params))); // 无论成功还是失败，都算是该任务执行完了

	            promise.then(function (res) {
	              _this3.emit('resolve', res);

	              resolve(res);
	            })["catch"](function (err) {
	              _this3.emit('reject', err);

	              reject(err);
	            })["finally"](function () {
	              _this3._size++;
	              console.log(_this3._queue.length, _this3._size, _this3._sizeMemorized);
	              if (_this3._queue.length === 0 && _this3._size === _this3._sizeMemorized) return _this3.emit('end'); // 执行下一个任务

	              _this3.nextTask();
	            });
	          }, timeout);
	        });
	      } else {
	        var promise = Promise.resolve(task.apply(void 0, _toConsumableArray(params)));
	        promise.then(function (res) {
	          _this3.emit('resolve', res);
	        })["catch"](function (err) {
	          _this3.emit('reject', err);
	        })["finally"](function () {
	          _this3._size++;
	          if (_this3._queue.length === 0 && _this3._size === _this3._sizeMemorized) return _this3.emit('end'); // 执行下一个任务

	          _this3.nextTask();
	        });
	        return promise;
	      }
	    }
	  }, {
	    key: "nextTask",
	    value: function nextTask() {
	      if (this._queue.length <= 0 || this._size <= 0) return;

	      var _this$getTask5 = this.getTask(),
	          resolve = _this$getTask5.resolve,
	          task = _this$getTask5.task,
	          params = _this$getTask5.params;

	      resolve(this.executeTask(task, params));
	    }
	  }, {
	    key: "isQueueing",
	    value: function isQueueing() {
	      return this._size <= 0;
	    }
	  }, {
	    key: "clearTask",
	    value: function clearTask() {
	      clearTimeout$1(this._timeoutId);
	      this._shouldStop = true;
	      this._queue = [];
	      this.size = this._sizeMemorized;
	      this.emit('stop');
	    }
	  }]);

	  return Scheduler;
	}(events__default["default"]); // // 使用示例
	// // 1. 10个异步任务，每3个并发执行
	// const scheduler = new Scheduler();
	// scheduler.on('start', () => {
	//   console.log('here we go', Date.now());
	// })
	// scheduler.on('resolve', (res) => {
	//   console.log('one task complete', Date.now(), res);
	// })
	// scheduler.on('reject', (err) => {
	// 	console.log('opps, error !!!', Date.now(), err);
	// })
	// scheduler.on('end', () => {
	//   console.log('yes, this is end', Date.now());
	// })
	// scheduler.on('stop', () => {
	//   console.log('yes, you stopped', Date.now());
	// })
	// const taskFunc = (e, index) => {
	// 	// 同步的
	// 	// console.log(`执行了第 ${index+1}个`)
	// 	// return `第${index+1}个`
	// 	// 异步的
	//   return new Promise((resolve, reject) => {
	//     setTimeout(() => {
	//       console.log(`执行了第 ${index+1}个`)
	// 			if (index === 3) return reject(Error('error !'))
	//       resolve(`第${index+1}个`)
	//     }, 2000 )
	//   })
	// }
	// Array(10).fill(1).forEach((e, index) => {
	//     const [result, skipTask] = scheduler.addTask(taskFunc)(e, index)
	//     result.then(res => console.log('拿到res --', index+1, res, Date.now())).catch(err => {
	//         console.log('抓到error', index+1, err)
	//     })
	// })
	// // setTimeout(() => {
	// // 	scheduler.dequeue();
	// // }, 1000)


	var scheduler = Scheduler;

	/* eslint-disable indent */

	/**
	 * 使用新的node-sdk https://github.com/upyun/node-sdk
	 * 又拍接口文档 http://docs.upyun.com/api/rest_api/
	 */

	var UploadScheduler = null;

	function generateScheduler(_ref) {
	  var size = _ref.size;
	  UploadScheduler = new scheduler({
	    size: size
	  }); // UploadScheduler.on('end', () => {
	  // 	console.log('all task end');
	  // })
	  // UploadScheduler.on('reject', (err) => {
	  // 	console.log('opps , error!!!', err)
	  // })
	}

	var UpYunTool = /*#__PURE__*/function () {
	  function UpYunTool(params) {
	    _classCallCheck(this, UpYunTool);

	    var bucket = params.bucket,
	        operator = params.operator,
	        password = params.password,
	        _params$console = params.console,
	        console = _params$console === void 0 ? true : _params$console,
	        _params$retry = params.retry,
	        retry = _params$retry === void 0 ? 3 : _params$retry,
	        _params$concurrent = params.concurrent,
	        concurrent = _params$concurrent === void 0 ? 6 : _params$concurrent;
	    this.console = console;
	    var upyunService = new index.Service(bucket, operator, password);
	    this.upyun = new index.Client(upyunService);
	    this.retry = retry;
	    this.concurrent = concurrent;
	    generateScheduler({
	      size: concurrent
	    });
	  }
	  /**
	   * @param {String} remotePath - 远程
	   * @return Number // byte
	   */


	  _createClass(UpYunTool, [{
	    key: "usage",
	    value: function usage(remotePath) {
	      var _this = this;

	      return new Promise(function (resolve, reject) {
	        _this.upyun.usage(remotePath).then(function (size) {
	          resolve(size);
	        })["catch"](function (error) {
	          return reject(error);
	        });
	      });
	    }
	    /**
	     * @param {String} remotePath - 需要查看的目录
	     * @param {Object} options - 配置参数
	     * @param {Number} options.limit - 每次请求获取的目录最大列表，最大值 10000，默认 100
	     * @param {String} options.order - 列表以文件最后修改时间排序，可选值 asc|desc，默认 asc
	     * @param {String} options.iter - 遍历起点，每次响应参数中，将会包含遍历下一页需要的 iter 值
	     * @return {Object}
	     * {
	     *		files: [
	     *		  {
	     *		    name: 'example.txt', // file or dir name
	     *		    type: 'N', // file type, N: file; F: dir
	     *		    size: 28392812, // file size
	     *		    time: 1486053098 // last modify time
	     *		  }
	     *		],
	     *   next: 'dlam9pd2Vmd2Z3Zg==' // next page iter
	     * }
	    */

	  }, {
	    key: "listDir",
	    value: function listDir(remotePath) {
	      var _this2 = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	        limit: 100,
	        order: 'asc'
	      };
	      return new Promise(function (resolve, reject) {
	        // 是否完全获取完毕交给业务层面处理
	        _this2.upyun.listDir(remotePath, options).then(function (res) {
	          return resolve(res);
	        })["catch"](function (error) {
	          return reject(error);
	        });
	      });
	    }
	    /**
	    * @param {String} remotePath - 想创建的远程目录路径
	    */

	  }, {
	    key: "makeDir",
	    value: function makeDir(remotePath) {
	      var _this3 = this;

	      return new Promise(function (resolve, reject) {
	        var RETRY = _this3.retry;

	        var mkdir = /*#__PURE__*/function () {
	          var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	            var res;
	            return regenerator.wrap(function _callee$(_context) {
	              while (1) {
	                switch (_context.prev = _context.next) {
	                  case 0:
	                    _context.prev = 0;
	                    _context.next = 3;
	                    return _this3.upyun.makeDir(remotePath);

	                  case 3:
	                    res = _context.sent;
	                    resolve(res);
	                    _context.next = 14;
	                    break;

	                  case 7:
	                    _context.prev = 7;
	                    _context.t0 = _context["catch"](0);
	                    if (_this3.console && RETRY > 0) console.log('makeDir fail: ' + remotePath, '剩余重试次数:', RETRY);
	                    --RETRY;

	                    if (!(RETRY >= 0)) {
	                      _context.next = 13;
	                      break;
	                    }

	                    return _context.abrupt("return", mkdir());

	                  case 13:
	                    return _context.abrupt("return", reject(_context.t0));

	                  case 14:
	                  case "end":
	                    return _context.stop();
	                }
	              }
	            }, _callee, null, [[0, 7]]);
	          }));

	          return function mkdir() {
	            return _ref2.apply(this, arguments);
	          };
	        }();

	        mkdir();
	      });
	    }
	    /**
	    * @param {String} remotePath - 远程文件保存路径
	    * @param {String|Stream|Buffer} localFile - 需要上传的本地文件
	    * @param {Object} options - 上传参数 Content-MD5 | Content-Length | Content-Type | Content-Secret | x-gmkerl-thumb | x-upyun-meta-x | x-upyun-meta-ttl 参见http://docs.upyun.com/api/rest_api/#_2
	    */

	  }, {
	    key: "putFile",
	    value: function putFile(remotePath, localFile, opts) {
	      var _this4 = this;

	      return new Promise(function (resolve, reject) {
	        var RETRY = _this4.retry;

	        var upload = /*#__PURE__*/function () {
	          var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
	            return regenerator.wrap(function _callee2$(_context2) {
	              while (1) {
	                switch (_context2.prev = _context2.next) {
	                  case 0:
	                    _context2.prev = 0;
	                    _context2.next = 3;
	                    return _this4.upyun.putFile(remotePath, localFile, opts);

	                  case 3:
	                    if (_this4.console) console.log('[OK]putFile: ' + remotePath);
	                    return _context2.abrupt("return", resolve(remotePath));

	                  case 7:
	                    _context2.prev = 7;
	                    _context2.t0 = _context2["catch"](0);
	                    if (_this4.console && RETRY > 0) console.log('\x1B[33m', 'putFile fail: ' + remotePath, '剩余重试次数:', RETRY);
	                    --RETRY;

	                    if (!(RETRY >= 0)) {
	                      _context2.next = 13;
	                      break;
	                    }

	                    return _context2.abrupt("return", upload());

	                  case 13:
	                    return _context2.abrupt("return", reject(_context2.t0));

	                  case 14:
	                  case "end":
	                    return _context2.stop();
	                }
	              }
	            }, _callee2, null, [[0, 7]]);
	          }));

	          return function upload() {
	            return _ref3.apply(this, arguments);
	          };
	        }();

	        upload();
	      });
	    }
	    /**
	    * @param {String} remotePath - 远程文件路径
	    */

	  }, {
	    key: "headFile",
	    value: function headFile(remotePath) {
	      var _this5 = this;

	      return new Promise(function (resolve, reject) {
	        _this5.upyun.headFile(remotePath).then(function (res) {
	          resolve(res);
	        })["catch"](function (error) {
	          return reject(error);
	        });
	      });
	    }
	    /**
	    * 下载文件
	    * @param {String} remotePath - 文件远程路径
	    * @param {Stream} saveStream - 可选值，如果传递则要传递一个流，下载的文件写入该流中。
	    */

	  }, {
	    key: "getFile",
	    value: function getFile(remotePath, saveStream) {
	      var _this6 = this;

	      return new Promise(function (resolve, reject) {
	        _this6.upyun.getFile(remotePath, saveStream).then(function (content) {
	          resolve(content);
	        })["catch"](function (error) {
	          return reject(error);
	        });
	      });
	    }
	    /**
	    * @param {String} 文件或目录的远程路径
	    */

	  }, {
	    key: "deleteFile",
	    value: function deleteFile(remotePath) {
	      var _this7 = this;

	      return new Promise(function (resolve, reject) {
	        _this7.upyun.deleteFile(remotePath).then(function (res) {
	          if (res) return resolve(res);
	          return reject(res);
	        })["catch"](function (err) {
	          return reject(err);
	        });
	      });
	    }
	    /**
	    * @param {String} remotePath - 远程存储路径
	    * @param {String} localPath - 本地文件夹目录
	    */

	  }, {
	    key: "putDir",
	    value: function putDir(remotePath, localPath) {
	      var _this8 = this;

	      var sub = {
	        remotePaths: [],
	        localPaths: [],
	        promises: []
	      };
	      return this.makeDir(remotePath).then(function () {
	        return fsPromise.readdir(localPath);
	      }).then(function (names) {
	        names.forEach(function (name) {
	          if (name && name.length > 0 && name[0] !== '.') {
	            sub.remotePaths.push(remotePath + '/' + name);
	            sub.localPaths.push(path__default["default"].join(localPath, name));
	            sub.promises.push(fsPromise.stat(path__default["default"].join(localPath, name)));
	          }
	        });
	        return Promise.all(sub.promises);
	      }).then(function (datas) {
	        // 路径对应的内容详情，是文件或文件夹
	        var allPromises = [];

	        if (!_this8.concurrent) {
	          for (var i = 0; i < datas.length; i++) {
	            if (datas[i].isDirectory()) {
	              allPromises.push(_this8.putDir(sub.remotePaths[i], sub.localPaths[i]));
	            } else {
	              allPromises.push(_this8.putFile(sub.remotePaths[i], sub.localPaths[i] && fs__default["default"].existsSync(sub.localPaths[i]) ? fs__default["default"].createReadStream(sub.localPaths[i]) : sub.localPaths[i]));
	            }
	          }
	        } else {
	          for (var _i = 0; _i < datas.length; _i++) {
	            if (datas[_i].isDirectory()) {
	              var _UploadScheduler$addT = UploadScheduler.addTask(_this8.putDir.bind(_this8))(sub.remotePaths[_i], sub.localPaths[_i]),
	                  _UploadScheduler$addT2 = _slicedToArray(_UploadScheduler$addT, 1),
	                  promise = _UploadScheduler$addT2[0];

	              allPromises.push(promise);
	            } else {
	              var _UploadScheduler$addT3 = UploadScheduler.addTask(_this8.putFile.bind(_this8))(sub.remotePaths[_i], sub.localPaths[_i] && fs__default["default"].existsSync(sub.localPaths[_i]) ? fs__default["default"].createReadStream(sub.localPaths[_i]) : sub.localPaths[_i]),
	                  _UploadScheduler$addT4 = _slicedToArray(_UploadScheduler$addT3, 1),
	                  _promise = _UploadScheduler$addT4[0];

	              allPromises.push(_promise);
	            }
	          }
	        }

	        return Promise.all(allPromises);
	      }).then(function () {
	        var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	        var paths = [];
	        results.forEach(function (result) {
	          if (typeof result === 'string') {
	            paths.push(result);
	          } else {
	            paths.push.apply(paths, result);
	          }
	        });
	        return paths;
	      })["catch"](function (err) {
	        return console.error('\x1B[31m%s\x1B[0m', "putDir Error: ".concat(err.message));
	      });
	    }
	  }]);

	  return UpYunTool;
	}();

	var src = UpYunTool;

	return src;

}));
