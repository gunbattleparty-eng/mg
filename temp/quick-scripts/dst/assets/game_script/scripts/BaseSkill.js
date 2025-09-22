
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BaseSkill.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f34cPTSO5C/raF9P+ACb+E', 'BaseSkill');
// game_script/scripts/BaseSkill.js

"use strict";

exports.BaseSkill = void 0;

var $gameSkillInfo = require("./GameSkillInfo");

var n = function () {
  function t() {
    this.chooseCount = 0;
    this.skillAtk = [0, 0, 0, 1];
    this.skillAtkRange = [0, 0, 0, 1];
    this.skillCD = [0, 0, 0, 1];
  }

  t.prototype.caculateFinal = function (t, e) {
    if (void 0 === e) {
      e = !0;
    }

    t[$gameSkillInfo.Skill4Param.FINAL] = t[$gameSkillInfo.Skill4Param.BASIC] * t[$gameSkillInfo.Skill4Param.DEC] * (1 + t[$gameSkillInfo.Skill4Param.ADD]);

    if (e) {
      t[$gameSkillInfo.Skill4Param.FINAL] = Math.ceil(t[$gameSkillInfo.Skill4Param.FINAL]);
    }
  };

  t.prototype.updateAndCalculate = function (t, e, i, n) {
    if (void 0 === n) {
      n = !0;
    }

    i === $gameSkillInfo.Skill4Param.ADD ? t[$gameSkillInfo.Skill4Param.ADD] += e : i === $gameSkillInfo.Skill4Param.DEC && (t[$gameSkillInfo.Skill4Param.DEC] *= 1 + e);
    this.caculateFinal(t, n);
  };

  t.prototype.getBasicAtk = function (t) {
    return Math.ceil(this.skillAtk[$gameSkillInfo.Skill4Param.BASIC] * (1 + t));
  };

  t.prototype.toString = function () {
    return "\n        技能伤害:" + this.skillAtk + "\n        技能攻击范围:" + this.skillAtkRange + "\n        技能cd:" + this.skillCD + "\n        ";
  };

  return t;
}();

exports.BaseSkill = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJhc2VTa2lsbC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQmFzZVNraWxsIiwiJGdhbWVTa2lsbEluZm8iLCJyZXF1aXJlIiwibiIsInQiLCJjaG9vc2VDb3VudCIsInNraWxsQXRrIiwic2tpbGxBdGtSYW5nZSIsInNraWxsQ0QiLCJwcm90b3R5cGUiLCJjYWN1bGF0ZUZpbmFsIiwiZSIsIlNraWxsNFBhcmFtIiwiRklOQUwiLCJCQVNJQyIsIkRFQyIsIkFERCIsIk1hdGgiLCJjZWlsIiwidXBkYXRlQW5kQ2FsY3VsYXRlIiwiaSIsImdldEJhc2ljQXRrIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixLQUFLLENBQXpCOztBQUNBLElBQUlDLGNBQWMsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFoQjtJQUNBLEtBQUtDLGFBQUwsR0FBcUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQXJCO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFmO0VBQ0g7O0VBQ0RKLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxhQUFaLEdBQTRCLFVBQVVOLENBQVYsRUFBYU8sQ0FBYixFQUFnQjtJQUN4QyxJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFDLENBQUw7SUFDSDs7SUFDRFAsQ0FBQyxDQUFDSCxjQUFjLENBQUNXLFdBQWYsQ0FBMkJDLEtBQTVCLENBQUQsR0FDSVQsQ0FBQyxDQUFDSCxjQUFjLENBQUNXLFdBQWYsQ0FBMkJFLEtBQTVCLENBQUQsR0FDQVYsQ0FBQyxDQUFDSCxjQUFjLENBQUNXLFdBQWYsQ0FBMkJHLEdBQTVCLENBREQsSUFFQyxJQUFJWCxDQUFDLENBQUNILGNBQWMsQ0FBQ1csV0FBZixDQUEyQkksR0FBNUIsQ0FGTixDQURKOztJQUlBLElBQUlMLENBQUosRUFBTztNQUNIUCxDQUFDLENBQUNILGNBQWMsQ0FBQ1csV0FBZixDQUEyQkMsS0FBNUIsQ0FBRCxHQUFzQ0ksSUFBSSxDQUFDQyxJQUFMLENBQVVkLENBQUMsQ0FBQ0gsY0FBYyxDQUFDVyxXQUFmLENBQTJCQyxLQUE1QixDQUFYLENBQXRDO0lBQ0g7RUFDSixDQVhEOztFQVlBVCxDQUFDLENBQUNLLFNBQUYsQ0FBWVUsa0JBQVosR0FBaUMsVUFBVWYsQ0FBVixFQUFhTyxDQUFiLEVBQWdCUyxDQUFoQixFQUFtQmpCLENBQW5CLEVBQXNCO0lBQ25ELElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLENBQUMsQ0FBTDtJQUNIOztJQUNEaUIsQ0FBQyxLQUFLbkIsY0FBYyxDQUFDVyxXQUFmLENBQTJCSSxHQUFqQyxHQUNPWixDQUFDLENBQUNILGNBQWMsQ0FBQ1csV0FBZixDQUEyQkksR0FBNUIsQ0FBRCxJQUFxQ0wsQ0FENUMsR0FFTVMsQ0FBQyxLQUFLbkIsY0FBYyxDQUFDVyxXQUFmLENBQTJCRyxHQUFqQyxLQUF5Q1gsQ0FBQyxDQUFDSCxjQUFjLENBQUNXLFdBQWYsQ0FBMkJHLEdBQTVCLENBQUQsSUFBcUMsSUFBSUosQ0FBbEYsQ0FGTjtJQUdBLEtBQUtELGFBQUwsQ0FBbUJOLENBQW5CLEVBQXNCRCxDQUF0QjtFQUNILENBUkQ7O0VBU0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZWSxXQUFaLEdBQTBCLFVBQVVqQixDQUFWLEVBQWE7SUFDbkMsT0FBT2EsSUFBSSxDQUFDQyxJQUFMLENBQVUsS0FBS1osUUFBTCxDQUFjTCxjQUFjLENBQUNXLFdBQWYsQ0FBMkJFLEtBQXpDLEtBQW1ELElBQUlWLENBQXZELENBQVYsQ0FBUDtFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ0ssU0FBRixDQUFZYSxRQUFaLEdBQXVCLFlBQVk7SUFDL0IsT0FDSSxvQkFDQSxLQUFLaEIsUUFETCxHQUVBLG1CQUZBLEdBR0EsS0FBS0MsYUFITCxHQUlBLGlCQUpBLEdBS0EsS0FBS0MsT0FMTCxHQU1BLFlBUEo7RUFTSCxDQVZEOztFQVdBLE9BQU9KLENBQVA7QUFDSCxDQTNDTyxFQUFSOztBQTRDQUwsT0FBTyxDQUFDQyxTQUFSLEdBQW9CRyxDQUFwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5CYXNlU2tpbGwgPSB2b2lkIDA7XHJcbnZhciAkZ2FtZVNraWxsSW5mbyA9IHJlcXVpcmUoXCIuL0dhbWVTa2lsbEluZm9cIik7XHJcbnZhciBuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7XHJcbiAgICAgICAgdGhpcy5jaG9vc2VDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5za2lsbEF0ayA9IFswLCAwLCAwLCAxXTtcclxuICAgICAgICB0aGlzLnNraWxsQXRrUmFuZ2UgPSBbMCwgMCwgMCwgMV07XHJcbiAgICAgICAgdGhpcy5za2lsbENEID0gWzAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG4gICAgdC5wcm90b3R5cGUuY2FjdWxhdGVGaW5hbCA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xyXG4gICAgICAgICAgICBlID0gITA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRbJGdhbWVTa2lsbEluZm8uU2tpbGw0UGFyYW0uRklOQUxdID1cclxuICAgICAgICAgICAgdFskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5CQVNJQ10gKlxyXG4gICAgICAgICAgICB0WyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkRFQ10gKlxyXG4gICAgICAgICAgICAoMSArIHRbJGdhbWVTa2lsbEluZm8uU2tpbGw0UGFyYW0uQUREXSk7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgdFskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5GSU5BTF0gPSBNYXRoLmNlaWwodFskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5GSU5BTF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS51cGRhdGVBbmRDYWxjdWxhdGUgPSBmdW5jdGlvbiAodCwgZSwgaSwgbikge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IG4pIHtcclxuICAgICAgICAgICAgbiA9ICEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpID09PSAkZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5BRERcclxuICAgICAgICAgICAgPyAodFskZ2FtZVNraWxsSW5mby5Ta2lsbDRQYXJhbS5BRERdICs9IGUpXHJcbiAgICAgICAgICAgIDogaSA9PT0gJGdhbWVTa2lsbEluZm8uU2tpbGw0UGFyYW0uREVDICYmICh0WyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkRFQ10gKj0gMSArIGUpO1xyXG4gICAgICAgIHRoaXMuY2FjdWxhdGVGaW5hbCh0LCBuKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5nZXRCYXNpY0F0ayA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnNraWxsQXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkJBU0lDXSAqICgxICsgdCkpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFwiXFxuICAgICAgICDmioDog73kvKTlrrM6XCIgK1xyXG4gICAgICAgICAgICB0aGlzLnNraWxsQXRrICtcclxuICAgICAgICAgICAgXCJcXG4gICAgICAgIOaKgOiDveaUu+WHu+iMg+WbtDpcIiArXHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxBdGtSYW5nZSArXHJcbiAgICAgICAgICAgIFwiXFxuICAgICAgICDmioDog71jZDpcIiArXHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxDRCArXHJcbiAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHQ7XHJcbn0pKCk7XHJcbmV4cG9ydHMuQmFzZVNraWxsID0gbjtcclxuIl19