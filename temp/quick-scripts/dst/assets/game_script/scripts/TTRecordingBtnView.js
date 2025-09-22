
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TTRecordingBtnView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '765501MHhxHhKtJEBQRHGu7', 'TTRecordingBtnView');
// game_script/scripts/TTRecordingBtnView.js

"use strict";

var o;

var $platform = require("./Platform");

var $aD = require("./AD");

var $aDConfig = require("./ADConfig");

var c = cc._decorator;
var u = c.ccclass;
var d = c.property;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.node_btn_share = null;
    e.videoPath = "";
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.node.active = $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO;
    this.node_btn_share.on("click", this.onClickShare, this);
    this.node_btn_share.active = !1;
    this.videoPath = "";

    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
      $aD["default"].toutiao.stopRecorder(function () {
        console.log("结束录屏");
      });
    }
  };

  e.prototype.update = function () {
    if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO && !this.videoPath) {
      var t = $aD["default"].toutiao.getRecordVideoPath();

      if (t) {
        this.videoPath = t;
        this.node_btn_share.active = !0;
      }
    }
  };

  e.prototype.onClickShare = function () {
    if (this.videoPath) {
      $aD["default"].toutiao.share({
        share_title: $aDConfig.ADConfig.tt.share_title,
        share_desc: $aDConfig.ADConfig.tt.share_desc,
        share_imageUrl: $aDConfig.ADConfig.tt.share_imageUrl,
        videoPath: this.videoPath,
        success: function success() {}
      });
    }
  };

  __decorate([d(cc.Node)], e.prototype, "node_btn_share", void 0);

  return __decorate([u], e);
}(cc.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRUUmVjb3JkaW5nQnRuVmlldy5qcyJdLCJuYW1lcyI6WyJvIiwiJHBsYXRmb3JtIiwicmVxdWlyZSIsIiRhRCIsIiRhRENvbmZpZyIsImMiLCJjYyIsIl9kZWNvcmF0b3IiLCJ1IiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInAiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibm9kZV9idG5fc2hhcmUiLCJ2aWRlb1BhdGgiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydCIsIm5vZGUiLCJhY3RpdmUiLCJQbGF0Zm9ybSIsImN1cnJQbGF0Rm9ybSIsIlBsYXRmb3JtRW51bSIsIlRPVV9USUFPIiwib24iLCJvbkNsaWNrU2hhcmUiLCJ0b3V0aWFvIiwic3RvcFJlY29yZGVyIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImdldFJlY29yZFZpZGVvUGF0aCIsInNoYXJlIiwic2hhcmVfdGl0bGUiLCJBRENvbmZpZyIsInR0Iiwic2hhcmVfZGVzYyIsInNoYXJlX2ltYWdlVXJsIiwic3VjY2VzcyIsIl9fZGVjb3JhdGUiLCJOb2RlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsR0FBRyxHQUFHRCxPQUFPLENBQUMsTUFBRCxDQUFqQjs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNBLElBQUlHLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csY0FBRixHQUFtQixJQUFuQjtJQUNBSCxDQUFDLENBQUNJLFNBQUYsR0FBYyxFQUFkO0lBQ0EsT0FBT0osQ0FBUDtFQUNIOztFQUNESyxTQUFTLENBQUNMLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNNLFNBQUYsQ0FBWUMsS0FBWixHQUFvQixZQUFZO0lBQzVCLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQnRCLFNBQVMsQ0FBQ3VCLFFBQVYsQ0FBbUJDLFlBQW5CLEtBQW9DeEIsU0FBUyxDQUFDeUIsWUFBVixDQUF1QkMsUUFBOUU7SUFDQSxLQUFLVixjQUFMLENBQW9CVyxFQUFwQixDQUF1QixPQUF2QixFQUFnQyxLQUFLQyxZQUFyQyxFQUFtRCxJQUFuRDtJQUNBLEtBQUtaLGNBQUwsQ0FBb0JNLE1BQXBCLEdBQTZCLENBQUMsQ0FBOUI7SUFDQSxLQUFLTCxTQUFMLEdBQWlCLEVBQWpCOztJQUNBLElBQUlqQixTQUFTLENBQUN1QixRQUFWLENBQW1CQyxZQUFuQixLQUFvQ3hCLFNBQVMsQ0FBQ3lCLFlBQVYsQ0FBdUJDLFFBQS9ELEVBQXlFO01BQ3JFeEIsR0FBRyxXQUFILENBQVkyQixPQUFaLENBQW9CQyxZQUFwQixDQUFpQyxZQUFZO1FBQ3pDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO01BQ0gsQ0FGRDtJQUdIO0VBQ0osQ0FWRDs7RUFXQW5CLENBQUMsQ0FBQ00sU0FBRixDQUFZYyxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsSUFBSWpDLFNBQVMsQ0FBQ3VCLFFBQVYsQ0FBbUJDLFlBQW5CLEtBQW9DeEIsU0FBUyxDQUFDeUIsWUFBVixDQUF1QkMsUUFBM0QsSUFBdUUsQ0FBQyxLQUFLVCxTQUFqRixFQUE0RjtNQUN4RixJQUFJTCxDQUFDLEdBQUdWLEdBQUcsV0FBSCxDQUFZMkIsT0FBWixDQUFvQkssa0JBQXBCLEVBQVI7O01BQ0EsSUFBSXRCLENBQUosRUFBTztRQUNILEtBQUtLLFNBQUwsR0FBaUJMLENBQWpCO1FBQ0EsS0FBS0ksY0FBTCxDQUFvQk0sTUFBcEIsR0FBNkIsQ0FBQyxDQUE5QjtNQUNIO0lBQ0o7RUFDSixDQVJEOztFQVNBVCxDQUFDLENBQUNNLFNBQUYsQ0FBWVMsWUFBWixHQUEyQixZQUFZO0lBQ25DLElBQUksS0FBS1gsU0FBVCxFQUFvQjtNQUNoQmYsR0FBRyxXQUFILENBQVkyQixPQUFaLENBQW9CTSxLQUFwQixDQUEwQjtRQUN0QkMsV0FBVyxFQUFFakMsU0FBUyxDQUFDa0MsUUFBVixDQUFtQkMsRUFBbkIsQ0FBc0JGLFdBRGI7UUFFdEJHLFVBQVUsRUFBRXBDLFNBQVMsQ0FBQ2tDLFFBQVYsQ0FBbUJDLEVBQW5CLENBQXNCQyxVQUZaO1FBR3RCQyxjQUFjLEVBQUVyQyxTQUFTLENBQUNrQyxRQUFWLENBQW1CQyxFQUFuQixDQUFzQkUsY0FIaEI7UUFJdEJ2QixTQUFTLEVBQUUsS0FBS0EsU0FKTTtRQUt0QndCLE9BQU8sRUFBRSxtQkFBWSxDQUFFO01BTEQsQ0FBMUI7SUFPSDtFQUNKLENBVkQ7O0VBV0FDLFVBQVUsQ0FBQyxDQUFDakMsQ0FBQyxDQUFDSixFQUFFLENBQUNzQyxJQUFKLENBQUYsQ0FBRCxFQUFlOUIsQ0FBQyxDQUFDTSxTQUFqQixFQUE0QixnQkFBNUIsRUFBOEMsS0FBSyxDQUFuRCxDQUFWOztFQUNBLE9BQU91QixVQUFVLENBQUMsQ0FBQ25DLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F6Q08sQ0F5Q0xSLEVBQUUsQ0FBQ3VDLFNBekNFLENBQVI7O0FBMENBQyxPQUFPLFdBQVAsR0FBa0JsQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkcGxhdGZvcm0gPSByZXF1aXJlKFwiLi9QbGF0Zm9ybVwiKTtcclxudmFyICRhRCA9IHJlcXVpcmUoXCIuL0FEXCIpO1xyXG52YXIgJGFEQ29uZmlnID0gcmVxdWlyZShcIi4vQURDb25maWdcIik7XHJcbnZhciBjID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHUgPSBjLmNjY2xhc3M7XHJcbnZhciBkID0gYy5wcm9wZXJ0eTtcclxudmFyIHAgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgIGZ1bmN0aW9uIGUoKSB7XHJcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgZS5ub2RlX2J0bl9zaGFyZSA9IG51bGw7XHJcbiAgICAgICAgZS52aWRlb1BhdGggPSBcIlwiO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ICRwbGF0Zm9ybS5QbGF0Zm9ybS5jdXJyUGxhdEZvcm0gPT09ICRwbGF0Zm9ybS5QbGF0Zm9ybUVudW0uVE9VX1RJQU87XHJcbiAgICAgICAgdGhpcy5ub2RlX2J0bl9zaGFyZS5vbihcImNsaWNrXCIsIHRoaXMub25DbGlja1NoYXJlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGVfYnRuX3NoYXJlLmFjdGl2ZSA9ICExO1xyXG4gICAgICAgIHRoaXMudmlkZW9QYXRoID0gXCJcIjtcclxuICAgICAgICBpZiAoJHBsYXRmb3JtLlBsYXRmb3JtLmN1cnJQbGF0Rm9ybSA9PT0gJHBsYXRmb3JtLlBsYXRmb3JtRW51bS5UT1VfVElBTykge1xyXG4gICAgICAgICAgICAkYUQuZGVmYXVsdC50b3V0aWFvLnN0b3BSZWNvcmRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIue7k+adn+W9leWxj1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJHBsYXRmb3JtLlBsYXRmb3JtLmN1cnJQbGF0Rm9ybSA9PT0gJHBsYXRmb3JtLlBsYXRmb3JtRW51bS5UT1VfVElBTyAmJiAhdGhpcy52aWRlb1BhdGgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSAkYUQuZGVmYXVsdC50b3V0aWFvLmdldFJlY29yZFZpZGVvUGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1BhdGggPSB0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlX2J0bl9zaGFyZS5hY3RpdmUgPSAhMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5vbkNsaWNrU2hhcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9QYXRoKSB7XHJcbiAgICAgICAgICAgICRhRC5kZWZhdWx0LnRvdXRpYW8uc2hhcmUoe1xyXG4gICAgICAgICAgICAgICAgc2hhcmVfdGl0bGU6ICRhRENvbmZpZy5BRENvbmZpZy50dC5zaGFyZV90aXRsZSxcclxuICAgICAgICAgICAgICAgIHNoYXJlX2Rlc2M6ICRhRENvbmZpZy5BRENvbmZpZy50dC5zaGFyZV9kZXNjLFxyXG4gICAgICAgICAgICAgICAgc2hhcmVfaW1hZ2VVcmw6ICRhRENvbmZpZy5BRENvbmZpZy50dC5zaGFyZV9pbWFnZVVybCxcclxuICAgICAgICAgICAgICAgIHZpZGVvUGF0aDogdGhpcy52aWRlb1BhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbZChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm5vZGVfYnRuX3NoYXJlXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbdV0sIGUpO1xyXG59KShjYy5Db21wb25lbnQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBwO1xyXG4iXX0=