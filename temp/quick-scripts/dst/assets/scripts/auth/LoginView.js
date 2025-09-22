
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/auth/LoginView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcf23rAXIFImbLxsP2PzDmf', 'LoginView');
// scripts/auth/LoginView.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Auth = require('./AuthService');

cc.Class({
  "extends": cc.Component,
  properties: {
    edtEmail: cc.EditBox,
    edtPass: cc.EditBox,
    btnLogin: cc.Node,
    btnRegister: cc.Node,
    lblTips: cc.Label
  },
  onLoad: function onLoad() {
    var _this = this;

    this._busy = false;
    if (this.lblTips) this.lblTips.string = '';
    this.btnLogin && this.btnLogin.on('click', function () {
      return _this.onLogin();
    }, this);
    this.btnRegister && this.btnRegister.on('click', function () {
      return _this.onRegister();
    }, this);
  },
  _setBusy: function _setBusy(b) {
    this._busy = !!b;
    if (this.lblTips) this.lblTips.string = b ? '处理中...' : '';
  },
  _toast: function _toast(msg) {
    if (this.lblTips) this.lblTips.string = msg;
    cc.log('[Login]', msg);
  },
  onLogin: function onLogin() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var email, pass;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this2._busy) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              email = (_this2.edtEmail && _this2.edtEmail.string || '').trim();
              pass = (_this2.edtPass && _this2.edtPass.string || '').trim();

              if (!(!email || !pass)) {
                _context.next = 7;
                break;
              }

              _this2._toast('请输入邮箱与密码');

              return _context.abrupt("return");

            case 7:
              _context.prev = 7;

              _this2._setBusy(true);

              _context.next = 11;
              return Auth.login({
                email: email,
                password: pass
              });

            case 11:
              _context.next = 13;
              return Auth.me();

            case 13:
              _this2._toast('登录成功，正在进入游戏...'); // 方案 A：LoadScriptScene 已加载资源包，直接进主场景


              cc.director.loadScene('Main'); // 方案 B：如把 LoginScene 设为启动场景，请改用：
              // cc.assetManager.loadBundle('game_script', (err, bundle)=>{
              //   if (err){ this._toast('资源包加载失败:'+err.message); return; }
              //   bundle.preloadScene('Main', ()=>cc.director.loadScene('Main'));
              // });

              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](7);

              _this2._toast('登录失败：' + (_context.t0 && _context.t0.message || ''));

            case 20:
              _context.prev = 20;

              _this2._setBusy(false);

              return _context.finish(20);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 17, 20, 23]]);
    }))();
  },
  onRegister: function onRegister() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var email, pass;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this3._busy) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              email = (_this3.edtEmail && _this3.edtEmail.string || '').trim();
              pass = (_this3.edtPass && _this3.edtPass.string || '').trim();

              if (!(!email || !pass)) {
                _context2.next = 7;
                break;
              }

              _this3._toast('请输入邮箱与密码');

              return _context2.abrupt("return");

            case 7:
              _context2.prev = 7;

              _this3._setBusy(true);

              _context2.next = 11;
              return Auth.register({
                email: email,
                password: pass
              });

            case 11:
              _this3._toast('注册成功，请登录');

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](7);

              _this3._toast('注册失败：' + (_context2.t0 && _context2.t0.message || ''));

            case 17:
              _context2.prev = 17;

              _this3._setBusy(false);

              return _context2.finish(17);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 14, 17, 20]]);
    }))();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXV0aFxcTG9naW5WaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZHRFbWFpbCIsIkVkaXRCb3giLCJlZHRQYXNzIiwiYnRuTG9naW4iLCJOb2RlIiwiYnRuUmVnaXN0ZXIiLCJsYmxUaXBzIiwiTGFiZWwiLCJvbkxvYWQiLCJfYnVzeSIsInN0cmluZyIsIm9uIiwib25Mb2dpbiIsIm9uUmVnaXN0ZXIiLCJfc2V0QnVzeSIsImIiLCJfdG9hc3QiLCJtc2ciLCJsb2ciLCJlbWFpbCIsInRyaW0iLCJwYXNzIiwibG9naW4iLCJwYXNzd29yZCIsIm1lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJtZXNzYWdlIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQXBCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FETDtFQUVQQyxVQUFVLEVBQUM7SUFDVEMsUUFBUSxFQUFLSixFQUFFLENBQUNLLE9BRFA7SUFFVEMsT0FBTyxFQUFNTixFQUFFLENBQUNLLE9BRlA7SUFHVEUsUUFBUSxFQUFLUCxFQUFFLENBQUNRLElBSFA7SUFJVEMsV0FBVyxFQUFFVCxFQUFFLENBQUNRLElBSlA7SUFLVEUsT0FBTyxFQUFNVixFQUFFLENBQUNXO0VBTFAsQ0FGSjtFQVNQQyxNQVRPLG9CQVNDO0lBQUE7O0lBQ04sS0FBS0MsS0FBTCxHQUFhLEtBQWI7SUFDQSxJQUFJLEtBQUtILE9BQVQsRUFBa0IsS0FBS0EsT0FBTCxDQUFhSSxNQUFiLEdBQXNCLEVBQXRCO0lBQ2xCLEtBQUtQLFFBQUwsSUFBb0IsS0FBS0EsUUFBTCxDQUFjUSxFQUFkLENBQWlCLE9BQWpCLEVBQTZCO01BQUEsT0FBSSxLQUFJ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TCxDQUFZLFVBQVo7O2NBSlA7O1lBQUE7Y0FBQTs7Y0FNZCxNQUFJLENBQUNGLFFBQUwsQ0FBYyxJQUFkOztjQU5jO2NBQUEsT0FPUnBCLElBQUksQ0FBQ2tDLFFBQUwsQ0FBYztnQkFBQ1QsS0FBSyxFQUFMQSxLQUFEO2dCQUFRSSxRQUFRLEVBQUVGO2NBQWxCLENBQWQsQ0FQUTs7WUFBQTtjQVFkLE1BQUksQ0FBQ0wsTUFBTCxDQUFZLFVBQVo7O2NBUmM7Y0FBQTs7WUFBQTtjQUFBO2NBQUE7O2NBVWQsTUFBSSxDQUFDQSxNQUFMLENBQVksV0FBVyxnQkFBSyxhQUFFVyxPQUFQLElBQWtCLEVBQTdCLENBQVo7O1lBVmM7Y0FBQTs7Y0FZZCxNQUFJLENBQUNiLFFBQUwsQ0FBYyxLQUFkOztjQVpjOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBY2pCO0FBeERNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEF1dGggPSByZXF1aXJlKCcuL0F1dGhTZXJ2aWNlJyk7XG5cbmNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICBwcm9wZXJ0aWVzOntcbiAgICBlZHRFbWFpbDogICAgY2MuRWRpdEJveCxcbiAgICBlZHRQYXNzOiAgICAgY2MuRWRpdEJveCxcbiAgICBidG5Mb2dpbjogICAgY2MuTm9kZSxcbiAgICBidG5SZWdpc3RlcjogY2MuTm9kZSxcbiAgICBsYmxUaXBzOiAgICAgY2MuTGFiZWwsXG4gIH0sXG4gIG9uTG9hZCgpe1xuICAgIHRoaXMuX2J1c3kgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5sYmxUaXBzKSB0aGlzLmxibFRpcHMuc3RyaW5nID0gJyc7XG4gICAgdGhpcy5idG5Mb2dpbiAgICAmJiB0aGlzLmJ0bkxvZ2luLm9uKCdjbGljaycsICAgICgpPT50aGlzLm9uTG9naW4oKSwgdGhpcyk7XG4gICAgdGhpcy5idG5SZWdpc3RlciAmJiB0aGlzLmJ0blJlZ2lzdGVyLm9uKCdjbGljaycsICgpPT50aGlzLm9uUmVnaXN0ZXIoKSwgdGhpcyk7XG4gIH0sXG4gIF9zZXRCdXN5KGIpeyB0aGlzLl9idXN5ID0gISFiOyBpZih0aGlzLmxibFRpcHMpIHRoaXMubGJsVGlwcy5zdHJpbmcgPSBiID8gJ+WkhOeQhuS4rS4uLicgOiAnJzsgfSxcbiAgX3RvYXN0KG1zZyl7IGlmKHRoaXMubGJsVGlwcykgdGhpcy5sYmxUaXBzLnN0cmluZyA9IG1zZzsgY2MubG9nKCdbTG9naW5dJywgbXNnKTsgfSxcblxuICBhc3luYyBvbkxvZ2luKCl7XG4gICAgaWYgKHRoaXMuX2J1c3kpIHJldHVybjtcbiAgICBjb25zdCBlbWFpbCA9ICh0aGlzLmVkdEVtYWlsICYmIHRoaXMuZWR0RW1haWwuc3RyaW5nIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3QgcGFzcyAgPSAodGhpcy5lZHRQYXNzICAmJiB0aGlzLmVkdFBhc3Muc3RyaW5nICB8fCAnJykudHJpbSgpO1xuICAgIGlmICghZW1haWwgfHwgIXBhc3MpIHsgdGhpcy5fdG9hc3QoJ+ivt+i+k+WFpemCrueuseS4juWvhueggScpOyByZXR1cm47IH1cbiAgICB0cnl7XG4gICAgICB0aGlzLl9zZXRCdXN5KHRydWUpO1xuICAgICAgYXdhaXQgQXV0aC5sb2dpbih7ZW1haWwsIHBhc3N3b3JkOiBwYXNzfSk7XG4gICAgICBhd2FpdCBBdXRoLm1lKCk7XG4gICAgICB0aGlzLl90b2FzdCgn55m75b2V5oiQ5Yqf77yM5q2j5Zyo6L+b5YWl5ri45oiPLi4uJyk7XG4gICAgICAvLyDmlrnmoYggQe+8mkxvYWRTY3JpcHRTY2VuZSDlt7LliqDovb3otYTmupDljIXvvIznm7TmjqXov5vkuLvlnLrmma9cbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbicpO1xuICAgICAgLy8g5pa55qGIIELvvJrlpoLmioogTG9naW5TY2VuZSDorr7kuLrlkK/liqjlnLrmma/vvIzor7fmlLnnlKjvvJpcbiAgICAgIC8vIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCdnYW1lX3NjcmlwdCcsIChlcnIsIGJ1bmRsZSk9PntcbiAgICAgIC8vICAgaWYgKGVycil7IHRoaXMuX3RvYXN0KCfotYTmupDljIXliqDovb3lpLHotKU6JytlcnIubWVzc2FnZSk7IHJldHVybjsgfVxuICAgICAgLy8gICBidW5kbGUucHJlbG9hZFNjZW5lKCdNYWluJywgKCk9PmNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbicpKTtcbiAgICAgIC8vIH0pO1xuICAgIH1jYXRjaChlKXtcbiAgICAgIHRoaXMuX3RvYXN0KCfnmbvlvZXlpLHotKXvvJonICsgKGUgJiYgZS5tZXNzYWdlIHx8ICcnKSk7XG4gICAgfWZpbmFsbHl7XG4gICAgICB0aGlzLl9zZXRCdXN5KGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgb25SZWdpc3Rlcigpe1xuICAgIGlmICh0aGlzLl9idXN5KSByZXR1cm47XG4gICAgY29uc3QgZW1haWwgPSAodGhpcy5lZHRFbWFpbCAmJiB0aGlzLmVkdEVtYWlsLnN0cmluZyB8fCAnJykudHJpbSgpO1xuICAgIGNvbnN0IHBhc3MgID0gKHRoaXMuZWR0UGFzcyAgJiYgdGhpcy5lZHRQYXNzLnN0cmluZyAgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzKSB7IHRoaXMuX3RvYXN0KCfor7fovpPlhaXpgq7nrrHkuI7lr4bnoIEnKTsgcmV0dXJuOyB9XG4gICAgdHJ5e1xuICAgICAgdGhpcy5fc2V0QnVzeSh0cnVlKTtcbiAgICAgIGF3YWl0IEF1dGgucmVnaXN0ZXIoe2VtYWlsLCBwYXNzd29yZDogcGFzc30pO1xuICAgICAgdGhpcy5fdG9hc3QoJ+azqOWGjOaIkOWKn++8jOivt+eZu+W9lScpO1xuICAgIH1jYXRjaChlKXtcbiAgICAgIHRoaXMuX3RvYXN0KCfms6jlhozlpLHotKXvvJonICsgKGUgJiYgZS5tZXNzYWdlIHx8ICcnKSk7XG4gICAgfWZpbmFsbHl7XG4gICAgICB0aGlzLl9zZXRCdXN5KGZhbHNlKTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==