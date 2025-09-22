var o;
exports.GinApplication = void 0;
var $uIManager = require("./UIManager");
var $assetsConverter = require("./AssetsConverter");
var $assetsMap = require("./AssetsMap");
var $resManager = require("./ResManager");
var $countDownUtil = require("./CountDownUtil");
var $globalHttp = require("./GlobalHttp");
var $platform = require("./Platform");
var $configContext = require("./ConfigContext");
var $skillContext = require("./SkillContext");
var $equipmentContext = require("./EquipmentContext");
var $roleContext = require("./RoleContext");
var $aD = require("./AD");
var $onlineContext = require("./OnlineContext");
var $guide = require("./Guide");
var $battleContext = require("./BattleContext");
var $util = require("./Util");
var $userDataContext = require("./UserDataContext");
var $gameContext = require("./GameContext");
var $assetsLoader = require("./AssetsLoader");
var $rankService = require("./RankService");
var $login = require("./Login");
var $geService = require("./GeService");
var $storageUtil = require("./StorageUtil");
var O = cc._decorator;
var L = O.ccclass;
var E = O.property;
var M = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.lodingView = null;
        e.confirmView = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        $storageUtil.StorageUtil.init();
        $platform.Platform.init();
        $assetsConverter.AssetsConverter.instance.execute();
        $uIManager.UIManager.instance.init(this.node, this.lodingView, this.confirmView);
        $globalHttp.GlobalHttp.init();
        $aD.default.init();
        $login.Login.instance.start();
        $geService.GeService.instance.start();
        $login.Login.instance.getLocalOpenID();
    };
    e.prototype.start = function () {
        var t = this;
        var e = [
            $assetsMap.BundleNames.Public,
            $assetsMap.BundleNames.Configs,
            $assetsMap.BundleNames.Public_Res,
            $assetsMap.BundleNames.Start,
            $assetsMap.BundleNames.Popup
        ];
        var i = [$assetsMap.BundleNames.Public, $assetsMap.BundleNames.Resources, $assetsMap.BundleNames.Start];
        $userDataContext.default.Ins.isEndGuide
            ? setTimeout(function () {
                  $guide.default.self.remove();
                  t.node.removeComponent($guide.default);
              }, 1)
            : (e.push($assetsMap.BundleNames.Game),
              e.push($assetsMap.BundleNames.Enemy),
              i.push($assetsMap.BundleNames.Game));
        $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO
            ? $login.Login.instance.ttGetUserInfo(!0)
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.WECHAT
            ? $login.Login.instance.wxGetUserInfo(!1)
            : $platform.Platform.currPlatForm === $platform.PlatformEnum.KS && $login.Login.instance.ksGetUserInfo(!0);
        var o = this.node.getChildByName("zg_node");
        setTimeout(function () {
            $configContext.default.instance.loadRemote(function () {
                o.destroy();
                t.startGame(e, i);
            });
        }, 1e3);
    };
    e.prototype.startGame = function (t, e) {
        var i = this;
        $uIManager.UIManager.instance.lodingView(
            t,
            e,
            function () {
                return __awaiter(i, void 0, void 0, function () {
                    var t;
                    var e;
                    var i;
                    var o;
                    return __generator(this, function (n) {
                        switch (n.label) {
                            case 0:
                                this.resourcesLoadedProccess();
                                return [4, $configContext.default.instance.load()];
                            case 1:
                                n.sent();
                                this.initModel();
                                return $userDataContext.default.Ins.isEndGuide
                                    ? ($uIManager.UIManager.instance.replaceView(
                                          $assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView
                                      ),
                                      [3, 5])
                                    : [3, 2];
                            case 2:
                                for (
                                    $battleContext.default.Ins.currLevel = 1,
                                        t = [],
                                        e = $configContext.default.instance.levelInfoConfigs.find(function (t) {
                                            return 1 === t.id;
                                        }),
                                        i = $util.default.deepCopy(e.Monsterspool),
                                        o = 0;
                                    o < i.length;
                                    o++
                                ) {
                                    t.push("/prefabs/Enemy_" + i[o]);
                                }
                                return [4, $gameContext.default.ins.loadLevel($battleContext.default.Ins.currLevel)];
                            case 3:
                                n.sent();
                                return [
                                    4,
                                    $assetsLoader.default.instance.loadResSync(
                                        $assetsMap.BundleNames.Enemy,
                                        t,
                                        cc.Prefab
                                    )
                                ];
                            case 4:
                                n.sent();
                                $uIManager.UIManager.instance.replaceView(
                                    $assetsMap.AssetsMap.GameBundles.prefabs.assetsList.GameView
                                );
                                n.label = 5;
                            case 5:
                                $uIManager.UIManager.instance.removeLoadingView();
                                return [2];
                        }
                    });
                });
            },
            !1
        );
    };
    e.prototype.initModel = function () {
        $countDownUtil.CountDownUtil.currTime = Date.now();
        $roleContext.default.ins.init();
        $equipmentContext.default.Ins.init();
        $skillContext.default.Ins.init();
        $onlineContext.default.Ins.init();
        $rankService.default.instance.initData();
    };
    e.prototype.resourcesLoadedProccess = function () {
        $uIManager.UIManager.instance.loadBaseUI();
        $resManager.ResManager.instance.loadArray(
            [$assetsMap.BundleNames.Popup],
            null,
            function () {
                console.log("弹窗预加载完成");
            },
            !0
        );
    };
    e.prototype.update = function (t) {
        $countDownUtil.CountDownUtil.update(t);
        $countDownUtil.CountDownUtil.time += t;
    };
    __decorate([E(cc.Prefab)], e.prototype, "lodingView", void 0);
    __decorate([E(cc.Prefab)], e.prototype, "confirmView", void 0);
    return __decorate([L], e);
})(cc.Component);
exports.GinApplication = M;
