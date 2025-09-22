var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $list = require("./List");
var $uIManager = require("./UIManager");
var $uIView = require("./UIView");
var $util = require("./Util");
var $configContext = require("./ConfigContext");
var $roleContext = require("./RoleContext");
var $startView = require("./StartView");
var $gunShopItem = require("./GunShopItem");
var g = cc._decorator;
var _ = g.ccclass;
var k = g.property;
var v = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.nameLable = null;
        e.gunSkin = null;
        e.atkLabel = null;
        e.shardSp = null;
        e.shardLabel = null;
        e.btnSure = null;
        e.list = null;
        e.btnBack = null;
        e.atkAllLabel = null;
        e.gainLabel = null;
        e.currSkinId = -1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = 1 === $roleContext.default.ins.currSkinInfo.gun ? 2 : $roleContext.default.ins.currSkinInfo.gun;
        this.renderGun(t);
    };
    e.prototype.onResetView = function () {
        this.list.numItems = $configContext.default.instance.gunSkinConfigs.length - 1;
        this.list.selectedId = 0;
    };
    e.prototype.addEvent = function () {
        this.btnSure.on("click", this.clickSure, this);
        this.btnBack.on("click", this.clickBack, this);
    };
    e.prototype.removeEvent = function () {
        this.btnSure.off("click", this.clickSure, this);
        this.btnBack.off("click", this.clickBack, this);
    };
    e.prototype.renderItem = function (t, e) {
        t.getComponent($gunShopItem.default).render($configContext.default.instance.gunSkinConfigs[e + 1]);
    };
    e.prototype.onListSelected = function (t) {
        if (t) {
            var e = t.getComponent($gunShopItem.default).gunSKinId;
            this.renderGun(e);
        }
    };
    e.prototype.renderGun = function (t) {
        var e = this;
        this.currSkinId = t;
        var i = $configContext.default.instance.gunSkinConfigs.find(function (e) {
            return e.id === t;
        });
        var o = $roleContext.default.ins.getGunSkinInfo(t);
        this.nameLable.string = i.Gunskin_name;
        this.gunSkin.armatureName = "zanshi" + i.id;
        this.atkLabel.string = (100 * i.Gunskin_add_attribute[0]).toFixed(2) + "%";
        this.atkAllLabel.string = (100 * $roleContext.default.ins.getGunAllAtkAdd()).toFixed(2) + "%";
        this.shardSp.node.active = !1;
        this.shardLabel.node.active = !1;
        this.gainLabel.node.parent.active = !1;
        o.isHave
            ? $roleContext.default.ins.currSkinInfo.gun === t
                ? ((this.btnSure.active = !0),
                  $util.default.updateMaterialState(this.btnSure, !1),
                  (this.btnSure.getComponent(cc.Button).interactable = !0),
                  (this.btnSure.getComponentInChildren(cc.Label).string = "卸下"))
                : ($util.default.updateMaterialState(this.btnSure, !1),
                  (this.btnSure.getComponent(cc.Button).interactable = !0),
                  (this.btnSure.getComponentInChildren(cc.Label).string = "使用"))
            : ((this.gainLabel.node.parent.active = !0),
              (this.gainLabel.string = i.get_describe),
              (this.shardSp.node.active = !0),
              (this.shardLabel.node.active = !0),
              $assetsLoader.default.instance.loadRes(
                  $assetsMap.BundleNames.Public_Res,
                  ["/gun_shard/sp" + i.id],
                  cc.SpriteFrame,
                  null,
                  function (t, i) {
                      var o = i[0];
                      if (o && cc.isValid(e.shardSp)) {
                          e.shardSp.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                      }
                  }
              ),
              (this.shardLabel.string = o.shard + "/" + i.shard_num),
              o.shard >= i.shard_num
                  ? ($util.default.updateMaterialState(this.btnSure, !1),
                    (this.btnSure.getComponent(cc.Button).interactable = !0),
                    (this.btnSure.getComponentInChildren(cc.Label).string = "激活"))
                  : ($util.default.updateMaterialState(this.btnSure, !0),
                    (this.btnSure.getComponent(cc.Button).interactable = !1),
                    (this.btnSure.getComponentInChildren(cc.Label).string = "激活")));
    };
    e.prototype.clickSure = function () {
        var t = this;
        var e = $roleContext.default.ins.getGunSkinInfo(this.currSkinId);
        var i = $configContext.default.instance.gunSkinConfigs.find(function (e) {
            return e.id === t.currSkinId;
        });
        if (this.currSkinId === $roleContext.default.ins.currSkinInfo.gun) {
            $roleContext.default.ins.currSkinInfo.gun = 1;
            $roleContext.default.ins.setCurrInfo($roleContext.default.ins.currSkinInfo);
            this.renderGun(2);
            return void this.list.updateAll();
        }
        e.isHave
            ? $roleContext.default.ins.currSkinInfo.gun !== this.currSkinId &&
              (($roleContext.default.ins.currSkinInfo.gun = this.currSkinId),
              $roleContext.default.ins.setCurrInfo($roleContext.default.ins.currSkinInfo),
              this.renderGun(this.currSkinId),
              this.list.updateAll())
            : e.shard >= i.shard_num &&
              ((e.isHave = !0),
              (e.shard -= i.shard_num),
              $roleContext.default.ins.setGunSkinInfo(e),
              this.renderGun(this.currSkinId),
              this.list.updateAll());
    };
    e.prototype.clickBack = function () {
        $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView, {
            type: $startView.MenuType.Role
        });
    };
    __decorate([k(cc.Label)], e.prototype, "nameLable", void 0);
    __decorate([k(dragonBones.ArmatureDisplay)], e.prototype, "gunSkin", void 0);
    __decorate([k(cc.Label)], e.prototype, "atkLabel", void 0);
    __decorate([k(cc.Sprite)], e.prototype, "shardSp", void 0);
    __decorate([k(cc.Label)], e.prototype, "shardLabel", void 0);
    __decorate([k(cc.Node)], e.prototype, "btnSure", void 0);
    __decorate([k($list.default)], e.prototype, "list", void 0);
    __decorate([k(cc.Node)], e.prototype, "btnBack", void 0);
    __decorate([k(cc.Label)], e.prototype, "atkAllLabel", void 0);
    __decorate([k(cc.Label)], e.prototype, "gainLabel", void 0);
    return __decorate([_], e);
})($uIView.UIView);
exports.default = v;
