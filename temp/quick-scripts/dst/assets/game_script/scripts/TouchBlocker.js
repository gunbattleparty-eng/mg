
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TouchBlocker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf69cb5TqVBwpTurXWhcVNI', 'TouchBlocker');
// game_script/scripts/TouchBlocker.js

"use strict";

var o;
var r = cc._decorator;
var a = r.ccclass;
var l = r.property;

var c = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.target = null;
    e.isBlockAll = !1;
    e.isPassAll = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.registerEvent();
  };

  e.prototype.start = function () {
    this.reset();
  };

  e.prototype.onDestroy = function () {
    this.unregisterEvent();
  };

  e.prototype.registerEvent = function () {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEvent, this);
  };

  e.prototype.unregisterEvent = function () {
    this.node.targetOff(this);
  };

  e.prototype.reset = function () {
    this.setSwallowTouches(!1);
  };

  e.prototype.onTouchEvent = function (t) {
    if (!this.isPassAll) {
      !this.isBlockAll && this.target ? cc.isValid(this.target) && (this.target.getBoundingBoxToWorld().contains(t.getLocation()) || t.stopPropagationImmediate()) : t.stopPropagationImmediate();
    }
  };

  e.prototype.blockAll = function () {
    this.isBlockAll = !0;
    this.isPassAll = !1;
  };

  e.prototype.passAll = function () {
    this.isPassAll = !0;
    this.isBlockAll = !1;
  };

  e.prototype.setTarget = function (t) {
    this.target = t;
    this.isBlockAll = !1;
    this.isPassAll = !1;
  };

  e.prototype.setSwallowTouches = function (t) {
    if (this.node._touchListener) {
      this.node._touchListener.setSwallowTouches(t);
    }
  };

  __decorate([l({
    type: cc.Node
  })], e.prototype, "target", void 0);

  return __decorate([a], e);
}(cc.Component);

exports["default"] = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRvdWNoQmxvY2tlci5qcyJdLCJuYW1lcyI6WyJvIiwiciIsImNjIiwiX2RlY29yYXRvciIsImEiLCJjY2NsYXNzIiwibCIsInByb3BlcnR5IiwiYyIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ0YXJnZXQiLCJpc0Jsb2NrQWxsIiwiaXNQYXNzQWxsIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwicmVnaXN0ZXJFdmVudCIsInN0YXJ0IiwicmVzZXQiLCJvbkRlc3Ryb3kiLCJ1bnJlZ2lzdGVyRXZlbnQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoRXZlbnQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwidGFyZ2V0T2ZmIiwic2V0U3dhbGxvd1RvdWNoZXMiLCJpc1ZhbGlkIiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwiY29udGFpbnMiLCJnZXRMb2NhdGlvbiIsInN0b3BQcm9wYWdhdGlvbkltbWVkaWF0ZSIsImJsb2NrQWxsIiwicGFzc0FsbCIsInNldFRhcmdldCIsIl90b3VjaExpc3RlbmVyIiwiX19kZWNvcmF0ZSIsInR5cGUiLCJDb21wb25lbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJ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LENBQVVrQixjQUFWLENBQXlCVCxpQkFBekIsQ0FBMkN4QixDQUEzQztJQUNIO0VBQ0osQ0FKRDs7RUFLQWtDLFVBQVUsQ0FDTixDQUNJckMsQ0FBQyxDQUFDO0lBQ0VzQyxJQUFJLEVBQUUxQyxFQUFFLENBQUN3QjtFQURYLENBQUQsQ0FETCxDQURNLEVBTU5oQixDQUFDLENBQUNPLFNBTkksRUFPTixRQVBNLEVBUU4sS0FBSyxDQVJDLENBQVY7O0VBVUEsT0FBTzBCLFVBQVUsQ0FBQyxDQUFDdkMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQWxFTyxDQWtFTFIsRUFBRSxDQUFDMkMsU0FsRUUsQ0FBUjs7QUFtRUFDLE9BQU8sV0FBUCxHQUFrQnRDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyIHIgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgYSA9IHIuY2NjbGFzcztcclxudmFyIGwgPSByLnByb3BlcnR5O1xyXG52YXIgYyA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgZS5pc0Jsb2NrQWxsID0gITE7XHJcbiAgICAgICAgZS5pc1Bhc3NBbGwgPSAhMTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudW5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVnaXN0ZXJFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEV2ZW50LCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS51bnJlZ2lzdGVyRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldFN3YWxsb3dUb3VjaGVzKCExKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5vblRvdWNoRXZlbnQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Bhc3NBbGwpIHtcclxuICAgICAgICAgICAgIXRoaXMuaXNCbG9ja0FsbCAmJiB0aGlzLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgPyBjYy5pc1ZhbGlkKHRoaXMudGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAodGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnModC5nZXRMb2NhdGlvbigpKSB8fCB0LnN0b3BQcm9wYWdhdGlvbkltbWVkaWF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgOiB0LnN0b3BQcm9wYWdhdGlvbkltbWVkaWF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5ibG9ja0FsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzQmxvY2tBbGwgPSAhMDtcclxuICAgICAgICB0aGlzLmlzUGFzc0FsbCA9ICExO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnBhc3NBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Bhc3NBbGwgPSAhMDtcclxuICAgICAgICB0aGlzLmlzQmxvY2tBbGwgPSAhMTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zZXRUYXJnZXQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdDtcclxuICAgICAgICB0aGlzLmlzQmxvY2tBbGwgPSAhMTtcclxuICAgICAgICB0aGlzLmlzUGFzc0FsbCA9ICExO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnNldFN3YWxsb3dUb3VjaGVzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLl90b3VjaExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5fdG91Y2hMaXN0ZW5lci5zZXRTd2FsbG93VG91Y2hlcyh0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIGwoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJ0YXJnZXRcIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbYV0sIGUpO1xyXG59KShjYy5Db21wb25lbnQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBjO1xyXG4iXX0=