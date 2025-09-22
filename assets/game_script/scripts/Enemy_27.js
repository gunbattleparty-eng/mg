var o;
var $assetsMap = require("./AssetsMap");
var $resManager = require("./ResManager");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $gamePool = require("./GamePool");
var $localEventName = require("./LocalEventName");
var $baseBullet = require("./BaseBullet");
var $gameContext = require("./GameContext");
var $baseEnemy = require("./BaseEnemy");
var $healthBar = require("./HealthBar");
var y = cc._decorator;
var g = y.ccclass;
var _ = y.property;
var k = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.healthBar = null;
        e.invulnerabilityCount = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.initEnemy = function (e, i, o) {
        if (void 0 === o) {
            o = 0;
        }
        t.prototype.initEnemy.call(this, e, i, o);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.physics, this.config.value[0]);
        this.statusManager.specialityAtkAdd.set($baseBullet.BulletSpeciality.energy, this.config.value[1]);
        this.invulnerabilityCount = this.config.value[2];
        if (this.healthBar) {
            this.healthBar.init(this.statusManager.hp, e.hp_num);
        }
    };
    e.prototype.sufferDebuff = function (e) {
        if (!(this.invulnerabilityCount > 0)) {
            t.prototype.sufferDebuff.call(this, e);
        }
    };
    e.prototype.playShield = function () {
        var t = $gamePool.default.instance.get($gamePool.PoolKey.Shield);
        if (!t) {
            t = $resUtil.ResUtil.instantiate(
                $resManager.ResManager.instance.get($assetsMap.AssetsMap.GameBundles.prefabs.assetsList.Shield),
                $gameContext.default.ins.enemyLayer.parent
            );
        }
        t.parent = $gameContext.default.ins.debuffLayer;
        t.zIndex = this.node.zIndex;
        t.setPosition(this.getPosition().add(this.debuffLayer.position));
        t.scale = this.debuffLayer.scale;
        var e = this.getAnimPos();
        $eventManager.default.send($localEventName.default.HURT_ANIM, e, -1, 1);
        var i = t.getComponentInChildren(cc.Animation);
        i.play().speed = $gameContext.default.ins.gameRatio;
        i.on(
            cc.Animation.EventType.FINISHED,
            function () {
                $gamePool.default.instance.put($gamePool.PoolKey.Shield, t);
            },
            this
        );
    };
    e.prototype.sufferAtk = function (e) {
        return this.invulnerabilityCount > 0
            ? (this.invulnerabilityCount--, this.playShield(), !1)
            : t.prototype.sufferAtk.call(this, e);
    };
    e.prototype.sufferAttack = function (e, i) {
        if (this.statusManager.isDie) {
            return !1;
        }
        var o = t.prototype.sufferAttack.call(this, e, i);
        if (this.healthBar) {
            this.healthBar.render(this.statusManager.hp);
        }
        return o;
    };
    __decorate([_($healthBar.default)], e.prototype, "healthBar", void 0);
    return __decorate([g], e);
})($baseEnemy.default);
exports.default = k;
