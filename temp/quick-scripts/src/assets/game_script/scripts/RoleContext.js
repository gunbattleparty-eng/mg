"use strict";
cc._RF.push(module, '32928sdjPNNppUbIPirWbsQ', 'RoleContext');
// game_script/scripts/RoleContext.js

"use strict";

var $eventManager = require("./EventManager");

var $storageUtil = require("./StorageUtil");

var $startView = require("./StartView");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $localName = require("./LocalName");

var c = function () {
  function t() {
    this.packList = [];
    this.currSkinInfo = {
      skin: 1,
      gun: 1,
      robot: 1
    };
    this.playerskinPacks = [{
      id: 1,
      isHave: !0,
      shard: 0
    }];
    this.gunSkinPacks = [{
      id: 1,
      isHave: !0,
      shard: 0
    }];
    this.robotSkinPacks = [{
      id: 1,
      isHave: !0,
      shard: 0
    }];
    this.gunCache = !1;
    this.robotCache = !1;
    this.isPlayerCache = !1;
  }

  Object.defineProperty(t, "ins", {
    get: function get() {
      if (!t._ins) {
        t._ins = new t();
      }

      return t._ins;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.init = function () {
    this.packList = $storageUtil.StorageUtil.getItem($localName["default"].PACK_INFO, this.packList);
    this.currSkinInfo = $storageUtil.StorageUtil.getItem($localName["default"].SKIN_INFO, this.currSkinInfo);
    this.playerskinPacks = $storageUtil.StorageUtil.getItem($localName["default"].SKINS, this.playerskinPacks);
    this.gunSkinPacks = $storageUtil.StorageUtil.getItem($localName["default"].GUN_SKINS, this.gunSkinPacks);
    this.robotSkinPacks = $storageUtil.StorageUtil.getItem($localName["default"].ROBOT_SKINS, this.robotSkinPacks);
  };

  t.prototype.setCurrInfo = function (t) {
    this.currSkinInfo = t;
    $storageUtil.StorageUtil.setItem($localName["default"].SKIN_INFO, this.currSkinInfo);
  };

  t.prototype.getPlayerSkinInfo = function (t) {
    return this.playerskinPacks.find(function (e) {
      return e.id === t;
    }) || {
      id: t,
      isHave: !1,
      shard: 0
    };
  };

  t.prototype.hasPlayerSkinDot = function () {
    var t = this;

    var e = function e(_e) {
      if (!i.playerskinPacks[_e].isHave && i.playerskinPacks[_e].shard > 0 && $configContext["default"].instance.playerSkinConfigs.find(function (i) {
        return i.id === t.playerskinPacks[_e].id;
      }).shard_num <= i.playerskinPacks[_e].shard) {
        return {
          value: !0
        };
      }
    };

    var i = this;

    for (var o = 0; o < this.playerskinPacks.length; o++) {
      var n = e(o);

      if ("object" == typeof n) {
        return n.value;
      }
    }

    return !1;
  };

  t.prototype.getGunSkinInfo = function (t) {
    return this.gunSkinPacks.find(function (e) {
      return e.id === t;
    }) || {
      id: t,
      isHave: !1,
      shard: 0
    };
  };

  t.prototype.hasGunSkinDot = function () {
    var t = this;

    var e = function e(_e2) {
      if (!i.gunSkinPacks[_e2].isHave && i.gunSkinPacks[_e2].shard > 0 && $configContext["default"].instance.gunSkinConfigs.find(function (i) {
        return i.id === t.gunSkinPacks[_e2].id;
      }).shard_num <= i.gunSkinPacks[_e2].shard) {
        return {
          value: !0
        };
      }
    };

    var i = this;

    for (var o = 0; o < this.gunSkinPacks.length; o++) {
      var n = e(o);

      if ("object" == typeof n) {
        return n.value;
      }
    }

    return !1;
  };

  t.prototype.getRobotSkinInfo = function (t) {
    return this.robotSkinPacks.find(function (e) {
      return e.id === t;
    }) || {
      id: t,
      isHave: !1,
      shard: 0
    };
  };

  t.prototype.isHaveRobot = function (t) {
    var e = this.getRobotSkinInfo(t);

    if (e && e.isHave) {
      return !0;
    }

    var i = $configContext["default"].instance.robotConfigs.find(function (e) {
      return e.id === t;
    });
    return e.shard >= i.shard_num;
  };

  t.prototype.hasRobotSkinDot = function () {
    var t = this;

    var e = function e(_e3) {
      if (!i.robotSkinPacks[_e3].isHave && i.robotSkinPacks[_e3].shard > 0 && $configContext["default"].instance.robotConfigs.find(function (i) {
        return i.id === t.robotSkinPacks[_e3].id;
      }).shard_num <= i.robotSkinPacks[_e3].shard) {
        return {
          value: !0
        };
      }
    };

    var i = this;

    for (var o = 0; o < this.robotSkinPacks.length; o++) {
      var n = e(o);

      if ("object" == typeof n) {
        return n.value;
      }
    }

    return !1;
  };

  t.prototype.getGunAllAtkAdd = function () {
    var t = this.gunSkinPacks.filter(function (t) {
      return t.isHave;
    }).map(function (t) {
      return t.id;
    });
    var e = $configContext["default"].instance.gunSkinConfigs.filter(function (e) {
      return t.includes(e.id);
    });
    var i = 0;

    for (var o = 0; o < e.length; o++) {
      i += e[o].Gunskin_add_attribute[0];
    }

    return i;
  };

  t.prototype.setGunSkinInfo = function (t, e) {
    if (void 0 === e) {
      e = !0;
    }

    var i = this.gunSkinPacks.findIndex(function (e) {
      return e.id === t.id;
    });
    -1 !== i ? this.gunSkinPacks[i] = t : this.gunSkinPacks.push(t);
    e ? ($storageUtil.StorageUtil.setItem($localName["default"].GUN_SKINS, this.gunSkinPacks), $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role)) : this.gunCache = !0;
  };

  t.prototype.saveGunSkin = function () {
    if (this.gunCache) {
      this.gunCache = !1;
      $storageUtil.StorageUtil.setItem($localName["default"].GUN_SKINS, this.gunSkinPacks);
      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role);
    }
  };

  t.prototype.setRobotSkinInfo = function (t, e) {
    if (void 0 === e) {
      e = !0;
    }

    var i = this.robotSkinPacks.findIndex(function (e) {
      return e.id === t.id;
    });
    -1 !== i ? this.robotSkinPacks[i] = t : this.robotSkinPacks.push(t);
    e ? ($storageUtil.StorageUtil.setItem($localName["default"].ROBOT_SKINS, this.robotSkinPacks), $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Skill)) : this.robotCache = !0;
  };

  t.prototype.saveRobotSkin = function () {
    if (this.robotCache) {
      this.robotCache = !1;
      $storageUtil.StorageUtil.setItem($localName["default"].ROBOT_SKINS, this.robotSkinPacks);
      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Skill);
    }
  };

  t.prototype.getRobotProps = function () {
    var t = this;

    if (1 === this.currSkinInfo.robot) {
      new Map();
    }

    var e = $configContext["default"].instance.robotConfigs.find(function (e) {
      return e.id === t.currSkinInfo.robot;
    });
    var i = new Map();

    if (0 === e.Petsskin_add_attribute.length) {
      return i;
    }

    for (var o = 0; o < e.Petsskin_add_attribute[0].length; o++) {
      var n = e.Petsskin_add_attribute[0][o];
      var s = e.Petsskin_add_attribute[1][o];
      i.set(s, [n]);
    }

    return i;
  };

  t.prototype.setPlayerSKinInfo = function (t, e) {
    if (void 0 === e) {
      e = !0;
    }

    var i = this.playerskinPacks.findIndex(function (e) {
      return e.id === t.id;
    });
    -1 !== i ? this.playerskinPacks[i] = t : this.playerskinPacks.push(t);
    e ? ($storageUtil.StorageUtil.setItem($localName["default"].SKINS, this.playerskinPacks), $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role)) : this.isPlayerCache = !0;
  };

  t.prototype.savePlayerSkin = function () {
    if (this.isPlayerCache) {
      this.isPlayerCache = !1;
      $storageUtil.StorageUtil.setItem($localName["default"].SKINS, this.playerskinPacks);
      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role);
    }
  };

  t.prototype.lockAndUnlock = function (t) {
    var e = this.packList.findIndex(function (e) {
      return e.id === t;
    });
    return -1 !== e && (this.packList[e].isLock = !this.packList[e].isLock, $storageUtil.StorageUtil.setItem($localName["default"].PACK_INFO, this.packList), this.packList[e].isLock);
  };

  t.prototype.addPackItem = function (t, e) {
    var i = this.packList.findIndex(function (e) {
      return e.id === t.id;
    });
    -1 !== i ? this.packList[i].num += e : this.packList.push({
      id: t.id,
      part: t.part,
      grade: t.Grade,
      useCount: 0,
      isUse: !1,
      num: e,
      isLock: !1
    });
    this.packList.sort(function (t, e) {
      return t.grade > e.grade ? -1 : t.grade < e.grade ? 1 : t.part < e.part ? -1 : t.part > e.part ? 1 : 0;
    });
    $storageUtil.StorageUtil.setItem($localName["default"].PACK_INFO, this.packList);
  };

  t.prototype.returnPackItem = function (t, e) {
    var i = this.packList.findIndex(function (e) {
      return e.id === t.id;
    });

    if (-1 !== i) {
      this.packList[i].num += e;
      this.packList[i].useCount--;
      this.packList[i].isUse = !1;
    }

    $storageUtil.StorageUtil.setItem($localName["default"].PACK_INFO, this.packList);
  };

  t.prototype.usePackItem = function (t, e) {
    var i = this.packList.findIndex(function (e) {
      return e.id === t;
    });
    this.packList[i].useCount++;
    this.packList[i].isUse = !0;

    if (-1 !== i) {
      this.packList[i].num >= e ? this.packList[i].num -= e : this.packList.splice(i, 1);
    }

    $storageUtil.StorageUtil.setItem($localName["default"].PACK_INFO, this.packList);
  };

  t.prototype.delPackItem = function (t, e) {
    var i = this.packList.findIndex(function (e) {
      return e.id === t;
    });

    if (-1 !== i) {
      this.packList[i].num -= e;

      if (!this.packList[i].isUse && this.packList[i].num <= 0) {
        this.packList.splice(i, 1);
      }

      $storageUtil.StorageUtil.setItem($localName["default"].PACK_INFO, this.packList);
    }
  };

  t.prototype.getPackInfo = function (t) {
    return this.packList.find(function (e) {
      return e.id === t;
    });
  };

  t.prototype.showPackInfoList = function () {
    return this.packList.filter(function (t) {
      return t.num > 0;
    });
  };

  t.prototype.isCanComposeGem = function () {
    var t = 0;
    var e = [];
    var i = -1;

    for (var o = 0; o < this.packList.length; o++) {
      if (!(this.packList[o].isLock || this.packList[o].useCount > 0 || this.packList[o].grade >= 7)) {
        for (var n = 0; n < this.packList[o].num; n++) {
          if (i !== this.packList[o].grade && (i = this.packList[o].grade, e.length = 0, t = 0), t++, e.push(this.packList[o].id), t >= 5) {
            return !0;
          }
        }
      }
    }

    return !1;
  };

  t.prototype.getCanComposeGemList = function () {
    var t = [];
    var e = 0;
    var i = [];
    var o = -1;

    for (var n = 0; n < this.packList.length; n++) {
      if (!(this.packList[n].isLock || this.packList[n].useCount > 0 || this.packList[n].grade >= 7)) {
        for (var s = 0; s < this.packList[n].num; s++) {
          o !== this.packList[n].grade && (o = this.packList[n].grade, i.length = 0, e = 0);
          e++;
          i.push(this.packList[n].id);
          e >= 5 && (t = t.concat(i), i.length = 0, e = 0);
        }
      }
    }

    return t;
  };

  t.prototype.save = function () {
    $storageUtil.StorageUtil.setItem($localName["default"].PACK_INFO, this.packList);
  };

  t._ins = null;
  return t;
}();

exports["default"] = c;

cc._RF.pop();