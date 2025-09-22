exports.PopupManager = void 0;
var $assetsLoader = require("./AssetsLoader");
var $resManager = require("./ResManager");
var $resUtil = require("./ResUtil");
var $popupView = require("./PopupView");
var $uICache = require("./UICache");
var $uIManager = require("./UIManager");
var $uIParam = require("./UIParam");
var $waitingManager = require("./WaitingManager");
var d = (function () {
    function t() {
        this.uiManager = $uIManager.UIManager.instance;
        this.uiCache = $uICache.UICache.instance;
    }
    t.prototype.openConfrim = function (t) {
        var e = this.uiCache.getBaseUI($uIParam.LayerType.DIALOG);
        e.registerCallback(t);
        if (e.isMaskBg) {
            e.maskNode = this.uiCache.getPopBg();
        }
        this.uiManager.uiAddScene($uIParam.LayerType.DIALOG, e);
        this.uiManager.layerConfirm.addChild(e.node);
    };
    t.prototype.open = function (t, e, i) {
        var a = this;
        if (void 0 === e) {
            e = null;
        }
        if (void 0 === i) {
            i = null;
        }
        var l = this.uiCache.getCacheView(t);
        if (l) {
            $resUtil.ResUtil.getResKeeper(l, !0);
            var d = {
                uuid: l.uuid,
                viewPath: t,
                param: e,
                rooNode: this.uiManager.layerPop
            };
            var p = l.getComponent($popupView.PopupView);
            p
                ? (p.isMaskBg && (p.maskNode = this.uiCache.getPopBg()),
                  (p.uiCallback = i),
                  (p.uiParam = d),
                  this.uiManager.uiAddScene($uIParam.LayerType.POPUP, p),
                  this.uiManager.layerPop.addChild(p.node))
                : console.error("当前UI不存在，或者没有绑定脚本");
        } else {
            console.warn("资源未被加载,自动加载");
            $waitingManager.WaitingManager.instance.show(10, null, 0.5);
            var f = $resManager.ResManager.instance.getAssets(t);
            $assetsLoader.default.instance.loadResSync(f.bundle, [f.path], cc.Prefab, null, function () {
                console.warn("资源未被加载,自动加载完成");
                $waitingManager.WaitingManager.instance.close();
                a.open(t, e, i);
            });
        }
    };
    t.prototype.close = function (t) {
        var e = this;
        if (cc.isValid(t)) {
            t.playCloseAnim(function () {
                if (t.uiType === $uIParam.LayerType.DIALOG) {
                    e.uiCache.setPopBg(t.maskNode);
                    return void e.uiManager.uiRemoveScene($uIParam.LayerType.DIALOG, t);
                }
                if (cc.isValid(t.maskNode)) {
                    e.uiCache.setPopBg(t.maskNode);
                }
                e.uiManager.uiRemoveScene($uIParam.LayerType.POPUP, t);
            });
        }
    };
    t.prototype.closeAll = function () {
        var t = this.uiCache.getCurrView($uIParam.LayerType.POPUP);
        for (var e = 0; e < t.length; e++) {
            this.close(t[e]);
        }
    };
    t.instance = new t();
    return t;
})();
exports.PopupManager = d;
