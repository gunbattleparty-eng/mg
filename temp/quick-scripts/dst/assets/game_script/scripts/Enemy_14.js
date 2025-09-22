
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Enemy_14.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b1bf0t2cpOObiP3gGss4vv', 'Enemy_14');
// game_script/scripts/Enemy_14.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $enemy_13 = require("./Enemy_13");

var l = cc._decorator;
var c = l.ccclass;
var u = (l.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_14;
    return e;
  }

  __extends(e, t);

  return __decorate([c], e);
}($enemy_13["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVuZW15XzE0LmpzIl0sIm5hbWVzIjpbIm8iLCIkYmFzZUJ1bGxldCIsInJlcXVpcmUiLCIkZW5lbXlfMTMiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiYnV0dGxlVHlwZSIsIkJ1bGxldFR5cGUiLCJlX2J1bGxldF8xNCIsIl9fZXh0ZW5kcyIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csVUFBRixHQUFlZCxXQUFXLENBQUNlLFVBQVosQ0FBdUJDLFdBQXRDO0lBQ0EsT0FBT0wsQ0FBUDtFQUNIOztFQUNETSxTQUFTLENBQUNOLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBLE9BQU9RLFVBQVUsQ0FBQyxDQUFDWixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBUkQsQ0FRR1QsU0FBUyxXQVJaLENBRkMsQ0FBTDtBQVdBaUIsT0FBTyxXQUFQLEdBQWtCWCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkZW5lbXlfMTMgPSByZXF1aXJlKFwiLi9FbmVteV8xM1wiKTtcclxudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgYyA9IGwuY2NjbGFzcztcclxudmFyIHUgPVxyXG4gICAgKGwucHJvcGVydHksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS5idXR0bGVUeXBlID0gJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5lX2J1bGxldF8xNDtcclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xyXG4gICAgfSkoJGVuZW15XzEzLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdTtcclxuIl19