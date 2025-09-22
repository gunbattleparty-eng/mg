var o;
exports.BulletSpeciality = exports.BulletBuff = exports.BulletType = void 0;
var r;
var a;
var l;
var c;
var $object = require("./Object");
var $componentProxy = require("./ComponentProxy");
var $util = require("./Util");
var $gameContext = require("./GameContext");
var h = cc._decorator;
var m = h.ccclass;
h.property;
(c = r = exports.BulletType || (exports.BulletType = {}))[(c.normal_bullet = 1)] = "normal_bullet";
c[(c.boom_bullet = 2)] = "boom_bullet";
c[(c.split_bullet = 3)] = "split_bullet";
c[(c.thermobaric_bullet = 4)] = "thermobaric_bullet";
c[(c.thermobaric_boom = 5)] = "thermobaric_boom";
c[(c.freeze_bullet = 6)] = "freeze_bullet";
c[(c.thermobaric_split = 7)] = "thermobaric_split";
c[(c.freeze_split = 8)] = "freeze_split";
c[(c.thunder_bullet = 9)] = "thunder_bullet";
c[(c.thunder_split = 10)] = "thunder_split";
c[(c.thunder_boom = 11)] = "thunder_boom";
c[(c.thunder_puncture = 12)] = "thunder_puncture";
c[(c.car = 13)] = "car";
c[(c.pulse_laser = 14)] = "pulse_laser";
c[(c.thunder_matrix = 15)] = "thunder_matrix";
c[(c.enemy_boom = 16)] = "enemy_boom";
c[(c.guide_laser = 17)] = "guide_laser";
c[(c.guide_laser_boom = 18)] = "guide_laser_boom";
c[(c.ice_boom = 19)] = "ice_boom";
c[(c.ice_boom_boom = 20)] = "ice_boom_boom";
c[(c.ice_boom_split = 21)] = "ice_boom_split";
c[(c.wind_blade = 22)] = "wind_blade";
c[(c.wind_blade_boom = 23)] = "wind_blade_boom";
c[(c.oil = 24)] = "oil";
c[(c.oil_boom = 25)] = "oil_boom";
c[(c.oil_burn_area = 26)] = "oil_burn_area";
c[(c.oil_burn_area_boom = 27)] = "oil_burn_area_boom";
c[(c.oil_burn_area_no = 28)] = "oil_burn_area_no";
c[(c.drat = 29)] = "drat";
c[(c.drat_release = 30)] = "drat_release";
c[(c.thunder_chain = 31)] = "thunder_chain";
c[(c.thunder_chain_bomb = 32)] = "thunder_chain_bomb";
c[(c.e_bullet_5 = 100)] = "e_bullet_5";
c[(c.e_bullet_6 = 106)] = "e_bullet_6";
c[(c.e_bullet_13 = 113)] = "e_bullet_13";
c[(c.e_bullet_14 = 114)] = "e_bullet_14";
c[(c.e_bullet_29 = 115)] = "e_bullet_29";
c[(c.e_bullet_30 = 116)] = "e_bullet_30";
c[(c.e_bullet_31 = 117)] = "e_bullet_31";
c[(c.s_bullet_2 = 200)] = "s_bullet_2";
c[(c.s_bullet_2_1 = 201)] = "s_bullet_2_1";
c[(c.s_bullet_3 = 202)] = "s_bullet_3";
c[(c.s_bullet_4 = 203)] = "s_bullet_4";
c[(c.s_bullet_5 = 204)] = "s_bullet_5";
c[(c.s_bullet_5_1 = 205)] = "s_bullet_5_1";
c[(c.s_bullet_6 = 206)] = "s_bullet_6";
c[(c.s_bullet_6_1 = 207)] = "s_bullet_6_1";
c[(c.s_bullet_7 = 208)] = "s_bullet_7";
c[(c.r_bullet_1 = 300)] = "r_bullet_1";
c[(c.r_bullet_2 = 301)] = "r_bullet_2";
c[(c.r_bullet_3 = 302)] = "r_bullet_3";
c[(c.r_bullet_4 = 303)] = "r_bullet_4";
c[(c.r_bullet_5_1 = 304)] = "r_bullet_5_1";
c[(c.r_bullet_5_2 = 305)] = "r_bullet_5_2";
c[(c.r_bullet_5_3 = 306)] = "r_bullet_5_3";
c[(c.r_bullet_6 = 307)] = "r_bullet_6";
c[(c.r_bullet_7 = 308)] = "r_bullet_7";
c[(c.r_bullet_8 = 309)] = "r_bullet_8";
c[(c.r_bullet_8_1 = 310)] = "r_bullet_8_1";
(l = exports.BulletBuff || (exports.BulletBuff = {}))[(l.none = 0)] = "none";
l[(l.freeze_damage = 1)] = "freeze_damage";
l[(l.paralysis_damage = 2)] = "paralysis_damage";
l[(l.burn_boom = 3)] = "burn_boom";
l[(l.atk_life = 4)] = "atk_life";
l[(l.not_split = 5)] = "not_split";
(a = exports.BulletSpeciality || (exports.BulletSpeciality = {}))[(a.none = 0)] = "none";
a[(a.trajectory = 1)] = "trajectory";
a[(a.fire = 2)] = "fire";
a[(a.physics = 3)] = "physics";
a[(a.ice = 4)] = "ice";
a[(a.thunder = 5)] = "thunder";
a[(a.energy = 6)] = "energy";
a[(a.floor = 7)] = "floor";
a[(a.laser = 8)] = "laser";
a[(a.wind = 9)] = "wind";
a[(a.boom = 10)] = "boom";
var y = new cc.Vec3();
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = r.normal_bullet;
        e.skillSpecialitys = [];
        e.skillId = 0;
        e.atk = 0;
        e.isUse = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (t, e) {
        this.clearStatus();
        this.skillId = e;
        $componentProxy.default.Ins.pushObj(this);
        if (!this.skillParam) {
            this.skillId
                ? (this.skillParam = $gameContext.default.ins.skillInfo.getSkillById(this.skillId))
                : (this.skillParam = $gameContext.default.ins.skillInfo.getSkillById(1));
        }
        if (t) {
            var i = $util.default.dirConverAngle(t);
            this.setAngle(i);
            this.velocity.set(t);
        }
    };
    e.prototype.removeSelf = function (t) {
        if (void 0 === t) {
            t = !0;
        }
        this.unscheduleAllCallbacks();
        $componentProxy.default.Ins.removeObj(this);
        if (t) {
            $gameContext.default.ins.putButtlePool(this);
        }
    };
    e.prototype.updateFrame = function (t) {
        if (!this.checkBoundary()) {
            return this.removeSelf();
        }
        var e = this.getPosition();
        var i = this.velocity;
        y.x = e.x + i.x * t;
        y.y = e.y + i.y * t;
        y.z = e.z + i.z * t;
        this.setPosition(y);
    };
    e.prototype.checkBoundary = function () {
        return !(
            this.node.x <= -450 ||
            this.node.x >= 450 ||
            this.node.y >= cc.winSize.height / 2 + 100 ||
            this.node.y <= -cc.winSize.height / 2 - 100
        );
    };
    e.prototype.clearStatus = function () {
        this.isUse = !1;
    };
    return __decorate([m], e);
})($object.cObject);
exports.default = g;
