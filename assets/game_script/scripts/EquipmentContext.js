exports.EquipmentType = void 0;
var o;
var $assetsMap = require("./AssetsMap");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $storageUtil = require("./StorageUtil");
var $gameGemInfo = require("./GameGemInfo");
var $configContext = require("./ConfigContext");
var $localEventName = require("./LocalEventName");
var $localName = require("./LocalName");
var $roleContext = require("./RoleContext");
var $taskContext = require("./TaskContext");
var $userDataContext = require("./UserDataContext");
(o = exports.EquipmentType || (exports.EquipmentType = {}))[(o.Hat = 1)] = "Hat";
o[(o.Clothes = 2)] = "Clothes";
o[(o.Shoes = 3)] = "Shoes";
o[(o.Armlet = 4)] = "Armlet";
o[(o.Trousers = 5)] = "Trousers";
o[(o.Gloves = 6)] = "Gloves";
var m = (function () {
    function t() {
        this.equipmentMap = new Map();
        this.equipmentAtk = [];
        this.gemMap = new Map();
        this.order = 0;
        this.equipmentMap = $storageUtil.StorageUtil.getItem($localName.default.EQUIPMENT_INFO, this.equipmentMap);
        this.gemMap = $storageUtil.StorageUtil.getItem($localName.default.GEM_LIST_INFO, this.gemMap);
        this.order = $storageUtil.StorageUtil.getItem($localName.default.EQUIPMENT_ORDER, this.order);
        if (0 === this.equipmentMap.size) {
            for (var t = 1; t < 7; t++) {
                this.equipmentMap.set(t, 1);
            }
        }
        for (t = 1; t < 7; t++) {
            this.caculateEquipmentAtk(t);
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
    t.prototype.init = function () {
        this.refreshGameGem();
    };
    t.prototype.getAtk = function () {
        return (
            100 +
            $configContext.default.instance.playerSkinConfigs.find(function (t) {
                return t.id === $roleContext.default.ins.currSkinInfo.skin;
            }).add_attribute
        );
    };
    t.prototype.getGemList = function (t, e) {
        if (void 0 === e) {
            e = this.order;
        }
        return this.gemMap.has(e)
            ? !this.gemMap.get(e)[t - 1] || this.gemMap.get(e)[t - 1].length <= 0
                ? []
                : this.gemMap.get(e)[t - 1]
            : [];
    };
    t.prototype.getAllGemList = function (t) {
        if (void 0 === t) {
            t = this.order;
        }
        var e = [];
        for (var i = 1; i <= 6; i++) {
            if (this.gemMap.has(t)) {
                if (!(!this.gemMap.get(t)[i - 1] || this.gemMap.get(t)[i - 1].length <= 0)) {
                    e = e.concat(this.gemMap.get(t)[i - 1]);
                }
            }
        }
        return e;
    };
    t.prototype.setGem = function (t, e, i, o) {
        if (void 0 === i) {
            i = -1;
        }
        if (void 0 === o) {
            o = this.order;
        }
        if (!this.gemMap.has(o)) {
            this.gemMap.set(o, []);
        }
        var n = this.gemMap.get(o);
        if (-1 !== i) {
            n[t - 1][i] = e;
        } else {
            if (n[t - 1]) {
                for (var s = 0; s < 5; s++) {
                    if (!n[t - 1][s] || -1 === n[t - 1][s]) {
                        n[t - 1][s] = e;
                        break;
                    }
                }
            } else {
                n[t - 1] = [e];
            }
        }
        $roleContext.default.ins.usePackItem(e, 1);
        $storageUtil.StorageUtil.setItem($localName.default.GEM_LIST_INFO, this.gemMap);
        this.refreshGameGem();
    };
    t.prototype.removeGem = function (t, e, i) {
        if (void 0 === i) {
            i = this.order;
        }
        var o = this.gemMap.get(i)[t - 1][e];
        if (o) {
            var n = $configContext.default.instance.gemConfigs.find(function (t) {
                return t.id === o;
            });
            $roleContext.default.ins.returnPackItem(n, 1);
        }
        this.gemMap.get(i)[t - 1][e] = null;
        $storageUtil.StorageUtil.setItem($localName.default.GEM_LIST_INFO, this.gemMap);
        this.refreshGameGem();
    };
    t.prototype.hasSameGem = function (t, e, i) {
        if (void 0 === i) {
            i = this.order;
        }
        if (!this.gemMap.has(i) || !this.gemMap.get(i)[t - 1] || this.gemMap.get(i)[t - 1].length <= 0) {
            return !1;
        }
        var o = $configContext.default.instance.gemConfigs.find(function (t) {
            return t.id === e;
        }).SkillPool;
        var n = function (e) {
            var n = s.gemMap.get(i)[t - 1][e];
            if (
                n &&
                $configContext.default.instance.gemConfigs.find(function (t) {
                    return t.id === n;
                }).SkillPool === o
            ) {
                return {
                    value: !0
                };
            }
        };
        var s = this;
        for (var r = 0; r < this.gemMap.get(i)[t - 1].length; r++) {
            var a = n(r);
            if ("object" == typeof a) {
                return a.value;
            }
        }
        return !1;
    };
    t.prototype.getPartAndIndexGemId = function (t, e, i) {
        if (void 0 === i) {
            i = this.order;
        }
        return !this.gemMap.has(i) ||
            !this.gemMap.get(i)[t - 1] ||
            this.gemMap.get(i)[t - 1].length <= 0 ||
            !this.gemMap.get(i)[t - 1][e]
            ? -1
            : this.gemMap.get(i)[t - 1][e];
    };
    t.prototype.hasGemTypeByPart = function (t, e) {
        var i = this.getGemList(t);
        return $configContext.default.instance.gemConfigs
            .filter(function (t) {
                return i.includes(t.id);
            })
            .map(function (t) {
                return t.SkillPool;
            })
            .includes(e);
    };
    t.prototype.gemCount = function (t, e) {
        if (void 0 === e) {
            e = this.order;
        }
        if (!this.gemMap.has(e) || !this.gemMap.get(e)[t - 1] || this.gemMap.get(e)[t - 1].length <= 0) {
            return 0;
        }
        var i = 0;
        for (var o = 0; o < this.gemMap.get(e)[t - 1].length; o++) {
            if (this.gemMap.get(e)[t - 1][o]) {
                i++;
            }
        }
        return i;
    };
    t.prototype.getEquipmentAtk = function () {
        var t = 0;
        for (var e = 0; e < this.equipmentAtk.length; e++) {
            t += this.equipmentAtk[e];
        }
        return t;
    };
    t.prototype.getEquipemtnAtkByPart = function (t) {
        return this.equipmentAtk[t - 1];
    };
    t.prototype.caculateEquipmentAtk = function (t) {
        var e = $configContext.default.instance.equipmentConfigs.find(function (e) {
            return e.id === t;
        });
        var i = 0;
        var o = 0;
        for (var n = 1; n <= this.equipmentMap.get(t); n++) {
            n > e.level[o] && o < e.level.length - 1 && o++;
            i += e.add_atk[o];
        }
        this.equipmentAtk[t - 1] = i;
        return i;
    };
    t.prototype.getGrade = function (t) {
        var e = $configContext.default.instance.equipmentConfigs.find(function (e) {
            return e.id === t;
        });
        var i = 0;
        for (var o = 0; o < e.level.length; o++) {
            if (this.equipmentMap.get(t) <= e.level[o]) {
                i = o;
                break;
            }
        }
        return e.Grade[i];
    };
    t.prototype.refreshGameGem = function (t) {
        if (void 0 === t) {
            t = !1;
        }
        $gameGemInfo.GameGemInfo.ins.clear();
        var e = this.gemMap.get(this.order);
        if (e && !(e.length <= 0)) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                if (o) {
                    for (var n = 0; n < o.length; n++) {
                        var s = o[n];
                        if (s && s > 0) {
                            $gameGemInfo.GameGemInfo.ins.chooseGem(s);
                        }
                    }
                }
            }
            if (t) {
                $roleContext.default.ins.getRobotProps().forEach(function (t, e) {
                    $gameGemInfo.GameGemInfo.ins.setGemProp(e, t);
                });
            }
        }
    };
    t.prototype.getEquipmentUpInfo = function (t) {
        var e = $configContext.default.instance.equipmentConfigs.find(function (e) {
            return e.id === t;
        });
        var i = this.equipmentMap.get(t);
        if (i >= e.level[e.level.length - 1]) {
            return null;
        }
        var o = -1;
        for (var n = 0; n < e.level.length; n++) {
            if (i === e.level[n]) {
                o = n;
                break;
            }
        }
        if (-1 !== o) {
            return {
                type: 0,
                num: e.Gradeup_materialspend[o][0],
                coin: e.Gradeup_materialspend[o][1]
            };
        }
        o = 0;
        for (n = 0; n < e.level.length && !(i < e.level[n]); n++) {
            o = n;
        }
        return -1 !== o
            ? {
                  type: 1,
                  num: e.level_materialspend[o][0] * i,
                  coin: e.level_materialspend[o][1] * i
              }
            : null;
    };
    t.prototype.upgradeEquip = function (t, e) {
        $taskContext.default.Ins.setTaskRecord(6);
        this.equipmentMap.set(t, e);
        this.caculateEquipmentAtk(t);
        $storageUtil.StorageUtil.setItem($localName.default.EQUIPMENT_INFO, this.equipmentMap);
    };
    t.prototype.upGradeEquipCache = function (t, e) {
        this.equipmentMap.set(t, e);
    };
    t.prototype.checkEquipUpgrade = function () {
        for (var t = 0; t < 6; t++) {
            if (this.checkPartEquipUpgrade(t + 1)) {
                return !0;
            }
        }
        return !1;
    };
    t.prototype.autoUpgrade = function () {
        var e = [];
        for (var i = 1; i <= 6; i++) {
            var o = this.getEquipmentUpInfo(i);
            for (
                var a = 0;
                o &&
                $userDataContext.default.Ins.checkCoin(-o.coin) &&
                (0 !== o.type || $userDataContext.default.Ins.checkUpgradeStone(-o.num)) &&
                (1 !== o.type || $userDataContext.default.Ins.checkEquipBook(i, -o.num));

            ) {
                $userDataContext.default.Ins.opearCoin(-o.coin);
                0 === o.type
                    ? $userDataContext.default.Ins.opearUpgradeStone(-o.num)
                    : 1 === o.type && $userDataContext.default.Ins.opearEquipBook(i, -o.num);
                a++;
                var l = t.Ins.equipmentMap.get(i) + 1;
                t.Ins.upGradeEquipCache(i, l);
                if (!e.includes(i)) {
                    e.push(i);
                }
                o = this.getEquipmentUpInfo(i);
            }
            var c = t.Ins.equipmentMap.get(i);
            t.Ins.upgradeEquip(i, c);
            $eventManager.default.send($localEventName.default.RENDER_GEM);
            if ($userDataContext.default.Ins.addExp(15 * a, a)) {
                $popupManager.PopupManager.instance.open(
                    $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.UpgradeView,
                    {
                        count: a
                    }
                );
                break;
            }
        }
        return e;
    };
    t.prototype.checkPartEquipUpgrade = function (t) {
        var e = this.getEquipmentUpInfo(t);
        return !!(
            e &&
            $userDataContext.default.Ins.checkCoin(-e.coin) &&
            ((0 === e.type && $userDataContext.default.Ins.checkUpgradeStone(-e.num)) ||
                (1 === e.type && $userDataContext.default.Ins.checkEquipBook(t, -e.num)))
        );
    };
    t.prototype.changeGemItem = function (t) {
        if (t !== this.order) {
            var e = $roleContext.default.ins.packList;
            var i = this.getAllGemList();
            var o = this.getAllGemList(t);
            for (var n = 0; n < e.length; n++) {
                i.includes(e[n].id) && ((e[n].isUse = !1), e[n].num++);
                o.includes(e[n].id) && ((e[n].isUse = !0), e[n].num--);
            }
            $roleContext.default.ins.save();
            this.order = t;
            this.refreshGameGem();
            $storageUtil.StorageUtil.setItem($localName.default.EQUIPMENT_ORDER, t);
        }
    };
    return t;
})();
exports.default = m;
