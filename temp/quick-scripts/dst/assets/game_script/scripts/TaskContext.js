
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TaskContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55a2412NxpNyqYUv0EoJgNF', 'TaskContext');
// game_script/scripts/TaskContext.js

"use strict";

var $eventManager = require("./EventManager");

var $storageUtil = require("./StorageUtil");

var $util = require("./Util");

var $startView = require("./StartView");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $localName = require("./LocalName");

var u = function () {
  function t() {
    this.taskRecord = [];
    this.taskTime = 0;
    this.taskRecord = $storageUtil.StorageUtil.getItem($localName["default"].TAKS_RECORD, this.taskRecord);
    this.taskTime = $storageUtil.StorageUtil.getItem($localName["default"].TASK_TIME, this.taskTime);
    var t = $util["default"].startDayTimestamp();

    if (this.taskTime < t) {
      this.taskRecord.length = 0;
      this.taskTime = t;
    }
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

  t.prototype.getTaskRecord = function (t) {
    return this.taskRecord[t - 1] ? this.taskRecord[t - 1] : {
      isGain: !1,
      num: 0
    };
  };

  t.prototype.setTaskRecord = function (t, e) {
    if (void 0 === e) {
      e = 1;
    }

    if (0 !== e) {
      if (!this.taskRecord[t - 1]) {
        this.taskRecord[t - 1] = {
          isGain: !1,
          num: 0
        };
      }

      this.taskRecord[t - 1].num += e;
      $storageUtil.StorageUtil.setItem($localName["default"].TAKS_RECORD, this.taskRecord);
      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Battle);
    }
  };

  t.prototype.hasRedDot = function () {
    for (var t = 0; t < $configContext["default"].instance.taskConfigs.length; t++) {
      var e = $configContext["default"].instance.taskConfigs[t];
      var i = this.getTaskRecord(e.id);

      if (!i.isGain && i.num >= e.target_num) {
        return !0;
      }
    }

    return !1;
  };

  t.prototype.gainTask = function (t) {
    this.taskRecord[t - 1].isGain = !0;
    $storageUtil.StorageUtil.setItem($localName["default"].TASK_TIME, this.taskTime);
  };

  return t;
}();

exports["default"] = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRhc2tDb250ZXh0LmpzIl0sIm5hbWVzIjpbIiRldmVudE1hbmFnZXIiLCJyZXF1aXJlIiwiJHN0b3JhZ2VVdGlsIiwiJHV0aWwiLCIkc3RhcnRWaWV3IiwiJGNvbmZpZ0NvbnRleHQiLCIkbG9jYWxFdmVudE5hbWUiLCIkbG9jYWxOYW1lIiwidSIsInQiLCJ0YXNrUmVjb3JkIiwidGFza1RpbWUiLCJTdG9yYWdlVXRpbCIsImdldEl0ZW0iLCJUQUtTX1JFQ09SRCIsIlRBU0tfVElNRSIsInN0YXJ0RGF5VGltZXN0YW1wIiwibGVuZ3RoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJpbnN0YW5jZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcm90b3R5cGUiLCJnZXRUYXNrUmVjb3JkIiwiaXNHYWluIiwibnVtIiwic2V0VGFza1JlY29yZCIsImUiLCJzZXRJdGVtIiwic2VuZCIsIlJFTkRFUl9ET1QiLCJNZW51VHlwZSIsIkJhdHRsZSIsImhhc1JlZERvdCIsInRhc2tDb25maWdzIiwiaSIsImlkIiwidGFyZ2V0X251bSIsImdhaW5UYXNrIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlFLEtBQUssR0FBR0YsT0FBTyxDQUFDLFFBQUQsQ0FBbkI7O0FBQ0EsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJSSxjQUFjLEdBQUdKLE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJSyxlQUFlLEdBQUdMLE9BQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxJQUFJTSxVQUFVLEdBQUdOLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNB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LENBQTVDLENBQVI7TUFDQSxJQUFJNEIsQ0FBQyxHQUFHLEtBQUtaLGFBQUwsQ0FBbUJJLENBQUMsQ0FBQ1MsRUFBckIsQ0FBUjs7TUFDQSxJQUFJLENBQUNELENBQUMsQ0FBQ1gsTUFBSCxJQUFhVyxDQUFDLENBQUNWLEdBQUYsSUFBU0UsQ0FBQyxDQUFDVSxVQUE1QixFQUF3QztRQUNwQyxPQUFPLENBQUMsQ0FBUjtNQUNIO0lBQ0o7O0lBQ0QsT0FBTyxDQUFDLENBQVI7RUFDSCxDQVREOztFQVVBOUIsQ0FBQyxDQUFDZSxTQUFGLENBQVlnQixRQUFaLEdBQXVCLFVBQVUvQixDQUFWLEVBQWE7SUFDaEMsS0FBS0MsVUFBTCxDQUFnQkQsQ0FBQyxHQUFHLENBQXBCLEVBQXVCaUIsTUFBdkIsR0FBZ0MsQ0FBQyxDQUFqQztJQUNBeEIsWUFBWSxDQUFDVSxXQUFiLENBQXlCa0IsT0FBekIsQ0FBaUN2QixVQUFVLFdBQVYsQ0FBbUJRLFNBQXBELEVBQStELEtBQUtKLFFBQXBFO0VBQ0gsQ0FIRDs7RUFJQSxPQUFPRixDQUFQO0FBQ0gsQ0E3RE8sRUFBUjs7QUE4REFnQyxPQUFPLFdBQVAsR0FBa0JqQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRldmVudE1hbmFnZXIgPSByZXF1aXJlKFwiLi9FdmVudE1hbmFnZXJcIik7XHJcbnZhciAkc3RvcmFnZVV0aWwgPSByZXF1aXJlKFwiLi9TdG9yYWdlVXRpbFwiKTtcclxudmFyICR1dGlsID0gcmVxdWlyZShcIi4vVXRpbFwiKTtcclxudmFyICRzdGFydFZpZXcgPSByZXF1aXJlKFwiLi9TdGFydFZpZXdcIik7XHJcbnZhciAkY29uZmlnQ29udGV4dCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnRleHRcIik7XHJcbnZhciAkbG9jYWxFdmVudE5hbWUgPSByZXF1aXJlKFwiLi9Mb2NhbEV2ZW50TmFtZVwiKTtcclxudmFyICRsb2NhbE5hbWUgPSByZXF1aXJlKFwiLi9Mb2NhbE5hbWVcIik7XHJcbnZhciB1ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrUmVjb3JkID0gW107XHJcbiAgICAgICAgdGhpcy50YXNrVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy50YXNrUmVjb3JkID0gJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLmdldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LlRBS1NfUkVDT1JELCB0aGlzLnRhc2tSZWNvcmQpO1xyXG4gICAgICAgIHRoaXMudGFza1RpbWUgPSAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuZ2V0SXRlbSgkbG9jYWxOYW1lLmRlZmF1bHQuVEFTS19USU1FLCB0aGlzLnRhc2tUaW1lKTtcclxuICAgICAgICB2YXIgdCA9ICR1dGlsLmRlZmF1bHQuc3RhcnREYXlUaW1lc3RhbXAoKTtcclxuICAgICAgICBpZiAodGhpcy50YXNrVGltZSA8IHQpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrUmVjb3JkLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGFza1RpbWUgPSB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIkluc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdC5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdC5pbnN0YW5jZSA9IG5ldyB0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHQuaW5zdGFuY2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcclxuICAgICAgICBjb25maWd1cmFibGU6ICEwXHJcbiAgICB9KTtcclxuICAgIHQucHJvdG90eXBlLmdldFRhc2tSZWNvcmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tSZWNvcmRbdCAtIDFdXHJcbiAgICAgICAgICAgID8gdGhpcy50YXNrUmVjb3JkW3QgLSAxXVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgaXNHYWluOiAhMSxcclxuICAgICAgICAgICAgICAgICAgbnVtOiAwXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5zZXRUYXNrUmVjb3JkID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XHJcbiAgICAgICAgICAgIGUgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoMCAhPT0gZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGFza1JlY29yZFt0IC0gMV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1JlY29yZFt0IC0gMV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNHYWluOiAhMSxcclxuICAgICAgICAgICAgICAgICAgICBudW06IDBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50YXNrUmVjb3JkW3QgLSAxXS5udW0gKz0gZTtcclxuICAgICAgICAgICAgJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLnNldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LlRBS1NfUkVDT1JELCB0aGlzLnRhc2tSZWNvcmQpO1xyXG4gICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLmRlZmF1bHQuc2VuZCgkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5SRU5ERVJfRE9ULCAkc3RhcnRWaWV3Lk1lbnVUeXBlLkJhdHRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmhhc1JlZERvdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UudGFza0NvbmZpZ3MubGVuZ3RoOyB0KyspIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnRhc2tDb25maWdzW3RdO1xyXG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0VGFza1JlY29yZChlLmlkKTtcclxuICAgICAgICAgICAgaWYgKCFpLmlzR2FpbiAmJiBpLm51bSA+PSBlLnRhcmdldF9udW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gITE7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2FpblRhc2sgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMudGFza1JlY29yZFt0IC0gMV0uaXNHYWluID0gITA7XHJcbiAgICAgICAgJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLnNldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LlRBU0tfVElNRSwgdGhpcy50YXNrVGltZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHU7XHJcbiJdfQ==