
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/EBullet_5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8ca7JqCrRMtb64ZIA9uWzv', 'EBullet_5');
// game_script/scripts/EBullet_5.js

"use strict";

var o;

var $object = require("./Object");

var $eventManager = require("./EventManager");

var $util = require("./Util");

var $localEventName = require("./LocalEventName");

var $baseBullet = require("./BaseBullet");

var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, new cc.Vec3(0, -1));

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_5;
    return e;
  }

  __extends(e, t);

  e.prototype.initEButtle = function (e, i) {
    t.prototype.initButtle.call(this, null, null);
    this.speed = i;
    this.atk = e;
    var o = $util["default"].dirConverAngle(f);
    this.setAngle(o);
    this.velocity.set(f).multiplyScalar(this.speed);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        $eventManager["default"].send($localEventName["default"].ATK_DOOR, this.atk);
        this.removeSelf();
      }
    }
  };

  return __decorate([p], e);
}($baseBullet["default"]);

exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEVCdWxsZXRfNS5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkZXZlbnRNYW5hZ2VyIiwiJHV0aWwiLCIkbG9jYWxFdmVudE5hbWUiLCIkYmFzZUJ1bGxldCIsImQiLCJjYyIsIl9kZWNvcmF0b3IiLCJwIiwiY2NjbGFzcyIsImYiLCJwcm9wZXJ0eSIsIlZlYzMiLCJoIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwiZV9idWxsZXRfNSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRFQnV0dGxlIiwiaSIsImluaXRCdXR0bGUiLCJjYWxsIiwic3BlZWQiLCJhdGsiLCJkaXJDb252ZXJBbmdsZSIsInNldEFuZ2xlIiwidmVsb2NpdHkiLCJzZXQiLCJtdWx0aXBseVNjYWxhciIsIm9uVHJpZ2dlciIsImlzVXNlIiwiVHJpZ2dlciIsImVudGVyIiwic2VuZCIsIkFUS19ET09SIiwicmVtb3ZlU2VsZiIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxLQUFLLEdBQUdGLE9BQU8sQ0FBQyxRQUFELENBQW5COztBQUNBLElBQUlHLGVBQWUsR0FBR0gsT0FBTyxDQUFDLGtCQUFELENBQTdCOztBQUNBLElBQUlJLFdBQVcsR0FBR0osT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUssQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFBSUwsQ0FBQyxDQUFDTSxRQUFGLEVBQVksSUFBSUwsRUFBRSxDQUFDTSxJQUFQLENBQVksQ0FBWixFQUFlLENBQUMsQ0FBaEIsQ0FBaEIsQ0FBTDs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csVUFBRixHQUFlZCxXQUFXLENBQUNlLFVBQVosQ0FBdUJDLFVBQXRDO0lBQ0EsT0FBT0wsQ0FBUDtFQUNIOztFQUNETSxTQUFTLENBQUNOLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNPLFNBQUYsQ0FBWUMsV0FBWixHQUEwQixVQUFVUixDQUFWLEVBQWFTLENBQWIsRUFBZ0I7SUFDdENWLENBQUMsQ0FBQ1EsU0FBRixDQUFZRyxVQUFaLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QztJQUNBLEtBQUtDLEtBQUwsR0FBYUgsQ0FBYjtJQUNBLEtBQUtJLEdBQUwsR0FBV2IsQ0FBWDtJQUNBLElBQUlqQixDQUFDLEdBQUdJLEtBQUssV0FBTCxDQUFjMkIsY0FBZCxDQUE2Qm5CLENBQTdCLENBQVI7SUFDQSxLQUFLb0IsUUFBTCxDQUFjaEMsQ0FBZDtJQUNBLEtBQUtpQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0J0QixDQUFsQixFQUFxQnVCLGNBQXJCLENBQW9DLEtBQUtOLEtBQXpDO0VBQ0gsQ0FQRDs7RUFRQVosQ0FBQyxDQUFDTyxTQUFGLENBQVlZLFNBQVosR0FBd0IsVUFBVXBCLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUNwQyxJQUFJLENBQUMsS0FBS29CLEtBQVYsRUFBaUI7TUFDYixJQUFJcEIsQ0FBQyxJQUFJaEIsT0FBTyxDQUFDcUMsT0FBUixDQUFnQkMsS0FBekIsRUFBZ0M7UUFDNUJwQyxhQUFhLFdBQWIsQ0FBc0JxQyxJQUF0QixDQUEyQm5DLGVBQWUsV0FBZixDQUF3Qm9DLFFBQW5ELEVBQTZELEtBQUtYLEdBQWxFO1FBQ0EsS0FBS1ksVUFBTDtNQUNIO0lBQ0o7RUFDSixDQVBEOztFQVFBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDakMsQ0FBRCxDQUFELEVBQU1PLENBQU4sQ0FBakI7QUFDSCxDQXhCTyxDQXdCTFgsV0FBVyxXQXhCTixDQUFSOztBQXlCQXNDLE9BQU8sV0FBUCxHQUFrQjdCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRvYmplY3QgPSByZXF1aXJlKFwiLi9PYmplY3RcIik7XHJcbnZhciAkZXZlbnRNYW5hZ2VyID0gcmVxdWlyZShcIi4vRXZlbnRNYW5hZ2VyXCIpO1xyXG52YXIgJHV0aWwgPSByZXF1aXJlKFwiLi9VdGlsXCIpO1xyXG52YXIgJGxvY2FsRXZlbnROYW1lID0gcmVxdWlyZShcIi4vTG9jYWxFdmVudE5hbWVcIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciBkID0gY2MuX2RlY29yYXRvcjtcclxudmFyIHAgPSBkLmNjY2xhc3M7XHJcbnZhciBmID0gKGQucHJvcGVydHksIG5ldyBjYy5WZWMzKDAsIC0xKSk7XHJcbnZhciBoID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuYnV0dGxlVHlwZSA9ICRiYXNlQnVsbGV0LkJ1bGxldFR5cGUuZV9idWxsZXRfNTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUucHJvdG90eXBlLmluaXRFQnV0dGxlID0gZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICB0LnByb3RvdHlwZS5pbml0QnV0dGxlLmNhbGwodGhpcywgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGk7XHJcbiAgICAgICAgdGhpcy5hdGsgPSBlO1xyXG4gICAgICAgIHZhciBvID0gJHV0aWwuZGVmYXVsdC5kaXJDb252ZXJBbmdsZShmKTtcclxuICAgICAgICB0aGlzLnNldEFuZ2xlKG8pO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KGYpLm11bHRpcGx5U2NhbGFyKHRoaXMuc3BlZWQpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLm9uVHJpZ2dlciA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVXNlKSB7XHJcbiAgICAgICAgICAgIGlmIChlID09ICRvYmplY3QuVHJpZ2dlci5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0LnNlbmQoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuQVRLX0RPT1IsIHRoaXMuYXRrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtwXSwgZSk7XHJcbn0pKCRiYXNlQnVsbGV0LmRlZmF1bHQpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBoO1xyXG4iXX0=