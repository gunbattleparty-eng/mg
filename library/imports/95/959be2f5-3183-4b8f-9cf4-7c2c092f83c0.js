"use strict";
cc._RF.push(module, '959beL1MYNLj5z0fCwJL4PA', 'EnemyStatus');
// game_script/scripts/EnemyStatus.js

"use strict";

exports.EnemyDebuffType = void 0;
var o;
var n;

var $baseBullet = require("./BaseBullet");

var $gameContext = require("./GameContext");

var $gameGemInfo = require("./GameGemInfo");

(n = o = exports.EnemyDebuffType || (exports.EnemyDebuffType = {}))[n.SUFFER_ATK = 0] = "SUFFER_ATK";
n[n.BURN = 1] = "BURN";
n[n.BACK = 2] = "BACK";
n[n.FREEZE = 3] = "FREEZE";
n[n.STOP_ANIM = 4] = "STOP_ANIM";
n[n.PARALYSIS = 5] = "PARALYSIS";
n[n.SLOW = 6] = "SLOW";
n[n.STUN = 7] = "STUN";
n[n.ALL_ATK_ADD = 8] = "ALL_ATK_ADD";
n[n.RECOVER = 9] = "RECOVER";
n[n.ADSORB = 10] = "ADSORB";
n[n.FORBID_RECOVER = 11] = "FORBID_RECOVER";

var l = function () {
  function t() {
    this.proxyEnemy = null;
    this.initSpeed = 0;
    this.initHp = 0;
    this.hp = 0;
    this.atkspeed = 0;
    this.atk = 0;
    this.backSpeed = 150;
    this.isDie = !1;
    this.debuffintervalTime = 0.5;
    this.debuffintervalTimeLeft = 0.5;
    this.debuffTypeMap = new Map();
    this.debuffInfos = [];
    this.currAdsorbDir = [];
    this.slowSpeedAdd = 0;
    this.allDamage = 0;
    this.specialityAtkAdd = new Map();
    this.isStoping = !1;
  }

  t.prototype.clear = function () {
    this.slowSpeedAdd = 0;
    this.isStoping = !1;
    this.isDie = !1;
    this.allDamage = 0;
    this.specialityAtkAdd.clear();
    this.debuffTypeMap.clear();
    this.debuffInfos.length = 0;
    this.currAdsorbDir.length = 0;
  };

  t.prototype.addDebuff = function (t) {
    var e = 0;

    if (t.type !== o.BACK || !this.hasDebuff(o.ADSORB)) {
      if (t.type !== o.RECOVER && $gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.EnemyDebuffTime)) {
        e += $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.EnemyDebuffTime);
      }

      if (t.type === o.BURN) {
        t.timeLeft += e;
        this.debuffInfos.push(t);
        this.debuffTypeMap.has(o.BURN) || (this.proxyEnemy.startDebuffAnim(t.type), this.debuffTypeMap.set(o.BURN, 0));
        this.debuffTypeMap.set(o.BURN, this.debuffTypeMap.get(o.BURN) + 1);
      } else {
        if (t.type === o.BACK) {
          var i = t;

          if (150 !== this.backSpeed) {
            return;
          }

          if (t.timeLeft >= 1) {
            this.debuffTypeMap["delete"](o.BACK);
            (n = this.debuffInfos.findIndex(function (t) {
              return t.type === o.BACK;
            })) > -1 && this.debuffInfos.splice(n, 1);
            this.backSpeed = t.value / t.timeLeft;
          } else {
            if (void 0 !== i.dir) {
              var n;
              this.debuffTypeMap["delete"](o.BACK);

              if ((n = this.debuffInfos.findIndex(function (t) {
                return t.type === o.BACK;
              })) > -1) {
                this.debuffInfos.splice(n, 1);
              }

              t.timeLeft = t.value / this.backSpeed;
            } else {
              t.timeLeft = t.value / this.backSpeed;
            }
          }

          if (!this.debuffTypeMap.has(o.BACK)) {
            this.debuffTypeMap.set(o.BACK, 1);

            if (!i.dir) {
              i.dir = cc.v2(0, 1);
            }

            this.debuffInfos.push(i);
            this.proxyEnemy.startDebuffAnim(o.STOP_ANIM);
          }

          this.tryRecoverSpeed();
        } else {
          if (t.type === o.FREEZE) {
            t.timeLeft += e;
            this.debuffTypeMap.has(o.FREEZE) ? (s = this.debuffInfos.find(function (t) {
              return t.type === o.FREEZE;
            })) ? s.timeLeft = t.timeLeft : this.debuffInfos.push(t) : (this.debuffTypeMap.set(o.FREEZE, 1), this.debuffInfos.push(t), this.proxyEnemy.startDebuffAnim(t.type), this.proxyEnemy.startDebuffAnim(o.STOP_ANIM));
            this.tryRecoverSpeed();
          } else {
            if (t.type === o.PARALYSIS) {
              t.timeLeft += e;
              this.debuffTypeMap.has(o.PARALYSIS) ? (s = this.debuffInfos.find(function (t) {
                return t.type === o.PARALYSIS;
              })) ? s.timeLeft = t.timeLeft : this.debuffInfos.push(t) : (this.debuffTypeMap.set(o.PARALYSIS, 1), this.debuffInfos.push(t), this.proxyEnemy.startDebuffAnim(t.type), this.proxyEnemy.startDebuffAnim(o.STOP_ANIM));
              this.tryRecoverSpeed();
            } else {
              if (t.type === o.RECOVER) {
                this.debuffTypeMap.has(o.RECOVER) ? (s = this.debuffInfos.find(function (t) {
                  return t.type === o.RECOVER;
                })) ? s.timeLeft = t.timeLeft : this.debuffInfos.push(t) : (this.debuffTypeMap.set(o.RECOVER, 1), this.debuffInfos.push(t), this.proxyEnemy.startDebuffAnim(t.type), -1 == t.value && this.proxyEnemy.startDebuffAnim(o.STOP_ANIM));
                -1 == t.value && this.tryRecoverSpeed();
              } else {
                if (t.type === o.SLOW) {
                  t.timeLeft += e;

                  if (this.debuffTypeMap.has(o.SLOW)) {
                    if ((s = this.debuffInfos.find(function (t) {
                      return t.type === o.SLOW;
                    })).id) {
                      return;
                    }

                    s.id = t.id;
                    s ? (s.timeLeft = t.timeLeft, s.value = t.value) : this.debuffInfos.push(t);
                  } else {
                    this.debuffTypeMap.set(o.SLOW, 1);
                    this.debuffInfos.push(t);
                  }

                  this.slowSpeedAdd = t.value;
                  this.tryRecoverSpeed();
                } else {
                  if (t.type === o.STUN) {
                    var s;
                    t.timeLeft += e;
                    this.debuffTypeMap.has(o.STUN) ? (s = this.debuffInfos.find(function (t) {
                      return t.type === o.STUN;
                    })) ? s.timeLeft = t.timeLeft : this.debuffInfos.push(t) : (this.debuffTypeMap.set(o.STUN, 1), this.debuffInfos.push(t), this.proxyEnemy.startDebuffAnim(t.type), this.proxyEnemy.startDebuffAnim(o.STOP_ANIM));
                    this.tryRecoverSpeed();
                  } else {
                    if (t.type === o.ALL_ATK_ADD) {
                      if (this.debuffTypeMap.has(o.ALL_ATK_ADD)) {
                        if (this.debuffTypeMap.get(o.ALL_ATK_ADD) > 5) {
                          return;
                        }

                        this.debuffTypeMap.set(o.ALL_ATK_ADD, this.debuffTypeMap.get(o.ALL_ATK_ADD) + 1);
                        this.debuffInfos.push(t);
                      } else {
                        this.debuffInfos.push(t);
                      }
                    } else {
                      t.type === o.ADSORB ? (this.debuffTypeMap.has(o.ADSORB) || this.debuffTypeMap.set(o.ADSORB, 1), this.tryRecoverSpeed()) : t.type === o.FORBID_RECOVER && this.debuffTypeMap.set(o.FORBID_RECOVER, 1);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  t.prototype.clearDebuff = function (t, e) {
    if (t === o.BACK) {
      (i = this.debuffInfos.findIndex(function (t) {
        return t.type === o.BACK;
      })) > -1 && this.debuffInfos.splice(i, 1);
      this.deleteDebuffType(t);
    } else {
      if (t === o.ADSORB) {
        this.deleteDebuffType(t);
      } else {
        if (t === o.FORBID_RECOVER) {
          this.deleteDebuffType(t);
        } else {
          if (t === o.SLOW) {
            void 0 !== e ? (i = this.debuffInfos.findIndex(function (t) {
              return t.type === o.SLOW;
            })) > -1 && (this.debuffInfos.splice(i, 1), this.deleteDebuffType(t)) : this.deleteDebuffType(t);
          } else {
            if (t === o.RECOVER) {
              var i;

              if ((i = this.debuffInfos.findIndex(function (t) {
                return t.type === o.RECOVER;
              })) > -1) {
                this.debuffInfos.splice(i, 1);
              }

              this.deleteDebuffType(t);
            }
          }
        }
      }
    }
  };

  t.prototype.hasDebuff = function (t) {
    return this.debuffTypeMap.has(t);
  };

  t.prototype.tryRecoverSpeed = function () {
    if (this.debuffTypeMap.has(o.ADSORB)) {} else {
      if (this.debuffTypeMap.has(o.BACK)) {
        var t = this.debuffInfos.find(function (t) {
          return t.type === o.BACK;
        });
        this.isStoping = !0;
        this.proxyEnemy.velocity.x = t.dir.x;
        this.proxyEnemy.velocity.y = t.dir.y;
        this.proxyEnemy.speed = this.backSpeed;
      } else {
        this.debuffTypeMap.has(o.FREEZE) || this.debuffTypeMap.has(o.STUN) || this.debuffTypeMap.has(o.PARALYSIS) || this.debuffTypeMap.has(o.RECOVER) ? (this.isStoping = !0, this.proxyEnemy.speed = 0) : this.debuffTypeMap.has(o.SLOW) ? (this.proxyEnemy.velocity.x = 0, this.proxyEnemy.velocity.y = -1, this.proxyEnemy.speed = this.initSpeed * (1 + this.slowSpeedAdd), this.isStoping = !1) : (this.proxyEnemy.velocity.x = 0, this.proxyEnemy.velocity.y = -1, this.proxyEnemy.speed = this.initSpeed, this.isStoping = !1);
      }
    }

    if (!this.isStoping) {
      this.proxyEnemy.endDebuffAnim(o.STOP_ANIM);
    }
  };

  t.prototype.proccessExpiredDuff = function (t) {
    var e = 0;
    var i = this.debuffInfos.length;

    for (var n = 0; n < i; n++) {
      var s = this.debuffInfos.shift();
      s.timeLeft -= t;

      if (s.timeLeft > 0) {
        s.type === o.ALL_ATK_ADD && (e += s.value);
        this.debuffInfos.push(s);
      } else {
        {
          var r = this.debuffTypeMap.get(s.type) - 1;
          r <= 0 ? (this.debuffTypeMap["delete"](s.type), this.deleteDebuffType(s.type)) : this.debuffTypeMap.set(s.type, r);
        }
      }
    }

    this.allDamage = e;
  };

  t.prototype.deleteDebuffType = function (t) {
    t === o.STUN ? (this.debuffTypeMap["delete"](o.STUN), this.proxyEnemy.endDebuffAnim(o.STUN), this.tryRecoverSpeed()) : t === o.SLOW ? (this.debuffTypeMap["delete"](o.SLOW), this.tryRecoverSpeed()) : t === o.BURN ? (this.debuffTypeMap["delete"](o.BURN), this.proxyEnemy.endDebuffAnim(o.BURN)) : t === o.BACK ? (this.backSpeed = 150, this.debuffTypeMap["delete"](o.BACK), this.tryRecoverSpeed()) : t === o.FREEZE ? (this.debuffTypeMap["delete"](o.FREEZE), this.proxyEnemy.endDebuffAnim(o.FREEZE), this.tryRecoverSpeed()) : t === o.PARALYSIS ? (this.debuffTypeMap["delete"](o.PARALYSIS), this.proxyEnemy.endDebuffAnim(o.PARALYSIS), this.tryRecoverSpeed()) : t === o.ALL_ATK_ADD ? this.debuffTypeMap["delete"](o.ALL_ATK_ADD) : t === o.RECOVER ? (this.debuffTypeMap["delete"](o.RECOVER), this.proxyEnemy.endDebuffAnim(o.RECOVER), this.tryRecoverSpeed()) : t === o.ADSORB ? (this.debuffTypeMap["delete"](o.ADSORB), this.tryRecoverSpeed()) : t === o.FORBID_RECOVER && this.debuffTypeMap["delete"](o.ADSORB);
  };

  t.prototype.updateF = function (t) {
    if (!this.isDie) {
      this.proccessExpiredDuff(t);
      this.debuffintervalTimeLeft -= t;
      var e = 0;

      for (var i = 0; i < this.debuffInfos.length; i++) {
        var n = this.debuffInfos[i];

        if (n.type === o.BURN) {
          e += n.value;
        }
      }

      if (0 !== e && this.debuffintervalTimeLeft <= 0) {
        this.debuffintervalTimeLeft = this.debuffintervalTime;
        var a = $gameContext["default"].ins.skillInfo.getSkillById(23);
        a && a.thermobaricEnemyBoomRange > 0 ? this.proxyEnemy.sufferAtk({
          skillSpecialitys: [],
          atk: e,
          bulletBuff: $baseBullet.BulletBuff.burn_boom
        }) : this.proxyEnemy.sufferAttack(-1, e);
      }
    }
  };

  return t;
}();

exports["default"] = l;

cc._RF.pop();