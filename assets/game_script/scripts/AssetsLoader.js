exports.BundleLoader = void 0;
var s = (function () {
    function t() {}
    t.prototype.loadBundleSync = function (t, e, i) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function () {
                return [
                    2,
                    new Promise(function (o, n) {
                        var s = cc.assetManager.getBundle(t);
                        if (s) {
                            if (i) {
                                i(null, s);
                            }
                            return o(s);
                        }
                        cc.assetManager.loadBundle(
                            t,
                            {
                                onFileProgress: function (t) {
                                    var i = t.progress;
                                    if (i && e) {
                                        e(i / 100);
                                    }
                                }
                            },
                            function (t, e) {
                                return t ? (i && i(t, null), n(t)) : (i && i(null, e), o(e));
                            }
                        );
                    }).catch(function (t) {
                        console.error(t);
                    })
                ];
            });
        });
    };
    t.prototype.loadRes = function (t, e, i, o, n) {
        var s = cc.assetManager.getBundle(t);
        if (!s) {
            console.error("bundle未加载或不存在 ==> " + t);
        }
        s.load(
            e,
            i,
            function (t, e) {
                if (o) {
                    o(t, e);
                }
            },
            function (t, e) {
                t ? (console.warn("不存在资源 ==> ", t), n && n(t, null)) : n && n(null, e);
            }
        );
    };
    t.prototype.loadResSync = function (t, e, i, s, r) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function () {
                return [
                    2,
                    new Promise(function (o, n) {
                        var a = cc.assetManager.getBundle(t);
                        if (!a) {
                            n("检测bundle是否加载：" + t);
                        }
                        a.load(
                            e,
                            i,
                            function (t, e) {
                                if (s) {
                                    s(t, e);
                                }
                            },
                            function (t, e) {
                                t ? n("资源未找到： " + t) : o(e);
                                if (r) {
                                    r(t, e);
                                }
                            }
                        );
                    }).catch(function (t) {
                        console.warn(t);
                    })
                ];
            });
        });
    };
    t.prototype.preLoadRes = function (t, e, i, o, n) {
        var s = cc.assetManager.getBundle(t);
        if (!s) {
            console.warn("检测bundle是否加载： " + t);
        }
        s.preload(
            e,
            i,
            function (t, e) {
                if (o) {
                    o(t, e);
                }
            },
            function (t, e) {
                t ? (console.warn("资源未找到：" + t), n && n(t, null)) : n && n(null, e);
            }
        );
    };
    t.prototype.release = function (t, e) {
        if (void 0 === e) {
            e = !0;
        }
        if ("string" == typeof t) {
            t = cc.assetManager.getBundle(t);
        }
        t ? (e && t.releaseAll(), cc.assetManager.removeBundle(t)) : console.error("bundle未找到");
    };
    t.prototype.getBundle = function (t) {
        return cc.assetManager.getBundle(t);
    };
    t.prototype.getRes = function (t, e, i) {
        var o = this.getBundle(t);
        return o
            ? o.get(e, i || cc.Asset) || (console.warn("资源未找到, " + t + "," + e), null)
            : (console.error("bundle未加载, " + t), null);
    };
    t.prototype.getResArray = function (t, e, i) {
        var o = this.getBundle(t);
        if (!o) {
            console.error("bundle未加载, " + t);
            return null;
        }
        var n = new Array();
        for (var s = 0; s < e.length; s++) {
            var r = o.get(e[s], i || cc.Asset);
            r ? n.push(r) : console.error("资源未找到, " + t + "," + e[s]);
        }
        return n;
    };
    t.prototype.isBundleLoaded = function (t) {
        return !!this.getBundle(t);
    };
    t.prototype.isResLoaded = function (t, e, i) {
        var o = this.getBundle(t);
        return !!o && !!o.get(e, i || cc.Asset);
    };
    t.instance = new t();
    return t;
})();
exports.default = s;
exports.BundleLoader = function (t, e, i) {
    this._bundleName = t;
    this._onProgCallBack = e;
    this._cmpCallBack = i;
    s.instance.loadBundleSync(t, e, i);
};
cc.sys.localStorage.getItem("LastAssetsVersion") !== cc.assetManager.downloader.remoteServerAddress
    ? cc.assetManager.cacheManager && cc.assetManager.cacheManager.clearCache
        ? (cc.assetManager.cacheManager.clearCache(),
          cc.sys.localStorage.setItem("LastAssetsVersion", cc.assetManager.downloader.remoteServerAddress),
          console.warn("old assets is removed"))
        : console.warn("cur cc.assetManager.cacheManager is null")
    : console.warn("old assets have no change");
