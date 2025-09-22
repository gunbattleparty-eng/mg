var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $platform = require("./Platform");
var $seedUtil = require("./SeedUtil");
var $switchContext = require("./SwitchContext");
var u = (function() {
    function t() {
        this.configUrl = "https://cooperation.sjyywy.com/web2/wuff/tower-defence/configs/v2";
        this.baseUrl = "https://cooperation.sjyywy.com/web2/glob_config/prod";
        this.isStartRemote = !0;
        this.isLoadedRemote = !1;
        this.enemyConfigs = [];
        this.skillConfigs = [];
        this.basicSkillConfigs = [];
        this.levelInfoConfigs = [];
        this.gemConfigs = [];
        this.skillUpgradeConfigs = [];
        this.gemSkillConfigs = [];
        this.equipmentConfigs = [];
        this.gemBoxConfigs = [];
        this.shopResConfigs = [];
        this.shopDiamondConfigs = [];
        this.taskConfigs = [];
        this.onlineConfigs = [];
        this.playerSkinConfigs = [];
        this.gunSkinConfigs = [];
        this.signConfigs = [];
        this.sweepConfigs = [];
        this.robotConfigs = [];
        this.eggConfigs = [];
        this.chanceConfig = [];
        this.weekCardConfigs = [];
        this.skillConfigsMap = new Map();
        this.basicSkillConfigMap = new Map();
        this.enemyConfigsMap = new Map();
        this.exchangeConfigs = [];
        this.adSwitchConfig = null;
        this.seedLevel = 0;
    }
    t.prototype.load = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e = this;
            return __generator(this, function() {
                return [
                    2,
                    new Promise(function(i) {
                        t.instance.loadConfigResJson(
                            [
                                "/OrdinaryMonster_config",
                                "/skill_config",
                                "/jcskill_config",
                                "/level_info_config",
                                "/gemstone_config",
                                "/skill_upgrade_config",
                                "/gemstoneskill_config",
                                "/equipment_config",
                                "/TreasureChest_config",
                                "/ResourceMall_config",
                                "/DiamondMall_config",
                                "/daytask_config",
                                "/onlinereward_config",
                                "/manskin_config",
                                "/Gunskin_config",
                                "/newman_config",
                                "/Cradlebed_config",
                                "/Petsskin_config",
                                "/egg_configs",
                                "/Chance_config",
                                "/Weeklycard_config"
                            ],
                            function(t) {
                                e.enemyConfigs = t[0];
                                e.skillConfigs = t[1];
                                e.basicSkillConfigs = t[2];
                                e.levelInfoConfigs = t[3];
                                e.gemConfigs = t[4];
                                e.skillUpgradeConfigs = t[5];
                                e.gemSkillConfigs = t[6];
                                e.equipmentConfigs = t[7];
                                e.gemBoxConfigs = t[8];
                                e.shopResConfigs = t[9];
                                e.shopDiamondConfigs = t[10];
                                e.taskConfigs = t[11];
                                e.onlineConfigs = t[12];
                                e.playerSkinConfigs = t[13];
                                e.gunSkinConfigs = t[14];
                                e.signConfigs = t[15];
                                e.sweepConfigs = t[16];
                                e.robotConfigs = t[17];
                                e.eggConfigs = t[18];
                                e.chanceConfig = t[19];
                                e.weekCardConfigs = t[20];
                                e.enemyConfigsMap.clear();
                                for (var o = 0; o < e.enemyConfigs.length; o++) {
                                    var n = e.enemyConfigs[o];
                                    e.enemyConfigsMap.set(n.id, n);
                                }
                                e.skillConfigsMap.clear();
                                for (o = 0; o < e.skillConfigs.length; o++) {
                                    n = e.skillConfigs[o];
                                    e.skillConfigsMap.set(n.id, n);
                                }
                                e.basicSkillConfigs.sort(function(t, e) {
                                    return t.score - e.score;
                                });
                                for (o = 0; o < e.basicSkillConfigs.length; o++) {
                                    n = e.basicSkillConfigs[o];
                                    e.basicSkillConfigMap.set(n.skillmaster_id, n);
                                }
                                e.shopDiamondConfigs.sort(function(t, e) {
                                    return t.sort - e.sort;
                                });
                                e.shopResConfigs.sort(function(t, e) {
                                    return t.sort - e.sort;
                                });
                                if (i) {
                                    i(null);
                                }
                            }
                        );
                    }).catch(function(t) {
                        console.error(t);
                    })
                ];
            });
        });
    };
    t.prototype.loadRemote = function(e) {
        var i = this;
        i.isLoadedRemote = !0;
        i.adSwitchConfig = {
            "tt_open_shop_diamond": true,
            "wx_open_shop_diamond": true
        };

        i.exchangeConfigs = [{
                "id": 1,
                "name": "MGQ666",
                "tipsimg": [
                    7
                ],
                "num": [
                    2
                ],
                "channel": [
                    1,
                    9,
                    6
                ]
            },
            {
                "id": 2,
                "name": "MGQ888",
                "tipsimg": [
                    7
                ],
                "num": [
                    3
                ],
                "channel": [
                    1,
                    9,
                    6
                ]
            },
            {
                "id": 3,
                "name": "MGQ999",
                "tipsimg": [
                    7
                ],
                "num": [
                    4
                ],
                "channel": [
                    1,
                    9,
                    6
                ]
            }
        ];
        if (e) {
            e();
        }
        // if (this.isStartRemote) {
        //     var o = new Date().getTime();
        //     var n = [
        //         this.baseUrl + "/ad_config" + $switchContext.SwitchContext.configId + ".json?sign=" + o,
        //         this.baseUrl + "/Redemptioncode_configs" + $switchContext.SwitchContext.configId + ".json?sign=" + o
        //     ];
        //     t.loadNetResArray(n, null)
        //         .then(function (t) {
        //             i.isLoadedRemote = !0;
        //             i.adSwitchConfig = t[0];
        //             i.exchangeConfigs = t[1];
        //             if (e) {
        //                 e();
        //             }
        //         })
        //         .catch(function () {
        //             if (e) {
        //                 e();
        //             }
        //         });
        // } else {
        //     if (e) {
        //         e();
        //     }
        // }
    };
    t.prototype.getAdSwitch = function(t) {
        return !(!this.adSwitchConfig || !this.adSwitchConfig[t]) && this.adSwitchConfig[t];
    };
    t.prototype.getAdSwitch2 = function(e) {
        var i = "";
        $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO ?
            (i = "tt_" + e) :
            $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT && (i = "wx_" + e);
        return !("" !== i && !t.instance.getAdSwitch(i));
    };
    t.prototype.getEnemyConfig = function(t) {
        return this.enemyConfigs.find(function(e) {
            return e.id == t;
        });
    };
    t.prototype.loadConfigResJson = function(t, e) {
        var i = $assetsMap.BundleNames.Configs;
        $assetsLoader.default.instance.loadRes(i, t, cc.JsonAsset, null, function(i, o) {
            if (o.length > 0) {
                var n = [];
                for (var s = 0; s < o.length; s++) {
                    n.push(o[s].json);
                    cc.assetManager.releaseAsset(o[s]);
                }
                if (e) {
                    e(n);
                }
            } else {
                e && e(null);
                console.log("json为空:", t);
            }
        });
    };
    t.prototype.getConfigByLevel = function(e) {
        var i = this;
        if (this.levelInfoConfigs.length >= e) {
            this.seedLevel = e;
            return t.instance.levelInfoConfigs.find(function(t) {
                return t.id === e;
            });
        }
        $seedUtil.default.init(e);
        this.seedLevel = $seedUtil.default.randomFromSync(1, this.levelInfoConfigs.length);
        var o = t.instance.levelInfoConfigs.find(function(t) {
            return t.id === i.seedLevel;
        });
        var n = [];
        var s = [];
        for (var r = 0; r < o.addHP.length; r++) {
            var a = this.enemyConfigsMap.get(o.Monsterspool[r]);
            n.push(e * a.add_hp);
            s.push(e * a.add_atk);
        }
        return {
            id: e,
            Monsterspool: o.Monsterspool,
            addHP: n,
            addatk: s,
            EX: o.EX,
            EX_num: o.EX_num,
            EX_coefficient: o.EX_coefficient,
            rewardtype: o.rewardtype,
            reward_num: o.reward_num,
            gemstone_weight: o.gemstone_weight,
            TreasureChesttype: o.TreasureChesttype,
            TreasureChest_num: o.TreasureChest_num,
            phase_reward_time: o.phase_reward_time,
            phase_reward_num: o.phase_reward_num
        };
    };
    t.prototype.getSweepConfig = function(e) {
        if (this.levelInfoConfigs.length >= e) {
            this.seedLevel = e;
            return t.instance.sweepConfigs.find(function(t) {
                return t.id === e;
            });
        }
        $seedUtil.default.init(e);
        this.seedLevel = $seedUtil.default.randomFromSync(1, this.levelInfoConfigs.length);
        var i = e - this.levelInfoConfigs.length;
        var o = this.sweepConfigs[this.sweepConfigs.length - 1];
        var n = [];
        for (var s = 0; s < o.rewardnum.length; s++) {
            n.push(o.rewardnum[s] + i);
        }
        return {
            id: e,
            rewardnum: n
        };
    };
    t.loadNetResArray = function(t, e) {
        return __awaiter(this, void 0, Promise, function() {
            var i;
            var o;
            return __generator(this, function() {
                i = [];
                for (o = 0; o < t.length; o++) {
                    i.push({
                        url: t[o]
                    });
                }
                return [
                    2,
                    new Promise(function(t, o) {
                        cc.assetManager.loadAny(
                            i,
                            function(t, i) {
                                if (e) {
                                    e(t, i);
                                }
                            },
                            function(e, i) {
                                e ? o(e) : t(i);
                            }
                        );
                    })
                ];
            });
        });
    };
    t.instance = new t();
    return t;
})();
exports.default = u;