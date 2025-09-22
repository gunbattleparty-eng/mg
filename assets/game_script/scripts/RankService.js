exports.RankTypeEnum = void 0;
var s;
var r;
var $login = require("./Login");
var $mD5 = require("./MD5");
var $crypto_ts = require("./crypto-ts");
var $platform = require("./Platform");
var $countDownUtil = require("./CountDownUtil");
var $storageUtil = require("./StorageUtil");
var $util = require("./Util");
var $battleContext = require("./BattleContext");
var $globalParam = require("./GlobalParam");
var $localName = require("./LocalName");
var $switchContext = require("./SwitchContext");
var $userDataContext = require("./UserDataContext");
(r = s = exports.RankTypeEnum || (exports.RankTypeEnum = {}))[(r.Level = 1)] = "Level";
var k = (function() {
    function t() {
        this.rankIdMap = new Map();
        this.rankListMap = new Map();
        this.selfRankMap = new Map();
        this.rankCheckRecord = {
            lastTime: 0,
            level: 0
        };
        this.isTestEvn = !1;
        this.lastWeight = 0;
    }
    t.prototype.initData = function() {
        if (!this.isTestEvn) {
            this.rankCheckRecord = $storageUtil.StorageUtil.getItem($localName.default.RANK_DATA, this.rankCheckRecord);
            this.rankIdMap.set(s.Level, $switchContext.SwitchContext.rankId);
            this.requestRankList(s.Level);
            this.requestSelfRank(s.Level);
        }
    };
    t.prototype.requestRankID = function(t, e, i, o, n) {
        var s = this;
        v.requestRankID({
                gameCode: e,
                platformCode: i,
                systemCode: o,
                serverId: n,
                rankType: t
            })
            .then(function(e) {
                s.rankIdMap.set(t, e.data);
                s.requestRankList(t);
                s.requestSelfRank(t);
            })
            .catch(function(t) {
                console.error(t);
            });
    };
    t.prototype.refreshAllRankList = function(t) {
        if (!this.isTestEvn) {
            var e = 0;
            for (var i = 1; i <= 1; i++) {
                this.requestRankList(i)
                    .then(function() {
                        if (++e >= 2 && t) {
                            t();
                        }
                    })
                    .catch(function(i) {
                        console.error(i);
                        if (++e >= 2 && t) {
                            t();
                        }
                    });
                this.requestSelfRank(i)
                    .then(function() {
                        if (++e >= 2 && t) {
                            t();
                        }
                    })
                    .catch(function(i) {
                        console.error(i);
                        if (++e >= 2 && t) {
                            t();
                        }
                    });
            }
        }
    };
    t.prototype.requestRankList = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return this.rankIdMap.has(t) ? [
                            4,
                            v.requestRankList({
                                rankId: this.rankIdMap.get(t),
                                start: 0,
                                end: 100
                            })
                        ] : [2, null];
                    case 1:
                        if ((e = i.sent()) && e.data) {
                            this.rankListMap.set(t, e.data);
                        }
                        return [2, e];
                }
            });
        });
    };
    t.prototype.requestSelfRank = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return this.rankIdMap.has(t) ? [
                            4,
                            v.requestSelfRank({
                                rankId: this.rankIdMap.get(t),
                                id: $userDataContext.default.Ins.openId
                            })
                        ] : [2];
                    case 1:
                        if ((e = i.sent()) && e.data) {
                            this.selfRankMap.set(t, e.data);
                        }
                        return [2, e];
                }
            });
        });
    };
    t.prototype.testData = function() {
        var t = [];
        for (var e = 0; e < 100; e++) {
            t.push({
                id: "10018929397",
                weight: 1,
                extendParams: "un=用户7725208510891,l=" + e + ",g=4,h=2"
            });
        }
        return t;
    };
    t.prototype.reportRankData = function(t) {
        var e = this;
        var i = $battleContext.default.Ins.getLastRecord();
        if (this.check(i)) {
            var o = i.level;
            if (
                this.lastWeight !== o &&
                this.rankIdMap.has(t) &&
                ((this.lastWeight = o),
                    console.log("check success", o),
                    v.isLocal ||
                    !(
                        $platform.Platform.currPlatForm === $platform.PlatformEnum.BROWSER ||
                        "" === $userDataContext.default.Ins.nickname ||
                        $userDataContext.default.Ins.nickname.indexOf("未命名") > -1
                    ))
            ) {
                o = Math.floor(o);
                var n = Date.now();
                var s = $util.default.objectFormat({
                    un: $userDataContext.default.Ins.nickname,
                    l: i.level,
                    g: $userDataContext.default.Ins.gradeInfo.grade,
                    h: $userDataContext.default.Ins.headIndex + 1
                });
                var r = this.getSign(t, n, s);
                var l = {
                    rankId: this.rankIdMap.get(t),
                    id: $login.Login.instance.info.openId,
                    weight: o,
                    extendParam: s,
                    sign: r,
                    time: n
                };
                v.reportRankData(l).then(function(t) {
                    t.ifsuccess ?
                        ((e.rankCheckRecord.lastTime = $countDownUtil.CountDownUtil.currTime),
                            (e.rankCheckRecord.level = i.level),
                            $storageUtil.StorageUtil.setItem($localName.default.RANK_DATA, e.rankCheckRecord)) :
                        console.log("上传失败：", t, n);
                });
            }
        }
    };
    t.prototype.getSign = function(t, e, i) {
        var o = e.toString();
        if (i && "" !== i) {
            o += i;
        }
        var n = $crypto_ts.enc.Utf8.parse(o);
        var s = $crypto_ts.AES.encrypt(n, $crypto_ts.enc.Utf8.parse($switchContext.SwitchContext.rankKey), {
            iv: $crypto_ts.enc.Utf8.parse($globalParam.default.rankKeyWords[1]),
            mode: $crypto_ts.mode.CBC,
            padding: $crypto_ts.pad.PKCS7
        });
        return new $mD5.MD5()
            .finalize($login.Login.instance.info.openId + this.rankIdMap.get(t) + s.toString())
            .toString();
    };
    t.prototype.check = function(t) {
        var e = !1;
        if (
            $countDownUtil.CountDownUtil.currTime - this.rankCheckRecord.lastTime >= 90 &&
            t.level >= this.rankCheckRecord.level
        ) {
            e = !0;
        }
        return t.level >= 10 && t.level <= $globalParam.default.countLevel && !this.isTestEvn && e;
    };
    t.prototype.getRankList = function(t) {
        return this.isTestEvn ? this.testData() : this.rankListMap.has(t) ? this.rankListMap.get(t) : [];
    };
    t.prototype.getRankSelf = function(t) {
        if (this.isTestEvn || !this.selfRankMap.has(t) || (this.selfRankMap.has(t) && !this.selfRankMap.get(t).rank)) {
            var e = $battleContext.default.Ins.getLastRecord();
            var i = e.level;
            return {
                rank: 999,
                id: $userDataContext.default.Ins.openId,
                weight: i,
                extendParams: "un=" +
                    $userDataContext.default.Ins.nickname +
                    ",l=" +
                    e.level +
                    ",g=" +
                    $userDataContext.default.Ins.gradeInfo.grade +
                    ",h=" +
                    ($userDataContext.default.Ins.headIndex + 1)
            };
        }
        return this.selfRankMap.get(t);
    };
    t.instance = new t();
    return t;
})();
exports.default = k;
var v = (function() {
    function t() {}
    Object.defineProperty(t, "url", {
        get: function() {
            return t.isLocal ? t.urlLocal : t.urlOnline;
        },
        enumerable: !1,
        configurable: !0
    });
    t.requestRankID = function(e) {
        return Promise.resolve();
        // return fly.get(t.url + "/rank_id", e);
    };
    t.requestRankList = function(e) {
        return Promise.resolve();
        // return fly.get(t.url + "/rank_list", e);
    };
    t.requestSelfRank = function(e) {
        return Promise.resolve();
        // return fly.get(t.url + "/self_rank", e);
    };
    t.reportRankData = function(e) {
        return Promise.resolve();
        // return fly.post(t.url + "/new_push", e, {
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     }
        // });
    };
    t.isLocal = !1;
    t.urlLocal = "http://127.0.0.1:8089/rank";
    t.urlOnline = "https://fkxjl.shenzhendongwei.com/rank";
    return t;
})();