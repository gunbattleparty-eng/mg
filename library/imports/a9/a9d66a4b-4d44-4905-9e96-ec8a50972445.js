"use strict";
cc._RF.push(module, 'a9d66pLTURJBZ6W7IpQlyRF', 'ADAssetsManager');
// game_script/scripts/ADAssetsManager.js

"use strict";

exports.adAssetsMap = void 0;
exports.adAssetsMap = {
  prefabs: {
    NativeIcon: "/prefabs/NativeIcon",
    NativeInterstitial_HW: "/prefabs/NativeInterstitial_HW"
  }
};

var o = function () {
  function t() {
    this._adBundle = null;
    this._bundleName = "ad";
  }

  Object.defineProperty(t, "instance", {
    get: function get() {
      if (!t._instance) {
        t._instance = new t();
      }

      return t._instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.loadBund = function () {
    var t = this;
    return new Promise(function (e, i) {
      if (cc.isValid(t._adBundle)) {
        return e(t._adBundle);
      }

      cc.assetManager.loadBundle(t._bundleName, {
        onFileProgress: function onFileProgress() {}
      }, function (o, n) {
        return o ? (console.error("ad bundle load fail", o), i(o)) : (t._adBundle = n, e(t._adBundle));
      });
    });
  };

  t.prototype.loadRes = function (t, e) {
    var i = this;
    return new Promise(function (o, n) {
      i._adBundle.load(t, e, function () {}, function (t, e) {
        t ? n(t) : o(e);
      });
    });
  };

  t.prototype.createNodeByPreloading = function (t) {
    console.log(this._adBundle);

    if (!this._adBundle) {
      console.error("UIManager", "createNodeByPreloading error,bundle ad_assets unloaded");
      return null;
    }

    var e = this._adBundle.get(t, cc.Prefab);

    if (!e || null == e) {
      console.error("UIManager", "createNodeByPreloading error,url: " + t + "  unloaded");
      return null;
    }

    if (!(e instanceof cc.Prefab)) {
      console.error("UIManager", "createNodeByPreloading error,url: " + t + "  not prefab");
      return null;
    }

    var i = cc.instantiate(e);
    return i && null != i ? i : (console.error("UIManager", "createNodeByPreloading fail,url: " + t + "  create node is null"), null);
  };

  t._instance = null;
  return t;
}();

exports["default"] = o;

cc._RF.pop();