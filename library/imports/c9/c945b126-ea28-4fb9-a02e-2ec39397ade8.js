"use strict";
cc._RF.push(module, 'c945bEm6ihPuaAuLsOTl63o', 'EggEnemy_1');
// game_script/scripts/EggEnemy_1.js

"use strict";

var o;

var $assetsMap = require("./AssetsMap");

var $popupManager = require("./PopupManager");

var $globalParam = require("./GlobalParam");

var $baseEnemy = require("./BaseEnemy");

var $healthBar = require("./HealthBar");

var d = cc._decorator;
var p = d.ccclass;
var f = d.property;

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.bar1 = null;
    e.bar2 = null;
    e.currType = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (e, i, o) {
    if (void 0 === o) {
      o = 0;
    }

    t.prototype.initEnemy.call(this, e, i, o);
    this.currType = 0;
    this.statusManager.hp = 5e3;
    this.statusManager.initHp = 5e3;
    this.bar1.init(5e3, 1);
    this.bar2.init(this.config.HP, e.hp_num);
    this.residueDis = Math.floor(this.node.y + 400);
    this.node.zIndex = 5e3 - Math.floor(this.residueDis);
  };

  e.prototype.sufferDebuff = function () {};

  e.prototype.sufferAttack = function (e, i) {
    if (1 === this.currType) {
      return !1;
    }

    var o = t.prototype.sufferAttack.call(this, e, i);
    0 === this.currType ? (this.bar1.render(this.statusManager.hp), this.bar1.node.opacity = 255, this.unschedule(this.hideBar1), this.scheduleOnce(this.hideBar1, 3)) : this.bar2.render(this.statusManager.hp);
    return o;
  };

  e.prototype.hideBar1 = function () {
    this.bar1.node.opacity = 0;
  };

  e.prototype.dieAnim = function () {
    var e = this;
    return 1 !== this.currType && (2 === this.currType ? (t.prototype.dieAnim.call(this), $globalParam["default"].isGamePuase = !0, $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.EggRewardView, null, {
      closeCallback: function closeCallback() {
        $globalParam["default"].isGamePuase = !1;
      }
    }), !0) : (this.unscheduleAllCallbacks(), this.currType = 1, this.bar1.node.active = !1, this.skin.playAnimation("bao", 1), this.skin.node.opacity = 1, this.skin.once(dragonBones.EventObject.COMPLETE, function () {
      e.skin.playAnimation("run", 0);
      e.bar2.node.active = !0;
      e.statusManager.hp = e.config.HP;
      e.statusManager.initHp = e.config.HP;
      e.currType = 2;
      e.statusManager.isDie = !1;
    }, this), !1));
  };

  e.prototype.move = function (e) {
    if (!(this.currType < 2)) {
      t.prototype.move.call(this, e);
    }
  };

  __decorate([f($healthBar["default"])], e.prototype, "bar1", void 0);

  __decorate([f($healthBar["default"])], e.prototype, "bar2", void 0);

  return __decorate([p], e);
}($baseEnemy["default"]);

exports["default"] = h;

cc._RF.pop();