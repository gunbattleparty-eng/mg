"use strict";
cc._RF.push(module, 'e6a4fEPpEhER6LoGgHDNZXq', 'ResManager');
// game_script/scripts/ResManager.js

"use strict";

exports.ResManager = void 0;

var $assetsLoader = require("./AssetsLoader");

var l = function () {
  function t() {
    this.assetsMap = new Map();
    this.bundleCacheRecord = new Map();
  }

  t.prototype.getAssets = function (t) {
    return this.hasAssest(t) ? this.assetsMap.get(t) : (console.log("资源不存在", t), null);
  };

  t.prototype.hasAssest = function (t) {
    return this.assetsMap.has(t);
  };

  t.prototype.hasBundleLoadedAssets = function (t) {
    var e = !0;

    if (!this.bundleCacheRecord.has(t)) {
      console.warn("Bundle 不存在", t);
      return !0;
    }

    var i = this.bundleCacheRecord.get(t);

    for (var o = 0; o < i.length; o++) {
      if (!i[o].isLoaded) {
        e = !1;
        break;
      }
    }

    return e;
  };

  t.prototype.putAssets = function (t, e, i) {
    if (this.hasAssest(i)) {
      return console.error("资源名称重复，请勿重复使用名称,", i);
    }

    var o = {
      bundle: t,
      assetsType: e,
      path: i,
      isLoaded: !1
    };
    this.assetsMap.set(i, o);

    if (!this.bundleCacheRecord.has(t)) {
      this.bundleCacheRecord.set(t, []);
    }

    this.bundleCacheRecord.get(t).push(o);
  };

  t.prototype.get = function (t) {
    var e = this.getAssets(t);
    return e ? $assetsLoader["default"].instance.getRes(e.bundle, t, e.assetsType) : null;
  };

  t.prototype.isBundleLoaded = function (t) {
    return !!cc.assetManager.getBundle(t);
  };

  t.prototype.isResLoaded = function (t) {
    return !!this.assetsMap.has(t) && this.assetsMap.get(t).isLoaded;
  };

  t.prototype.releaseBundle = function (t) {
    if (this.isBundleLoaded(t)) {
      cc.assetManager.getBundle(t).releaseAll();
      this.assetsMap.forEach(function (e) {
        if (e.bundle === t) {
          e.isLoaded = !1;
        }
      });
    }
  };

  t.prototype.loadBundles = function (t, e, i) {
    return __awaiter(this, void 0, void 0, function () {
      var o;
      var s;
      var r;
      var l;
      var c;
      return __generator(this, function (u) {
        switch (u.label) {
          case 0:
            for (o = [], c = 0; c < t.length; c++) {
              if (!cc.assetManager.getBundle(t[c])) {
                o.push(t[c]);
              }
            }

            if (0 === o.length) {
              if (i) {
                i();
              }

              return [2];
            }

            s = o.length;
            r = 0;

            l = function l(t) {
              return __generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, $assetsLoader["default"].instance.loadBundleSync(o[t], function (i) {
                      e((t + i) / s);
                    }, function () {
                      if (++r >= s) {
                        console.log(o, "bundle加载完成");

                        if (i) {
                          i();
                        }
                      }
                    })];

                  case 1:
                    n.sent();
                    return [2];
                }
              });
            };

            c = 0;
            u.label = 1;

          case 1:
            return c < o.length ? [5, l(c)] : [3, 4];

          case 2:
            u.sent();
            u.label = 3;

          case 3:
            c++;
            return [3, 1];

          case 4:
            return [2];
        }
      });
    });
  };

  t.prototype.loadArray = function (t, e, i, l, c) {
    if (void 0 === l) {
      l = !1;
    }

    if (void 0 === c) {
      c = this.assetsMap;
    }

    return __awaiter(this, void 0, void 0, function () {
      var o;
      var u;
      var d;
      var p;
      var f;
      return __generator(this, function () {
        o = new Map();
        u = new Map();
        d = 0;
        c.forEach(function (e) {
          if (t.includes(e.bundle)) {
            if (!o.has(e.bundle)) {
              o.set(e.bundle, new Map());
            }

            var i = o.get(e.bundle);

            if (!i.has(e.assetsType)) {
              i.set(e.assetsType, []);
              var n = e.bundle + e.assetsType.toString();
              u.set(n, 0);
              d++;
            }

            i.get(e.assetsType).push(e.path);
          }
        });
        p = u.size;
        f = 0;
        o.forEach(function (o, n) {
          o.forEach(function (o, h) {
            l ? $assetsLoader["default"].instance.preLoadRes(n, o, h, function (t, i) {
              var o;
              var a;
              var l = n + h.toString();
              u.set(l, t / i);
              var c = 0;

              try {
                var d = __values(u);

                for (var f = d.next(); !f.done; f = d.next()) {
                  var m = __read(f.value, 2);

                  m[0];
                  c += m[1];
                }
              } catch (t) {
                o = {
                  error: t
                };
              } finally {
                try {
                  if (f && !f.done && (a = d["return"])) {
                    a.call(d);
                  }
                } finally {
                  if (o) {
                    throw o.error;
                  }
                }
              }

              if (e) {
                e(c / p);
              }
            }, function () {
              if (++f >= d) {
                console.log(t, "bundle资源预加载完成");

                if (i) {
                  i();
                }
              }
            }) : $assetsLoader["default"].instance.loadResSync(n, o, h, function (t, i) {
              var o;
              var a;
              var l = n + h.toString();
              u.set(l, t / i);
              var c = 0;

              try {
                var d = __values(u);

                for (var f = d.next(); !f.done; f = d.next()) {
                  var m = __read(f.value, 2);

                  m[0];
                  c += m[1];
                }
              } catch (t) {
                o = {
                  error: t
                };
              } finally {
                try {
                  if (f && !f.done && (a = d["return"])) {
                    a.call(d);
                  }
                } finally {
                  if (o) {
                    throw o.error;
                  }
                }
              }

              if (e) {
                e(c / p);
              }
            }, function () {
              if (++f >= d) {
                o.forEach(function (t) {
                  if (c.has(t)) {
                    c.get(t).isLoaded = !0;
                  }
                });
                console.log(t, "bundle资源加载完成");

                if (i) {
                  i();
                }
              }
            });
          });
        });
        return [2];
      });
    });
  };

  t.instance = new t();
  return t;
}();

exports.ResManager = l;

cc._RF.pop();