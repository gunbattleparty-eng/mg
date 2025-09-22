
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/BaseEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f437i9VvxBUZbRki4npfcK', 'BaseEnemy');
// game_script/scripts/BaseEnemy.js

"use strict";

var o;

var $object = require("./Object");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resManager = require("./ResManager");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $componentProxy = require("./ComponentProxy");

var $popupManager = require("./PopupManager");

var $remoteAudio = require("./RemoteAudio");

var $gamePool = require("./GamePool");

var $seedUtil = require("./SeedUtil");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameGemInfo = require("./GameGemInfo");

var $enemyStatus = require("./EnemyStatus");

var A = cc._decorator;
var S = A.ccclass;
var C = (A.property, new cc.Vec3());
var I = new cc.Vec3();

var P = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.skin = null;
    e.debuffLayer = null;
    e.statusManager = null;
    e.currRatio = 1;
    e.isDoor = !1;
    e.residueDis = 0;
    e.config = null;
    e.leftCDTime = 0;
    e.sortTemp = 0;
    e.lastAtkTimes = [];
    e.burnAnim = null;
    e.freezeAnim = null;
    e.paralysisAnim = null;
    e.stunAnim = null;
    e.recoverAnim = null;
    e.isCanAtk = !1;
    e.isAttacking = !1;
    e.atkAddTemp = 0;
    e.Avoid_injury = 0;
    e.criticalHit = 5;
    e.atkRange = 0;
    e.duration = 0.3;
    e._time = 0;
    e.lot = 0;
    e.dieCallbacks = new Map();
    e.id = 0;
    e.isCriticalHit = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.initEnemy = function (t, e, i) {
    if (void 0 === i) {
      i = 0;
    }

    if (!this.skin) {
      this.skin = this.node.getChildByName("skin").getComponent(dragonBones.ArmatureDisplay);
    }

    this.id = ++$globalParam["default"].globID;
    this.debuffLayer = this.node.getChildByName("debuff");
    this.lot = i;
    this.Avoid_injury = e;
    this.config = t;
    $componentProxy["default"].Ins.pushObj(this);

    if (!this.statusManager) {
      this.statusManager = new $enemyStatus["default"]();
    }

    this.clearDebuffAnim();
    this.clearStatus(!1);
    this.statusManager.proxyEnemy = this;
    this.statusManager.initSpeed = this.config.speed;
    this.speed = this.config.speed;
    this.velocity.x = 0;
    this.velocity.y = -1;
    var o = $gameContext["default"].ins.getCurrEnemyAdd(this.config.id);
    this.statusManager.hp = Math.ceil(this.config.HP * (1 + o[0]));
    this.statusManager.initHp = this.statusManager.hp;
    this.statusManager.atk = Math.ceil(this.config.atk * (1 + o[1]));
    this.criticalHit = 0.05;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.CriticalHit)) {
      this.criticalHit = 0.05 + $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.CriticalHit);
    }
  };

  e.prototype.onDoor = function (t) {
    t && !this.isDoor ? (this.leftCDTime = this.config.atkspeed, this.isDoor = !0, this.residueDis = 0, this.skin.playAnimation("stand", 0), this.isCanAtk = !0) : !t && this.isDoor && (this.isDoor = !1, this.isCanAtk = !1);
  };

  e.prototype.isDie = function () {
    return this.statusManager.isDie;
  };

  e.prototype.hasDebuff = function (t) {
    return this.statusManager.debuffTypeMap.has(t);
  };

  e.prototype.getLastAtkTime = function (t) {
    return this.lastAtkTimes ? this.lastAtkTimes[t] : 0;
  };

  e.prototype.setLastAtkTime = function (t, e) {
    if (!this.lastAtkTimes) {
      this.lastAtkTimes = [];
    }

    this.lastAtkTimes[t] = e;
  };

  e.prototype.sufferAtk = function (t) {
    if (this.statusManager.isDie) {
      return !1;
    }

    this.isCriticalHit = !1;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.MaxBloodCritical) && this.statusManager.initHp === this.statusManager.hp || $seedUtil["default"].probability(1e3 * this.criticalHit, 1e3)) {
      this.isCriticalHit = !0;
      t.atk = Math.ceil(t.atk * (1.5 + $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.CriticalHurt)));
    }

    var e = this.atkCaculatePre(t);
    t.atk = Math.ceil(t.atk * (1 + e));
    this.atkCaculatePost(t);
    1 === t.id ? $remoteAudio["default"].instance.playEffectMusicRestrict("gunhit", 0.3) : 41 === t.id && $remoteAudio["default"].instance.playEffectMusicRestrict("icehit", 0.3);
    return !!this.sufferAttack(t.id, t.atk) && (t && t.bulletBuff === $baseBullet.BulletBuff.burn_boom && this.createBoom(), !0);
  };

  e.prototype.atkCaculateGem = function (t) {
    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.Enemy70Hurt) && this.statusManager.hp >= 0.7 * this.statusManager.initHp) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.Enemy70Hurt);
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.Befor5Hurt) && this.lot <= 5) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.Befor5Hurt);
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.DebuffEnemyHurt) && (this.statusManager.debuffTypeMap.has($enemyStatus.EnemyDebuffType.BURN) || this.statusManager.debuffTypeMap.has($enemyStatus.EnemyDebuffType.FREEZE) || this.statusManager.debuffTypeMap.has($enemyStatus.EnemyDebuffType.PARALYSIS) || this.statusManager.debuffTypeMap.has($enemyStatus.EnemyDebuffType.SLOW) || this.statusManager.debuffTypeMap.has($enemyStatus.EnemyDebuffType.STUN))) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.DebuffEnemyHurt);
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.BoomHurt) && t.skillSpecialitys.includes($baseBullet.BulletSpeciality.boom)) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.BoomHurt);
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallDefAndEnemyAddHurt)) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallDefAndEnemyAddHurt)[1];
    }

    if (1 === this.config.monster_type && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.KillEnemy) && $seedUtil["default"].probability(1e3 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.KillEnemy), 1e3)) {
      t.atk = this.statusManager.hp;
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.SkillAddHurt)) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.SkillAddHurt) * ($gameContext["default"].ins.skillInfo.skillCount > 4 ? 4 : $gameContext["default"].ins.skillInfo.skillCount);
    }

    if (this.residueDis <= 400 && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.DistanceHurtAdd)) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.DistanceHurtAdd);
    }

    if (1 === this.config.monster_type && this.node.position.y <= 650 && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.TransferCreatePoint) && $seedUtil["default"].probability(1e3 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.TransferCreatePoint), 1e3)) {
      var e = 720 - this.node.position.y;

      if (e > 0) {
        this.sufferDebuff({
          type: $enemyStatus.EnemyDebuffType.BACK,
          value: e,
          timeLeft: 1
        });
      }
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallAddAtk) && $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallAddAtk)[0] * $gameContext["default"].ins.doorInitHp > $gameContext["default"].ins.doorLeftHp) {
      this.atkAddTemp += $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallAddAtk)[1];
    }

    if (this.isCriticalHit && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.CriticalADDHurt)) {
      t.atk += Math.ceil(this.statusManager.initHp * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.CriticalADDHurt));
    }

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AtkFloat)) {
      var i = $seedUtil["default"].randomFloat(-0.3, $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AtkFloat));

      if (i < 0) {
        t.atk += Math.ceil(-i * t.atk);
      }

      this.atkAddTemp += i;
    }
  };

  e.prototype.atkCaculatePost = function (t) {
    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.AddMaxHurt)) {
      t.atk += Math.ceil(this.statusManager.initHp * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.AddMaxHurt));
    }

    if (t.bulletBuff && t.bulletBuff === $baseBullet.BulletBuff.atk_life) {
      t.atk += Math.ceil(this.statusManager.initHp * t.value);
    }
  };

  e.prototype.atkCaculatePre = function (t) {
    var e = !1;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.IgnoreRehurt) && $seedUtil["default"].probability(1e3 * $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.IgnoreRehurt), 1e3)) {
      e = !0;
    }

    this.atkAddTemp = 0;

    if (t.bulletBuff && (t.bulletBuff === $baseBullet.BulletBuff.freeze_damage && this.statusManager.debuffTypeMap.has($enemyStatus.EnemyDebuffType.FREEZE) || t.bulletBuff === $baseBullet.BulletBuff.paralysis_damage && this.statusManager.debuffTypeMap.has($enemyStatus.EnemyDebuffType.PARALYSIS))) {
      this.atkAddTemp += t.value;
    }

    for (var i = 0; i < t.skillSpecialitys.length; i++) {
      if (this.statusManager.specialityAtkAdd.has(t.skillSpecialitys[i])) {
        var o = this.statusManager.specialityAtkAdd.get(t.skillSpecialitys[i]);

        if (o < 0) {
          if (e) {
            continue;
          }

          t.atk = Math.ceil((1 + o) * t.atk);
        } else {
          this.atkAddTemp += o;
        }
      }
    }

    this.atkCaculateGem(t);

    if (this.statusManager.allDamage > 0) {
      this.atkAddTemp += this.statusManager.allDamage;
    }

    return this.atkAddTemp;
  };

  e.prototype.sufferAttack = function (t, e) {
    if (this.statusManager.isDie) {
      return !1;
    }

    if ((e = Math.floor(e * (1 - this.Avoid_injury))) > 0 && t > 0) {
      $gameContext["default"].ins.hurtStatistics(t, e);
    }

    var i = this.statusManager.hp;
    this.statusManager.hp -= e;

    if (-1 !== t) {
      if (this._time <= 0) {
        this._time = 0.3;
      }

      var o = this.getAnimPos();
      -1 !== t && this.isCriticalHit ? $eventManager["default"].send($localEventName["default"].HURT_ANIM, o, e, 1, 1) : $eventManager["default"].send($localEventName["default"].HURT_ANIM, o, e, 0);
    }

    if (this.statusManager.hp < 0) {
      this.statusManager.hp = 0;
    }

    return i > 0 && this.statusManager.hp <= 0;
  };

  e.prototype.getAnimPos = function () {
    var t = this.getPosition();
    I.x = t.x;
    2 === this.config.atktype ? I.y = t.y : I.y = t.y + this.skin.node.y + this.skin.node.height;
    return I;
  };

  e.prototype.createBoom = function () {
    var t = $gameContext["default"].ins.getButtlePool($baseBullet.BulletType.enemy_boom);

    if (!t) {
      var e = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Game, $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_16);
      t = $resUtil.ResUtil.instantiate(e, $gameContext["default"].ins.lowBulletLayer.parent).getComponent($baseBullet["default"]);
    }

    t.setPosition(this.getPosition().add(cc.v3(0, 30)));
    t.initButtle(null, 23);
    t.insert($gameContext["default"].ins.lowBulletLayer);
    t.setAnimation(null);
  };

  e.prototype.sufferDebuff = function (t) {
    if (!this.statusManager.isDie) {
      this.statusManager.addDebuff(t);
    }
  };

  e.prototype.removeDebuff = function (t, e) {
    this.statusManager.clearDebuff(t, e);
  };

  e.prototype.addAdsorb = function (t) {
    if (1 === this.statusManager.currAdsorbDir.push(t)) {
      this.sufferDebuff({
        type: $enemyStatus.EnemyDebuffType.ADSORB,
        timeLeft: -1,
        value: 0
      });
    }
  };

  e.prototype.removeAdsorb = function (t) {
    if (0 !== this.statusManager.currAdsorbDir.length) {
      var e = this.statusManager.currAdsorbDir.indexOf(t);

      if (-1 !== e) {
        this.statusManager.currAdsorbDir.splice(e, 1);
      }

      if (0 === this.statusManager.currAdsorbDir.length) {
        this.statusManager.clearDebuff($enemyStatus.EnemyDebuffType.ADSORB);
      }
    }
  };

  e.prototype.addDieCallback = function (t, e) {
    this.dieCallbacks.set(e, {
      callback: t,
      target: e
    });
  };

  e.prototype.removeDieCallback = function (t) {
    this.dieCallbacks["delete"](t);
  };

  e.prototype.updateFrame = function (t) {
    if (!this.statusManager.isDie) {
      1 === this.config.atktype ? this.onDoor(this.getPosition().y <= $globalParam["default"].doorY) : this.onDoor(this.residueDis <= this.atkRange);
      this.playSufferAtkAnim(t);
      this.statusManager.updateF(t);

      if (this.isCanAtk && !this.isAttacking) {
        this.leftCDTime -= t;

        if (this.leftCDTime <= 0) {
          this.leftCDTime = this.config.atkspeed;
          this.attack();
        }
      }

      if (this.statusManager.hp <= 0) {
        this.statusManager.isDie = !0;
        $eventManager["default"].send($localEventName["default"].ADD_EXP, this.config.EX);

        if (this.dieAnim()) {
          this.removeSelf();
        }
      }

      if (this.debuffLayer) {
        C.x = this.getPosition().x + this.debuffLayer.position.x;
        C.y = this.getPosition().y + this.debuffLayer.position.y;

        if (this.burnAnim) {
          this.burnAnim.setPosition(C);
        }

        if (this.recoverAnim) {
          this.recoverAnim.setPosition(C);
        }

        if (this.freezeAnim) {
          this.freezeAnim.setPosition(C);
        }

        if (this.paralysisAnim) {
          this.paralysisAnim.setPosition(C);
        }

        if (this.stunAnim) {
          this.stunAnim.setPosition(C);
        }
      }

      if (!this.isDoor) {
        this.move(t);
        this.speedRatioRight();
      }
    }
  };

  e.prototype.speedRatioRight = function () {
    if ($gameContext["default"].ins.gameRatio !== this.currRatio) {
      this.currRatio = $gameContext["default"].ins.gameRatio;
      var t = this.speed / this.statusManager.initSpeed * this.currRatio;

      if (this.velocity.y > 0) {
        t = 1;
      }

      if (0 !== this.skin.timeScale) {
        this.skin.timeScale = t;
      }
    }
  };

  e.prototype.playSufferAtkAnim = function (t) {
    if (cc.isValid(this.skin) && this._time > 0) {
      this._time -= t;

      if (this._time <= 0) {
        this._time = 0;
      }

      this._time = this._time < 0 ? 0 : this._time;
      var e = Math.ceil(255 * this._time / this.duration);

      if (e < 1) {
        e = 1;
      }

      this.skin.node.opacity = e;
    }
  };

  e.prototype.removeSelf = function () {
    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.KillEnemyAddWallBlood1)) {
      $eventManager["default"].send($localEventName["default"].ADD_HP_DOOR, $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.KillEnemyAddWallBlood1));
    }

    if (this.config.monster_type > 1 && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.KillEnemyAddWallBlood2)) {
      $eventManager["default"].send($localEventName["default"].ADD_HP_DOOR, $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.KillEnemyAddWallBlood2));
    }

    var t = this;
    this.dieCallbacks.forEach(function (e) {
      if (e && e.callback && e.target) {
        e.callback.apply(e.target, [t]);
      }
    });
    this.dieCallbacks.clear();
    this.clearStatus(!0);
    this.clearDebuffAnim();
    $componentProxy["default"].Ins.removeObj(this);
    $gameContext["default"].ins.putEnemyPool(this);
  };

  e.prototype.move = function (t) {
    this.residueDis = Math.floor(this.node.y + 400);
    this.node.zIndex = 5e3 - Math.floor(this.residueDis);
    var e = this.getPosition();
    var i = this.velocity;
    C.x = e.x + i.x * t;
    C.y = e.y + i.y * t;
    C.z = e.z + i.z * t;

    if (C.y >= 720 && this.velocity.y > 0) {
      this.statusManager.clearDebuff($enemyStatus.EnemyDebuffType.BACK);
      return void (this.velocity.y = -1);
    }

    if (C.y < $globalParam["default"].doorY && i.y < 0) {
      C.y = $globalParam["default"].doorY;
    }

    if (C.x < -360) {
      C.x = -360;
    }

    if (C.x > 360) {
      C.x = 360;
    }

    this.setPosition(C);
    this.caculateVelocity();
  };

  e.prototype.caculateVelocity = function () {
    if (this.statusManager.hasDebuff($enemyStatus.EnemyDebuffType.ADSORB)) {
      C.x = 0;
      C.y = 0;

      for (var t = 0; t < this.statusManager.currAdsorbDir.length; t++) {
        C.x += this.statusManager.currAdsorbDir[t].x;
        C.y += this.statusManager.currAdsorbDir[t].y;
      }

      C.x = cc.misc.clampf(C.x, -100, 100);
      C.y = cc.misc.clampf(C.y, -100, 100);
      this.velocity.x = C.x;
      this.velocity.y = C.y;
    } else {
      this.velocity.normalizeSelf().multiplyScalar(this.speed);
    }
  };

  e.prototype.attack = function () {
    var t = this;

    if (this.isCanAtk) {
      this.isAttacking = !0;
      this.skin.playAnimation("hit", 1);
      this.scheduleOnce(this.attackAnim, 0.066);
      this.skin.once(dragonBones.EventObject.COMPLETE, function () {
        t.isAttacking = !1;
        t.skin.playAnimation("stand", 0);
      }, this);
    }
  };

  e.prototype.attackAnim = function () {
    $eventManager["default"].send($localEventName["default"].ATK_DOOR, this.statusManager.atk);
  };

  e.prototype.clearDebuffAnim = function () {
    if (this.burnAnim) {
      this.endDebuffAnim($enemyStatus.EnemyDebuffType.BURN);
    }

    if (this.freezeAnim) {
      this.endDebuffAnim($enemyStatus.EnemyDebuffType.FREEZE);
    }

    if (this.paralysisAnim) {
      this.endDebuffAnim($enemyStatus.EnemyDebuffType.PARALYSIS);
    }

    if (this.stunAnim) {
      this.endDebuffAnim($enemyStatus.EnemyDebuffType.STUN);
    }

    if (this.recoverAnim) {
      this.endDebuffAnim($enemyStatus.EnemyDebuffType.RECOVER);
    }
  };

  e.prototype.dieAnim = function () {
    $gameContext["default"].ins.removeEnemy(this);
    C.x = 0;
    C.y = this.debuffLayer.y;
    $eventManager["default"].send($localEventName["default"].ENEMY_DIE, this.getPosition().add(C));
    this.unscheduleAllCallbacks();
    $remoteAudio["default"].instance.playEffectMusicRestrict("die", 0.3);

    if (!(2 !== this.config.monster_type && 3 !== this.config.monster_type)) {
      this.bossChooseSKill();
    }

    return !0;
  };

  e.prototype.bossChooseSKill = function () {
    if (1 === this.config.is_reward) {
      var t = $gameContext["default"].ins.killBossSkills();

      if (!(t.length <= 0)) {
        var e = $seedUtil["default"].randomFrom(this.config.reward_num[0], this.config.reward_num[1]);
        $globalParam["default"].isGamePuase = !0;
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.BossSkillView, {
          skillIds: t,
          randomCount: e
        }, {
          closeCallback: function closeCallback() {
            $globalParam["default"].isGamePuase = !1;
          }
        });
      }
    }
  };

  e.prototype.startDebuffAnim = function (t) {
    var e;

    if (!(this.statusManager.hp <= 0)) {
      if (t === $enemyStatus.EnemyDebuffType.BURN) {
        if (cc.isValid(this.burnAnim)) {
          return;
        }

        var i = $gamePool["default"].instance.get($gamePool.PoolKey.BURN);

        if (!i) {
          i = $resUtil.ResUtil.instantiate($resManager.ResManager.instance.get($assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Burn), $gameContext["default"].ins.enemyLayer.parent);
        }

        this.burnAnim = i;
        i.parent = $gameContext["default"].ins.debuffLayer;
        i.zIndex = this.node.zIndex;
        i.setPosition(this.getPosition().add(this.debuffLayer.position));
        i.scale = this.debuffLayer.scale;
      } else {
        if (t === $enemyStatus.EnemyDebuffType.STOP_ANIM) {
          if (0 !== (null === (e = this.skin) || void 0 === e ? void 0 : e.timeScale)) {
            this.playLoop(null, 0);
          }
        } else {
          if (t === $enemyStatus.EnemyDebuffType.FREEZE) {
            if (cc.isValid(this.freezeAnim)) {
              return;
            }

            var o = $gamePool["default"].instance.get($gamePool.PoolKey.FREEZE);

            if (!o) {
              o = $resUtil.ResUtil.instantiate($resManager.ResManager.instance.get($assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Freeze), $gameContext["default"].ins.enemyLayer.parent);
            }

            this.freezeAnim = o;
            o.parent = $gameContext["default"].ins.debuffLayer;
            o.zIndex = this.node.zIndex;
            o.setPosition(this.getPosition().add(this.debuffLayer.position));
            o.scale = this.debuffLayer.scale;
          } else {
            if (t === $enemyStatus.EnemyDebuffType.PARALYSIS) {
              var n = $gamePool["default"].instance.get($gamePool.PoolKey.PARALYSIS);

              if (!n) {
                n = $resUtil.ResUtil.instantiate($resManager.ResManager.instance.get($assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Paralysis), $gameContext["default"].ins.enemyLayer.parent);
              }

              this.paralysisAnim = n;
              n.parent = $gameContext["default"].ins.debuffLayer;
              n.zIndex = this.node.zIndex;
              n.setPosition(this.getPosition().add(this.debuffLayer.position));
              n.scale = this.debuffLayer.scale;
            } else {
              if (t === $enemyStatus.EnemyDebuffType.STUN) {
                if (cc.isValid(this.stunAnim)) {
                  return;
                }

                var s = $gamePool["default"].instance.get($gamePool.PoolKey.STUN);

                if (!s) {
                  s = $resUtil.ResUtil.instantiate($resManager.ResManager.instance.get($assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Stun), $gameContext["default"].ins.enemyLayer.parent);
                }

                this.stunAnim = s;
                s.parent = $gameContext["default"].ins.debuffLayer;
                s.zIndex = this.node.zIndex;
                s.setPosition(this.getPosition().add(this.debuffLayer.position));
                s.scale = this.debuffLayer.scale;
              } else {
                if (t === $enemyStatus.EnemyDebuffType.RECOVER) {
                  if (cc.isValid(this.recoverAnim)) {
                    return;
                  }

                  var r = $gamePool["default"].instance.get($gamePool.PoolKey.RECOVER);

                  if (!r) {
                    r = $resUtil.ResUtil.instantiate($resManager.ResManager.instance.get($assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Heal), $gameContext["default"].ins.enemyLayer.parent);
                  }

                  this.recoverAnim = r;
                  r.parent = $gameContext["default"].ins.debuffLayer;
                  r.zIndex = this.node.zIndex;
                  r.setPosition(this.getPosition().add(this.debuffLayer.position));
                  r.scale = this.debuffLayer.scale;
                }
              }
            }
          }
        }
      }
    }
  };

  e.prototype.endDebuffAnim = function (t) {
    var e;

    if (t === $enemyStatus.EnemyDebuffType.BURN && this.burnAnim) {
      $gamePool["default"].instance.put($gamePool.PoolKey.BURN, this.burnAnim);
      this.burnAnim = null;
    } else {
      if (t === $enemyStatus.EnemyDebuffType.STOP_ANIM) {
        var i = this.speed / this.statusManager.initSpeed * this.currRatio;

        if ((null === (e = this.skin) || void 0 === e ? void 0 : e.timeScale) <= 0) {
          this.playLoop(null, i);
        }
      } else {
        t === $enemyStatus.EnemyDebuffType.FREEZE && this.freezeAnim ? ($gamePool["default"].instance.put($gamePool.PoolKey.FREEZE, this.freezeAnim), this.freezeAnim = null) : t === $enemyStatus.EnemyDebuffType.PARALYSIS && this.paralysisAnim ? ($gamePool["default"].instance.put($gamePool.PoolKey.PARALYSIS, this.paralysisAnim), this.paralysisAnim = null) : t === $enemyStatus.EnemyDebuffType.STUN && this.stunAnim ? ($gamePool["default"].instance.put($gamePool.PoolKey.STUN, this.stunAnim), this.stunAnim = null) : t === $enemyStatus.EnemyDebuffType.RECOVER && this.recoverAnim && ($gamePool["default"].instance.put($gamePool.PoolKey.RECOVER, this.recoverAnim), this.recoverAnim = null);
      }
    }
  };

  e.prototype.clearStatus = function (t) {
    this.isDoor = !1;
    this.lastAtkTimes.length = 0;
    this.statusManager.clear();
    this.dieCallbacks.clear();

    if (t) {
      this.skin.timeScale = this.currRatio;
      this.skin.playAnimation("run", 0);
    }

    this.residueDis = 5e3;
    this.isCanAtk = !1;
    this.isAttacking = !1;

    if (this.skin) {
      this._time = 0;
      this.skin.node.opacity = 1;
    }
  };

  e.prototype.playLoop = function (t, e) {
    if (!this.statusManager.isDie) {
      this.isAttacking = !1;
      this.unschedule(this.attackAnim);

      if (this.skin) {
        this.skin.off(dragonBones.EventObject.COMPLETE);
        this.skin.timeScale = e;

        if (t) {
          this.skin.playAnimation(t, 0);
        }
      }
    }
  };

  return __decorate([S], e);
}($object.cObject);

exports["default"] = P;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEJhc2VFbmVteS5qcyJdLCJuYW1lcyI6WyJvIiwiJG9iamVjdCIsInJlcXVpcmUiLCIkYXNzZXRzTG9hZGVyIiwiJGFzc2V0c01hcCIsIiRyZXNNYW5hZ2VyIiwiJHJlc1V0aWwiLCIkZXZlbnRNYW5hZ2VyIiwiJGNvbXBvbmVudFByb3h5IiwiJHBvcHVwTWFuYWdlciIsIiRyZW1vdGVBdWRpbyIsIiRnYW1lUG9vbCIsIiRzZWVkVXRpbCIsIiRnbG9iYWxQYXJhbSIsIiRsb2NhbEV2ZW50TmFtZSIsIiRiYXNlQnVsbGV0IiwiJGdhbWVDb250ZXh0IiwiJGdhbWVHZW1JbmZvIiwiJGVuZW15U3RhdHVzIiwiQSIsImNjIiwiX2RlY29yYXRvciIsIlMiLCJjY2NsYXNzIiwiQyIsInByb3BlcnR5IiwiVmVjMyIsIkkiLCJQIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNraW4iLCJkZWJ1ZmZMYXllciIsInN0YXR1c01hbmFnZXIiLCJjdXJyUmF0aW8iLCJpc0Rvb3IiLCJyZXNpZHVlRGlzIiwiY29uZmlnIiwibGVmdENEVGltZSIsInNvcnRUZW1wIiwibGFzdEF0a1RpbWVzIiwiYnVybkFuaW0iLCJmcmVlemVBbmltIiwicGFyYWx5c2lzQW5pbSIsInN0dW5BbmltIiwicmVjb3ZlckFuaW0iLCJpc0NhbkF0ayIsImlzQXR0YWNraW5nIiwiYXRrQWRkVGVtcCIsIkF2b2lkX2luanVyeSIsImNyaXRpY2FsSGl0IiwiYXRrUmFuZ2UiLCJkdXJhdGlvbiIsIl90aW1lIiwibG90IiwiZGllQ2FsbGJhY2tzIiwiTWFwIiwiaWQiLCJpc0NyaXRpY2FsSGl0IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdEVuZW15IiwiaSIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsImRyYWdvbkJvbmVzIiwiQXJtYXR1cmVEaXNwbGF5IiwiZ2xvYklEIiwiSW5zIiwicHVzaE9iaiIsImNsZWFyRGVidWZmQW5pbSIsImNsZWFyU3RhdHVzIiwicHJveHlFbmVteSIsImluaXRTcGVlZCIsInNwZWVkIiwidmVsb2NpdHkiLCJ4IiwieSIsImlucyIsImdldEN1cnJFbmVteUFkZCIsImhwIiwiTWF0aCIsImNlaWwiLCJIUCIsImluaXRIcCIsImF0ayIsIkdhbWVHZW1JbmZvIiwiaGFzR2VtIiwiR2VtVHlwZSIsIkNyaXRpY2FsSGl0IiwiZ2V0MSIsIm9uRG9vciIsImF0a3NwZWVkIiwicGxheUFuaW1hdGlvbiIsImlzRGllIiwiaGFzRGVidWZmIiwiZGVidWZmVHlwZU1hcCIsImhhcyIsImdldExhc3RBdGtUaW1lIiwic2V0TGFzdEF0a1RpbWUiLCJzdWZmZXJBdGsiLCJNYXhCbG9vZENyaXRpY2FsIiwicHJvYmFiaWxpdHkiLCJDcml0aWNhbEh1cnQiLCJhdGtDYWN1bGF0ZVByZSIsImF0a0NhY3VsYXRlUG9zdCIsImluc3RhbmNlIiwicGxheUVmZmVjdE11c2ljUmVzdHJpY3QiLCJzdWZmZXJBdHRhY2siLCJidWxsZXRCdWZmIiwiQnVsbGV0QnVmZiIsImJ1cm5fYm9vbSIsImNyZWF0ZUJvb20iLCJhdGtDYWN1bGF0ZUdlbSIsIkVuZW15NzBIdXJ0IiwiQmVmb3I1SHVydCIsIkRlYnVmZkVuZW15SHVydCIsIkVuZW15RGVidWZmVHlwZSIsIkJVUk4iLCJGUkVFWkUiLCJQQVJBTFlTSVMiLCJTTE9XIiwiU1RVTiIsIkJvb21IdXJ0Iiwic2tpbGxTcGVjaWFsaXR5cyIsImluY2x1ZGVzIiwiQnVsbGV0U3BlY2lhbGl0eSIsImJvb20iLCJXYWxsRGVmQW5kRW5lbXlBZGRIdXJ0IiwiZ2V0MiIsIm1vbnN0ZXJfdHlwZSIsIktpbGxFbmVteSIsIlNraWxsQWRkSHVydCIsInNraWxsSW5mbyIsInNraWxsQ291bnQiLCJEaXN0YW5jZUh1cnRBZGQiLCJwb3NpdGlvbiIsIlRyYW5zZmVyQ3JlYXRlUG9pbnQiLCJzdWZmZXJEZWJ1ZmYiLCJ0eXBlIiwiQkFDSyIsInZhbHVlIiwidGltZUxlZnQiLCJXYWxsQWRkQXRrIiwiZG9vckluaXRIcCIsImRvb3JMZWZ0SHAiLCJDcml0aWNhbEFEREh1cnQiLCJBdGtGbG9hdCIsInJhbmRvbUZsb2F0IiwiQWRkTWF4SHVydCIsImF0a19saWZlIiwiSWdub3JlUmVodXJ0IiwiZnJlZXplX2RhbWFnZSIsInBhcmFseXNpc19kYW1hZ2UiLCJsZW5ndGgiLCJzcGVjaWFsaXR5QXRrQWRkIiwiZ2V0IiwiYWxsRGFtYWdlIiwiZmxvb3IiLCJodXJ0U3RhdGlzdGljcyIsImdldEFuaW1Qb3MiLCJzZW5kIiwiSFVSVF9BTklNIiwiZ2V0UG9zaXRpb24iLCJhdGt0eXBlIiwiaGVpZ2h0IiwiZ2V0QnV0dGxlUG9vbCIsIkJ1bGxldFR5cGUiLCJlbmVteV9ib29tIiwiZ2V0UmVzIiwiQnVuZGxlTmFtZXMiLCJHYW1lIiwiQXNzZXRzTWFwIiwiR2FtZUJ1bmRsZXMiLCJwcmVmYWJzIiwiYXNzZXRzTGlzdCIsIkJ1bGxldF8xNiIsIlJlc1V0aWwiLCJpbnN0YW50aWF0ZSIsImxvd0J1bGxldExheWVyIiwicGFyZW50Iiwic2V0UG9zaXRpb24iLCJhZGQiLCJ2MyIsImluaXRCdXR0bGUiLCJpbnNlcnQiLCJzZXRBbmltYXRpb24iLCJhZGREZWJ1ZmYiLCJyZW1vdmVEZWJ1ZmYiLCJjbGVhckRlYnVmZiIsImFkZEFkc29yYiIsImN1cnJBZHNvcmJEaXIiLCJwdXNoIiwiQURTT1JCIiwicmVtb3ZlQWRzb3JiIiwiaW5kZXhPZiIsInNwbGljZSIsImFkZERpZUNhbGxiYWNrIiwic2V0IiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJyZW1vdmVEaWVDYWxsYmFjayIsInVwZGF0ZUZyYW1lIiwiZG9vclkiLCJwbGF5U3VmZmVyQXRrQW5pbSIsInVwZGF0ZUYiLCJhdHRhY2siLCJBRERfRVhQIiwiRVgiLCJkaWVBbmltIiwicmVtb3ZlU2VsZiIsIm1vdmUiLCJzcGVlZFJhdGlvUmlnaHQiLCJnYW1lUmF0aW8iLCJ0aW1lU2NhbGUiLCJpc1ZhbGlkIiwib3BhY2l0eSIsIktpbGxFbmVteUFkZFdhbGxCbG9vZDEiLCJBRERfSFBfRE9PUiIsIktpbGxFbmVteUFkZFdhbGxCbG9vZDIiLCJmb3JFYWNoIiwiY2xlYXIiLCJyZW1vdmVPYmoiLCJwdXRFbmVteVBvb2wiLCJ6SW5kZXgiLCJ6IiwiY2FjdWxhdGVWZWxvY2l0eSIsIm1pc2MiLCJjbGFtcGYiLCJub3JtYWxpemVTZWxmIiwibXVsdGlwbHlTY2FsYXIiLCJzY2hlZHVsZU9uY2UiLCJhdHRhY2tBbmltIiwib25jZSIsIkV2ZW50T2JqZWN0IiwiQ09NUExFVEUiLCJBVEtfRE9PUiIsImVuZERlYnVmZkFuaW0iLCJSRUNPVkVSIiwicmVtb3ZlRW5lbXkiLCJFTkVNWV9ESUUiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIiwiYm9zc0Nob29zZVNLaWxsIiwiaXNfcmV3YXJkIiwia2lsbEJvc3NTa2lsbHMiLCJyYW5kb21Gcm9tIiwicmV3YXJkX251bSIsImlzR2FtZVB1YXNlIiwiUG9wdXBNYW5hZ2VyIiwib3BlbiIsIlBvcFVwQnVuZGxlcyIsIkJvc3NTa2lsbFZpZXciLCJza2lsbElkcyIsInJhbmRvbUNvdW50IiwiY2xvc2VDYWxsYmFjayIsInN0YXJ0RGVidWZmQW5pbSIsIlBvb2xLZXkiLCJSZXNNYW5hZ2VyIiwiQnVybiIsImVuZW15TGF5ZXIiLCJzY2FsZSIsIlNUT1BfQU5JTSIsInBsYXlMb29wIiwiRnJlZXplIiwibiIsIlBhcmFseXNpcyIsInMiLCJTdHVuIiwiciIsIkhlYWwiLCJwdXQiLCJ1bnNjaGVkdWxlIiwib2ZmIiwiX19kZWNvcmF0ZSIsImNPYmplY3QiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUksUUFBUSxHQUFHSixPQUFPLENBQUMsV0FBRCxDQUF0Qjs7QUFDQSxJQUFJSyxhQUFhLEdBQUdMLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJTSxlQUFlLEdBQUdOLE9BQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxJQUFJTyxhQUFhLEdBQUdQLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJUSxZQUFZLEdBQUdSLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlTLFNBQVMsR0FBR1QsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSVUsU0FBUyxHQUFHVixPQUFPLENBQUMsWUFBRCxDQUF2Qjs7QUFDQSxJQUFJVyxZQUFZLEdBQUdYLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlZLGVBQWUsR0FBR1osT0FBTyxDQUFDLGtCQUFELENBQTdCOztBQUNBLElBQUlhLFdBQVcsR0FBR2IsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSWMsWUFBWSxHQUFHZCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJZSxZQUFZLEdBQUdmLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlnQixZQUFZLEdBQUdoQixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJaUIsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFBSUwsQ0FBQyxDQUFDTSxRQUFGLEVBQVksSUFBSUwsRUFBRSxDQUFDTSxJQUFQLEVBQWhCLENBQUw7QUFDQSxJQUFJQyxDQUFDLEdBQUcsSUFBSVAsRUFBRSxDQUFDTSxJQUFQLEVBQVI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFJLFVBQVVDLENBQVYsRUFBYTtFQUNsQixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLElBQUYsR0FBUyxJQUFUO0lBQ0FILENBQUMsQ0FBQ0ksV0FBRixHQUFnQixJQUFoQjtJQUNBSixDQUFDLENBQUNLLGFBQUYsR0FBa0IsSUFBbEI7SUFDQUwsQ0FBQyxDQUFDTSxTQUFGLEdBQWMsQ0FBZDtJQUNBTixDQUFDLENBQUNPLE1BQUYsR0FBVyxDQUFDLENBQVo7SUFDQVAsQ0FBQyxDQUFDUSxVQUFGLEdBQWUsQ0FBZjtJQUNBUixDQUFDLENBQUNTLE1BQUYsR0FBVyxJQUFYO0lBQ0FULENBQUMsQ0FBQ1UsVUFBRixHQUFlLENBQWY7SUFDQVYsQ0FBQyxDQUFDVyxRQUFGLEdBQWEsQ0FBYjtJQUNBWCxDQUFDLENBQUNZLFlBQUYsR0FBaUIsRUFBakI7SUFDQVosQ0FBQyxDQUFDYSxRQUFGLEdBQWEsSUFBYjtJQUNBYixDQUFDLENBQUNjLFVBQUYsR0FBZSxJQUFmO0lBQ0FkLENBQUMsQ0FBQ2UsYUFBRixHQUFrQixJQUFsQjtJQUNBZixDQUFDLENBQUNnQixRQUFGLEdBQWEsSUFBYjtJQUNBaEIsQ0FBQyxDQUFDaUIsV0FBRixHQUFnQixJQUFoQjtJQUNBakIsQ0FBQyxDQUFDa0IsUUFBRixHQUFhLENBQUMsQ0FBZDtJQUNBbEIsQ0FBQyxDQUFDbUIsV0FBRixHQUFnQixDQUFDLENBQWpCO0lBQ0FuQixDQUFDLENBQUNvQixVQUFGLEdBQWUsQ0FBZjtJQUNBcEIsQ0FBQyxDQUFDcUIsWUFBRixHQUFpQixDQUFqQjtJQUNBckIsQ0FBQyxDQUFDc0IsV0FBRixHQUFnQixDQUFoQjtJQUNBdEIsQ0FBQyxDQUFDdUIsUUFBRixHQUFhLENBQWI7SUFDQXZCLENBQUMsQ0FBQ3dCLFFBQUYsR0FBYSxHQUFiO0lBQ0F4QixDQUFDLENBQUN5QixLQUFGLEdBQVUsQ0FBVjtJQUNBekIsQ0FBQyxDQUFDMEIsR0FBRixHQUFRLENBQVI7SUFDQTFCLENBQUMsQ0FBQzJCLFlBQUYsR0FBaUIsSUFBSUMsR0FBSixFQUFqQjtJQUNBNUIsQ0FBQyxDQUFDNkIsRUFBRixHQUFPLENBQVA7SUFDQTdCLENBQUMsQ0FBQzhCLGFBQUYsR0FBa0IsQ0FBQyxDQUFuQjtJQUNBLE9BQU85QixDQUFQO0VBQ0g7O0VBQ0QrQixTQUFTLENBQUMvQixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDZ0MsU0FBRixDQUFZQyxTQUFaLEdBQXdCLFVBQVVsQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JrQyxDQUFoQixFQUFtQjtJQUN2QyxJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFKO0lBQ0g7O0lBQ0QsSUFBSSxDQUFDLEtBQUsvQixJQUFWLEVBQWdCO01BQ1osS0FBS0EsSUFBTCxHQUFZLEtBQUtnQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsTUFBekIsRUFBaUNDLFlBQWpDLENBQThDQyxXQUFXLENBQUNDLGVBQTFELENBQVo7SUFDSDs7SUFDRCxLQUFLVixFQUFMLEdBQVUsRUFBRTlDLFlBQVksV0FBWixDQUFxQnlELE1BQWpDO0lBQ0EsS0FBS3BDLFdBQUwsR0FBbUIsS0FBSytCLElBQUwsQ0FBVUMsY0FBVixDQUF5QixRQUF6QixDQUFuQjtJQUNBLEtBQUtWLEdBQUwsR0FBV1EsQ0FBWDtJQUNBLEtBQUtiLFlBQUwsR0FBb0JyQixDQUFwQjtJQUNBLEtBQUtTLE1BQUwsR0FBY1YsQ0FBZDtJQUNBckIsZUFBZSxXQUFmLENBQXdCK0QsR0FBeEIsQ0FBNEJDLE9BQTVCLENBQW9DLElBQXBDOztJQUNBLElBQUksQ0FBQyxLQUFLckMsYUFBVixFQUF5QjtNQUNyQixLQUFLQSxhQUFMLEdBQXFCLElBQUlqQixZQUFZLFdBQWhCLEVBQXJCO0lBQ0g7O0lBQ0QsS0FBS3VELGVBQUw7SUFDQSxLQUFLQyxXQUFMLENBQWlCLENBQUMsQ0FBbEI7SUFDQSxLQUFLdkMsYUFBTCxDQUFtQndDLFVBQW5CLEdBQWdDLElBQWhDO0lBQ0EsS0FBS3hDLGFBQUwsQ0FBbUJ5QyxTQUFuQixHQUErQixLQUFLckMsTUFBTCxDQUFZc0MsS0FBM0M7SUFDQSxLQUFLQSxLQUFMLEdBQWEsS0FBS3RDLE1BQUwsQ0FBWXNDLEtBQXpCO0lBQ0EsS0FBS0MsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQWxCO0lBQ0EsS0FBS0QsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLENBQUMsQ0FBbkI7SUFDQSxJQUFJaEYsQ0FBQyxHQUFHZ0IsWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJDLGVBQXpCLENBQXlDLEtBQUszQyxNQUFMLENBQVlvQixFQUFyRCxDQUFSO0lBQ0EsS0FBS3hCLGFBQUwsQ0FBbUJnRCxFQUFuQixHQUF3QkMsSUFBSSxDQUFDQyxJQUFMLENBQVUsS0FBSzlDLE1BQUwsQ0FBWStDLEVBQVosSUFBa0IsSUFBSXRGLENBQUMsQ0FBQyxDQUFELENBQXZCLENBQVYsQ0FBeEI7SUFDQSxLQUFLbUMsYUFBTCxDQUFtQm9ELE1BQW5CLEdBQTRCLEtBQUtwRCxhQUFMLENBQW1CZ0QsRUFBL0M7SUFDQSxLQUFLaEQsYUFBTCxDQUFtQnFELEdBQW5CLEdBQXlCSixJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLOUMsTUFBTCxDQUFZaUQsR0FBWixJQUFtQixJQUFJeEYsQ0FBQyxDQUFDLENBQUQsQ0FBeEIsQ0FBVixDQUF6QjtJQUNBLEtBQUtvRCxXQUFMLEdBQW1CLElBQW5COztJQUNBLElBQUluQyxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCQyxXQUF6RCxDQUFKLEVBQTJFO01BQ3ZFLEtBQUt4QyxXQUFMLEdBQW1CLE9BQU9uQyxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlksSUFBN0IsQ0FBa0M1RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCQyxXQUF2RCxDQUExQjtJQUNIO0VBQ0osQ0EvQkQ7O0VBZ0NBOUQsQ0FBQyxDQUFDZ0MsU0FBRixDQUFZZ0MsTUFBWixHQUFxQixVQUFVakUsQ0FBVixFQUFhO0lBQzlCQSxDQUFDLElBQUksQ0FBQyxLQUFLUSxNQUFYLElBQ1EsS0FBS0csVUFBTCxHQUFrQixLQUFLRCxNQUFMLENBQVl3RCxRQUEvQixFQUNBLEtBQUsxRCxNQUFMLEdBQWMsQ0FBQyxDQURmLEVBRUEsS0FBS0MsVUFBTCxHQUFrQixDQUZsQixFQUdELEtBQUtMLElBQUwsQ0FBVStELGFBQVYsQ0FBd0IsT0FBeEIsRUFBaUMsQ0FBakMsQ0FIQyxFQUlBLEtBQUtoRCxRQUFMLEdBQWdCLENBQUMsQ0FMeEIsSUFNTSxDQUFDbkIsQ0FBRCxJQUFNLEtBQUtRLE1BQVgsS0FBdUIsS0FBS0EsTUFBTCxHQUFjLENBQUMsQ0FBaEIsRUFBcUIsS0FBS1csUUFBTCxHQUFnQixDQUFDLENBQTVELENBTk47RUFPSCxDQVJEOztFQVNBbEIsQ0FBQyxDQUFDZ0MsU0FBRixDQUFZbUMsS0FBWixHQUFvQixZQUFZO0lBQzVCLE9BQU8sS0FBSzlELGFBQUwsQ0FBbUI4RCxLQUExQjtFQUNILENBRkQ7O0VBR0FuRSxDQUFDLENBQUNnQyxTQUFGLENBQVlvQyxTQUFaLEdBQXdCLFVBQVVyRSxDQUFWLEVBQWE7SUFDakMsT0FBTyxLQUFLTSxhQUFMLENBQW1CZ0UsYUFBbkIsQ0FBaUNDLEdBQWpDLENBQXFDdkUsQ0FBckMsQ0FBUDtFQUNILENBRkQ7O0VBR0FDLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXVDLGNBQVosR0FBNkIsVUFBVXhFLENBQVYsRUFBYTtJQUN0QyxPQUFPLEtBQUthLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQmIsQ0FBbEIsQ0FBcEIsR0FBMkMsQ0FBbEQ7RUFDSCxDQUZEOztFQUdBQyxDQUFDLENBQUNnQyxTQUFGLENBQVl3QyxjQUFaLEdBQTZCLFVBQVV6RSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDekMsSUFBSSxDQUFDLEtBQUtZLFlBQVYsRUFBd0I7TUFDcEIsS0FBS0EsWUFBTCxHQUFvQixFQUFwQjtJQUNIOztJQUNELEtBQUtBLFlBQUwsQ0FBa0JiLENBQWxCLElBQXVCQyxDQUF2QjtFQUNILENBTEQ7O0VBTUFBLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXlDLFNBQVosR0FBd0IsVUFBVTFFLENBQVYsRUFBYTtJQUNqQyxJQUFJLEtBQUtNLGFBQUwsQ0FBbUI4RCxLQUF2QixFQUE4QjtNQUMxQixPQUFPLENBQUMsQ0FBUjtJQUNIOztJQUNELEtBQUtyQyxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7O0lBQ0EsSUFDSzNDLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCUyxNQUE3QixDQUFvQ3pFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUJhLGdCQUF6RCxLQUNHLEtBQUtyRSxhQUFMLENBQW1Cb0QsTUFBbkIsS0FBOEIsS0FBS3BELGFBQUwsQ0FBbUJnRCxFQURyRCxJQUVBdkUsU0FBUyxXQUFULENBQWtCNkYsV0FBbEIsQ0FBOEIsTUFBTSxLQUFLckQsV0FBekMsRUFBc0QsR0FBdEQsQ0FISixFQUlFO01BQ0UsS0FBS1EsYUFBTCxHQUFxQixDQUFDLENBQXRCO01BQ0EvQixDQUFDLENBQUMyRCxHQUFGLEdBQVFKLElBQUksQ0FBQ0MsSUFBTCxDQUFVeEQsQ0FBQyxDQUFDMkQsR0FBRixJQUFTLE1BQU12RSxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlksSUFBN0IsQ0FBa0M1RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCZSxZQUF2RCxDQUFmLENBQVYsQ0FBUjtJQUNIOztJQUNELElBQUk1RSxDQUFDLEdBQUcsS0FBSzZFLGNBQUwsQ0FBb0I5RSxDQUFwQixDQUFSO0lBQ0FBLENBQUMsQ0FBQzJELEdBQUYsR0FBUUosSUFBSSxDQUFDQyxJQUFMLENBQVV4RCxDQUFDLENBQUMyRCxHQUFGLElBQVMsSUFBSTFELENBQWIsQ0FBVixDQUFSO0lBQ0EsS0FBSzhFLGVBQUwsQ0FBcUIvRSxDQUFyQjtJQUNBLE1BQU1BLENBQUMsQ0FBQzhCLEVBQVIsR0FDTWpELFlBQVksV0FBWixDQUFxQm1HLFFBQXJCLENBQThCQyx1QkFBOUIsQ0FBc0QsUUFBdEQsRUFBZ0UsR0FBaEUsQ0FETixHQUVNLE9BQU9qRixDQUFDLENBQUM4QixFQUFULElBQWVqRCxZQUFZLFdBQVosQ0FBcUJtRyxRQUFyQixDQUE4QkMsdUJBQTlCLENBQXNELFFBQXRELEVBQWdFLEdBQWhFLENBRnJCO0lBR0EsT0FDSSxDQUFDLENBQUMsS0FBS0MsWUFBTCxDQUFrQmxGLENBQUMsQ0FBQzhCLEVBQXBCLEVBQXdCOUIsQ0FBQyxDQUFDMkQsR0FBMUIsQ0FBRixLQUNDM0QsQ0FBQyxJQUFJQSxDQUFDLENBQUNtRixVQUFGLEtBQWlCakcsV0FBVyxDQUFDa0csVUFBWixDQUF1QkMsU0FBN0MsSUFBMEQsS0FBS0MsVUFBTCxFQUExRCxFQUE2RSxDQUFDLENBRC9FLENBREo7RUFJSCxDQXZCRDs7RUF3QkFyRixDQUFDLENBQUNnQyxTQUFGLENBQVlzRCxjQUFaLEdBQTZCLFVBQVV2RixDQUFWLEVBQWE7SUFDdEMsSUFDSVosWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJTLE1BQTdCLENBQW9DekUsWUFBWSxDQUFDMEUsT0FBYixDQUFxQjBCLFdBQXpELEtBQ0EsS0FBS2xGLGFBQUwsQ0FBbUJnRCxFQUFuQixJQUF5QixNQUFNLEtBQUtoRCxhQUFMLENBQW1Cb0QsTUFGdEQsRUFHRTtNQUNFLEtBQUtyQyxVQUFMLElBQW1CakMsWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJZLElBQTdCLENBQWtDNUUsWUFBWSxDQUFDMEUsT0FBYixDQUFxQjBCLFdBQXZELENBQW5CO0lBQ0g7O0lBQ0QsSUFBSXBHLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCUyxNQUE3QixDQUFvQ3pFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUIyQixVQUF6RCxLQUF3RSxLQUFLOUQsR0FBTCxJQUFZLENBQXhGLEVBQTJGO01BQ3ZGLEtBQUtOLFVBQUwsSUFBbUJqQyxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlksSUFBN0IsQ0FBa0M1RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCMkIsVUFBdkQsQ0FBbkI7SUFDSDs7SUFDRCxJQUNJckcsWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJTLE1BQTdCLENBQW9DekUsWUFBWSxDQUFDMEUsT0FBYixDQUFxQjRCLGVBQXpELE1BQ0MsS0FBS3BGLGFBQUwsQ0FBbUJnRSxhQUFuQixDQUFpQ0MsR0FBakMsQ0FBcUNsRixZQUFZLENBQUNzRyxlQUFiLENBQTZCQyxJQUFsRSxLQUNHLEtBQUt0RixhQUFMLENBQW1CZ0UsYUFBbkIsQ0FBaUNDLEdBQWpDLENBQXFDbEYsWUFBWSxDQUFDc0csZUFBYixDQUE2QkUsTUFBbEUsQ0FESCxJQUVHLEtBQUt2RixhQUFMLENBQW1CZ0UsYUFBbkIsQ0FBaUNDLEdBQWpDLENBQXFDbEYsWUFBWSxDQUFDc0csZUFBYixDQUE2QkcsU0FBbEUsQ0FGSCxJQUdHLEtBQUt4RixhQUFMLENBQW1CZ0UsYUFBbkIsQ0FBaUNDLEdBQWpDLENBQXFDbEYsWUFBWSxDQUFDc0csZUFBYixDQUE2QkksSUFBbEUsQ0FISCxJQUlHLEtBQUt6RixhQUFMLENBQW1CZ0UsYUFBbkIsQ0FBaUNDLEdBQWpDLENBQXFDbEYsWUFBWSxDQUFDc0csZUFBYixDQUE2QkssSUFBbEUsQ0FMSixDQURKLEVBT0U7TUFDRSxLQUFLM0UsVUFBTCxJQUFtQmpDLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCWSxJQUE3QixDQUFrQzVFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUI0QixlQUF2RCxDQUFuQjtJQUNIOztJQUNELElBQ0l0RyxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCbUMsUUFBekQsS0FDQWpHLENBQUMsQ0FBQ2tHLGdCQUFGLENBQW1CQyxRQUFuQixDQUE0QmpILFdBQVcsQ0FBQ2tILGdCQUFaLENBQTZCQyxJQUF6RCxDQUZKLEVBR0U7TUFDRSxLQUFLaEYsVUFBTCxJQUFtQmpDLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCWSxJQUE3QixDQUFrQzVFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUJtQyxRQUF2RCxDQUFuQjtJQUNIOztJQUNELElBQUk3RyxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCd0Msc0JBQXpELENBQUosRUFBc0Y7TUFDbEYsS0FBS2pGLFVBQUwsSUFBbUJqQyxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2Qm1ELElBQTdCLENBQWtDbkgsWUFBWSxDQUFDMEUsT0FBYixDQUFxQndDLHNCQUF2RCxFQUErRSxDQUEvRSxDQUFuQjtJQUNIOztJQUNELElBQ0ksTUFBTSxLQUFLNUYsTUFBTCxDQUFZOEYsWUFBbEIsSUFDQXBILFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCUyxNQUE3QixDQUFvQ3pFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUIyQyxTQUF6RCxDQURBLElBRUExSCxTQUFTLFdBQVQsQ0FBa0I2RixXQUFsQixDQUE4QixNQUFNeEYsWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJZLElBQTdCLENBQWtDNUUsWUFBWSxDQUFDMEUsT0FBYixDQUFxQjJDLFNBQXZELENBQXBDLEVBQXVHLEdBQXZHLENBSEosRUFJRTtNQUNFekcsQ0FBQyxDQUFDMkQsR0FBRixHQUFRLEtBQUtyRCxhQUFMLENBQW1CZ0QsRUFBM0I7SUFDSDs7SUFDRCxJQUFJbEUsWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJTLE1BQTdCLENBQW9DekUsWUFBWSxDQUFDMEUsT0FBYixDQUFxQjRDLFlBQXpELENBQUosRUFBNEU7TUFDeEUsS0FBS3JGLFVBQUwsSUFDSWpDLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCWSxJQUE3QixDQUFrQzVFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUI0QyxZQUF2RCxLQUNDdkgsWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJ1RCxTQUF6QixDQUFtQ0MsVUFBbkMsR0FBZ0QsQ0FBaEQsR0FBb0QsQ0FBcEQsR0FBd0R6SCxZQUFZLFdBQVosQ0FBcUJpRSxHQUFyQixDQUF5QnVELFNBQXpCLENBQW1DQyxVQUQ1RixDQURKO0lBR0g7O0lBQ0QsSUFBSSxLQUFLbkcsVUFBTCxJQUFtQixHQUFuQixJQUEwQnJCLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCUyxNQUE3QixDQUFvQ3pFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUIrQyxlQUF6RCxDQUE5QixFQUF5RztNQUNyRyxLQUFLeEYsVUFBTCxJQUFtQmpDLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCWSxJQUE3QixDQUFrQzVFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUIrQyxlQUF2RCxDQUFuQjtJQUNIOztJQUNELElBQ0ksTUFBTSxLQUFLbkcsTUFBTCxDQUFZOEYsWUFBbEIsSUFDQSxLQUFLcEUsSUFBTCxDQUFVMEUsUUFBVixDQUFtQjNELENBQW5CLElBQXdCLEdBRHhCLElBRUEvRCxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCaUQsbUJBQXpELENBRkEsSUFHQWhJLFNBQVMsV0FBVCxDQUFrQjZGLFdBQWxCLENBQ0ksTUFBTXhGLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCWSxJQUE3QixDQUFrQzVFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUJpRCxtQkFBdkQsQ0FEVixFQUVJLEdBRkosQ0FKSixFQVFFO01BQ0UsSUFBSTlHLENBQUMsR0FBRyxNQUFNLEtBQUttQyxJQUFMLENBQVUwRSxRQUFWLENBQW1CM0QsQ0FBakM7O01BQ0EsSUFBSWxELENBQUMsR0FBRyxDQUFSLEVBQVc7UUFDUCxLQUFLK0csWUFBTCxDQUFrQjtVQUNkQyxJQUFJLEVBQUU1SCxZQUFZLENBQUNzRyxlQUFiLENBQTZCdUIsSUFEckI7VUFFZEMsS0FBSyxFQUFFbEgsQ0FGTztVQUdkbUgsUUFBUSxFQUFFO1FBSEksQ0FBbEI7TUFLSDtJQUNKOztJQUNELElBQ0loSSxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCdUQsVUFBekQsS0FDQWpJLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCbUQsSUFBN0IsQ0FBa0NuSCxZQUFZLENBQUMwRSxPQUFiLENBQXFCdUQsVUFBdkQsRUFBbUUsQ0FBbkUsSUFDSWxJLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCa0UsVUFEN0IsR0FFSW5JLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCbUUsVUFKakMsRUFLRTtNQUNFLEtBQUtsRyxVQUFMLElBQW1CakMsWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJtRCxJQUE3QixDQUFrQ25ILFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUJ1RCxVQUF2RCxFQUFtRSxDQUFuRSxDQUFuQjtJQUNIOztJQUNELElBQUksS0FBS3RGLGFBQUwsSUFBc0IzQyxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCMEQsZUFBekQsQ0FBMUIsRUFBcUc7TUFDakd4SCxDQUFDLENBQUMyRCxHQUFGLElBQVNKLElBQUksQ0FBQ0MsSUFBTCxDQUNMLEtBQUtsRCxhQUFMLENBQW1Cb0QsTUFBbkIsR0FBNEJ0RSxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlksSUFBN0IsQ0FBa0M1RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCMEQsZUFBdkQsQ0FEdkIsQ0FBVDtJQUdIOztJQUNELElBQUlwSSxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCMkQsUUFBekQsQ0FBSixFQUF3RTtNQUNwRSxJQUFJdEYsQ0FBQyxHQUFHcEQsU0FBUyxXQUFULENBQWtCMkksV0FBbEIsQ0FDSixDQUFDLEdBREcsRUFFSnRJLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCWSxJQUE3QixDQUFrQzVFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUIyRCxRQUF2RCxDQUZJLENBQVI7O01BSUEsSUFBSXRGLENBQUMsR0FBRyxDQUFSLEVBQVc7UUFDUG5DLENBQUMsQ0FBQzJELEdBQUYsSUFBU0osSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBQ3JCLENBQUQsR0FBS25DLENBQUMsQ0FBQzJELEdBQWpCLENBQVQ7TUFDSDs7TUFDRCxLQUFLdEMsVUFBTCxJQUFtQmMsQ0FBbkI7SUFDSDtFQUNKLENBckZEOztFQXNGQWxDLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWThDLGVBQVosR0FBOEIsVUFBVS9FLENBQVYsRUFBYTtJQUN2QyxJQUFJWixZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCNkQsVUFBekQsQ0FBSixFQUEwRTtNQUN0RTNILENBQUMsQ0FBQzJELEdBQUYsSUFBU0osSUFBSSxDQUFDQyxJQUFMLENBQ0wsS0FBS2xELGFBQUwsQ0FBbUJvRCxNQUFuQixHQUE0QnRFLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCWSxJQUE3QixDQUFrQzVFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUI2RCxVQUF2RCxDQUR2QixDQUFUO0lBR0g7O0lBQ0QsSUFBSTNILENBQUMsQ0FBQ21GLFVBQUYsSUFBZ0JuRixDQUFDLENBQUNtRixVQUFGLEtBQWlCakcsV0FBVyxDQUFDa0csVUFBWixDQUF1QndDLFFBQTVELEVBQXNFO01BQ2xFNUgsQ0FBQyxDQUFDMkQsR0FBRixJQUFTSixJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLbEQsYUFBTCxDQUFtQm9ELE1BQW5CLEdBQTRCMUQsQ0FBQyxDQUFDbUgsS0FBeEMsQ0FBVDtJQUNIO0VBQ0osQ0FURDs7RUFVQWxILENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWTZDLGNBQVosR0FBNkIsVUFBVTlFLENBQVYsRUFBYTtJQUN0QyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFUOztJQUNBLElBQ0liLFlBQVksQ0FBQ3dFLFdBQWIsQ0FBeUJSLEdBQXpCLENBQTZCUyxNQUE3QixDQUFvQ3pFLFlBQVksQ0FBQzBFLE9BQWIsQ0FBcUIrRCxZQUF6RCxLQUNBOUksU0FBUyxXQUFULENBQWtCNkYsV0FBbEIsQ0FDSSxNQUFNeEYsWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJZLElBQTdCLENBQWtDNUUsWUFBWSxDQUFDMEUsT0FBYixDQUFxQitELFlBQXZELENBRFYsRUFFSSxHQUZKLENBRkosRUFNRTtNQUNFNUgsQ0FBQyxHQUFHLENBQUMsQ0FBTDtJQUNIOztJQUNELEtBQUtvQixVQUFMLEdBQWtCLENBQWxCOztJQUNBLElBQ0lyQixDQUFDLENBQUNtRixVQUFGLEtBQ0VuRixDQUFDLENBQUNtRixVQUFGLEtBQWlCakcsV0FBVyxDQUFDa0csVUFBWixDQUF1QjBDLGFBQXhDLElBQ0UsS0FBS3hILGFBQUwsQ0FBbUJnRSxhQUFuQixDQUFpQ0MsR0FBakMsQ0FBcUNsRixZQUFZLENBQUNzRyxlQUFiLENBQTZCRSxNQUFsRSxDQURILElBRUk3RixDQUFDLENBQUNtRixVQUFGLEtBQWlCakcsV0FBVyxDQUFDa0csVUFBWixDQUF1QjJDLGdCQUF4QyxJQUNHLEtBQUt6SCxhQUFMLENBQW1CZ0UsYUFBbkIsQ0FBaUNDLEdBQWpDLENBQXFDbEYsWUFBWSxDQUFDc0csZUFBYixDQUE2QkcsU0FBbEUsQ0FKUixDQURKLEVBTUU7TUFDRSxLQUFLekUsVUFBTCxJQUFtQnJCLENBQUMsQ0FBQ21ILEtBQXJCO0lBQ0g7O0lBQ0QsS0FBSyxJQUFJaEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25DLENBQUMsQ0FBQ2tHLGdCQUFGLENBQW1COEIsTUFBdkMsRUFBK0M3RixDQUFDLEVBQWhELEVBQW9EO01BQ2hELElBQUksS0FBSzdCLGFBQUwsQ0FBbUIySCxnQkFBbkIsQ0FBb0MxRCxHQUFwQyxDQUF3Q3ZFLENBQUMsQ0FBQ2tHLGdCQUFGLENBQW1CL0QsQ0FBbkIsQ0FBeEMsQ0FBSixFQUFvRTtRQUNoRSxJQUFJaEUsQ0FBQyxHQUFHLEtBQUttQyxhQUFMLENBQW1CMkgsZ0JBQW5CLENBQW9DQyxHQUFwQyxDQUF3Q2xJLENBQUMsQ0FBQ2tHLGdCQUFGLENBQW1CL0QsQ0FBbkIsQ0FBeEMsQ0FBUjs7UUFDQSxJQUFJaEUsQ0FBQyxHQUFHLENBQVIsRUFBVztVQUNQLElBQUk4QixDQUFKLEVBQU87WUFDSDtVQUNIOztVQUNERCxDQUFDLENBQUMyRCxHQUFGLEdBQVFKLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQUMsSUFBSXJGLENBQUwsSUFBVTZCLENBQUMsQ0FBQzJELEdBQXRCLENBQVI7UUFDSCxDQUxELE1BS087VUFDSCxLQUFLdEMsVUFBTCxJQUFtQmxELENBQW5CO1FBQ0g7TUFDSjtJQUNKOztJQUNELEtBQUtvSCxjQUFMLENBQW9CdkYsQ0FBcEI7O0lBQ0EsSUFBSSxLQUFLTSxhQUFMLENBQW1CNkgsU0FBbkIsR0FBK0IsQ0FBbkMsRUFBc0M7TUFDbEMsS0FBSzlHLFVBQUwsSUFBbUIsS0FBS2YsYUFBTCxDQUFtQjZILFNBQXRDO0lBQ0g7O0lBQ0QsT0FBTyxLQUFLOUcsVUFBWjtFQUNILENBdkNEOztFQXdDQXBCLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWWlELFlBQVosR0FBMkIsVUFBVWxGLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUN2QyxJQUFJLEtBQUtLLGFBQUwsQ0FBbUI4RCxLQUF2QixFQUE4QjtNQUMxQixPQUFPLENBQUMsQ0FBUjtJQUNIOztJQUNELElBQUksQ0FBQ25FLENBQUMsR0FBR3NELElBQUksQ0FBQzZFLEtBQUwsQ0FBV25JLENBQUMsSUFBSSxJQUFJLEtBQUtxQixZQUFiLENBQVosQ0FBTCxJQUFnRCxDQUFoRCxJQUFxRHRCLENBQUMsR0FBRyxDQUE3RCxFQUFnRTtNQUM1RGIsWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJpRixjQUF6QixDQUF3Q3JJLENBQXhDLEVBQTJDQyxDQUEzQztJQUNIOztJQUNELElBQUlrQyxDQUFDLEdBQUcsS0FBSzdCLGFBQUwsQ0FBbUJnRCxFQUEzQjtJQUNBLEtBQUtoRCxhQUFMLENBQW1CZ0QsRUFBbkIsSUFBeUJyRCxDQUF6Qjs7SUFDQSxJQUFJLENBQUMsQ0FBRCxLQUFPRCxDQUFYLEVBQWM7TUFDVixJQUFJLEtBQUswQixLQUFMLElBQWMsQ0FBbEIsRUFBcUI7UUFDakIsS0FBS0EsS0FBTCxHQUFhLEdBQWI7TUFDSDs7TUFDRCxJQUFJdkQsQ0FBQyxHQUFHLEtBQUttSyxVQUFMLEVBQVI7TUFDQSxDQUFDLENBQUQsS0FBT3RJLENBQVAsSUFBWSxLQUFLK0IsYUFBakIsR0FDTXJELGFBQWEsV0FBYixDQUFzQjZKLElBQXRCLENBQTJCdEosZUFBZSxXQUFmLENBQXdCdUosU0FBbkQsRUFBOERySyxDQUE5RCxFQUFpRThCLENBQWpFLEVBQW9FLENBQXBFLEVBQXVFLENBQXZFLENBRE4sR0FFTXZCLGFBQWEsV0FBYixDQUFzQjZKLElBQXRCLENBQTJCdEosZUFBZSxXQUFmLENBQXdCdUosU0FBbkQsRUFBOERySyxDQUE5RCxFQUFpRThCLENBQWpFLEVBQW9FLENBQXBFLENBRk47SUFHSDs7SUFDRCxJQUFJLEtBQUtLLGFBQUwsQ0FBbUJnRCxFQUFuQixHQUF3QixDQUE1QixFQUErQjtNQUMzQixLQUFLaEQsYUFBTCxDQUFtQmdELEVBQW5CLEdBQXdCLENBQXhCO0lBQ0g7O0lBQ0QsT0FBT25CLENBQUMsR0FBRyxDQUFKLElBQVMsS0FBSzdCLGFBQUwsQ0FBbUJnRCxFQUFuQixJQUF5QixDQUF6QztFQUNILENBdEJEOztFQXVCQXJELENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXFHLFVBQVosR0FBeUIsWUFBWTtJQUNqQyxJQUFJdEksQ0FBQyxHQUFHLEtBQUt5SSxXQUFMLEVBQVI7SUFDQTNJLENBQUMsQ0FBQ29ELENBQUYsR0FBTWxELENBQUMsQ0FBQ2tELENBQVI7SUFDQSxNQUFNLEtBQUt4QyxNQUFMLENBQVlnSSxPQUFsQixHQUE2QjVJLENBQUMsQ0FBQ3FELENBQUYsR0FBTW5ELENBQUMsQ0FBQ21ELENBQXJDLEdBQTJDckQsQ0FBQyxDQUFDcUQsQ0FBRixHQUFNbkQsQ0FBQyxDQUFDbUQsQ0FBRixHQUFNLEtBQUsvQyxJQUFMLENBQVVnQyxJQUFWLENBQWVlLENBQXJCLEdBQXlCLEtBQUsvQyxJQUFMLENBQVVnQyxJQUFWLENBQWV1RyxNQUF6RjtJQUNBLE9BQU83SSxDQUFQO0VBQ0gsQ0FMRDs7RUFNQUcsQ0FBQyxDQUFDZ0MsU0FBRixDQUFZcUQsVUFBWixHQUF5QixZQUFZO0lBQ2pDLElBQUl0RixDQUFDLEdBQUdiLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCd0YsYUFBekIsQ0FBdUMxSixXQUFXLENBQUMySixVQUFaLENBQXVCQyxVQUE5RCxDQUFSOztJQUNBLElBQUksQ0FBQzlJLENBQUwsRUFBUTtNQUNKLElBQUlDLENBQUMsR0FBRzNCLGFBQWEsV0FBYixDQUFzQjBHLFFBQXRCLENBQStCK0QsTUFBL0IsQ0FDSnhLLFVBQVUsQ0FBQ3lLLFdBQVgsQ0FBdUJDLElBRG5CLEVBRUoxSyxVQUFVLENBQUMySyxTQUFYLENBQXFCQyxXQUFyQixDQUFpQ0MsT0FBakMsQ0FBeUNDLFVBQXpDLENBQW9EQyxTQUZoRCxDQUFSO01BSUF0SixDQUFDLEdBQUd2QixRQUFRLENBQUM4SyxPQUFULENBQWlCQyxXQUFqQixDQUE2QnZKLENBQTdCLEVBQWdDZCxZQUFZLFdBQVosQ0FBcUJpRSxHQUFyQixDQUF5QnFHLGNBQXpCLENBQXdDQyxNQUF4RSxFQUFnRnBILFlBQWhGLENBQ0FwRCxXQUFXLFdBRFgsQ0FBSjtJQUdIOztJQUNEYyxDQUFDLENBQUMySixXQUFGLENBQWMsS0FBS2xCLFdBQUwsR0FBbUJtQixHQUFuQixDQUF1QnJLLEVBQUUsQ0FBQ3NLLEVBQUgsQ0FBTSxDQUFOLEVBQVMsRUFBVCxDQUF2QixDQUFkO0lBQ0E3SixDQUFDLENBQUM4SixVQUFGLENBQWEsSUFBYixFQUFtQixFQUFuQjtJQUNBOUosQ0FBQyxDQUFDK0osTUFBRixDQUFTNUssWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJxRyxjQUFsQztJQUNBekosQ0FBQyxDQUFDZ0ssWUFBRixDQUFlLElBQWY7RUFDSCxDQWZEOztFQWdCQS9KLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWStFLFlBQVosR0FBMkIsVUFBVWhILENBQVYsRUFBYTtJQUNwQyxJQUFJLENBQUMsS0FBS00sYUFBTCxDQUFtQjhELEtBQXhCLEVBQStCO01BQzNCLEtBQUs5RCxhQUFMLENBQW1CMkosU0FBbkIsQ0FBNkJqSyxDQUE3QjtJQUNIO0VBQ0osQ0FKRDs7RUFLQUMsQ0FBQyxDQUFDZ0MsU0FBRixDQUFZaUksWUFBWixHQUEyQixVQUFVbEssQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ3ZDLEtBQUtLLGFBQUwsQ0FBbUI2SixXQUFuQixDQUErQm5LLENBQS9CLEVBQWtDQyxDQUFsQztFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWW1JLFNBQVosR0FBd0IsVUFBVXBLLENBQVYsRUFBYTtJQUNqQyxJQUFJLE1BQU0sS0FBS00sYUFBTCxDQUFtQitKLGFBQW5CLENBQWlDQyxJQUFqQyxDQUFzQ3RLLENBQXRDLENBQVYsRUFBb0Q7TUFDaEQsS0FBS2dILFlBQUwsQ0FBa0I7UUFDZEMsSUFBSSxFQUFFNUgsWUFBWSxDQUFDc0csZUFBYixDQUE2QjRFLE1BRHJCO1FBRWRuRCxRQUFRLEVBQUUsQ0FBQyxDQUZHO1FBR2RELEtBQUssRUFBRTtNQUhPLENBQWxCO0lBS0g7RUFDSixDQVJEOztFQVNBbEgsQ0FBQyxDQUFDZ0MsU0FBRixDQUFZdUksWUFBWixHQUEyQixVQUFVeEssQ0FBVixFQUFhO0lBQ3BDLElBQUksTUFBTSxLQUFLTSxhQUFMLENBQW1CK0osYUFBbkIsQ0FBaUNyQyxNQUEzQyxFQUFtRDtNQUMvQyxJQUFJL0gsQ0FBQyxHQUFHLEtBQUtLLGFBQUwsQ0FBbUIrSixhQUFuQixDQUFpQ0ksT0FBakMsQ0FBeUN6SyxDQUF6QyxDQUFSOztNQUNBLElBQUksQ0FBQyxDQUFELEtBQU9DLENBQVgsRUFBYztRQUNWLEtBQUtLLGFBQUwsQ0FBbUIrSixhQUFuQixDQUFpQ0ssTUFBakMsQ0FBd0N6SyxDQUF4QyxFQUEyQyxDQUEzQztNQUNIOztNQUNELElBQUksTUFBTSxLQUFLSyxhQUFMLENBQW1CK0osYUFBbkIsQ0FBaUNyQyxNQUEzQyxFQUFtRDtRQUMvQyxLQUFLMUgsYUFBTCxDQUFtQjZKLFdBQW5CLENBQStCOUssWUFBWSxDQUFDc0csZUFBYixDQUE2QjRFLE1BQTVEO01BQ0g7SUFDSjtFQUNKLENBVkQ7O0VBV0F0SyxDQUFDLENBQUNnQyxTQUFGLENBQVkwSSxjQUFaLEdBQTZCLFVBQVUzSyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDekMsS0FBSzJCLFlBQUwsQ0FBa0JnSixHQUFsQixDQUFzQjNLLENBQXRCLEVBQXlCO01BQ3JCNEssUUFBUSxFQUFFN0ssQ0FEVztNQUVyQjhLLE1BQU0sRUFBRTdLO0lBRmEsQ0FBekI7RUFJSCxDQUxEOztFQU1BQSxDQUFDLENBQUNnQyxTQUFGLENBQVk4SSxpQkFBWixHQUFnQyxVQUFVL0ssQ0FBVixFQUFhO0lBQ3pDLEtBQUs0QixZQUFMLFdBQXlCNUIsQ0FBekI7RUFDSCxDQUZEOztFQUdBQyxDQUFDLENBQUNnQyxTQUFGLENBQVkrSSxXQUFaLEdBQTBCLFVBQVVoTCxDQUFWLEVBQWE7SUFDbkMsSUFBSSxDQUFDLEtBQUtNLGFBQUwsQ0FBbUI4RCxLQUF4QixFQUErQjtNQUMzQixNQUFNLEtBQUsxRCxNQUFMLENBQVlnSSxPQUFsQixHQUNNLEtBQUt6RSxNQUFMLENBQVksS0FBS3dFLFdBQUwsR0FBbUJ0RixDQUFuQixJQUF3Qm5FLFlBQVksV0FBWixDQUFxQmlNLEtBQXpELENBRE4sR0FFTSxLQUFLaEgsTUFBTCxDQUFZLEtBQUt4RCxVQUFMLElBQW1CLEtBQUtlLFFBQXBDLENBRk47TUFHQSxLQUFLMEosaUJBQUwsQ0FBdUJsTCxDQUF2QjtNQUNBLEtBQUtNLGFBQUwsQ0FBbUI2SyxPQUFuQixDQUEyQm5MLENBQTNCOztNQUNBLElBQUksS0FBS21CLFFBQUwsSUFBaUIsQ0FBQyxLQUFLQyxXQUEzQixFQUF3QztRQUNwQyxLQUFLVCxVQUFMLElBQW1CWCxDQUFuQjs7UUFDQSxJQUFJLEtBQUtXLFVBQUwsSUFBbUIsQ0FBdkIsRUFBMEI7VUFDdEIsS0FBS0EsVUFBTCxHQUFrQixLQUFLRCxNQUFMLENBQVl3RCxRQUE5QjtVQUNBLEtBQUtrSCxNQUFMO1FBQ0g7TUFDSjs7TUFDRCxJQUFJLEtBQUs5SyxhQUFMLENBQW1CZ0QsRUFBbkIsSUFBeUIsQ0FBN0IsRUFBZ0M7UUFDNUIsS0FBS2hELGFBQUwsQ0FBbUI4RCxLQUFuQixHQUEyQixDQUFDLENBQTVCO1FBQ0ExRixhQUFhLFdBQWIsQ0FBc0I2SixJQUF0QixDQUEyQnRKLGVBQWUsV0FBZixDQUF3Qm9NLE9BQW5ELEVBQTRELEtBQUszSyxNQUFMLENBQVk0SyxFQUF4RTs7UUFDQSxJQUFJLEtBQUtDLE9BQUwsRUFBSixFQUFvQjtVQUNoQixLQUFLQyxVQUFMO1FBQ0g7TUFDSjs7TUFDRCxJQUFJLEtBQUtuTCxXQUFULEVBQXNCO1FBQ2xCVixDQUFDLENBQUN1RCxDQUFGLEdBQU0sS0FBS3VGLFdBQUwsR0FBbUJ2RixDQUFuQixHQUF1QixLQUFLN0MsV0FBTCxDQUFpQnlHLFFBQWpCLENBQTBCNUQsQ0FBdkQ7UUFDQXZELENBQUMsQ0FBQ3dELENBQUYsR0FBTSxLQUFLc0YsV0FBTCxHQUFtQnRGLENBQW5CLEdBQXVCLEtBQUs5QyxXQUFMLENBQWlCeUcsUUFBakIsQ0FBMEIzRCxDQUF2RDs7UUFDQSxJQUFJLEtBQUtyQyxRQUFULEVBQW1CO1VBQ2YsS0FBS0EsUUFBTCxDQUFjNkksV0FBZCxDQUEwQmhLLENBQTFCO1FBQ0g7O1FBQ0QsSUFBSSxLQUFLdUIsV0FBVCxFQUFzQjtVQUNsQixLQUFLQSxXQUFMLENBQWlCeUksV0FBakIsQ0FBNkJoSyxDQUE3QjtRQUNIOztRQUNELElBQUksS0FBS29CLFVBQVQsRUFBcUI7VUFDakIsS0FBS0EsVUFBTCxDQUFnQjRJLFdBQWhCLENBQTRCaEssQ0FBNUI7UUFDSDs7UUFDRCxJQUFJLEtBQUtxQixhQUFULEVBQXdCO1VBQ3BCLEtBQUtBLGFBQUwsQ0FBbUIySSxXQUFuQixDQUErQmhLLENBQS9CO1FBQ0g7O1FBQ0QsSUFBSSxLQUFLc0IsUUFBVCxFQUFtQjtVQUNmLEtBQUtBLFFBQUwsQ0FBYzBJLFdBQWQsQ0FBMEJoSyxDQUExQjtRQUNIO01BQ0o7O01BQ0QsSUFBSSxDQUFDLEtBQUthLE1BQVYsRUFBa0I7UUFDZCxLQUFLaUwsSUFBTCxDQUFVekwsQ0FBVjtRQUNBLEtBQUswTCxlQUFMO01BQ0g7SUFDSjtFQUNKLENBN0NEOztFQThDQXpMLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXlKLGVBQVosR0FBOEIsWUFBWTtJQUN0QyxJQUFJdk0sWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJ1SSxTQUF6QixLQUF1QyxLQUFLcEwsU0FBaEQsRUFBMkQ7TUFDdkQsS0FBS0EsU0FBTCxHQUFpQnBCLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCdUksU0FBMUM7TUFDQSxJQUFJM0wsQ0FBQyxHQUFJLEtBQUtnRCxLQUFMLEdBQWEsS0FBSzFDLGFBQUwsQ0FBbUJ5QyxTQUFqQyxHQUE4QyxLQUFLeEMsU0FBM0Q7O01BQ0EsSUFBSSxLQUFLMEMsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLENBQXRCLEVBQXlCO1FBQ3JCbkQsQ0FBQyxHQUFHLENBQUo7TUFDSDs7TUFDRCxJQUFJLE1BQU0sS0FBS0ksSUFBTCxDQUFVd0wsU0FBcEIsRUFBK0I7UUFDM0IsS0FBS3hMLElBQUwsQ0FBVXdMLFNBQVYsR0FBc0I1TCxDQUF0QjtNQUNIO0lBQ0o7RUFDSixDQVhEOztFQVlBQyxDQUFDLENBQUNnQyxTQUFGLENBQVlpSixpQkFBWixHQUFnQyxVQUFVbEwsQ0FBVixFQUFhO0lBQ3pDLElBQUlULEVBQUUsQ0FBQ3NNLE9BQUgsQ0FBVyxLQUFLekwsSUFBaEIsS0FBeUIsS0FBS3NCLEtBQUwsR0FBYSxDQUExQyxFQUE2QztNQUN6QyxLQUFLQSxLQUFMLElBQWMxQixDQUFkOztNQUNBLElBQUksS0FBSzBCLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtRQUNqQixLQUFLQSxLQUFMLEdBQWEsQ0FBYjtNQUNIOztNQUNELEtBQUtBLEtBQUwsR0FBYSxLQUFLQSxLQUFMLEdBQWEsQ0FBYixHQUFpQixDQUFqQixHQUFxQixLQUFLQSxLQUF2QztNQUNBLElBQUl6QixDQUFDLEdBQUdzRCxJQUFJLENBQUNDLElBQUwsQ0FBVyxNQUFNLEtBQUs5QixLQUFaLEdBQXFCLEtBQUtELFFBQXBDLENBQVI7O01BQ0EsSUFBSXhCLENBQUMsR0FBRyxDQUFSLEVBQVc7UUFDUEEsQ0FBQyxHQUFHLENBQUo7TUFDSDs7TUFDRCxLQUFLRyxJQUFMLENBQVVnQyxJQUFWLENBQWUwSixPQUFmLEdBQXlCN0wsQ0FBekI7SUFDSDtFQUNKLENBYkQ7O0VBY0FBLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXVKLFVBQVosR0FBeUIsWUFBWTtJQUNqQyxJQUFJcE0sWUFBWSxDQUFDd0UsV0FBYixDQUF5QlIsR0FBekIsQ0FBNkJTLE1BQTdCLENBQW9DekUsWUFBWSxDQUFDMEUsT0FBYixDQUFxQmlJLHNCQUF6RCxDQUFKLEVBQXNGO01BQ2xGck4sYUFBYSxXQUFiLENBQXNCNkosSUFBdEIsQ0FDSXRKLGVBQWUsV0FBZixDQUF3QitNLFdBRDVCLEVBRUk1TSxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlksSUFBN0IsQ0FBa0M1RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCaUksc0JBQXZELENBRko7SUFJSDs7SUFDRCxJQUNJLEtBQUtyTCxNQUFMLENBQVk4RixZQUFaLEdBQTJCLENBQTNCLElBQ0FwSCxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlMsTUFBN0IsQ0FBb0N6RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCbUksc0JBQXpELENBRkosRUFHRTtNQUNFdk4sYUFBYSxXQUFiLENBQXNCNkosSUFBdEIsQ0FDSXRKLGVBQWUsV0FBZixDQUF3QitNLFdBRDVCLEVBRUk1TSxZQUFZLENBQUN3RSxXQUFiLENBQXlCUixHQUF6QixDQUE2QlksSUFBN0IsQ0FBa0M1RSxZQUFZLENBQUMwRSxPQUFiLENBQXFCbUksc0JBQXZELENBRko7SUFJSDs7SUFDRCxJQUFJak0sQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLNEIsWUFBTCxDQUFrQnNLLE9BQWxCLENBQTBCLFVBQVVqTSxDQUFWLEVBQWE7TUFDbkMsSUFBSUEsQ0FBQyxJQUFJQSxDQUFDLENBQUM0SyxRQUFQLElBQW1CNUssQ0FBQyxDQUFDNkssTUFBekIsRUFBaUM7UUFDN0I3SyxDQUFDLENBQUM0SyxRQUFGLENBQVczSyxLQUFYLENBQWlCRCxDQUFDLENBQUM2SyxNQUFuQixFQUEyQixDQUFDOUssQ0FBRCxDQUEzQjtNQUNIO0lBQ0osQ0FKRDtJQUtBLEtBQUs0QixZQUFMLENBQWtCdUssS0FBbEI7SUFDQSxLQUFLdEosV0FBTCxDQUFpQixDQUFDLENBQWxCO0lBQ0EsS0FBS0QsZUFBTDtJQUNBakUsZUFBZSxXQUFmLENBQXdCK0QsR0FBeEIsQ0FBNEIwSixTQUE1QixDQUFzQyxJQUF0QztJQUNBak4sWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJpSixZQUF6QixDQUFzQyxJQUF0QztFQUNILENBM0JEOztFQTRCQXBNLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXdKLElBQVosR0FBbUIsVUFBVXpMLENBQVYsRUFBYTtJQUM1QixLQUFLUyxVQUFMLEdBQWtCOEMsSUFBSSxDQUFDNkUsS0FBTCxDQUFXLEtBQUtoRyxJQUFMLENBQVVlLENBQVYsR0FBYyxHQUF6QixDQUFsQjtJQUNBLEtBQUtmLElBQUwsQ0FBVWtLLE1BQVYsR0FBbUIsTUFBTS9JLElBQUksQ0FBQzZFLEtBQUwsQ0FBVyxLQUFLM0gsVUFBaEIsQ0FBekI7SUFDQSxJQUFJUixDQUFDLEdBQUcsS0FBS3dJLFdBQUwsRUFBUjtJQUNBLElBQUl0RyxDQUFDLEdBQUcsS0FBS2MsUUFBYjtJQUNBdEQsQ0FBQyxDQUFDdUQsQ0FBRixHQUFNakQsQ0FBQyxDQUFDaUQsQ0FBRixHQUFNZixDQUFDLENBQUNlLENBQUYsR0FBTWxELENBQWxCO0lBQ0FMLENBQUMsQ0FBQ3dELENBQUYsR0FBTWxELENBQUMsQ0FBQ2tELENBQUYsR0FBTWhCLENBQUMsQ0FBQ2dCLENBQUYsR0FBTW5ELENBQWxCO0lBQ0FMLENBQUMsQ0FBQzRNLENBQUYsR0FBTXRNLENBQUMsQ0FBQ3NNLENBQUYsR0FBTXBLLENBQUMsQ0FBQ29LLENBQUYsR0FBTXZNLENBQWxCOztJQUNBLElBQUlMLENBQUMsQ0FBQ3dELENBQUYsSUFBTyxHQUFQLElBQWMsS0FBS0YsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLENBQXBDLEVBQXVDO01BQ25DLEtBQUs3QyxhQUFMLENBQW1CNkosV0FBbkIsQ0FBK0I5SyxZQUFZLENBQUNzRyxlQUFiLENBQTZCdUIsSUFBNUQ7TUFDQSxPQUFPLE1BQU0sS0FBS2pFLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixDQUFDLENBQXpCLENBQVA7SUFDSDs7SUFDRCxJQUFJeEQsQ0FBQyxDQUFDd0QsQ0FBRixHQUFNbkUsWUFBWSxXQUFaLENBQXFCaU0sS0FBM0IsSUFBb0M5SSxDQUFDLENBQUNnQixDQUFGLEdBQU0sQ0FBOUMsRUFBaUQ7TUFDN0N4RCxDQUFDLENBQUN3RCxDQUFGLEdBQU1uRSxZQUFZLFdBQVosQ0FBcUJpTSxLQUEzQjtJQUNIOztJQUNELElBQUl0TCxDQUFDLENBQUN1RCxDQUFGLEdBQU0sQ0FBQyxHQUFYLEVBQWdCO01BQ1p2RCxDQUFDLENBQUN1RCxDQUFGLEdBQU0sQ0FBQyxHQUFQO0lBQ0g7O0lBQ0QsSUFBSXZELENBQUMsQ0FBQ3VELENBQUYsR0FBTSxHQUFWLEVBQWU7TUFDWHZELENBQUMsQ0FBQ3VELENBQUYsR0FBTSxHQUFOO0lBQ0g7O0lBQ0QsS0FBS3lHLFdBQUwsQ0FBaUJoSyxDQUFqQjtJQUNBLEtBQUs2TSxnQkFBTDtFQUNILENBdkJEOztFQXdCQXZNLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXVLLGdCQUFaLEdBQStCLFlBQVk7SUFDdkMsSUFBSSxLQUFLbE0sYUFBTCxDQUFtQitELFNBQW5CLENBQTZCaEYsWUFBWSxDQUFDc0csZUFBYixDQUE2QjRFLE1BQTFELENBQUosRUFBdUU7TUFDbkU1SyxDQUFDLENBQUN1RCxDQUFGLEdBQU0sQ0FBTjtNQUNBdkQsQ0FBQyxDQUFDd0QsQ0FBRixHQUFNLENBQU47O01BQ0EsS0FBSyxJQUFJbkQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLTSxhQUFMLENBQW1CK0osYUFBbkIsQ0FBaUNyQyxNQUFyRCxFQUE2RGhJLENBQUMsRUFBOUQsRUFBa0U7UUFDOURMLENBQUMsQ0FBQ3VELENBQUYsSUFBTyxLQUFLNUMsYUFBTCxDQUFtQitKLGFBQW5CLENBQWlDckssQ0FBakMsRUFBb0NrRCxDQUEzQztRQUNBdkQsQ0FBQyxDQUFDd0QsQ0FBRixJQUFPLEtBQUs3QyxhQUFMLENBQW1CK0osYUFBbkIsQ0FBaUNySyxDQUFqQyxFQUFvQ21ELENBQTNDO01BQ0g7O01BQ0R4RCxDQUFDLENBQUN1RCxDQUFGLEdBQU0zRCxFQUFFLENBQUNrTixJQUFILENBQVFDLE1BQVIsQ0FBZS9NLENBQUMsQ0FBQ3VELENBQWpCLEVBQW9CLENBQUMsR0FBckIsRUFBMEIsR0FBMUIsQ0FBTjtNQUNBdkQsQ0FBQyxDQUFDd0QsQ0FBRixHQUFNNUQsRUFBRSxDQUFDa04sSUFBSCxDQUFRQyxNQUFSLENBQWUvTSxDQUFDLENBQUN3RCxDQUFqQixFQUFvQixDQUFDLEdBQXJCLEVBQTBCLEdBQTFCLENBQU47TUFDQSxLQUFLRixRQUFMLENBQWNDLENBQWQsR0FBa0J2RCxDQUFDLENBQUN1RCxDQUFwQjtNQUNBLEtBQUtELFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQnhELENBQUMsQ0FBQ3dELENBQXBCO0lBQ0gsQ0FYRCxNQVdPO01BQ0gsS0FBS0YsUUFBTCxDQUFjMEosYUFBZCxHQUE4QkMsY0FBOUIsQ0FBNkMsS0FBSzVKLEtBQWxEO0lBQ0g7RUFDSixDQWZEOztFQWdCQS9DLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWW1KLE1BQVosR0FBcUIsWUFBWTtJQUM3QixJQUFJcEwsQ0FBQyxHQUFHLElBQVI7O0lBQ0EsSUFBSSxLQUFLbUIsUUFBVCxFQUFtQjtNQUNmLEtBQUtDLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQjtNQUNBLEtBQUtoQixJQUFMLENBQVUrRCxhQUFWLENBQXdCLEtBQXhCLEVBQStCLENBQS9CO01BQ0EsS0FBSzBJLFlBQUwsQ0FBa0IsS0FBS0MsVUFBdkIsRUFBbUMsS0FBbkM7TUFDQSxLQUFLMU0sSUFBTCxDQUFVMk0sSUFBVixDQUNJeEssV0FBVyxDQUFDeUssV0FBWixDQUF3QkMsUUFENUIsRUFFSSxZQUFZO1FBQ1JqTixDQUFDLENBQUNvQixXQUFGLEdBQWdCLENBQUMsQ0FBakI7UUFDQXBCLENBQUMsQ0FBQ0ksSUFBRixDQUFPK0QsYUFBUCxDQUFxQixPQUFyQixFQUE4QixDQUE5QjtNQUNILENBTEwsRUFNSSxJQU5KO0lBUUg7RUFDSixDQWZEOztFQWdCQWxFLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWTZLLFVBQVosR0FBeUIsWUFBWTtJQUNqQ3BPLGFBQWEsV0FBYixDQUFzQjZKLElBQXRCLENBQTJCdEosZUFBZSxXQUFmLENBQXdCaU8sUUFBbkQsRUFBNkQsS0FBSzVNLGFBQUwsQ0FBbUJxRCxHQUFoRjtFQUNILENBRkQ7O0VBR0ExRCxDQUFDLENBQUNnQyxTQUFGLENBQVlXLGVBQVosR0FBOEIsWUFBWTtJQUN0QyxJQUFJLEtBQUs5QixRQUFULEVBQW1CO01BQ2YsS0FBS3FNLGFBQUwsQ0FBbUI5TixZQUFZLENBQUNzRyxlQUFiLENBQTZCQyxJQUFoRDtJQUNIOztJQUNELElBQUksS0FBSzdFLFVBQVQsRUFBcUI7TUFDakIsS0FBS29NLGFBQUwsQ0FBbUI5TixZQUFZLENBQUNzRyxlQUFiLENBQTZCRSxNQUFoRDtJQUNIOztJQUNELElBQUksS0FBSzdFLGFBQVQsRUFBd0I7TUFDcEIsS0FBS21NLGFBQUwsQ0FBbUI5TixZQUFZLENBQUNzRyxlQUFiLENBQTZCRyxTQUFoRDtJQUNIOztJQUNELElBQUksS0FBSzdFLFFBQVQsRUFBbUI7TUFDZixLQUFLa00sYUFBTCxDQUFtQjlOLFlBQVksQ0FBQ3NHLGVBQWIsQ0FBNkJLLElBQWhEO0lBQ0g7O0lBQ0QsSUFBSSxLQUFLOUUsV0FBVCxFQUFzQjtNQUNsQixLQUFLaU0sYUFBTCxDQUFtQjlOLFlBQVksQ0FBQ3NHLGVBQWIsQ0FBNkJ5SCxPQUFoRDtJQUNIO0VBQ0osQ0FoQkQ7O0VBaUJBbk4sQ0FBQyxDQUFDZ0MsU0FBRixDQUFZc0osT0FBWixHQUFzQixZQUFZO0lBQzlCcE0sWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJpSyxXQUF6QixDQUFxQyxJQUFyQztJQUNBMU4sQ0FBQyxDQUFDdUQsQ0FBRixHQUFNLENBQU47SUFDQXZELENBQUMsQ0FBQ3dELENBQUYsR0FBTSxLQUFLOUMsV0FBTCxDQUFpQjhDLENBQXZCO0lBQ0F6RSxhQUFhLFdBQWIsQ0FBc0I2SixJQUF0QixDQUEyQnRKLGVBQWUsV0FBZixDQUF3QnFPLFNBQW5ELEVBQThELEtBQUs3RSxXQUFMLEdBQW1CbUIsR0FBbkIsQ0FBdUJqSyxDQUF2QixDQUE5RDtJQUNBLEtBQUs0TixzQkFBTDtJQUNBMU8sWUFBWSxXQUFaLENBQXFCbUcsUUFBckIsQ0FBOEJDLHVCQUE5QixDQUFzRCxLQUF0RCxFQUE2RCxHQUE3RDs7SUFDQSxJQUFJLEVBQUUsTUFBTSxLQUFLdkUsTUFBTCxDQUFZOEYsWUFBbEIsSUFBa0MsTUFBTSxLQUFLOUYsTUFBTCxDQUFZOEYsWUFBdEQsQ0FBSixFQUF5RTtNQUNyRSxLQUFLZ0gsZUFBTDtJQUNIOztJQUNELE9BQU8sQ0FBQyxDQUFSO0VBQ0gsQ0FYRDs7RUFZQXZOLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWXVMLGVBQVosR0FBOEIsWUFBWTtJQUN0QyxJQUFJLE1BQU0sS0FBSzlNLE1BQUwsQ0FBWStNLFNBQXRCLEVBQWlDO01BQzdCLElBQUl6TixDQUFDLEdBQUdiLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCc0ssY0FBekIsRUFBUjs7TUFDQSxJQUFJLEVBQUUxTixDQUFDLENBQUNnSSxNQUFGLElBQVksQ0FBZCxDQUFKLEVBQXNCO1FBQ2xCLElBQUkvSCxDQUFDLEdBQUdsQixTQUFTLFdBQVQsQ0FBa0I0TyxVQUFsQixDQUE2QixLQUFLak4sTUFBTCxDQUFZa04sVUFBWixDQUF1QixDQUF2QixDQUE3QixFQUF3RCxLQUFLbE4sTUFBTCxDQUFZa04sVUFBWixDQUF1QixDQUF2QixDQUF4RCxDQUFSO1FBQ0E1TyxZQUFZLFdBQVosQ0FBcUI2TyxXQUFyQixHQUFtQyxDQUFDLENBQXBDO1FBQ0FqUCxhQUFhLENBQUNrUCxZQUFkLENBQTJCOUksUUFBM0IsQ0FBb0MrSSxJQUFwQyxDQUNJeFAsVUFBVSxDQUFDMkssU0FBWCxDQUFxQjhFLFlBQXJCLENBQWtDNUUsT0FBbEMsQ0FBMENDLFVBQTFDLENBQXFENEUsYUFEekQsRUFFSTtVQUNJQyxRQUFRLEVBQUVsTyxDQURkO1VBRUltTyxXQUFXLEVBQUVsTztRQUZqQixDQUZKLEVBTUk7VUFDSW1PLGFBQWEsRUFBRSx5QkFBWTtZQUN2QnBQLFlBQVksV0FBWixDQUFxQjZPLFdBQXJCLEdBQW1DLENBQUMsQ0FBcEM7VUFDSDtRQUhMLENBTko7TUFZSDtJQUNKO0VBQ0osQ0FwQkQ7O0VBcUJBNU4sQ0FBQyxDQUFDZ0MsU0FBRixDQUFZb00sZUFBWixHQUE4QixVQUFVck8sQ0FBVixFQUFhO0lBQ3ZDLElBQUlDLENBQUo7O0lBQ0EsSUFBSSxFQUFFLEtBQUtLLGFBQUwsQ0FBbUJnRCxFQUFuQixJQUF5QixDQUEzQixDQUFKLEVBQW1DO01BQy9CLElBQUl0RCxDQUFDLEtBQUtYLFlBQVksQ0FBQ3NHLGVBQWIsQ0FBNkJDLElBQXZDLEVBQTZDO1FBQ3pDLElBQUlyRyxFQUFFLENBQUNzTSxPQUFILENBQVcsS0FBSy9LLFFBQWhCLENBQUosRUFBK0I7VUFDM0I7UUFDSDs7UUFDRCxJQUFJcUIsQ0FBQyxHQUFHckQsU0FBUyxXQUFULENBQWtCa0csUUFBbEIsQ0FBMkJrRCxHQUEzQixDQUErQnBKLFNBQVMsQ0FBQ3dQLE9BQVYsQ0FBa0IxSSxJQUFqRCxDQUFSOztRQUNBLElBQUksQ0FBQ3pELENBQUwsRUFBUTtVQUNKQSxDQUFDLEdBQUcxRCxRQUFRLENBQUM4SyxPQUFULENBQWlCQyxXQUFqQixDQUNBaEwsV0FBVyxDQUFDK1AsVUFBWixDQUF1QnZKLFFBQXZCLENBQWdDa0QsR0FBaEMsQ0FBb0MzSixVQUFVLENBQUMySyxTQUFYLENBQXFCQyxXQUFyQixDQUFpQ0MsT0FBakMsQ0FBeUNDLFVBQXpDLENBQW9EbUYsSUFBeEYsQ0FEQSxFQUVBclAsWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJxTCxVQUF6QixDQUFvQy9FLE1BRnBDLENBQUo7UUFJSDs7UUFDRCxLQUFLNUksUUFBTCxHQUFnQnFCLENBQWhCO1FBQ0FBLENBQUMsQ0FBQ3VILE1BQUYsR0FBV3ZLLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCL0MsV0FBcEM7UUFDQThCLENBQUMsQ0FBQ21LLE1BQUYsR0FBVyxLQUFLbEssSUFBTCxDQUFVa0ssTUFBckI7UUFDQW5LLENBQUMsQ0FBQ3dILFdBQUYsQ0FBYyxLQUFLbEIsV0FBTCxHQUFtQm1CLEdBQW5CLENBQXVCLEtBQUt2SixXQUFMLENBQWlCeUcsUUFBeEMsQ0FBZDtRQUNBM0UsQ0FBQyxDQUFDdU0sS0FBRixHQUFVLEtBQUtyTyxXQUFMLENBQWlCcU8sS0FBM0I7TUFDSCxDQWhCRCxNQWdCTztRQUNILElBQUkxTyxDQUFDLEtBQUtYLFlBQVksQ0FBQ3NHLGVBQWIsQ0FBNkJnSixTQUF2QyxFQUFrRDtVQUM5QyxJQUFJLE9BQU8sVUFBVTFPLENBQUMsR0FBRyxLQUFLRyxJQUFuQixLQUE0QixLQUFLLENBQUwsS0FBV0gsQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUFvREEsQ0FBQyxDQUFDMkwsU0FBN0QsQ0FBSixFQUE2RTtZQUN6RSxLQUFLZ0QsUUFBTCxDQUFjLElBQWQsRUFBb0IsQ0FBcEI7VUFDSDtRQUNKLENBSkQsTUFJTztVQUNILElBQUk1TyxDQUFDLEtBQUtYLFlBQVksQ0FBQ3NHLGVBQWIsQ0FBNkJFLE1BQXZDLEVBQStDO1lBQzNDLElBQUl0RyxFQUFFLENBQUNzTSxPQUFILENBQVcsS0FBSzlLLFVBQWhCLENBQUosRUFBaUM7Y0FDN0I7WUFDSDs7WUFDRCxJQUFJNUMsQ0FBQyxHQUFHVyxTQUFTLFdBQVQsQ0FBa0JrRyxRQUFsQixDQUEyQmtELEdBQTNCLENBQStCcEosU0FBUyxDQUFDd1AsT0FBVixDQUFrQnpJLE1BQWpELENBQVI7O1lBQ0EsSUFBSSxDQUFDMUgsQ0FBTCxFQUFRO2NBQ0pBLENBQUMsR0FBR00sUUFBUSxDQUFDOEssT0FBVCxDQUFpQkMsV0FBakIsQ0FDQWhMLFdBQVcsQ0FBQytQLFVBQVosQ0FBdUJ2SixRQUF2QixDQUFnQ2tELEdBQWhDLENBQ0kzSixVQUFVLENBQUMySyxTQUFYLENBQXFCQyxXQUFyQixDQUFpQ0MsT0FBakMsQ0FBeUNDLFVBQXpDLENBQW9Ed0YsTUFEeEQsQ0FEQSxFQUlBMVAsWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUJxTCxVQUF6QixDQUFvQy9FLE1BSnBDLENBQUo7WUFNSDs7WUFDRCxLQUFLM0ksVUFBTCxHQUFrQjVDLENBQWxCO1lBQ0FBLENBQUMsQ0FBQ3VMLE1BQUYsR0FBV3ZLLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCL0MsV0FBcEM7WUFDQWxDLENBQUMsQ0FBQ21PLE1BQUYsR0FBVyxLQUFLbEssSUFBTCxDQUFVa0ssTUFBckI7WUFDQW5PLENBQUMsQ0FBQ3dMLFdBQUYsQ0FBYyxLQUFLbEIsV0FBTCxHQUFtQm1CLEdBQW5CLENBQXVCLEtBQUt2SixXQUFMLENBQWlCeUcsUUFBeEMsQ0FBZDtZQUNBM0ksQ0FBQyxDQUFDdVEsS0FBRixHQUFVLEtBQUtyTyxXQUFMLENBQWlCcU8sS0FBM0I7VUFDSCxDQWxCRCxNQWtCTztZQUNILElBQUkxTyxDQUFDLEtBQUtYLFlBQVksQ0FBQ3NHLGVBQWIsQ0FBNkJHLFNBQXZDLEVBQWtEO2NBQzlDLElBQUlnSixDQUFDLEdBQUdoUSxTQUFTLFdBQVQsQ0FBa0JrRyxRQUFsQixDQUEyQmtELEdBQTNCLENBQStCcEosU0FBUyxDQUFDd1AsT0FBVixDQUFrQnhJLFNBQWpELENBQVI7O2NBQ0EsSUFBSSxDQUFDZ0osQ0FBTCxFQUFRO2dCQUNKQSxDQUFDLEdBQUdyUSxRQUFRLENBQUM4SyxPQUFULENBQWlCQyxXQUFqQixDQUNBaEwsV0FBVyxDQUFDK1AsVUFBWixDQUF1QnZKLFFBQXZCLENBQWdDa0QsR0FBaEMsQ0FDSTNKLFVBQVUsQ0FBQzJLLFNBQVgsQ0FBcUJDLFdBQXJCLENBQWlDQyxPQUFqQyxDQUF5Q0MsVUFBekMsQ0FBb0QwRixTQUR4RCxDQURBLEVBSUE1UCxZQUFZLFdBQVosQ0FBcUJpRSxHQUFyQixDQUF5QnFMLFVBQXpCLENBQW9DL0UsTUFKcEMsQ0FBSjtjQU1IOztjQUNELEtBQUsxSSxhQUFMLEdBQXFCOE4sQ0FBckI7Y0FDQUEsQ0FBQyxDQUFDcEYsTUFBRixHQUFXdkssWUFBWSxXQUFaLENBQXFCaUUsR0FBckIsQ0FBeUIvQyxXQUFwQztjQUNBeU8sQ0FBQyxDQUFDeEMsTUFBRixHQUFXLEtBQUtsSyxJQUFMLENBQVVrSyxNQUFyQjtjQUNBd0MsQ0FBQyxDQUFDbkYsV0FBRixDQUFjLEtBQUtsQixXQUFMLEdBQW1CbUIsR0FBbkIsQ0FBdUIsS0FBS3ZKLFdBQUwsQ0FBaUJ5RyxRQUF4QyxDQUFkO2NBQ0FnSSxDQUFDLENBQUNKLEtBQUYsR0FBVSxLQUFLck8sV0FBTCxDQUFpQnFPLEtBQTNCO1lBQ0gsQ0FmRCxNQWVPO2NBQ0gsSUFBSTFPLENBQUMsS0FBS1gsWUFBWSxDQUFDc0csZUFBYixDQUE2QkssSUFBdkMsRUFBNkM7Z0JBQ3pDLElBQUl6RyxFQUFFLENBQUNzTSxPQUFILENBQVcsS0FBSzVLLFFBQWhCLENBQUosRUFBK0I7a0JBQzNCO2dCQUNIOztnQkFDRCxJQUFJK04sQ0FBQyxHQUFHbFEsU0FBUyxXQUFULENBQWtCa0csUUFBbEIsQ0FBMkJrRCxHQUEzQixDQUErQnBKLFNBQVMsQ0FBQ3dQLE9BQVYsQ0FBa0J0SSxJQUFqRCxDQUFSOztnQkFDQSxJQUFJLENBQUNnSixDQUFMLEVBQVE7a0JBQ0pBLENBQUMsR0FBR3ZRLFFBQVEsQ0FBQzhLLE9BQVQsQ0FBaUJDLFdBQWpCLENBQ0FoTCxXQUFXLENBQUMrUCxVQUFaLENBQXVCdkosUUFBdkIsQ0FBZ0NrRCxHQUFoQyxDQUNJM0osVUFBVSxDQUFDMkssU0FBWCxDQUFxQkMsV0FBckIsQ0FBaUNDLE9BQWpDLENBQXlDQyxVQUF6QyxDQUFvRDRGLElBRHhELENBREEsRUFJQTlQLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCcUwsVUFBekIsQ0FBb0MvRSxNQUpwQyxDQUFKO2dCQU1IOztnQkFDRCxLQUFLekksUUFBTCxHQUFnQitOLENBQWhCO2dCQUNBQSxDQUFDLENBQUN0RixNQUFGLEdBQVd2SyxZQUFZLFdBQVosQ0FBcUJpRSxHQUFyQixDQUF5Qi9DLFdBQXBDO2dCQUNBMk8sQ0FBQyxDQUFDMUMsTUFBRixHQUFXLEtBQUtsSyxJQUFMLENBQVVrSyxNQUFyQjtnQkFDQTBDLENBQUMsQ0FBQ3JGLFdBQUYsQ0FBYyxLQUFLbEIsV0FBTCxHQUFtQm1CLEdBQW5CLENBQXVCLEtBQUt2SixXQUFMLENBQWlCeUcsUUFBeEMsQ0FBZDtnQkFDQWtJLENBQUMsQ0FBQ04sS0FBRixHQUFVLEtBQUtyTyxXQUFMLENBQWlCcU8sS0FBM0I7Y0FDSCxDQWxCRCxNQWtCTztnQkFDSCxJQUFJMU8sQ0FBQyxLQUFLWCxZQUFZLENBQUNzRyxlQUFiLENBQTZCeUgsT0FBdkMsRUFBZ0Q7a0JBQzVDLElBQUk3TixFQUFFLENBQUNzTSxPQUFILENBQVcsS0FBSzNLLFdBQWhCLENBQUosRUFBa0M7b0JBQzlCO2tCQUNIOztrQkFDRCxJQUFJZ08sQ0FBQyxHQUFHcFEsU0FBUyxXQUFULENBQWtCa0csUUFBbEIsQ0FBMkJrRCxHQUEzQixDQUErQnBKLFNBQVMsQ0FBQ3dQLE9BQVYsQ0FBa0JsQixPQUFqRCxDQUFSOztrQkFDQSxJQUFJLENBQUM4QixDQUFMLEVBQVE7b0JBQ0pBLENBQUMsR0FBR3pRLFFBQVEsQ0FBQzhLLE9BQVQsQ0FBaUJDLFdBQWpCLENBQ0FoTCxXQUFXLENBQUMrUCxVQUFaLENBQXVCdkosUUFBdkIsQ0FBZ0NrRCxHQUFoQyxDQUNJM0osVUFBVSxDQUFDMkssU0FBWCxDQUFxQkMsV0FBckIsQ0FBaUNDLE9BQWpDLENBQXlDQyxVQUF6QyxDQUFvRDhGLElBRHhELENBREEsRUFJQWhRLFlBQVksV0FBWixDQUFxQmlFLEdBQXJCLENBQXlCcUwsVUFBekIsQ0FBb0MvRSxNQUpwQyxDQUFKO2tCQU1IOztrQkFDRCxLQUFLeEksV0FBTCxHQUFtQmdPLENBQW5CO2tCQUNBQSxDQUFDLENBQUN4RixNQUFGLEdBQVd2SyxZQUFZLFdBQVosQ0FBcUJpRSxHQUFyQixDQUF5Qi9DLFdBQXBDO2tCQUNBNk8sQ0FBQyxDQUFDNUMsTUFBRixHQUFXLEtBQUtsSyxJQUFMLENBQVVrSyxNQUFyQjtrQkFDQTRDLENBQUMsQ0FBQ3ZGLFdBQUYsQ0FBYyxLQUFLbEIsV0FBTCxHQUFtQm1CLEdBQW5CLENBQXVCLEtBQUt2SixXQUFMLENBQWlCeUcsUUFBeEMsQ0FBZDtrQkFDQW9JLENBQUMsQ0FBQ1IsS0FBRixHQUFVLEtBQUtyTyxXQUFMLENBQWlCcU8sS0FBM0I7Z0JBQ0g7Y0FDSjtZQUNKO1VBQ0o7UUFDSjtNQUNKO0lBQ0o7RUFDSixDQXhHRDs7RUF5R0F6TyxDQUFDLENBQUNnQyxTQUFGLENBQVlrTCxhQUFaLEdBQTRCLFVBQVVuTixDQUFWLEVBQWE7SUFDckMsSUFBSUMsQ0FBSjs7SUFDQSxJQUFJRCxDQUFDLEtBQUtYLFlBQVksQ0FBQ3NHLGVBQWIsQ0FBNkJDLElBQW5DLElBQTJDLEtBQUs5RSxRQUFwRCxFQUE4RDtNQUMxRGhDLFNBQVMsV0FBVCxDQUFrQmtHLFFBQWxCLENBQTJCb0ssR0FBM0IsQ0FBK0J0USxTQUFTLENBQUN3UCxPQUFWLENBQWtCMUksSUFBakQsRUFBdUQsS0FBSzlFLFFBQTVEO01BQ0EsS0FBS0EsUUFBTCxHQUFnQixJQUFoQjtJQUNILENBSEQsTUFHTztNQUNILElBQUlkLENBQUMsS0FBS1gsWUFBWSxDQUFDc0csZUFBYixDQUE2QmdKLFNBQXZDLEVBQWtEO1FBQzlDLElBQUl4TSxDQUFDLEdBQUksS0FBS2EsS0FBTCxHQUFhLEtBQUsxQyxhQUFMLENBQW1CeUMsU0FBakMsR0FBOEMsS0FBS3hDLFNBQTNEOztRQUNBLElBQUksQ0FBQyxVQUFVTixDQUFDLEdBQUcsS0FBS0csSUFBbkIsS0FBNEIsS0FBSyxDQUFMLEtBQVdILENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLENBQUMsQ0FBQzJMLFNBQXZELEtBQXFFLENBQXpFLEVBQTRFO1VBQ3hFLEtBQUtnRCxRQUFMLENBQWMsSUFBZCxFQUFvQnpNLENBQXBCO1FBQ0g7TUFDSixDQUxELE1BS087UUFDSG5DLENBQUMsS0FBS1gsWUFBWSxDQUFDc0csZUFBYixDQUE2QkUsTUFBbkMsSUFBNkMsS0FBSzlFLFVBQWxELElBQ09qQyxTQUFTLFdBQVQsQ0FBa0JrRyxRQUFsQixDQUEyQm9LLEdBQTNCLENBQStCdFEsU0FBUyxDQUFDd1AsT0FBVixDQUFrQnpJLE1BQWpELEVBQXlELEtBQUs5RSxVQUE5RCxHQUNBLEtBQUtBLFVBQUwsR0FBa0IsSUFGekIsSUFHTWYsQ0FBQyxLQUFLWCxZQUFZLENBQUNzRyxlQUFiLENBQTZCRyxTQUFuQyxJQUFnRCxLQUFLOUUsYUFBckQsSUFDQ2xDLFNBQVMsV0FBVCxDQUFrQmtHLFFBQWxCLENBQTJCb0ssR0FBM0IsQ0FBK0J0USxTQUFTLENBQUN3UCxPQUFWLENBQWtCeEksU0FBakQsRUFBNEQsS0FBSzlFLGFBQWpFLEdBQ0EsS0FBS0EsYUFBTCxHQUFxQixJQUZ0QixJQUdBaEIsQ0FBQyxLQUFLWCxZQUFZLENBQUNzRyxlQUFiLENBQTZCSyxJQUFuQyxJQUEyQyxLQUFLL0UsUUFBaEQsSUFDQ25DLFNBQVMsV0FBVCxDQUFrQmtHLFFBQWxCLENBQTJCb0ssR0FBM0IsQ0FBK0J0USxTQUFTLENBQUN3UCxPQUFWLENBQWtCdEksSUFBakQsRUFBdUQsS0FBSy9FLFFBQTVELEdBQXdFLEtBQUtBLFFBQUwsR0FBZ0IsSUFEekYsSUFFQWpCLENBQUMsS0FBS1gsWUFBWSxDQUFDc0csZUFBYixDQUE2QnlILE9BQW5DLElBQ0EsS0FBS2xNLFdBREwsS0FFQ3BDLFNBQVMsV0FBVCxDQUFrQmtHLFFBQWxCLENBQTJCb0ssR0FBM0IsQ0FBK0J0USxTQUFTLENBQUN3UCxPQUFWLENBQWtCbEIsT0FBakQsRUFBMEQsS0FBS2xNLFdBQS9ELEdBQ0EsS0FBS0EsV0FBTCxHQUFtQixJQUhwQixDQVJOO01BWUg7SUFDSjtFQUNKLENBMUJEOztFQTJCQWpCLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWVksV0FBWixHQUEwQixVQUFVN0MsQ0FBVixFQUFhO0lBQ25DLEtBQUtRLE1BQUwsR0FBYyxDQUFDLENBQWY7SUFDQSxLQUFLSyxZQUFMLENBQWtCbUgsTUFBbEIsR0FBMkIsQ0FBM0I7SUFDQSxLQUFLMUgsYUFBTCxDQUFtQjZMLEtBQW5CO0lBQ0EsS0FBS3ZLLFlBQUwsQ0FBa0J1SyxLQUFsQjs7SUFDQSxJQUFJbk0sQ0FBSixFQUFPO01BQ0gsS0FBS0ksSUFBTCxDQUFVd0wsU0FBVixHQUFzQixLQUFLckwsU0FBM0I7TUFDQSxLQUFLSCxJQUFMLENBQVUrRCxhQUFWLENBQXdCLEtBQXhCLEVBQStCLENBQS9CO0lBQ0g7O0lBQ0QsS0FBSzFELFVBQUwsR0FBa0IsR0FBbEI7SUFDQSxLQUFLVSxRQUFMLEdBQWdCLENBQUMsQ0FBakI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7O0lBQ0EsSUFBSSxLQUFLaEIsSUFBVCxFQUFlO01BQ1gsS0FBS3NCLEtBQUwsR0FBYSxDQUFiO01BQ0EsS0FBS3RCLElBQUwsQ0FBVWdDLElBQVYsQ0FBZTBKLE9BQWYsR0FBeUIsQ0FBekI7SUFDSDtFQUNKLENBaEJEOztFQWlCQTdMLENBQUMsQ0FBQ2dDLFNBQUYsQ0FBWTJNLFFBQVosR0FBdUIsVUFBVTVPLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUNuQyxJQUFJLENBQUMsS0FBS0ssYUFBTCxDQUFtQjhELEtBQXhCLEVBQStCO01BQzNCLEtBQUtoRCxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7TUFDQSxLQUFLaU8sVUFBTCxDQUFnQixLQUFLdkMsVUFBckI7O01BQ0EsSUFBSSxLQUFLMU0sSUFBVCxFQUFlO1FBQ1gsS0FBS0EsSUFBTCxDQUFVa1AsR0FBVixDQUFjL00sV0FBVyxDQUFDeUssV0FBWixDQUF3QkMsUUFBdEM7UUFDQSxLQUFLN00sSUFBTCxDQUFVd0wsU0FBVixHQUFzQjNMLENBQXRCOztRQUNBLElBQUlELENBQUosRUFBTztVQUNILEtBQUtJLElBQUwsQ0FBVStELGFBQVYsQ0FBd0JuRSxDQUF4QixFQUEyQixDQUEzQjtRQUNIO01BQ0o7SUFDSjtFQUNKLENBWkQ7O0VBYUEsT0FBT3VQLFVBQVUsQ0FBQyxDQUFDOVAsQ0FBRCxDQUFELEVBQU1RLENBQU4sQ0FBakI7QUFDSCxDQS9yQk8sQ0ErckJMN0IsT0FBTyxDQUFDb1IsT0EvckJILENBQVI7O0FBZ3NCQUMsT0FBTyxXQUFQLEdBQWtCMVAsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJG9iamVjdCA9IHJlcXVpcmUoXCIuL09iamVjdFwiKTtcclxudmFyICRhc3NldHNMb2FkZXIgPSByZXF1aXJlKFwiLi9Bc3NldHNMb2FkZXJcIik7XHJcbnZhciAkYXNzZXRzTWFwID0gcmVxdWlyZShcIi4vQXNzZXRzTWFwXCIpO1xyXG52YXIgJHJlc01hbmFnZXIgPSByZXF1aXJlKFwiLi9SZXNNYW5hZ2VyXCIpO1xyXG52YXIgJHJlc1V0aWwgPSByZXF1aXJlKFwiLi9SZXNVdGlsXCIpO1xyXG52YXIgJGV2ZW50TWFuYWdlciA9IHJlcXVpcmUoXCIuL0V2ZW50TWFuYWdlclwiKTtcclxudmFyICRjb21wb25lbnRQcm94eSA9IHJlcXVpcmUoXCIuL0NvbXBvbmVudFByb3h5XCIpO1xyXG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcclxudmFyICRyZW1vdGVBdWRpbyA9IHJlcXVpcmUoXCIuL1JlbW90ZUF1ZGlvXCIpO1xyXG52YXIgJGdhbWVQb29sID0gcmVxdWlyZShcIi4vR2FtZVBvb2xcIik7XHJcbnZhciAkc2VlZFV0aWwgPSByZXF1aXJlKFwiLi9TZWVkVXRpbFwiKTtcclxudmFyICRnbG9iYWxQYXJhbSA9IHJlcXVpcmUoXCIuL0dsb2JhbFBhcmFtXCIpO1xyXG52YXIgJGxvY2FsRXZlbnROYW1lID0gcmVxdWlyZShcIi4vTG9jYWxFdmVudE5hbWVcIik7XHJcbnZhciAkYmFzZUJ1bGxldCA9IHJlcXVpcmUoXCIuL0Jhc2VCdWxsZXRcIik7XHJcbnZhciAkZ2FtZUNvbnRleHQgPSByZXF1aXJlKFwiLi9HYW1lQ29udGV4dFwiKTtcclxudmFyICRnYW1lR2VtSW5mbyA9IHJlcXVpcmUoXCIuL0dhbWVHZW1JbmZvXCIpO1xyXG52YXIgJGVuZW15U3RhdHVzID0gcmVxdWlyZShcIi4vRW5lbXlTdGF0dXNcIik7XHJcbnZhciBBID0gY2MuX2RlY29yYXRvcjtcclxudmFyIFMgPSBBLmNjY2xhc3M7XHJcbnZhciBDID0gKEEucHJvcGVydHksIG5ldyBjYy5WZWMzKCkpO1xyXG52YXIgSSA9IG5ldyBjYy5WZWMzKCk7XHJcbnZhciBQID0gKGZ1bmN0aW9uICh0KSB7XHJcbiAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xyXG4gICAgICAgIGUuc2tpbiA9IG51bGw7XHJcbiAgICAgICAgZS5kZWJ1ZmZMYXllciA9IG51bGw7XHJcbiAgICAgICAgZS5zdGF0dXNNYW5hZ2VyID0gbnVsbDtcclxuICAgICAgICBlLmN1cnJSYXRpbyA9IDE7XHJcbiAgICAgICAgZS5pc0Rvb3IgPSAhMTtcclxuICAgICAgICBlLnJlc2lkdWVEaXMgPSAwO1xyXG4gICAgICAgIGUuY29uZmlnID0gbnVsbDtcclxuICAgICAgICBlLmxlZnRDRFRpbWUgPSAwO1xyXG4gICAgICAgIGUuc29ydFRlbXAgPSAwO1xyXG4gICAgICAgIGUubGFzdEF0a1RpbWVzID0gW107XHJcbiAgICAgICAgZS5idXJuQW5pbSA9IG51bGw7XHJcbiAgICAgICAgZS5mcmVlemVBbmltID0gbnVsbDtcclxuICAgICAgICBlLnBhcmFseXNpc0FuaW0gPSBudWxsO1xyXG4gICAgICAgIGUuc3R1bkFuaW0gPSBudWxsO1xyXG4gICAgICAgIGUucmVjb3ZlckFuaW0gPSBudWxsO1xyXG4gICAgICAgIGUuaXNDYW5BdGsgPSAhMTtcclxuICAgICAgICBlLmlzQXR0YWNraW5nID0gITE7XHJcbiAgICAgICAgZS5hdGtBZGRUZW1wID0gMDtcclxuICAgICAgICBlLkF2b2lkX2luanVyeSA9IDA7XHJcbiAgICAgICAgZS5jcml0aWNhbEhpdCA9IDU7XHJcbiAgICAgICAgZS5hdGtSYW5nZSA9IDA7XHJcbiAgICAgICAgZS5kdXJhdGlvbiA9IDAuMztcclxuICAgICAgICBlLl90aW1lID0gMDtcclxuICAgICAgICBlLmxvdCA9IDA7XHJcbiAgICAgICAgZS5kaWVDYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZS5pZCA9IDA7XHJcbiAgICAgICAgZS5pc0NyaXRpY2FsSGl0ID0gITE7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBlLnByb3RvdHlwZS5pbml0RW5lbXkgPSBmdW5jdGlvbiAodCwgZSwgaSkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IGkpIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5za2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNraW5cIikuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWQgPSArKyRnbG9iYWxQYXJhbS5kZWZhdWx0Lmdsb2JJRDtcclxuICAgICAgICB0aGlzLmRlYnVmZkxheWVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZGVidWZmXCIpO1xyXG4gICAgICAgIHRoaXMubG90ID0gaTtcclxuICAgICAgICB0aGlzLkF2b2lkX2luanVyeSA9IGU7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0O1xyXG4gICAgICAgICRjb21wb25lbnRQcm94eS5kZWZhdWx0Lklucy5wdXNoT2JqKHRoaXMpO1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0dXNNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlciA9IG5ldyAkZW5lbXlTdGF0dXMuZGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyRGVidWZmQW5pbSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXMoITEpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5wcm94eUVuZW15ID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuaW5pdFNwZWVkID0gdGhpcy5jb25maWcuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuY29uZmlnLnNwZWVkO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLTE7XHJcbiAgICAgICAgdmFyIG8gPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0Q3VyckVuZW15QWRkKHRoaXMuY29uZmlnLmlkKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuaHAgPSBNYXRoLmNlaWwodGhpcy5jb25maWcuSFAgKiAoMSArIG9bMF0pKTtcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuaW5pdEhwID0gdGhpcy5zdGF0dXNNYW5hZ2VyLmhwO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5hdGsgPSBNYXRoLmNlaWwodGhpcy5jb25maWcuYXRrICogKDEgKyBvWzFdKSk7XHJcbiAgICAgICAgdGhpcy5jcml0aWNhbEhpdCA9IDAuMDU7XHJcbiAgICAgICAgaWYgKCRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLkNyaXRpY2FsSGl0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyaXRpY2FsSGl0ID0gMC4wNSArICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5Dcml0aWNhbEhpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLm9uRG9vciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdCAmJiAhdGhpcy5pc0Rvb3JcclxuICAgICAgICAgICAgPyAoKHRoaXMubGVmdENEVGltZSA9IHRoaXMuY29uZmlnLmF0a3NwZWVkKSxcclxuICAgICAgICAgICAgICAodGhpcy5pc0Rvb3IgPSAhMCksXHJcbiAgICAgICAgICAgICAgKHRoaXMucmVzaWR1ZURpcyA9IDApLFxyXG4gICAgICAgICAgICAgIHRoaXMuc2tpbi5wbGF5QW5pbWF0aW9uKFwic3RhbmRcIiwgMCksXHJcbiAgICAgICAgICAgICAgKHRoaXMuaXNDYW5BdGsgPSAhMCkpXHJcbiAgICAgICAgICAgIDogIXQgJiYgdGhpcy5pc0Rvb3IgJiYgKCh0aGlzLmlzRG9vciA9ICExKSwgKHRoaXMuaXNDYW5BdGsgPSAhMSkpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmlzRGllID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWU7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuaGFzRGVidWZmID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNNYW5hZ2VyLmRlYnVmZlR5cGVNYXAuaGFzKHQpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmdldExhc3RBdGtUaW1lID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0QXRrVGltZXMgPyB0aGlzLmxhc3RBdGtUaW1lc1t0XSA6IDA7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc2V0TGFzdEF0a1RpbWUgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5sYXN0QXRrVGltZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0QXRrVGltZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0QXRrVGltZXNbdF0gPSBlO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN1ZmZlckF0ayA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzTWFuYWdlci5pc0RpZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNDcml0aWNhbEhpdCA9ICExO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKCRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLk1heEJsb29kQ3JpdGljYWwpICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuaW5pdEhwID09PSB0aGlzLnN0YXR1c01hbmFnZXIuaHApIHx8XHJcbiAgICAgICAgICAgICRzZWVkVXRpbC5kZWZhdWx0LnByb2JhYmlsaXR5KDFlMyAqIHRoaXMuY3JpdGljYWxIaXQsIDFlMylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NyaXRpY2FsSGl0ID0gITA7XHJcbiAgICAgICAgICAgIHQuYXRrID0gTWF0aC5jZWlsKHQuYXRrICogKDEuNSArICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5Dcml0aWNhbEh1cnQpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlID0gdGhpcy5hdGtDYWN1bGF0ZVByZSh0KTtcclxuICAgICAgICB0LmF0ayA9IE1hdGguY2VpbCh0LmF0ayAqICgxICsgZSkpO1xyXG4gICAgICAgIHRoaXMuYXRrQ2FjdWxhdGVQb3N0KHQpO1xyXG4gICAgICAgIDEgPT09IHQuaWRcclxuICAgICAgICAgICAgPyAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wbGF5RWZmZWN0TXVzaWNSZXN0cmljdChcImd1bmhpdFwiLCAwLjMpXHJcbiAgICAgICAgICAgIDogNDEgPT09IHQuaWQgJiYgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljUmVzdHJpY3QoXCJpY2VoaXRcIiwgMC4zKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhIXRoaXMuc3VmZmVyQXR0YWNrKHQuaWQsIHQuYXRrKSAmJlxyXG4gICAgICAgICAgICAodCAmJiB0LmJ1bGxldEJ1ZmYgPT09ICRiYXNlQnVsbGV0LkJ1bGxldEJ1ZmYuYnVybl9ib29tICYmIHRoaXMuY3JlYXRlQm9vbSgpLCAhMClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmF0a0NhY3VsYXRlR2VtID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLkVuZW15NzBIdXJ0KSAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuaHAgPj0gMC43ICogdGhpcy5zdGF0dXNNYW5hZ2VyLmluaXRIcFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmF0a0FkZFRlbXAgKz0gJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5nZXQxKCRnYW1lR2VtSW5mby5HZW1UeXBlLkVuZW15NzBIdXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLkJlZm9yNUh1cnQpICYmIHRoaXMubG90IDw9IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdGtBZGRUZW1wICs9ICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5CZWZvcjVIdXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmhhc0dlbSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5EZWJ1ZmZFbmVteUh1cnQpICYmXHJcbiAgICAgICAgICAgICh0aGlzLnN0YXR1c01hbmFnZXIuZGVidWZmVHlwZU1hcC5oYXMoJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5CVVJOKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLmRlYnVmZlR5cGVNYXAuaGFzKCRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuRlJFRVpFKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLmRlYnVmZlR5cGVNYXAuaGFzKCRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUEFSQUxZU0lTKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLmRlYnVmZlR5cGVNYXAuaGFzKCRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuU0xPVykgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5kZWJ1ZmZUeXBlTWFwLmhhcygkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlNUVU4pKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmF0a0FkZFRlbXAgKz0gJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5nZXQxKCRnYW1lR2VtSW5mby5HZW1UeXBlLkRlYnVmZkVuZW15SHVydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5oYXNHZW0oJGdhbWVHZW1JbmZvLkdlbVR5cGUuQm9vbUh1cnQpICYmXHJcbiAgICAgICAgICAgIHQuc2tpbGxTcGVjaWFsaXR5cy5pbmNsdWRlcygkYmFzZUJ1bGxldC5CdWxsZXRTcGVjaWFsaXR5LmJvb20pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrQWRkVGVtcCArPSAkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmdldDEoJGdhbWVHZW1JbmZvLkdlbVR5cGUuQm9vbUh1cnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5oYXNHZW0oJGdhbWVHZW1JbmZvLkdlbVR5cGUuV2FsbERlZkFuZEVuZW15QWRkSHVydCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hdGtBZGRUZW1wICs9ICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MigkZ2FtZUdlbUluZm8uR2VtVHlwZS5XYWxsRGVmQW5kRW5lbXlBZGRIdXJ0KVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAxID09PSB0aGlzLmNvbmZpZy5tb25zdGVyX3R5cGUgJiZcclxuICAgICAgICAgICAgJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5oYXNHZW0oJGdhbWVHZW1JbmZvLkdlbVR5cGUuS2lsbEVuZW15KSAmJlxyXG4gICAgICAgICAgICAkc2VlZFV0aWwuZGVmYXVsdC5wcm9iYWJpbGl0eSgxZTMgKiAkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmdldDEoJGdhbWVHZW1JbmZvLkdlbVR5cGUuS2lsbEVuZW15KSwgMWUzKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0LmF0ayA9IHRoaXMuc3RhdHVzTWFuYWdlci5ocDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLlNraWxsQWRkSHVydCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hdGtBZGRUZW1wICs9XHJcbiAgICAgICAgICAgICAgICAkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmdldDEoJGdhbWVHZW1JbmZvLkdlbVR5cGUuU2tpbGxBZGRIdXJ0KSAqXHJcbiAgICAgICAgICAgICAgICAoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnNraWxsSW5mby5za2lsbENvdW50ID4gNCA/IDQgOiAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuc2tpbGxJbmZvLnNraWxsQ291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yZXNpZHVlRGlzIDw9IDQwMCAmJiAkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmhhc0dlbSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5EaXN0YW5jZUh1cnRBZGQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrQWRkVGVtcCArPSAkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmdldDEoJGdhbWVHZW1JbmZvLkdlbVR5cGUuRGlzdGFuY2VIdXJ0QWRkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAxID09PSB0aGlzLmNvbmZpZy5tb25zdGVyX3R5cGUgJiZcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uLnkgPD0gNjUwICYmXHJcbiAgICAgICAgICAgICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLlRyYW5zZmVyQ3JlYXRlUG9pbnQpICYmXHJcbiAgICAgICAgICAgICRzZWVkVXRpbC5kZWZhdWx0LnByb2JhYmlsaXR5KFxyXG4gICAgICAgICAgICAgICAgMWUzICogJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5nZXQxKCRnYW1lR2VtSW5mby5HZW1UeXBlLlRyYW5zZmVyQ3JlYXRlUG9pbnQpLFxyXG4gICAgICAgICAgICAgICAgMWUzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIGUgPSA3MjAgLSB0aGlzLm5vZGUucG9zaXRpb24ueTtcclxuICAgICAgICAgICAgaWYgKGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1ZmZlckRlYnVmZih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5CQUNLLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVMZWZ0OiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLldhbGxBZGRBdGspICYmXHJcbiAgICAgICAgICAgICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MigkZ2FtZUdlbUluZm8uR2VtVHlwZS5XYWxsQWRkQXRrKVswXSAqXHJcbiAgICAgICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZG9vckluaXRIcCA+XHJcbiAgICAgICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZG9vckxlZnRIcFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmF0a0FkZFRlbXAgKz0gJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5nZXQyKCRnYW1lR2VtSW5mby5HZW1UeXBlLldhbGxBZGRBdGspWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0NyaXRpY2FsSGl0ICYmICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLkNyaXRpY2FsQURESHVydCkpIHtcclxuICAgICAgICAgICAgdC5hdGsgKz0gTWF0aC5jZWlsKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLmluaXRIcCAqICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5Dcml0aWNhbEFEREh1cnQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmhhc0dlbSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5BdGtGbG9hdCkpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAkc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21GbG9hdChcclxuICAgICAgICAgICAgICAgIC0wLjMsXHJcbiAgICAgICAgICAgICAgICAkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmdldDEoJGdhbWVHZW1JbmZvLkdlbVR5cGUuQXRrRmxvYXQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdC5hdGsgKz0gTWF0aC5jZWlsKC1pICogdC5hdGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXRrQWRkVGVtcCArPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hdGtDYWN1bGF0ZVBvc3QgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICgkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmhhc0dlbSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5BZGRNYXhIdXJ0KSkge1xyXG4gICAgICAgICAgICB0LmF0ayArPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuaW5pdEhwICogJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5nZXQxKCRnYW1lR2VtSW5mby5HZW1UeXBlLkFkZE1heEh1cnQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0LmJ1bGxldEJ1ZmYgJiYgdC5idWxsZXRCdWZmID09PSAkYmFzZUJ1bGxldC5CdWxsZXRCdWZmLmF0a19saWZlKSB7XHJcbiAgICAgICAgICAgIHQuYXRrICs9IE1hdGguY2VpbCh0aGlzLnN0YXR1c01hbmFnZXIuaW5pdEhwICogdC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmF0a0NhY3VsYXRlUHJlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9ICExO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5oYXNHZW0oJGdhbWVHZW1JbmZvLkdlbVR5cGUuSWdub3JlUmVodXJ0KSAmJlxyXG4gICAgICAgICAgICAkc2VlZFV0aWwuZGVmYXVsdC5wcm9iYWJpbGl0eShcclxuICAgICAgICAgICAgICAgIDFlMyAqICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5JZ25vcmVSZWh1cnQpLFxyXG4gICAgICAgICAgICAgICAgMWUzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZSA9ICEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0a0FkZFRlbXAgPSAwO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdC5idWxsZXRCdWZmICYmXHJcbiAgICAgICAgICAgICgodC5idWxsZXRCdWZmID09PSAkYmFzZUJ1bGxldC5CdWxsZXRCdWZmLmZyZWV6ZV9kYW1hZ2UgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5kZWJ1ZmZUeXBlTWFwLmhhcygkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkZSRUVaRSkpIHx8XHJcbiAgICAgICAgICAgICAgICAodC5idWxsZXRCdWZmID09PSAkYmFzZUJ1bGxldC5CdWxsZXRCdWZmLnBhcmFseXNpc19kYW1hZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuZGVidWZmVHlwZU1hcC5oYXMoJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5QQVJBTFlTSVMpKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5hdGtBZGRUZW1wICs9IHQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5za2lsbFNwZWNpYWxpdHlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuc3BlY2lhbGl0eUF0a0FkZC5oYXModC5za2lsbFNwZWNpYWxpdHlzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnN0YXR1c01hbmFnZXIuc3BlY2lhbGl0eUF0a0FkZC5nZXQodC5za2lsbFNwZWNpYWxpdHlzW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmIChvIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0LmF0ayA9IE1hdGguY2VpbCgoMSArIG8pICogdC5hdGspO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0a0FkZFRlbXAgKz0gbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF0a0NhY3VsYXRlR2VtKHQpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuYWxsRGFtYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmF0a0FkZFRlbXAgKz0gdGhpcy5zdGF0dXNNYW5hZ2VyLmFsbERhbWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXRrQWRkVGVtcDtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdWZmZXJBdHRhY2sgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGUgPSBNYXRoLmZsb29yKGUgKiAoMSAtIHRoaXMuQXZvaWRfaW5qdXJ5KSkpID4gMCAmJiB0ID4gMCkge1xyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuaHVydFN0YXRpc3RpY3ModCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpID0gdGhpcy5zdGF0dXNNYW5hZ2VyLmhwO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5ocCAtPSBlO1xyXG4gICAgICAgIGlmICgtMSAhPT0gdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lID0gMC4zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5nZXRBbmltUG9zKCk7XHJcbiAgICAgICAgICAgIC0xICE9PSB0ICYmIHRoaXMuaXNDcml0aWNhbEhpdFxyXG4gICAgICAgICAgICAgICAgPyAkZXZlbnRNYW5hZ2VyLmRlZmF1bHQuc2VuZCgkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5IVVJUX0FOSU0sIG8sIGUsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICA6ICRldmVudE1hbmFnZXIuZGVmYXVsdC5zZW5kKCRsb2NhbEV2ZW50TmFtZS5kZWZhdWx0LkhVUlRfQU5JTSwgbywgZSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c01hbmFnZXIuaHAgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5ocCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpID4gMCAmJiB0aGlzLnN0YXR1c01hbmFnZXIuaHAgPD0gMDtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5nZXRBbmltUG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIEkueCA9IHQueDtcclxuICAgICAgICAyID09PSB0aGlzLmNvbmZpZy5hdGt0eXBlID8gKEkueSA9IHQueSkgOiAoSS55ID0gdC55ICsgdGhpcy5za2luLm5vZGUueSArIHRoaXMuc2tpbi5ub2RlLmhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIEk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY3JlYXRlQm9vbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRCdXR0bGVQb29sKCRiYXNlQnVsbGV0LkJ1bGxldFR5cGUuZW5lbXlfYm9vbSk7XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gJGFzc2V0c0xvYWRlci5kZWZhdWx0Lmluc3RhbmNlLmdldFJlcyhcclxuICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQnVuZGxlTmFtZXMuR2FtZSxcclxuICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5CdWxsZXRfMTZcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdCA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUoZSwgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmxvd0J1bGxldExheWVyLnBhcmVudCkuZ2V0Q29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgJGJhc2VCdWxsZXQuZGVmYXVsdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0LnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKS5hZGQoY2MudjMoMCwgMzApKSk7XHJcbiAgICAgICAgdC5pbml0QnV0dGxlKG51bGwsIDIzKTtcclxuICAgICAgICB0Lmluc2VydCgkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMubG93QnVsbGV0TGF5ZXIpO1xyXG4gICAgICAgIHQuc2V0QW5pbWF0aW9uKG51bGwpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnN1ZmZlckRlYnVmZiA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLmFkZERlYnVmZih0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVtb3ZlRGVidWZmID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuY2xlYXJEZWJ1ZmYodCwgZSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuYWRkQWRzb3JiID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAoMSA9PT0gdGhpcy5zdGF0dXNNYW5hZ2VyLmN1cnJBZHNvcmJEaXIucHVzaCh0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1ZmZlckRlYnVmZih7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkFEU09SQixcclxuICAgICAgICAgICAgICAgIHRpbWVMZWZ0OiAtMSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5yZW1vdmVBZHNvcmIgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICgwICE9PSB0aGlzLnN0YXR1c01hbmFnZXIuY3VyckFkc29yYkRpci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnN0YXR1c01hbmFnZXIuY3VyckFkc29yYkRpci5pbmRleE9mKHQpO1xyXG4gICAgICAgICAgICBpZiAoLTEgIT09IGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5jdXJyQWRzb3JiRGlyLnNwbGljZShlLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy5zdGF0dXNNYW5hZ2VyLmN1cnJBZHNvcmJEaXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIuY2xlYXJEZWJ1ZmYoJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5BRFNPUkIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmFkZERpZUNhbGxiYWNrID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0aGlzLmRpZUNhbGxiYWNrcy5zZXQoZSwge1xyXG4gICAgICAgICAgICBjYWxsYmFjazogdCxcclxuICAgICAgICAgICAgdGFyZ2V0OiBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVtb3ZlRGllQ2FsbGJhY2sgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuZGllQ2FsbGJhY2tzLmRlbGV0ZSh0KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS51cGRhdGVGcmFtZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXR1c01hbmFnZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgMSA9PT0gdGhpcy5jb25maWcuYXRrdHlwZVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLm9uRG9vcih0aGlzLmdldFBvc2l0aW9uKCkueSA8PSAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5kb29yWSlcclxuICAgICAgICAgICAgICAgIDogdGhpcy5vbkRvb3IodGhpcy5yZXNpZHVlRGlzIDw9IHRoaXMuYXRrUmFuZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTdWZmZXJBdGtBbmltKHQpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1c01hbmFnZXIudXBkYXRlRih0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDYW5BdGsgJiYgIXRoaXMuaXNBdHRhY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdENEVGltZSAtPSB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdENEVGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q0RUaW1lID0gdGhpcy5jb25maWcuYXRrc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXNNYW5hZ2VyLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5pc0RpZSA9ICEwO1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0LnNlbmQoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuQUREX0VYUCwgdGhpcy5jb25maWcuRVgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGllQW5pbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVidWZmTGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIEMueCA9IHRoaXMuZ2V0UG9zaXRpb24oKS54ICsgdGhpcy5kZWJ1ZmZMYXllci5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICAgICAgQy55ID0gdGhpcy5nZXRQb3NpdGlvbigpLnkgKyB0aGlzLmRlYnVmZkxheWVyLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5idXJuQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVybkFuaW0uc2V0UG9zaXRpb24oQyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWNvdmVyQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckFuaW0uc2V0UG9zaXRpb24oQyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmVlemVBbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmVlemVBbmltLnNldFBvc2l0aW9uKEMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYWx5c2lzQW5pbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYWx5c2lzQW5pbS5zZXRQb3NpdGlvbihDKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0dW5BbmltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVuQW5pbS5zZXRQb3NpdGlvbihDKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEb29yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkUmF0aW9SaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnNwZWVkUmF0aW9SaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdhbWVSYXRpbyAhPT0gdGhpcy5jdXJyUmF0aW8pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyUmF0aW8gPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvO1xyXG4gICAgICAgICAgICB2YXIgdCA9ICh0aGlzLnNwZWVkIC8gdGhpcy5zdGF0dXNNYW5hZ2VyLmluaXRTcGVlZCkgKiB0aGlzLmN1cnJSYXRpbztcclxuICAgICAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgwICE9PSB0aGlzLnNraW4udGltZVNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraW4udGltZVNjYWxlID0gdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5wbGF5U3VmZmVyQXRrQW5pbSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5za2luKSAmJiB0aGlzLl90aW1lID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lIC09IHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90aW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLl90aW1lIDwgMCA/IDAgOiB0aGlzLl90aW1lO1xyXG4gICAgICAgICAgICB2YXIgZSA9IE1hdGguY2VpbCgoMjU1ICogdGhpcy5fdGltZSkgLyB0aGlzLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGUgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNraW4ubm9kZS5vcGFjaXR5ID0gZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVtb3ZlU2VsZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5oYXNHZW0oJGdhbWVHZW1JbmZvLkdlbVR5cGUuS2lsbEVuZW15QWRkV2FsbEJsb29kMSkpIHtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0LnNlbmQoXHJcbiAgICAgICAgICAgICAgICAkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5BRERfSFBfRE9PUixcclxuICAgICAgICAgICAgICAgICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5LaWxsRW5lbXlBZGRXYWxsQmxvb2QxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm1vbnN0ZXJfdHlwZSA+IDEgJiZcclxuICAgICAgICAgICAgJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5oYXNHZW0oJGdhbWVHZW1JbmZvLkdlbVR5cGUuS2lsbEVuZW15QWRkV2FsbEJsb29kMilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0LnNlbmQoXHJcbiAgICAgICAgICAgICAgICAkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5BRERfSFBfRE9PUixcclxuICAgICAgICAgICAgICAgICRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuZ2V0MSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5LaWxsRW5lbXlBZGRXYWxsQmxvb2QyKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kaWVDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZSAmJiBlLmNhbGxiYWNrICYmIGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBlLmNhbGxiYWNrLmFwcGx5KGUudGFyZ2V0LCBbdF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaWVDYWxsYmFja3MuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNsZWFyU3RhdHVzKCEwKTtcclxuICAgICAgICB0aGlzLmNsZWFyRGVidWZmQW5pbSgpO1xyXG4gICAgICAgICRjb21wb25lbnRQcm94eS5kZWZhdWx0Lklucy5yZW1vdmVPYmoodGhpcyk7XHJcbiAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnB1dEVuZW15UG9vbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLnJlc2lkdWVEaXMgPSBNYXRoLmZsb29yKHRoaXMubm9kZS55ICsgNDAwKTtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gNWUzIC0gTWF0aC5mbG9vcih0aGlzLnJlc2lkdWVEaXMpO1xyXG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBpID0gdGhpcy52ZWxvY2l0eTtcclxuICAgICAgICBDLnggPSBlLnggKyBpLnggKiB0O1xyXG4gICAgICAgIEMueSA9IGUueSArIGkueSAqIHQ7XHJcbiAgICAgICAgQy56ID0gZS56ICsgaS56ICogdDtcclxuICAgICAgICBpZiAoQy55ID49IDcyMCAmJiB0aGlzLnZlbG9jaXR5LnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzTWFuYWdlci5jbGVhckRlYnVmZigkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkJBQ0spO1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCAodGhpcy52ZWxvY2l0eS55ID0gLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQy55IDwgJGdsb2JhbFBhcmFtLmRlZmF1bHQuZG9vclkgJiYgaS55IDwgMCkge1xyXG4gICAgICAgICAgICBDLnkgPSAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5kb29yWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEMueCA8IC0zNjApIHtcclxuICAgICAgICAgICAgQy54ID0gLTM2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEMueCA+IDM2MCkge1xyXG4gICAgICAgICAgICBDLnggPSAzNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oQyk7XHJcbiAgICAgICAgdGhpcy5jYWN1bGF0ZVZlbG9jaXR5KCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuY2FjdWxhdGVWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXNNYW5hZ2VyLmhhc0RlYnVmZigkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkFEU09SQikpIHtcclxuICAgICAgICAgICAgQy54ID0gMDtcclxuICAgICAgICAgICAgQy55ID0gMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLnN0YXR1c01hbmFnZXIuY3VyckFkc29yYkRpci5sZW5ndGg7IHQrKykge1xyXG4gICAgICAgICAgICAgICAgQy54ICs9IHRoaXMuc3RhdHVzTWFuYWdlci5jdXJyQWRzb3JiRGlyW3RdLng7XHJcbiAgICAgICAgICAgICAgICBDLnkgKz0gdGhpcy5zdGF0dXNNYW5hZ2VyLmN1cnJBZHNvcmJEaXJbdF0ueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBDLnggPSBjYy5taXNjLmNsYW1wZihDLngsIC0xMDAsIDEwMCk7XHJcbiAgICAgICAgICAgIEMueSA9IGNjLm1pc2MuY2xhbXBmKEMueSwgLTEwMCwgMTAwKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gQy54O1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5ub3JtYWxpemVTZWxmKCkubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmF0dGFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5BdGspIHtcclxuICAgICAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9ICEwO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4ucGxheUFuaW1hdGlvbihcImhpdFwiLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5hdHRhY2tBbmltLCAwLjA2Nik7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbi5vbmNlKFxyXG4gICAgICAgICAgICAgICAgZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5pc0F0dGFja2luZyA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuc2tpbi5wbGF5QW5pbWF0aW9uKFwic3RhbmRcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hdHRhY2tBbmltID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5zZW5kKCRsb2NhbEV2ZW50TmFtZS5kZWZhdWx0LkFUS19ET09SLCB0aGlzLnN0YXR1c01hbmFnZXIuYXRrKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jbGVhckRlYnVmZkFuaW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVybkFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmREZWJ1ZmZBbmltKCRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuQlVSTik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZyZWV6ZUFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmREZWJ1ZmZBbmltKCRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuRlJFRVpFKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYWx5c2lzQW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZERlYnVmZkFuaW0oJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5QQVJBTFlTSVMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdHVuQW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZERlYnVmZkFuaW0oJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5TVFVOKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmVjb3ZlckFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmREZWJ1ZmZBbmltKCRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUkVDT1ZFUik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmRpZUFuaW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLnJlbW92ZUVuZW15KHRoaXMpO1xyXG4gICAgICAgIEMueCA9IDA7XHJcbiAgICAgICAgQy55ID0gdGhpcy5kZWJ1ZmZMYXllci55O1xyXG4gICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5zZW5kKCRsb2NhbEV2ZW50TmFtZS5kZWZhdWx0LkVORU1ZX0RJRSwgdGhpcy5nZXRQb3NpdGlvbigpLmFkZChDKSk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljUmVzdHJpY3QoXCJkaWVcIiwgMC4zKTtcclxuICAgICAgICBpZiAoISgyICE9PSB0aGlzLmNvbmZpZy5tb25zdGVyX3R5cGUgJiYgMyAhPT0gdGhpcy5jb25maWcubW9uc3Rlcl90eXBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvc3NDaG9vc2VTS2lsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gITA7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuYm9zc0Nob29zZVNLaWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgxID09PSB0aGlzLmNvbmZpZy5pc19yZXdhcmQpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMua2lsbEJvc3NTa2lsbHMoKTtcclxuICAgICAgICAgICAgaWYgKCEodC5sZW5ndGggPD0gMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gJHNlZWRVdGlsLmRlZmF1bHQucmFuZG9tRnJvbSh0aGlzLmNvbmZpZy5yZXdhcmRfbnVtWzBdLCB0aGlzLmNvbmZpZy5yZXdhcmRfbnVtWzFdKTtcclxuICAgICAgICAgICAgICAgICRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlID0gITA7XHJcbiAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLlBvcFVwQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuQm9zc1NraWxsVmlldyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsSWRzOiB0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21Db3VudDogZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5pc0dhbWVQdWFzZSA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zdGFydERlYnVmZkFuaW0gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIGlmICghKHRoaXMuc3RhdHVzTWFuYWdlci5ocCA8PSAwKSkge1xyXG4gICAgICAgICAgICBpZiAodCA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5CVVJOKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJ1cm5BbmltKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpID0gJGdhbWVQb29sLmRlZmF1bHQuaW5zdGFuY2UuZ2V0KCRnYW1lUG9vbC5Qb29sS2V5LkJVUk4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXNNYW5hZ2VyLlJlc01hbmFnZXIuaW5zdGFuY2UuZ2V0KCRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5CdXJuKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmVuZW15TGF5ZXIucGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYnVybkFuaW0gPSBpO1xyXG4gICAgICAgICAgICAgICAgaS5wYXJlbnQgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZGVidWZmTGF5ZXI7XHJcbiAgICAgICAgICAgICAgICBpLnpJbmRleCA9IHRoaXMubm9kZS56SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBpLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5kZWJ1ZmZMYXllci5wb3NpdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgaS5zY2FsZSA9IHRoaXMuZGVidWZmTGF5ZXIuc2NhbGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5TVE9QX0FOSU0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoMCAhPT0gKG51bGwgPT09IChlID0gdGhpcy5za2luKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnRpbWVTY2FsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5TG9vcChudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLkZSRUVaRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmZyZWV6ZUFuaW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSAkZ2FtZVBvb2wuZGVmYXVsdC5pbnN0YW5jZS5nZXQoJGdhbWVQb29sLlBvb2xLZXkuRlJFRVpFKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gJHJlc1V0aWwuUmVzVXRpbC5pbnN0YW50aWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzTWFuYWdlci5SZXNNYW5hZ2VyLmluc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5Bc3NldHNNYXAuR2FtZUJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkZyZWV6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmVuZW15TGF5ZXIucGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJlZXplQW5pbSA9IG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ucGFyZW50ID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmRlYnVmZkxheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnpJbmRleCA9IHRoaXMubm9kZS56SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpLmFkZCh0aGlzLmRlYnVmZkxheWVyLnBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc2NhbGUgPSB0aGlzLmRlYnVmZkxheWVyLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlBBUkFMWVNJUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkZ2FtZVBvb2wuZGVmYXVsdC5pbnN0YW5jZS5nZXQoJGdhbWVQb29sLlBvb2xLZXkuUEFSQUxZU0lTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAkcmVzVXRpbC5SZXNVdGlsLmluc3RhbnRpYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVzTWFuYWdlci5SZXNNYW5hZ2VyLmluc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5QYXJhbHlzaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmVuZW15TGF5ZXIucGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYWx5c2lzQW5pbSA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnBhcmVudCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5kZWJ1ZmZMYXllcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uekluZGV4ID0gdGhpcy5ub2RlLnpJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpLmFkZCh0aGlzLmRlYnVmZkxheWVyLnBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnNjYWxlID0gdGhpcy5kZWJ1ZmZMYXllci5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlNUVU4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnN0dW5BbmltKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gJGdhbWVQb29sLmRlZmF1bHQuaW5zdGFuY2UuZ2V0KCRnYW1lUG9vbC5Qb29sS2V5LlNUVU4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gJHJlc1V0aWwuUmVzVXRpbC5pbnN0YW50aWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyZXNNYW5hZ2VyLlJlc01hbmFnZXIuaW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5TdHVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmVuZW15TGF5ZXIucGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1bkFuaW0gPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMucGFyZW50ID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmRlYnVmZkxheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuekluZGV4ID0gdGhpcy5ub2RlLnpJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKS5hZGQodGhpcy5kZWJ1ZmZMYXllci5wb3NpdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2NhbGUgPSB0aGlzLmRlYnVmZkxheWVyLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5SRUNPVkVSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMucmVjb3ZlckFuaW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSAkZ2FtZVBvb2wuZGVmYXVsdC5pbnN0YW5jZS5nZXQoJGdhbWVQb29sLlBvb2xLZXkuUkVDT1ZFUik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlc01hbmFnZXIuUmVzTWFuYWdlci5pbnN0YW5jZS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLkdhbWVCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5IZWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZW5lbXlMYXllci5wYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQW5pbSA9IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIucGFyZW50ID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmRlYnVmZkxheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnpJbmRleCA9IHRoaXMubm9kZS56SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpLmFkZCh0aGlzLmRlYnVmZkxheWVyLnBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc2NhbGUgPSB0aGlzLmRlYnVmZkxheWVyLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5lbmREZWJ1ZmZBbmltID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZTtcclxuICAgICAgICBpZiAodCA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5CVVJOICYmIHRoaXMuYnVybkFuaW0pIHtcclxuICAgICAgICAgICAgJGdhbWVQb29sLmRlZmF1bHQuaW5zdGFuY2UucHV0KCRnYW1lUG9vbC5Qb29sS2V5LkJVUk4sIHRoaXMuYnVybkFuaW0pO1xyXG4gICAgICAgICAgICB0aGlzLmJ1cm5BbmltID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodCA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5TVE9QX0FOSU0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gKHRoaXMuc3BlZWQgLyB0aGlzLnN0YXR1c01hbmFnZXIuaW5pdFNwZWVkKSAqIHRoaXMuY3VyclJhdGlvO1xyXG4gICAgICAgICAgICAgICAgaWYgKChudWxsID09PSAoZSA9IHRoaXMuc2tpbikgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50aW1lU2NhbGUpIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlMb29wKG51bGwsIGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdCA9PT0gJGVuZW15U3RhdHVzLkVuZW15RGVidWZmVHlwZS5GUkVFWkUgJiYgdGhpcy5mcmVlemVBbmltXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoJGdhbWVQb29sLmRlZmF1bHQuaW5zdGFuY2UucHV0KCRnYW1lUG9vbC5Qb29sS2V5LkZSRUVaRSwgdGhpcy5mcmVlemVBbmltKSxcclxuICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmZyZWV6ZUFuaW0gPSBudWxsKSlcclxuICAgICAgICAgICAgICAgICAgICA6IHQgPT09ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUEFSQUxZU0lTICYmIHRoaXMucGFyYWx5c2lzQW5pbVxyXG4gICAgICAgICAgICAgICAgICAgID8gKCRnYW1lUG9vbC5kZWZhdWx0Lmluc3RhbmNlLnB1dCgkZ2FtZVBvb2wuUG9vbEtleS5QQVJBTFlTSVMsIHRoaXMucGFyYWx5c2lzQW5pbSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJhbHlzaXNBbmltID0gbnVsbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0ID09PSAkZW5lbXlTdGF0dXMuRW5lbXlEZWJ1ZmZUeXBlLlNUVU4gJiYgdGhpcy5zdHVuQW5pbVxyXG4gICAgICAgICAgICAgICAgICAgID8gKCRnYW1lUG9vbC5kZWZhdWx0Lmluc3RhbmNlLnB1dCgkZ2FtZVBvb2wuUG9vbEtleS5TVFVOLCB0aGlzLnN0dW5BbmltKSwgKHRoaXMuc3R1bkFuaW0gPSBudWxsKSlcclxuICAgICAgICAgICAgICAgICAgICA6IHQgPT09ICRlbmVteVN0YXR1cy5FbmVteURlYnVmZlR5cGUuUkVDT1ZFUiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQW5pbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCRnYW1lUG9vbC5kZWZhdWx0Lmluc3RhbmNlLnB1dCgkZ2FtZVBvb2wuUG9vbEtleS5SRUNPVkVSLCB0aGlzLnJlY292ZXJBbmltKSxcclxuICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnJlY292ZXJBbmltID0gbnVsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNsZWFyU3RhdHVzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLmlzRG9vciA9ICExO1xyXG4gICAgICAgIHRoaXMubGFzdEF0a1RpbWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNNYW5hZ2VyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kaWVDYWxsYmFja3MuY2xlYXIoKTtcclxuICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNraW4udGltZVNjYWxlID0gdGhpcy5jdXJyUmF0aW87XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbi5wbGF5QW5pbWF0aW9uKFwicnVuXCIsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2lkdWVEaXMgPSA1ZTM7XHJcbiAgICAgICAgdGhpcy5pc0NhbkF0ayA9ICExO1xyXG4gICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSAhMTtcclxuICAgICAgICBpZiAodGhpcy5za2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNraW4ubm9kZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucGxheUxvb3AgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0dXNNYW5hZ2VyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBdHRhY2tpbmcgPSAhMTtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuYXR0YWNrQW5pbSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNraW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbi5vZmYoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2luLnRpbWVTY2FsZSA9IGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbi5wbGF5QW5pbWF0aW9uKHQsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2RlY29yYXRlKFtTXSwgZSk7XHJcbn0pKCRvYmplY3QuY09iamVjdCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFA7XHJcbiJdfQ==