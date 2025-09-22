exports.Agent = exports.RVOConfig = exports.KeyValuePair = exports.ObserverObj = void 0;
var $maths = require("./Maths");
var n = function (t) {
    if (t) {
        this.value = t;
    }
};
exports.ObserverObj = n;
exports.KeyValuePair = function (t, e) {
    this.Key = t;
    this.Value = e;
};
var s = (function () {
    function t() {}
    t.agentCount = 10;
    t.neighborDist = 0.75;
    t.radius = 0.5;
    t.maxSpeed = 1;
    t.velocity = new cc.Vec3();
    t.maxNeighbors = 10;
    t.timeHorizon = 5;
    t.timeHorizonObst = 0;
    t.timeStep = 0.05;
    return t;
})();
exports.RVOConfig = s;
var r = (function () {
    function t() {}
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
    t.prototype.check = function (t, e) {
        var i = 1 / s.timeHorizon;
        var n = $maths.Vector2.subtract(e.getCenter(), t.getCenter());
        var r = $maths.Vector2.subtract(t.newVelocity, e.newVelocity);
        var a = t.neighborDist + e.neighborDist;
        var l = $maths.RVOMath.sqr(a);
        var c = $maths.RVOMath.absSq(n);
        var u = new $maths.Vector2();
        var d = new $maths.Vector2();
        if (c > l) {
            var p = $maths.Vector2.subtract(r, $maths.Vector2.multiply2(i, n));
            var f = $maths.RVOMath.absSq(p);
            var h = $maths.Vector2.multiply(p, n);
            if (h < 0 && $maths.RVOMath.sqr(h) > l * f) {
                var m = $maths.RVOMath.sqrt(f);
                var y = $maths.Vector2.division(p, m);
                d = new $maths.Vector2(y.y, -y.x);
                u = $maths.Vector2.multiply2(a * i - m, y);
            } else {
                var g = $maths.RVOMath.sqrt(c - l);
                d =
                    $maths.RVOMath.det(n, p) > 0
                        ? $maths.Vector2.division(new $maths.Vector2(n.x * g - n.y * a, n.x * a + n.y * g), c)
                        : $maths.Vector2.division(new $maths.Vector2(n.x * g + n.y * a, -n.x * a + n.y * g), -c);
                var _ = $maths.Vector2.multiply(r, d);
                u = $maths.Vector2.subtract($maths.Vector2.multiply2(_, d), r);
            }
        } else {
            var k = 1 / s.timeStep;
            p = $maths.Vector2.subtract(r, $maths.Vector2.multiply2(k, n));
            m = $maths.RVOMath.abs(p);
            y = $maths.Vector2.division(p, m);
            d = new $maths.Vector2(y.y, -y.x);
            u = $maths.Vector2.multiply2(a * k - m, y);
        }
        var v = new $maths.Line();
        v.direction = new $maths.Vector2(d.x, d.y);
        v.point = $maths.Vector2.addition(t.newVelocity, $maths.Vector2.multiply2(0.5, u));
        t.orcaLines.push(v);
    };
    t.prototype.process = function (t) {
        var e = 0;
        for (var i = t.length; e < i; e++) {
            var s = t[e];
            if (s.isAgent && s.orcaLines.length > 0) {
                if (!s.isRemove && s.object) {
                    var r = new n(new $maths.Vector2(s.newVelocity.x, s.newVelocity.y));
                    var a = this.linearProgram2(s.orcaLines, s.maxVelocity, s.prefVelocity, !1, r);
                    if (a < s.orcaLines.length) {
                        this.linearProgram3(s.orcaLines, 0, a, s.maxVelocity, r);
                    }
                    var l = r.value;
                    s.prefVelocity.x = s.newVelocity.x;
                    s.prefVelocity.y = s.newVelocity.y;
                    if (s.object) {
                        var c = s.object.velocity;
                        c.x = l.x;
                        c.y = l.y;
                        c.z = 0;
                    }
                }
                s.orcaLines.length = 0;
            }
        }
    };
    t.prototype.linearProgram1 = function (t, e, i, n, s, r) {
        var a = $maths.Vector2.multiply(t[e].point, t[e].direction);
        var l = $maths.RVOMath.sqr(a) + $maths.RVOMath.sqr(i) - $maths.RVOMath.absSq(t[e].point);
        if (l < 0) {
            return !1;
        }
        var c = $maths.RVOMath.sqrt(l);
        var u = -a - c;
        var d = -a + c;
        for (var p = 0; p < e; ++p) {
            var f = $maths.RVOMath.det(t[e].direction, t[p].direction);
            var h = $maths.RVOMath.det(t[p].direction, $maths.Vector2.subtract(t[e].point, t[p].point));
            if ($maths.RVOMath.fabs(f) <= $maths.RVOMath.RVO_EPSILON) {
                if (h < 0) {
                    return !1;
                }
            } else {
                var m = h / f;
                f > 0 ? (d = Math.min(d, m)) : (u = Math.max(u, m));
                if (u > d) {
                    return !1;
                }
            }
        }
        s
            ? $maths.Vector2.multiply(n, t[e].direction) > 0
                ? (r.value = $maths.Vector2.addition(t[e].point, $maths.Vector2.multiply2(d, t[e].direction)))
                : (r.value = $maths.Vector2.addition(t[e].point, $maths.Vector2.multiply2(u, t[e].direction)))
            : ((m = $maths.Vector2.multiply(t[e].direction, $maths.Vector2.subtract(n, t[e].point))),
              (r.value =
                  m < u
                      ? $maths.Vector2.addition(t[e].point, $maths.Vector2.multiply2(u, t[e].direction))
                      : m > d
                      ? $maths.Vector2.addition(t[e].point, $maths.Vector2.multiply2(d, t[e].direction))
                      : $maths.Vector2.addition(t[e].point, $maths.Vector2.multiply2(m, t[e].direction))));
        return !0;
    };
    t.prototype.linearProgram2 = function (t, e, i, n, s) {
        n
            ? (s.value = $maths.Vector2.multiply2(e, i))
            : $maths.RVOMath.absSq(i) > $maths.RVOMath.sqr(e)
            ? (s.value = $maths.Vector2.multiply2(e, $maths.RVOMath.normalize(i)))
            : (s.value = i);
        for (var r = 0; r < t.length; ++r) {
            if ($maths.RVOMath.det(t[r].direction, $maths.Vector2.subtract(t[r].point, s.value)) > 0) {
                var a = new $maths.Vector2(s.value.x, s.value.y);
                if (!this.linearProgram1(t, r, e, i, n, s)) {
                    s.value = a;
                    return r;
                }
            }
        }
        return t.length;
    };
    t.prototype.linearProgram3 = function (t, e, i, n, s) {
        var r = 0;
        for (var a = i; a < t.length; ++a) {
            if ($maths.RVOMath.det(t[a].direction, $maths.Vector2.subtract(t[a].point, s.value)) > r) {
                var l = [];
                for (var c = 0; c < e; ++c) {
                    l[l.length] = t[c];
                }
                for (var u = e; u < a; ++u) {
                    var d = new $maths.Line();
                    var p = $maths.RVOMath.det(t[a].direction, t[u].direction);
                    if ($maths.RVOMath.fabs(p) <= $maths.RVOMath.RVO_EPSILON) {
                        if ($maths.Vector2.multiply(t[a].direction, t[u].direction) > 0) {
                            continue;
                        }
                        d.point = $maths.Vector2.multiply2(0.5, $maths.Vector2.addition(t[a].point, t[u].point));
                    } else {
                        d.point = $maths.Vector2.addition(
                            t[a].point,
                            $maths.Vector2.multiply2(
                                $maths.RVOMath.det(t[u].direction, $maths.Vector2.subtract(t[a].point, t[u].point)) / p,
                                t[a].direction
                            )
                        );
                    }
                    var f = $maths.Vector2.subtract(t[u].direction, t[a].direction);
                    if ($maths.RVOMath.absSq(f) > 0) {
                        d.direction = $maths.RVOMath.normalize(f);
                        l[l.length] = d;
                    }
                }
                var h = new $maths.Vector2(s.value.x, s.value.y);
                if (
                    this.linearProgram2(l, n, new $maths.Vector2(-t[a].direction.y, t[a].direction.x), !0, s) < l.length
                ) {
                    s.value = h;
                }
                r = $maths.RVOMath.det(t[a].direction, $maths.Vector2.subtract(t[a].point, s.value));
            }
        }
    };
    t._inst = null;
    return t;
})();
exports.Agent = r;
