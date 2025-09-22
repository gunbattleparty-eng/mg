
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/SBullet_6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa77bx8EhVK2KF9GVDYZ1OX', 'SBullet_6');
// game_script/scripts/SBullet_6.js

"use strict";

var o;

var $gameContext = require("./GameContext");

var $baseBullet = require("./BaseBullet");

var l = cc._decorator;
var c = l.ccclass;
var u = (l.property, new cc.Vec3(), function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.s_bullet_6;
    e.leftTime = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e) {
    t.prototype.initButtle.call(this, e, null);

    if (e) {
      this.velocity.set(e).multiplyScalar(this.speed);
    }

    this.node.children[0].scaleY = 0;
    cc.tween(this.node.children[0]).to(0.3, {
      scaleY: 1
    }).start();
    this.leftTime = $gameContext["default"].ins.skillInfo.skinParam[5];
  };

  e.prototype.updateFrame = function (t) {
    var e = this;

    if (!(this.leftTime <= 0)) {
      this.leftTime -= t;

      if (this.leftTime <= 0) {
        cc.tween(this.node.children[0]).to(0.3, {
          scaleY: 0
        }).call(function () {
          e.removeSelf();
        }).start();
      }
    }
  };

  return __decorate([c], e);
}($baseBullet["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNCdWxsZXRfNi5qcyJdLCJuYW1lcyI6WyJvIiwiJGdhbWVDb250ZXh0IiwicmVxdWlyZSIsIiRiYXNlQnVsbGV0IiwibCIsImNjIiwiX2RlY29yYXRvciIsImMiLCJjY2NsYXNzIiwidSIsInByb3BlcnR5IiwiVmVjMyIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJidXR0bGVUeXBlIiwiQnVsbGV0VHlwZSIsInNfYnVsbGV0XzYiLCJsZWZ0VGltZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJjYWxsIiwidmVsb2NpdHkiLCJzZXQiLCJtdWx0aXBseVNjYWxhciIsInNwZWVkIiwibm9kZSIsImNoaWxkcmVuIiwic2NhbGVZIiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiaW5zIiwic2tpbGxJbmZvIiwic2tpblBhcmFtIiwidXBkYXRlRnJhbWUiLCJyZW1vdmVTZWxmIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0QsSUFBSUwsRUFBRSxDQUFDTSxJQUFQLEVBREMsRUFFQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLFVBQUYsR0FBZWIsV0FBVyxDQUFDYyxVQUFaLENBQXVCQyxVQUF0QztJQUNBTCxDQUFDLENBQUNNLFFBQUYsR0FBYSxDQUFiO0lBQ0EsT0FBT04sQ0FBUDtFQUNIOztFQUNETyxTQUFTLENBQUNQLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNRLFNBQUYsQ0FBWUMsVUFBWixHQUF5QixVQUFVVCxDQUFWLEVBQWE7SUFDbENELENBQUMsQ0FBQ1MsU0FBRixDQUFZQyxVQUFaLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixFQUFrQ1YsQ0FBbEMsRUFBcUMsSUFBckM7O0lBQ0EsSUFBSUEsQ0FBSixFQUFPO01BQ0gsS0FBS1csUUFBTCxDQUFjQyxHQUFkLENBQWtCWixDQUFsQixFQUFxQmEsY0FBckIsQ0FBb0MsS0FBS0MsS0FBekM7SUFDSDs7SUFDRCxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLENBQS9CO0lBQ0F6QixFQUFFLENBQUMwQixLQUFILENBQVMsS0FBS0gsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLENBQVQsRUFDS0csRUFETCxDQUNRLEdBRFIsRUFDYTtNQUNMRixNQUFNLEVBQUU7SUFESCxDQURiLEVBSUtHLEtBSkw7SUFLQSxLQUFLZCxRQUFMLEdBQWdCbEIsWUFBWSxXQUFaLENBQXFCaUMsR0FBckIsQ0FBeUJDLFNBQXpCLENBQW1DQyxTQUFuQyxDQUE2QyxDQUE3QyxDQUFoQjtFQUNILENBWkQ7O0VBYUF2QixDQUFDLENBQUNRLFNBQUYsQ0FBWWdCLFdBQVosR0FBMEIsVUFBVXpCLENBQVYsRUFBYTtJQUNuQyxJQUFJQyxDQUFDLEdBQUcsSUFBUjs7SUFDQSxJQUFJLEVBQUUsS0FBS00sUUFBTCxJQUFpQixDQUFuQixDQUFKLEVBQTJCO01BQ3ZCLEtBQUtBLFFBQUwsSUFBaUJQLENBQWpCOztNQUNBLElBQUksS0FBS08sUUFBTCxJQUFpQixDQUFyQixFQUF3QjtRQUNwQmQsRUFBRSxDQUFDMEIsS0FBSCxDQUFTLEtBQUtILElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixDQUFULEVBQ0tHLEVBREwsQ0FDUSxHQURSLEVBQ2E7VUFDTEYsTUFBTSxFQUFFO1FBREgsQ0FEYixFQUlLUCxJQUpMLENBSVUsWUFBWTtVQUNkVixDQUFDLENBQUN5QixVQUFGO1FBQ0gsQ0FOTCxFQU9LTCxLQVBMO01BUUg7SUFDSjtFQUNKLENBZkQ7O0VBZ0JBLE9BQU9NLFVBQVUsQ0FBQyxDQUFDaEMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXRDRCxDQXNDR1YsV0FBVyxXQXRDZCxDQUhDLENBQUw7QUEwQ0FxQyxPQUFPLFdBQVAsR0FBa0IvQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgYyA9IGwuY2NjbGFzcztcclxudmFyIHUgPVxyXG4gICAgKGwucHJvcGVydHksXHJcbiAgICBuZXcgY2MuVmVjMygpLFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUuc19idWxsZXRfNjtcclxuICAgICAgICAgICAgZS5sZWZ0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdEJ1dHRsZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLmluaXRCdXR0bGUuY2FsbCh0aGlzLCBlLCBudWxsKTtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KGUpLm11bHRpcGx5U2NhbGFyKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5zY2FsZVkgPSAwO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVZOiAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdFRpbWUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnNraW5QYXJhbVs1XTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZUZyYW1lID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLmxlZnRUaW1lIDw9IDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRUaW1lIC09IHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0VGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xyXG4gICAgfSkoJGJhc2VCdWxsZXQuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB1O1xyXG4iXX0=