
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/GameContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87e21G0A9JP7L3XJbkBQKcO', 'GameContext');
// game_script/scripts/GameContext.js

"use strict";

var $collider = require("./Collider");

var $seedUtil = require("./SeedUtil");

var $util = require("./Util");

var $configContext = require("./ConfigContext");

var $baseEnemy = require("./BaseEnemy");

var $gameGemInfo = require("./GameGemInfo");

var $gameSkillInfo = require("./GameSkillInfo");

var $skillContext = require("./SkillContext");

var $userDataContext = require("./UserDataContext");

var $roleContext = require("./RoleContext");

var $eggEnemy_1 = require("./EggEnemy_1");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var _ = function () {
  function t() {
    this.gameRatio = 1;
    this.enemyPool = new Map();
    this.buttlePool = new Map();
    this.currEnemys = [];
    this.enemyLayer = null;
    this.enemy2Layer = null;
    this.buttleLayer = null;
    this.floorLayer = null;
    this.debuffLayer = null;
    this.enemyBulletLayer = null;
    this.lowBulletLayer = null;
    this.atkLayer = null;
    this.robotFlyLayer = null;
    this.gameStartTime = 0;
    this.currPlayerLevel = 1;
    this.currExp = 0;
    this.chooseSkillRecord = new Map();
    this.currLevelConfig = null;
    this.currLevelInfoConfig = null;
    this.hurtRecord = new Map();
    this.skillInfo = null;
    this.doorInitHp = 3e3;
    this.doorLeftHp = 3e3;
    this.skillBuff = [];
    this.createEnemyProccess = 0;
    this.killEnemyCount = 0;
    this.warnTimes = [];
    this.isBoss = [];
    this.warnIndex = -1;
    this.aginChooseSkillCount = 0;
    this.atkColor = [cc.Color.WHITE, new cc.Color().fromHEX("#FF3636"), new cc.Color().fromHEX("#56CC3B")];
    this.atkSize = [27, 35];
    this.eggEnemy = null;
  }

  t.prototype.hpProccess = function () {
    return parseFloat((this.doorLeftHp / this.doorInitHp).toFixed(2));
  };

  t.prototype.init = function (t, e, i, o, n) {
    this.currEnemys.length = 0;
    this.aginChooseSkillCount = 0;
    this.killEnemyCount = 0;
    this.createEnemyProccess = 0;
    this.gameRatio = 1;
    this.gameStartTime = 0;
    this.currPlayerLevel = 1;
    this.currExp = 0;
    this.chooseSkillRecord.clear();
    this.skillInfo = new $gameSkillInfo.GameSkillInfo();
    this.skillInfo.init();
    this.chooseSkill(1);
    this.skillBuff = $util["default"].deepCopy($skillContext["default"].Ins.chooseBuff);
    this.chooseBuff();
    this.enemyLayer = t;
    this.enemy2Layer = e;
    this.buttleLayer = i;
    this.floorLayer = o;
    this.debuffLayer = n;
    this.doorInitHp = 3e3;

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.WallAdd)) {
      var s = $gameGemInfo.GameGemInfo.ins.get2($gameGemInfo.GemType.WallAdd);
      this.doorInitHp += s[0];
    }

    this.doorLeftHp = this.doorInitHp;

    if (0 === $userDataContext["default"].Ins.getEgg(6) && 6 === this.currLevelInfoConfig.id) {
      var r = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Enemy, "/prefabs/EggEnemy_1");
      var c = cc.instantiate(r);
      c.parent = this.enemyLayer;
      c.position = cc.v3(0, 400);
      var h = $configContext["default"].instance.enemyConfigsMap.get(117);
      this.eggEnemy = c.getComponent($eggEnemy_1["default"]);
      this.eggEnemy.initEnemy(h, 0, 1e5);
    }
  };

  t.prototype.chooseBuff = function () {
    var t = this.skillBuff.length;

    for (var e = 0; e < t; e++) {
      var i = $configContext["default"].instance.skillConfigsMap.get(this.skillBuff[e]);

      if (this.preSkillProccess(i)) {
        this.chooseSkill(i.id);
        this.skillBuff.splice(e, 1);
        t--;
        e--;
      }
    }
  };

  t.prototype.loadLevel = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e = this;
      return __generator(this, function () {
        this.currLevelInfoConfig = $configContext["default"].instance.getConfigByLevel(t);
        return [2, new Promise(function (t) {
          $configContext["default"].instance.loadConfigResJson(["/level_" + $configContext["default"].instance.seedLevel], function (i) {
            e.currLevelConfig = i[0];
            e.warnTimes.length = 0;
            e.isBoss.length = 0;
            e.warnIndex = -1;

            for (var o = 0; o < e.currLevelConfig.length; o++) {
              var n = $configContext["default"].instance.enemyConfigsMap.get(e.currLevelConfig[o].id).monster_type;

              if (!(2 !== n && 3 !== n)) {
                e.warnTimes.push(e.currLevelConfig[o].time - 5);
                e.isBoss.push(3 === n);
              }
            }

            console.log("提示时间", e.warnTimes);

            if (t) {
              t(null);
            }
          });
        })["catch"](function (t) {
          console.error(t);
        })];
      });
    });
  };

  t.prototype.addExp = function (t) {
    this.currExp += t;
    var e = this.needExp();
    return this.currExp >= e && (this.currPlayerLevel++, this.currExp = 0, !0);
  };

  t.prototype.needExp = function () {
    return this.currLevelInfoConfig.EX + Math.ceil(this.currLevelInfoConfig.EX_num * Math.pow(this.currLevelInfoConfig.EX_coefficient, this.currPlayerLevel - 1));
  };

  t.prototype.chooseSkill = function (t) {
    if (!this.chooseSkillRecord.has(t)) {
      this.chooseSkillRecord.set(t, 0);
    }

    var e = this.chooseSkillRecord.get(t);
    e++;
    this.chooseSkillRecord.set(t, e);
    this.skillInfo.chooseSkill(t);
  };

  t.prototype.getChoosedSKillCount = function (t) {
    return this.chooseSkillRecord.has(t) ? this.chooseSkillRecord.get(t) : 0;
  };

  t.prototype.getRangeRankEnemy = function (t, e, i, o) {
    if (void 0 === i) {
      i = 1;
    }

    if (void 0 === o) {
      o = !1;
    }

    var n = [];
    var s = this.enemyLayer.children.length - i - 1 < 0 ? 0 : this.enemyLayer.children.length - i - 1;

    for (var r = s; r < this.enemyLayer.children.length; r++) {
      var a = this.enemyLayer.children[r].getComponent($baseEnemy["default"]);

      if (!(this.eggEnemy && this.eggEnemy.currType < 2 && a === this.eggEnemy)) {
        o ? Math.abs(a.node.position.y - t.position.y) < e && n.push(a) : a.node.position.subtract(t.position).magSqr() < e * e && n.push(a);
      }
    }

    for (r = s = this.enemy2Layer.children.length - i - 1 < 0 ? 0 : this.enemy2Layer.children.length - i - 1; r < this.enemy2Layer.children.length; r++) {
      a = this.enemy2Layer.children[r].getComponent($baseEnemy["default"]);
      o ? Math.abs(a.node.position.y - t.position.y) < e && n.push(a) : a.node.position.subtract(t.position).magSqr() < e * e && n.push(a);
    }

    n.sort(function (t, e) {
      return e.residueDis - t.residueDis;
    });
    return n.length < i ? null : n[n.length - i];
  };

  t.prototype.getNearbyN2 = function (t, e) {
    var i = [];
    var o = this.enemyLayer.children.length - e - 2 < 0 ? 0 : this.enemyLayer.children.length - e - 2;

    for (var n = o; n < this.enemyLayer.children.length; n++) {
      var s = this.enemyLayer.children[n].getComponent($baseEnemy["default"]);

      if (!(this.eggEnemy && this.eggEnemy.currType < 2 && s === this.eggEnemy)) {
        if (s.node !== t) {
          i.push(s);
        }
      }
    }

    for (n = o = this.enemy2Layer.children.length - e - 2 < 0 ? 0 : this.enemy2Layer.children.length - e - 2; n < this.enemy2Layer.children.length; n++) {
      if ((s = this.enemy2Layer.children[n].getComponent($baseEnemy["default"])).node !== t) {
        i.push(s);
      }
    }

    i.sort(function (t, e) {
      return t.residueDis - e.residueDis;
    });

    if (i.length > e) {
      i = i.slice(0, e);
    }

    return i;
  };

  t.prototype.getRangeRandomEnemyLayer = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = [];

    for (var o = 0; o < this.enemyLayer.children.length; o++) {
      var n = this.enemyLayer.children[o];

      if (!(this.eggEnemy && this.eggEnemy.currType < 2 && n === this.eggEnemy.node) && n !== t && (-1 === e || n.position.subtract(t.position).magSqr() < e * e)) {
        var s = n.getComponent($baseEnemy["default"]);
        i.push(s);
      }
    }

    return i.length <= 0 ? null : i[$seedUtil["default"].randomFrom(0, i.length - 1)];
  };

  t.prototype.getRangeRandomEnemyLayerByPos = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    var i = [];

    for (var o = 0; o < this.enemyLayer.children.length; o++) {
      var n = this.enemyLayer.children[o];

      if (!(this.eggEnemy && this.eggEnemy.currType < 2 && n === this.eggEnemy.node) && (-1 === e || n.position.subtract(t).magSqr() < e * e)) {
        var s = n.getComponent($baseEnemy["default"]);
        i.push(s);
      }
    }

    return i.length <= 0 ? null : i[$seedUtil["default"].randomFrom(0, i.length - 1)];
  };

  t.prototype.getRandomEnemys = function (t, e, i) {
    var o = -1;
    var n = [];
    var s = 9999;

    for (var a = 0; a < this.currEnemys.length; a++) {
      if (this.currEnemys[a].residueDis < s && this.currEnemys[a].node !== t && this.currEnemys[a].getPosition().sub(t.position).magSqr() <= i * i) {
        s = this.currEnemys[a].residueDis;
        o = a;
      }
    }

    if (-1 !== o) {
      n.push(this.currEnemys[o]);
    }

    if (-1 === o || 1 === e) {
      return n;
    }

    var l = $seedUtil["default"].randomCount(0, this.currEnemys.length - 1, e);

    if (1 === l.length && l[0] === o) {
      return n;
    }

    l.includes(o) ? l.splice(l.indexOf(o), 1) : l.splice(l.length - 1, 1);

    for (a = 0; a < l.length; a++) {
      n.push(this.currEnemys[l[a]]);
    }

    return n;
  };

  t.prototype.getRandomEnemy = function (e) {
    if (void 0 === e) {
      e = null;
    }

    if (0 === this.currEnemys.length) {
      return null;
    }

    if (e) {
      var i = this.currEnemys.indexOf(e);

      if (-1 !== i && 1 == this.currEnemys.length) {
        return null;
      }

      for (;;) {
        var o = $seedUtil["default"].randomFrom(0, t.ins.currEnemys.length - 1);

        if (o !== i) {
          i = o;
          break;
        }
      }

      return this.currEnemys[i];
    }

    return t.ins.currEnemys[$seedUtil["default"].randomFrom(0, t.ins.currEnemys.length - 1)];
  };

  t.prototype.putButtlePool = function (t) {
    if (!this.buttlePool.has(t.buttleType)) {
      this.buttlePool.set(t.buttleType, []);
    }

    this.buttlePool.get(t.buttleType).push(t);
    t.remove(!1);
  };

  t.prototype.getButtlePool = function (t) {
    return this.buttlePool.has(t) && 0 !== this.buttlePool.get(t).length ? this.buttlePool.get(t).pop() : null;
  };

  t.prototype.putEnemyPool = function (t) {
    if (!this.enemyPool.has(t.config.id)) {
      this.enemyPool.set(t.config.id, []);
    }

    this.enemyPool.get(t.config.id).push(t);
    t.remove(!1);
  };

  t.prototype.getEnemyPool = function (t) {
    return this.enemyPool.has(t) && 0 !== this.enemyPool.get(t).length ? this.enemyPool.get(t).pop() : null;
  };

  t.prototype.createNextSkills = function () {
    var t = this;
    var e = $configContext["default"].instance.skillConfigs.filter(function (e) {
      return 0 === e.is_buff && t.checkParentSkill(0 === e.skill_id ? e.id : e.skill_id) && t.preSkillProccess(e) && t.getChoosedSKillCount(e.id) < e.max_num;
    });
    $util["default"].shuffle(e);

    if (0 === e.length) {
      return [];
    }

    if (e.length <= 3) {
      return e.map(function (t) {
        return t.id;
      });
    }

    var i = e.map(function (t) {
      return t.skill_weight;
    });
    var o = $seedUtil["default"].weightRandomCount(i, 3, !1);
    var n = [];

    for (var s = 0; s < o.length; s++) {
      n.push(e[o[s]].id);
    }

    return n;
  };

  t.prototype.killBossSkills = function () {
    var t = this;
    var e = $configContext["default"].instance.skillConfigs.filter(function (e) {
      return 0 === e.is_buff && t.checkParentSkill(0 === e.skill_id ? e.id : e.skill_id) && t.preSkillProccess(e) && t.mutuallyExclusive(e) && t.getChoosedSKillCount(e.id) < e.max_num;
    });
    $util["default"].shuffle(e);

    if (0 === e.length) {
      return [];
    }

    if (e.length <= 12) {
      return e.map(function (t) {
        return t.id;
      });
    }

    var i = e.map(function (t) {
      return t.skill_weight;
    });
    var o = $seedUtil["default"].weightRandomCount(i, 12, !1);
    var n = [];

    for (var s = 0; s < o.length; s++) {
      n.push(e[o[s]].id);
    }

    return n;
  };

  t.prototype.mutuallyExclusive = function (t) {
    for (var e = 0; e < t.unclock[1].length; e++) {
      if (t.unclock[1][e] < 0) {
        return !1;
      }
    }

    return !0;
  };

  t.prototype.checkParentSkill = function (t) {
    return !!this.skillInfo.chooseParentRecord.has(t) || !!$skillContext["default"].Ins.isUnlock(t) && this.skillInfo.chooseParentRecord.size < ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.Choose4Skill) ? 4 : 5);
  };

  t.prototype.preSkillProccess = function (t) {
    var e = t.unclock;
    var i = !1;

    if (!(0 === e[1].length || 0 === e[1][0] || $skillContext["default"].Ins.getSKillLevel(t.skill_id) >= e[1][0])) {
      i = !0;
    }

    if (i) {
      return !1;
    }

    for (var o = 0; o < e[0].length; o++) {
      var n = e[0][o];

      if (n > 0 && !this.chooseSkillRecord.has(n)) {
        i = !0;
        break;
      }

      if (n < 0 && this.chooseSkillRecord.has(Math.abs(n))) {
        i = !0;
        break;
      }
    }

    return !i;
  };

  t.prototype.getCurrEnemyAdd = function (t) {
    var e = this.currLevelInfoConfig.Monsterspool.indexOf(t);
    return -1 === e ? [0, 0] : [this.currLevelInfoConfig.addHP[e], this.currLevelInfoConfig.addatk[e]];
  };

  t.prototype.hurtStatistics = function (t, e) {
    if (!this.hurtRecord.has(t)) {
      this.hurtRecord.set(t, 0);
    }

    this.hurtRecord.set(t, this.hurtRecord.get(t) + e);
  };

  t.prototype.getGameTime = function (t) {
    if (0 === this.gameStartTime) {
      this.gameStartTime += t;
      return "00:00";
    }

    var e = this.gameStartTime + t;

    if (Math.ceil(e) === Math.ceil(this.gameStartTime)) {
      this.gameStartTime = e;
      return "";
    }

    this.gameStartTime = e;
    var i = $util["default"].formatDate(Math.floor(e));
    return i[1] + ":" + i[2];
  };

  t.prototype.clear = function () {
    $collider.cCollider.inst.clear();
    this.hurtRecord.clear();
    this.chooseSkillRecord.clear();
    this.enemyPool.forEach(function (t) {
      t.forEach(function (t) {
        return t.destroy();
      });
    });
    this.buttlePool.forEach(function (t) {
      t.forEach(function (t) {
        return t.destroy();
      });
    });
    this.enemyPool.clear();
    this.buttlePool.clear();
  };

  t.prototype.settleReward = function (t) {
    var e = this.currLevelInfoConfig.reward_num;

    if (!t) {
      var i = this.currLevelInfoConfig.phase_reward_time.length - 1;

      for (var o = 0; o < this.currLevelInfoConfig.phase_reward_time.length; o++) {
        if (this.createEnemyProccess <= this.currLevelInfoConfig.phase_reward_time[o]) {
          i = o;
          break;
        }
      }

      e = this.currLevelInfoConfig.phase_reward_num[i];
    }

    var n = [];
    n.push({
      type: 1,
      num: e[0]
    });
    n.push({
      type: 2,
      num: e[1]
    });

    if (0 !== e[2]) {
      var s = $seedUtil["default"].randomFrom(1, 2);
      s = Math.min(s, e[2]);
      var a = $seedUtil["default"].randomCount(1, 6, s);
      var c = $seedUtil["default"].splitNumber(e[2], s);

      for (o = 0; o < s; o++) {
        n.push({
          type: 3,
          ext: a[o],
          num: c[o]
        });
      }
    }

    if (0 !== e[3]) {
      var u = $seedUtil["default"].randomFrom(1, 4);
      var d = $skillContext["default"].Ins.getUseSkillIds();
      u = Math.min(d.length, u);
      d = $seedUtil["default"].randomArr(d, u);
      var m = $seedUtil["default"].splitNumber(e[3], u);

      for (o = 0; o < u; o++) {
        n.push({
          type: 4,
          ext: d[o],
          num: m[o]
        });
      }
    }

    if (0 !== e[4]) {
      var y = $seedUtil["default"].weightRandomCount(this.currLevelInfoConfig.gemstone_weight[1], e[4], !0);
      var g = [];

      for (o = 0; o < y.length; o++) {
        g.push(this.currLevelInfoConfig.gemstone_weight[0][y[o]]);
      }

      var _ = function _(t) {
        var e = $configContext["default"].instance.gemConfigs.filter(function (e) {
          return e.Grade === g[t];
        });
        var i = e[$seedUtil["default"].randomFrom(0, e.length - 1)].id;
        n.push({
          type: 5,
          ext: i,
          num: 1
        });
      };

      for (o = 0; o < g.length; o++) {
        _(o);
      }
    }

    if (t && 4 === this.currLevelInfoConfig.id && 2 === $roleContext["default"].ins.currSkinInfo.gun && 0 === $userDataContext["default"].Ins.getEgg(4)) {
      n.push({
        type: 9,
        ext: 2,
        num: 1
      });
      $userDataContext["default"].Ins.setEgg(4, 1);
    }

    if (t && 8 === this.currLevelInfoConfig.id && 2 === $roleContext["default"].ins.currSkinInfo.gun && 0 === $userDataContext["default"].Ins.getEgg(5)) {
      n.push({
        type: 9,
        ext: 2,
        num: 1
      });
      $userDataContext["default"].Ins.setEgg(5, 1);
    }

    return n;
  };

  t.prototype.pauseReward = function () {
    var t = [];
    var e = this.currLevelInfoConfig.phase_reward_time.length - 1;

    for (var i = 0; i < this.currLevelInfoConfig.phase_reward_time.length; i++) {
      if (this.createEnemyProccess <= this.currLevelInfoConfig.phase_reward_time[i]) {
        e = i;
        break;
      }
    }

    var o = this.currLevelInfoConfig.phase_reward_num[e];

    if (0 !== o[0]) {
      t.push({
        type: 1,
        num: o[0]
      });
    }

    if (0 !== o[1]) {
      t.push({
        type: 2,
        num: o[1]
      });
    }

    if (0 !== o[2]) {
      t.push({
        type: 3,
        ext: 0,
        num: o[2]
      });
    }

    if (0 !== o[3]) {
      t.push({
        type: 4,
        ext: 0,
        num: o[3]
      });
    }

    if (0 !== o[4]) {
      t.push({
        type: 5,
        ext: 0,
        num: o[4]
      });
    }

    return t;
  };

  t.prototype.addCurrEnemy = function (t) {
    this.currEnemys.push(t);
  };

  t.prototype.removeEnemy = function (t) {
    var e = this.currEnemys.indexOf(t);

    if (-1 !== e) {
      this.currEnemys.splice(e, 1);
    }
  };

  t.ins = new t();
  return t;
}();

exports["default"] = _;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEdhbWVDb250ZXh0LmpzIl0sIm5hbWVzIjpbIiRjb2xsaWRlciIsInJlcXVpcmUiLCIkc2VlZFV0aWwiLCIkdXRpbCIsIiRjb25maWdDb250ZXh0IiwiJGJhc2VFbmVteSIsIiRnYW1lR2VtSW5mbyIsIiRnYW1lU2tpbGxJbmZvIiwiJHNraWxsQ29udGV4dCIsIiR1c2VyRGF0YUNvbnRleHQiLCIkcm9sZUNvbnRleHQiLCIkZWdnRW5lbXlfMSIsIiRhc3NldHNMb2FkZXIiLCIkYXNzZXRzTWFwIiwiXyIsInQiLCJnYW1lUmF0aW8iLCJlbmVteVBvb2wiLCJNYXAiLCJidXR0bGVQb29sIiwiY3VyckVuZW15cyIsImVuZW15TGF5ZXIiLCJlbmVteTJMYXllciIsImJ1dHRsZUxheWVyIiwiZmxvb3JMYXllciIsImRlYnVmZkxheWVyIiwiZW5lbXlCdWxsZXRMYXllciIsImxvd0J1bGxldExheWVyIiwiYXRrTGF5ZXIiLCJyb2JvdEZseUxheWVyIiwiZ2FtZVN0YXJ0VGltZSIsImN1cnJQbGF5ZXJMZXZlbCIsImN1cnJFeHAiLCJjaG9vc2VTa2lsbFJlY29yZCIsImN1cnJMZXZlbENvbmZpZyIsImN1cnJMZXZlbEluZm9Db25maWciLCJodXJ0UmVjb3JkIiwic2tpbGxJbmZvIiwiZG9vckluaXRIcCIsImRvb3JMZWZ0SHAiLCJza2lsbEJ1ZmYiLCJjcmVhdGVFbmVteVByb2NjZXNzIiwia2lsbEVuZW15Q291bnQiLCJ3YXJuVGltZXMiLCJpc0Jvc3MiLCJ3YXJuSW5kZXgiLCJhZ2luQ2hvb3NlU2tpbGxDb3VudCIsImF0a0NvbG9yIiwiY2MiLCJDb2xvciIsIldISVRFIiwiZnJvbUhFWCIsImF0a1NpemUiLCJlZ2dFbmVteSIsInByb3RvdHlwZSIsImhwUHJvY2Nlc3MiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImluaXQiLCJlIiwiaSIsIm8iLCJuIiwibGVuZ3RoIiwiY2xlYXIiLCJHYW1lU2tpbGxJbmZvIiwiY2hvb3NlU2tpbGwiLCJkZWVwQ29weSIsIklucyIsImNob29zZUJ1ZmYiLCJHYW1lR2VtSW5mbyIsImlucyIsImhhc0dlbSIsIkdlbVR5cGUiLCJXYWxsQWRkIiwicyIsImdldDIiLCJnZXRFZ2ciLCJpZCIsInIiLCJpbnN0YW5jZSIsImdldFJlcyIsIkJ1bmRsZU5hbWVzIiwiRW5lbXkiLCJjIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInYzIiwiaCIsImVuZW15Q29uZmlnc01hcCIsImdldCIsImdldENvbXBvbmVudCIsImluaXRFbmVteSIsInNraWxsQ29uZmlnc01hcCIsInByZVNraWxsUHJvY2Nlc3MiLCJzcGxpY2UiLCJsb2FkTGV2ZWwiLCJfX2F3YWl0ZXIiLCJfX2dlbmVyYXRvciIsImdldENvbmZpZ0J5TGV2ZWwiLCJQcm9taXNlIiwibG9hZENvbmZpZ1Jlc0pzb24iLCJzZWVkTGV2ZWwiLCJtb25zdGVyX3R5cGUiLCJwdXNoIiwidGltZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFkZEV4cCIsIm5lZWRFeHAiLCJFWCIsIk1hdGgiLCJjZWlsIiwiRVhfbnVtIiwicG93IiwiRVhfY29lZmZpY2llbnQiLCJoYXMiLCJzZXQiLCJnZXRDaG9vc2VkU0tpbGxDb3VudCIsImdldFJhbmdlUmFua0VuZW15IiwiY2hpbGRyZW4iLCJhIiwiY3VyclR5cGUiLCJhYnMiLCJub2RlIiwieSIsInN1YnRyYWN0IiwibWFnU3FyIiwic29ydCIsInJlc2lkdWVEaXMiLCJnZXROZWFyYnlOMiIsInNsaWNlIiwiZ2V0UmFuZ2VSYW5kb21FbmVteUxheWVyIiwicmFuZG9tRnJvbSIsImdldFJhbmdlUmFuZG9tRW5lbXlMYXllckJ5UG9zIiwiZ2V0UmFuZG9tRW5lbXlzIiwiZ2V0UG9zaXRpb24iLCJzdWIiLCJsIiwicmFuZG9tQ291bnQiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJnZXRSYW5kb21FbmVteSIsInB1dEJ1dHRsZVBvb2wiLCJidXR0bGVUeXBlIiwicmVtb3ZlIiwiZ2V0QnV0dGxlUG9vbCIsInBvcCIsInB1dEVuZW15UG9vbCIsImNvbmZpZyIsImdldEVuZW15UG9vbCIsImNyZWF0ZU5leHRTa2lsbHMiLCJza2lsbENvbmZpZ3MiLCJmaWx0ZXIiLCJpc19idWZmIiwiY2hlY2tQYXJlbnRTa2lsbCIsInNraWxsX2lkIiwibWF4X251bSIsInNodWZmbGUiLCJtYXAiLCJza2lsbF93ZWlnaHQiLCJ3ZWlnaHRSYW5kb21Db3VudCIsImtpbGxCb3NzU2tpbGxzIiwibXV0dWFsbHlFeGNsdXNpdmUiLCJ1bmNsb2NrIiwiY2hvb3NlUGFyZW50UmVjb3JkIiwiaXNVbmxvY2siLCJzaXplIiwiQ2hvb3NlNFNraWxsIiwiZ2V0U0tpbGxMZXZlbCIsImdldEN1cnJFbmVteUFkZCIsIk1vbnN0ZXJzcG9vbCIsImFkZEhQIiwiYWRkYXRrIiwiaHVydFN0YXRpc3RpY3MiLCJnZXRHYW1lVGltZSIsImZvcm1hdERhdGUiLCJmbG9vciIsImNDb2xsaWRlciIsImluc3QiLCJmb3JFYWNoIiwiZGVzdHJveSIsInNldHRsZVJld2FyZCIsInJld2FyZF9udW0iLCJwaGFzZV9yZXdhcmRfdGltZSIsInBoYXNlX3Jld2FyZF9udW0iLCJ0eXBlIiwibnVtIiwibWluIiwic3BsaXROdW1iZXIiLCJleHQiLCJ1IiwiZCIsImdldFVzZVNraWxsSWRzIiwicmFuZG9tQXJyIiwibSIsImdlbXN0b25lX3dlaWdodCIsImciLCJnZW1Db25maWdzIiwiR3JhZGUiLCJjdXJyU2tpbkluZm8iLCJndW4iLCJzZXRFZ2ciLCJwYXVzZVJld2FyZCIsImFkZEN1cnJFbmVteSIsInJlbW92ZUVuZW15IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsS0FBSyxHQUFHRixPQUFPLENBQUMsUUFBRCxDQUFuQjs7QUFDQSxJ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S0FBS3ZDLFVBQUwsQ0FBZ0I0RSxNQUFoQixDQUF1QnJDLENBQXZCLEVBQTBCLENBQTFCO0lBQ0g7RUFDSixDQUxEOztFQU1BNUMsQ0FBQyxDQUFDd0QsR0FBRixHQUFRLElBQUl4RCxDQUFKLEVBQVI7RUFDQSxPQUFPQSxDQUFQO0FBQ0gsQ0FqbUJPLEVBQVI7O0FBa21CQWlNLE9BQU8sV0FBUCxHQUFrQmxNLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGNvbGxpZGVyID0gcmVxdWlyZShcIi4vQ29sbGlkZXJcIik7XHJcbnZhciAkc2VlZFV0aWwgPSByZXF1aXJlKFwiLi9TZWVkVXRpbFwiKTtcclxudmFyICR1dGlsID0gcmVxdWlyZShcIi4vVXRpbFwiKTtcclxudmFyICRjb25maWdDb250ZXh0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29udGV4dFwiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkZ2FtZUdlbUluZm8gPSByZXF1aXJlKFwiLi9HYW1lR2VtSW5mb1wiKTtcclxudmFyICRnYW1lU2tpbGxJbmZvID0gcmVxdWlyZShcIi4vR2FtZVNraWxsSW5mb1wiKTtcclxudmFyICRza2lsbENvbnRleHQgPSByZXF1aXJlKFwiLi9Ta2lsbENvbnRleHRcIik7XHJcbnZhciAkdXNlckRhdGFDb250ZXh0ID0gcmVxdWlyZShcIi4vVXNlckRhdGFDb250ZXh0XCIpO1xyXG52YXIgJHJvbGVDb250ZXh0ID0gcmVxdWlyZShcIi4vUm9sZUNvbnRleHRcIik7XHJcbnZhciAkZWdnRW5lbXlfMSA9IHJlcXVpcmUoXCIuL0VnZ0VuZW15XzFcIik7XHJcbnZhciAkYXNzZXRzTG9hZGVyID0gcmVxdWlyZShcIi4vQXNzZXRzTG9hZGVyXCIpO1xyXG52YXIgJGFzc2V0c01hcCA9IHJlcXVpcmUoXCIuL0Fzc2V0c01hcFwiKTtcclxudmFyIF8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVSYXRpbyA9IDE7XHJcbiAgICAgICAgdGhpcy5lbmVteVBvb2wgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5idXR0bGVQb29sID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY3VyckVuZW15cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5lbXlMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbmVteTJMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5idXR0bGVMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mbG9vckxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlYnVmZkxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVuZW15QnVsbGV0TGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubG93QnVsbGV0TGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXRrTGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm9ib3RGbHlMYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJQbGF5ZXJMZXZlbCA9IDE7XHJcbiAgICAgICAgdGhpcy5jdXJyRXhwID0gMDtcclxuICAgICAgICB0aGlzLmNob29zZVNraWxsUmVjb3JkID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuY3VyckxldmVsQ29uZmlnID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJMZXZlbEluZm9Db25maWcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaHVydFJlY29yZCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLnNraWxsSW5mbyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kb29ySW5pdEhwID0gM2UzO1xyXG4gICAgICAgIHRoaXMuZG9vckxlZnRIcCA9IDNlMztcclxuICAgICAgICB0aGlzLnNraWxsQnVmZiA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRW5lbXlQcm9jY2VzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5raWxsRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy53YXJuVGltZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmlzQm9zcyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2FybkluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5hZ2luQ2hvb3NlU2tpbGxDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5hdGtDb2xvciA9IFtjYy5Db2xvci5XSElURSwgbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRjM2MzZcIiksIG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjNTZDQzNCXCIpXTtcclxuICAgICAgICB0aGlzLmF0a1NpemUgPSBbMjcsIDM1XTtcclxuICAgICAgICB0aGlzLmVnZ0VuZW15ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHQucHJvdG90eXBlLmhwUHJvY2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoKHRoaXMuZG9vckxlZnRIcCAvIHRoaXMuZG9vckluaXRIcCkudG9GaXhlZCgyKSk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0LCBlLCBpLCBvLCBuKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyRW5lbXlzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5hZ2luQ2hvb3NlU2tpbGxDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5raWxsRW5lbXlDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbmVteVByb2NjZXNzID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVSYXRpbyA9IDE7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJQbGF5ZXJMZXZlbCA9IDE7XHJcbiAgICAgICAgdGhpcy5jdXJyRXhwID0gMDtcclxuICAgICAgICB0aGlzLmNob29zZVNraWxsUmVjb3JkLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5za2lsbEluZm8gPSBuZXcgJGdhbWVTa2lsbEluZm8uR2FtZVNraWxsSW5mbygpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxJbmZvLmluaXQoKTtcclxuICAgICAgICB0aGlzLmNob29zZVNraWxsKDEpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxCdWZmID0gJHV0aWwuZGVmYXVsdC5kZWVwQ29weSgkc2tpbGxDb250ZXh0LmRlZmF1bHQuSW5zLmNob29zZUJ1ZmYpO1xyXG4gICAgICAgIHRoaXMuY2hvb3NlQnVmZigpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlMYXllciA9IHQ7XHJcbiAgICAgICAgdGhpcy5lbmVteTJMYXllciA9IGU7XHJcbiAgICAgICAgdGhpcy5idXR0bGVMYXllciA9IGk7XHJcbiAgICAgICAgdGhpcy5mbG9vckxheWVyID0gbztcclxuICAgICAgICB0aGlzLmRlYnVmZkxheWVyID0gbjtcclxuICAgICAgICB0aGlzLmRvb3JJbml0SHAgPSAzZTM7XHJcbiAgICAgICAgaWYgKCRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLldhbGxBZGQpKSB7XHJcbiAgICAgICAgICAgIHZhciBzID0gJGdhbWVHZW1JbmZvLkdhbWVHZW1JbmZvLmlucy5nZXQyKCRnYW1lR2VtSW5mby5HZW1UeXBlLldhbGxBZGQpO1xyXG4gICAgICAgICAgICB0aGlzLmRvb3JJbml0SHAgKz0gc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kb29yTGVmdEhwID0gdGhpcy5kb29ySW5pdEhwO1xyXG4gICAgICAgIGlmICgwID09PSAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLmdldEVnZyg2KSAmJiA2ID09PSB0aGlzLmN1cnJMZXZlbEluZm9Db25maWcuaWQpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSAkYXNzZXRzTG9hZGVyLmRlZmF1bHQuaW5zdGFuY2UuZ2V0UmVzKCRhc3NldHNNYXAuQnVuZGxlTmFtZXMuRW5lbXksIFwiL3ByZWZhYnMvRWdnRW5lbXlfMVwiKTtcclxuICAgICAgICAgICAgdmFyIGMgPSBjYy5pbnN0YW50aWF0ZShyKTtcclxuICAgICAgICAgICAgYy5wYXJlbnQgPSB0aGlzLmVuZW15TGF5ZXI7XHJcbiAgICAgICAgICAgIGMucG9zaXRpb24gPSBjYy52MygwLCA0MDApO1xyXG4gICAgICAgICAgICB2YXIgaCA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZW5lbXlDb25maWdzTWFwLmdldCgxMTcpO1xyXG4gICAgICAgICAgICB0aGlzLmVnZ0VuZW15ID0gYy5nZXRDb21wb25lbnQoJGVnZ0VuZW15XzEuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWdnRW5lbXkuaW5pdEVuZW15KGgsIDAsIDFlNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmNob29zZUJ1ZmYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzLnNraWxsQnVmZi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0OyBlKyspIHtcclxuICAgICAgICAgICAgdmFyIGkgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnNraWxsQ29uZmlnc01hcC5nZXQodGhpcy5za2lsbEJ1ZmZbZV0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVTa2lsbFByb2NjZXNzKGkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZVNraWxsKGkuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbEJ1ZmYuc3BsaWNlKGUsIDEpO1xyXG4gICAgICAgICAgICAgICAgdC0tO1xyXG4gICAgICAgICAgICAgICAgZS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmxvYWRMZXZlbCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJMZXZlbEluZm9Db25maWcgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdldENvbmZpZ0J5TGV2ZWwodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5sb2FkQ29uZmlnUmVzSnNvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIi9sZXZlbF9cIiArICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uuc2VlZExldmVsXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyTGV2ZWxDb25maWcgPSBpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUud2FyblRpbWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pc0Jvc3MubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLndhcm5JbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5jdXJyTGV2ZWxDb25maWcubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmVuZW15Q29uZmlnc01hcC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJMZXZlbENvbmZpZ1tvXS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLm1vbnN0ZXJfdHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoMiAhPT0gbiAmJiAzICE9PSBuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS53YXJuVGltZXMucHVzaChlLmN1cnJMZXZlbENvbmZpZ1tvXS50aW1lIC0gNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlzQm9zcy5wdXNoKDMgPT09IG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o+Q56S65pe26Ze0XCIsIGUud2FyblRpbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5hZGRFeHAgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuY3VyckV4cCArPSB0O1xyXG4gICAgICAgIHZhciBlID0gdGhpcy5uZWVkRXhwKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyckV4cCA+PSBlICYmICh0aGlzLmN1cnJQbGF5ZXJMZXZlbCsrLCAodGhpcy5jdXJyRXhwID0gMCksICEwKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5uZWVkRXhwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuY3VyckxldmVsSW5mb0NvbmZpZy5FWCArXHJcbiAgICAgICAgICAgIE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyckxldmVsSW5mb0NvbmZpZy5FWF9udW0gKlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucG93KHRoaXMuY3VyckxldmVsSW5mb0NvbmZpZy5FWF9jb2VmZmljaWVudCwgdGhpcy5jdXJyUGxheWVyTGV2ZWwgLSAxKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5jaG9vc2VTa2lsbCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNob29zZVNraWxsUmVjb3JkLmhhcyh0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmNob29zZVNraWxsUmVjb3JkLnNldCh0LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmNob29zZVNraWxsUmVjb3JkLmdldCh0KTtcclxuICAgICAgICBlKys7XHJcbiAgICAgICAgdGhpcy5jaG9vc2VTa2lsbFJlY29yZC5zZXQodCwgZSk7XHJcbiAgICAgICAgdGhpcy5za2lsbEluZm8uY2hvb3NlU2tpbGwodCk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0Q2hvb3NlZFNLaWxsQ291bnQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNob29zZVNraWxsUmVjb3JkLmhhcyh0KSA/IHRoaXMuY2hvb3NlU2tpbGxSZWNvcmQuZ2V0KHQpIDogMDtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5nZXRSYW5nZVJhbmtFbmVteSA9IGZ1bmN0aW9uICh0LCBlLCBpLCBvKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkge1xyXG4gICAgICAgICAgICBpID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuID0gW107XHJcbiAgICAgICAgdmFyIHMgPSB0aGlzLmVuZW15TGF5ZXIuY2hpbGRyZW4ubGVuZ3RoIC0gaSAtIDEgPCAwID8gMCA6IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbi5sZW5ndGggLSBpIC0gMTtcclxuICAgICAgICBmb3IgKHZhciByID0gczsgciA8IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbi5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbltyXS5nZXRDb21wb25lbnQoJGJhc2VFbmVteS5kZWZhdWx0KTtcclxuICAgICAgICAgICAgaWYgKCEodGhpcy5lZ2dFbmVteSAmJiB0aGlzLmVnZ0VuZW15LmN1cnJUeXBlIDwgMiAmJiBhID09PSB0aGlzLmVnZ0VuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgb1xyXG4gICAgICAgICAgICAgICAgICAgID8gTWF0aC5hYnMoYS5ub2RlLnBvc2l0aW9uLnkgLSB0LnBvc2l0aW9uLnkpIDwgZSAmJiBuLnB1c2goYSlcclxuICAgICAgICAgICAgICAgICAgICA6IGEubm9kZS5wb3NpdGlvbi5zdWJ0cmFjdCh0LnBvc2l0aW9uKS5tYWdTcXIoKSA8IGUgKiBlICYmIG4ucHVzaChhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICByID0gcyA9IHRoaXMuZW5lbXkyTGF5ZXIuY2hpbGRyZW4ubGVuZ3RoIC0gaSAtIDEgPCAwID8gMCA6IHRoaXMuZW5lbXkyTGF5ZXIuY2hpbGRyZW4ubGVuZ3RoIC0gaSAtIDE7XHJcbiAgICAgICAgICAgIHIgPCB0aGlzLmVuZW15MkxheWVyLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGEgPSB0aGlzLmVuZW15MkxheWVyLmNoaWxkcmVuW3JdLmdldENvbXBvbmVudCgkYmFzZUVuZW15LmRlZmF1bHQpO1xyXG4gICAgICAgICAgICBvXHJcbiAgICAgICAgICAgICAgICA/IE1hdGguYWJzKGEubm9kZS5wb3NpdGlvbi55IC0gdC5wb3NpdGlvbi55KSA8IGUgJiYgbi5wdXNoKGEpXHJcbiAgICAgICAgICAgICAgICA6IGEubm9kZS5wb3NpdGlvbi5zdWJ0cmFjdCh0LnBvc2l0aW9uKS5tYWdTcXIoKSA8IGUgKiBlICYmIG4ucHVzaChhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbi5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLnJlc2lkdWVEaXMgLSB0LnJlc2lkdWVEaXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG4ubGVuZ3RoIDwgaSA/IG51bGwgOiBuW24ubGVuZ3RoIC0gaV07XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0TmVhcmJ5TjIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBpID0gW107XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzLmVuZW15TGF5ZXIuY2hpbGRyZW4ubGVuZ3RoIC0gZSAtIDIgPCAwID8gMCA6IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbi5sZW5ndGggLSBlIC0gMjtcclxuICAgICAgICBmb3IgKHZhciBuID0gbzsgbiA8IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbi5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbltuXS5nZXRDb21wb25lbnQoJGJhc2VFbmVteS5kZWZhdWx0KTtcclxuICAgICAgICAgICAgaWYgKCEodGhpcy5lZ2dFbmVteSAmJiB0aGlzLmVnZ0VuZW15LmN1cnJUeXBlIDwgMiAmJiBzID09PSB0aGlzLmVnZ0VuZW15KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMubm9kZSAhPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGkucHVzaChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICBuID0gbyA9IHRoaXMuZW5lbXkyTGF5ZXIuY2hpbGRyZW4ubGVuZ3RoIC0gZSAtIDIgPCAwID8gMCA6IHRoaXMuZW5lbXkyTGF5ZXIuY2hpbGRyZW4ubGVuZ3RoIC0gZSAtIDI7XHJcbiAgICAgICAgICAgIG4gPCB0aGlzLmVuZW15MkxheWVyLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgbisrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICgocyA9IHRoaXMuZW5lbXkyTGF5ZXIuY2hpbGRyZW5bbl0uZ2V0Q29tcG9uZW50KCRiYXNlRW5lbXkuZGVmYXVsdCkpLm5vZGUgIT09IHQpIHtcclxuICAgICAgICAgICAgICAgIGkucHVzaChzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQucmVzaWR1ZURpcyAtIGUucmVzaWR1ZURpcztcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaS5sZW5ndGggPiBlKSB7XHJcbiAgICAgICAgICAgIGkgPSBpLnNsaWNlKDAsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5nZXRSYW5nZVJhbmRvbUVuZW15TGF5ZXIgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcclxuICAgICAgICAgICAgZSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdGhpcy5lbmVteUxheWVyLmNoaWxkcmVuLmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5lbmVteUxheWVyLmNoaWxkcmVuW29dO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhKHRoaXMuZWdnRW5lbXkgJiYgdGhpcy5lZ2dFbmVteS5jdXJyVHlwZSA8IDIgJiYgbiA9PT0gdGhpcy5lZ2dFbmVteS5ub2RlKSAmJlxyXG4gICAgICAgICAgICAgICAgbiAhPT0gdCAmJlxyXG4gICAgICAgICAgICAgICAgKC0xID09PSBlIHx8IG4ucG9zaXRpb24uc3VidHJhY3QodC5wb3NpdGlvbikubWFnU3FyKCkgPCBlICogZSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG4uZ2V0Q29tcG9uZW50KCRiYXNlRW5lbXkuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICBpLnB1c2gocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGkubGVuZ3RoIDw9IDAgPyBudWxsIDogaVskc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21Gcm9tKDAsIGkubGVuZ3RoIC0gMSldO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldFJhbmdlUmFuZG9tRW5lbXlMYXllckJ5UG9zID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XHJcbiAgICAgICAgICAgIGUgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbi5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuZW5lbXlMYXllci5jaGlsZHJlbltvXTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgISh0aGlzLmVnZ0VuZW15ICYmIHRoaXMuZWdnRW5lbXkuY3VyclR5cGUgPCAyICYmIG4gPT09IHRoaXMuZWdnRW5lbXkubm9kZSkgJiZcclxuICAgICAgICAgICAgICAgICgtMSA9PT0gZSB8fCBuLnBvc2l0aW9uLnN1YnRyYWN0KHQpLm1hZ1NxcigpIDwgZSAqIGUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuLmdldENvbXBvbmVudCgkYmFzZUVuZW15LmRlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICAgaS5wdXNoKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpLmxlbmd0aCA8PSAwID8gbnVsbCA6IGlbJHNlZWRVdGlsLmRlZmF1bHQucmFuZG9tRnJvbSgwLCBpLmxlbmd0aCAtIDEpXTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5nZXRSYW5kb21FbmVteXMgPSBmdW5jdGlvbiAodCwgZSwgaSkge1xyXG4gICAgICAgIHZhciBvID0gLTE7XHJcbiAgICAgICAgdmFyIG4gPSBbXTtcclxuICAgICAgICB2YXIgcyA9IDk5OTk7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmN1cnJFbmVteXMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyRW5lbXlzW2FdLnJlc2lkdWVEaXMgPCBzICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJFbmVteXNbYV0ubm9kZSAhPT0gdCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyRW5lbXlzW2FdLmdldFBvc2l0aW9uKCkuc3ViKHQucG9zaXRpb24pLm1hZ1NxcigpIDw9IGkgKiBpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcyA9IHRoaXMuY3VyckVuZW15c1thXS5yZXNpZHVlRGlzO1xyXG4gICAgICAgICAgICAgICAgbyA9IGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKC0xICE9PSBvKSB7XHJcbiAgICAgICAgICAgIG4ucHVzaCh0aGlzLmN1cnJFbmVteXNbb10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoLTEgPT09IG8gfHwgMSA9PT0gZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGwgPSAkc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21Db3VudCgwLCB0aGlzLmN1cnJFbmVteXMubGVuZ3RoIC0gMSwgZSk7XHJcbiAgICAgICAgaWYgKDEgPT09IGwubGVuZ3RoICYmIGxbMF0gPT09IG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGwuaW5jbHVkZXMobykgPyBsLnNwbGljZShsLmluZGV4T2YobyksIDEpIDogbC5zcGxpY2UobC5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgICBmb3IgKGEgPSAwOyBhIDwgbC5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgICBuLnB1c2godGhpcy5jdXJyRW5lbXlzW2xbYV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0UmFuZG9tRW5lbXkgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcclxuICAgICAgICAgICAgZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwID09PSB0aGlzLmN1cnJFbmVteXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuY3VyckVuZW15cy5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICBpZiAoLTEgIT09IGkgJiYgMSA9PSB0aGlzLmN1cnJFbmVteXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKDs7KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbyA9ICRzZWVkVXRpbC5kZWZhdWx0LnJhbmRvbUZyb20oMCwgdC5pbnMuY3VyckVuZW15cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChvICE9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IG87XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VyckVuZW15c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQuaW5zLmN1cnJFbmVteXNbJHNlZWRVdGlsLmRlZmF1bHQucmFuZG9tRnJvbSgwLCB0Lmlucy5jdXJyRW5lbXlzLmxlbmd0aCAtIDEpXTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5wdXRCdXR0bGVQb29sID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYnV0dGxlUG9vbC5oYXModC5idXR0bGVUeXBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRsZVBvb2wuc2V0KHQuYnV0dGxlVHlwZSwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1dHRsZVBvb2wuZ2V0KHQuYnV0dGxlVHlwZSkucHVzaCh0KTtcclxuICAgICAgICB0LnJlbW92ZSghMSk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0QnV0dGxlUG9vbCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dGxlUG9vbC5oYXModCkgJiYgMCAhPT0gdGhpcy5idXR0bGVQb29sLmdldCh0KS5sZW5ndGggPyB0aGlzLmJ1dHRsZVBvb2wuZ2V0KHQpLnBvcCgpIDogbnVsbDtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5wdXRFbmVteVBvb2wgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmVteVBvb2wuaGFzKHQuY29uZmlnLmlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15UG9vbC5zZXQodC5jb25maWcuaWQsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmVteVBvb2wuZ2V0KHQuY29uZmlnLmlkKS5wdXNoKHQpO1xyXG4gICAgICAgIHQucmVtb3ZlKCExKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5nZXRFbmVteVBvb2wgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15UG9vbC5oYXModCkgJiYgMCAhPT0gdGhpcy5lbmVteVBvb2wuZ2V0KHQpLmxlbmd0aCA/IHRoaXMuZW5lbXlQb29sLmdldCh0KS5wb3AoKSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuY3JlYXRlTmV4dFNraWxscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGUgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnNraWxsQ29uZmlncy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDAgPT09IGUuaXNfYnVmZiAmJlxyXG4gICAgICAgICAgICAgICAgdC5jaGVja1BhcmVudFNraWxsKDAgPT09IGUuc2tpbGxfaWQgPyBlLmlkIDogZS5za2lsbF9pZCkgJiZcclxuICAgICAgICAgICAgICAgIHQucHJlU2tpbGxQcm9jY2VzcyhlKSAmJlxyXG4gICAgICAgICAgICAgICAgdC5nZXRDaG9vc2VkU0tpbGxDb3VudChlLmlkKSA8IGUubWF4X251bVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICR1dGlsLmRlZmF1bHQuc2h1ZmZsZShlKTtcclxuICAgICAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5sZW5ndGggPD0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5tYXAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0LmlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSBlLm1hcChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5za2lsbF93ZWlnaHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG8gPSAkc2VlZFV0aWwuZGVmYXVsdC53ZWlnaHRSYW5kb21Db3VudChpLCAzLCAhMSk7XHJcbiAgICAgICAgdmFyIG4gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgbi5wdXNoKGVbb1tzXV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5raWxsQm9zc1NraWxscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGUgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLnNraWxsQ29uZmlncy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDAgPT09IGUuaXNfYnVmZiAmJlxyXG4gICAgICAgICAgICAgICAgdC5jaGVja1BhcmVudFNraWxsKDAgPT09IGUuc2tpbGxfaWQgPyBlLmlkIDogZS5za2lsbF9pZCkgJiZcclxuICAgICAgICAgICAgICAgIHQucHJlU2tpbGxQcm9jY2VzcyhlKSAmJlxyXG4gICAgICAgICAgICAgICAgdC5tdXR1YWxseUV4Y2x1c2l2ZShlKSAmJlxyXG4gICAgICAgICAgICAgICAgdC5nZXRDaG9vc2VkU0tpbGxDb3VudChlLmlkKSA8IGUubWF4X251bVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICR1dGlsLmRlZmF1bHQuc2h1ZmZsZShlKTtcclxuICAgICAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5sZW5ndGggPD0gMTIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUubWFwKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5pZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpID0gZS5tYXAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQuc2tpbGxfd2VpZ2h0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBvID0gJHNlZWRVdGlsLmRlZmF1bHQud2VpZ2h0UmFuZG9tQ291bnQoaSwgMTIsICExKTtcclxuICAgICAgICB2YXIgbiA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykge1xyXG4gICAgICAgICAgICBuLnB1c2goZVtvW3NdXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLm11dHVhbGx5RXhjbHVzaXZlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHQudW5jbG9ja1sxXS5sZW5ndGg7IGUrKykge1xyXG4gICAgICAgICAgICBpZiAodC51bmNsb2NrWzFdW2VdIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhMDtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5jaGVja1BhcmVudFNraWxsID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhIXRoaXMuc2tpbGxJbmZvLmNob29zZVBhcmVudFJlY29yZC5oYXModCkgfHxcclxuICAgICAgICAgICAgKCEhJHNraWxsQ29udGV4dC5kZWZhdWx0Lklucy5pc1VubG9jayh0KSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbEluZm8uY2hvb3NlUGFyZW50UmVjb3JkLnNpemUgPFxyXG4gICAgICAgICAgICAgICAgICAgICgkZ2FtZUdlbUluZm8uR2FtZUdlbUluZm8uaW5zLmhhc0dlbSgkZ2FtZUdlbUluZm8uR2VtVHlwZS5DaG9vc2U0U2tpbGwpID8gNCA6IDUpKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucHJlU2tpbGxQcm9jY2VzcyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0LnVuY2xvY2s7XHJcbiAgICAgICAgdmFyIGkgPSAhMTtcclxuICAgICAgICBpZiAoISgwID09PSBlWzFdLmxlbmd0aCB8fCAwID09PSBlWzFdWzBdIHx8ICRza2lsbENvbnRleHQuZGVmYXVsdC5JbnMuZ2V0U0tpbGxMZXZlbCh0LnNraWxsX2lkKSA+PSBlWzFdWzBdKSkge1xyXG4gICAgICAgICAgICBpID0gITA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBlWzBdLmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gZVswXVtvXTtcclxuICAgICAgICAgICAgaWYgKG4gPiAwICYmICF0aGlzLmNob29zZVNraWxsUmVjb3JkLmhhcyhuKSkge1xyXG4gICAgICAgICAgICAgICAgaSA9ICEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG4gPCAwICYmIHRoaXMuY2hvb3NlU2tpbGxSZWNvcmQuaGFzKE1hdGguYWJzKG4pKSkge1xyXG4gICAgICAgICAgICAgICAgaSA9ICEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICFpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldEN1cnJFbmVteUFkZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmN1cnJMZXZlbEluZm9Db25maWcuTW9uc3RlcnNwb29sLmluZGV4T2YodCk7XHJcbiAgICAgICAgcmV0dXJuIC0xID09PSBlID8gWzAsIDBdIDogW3RoaXMuY3VyckxldmVsSW5mb0NvbmZpZy5hZGRIUFtlXSwgdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLmFkZGF0a1tlXV07XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuaHVydFN0YXRpc3RpY3MgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5odXJ0UmVjb3JkLmhhcyh0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmh1cnRSZWNvcmQuc2V0KHQsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmh1cnRSZWNvcmQuc2V0KHQsIHRoaXMuaHVydFJlY29yZC5nZXQodCkgKyBlKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5nZXRHYW1lVGltZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKDAgPT09IHRoaXMuZ2FtZVN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGFydFRpbWUgKz0gdDtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMDA6MDBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdhbWVTdGFydFRpbWUgKyB0O1xyXG4gICAgICAgIGlmIChNYXRoLmNlaWwoZSkgPT09IE1hdGguY2VpbCh0aGlzLmdhbWVTdGFydFRpbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXJ0VGltZSA9IGU7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVTdGFydFRpbWUgPSBlO1xyXG4gICAgICAgIHZhciBpID0gJHV0aWwuZGVmYXVsdC5mb3JtYXREYXRlKE1hdGguZmxvb3IoZSkpO1xyXG4gICAgICAgIHJldHVybiBpWzFdICsgXCI6XCIgKyBpWzJdO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRjb2xsaWRlci5jQ29sbGlkZXIuaW5zdC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaHVydFJlY29yZC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuY2hvb3NlU2tpbGxSZWNvcmQuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmVuZW15UG9vbC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRsZVBvb2wuZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbmVteVBvb2wuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmJ1dHRsZVBvb2wuY2xlYXIoKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5zZXR0bGVSZXdhcmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLnJld2FyZF9udW07XHJcbiAgICAgICAgaWYgKCF0KSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLnBoYXNlX3Jld2FyZF90aW1lLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLnBoYXNlX3Jld2FyZF90aW1lLmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jcmVhdGVFbmVteVByb2NjZXNzIDw9IHRoaXMuY3VyckxldmVsSW5mb0NvbmZpZy5waGFzZV9yZXdhcmRfdGltZVtvXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGUgPSB0aGlzLmN1cnJMZXZlbEluZm9Db25maWcucGhhc2VfcmV3YXJkX251bVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG4gPSBbXTtcclxuICAgICAgICBuLnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICBudW06IGVbMF1cclxuICAgICAgICB9KTtcclxuICAgICAgICBuLnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICBudW06IGVbMV1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoMCAhPT0gZVsyXSkge1xyXG4gICAgICAgICAgICB2YXIgcyA9ICRzZWVkVXRpbC5kZWZhdWx0LnJhbmRvbUZyb20oMSwgMik7XHJcbiAgICAgICAgICAgIHMgPSBNYXRoLm1pbihzLCBlWzJdKTtcclxuICAgICAgICAgICAgdmFyIGEgPSAkc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21Db3VudCgxLCA2LCBzKTtcclxuICAgICAgICAgICAgdmFyIGMgPSAkc2VlZFV0aWwuZGVmYXVsdC5zcGxpdE51bWJlcihlWzJdLCBzKTtcclxuICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IHM7IG8rKykge1xyXG4gICAgICAgICAgICAgICAgbi5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogYVtvXSxcclxuICAgICAgICAgICAgICAgICAgICBudW06IGNbb11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwICE9PSBlWzNdKSB7XHJcbiAgICAgICAgICAgIHZhciB1ID0gJHNlZWRVdGlsLmRlZmF1bHQucmFuZG9tRnJvbSgxLCA0KTtcclxuICAgICAgICAgICAgdmFyIGQgPSAkc2tpbGxDb250ZXh0LmRlZmF1bHQuSW5zLmdldFVzZVNraWxsSWRzKCk7XHJcbiAgICAgICAgICAgIHUgPSBNYXRoLm1pbihkLmxlbmd0aCwgdSk7XHJcbiAgICAgICAgICAgIGQgPSAkc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21BcnIoZCwgdSk7XHJcbiAgICAgICAgICAgIHZhciBtID0gJHNlZWRVdGlsLmRlZmF1bHQuc3BsaXROdW1iZXIoZVszXSwgdSk7XHJcbiAgICAgICAgICAgIGZvciAobyA9IDA7IG8gPCB1OyBvKyspIHtcclxuICAgICAgICAgICAgICAgIG4ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogNCxcclxuICAgICAgICAgICAgICAgICAgICBleHQ6IGRbb10sXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtOiBtW29dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoMCAhPT0gZVs0XSkge1xyXG4gICAgICAgICAgICB2YXIgeSA9ICRzZWVkVXRpbC5kZWZhdWx0LndlaWdodFJhbmRvbUNvdW50KHRoaXMuY3VyckxldmVsSW5mb0NvbmZpZy5nZW1zdG9uZV93ZWlnaHRbMV0sIGVbNF0sICEwKTtcclxuICAgICAgICAgICAgdmFyIGcgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IHkubGVuZ3RoOyBvKyspIHtcclxuICAgICAgICAgICAgICAgIGcucHVzaCh0aGlzLmN1cnJMZXZlbEluZm9Db25maWcuZ2Vtc3RvbmVfd2VpZ2h0WzBdW3lbb11dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgXyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQ29uZmlncy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5HcmFkZSA9PT0gZ1t0XTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSBlWyRzZWVkVXRpbC5kZWZhdWx0LnJhbmRvbUZyb20oMCwgZS5sZW5ndGggLSAxKV0uaWQ7XHJcbiAgICAgICAgICAgICAgICBuLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobyA9IDA7IG8gPCBnLmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgICAgICBfKG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdCAmJlxyXG4gICAgICAgICAgICA0ID09PSB0aGlzLmN1cnJMZXZlbEluZm9Db25maWcuaWQgJiZcclxuICAgICAgICAgICAgMiA9PT0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmN1cnJTa2luSW5mby5ndW4gJiZcclxuICAgICAgICAgICAgMCA9PT0gJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5nZXRFZ2coNClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbi5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IDksXHJcbiAgICAgICAgICAgICAgICBleHQ6IDIsXHJcbiAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICR1c2VyRGF0YUNvbnRleHQuZGVmYXVsdC5JbnMuc2V0RWdnKDQsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHQgJiZcclxuICAgICAgICAgICAgOCA9PT0gdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLmlkICYmXHJcbiAgICAgICAgICAgIDIgPT09ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5jdXJyU2tpbkluZm8uZ3VuICYmXHJcbiAgICAgICAgICAgIDAgPT09ICR1c2VyRGF0YUNvbnRleHQuZGVmYXVsdC5JbnMuZ2V0RWdnKDUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG4ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiA5LFxyXG4gICAgICAgICAgICAgICAgZXh0OiAyLFxyXG4gICAgICAgICAgICAgICAgbnVtOiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLnNldEVnZyg1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucGF1c2VSZXdhcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSBbXTtcclxuICAgICAgICB2YXIgZSA9IHRoaXMuY3VyckxldmVsSW5mb0NvbmZpZy5waGFzZV9yZXdhcmRfdGltZS5sZW5ndGggLSAxO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLnBoYXNlX3Jld2FyZF90aW1lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNyZWF0ZUVuZW15UHJvY2Nlc3MgPD0gdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLnBoYXNlX3Jld2FyZF90aW1lW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBlID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvID0gdGhpcy5jdXJyTGV2ZWxJbmZvQ29uZmlnLnBoYXNlX3Jld2FyZF9udW1bZV07XHJcbiAgICAgICAgaWYgKDAgIT09IG9bMF0pIHtcclxuICAgICAgICAgICAgdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICBudW06IG9bMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwICE9PSBvWzFdKSB7XHJcbiAgICAgICAgICAgIHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgbnVtOiBvWzFdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoMCAhPT0gb1syXSkge1xyXG4gICAgICAgICAgICB0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogMyxcclxuICAgICAgICAgICAgICAgIGV4dDogMCxcclxuICAgICAgICAgICAgICAgIG51bTogb1syXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKDAgIT09IG9bM10pIHtcclxuICAgICAgICAgICAgdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IDQsXHJcbiAgICAgICAgICAgICAgICBleHQ6IDAsXHJcbiAgICAgICAgICAgICAgICBudW06IG9bM11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwICE9PSBvWzRdKSB7XHJcbiAgICAgICAgICAgIHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiA1LFxyXG4gICAgICAgICAgICAgICAgZXh0OiAwLFxyXG4gICAgICAgICAgICAgICAgbnVtOiBvWzRdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5hZGRDdXJyRW5lbXkgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuY3VyckVuZW15cy5wdXNoKHQpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnJlbW92ZUVuZW15ID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXMuY3VyckVuZW15cy5pbmRleE9mKHQpO1xyXG4gICAgICAgIGlmICgtMSAhPT0gZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJFbmVteXMuc3BsaWNlKGUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LmlucyA9IG5ldyB0KCk7XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gXztcclxuIl19