var o;
var $eventManager = require("./EventManager");
var $componentProxy = require("./ComponentProxy");
var $localEventName = require("./LocalEventName");
var $roleContext = require("./RoleContext");
var $gun_10 = require("./Gun_10");
var $gun_11 = require("./Gun_11");
var $gun_12 = require("./Gun_12");
var $gun_2 = require("./Gun_2");
var $gun_3 = require("./Gun_3");
var $gun_4 = require("./Gun_4");
var $gun_5 = require("./Gun_5");
var $gun_6 = require("./Gun_6");
var $gun_7 = require("./Gun_7");
var $gun_8 = require("./Gun_8");
var $gun_9 = require("./Gun_9");
var $rGun_1 = require("./RGun_1");
var $rGun_2 = require("./RGun_2");
var $rGun_3 = require("./RGun_3");
var $rGun_4 = require("./RGun_4");
var $rGun_5 = require("./RGun_5");
var $rGun_6 = require("./RGun_6");
var $rGun_7 = require("./RGun_7");
var $rGun_8 = require("./RGun_8");
var B = cc._decorator;
var x = B.ccclass;
var O = B.property;
var L = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.chooseGuns = [];
        e.chooseSkillIds = new Set();
        e.skin = null;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        $componentProxy.default.Ins.pushObj(this);
        $eventManager.default.on($localEventName.default.ADD_SKILL_CD, this.addSkill, this);
        if (2 === $roleContext.default.ins.currSkinInfo.robot) {
            var t = new $rGun_1.default(this.node, this.skin);
            this.chooseGuns.push(t);
        } else {
            3 === $roleContext.default.ins.currSkinInfo.robot
                ? ((t = new $rGun_2.default(this.node)), this.chooseGuns.push(t))
                : 4 === $roleContext.default.ins.currSkinInfo.robot
                ? ((t = new $rGun_3.default(this.node)), this.chooseGuns.push(t))
                : 5 === $roleContext.default.ins.currSkinInfo.robot
                ? ((t = new $rGun_4.default(this.node)), this.chooseGuns.push(t))
                : 6 === $roleContext.default.ins.currSkinInfo.robot
                ? ((t = new $rGun_5.default(this.node)), this.chooseGuns.push(t))
                : 7 === $roleContext.default.ins.currSkinInfo.robot
                ? ((t = new $rGun_6.default(this.node)), this.chooseGuns.push(t))
                : 8 === $roleContext.default.ins.currSkinInfo.robot
                ? ((t = new $rGun_7.default(this.node)), this.chooseGuns.push(t))
                : 9 === $roleContext.default.ins.currSkinInfo.robot &&
                  ((t = new $rGun_8.default(this.node)), this.chooseGuns.push(t));
        }
    };
    e.prototype.onDestroy = function () {
        $componentProxy.default.Ins.removeObj(this);
        $eventManager.default.off($localEventName.default.ADD_SKILL_CD, this.addSkill, this);
    };
    e.prototype.addSkill = function (t) {
        if (!this.chooseSkillIds.has(t)) {
            this.chooseSkillIds.add(t);
            if (23 === t) {
                var e = new $gun_2.default(this.node);
                this.chooseGuns.push(e);
            } else {
                41 === t
                    ? ((e = new $gun_3.default(this.node)), this.chooseGuns.push(e))
                    : 61 === t
                    ? ((e = new $gun_4.default(this.node)), this.chooseGuns.push(e))
                    : 81 === t
                    ? ((e = new $gun_5.default(this.node)), this.chooseGuns.push(e))
                    : 100 === t
                    ? ((e = new $gun_6.default(this.node)), this.chooseGuns.push(e))
                    : 116 === t
                    ? ((e = new $gun_7.default(this.node)).initBullet(), this.chooseGuns.push(e))
                    : 135 === t
                    ? ((e = new $gun_8.default(this.node)), this.chooseGuns.push(e))
                    : 209 === t
                    ? ((e = new $gun_9.default(this.node)), this.chooseGuns.push(e))
                    : 227 === t
                    ? ((e = new $gun_10.default(this.node)), this.chooseGuns.push(e))
                    : 247 === t
                    ? ((e = new $gun_11.default(this.node)), this.chooseGuns.push(e))
                    : 153 === t && ((e = new $gun_12.default(this.node)), this.chooseGuns.push(e));
            }
        }
    };
    e.prototype.updateFrame = function (t) {
        for (var e = 0; e < this.chooseGuns.length; e++) {
            this.chooseGuns[e].updateF(t);
        }
    };
    __decorate([O(dragonBones.ArmatureDisplay)], e.prototype, "skin", void 0);
    return __decorate([x], e);
})(cc.Component);
exports.default = L;
