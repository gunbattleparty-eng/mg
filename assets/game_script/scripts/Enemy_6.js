var o;
var $baseBullet = require("./BaseBullet");
var $enemy_5 = require("./Enemy_5");
var l = cc._decorator;
var c = l.ccclass;
var u =
    (l.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.buttleType = $baseBullet.BulletType.e_bullet_6;
            return e;
        }
        __extends(e, t);
        return __decorate([c], e);
    })($enemy_5.default));
exports.default = u;
