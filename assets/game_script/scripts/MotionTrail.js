var o;
var r = function () {
    this.x = 0;
    this.y = 0;
    this.dis = 0;
    this.cos = 0;
    this.sin = 0;
};
var a = cc._decorator;
var l = a.ccclass;
var c = a.property;
var u = a.playOnFocus;
var d = a.menu;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.atlas = null;
        e._spriteFrame = null;
        e._isActive = !0;
        e._isWorldXY = !0;
        e.offset = cc.v2(0, 0);
        e._length = 20;
        e._headWidth = 100;
        e._tailWidth = 0;
        e._headOpacity = 255;
        e._tailOpacity = 0;
        e.renderData = null;
        e.xyOffset = 1e8;
        e.uvOffset = 1e8;
        e.colorOffset = 1e8;
        e.step = 0;
        e.joints = [];
        e.cascadeScale = cc.v2(1, 1);
        e.visibleScale = cc.v2(1, 1);
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "spriteFrame", {
        get: function () {
            return this._spriteFrame;
        },
        set: function (t) {
            this._spriteFrame = t;
            this.updateSpriteFrame();
            this.updateUV();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (t) {
            this._isActive = this.enabled = t;
            this.updateActive();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "isWorldXY", {
        get: function () {
            return this._isWorldXY;
        },
        set: function (t) {
            this._isWorldXY = t;
            this.resetPos();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (t) {
            this._length = Math.max(t, 2);
            this.updateLength();
            this.updateIndice();
            this.updateUV();
            this.updateWidth();
            this.resetPos();
            this.node._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "headWidth", {
        get: function () {
            return this._headWidth;
        },
        set: function (t) {
            this._headWidth = Math.max(t, 0);
            this.updateWidth();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "tailWidth", {
        get: function () {
            return this._tailWidth;
        },
        set: function (t) {
            this._tailWidth = Math.max(t, 0);
            this.updateWidth();
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "headOpacity", {
        get: function () {
            return this._headOpacity;
        },
        set: function (t) {
            this._headOpacity = t;
            this.node._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "tailOpacity", {
        get: function () {
            return this._tailOpacity;
        },
        set: function (t) {
            this._tailOpacity = t;
            this.node._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR;
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype._resetAssembler = function () {
        var t = (this._assembler = new cc.Assembler());
        t.updateRenderData = this.updateXY.bind(this);
        t.updateColor = this.updateColor.bind(this);
        this.update = this.setVertsDirty;
        t.init(this);
        this.renderData = new cc.RenderData();
        this.renderData.init(t);
        var e = t.getVfmt();
        var i = e._elements;
        for (var o = i.length - 1; o > -1; this.step += i[o--].bytes >> 2) {}
        var n = e._attr2el;
        this.xyOffset = n.a_position.offset >> 2;
        this.uvOffset = n.a_uv0.offset >> 2;
        this.colorOffset = n.a_color.offset >> 2;
    };
    e.prototype.onLoad = function () {
        this.updateSpriteFrame();
        this.updateLength();
        this.updateIndice();
        this.updateUV();
        this.updateWidth();
        this.updateActive();
        if (cc.sys.isNative) {
            cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.updateColor, this);
        }
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.updateVisibleScale, this);
    };
    e.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.SCALE_CHANGED, this.updateVisibleScale, this);
    };
    e.prototype.updateActive = function () {
        if (this._isActive) {
            this.updateCascadeScale();
            this.updateVisibleScale();
            this.resetPos();
        }
    };
    e.prototype.createBuffer = function (t, e) {
        if (void 0 === e) {
            e = t - 2;
        }
        var i = new Float32Array(this.step * t);
        var o = new Uint16Array(3 * e);
        this.renderData.updateMesh(0, i, o);
    };
    e.prototype.fillBuffers = function (t, e) {
        var i = this.renderData.vDatas[0];
        var o = this.renderData.iDatas[0];
        var n = e._meshBuffer;
        var s = n.request(i.length, o.length);
        var r = s.byteOffset >> 2;
        var a = n._vData;
        i.length + r > a.length ? a.set(i.subarray(0, a.length - r), r) : a.set(i, r);
        var l = n._iData;
        var c = s.indiceOffset;
        var u = s.vertexOffset;
        var d = 0;
        for (var p = o.length; d < p; l[c++] = u + o[d++]) {}
    };
    e.prototype.updateSpriteFrame = function () {
        var t = this._spriteFrame;
        this._assembler.fillBuffers = t ? this.fillBuffers.bind(this) : function () {};
        var e = this.getMaterial(0) || cc.Material.getBuiltinMaterial("2d-sprite");
        e.define("USE_TEXTURE", !0);
        e.setProperty("texture", t ? t.getTexture() : null);
    };
    e.prototype.updateCascadeScale = function () {
        var t = this.node;
        var e = 1;
        for (var i = 1; null !== t._parent; ) {
            e *= (t = t._parent).scaleX;
            i *= t.scaleY;
        }
        this.cascadeScale.x = e;
        this.cascadeScale.y = i;
    };
    e.prototype.updateVisibleScale = function () {
        this.visibleScale.x = this.cascadeScale.x * this.node.scaleX;
        this.visibleScale.y = this.cascadeScale.y * this.node.scaleY;
    };
    e.prototype.updateXY = function () {
        var t = this.node;
        var e = this.joints;
        for (var i = this._length - 1; i > 0; --i) {
            var o = e[i];
            var n = e[i - 1];
            o.x = n.x;
            o.y = n.y;
            o.sin = n.sin;
            o.cos = n.cos;
        }
        var s = e[0];
        var r = e[1];
        var a = this.visibleScale.x;
        var l = this.visibleScale.y;
        if (this._isWorldXY) {
            var c = t._worldMatrix.m;
            s.x = this.offset.x * a + c[12];
            s.y = this.offset.y * l + c[13];
        } else {
            s.x = this.offset.x * t.scaleX + t.x;
            s.y = this.offset.y * t.scaleY + t.y;
        }
        var u = r.y - s.y;
        var d = r.x - s.x;
        var p = Math.sqrt(u * u + d * d);
        s.sin = u / p;
        s.cos = d / p;
        var f = this.renderData.vDatas[0];
        var h = 0;
        var m = 0;
        var y = 1;
        var g = 1;
        if (!this._isWorldXY) {
            h = t.x;
            m = t.y;
            y = this.cascadeScale.x;
            g = this.cascadeScale.y;
        }
        var _ = 0;
        var k = this.step;
        var v = 0;
        var b = 0;
        var w = 0;
        var A = 0;
        for (var S = ((i = 0), this._length - 1); i < S; ++i) {
            s = e[i];
            r = e[i + 1];
            v = (s.x - h) * y;
            b = (s.y - m) * g;
            w = s.dis * a * s.sin;
            A = s.dis * l * s.cos;
            f[_] = v + w;
            f[_ + 1] = b - A;
            f[(_ += k)] = v - w;
            f[_ + 1] = b + A;
            _ += k;
        }
        v = (r.x - h) * y;
        b = (r.y - m) * g;
        w = r.dis * a * s.sin;
        A = r.dis * l * s.cos;
        f[_] = v + w;
        f[_ + 1] = b - A;
        f[(_ += k)] = v - w;
        f[_ + 1] = b + A;
        this.fitXY(f);
    };
    e.prototype.resetPos = function () {
        var t = this.offset.x;
        var e = this.offset.y;
        var i = this.node;
        if (this._isWorldXY) {
            var o = i._worldMatrix.m;
            i._updateWorldMatrix();
            t += o[12];
            e += o[13];
        } else {
            t += i.x;
            e += i.y;
        }
        var n = this._length - 1;
        for (var s = this.joints; n > -1; --n) {
            s[n].x = t;
            s[n].y = e;
        }
        var r = this.renderData.vDatas[0];
        var a = ((n = this.xyOffset), r.length);
        for (var l = this.step; n < a; n += l) {
            r[n] = t;
            r[n + 1] = e;
        }
        this.fitXY(r);
    };
    e.prototype.fitXY = function (t) {
        if (cc.sys.isNative) {
            this.node._updateWorldMatrix();
            var e = cc.Mat4.invert(new cc.Mat4(), this.node._worldMatrix).m;
            var i = e[0];
            var o = e[1];
            var n = e[4];
            var s = e[5];
            var r = 0;
            var a = 0;
            if (this._isWorldXY) {
                r = e[12];
                a = e[13];
            }
            var l = this.xyOffset;
            for (var c = t.length; l < c; l += this.step) {
                var u = t[l];
                var d = t[l + 1];
                t[l] = i * u + n * d + r;
                t[l + 1] = o * u + s * d + a;
            }
        } else {
            if (!this._isWorldXY) {
                var p = this.node._worldMatrix.m;
                r = p[12];
                a = p[13];
                l = this.xyOffset;
                for (c = t.length; l < c; l += this.step) {
                    t[l] = t[l] + r;
                    t[l + 1] = t[l + 1] + a;
                }
            }
        }
    };
    e.prototype.updateUV = function () {
        var t = this.renderData.vDatas[0];
        var e = this.step;
        var i = 1 / (this.joints.length - 1);
        var o = this.uvOffset;
        var n = 0;
        for (var s = t.length; o < s; o += e, ++n) {
            t[o] = 1 & n;
            t[o + 1] = 1 - i * (n >> 1);
        }
        this.fitUV(t);
    };
    e.prototype.fitUV = function (t) {
        var e = this._spriteFrame;
        if (null !== e) {
            var i = e._texture.width;
            var o = e._texture.height;
            var n = e._rect;
            if (e._rotated) {
                var s = this.uvOffset;
                var r = 0;
                var a = t.length;
                for (var l = this.step; s < a; s += l, ++r) {
                    var c = t[s];
                    t[s] = ((1 - t[s + 1]) * n.height + n.x) / i;
                    t[s + 1] = (c * n.width + n.y) / o;
                }
            } else {
                s = this.uvOffset;
                r = 0;
                a = t.length;
                for (l = this.step; s < a; s += l, ++r) {
                    t[s] = (t[s] * n.width + n.x) / i;
                    t[s + 1] = (t[s + 1] * n.height + n.y) / o;
                }
            }
        }
    };
    e.prototype.updateColor = function () {
        var t = this._length;
        var e = this._headOpacity;
        var i = (e - this._tailOpacity) / (t - 1);
        var o = this.node.color.a / 255;
        var n = 16777215 & this.node.color._val;
        var s = this.renderData.uintVDatas[0];
        var r = 0;
        var a = this.colorOffset;
        for (var l = this.step; r < t; ++r) {
            var c = (((e - i * r) * o) << 24) | n;
            s[a] = c;
            s[(a += l)] = c;
            a += l;
        }
    };
    e.prototype.updateIndice = function () {
        var t = this.renderData.iDatas[0];
        var e = 0;
        var i = 0;
        for (var o = t.length; e < o; ++i) {
            t[e++] = i;
            t[e++] = i + 1;
            t[e++] = i + 2;
        }
    };
    e.prototype.updateLength = function () {
        var t = this._length;
        var e = 0;
        for (var i = (this.joints = []); e < t; i[e++] = new r()) {}
        this.createBuffer(t << 1);
    };
    e.prototype.updateWidth = function () {
        var t = this._length;
        var e = 0.5 * this._headWidth;
        var i = (e - 0.5 * this._tailWidth) / (t - 1);
        var o = 0;
        for (var n = this.joints; o < t; n[o].dis = e - i * o++) {}
    };
    __decorate(
        [
            c({
                type: cc.SpriteAtlas,
                serializable: !1,
                readonly: !0
            })
        ],
        e.prototype,
        "atlas",
        void 0
    );
    __decorate([c], e.prototype, "_spriteFrame", void 0);
    __decorate(
        [
            c({
                type: cc.SpriteFrame
            })
        ],
        e.prototype,
        "spriteFrame",
        null
    );
    __decorate([c], e.prototype, "_isActive", void 0);
    __decorate([c({})], e.prototype, "isActive", null);
    __decorate([c], e.prototype, "_isWorldXY", void 0);
    __decorate([c({})], e.prototype, "isWorldXY", null);
    __decorate([c({})], e.prototype, "offset", void 0);
    __decorate([c], e.prototype, "_length", void 0);
    __decorate(
        [
            c({
                type: cc.Integer
            })
        ],
        e.prototype,
        "length",
        null
    );
    __decorate([c], e.prototype, "_headWidth", void 0);
    __decorate([c({})], e.prototype, "headWidth", null);
    __decorate([c], e.prototype, "_tailWidth", void 0);
    __decorate([c({})], e.prototype, "tailWidth", null);
    __decorate([c], e.prototype, "_headOpacity", void 0);
    __decorate(
        [
            c({
                type: cc.Integer,
                min: 0,
                max: 255,
                slide: !0
            })
        ],
        e.prototype,
        "headOpacity",
        null
    );
    __decorate([c], e.prototype, "_tailOpacity", void 0);
    __decorate(
        [
            c({
                type: cc.Integer,
                min: 0,
                max: 255,
                slide: !0
            })
        ],
        e.prototype,
        "tailOpacity",
        null
    );
    return __decorate([l, u, d("自定义组件/MotionTrail")], e);
})(cc.RenderComponent);
exports.default = p;
