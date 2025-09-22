"use strict";
cc._RF.push(module, 'c9d3aXiE5JC36NLmHRXWXbR', 'UIManager');
// game_script/scripts/UIManager.js

"use strict";

exports.UIManager = void 0;

var $assetsMap = require("./AssetsMap");

var $resManager = require("./ResManager");

var $resUtil = require("./ResUtil");

var $uIView = require("./UIView");

var $uICache = require("./UICache");

var $uIParam = require("./UIParam");

var c = function () {
  function t() {
    this.baseUIType = [$uIParam.LayerType.DIALOG, $uIParam.LayerType.WAITING, $uIParam.LayerType.LOADING, $uIParam.LayerType.TOAST];
    this.rootView = null;
    this.uiCache = $uICache.UICache.instance;
    this.resManager = $resManager.ResManager.instance;
    this.layerUI = null;
    this.layerPop = null;
    this.layerLoadingView = null;
    this.layerWaitding = null;
    this.layerConfirm = null;
    this.layerToast = null;
    this.currLoingView = null;
  }

  t.prototype.isCurrPage = function (t) {
    return this.layerUI.children.length > 0 && this.layerUI.children[0].name === t;
  };

  t.prototype.init = function (t, e, i) {
    this.rootView = t;
    this.createLayer();
    this.uiCache.setBaseUI($uIParam.LayerType.LOADING, e);
    this.uiCache.setBaseUI($uIParam.LayerType.DIALOG, i);
  };

  t.prototype.changeLoadingView = function (t) {
    var e = this.resManager.get(t);
    this.uiCache.getBaseUI($uIParam.LayerType.LOADING).destroy();
    this.uiCache.removeBaseUICache($uIParam.LayerType.LOADING);
    this.uiCache.setBaseUI($uIParam.LayerType.LOADING, e);
  };

  t.prototype.loadBaseUI = function () {
    this.uiCache.setBaseUI($uIParam.LayerType.WAITING, this.resManager.get($assetsMap.AssetsMap.ResourcesBundle.prefabs.assetsList.WaitingView));
    this.uiCache.setBaseUI($uIParam.LayerType.TOAST, this.resManager.get($assetsMap.AssetsMap.ResourcesBundle.prefabs.assetsList.ToastView));
    this.uiCache.popBgPrefab = this.resManager.get($assetsMap.AssetsMap.ResourcesBundle.prefabs.assetsList.PopMaskBg);
  };

  t.prototype.replaceView = function (t, e) {
    if (void 0 === e) {
      e = null;
    }

    for (var i = this.uiCache.getCurrView($uIParam.LayerType.POPUP); i.length > 0;) {
      this.uiRemoveScene($uIParam.LayerType.POPUP, i[0]);
      i = this.uiCache.getCurrView($uIParam.LayerType.POPUP);
    }

    var o = this.uiCache.getCurrView($uIParam.LayerType.UI);

    for (var n = 0; n < o.length; n++) {
      this.uiRemoveScene($uIParam.LayerType.UI, o[n]);
    }

    var a = this.uiCache.getCacheView(t);
    $resUtil.ResUtil.getResKeeper(a, !0);
    var c = {
      uuid: a.uuid,
      viewPath: t,
      param: e,
      rooNode: this.layerUI
    };
    var u = a.getComponent($uIView.UIView);
    u ? (u.uiParam = c, this.uiAddScene($uIParam.LayerType.UI, u), this.layerUI.addChild(u.node)) : console.error("当前UI不存在，或者没有绑定脚本");
  };

  t.prototype.lodingView = function (t, e, i, o) {
    var n = this;

    if (void 0 === o) {
      o = !0;
    }

    var s = !1;

    for (var r = 0; r < t.length; r++) {
      if (!this.resManager.isBundleLoaded(t[r])) {
        s = !0;
        break;
      }

      if (!this.resManager.hasBundleLoadedAssets(t[r])) {
        s = !0;
      }
    }

    if (s) {
      var a = this.uiCache.getBaseUI($uIParam.LayerType.LOADING);
      this.currLoingView = a;
      this.uiAddScene($uIParam.LayerType.LOADING, a);
      a.node.parent = this.layerLoadingView;
      this.resManager.loadBundles(t, function (t) {
        a.setProgress(t);
      }, function () {
        var t = !1;
        a.setProgress(0, !0);
        a.registerCB(function () {
          t ? (i && i(), o && (n.currLoingView = null, n.uiRemoveScene($uIParam.LayerType.LOADING, a))) : t = !0;
        }, n);
        n.resManager.loadArray(e, function (t) {
          a.setProgress(t);
        }, function () {
          t ? (i && i(), o && (n.currLoingView = null, n.uiRemoveScene($uIParam.LayerType.LOADING, a))) : t = !0;
        });
      });
    } else {
      if (i) {
        i();
      }
    }
  };

  t.prototype.removeLoadingView = function () {
    if (this.currLoingView) {
      this.uiRemoveScene($uIParam.LayerType.LOADING, this.currLoingView);
    }
  };

  t.prototype.showToast = function () {
    var t = this.uiCache.getBaseUI($uIParam.LayerType.TOAST);
    var e = {
      uuid: t.node.uuid,
      viewPath: "",
      param: {
        msg: arguments[0] || "",
        time: arguments[1] || 1,
        pos: arguments[2] || cc.v2(0, 200)
      },
      rooNode: this.layerToast
    };
    t.uiParam = e;
    this.uiAddScene($uIParam.LayerType.TOAST, t);
    t.node.parent = this.layerToast;
  };

  t.prototype.hideToast = function (t) {
    this.uiRemoveScene($uIParam.LayerType.TOAST, t);
  };

  t.prototype.uiAddScene = function (t, e) {
    e.node.active = !0;
    this.uiCache.putCurrView(t, e);
    e.innerAddToScreen();
  };

  t.prototype.uiRemoveScene = function (t, e) {
    e.innerRemoveToScreen();

    if (this.uiCache.removeCurrView(t, e)) {
      e.node.active = !1;
      e.node.parent = null;
      this.baseUIType.includes(e.uiType) ? this.uiCache.cacheBaseUI(t, e) : this.uiCache.cacheView(e.uiParam.viewPath, e);
    }
  };

  t.prototype.createLayer = function () {
    this.layerUI = this.rootView.getChildByName("layer_ui");

    if (!cc.isValid(this.layerUI)) {
      this.layerUI = this.generateDefaultLayer("layer_ui", $uIParam.LayerType.UI);
    }

    this.layerPop = this.rootView.getChildByName("layer_pop");

    if (!cc.isValid(this.layerPop)) {
      this.layerPop = this.generateDefaultLayer("layer_pop", $uIParam.LayerType.POPUP);
    }

    this.layerLoadingView = this.rootView.getChildByName("loading_view");

    if (!cc.isValid(this.layerLoadingView)) {
      this.layerLoadingView = this.generateDefaultLayer("loading_view", $uIParam.LayerType.LOADING);
    }

    this.layerConfirm = this.rootView.getChildByName("layer_confirm");

    if (!cc.isValid(this.layerConfirm)) {
      this.layerConfirm = this.generateDefaultLayer("layer_confirm", $uIParam.LayerType.DIALOG);
    }

    this.layerWaitding = this.rootView.getChildByName("layer_waiting");

    if (!cc.isValid(this.layerWaitding)) {
      this.layerWaitding = this.generateDefaultLayer("layer_waiting", $uIParam.LayerType.WAITING);
    }

    this.layerToast = this.rootView.getChildByName("layerToast");

    if (!cc.isValid(this.layerToast)) {
      this.layerToast = this.generateDefaultLayer("layerToast", $uIParam.LayerType.TOAST);
    }
  };

  t.prototype.generateDefaultLayer = function (t, e) {
    var i = new cc.Node();
    var o = i.addComponent(cc.Widget);
    o.isAlignLeft = o.isAlignRight = o.isAlignTop = o.isAlignBottom = !0;
    o.left = o.right = o.top = o.bottom = 0;
    o.alignMode = cc.Widget.AlignMode.ALWAYS;
    o.enabled = !0;
    i.setSiblingIndex(e);
    i.name = t;
    this.rootView.addChild(i);
    return i;
  };

  t.prototype.getLayer = function (t) {
    return t === $uIParam.LayerType.UI ? this.layerUI : t === $uIParam.LayerType.LOADING ? this.layerLoadingView : t === $uIParam.LayerType.POPUP ? this.layerPop : t === $uIParam.LayerType.WAITING ? this.layerWaitding : t === $uIParam.LayerType.DIALOG ? this.layerConfirm : t === $uIParam.LayerType.TOAST ? this.layerToast : void 0;
  };

  t.instance = new t();
  return t;
}();

exports.UIManager = c;

cc._RF.pop();