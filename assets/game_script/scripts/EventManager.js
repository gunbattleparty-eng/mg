var o = (function () {
    function t() {}
    t.on = function (t, e, i) {
        var o = this.events;
        o.has(t)
            ? o.get(t).push({
                  callback: e,
                  target: i
              })
            : o.set(t, [
                  {
                      callback: e,
                      target: i
                  }
              ]);
    };
    t.once = function (t, e, i) {
        var o = this.onceEvents;
        o.has(t)
            ? o.get(t).push({
                  callback: e,
                  target: i
              })
            : o.set(t, [
                  {
                      callback: e,
                      target: i
                  }
              ]);
    };
    t.off = function (t, e, i) {
        var o = this.events.get(t);
        if (o) {
            var n = 0;
            for (var s = o.length; n < s; n++) {
                if (this.compare(o[n], e, i)) {
                    o.splice(n, 1);
                    if (0 === o.length) {
                        this.events.delete(t);
                    }
                    break;
                }
            }
        }
        var r = this.onceEvents.get(t);
        if (r) {
            n = 0;
            for (s = r.length; n < s; n++) {
                if (this.compare(r[n], e, i)) {
                    r.splice(n, 1);
                    if (0 === r.length) {
                        this.onceEvents.delete(t);
                    }
                    break;
                }
            }
        }
    };
    t.send = function (t) {
        var e = [];
        for (var i = 1; i < arguments.length; i++) {
            e[i - 1] = arguments[i];
        }
        var o = this.events.get(t);
        if (o) {
            for (var n = 0; n < o.length; n++) {
                var s = o[n];
                var r = s.callback;
                var a = s.target;
                r.apply(a, e);
            }
        }
        var l = this.onceEvents.get(t);
        if (l) {
            for (n = 0; n < l.length; n++) {
                var c = l[n];
                r = c.callback;
                a = c.target;
                r.apply(a, e);
            }
            this.onceEvents.delete(t);
        }
    };
    t.remove = function (t) {
        if (this.events.has(t)) {
            this.events.delete(t);
        }
        if (this.onceEvents.has(t)) {
            this.onceEvents.delete(t);
        }
    };
    t.removeAll = function () {
        this.events.clear();
        this.onceEvents.clear();
    };
    t.compare = function (t, e, i) {
        var o = t.callback;
        return t.target === i && (o === e || o.toString() === e.toString());
    };
    t.events = new Map();
    t.onceEvents = new Map();
    return t;
})();
exports.default = o;
window.EventManager = o;
