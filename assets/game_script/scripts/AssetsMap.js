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
