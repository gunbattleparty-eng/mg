"use strict";
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