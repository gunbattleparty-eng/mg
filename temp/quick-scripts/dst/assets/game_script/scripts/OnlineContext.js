
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/OnlineContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4f60TZ691BqINefUJww2BQ', 'OnlineContext');
// game_script/scripts/OnlineContext.js

"use strict";

var $countDownUtil = require("./CountDownUtil");

var $storageUtil = require("./StorageUtil");

var $util = require("./Util");

var $configContext = require("./ConfigContext");

var $localName = require("./LocalName");

var l = function () {
  function t() {
    this.onlineRecord = null;
    this.onlineRecord = $storageUtil.StorageUtil.getItem($localName["default"].ONLINE_RECORD, this.onlineRecord);
  }

  Object.defineProperty(t, "Ins", {
    get: function get() {
      if (!t.instance) {
        t.instance = new t();
      }

      return t.instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.init = function () {
    var t = this;

    if (!(this.onlineRecord && $util["default"].isToday(this.onlineRecord.day))) {
      this.onlineRecord = {
        gain: [],
        time: 0,
        day: $countDownUtil.CountDownUtil.currTime
      };
    }

    setInterval(function () {
      t.refresh();
      $countDownUtil.CountDownUtil.currTime = Date.now();
    }, 1e3);
  };

  t.prototype.hasRedDot = function () {
    for (var t = 0; t < $configContext["default"].instance.onlineConfigs.length; t++) {
      var e = $configContext["default"].instance.onlineConfigs[t];

      if (this.getTime() >= e.time && !this.hasGain(e.id)) {
        return !0;
      }
    }

    return !1;
  };

  t.prototype.refresh = function () {
    this.onlineRecord.time++;
    $storageUtil.StorageUtil.setItem($localName["default"].ONLINE_RECORD, this.onlineRecord);
  };

  t.prototype.hasGain = function (t) {
    return !!this.onlineRecord.gain[t - 1];
  };

  t.prototype.setRecrodGain = function (t) {
    this.onlineRecord.gain[t - 1] = !0;
    $storageUtil.StorageUtil.setItem($localName["default"].ONLINE_RECORD, this.onlineRecord);
  };

  t.prototype.getTime = function () {
    return this.onlineRecord.time;
  };

  return t;
}();

exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXE9ubGluZUNvbnRleHQuanMiXSwibmFtZXMiOlsiJGNvdW50RG93blV0aWwiLCJyZXF1aXJlIiwiJHN0b3JhZ2VVdGlsIiwiJHV0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRsb2NhbE5hbWUiLCJsIiwidCIsIm9ubGluZVJlY29yZCIsIlN0b3JhZ2VVdGlsIiwiZ2V0SXRlbSIsIk9OTElORV9SRUNPUkQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImluc3RhbmNlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByb3RvdHlwZSIsImluaXQiLCJpc1RvZGF5IiwiZGF5IiwiZ2FpbiIsInRpbWUiLCJDb3VudERvd25VdGlsIiwiY3VyclRpbWUiLCJzZXRJbnRlcnZhbCIsInJlZnJlc2giLCJEYXRlIiwibm93IiwiaGFzUmVkRG90Iiwib25saW5lQ29uZmlncyIsImxlbmd0aCIsImUiLCJnZXRUaW1lIiwiaGFzR2FpbiIsImlkIiwic2V0SXRlbSIsInNldFJlY3JvZEdhaW4iLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGNBQWMsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsS0FBSyxHQUFHRixPQUFPLENBQUMsUUFBRCxDQUFuQjs7QUFDQSxJQUFJRyxjQUFjLEdBQUdILE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJSSxVQUFVLEdBQUdKLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlLLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLFlBQUwsR0FBb0IsSUFBcEI7SUFDQSxLQUFLQSxZQUFMLEdBQW9CTixZQUFZLENBQUNPLFdBQWIsQ0FBeUJDLE9BQXpCLENBQWlDTCxV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QUNILENBRkQ7O0VBR0EsT0FBT2hCLENBQVA7QUFDSCxDQXJETyxFQUFSOztBQXNEQWdDLE9BQU8sV0FBUCxHQUFrQmpDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGNvdW50RG93blV0aWwgPSByZXF1aXJlKFwiLi9Db3VudERvd25VdGlsXCIpO1xyXG52YXIgJHN0b3JhZ2VVdGlsID0gcmVxdWlyZShcIi4vU3RvcmFnZVV0aWxcIik7XHJcbnZhciAkdXRpbCA9IHJlcXVpcmUoXCIuL1V0aWxcIik7XHJcbnZhciAkY29uZmlnQ29udGV4dCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnRleHRcIik7XHJcbnZhciAkbG9jYWxOYW1lID0gcmVxdWlyZShcIi4vTG9jYWxOYW1lXCIpO1xyXG52YXIgbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge1xyXG4gICAgICAgIHRoaXMub25saW5lUmVjb3JkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9ubGluZVJlY29yZCA9ICRzdG9yYWdlVXRpbC5TdG9yYWdlVXRpbC5nZXRJdGVtKCRsb2NhbE5hbWUuZGVmYXVsdC5PTkxJTkVfUkVDT1JELCB0aGlzLm9ubGluZVJlY29yZCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJJbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXQuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHQuaW5zdGFuY2UgPSBuZXcgdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0Lmluc3RhbmNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogITEsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgfSk7XHJcbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICBpZiAoISh0aGlzLm9ubGluZVJlY29yZCAmJiAkdXRpbC5kZWZhdWx0LmlzVG9kYXkodGhpcy5vbmxpbmVSZWNvcmQuZGF5KSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbmxpbmVSZWNvcmQgPSB7XHJcbiAgICAgICAgICAgICAgICBnYWluOiBbXSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICBkYXk6ICRjb3VudERvd25VdGlsLkNvdW50RG93blV0aWwuY3VyclRpbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgJGNvdW50RG93blV0aWwuQ291bnREb3duVXRpbC5jdXJyVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfSwgMWUzKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5oYXNSZWREb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLm9ubGluZUNvbmZpZ3MubGVuZ3RoOyB0KyspIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLm9ubGluZUNvbmZpZ3NbdF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRpbWUoKSA+PSBlLnRpbWUgJiYgIXRoaXMuaGFzR2FpbihlLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhMTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub25saW5lUmVjb3JkLnRpbWUrKztcclxuICAgICAgICAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuc2V0SXRlbSgkbG9jYWxOYW1lLmRlZmF1bHQuT05MSU5FX1JFQ09SRCwgdGhpcy5vbmxpbmVSZWNvcmQpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmhhc0dhaW4gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25saW5lUmVjb3JkLmdhaW5bdCAtIDFdO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnNldFJlY3JvZEdhaW4gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMub25saW5lUmVjb3JkLmdhaW5bdCAtIDFdID0gITA7XHJcbiAgICAgICAgJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLnNldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0Lk9OTElORV9SRUNPUkQsIHRoaXMub25saW5lUmVjb3JkKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ubGluZVJlY29yZC50aW1lO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBsO1xyXG4iXX0=