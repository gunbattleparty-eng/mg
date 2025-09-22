"use strict";
cc._RF.push(module, 'c0308faNKNOt7yGDo9FfKMw', 'UICache');
// game_script/scripts/UICache.js

"use strict";

exports.UICache = void 0;

var $resManager = require("./ResManager");

var $uIView = require("./UIView");

var s = function () {
  function t() {
    this.currViewManager = new Map();
    this.cacheViewManager = new Map();
    this.baseUIMap = new Map();
    this.baseUICache = new Map();
    this.popBgPrefab = null;
    this.popBg = new cc.NodePool();
  }

  t.prototype.getPopBg = function () {
    return this.popBg.size() > 0 ? this.popBg.get() : cc.instantiate(this.popBgPrefab);
  };

  t.prototype.setPopBg = function (t) {
    this.popBg.put(t);
  };

  t.prototype.removeBaseUICache = function (t) {
    if (this.baseUIMap.has(t)) {
      this.baseUIMap["delete"](t);
    }
  };

  t.prototype.setBaseUI = function (t, e) {
    this.baseUIMap.set(t, e);
  };

  t.prototype.getBaseUI = function (t) {
    if (!this.baseUIMap.has(t)) {
      console.warn("没有初始化预制体：", t);
      return null;
    }

    if (!this.baseUICache.has(t)) {
      var e = new cc.NodePool($uIView.UIView);
      this.baseUICache.set(t, e);
    }

    return this.baseUICache.get(t).size() > 0 ? this.baseUICache.get(t).get().getComponent($uIView.UIView) : cc.instantiate(this.baseUIMap.get(t)).getComponent($uIView.UIView);
  };

  t.prototype.cacheBaseUI = function (t, e) {
    this.baseUICache.get(t).put(e.node);
  };

  t.prototype.getCurrView = function (t) {
    return this.currViewManager.has(t) ? this.currViewManager.get(t) : [];
  };

  t.prototype.putCurrView = function (t, e) {
    if (!this.currViewManager.has(t)) {
      this.currViewManager.set(t, []);
    }

    this.currViewManager.get(t).push(e);
  };

  t.prototype.removeCurrView = function (t, e) {
    var i = this.currViewManager.get(t).indexOf(e);
    return -1 !== i && (this.currViewManager.get(t).splice(i, 1), !0);
  };

  t.prototype.getCacheView = function (t) {
    if (this.cacheViewManager.has(t) && this.cacheViewManager.get(t).size() > 0) {
      return this.cacheViewManager.get(t).get();
    }

    var e = $resManager.ResManager.instance.get(t);
    return e ? cc.instantiate(e) : null;
  };

  t.prototype.cacheView = function (t, e) {
    if (!this.cacheViewManager.has(t)) {
      this.cacheViewManager.set(t, new cc.NodePool($uIView.UIView));
    }

    e.isCache ? this.cacheViewManager.get(t).put(e.node) : e.node.destroy();
  };

  t.instance = new t();
  return t;
}();

exports.UICache = s;

cc._RF.pop();