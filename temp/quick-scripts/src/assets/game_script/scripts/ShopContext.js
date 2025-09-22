"use strict";
cc._RF.push(module, '0c863hbBY5Fmal4l7p77wKA', 'ShopContext');
// game_script/scripts/ShopContext.js

"use strict";

var $eventManager = require("./EventManager");

var $seedUtil = require("./SeedUtil");

var $storageUtil = require("./StorageUtil");

var $util = require("./Util");

var $startView = require("./StartView");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $localName = require("./LocalName");

var $roleContext = require("./RoleContext");

var $userDataContext = require("./UserDataContext");

var f = function () {
  function t() {
    this.boxRewardRecord = {
      normal: 10,
      advanced: 10,
      skin: 10
    };
    this.boxVideoRecord = {
      normal: 0,
      advanced: 0,
      skin: 0
    };
    this.shopResRecords = [];
    this.shopResRefreshTime = 0;
    this.shopDiamondRecords = [];
    this.init();
  }

  Object.defineProperty(t, "Ins", {
    get: function get() {
      if (null === t._instance) {
        t._instance = new t();
      }

      return t._instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.init = function () {
    this.boxRewardRecord = $storageUtil.StorageUtil.getItem($localName["default"].BOX_REWARD_RECORD, this.boxRewardRecord);

    if (void 0 === this.boxRewardRecord.skin) {
      this.boxRewardRecord.skin = 10;
    }

    this.shopDiamondRecords = $storageUtil.StorageUtil.getItem($localName["default"].SHOP_DIAMOND_RECORD, this.shopDiamondRecords);
    this.boxVideoRecord = $storageUtil.StorageUtil.getItem($localName["default"].BOX_VIDEO_RECORD, this.boxVideoRecord);

    if (void 0 === this.boxVideoRecord.skin) {
      this.boxVideoRecord.skin = 0;
    }

    this.shopResRefreshTime = $storageUtil.StorageUtil.getItem($localName["default"].SHOP_RES_REFRESH_TIME, 0);
    this.shopResRefreshTime >= $util["default"].startDayTimestamp() ? this.shopResRecords = $storageUtil.StorageUtil.getItem($localName["default"].SHOP_RES_RECORD, this.shopResRecords) : $storageUtil.StorageUtil.removeItem($localName["default"].SHOP_RES_RECORD);
  };

  t.prototype.getBoxVideoRecord = function (t) {
    return t ? this.boxVideoRecord.normal : this.boxVideoRecord.advanced;
  };

  t.prototype.getSkinBoxVideoRecord = function () {
    return this.boxVideoRecord.skin;
  };

  t.prototype.setBoxVideoRecord = function (t, e) {
    t ? this.boxVideoRecord.normal = e : this.boxVideoRecord.advanced = e;
    $storageUtil.StorageUtil.setItem($localName["default"].BOX_VIDEO_RECORD, this.boxVideoRecord);
  };

  t.prototype.setSkinBoxVideoRecord = function (t) {
    this.boxVideoRecord.skin = t;
    $storageUtil.StorageUtil.setItem($localName["default"].BOX_VIDEO_RECORD, this.boxVideoRecord);
  };

  t.prototype.getDiamondRecordById = function (t) {
    var e = this.shopDiamondRecords.find(function (e) {
      return e.id === t;
    });
    return e ? (void 0 !== e.dayBuyCount && $util["default"].startDayTimestamp() === e.lastTime || (e.dayBuyCount = 0), e) : {
      id: t,
      video_count: 0,
      isFrist: !0,
      dayBuyCount: 0,
      lastTime: 0
    };
  };

  t.prototype.addDiamondRecord = function (t, e) {
    var i = {
      isReward: !1,
      isFirst: !1,
      count: 0
    };
    var o = this.shopDiamondRecords.find(function (e) {
      return e.id === t;
    });

    if (!o) {
      o = {
        id: t,
        video_count: 0,
        lastTime: 0,
        isFrist: !0,
        dayBuyCount: 0
      };
      this.shopDiamondRecords.push(o);
    }

    o.video_count++;
    i.count = o.video_count;

    if (o.video_count >= e) {
      i.isReward = !0;
      i.isFirst = o.isFrist;
      o.video_count = 0;
      o.lastTime = $util["default"].startDayTimestamp();
      o.video_count = 0;
      o.isFrist = !1;
      o.dayBuyCount++;
    }

    $storageUtil.StorageUtil.setItem($localName["default"].SHOP_DIAMOND_RECORD, this.shopDiamondRecords);
    return i;
  };

  t.prototype.isDiamondBuyDay = function (t) {
    var e = this.shopDiamondRecords.find(function (e) {
      return e.id === t;
    });
    return !!e && e.lastTime === $util["default"].startDayTimestamp();
  };

  t.prototype.hasResRedDot = function () {
    var e = $configContext["default"].instance.shopResConfigs.filter(function (t) {
      return 2 === t.coin_type;
    });

    for (var i = 0; i < e.length; i++) {
      if (t.Ins.getShopResRecordById(e[i].id).buyCount <= 0) {
        return !0;
      }
    }

    return !1;
  };

  t.prototype.hasDiamondRedDot = function () {
    var e = $configContext["default"].instance.shopDiamondConfigs.filter(function (t) {
      return 0 === t.is_video;
    });

    for (var i = 0; i < e.length; i++) {
      if (!t.Ins.isDiamondBuyDay(e[i].id)) {
        return !0;
      }
    }

    return !1;
  };

  t.prototype.getShopResRecordById = function (t) {
    var e = this.shopResRecords.find(function (e) {
      return e.id === t;
    });
    return e ? (this.shopResRefreshTime < $util["default"].startDayTimestamp() && (e.buyCount = 0), void 0 === e.video_count && (e.video_count = 0), e) : {
      id: t,
      buyCount: 0,
      video_count: 0
    };
  };

  t.prototype.addShopResRecordVideo = function (t, e) {
    var i = this.getShopResRecordById(t);
    i.video_count = e;

    if (-1 === this.shopResRecords.findIndex(function (e) {
      return e.id === t;
    })) {
      this.shopResRecords.push(i);
    }

    $storageUtil.StorageUtil.setItem($localName["default"].SHOP_RES_RECORD, this.shopResRecords);
  };

  t.prototype.addShopResRecord = function (t) {
    var e = this.getShopResRecordById(t);
    e.buyCount++;

    if (-1 === this.shopResRecords.findIndex(function (e) {
      return e.id === t;
    })) {
      this.shopResRecords.push(e);
    }

    if (this.shopResRefreshTime < $util["default"].startDayTimestamp()) {
      this.shopResRefreshTime = $util["default"].startDayTimestamp();
      $storageUtil.StorageUtil.setItem($localName["default"].SHOP_RES_REFRESH_TIME, this.shopResRefreshTime);
    }

    $storageUtil.StorageUtil.setItem($localName["default"].SHOP_RES_RECORD, this.shopResRecords);
  };

  t.prototype.getNormalBoxRecord = function (t) {
    var e = $configContext["default"].instance.gemBoxConfigs[0];
    var i = $seedUtil["default"].weightRandomCount(e.weight, t, !0);
    var o = -1;
    this.boxRewardRecord.normal -= t;

    if (this.boxRewardRecord.normal <= 0) {
      o = t - 1;
      this.boxRewardRecord.normal += 10;
    }

    if (-1 !== o) {
      i[o] = 2;
    }

    return this.randomGem(i);
  };

  t.prototype.getRobotBox = function (t) {
    var e = $configContext["default"].instance.gemBoxConfigs[1];
    var i = $util["default"].deepCopy(e.weight);

    if ($roleContext["default"].ins.isHaveRobot(2)) {
      i[7] = 0;
    }

    if ($roleContext["default"].ins.isHaveRobot(3)) {
      i[8] = 0;
    }

    var o = $seedUtil["default"].weightRandomCount(i, t, !0);
    var s = -1;
    var a = [];
    this.boxRewardRecord.advanced -= t;

    if (this.boxRewardRecord.advanced <= 0) {
      s = t - 1;
      this.boxRewardRecord.advanced += 10;
    }

    if (-1 !== s) {
      o[s] = 3;
    }

    var c = [];

    for (var u = 0; u < o.length; u++) {
      if (o[u] < 7) {
        a.push(o[u]);
      } else {
        if (7 === o[u]) {
          c.push(2);
          (p = $roleContext["default"].ins.getRobotSkinInfo(2)).shard++;
          $roleContext["default"].ins.setRobotSkinInfo(p);
        } else {
          if (8 === o[u]) {
            var p;
            c.push(3);
            (p = $roleContext["default"].ins.getRobotSkinInfo(3)).shard++;
            $roleContext["default"].ins.setRobotSkinInfo(p);
          }
        }
      }
    }

    return {
      robots: c,
      gems: this.randomGem(a)
    };
  };

  t.prototype.getAdvancedBoxRecord = function (t) {
    var e = $configContext["default"].instance.gemBoxConfigs[1];
    var i = $seedUtil["default"].weightRandomCount(e.weight, t, !0);
    var o = -1;
    this.boxRewardRecord.advanced -= t;

    if (this.boxRewardRecord.advanced <= 0) {
      o = t - 1;
      this.boxRewardRecord.advanced += 10;
    }

    if (-1 !== o) {
      i[o] = 3;
    }

    return this.randomGem(i);
  };

  t.prototype.randomGem = function (t) {
    var e = [];

    var i = function i(_i) {
      var o = t[_i] + 1;
      var s = $configContext["default"].instance.gemConfigs.filter(function (t) {
        return t.Grade === o;
      });
      e[_i] = s[$seedUtil["default"].randomFrom(0, s.length - 1)];
      $roleContext["default"].ins.addPackItem(e[_i], 1);
    };

    for (var r = 0; r < t.length; r++) {
      i(r);
    }

    $storageUtil.StorageUtil.setItem($localName["default"].BOX_REWARD_RECORD, this.boxRewardRecord);
    $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role);
    return e;
  };

  t.prototype.getSkinBoxRecord = function (t) {
    var e = [];
    var i = $seedUtil["default"].weightRandomCount($configContext["default"].instance.gemBoxConfigs[2].weight, t, !0);

    for (var r = 0; r < i.length; r++) {
      var f = i[r];
      var h = $configContext["default"].instance.gemBoxConfigs[2].TreasureChest_type[f];

      if (10 === h) {
        e.push({
          type: 10,
          ext: 3,
          num: 1
        });
        (g = $roleContext["default"].ins.getGunSkinInfo(3)).shard += 1;
        $roleContext["default"].ins.setGunSkinInfo(g, !1);
      } else {
        if (11 === h) {
          e.push({
            type: 10,
            ext: 4,
            num: 1
          });
          (g = $roleContext["default"].ins.getGunSkinInfo(4)).shard += 1;
          $roleContext["default"].ins.setGunSkinInfo(g, !1);
        } else {
          if (12 === h) {
            e.push({
              type: 10,
              ext: 5,
              num: 1
            });
            (g = $roleContext["default"].ins.getGunSkinInfo(5)).shard += 1;
            $roleContext["default"].ins.setGunSkinInfo(g, !1);
          } else {
            if (13 === h) {
              e.push({
                type: 10,
                ext: 6,
                num: 1
              });
              (g = $roleContext["default"].ins.getGunSkinInfo(6)).shard += 1;
              $roleContext["default"].ins.setGunSkinInfo(g, !1);
            } else {
              if (14 === h) {
                e.push({
                  type: 10,
                  ext: 7,
                  num: 1
                });
                (g = $roleContext["default"].ins.getGunSkinInfo(7)).shard += 1;
                $roleContext["default"].ins.setGunSkinInfo(g, !1);
              } else {
                if (15 === h) {
                  e.push({
                    type: 9,
                    ext: 3,
                    num: 1
                  });
                  (g = $roleContext["default"].ins.getPlayerSkinInfo(3)).shard += 1;
                  $roleContext["default"].ins.setPlayerSKinInfo(g, !1);
                } else {
                  if (16 === h) {
                    e.push({
                      type: 9,
                      ext: 4,
                      num: 1
                    });
                    (g = $roleContext["default"].ins.getPlayerSkinInfo(4)).shard += 1;
                    $roleContext["default"].ins.setPlayerSKinInfo(g, !1);
                  } else {
                    if (17 === h) {
                      e.push({
                        type: 1,
                        ext: 0,
                        num: 1500
                      });
                      $userDataContext["default"].Ins.opearCoin(1500);
                    } else {
                      if (18 === h) {
                        var m = $configContext["default"].instance.gemConfigs.filter(function (t) {
                          return 4 === t.Grade;
                        });
                        var y = m[$seedUtil["default"].randomFrom(0, m.length - 1)];
                        $roleContext["default"].ins.addPackItem(y, 1);
                        e.push({
                          type: 5,
                          ext: m[r].id,
                          num: 1
                        });
                      } else {
                        19 === h ? ($userDataContext["default"].Ins.opearAdCoin(3), e.push({
                          type: 12,
                          ext: 0,
                          num: 3
                        })) : 20 === h ? ($userDataContext["default"].Ins.opearUpgradeStone(8), e.push({
                          type: 7,
                          ext: 0,
                          num: 8
                        })) : 21 === h ? (e.push({
                          type: 11,
                          ext: 4,
                          num: 1
                        }), (g = $roleContext["default"].ins.getRobotSkinInfo(4)).shard += 1, $roleContext["default"].ins.setRobotSkinInfo(g, !1)) : 22 === h ? (e.push({
                          type: 11,
                          ext: 5,
                          num: 1
                        }), (g = $roleContext["default"].ins.getRobotSkinInfo(5)).shard += 1, $roleContext["default"].ins.setRobotSkinInfo(g, !1)) : 23 === h ? (e.push({
                          type: 11,
                          ext: 6,
                          num: 1
                        }), (g = $roleContext["default"].ins.getRobotSkinInfo(6)).shard += 1, $roleContext["default"].ins.setRobotSkinInfo(g, !1)) : 24 === h ? (e.push({
                          type: 11,
                          ext: 7,
                          num: 1
                        }), (g = $roleContext["default"].ins.getRobotSkinInfo(7)).shard += 1, $roleContext["default"].ins.setRobotSkinInfo(g, !1)) : 25 === h ? (e.push({
                          type: 11,
                          ext: 8,
                          num: 1
                        }), (g = $roleContext["default"].ins.getRobotSkinInfo(8)).shard += 1, $roleContext["default"].ins.setRobotSkinInfo(g, !1)) : 26 === h ? (e.push({
                          type: 11,
                          ext: 9,
                          num: 1
                        }), (g = $roleContext["default"].ins.getRobotSkinInfo(9)).shard += 1, $roleContext["default"].ins.setRobotSkinInfo(g, !1)) : 27 === h ? (e.push({
                          type: 9,
                          ext: 5,
                          num: 1
                        }), (g = $roleContext["default"].ins.getPlayerSkinInfo(5)).shard += 1, $roleContext["default"].ins.setPlayerSKinInfo(g, !1)) : 28 === h ? (e.push({
                          type: 9,
                          ext: 6,
                          num: 1
                        }), (g = $roleContext["default"].ins.getPlayerSkinInfo(6)).shard += 1, $roleContext["default"].ins.setPlayerSKinInfo(g, !1)) : 29 === h ? (e.push({
                          type: 9,
                          ext: 7,
                          num: 1
                        }), (g = $roleContext["default"].ins.getPlayerSkinInfo(7)).shard += 1, $roleContext["default"].ins.setPlayerSKinInfo(g, !1)) : 30 === h && (e.push({
                          type: 10,
                          ext: 8,
                          num: 1
                        }), (g = $roleContext["default"].ins.getGunSkinInfo(8)).shard += 1, $roleContext["default"].ins.setGunSkinInfo(g, !1));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    this.boxRewardRecord.skin -= t;

    if (this.boxRewardRecord.skin <= 0) {
      this.boxRewardRecord.skin += 10;
      var g;

      var _ = $seedUtil["default"].randomFrom(3, 4);

      e.push({
        type: 9,
        ext: _,
        num: 1
      });
      (g = $roleContext["default"].ins.getPlayerSkinInfo(_)).shard += 1;
      $roleContext["default"].ins.setPlayerSKinInfo(g, !1);
    }

    $roleContext["default"].ins.saveRobotSkin();
    $roleContext["default"].ins.saveGunSkin();
    $roleContext["default"].ins.savePlayerSkin();
    $storageUtil.StorageUtil.setItem($localName["default"].BOX_REWARD_RECORD, this.boxRewardRecord);
    $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Role);
    return e;
  };

  t._instance = null;
  return t;
}();

exports["default"] = f;

cc._RF.pop();