
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ShopContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFNob3BDb250ZXh0LmpzIl0sIm5hbWVzIjpbIiRldmVudE1hbmFnZXIiLCJyZXF1aXJlIiwiJHNlZWRVdGlsIiwiJHN0b3JhZ2VVdGlsIiwiJHV0aWwiLCIkc3RhcnRWaWV3IiwiJGNvbmZpZ0NvbnRleHQiLCIkbG9jYWxFdmVudE5hbWUiLCIkbG9jYWxOYW1lIiwiJHJvbGVDb250ZXh0IiwiJHVzZXJEYXRhQ29udGV4dCIsImYiLCJ0IiwiYm94UmV3YXJkUmVjb3JkIiwibm9ybWFsIiwiYWR2YW5jZWQiLCJza2luIiwiYm94VmlkZW9SZWNvcmQiLCJzaG9wUmVzUmVjb3JkcyIsInNob3BSZXNSZWZyZXNoVGltZSIsInNob3BEaWFtb25kUmVjb3JkcyIsImluaXQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIl9pbnN0YW5jZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcm90b3R5cGUiLCJTdG9yYWdlVXRpbCIsImdldEl0ZW0iLCJCT1hfUkVXQVJEX1JFQ09SRCIsIlNIT1BfRElBTU9ORF9SRUNPUkQiLCJCT1hfVklERU9fUkVDT1JEIiwiU0hPUF9SRVNfUkVGUkVTSF9USU1FIiwic3RhcnREYXlUaW1lc3RhbXAiLCJTSE9QX1JFU19SRUNPUkQiLCJyZW1vdmVJdGVtIiwiZ2V0Qm94VmlkZW9SZWNvcmQiLCJnZXRTa2luQm94VmlkZW9SZWNvcmQiLCJzZXRCb3hWaWRlb1JlY29yZCIsImUiLCJzZXRJdGVtIiwic2V0U2tpbkJveFZpZGVvUmVjb3JkIiwiZ2V0RGlhbW9uZFJlY29yZEJ5SWQiLCJmaW5kIiwiaWQiLCJkYXlCdXlDb3VudCIsImxhc3RUaW1lIiwidmlkZW9fY291bnQiLCJpc0ZyaXN0IiwiYWRkRGlhbW9uZFJlY29yZCIsImkiLCJpc1Jld2FyZCIsImlzRmlyc3QiLCJjb3VudCIsIm8iLCJwdXNoIiwiaXNEaWFtb25kQnV5RGF5IiwiaGFzUmVzUmVkRG90IiwiaW5zdGFuY2UiLCJzaG9wUmVzQ29uZmlncyIsImZpbHRlciIsImNvaW5fdHlwZSIsImxlbmd0aCIsIklucyIsImdldFNob3BSZXNSZWNvcmRCeUlkIiwiYnV5Q291bnQiLCJoYXNEaWFtb25kUmVkRG90Iiwic2hvcERpYW1vbmRDb25maWdzIiwiaXNfdmlkZW8iLCJhZGRTaG9wUmVzUmVjb3JkVmlkZW8iLCJmaW5kSW5kZXgiLCJhZGRTaG9wUmVzUmVjb3JkIiwiZ2V0Tm9ybWFsQm94UmVjb3JkIiwiZ2VtQm94Q29uZmlncyIsIndlaWdodFJhbmRvbUNvdW50Iiwid2VpZ2h0IiwicmFuZG9tR2VtIiwiZ2V0Um9ib3RCb3giLCJkZWVwQ29weSIsImlucyIsImlzSGF2ZVJvYm90IiwicyIsImEiLCJjIiwidSIsInAiLCJnZXRSb2JvdFNraW5JbmZvIiwic2hhcmQiLCJzZXRSb2JvdFNraW5JbmZvIiwicm9ib3RzIiwiZ2VtcyIsImdldEFkdmFuY2VkQm94UmVjb3JkIiwiZ2VtQ29uZmlncyIsIkdyYWRlIiwicmFuZG9tRnJvbSIsImFkZFBhY2tJdGVtIiwiciIsInNlbmQiLCJSRU5ERVJfRE9UIiwiTWVudVR5cGUiLCJSb2xlIiwiZ2V0U2tpbkJveFJlY29yZCIsImgiLCJUcmVhc3VyZUNoZXN0X3R5cGUiLCJ0eXBlIiwiZXh0IiwibnVtIiwiZyIsImdldEd1blNraW5JbmZvIiwic2V0R3VuU2tpbkluZm8iLCJnZXRQbGF5ZXJTa2luSW5mbyIsInNldFBsYXllclNLaW5JbmZvIiwib3BlYXJDb2luIiwibSIsInkiLCJvcGVhckFkQ29pbiIsIm9wZWFyVXBncmFkZVN0b25lIiwiXyIsInNhdmVSb2JvdFNraW4iLCJzYXZlR3VuU2tpbiIsInNhdmVQbGF5ZXJTa2luIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXZCOztBQUNB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QXBELElBQTZELENBQTdEO01BQ0FoRixZQUFZLFdBQVosQ0FBcUJ3RSxHQUFyQixDQUF5QmdDLGlCQUF6QixDQUEyQ0osQ0FBM0MsRUFBOEMsQ0FBQyxDQUEvQztJQUNIOztJQUNEcEcsWUFBWSxXQUFaLENBQXFCd0UsR0FBckIsQ0FBeUJ1QyxhQUF6QjtJQUNBL0csWUFBWSxXQUFaLENBQXFCd0UsR0FBckIsQ0FBeUJ3QyxXQUF6QjtJQUNBaEgsWUFBWSxXQUFaLENBQXFCd0UsR0FBckIsQ0FBeUJ5QyxjQUF6QjtJQUNBdkgsWUFBWSxDQUFDMEIsV0FBYixDQUF5QmEsT0FBekIsQ0FBaUNsQyxVQUFVLFdBQVYsQ0FBbUJ1QixpQkFBcEQsRUFBdUUsS0FBS2xCLGVBQTVFO0lBQ0FiLGFBQWEsV0FBYixDQUFzQm1HLElBQXRCLENBQTJCNUYsZUFBZSxXQUFmLENBQXdCNkYsVUFBbkQsRUFBK0QvRixVQUFVLENBQUNnRyxRQUFYLENBQW9CQyxJQUFuRjtJQUNBLE9BQU83RCxDQUFQO0VBQ0gsQ0FwTkQ7O0VBcU5BN0IsQ0FBQyxDQUFDYSxTQUFGLEdBQWMsSUFBZDtFQUNBLE9BQU9iLENBQVA7QUFDSCxDQTNlTyxFQUFSOztBQTRlQStHLE9BQU8sV0FBUCxHQUFrQmhILENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGV2ZW50TWFuYWdlciA9IHJlcXVpcmUoXCIuL0V2ZW50TWFuYWdlclwiKTtcclxudmFyICRzZWVkVXRpbCA9IHJlcXVpcmUoXCIuL1NlZWRVdGlsXCIpO1xyXG52YXIgJHN0b3JhZ2VVdGlsID0gcmVxdWlyZShcIi4vU3RvcmFnZVV0aWxcIik7XHJcbnZhciAkdXRpbCA9IHJlcXVpcmUoXCIuL1V0aWxcIik7XHJcbnZhciAkc3RhcnRWaWV3ID0gcmVxdWlyZShcIi4vU3RhcnRWaWV3XCIpO1xyXG52YXIgJGNvbmZpZ0NvbnRleHQgPSByZXF1aXJlKFwiLi9Db25maWdDb250ZXh0XCIpO1xyXG52YXIgJGxvY2FsRXZlbnROYW1lID0gcmVxdWlyZShcIi4vTG9jYWxFdmVudE5hbWVcIik7XHJcbnZhciAkbG9jYWxOYW1lID0gcmVxdWlyZShcIi4vTG9jYWxOYW1lXCIpO1xyXG52YXIgJHJvbGVDb250ZXh0ID0gcmVxdWlyZShcIi4vUm9sZUNvbnRleHRcIik7XHJcbnZhciAkdXNlckRhdGFDb250ZXh0ID0gcmVxdWlyZShcIi4vVXNlckRhdGFDb250ZXh0XCIpO1xyXG52YXIgZiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge1xyXG4gICAgICAgIHRoaXMuYm94UmV3YXJkUmVjb3JkID0ge1xyXG4gICAgICAgICAgICBub3JtYWw6IDEwLFxyXG4gICAgICAgICAgICBhZHZhbmNlZDogMTAsXHJcbiAgICAgICAgICAgIHNraW46IDEwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJveFZpZGVvUmVjb3JkID0ge1xyXG4gICAgICAgICAgICBub3JtYWw6IDAsXHJcbiAgICAgICAgICAgIGFkdmFuY2VkOiAwLFxyXG4gICAgICAgICAgICBza2luOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3BSZXNSZWNvcmRzID0gW107XHJcbiAgICAgICAgdGhpcy5zaG9wUmVzUmVmcmVzaFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvcERpYW1vbmRSZWNvcmRzID0gW107XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJJbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobnVsbCA9PT0gdC5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHQuX2luc3RhbmNlID0gbmV3IHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdC5faW5zdGFuY2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcclxuICAgICAgICBjb25maWd1cmFibGU6ICEwXHJcbiAgICB9KTtcclxuICAgIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hSZXdhcmRSZWNvcmQgPSAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuZ2V0SXRlbShcclxuICAgICAgICAgICAgJGxvY2FsTmFtZS5kZWZhdWx0LkJPWF9SRVdBUkRfUkVDT1JELFxyXG4gICAgICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdGhpcy5ib3hSZXdhcmRSZWNvcmQuc2tpbikge1xyXG4gICAgICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZC5za2luID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvcERpYW1vbmRSZWNvcmRzID0gJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLmdldEl0ZW0oXHJcbiAgICAgICAgICAgICRsb2NhbE5hbWUuZGVmYXVsdC5TSE9QX0RJQU1PTkRfUkVDT1JELFxyXG4gICAgICAgICAgICB0aGlzLnNob3BEaWFtb25kUmVjb3Jkc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5ib3hWaWRlb1JlY29yZCA9ICRzdG9yYWdlVXRpbC5TdG9yYWdlVXRpbC5nZXRJdGVtKFxyXG4gICAgICAgICAgICAkbG9jYWxOYW1lLmRlZmF1bHQuQk9YX1ZJREVPX1JFQ09SRCxcclxuICAgICAgICAgICAgdGhpcy5ib3hWaWRlb1JlY29yZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdGhpcy5ib3hWaWRlb1JlY29yZC5za2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm94VmlkZW9SZWNvcmQuc2tpbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvcFJlc1JlZnJlc2hUaW1lID0gJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLmdldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LlNIT1BfUkVTX1JFRlJFU0hfVElNRSwgMCk7XHJcbiAgICAgICAgdGhpcy5zaG9wUmVzUmVmcmVzaFRpbWUgPj0gJHV0aWwuZGVmYXVsdC5zdGFydERheVRpbWVzdGFtcCgpXHJcbiAgICAgICAgICAgID8gKHRoaXMuc2hvcFJlc1JlY29yZHMgPSAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuZ2V0SXRlbShcclxuICAgICAgICAgICAgICAgICAgJGxvY2FsTmFtZS5kZWZhdWx0LlNIT1BfUkVTX1JFQ09SRCxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zaG9wUmVzUmVjb3Jkc1xyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLnJlbW92ZUl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LlNIT1BfUkVTX1JFQ09SRCk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0Qm94VmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0ID8gdGhpcy5ib3hWaWRlb1JlY29yZC5ub3JtYWwgOiB0aGlzLmJveFZpZGVvUmVjb3JkLmFkdmFuY2VkO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldFNraW5Cb3hWaWRlb1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3hWaWRlb1JlY29yZC5za2luO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnNldEJveFZpZGVvUmVjb3JkID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB0ID8gKHRoaXMuYm94VmlkZW9SZWNvcmQubm9ybWFsID0gZSkgOiAodGhpcy5ib3hWaWRlb1JlY29yZC5hZHZhbmNlZCA9IGUpO1xyXG4gICAgICAgICRzdG9yYWdlVXRpbC5TdG9yYWdlVXRpbC5zZXRJdGVtKCRsb2NhbE5hbWUuZGVmYXVsdC5CT1hfVklERU9fUkVDT1JELCB0aGlzLmJveFZpZGVvUmVjb3JkKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5zZXRTa2luQm94VmlkZW9SZWNvcmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuYm94VmlkZW9SZWNvcmQuc2tpbiA9IHQ7XHJcbiAgICAgICAgJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLnNldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LkJPWF9WSURFT19SRUNPUkQsIHRoaXMuYm94VmlkZW9SZWNvcmQpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldERpYW1vbmRSZWNvcmRCeUlkID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXMuc2hvcERpYW1vbmRSZWNvcmRzLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUuaWQgPT09IHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICAgICAgPyAoKHZvaWQgMCAhPT0gZS5kYXlCdXlDb3VudCAmJiAkdXRpbC5kZWZhdWx0LnN0YXJ0RGF5VGltZXN0YW1wKCkgPT09IGUubGFzdFRpbWUpIHx8IChlLmRheUJ1eUNvdW50ID0gMCksIGUpXHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICBpZDogdCxcclxuICAgICAgICAgICAgICAgICAgdmlkZW9fY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgIGlzRnJpc3Q6ICEwLFxyXG4gICAgICAgICAgICAgICAgICBkYXlCdXlDb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgbGFzdFRpbWU6IDBcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmFkZERpYW1vbmRSZWNvcmQgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIHZhciBpID0ge1xyXG4gICAgICAgICAgICBpc1Jld2FyZDogITEsXHJcbiAgICAgICAgICAgIGlzRmlyc3Q6ICExLFxyXG4gICAgICAgICAgICBjb3VudDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzLnNob3BEaWFtb25kUmVjb3Jkcy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmlkID09PSB0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbykge1xyXG4gICAgICAgICAgICBvID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHQsXHJcbiAgICAgICAgICAgICAgICB2aWRlb19jb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGxhc3RUaW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgaXNGcmlzdDogITAsXHJcbiAgICAgICAgICAgICAgICBkYXlCdXlDb3VudDogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNob3BEaWFtb25kUmVjb3Jkcy5wdXNoKG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvLnZpZGVvX2NvdW50Kys7XHJcbiAgICAgICAgaS5jb3VudCA9IG8udmlkZW9fY291bnQ7XHJcbiAgICAgICAgaWYgKG8udmlkZW9fY291bnQgPj0gZSkge1xyXG4gICAgICAgICAgICBpLmlzUmV3YXJkID0gITA7XHJcbiAgICAgICAgICAgIGkuaXNGaXJzdCA9IG8uaXNGcmlzdDtcclxuICAgICAgICAgICAgby52aWRlb19jb3VudCA9IDA7XHJcbiAgICAgICAgICAgIG8ubGFzdFRpbWUgPSAkdXRpbC5kZWZhdWx0LnN0YXJ0RGF5VGltZXN0YW1wKCk7XHJcbiAgICAgICAgICAgIG8udmlkZW9fY291bnQgPSAwO1xyXG4gICAgICAgICAgICBvLmlzRnJpc3QgPSAhMTtcclxuICAgICAgICAgICAgby5kYXlCdXlDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuc2V0SXRlbSgkbG9jYWxOYW1lLmRlZmF1bHQuU0hPUF9ESUFNT05EX1JFQ09SRCwgdGhpcy5zaG9wRGlhbW9uZFJlY29yZHMpO1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmlzRGlhbW9uZEJ1eURheSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLnNob3BEaWFtb25kUmVjb3Jkcy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmlkID09PSB0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAhIWUgJiYgZS5sYXN0VGltZSA9PT0gJHV0aWwuZGVmYXVsdC5zdGFydERheVRpbWVzdGFtcCgpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmhhc1Jlc1JlZERvdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uuc2hvcFJlc0NvbmZpZ3MuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyID09PSB0LmNvaW5fdHlwZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHQuSW5zLmdldFNob3BSZXNSZWNvcmRCeUlkKGVbaV0uaWQpLmJ1eUNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gITE7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuaGFzRGlhbW9uZFJlZERvdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2Uuc2hvcERpYW1vbmRDb25maWdzLmZpbHRlcihmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMCA9PT0gdC5pc192aWRlbztcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0Lklucy5pc0RpYW1vbmRCdXlEYXkoZVtpXS5pZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gITE7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0U2hvcFJlc1JlY29yZEJ5SWQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gdGhpcy5zaG9wUmVzUmVjb3Jkcy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmlkID09PSB0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgICAgID8gKHRoaXMuc2hvcFJlc1JlZnJlc2hUaW1lIDwgJHV0aWwuZGVmYXVsdC5zdGFydERheVRpbWVzdGFtcCgpICYmIChlLmJ1eUNvdW50ID0gMCksXHJcbiAgICAgICAgICAgICAgdm9pZCAwID09PSBlLnZpZGVvX2NvdW50ICYmIChlLnZpZGVvX2NvdW50ID0gMCksXHJcbiAgICAgICAgICAgICAgZSlcclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiB0LFxyXG4gICAgICAgICAgICAgICAgICBidXlDb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgdmlkZW9fY291bnQ6IDBcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmFkZFNob3BSZXNSZWNvcmRWaWRlbyA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmdldFNob3BSZXNSZWNvcmRCeUlkKHQpO1xyXG4gICAgICAgIGkudmlkZW9fY291bnQgPSBlO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgLTEgPT09XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcFJlc1JlY29yZHMuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5pZCA9PT0gdDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9wUmVzUmVjb3Jkcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuc2V0SXRlbSgkbG9jYWxOYW1lLmRlZmF1bHQuU0hPUF9SRVNfUkVDT1JELCB0aGlzLnNob3BSZXNSZWNvcmRzKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5hZGRTaG9wUmVzUmVjb3JkID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0U2hvcFJlc1JlY29yZEJ5SWQodCk7XHJcbiAgICAgICAgZS5idXlDb3VudCsrO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgLTEgPT09XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcFJlc1JlY29yZHMuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5pZCA9PT0gdDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9wUmVzUmVjb3Jkcy5wdXNoKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG9wUmVzUmVmcmVzaFRpbWUgPCAkdXRpbC5kZWZhdWx0LnN0YXJ0RGF5VGltZXN0YW1wKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9wUmVzUmVmcmVzaFRpbWUgPSAkdXRpbC5kZWZhdWx0LnN0YXJ0RGF5VGltZXN0YW1wKCk7XHJcbiAgICAgICAgICAgICRzdG9yYWdlVXRpbC5TdG9yYWdlVXRpbC5zZXRJdGVtKCRsb2NhbE5hbWUuZGVmYXVsdC5TSE9QX1JFU19SRUZSRVNIX1RJTUUsIHRoaXMuc2hvcFJlc1JlZnJlc2hUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLnNldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LlNIT1BfUkVTX1JFQ09SRCwgdGhpcy5zaG9wUmVzUmVjb3Jkcyk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0Tm9ybWFsQm94UmVjb3JkID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1swXTtcclxuICAgICAgICB2YXIgaSA9ICRzZWVkVXRpbC5kZWZhdWx0LndlaWdodFJhbmRvbUNvdW50KGUud2VpZ2h0LCB0LCAhMCk7XHJcbiAgICAgICAgdmFyIG8gPSAtMTtcclxuICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZC5ub3JtYWwgLT0gdDtcclxuICAgICAgICBpZiAodGhpcy5ib3hSZXdhcmRSZWNvcmQubm9ybWFsIDw9IDApIHtcclxuICAgICAgICAgICAgbyA9IHQgLSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZC5ub3JtYWwgKz0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgtMSAhPT0gbykge1xyXG4gICAgICAgICAgICBpW29dID0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tR2VtKGkpO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldFJvYm90Qm94ID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuZ2VtQm94Q29uZmlnc1sxXTtcclxuICAgICAgICB2YXIgaSA9ICR1dGlsLmRlZmF1bHQuZGVlcENvcHkoZS53ZWlnaHQpO1xyXG4gICAgICAgIGlmICgkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuaXNIYXZlUm9ib3QoMikpIHtcclxuICAgICAgICAgICAgaVs3XSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuaXNIYXZlUm9ib3QoMykpIHtcclxuICAgICAgICAgICAgaVs4XSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvID0gJHNlZWRVdGlsLmRlZmF1bHQud2VpZ2h0UmFuZG9tQ291bnQoaSwgdCwgITApO1xyXG4gICAgICAgIHZhciBzID0gLTE7XHJcbiAgICAgICAgdmFyIGEgPSBbXTtcclxuICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZC5hZHZhbmNlZCAtPSB0O1xyXG4gICAgICAgIGlmICh0aGlzLmJveFJld2FyZFJlY29yZC5hZHZhbmNlZCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHMgPSB0IC0gMTtcclxuICAgICAgICAgICAgdGhpcy5ib3hSZXdhcmRSZWNvcmQuYWR2YW5jZWQgKz0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgtMSAhPT0gcykge1xyXG4gICAgICAgICAgICBvW3NdID0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IG8ubGVuZ3RoOyB1KyspIHtcclxuICAgICAgICAgICAgaWYgKG9bdV0gPCA3KSB7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2gob1t1XSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoNyA9PT0gb1t1XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMucHVzaCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAocCA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRSb2JvdFNraW5JbmZvKDIpKS5zaGFyZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRSb2JvdFNraW5JbmZvKHApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoOCA9PT0gb1t1XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocCA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRSb2JvdFNraW5JbmZvKDMpKS5zaGFyZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0Um9ib3RTa2luSW5mbyhwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcm9ib3RzOiBjLFxyXG4gICAgICAgICAgICBnZW1zOiB0aGlzLnJhbmRvbUdlbShhKVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0QWR2YW5jZWRCb3hSZWNvcmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Cb3hDb25maWdzWzFdO1xyXG4gICAgICAgIHZhciBpID0gJHNlZWRVdGlsLmRlZmF1bHQud2VpZ2h0UmFuZG9tQ291bnQoZS53ZWlnaHQsIHQsICEwKTtcclxuICAgICAgICB2YXIgbyA9IC0xO1xyXG4gICAgICAgIHRoaXMuYm94UmV3YXJkUmVjb3JkLmFkdmFuY2VkIC09IHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94UmV3YXJkUmVjb3JkLmFkdmFuY2VkIDw9IDApIHtcclxuICAgICAgICAgICAgbyA9IHQgLSAxO1xyXG4gICAgICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZC5hZHZhbmNlZCArPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKC0xICE9PSBvKSB7XHJcbiAgICAgICAgICAgIGlbb10gPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21HZW0oaSk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUucmFuZG9tR2VtID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IFtdO1xyXG4gICAgICAgIHZhciBpID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSB0W2ldICsgMTtcclxuICAgICAgICAgICAgdmFyIHMgPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUNvbmZpZ3MuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5HcmFkZSA9PT0gbztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVbaV0gPSBzWyRzZWVkVXRpbC5kZWZhdWx0LnJhbmRvbUZyb20oMCwgcy5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5hZGRQYWNrSXRlbShlW2ldLCAxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICBpKHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuc2V0SXRlbSgkbG9jYWxOYW1lLmRlZmF1bHQuQk9YX1JFV0FSRF9SRUNPUkQsIHRoaXMuYm94UmV3YXJkUmVjb3JkKTtcclxuICAgICAgICAkZXZlbnRNYW5hZ2VyLmRlZmF1bHQuc2VuZCgkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5SRU5ERVJfRE9ULCAkc3RhcnRWaWV3Lk1lbnVUeXBlLlJvbGUpO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldFNraW5Cb3hSZWNvcmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBlID0gW107XHJcbiAgICAgICAgdmFyIGkgPSAkc2VlZFV0aWwuZGVmYXVsdC53ZWlnaHRSYW5kb21Db3VudCgkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMl0ud2VpZ2h0LCB0LCAhMCk7XHJcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBpLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIHZhciBmID0gaVtyXTtcclxuICAgICAgICAgICAgdmFyIGggPSAkY29uZmlnQ29udGV4dC5kZWZhdWx0Lmluc3RhbmNlLmdlbUJveENvbmZpZ3NbMl0uVHJlYXN1cmVDaGVzdF90eXBlW2ZdO1xyXG4gICAgICAgICAgICBpZiAoMTAgPT09IGgpIHtcclxuICAgICAgICAgICAgICAgIGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHdW5Ta2luSW5mbygzKSkuc2hhcmQgKz0gMTtcclxuICAgICAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRHdW5Ta2luSW5mbyhnLCAhMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoMTEgPT09IGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHdW5Ta2luSW5mbyg0KSkuc2hhcmQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0R3VuU2tpbkluZm8oZywgITEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoMTIgPT09IGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHdW5Ta2luSW5mbyg1KSkuc2hhcmQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLnNldEd1blNraW5JbmZvKGcsICExKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMTMgPT09IGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHdW5Ta2luSW5mbyg2KSkuc2hhcmQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRHdW5Ta2luSW5mbyhnLCAhMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMTQgPT09IGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHdW5Ta2luSW5mbyg3KSkuc2hhcmQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0R3VuU2tpbkluZm8oZywgITEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMTUgPT09IGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFBsYXllclNraW5JbmZvKDMpKS5zaGFyZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0UGxheWVyU0tpbkluZm8oZywgITEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxNiA9PT0gaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGcgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0UGxheWVyU2tpbkluZm8oNCkpLnNoYXJkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0UGxheWVyU0tpbkluZm8oZywgITEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDE3ID09PSBoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDE1MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLm9wZWFyQ29pbigxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDE4ID09PSBoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZW1Db25maWdzLmZpbHRlcihmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQgPT09IHQuR3JhZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IG1bJHNlZWRVdGlsLmRlZmF1bHQucmFuZG9tRnJvbSgwLCBtLmxlbmd0aCAtIDEpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmFkZFBhY2tJdGVtKHksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogbVtyXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOSA9PT0gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5vcGVhckFkQ29pbigzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAyMCA9PT0gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5vcGVhclVwZ3JhZGVTdG9uZSg4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDIxID09PSBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRSb2JvdFNraW5JbmZvKDQpKS5zaGFyZCArPSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLnNldFJvYm90U2tpbkluZm8oZywgITEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAyMiA9PT0gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGcgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0Um9ib3RTa2luSW5mbyg1KSkuc2hhcmQgKz0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRSb2JvdFNraW5JbmZvKGcsICExKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMjMgPT09IGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFJvYm90U2tpbkluZm8oNikpLnNoYXJkICs9IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0Um9ib3RTa2luSW5mbyhnLCAhMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDI0ID09PSBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHQ6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRSb2JvdFNraW5JbmZvKDcpKS5zaGFyZCArPSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLnNldFJvYm90U2tpbkluZm8oZywgITEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAyNSA9PT0gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGcgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0Um9ib3RTa2luSW5mbyg4KSkuc2hhcmQgKz0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRSb2JvdFNraW5JbmZvKGcsICExKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMjYgPT09IGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFJvYm90U2tpbkluZm8oOSkpLnNoYXJkICs9IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0Um9ib3RTa2luSW5mbyhnLCAhMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDI3ID09PSBoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnID0gJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLmdldFBsYXllclNraW5JbmZvKDUpKS5zaGFyZCArPSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLnNldFBsYXllclNLaW5JbmZvKGcsICExKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMjggPT09IGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGcgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0UGxheWVyU2tpbkluZm8oNikpLnNoYXJkICs9IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuc2V0UGxheWVyU0tpbkluZm8oZywgITEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAyOSA9PT0gaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHQ6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRQbGF5ZXJTa2luSW5mbyg3KSkuc2hhcmQgKz0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRQbGF5ZXJTS2luSW5mbyhnLCAhMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDMwID09PSBoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZyA9ICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHdW5Ta2luSW5mbyg4KSkuc2hhcmQgKz0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRHdW5Ta2luSW5mbyhnLCAhMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZC5za2luIC09IHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94UmV3YXJkUmVjb3JkLnNraW4gPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveFJld2FyZFJlY29yZC5za2luICs9IDEwO1xyXG4gICAgICAgICAgICB2YXIgZztcclxuICAgICAgICAgICAgdmFyIF8gPSAkc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21Gcm9tKDMsIDQpO1xyXG4gICAgICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogOSxcclxuICAgICAgICAgICAgICAgIGV4dDogXyxcclxuICAgICAgICAgICAgICAgIG51bTogMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKGcgPSAkcm9sZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2V0UGxheWVyU2tpbkluZm8oXykpLnNoYXJkICs9IDE7XHJcbiAgICAgICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zZXRQbGF5ZXJTS2luSW5mbyhnLCAhMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRyb2xlQ29udGV4dC5kZWZhdWx0Lmlucy5zYXZlUm9ib3RTa2luKCk7XHJcbiAgICAgICAgJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLnNhdmVHdW5Ta2luKCk7XHJcbiAgICAgICAgJHJvbGVDb250ZXh0LmRlZmF1bHQuaW5zLnNhdmVQbGF5ZXJTa2luKCk7XHJcbiAgICAgICAgJHN0b3JhZ2VVdGlsLlN0b3JhZ2VVdGlsLnNldEl0ZW0oJGxvY2FsTmFtZS5kZWZhdWx0LkJPWF9SRVdBUkRfUkVDT1JELCB0aGlzLmJveFJld2FyZFJlY29yZCk7XHJcbiAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0LnNlbmQoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuUkVOREVSX0RPVCwgJHN0YXJ0Vmlldy5NZW51VHlwZS5Sb2xlKTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH07XHJcbiAgICB0Ll9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZjtcclxuIl19