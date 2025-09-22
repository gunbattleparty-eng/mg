"use strict";
cc._RF.push(module, '70ad0ScjsFOuIWro+UB2aba', 'GameSkillInfo');
// game_script/scripts/GameSkillInfo.js

"use strict";

exports.GameSkillInfo = exports.Skill4Param = void 0;
var o;
var n;

var $eventManager = require("./EventManager");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $roleContext = require("./RoleContext");

var $gameContext = require("./GameContext");

var $bulletSkill = require("./BulletSkill");

var $carSkill = require("./CarSkill");

var $dartSkill = require("./DartSkill");

var $freezeSkill = require("./FreezeSkill");

var $guideLaserSkill = require("./GuideLaserSkill");

var $iceBombSkill = require("./IceBombSkill");

var $oilSkill = require("./OilSkill");

var $pulseLaserSkill = require("./PulseLaserSkill");

var $thermobaricSkill = require("./ThermobaricSkill");

var $thunderChainSkill = require("./ThunderChainSkill");

var $thunderSkill = require("./ThunderSkill");

var $windSkill = require("./WindSkill");

(n = o = exports.Skill4Param || (exports.Skill4Param = {}))[n.BASIC = 0] = "BASIC";
n[n.FINAL = 1] = "FINAL";
n[n.ADD = 2] = "ADD";
n[n.DEC = 3] = "DEC";

var w = function () {
  function t() {
    this.skinAtkRange = 350;
    this.skinAtkTargetCount = 12;
    this.skinAtkCd = 3;
    this.skinBoomRange = 1;
    this.skinAtk = 50;
    this.skinAtkAdd = 0;
    this.skinParam = [];
    this.robotParam = [];
    this.chooseParentRecord = new Map();
    this.chooseParentTime = new Map();
    this.skillCount = 0;
  }

  t.prototype.init = function () {
    var t = $roleContext["default"].ins.currSkinInfo.skin;
    var e = $configContext["default"].instance.playerSkinConfigs.find(function (e) {
      return e.id === t;
    });

    if (t > 1) {
      this.skinAtkTargetCount = e.skill_value[0];
      this.skinAtkAdd = e.skill_value[1];
      this.skinAtkCd = e.skill_value[2];
    }

    this.skinParam = e.skill_value;
  };

  t.prototype.chooseSkill = function (t) {
    var e = $configContext["default"].instance.skillConfigsMap.get(t);
    var i = null;
    (i = 0 === e.is_buff ? this.setChooseParend(e.skill_id || e.id) : this.chooseParentRecord.get(e.skill_id)).chooseSkill(e);

    if (23 === t && 2 === $roleContext["default"].ins.currSkinInfo.skin || 41 === t && 3 === $roleContext["default"].ins.currSkinInfo.skin || 61 === t && 4 === $roleContext["default"].ins.currSkinInfo.skin || 81 === t && 5 === $roleContext["default"].ins.currSkinInfo.skin || 100 === t && 6 === $roleContext["default"].ins.currSkinInfo.skin || 135 === t && 7 === $roleContext["default"].ins.currSkinInfo.skin) {
      this.skinAtkRange = i.skillAtkRange[o.BASIC];
      this.skinAtk = Math.ceil(i.skillAtk[o.BASIC] * this.skinAtkAdd);
    }

    123 === t || 161 === t ? this.getSkillById(61).chooseSkill(e) : 142 === t && this.getSkillById(41).chooseSkill(e);
  };

  t.prototype.hideCreateSkill = function (t) {
    if (!this.chooseParentRecord.has(t)) {
      var e = $configContext["default"].instance.skillConfigsMap.get(t);

      if (0 === e.skill_id) {
        var i = this.setChooseParend(t, !0);
        i.chooseSkill(e);
        console.log(i.toString());
      }
    }
  };

  t.prototype.setChooseParend = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    if (!this.chooseParentRecord.has(t)) {
      this.chooseParentRecord.set(t, this.createSkill(t));
      this.chooseParentTime.set(t, $gameContext["default"].ins.gameStartTime);
    }

    if (!e) {
      this.chooseParentRecord.get(t).chooseCount++;
      $eventManager["default"].send($localEventName["default"].ADD_SKILL_CD, t);
    }

    return this.chooseParentRecord.get(t);
  };

  t.prototype.getChooseParendCount = function (t) {
    return this.chooseParentRecord.has(t) ? this.chooseParentRecord.get(t).chooseCount : 0;
  };

  t.prototype.getSkillById = function (t) {
    return this.chooseParentRecord.has(t) ? this.chooseParentRecord.get(t) : null;
  };

  t.prototype.getSKill = function (t) {
    var e = 1;
    t instanceof $bulletSkill.BulletSkill ? e = 1 : t instanceof $thermobaricSkill.ThermobaricSkill ? e = 23 : t instanceof $freezeSkill.FreezeSkill ? e = 41 : t instanceof $thunderSkill.ThunderSkill ? e = 61 : t instanceof $carSkill.CarSkill ? e = 81 : t instanceof $pulseLaserSkill.PulseLaserSkill ? e = 100 : t instanceof $guideLaserSkill.GuideLaserSkill ? e = 116 : t instanceof $iceBombSkill.IceBombSkill ? e = 135 : t instanceof $windSkill.WindSkill ? e = 209 : t instanceof $oilSkill.OilSkill ? e = 227 : t instanceof $dartSkill.DartSkill ? e = 247 : t instanceof $thunderChainSkill.ThunderChainSkill && (e = 153);
    return this.getSkillById(e);
  };

  t.prototype.createSkill = function (t) {
    switch (t) {
      case 1:
        return new $bulletSkill.BulletSkill();

      case 23:
        return new $thermobaricSkill.ThermobaricSkill();

      case 41:
        return new $freezeSkill.FreezeSkill();

      case 61:
        return new $thunderSkill.ThunderSkill();

      case 81:
        return new $carSkill.CarSkill();

      case 100:
        return new $pulseLaserSkill.PulseLaserSkill();

      case 116:
        return new $guideLaserSkill.GuideLaserSkill();

      case 135:
        return new $iceBombSkill.IceBombSkill();

      case 209:
        return new $windSkill.WindSkill();

      case 227:
        return new $oilSkill.OilSkill();

      case 247:
        return new $dartSkill.DartSkill();

      case 153:
        return new $thunderChainSkill.ThunderChainSkill();

      default:
        throw new Error("Invalid skill id");
    }
  };

  return t;
}();

exports.GameSkillInfo = w;

cc._RF.pop();