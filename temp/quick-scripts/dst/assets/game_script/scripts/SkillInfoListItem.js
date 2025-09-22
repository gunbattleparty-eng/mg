
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SkillInfoListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37117fhdMtAZroRPjUfUYZy', 'SkillInfoListItem');
// game_script/scripts/SkillInfoListItem.js

"use strict";

var o;

var $skillContext = require("./SkillContext");

var a = cc._decorator;
var l = a.ccclass;
var c = a.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.levelLabel = null;
    e.levelDesc = null;
    e.lockNode = null;
    e.skillConfig = null;
    e.unlockLevel = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.render = function (t, e) {
    this.unlockLevel = e;
    this.skillConfig = t;
    this.levelLabel.string = "等级" + this.unlockLevel;
    this.levelDesc.string = this.skillConfig.skill_text;
    this.lockNode.active = $skillContext["default"].Ins.getSKillLevel(t.skill_id) < this.unlockLevel;
  };

  e.prototype.start = function () {};

  e.prototype.touchItem = function () {};

  __decorate([c(cc.Label)], e.prototype, "levelLabel", void 0);

  __decorate([c(cc.Label)], e.prototype, "levelDesc", void 0);

  __decorate([c(cc.Node)], e.prototype, "lockNode", void 0);

  return __decorate([l], e);
}(cc.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNraWxsSW5mb0xpc3RJdGVtLmpzIl0sIm5hbWVzIjpbIm8iLCIkc2tpbGxDb250ZXh0IiwicmVxdWlyZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJsIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsInUiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibGV2ZWxMYWJlbCIsImxldmVsRGVzYyIsImxvY2tOb2RlIiwic2tpbGxDb25maWciLCJ1bmxvY2tMZXZlbCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsInJlbmRlciIsInN0cmluZyIsInNraWxsX3RleHQiLCJhY3RpdmUiLCJJbnMiLCJnZXRTS2lsbExldmVsIiwic2tpbGxfaWQiLCJzdGFydCIsInRvdWNoSXRlbSIsIl9fZGVjb3JhdGUiLCJMYWJlbCIsIk5vZGUiLCJDb21wb25lbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxVQUFGLEdBQWUsSUFBZjtJQUNBSCxDQUFDLENBQUNJLFNBQUYsR0FBYyxJQUFkO0lBQ0FKLENBQUMsQ0FBQ0ssUUFBRixHQUFhLElBQWI7SUFDQUwsQ0FBQyxDQUFDTSxXQUFGLEdBQWdCLElBQWhCO0lBQ0FOLENBQUMsQ0FBQ08sV0FBRixHQUFnQixDQUFoQjtJQUNBLE9BQU9QLENBQVA7RUFDSDs7RUFDRFEsU0FBUyxDQUFDUixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDUyxTQUFGLENBQVlDLE1BQVosR0FBcUIsVUFBVVgsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ2pDLEtBQUtPLFdBQUwsR0FBbUJQLENBQW5CO0lBQ0EsS0FBS00sV0FBTCxHQUFtQlAsQ0FBbkI7SUFDQSxLQUFLSSxVQUFMLENBQWdCUSxNQUFoQixHQUF5QixPQUFPLEtBQUtKLFdBQXJDO0lBQ0EsS0FBS0gsU0FBTCxDQUFlTyxNQUFmLEdBQXdCLEtBQUtMLFdBQUwsQ0FBaUJNLFVBQXpDO0lBQ0EsS0FBS1AsUUFBTCxDQUFjUSxNQUFkLEdBQXVCeEIsYUFBYSxXQUFiLENBQXNCeUIsR0FBdEIsQ0FBMEJDLGFBQTFCLENBQXdDaEIsQ0FBQyxDQUFDaUIsUUFBMUMsSUFBc0QsS0FBS1QsV0FBbEY7RUFDSCxDQU5EOztFQU9BUCxDQUFDLENBQUNTLFNBQUYsQ0FBWVEsS0FBWixHQUFvQixZQUFZLENBQUUsQ0FBbEM7O0VBQ0FqQixDQUFDLENBQUNTLFNBQUYsQ0FBWVMsU0FBWixHQUF3QixZQUFZLENBQUUsQ0FBdEM7O0VBQ0FDLFVBQVUsQ0FBQyxDQUFDdkIsQ0FBQyxDQUFDSixFQUFFLENBQUM0QixLQUFKLENBQUYsQ0FBRCxFQUFnQnBCLENBQUMsQ0FBQ1MsU0FBbEIsRUFBNkIsWUFBN0IsRUFBMkMsS0FBSyxDQUFoRCxDQUFWOztFQUNBVSxVQUFVLENBQUMsQ0FBQ3ZCLENBQUMsQ0FBQ0osRUFBRSxDQUFDNEIsS0FBSixDQUFGLENBQUQsRUFBZ0JwQixDQUFDLENBQUNTLFNBQWxCLEVBQTZCLFdBQTdCLEVBQTBDLEtBQUssQ0FBL0MsQ0FBVjs7RUFDQVUsVUFBVSxDQUFDLENBQUN2QixDQUFDLENBQUNKLEVBQUUsQ0FBQzZCLElBQUosQ0FBRixDQUFELEVBQWVyQixDQUFDLENBQUNTLFNBQWpCLEVBQTRCLFVBQTVCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQSxPQUFPVSxVQUFVLENBQUMsQ0FBQ3pCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F4Qk8sQ0F3QkxSLEVBQUUsQ0FBQzhCLFNBeEJFLENBQVI7O0FBeUJBQyxPQUFPLFdBQVAsR0FBa0J6QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkc2tpbGxDb250ZXh0ID0gcmVxdWlyZShcIi4vU2tpbGxDb250ZXh0XCIpO1xyXG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XHJcbnZhciBsID0gYS5jY2NsYXNzO1xyXG52YXIgYyA9IGEucHJvcGVydHk7XHJcbnZhciB1ID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUubGV2ZWxMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgZS5sZXZlbERlc2MgPSBudWxsO1xyXG4gICAgICAgIGUubG9ja05vZGUgPSBudWxsO1xyXG4gICAgICAgIGUuc2tpbGxDb25maWcgPSBudWxsO1xyXG4gICAgICAgIGUudW5sb2NrTGV2ZWwgPSAwO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0aGlzLnVubG9ja0xldmVsID0gZTtcclxuICAgICAgICB0aGlzLnNraWxsQ29uZmlnID0gdDtcclxuICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gXCLnrYnnuqdcIiArIHRoaXMudW5sb2NrTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5sZXZlbERlc2Muc3RyaW5nID0gdGhpcy5za2lsbENvbmZpZy5za2lsbF90ZXh0O1xyXG4gICAgICAgIHRoaXMubG9ja05vZGUuYWN0aXZlID0gJHNraWxsQ29udGV4dC5kZWZhdWx0Lklucy5nZXRTS2lsbExldmVsKHQuc2tpbGxfaWQpIDwgdGhpcy51bmxvY2tMZXZlbDtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgZS5wcm90b3R5cGUudG91Y2hJdGVtID0gZnVuY3Rpb24gKCkge307XHJcbiAgICBfX2RlY29yYXRlKFtjKGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImxldmVsTGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW2MoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwibGV2ZWxEZXNjXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtjKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwibG9ja05vZGVcIiwgdm9pZCAwKTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtsXSwgZSk7XHJcbn0pKGNjLkNvbXBvbmVudCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHU7XHJcbiJdfQ==