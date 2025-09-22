"use strict";
cc._RF.push(module, '5bb38G07AZDgpzOv2XPBwKF', 'UpgradeView');
// game_script/scripts/UpgradeView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $popupView = require("./PopupView");

var $remoteAudio = require("./RemoteAudio");

var $configContext = require("./ConfigContext");

var $userDataContext = require("./UserDataContext");

var f = cc._decorator;
var h = f.ccclass;
var m = f.property;

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.anim = null;
    e.infoLayer = null;
    e.closeAll = null;
    e.isClose = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t;
    var e = this;
    $remoteAudio["default"].instance.playEffectMusic("levelup");
    var i = null === (t = this.uiParam.param) || void 0 === t ? void 0 : t.count;

    if (!i) {
      i = 1;
    }

    this.infoLayer.children[0].getComponent(cc.Label).string = "等级" + ($userDataContext["default"].Ins.gradeInfo.grade - 1);
    this.infoLayer.children[1].getComponent(cc.Label).string = "等级" + $userDataContext["default"].Ins.gradeInfo.grade;
    this.infoLayer.children[2].getComponent(cc.Label).string = "奖励：" + 100 * i;
    var o = -1;
    var n = $configContext["default"].instance.basicSkillConfigs;

    for (var s = 0; s < n.length; s++) {
      if (n[s].unclok_level === $userDataContext["default"].Ins.gradeInfo.grade) {
        o = n[s].skillmaster_id;
        break;
      }
    }

    if (-1 !== o) {
      this.infoLayer.children[3].active = !0;
      this.infoLayer.children[6].active = !0;
      var c = this.infoLayer.children[6].getComponent(cc.Sprite);
      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/skills/" + $configContext["default"].instance.skillConfigsMap.get(o).icon], cc.SpriteFrame, null, function (t, i) {
        var o = i[0];

        if (o && cc.isValid(c)) {
          c.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
        }
      });
    } else {
      this.infoLayer.children[3].active = !1;
      this.infoLayer.children[6].active = !1;
    }

    this.anim.playAnimation("kai", 1);
    this.anim.once(dragonBones.EventObject.COMPLETE, function () {
      e.anim.playAnimation("stand", 0);
      e.infoLayer.active = !0;
      e.infoLayer.opacity = 0;
      cc.tween(e.infoLayer).to(0.3, {
        opacity: 255
      }).call(function () {
        e.isClose = !0;
      }).start();
    }, this);
  };

  e.prototype.addEvent = function () {
    this.closeAll.on(cc.Node.EventType.TOUCH_END, this.clickClose, this);
  };

  e.prototype.removeEvent = function () {
    this.closeAll.off(cc.Node.EventType.TOUCH_END, this.clickClose, this);
  };

  e.prototype.clickClose = function () {
    if (this.isClose) {
      t.prototype.onClickClose.call(this);
    }
  };

  __decorate([m(dragonBones.ArmatureDisplay)], e.prototype, "anim", void 0);

  __decorate([m(cc.Node)], e.prototype, "infoLayer", void 0);

  __decorate([m(cc.Node)], e.prototype, "closeAll", void 0);

  return __decorate([h], e);
}($popupView.PopupView);

exports["default"] = y;

cc._RF.pop();