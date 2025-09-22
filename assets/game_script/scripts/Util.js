var s = (function () {
    function t() {}
    t.isJSON = function (t) {
        if ("string" == typeof t) {
            try {
                var e = JSON.parse(t);
                return !("object" != typeof e || !e);
            } catch (t) {
                return !1;
            }
        }
    };
    t.deepCopy = function (e) {
        var i;
        var n;
        if ("object" != typeof e) {
            return e;
        }
        var s = e.constructor == Array ? [] : {};
        if (s instanceof Array) {
            try {
                var r = __values(Object.keys(e));
                for (var a = r.next(); !a.done; a = r.next()) {
                    var l = a.value;
                    s[l] = t.deepCopy(e[l]);
                }
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    if (a && !a.done && (n = r.return)) {
                        n.call(r);
                    }
                } finally {
                    if (i) {
                        throw i.error;
                    }
                }
            }
        } else {
            for (var c in e) s[c] = t.deepCopy(e[c]);
        }
        return s;
    };
    t.isPosOnNodeRect = function (t, e) {
        return e.getBoundingBoxToWorld().contains(t);
    };
    t.isToday = function (t) {
        var e = new Date(t);
        var i = new Date();
        return e.getFullYear() === i.getFullYear() && e.getMonth() === i.getMonth() && e.getDate() === i.getDate();
    };
    t.areNodesOverlap = function (t, e, i) {
        if (void 0 === i) {
            i = !1;
        }
        var o = t.getBoundingBoxToWorld();
        var n = e.getBoundingBoxToWorld();
        return i ? o.containsRect(n) : o.intersects(n);
    };
    t.startDayTimestamp = function () {
        return new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime();
    };
    t.shuffle = function (t) {
        var e;
        var i;
        var o = t;
        for (var s = o.length - 1; s > 0; s--) {
            i = Math.floor(Math.random() * (s + 1));
            e = __read([o[i], o[s]], 2);
            o[s] = e[0];
            o[i] = e[1];
        }
        return o;
    };
    t.formatDate = function (t) {
        var e = Math.floor(t / 3600);
        var i = Math.floor((t % 3600) / 60);
        var o = Math.floor(t % 60);
        return [e >= 10 ? e.toString() : "0" + e, i >= 10 ? i.toString() : "0" + i, o >= 10 ? o.toString() : "0" + o];
    };
    t.dirConverAngle = function (t) {
        var e = Math.atan2(t.y, t.x);
        return cc.misc.radiansToDegrees(e);
    };
    t.angleConverDir = function (t) {
        var e = cc.misc.degreesToRadians(t);
        return cc.v3(Math.cos(e), Math.sin(e));
    };
    t.updateMaterialState = function (e, i) {
        var o = e.getComponent(cc.RenderComponent);
        if (o && !e.getComponent(dragonBones.ArmatureDisplay)) {
            t.switchGrayMaterial(i, o);
        }
        for (var n = 0; n < e.children.length; n++) {
            t.updateMaterialState(e.children[n], i);
        }
    };
    t.switchGrayMaterial = function (t, e) {
        var i = null;
        t
            ? ((i = cc.Material.getBuiltinMaterial("2d-gray-sprite")), (i = cc.MaterialVariant.create(i, e)))
            : ((i = cc.Material.getBuiltinMaterial("2d-sprite")), (i = cc.MaterialVariant.create(i, e)));
        e.setMaterial(0, i);
    };
    t.isValid = function (t) {
        return !(!cc.isValid(t) || !t.parent);
    };
    t.amend = function (t, e, i) {
        var o;
        var n;
        var s;
        var r = t.toString();
        var a = e.toString();
        try {
            n = r.split(".")[1].length;
        } catch (t) {
            n = 0;
        }
        try {
            s = a.split(".")[1].length;
        } catch (t) {
            s = 0;
        }
        var l = Math.pow(10, Math.max(n, s));
        switch (i) {
            case "+":
                o = (t * l + e * l) / l;
                break;
            case "-":
                o = (t * l - e * l) / l;
                break;
            case "*":
                o = (t * l * e * l) / l / l;
                break;
            case "/":
                o = (t * l) / (e * l);
        }
        return o;
    };
    t.objectFormat = function (t) {
        var e = "";
        for (var i in t) e.length > 0 ? (e += "," + i + "=" + t[i]) : (e = i + "=" + t[i]);
        return e;
    };
    t.parseObject = function (t) {
        if (!t || t.length <= 0) {
            return null;
        }
        var e = {};
        var i = t.split(",");
        for (var o = 0; o < i.length; o++) {
            var n = i[o].split("=");
            var s = n[0];
            var r = n[1];
            if (s && r) {
                e[s] = r;
            }
        }
        return e;
    };
    return t;
})();
exports.default = s;
