
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/CacheContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0dc36aJ6g9DTKmnXMinWtp7', 'CacheContext');
// game_script/scripts/CacheContext.js

"use strict";

exports.CacheContext = void 0;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resManager = require("./ResManager");

var r = function () {
  function t() {
    this.bundleNames = [];
    this.cacheMaxBundleCount = 5;
    this.cacheMusicPath = new Map();
    this.cacheAudio = new Map();
  }

  t.prototype.cacheBundle = function (t) {
    if (this.bundleNames.includes(t)) {
      var e = this.bundleNames.indexOf(t);
      var i = this.bundleNames.splice(e, 1)[0];
      this.bundleNames.push(i);
    } else {
      this.bundleNames.push(t);

      if (this.bundleNames.length > this.cacheMaxBundleCount) {
        var o = this.bundleNames.shift();
        $resManager.ResManager.instance.releaseBundle(o);
      }
    }
  };

  t.prototype.playMusic = function (t, e, i) {
    var s = this;

    if (!this.cacheMusicPath.has(t)) {
      this.cacheMusicPath.set(t, new Set());
    }

    this.cacheMusicPath.get(t).add(e);
    this.cacheAudio.has(e) ? i && i(this.cacheAudio.get(e)) : $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/sounds/" + e], cc.AudioClip, null, function (t, o) {
      console.log("加载音频", e);
      var n = o[0];
      s.cacheAudio.set(e, n);

      if (n && i) {
        i(n);
      }
    });
  };

  t.prototype.clearMusic = function (t) {
    var e = this;

    if (this.cacheMusicPath.has(t)) {
      console.log("释放音频资源");
      this.cacheMusicPath.get(t).forEach(function (t) {
        e.cacheAudio["delete"](t);
        cc.assetManager.getBundle("public_other").release("/sounds/" + t);
      });
    }
  };

  t.instance = new t();
  return t;
}();

exports.CacheContext = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENhY2hlQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQ2FjaGVDb250ZXh0IiwiJGFzc2V0c0xvYWRlciIsInJlcXVpcmUiLCIkYXNzZXRzTWFwIiwiJHJlc01hbmFnZXIiLCJyIiwidCIsImJ1bmRsZU5hbWVzIiwiY2FjaGVNYXhCdW5kbGVDb3VudCIsImNhY2hlTXVzaWNQYXRoIiwiTWFwIiwiY2FjaGVBdWRpbyIsInByb3RvdHlwZSIsImNhY2hlQnVuZGxlIiwiaW5jbHVkZXMiLCJlIiwiaW5kZXhPZiIsImkiLCJzcGxpY2UiLCJwdXNoIiwibGVuZ3RoIiwibyIsInNoaWZ0IiwiUmVzTWFuYWdlciIsImluc3RhbmNlIiwicmVsZWFzZUJ1bmRsZSIsInBsYXlNdXNpYyIsInMiLCJoYXMiLCJzZXQiLCJTZXQiLCJnZXQiLCJhZGQiLCJsb2FkUmVzIiwiQnVuZGxlTmFtZXMiLCJQdWJsaWNfUmVzIiwiY2MiLCJBdWRpb0NsaXAiLCJjb25zb2xlIiwibG9nIiwibiIsImNsZWFyTXVzaWMiLCJmb3JFYWNoIiwiYXNzZXRNYW5hZ2VyIiwiZ2V0QnVuZGxlIiwicmVsZWFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxZQUFSLEdBQXVCLEtBQUssQ0FBNUI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlHLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLFdBQUwsR0FBbUIsRUFBbkI7SUFDQSxLQUFLQyxtQkFBTCxHQUEyQixDQUEzQjtJQUNBLEtBQUtDLGNBQUwsR0FBc0IsSUFBSUMsR0FBSixFQUF0QjtJ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QixDQUEwQixjQUExQixFQUEwQ0MsT0FBMUMsQ0FBa0QsYUFBYXZDLENBQS9EO01BQ0gsQ0FIRDtJQUlIO0VBQ0osQ0FURDs7RUFVQUEsQ0FBQyxDQUFDa0IsUUFBRixHQUFhLElBQUlsQixDQUFKLEVBQWI7RUFDQSxPQUFPQSxDQUFQO0FBQ0gsQ0F2RE8sRUFBUjs7QUF3REFQLE9BQU8sQ0FBQ0MsWUFBUixHQUF1QkssQ0FBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuQ2FjaGVDb250ZXh0ID0gdm9pZCAwO1xyXG52YXIgJGFzc2V0c0xvYWRlciA9IHJlcXVpcmUoXCIuL0Fzc2V0c0xvYWRlclwiKTtcclxudmFyICRhc3NldHNNYXAgPSByZXF1aXJlKFwiLi9Bc3NldHNNYXBcIik7XHJcbnZhciAkcmVzTWFuYWdlciA9IHJlcXVpcmUoXCIuL1Jlc01hbmFnZXJcIik7XHJcbnZhciByID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7XHJcbiAgICAgICAgdGhpcy5idW5kbGVOYW1lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FjaGVNYXhCdW5kbGVDb3VudCA9IDU7XHJcbiAgICAgICAgdGhpcy5jYWNoZU11c2ljUGF0aCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNhY2hlQXVkaW8gPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICB0LnByb3RvdHlwZS5jYWNoZUJ1bmRsZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVuZGxlTmFtZXMuaW5jbHVkZXModCkpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmJ1bmRsZU5hbWVzLmluZGV4T2YodCk7XHJcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5idW5kbGVOYW1lcy5zcGxpY2UoZSwgMSlbMF07XHJcbiAgICAgICAgICAgIHRoaXMuYnVuZGxlTmFtZXMucHVzaChpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1bmRsZU5hbWVzLnB1c2godCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bmRsZU5hbWVzLmxlbmd0aCA+IHRoaXMuY2FjaGVNYXhCdW5kbGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmJ1bmRsZU5hbWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAkcmVzTWFuYWdlci5SZXNNYW5hZ2VyLmluc3RhbmNlLnJlbGVhc2VCdW5kbGUobyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucGxheU11c2ljID0gZnVuY3Rpb24gKHQsIGUsIGkpIHtcclxuICAgICAgICB2YXIgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlTXVzaWNQYXRoLmhhcyh0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlTXVzaWNQYXRoLnNldCh0LCBuZXcgU2V0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhY2hlTXVzaWNQYXRoLmdldCh0KS5hZGQoZSk7XHJcbiAgICAgICAgdGhpcy5jYWNoZUF1ZGlvLmhhcyhlKVxyXG4gICAgICAgICAgICA/IGkgJiYgaSh0aGlzLmNhY2hlQXVkaW8uZ2V0KGUpKVxyXG4gICAgICAgICAgICA6ICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5sb2FkUmVzKFxyXG4gICAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkJ1bmRsZU5hbWVzLlB1YmxpY19SZXMsXHJcbiAgICAgICAgICAgICAgICAgIFtcIi9zb3VuZHMvXCIgKyBlXSxcclxuICAgICAgICAgICAgICAgICAgY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodCwgbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3pn7PpopFcIiwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG9bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICBzLmNhY2hlQXVkaW8uc2V0KGUsIG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG4gJiYgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkobik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmNsZWFyTXVzaWMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5jYWNoZU11c2ljUGF0aC5oYXModCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLph4rmlL7pn7PpopHotYTmupBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNdXNpY1BhdGguZ2V0KHQpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIGUuY2FjaGVBdWRpby5kZWxldGUodCk7XHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwicHVibGljX290aGVyXCIpLnJlbGVhc2UoXCIvc291bmRzL1wiICsgdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0Lmluc3RhbmNlID0gbmV3IHQoKTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLkNhY2hlQ29udGV4dCA9IHI7XHJcbiJdfQ==