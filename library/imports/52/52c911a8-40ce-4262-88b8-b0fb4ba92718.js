"use strict";
cc._RF.push(module, '52c91GoQM5CYoi4sPtLqScY', 'SkillContext');
// game_script/scripts/SkillContext.js

"use strict";

var $storageUtil = require("./StorageUtil");

var $gameGemInfo = require("./GameGemInfo");

var $configContext = require("./ConfigContext");

var $equipmentContext = require("./EquipmentContext");

var $localName = require("./LocalName");

var $roleContext = require("./RoleContext");

var $userDataContext = require("./UserDataContext");

var u = function () {
  function t() {
    this.skillStores = [];
    this.chooseBuff = [];
  }

  Object.defineProperty(t, "Ins", {
    get: function get() {
      if (!t.instance) {
        t.instance = new t();
      }

      return t.instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.init = function () {
    this.skillStores = $storageUtil.StorageUtil.getItem($localName["default"].SKILL_STORE, this.skillStores);
    this.unlockSkill();
    this.refreshBuffSkill();
  };

  t.prototype.checkSkillUpgrade = function (t) {
    var e = this.getSKillLevel(t);

    if (0 === e || e >= 50) {
      return !1;
    }

    var i = $configContext["default"].instance.basicSkillConfigMap.get(t);
    var o = i.spend_price[0] * e;
    var n = i.spend_price[1] * e;
    return $userDataContext["default"].Ins.checkCoin(-o) && $userDataContext["default"].Ins.checkSKillBook(t, -n);
  };

  t.prototype.checkAllSKillUpgrade = function () {
    for (var t = 0; t < $configContext["default"].instance.basicSkillConfigs.length; t++) {
      var e = $configContext["default"].instance.basicSkillConfigs[t].skillmaster_id;

      if (this.checkSkillUpgrade(e)) {
        return !0;
      }
    }

    return !1;
  };

  t.prototype.isUnlock = function (t) {
    return -1 != this.skillStores.findIndex(function (e) {
      return e.id == t;
    });
  };

  t.prototype.getSKillAtk = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = this.getBasicAtk(t);
    var o = Math.ceil($roleContext["default"].ins.getGunAllAtkAdd() * i);
    return i + this.getGradeupAtk(t, e) + this.getGemAtk(t, i) + o;
  };

  t.prototype.getGemAtk = function (t, e) {
    var i = 0;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.Attack)) {
      i = $gameGemInfo.GameGemInfo.ins.get1($gameGemInfo.GemType.Attack);
    }

    var o = $gameGemInfo.GameGemInfo.ins.gemIds;
    var r = 0;
    o.forEach(function (e) {
      var i = $configContext["default"].instance.gemConfigs.find(function (t) {
        return t.id === e;
      });
      var o = $configContext["default"].instance.gemSkillConfigs.find(function (t) {
        return t.id === i.SkillPool;
      });

      if (o.skill_type.includes(1) && o.skill_values.includes(t.id)) {
        r += i.value[i.value.length - 1];
      }
    });
    var a = this.getSkillAtkCoefficient(t);
    return Math.ceil(i * a + e * r);
  };

  t.prototype.getGradeupAtk = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var i = $equipmentContext["default"].Ins.getAtk() + $equipmentContext["default"].Ins.getEquipmentAtk();
    var o = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(1);
    var n = this.getUpgradeConfigByIdAndLevel(t.id, e);
    return n ? Math.ceil(i * n.upgrade_values[o][0] * n.upgrade_values[o][1]) : 0;
  };

  t.prototype.getBasicAtk = function (t) {
    var e = $equipmentContext["default"].Ins.getAtk() + $equipmentContext["default"].Ins.getEquipmentAtk();
    return Math.ceil(e * this.getSkillAtkCoefficient(t));
  };

  t.prototype.getSkillAtkCoefficient = function (t) {
    return 81 !== t.id ? 1 + t.add_sx[5] : 1 + t.add_sx[7];
  };

  t.prototype.getUpgradeConfigByIdAndLevel = function (t, e) {
    return $configContext["default"].instance.skillUpgradeConfigs.find(function (i) {
      return i.skillmaster_id === t && i.level === e;
    });
  };

  t.prototype.getSKillLevel = function (t) {
    var e = this.skillStores.find(function (e) {
      return e.id === t;
    });
    return e ? e.level : 0;
  };

  t.prototype.upgradeSkill = function (t, e) {
    this.refreshSkillBuff(t, e);
    var i = this.skillStores.find(function (e) {
      return e.id === t;
    });

    if (!i) {
      i = {
        id: t,
        level: e
      };
      this.skillStores.push(i);
    }

    i.level = e;
    $storageUtil.StorageUtil.setItem($localName["default"].SKILL_STORE, this.skillStores);
  };

  t.prototype.refreshSkillBuff = function (t, e) {
    var i = $configContext["default"].instance.basicSkillConfigMap.get(t);

    for (var o = 0; o < i.skill_unclocklevel.length; o++) {
      if (e >= i.skill_unclocklevel[o]) {
        var n = i.unclock_skillgroup[o];

        if (!this.chooseBuff.includes(n)) {
          this.chooseBuff.push(n);
        }
      }
    }
  };

  t.prototype.clearSkill = function () {
    this.skillStores = [{
      id: 1,
      level: 1
    }];
  };

  t.prototype.skillToString = function () {
    var t = "当前技能等级：\n";

    for (var e = 0; e < this.skillStores.length; e++) {
      var i = this.skillStores[e];
      t += "技能ID: " + i.id + " 等级：" + i.level + "\n";
    }

    return t;
  };

  t.prototype.getSkillCD = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = 0;
    1 === t.id || 81 === t.id ? i = t.add_sx[2] : 23 === t.id || 41 === t.id || 61 === t.id || 153 === t.id ? i = t.add_sx[1] : 100 !== t.id && 247 !== t.id && 116 !== t.id && 135 !== t.id && 227 !== t.id && 209 !== t.id || (i = t.add_sx[3]);

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var o = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(4);
    var r = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    i = parseFloat((i - r[o][0] * r[o][1]).toFixed(1));
    return $gameGemInfo.GameGemInfo.ins.caculateCD(i);
  };

  t.prototype.getBounceCount = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = 0;

    if (153 === t.id) {
      i = t.add_sx[0];
    }

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var o = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(13);
    var n = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return Math.ceil(i + n[o][0] * n[o][1]);
  };

  t.prototype.getSkillPenetration = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = 0;
    1 === t.id ? i = t.add_sx[6] : 41 === t.id ? i = t.add_sx[0] : 209 === t.id && (i = t.add_sx[1]);

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var o = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(6);
    var n = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return Math.ceil(i + n[o][0] * n[o][1]);
  };

  t.prototype.getSkillBoomAtk = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    return this.getBasicSkillBoomAtk(t, e) + this.getSkillBoomUpgradeAtk(t, e);
  };

  t.prototype.getBasicSkillBoomAtk = function (t, e) {
    var i = 0;

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    if (23 === t.id) {
      i = Math.ceil(this.getSKillAtk(t, e) * (1 + t.add_sx[6]));
    }

    return i;
  };

  t.prototype.getSkillBoomUpgradeAtk = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = this.getBasicSkillBoomAtk(t, e);

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var o = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(7);
    var n = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return Math.ceil(i * n[o][0] * n[o][1]);
  };

  t.prototype.getBoomRange = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    return this.getBasicBoomRange(t) + this.getSkillBoomUpRangeAdd(t, e);
  };

  t.prototype.getBasicBoomRange = function (t) {
    var e = 0;
    23 === t.id ? e = t.add_sx[3] : (t.id = 227) && (e = t.add_sx[1]);
    return e;
  };

  t.prototype.getSkillBoomUpRangeAdd = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var i = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(8);
    var o = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return o[i][0] * o[i][1];
  };

  t.prototype.getSputteringAtk = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    return this.getBasicSputteringAtk(t) + this.getSputteringUpAtk(t, e);
  };

  t.prototype.getBasicSputteringAtk = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = 0;

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    if (61 === t.id) {
      i = Math.ceil(this.getSKillAtk(t, e) * (1 + t.add_sx[3]));
    }

    return i;
  };

  t.prototype.getSputteringUpAtk = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = this.getBasicSputteringAtk(t);

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var o = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(9);
    var n = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return Math.ceil(i * n[o][0] * n[o][1]);
  };

  t.prototype.getSputteringRange = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    return this.getBasicSputteringRange(t) + this.getSputteringUpRange(t, e);
  };

  t.prototype.getBasicSputteringRange = function (t) {
    var e = 0;
    61 === t.id ? e = t.add_sx[4] : 81 === t.id ? e = 129 * t.add_sx[0] : 135 === t.id ? e = 90 * t.add_sx[1] : 247 === t.id && (e = 100 * t.add_sx[7]);
    return e;
  };

  t.prototype.getSputteringUpRange = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var i = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(10);
    var o = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return o[i][0] * o[i][1];
  };

  t.prototype.getAtkInterval = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    return this.getBasicAtkInterval(t) - this.getUpAtkInterval(t, e);
  };

  t.prototype.getBasicAtkInterval = function (t) {
    var e = 0;
    81 === t.id ? e = t.add_sx[1] : 100 !== t.id && 116 !== t.id || (e = t.add_sx[2]);
    return e;
  };

  t.prototype.getUpAtkInterval = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var i = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(11);
    var o = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return o[i][0] * o[i][1];
  };

  t.prototype.getSkillTime = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    return this.getBasicSkillTime(t) + this.getUpSkillTime(t, e);
  };

  t.prototype.getBasicSkillTime = function (t) {
    var e = 0;
    100 === t.id || 116 === t.id ? e = t.add_sx[1] : 135 === t.id && (e = t.add_sx[6]);
    return e;
  };

  t.prototype.getUpSkillTime = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    if (-1 === e) {
      e = this.getSKillLevel(t.id);
    }

    var i = $configContext["default"].instance.basicSkillConfigs.find(function (e) {
      return e.skillmaster_id === t.id;
    }).show_attribute.indexOf(12);
    var o = this.getUpgradeConfigByIdAndLevel(t.id, e).upgrade_values;
    return o[i][0] * o[i][1];
  };

  t.prototype.unlockSkill = function () {
    var t = $configContext["default"].instance.basicSkillConfigs;

    for (var e = 0; e < t.length; e++) {
      if (0 === this.getSKillLevel(t[e].skillmaster_id) && $userDataContext["default"].Ins.gradeInfo.grade >= t[e].unclok_level) {
        this.upgradeSkill(t[e].skillmaster_id, 1);
      }
    }
  };

  t.prototype.refreshBuffSkill = function () {
    var t = $configContext["default"].instance.basicSkillConfigs;

    for (var e = 0; e < t.length; e++) {
      this.refreshSkillBuff(t[e].skillmaster_id, this.getSKillLevel(t[e].skillmaster_id));
    }
  };

  t.prototype.getUseSkillIds = function () {
    return this.skillStores.map(function (t) {
      return t.id;
    });
  };

  return t;
}();

exports["default"] = u;

cc._RF.pop();