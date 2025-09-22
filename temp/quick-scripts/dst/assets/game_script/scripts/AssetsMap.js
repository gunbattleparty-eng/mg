
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/AssetsMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '829465tZpVKEqH0/ADRCW6M', 'AssetsMap');
// game_script/scripts/AssetsMap.js

"use strict";

var o;
exports.AssetsMap = exports.BundleNames = void 0;
exports.BundleNames = {
  Resources: "resources",
  Game: "game",
  Enemy: "enemy",
  Start: "start",
  Popup: "popup",
  Ad: "ad",
  Public: "public",
  Configs: "configs",
  Public_Res: "public_res"
};
(o = exports.AssetsMap || (exports.AssetsMap = {})).ResourcesBundle = {
  prefabs: {
    assetsType: cc.Prefab,
    assetsList: {
      WaitingView: "/prefabs/WaitingView",
      PopMaskBg: "/prefabs/PopMaskBg",
      ToastView: "/prefabs/ToastView",
      GameLoadingView: "/prefabs/GameLoadingView",
      Privacy: "/prefabs/privacy/Privacy",
      UserProto: "/prefabs/privacy/UserProto",
      UserTip: "/prefabs/privacy/UserTip"
    }
  },
  sounds: {
    assetsType: cc.AudioClip,
    assetsList: {}
  }
};
o.PublicBundles = {
  prefabs: {
    assetsType: cc.Prefab,
    assetsList: {}
  }
};
o.StartBundles = {
  prefabs: {
    assetsType: cc.Prefab,
    assetsList: {
      StartView: "/prefabs/StartView",
      RoleView: "/prefabs/RoleView",
      BattleView: "/prefabs/BattleView",
      SkillView: "/prefabs/SkillView",
      ShopView: "/prefabs/ShopView",
      RoleShopView: "/prefabs/RoleShopView",
      RobotShopView: "/prefabs/RobotShopView",
      GunShopView: "/prefabs/GunShopView"
    }
  }
};
o.GameBundles = {
  prefabs: {
    assetsType: cc.Prefab,
    assetsList: {
      GameView: "/prefabs/GameView",
      Bullet_1: "/prefabs/buttle/Bullet_1",
      Bullet_2: "/prefabs/buttle/Bullet_2",
      Bullet_3: "/prefabs/buttle/Bullet_3",
      Bullet_4: "/prefabs/buttle/Bullet_4",
      Bullet_5: "/prefabs/buttle/Bullet_5",
      Bullet_6: "/prefabs/buttle/Bullet_6",
      Bullet_7: "/prefabs/buttle/Bullet_7",
      Bullet_8: "/prefabs/buttle/Bullet_8",
      Bullet_9: "/prefabs/buttle/Bullet_9",
      Bullet_10: "/prefabs/buttle/Bullet_10",
      Bullet_11: "/prefabs/buttle/Bullet_11",
      Bullet_12: "/prefabs/buttle/Bullet_12",
      Bullet_13: "/prefabs/buttle/Bullet_13",
      Bullet_14: "/prefabs/buttle/Bullet_14",
      Bullet_15: "/prefabs/buttle/Bullet_15",
      Bullet_16: "/prefabs/buttle/Bullet_16",
      Bullet_17: "/prefabs/buttle/Bullet_17",
      Bullet_18: "/prefabs/buttle/Bullet_18",
      Bullet_19: "/prefabs/buttle/Bullet_19",
      Bullet_20: "/prefabs/buttle/Bullet_20",
      Bullet_21: "/prefabs/buttle/Bullet_21",
      Bullet_22: "/prefabs/buttle/Bullet_22",
      Bullet_23: "/prefabs/buttle/Bullet_23",
      Bullet_24: "/prefabs/buttle/Bullet_24",
      Bullet_25: "/prefabs/buttle/Bullet_25",
      Bullet_26: "/prefabs/buttle/Bullet_26",
      Bullet_27: "/prefabs/buttle/Bullet_27",
      Bullet_28: "/prefabs/buttle/Bullet_28",
      Bullet_29: "/prefabs/buttle/Bullet_29",
      Bullet_30: "/prefabs/buttle/Bullet_30",
      Bullet_31: "/prefabs/buttle/Bullet_31",
      Bullet_32: "/prefabs/buttle/Bullet_32",
      SBullet_2: "/prefabs/buttle/SBullet_2",
      SBullet_2_1: "/prefabs/buttle/SBullet_2_1",
      SBullet_3: "/prefabs/buttle/SBullet_3",
      SBullet_4: "/prefabs/buttle/SBullet_4",
      SBullet_5: "/prefabs/buttle/SBullet_5",
      SBullet_5_1: "/prefabs/buttle/SBullet_5_1",
      SBullet_6: "/prefabs/buttle/SBullet_6",
      SBullet_6_1: "/prefabs/buttle/SBullet_6_1",
      SBullet_7: "/prefabs/buttle/SBullet_7",
      RBullet_1: "/prefabs/buttle/RBullet_1",
      RBullet_2: "/prefabs/buttle/RBullet_2",
      RBullet_3: "/prefabs/buttle/RBullet_3",
      RBullet_4: "/prefabs/buttle/RBullet_4",
      RBullet_5_1: "/prefabs/buttle/RBullet_5_1",
      RBullet_5_2: "/prefabs/buttle/RBullet_5_2",
      RBullet_5_3: "/prefabs/buttle/RBullet_5_3",
      RBullet_6: "/prefabs/buttle/RBullet_6",
      RBullet_7: "/prefabs/buttle/RBullet_7",
      RBullet_8: "/prefabs/buttle/RBullet_8",
      RBullet_8_1: "/prefabs/buttle/RBullet_8_1",
      Burn: "/prefabs/debuff/Burn",
      Freeze: "/prefabs/debuff/Freeze",
      Paralysis: "/prefabs/debuff/Paralysis",
      Stun: "/prefabs/debuff/Stun",
      Heal: "/prefabs/debuff/Heal",
      Shield: "/prefabs/debuff/Shield"
    }
  },
  textures: {
    assetsType: cc.SpriteFrame,
    assetsList: {}
  }
};
o.PopUpBundles = {
  prefabs: {
    assetsType: cc.Prefab,
    assetsList: {
      ChooseSkillView: "/prefabs/ChooseSkillView",
      PauseView: "/prefabs/PauseView",
      SettleView: "/prefabs/SettleView",
      GMView: "/prefabs/GMView",
      GemInfoView: "/prefabs/GemInfoView",
      EquipmentInfoView: "/prefabs/EquipmentInfoView",
      SkillInfoView: "/prefabs/SkillInfoView",
      UpgradeView: "/prefabs/UpgradeView",
      RewardGemView: "/prefabs/RewardGemView",
      RewardView: "/prefabs/RewardView",
      GemStatsView: "/prefabs/GemStatsView",
      TaskView: "/prefabs/TaskView",
      OnlineView: "/prefabs/OnlineView",
      BossSkillView: "/prefabs/BossSkillView",
      BossWarnView: "/prefabs/BossWarnView",
      BattleTipView: "/prefabs/BattleTipView",
      EggKeyView: "/prefabs/EggKeyView",
      SkinShardView: "/prefabs/SkinShardView",
      SettingView: "/prefabs/SettingView",
      EggRewardView: "/prefabs/EggRewardView",
      NewPackView: "/prefabs/NewPackView",
      TTGiftView: "/prefabs/TTGiftView",
      SweepView: "/prefabs/SweepView",
      CoinDiamondView: "/prefabs/CoinDiamondView",
      GameSpeedView: "/prefabs/GameSpeedView",
      EggTipView: "/prefabs/EggTipView",
      ChanceView: "/prefabs/ChanceView",
      RankView: "/prefabs/RankView",
      WeeklyPassView: "/prefabs/WeeklyPassView",
      AdCoinView: "/prefabs/AdCoinView"
    }
  }
};
o.AdBundles = {
  prefabs: {
    assetsType: cc.Prefab,
    assetsList: {
      UserTip: "/prefabs/UserTip"
    }
  }
};
o.bundleAssetsMap = {};
o.bundleAssetsMap[exports.BundleNames.Resources] = o.ResourcesBundle;
o.bundleAssetsMap[exports.BundleNames.Game] = o.GameBundles;
o.bundleAssetsMap[exports.BundleNames.Start] = o.StartBundles;
o.bundleAssetsMap[exports.BundleNames.Popup] = o.PopUpBundles;
o.bundleAssetsMap[exports.BundleNames.Public] = o.PublicBundles;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEFzc2V0c01hcC5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkFzc2V0c01hcCIsIkJ1bmRsZU5hbWVzIiwiUmVzb3VyY2VzIiwiR2FtZSIsIkVuZW15IiwiU3RhcnQiLCJQb3B1cCIsIkFkIiwiUHVibGljIiwiQ29uZmlncyIsIlB1YmxpY19SZXMiLCJSZXNvdXJjZXNCdW5kbGUiLCJwcmVmYWJzIiwiYXNzZXRzVHlwZSIsImNjIiwiUHJlZmFiIiwiYXNzZXRzTGlzdCIsIldhaXRpbmdWaWV3IiwiUG9wTWFza0JnIiwiVG9hc3RWaWV3IiwiR2FtZUxvYWRpbmdWaWV3IiwiUHJpdmFjeSIsIlVzZXJQcm90byIsIlVzZXJUaXAiLCJzb3VuZHMiLCJBdWRpb0NsaXAiLCJQdWJsaWNCdW5kbGVzIiwiU3RhcnRCdW5kbGVzIiwiU3RhcnRWaWV3IiwiUm9sZVZpZXciLCJCYXR0bGVWaWV3IiwiU2tpbGxWaWV3IiwiU2hvcFZpZXciLCJSb2xlU2hvcFZpZXciLCJSb2JvdFNob3BWaWV3IiwiR3VuU2hvcFZpZXciLCJHYW1lQnVuZGxlcyIsIkdhbWVWaWV3IiwiQnVsbGV0XzEiLCJCdWxsZXRfMiIsIkJ1bGxldF8zIiwiQnVsbGV0XzQiLCJCdWxsZXRfNSIsIkJ1bGxldF82IiwiQnVsbGV0XzciLCJCdWxsZXRfOCIsIkJ1bGxldF85IiwiQnVsbGV0XzEwIiwiQnVsbGV0XzExIiwiQnVsbGV0XzEyIiwiQnVsbGV0XzEzIiwiQnVsbGV0XzE0IiwiQnVsbGV0XzE1IiwiQnVsbGV0XzE2IiwiQnVsbGV0XzE3IiwiQnVsbGV0XzE4IiwiQnVsbGV0XzE5IiwiQnVsbGV0XzIwIiwiQnVsbGV0XzIxIiwiQnVsbGV0XzIyIiwiQnVsbGV0XzIzIiwiQnVsbGV0XzI0IiwiQnVsbGV0XzI1IiwiQnVsbGV0XzI2IiwiQnVsbGV0XzI3IiwiQnVsbGV0XzI4IiwiQnVsbGV0XzI5IiwiQnVsbGV0XzMwIiwiQnVsbGV0XzMxIiwiQnVsbGV0XzMyIiwiU0J1bGxldF8yIiwiU0J1bGxldF8yXzEiLCJTQnVsbGV0XzMiLCJTQnVsbGV0XzQiLCJTQnVsbGV0XzUiLCJTQnVsbGV0XzVfMSIsIlNCdWxsZXRfNiIsIlNCdWxsZXRfNl8xIiwiU0J1bGxldF83IiwiUkJ1bGxldF8xIiwiUkJ1bGxldF8yIiwiUkJ1bGxldF8zIiwiUkJ1bGxldF80IiwiUkJ1bGxldF81XzEiLCJSQnVsbGV0XzVfMiIsIlJCdWxsZXRfNV8zIiwiUkJ1bGxldF82IiwiUkJ1bGxldF83IiwiUkJ1bGxldF84IiwiUkJ1bGxldF84XzEiLCJCdXJuIiwiRnJlZXplIiwiUGFyYWx5c2lzIiwiU3R1biIsIkhlYWwiLCJTaGllbGQiLCJ0ZXh0dXJlcyIsIlNwcml0ZUZyYW1lIiwiUG9wVXBCdW5kbGVzIiwiQ2hvb3NlU2tpbGxWaWV3IiwiUGF1c2VWaWV3IiwiU2V0dGxlVmlldyIsIkdNVmlldyIsIkdlbUluZm9WaWV3IiwiRXF1aXBtZW50SW5mb1ZpZXciLCJTa2lsbEluZm9WaWV3IiwiVXBncmFkZVZpZXciLCJSZXdhcmRHZW1WaWV3IiwiUmV3YXJkVmlldyIsIkdlbVN0YXRzVmlldyIsIlRhc2tWaWV3IiwiT25saW5lVmlldyIsIkJvc3NTa2lsbFZpZXciLCJCb3NzV2FyblZpZXciLCJCYXR0bGVUaXBWaWV3IiwiRWdnS2V5VmlldyIsIlNraW5TaGFyZFZpZXciLCJTZXR0aW5nVmlldyIsIkVnZ1Jld2FyZFZpZXciLCJOZXdQYWNrVmlldyIsIlRUR2lmdFZpZXciLCJTd2VlcFZpZXciLCJDb2luRGlhbW9uZFZpZXciLCJHYW1lU3BlZWRWaWV3IiwiRWdnVGlwVmlldyIsIkNoYW5jZVZpZXciLCJSYW5rVmlldyIsIldlZWtseVBhc3NWaWV3IiwiQWRDb2luVmlldyIsIkFkQnVuZGxlcyIsImJ1bmRsZUFzc2V0c01hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQkQsT0FBTyxDQUFD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QUYsR0FBb0IsRUFBcEI7QUFDQXBJLENBQUMsQ0FBQ29JLGVBQUYsQ0FBa0JuSSxPQUFPLENBQUNFLFdBQVIsQ0FBb0JDLFNBQXRDLElBQW1ESixDQUFDLENBQUNhLGVBQXJEO0FBQ0FiLENBQUMsQ0FBQ29JLGVBQUYsQ0FBa0JuSSxPQUFPLENBQUNFLFdBQVIsQ0FBb0JFLElBQXRDLElBQThDTCxDQUFDLENBQUNzQyxXQUFoRDtBQUNBdEMsQ0FBQyxDQUFDb0ksZUFBRixDQUFrQm5JLE9BQU8sQ0FBQ0UsV0FBUixDQUFvQkksS0FBdEMsSUFBK0NQLENBQUMsQ0FBQzZCLFlBQWpEO0FBQ0E3QixDQUFDLENBQUNvSSxlQUFGLENBQWtCbkksT0FBTyxDQUFDRSxXQUFSLENBQW9CSyxLQUF0QyxJQUErQ1IsQ0FBQyxDQUFDb0csWUFBakQ7QUFDQXBHLENBQUMsQ0FBQ29JLGVBQUYsQ0FBa0JuSSxPQUFPLENBQUNFLFdBQVIsQ0FBb0JPLE1BQXRDLElBQWdEVixDQUFDLENBQUM0QixhQUFsRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbmV4cG9ydHMuQXNzZXRzTWFwID0gZXhwb3J0cy5CdW5kbGVOYW1lcyA9IHZvaWQgMDtcclxuZXhwb3J0cy5CdW5kbGVOYW1lcyA9IHtcclxuICAgIFJlc291cmNlczogXCJyZXNvdXJjZXNcIixcclxuICAgIEdhbWU6IFwiZ2FtZVwiLFxyXG4gICAgRW5lbXk6IFwiZW5lbXlcIixcclxuICAgIFN0YXJ0OiBcInN0YXJ0XCIsXHJcbiAgICBQb3B1cDogXCJwb3B1cFwiLFxyXG4gICAgQWQ6IFwiYWRcIixcclxuICAgIFB1YmxpYzogXCJwdWJsaWNcIixcclxuICAgIENvbmZpZ3M6IFwiY29uZmlnc1wiLFxyXG4gICAgUHVibGljX1JlczogXCJwdWJsaWNfcmVzXCJcclxufTtcclxuKG8gPSBleHBvcnRzLkFzc2V0c01hcCB8fCAoZXhwb3J0cy5Bc3NldHNNYXAgPSB7fSkpLlJlc291cmNlc0J1bmRsZSA9IHtcclxuICAgIHByZWZhYnM6IHtcclxuICAgICAgICBhc3NldHNUeXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYXNzZXRzTGlzdDoge1xyXG4gICAgICAgICAgICBXYWl0aW5nVmlldzogXCIvcHJlZmFicy9XYWl0aW5nVmlld1wiLFxyXG4gICAgICAgICAgICBQb3BNYXNrQmc6IFwiL3ByZWZhYnMvUG9wTWFza0JnXCIsXHJcbiAgICAgICAgICAgIFRvYXN0VmlldzogXCIvcHJlZmFicy9Ub2FzdFZpZXdcIixcclxuICAgICAgICAgICAgR2FtZUxvYWRpbmdWaWV3OiBcIi9wcmVmYWJzL0dhbWVMb2FkaW5nVmlld1wiLFxyXG4gICAgICAgICAgICBQcml2YWN5OiBcIi9wcmVmYWJzL3ByaXZhY3kvUHJpdmFjeVwiLFxyXG4gICAgICAgICAgICBVc2VyUHJvdG86IFwiL3ByZWZhYnMvcHJpdmFjeS9Vc2VyUHJvdG9cIixcclxuICAgICAgICAgICAgVXNlclRpcDogXCIvcHJlZmFicy9wcml2YWN5L1VzZXJUaXBcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzb3VuZHM6IHtcclxuICAgICAgICBhc3NldHNUeXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgYXNzZXRzTGlzdDoge31cclxuICAgIH1cclxufTtcclxuby5QdWJsaWNCdW5kbGVzID0ge1xyXG4gICAgcHJlZmFiczoge1xyXG4gICAgICAgIGFzc2V0c1R5cGU6IGNjLlByZWZhYixcclxuICAgICAgICBhc3NldHNMaXN0OiB7fVxyXG4gICAgfVxyXG59O1xyXG5vLlN0YXJ0QnVuZGxlcyA9IHtcclxuICAgIHByZWZhYnM6IHtcclxuICAgICAgICBhc3NldHNUeXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYXNzZXRzTGlzdDoge1xyXG4gICAgICAgICAgICBTdGFydFZpZXc6IFwiL3ByZWZhYnMvU3RhcnRWaWV3XCIsXHJcbiAgICAgICAgICAgIFJvbGVWaWV3OiBcIi9wcmVmYWJzL1JvbGVWaWV3XCIsXHJcbiAgICAgICAgICAgIEJhdHRsZVZpZXc6IFwiL3ByZWZhYnMvQmF0dGxlVmlld1wiLFxyXG4gICAgICAgICAgICBTa2lsbFZpZXc6IFwiL3ByZWZhYnMvU2tpbGxWaWV3XCIsXHJcbiAgICAgICAgICAgIFNob3BWaWV3OiBcIi9wcmVmYWJzL1Nob3BWaWV3XCIsXHJcbiAgICAgICAgICAgIFJvbGVTaG9wVmlldzogXCIvcHJlZmFicy9Sb2xlU2hvcFZpZXdcIixcclxuICAgICAgICAgICAgUm9ib3RTaG9wVmlldzogXCIvcHJlZmFicy9Sb2JvdFNob3BWaWV3XCIsXHJcbiAgICAgICAgICAgIEd1blNob3BWaWV3OiBcIi9wcmVmYWJzL0d1blNob3BWaWV3XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbm8uR2FtZUJ1bmRsZXMgPSB7XHJcbiAgICBwcmVmYWJzOiB7XHJcbiAgICAgICAgYXNzZXRzVHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgIGFzc2V0c0xpc3Q6IHtcclxuICAgICAgICAgICAgR2FtZVZpZXc6IFwiL3ByZWZhYnMvR2FtZVZpZXdcIixcclxuICAgICAgICAgICAgQnVsbGV0XzE6IFwiL3ByZWZhYnMvYnV0dGxlL0J1bGxldF8xXCIsXHJcbiAgICAgICAgICAgIEJ1bGxldF8yOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMlwiLFxyXG4gICAgICAgICAgICBCdWxsZXRfMzogXCIvcHJlZmFicy9idXR0bGUvQnVsbGV0XzNcIixcclxuICAgICAgICAgICAgQnVsbGV0XzQ6IFwiL3ByZWZhYnMvYnV0dGxlL0J1bGxldF80XCIsXHJcbiAgICAgICAgICAgIEJ1bGxldF81OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfNVwiLFxyXG4gICAgICAgICAgICBCdWxsZXRfNjogXCIvcHJlZmFicy9idXR0bGUvQnVsbGV0XzZcIixcclxuICAgICAgICAgICAgQnVsbGV0Xzc6IFwiL3ByZWZhYnMvYnV0dGxlL0J1bGxldF83XCIsXHJcbiAgICAgICAgICAgIEJ1bGxldF84OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfOFwiLFxyXG4gICAgICAgICAgICBCdWxsZXRfOTogXCIvcHJlZmFicy9idXR0bGUvQnVsbGV0XzlcIixcclxuICAgICAgICAgICAgQnVsbGV0XzEwOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTBcIixcclxuICAgICAgICAgICAgQnVsbGV0XzExOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTFcIixcclxuICAgICAgICAgICAgQnVsbGV0XzEyOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTJcIixcclxuICAgICAgICAgICAgQnVsbGV0XzEzOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTNcIixcclxuICAgICAgICAgICAgQnVsbGV0XzE0OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTRcIixcclxuICAgICAgICAgICAgQnVsbGV0XzE1OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTVcIixcclxuICAgICAgICAgICAgQnVsbGV0XzE2OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTZcIixcclxuICAgICAgICAgICAgQnVsbGV0XzE3OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTdcIixcclxuICAgICAgICAgICAgQnVsbGV0XzE4OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMThcIixcclxuICAgICAgICAgICAgQnVsbGV0XzE5OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMTlcIixcclxuICAgICAgICAgICAgQnVsbGV0XzIwOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjBcIixcclxuICAgICAgICAgICAgQnVsbGV0XzIxOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjFcIixcclxuICAgICAgICAgICAgQnVsbGV0XzIyOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjJcIixcclxuICAgICAgICAgICAgQnVsbGV0XzIzOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjNcIixcclxuICAgICAgICAgICAgQnVsbGV0XzI0OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjRcIixcclxuICAgICAgICAgICAgQnVsbGV0XzI1OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjVcIixcclxuICAgICAgICAgICAgQnVsbGV0XzI2OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjZcIixcclxuICAgICAgICAgICAgQnVsbGV0XzI3OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjdcIixcclxuICAgICAgICAgICAgQnVsbGV0XzI4OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjhcIixcclxuICAgICAgICAgICAgQnVsbGV0XzI5OiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMjlcIixcclxuICAgICAgICAgICAgQnVsbGV0XzMwOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMzBcIixcclxuICAgICAgICAgICAgQnVsbGV0XzMxOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMzFcIixcclxuICAgICAgICAgICAgQnVsbGV0XzMyOiBcIi9wcmVmYWJzL2J1dHRsZS9CdWxsZXRfMzJcIixcclxuICAgICAgICAgICAgU0J1bGxldF8yOiBcIi9wcmVmYWJzL2J1dHRsZS9TQnVsbGV0XzJcIixcclxuICAgICAgICAgICAgU0J1bGxldF8yXzE6IFwiL3ByZWZhYnMvYnV0dGxlL1NCdWxsZXRfMl8xXCIsXHJcbiAgICAgICAgICAgIFNCdWxsZXRfMzogXCIvcHJlZmFicy9idXR0bGUvU0J1bGxldF8zXCIsXHJcbiAgICAgICAgICAgIFNCdWxsZXRfNDogXCIvcHJlZmFicy9idXR0bGUvU0J1bGxldF80XCIsXHJcbiAgICAgICAgICAgIFNCdWxsZXRfNTogXCIvcHJlZmFicy9idXR0bGUvU0J1bGxldF81XCIsXHJcbiAgICAgICAgICAgIFNCdWxsZXRfNV8xOiBcIi9wcmVmYWJzL2J1dHRsZS9TQnVsbGV0XzVfMVwiLFxyXG4gICAgICAgICAgICBTQnVsbGV0XzY6IFwiL3ByZWZhYnMvYnV0dGxlL1NCdWxsZXRfNlwiLFxyXG4gICAgICAgICAgICBTQnVsbGV0XzZfMTogXCIvcHJlZmFicy9idXR0bGUvU0J1bGxldF82XzFcIixcclxuICAgICAgICAgICAgU0J1bGxldF83OiBcIi9wcmVmYWJzL2J1dHRsZS9TQnVsbGV0XzdcIixcclxuICAgICAgICAgICAgUkJ1bGxldF8xOiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzFcIixcclxuICAgICAgICAgICAgUkJ1bGxldF8yOiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzJcIixcclxuICAgICAgICAgICAgUkJ1bGxldF8zOiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzNcIixcclxuICAgICAgICAgICAgUkJ1bGxldF80OiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzRcIixcclxuICAgICAgICAgICAgUkJ1bGxldF81XzE6IFwiL3ByZWZhYnMvYnV0dGxlL1JCdWxsZXRfNV8xXCIsXHJcbiAgICAgICAgICAgIFJCdWxsZXRfNV8yOiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzVfMlwiLFxyXG4gICAgICAgICAgICBSQnVsbGV0XzVfMzogXCIvcHJlZmFicy9idXR0bGUvUkJ1bGxldF81XzNcIixcclxuICAgICAgICAgICAgUkJ1bGxldF82OiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzZcIixcclxuICAgICAgICAgICAgUkJ1bGxldF83OiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzdcIixcclxuICAgICAgICAgICAgUkJ1bGxldF84OiBcIi9wcmVmYWJzL2J1dHRsZS9SQnVsbGV0XzhcIixcclxuICAgICAgICAgICAgUkJ1bGxldF84XzE6IFwiL3ByZWZhYnMvYnV0dGxlL1JCdWxsZXRfOF8xXCIsXHJcbiAgICAgICAgICAgIEJ1cm46IFwiL3ByZWZhYnMvZGVidWZmL0J1cm5cIixcclxuICAgICAgICAgICAgRnJlZXplOiBcIi9wcmVmYWJzL2RlYnVmZi9GcmVlemVcIixcclxuICAgICAgICAgICAgUGFyYWx5c2lzOiBcIi9wcmVmYWJzL2RlYnVmZi9QYXJhbHlzaXNcIixcclxuICAgICAgICAgICAgU3R1bjogXCIvcHJlZmFicy9kZWJ1ZmYvU3R1blwiLFxyXG4gICAgICAgICAgICBIZWFsOiBcIi9wcmVmYWJzL2RlYnVmZi9IZWFsXCIsXHJcbiAgICAgICAgICAgIFNoaWVsZDogXCIvcHJlZmFicy9kZWJ1ZmYvU2hpZWxkXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGV4dHVyZXM6IHtcclxuICAgICAgICBhc3NldHNUeXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICBhc3NldHNMaXN0OiB7fVxyXG4gICAgfVxyXG59O1xyXG5vLlBvcFVwQnVuZGxlcyA9IHtcclxuICAgIHByZWZhYnM6IHtcclxuICAgICAgICBhc3NldHNUeXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYXNzZXRzTGlzdDoge1xyXG4gICAgICAgICAgICBDaG9vc2VTa2lsbFZpZXc6IFwiL3ByZWZhYnMvQ2hvb3NlU2tpbGxWaWV3XCIsXHJcbiAgICAgICAgICAgIFBhdXNlVmlldzogXCIvcHJlZmFicy9QYXVzZVZpZXdcIixcclxuICAgICAgICAgICAgU2V0dGxlVmlldzogXCIvcHJlZmFicy9TZXR0bGVWaWV3XCIsXHJcbiAgICAgICAgICAgIEdNVmlldzogXCIvcHJlZmFicy9HTVZpZXdcIixcclxuICAgICAgICAgICAgR2VtSW5mb1ZpZXc6IFwiL3ByZWZhYnMvR2VtSW5mb1ZpZXdcIixcclxuICAgICAgICAgICAgRXF1aXBtZW50SW5mb1ZpZXc6IFwiL3ByZWZhYnMvRXF1aXBtZW50SW5mb1ZpZXdcIixcclxuICAgICAgICAgICAgU2tpbGxJbmZvVmlldzogXCIvcHJlZmFicy9Ta2lsbEluZm9WaWV3XCIsXHJcbiAgICAgICAgICAgIFVwZ3JhZGVWaWV3OiBcIi9wcmVmYWJzL1VwZ3JhZGVWaWV3XCIsXHJcbiAgICAgICAgICAgIFJld2FyZEdlbVZpZXc6IFwiL3ByZWZhYnMvUmV3YXJkR2VtVmlld1wiLFxyXG4gICAgICAgICAgICBSZXdhcmRWaWV3OiBcIi9wcmVmYWJzL1Jld2FyZFZpZXdcIixcclxuICAgICAgICAgICAgR2VtU3RhdHNWaWV3OiBcIi9wcmVmYWJzL0dlbVN0YXRzVmlld1wiLFxyXG4gICAgICAgICAgICBUYXNrVmlldzogXCIvcHJlZmFicy9UYXNrVmlld1wiLFxyXG4gICAgICAgICAgICBPbmxpbmVWaWV3OiBcIi9wcmVmYWJzL09ubGluZVZpZXdcIixcclxuICAgICAgICAgICAgQm9zc1NraWxsVmlldzogXCIvcHJlZmFicy9Cb3NzU2tpbGxWaWV3XCIsXHJcbiAgICAgICAgICAgIEJvc3NXYXJuVmlldzogXCIvcHJlZmFicy9Cb3NzV2FyblZpZXdcIixcclxuICAgICAgICAgICAgQmF0dGxlVGlwVmlldzogXCIvcHJlZmFicy9CYXR0bGVUaXBWaWV3XCIsXHJcbiAgICAgICAgICAgIEVnZ0tleVZpZXc6IFwiL3ByZWZhYnMvRWdnS2V5Vmlld1wiLFxyXG4gICAgICAgICAgICBTa2luU2hhcmRWaWV3OiBcIi9wcmVmYWJzL1NraW5TaGFyZFZpZXdcIixcclxuICAgICAgICAgICAgU2V0dGluZ1ZpZXc6IFwiL3ByZWZhYnMvU2V0dGluZ1ZpZXdcIixcclxuICAgICAgICAgICAgRWdnUmV3YXJkVmlldzogXCIvcHJlZmFicy9FZ2dSZXdhcmRWaWV3XCIsXHJcbiAgICAgICAgICAgIE5ld1BhY2tWaWV3OiBcIi9wcmVmYWJzL05ld1BhY2tWaWV3XCIsXHJcbiAgICAgICAgICAgIFRUR2lmdFZpZXc6IFwiL3ByZWZhYnMvVFRHaWZ0Vmlld1wiLFxyXG4gICAgICAgICAgICBTd2VlcFZpZXc6IFwiL3ByZWZhYnMvU3dlZXBWaWV3XCIsXHJcbiAgICAgICAgICAgIENvaW5EaWFtb25kVmlldzogXCIvcHJlZmFicy9Db2luRGlhbW9uZFZpZXdcIixcclxuICAgICAgICAgICAgR2FtZVNwZWVkVmlldzogXCIvcHJlZmFicy9HYW1lU3BlZWRWaWV3XCIsXHJcbiAgICAgICAgICAgIEVnZ1RpcFZpZXc6IFwiL3ByZWZhYnMvRWdnVGlwVmlld1wiLFxyXG4gICAgICAgICAgICBDaGFuY2VWaWV3OiBcIi9wcmVmYWJzL0NoYW5jZVZpZXdcIixcclxuICAgICAgICAgICAgUmFua1ZpZXc6IFwiL3ByZWZhYnMvUmFua1ZpZXdcIixcclxuICAgICAgICAgICAgV2Vla2x5UGFzc1ZpZXc6IFwiL3ByZWZhYnMvV2Vla2x5UGFzc1ZpZXdcIixcclxuICAgICAgICAgICAgQWRDb2luVmlldzogXCIvcHJlZmFicy9BZENvaW5WaWV3XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbm8uQWRCdW5kbGVzID0ge1xyXG4gICAgcHJlZmFiczoge1xyXG4gICAgICAgIGFzc2V0c1R5cGU6IGNjLlByZWZhYixcclxuICAgICAgICBhc3NldHNMaXN0OiB7XHJcbiAgICAgICAgICAgIFVzZXJUaXA6IFwiL3ByZWZhYnMvVXNlclRpcFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5vLmJ1bmRsZUFzc2V0c01hcCA9IHt9O1xyXG5vLmJ1bmRsZUFzc2V0c01hcFtleHBvcnRzLkJ1bmRsZU5hbWVzLlJlc291cmNlc10gPSBvLlJlc291cmNlc0J1bmRsZTtcclxuby5idW5kbGVBc3NldHNNYXBbZXhwb3J0cy5CdW5kbGVOYW1lcy5HYW1lXSA9IG8uR2FtZUJ1bmRsZXM7XHJcbm8uYnVuZGxlQXNzZXRzTWFwW2V4cG9ydHMuQnVuZGxlTmFtZXMuU3RhcnRdID0gby5TdGFydEJ1bmRsZXM7XHJcbm8uYnVuZGxlQXNzZXRzTWFwW2V4cG9ydHMuQnVuZGxlTmFtZXMuUG9wdXBdID0gby5Qb3BVcEJ1bmRsZXM7XHJcbm8uYnVuZGxlQXNzZXRzTWFwW2V4cG9ydHMuQnVuZGxlTmFtZXMuUHVibGljXSA9IG8uUHVibGljQnVuZGxlcztcclxuIl19