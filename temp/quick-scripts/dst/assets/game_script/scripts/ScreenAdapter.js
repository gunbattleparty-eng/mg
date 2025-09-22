
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ScreenAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a867JcrUZKgJfraIt3OBbD', 'ScreenAdapter');
// game_script/scripts/ScreenAdapter.js

"use strict";

var o;

var $storageUtil = require("./StorageUtil");

var a = cc._decorator;
var l = a.ccclass;
var c = a.executionOrder;
var u = a.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isOpen = !0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = $storageUtil.StorageUtil.getItem("adapt", !1, !1);
    this.isOpen = t;

    if (this.isOpen) {
      this.init();
    }

    if (this.isOpen) {
      this.adapt();
    }
  };

  e.prototype.onEnable = function () {
    if (this.isOpen) {
      this.adapt();
    }
  };

  e.prototype.init = function () {
    var t = this;
    cc.view.setResizeCallback(function () {
      return t.onResize();
    });
  };

  e.prototype.onResize = function () {
    this.adapt();
  };

  e.prototype.adapt = function () {
    var t = cc.winSize;
    var e = t.width / t.height;
    var i = cc.Canvas.instance.designResolution;
    var o = i.width / i.height;
    e <= 1 && e <= o ? this.setFitWidth() : this.setFitHeight();
  };

  e.prototype.setFitHeight = function () {
    var t = cc.Canvas.instance;
    t.fitHeight = !0;
    t.fitWidth = !1;
  };

  e.prototype.setFitWidth = function () {
    var t = cc.Canvas.instance;
    t.fitHeight = !1;
    t.fitWidth = !0;
  };

  __decorate([u], e.prototype, "isOpen", void 0);

  return __decorate([l, c(-1)], e);
}(cc.Component);

exports["default"] = d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNjcmVlbkFkYXB0ZXIuanMiXSwibmFtZXMiOlsibyIsIiRzdG9yYWdlVXRpbCIsInJlcXVpcmUiLCJhIiwiY2MiLCJfZGVjb3JhdG9yIiwibCIsImNjY2xhc3MiLCJjIiwiZXhlY3V0aW9uT3JkZXIiLCJ1IiwicHJvcGVydHkiLCJkIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImlzT3BlbiIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsIlN0b3JhZ2VVdGlsIiwiZ2V0SXRlbSIsImluaXQiLCJhZGFwdCIsIm9uRW5hYmxlIiwidmlldyIsInNldFJlc2l6ZUNhbGxiYWNrIiwib25SZXNpemUiLCJ3aW5TaXplIiwid2lkdGgiLCJoZWlnaHQiLCJpIiwiQ2FudmFzIiwiaW5zdGFuY2UiLCJkZXNpZ25SZXNvbHV0aW9uIiwic2V0Rml0V2lkdGgiLCJzZXRGaXRIZWlnaHQiLCJmaXRIZWlnaHQiLCJmaXRXaWR0aCIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsWUFBWSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLGNBQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdQLENBQUMsQ0FBQ1EsUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lB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dWlyZShcIi4vU3RvcmFnZVV0aWxcIik7XHJcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGwgPSBhLmNjY2xhc3M7XHJcbnZhciBjID0gYS5leGVjdXRpb25PcmRlcjtcclxudmFyIHUgPSBhLnByb3BlcnR5O1xyXG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmlzT3BlbiA9ICEwO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLmdldEl0ZW0oXCJhZGFwdFwiLCAhMSwgITEpO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdDtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIGNjLnZpZXcuc2V0UmVzaXplQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5vblJlc2l6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWRhcHQoKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hZGFwdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IGNjLndpblNpemU7XHJcbiAgICAgICAgdmFyIGUgPSB0LndpZHRoIC8gdC5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIGkgPSBjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbjtcclxuICAgICAgICB2YXIgbyA9IGkud2lkdGggLyBpLmhlaWdodDtcclxuICAgICAgICBlIDw9IDEgJiYgZSA8PSBvID8gdGhpcy5zZXRGaXRXaWR0aCgpIDogdGhpcy5zZXRGaXRIZWlnaHQoKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zZXRGaXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSBjYy5DYW52YXMuaW5zdGFuY2U7XHJcbiAgICAgICAgdC5maXRIZWlnaHQgPSAhMDtcclxuICAgICAgICB0LmZpdFdpZHRoID0gITE7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc2V0Rml0V2lkdGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSBjYy5DYW52YXMuaW5zdGFuY2U7XHJcbiAgICAgICAgdC5maXRIZWlnaHQgPSAhMTtcclxuICAgICAgICB0LmZpdFdpZHRoID0gITA7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbdV0sIGUucHJvdG90eXBlLCBcImlzT3BlblwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2wsIGMoLTEpXSwgZSk7XHJcbn0pKGNjLkNvbXBvbmVudCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==