
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/WaitingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef325BoUgpFL7qd0lXmq7Yg', 'WaitingManager');
// game_script/scripts/WaitingManager.js

"use strict";

exports.WaitingManager = void 0;

var $countDownUtil = require("./CountDownUtil");

var $uICache = require("./UICache");

var $uIManager = require("./UIManager");

var $uIParam = require("./UIParam");

var a = function () {
  function t() {
    this.uiManager = $uIManager.UIManager.instance;
    this.uiCache = $uICache.UICache.instance;
  }

  t.prototype.show = function (t, e, i) {
    var n = this;

    if (void 0 === t) {
      t = 5;
    }

    if (void 0 === i) {
      i = 0;
    }

    if (0 === i) {
      var s = this.uiCache.getBaseUI($uIParam.LayerType.WAITING);
      this.uiManager.uiAddScene($uIParam.LayerType.WAITING, s);
      s.node.parent = this.uiManager.layerWaitding;
      s.registerCallback(e, t);
    } else {
      $countDownUtil.CountDownUtil.scheduleOnce(function () {
        n.show(t, e, 0);
      }, this, i);
    }
  };

  t.prototype.close = function (t) {
    if (!cc.isValid(t)) {
      $countDownUtil.CountDownUtil.unSchedule(this);
      var e = this.uiCache.getCurrView($uIParam.LayerType.WAITING);

      if (0 === e.length) {
        return;
      }

      t = e[0];
    }

    this.uiManager.uiRemoveScene($uIParam.LayerType.WAITING, t);
  };

  t.instance = new t();
  return t;
}();

exports.WaitingManager = a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFdhaXRpbmdNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJXYWl0aW5nTWFuYWdlciIsIiRjb3VudERvd25VdGlsIiwicmVxdWlyZSIsIiR1SUNhY2hlIiwiJHVJTWFuYWdlciIsIiR1SVBhcmFtIiwiYSIsInQiLCJ1aU1hbmFnZXIiLCJVSU1hbmFnZXIiLCJpbnN0YW5jZSIsInVpQ2FjaGUiLCJVSUNhY2hlIiwicHJvdG90eXBlIiwic2hvdyIsImUiLCJpIiwibiIsInMiLCJnZXRCYXNlVUkiLCJMYXllclR5cGUiLCJXQUlUSU5HIiwidWlBZGRTY2VuZSIsIm5vZGUiLCJwYXJlbnQiLCJsYXllcldhaXRkaW5nIiwicmVnaXN0ZXJDYWxsYmFjayIsIkNvdW50RG93blV0aWwiLCJzY2hlZHVsZU9uY2UiLCJjbG9zZSIsImNjIiwiaXNWYWxpZCIsInVuU2NoZWR1bGUiLCJnZXRDdXJyVmlldyIsImxlbmd0aCIsInVpUmVtb3ZlU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsY0FBUixHQUF5QixLQUFLLENBQTlCOztBQUNBLElBQUlDLGNBQWMsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlDLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRyxRQUFRLEdBQUdILE9BQU8sQ0FBQyxXQUFELENBQXRCOztBQUNBLElBQUlJLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLFNBQUwsR0FBaUJKLFVBQVUsQ0FBQ0ssU0FBWCxDQUFxQkMsUUFBdEM7SUFDQSxLQUFLQyxPQUFMLEdBQWVSLFFBQVEsQ0FBQ1MsT0FBVCxDQUFpQkYsUUFBaEM7RUFDSDs7RUFDREgsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVVAsQ0FBVixFQUFhUSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtJQUNsQyxJQUFJQyxDQUFDLEdBQUcsSUFBUjs7SUFDQSxJQUFJLEtBQUssQ0FBTCxLQUFXVixDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFKO0lBQ0g7O0lBQ0QsSUFBSSxLQUFLLENBQUwsS0FBV1MsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsQ0FBSjtJQUNIOztJQUNELElBQUksTUFBTUEsQ0FBVixFQUFhO01BQ1QsSUFBSUUsQ0FBQyxHQUFHLEtBQUtQLE9BQUwsQ0FBYVEsU0FBYixDQUF1QmQsUUFBUSxDQUFDZSxTQUFULENBQW1CQyxPQUExQyxDQUFSO01BQ0EsS0FBS2IsU0FBTCxDQUFlYyxVQUFmLENBQTBCakIsUUFBUSxDQUFDZSxTQUFULENBQW1CQyxPQUE3QyxFQUFzREgsQ0FBdEQ7TUFDQUEsQ0FBQyxDQUFDSyxJQUFGLENBQU9DLE1BQVAsR0FBZ0IsS0FBS2hCLFNBQUwsQ0FBZWlCLGFBQS9CO01BQ0FQLENBQUMsQ0FBQ1EsZ0JBQUYsQ0FBbUJYLENBQW5CLEVBQXNCUixDQUF0QjtJQUNILENBTEQsTUFLTztNQUNITixjQUFjLENBQUMwQixhQUFmLENBQTZCQyxZQUE3QixDQUNJLFlBQVk7UUFDUlgsQ0FBQyxDQUFDSCxJQUFGLENBQU9QLENBQVAsRUFBVVEsQ0FBVixFQUFhLENBQWI7TUFDSCxDQUhMLEVBSUksSUFKSixFQUtJQyxDQUxKO0lBT0g7RUFDSixDQXRCRDs7RUF1QkFULENBQUMsQ0FBQ00sU0FBRixDQUFZZ0IsS0FBWixHQUFvQixVQUFVdEIsQ0FBVixFQUFhO0lBQzdCLElBQUksQ0FBQ3VCLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXeEIsQ0FBWCxDQUFMLEVBQW9CO01BQ2hCTixjQUFjLENBQUMwQixhQUFmLENBQTZCSyxVQUE3QixDQUF3QyxJQUF4QztNQUNBLElBQUlqQixDQUFDLEdBQUcsS0FBS0osT0FBTCxDQUFhc0IsV0FBYixDQUF5QjVCLFFBQVEsQ0FBQ2UsU0FBVCxDQUFtQkMsT0FBNUMsQ0FBUjs7TUFDQSxJQUFJLE1BQU1OLENBQUMsQ0FBQ21CLE1BQVosRUFBb0I7UUFDaEI7TUFDSDs7TUFDRDNCLENBQUMsR0FBR1EsQ0FBQyxDQUFDLENBQUQsQ0FBTDtJQUNIOztJQUNELEtBQUtQLFNBQUwsQ0FBZTJCLGFBQWYsQ0FBNkI5QixRQUFRLENBQUNlLFNBQVQsQ0FBbUJDLE9BQWhELEVBQXlEZCxDQUF6RDtFQUNILENBVkQ7O0VBV0FBLENBQUMsQ0FBQ0csUUFBRixHQUFhLElBQUlILENBQUosRUFBYjtFQUNBLE9BQU9BLENBQVA7QUFDSCxDQXpDTyxFQUFSOztBQTBDQVIsT0FBTyxDQUFDQyxjQUFSLEdBQXlCTSxDQUF6QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5XYWl0aW5nTWFuYWdlciA9IHZvaWQgMDtcclxudmFyICRjb3VudERvd25VdGlsID0gcmVxdWlyZShcIi4vQ291bnREb3duVXRpbFwiKTtcclxudmFyICR1SUNhY2hlID0gcmVxdWlyZShcIi4vVUlDYWNoZVwiKTtcclxudmFyICR1SU1hbmFnZXIgPSByZXF1aXJlKFwiLi9VSU1hbmFnZXJcIik7XHJcbnZhciAkdUlQYXJhbSA9IHJlcXVpcmUoXCIuL1VJUGFyYW1cIik7XHJcbnZhciBhID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7XHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIgPSAkdUlNYW5hZ2VyLlVJTWFuYWdlci5pbnN0YW5jZTtcclxuICAgICAgICB0aGlzLnVpQ2FjaGUgPSAkdUlDYWNoZS5VSUNhY2hlLmluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh0LCBlLCBpKSB7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcclxuICAgICAgICAgICAgdCA9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IGkpIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwID09PSBpKSB7XHJcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy51aUNhY2hlLmdldEJhc2VVSSgkdUlQYXJhbS5MYXllclR5cGUuV0FJVElORyk7XHJcbiAgICAgICAgICAgIHRoaXMudWlNYW5hZ2VyLnVpQWRkU2NlbmUoJHVJUGFyYW0uTGF5ZXJUeXBlLldBSVRJTkcsIHMpO1xyXG4gICAgICAgICAgICBzLm5vZGUucGFyZW50ID0gdGhpcy51aU1hbmFnZXIubGF5ZXJXYWl0ZGluZztcclxuICAgICAgICAgICAgcy5yZWdpc3RlckNhbGxiYWNrKGUsIHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRjb3VudERvd25VdGlsLkNvdW50RG93blV0aWwuc2NoZWR1bGVPbmNlKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc2hvdyh0LCBlLCAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHQpKSB7XHJcbiAgICAgICAgICAgICRjb3VudERvd25VdGlsLkNvdW50RG93blV0aWwudW5TY2hlZHVsZSh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnVpQ2FjaGUuZ2V0Q3VyclZpZXcoJHVJUGFyYW0uTGF5ZXJUeXBlLldBSVRJTkcpO1xyXG4gICAgICAgICAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ID0gZVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIudWlSZW1vdmVTY2VuZSgkdUlQYXJhbS5MYXllclR5cGUuV0FJVElORywgdCk7XHJcbiAgICB9O1xyXG4gICAgdC5pbnN0YW5jZSA9IG5ldyB0KCk7XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5XYWl0aW5nTWFuYWdlciA9IGE7XHJcbiJdfQ==