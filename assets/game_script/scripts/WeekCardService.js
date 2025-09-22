var $storageUtil = require("./StorageUtil");
var $util = require("./Util");
var $localName = require("./LocalName");
var r = (function () {
    function t() {
        this.weekCardInfo = {
            isLock: !1,
            lockNum: 0,
            time: 0,
            day: 1
        };
        this.weekCardInfo = $storageUtil.StorageUtil.getItem($localName.default.WEEK_CARD, this.weekCardInfo);
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
    t.prototype.unlock = function () {
        this.weekCardInfo.lockNum++;
        return (
            this.weekCardInfo.lockNum >= 5 &&
            ((this.weekCardInfo = {
                isLock: !0,
                lockNum: 0,
                time: 0,
                day: 1
            }),
            $storageUtil.StorageUtil.setItem($localName.default.WEEK_CARD, this.weekCardInfo),
            !0)
        );
    };
    t.prototype.sign = function () {
        this.weekCardInfo.day++;
        this.weekCardInfo.time = $util.default.startDayTimestamp();
        $storageUtil.StorageUtil.setItem($localName.default.WEEK_CARD, this.weekCardInfo);
    };
    t.prototype.isLock = function () {
        var t = $util.default.startDayTimestamp();
        if (this.weekCardInfo.day > 7 && this.weekCardInfo.time < t) {
            this.weekCardInfo.isLock = !1;
        }
        return this.weekCardInfo.isLock;
    };
    t.prototype.isSign = function () {
        var t = $util.default.startDayTimestamp();
        return this.weekCardInfo.day > 7 || this.weekCardInfo.time >= t;
    };
    return t;
})();
exports.default = r;
