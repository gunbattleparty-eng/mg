var o;
var $object = require("./Object");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $countDownUtil = require("./CountDownUtil");
var $gamePool = require("./GamePool");
var $util = require("./Util");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $enemyStatus = require("./EnemyStatus");
var $baseBullet = require("./BaseBullet");
var g = cc._decorator;
var _ = g.ccclass;
var k = g.property;
var v = cc.Vec3.ZERO;
var b = cc.Size.ZERO;
var w = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.thunder_chain;
        e.animPrefab = null;
        e.currAtkEnemyCount = 0;
        e.currTargetPos = null;
        e.currTarget = null;
        e.targetIsExist = !0;
        e.tailNodeArrs = [];
        e.bounceCount = 0;
        e.attackEnemy = new Map();
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e, i) {
        t.prototype.initButtle.call(this, e, i);
        this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
        this.speed = this.skillParam.speed;
        this.bounceCount = this.skillParam.count;
        b.height = 52;
        if (this.skillParam.adsorbSize > 0) {
            var o = this.skillParam.adsorbSize;
            this.setScale(cc.v3(o, o));
            this.node.children[0].scale = 1 / o;
        }
    };
    e.prototype.initBullet31 = function (t, e) {
        this.skillId = e;
        this.isUse = !1;
        this.currAtkEnemyCount = 0;
        this.targetIsExist = !0;
        this.currTarget = t;
        this.currTargetPos = t.getPosition();
        this.tailNodeArrs.length = 0;
    };
    e.prototype.onTrigger = function (t, e) {
        if (!(this.skillParam.adsorb <= 0)) {
            var i = t.object;
            if (e == $object.Trigger.enter) {
                var o = this.getPosition().sub(i.node.position);
                i.addAdsorb(o);
                this.attackEnemy.set(i, o);
            } else {
                if (e == $object.Trigger.stay) {
                    if (
                        $countDownUtil.CountDownUtil.time - i.getLastAtkTime(4) <=
                        0.1 / $gameContext.default.ins.gameRatio
                    ) {
                        return;
                    }
                    i.setLastAtkTime(4, $countDownUtil.CountDownUtil.time);
                    if (this.attackEnemy.has(i)) {
                        v.x = this.getPosition().x - i.getPosition().x;
                        v.y = this.getPosition().y - i.getPosition().y;
                        v.magSqr() <= 900
                            ? ((this.attackEnemy.get(i).x = 0), (this.attackEnemy.get(i).y = 0))
                            : (v.normalizeSelf().mulSelf(this.skillParam.adsorb),
                              (this.attackEnemy.get(i).x = v.x),
                              (this.attackEnemy.get(i).y = v.y));
                    }
                } else {
                    if (e == $object.Trigger.exit && this.attackEnemy.has(i)) {
                        i.removeAdsorb(this.attackEnemy.get(i));
                        this.attackEnemy.delete(i);
                    }
                }
            }
        }
    };
    e.prototype.updateFrame = function (t) {
        if (!this.isUse) {
            if (this.targetIsExist) {
                if (!(cc.isValid(this.currTarget) && this.currTarget.node.parent)) {
                    this.targetIsExist = !1;
                    this.currTargetPos = this.node.position.clone();
                }
            }
            var e = this.getPosition();
            var i = this.velocity;
            v.x = e.x + i.x * t;
            v.y = e.y + i.y * t;
            v.z = e.z + i.z * t;
            this.setPosition(v);
            if (this.node.position.sub(this.currTargetPos).magSqr() < 400) {
                var o = null;
                this.targetIsExist
                    ? (this.attack(), (o = $gameContext.default.ins.getRangeRandomEnemyLayer(this.currTarget.node)))
                    : (o = $gameContext.default.ins.getRangeRandomEnemyLayerByPos(this.currTargetPos));
                this.currAtkEnemyCount++;
                if (!o || this.currAtkEnemyCount >= this.bounceCount) {
                    return void this.destoryBullet();
                }
                this.targetIsExist = !0;
                this.currTarget = o;
                this.currTargetPos = o.getPosition();
            }
            if (this.tailNodeArrs.length < this.currAtkEnemyCount + 1) {
                var n = $gamePool.default.instance.get($gamePool.PoolKey.THUNDER_CHAIN_ANIMS);
                if (!cc.isValid(n)) {
                    n = cc.instantiate(this.animPrefab);
                }
                n.parent = $gameContext.default.ins.lowBulletLayer;
                n.position = this.getPosition().clone();
                b.width = 0;
                n.setContentSize(b);
                this.tailNodeArrs[this.currAtkEnemyCount] = n;
            }
            var s = this.tailNodeArrs[this.currAtkEnemyCount];
            var r = $util.default.dirConverAngle(this.node.position.sub(s.position).normalize());
            s.angle = r;
            b.width = s.width + this.speed * t;
            s.setContentSize(b);
            var a = this.currTargetPos.sub(this.node.position).normalize();
            this.velocity.set(a).mulSelf(this.speed);
        }
    };
    e.prototype.attack = function () {
        this.currTarget.sufferAtk({
            id: 61,
            skillSpecialitys: this.skillSpecialitys,
            atk: this.atk
        })
            ? this.skillParam.killCount > 0 && (this.bounceCount += this.skillParam.killCount)
            : (this.skillParam.hitStun.length > 0 &&
                  this.currTarget.hasDebuff($enemyStatus.EnemyDebuffType.STUN) &&
                  this.currTarget.sufferDebuff({
                      type: $enemyStatus.EnemyDebuffType.ALL_ATK_ADD,
                      timeLeft: this.skillParam.hitStun[0],
                      value: this.skillParam.hitStun[1]
                  }),
              this.skillParam.paralysisTime > 0 &&
                  this.currTarget.sufferDebuff({
                      type: $enemyStatus.EnemyDebuffType.PARALYSIS,
                      timeLeft: this.skillParam.paralysisTime,
                      value: 0
                  }),
              this.skillParam.bombRange > 0 && this.createBoom());
    };
    e.prototype.createBoom = function () {
        var t = $gameContext.default.ins.getButtlePool($baseBullet.BulletType.thunder_chain_bomb);
        if (!t) {
            var e = $assetsLoader.default.instance.getRes(
                $assetsMap.BundleNames.Game,
                $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Bullet_32
            );
            t = $resUtil.ResUtil.instantiate(e, $gameContext.default.ins.lowBulletLayer.parent).getComponent(
                $baseBullet.default
            );
        }
        t.setPosition(this.currTarget.getPosition());
        t.initButtle(null, this.skillId);
        t.insert($gameContext.default.ins.lowBulletLayer);
    };
    e.prototype.destoryBullet = function () {
        var t = this;
        this.isUse = !0;
        this.scheduleOnce(function () {
            for (var e = 0; e < t.tailNodeArrs.length; e++) {
                $gamePool.default.instance.put($gamePool.PoolKey.THUNDER_CHAIN_ANIMS, t.tailNodeArrs[e]);
            }
            t.removeSelf();
        }, 0.15);
    };
    __decorate([k(cc.Prefab)], e.prototype, "animPrefab", void 0);
    return __decorate([_], e);
})($baseBullet.default);
exports.default = w;
