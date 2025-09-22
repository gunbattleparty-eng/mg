
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Bullet_18.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b5656lF1FM7KeOzLb8/57M', 'Bullet_18');
// game_script/scripts/Bullet_18.js

"use strict";

var o;

var $object = require("./Object");

var $remoteAudio = require("./RemoteAudio");

var $gameSkillInfo = require("./GameSkillInfo");

var $baseBullet = require("./BaseBullet");

var u = cc._decorator;
var d = u.ccclass;
var p = (u.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.guide_laser_boom;
    e.skillSpecialitys = [$baseBullet.BulletSpeciality.boom, $baseBullet.BulletSpeciality.energy];
    return e;
  }

  __extends(e, t);

  e.prototype.initButtle = function (e, i) {
    t.prototype.initButtle.call(this, e, i);
    var o = this.skillParam.guideLaserBoomRange;
    this.setScale(cc.v3(o, o));
    this.atk = this.skillParam.guideLaserBoomAtk[$gameSkillInfo.Skill4Param.FINAL];
  };

  e.prototype.setAnimation = function () {
    var t = this;
    var e = this.node.children[0].getComponent(cc.Animation);
    $remoteAudio["default"].instance.playEffectMusicRestrict("boom", 0.3);
    e.play("bullet_18");
    e.once(cc.Animation.EventType.FINISHED, function () {
      t.removeSelf();
    }, this);
  };

  e.prototype.onTrigger = function (t, e) {
    if (!this.isUse) {
      if (e == $object.Trigger.enter) {
        t.object.sufferAtk({
          id: 116,
          skillSpecialitys: this.skillSpecialitys,
          atk: this.atk
        });
      }
    }
  };

  e.prototype.updateFrame = function () {};

  return __decorate([d], e);
}($baseBullet["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJ1bGxldF8xOC5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkcmVtb3RlQXVkaW8iLCIkZ2FtZVNraWxsSW5mbyIsIiRiYXNlQnVsbGV0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJ1dHRsZVR5cGUiLCJCdWxsZXRUeXBlIiwiZ3VpZGVfbGFzZXJfYm9vbSIsInNraWxsU3BlY2lhbGl0eXMiLCJCdWxsZXRTcGVjaWFsaXR5IiwiYm9vbSIsImVuZXJneSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXRCdXR0bGUiLCJpIiwiY2FsbCIsInNraWxsUGFyYW0iLCJndWlkZUxhc2VyQm9vbVJhbmdlIiwic2V0U2NhbGUiLCJ2MyIsImF0ayIsImd1aWRlTGFzZXJCb29tQXRrIiwiU2tpbGw0UGFyYW0iLCJGSU5BTCIsInNldEFuaW1hdGlvbiIsIm5vZGUiLCJjaGlsZHJlbiIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsImluc3RhbmNlIiwicGxheUVmZmVjdE11c2ljUmVzdHJpY3QiLCJwbGF5Iiwib25jZSIsIkV2ZW50VHlwZSIsIkZJTklTSEVEIiwicmVtb3ZlU2VsZiIsIm9uVHJpZ2dlciIsImlzVXNlIiwiVHJpZ2dlciIsImVudGVyIiwib2JqZWN0Iiwic3VmZmVyQXRrIiwiaWQiLCJ1cGRhdGVGcmFtZSIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlFLGNBQWMsR0FBR0YsT0FBTyxDQUFDLGlCQUFELENBQTVC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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRvYmplY3QgPSByZXF1aXJlKFwiLi9PYmplY3RcIik7XHJcbnZhciAkcmVtb3RlQXVkaW8gPSByZXF1aXJlKFwiLi9SZW1vdGVBdWRpb1wiKTtcclxudmFyICRnYW1lU2tpbGxJbmZvID0gcmVxdWlyZShcIi4vR2FtZVNraWxsSW5mb1wiKTtcclxudmFyICRiYXNlQnVsbGV0ID0gcmVxdWlyZShcIi4vQmFzZUJ1bGxldFwiKTtcclxudmFyIHUgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgZCA9IHUuY2NjbGFzcztcclxudmFyIHAgPVxyXG4gICAgKHUucHJvcGVydHksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS5idXR0bGVUeXBlID0gJGJhc2VCdWxsZXQuQnVsbGV0VHlwZS5ndWlkZV9sYXNlcl9ib29tO1xyXG4gICAgICAgICAgICBlLnNraWxsU3BlY2lhbGl0eXMgPSBbJGJhc2VCdWxsZXQuQnVsbGV0U3BlY2lhbGl0eS5ib29tLCAkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LmVuZXJneV07XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdEJ1dHRsZSA9IGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgIHQucHJvdG90eXBlLmluaXRCdXR0bGUuY2FsbCh0aGlzLCBlLCBpKTtcclxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnNraWxsUGFyYW0uZ3VpZGVMYXNlckJvb21SYW5nZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZShjYy52MyhvLCBvKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrID0gdGhpcy5za2lsbFBhcmFtLmd1aWRlTGFzZXJCb29tQXRrWyRnYW1lU2tpbGxJbmZvLlNraWxsNFBhcmFtLkZJTkFMXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnNldEFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljUmVzdHJpY3QoXCJib29tXCIsIDAuMyk7XHJcbiAgICAgICAgICAgIGUucGxheShcImJ1bGxldF8xOFwiKTtcclxuICAgICAgICAgICAgZS5vbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuQW5pbWF0aW9uLkV2ZW50VHlwZS5GSU5JU0hFRCxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNVc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlID09ICRvYmplY3QuVHJpZ2dlci5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHQub2JqZWN0LnN1ZmZlckF0ayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsU3BlY2lhbGl0eXM6IHRoaXMuc2tpbGxTcGVjaWFsaXR5cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXRrOiB0aGlzLmF0a1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVGcmFtZSA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XHJcbiAgICB9KSgkYmFzZUJ1bGxldC5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHA7XHJcbiJdfQ==