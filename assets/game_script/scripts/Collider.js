exports.cCollider = void 0;
var $agent = require("./Agent");
var $body = require("./Body");
var $object = require("./Object");
var $shape = require("./Shape");
var a = (function () {
    function t() {
        this.id = 0;
        this.pools = [];
        this.axis = -1;
        this.frameID = 0;
        this.bodys = [];
        this.isDirty = !1;
        this.pairs = new Map();
    }
    Object.defineProperty(t, "inst", {
        get: function () {
            if (null == this._inst) {
                this._inst = new t();
            }
            return this._inst;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.create = function (t) {
        var e = this.pools.pop();
        return e ? ((e.object = t), e) : (((e = new $body.cBody(t)).id = this.id++), e);
    };
    t.prototype.insert = function (t, e) {
        if (void 0 === e) {
            e = !1;
        }
        if (t) {
            if (!t.inCollider) {
                this.bodys.push(t);
                t.inCollider = !0;
            }
            t.isRemove = !1;
            t.isRetrieve = !1;
            if (e && t.object) {
                t.object.isDirty = $object.Dirty.RTS;
            }
        }
    };
    t.prototype.remove = function (t, e) {
        if (void 0 === e) {
            e = !1;
        }
        if (t) {
            t.isRemove = !0;
            t.isRetrieve = e;
        }
    };
    t.prototype.reset = function () {
        this.axis = -1;
        this.frameID = 0;
        this.isDirty = !0;
        var t = this.bodys;
        for (var e = t.length - 1; e >= 0; e--) {
            var i = t[e];
            this.pools.push(i);
            i.clear();
        }
        t.length = 0;
    };
    t.prototype.clear = function () {
        this.id = 0;
        this.axis = -1;
        this.frameID = 0;
        this.isDirty = !0;
        this.pools.length = 0;
        var t = this.bodys;
        for (var e = t.length - 1; e >= 0; e--) {
            t[e].clear();
        }
        t.length = 0;
    };
    t.prototype.update = function () {
        this.reBuild();
        this.triggers();
        $agent.Agent.inst.process(this.bodys);
    };
    t.prototype.triggers = function () {
        ++this.frameID;
        var t = this.axis;
        var e = (t >> 2) & 3;
        var i = (t >> 4) & 3;
        var n = this.bodys;
        var s = $agent.Agent.inst;
        var a = 0;
        var l = 0;
        var c = n.length;
        for (a = 0; a < c; a++) {
            var u = n[a];
            if (!u.isRemove) {
                var d = u.aabb;
                var p = d[e];
                var f = d[i];
                var h = u.mask;
                var m = u.group;
                var y = u.upper;
                var g = u.object;
                for (l = a + 1; l < c; l++) {
                    var _ = n[l];
                    if (!_.isRemove) {
                        if (y <= _.lower) {
                            break;
                        }
                        var k = _.aabb;
                        var v = _.object;
                        var b = h & _.group;
                        var w = _.mask & m;
                        if (!(p > k[e + 3] || k[e] > d[e + 3] || f > k[i + 3] || k[i] > d[i + 3])) {
                            if (u.isAgent && _.isAgent) {
                                var A = u.priority - _.priority;
                                if (A <= 0) {
                                    s.check(u, _);
                                }
                                if (A >= 0) {
                                    s.check(_, u);
                                }
                            }
                            if (b || w) {
                                var S = g.shape.type;
                                var C = v.shape.type;
                                if (S > C) {
                                    if (!$shape.ShapeSupport[C | S](_, u)) {
                                        continue;
                                    }
                                } else {
                                    if (!$shape.ShapeSupport[S | C](u, _)) {
                                        continue;
                                    }
                                }
                                this.onTrigger(u, _, (b ? 1 : 0) | (w ? 2 : 0));
                            }
                        }
                    }
                }
            }
        }
        this.endTrigger();
    };
    t.prototype.onTrigger = function (t, e, i) {
        var o = 0;
        var n = 0;
        var r = t.id;
        var a = e.id;
        if (r < a) {
            n = r;
            r = a;
            a = n;
        }
        n = ((r * (r + 1)) >> 1) + a - 1;
        var l = this.pairs;
        var c = l.get(n);
        void 0 !== c
            ? ((o = $object.Trigger.stay), (c.frameID = this.frameID), (c.state = i))
            : ((o = $object.Trigger.enter),
              l.set(n, {
                  id: n,
                  a: t,
                  b: e,
                  frameID: this.frameID,
                  state: i
              }));
        var u = t.object;
        if (1 & i && u && u.trigger && !t.isRemove) {
            u.onTrigger(e, o);
        }
        var d = e.object;
        if (2 & i && d && d.trigger && !e.isRemove) {
            d.onTrigger(t, o);
        }
    };
    t.prototype.endTrigger = function () {
        var t = [];
        var e = this.pairs;
        var i = e.size;
        var o = this.frameID;
        var n = e.values();
        for (var r = 0; r < i; r++) {
            var a = n.next().value;
            var l = a.a;
            var c = a.b;
            if (a.frameID != o || l.isRemove || l.isRemove) {
                var u = l.object;
                if (u && u.trigger && !l.isRemove) {
                    u.onTrigger(c, $object.Trigger.exit);
                }
                var d = c.object;
                if (d && d.trigger && !c.isRemove) {
                    d.onTrigger(l, $object.Trigger.exit);
                }
                t.push(a.id);
            }
        }
        for (i = t.length - 1; i >= 0; ) {
            e.delete(t[i--]);
        }
        t.length = 0;
    };
    t.prototype.reBuild = function () {
        var t = !1;
        var e = this.preBuildAxis();
        if ((3 & e) != (3 & this.axis) || this.axis < 0) {
            this.axis = e;
            t = !0;
        }
        if (t || this.isDirty) {
            this.isDirty = !1;
            var i = this.bodys;
            e = 3 & this.axis;
            var o = 0;
            for (var n = i.length; o !== n; o++) {
                var s = i[o];
                var r = s.aabb;
                s.lower = r[e];
                s.upper = r[e + 3];
            }
            t
                ? i.sort(function (t, e) {
                      return t.lower - e.lower;
                  })
                : this.sort(i);
        }
    };
    t.prototype.sort = function (t) {
        var e;
        var i = 0;
        var o = 0;
        i = 1;
        for (e = t.length; i < e; i++) {
            var n = t[i];
            var s = n.lower;
            for (o = i - 1; o >= 0; o--) {
                var r = t[o];
                if (r.lower <= s) {
                    break;
                }
                t[o + 1] = r;
            }
            if (o + 1 != i) {
                t[o + 1] = n;
            }
        }
    };
    t.prototype.preBuildAxis = function () {
        var t = 0;
        var e = 0;
        var i = 0;
        var o = 0;
        var n = 0;
        var s = 0;
        var r = 0;
        var a = 0;
        var l = 0;
        var c = 0;
        var u = this.bodys;
        var d = u.length;
        var p = 0;
        var f = !1;
        for (var h = 0; h < d; h++) {
            var m = u[h];
            if (m.isRemove) {
                m.isRetrieve && (this.pools.push(m), m.clear());
                m.inCollider = !1;
            } else {
                {
                    if (++p <= h) {
                        u[p - 1] = m;
                    }
                    if (m.updateBound()) {
                        f = !0;
                    }
                    var y = m.aabb;
                    var g = y[3] - y[0];
                    var _ = y[4] - y[1];
                    var k = y[5] - y[2];
                    a += g * g;
                    l += _ * _;
                    c += k * k;
                    var v = 0.5 * (y[3] + y[0]);
                    e += v;
                    i += v * v;
                    var b = 0.5 * (y[4] + y[1]);
                    o += b;
                    n += b * b;
                    var w = 0.5 * (y[5] + y[2]);
                    s += w;
                    r += w * w;
                }
            }
        }
        this.bodys.length = p;
        this.isDirty = f;
        var A = 1 / p;
        var S = (i - e * e * A) * (a = a > 0 ? p / a : 0);
        var C = (n - o * o * A) * (l = l > 0 ? p / l : 0);
        var I = (r - s * s * A) * (c = c > 0 ? p / c : 0);
        if (0 == S) {
            S = a;
        }
        if (0 == C) {
            C = l;
        }
        if (0 == I) {
            I = c;
        }
        S > C
            ? S > I
                ? ((t = 0), (t |= C > I ? 36 : 24))
                : ((t = 2), (t |= S > C ? 16 : 4))
            : C > I
            ? ((t = 1), (t |= S > I ? 32 : 8))
            : ((t = 2), (t |= S > C ? 16 : 4));
        return t;
    };
    t._inst = null;
    return t;
})();
exports.cCollider = a;
