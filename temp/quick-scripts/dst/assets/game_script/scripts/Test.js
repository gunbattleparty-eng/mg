
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1fa5S22ldFiaO80rYHUyhM', 'Test');
// game_script/scripts/Test.js

"use strict";

var o;
var r = cc._decorator;
var a = r.ccclass;
var l = (r.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e._timeElapsed = 0;
    e.time = 1;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this._timeElapsed = 0;
  };

  e.prototype.update = function (t) {
    var e = this.easeOutSine(this._timeElapsed, 1, 0.5, this.time);
    this.node.scale = e;
    this._timeElapsed += t;

    if (this._timeElapsed > this.time) {
      this._timeElapsed = 0;
    }
  };

  e.prototype.easeOutSine = function (t, e, i, o) {
    return i * Math.sin(t / o * Math.PI) + e;
  };

  return __decorate([a], e);
}(cc.Component));
exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRlc3QuanMiXSwibmFtZXMiOlsibyIsInIiLCJjYyIsIl9kZWNvcmF0b3IiLCJhIiwiY2NjbGFzcyIsImwiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdGltZUVsYXBzZWQiLCJ0aW1lIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwic3RhcnQiLCJ1cGRhdGUiLCJlYXNlT3V0U2luZSIsIm5vZGUiLCJzY2FsZSIsImkiLCJNYXRoIiwic2luIiwiUEkiLCJfX2RlY29yYXRlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxZQUFGLEdBQWlCLENBQWpCO0lBQ0FILENBQUMsQ0FBQ0ksSUFBRixHQUFTLENBQVQ7SUFDQSxPQUFPSixDQUFQO0VBQ0g7O0VBQ0RLLFNBQVMsQ0FBQ0wsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxLQUFaLEdBQW9CLFlBQVk7SUFDNUIsS0FBS0osWUFBTCxHQUFvQixDQUFwQjtFQUNILENBRkQ7O0VBR0FILENBQUMsQ0FBQ00sU0FBRixDQUFZRSxNQUFaLEdBQXFCLFVBQVVULENBQVYsRUFBYTtJQUM5QixJQUFJQyxDQUFDLEdBQUcsS0FBS1MsV0FBTCxDQUFpQixLQUFLTixZQUF0QixFQUFvQyxDQUFwQyxFQUF1QyxHQUF2QyxFQUE0QyxLQUFLQyxJQUFqRCxDQUFSO0lBQ0EsS0FBS00sSUFBTCxDQUFVQyxLQUFWLEdBQWtCWCxDQUFsQjtJQUNBLEtBQUtHLFlBQUwsSUFBcUJKLENBQXJCOztJQUNBLElBQUksS0FBS0ksWUFBTCxHQUFvQixLQUFLQyxJQUE3QixFQUFtQztNQUMvQixLQUFLRCxZQUFMLEdBQW9CLENBQXBCO0lBQ0g7RUFDSixDQVBEOztFQVFBSCxDQUFDLENBQUNNLFNBQUYsQ0FBWUcsV0FBWixHQUEwQixVQUFVVixDQUFWLEVBQWFDLENBQWIsRUFBZ0JZLENBQWhCLEVBQW1CckIsQ0FBbkIsRUFBc0I7SUFDNUMsT0FBT3FCLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVVmLENBQUMsR0FBR1IsQ0FBTCxHQUFVc0IsSUFBSSxDQUFDRSxFQUF4QixDQUFKLEdBQWtDZixDQUF6QztFQUNILENBRkQ7O0VBR0EsT0FBT2dCLFVBQVUsQ0FBQyxDQUFDckIsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQXZCRCxDQXVCR1AsRUFBRSxDQUFDd0IsU0F2Qk4sQ0FGQyxDQUFMO0FBMEJBQyxPQUFPLFdBQVAsR0FBa0JyQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciByID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGEgPSByLmNjY2xhc3M7XHJcbnZhciBsID1cclxuICAgIChyLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuX3RpbWVFbGFwc2VkID0gMDtcclxuICAgICAgICAgICAgZS50aW1lID0gMTtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmVhc2VPdXRTaW5lKHRoaXMuX3RpbWVFbGFwc2VkLCAxLCAwLjUsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IGU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVFbGFwc2VkICs9IHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90aW1lRWxhcHNlZCA+IHRoaXMudGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGltZUVsYXBzZWQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5lYXNlT3V0U2luZSA9IGZ1bmN0aW9uICh0LCBlLCBpLCBvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpICogTWF0aC5zaW4oKHQgLyBvKSAqIE1hdGguUEkpICsgZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFthXSwgZSk7XHJcbiAgICB9KShjYy5Db21wb25lbnQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbDtcclxuIl19