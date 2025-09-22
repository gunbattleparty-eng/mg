
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/PlayerSkin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92e5fIiridFzIGEHJTxIVBL', 'PlayerSkin');
// game_script/scripts/PlayerSkin.js

"use strict";

var o;
exports.PlayerSkin = void 0;

var $roleContext = require("./RoleContext");

var a = cc._decorator;
var l = a.ccclass;
var c = a.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.playerSkin = null;
    e.gunSkin = null;
    return e;
  }

  __extends(e, t);

  e.prototype.checkGun = function (t) {
    this.gunSkin.armatureName = "qiang_" + t;
    var e = this.playerSkin.armature().getSlot("shou");
    dragonBones.CCFactory.getInstance().replaceSlotDisplay(this.gunSkin.getArmatureKey(), "qiang_" + t, "shou", "q_" + t, e);
  };

  e.prototype.changePlayerSkin = function (t) {
    this.playerSkin.armatureName = "pf" + t;
    this.checkGun($roleContext["default"].ins.currSkinInfo.gun);
  };

  __decorate([c({
    type: dragonBones.ArmatureDisplay
  })], e.prototype, "playerSkin", void 0);

  __decorate([c({
    type: dragonBones.ArmatureDisplay
  })], e.prototype, "gunSkin", void 0);

  return __decorate([l], e);
}(cc.Component);

exports.PlayerSkin = u;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFBsYXllclNraW4uanMiXSwibmFtZXMiOlsibyIsImV4cG9ydHMiLCJQbGF5ZXJTa2luIiwiJHJvbGVDb250ZXh0IiwicmVxdWlyZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsInUiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwicGxheWVyU2tpbiIsImd1blNraW4iLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJjaGVja0d1biIsImFybWF0dXJlTmFtZSIsImFybWF0dXJlIiwiZ2V0U2xvdCIsImRyYWdvbkJvbmVzIiwiQ0NGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJyZXBsYWNlU2xvdERpc3BsYXkiLCJnZXRBcm1hdHVyZUtleSIsImNoYW5nZVBsYXllclNraW4iLCJpbnMiLCJjdXJyU2tpbkluZm8iLCJndW4iLCJfX2RlY29yYXRlIiwidHlwZSIsIkFybWF0dXJlRGlzcGxheSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixLQUFLLENBQTFCOztBQUNBLElBQUlDLFlBQVksR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxVQUFGLEdBQWUsSUFBZjtJQUNBSCxDQUFDLENBQUNJLE9BQUYsR0FBWSxJQUFaO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsUUFBWixHQUF1QixVQUFVUixDQUFWLEVBQWE7SUFDaEMsS0FBS0ssT0FBTCxDQUFhSSxZQUFiLEdBQTRCLFdBQVdULENBQXZDO0lBQ0EsSUFBSUMsQ0FBQyxHQUFHLEtBQUtHLFVBQUwsQ0FBZ0JNLFFBQWhCLEdBQTJCQyxPQUEzQixDQUFtQyxNQUFuQyxDQUFSO0lBQ0FDLFdBQVcsQ0FBQ0MsU0FBWixDQUFzQkMsV0FBdEIsR0FBb0NDLGtCQUFwQyxDQUNJLEtBQUtWLE9BQUwsQ0FBYVcsY0FBYixFQURKLEVBRUksV0FBV2hCLENBRmYsRUFHSSxNQUhKLEVBSUksT0FBT0EsQ0FKWCxFQUtJQyxDQUxKO0VBT0gsQ0FWRDs7RUFXQUEsQ0FBQyxDQUFDTSxTQUFGLENBQVlVLGdCQUFaLEdBQStCLFVBQVVqQixDQUFWLEVBQWE7SUFDeEMsS0FBS0ksVUFBTCxDQUFnQkssWUFBaEIsR0FBK0IsT0FBT1QsQ0FBdEM7SUFDQSxLQUFLUSxRQUFMLENBQWNsQixZQUFZLFdBQVosQ0FBcUI0QixHQUFyQixDQUF5QkMsWUFBekIsQ0FBc0NDLEdBQXBEO0VBQ0gsQ0FIRDs7RUFJQUMsVUFBVSxDQUNOLENBQ0l4QixDQUFDLENBQUM7SUFDRXlCLElBQUksRUFBRVYsV0FBVyxDQUFDVztFQURwQixDQUFELENBREwsQ0FETSxFQU1OdEIsQ0FBQyxDQUFDTSxTQU5JLEVBT04sWUFQTSxFQVFOLEtBQUssQ0FSQyxDQUFWOztFQVVBYyxVQUFVLENBQ04sQ0FDSXhCLENBQUMsQ0FBQztJQUNFeUIsSUFBSSxFQUFFVixXQUFXLENBQUNXO0VBRHBCLENBQUQsQ0FETCxDQURNLEVBTU50QixDQUFDLENBQUNNLFNBTkksRUFPTixTQVBNLEVBUU4sS0FBSyxDQVJDLENBQVY7O0VBVUEsT0FBT2MsVUFBVSxDQUFDLENBQUMxQixDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBNUNPLENBNENMUixFQUFFLENBQUMrQixTQTVDRSxDQUFSOztBQTZDQXBDLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQlUsQ0FBckIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG5leHBvcnRzLlBsYXllclNraW4gPSB2b2lkIDA7XHJcbnZhciAkcm9sZUNvbnRleHQgPSByZXF1aXJlKFwiLi9Sb2xlQ29udGV4dFwiKTtcclxudmFyIGEgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgbCA9IGEuY2NjbGFzcztcclxudmFyIGMgPSBhLnByb3BlcnR5O1xyXG52YXIgdSA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnBsYXllclNraW4gPSBudWxsO1xyXG4gICAgICAgIGUuZ3VuU2tpbiA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5jaGVja0d1biA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdGhpcy5ndW5Ta2luLmFybWF0dXJlTmFtZSA9IFwicWlhbmdfXCIgKyB0O1xyXG4gICAgICAgIHZhciBlID0gdGhpcy5wbGF5ZXJTa2luLmFybWF0dXJlKCkuZ2V0U2xvdChcInNob3VcIik7XHJcbiAgICAgICAgZHJhZ29uQm9uZXMuQ0NGYWN0b3J5LmdldEluc3RhbmNlKCkucmVwbGFjZVNsb3REaXNwbGF5KFxyXG4gICAgICAgICAgICB0aGlzLmd1blNraW4uZ2V0QXJtYXR1cmVLZXkoKSxcclxuICAgICAgICAgICAgXCJxaWFuZ19cIiArIHQsXHJcbiAgICAgICAgICAgIFwic2hvdVwiLFxyXG4gICAgICAgICAgICBcInFfXCIgKyB0LFxyXG4gICAgICAgICAgICBlXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jaGFuZ2VQbGF5ZXJTa2luID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLnBsYXllclNraW4uYXJtYXR1cmVOYW1lID0gXCJwZlwiICsgdDtcclxuICAgICAgICB0aGlzLmNoZWNrR3VuKCRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5jdXJyU2tpbkluZm8uZ3VuKTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgYyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIGUucHJvdG90eXBlLFxyXG4gICAgICAgIFwicGxheWVyU2tpblwiLFxyXG4gICAgICAgIHZvaWQgMFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBjKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJndW5Ta2luXCIsXHJcbiAgICAgICAgdm9pZCAwXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2xdLCBlKTtcclxufSkoY2MuQ29tcG9uZW50KTtcclxuZXhwb3J0cy5QbGF5ZXJTa2luID0gdTtcclxuIl19