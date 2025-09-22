
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/GemStatsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '822canxFfxLD7aJx/5Pb0Wb', 'GemStatsView');
// game_script/scripts/GemStatsView.js

"use strict";

var o;

var $list = require("./List");

var $popupView = require("./PopupView");

var $configContext = require("./ConfigContext");

var $gameGemInfo = require("./GameGemInfo");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.list = null;
    e.skillPoolIds = [];
    e.showTyps = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t = this;

    for (var e = 0; e < $configContext["default"].instance.gemSkillConfigs.length; e++) {
      var i = $configContext["default"].instance.gemSkillConfigs[e].id;

      if ($gameGemInfo.GameGemInfo.ins.hasGem(i)) {
        this.skillPoolIds.push(i);
        this.showTyps.push($configContext["default"].instance.gemSkillConfigs[e].show_type);
      }
    }

    this.scheduleOnce(function () {
      t.list.numItems = t.skillPoolIds.length;
    });
  };

  e.prototype.renderItem = function (t, e) {
    var i = t.getComponentInChildren(cc.Label);
    i.string = $gameGemInfo.GameGemInfo.ins.getGemDesc2(this.skillPoolIds[e], this.showTyps[e]);

    i._forceUpdateRenderData();

    t.getComponentInChildren(cc.Layout).updateLayout();
    t.height = t.children[0].height;
  };

  __decorate([p($list["default"])], e.prototype, "list", void 0);

  return __decorate([d], e);
}($popupView.PopupView);

exports["default"] = f;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEdlbVN0YXRzVmlldy5qcyJdLCJuYW1lcyI6WyJvIiwiJGxpc3QiLCJyZXF1aXJlIiwiJHBvcHVwVmlldyIsIiRjb25maWdDb250ZXh0IiwiJGdhbWVHZW1JbmZvIiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwiZiIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJsaXN0Iiwic2tpbGxQb29sSWRzIiwic2hvd1R5cHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvblJlc2V0VmlldyIsImluc3RhbmNlIiwiZ2VtU2tpbGxDb25maWdzIiwibGVuZ3RoIiwiaSIsImlkIiwiR2FtZUdlbUluZm8iLCJpbnMiLCJoYXNHZW0iLCJwdXNoIiwic2hvd190eXBlIiwic2NoZWR1bGVPbmNlIiwibnVtSXRlbXMiLCJyZW5kZXJJdGVtIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIkxhYmVsIiwic3RyaW5nIiwiZ2V0R2VtRGVzYzIiLCJfZm9yY2VVcGRhdGVSZW5kZXJEYXRhIiwiTGF5b3V0IiwidXBkYXRlTGF5b3V0IiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJfX2RlY29yYXRlIiwiUG9wdXBWaWV3IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csSUFBRixHQUFTLElBQVQ7SUFDQUgsQ0FBQyxDQUFDSSxZQUFGLEdBQWlCLEVBQWpCO0lBQ0FKLENBQUMsQ0FBQ0ssUUFBRixHQUFhLEVBQWI7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxXQUFaLEdBQTBCLFlBQVk7SUFDbEMsSUFBSVQsQ0FBQyxHQUFHLElBQVI7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxjQUFjLFdBQWQsQ0FBdUJvQixRQUF2QixDQUFnQ0MsZUFBaEMsQ0FBZ0RDLE1BQXBFLEVBQTRFWCxDQUFDLEVBQTdFLEVBQWlGO01BQzdFLElBQUlZLENBQUMsR0FBR3ZCLGNBQWMsV0FBZCxDQUF1Qm9CLFFBQXZCLENBQWdDQyxlQUFoQyxDQUFnRFYsQ0FBaEQsRUFBbURhLEVBQTNEOztNQUNBLElBQUl2QixZQUFZLENBQUN3QixXQUFiLENBQXlCQyxHQUF6QixDQUE2QkMsTUFBN0IsQ0FBb0NKLENBQXBDLENBQUosRUFBNEM7UUFDeEMsS0FBS1IsWUFBTCxDQUFrQmEsSUFBbEIsQ0FBdUJMLENBQXZCO1FBQ0EsS0FBS1AsUUFBTCxDQUFjWSxJQUFkLENBQW1CNUIsY0FBYyxXQUFkLENBQXVCb0IsUUFBdkIsQ0FBZ0NDLGVBQWhDLENBQWdEVixDQUFoRCxFQUFtRGtCLFNBQXRFO01BQ0g7SUFDSjs7SUFDRCxLQUFLQyxZQUFMLENBQWtCLFlBQVk7TUFDMUJwQixDQUFDLENBQUNJLElBQUYsQ0FBT2lCLFFBQVAsR0FBa0JyQixDQUFDLENBQUNLLFlBQUYsQ0FBZU8sTUFBakM7SUFDSCxDQUZEO0VBR0gsQ0FaRDs7RUFhQVgsQ0FBQyxDQUFDTyxTQUFGLENBQVljLFVBQVosR0FBeUIsVUFBVXRCLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUNyQyxJQUFJWSxDQUFDLEdBQUdiLENBQUMsQ0FBQ3VCLHNCQUFGLENBQXlCOUIsRUFBRSxDQUFDK0IsS0FBNUIsQ0FBUjtJQUNBWCxDQUFDLENBQUNZLE1BQUYsR0FBV2xDLFlBQVksQ0FBQ3dCLFdBQWIsQ0FBeUJDLEdBQXpCLENBQTZCVSxXQUE3QixDQUF5QyxLQUFLckIsWUFBTCxDQUFrQkosQ0FBbEIsQ0FBekMsRUFBK0QsS0FBS0ssUUFBTCxDQUFjTCxDQUFkLENBQS9ELENBQVg7O0lBQ0FZLENBQUMsQ0FBQ2Msc0JBQUY7O0lBQ0EzQixDQUFDLENBQUN1QixzQkFBRixDQUF5QjlCLEVBQUUsQ0FBQ21DLE1BQTVCLEVBQW9DQyxZQUFwQztJQUNBN0IsQ0FBQyxDQUFDOEIsTUFBRixHQUFXOUIsQ0FBQyxDQUFDK0IsUUFBRixDQUFXLENBQVgsRUFBY0QsTUFBekI7RUFDSCxDQU5EOztFQU9BRSxVQUFVLENBQUMsQ0FBQ25DLENBQUMsQ0FBQ1YsS0FBSyxXQUFOLENBQUYsQ0FBRCxFQUFxQmMsQ0FBQyxDQUFDTyxTQUF2QixFQUFrQyxNQUFsQyxFQUEwQyxLQUFLLENBQS9DLENBQVY7O0VBQ0EsT0FBT3dCLFVBQVUsQ0FBQyxDQUFDckMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQS9CTyxDQStCTFosVUFBVSxDQUFDNEMsU0EvQk4sQ0FBUjs7QUFnQ0FDLE9BQU8sV0FBUCxHQUFrQm5DLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRsaXN0ID0gcmVxdWlyZShcIi4vTGlzdFwiKTtcclxudmFyICRwb3B1cFZpZXcgPSByZXF1aXJlKFwiLi9Qb3B1cFZpZXdcIik7XHJcbnZhciAkY29uZmlnQ29udGV4dCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnRleHRcIik7XHJcbnZhciAkZ2FtZUdlbUluZm8gPSByZXF1aXJlKFwiLi9HYW1lR2VtSW5mb1wiKTtcclxudmFyIHUgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgZCA9IHUuY2NjbGFzcztcclxudmFyIHAgPSB1LnByb3BlcnR5O1xyXG52YXIgZiA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmxpc3QgPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbGxQb29sSWRzID0gW107XHJcbiAgICAgICAgZS5zaG93VHlwcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUub25SZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Ta2lsbENvbmZpZ3MubGVuZ3RoOyBlKyspIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbVNraWxsQ29uZmlnc1tlXS5pZDtcclxuICAgICAgICAgICAgaWYgKCRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKGkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsUG9vbElkcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VHlwcy5wdXNoKCRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtU2tpbGxDb25maWdzW2VdLnNob3dfdHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0Lmxpc3QubnVtSXRlbXMgPSB0LnNraWxsUG9vbElkcy5sZW5ndGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVySXRlbSA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xyXG4gICAgICAgIGkuc3RyaW5nID0gJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5nZXRHZW1EZXNjMih0aGlzLnNraWxsUG9vbElkc1tlXSwgdGhpcy5zaG93VHlwc1tlXSk7XHJcbiAgICAgICAgaS5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgdC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgdC5oZWlnaHQgPSB0LmNoaWxkcmVuWzBdLmhlaWdodDtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtwKCRsaXN0LmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwibGlzdFwiLCB2b2lkIDApO1xyXG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcclxufSkoJHBvcHVwVmlldy5Qb3B1cFZpZXcpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBmO1xyXG4iXX0=