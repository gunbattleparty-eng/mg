"use strict";
cc._RF.push(module, '89ce7CVIz9BD6UprC6GRFmr', 'Egg1');
// game_script/scripts/Egg1.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $popupManager = require("./PopupManager");

var $globalParam = require("./GlobalParam");

var $userDataContext = require("./UserDataContext");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.prop = null;
    e.box = null;
    e.count = 0;
    e.dir = -1;
    e.initPos = null;
    e.isKey = !1;
    e.isTouchProp = !1;
    e.dis = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.initPos = this.prop.position.clone();
    this.prop.on(cc.Node.EventType.TOUCH_START, this.touchProp, this);
    this.prop.on(cc.Node.EventType.TOUCH_MOVE, this.moveProp, this);
    this.prop.on(cc.Node.EventType.TOUCH_END, this.endProp, this);
    this.prop.on(cc.Node.EventType.TOUCH_CANCEL, this.endProp, this);
    this.box.on(cc.Node.EventType.TOUCH_START, this.touchBox, this);
  };

  e.prototype.touchProp = function () {
    this.isTouchProp = !0;
  };

  e.prototype.moveProp = function (t) {
    this.count >= 3 ? this.isTouchProp && (this.prop.position = this.prop.position.add(cc.v3(t.getDelta()))) : (this.dis += t.getDeltaX(), -1 === this.dir ? this.dis >= 30 && (this.dis = 0, this.count++, this.dir = 1, this.renderProp()) : this.dis <= -30 && (this.dis = 0, this.count++, this.dir = -1, this.renderProp()), this.count >= 3 && (t.stopPropagationImmediate(), this.isTouchProp = !1, this.renderProp()));
  };

  e.prototype.endProp = function () {
    this.isTouchProp = !1;

    if (!(this.count < 3)) {
      if (this.prop.position.sub(this.box.position).mag() < 100) {
        this.prop.active = !1;
        var t = this.box.getComponent(dragonBones.ArmatureDisplay);
        this.prop.active = !1;
        t.playAnimation("qiao_2", 1);
        t.once(dragonBones.EventObject.COMPLETE, function () {
          t.playAnimation("qiao_3", 1);
        }, this);
      } else {
        this.prop.position = this.initPos.clone();
      }
    }
  };

  e.prototype.touchBox = function () {
    var t = this;

    if (!(this.prop.active || this.isKey || $globalParam["default"].isGamePuase)) {
      $globalParam["default"].isGamePuase = !0;
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.EggKeyView, {
        type: 1
      }, {
        closeCallback: function closeCallback() {
          $globalParam["default"].isGamePuase = !1;

          if ($userDataContext["default"].Ins.getEgg(1) >= 1) {
            t.box.getComponent(dragonBones.ArmatureDisplay).playAnimation("qiao_4", 0);
            t.isKey = !0;
          }
        }
      });
    }
  };

  e.prototype.renderProp = function () {
    for (var t = 0; t < this.prop.children.length; t++) {
      this.prop.children[t].active = t === this.count;
    }
  };

  __decorate([p(cc.Node)], e.prototype, "prop", void 0);

  __decorate([p(cc.Node)], e.prototype, "box", void 0);

  return __decorate([d], e);
}(cc.Component);

exports["default"] = f;

cc._RF.pop();