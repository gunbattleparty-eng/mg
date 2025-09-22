var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $list = require("./List");
var $popupManager = require("./PopupManager");
var $uIManager = require("./UIManager");
var $uIView = require("./UIView");
var $util = require("./Util");
var $configContext = require("./ConfigContext");
var $roleContext = require("./RoleContext");
var $userDataContext = require("./UserDataContext");
var $startView = require("./StartView");
var $playerSkin = require("./PlayerSkin");
var $roleShopItem = require("./RoleShopItem");
var v = cc._decorator;
var b = v.ccclass;
var w = v.property;
var A = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.nameLabel = null;
        e.atkLable = null;
        e.playerSkin = null;
        e.skillSp = null;
        e.btnSure = null;
        e.list = null;
        e.shardSp = null;
        e.shardProccess = null;
        e.btnBack = null;
        e.eggAnim = null;
        e.gainLabel = null;
        e.skillDescLabel = null;
        e.descIcon = null;
        e.currSkinId = -1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = 1 === $roleContext.default.ins.currSkinInfo.skin ? 2 : $roleContext.default.ins.currSkinInfo.skin;
        this.renderPlayer(t);
    };
    e.prototype.onResetView = function () {
        this.list.numItems = $configContext.default.instance.playerSkinConfigs.length - 1;
        this.list.selectedId = 0;
    };
    e.prototype.addEvent = function () {
        this.btnSure.on("click", this.clickSure, this);
        this.btnBack.on("click", this.clickBack, this);
        if (0 === $userDataContext.default.Ins.getEgg(3)) {
            this.eggAnim.node.parent.on(cc.Node.EventType.TOUCH_START, this.touchEgg, this);
        }
    };
    e.prototype.removeEvent = function () {
        this.btnSure.off("click", this.clickSure, this);
        this.btnBack.off("click", this.clickBack, this);
    };
    e.prototype.touchEgg = function () {
        var t = this;
        if (
            2 === this.currSkinId &&
            2 === $roleContext.default.ins.currSkinInfo.gun &&
            0 === $userDataContext.default.Ins.getEgg(3)
        ) {
            this.eggAnim.node.active = !0;
            this.node.getChildByName("mask").active = !0;
            this.eggAnim.playAnimation("stand", 1);
            this.eggAnim.once(
                dragonBones.EventObject.COMPLETE,
                function () {
                    t.node.getChildByName("mask").active = !1;
                    t.eggAnim.node.active = !1;
                    $popupManager.PopupManager.instance.open(
                        $assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.SkinShardView,
                        null,
                        {
                            closeCallback: function () {
                                if (0 !== $userDataContext.default.Ins.getEgg(3)) {
                                    t.renderPlayer(t.currSkinId);
                                    t.list.updateAll();
                                }
                            }
                        }
                    );
                },
                this
            );
        }
    };
    e.prototype.clickBack = function () {
        $uIManager.UIManager.instance.replaceView($assetsMap.AssetsMap.StartBundles.prefabs.assetsList.StartView, {
            type: $startView.MenuType.Role
        });
    };
    e.prototype.renderItem = function (t, e) {
        t.getComponent($roleShopItem.default).render($configContext.default.instance.playerSkinConfigs[e + 1]);
    };
    e.prototype.onListSelected = function (t) {
        if (t) {
            var e = t.getComponent($roleShopItem.default).playerSKinId;
            this.renderPlayer(e);
        }
    };
    e.prototype.renderPlayer = function (t) {
        var e = this;
        this.currSkinId = t;
        var i = $configContext.default.instance.playerSkinConfigs.find(function (e) {
            return e.id === t;
        });
        var o = $roleContext.default.ins.getPlayerSkinInfo(t);
        this.nameLabel.string = i.name;
        this.atkLable.string = "+" + i.add_attribute;
        this.playerSkin.changePlayerSkin(t);
        $assetsLoader.default.instance.loadRes(
            $assetsMap.BundleNames.Public_Res,
            ["/cd_icon/pf" + i.id],
            cc.SpriteFrame,
            null,
            function (t, i) {
                var o = i[0];
                if (o && cc.isValid(e.skillSp)) {
                    e.skillSp.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                    e.descIcon.getComponent(cc.Sprite).spriteFrame = o;
                }
            }
        );
        this.shardSp.node.active = !1;
        this.shardProccess.node.active = !1;
        this.skillDescLabel.string = i.skill_describe;
        this.gainLabel.node.parent.active = !1;
        o.isHave
            ? ((this.descIcon.active = !0),
              (this.skillDescLabel.node.parent.active = !0),
              (this.skillSp.node.parent.active = !1),
              $roleContext.default.ins.currSkinInfo.skin === t
                  ? ((this.btnSure.active = !0),
                    $util.default.updateMaterialState(this.btnSure, !1),
                    (this.btnSure.getComponent(cc.Button).interactable = !0),
                    (this.btnSure.getComponentInChildren(cc.Label).string = "卸下"))
                  : ($util.default.updateMaterialState(this.btnSure, !1),
                    (this.btnSure.getComponent(cc.Button).interactable = !0),
                    (this.btnSure.getComponentInChildren(cc.Label).string = "使用")))
            : ((this.gainLabel.node.parent.active = !0),
              (this.skillSp.node.parent.active = !0),
              (this.descIcon.active = !1),
              (this.skillDescLabel.node.parent.active = !1),
              (this.shardSp.node.active = !0),
              (this.shardProccess.node.active = !0),
              (this.gainLabel.string = i.get_describe),
              $assetsLoader.default.instance.loadRes(
                  $assetsMap.BundleNames.Public_Res,
                  ["/role_shard/sp" + t],
                  cc.SpriteFrame,
                  null,
                  function (t, i) {
                      var o = i[0];
                      if (o && cc.isValid(e.shardSp)) {
                          e.shardSp.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                      }
                  }
              ),
              (this.shardProccess.string = o.shard + "/" + i.shard_num),
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
        var e = $roleContext.default.ins.getPlayerSkinInfo(this.currSkinId);
        var i = $configContext.default.instance.playerSkinConfigs.find(function (e) {
            return e.id === t.currSkinId;
        });
        if (this.currSkinId === $roleContext.default.ins.currSkinInfo.skin) {
            $roleContext.default.ins.currSkinInfo.skin = 1;
            $roleContext.default.ins.setCurrInfo($roleContext.default.ins.currSkinInfo);
            this.renderPlayer(2);
            return void this.list.updateAll();
        }
        e.isHave
            ? $roleContext.default.ins.currSkinInfo.skin !== this.currSkinId &&
              (($roleContext.default.ins.currSkinInfo.skin = this.currSkinId),
              $roleContext.default.ins.setCurrInfo($roleContext.default.ins.currSkinInfo),
              this.renderPlayer(this.currSkinId),
              this.list.updateAll())
            : e.shard >= i.shard_num &&
              ((e.isHave = !0),
              (e.shard -= i.shard_num),
              $roleContext.default.ins.setPlayerSKinInfo(e),
              this.renderPlayer(this.currSkinId),
              this.list.updateAll());
    };
    __decorate([w(cc.Label)], e.prototype, "nameLabel", void 0);
    __decorate([w(cc.Label)], e.prototype, "atkLable", void 0);
    __decorate([w($playerSkin.PlayerSkin)], e.prototype, "playerSkin", void 0);
    __decorate([w(cc.Sprite)], e.prototype, "skillSp", void 0);
    __decorate([w(cc.Node)], e.prototype, "btnSure", void 0);
    __decorate([w($list.default)], e.prototype, "list", void 0);
    __decorate([w(cc.Sprite)], e.prototype, "shardSp", void 0);
    __decorate([w(cc.Label)], e.prototype, "shardProccess", void 0);
    __decorate([w(cc.Node)], e.prototype, "btnBack", void 0);
    __decorate([w(dragonBones.ArmatureDisplay)], e.prototype, "eggAnim", void 0);
    __decorate([w(cc.Label)], e.prototype, "gainLabel", void 0);
    __decorate([w(cc.Label)], e.prototype, "skillDescLabel", void 0);
    __decorate([w(cc.Node)], e.prototype, "descIcon", void 0);
    return __decorate([b], e);
})($uIView.UIView);
exports.default = A;
