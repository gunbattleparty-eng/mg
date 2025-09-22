var o;
exports.HollowOutShape = void 0;
require("./EditorAsset");
var l;
var c;
var u = cc._decorator;
var d = u.ccclass;
var p = u.property;
var f = u.requireComponent;
var h = u.executeInEditMode;
var m = u.disallowMultiple;
var y = u.executionOrder;
(c = l = exports.HollowOutShape || (exports.HollowOutShape = {}))[(c.Rect = 1)] = "Rect";
c[(c.Circle = 2)] = "Circle";
var g = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e._effect = null;
        e._shape = l.Rect;
        e._center = cc.v2();
        e._width = 300;
        e._height = 300;
        e._round = 1;
        e._radius = 200;
        e._feather = 0.5;
        e.isStartInit = !1;
        e.sprite = null;
        e.material = null;
        e.tweenRes = null;
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "effect", {
        get: function () {
            return this._effect;
        },
        set: function (t) {
            this._effect = t;
            this.init();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        set: function (t) {
            this._shape = t;
            this.updateProperties();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "center", {
        get: function () {
            return this._center;
        },
        set: function (t) {
            this._center = t;
            this.updateProperties();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (t) {
            this._width = t;
            this.updateProperties();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (t) {
            this._height = t;
            this.updateProperties();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "round", {
        get: function () {
            return this._round;
        },
        set: function (t) {
            this._round = t;
            this.updateProperties();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (t) {
            this._radius = t;
            this.updateProperties();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "feather", {
        get: function () {
            return this._feather;
        },
        set: function (t) {
            this._feather = t;
            this.updateProperties();
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.onLoad = function () {
        if (this.isStartInit) {
            this.init();
        }
        this.node.zIndex = 999;
    };
    e.prototype.resetInEditor = function () {
        this.init();
    };
    e.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [3, 2];
                    case 1:
                        e.sent();
                        e.label = 2;
                    case 2:
                        return this._effect
                            ? ((t = this.sprite = this.node.getComponent(cc.Sprite)).spriteFrame &&
                                  (t.spriteFrame.getTexture().packable = !1),
                              (this.material = cc.Material.create(this._effect)),
                              t.setMaterial(0, this.material),
                              this.updateProperties(),
                              [2])
                            : [2];
                }
            });
        });
    };
    e.prototype.updateProperties = function () {
        switch (this._shape) {
            case l.Rect:
                this.rect(this._center, this._width, this._height, this._round, this._feather);
                break;
            case l.Circle:
                this.circle(this._center, this._radius, this._feather);
        }
    };
    e.prototype.rect = function (t, e, i, o, n) {
        this._shape = l.Rect;
        if (null != t) {
            this._center = t;
        }
        if (null != e) {
            this._width = e;
        }
        if (null != i) {
            this._height = i;
        }
        if (null != o) {
            this._round = o >= 0 ? o : 0;
            var s = Math.min(this._width / 2, this._height / 2);
            this._round = this._round <= s ? this._round : s;
        }
        if (null != n) {
            this._feather = n >= 0 ? n : 0;
            this._feather = this._feather <= this._round ? this._feather : this._round;
        }
        var r = this.material;
        r.setProperty("size", this.getNodeSize());
        r.setProperty("center", this.getCenter(this._center));
        r.setProperty("width", this.getWidth(this._width));
        r.setProperty("height", this.getHeight(this._height));
        r.setProperty("round", this.getRound(this._round));
        r.setProperty("feather", this.getFeather(this._feather));
    };
    e.prototype.circle = function (t, e, i) {
        this._shape = l.Circle;
        if (null != t) {
            this._center = t;
        }
        if (null != e) {
            this._radius = e;
        }
        if (null != i) {
            this._feather = i >= 0 ? i : 0;
        }
        var o = this.material;
        o.setProperty("size", this.getNodeSize());
        o.setProperty("center", this.getCenter(this._center));
        o.setProperty("width", this.getWidth(2 * this._radius));
        o.setProperty("height", this.getHeight(2 * this._radius));
        o.setProperty("round", this.getRound(this._radius));
        o.setProperty("feather", this.getFeather(this._feather));
    };
    e.prototype.rectTo = function (t, e, i, o, n, s) {
        var r = this;
        if (void 0 === n) {
            n = 0;
        }
        if (void 0 === s) {
            s = 0;
        }
        return new Promise(function (a) {
            r._shape = l.Rect;
            cc.Tween.stopAllByTarget(r);
            r.unscheduleAllCallbacks();
            if (r.tweenRes) {
                r.tweenRes();
            }
            r.tweenRes = a;
            n = Math.min(n, i / 2, o / 2);
            s = Math.min(s, n);
            cc.tween(r)
                .to(t, {
                    center: e,
                    width: i,
                    height: o,
                    round: n,
                    feather: s
                })
                .call(function () {
                    r.scheduleOnce(function () {
                        if (r.tweenRes) {
                            r.tweenRes();
                            r.tweenRes = null;
                        }
                    });
                })
                .start();
        });
    };
    e.prototype.circleTo = function (t, e, i, o) {
        var n = this;
        if (void 0 === o) {
            o = 0;
        }
        return new Promise(function (s) {
            n._shape = l.Circle;
            cc.Tween.stopAllByTarget(n);
            n.unscheduleAllCallbacks();
            if (n.tweenRes) {
                n.tweenRes();
            }
            n.tweenRes = s;
            cc.tween(n)
                .to(t, {
                    center: e,
                    radius: i,
                    feather: o
                })
                .call(function () {
                    n.scheduleOnce(function () {
                        if (n.tweenRes) {
                            n.tweenRes();
                            n.tweenRes = null;
                        }
                    });
                })
                .start();
        });
    };
    e.prototype.reset = function () {
        this.rect(cc.v2(), 0, 0, 0, 0);
    };
    e.prototype.setNodeSize = function () {
        var t = this.node;
        var e = t.width;
        var i = t.height;
        this._radius = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) / 2;
        this.rect(t.getPosition(), e, i, 0, 0);
    };
    e.prototype.getCenter = function (t) {
        var e = this.node;
        var i = e.width;
        var o = e.height;
        var n = (t.x + i / 2) / i;
        var s = (-t.y + o / 2) / o;
        return cc.v2(n, s);
    };
    e.prototype.getNodeSize = function () {
        return cc.v2(this.node.width, this.node.height);
    };
    e.prototype.getWidth = function (t) {
        return t / this.node.width;
    };
    e.prototype.getHeight = function (t) {
        return t / this.node.width;
    };
    e.prototype.getRound = function (t) {
        return t / this.node.width;
    };
    e.prototype.getFeather = function (t) {
        return t / this.node.width;
    };
    __decorate([p], e.prototype, "_effect", void 0);
    __decorate(
        [
            p({
                type: cc.EffectAsset,
                readonly: !0
            })
        ],
        e.prototype,
        "effect",
        null
    );
    __decorate([p], e.prototype, "_shape", void 0);
    __decorate(
        [
            p({
                type: cc.Enum(l)
            })
        ],
        e.prototype,
        "shape",
        null
    );
    __decorate([p], e.prototype, "_center", void 0);
    __decorate([p({})], e.prototype, "center", null);
    __decorate([p], e.prototype, "_width", void 0);
    __decorate(
        [
            p({
                visible: function () {
                    return this._shape === l.Rect;
                }
            })
        ],
        e.prototype,
        "width",
        null
    );
    __decorate([p], e.prototype, "_height", void 0);
    __decorate(
        [
            p({
                visible: function () {
                    return this._shape === l.Rect;
                }
            })
        ],
        e.prototype,
        "height",
        null
    );
    __decorate([p], e.prototype, "_round", void 0);
    __decorate(
        [
            p({
                visible: function () {
                    return this._shape === l.Rect;
                }
            })
        ],
        e.prototype,
        "round",
        null
    );
    __decorate([p], e.prototype, "_radius", void 0);
    __decorate(
        [
            p({
                visible: function () {
                    return this._shape === l.Circle;
                }
            })
        ],
        e.prototype,
        "radius",
        null
    );
    __decorate([p], e.prototype, "_feather", void 0);
    __decorate(
        [
            p({
                visible: function () {
                    return this._shape === l.Circle || this.round > 0;
                }
            })
        ],
        e.prototype,
        "feather",
        null
    );
    __decorate([p], e.prototype, "isStartInit", void 0);
    return __decorate([d, f(cc.Sprite), h, m, y(-20)], e);
})(cc.Component);
exports.default = g;
