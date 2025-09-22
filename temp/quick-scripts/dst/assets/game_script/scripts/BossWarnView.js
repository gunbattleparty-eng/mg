
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BossWarnView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cda6frfGU1KA6EefSFA7f15', 'BossWarnView');
// game_script/scripts/BossWarnView.js

"use strict";

var o;

var $popupView = require("./PopupView");

var $remoteAudio = require("./RemoteAudio");

var $gameContext = require("./GameContext");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.skin = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var e = this;
    this.uiParam.param.isBoss ? ($remoteAudio["default"].instance.playEffectMusic("bosscome"), this.skin.armatureName = "boss") : this.skin.armatureName = "jingying";
    this.skin.playAnimation("stand", 1);
    this.skin.timeScale = $gameContext["default"].ins.gameRatio;
    this.skin.on(dragonBones.EventObject.COMPLETE, function () {
      t.prototype.onClickClose.call(e);
    }, this);
  };

  __decorate([d(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);

  return __decorate([u], e);
}($popupView.PopupView);

exports["default"] = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJvc3NXYXJuVmlldy5qcyJdLCJuYW1lcyI6WyJvIiwiJHBvcHVwVmlldyIsInJlcXVpcmUiLCIkcmVtb3RlQXVkaW8iLCIkZ2FtZUNvbnRleHQiLCJjIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJwIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNraW4iLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvblJlc2V0VmlldyIsInVpUGFyYW0iLCJwYXJhbSIsImlzQm9zcyIsImluc3RhbmNlIiwicGxheUVmZmVjdE11c2ljIiwiYXJtYXR1cmVOYW1lIiwicGxheUFuaW1hdGlvbiIsInRpbWVTY2FsZSIsImlucyIsImdhbWVSYXRpbyIsIm9uIiwiZHJhZ29uQm9uZXMiLCJFdmVudE9iamVjdCIsIkNPTVBMRVRFIiwib25DbGlja0Nsb3NlIiwiY2FsbCIsIl9fZGVjb3JhdGUiLCJBcm1hdHVyZURpc3BsYXkiLCJQb3B1cFZpZXciLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlFLFlBQVksR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLFdBQVosR0FBMEIsWUFBWTtJQUNsQyxJQUFJTixDQUFDLEdBQUcsSUFBUjtJQUNBLEtBQUtPLE9BQUwsQ0FBYUMsS0FBYixDQUFtQkMsTUFBbkIsSUFDT3BCLFlBQVksV0FBWixDQUFxQnFCLFFBQXJCLENBQThCQyxlQUE5QixDQUE4QyxVQUE5QyxHQUE0RCxLQUFLUixJQUFMLENBQVVTLFlBQVYsR0FBeUIsTUFENUYsSUFFTyxLQUFLVCxJQUFMLENBQVVTLFlBQVYsR0FBeUIsVUFGaEM7SUFHQSxLQUFLVCxJQUFMLENBQVVVLGFBQVYsQ0FBd0IsT0FBeEIsRUFBaUMsQ0FBakM7SUFDQSxLQUFLVixJQUFMLENBQVVXLFNBQVYsR0FBc0J4QixZQUFZLFdBQVosQ0FBcUJ5QixHQUFyQixDQUF5QkMsU0FBL0M7SUFDQSxLQUFLYixJQUFMLENBQVVjLEVBQVYsQ0FDSUMsV0FBVyxDQUFDQyxXQUFaLENBQXdCQyxRQUQ1QixFQUVJLFlBQVk7TUFDUnJCLENBQUMsQ0FBQ00sU0FBRixDQUFZZ0IsWUFBWixDQUF5QkMsSUFBekIsQ0FBOEJ0QixDQUE5QjtJQUNILENBSkwsRUFLSSxJQUxKO0VBT0gsQ0FkRDs7RUFlQXVCLFVBQVUsQ0FBQyxDQUFDM0IsQ0FBQyxDQUFDc0IsV0FBVyxDQUFDTSxlQUFiLENBQUYsQ0FBRCxFQUFtQ3hCLENBQUMsQ0FBQ0ssU0FBckMsRUFBZ0QsTUFBaEQsRUFBd0QsS0FBSyxDQUE3RCxDQUFWOztFQUNBLE9BQU9rQixVQUFVLENBQUMsQ0FBQzdCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F4Qk8sQ0F3QkxiLFVBQVUsQ0FBQ3NDLFNBeEJOLENBQVI7O0FBeUJBQyxPQUFPLFdBQVAsR0FBa0I1QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkcG9wdXBWaWV3ID0gcmVxdWlyZShcIi4vUG9wdXBWaWV3XCIpO1xyXG52YXIgJHJlbW90ZUF1ZGlvID0gcmVxdWlyZShcIi4vUmVtb3RlQXVkaW9cIik7XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyIGMgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgdSA9IGMuY2NjbGFzcztcclxudmFyIGQgPSBjLnByb3BlcnR5O1xyXG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUub25SZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudWlQYXJhbS5wYXJhbS5pc0Jvc3NcclxuICAgICAgICAgICAgPyAoJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljKFwiYm9zc2NvbWVcIiksICh0aGlzLnNraW4uYXJtYXR1cmVOYW1lID0gXCJib3NzXCIpKVxyXG4gICAgICAgICAgICA6ICh0aGlzLnNraW4uYXJtYXR1cmVOYW1lID0gXCJqaW5neWluZ1wiKTtcclxuICAgICAgICB0aGlzLnNraW4ucGxheUFuaW1hdGlvbihcInN0YW5kXCIsIDEpO1xyXG4gICAgICAgIHRoaXMuc2tpbi50aW1lU2NhbGUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvO1xyXG4gICAgICAgIHRoaXMuc2tpbi5vbihcclxuICAgICAgICAgICAgZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHQucHJvdG90eXBlLm9uQ2xpY2tDbG9zZS5jYWxsKGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtkKGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSldLCBlLnByb3RvdHlwZSwgXCJza2luXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIGUpO1xyXG59KSgkcG9wdXBWaWV3LlBvcHVwVmlldyk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XHJcbiJdfQ==