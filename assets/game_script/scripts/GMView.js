var o;
var $eventManager = require("./EventManager");
var $login = require("./Login");
var $uIManager = require("./UIManager");
var $popupView = require("./PopupView");
var $storageUtil = require("./StorageUtil");
var $battleContext = require("./BattleContext");
var $configContext = require("./ConfigContext");
var $localName = require("./LocalName");
var $roleContext = require("./RoleContext");
var $userDataContext = require("./UserDataContext");
var _ = cc._decorator;
var k = _.ccclass;
var v = _.property;
var b = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.gemLayer = null;
        e.btnEgg = null;
        e.btnEquip = null;
        e.btnSkill = null;
        e.btnStone = null;
        e.btnCoin = null;
        e.btnClearCoin = null;
        e.btnClearAll = null;
        e.nameLable = null;
        e.btnName = null;
        e.btnPass = null;
        e.btnCopy = null;
        e.dataLabel = null;
        e.btnDataSure = null;
        e.btnAdapt = null;
        e.gemLable = null;
        e.btnGem = null;
        e.innerSwitch = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        var t = $storageUtil.StorageUtil.getItem("adapt", !1, !1);
        this.btnAdapt.getComponentInChildren(cc.Label).string = t ? "关闭适配" : "开启适配";
    };
    e.prototype.addEvent = function () {
        this.btnEgg.on("click", this.clearEgg, this);
        this.btnEquip.on("click", this.addEquip, this);
        this.btnSkill.on("click", this.addSkill, this);
        this.btnStone.on("click", this.addStone, this);
        this.btnCoin.on("click", this.addCoin, this);
        this.btnClearCoin.on("click", this.clearCoin, this);
        this.btnClearAll.on("click", this.clearCoinALl, this);
        this.btnName.on("click", this.clickName, this);
        this.btnPass.on("click", this.clickPass, this);
        this.btnGem.on("click", this.clickGem, this);
        this.btnCopy.on("click", this.copy, this);
        this.btnDataSure.on("click", this.clickDataSure, this);
        this.btnAdapt.on("click", this.clickAdapt, this);
    };
    e.prototype.removeEvent = function () {
        this.btnEgg.off("click", this.clearEgg, this);
        this.btnEquip.off("click", this.addEquip, this);
        this.btnSkill.off("click", this.addSkill, this);
        this.btnStone.off("click", this.addStone, this);
        this.btnCoin.off("click", this.addCoin, this);
        this.btnClearCoin.off("click", this.clearCoin, this);
        this.btnClearAll.off("click", this.clearCoinALl, this);
        this.btnName.off("click", this.clickName, this);
        this.btnPass.off("click", this.clickPass, this);
        this.btnGem.off("click", this.clickGem, this);
        this.btnCopy.off("click", this.copy, this);
        this.btnDataSure.off("click", this.clickDataSure, this);
        this.btnAdapt.off("click", this.clickAdapt, this);
    };
    e.prototype.clickAdapt = function () {
        var t = $storageUtil.StorageUtil.getItem("adapt", !1, !1);
        var e = (t = !t) ? "开启适配" : "关闭适配";
        this.btnAdapt.getComponentInChildren(cc.Label).string = t ? "关闭适配" : "开启适配";
        $uIManager.UIManager.instance.showToast("已" + e + ",重启生效");
        $storageUtil.StorageUtil.setItem("adapt", t, !1);
    };
    e.prototype.clickDataSure = function () {
        var t;
        var e;
        var i = this.dataLabel.string;
        var o = JSON.parse(i);
        cc.sys.localStorage.clear();
        try {
            var n = __values(Object.entries(o));
            for (var s = n.next(); !s.done; s = n.next()) {
                var l = __read(s.value, 2);
                var c = l[0];
                var u = l[1];
                cc.sys.localStorage.setItem(c, u);
            }
        } catch (e) {
            t = {
                error: e
            };
        } finally {
            try {
                if (s && !s.done && (e = n.return)) {
                    e.call(n);
                }
            } finally {
                if (t) {
                    throw t.error;
                }
            }
        }
        location.reload();
    };
    e.prototype.copy = function () {
        var t;
        var e;
        var i = {
            isEnc: !0
        };
        try {
            var o = __values(Object.entries($localName.default));
            for (var n = o.next(); !n.done; n = o.next()) {
                var s = __read(n.value, 2);
                var l = (s[0], s[1]);
                var c = cc.sys.localStorage.getItem(l);
                if (c) {
                    i[l] = c;
                }
            }
        } catch (e) {
            t = {
                error: e
            };
        } finally {
            try {
                if (n && !n.done && (e = o.return)) {
                    e.call(o);
                }
            } finally {
                if (t) {
                    throw t.error;
                }
            }
        }
        var d = JSON.stringify(i);
        navigator.clipboard.writeText(d);
        $uIManager.UIManager.instance.showToast("复制成功");
    };
    e.prototype.clickPass = function () {
        if (this.innerSwitch) {
            for (var t = 1; t <= 100; t++) {
                this.setRecord(t, 1, 300);
            }
            $storageUtil.StorageUtil.setItem($localName.default.LEVEL_RECORD, $battleContext.default.Ins.levelRecords);
        } else {
            for (t = 1; t <= $configContext.default.instance.levelInfoConfigs.length; t++) {
                $battleContext.default.Ins.setRecord(t, 1, 300);
            }
        }
        $uIManager.UIManager.instance.showToast("好了，你现在通关了");
    };
    e.prototype.setRecord = function (t, e, i) {
        var o = $battleContext.default.Ins.levelRecords.findIndex(function (e) {
            return e.level === t;
        });
        -1 !== o
            ? $battleContext.default.Ins.levelRecords[o].resBlood < e &&
              ($battleContext.default.Ins.levelRecords[o].resBlood = e)
            : $battleContext.default.Ins.levelRecords.push({
                  level: t,
                  resBlood: e,
                  time: i,
                  gainBoxIndex: -1
              });
    };
    e.prototype.clickGem = function () {
        var t = this;
        var e = $configContext.default.instance.gemConfigs.find(function (e) {
            return e.id === parseInt(t.gemLable.string);
        });
        if (e) {
            $roleContext.default.ins.addPackItem(e, 1);
            $uIManager.UIManager.instance.showToast("添加完成");
        }
    };
    e.prototype.clickName = function () {
        "" !== this.nameLable.string
            ? (($userDataContext.default.Ins.nickname = this.nameLable.string),
              $eventManager.default.send($login.Login.LOGIN_SUCCESS),
              $storageUtil.StorageUtil.setItem("NICK_NAME", this.nameLable.string, !1),
              $uIManager.UIManager.instance.showToast("换好了"))
            : $uIManager.UIManager.instance.showToast("都说了不能为空");
    };
    e.prototype.clearCoin = function () {
        $storageUtil.StorageUtil.removeItem($localName.default.COIN);
        location.reload();
    };
    e.prototype.clearCoinALl = function () {
        cc.sys.localStorage.clear();
        location.reload();
    };
    e.prototype.addEquip = function () {
        for (var t = 1; t <= 6; t++) {
            $userDataContext.default.Ins.opearEquipBook(t, this.innerSwitch ? 1e5 : 100);
        }
        $uIManager.UIManager.instance.showToast("添加完成，快去看看吧");
    };
    e.prototype.addSkill = function () {
        var t = [1, 23, 41, 61, 81, 100, 116, 135, 209, 227, 247, 153];
        for (var e = 0; e < t.length; e++) {
            $userDataContext.default.Ins.opearSkillBook(t[e], this.innerSwitch ? 1e5 : 100);
        }
        $uIManager.UIManager.instance.showToast("可以了，去瞅瞅呗");
    };
    e.prototype.addStone = function () {
        $userDataContext.default.Ins.opearUpgradeStone(this.innerSwitch ? 1e5 : 100);
        $uIManager.UIManager.instance.showToast("添加好了，快去升级吧");
    };
    e.prototype.addCoin = function () {
        $userDataContext.default.Ins.opearCoin(this.innerSwitch ? 1e7 : 1e4);
        $uIManager.UIManager.instance.showToast("添加完成，玩得愉快");
    };
    e.prototype.clearEgg = function () {
        $userDataContext.default.Ins.eggRecord.length = 0;
        $storageUtil.StorageUtil.removeItem($localName.default.EGG_RECORD);
        var t = $roleContext.default.ins.getPlayerSkinInfo(2);
        t.shard = 2;
        t.isHave = !1;
        $roleContext.default.ins.setPlayerSKinInfo(t);
        $uIManager.UIManager.instance.showToast("已清除所有彩蛋");
    };
    __decorate([v(cc.Node)], e.prototype, "gemLayer", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnEgg", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnEquip", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnSkill", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnStone", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnCoin", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnClearCoin", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnClearAll", void 0);
    __decorate([v(cc.Label)], e.prototype, "nameLable", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnName", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnPass", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnCopy", void 0);
    __decorate([v(cc.Label)], e.prototype, "dataLabel", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnDataSure", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnAdapt", void 0);
    __decorate([v(cc.Label)], e.prototype, "gemLable", void 0);
    __decorate([v(cc.Node)], e.prototype, "btnGem", void 0);
    return __decorate([k], e);
})($popupView.PopupView);
exports.default = b;
