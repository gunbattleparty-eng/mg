var o;
var $object = require("./Object");
var $eventManager = require("./EventManager");
var $util = require("./Util");
var $localEventName = require("./LocalEventName");
var $baseBullet = require("./BaseBullet");
var d = cc._decorator;
var p = d.ccclass;
var f = (d.property, new cc.Vec3(0, -1));
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.buttleType = $baseBullet.BulletType.e_bullet_5;
        return e;
    }
    __extends(e, t);
    e.prototype.initEButtle = function (e, i) {
        t.prototype.initButtle.call(this, null, null);
        this.speed = i;
        this.atk = e;
        var o = $util.default.dirConverAngle(f);
        this.setAngle(o);
        this.velocity.set(f).multiplyScalar(this.speed);
    };
    e.prototype.onTrigger = function (t, e) {
        if (!this.isUse) {
            if (e == $object.Trigger.enter) {
                $eventManager.default.send($localEventName.default.ATK_DOOR, this.atk);
                this.removeSelf();
            }
        }
    };
    return __decorate([p], e);
})($baseBullet.default);
exports.default = h;
