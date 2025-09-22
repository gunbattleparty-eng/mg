exports.WaitingManager = void 0;
var $countDownUtil = require("./CountDownUtil");
var $uICache = require("./UICache");
var $uIManager = require("./UIManager");
var $uIParam = require("./UIParam");
var a = (function () {
    function t() {
        this.uiManager = $uIManager.UIManager.instance;
        this.uiCache = $uICache.UICache.instance;
    }
    t.prototype.show = function (t, e, i) {
        var n = this;
        if (void 0 === t) {
            t = 5;
        }
        if (void 0 === i) {
            i = 0;
        }
        if (0 === i) {
            var s = this.uiCache.getBaseUI($uIParam.LayerType.WAITING);
            this.uiManager.uiAddScene($uIParam.LayerType.WAITING, s);
            s.node.parent = this.uiManager.layerWaitding;
            s.registerCallback(e, t);
        } else {
            $countDownUtil.CountDownUtil.scheduleOnce(
                function () {
                    n.show(t, e, 0);
                },
                this,
                i
            );
        }
    };
    t.prototype.close = function (t) {
        if (!cc.isValid(t)) {
            $countDownUtil.CountDownUtil.unSchedule(this);
            var e = this.uiCache.getCurrView($uIParam.LayerType.WAITING);
            if (0 === e.length) {
                return;
            }
            t = e[0];
        }
        this.uiManager.uiRemoveScene($uIParam.LayerType.WAITING, t);
    };
    t.instance = new t();
    return t;
})();
exports.WaitingManager = a;
