var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $platform = require("./Platform");
var $remoteAudio = require("./RemoteAudio");
var $util = require("./Util");
var $aD = require("./AD");
var $adService = require("./AdService");
var $localEventName = require("./LocalEventName");
var $shopContext = require("./ShopContext");
var $userDataContext = require("./UserDataContext");
var $startView = require("./StartView");
var v = cc._decorator;
var b = v.ccclass;
var w = v.property;
var A = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.icon = null;
        e.firstLable = null;
        e.countLable = null;
        e.btnBuy = null;
        e.proccessLable = null;
        e.limitLable = null;
        e.config = null;
        e.buyType = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {
        this.btnBuy.on("click", this.clickBuy, this);
    };
    e.prototype.init = function (t) {
        var e = this;
        this.buyType = 0;
        this.config = t;
        var i = this.config.id;
        if (0 === this.config.is_video) {
            i = 1;
        }
        $assetsLoader.default.instance.loadRes(
            $assetsMap.BundleNames.Start,
            ["/textures/shop/diamond_" + i],
            cc.SpriteFrame,
            null,
            function (t, i) {
                var o = i[0];
                if (o && cc.isValid(e.icon)) {
                    e.icon.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                }
            }
        );
        this.render();
        this.renderLimit();
    };
    e.prototype.render = function () {
        this.firstLable.string = "首次礼包额外获得*" + this.config.reward_num;
        this.countLable.string = "x" + this.config.reward_num;
        var t = $shopContext.default.Ins.getDiamondRecordById(this.config.id);
        this.firstLable.node.active = t.isFrist;
        this.proccessLable.string = "购买(" + t.video_count + "/" + this.config.vido_num + ")";
        this.proccessLable.node.parent.children[0].active = !0;
        this.btnBuy.children[1].active = !1;
        this.buyType = 0;
        0 !== this.config.is_video || $shopContext.default.Ins.isDiamondBuyDay(this.config.id)
            ? 0 === this.config.is_video && (this.proccessLable.string = "购买")
            : ((this.buyType = 1),
              (this.proccessLable.node.parent.children[0].active = !1),
              (this.proccessLable.string = "免费"),
              (this.btnBuy.children[1].active = !0));
    };
    e.prototype.clickBuy = function () {
        var t = this;
        $remoteAudio.default.instance.playEffectMusic("Click");
        0 === this.buyType
            ? $adService.default.Ins.showRewardedVideo(function () {
                  if ($platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
                      $aD.default.toutiao.report("Diamond_Shop");
                  }
                  t.buy(!0);
                  t.renderLimit();
              })
            : (this.buy(!1),
              $eventManager.default.send($localEventName.default.RENDER_DOT, $startView.MenuType.Shop),
              this.renderLimit());
    };
    e.prototype.buy = function (t) {
        var e = $shopContext.default.Ins.addDiamondRecord(this.config.id, this.config.vido_num);
        if (t && $platform.Platform.currPlatForm === $platform.PlatformEnum.TOU_TIAO) {
            $aD.default.toutiao.report("Diamond_Shop_" + this.config.id, {
                count: e.count
            });
        }
        if (e.isReward) {
            var i = e.isFirst ? 2 * this.config.reward_num : this.config.reward_num;
            $userDataContext.default.Ins.opearDiamond(i);
            this.render();
            var o = [];
            o.push({
                type: 6,
                num: i
            });
            $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.RewardView, {
                infos: o
            });
        } else {
            this.render();
        }
    };
    e.prototype.renderLimit = function () {
        var t = $shopContext.default.Ins.getDiamondRecordById(this.config.id).dayBuyCount;
        this.limitLable.string = "每日限购(" + t + "/" + this.config.buy_num + ")";
        $util.default.updateMaterialState(this.btnBuy, t >= this.config.buy_num);
        this.btnBuy.getComponent(cc.Button).interactable = t < this.config.buy_num;
    };
    __decorate([w(cc.Sprite)], e.prototype, "icon", void 0);
    __decorate([w(cc.Label)], e.prototype, "firstLable", void 0);
    __decorate([w(cc.Label)], e.prototype, "countLable", void 0);
    __decorate([w(cc.Node)], e.prototype, "btnBuy", void 0);
    __decorate([w(cc.Label)], e.prototype, "proccessLable", void 0);
    __decorate([w(cc.Label)], e.prototype, "limitLable", void 0);
    return __decorate([b], e);
})(cc.Component);
exports.default = A;
