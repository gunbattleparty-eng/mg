var o;
var $object = require("./Object");
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $configContext = require("./ConfigContext");
var $roleContext = require("./RoleContext");
var $gameContext = require("./GameContext");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseBullet = require("./BaseBullet");
var m = cc._decorator;
var y = m.ccclass;
var g =
    (m.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.split_bullet;
            e.targetEnemy = null;
            e.anim = null;
            e.animName = "bullet_1_1";
            e.isLoadedSkin = !1;
            return e;
        }
        __extends(e, t);
        e.prototype.initButtle = function (e, i) {
            var o = this;
            t.prototype.initButtle.call(this, e, i);
            this.speed = this.skillParam.bulletSpeed;
            this.velocity.set(e).multiplyScalar(this.speed);
            this.atk = this.skillParam.splitAtk[$gameSkillInfo.Skill4Param.FINAL];
            if (!this.anim) {
                this.anim = this.node.children[0].getComponent(cc.Animation);
            }
            this.setAnimation();
            if (!this.isLoadedSkin && 1 !== $roleContext.default.ins.currSkinInfo.gun) {
                this.isLoadedSkin = !0;
                var n = $configContext.default.instance.gunSkinConfigs.find(function (t) {
                    return t.id === $roleContext.default.ins.currSkinInfo.gun;
                });
                $assetsLoader.default.instance.loadRes(
                    $assetsMap.BundleNames.Game,
                    ["/anim/" + n.skin_res],
                    cc.AnimationClip,
                    null,
                    function (t, e) {
                        var i = e[0];
                        if (sp && cc.isValid(i)) {
                            o.animName = "" + n.skin_res;
                            $resUtil.ResUtil.assignWith(i, $gameContext.default.ins.buttleLayer.parent);
                            o.anim.addClip(i);
                            o.anim.play(o.animName);
                        }
                    }
                );
            }
        };
        e.prototype.setAnimation = function (t) {
            if (void 0 === t) {
                t = "bullet_1_1";
            }
            this.skillParam.isFirebullet
                ? (t = "bullet_1_2")
                : this.skillParam.bulletSuffFreezeAdd > 0
                ? (t = "bullet_1_4")
                : "bullet_1_1" === t && (t = this.animName);
            this.anim.play(t);
        };
        e.prototype.onTrigger = function (t, e) {
            if (!this.isUse && e == $object.Trigger.enter) {
                if (cc.isValid(this.targetEnemy) && t.object === this.targetEnemy) {
                    return;
                }
                this.isUse = !0;
                t.object.sufferAtk({
                    id: this.skillId,
                    skillSpecialitys: this.skillSpecialitys,
                    atk: this.atk
                });
                this.removeSelf();
            }
        };
        return __decorate([y], e);
    })($baseBullet.default));
exports.default = g;
