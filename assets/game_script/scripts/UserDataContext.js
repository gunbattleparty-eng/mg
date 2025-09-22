var $eventManager = require("./EventManager");
var $audioPlayer = require("./AudioPlayer");
var $gameVibrationContext = require("./GameVibrationContext");
var $platform = require("./Platform");
var $countDownUtil = require("./CountDownUtil");
var $seedUtil = require("./SeedUtil");
var $storageUtil = require("./StorageUtil");
var $util = require("./Util");
var $localEventName = require("./LocalEventName");
var $localName = require("./LocalName");
var $skillContext = require("./SkillContext");
var $taskContext = require("./TaskContext");
var m = (function () {
    function t() {
        this.coin = 0;
        this.upgradeStone = 0;
        this.skillBooks = new Map();
        this.equipBooks = new Map();
        this.gradeInfo = {
            grade: 1,
            exp: 0
        };
        this.power = 0;
        this.diamond = 0;
        this.eggRecord = [];
        this.headIndex = 0;
        this.sign = {
            day: 0,
            time: 0
        };
        this.sweepInfo = {
            lastSweepTime: -1,
            seed: 1,
            quikSweepCount: 0,
            quikTime: 0
        };
        this.medias = [];
        this.mediasVol = [];
        this.adCoin = 0;
        this.speedRecord = [!1, !1];
        this.exchangeRecord = [];
        this.nickname = "未命名";
        this.openId = "";
        this.isEndGuide = !1;
        this.guideStep = 1;
        this.newEggInfo = {
            currIndex: -1,
            time: 0
        };
        this.coin = 100;
        this.diamond = 100;
        this.upgradeStone = 0;
        this.power = 100;
        this.coin = $storageUtil.StorageUtil.getItem($localName.default.COIN, this.coin);
        this.adCoin = $storageUtil.StorageUtil.getItem($localName.default.AD_COIN, this.adCoin);
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.BROWSER) {
            this.adCoin = 999;
        }
        this.skillBooks = $storageUtil.StorageUtil.getItem($localName.default.SKILL_BOOKS, this.skillBooks);
        this.equipBooks = $storageUtil.StorageUtil.getItem($localName.default.EQUIP_BOOKS, this.equipBooks);
        this.upgradeStone = $storageUtil.StorageUtil.getItem($localName.default.UPGRADE_STONE, this.upgradeStone);
        this.gradeInfo = $storageUtil.StorageUtil.getItem($localName.default.GRADE_INFO, this.gradeInfo);
        this.power = $storageUtil.StorageUtil.getItem($localName.default.POWER, this.power);
        this.diamond = $storageUtil.StorageUtil.getItem($localName.default.DIAMOND, this.diamond);
        this.eggRecord = $storageUtil.StorageUtil.getItem($localName.default.EGG_RECORD, this.eggRecord);
        this.headIndex = $storageUtil.StorageUtil.getItem($localName.default.HEAD_INDEX, this.headIndex);
        this.speedRecord = $storageUtil.StorageUtil.getItem($localName.default.SPEED_RECORD, this.speedRecord);
        this.sign = $storageUtil.StorageUtil.getItem($localName.default.SIGN, this.sign);
        this.sweepInfo = $storageUtil.StorageUtil.getItem($localName.default.SWEEP, this.sweepInfo);
        this.newEggInfo = $storageUtil.StorageUtil.getItem($localName.default.NEW_UNLOCK_EGG_LIST, this.newEggInfo);
        this.isEndGuide = $storageUtil.StorageUtil.getItem($localName.default.ISGUIDE, this.isEndGuide);
        this.exchangeRecord = $storageUtil.StorageUtil.getItem($localName.default.EXCHANGE_RECORD, this.exchangeRecord);
        if ($platform.Platform.currPlatForm === $platform.PlatformEnum.BROWSER) {
            this.nickname = $storageUtil.StorageUtil.getItem("NICK_NAME", "未命名", !1);
        }
        if (-1 === this.sweepInfo.lastSweepTime) {
            this.sweepInfo.lastSweepTime = $countDownUtil.CountDownUtil.currTime;
            $storageUtil.StorageUtil.setItem($localName.default.SWEEP, this.sweepInfo);
        }
        this.medias = $storageUtil.StorageUtil.getItem($localName.default.MEDIAS, [!0, !0, !0]);
        this.mediasVol = $storageUtil.StorageUtil.getItem($localName.default.MEDIAS_VOL, [1, 1, 1]);
        if (!this.medias[0]) {
            $gameVibrationContext.default.setVibration(!1);
        }
        this.medias[1]
            ? $audioPlayer.default.setMusicVolume(this.mediasVol[1])
            : $audioPlayer.default.setMusicVolume(0);
        this.medias[2]
            ? $audioPlayer.default.setEffectVolume(this.mediasVol[2])
            : $audioPlayer.default.setEffectVolume(0);
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
    t.prototype.guideEnd = function () {
        this.isEndGuide = !0;
        $storageUtil.StorageUtil.setItem($localName.default.ISGUIDE, this.isEndGuide);
    };
    t.prototype.sweepQuikCount = function () {
        var t = $util.default.startDayTimestamp();
        if (this.sweepInfo.quikTime < t) {
            this.sweepInfo.quikTime = t;
            this.sweepInfo.quikSweepCount = 4;
            $storageUtil.StorageUtil.setItem($localName.default.SWEEP, this.sweepInfo);
        }
        return this.sweepInfo.quikSweepCount;
    };
    t.prototype.getSweepTime = function () {
        var t = Math.floor(($countDownUtil.CountDownUtil.currTime - this.sweepInfo.lastSweepTime) / 36e5);
        if (t > 8) {
            t = 8;
        }
        return t;
    };
    t.prototype.sweep = function () {
        this.sweepInfo.lastSweepTime = $countDownUtil.CountDownUtil.currTime;
        this.sweepInfo.seed = $seedUtil.default.randomFrom(1, 999999);
        $storageUtil.StorageUtil.setItem($localName.default.SWEEP, this.sweepInfo);
    };
    t.prototype.autoSeep = function () {
        this.sweepInfo.quikSweepCount--;
        if (this.sweepInfo.quikSweepCount < 0) {
            this.sweepInfo.quikSweepCount = 0;
        }
        this.sweepInfo.quikTime = $util.default.startDayTimestamp();
        $storageUtil.StorageUtil.setItem($localName.default.SWEEP, this.sweepInfo);
    };
    t.prototype.isSign = function () {
        var t = $util.default.startDayTimestamp();
        return this.sign.day >= 3 || this.sign.time >= t;
    };
    t.prototype.signRecord = function () {
        this.sign.time = $util.default.startDayTimestamp();
        this.sign.day++;
        $storageUtil.StorageUtil.setItem($localName.default.SIGN, this.sign);
    };
    t.prototype.setHeadIndex = function (t) {
        this.headIndex = t;
        $storageUtil.StorageUtil.setItem($localName.default.HEAD_INDEX, t);
    };
    t.prototype.getEgg = function (t) {
        return this.eggRecord[t - 1] ? this.eggRecord[t - 1] : 0;
    };
    t.prototype.setEgg = function (t, e) {
        this.eggRecord[t - 1] = e;
        $storageUtil.StorageUtil.setItem($localName.default.EGG_RECORD, this.eggRecord);
    };
    t.prototype.hasEggCompleted = function (t) {
        for (var e = 0; e < t.length; e++) {
            if ((1 === t[e] || 2 === t[e]) && this.getEgg(t[e]) < 2) {
                return !1;
            }
            if (this.getEgg(t[e]) < 1) {
                return !1;
            }
        }
        return !0;
    };
    t.prototype.getEquipBookByPart = function (t) {
        return (this.equipBooks.has(t) && this.equipBooks.get(t)) || 0;
    };
    t.prototype.getSkillBookById = function (t) {
        return (this.skillBooks.has(t) && this.skillBooks.get(t)) || 0;
    };
    t.prototype.opearEquipBook = function (t, e) {
        var i = 0;
        if (this.equipBooks.has(t)) {
            i = this.equipBooks.get(t);
        }
        return !(
            (i += e) < 0 ||
            (this.equipBooks.set(t, i),
            $storageUtil.StorageUtil.setItem($localName.default.EQUIP_BOOKS, this.equipBooks),
            0)
        );
    };
    t.prototype.opearSkillBook = function (t, e) {
        var i = 0;
        if (this.skillBooks.has(t)) {
            i = this.skillBooks.get(t);
        }
        return !(
            (i += e) < 0 ||
            (this.skillBooks.set(t, i),
            $storageUtil.StorageUtil.setItem($localName.default.SKILL_BOOKS, this.skillBooks),
            0)
        );
    };
    t.prototype.checkEquipBook = function (t, e) {
        var i = 0;
        if (this.equipBooks.has(t)) {
            i = this.equipBooks.get(t);
        }
        return (i += e) >= 0;
    };
    t.prototype.checkSKillBook = function (t, e) {
        var i = 0;
        if (this.skillBooks.has(t)) {
            i = this.skillBooks.get(t);
        }
        return (i += e) >= 0;
    };
    t.prototype.opearCoin = function (t) {
        try {
            if (!(t = parseInt(t))) {
                return !1;
            }
            var e = this.coin + t;
            if (e < 0) {
                return !1;
            }
            this.coin = e;
            $storageUtil.StorageUtil.setItem($localName.default.COIN, this.coin);
            $eventManager.default.send($localEventName.default.RENDER_USER_INFO);
        } catch (t) {
            console.error(t);
        }
        return !0;
    };
    t.prototype.checkCoin = function (t) {
        return this.coin + t >= 0;
    };
    t.prototype.opearAdCoin = function (t) {
        var e = this.adCoin + t;
        return !(
            e < 0 ||
            ((this.adCoin = e),
            $storageUtil.StorageUtil.setItem($localName.default.AD_COIN, this.adCoin),
            $eventManager.default.send($localEventName.default.RENDER_USER_INFO),
            0)
        );
    };
    t.prototype.checkAdCoin = function (t) {
        return this.adCoin + t >= 0;
    };
    t.prototype.opearPower = function (t) {
        var e = this.power + t;
        return !(
            e < 0 ||
            (t < 0 && $taskContext.default.Ins.setTaskRecord(3, -t),
            (this.power = e),
            $storageUtil.StorageUtil.setItem($localName.default.POWER, this.power),
            $eventManager.default.send($localEventName.default.RENDER_USER_INFO),
            0)
        );
    };
    t.prototype.checkPower = function (t) {
        return this.power + t >= 0;
    };
    t.prototype.opearDiamond = function (t) {
        var e = this.diamond + t;
        return !(
            e < 0 ||
            ((this.diamond = e),
            $storageUtil.StorageUtil.setItem($localName.default.DIAMOND, this.diamond),
            $eventManager.default.send($localEventName.default.RENDER_USER_INFO),
            0)
        );
    };
    t.prototype.checkDiamond = function (t) {
        return this.diamond + t >= 0;
    };
    t.prototype.opearUpgradeStone = function (t) {
        var e = this.upgradeStone + t;
        return !(
            e < 0 ||
            ((this.upgradeStone = e),
            $storageUtil.StorageUtil.setItem($localName.default.UPGRADE_STONE, this.upgradeStone),
            0)
        );
    };
    t.prototype.checkUpgradeStone = function (t) {
        return this.upgradeStone + t >= 0;
    };
    t.prototype.addExp = function (t, e) {
        if (void 0 === e) {
            e = 1;
        }
        var i = !1;
        this.gradeInfo.exp += t;
        for (var n = 0; n < e; n++) {
            var s = 150 + 35 * (this.gradeInfo.grade - 1);
            if (this.gradeInfo.exp >= s) {
                this.gradeInfo.exp -= s;
                this.gradeInfo.grade++;
                i = !0;
            }
        }
        if (i) {
            this.opearCoin(100 * e);
            $skillContext.default.Ins.unlockSkill();
            $eventManager.default.send($localEventName.default.RENDER_USER_INFO);
            $eventManager.default.send($localEventName.default.USER_UPGRADE);
        }
        $storageUtil.StorageUtil.setItem($localName.default.GRADE_INFO, this.gradeInfo);
        return i;
    };
    t.prototype.getMedias = function (t) {
        return this.medias[t];
    };
    t.prototype.setMedias = function (t, e) {
        this.medias[t] = e;
        $storageUtil.StorageUtil.setItem($localName.default.MEDIAS, this.medias);
    };
    t.prototype.getMediaVol = function (t) {
        return this.mediasVol[t];
    };
    t.prototype.setMediaVol = function (t, e) {
        this.mediasVol[t] = e;
        $storageUtil.StorageUtil.setItem($localName.default.MEDIAS_VOL, this.mediasVol);
    };
    t.prototype.setMediaAndVolCache = function (t, e, i) {
        this.medias[t] = i;
        this.mediasVol[t] = e;
    };
    t.prototype.saveSpeedRecord = function () {
        $storageUtil.StorageUtil.setItem($localName.default.SPEED_RECORD, this.speedRecord);
    };
    t.prototype.getCurrConfigIndex = function () {
        var t = $util.default.startDayTimestamp();
        if (t !== this.newEggInfo.time) {
            this.newEggInfo.time = t;
            this.newEggInfo.currIndex = -1;
            $storageUtil.StorageUtil.setItem($localName.default.NEW_UNLOCK_EGG_LIST, this.newEggInfo);
        }
        return this.newEggInfo.currIndex;
    };
    t.prototype.setCurrConfigIndex = function (t) {
        this.newEggInfo.currIndex = t;
        $storageUtil.StorageUtil.setItem($localName.default.NEW_UNLOCK_EGG_LIST, this.newEggInfo);
    };
    t.prototype.addExchange = function (t) {
        return (
            !this.exchangeRecord.includes(t) &&
            (this.exchangeRecord.push(t),
            $storageUtil.StorageUtil.setItem($localName.default.EXCHANGE_RECORD, this.exchangeRecord),
            !0)
        );
    };
    return t;
})();
exports.default = m;
