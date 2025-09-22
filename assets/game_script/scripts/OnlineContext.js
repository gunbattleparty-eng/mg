var $countDownUtil = require("./CountDownUtil");
var $storageUtil = require("./StorageUtil");
var $util = require("./Util");
var $configContext = require("./ConfigContext");
var $localName = require("./LocalName");
var l = (function () {
    function t() {
        this.onlineRecord = null;
        this.onlineRecord = $storageUtil.StorageUtil.getItem($localName.default.ONLINE_RECORD, this.onlineRecord);
    }
    Object.defineProperty(t, "Ins", {
        get: function () {
            if (!t.instance) {
                t.instance = new t();
            }
            return t.instance;
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.init = function () {
        var t = this;
        if (!(this.onlineRecord && $util.default.isToday(this.onlineRecord.day))) {
            this.onlineRecord = {
                gain: [],
                time: 0,
                day: $countDownUtil.CountDownUtil.currTime
            };
        }
        setInterval(function () {
            t.refresh();
            $countDownUtil.CountDownUtil.currTime = Date.now();
        }, 1e3);
    };
    t.prototype.hasRedDot = function () {
        for (var t = 0; t < $configContext.default.instance.onlineConfigs.length; t++) {
            var e = $configContext.default.instance.onlineConfigs[t];
            if (this.getTime() >= e.time && !this.hasGain(e.id)) {
                return !0;
            }
        }
        return !1;
    };
    t.prototype.refresh = function () {
        this.onlineRecord.time++;
        $storageUtil.StorageUtil.setItem($localName.default.ONLINE_RECORD, this.onlineRecord);
    };
    t.prototype.hasGain = function (t) {
        return !!this.onlineRecord.gain[t - 1];
    };
    t.prototype.setRecrodGain = function (t) {
        this.onlineRecord.gain[t - 1] = !0;
        $storageUtil.StorageUtil.setItem($localName.default.ONLINE_RECORD, this.onlineRecord);
    };
    t.prototype.getTime = function () {
        return this.onlineRecord.time;
    };
    return t;
})();
exports.default = l;
