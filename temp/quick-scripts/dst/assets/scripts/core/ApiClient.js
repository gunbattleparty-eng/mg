
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/ApiClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccbd6TdtDZJvZPKvyWkBhjU', 'ApiClient');
// scripts/core/ApiClient.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Config = require('scripts/core/Config');

var Storage = require('scripts/core/Storage');

function withTimeout(p, ms) {
  return new Promise(function (resolve, reject) {
    var t = setTimeout(function () {
      return reject(new Error('timeout'));
    }, ms);
    p.then(function (v) {
      clearTimeout(t);
      resolve(v);
    }, function (e) {
      clearTimeout(t);
      reject(e);
    });
  });
}

function request(_x, _x2) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path, _temp) {
    var _ref, _ref$method, method, _ref$data, data, _ref$headers, headers, url, token, opts, res;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _temp === void 0 ? {} : _temp, _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, _ref$data = _ref.data, data = _ref$data === void 0 ? null : _ref$data, _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers;
            url = Config.API_BASE + path.replace(/^\/+/, '');
            token = Storage.getToken();
            opts = {
              method: method,
              headers: Object.assign(_extends({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }, token ? {
                'Authorization': 'Bearer ' + token
              } : {}), headers)
            };
            if (data) opts.body = JSON.stringify(data);
            _context.next = 7;
            return withTimeout(fetch(url, opts), Config.REQ_TIMEOUT);

          case 7:
            res = _context.sent;

            if (res.ok) {
              _context.next = 16;
              break;
            }

            _context.t0 = Error;
            _context.t1 = "HTTP " + res.status + ": ";
            _context.next = 13;
            return res.text()["catch"](function () {
              return '';
            });

          case 13:
            _context.t2 = _context.sent;
            _context.t3 = _context.t1 + _context.t2;
            throw new _context.t0(_context.t3);

          case 16:
            return _context.abrupt("return", res.json());

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _request.apply(this, arguments);
}

module.exports = {
  get: function get(p) {
    return request(p, {
      method: 'GET'
    });
  },
  post: function post(p, d) {
    return request(p, {
      method: 'POST',
      data: d
    });
  }
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcQXBpQ2xpZW50LmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsInJlcXVpcmUiLCJTdG9yYWdlIiwid2l0aFRpbWVvdXQiLCJwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInQiLCJzZXRUaW1lb3V0IiwiRXJyb3IiLCJ0aGVuIiwidiIsImNsZWFyVGltZW91dCIsImUiLCJyZXF1ZXN0IiwicGF0aCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwidXJsIiwiQVBJX0JBU0UiLCJyZXBsYWNlIiwidG9rZW4iLCJnZXRUb2tlbiIsIm9wdHMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwiUkVRX1RJTUVPVVQiLCJyZXMiLCJvayIsInN0YXR1cyIsInRleHQiLCJqc29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldCIsInBvc3QiLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQTs7Ozs7Ozs7QUFEQSxJQUFNQSxNQUFNLEdBQUlDLE9BQU8sQ0FBQyxxQkFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxzQkFBRCxDQUF2Qjs7QUFFQSxTQUFTRSxXQUFULENBQXFCQyxDQUFyQixFQUF3QkMsRUFBeEIsRUFBMkI7RUFDekIsT0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQWtCO0lBQ25DLElBQU1DLENBQUMsR0FBR0MsVUFBVSxDQUFDO01BQUEsT0FBSUYsTUFBTSxDQUFDLElBQUlHLEtBQUosQ0FBVSxTQUFWLENBQUQsQ0FBVjtJQUFBLENBQUQsRUFBbUNOLEVBQW5DLENBQXBCO0lBQ0FELENBQUMsQ0FBQ1EsSUFBRixDQUFPLFVBQUFDLENBQUMsRUFBRTtNQUFDQyxZQUFZLENBQUNMLENBQUQsQ0FBWjtNQUFnQkYsT0FBTyxDQUFDTSxDQUFELENBQVA7SUFBWSxDQUF2QyxFQUF3QyxVQUFBRSxDQUFDLEVBQUU7TUFBQ0QsWUFBWSxDQUFDTCxDQUFELENBQVo7TUFBZ0JELE1BQU0sQ0FBQ08sQ0FBRCxDQUFOO0lBQVcsQ0FBdkU7RUFDRCxDQUhNLENBQVA7QUFJRDs7U0FFY0M7Ozs7O3dFQUFmLGlCQUF1QkMsSUFBdkI7SUFBQTs7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBLDBCQUFxRSxFQUFyRSw2QkFBOEJDLE1BQTlCLEVBQThCQSxNQUE5Qiw0QkFBcUMsS0FBckMsaUNBQTRDQyxJQUE1QyxFQUE0Q0EsSUFBNUMsMEJBQWlELElBQWpELGtDQUF1REMsT0FBdkQsRUFBdURBLE9BQXZELDZCQUErRCxFQUEvRDtZQUNRQyxHQURSLEdBQ2NyQixNQUFNLENBQUNzQixRQUFQLEdBQWtCTCxJQUFJLENBQUNNLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEVBQXJCLENBRGhDO1lBRVFDLEtBRlIsR0FFZ0J0QixPQUFPLENBQUN1QixRQUFSLEVBRmhCO1lBR1FDLElBSFIsR0FHZTtjQUNYUixNQUFNLEVBQU5BLE1BRFc7Y0FFWEUsT0FBTyxFQUFFTyxNQUFNLENBQUNDLE1BQVA7Z0JBQ1AsZ0JBQWdCLGtCQURUO2dCQUVQLFVBQVU7Y0FGSCxHQUdISixLQUFLLEdBQUc7Z0JBQUMsaUJBQWlCLFlBQVVBO2NBQTVCLENBQUgsR0FBd0MsRUFIMUMsR0FJTkosT0FKTTtZQUZFLENBSGY7WUFXRSxJQUFJRCxJQUFKLEVBQVVPLElBQUksQ0FBQ0csSUFBTCxHQUFZQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVosSUFBZixDQUFaO1lBWFo7WUFBQSxPQVlvQmhCLFdBQVcsQ0FBQzZCLEtBQUssQ0FBQ1gsR0FBRCxFQUFNSyxJQUFOLENBQU4sRUFBbUIxQixNQUFNLENBQUNpQyxXQUExQixDQVovQjs7VUFBQTtZQVlRQyxHQVpSOztZQUFBLElBYU9BLEdBQUcsQ0FBQ0MsRUFiWDtjQUFBO2NBQUE7WUFBQTs7WUFBQSxjQWF5QnhCLEtBYnpCO1lBQUEsd0JBYXVDdUIsR0FBRyxDQUFDRSxNQWIzQztZQUFBO1lBQUEsT0FhNERGLEdBQUcsQ0FBQ0csSUFBSixZQUFpQjtjQUFBLE9BQUssRUFBTDtZQUFBLENBQWpCLENBYjVEOztVQUFBO1lBQUE7WUFBQTtZQUFBOztVQUFBO1lBQUEsaUNBY1NILEdBQUcsQ0FBQ0ksSUFBSixFQWRUOztVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBOzs7O0FBaUJBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7RUFDZkMsR0FBRyxFQUFHLGFBQUNyQyxDQUFEO0lBQUEsT0FBS1ksT0FBTyxDQUFDWixDQUFELEVBQUc7TUFBQ2MsTUFBTSxFQUFDO0lBQVIsQ0FBSCxDQUFaO0VBQUEsQ0FEUztFQUVmd0IsSUFBSSxFQUFFLGNBQUN0QyxDQUFELEVBQUd1QyxDQUFIO0lBQUEsT0FBTzNCLE9BQU8sQ0FBQ1osQ0FBRCxFQUFHO01BQUNjLE1BQU0sRUFBQyxNQUFSO01BQWdCQyxJQUFJLEVBQUN3QjtJQUFyQixDQUFILENBQWQ7RUFBQTtBQUZTLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb25maWcgID0gcmVxdWlyZSgnc2NyaXB0cy9jb3JlL0NvbmZpZycpO1xuY29uc3QgU3RvcmFnZSA9IHJlcXVpcmUoJ3NjcmlwdHMvY29yZS9TdG9yYWdlJyk7XG5cbmZ1bmN0aW9uIHdpdGhUaW1lb3V0KHAsIG1zKXtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKT0+cmVqZWN0KG5ldyBFcnJvcigndGltZW91dCcpKSwgbXMpO1xuICAgIHAudGhlbih2PT57Y2xlYXJUaW1lb3V0KHQpO3Jlc29sdmUodik7fSxlPT57Y2xlYXJUaW1lb3V0KHQpO3JlamVjdChlKTt9KTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QocGF0aCwge21ldGhvZD0nR0VUJywgZGF0YT1udWxsLCBoZWFkZXJzPXt9fSA9IHt9KXtcbiAgY29uc3QgdXJsID0gQ29uZmlnLkFQSV9CQVNFICsgcGF0aC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcbiAgY29uc3QgdG9rZW4gPSBTdG9yYWdlLmdldFRva2VuKCk7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgbWV0aG9kLFxuICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAuLi4odG9rZW4gPyB7J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcrdG9rZW59IDoge30pXG4gICAgfSwgaGVhZGVycylcbiAgfTtcbiAgaWYgKGRhdGEpIG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICBjb25zdCByZXMgPSBhd2FpdCB3aXRoVGltZW91dChmZXRjaCh1cmwsIG9wdHMpLCBDb25maWcuUkVRX1RJTUVPVVQpO1xuICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzLnN0YXR1c306ICR7YXdhaXQgcmVzLnRleHQoKS5jYXRjaCgoKT0+ICcnKX1gKTtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQ6ICAocCk9PnJlcXVlc3QocCx7bWV0aG9kOidHRVQnfSksXG4gIHBvc3Q6IChwLGQpPT5yZXF1ZXN0KHAse21ldGhvZDonUE9TVCcsIGRhdGE6ZH0pLFxufTtcbiJdfQ==