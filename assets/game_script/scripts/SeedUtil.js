var $util = require("./Util");
var n = (function () {
    function t() {}
    t.init = function (t) {
        this.seed = t;
    };
    t.random = function () {
        var t = (1103515245 * this.seed + 123456789) % this.maxNumber;
        this.seed = t;
        return t / this.maxNumber;
    };
    t.randomFromSync = function (e, i) {
        return Math.floor(t.random() * (i - e + 1) + e);
    };
    t.randomFrom = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t);
    };
    t.randomFloat = function (t, e) {
        return parseFloat((Math.random() * (e - t) + t).toFixed(2));
    };
    t.randomCount = function (e, i, o) {
        var n = [];
        if (i - e + 1 <= o) {
            for (var s = e; s <= i; s++) {
                n.push(s);
            }
            return n;
        }
        do {
            var r = t.randomFrom(e, i);
            if (!n.includes(r)) {
                n.push(r);
            }
        } while (n.length < o);
        return n;
    };
    t.randomArr = function (e, i, o) {
        if (void 0 === o) {
            o = !1;
        }
        if (e.length <= i) {
            return e;
        }
        for (var n = []; n.length < i; ) {
            var s = t.randomFrom(0, e.length - 1);
            o ? n.push(s) : n.includes(s) || n.push(s);
        }
        var r = [];
        for (var a = 0; a < n.length; a++) {
            r.push(e[n[a]]);
        }
        return r;
    };
    t.randomArrSync = function (e, i, o) {
        if (void 0 === o) {
            o = !1;
        }
        if (e.length <= i) {
            return e;
        }
        for (var n = []; n.length < i; ) {
            var s = t.randomFromSync(0, e.length - 1);
            o ? n.push(s) : n.includes(s) || n.push(s);
        }
        var r = [];
        for (var a = 0; a < n.length; a++) {
            r.push(e[n[a]]);
        }
        return r;
    };
    t.weightRandomCount = function (e, i, n) {
        if (void 0 === n) {
            n = !0;
        }
        if (!n && e.length < i) {
            return e;
        }
        var s = $util.default.deepCopy(e);
        var r = [];
        var a = 0;
        s.forEach(function (t) {
            return (a += t);
        });
        do {
            var l = 0;
            var c = t.randomFrom(0, a);
            for (var u = 0; u < s.length; u++) {
                if (((l += s[u]), 0 !== s[u] && c <= l)) {
                    r.push(u);
                    if (!n) {
                        a -= s[u];
                        s[u] = 0;
                    }
                    break;
                }
            }
        } while (r.length < i);
        return r;
    };
    t.probability = function (e, i) {
        if (void 0 === i) {
            i = 100;
        }
        return t.randomFrom(1, i) <= e;
    };
    t.getRandomArbitrary = function (t, e) {
        return Math.random() * (e - t) + t;
    };
    t.splitNumber = function (e, i, o) {
        if (void 0 === o) {
            o = !1;
        }
        var n = [];
        var s = 0;
        for (var r = i; s < r; s++) {
            var a = t.getRandomMoney(e, i, o);
            n.push(a);
            i--;
            e -= a;
        }
        return n;
    };
    t.getRandomMoney = function (e, i, o) {
        if (void 0 === o) {
            o = !1;
        }
        if (1 === i) {
            i--;
            return Math.round(e);
        }
        var n = Math.random();
        if (o) {
            n = t.random();
        }
        var s = n * Math.floor((e / i) * 2);
        var r = s <= 1 ? 1 : Math.floor(s);
        i--;
        e -= r;
        return r;
    };
    t.seed = 0;
    t.maxNumber = Math.pow(2, 32) - 1;
    return t;
})();
exports.default = n;
