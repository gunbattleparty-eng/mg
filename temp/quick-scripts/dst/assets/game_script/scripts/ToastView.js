
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ToastView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '191efcSl7VDzpWf2KyEHoVZ', 'ToastView');
// game_script/scripts/ToastView.js

"use strict";

var o;

var $uIManager = require("./UIManager");

var $uIParam = require("./UIParam");

var $uIView = require("./UIView");

var c = cc._decorator;
var u = c.ccclass;
var d = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.uiType = $uIParam.LayerType.TOAST;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t = this;
    var e = this.node;
    e.getChildByName("toast_bg").getChildByName("txt").getComponent(cc.Label).string = this.uiParam.param.msg;
    e.setPosition(this.uiParam.param.pos);
    e.opacity = 255;
    this.scheduleOnce(function () {
      e.active = !0;
    });
    e.stopAllActions();
    cc.tween(this.node).to(this.uiParam.param.time / 2, {
      y: this.node.position.y + 100
    }).start();
    this.scheduleOnce(function () {
      cc.tween(t.node).to(t.uiParam.param.time / 2, {
        opacity: 0
      }).start();
    }, this.uiParam.param.time / 2);
    this.scheduleOnce(function () {
      $uIManager.UIManager.instance.hideToast(t);
    }, this.uiParam.param.time);
  };

  return __decorate([u], e);
}($uIView.UIView));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRvYXN0Vmlldy5qcyJdLCJuYW1lcyI6WyJvIiwiJHVJTWFuYWdlciIsInJlcXVpcmUiLCIkdUlQYXJhbSIsIiR1SVZpZXciLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwidWlUeXBlIiwiTGF5ZXJUeXBlIiwiVE9BU1QiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvblJlc2V0VmlldyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwidWlQYXJhbSIsInBhcmFtIiwibXNnIiwic2V0UG9zaXRpb24iLCJwb3MiLCJvcGFjaXR5Iiwic2NoZWR1bGVPbmNlIiwiYWN0aXZlIiwic3RvcEFsbEFjdGlvbnMiLCJ0d2VlbiIsInRvIiwidGltZSIsInkiLCJwb3NpdGlvbiIsInN0YXJ0IiwiVUlNYW5hZ2VyIiwiaW5zdGFuY2UiLCJoaWRlVG9hc3QiLCJfX2RlY29yYXRlIiwiVUlWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF0Qjs7QUFDQSxJQUFJRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlHLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csTUFBRixHQUFXYixRQUFRLENBQUNjLFNBQVQsQ0FBbUJDLEtBQTlCO0lBQ0EsT0FBT0wsQ0FBUDtFQUNIOztFQUNETSxTQUFTLENBQUNOLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNPLFNBQUYsQ0FBWUMsV0FBWixHQUEwQixZQUFZO0lBQ2xDLElBQUlULENBQUMsR0FBRyxJQUFSO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHLEtBQUtTLElBQWI7SUFDQVQsQ0FBQyxDQUFDVSxjQUFGLENBQWlCLFVBQWpCLEVBQTZCQSxjQUE3QixDQUE0QyxLQUE1QyxFQUFtREMsWUFBbkQsQ0FBZ0VsQixFQUFFLENBQUNtQixLQUFuRSxFQUEwRUMsTUFBMUUsR0FBbUYsS0FBS0MsT0FBTCxDQUFhQyxLQUFiLENBQW1CQyxHQUF0RztJQUNBaEIsQ0FBQyxDQUFDaUIsV0FBRixDQUFjLEtBQUtILE9BQUwsQ0FBYUMsS0FBYixDQUFtQkcsR0FBakM7SUFDQWxCLENBQUMsQ0FBQ21CLE9BQUYsR0FBWSxHQUFaO0lBQ0EsS0FBS0MsWUFBTCxDQUFrQixZQUFZO01BQzFCcEIsQ0FBQyxDQUFDcUIsTUFBRixHQUFXLENBQUMsQ0FBWjtJQUNILENBRkQ7SUFHQXJCLENBQUMsQ0FBQ3NCLGNBQUY7SUFDQTdCLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBUyxLQUFLZCxJQUFkLEVBQ0tlLEVBREwsQ0FDUSxLQUFLVixPQUFMLENBQWFDLEtBQWIsQ0FBbUJVLElBQW5CLEdBQTBCLENBRGxDLEVBQ3FDO01BQzdCQyxDQUFDLEVBQUUsS0FBS2pCLElBQUwsQ0FBVWtCLFFBQVYsQ0FBbUJELENBQW5CLEdBQXVCO0lBREcsQ0FEckMsRUFJS0UsS0FKTDtJQUtBLEtBQUtSLFlBQUwsQ0FBa0IsWUFBWTtNQUMxQjNCLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU3hCLENBQUMsQ0FBQ1UsSUFBWCxFQUNLZSxFQURMLENBQ1F6QixDQUFDLENBQUNlLE9BQUYsQ0FBVUMsS0FBVixDQUFnQlUsSUFBaEIsR0FBdUIsQ0FEL0IsRUFDa0M7UUFDMUJOLE9BQU8sRUFBRTtNQURpQixDQURsQyxFQUlLUyxLQUpMO0lBS0gsQ0FORCxFQU1HLEtBQUtkLE9BQUwsQ0FBYUMsS0FBYixDQUFtQlUsSUFBbkIsR0FBMEIsQ0FON0I7SUFPQSxLQUFLTCxZQUFMLENBQWtCLFlBQVk7TUFDMUJoQyxVQUFVLENBQUN5QyxTQUFYLENBQXFCQyxRQUFyQixDQUE4QkMsU0FBOUIsQ0FBd0NoQyxDQUF4QztJQUNILENBRkQsRUFFRyxLQUFLZSxPQUFMLENBQWFDLEtBQWIsQ0FBbUJVLElBRnRCO0VBR0gsQ0F6QkQ7O0VBMEJBLE9BQU9PLFVBQVUsQ0FBQyxDQUFDckMsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQWxDRCxDQWtDR1QsT0FBTyxDQUFDMEMsTUFsQ1gsQ0FGQyxDQUFMO0FBcUNBQyxPQUFPLFdBQVAsR0FBa0JyQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkdUlNYW5hZ2VyID0gcmVxdWlyZShcIi4vVUlNYW5hZ2VyXCIpO1xyXG52YXIgJHVJUGFyYW0gPSByZXF1aXJlKFwiLi9VSVBhcmFtXCIpO1xyXG52YXIgJHVJVmlldyA9IHJlcXVpcmUoXCIuL1VJVmlld1wiKTtcclxudmFyIGMgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgdSA9IGMuY2NjbGFzcztcclxudmFyIGQgPVxyXG4gICAgKGMucHJvcGVydHksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS51aVR5cGUgPSAkdUlQYXJhbS5MYXllclR5cGUuVE9BU1Q7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25SZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0b2FzdF9iZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudWlQYXJhbS5wYXJhbS5tc2c7XHJcbiAgICAgICAgICAgIGUuc2V0UG9zaXRpb24odGhpcy51aVBhcmFtLnBhcmFtLnBvcyk7XHJcbiAgICAgICAgICAgIGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZS5hY3RpdmUgPSAhMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMudWlQYXJhbS5wYXJhbS50aW1lIC8gMiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMubm9kZS5wb3NpdGlvbi55ICsgMTAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHQubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8odC51aVBhcmFtLnBhcmFtLnRpbWUgLyAyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLnVpUGFyYW0ucGFyYW0udGltZSAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkdUlNYW5hZ2VyLlVJTWFuYWdlci5pbnN0YW5jZS5oaWRlVG9hc3QodCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMudWlQYXJhbS5wYXJhbS50aW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XHJcbiAgICB9KSgkdUlWaWV3LlVJVmlldykpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBkO1xyXG4iXX0=