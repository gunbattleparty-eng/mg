
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

// assets/scripts/auth/LoginView.js
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
    this.lblTips && (this.lblTips.string = '');
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
              _this2._toast('登录成功，正在进入游戏...');

              cc.director.loadScene('Main'); // 你的主场景名

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
  },
  _toast: function _toast(msg) {
    if (this.lblTips) this.lblTips.string = msg;
    cc.log('[Login]', msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXV0aFxcTG9naW5WaWV3LmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZHRFbWFpbCIsIkVkaXRCb3giLCJlZHRQYXNzIiwiYnRuTG9naW4iLCJOb2RlIiwiYnRuUmVnaXN0ZXIiLCJsYmxUaXBzIiwiTGFiZWwiLCJvbkxvYWQiLCJfYnVzeSIsInN0cmluZyIsIm9uIiwib25Mb2dpbiIsIm9uUmVnaXN0ZXIiLCJfc2V0QnVzeSIsImIiLCJlbWFpbCIsInRyaW0iLCJwYXNzIiwiX3RvYXN0IiwibG9naW4iLCJwYXNzd29yZCIsIm1lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJtZXNzYWdlIiwicmVnaXN0ZXIiLCJtc2ciLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBOzs7Ozs7QUFEQTtBQUNBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ1AsV0FBU0QsRUFBRSxDQUFDRSxTQURMO0VBRVBDLFVBQVUsRUFBQztJQUNUQyxRQUFRLEVBQUlKLEVBQUUsQ0FBQ0ssT0FETjtJQUVUQyxPQUFPLEVBQUtOLEVBQUUsQ0FBQ0ssT0FGTjtJQUdURSxRQUFRLEVBQUlQLEVBQUUsQ0FBQ1EsSUFITjtJQUlUQyxXQUFXLEVBQUNULEVBQUUsQ0FBQ1EsSUFKTjtJQUtURSxPQUFPLEVBQUtWLEVBQUUsQ0FBQ1c7RUFMTixDQUZKO0VBU1BDLE1BVE8sb0JBU0M7SUFBQTs7SUFDTixLQUFLQyxLQUFMLEdBQWEsS0FBYjtJQUNBLEtBQUtILE9BQUwsS0FBaUIsS0FBS0EsT0FBTCxDQUFhSSxNQUFiLEdBQXNCLEVBQXZDO0lBQ0EsS0FBS1AsUUFBTCxJQUFpQixLQUFLQSxRQUFMLENBQWNRLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEI7TUFBQSxPQUFJLEtBQUks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QVo7O2NBUmM7Y0FBQTs7WUFBQTtjQUFBO2NBQUE7O2NBVWQsTUFBSSxDQUFDQSxNQUFMLENBQVksV0FBVSxnQkFBSyxhQUFFTSxPQUFQLElBQWtCLEVBQTVCLENBQVo7O1lBVmM7Y0FBQTs7Y0FXTixNQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkOztjQVhNOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBO0VBWWpCLENBM0NNO0VBNENQSyxNQTVDTyxrQkE0Q0FRLEdBNUNBLEVBNENJO0lBQUUsSUFBRyxLQUFLckIsT0FBUixFQUFpQixLQUFLQSxPQUFMLENBQWFJLE1BQWIsR0FBc0JpQixHQUF0QjtJQUEyQi9CLEVBQUUsQ0FBQ2dDLEdBQUgsQ0FBTyxTQUFQLEVBQWtCRCxHQUFsQjtFQUF5QjtBQTVDM0UsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvYXV0aC9Mb2dpblZpZXcuanNcbmNvbnN0IEF1dGggPSByZXF1aXJlKCcuL0F1dGhTZXJ2aWNlJyk7XG5jYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgcHJvcGVydGllczp7XG4gICAgZWR0RW1haWw6ICAgY2MuRWRpdEJveCxcbiAgICBlZHRQYXNzOiAgICBjYy5FZGl0Qm94LFxuICAgIGJ0bkxvZ2luOiAgIGNjLk5vZGUsXG4gICAgYnRuUmVnaXN0ZXI6Y2MuTm9kZSxcbiAgICBsYmxUaXBzOiAgICBjYy5MYWJlbCxcbiAgfSxcbiAgb25Mb2FkKCl7XG4gICAgdGhpcy5fYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMubGJsVGlwcyAmJiAodGhpcy5sYmxUaXBzLnN0cmluZyA9ICcnKTtcbiAgICB0aGlzLmJ0bkxvZ2luICYmIHRoaXMuYnRuTG9naW4ub24oJ2NsaWNrJywgKCk9PnRoaXMub25Mb2dpbigpLCB0aGlzKTtcbiAgICB0aGlzLmJ0blJlZ2lzdGVyICYmIHRoaXMuYnRuUmVnaXN0ZXIub24oJ2NsaWNrJywgKCk9PnRoaXMub25SZWdpc3RlcigpLCB0aGlzKTtcbiAgfSxcbiAgX3NldEJ1c3koYil7IHRoaXMuX2J1c3kgPSAhIWI7IGlmKHRoaXMubGJsVGlwcykgdGhpcy5sYmxUaXBzLnN0cmluZyA9IGIgPyAn5aSE55CG5LitLi4uJyA6ICcnOyB9LFxuICBhc3luYyBvbkxvZ2luKCl7XG4gICAgaWYodGhpcy5fYnVzeSkgcmV0dXJuO1xuICAgIGNvbnN0IGVtYWlsID0gKHRoaXMuZWR0RW1haWwgJiYgdGhpcy5lZHRFbWFpbC5zdHJpbmcgfHwgJycpLnRyaW0oKTtcbiAgICBjb25zdCBwYXNzICA9ICh0aGlzLmVkdFBhc3MgICYmIHRoaXMuZWR0UGFzcy5zdHJpbmcgIHx8ICcnKS50cmltKCk7XG4gICAgaWYoIWVtYWlsIHx8ICFwYXNzKXsgdGhpcy5fdG9hc3QoJ+ivt+i+k+WFpemCrueuseS4juWvhueggScpOyByZXR1cm47IH1cbiAgICB0cnl7XG4gICAgICB0aGlzLl9zZXRCdXN5KHRydWUpO1xuICAgICAgYXdhaXQgQXV0aC5sb2dpbih7ZW1haWwsIHBhc3N3b3JkOiBwYXNzfSk7XG4gICAgICBhd2FpdCBBdXRoLm1lKCk7XG4gICAgICB0aGlzLl90b2FzdCgn55m75b2V5oiQ5Yqf77yM5q2j5Zyo6L+b5YWl5ri45oiPLi4uJyk7XG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW4nKTsgLy8g5L2g55qE5Li75Zy65pmv5ZCNXG4gICAgfWNhdGNoKGUpe1xuICAgICAgdGhpcy5fdG9hc3QoJ+eZu+W9leWksei0pe+8micrIChlICYmIGUubWVzc2FnZSB8fCAnJykpO1xuICAgIH1maW5hbGx5eyB0aGlzLl9zZXRCdXN5KGZhbHNlKTsgfVxuICB9LFxuICBhc3luYyBvblJlZ2lzdGVyKCl7XG4gICAgaWYodGhpcy5fYnVzeSkgcmV0dXJuO1xuICAgIGNvbnN0IGVtYWlsID0gKHRoaXMuZWR0RW1haWwgJiYgdGhpcy5lZHRFbWFpbC5zdHJpbmcgfHwgJycpLnRyaW0oKTtcbiAgICBjb25zdCBwYXNzICA9ICh0aGlzLmVkdFBhc3MgICYmIHRoaXMuZWR0UGFzcy5zdHJpbmcgIHx8ICcnKS50cmltKCk7XG4gICAgaWYoIWVtYWlsIHx8ICFwYXNzKXsgdGhpcy5fdG9hc3QoJ+ivt+i+k+WFpemCrueuseS4juWvhueggScpOyByZXR1cm47IH1cbiAgICB0cnl7XG4gICAgICB0aGlzLl9zZXRCdXN5KHRydWUpO1xuICAgICAgYXdhaXQgQXV0aC5yZWdpc3Rlcih7ZW1haWwsIHBhc3N3b3JkOiBwYXNzfSk7XG4gICAgICB0aGlzLl90b2FzdCgn5rOo5YaM5oiQ5Yqf77yM6K+355m75b2VJyk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgdGhpcy5fdG9hc3QoJ+azqOWGjOWksei0pe+8micrIChlICYmIGUubWVzc2FnZSB8fCAnJykpO1xuICAgIH1maW5hbGx5eyB0aGlzLl9zZXRCdXN5KGZhbHNlKTsgfVxuICB9LFxuICBfdG9hc3QobXNnKXsgaWYodGhpcy5sYmxUaXBzKSB0aGlzLmxibFRpcHMuc3RyaW5nID0gbXNnOyBjYy5sb2coJ1tMb2dpbl0nLCBtc2cpOyB9XG59KTtcbiJdfQ==