var $eventManager = require("./EventManager");
var $uIManager = require("./UIManager");
var $seedUtil = require("./SeedUtil");
var $storageUtil = require("./StorageUtil");
var $startView = require("./StartView");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $localName = require("./LocalName");
var $skillContext = require("./SkillContext");
var $userDataContext = require("./UserDataContext");
var f = (function () {
    function t() {
        this.currLevel = 1;
        this.levelRecords = [];
        this.bs = [0, 0.5, 1];
        this.levelRecords = $storageUtil.StorageUtil.getItem($localName.default.LEVEL_RECORD, []);
        if (this.levelRecords.length > 0) {
            this.currLevel = this.levelRecords[this.levelRecords.length - 1].level;
        }
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
    t.prototype.setRecord = function (t, e, i) {
        var o = this.levelRecords.findIndex(function (e) {
            return e.level === t;
        });
        -1 !== o
            ? this.levelRecords[o].resBlood < e && (this.levelRecords[o].resBlood = e)
            : this.levelRecords.push({
                  level: t,
                  resBlood: e,
                  time: i,
                  gainBoxIndex: -1
              });
        $storageUtil.StorageUtil.setItem($localName.default.LEVEL_RECORD, this.levelRecords);
    };
    t.prototype.getRecord = function (t) {
        return (
            this.levelRecords.find(function (e) {
                return e.level === t;
            }) || {
                level: t,
                resBlood: -1,
                time: 0,
                gainBoxIndex: -1
            }
        );
    };
    t.prototype.getLastRecord = function () {
        var t = null;
        for (var e = this.levelRecords.length - 1; e >= 0; e--) {
            var i = this.levelRecords[e];
            if (i.resBlood > 0) {
                t = i;
                break;
            }
        }
        if (t) {
            if (!(Math.abs(t.level - this.levelRecords.length) > 10)) {
                return t;
            }
            $uIManager.UIManager.instance.showToast("检测到关卡数据异常");
            var o = 1;
            var s = [];
            for (e = 0; e < this.levelRecords.length; e++) {
                var r = this.levelRecords[e];
                if (r.level === o) {
                    s.push({
                        level: o,
                        resBlood: r.resBlood,
                        time: r.time,
                        gainBoxIndex: r.gainBoxIndex
                    });
                    o++;
                }
            }
            this.levelRecords = s;
        }
        return {
            level: 0,
            resBlood: -1,
            time: 0,
            gainBoxIndex: -1
        };
    };
    t.prototype.boxStatus = function (t, e) {
        var i = this.getRecord(t);
        return i.resBlood <= 0
            ? 0
            : i.gainBoxIndex < e && i.resBlood > 0 && i.resBlood >= this.bs[e]
            ? 1
            : i.gainBoxIndex >= e
            ? 2
            : 0;
    };
    t.prototype.isGainBox = function (t, e) {
        return this.getRecord(t).gainBoxIndex >= e;
    };
    t.prototype.canPassBoxIndex = function (t) {
        var e = this.getRecord(t);
        return e.resBlood > 0 && e.gainBoxIndex < 0
            ? 0
            : e.resBlood >= 0.5 && e.gainBoxIndex < 1
            ? 1
            : e.resBlood >= 1 && e.gainBoxIndex < 2
            ? 2
            : -1;
    };
    t.prototype.openBox = function (t, e) {
        var i = [];
        this.getRecord(t).gainBoxIndex = e;
        $storageUtil.StorageUtil.setItem($localName.default.LEVEL_RECORD, this.levelRecords);
        var n = $configContext.default.instance.getConfigByLevel(t);
        var f = n.TreasureChesttype[e];
        var h = n.TreasureChest_num[e];
        for (var m = 0; m < f.length; m++) {
            if (1 === f[m]) {
                i.push({
                    type: 1,
                    num: h[m]
                });
                $userDataContext.default.Ins.opearCoin(h[m]);
                $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.ALL);
            }
            if (3 === f[m]) {
                var y = $seedUtil.default.randomFrom(1, 2);
                y = Math.min(y, h[m]);
                var g = $seedUtil.default.randomCount(1, 6, y);
                var _ = $seedUtil.default.splitNumber(h[m], y);
                for (var k = 0; k < y; k++) {
                    i.push({
                        type: 3,
                        ext: g[k],
                        num: _[k]
                    });
                    $userDataContext.default.Ins.opearEquipBook(g[k], _[k]);
                }
                $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Role);
            }
            if (4 === f[m]) {
                var v = $seedUtil.default.randomFrom(1, 4);
                var b = $skillContext.default.Ins.getUseSkillIds();
                v = Math.min(b.length, v);
                b = $seedUtil.default.randomArr(b, v);
                var w = $seedUtil.default.splitNumber(h[m], v);
                for (var A = 0; A < v; A++) {
                    i.push({
                        type: 4,
                        ext: b[A],
                        num: w[A]
                    });
                    $userDataContext.default.Ins.opearSkillBook(b[A], w[A]);
                }
                $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Skill);
            }
            if (6 === f[m]) {
                i.push({
                    type: 6,
                    num: h[m]
                });
                $userDataContext.default.Ins.opearDiamond(h[m]);
            }
        }
        return i;
    };
    return t;
})();
exports.default = f;
