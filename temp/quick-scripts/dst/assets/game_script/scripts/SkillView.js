
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SkillView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05a58J2vANIbZfwaK2PpkdP', 'SkillView');
// game_script/scripts/SkillView.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $eventManager = require("./EventManager");

var $list = require("./List");

var $uIManager = require("./UIManager");

var $remoteAudio = require("./RemoteAudio");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $itemView = require("./ItemView");

var $startView = require("./StartView");

var $skillListItem = require("./SkillListItem");

var g = cc._decorator;
var _ = g.ccclass;
var k = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.skillList = null;
    e.btnRobot = null;
    e.robot = null;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.skillList.numItems = $configContext["default"].instance.basicSkillConfigs.length;
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);
    this.btnRobot.on("click", this.clickRobot, this);
    this.render();
  };

  e.prototype.onDestroy = function () {
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);
    this.btnRobot.off("click", this.clickRobot, this);
  };

  e.prototype.reuse = function () {
    $eventManager["default"].on($localEventName["default"].RENDER_DOT, this.renderDot, this);
    this.skillList.updateAll();
  };

  e.prototype.unuse = function () {
    $eventManager["default"].off($localEventName["default"].RENDER_DOT, this.renderDot, this);
  };

  e.prototype.render = function () {
    this.robot.armatureName = "hl" + $roleContext["default"].ins.currSkinInfo.robot;
    this.btnRobot.children[0].active = $roleContext["default"].ins.hasRobotSkinDot();
  };

  e.prototype.clickRobot = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.RobotShopView);
  };

  e.prototype.renderDot = function (t) {
    if (t === $startView.MenuType.Skill) {
      this.skillList.updateAll();
    }
  };

  e.prototype.renderItem = function (t, e) {
    t.getComponent($skillListItem["default"]).render($configContext["default"].instance.basicSkillConfigs[e], this.node);
  };

  __decorate([k($list["default"])], e.prototype, "skillList", void 0);

  __decorate([k(cc.Node)], e.prototype, "btnRobot", void 0);

  __decorate([k(dragonBones.ArmatureDisplay)], e.prototype, "robot", void 0);

  return __decorate([_], e);
}($itemView["default"]);

exports["default"] = v;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNraWxsVmlldy5qcyJdLCJuYW1lcyI6WyJvIiwiJGFzc2V0c01hcCIsInJlcXVpcmUiLCIkZXZlbnRNYW5hZ2VyIiwiJGxpc3QiLCIkdUlNYW5hZ2VyIiwiJHJlbW90ZUF1ZGlvIiwiJGNvbmZpZ0NvbnRleHQiLCIkbG9jYWxFdmVudE5hbWUiLCIkcm9sZUNvbnRleHQiLCIkaXRlbVZpZXciLCIkc3RhcnRWaWV3IiwiJHNraWxsTGlzdEl0ZW0iLCJnIiwiY2MiLCJfZGVjb3JhdG9yIiwiXyIsImNjY2xhc3MiLCJrIiwicHJvcGVydHkiLCJ2IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNraWxsTGlzdCIsImJ0blJvYm90Iiwicm9ib3QiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydCIsIm51bUl0ZW1zIiwiaW5zdGFuY2UiLCJiYXNpY1NraWxsQ29uZmlncyIsImxlbmd0aCIsIm9uIiwiUkVOREVSX0RPVCIsInJlbmRlckRvdCIsImNsaWNrUm9ib3QiLCJyZW5kZXIiLCJvbkRlc3Ryb3kiLCJvZmYiLCJyZXVzZSIsInVwZGF0ZUFsbCIsInVudXNlIiwiYXJtYXR1cmVOYW1lIiwiaW5zIiwiY3VyclNraW5JbmZvIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJoYXNSb2JvdFNraW5Eb3QiLCJwbGF5RWZmZWN0TXVzaWMiLCJVSU1hbmFnZXIiLCJyZXBsYWNlVmlldyIsIkFzc2V0c01hcCIsIlN0YXJ0QnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiUm9ib3RTaG9wVmlldyIsIk1lbnVUeXBlIiwiU2tpbGwiLCJyZW5kZXJJdGVtIiwiZ2V0Q29tcG9uZW50Iiwibm9kZSIsIl9fZGVjb3JhdGUiLCJOb2RlIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFB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RCxFQUFxQmtCLENBQUMsQ0FBQ08sU0FBdkIsRUFBa0MsV0FBbEMsRUFBK0MsS0FBSyxDQUFwRCxDQUFWOztFQUNBbUMsVUFBVSxDQUFDLENBQUM5QyxDQUFDLENBQUNKLEVBQUUsQ0FBQ21ELElBQUosQ0FBRixDQUFELEVBQWUzQyxDQUFDLENBQUNPLFNBQWpCLEVBQTRCLFVBQTVCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQW1DLFVBQVUsQ0FBQyxDQUFDOUMsQ0FBQyxDQUFDZ0QsV0FBVyxDQUFDQyxlQUFiLENBQUYsQ0FBRCxFQUFtQzdDLENBQUMsQ0FBQ08sU0FBckMsRUFBZ0QsT0FBaEQsRUFBeUQsS0FBSyxDQUE5RCxDQUFWOztFQUNBLE9BQU9tQyxVQUFVLENBQUMsQ0FBQ2hELENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0E5Q08sQ0E4Q0xaLFNBQVMsV0E5Q0osQ0FBUjs7QUErQ0EwRCxPQUFPLFdBQVAsR0FBa0JoRCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJGV2ZW50TWFuYWdlciA9IHJlcXVpcmUoXCIuL0V2ZW50TWFuYWdlclwiKTtcclxudmFyICRsaXN0ID0gcmVxdWlyZShcIi4vTGlzdFwiKTtcclxudmFyICR1SU1hbmFnZXIgPSByZXF1aXJlKFwiLi9VSU1hbmFnZXJcIik7XHJcbnZhciAkcmVtb3RlQXVkaW8gPSByZXF1aXJlKFwiLi9SZW1vdGVBdWRpb1wiKTtcclxudmFyICRjb25maWdDb250ZXh0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29udGV4dFwiKTtcclxudmFyICRsb2NhbEV2ZW50TmFtZSA9IHJlcXVpcmUoXCIuL0xvY2FsRXZlbnROYW1lXCIpO1xyXG52YXIgJHJvbGVDb250ZXh0ID0gcmVxdWlyZShcIi4vUm9sZUNvbnRleHRcIik7XHJcbnZhciAkaXRlbVZpZXcgPSByZXF1aXJlKFwiLi9JdGVtVmlld1wiKTtcclxudmFyICRzdGFydFZpZXcgPSByZXF1aXJlKFwiLi9TdGFydFZpZXdcIik7XHJcbnZhciAkc2tpbGxMaXN0SXRlbSA9IHJlcXVpcmUoXCIuL1NraWxsTGlzdEl0ZW1cIik7XHJcbnZhciBnID0gY2MuX2RlY29yYXRvcjtcclxudmFyIF8gPSBnLmNjY2xhc3M7XHJcbnZhciBrID0gZy5wcm9wZXJ0eTtcclxudmFyIHYgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5za2lsbExpc3QgPSBudWxsO1xyXG4gICAgICAgIGUuYnRuUm9ib3QgPSBudWxsO1xyXG4gICAgICAgIGUucm9ib3QgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5za2lsbExpc3QubnVtSXRlbXMgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmJhc2ljU2tpbGxDb25maWdzLmxlbmd0aDtcclxuICAgICAgICAkZXZlbnRNYW5hZ2VyLmRlZmF1bHQub24oJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuUkVOREVSX0RPVCwgdGhpcy5yZW5kZXJEb3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuUm9ib3Qub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrUm9ib3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vZmYoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuUkVOREVSX0RPVCwgdGhpcy5yZW5kZXJEb3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuUm9ib3Qub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja1JvYm90LCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5yZXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkZXZlbnRNYW5hZ2VyLmRlZmF1bHQub24oJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuUkVOREVSX0RPVCwgdGhpcy5yZW5kZXJEb3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxMaXN0LnVwZGF0ZUFsbCgpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnVudXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vZmYoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuUkVOREVSX0RPVCwgdGhpcy5yZW5kZXJEb3QsIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmFybWF0dXJlTmFtZSA9IFwiaGxcIiArICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5jdXJyU2tpbkluZm8ucm9ib3Q7XHJcbiAgICAgICAgdGhpcy5idG5Sb2JvdC5jaGlsZHJlblswXS5hY3RpdmUgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuaGFzUm9ib3RTa2luRG90KCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY2xpY2tSb2JvdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5RWZmZWN0TXVzaWMoXCJDbGlja1wiKTtcclxuICAgICAgICAkdUlNYW5hZ2VyLlVJTWFuYWdlci5pbnN0YW5jZS5yZXBsYWNlVmlldygkYXNzZXRzTWFwLkFzc2V0c01hcC5TdGFydEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlJvYm90U2hvcFZpZXcpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbmRlckRvdCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHQgPT09ICRzdGFydFZpZXcuTWVudVR5cGUuU2tpbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5za2lsbExpc3QudXBkYXRlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHQuZ2V0Q29tcG9uZW50KCRza2lsbExpc3RJdGVtLmRlZmF1bHQpLnJlbmRlcigkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmJhc2ljU2tpbGxDb25maWdzW2VdLCB0aGlzLm5vZGUpO1xyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW2soJGxpc3QuZGVmYXVsdCldLCBlLnByb3RvdHlwZSwgXCJza2lsbExpc3RcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2soY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJidG5Sb2JvdFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbayhkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpXSwgZS5wcm90b3R5cGUsIFwicm9ib3RcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtfXSwgZSk7XHJcbn0pKCRpdGVtVmlldy5kZWZhdWx0KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdjtcclxuIl19