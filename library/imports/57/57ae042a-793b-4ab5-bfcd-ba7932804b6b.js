"use strict";
cc._RF.push(module, '57ae0QqeTtKtb/NunkygEtr', 'SkillInfoView');
// game_script/scripts/SkillInfoView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $list = require("./List");

var $popupManager = require("./PopupManager");

var $uIManager = require("./UIManager");

var $popupView = require("./PopupView");

var $remoteAudio = require("./RemoteAudio");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $skillContext = require("./SkillContext");

var $taskContext = require("./TaskContext");

var $userDataContext = require("./UserDataContext");

var $startView = require("./StartView");

var $coinDiamondView = require("./CoinDiamondView");

var $skillInfoListItem = require("./SkillInfoListItem");

var A = cc._decorator;
var S = A.ccclass;
var C = A.property;

var I = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.icon = null;
    e.skillNameLabel = null;
    e.levelLabel = null;
    e.descLabel = null;
    e.skillProLayer = null;
    e.skilList = null;
    e.upgradeInfoLayer = null;
    e.btnUpgrade = null;
    e.upgradeAnim = null;
    e.skillId = -1;
    e.config = null;
    e.basicConfig = null;
    e.unlockSKillConfigs = [];
    e.coin = 0;
    e.books = 0;
    e.colors = [new cc.Color().fromHEX("#13613B"), new cc.Color().fromHEX("#9C2A2E")];
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    var t = this;
    this.skillId = this.uiParam.param.skillId;
    this.config = $configContext["default"].instance.skillConfigsMap.get(this.skillId);
    this.basicConfig = $configContext["default"].instance.basicSkillConfigMap.get(this.skillId);
    this.unlockSKillConfigs = $configContext["default"].instance.skillConfigs.filter(function (e) {
      return t.basicConfig.unclock_skillgroup.includes(e.id);
    });
    this.skilList.numItems = this.unlockSKillConfigs.length;
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/skills/" + this.config.icon, "/skill_book/" + this.config.icon], cc.SpriteFrame, null, function (e, i) {
      var o = i[0];

      if (o && cc.isValid(t.icon)) {
        t.icon.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
        t.upgradeInfoLayer.getChildByName("skill_icon").getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(i[1], t.node);
      }
    });
    this.refreshProperty();
    this.renderMaterials();
  };

  e.prototype.addEvent = function () {
    this.btnUpgrade.on("click", this.clickUpgrade, this);
  };

  e.prototype.removeEvent = function () {
    this.btnUpgrade.off("click", this.clickUpgrade, this);
  };

  e.prototype.playAnim = function () {
    var t = this;
    this.upgradeAnim.node.active = !0;
    this.upgradeAnim.playAnimation("stand", 1);
    this.upgradeAnim.once(dragonBones.EventObject.COMPLETE, function () {
      t.upgradeAnim.node.active = !1;
    }, this);
  };

  e.prototype.renderMaterials = function () {
    var t = $skillContext["default"].Ins.getSKillLevel(this.skillId);

    if (t >= 50) {
      this.upgradeInfoLayer.active = !1;
    } else {
      {
        this.upgradeInfoLayer.active = !0;
        this.coin = this.basicConfig.spend_price[0] * t;
        this.books = this.basicConfig.spend_price[1] * t;
        var e = this.upgradeInfoLayer.getChildByName("coin_layer");
        e.children[0].getComponent(cc.Label).string = $userDataContext["default"].Ins.coin.toString();
        e.children[1].getComponent(cc.Label).string = "/" + this.coin;
        this.coin < $userDataContext["default"].Ins.coin ? e.children[0].color = this.colors[0] : e.children[0].color = this.colors[1];
        var i = this.upgradeInfoLayer.getChildByName("materials_layer");
        i.children[0].getComponent(cc.Label).string = $userDataContext["default"].Ins.getSkillBookById(this.skillId).toString();
        i.children[1].getComponent(cc.Label).string = "/" + this.books;
        this.books < $userDataContext["default"].Ins.getSkillBookById(this.skillId) ? i.children[0].color = this.colors[0] : i.children[0].color = this.colors[1];
      }
    }
  };

  e.prototype.clickUpgrade = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $userDataContext["default"].Ins.checkCoin(-this.coin) ? $userDataContext["default"].Ins.checkSKillBook(this.skillId, -this.books) ? ($remoteAudio["default"].instance.playEffectMusic("levelup"), $userDataContext["default"].Ins.opearCoin(-this.coin), $userDataContext["default"].Ins.opearSkillBook(this.skillId, -this.books), $taskContext["default"].Ins.setTaskRecord(5), $skillContext["default"].Ins.upgradeSkill(this.skillId, $skillContext["default"].Ins.getSKillLevel(this.skillId) + 1), this.refreshProperty(), this.renderMaterials(), this.skilList.updateAll(), this.playAnim(), $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Skill)) : $uIManager.UIManager.instance.showToast("材料不足") : $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.CoinDiamondView, {
      type: $coinDiamondView.AstType.COIN
    });
  };

  e.prototype.renderItem = function (t, e) {
    var i = this.unlockSKillConfigs[e];
    t.getComponent($skillInfoListItem["default"]).render(i, this.basicConfig.skill_unclocklevel[e]);
  };

  e.prototype.refreshProperty = function () {
    this.skillNameLabel.string = this.basicConfig.name;
    this.levelLabel.string = "等级:" + $skillContext["default"].Ins.getSKillLevel(this.skillId);
    this.descLabel.string = this.basicConfig.text;
    this.skillProLayer.children.forEach(function (t) {
      return t.active = !1;
    });
    var t = $skillContext["default"].Ins.getSKillLevel(this.skillId);
    t >= 50 ? t = -1 : t++;

    for (var e = 0; e < this.basicConfig.show_attribute.length; e++) {
      this.skillProLayer.children[e].active = !0;
      var i = this.basicConfig.show_attribute[e];

      if (1 === i) {
        var o = $skillContext["default"].Ins.getSKillAtk(this.config);
        var n = 0;

        if (-1 !== t) {
          n = $skillContext["default"].Ins.getSKillAtk(this.config, t) - o;
        }

        this.showPropertyItem(e, "攻击力", o.toFixed(0), this.parseValue(n));
      } else {
        if (4 === i) {
          var s = $skillContext["default"].Ins.getSkillCD(this.config);
          var r = 0;

          if (-1 !== t) {
            r = $skillContext["default"].Ins.getSkillCD(this.config, t) - s;
          }

          this.showPropertyItem(e, "冷却时间", s.toFixed(1), this.parseValue(r));
        } else {
          if (6 === i) {
            o = $skillContext["default"].Ins.getSkillPenetration(this.config);
            n = 0;
            -1 !== t && (n = $skillContext["default"].Ins.getSkillPenetration(this.config, t) - o);
            this.showPropertyItem(e, "穿透次数", o.toFixed(0), this.parseValue(n));
          } else {
            if (7 === i) {
              o = $skillContext["default"].Ins.getSkillBoomAtk(this.config);
              n = 0;
              -1 !== t && (n = $skillContext["default"].Ins.getSkillBoomAtk(this.config, t) - o);
              this.showPropertyItem(e, "爆炸伤害", o.toFixed(0), this.parseValue(n));
            } else {
              if (8 === i) {
                var a = 100 * $skillContext["default"].Ins.getBoomRange(this.config);
                var l = 0;

                if (-1 !== t) {
                  l = 100 * $skillContext["default"].Ins.getBoomRange(this.config, t) - a;
                }

                this.showPropertyItem(e, "爆炸范围", a.toFixed(0), this.parseValue(l));
              } else {
                if (9 === i) {
                  o = $skillContext["default"].Ins.getSputteringAtk(this.config);
                  n = 0;
                  -1 !== t && (n = $skillContext["default"].Ins.getSputteringAtk(this.config, t) - o);
                  this.showPropertyItem(e, "溅射伤害", o.toFixed(0), this.parseValue(n));
                } else {
                  if (10 === i) {
                    a = $skillContext["default"].Ins.getSputteringRange(this.config);
                    l = 0;
                    -1 !== t && (l = $skillContext["default"].Ins.getSputteringRange(this.config, t) - a);
                    this.showPropertyItem(e, "伤害范围", a.toFixed(0), this.parseValue(l));
                  } else {
                    if (11 === i) {
                      var c = $skillContext["default"].Ins.getAtkInterval(this.config);
                      var u = 0;

                      if (-1 !== t) {
                        u = $skillContext["default"].Ins.getAtkInterval(this.config, t) - c;
                      }

                      this.showPropertyItem(e, "伤害间隔", c.toFixed(1), this.parseValue(u));
                    } else {
                      if (12 === i) {
                        var d = $skillContext["default"].Ins.getSkillTime(this.config);
                        var p = 0;

                        if (-1 !== t) {
                          p = $skillContext["default"].Ins.getSkillTime(this.config, t) - p;
                        }

                        this.showPropertyItem(e, "持续时间", d.toFixed(1), this.parseValue(p));
                      } else {
                        if (13 === i) {
                          var f = $skillContext["default"].Ins.getBounceCount(this.config);
                          var h = 0;

                          if (-1 !== t) {
                            h = $skillContext["default"].Ins.getBounceCount(this.config, t) - f;
                          }

                          this.showPropertyItem(e, "弹射次数", f.toFixed(0), this.parseValue(h));
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
    }
  };

  e.prototype.parseValue = function (t) {
    return 0 === t ? "" : t > 0 ? "+" + t.toFixed(1) : t.toFixed(1);
  };

  e.prototype.showPropertyItem = function (t, e, i, o) {
    var n = this.skillProLayer.children[t];
    n.children[0].getComponent(cc.Label).string = e;
    n.children[1].getComponent(cc.Label).string = i;
    n.children[2].getComponent(cc.Label).string = o;
  };

  __decorate([C(cc.Sprite)], e.prototype, "icon", void 0);

  __decorate([C(cc.Label)], e.prototype, "skillNameLabel", void 0);

  __decorate([C(cc.Label)], e.prototype, "levelLabel", void 0);

  __decorate([C(cc.Label)], e.prototype, "descLabel", void 0);

  __decorate([C(cc.Node)], e.prototype, "skillProLayer", void 0);

  __decorate([C($list["default"])], e.prototype, "skilList", void 0);

  __decorate([C(cc.Node)], e.prototype, "upgradeInfoLayer", void 0);

  __decorate([C(cc.Node)], e.prototype, "btnUpgrade", void 0);

  __decorate([C(dragonBones.ArmatureDisplay)], e.prototype, "upgradeAnim", void 0);

  return __decorate([S], e);
}($popupView.PopupView);

exports["default"] = I;

cc._RF.pop();