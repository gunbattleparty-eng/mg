"use strict";
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