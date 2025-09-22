var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $popupView = require("./PopupView");
var $seedUtil = require("./SeedUtil");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var h = cc._decorator;
var m = h.ccclass;
var y = h.property;
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.chooseSkillLayer = null;
        e.chooseAnimLayer = null;
        e.boxLayer = null;
        e.closeContent = null;
        e.skills = [];
        e.currSkills = [];
        e.currIndexs = [];
        e.poss = [];
        e.animStatus = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        var t = this;
        this.skills = this.uiParam.param.skillIds;
        var e = this.uiParam.param.randomCount;
        for (var i = 0; i < this.chooseAnimLayer.children.length; i++) {
            this.poss[i] = this.chooseAnimLayer.children[i].position.clone();
        }
        var o = Math.min(e, this.skills.length);
        this.currSkills = $seedUtil.default.randomArr(this.skills, o);
        this.currSkills.forEach(function (e) {
            t.currIndexs.push(t.skills.indexOf(e));
        });
        if (this.skills.length < 12) {
            var n = 12 - this.skills.length;
            for (i = 0; i < n; i++) {
                this.skills.push(this.skills[$seedUtil.default.randomFrom(0, this.skills.length - 1)]);
            }
        }
        console.log("技能池:", this.skills);
        console.log("选中:", this.currIndexs, this.currSkills);
        this.render();
        this.startAnim();
    };
    e.prototype.addEvent = function () {
        this.closeContent.on(cc.Node.EventType.TOUCH_START, this.touchEnd, this);
    };
    e.prototype.removeEvent = function () {
        this.closeContent.off(cc.Node.EventType.TOUCH_START, this.touchEnd, this);
    };
    e.prototype.render = function () {
        var t = this;
        var e = function (e) {
            var o = i.chooseSkillLayer.children[e];
            o.active = !0;
            if (i.currIndexs.length <= e) {
                o.active = !1;
                return "continue";
            }
            var n = $configContext.default.instance.skillConfigsMap.get(i.currSkills[e]);
            var s = o.children[0].getComponent(cc.Sprite);
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public_Res,
                ["/skills/" + n.icon],
                cc.SpriteFrame,
                null,
                function (e, i) {
                    var o = i[0];
                    if (o && cc.isValid(s)) {
                        s.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
                    }
                }
            );
            o.children[1].getComponent(cc.Label).string = n.name;
            o.children[2].getComponent(cc.Label).string = n.skill_text;
            o.active = !1;
        };
        var i = this;
        for (var o = 0; o < this.chooseSkillLayer.children.length; o++) {
            e(o);
        }
        var n = function (e) {
            var i = $configContext.default.instance.skillConfigsMap.get(s.skills[e]);
            var o = s.chooseAnimLayer.children[e].children[1].getComponent(cc.Sprite);
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public_Res,
                ["/skills/" + i.icon],
                cc.SpriteFrame,
                null,
                function (e, i) {
                    var n = i[0];
                    if (n && cc.isValid(o)) {
                        o.spriteFrame = $resUtil.ResUtil.assignWith(n, t.node);
                    }
                }
            );
        };
        var s = this;
        for (o = 0; o < this.skills.length; o++) {
            n(o);
        }
    };
    e.prototype.startAnim = function () {
        var t = this;
        this.animStatus = 1;
        var e = 0;
        var i = $seedUtil.default.randomCount(0, 11, this.currIndexs.length);
        for (var o = 0; o < this.currIndexs.length; o++) {
            var n = this.boxLayer.children[o];
            n.active = !0;
            this.animItem(n, i[o], o, function () {
                if (++e >= t.currIndexs.length) {
                    t.animStatus = 2;
                }
            });
        }
    };
    e.prototype.animItem = function (t, e, i, o) {
        var n = this;
        t.position = this.poss[e].clone();
        var s;
        var r = this.currIndexs[i];
        var a = 5 / (60 + (s = r < e ? 11 - e + r + 1 : r - e) + r);
        var l = 60 + s + this.currIndexs[i];
        var c = e;
        var u = cc.tween(t);
        for (var d = 0; d < l; d++) {
            ++c >= 12 && (c = 0);
            u.to(a, {
                position: this.poss[c]
            });
        }
        u.call(function () {
            n.chooseSkillLayer.children[i].active = !0;
            if (o) {
                o();
            }
        });
        u.repeat(
            2,
            cc
                .tween()
                .to(0.3, {
                    opacity: 0
                })
                .to(0.3, {
                    opacity: 255
                })
        );
        u.start();
    };
    e.prototype.touchEnd = function () {
        if (1 === this.animStatus) {
            this.animStatus = 3;
            for (var e = 0; e < this.currIndexs.length; e++) {
                cc.Tween.stopAllByTarget(this.boxLayer.children[e]);
                this.boxLayer.children[e].active = !0;
                this.boxLayer.children[e].opacity = 255;
                this.boxLayer.children[e].position = this.poss[this.currIndexs[e]];
                this.chooseSkillLayer.children[e].active = !0;
            }
        } else {
            if (2 === this.animStatus || 3 === this.animStatus) {
                this.animStatus = 4;
                for (e = 0; e < this.currSkills.length; e++) {
                    $eventManager.default.send($localEventName.default.CHOOSE_SKILL, this.currSkills[e]);
                }
                t.prototype.onClickClose.call(this);
            }
        }
    };
    __decorate([y(cc.Node)], e.prototype, "chooseSkillLayer", void 0);
    __decorate([y(cc.Node)], e.prototype, "chooseAnimLayer", void 0);
    __decorate([y(cc.Node)], e.prototype, "boxLayer", void 0);
    __decorate([y(cc.Node)], e.prototype, "closeContent", void 0);
    return __decorate([m], e);
})($popupView.PopupView);
exports.default = g;
