var o;
var $util = require("./Util");
var $gameSkillInfo = require("./GameSkillInfo");
var $baseBullet = require("./BaseBullet");
var $bullet_17_1 = require("./Bullet_17_1");
var u = cc._decorator;
var d = u.ccclass;
var p = u.property;
var f = (cc.size(0, 0), cc.Vec3.ZERO);
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.sourceNode = null;
        e.lineNode = null;
        e.lineBody = null;
        e.linePool = new cc.NodePool();
        e.lineBodyPool = new cc.NodePool();
        e.currLineNodes = [];
        e.currLineBodyNodes = [];
        return e;
    }
    __extends(e, t);
    e.prototype.initButtle = function (e, i) {
        t.prototype.initButtle.call(this, null, i);
        this.clearStatus();
        this.atk = this.skillParam.skillAtk[$gameSkillInfo.Skill4Param.FINAL];
    };
    e.prototype.render = function (t, e) {
        if (t.length > this.currLineNodes.length) {
            var i = t.length - this.currLineNodes.length;
            for (var o = 0; o < i; o++) {
                var n = this.getLine();
                n.active = !0;
                this.currLineNodes.push(n);
                n.parent = this.node;
                (s = this.getLineBody()).active = !0;
                this.currLineBodyNodes.push(s);
                s.getComponent($bullet_17_1.default).insert(this.node);
            }
        } else {
            if (t.length < this.currLineNodes.length) {
                i = this.currLineNodes.length - t.length;
                for (o = 0; o < i; o++) {
                    var s;
                    var a = this.currLineNodes.pop();
                    a.width = 0;
                    this.linePool.put(a);
                    (s = this.currLineBodyNodes.pop()).getComponent($bullet_17_1.default).remove(!1);
                    s.parent = null;
                    this.lineBodyPool.put(s);
                }
            }
        }
        var l = t[0].sub(this.node.position);
        for (o = 0; o < t.length; o++) {
            f.x = 0;
            f.y = 0;
            var u = this.currLineBodyNodes[o].getComponent($bullet_17_1.default);
            var d = e && e.length > o ? e[o].id : -1;
            if (0 === o) {
                var p = $util.default.dirConverAngle(l);
                this.currLineNodes[o].angle = p;
                this.currLineNodes[o].width = l.mag();
                this.sourceNode.angle = p;
                this.currLineNodes[o].setPosition(0, 0);
            } else {
                this.currLineNodes[o].position = l.add(this.currLineNodes[o - 1].position);
                l = t[o].sub(t[o - 1]);
                this.currLineNodes[o].angle = $util.default.dirConverAngle(l);
                this.currLineNodes[o].width = l.mag();
            }
            this.currLineNodes[o].height = this.lineNode.height * this.skillParam.guideLaserWidth;
            this.currLineNodes[o].children[0].setPosition(this.currLineNodes[o].width, 0);
            f.x = this.currLineNodes[o].x;
            f.y = this.currLineNodes[o].y;
            u.setPosition(f);
            u.refreshBullet17(d, this.currLineNodes[o].angle, this.currLineNodes[o].width);
        }
    };
    e.prototype.getLineBody = function () {
        return this.lineBodyPool.size() > 0 ? this.lineBodyPool.get() : cc.instantiate(this.lineBody);
    };
    e.prototype.getLine = function () {
        return this.linePool.size() > 0 ? this.linePool.get() : cc.instantiate(this.lineNode);
    };
    e.prototype.clear = function () {
        var t = this;
        this.currLineNodes.forEach(function (e) {
            e.width = 0;
            t.linePool.put(e);
        });
        this.currLineBodyNodes.forEach(function (e) {
            e.getComponent($bullet_17_1.default).remove(!1);
            e.parent = null;
            t.lineBodyPool.put(e);
        });
        this.currLineNodes.length = 0;
        this.currLineBodyNodes.length = 0;
    };
    e.prototype.onDestroy = function () {
        this.linePool.clear();
        this.lineBodyPool.clear();
    };
    e.prototype.removeSelf = function (e) {
        if (void 0 === e) {
            e = !0;
        }
        this.clear();
        t.prototype.removeSelf.call(this, e);
    };
    e.prototype.updateFrame = function () {};
    __decorate([p(cc.Node)], e.prototype, "sourceNode", void 0);
    __decorate([p(cc.Node)], e.prototype, "lineNode", void 0);
    __decorate([p(cc.Node)], e.prototype, "lineBody", void 0);
    return __decorate([d], e);
})($baseBullet.default);
exports.default = h;
