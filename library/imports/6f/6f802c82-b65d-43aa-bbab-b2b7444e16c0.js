"use strict";
cc._RF.push(module, '6f802yCtl1DqrursrdEThbA', 'Door');
// game_script/scripts/Door.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $componentProxy = require("./ComponentProxy");

var $gamePool = require("./GamePool");

var $localEventName = require("./LocalEventName");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameGemInfo = require("./GameGemInfo");

var g = cc._decorator;
var _ = g.ccclass;
var k = g.property;
var v = new cc.Vec3();

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.hpProBar = null;
    e.hpLabel = null;
    e.sendBulletLeftTime = 0;
    e.doorSkin = null;
    e.initHp = 3e3;
    e.defHp = 0;
    e.unitHp = 0;
    e.duration = 0.3;
    e._time = 0;
    e.atkCount = 0;
    e.leftWall1Hp = 0;
    e.leftWall2Hp = 0;
    e.isFristBlood = !1;
    e.invulnerabilityTime = -1;
    e.bloodLine = 0;
    e.addBloodLeftTime = 0;
    e.addBlood = 0;
    e.hurt = null;
    e.nextXs = [];
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {
    var t = this;
    this.hurt = $gamePool["default"].instance.get($gamePool.PoolKey.HURT);

    if (!this.hurt) {
      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Game, ["/prefabs/debuff/Hurt"], cc.Prefab, null, function (e, i) {
        var o = i[0];

        if (sp && cc.isValid(o)) {
          t.hurt = $resUtil.ResUtil.instantiate(o, t.node);
        }
      });
    }

    $eventManager["default"].on($localEventName["default"].ATK_DOOR, this.atkDoor, this);
    $eventManager["default"].on($localEventName["default"].ADD_HP_DOOR, this.addHp, this);
    this.initHp = $gameContext["default"].ins.doorInitHp;
    this.hpLabel.string = this.initHp.toString();

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallAdd)) {
      var e = $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallAdd);
      this.defHp += e[1];
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.SecWallBlood)) {
      this.addBlood = $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.SecWallBlood);
      this.addBloodLeftTime = 10;
    }

    this.unitHp = this.initHp / 4;
    this.doorSkin = this.node.getComponent(dragonBones.ArmatureDisplay);
    $componentProxy["default"].Ins.pushObj(this);
    this.refreshRenderGem();
  };

  e.prototype.onDestroy = function () {
    t.prototype.onDestroy.call(this);
    $eventManager["default"].off($localEventName["default"].ATK_DOOR, this.atkDoor, this);
    $eventManager["default"].off($localEventName["default"].ADD_HP_DOOR, this.addHp, this);
    $componentProxy["default"].Ins.removeObj(this);
  };

  e.prototype.addHp = function (t) {
    if (!($gameContext["default"].ins.doorLeftHp <= 0 || $gameContext["default"].ins.doorLeftHp >= this.initHp)) {
      $gameContext["default"].ins.doorLeftHp += t;

      if ($gameContext["default"].ins.doorLeftHp > this.initHp) {
        $gameContext["default"].ins.doorLeftHp = this.initHp;
      }

      var e = -this.hpProBar.totalLength / 2 + this.hpProBar.totalLength * this.hpProBar.progress;
      var i = cc.v3(e, -460);
      this.hpProBar.progress = $gameContext["default"].ins.doorLeftHp / this.initHp;
      this.atkAnim(i, "+" + t, 2, 1);
      this.hpLabel.string = $gameContext["default"].ins.doorLeftHp.toString();
    }
  };

  e.prototype.atkDoor = function (t) {
    this.atkCount++;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallDefAndEnemyAddHurt) && this.atkCount < $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallDefAndEnemyAddHurt)[0] || this.isFristBlood && this.invulnerabilityTime > 0) {
      var e = -this.hpProBar.totalLength / 2 + this.hpProBar.totalLength * this.hpProBar.progress;
      var i = cc.v3(e, -460);
      this.atkAnim(i, "免伤", 1, 1);
      return this.atkCount;
    }

    var o = -this.hpProBar.totalLength / 2 + this.hpProBar.totalLength * this.hpProBar.progress;
    var n = cc.v3(o, -460);

    if ((t -= this.defHp) <= 0) {
      this.atkAnim(n, "格挡", 1, 1);
      return this.atkCount;
    }

    if ($gameContext["default"].ins.doorLeftHp <= 0) {
      return 0;
    }

    $gameContext["default"].ins.doorLeftHp -= t;

    if ($gameContext["default"].ins.doorLeftHp < 0) {
      $gameContext["default"].ins.doorLeftHp = 0;
    }

    this.hpLabel.string = $gameContext["default"].ins.doorLeftHp.toString();
    this.hpProBar.progress = $gameContext["default"].ins.doorLeftHp / this.initHp;
    this.atkAnim(n, "-" + t, 1, 1);
    var s = Math.ceil($gameContext["default"].ins.doorLeftHp / this.unitHp);
    var r = "hp" + (5 - (s = 0 === s ? 1 : s));

    if (this.doorSkin.animationName !== r) {
      this.doorSkin.playAnimation(r, 0);
    }

    if (this._time <= 0) {
      this._time = 0.3;
    }

    if ($gameContext["default"].ins.doorLeftHp <= 0) {
      this._time = 0;
      this.doorSkin.node.opacity = 1;
      $eventManager["default"].send($localEventName["default"].GAME_FAIL);
    }

    if (this.bloodLine < $gameContext["default"].ins.doorLeftHp && !this.isFristBlood && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallBloodDef)) {
      this.isFristBlood = !0;
    }

    this.checkGem(t);
    return this.atkCount;
  };

  e.prototype.checkGem = function (t) {
    this.leftWall1Hp -= t;
    this.leftWall2Hp -= t;

    if (this.leftWall1Hp <= 0 && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallBloodAtk1)) {
      this.leftWall1Hp = this.initHp * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.WallBloodAtk1);
      this.startGun(1);
    }

    if (this.leftWall2Hp <= 0 && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallBloodAtk2)) {
      this.leftWall2Hp = this.initHp * $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallBloodAtk2)[0];
      this.startGun($gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallBloodAtk2)[1]);
    }
  };

  e.prototype.refreshRenderGem = function () {
    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallBloodAtk1)) {
      this.leftWall1Hp = this.initHp * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.WallBloodAtk1);
    }

    if (this.leftWall2Hp <= 0 && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallBloodAtk2)) {
      this.leftWall2Hp = this.initHp * $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallBloodAtk2)[0];
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallBloodDef)) {
      this.bloodLine = $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallBloodDef)[0] * this.initHp;
      this.invulnerabilityTime = $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallBloodDef)[1];
    }
  };

  e.prototype.updateFrame = function (t) {
    if (this._time > 0) {
      this._time -= t;

      if (this._time <= 0) {
        this._time = 0;
      }

      this._time = this._time < 0 ? 0 : this._time;
      var e = Math.ceil(255 * this._time / this.duration);

      if (e < 1) {
        e = 1;
      }

      this.doorSkin.node.opacity = e;
    }

    this.sendBulletLeftTime -= t;

    if (this.sendBulletLeftTime <= 0) {
      this.sendBulletLeftTime = 1;
      this.createButtle();
    }

    if (-1 !== this.invulnerabilityTime && this.isFristBlood) {
      this.invulnerabilityTime -= t;

      if (this.invulnerabilityTime < 0) {
        this.invulnerabilityTime = -1;
      }
    }

    if (this.addBlood > 0) {
      this.addBloodLeftTime -= t;

      if (this.addBloodLeftTime <= 0) {
        this.addBloodLeftTime = 10;
        this.addHp(this.addBlood);
      }
    }
  };

  e.prototype.startGun = function (t) {
    $gameContext["default"].ins.skillInfo.hideCreateSkill(81);
    var e = Math.min(t, $gameContext["default"].ins.enemyLayer.children.length);
    var i = !1;

    for (var o = 0; o < e; o++) {
      var n = $gameContext["default"].ins.enemyLayer.children[$gameContext["default"].ins.enemyLayer.children.length - o - 1];
      this.nextXs.push(n.position.x);
      i = !0;
    }

    return i;
  };

  e.prototype.createButtle = function () {
    if (!(this.nextXs.length <= 0)) {
      var t = this.nextXs.shift();
      var e = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.car);

      if (!e) {
        var i = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_13);
        (e = $resUtil.ResUtil.instantiate(i, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"])).skillSpecialitys = [];
      }

      e.isGem = !0;
      e.setPosition(cc.v3(t, -350));
      v.x = 0;
      v.y = 1;
      e.initButtle(v, 81);
      e.insert($gameContext["default"].ins.lowBulletLayer);
    }
  };

  e.prototype.atkAnim = function (t, e, i, o) {
    var n = this;

    if (void 0 === i) {
      i = 0;
    }

    if (void 0 === o) {
      o = 0;
    }

    var s = this.hurt.getComponent(cc.Label);
    s.fontSize = $gameContext["default"].ins.atkSize[o];
    s.string = e;
    this.hurt.color = $gameContext["default"].ins.atkColor[i];
    this.hurt.parent = $gameContext["default"].ins.atkLayer;
    this.hurt.position = t.clone();
    var r = t.add(cc.v3(0, 50));
    cc.Tween.stopAllByTarget(this.hurt);
    this.hurt.opacity = 255;
    cc.tween(this.hurt).to(0.5 / $gameContext["default"].ins.gameRatio, {
      position: r
    }).call(function () {
      n.hurt.opacity = 0;
    }).start();
  };

  __decorate([k(cc.ProgressBar)], e.prototype, "hpProBar", void 0);

  __decorate([k(cc.Label)], e.prototype, "hpLabel", void 0);

  return __decorate([_], e);
}($object.cObject);

exports["default"] = b;

cc._RF.pop();