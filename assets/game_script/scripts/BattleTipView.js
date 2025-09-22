var o;
var $assetsLoader = require("./AssetsLoader");
var $assetsMap = require("./AssetsMap");
var $resUtil = require("./ResUtil");
var $popupView = require("./PopupView");
var $configContext = require("./ConfigContext");
var d = cc._decorator;
var p = d.ccclass;
var f = d.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.enemyLayer = null;
        e.rewardLayer = null;
        e.headSp = null;
        e.nameLable = null;
        e.descLable = null;
        e.btnCloseTip = null;
        e.levelInfoConfig = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onResetView = function () {
        var t = this;
        var e = this.uiParam.param.level;
        this.levelInfoConfig = $configContext.default.instance.getConfigByLevel(e);
        var i = function (e) {
            var i = o.levelInfoConfig.Monsterspool[e];
            var n = o.enemyLayer.children[e].children[0].getComponent(cc.Sprite);
            $assetsLoader.default.instance.loadRes(
                $assetsMap.BundleNames.Public_Res,
                ["/enemy_icon/gw_" + i],
                cc.SpriteFrame,
                null,
                function (e, i) {
                    var o = i[0];
                    if (o && cc.isValid(n)) {
                        n.spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
                    }
                }
            );
        };
        var o = this;
        for (var n = 0; n < this.levelInfoConfig.Monsterspool.length; n++) {
            i(n);
        }
        var s = function (e) {
            var i = c.rewardLayer.children[e];
            var o = i.children[0].getComponent(cc.Sprite);
            i.active = !0;
            var n = c.levelInfoConfig.rewardtype[e];
            1 === n
                ? $assetsLoader.default.instance.loadRes(
                      $assetsMap.BundleNames.Public,
                      ["/textures/gem/jinbi"],
                      cc.SpriteFrame,
                      null,
                      function (e, n) {
                          var s = n[0];
                          if (s && cc.isValid(i)) {
                              o.spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                          }
                      }
                  )
                : 2 === n
                ? $assetsLoader.default.instance.loadRes(
                      $assetsMap.BundleNames.Public,
                      ["/textures/gem/exp"],
                      cc.SpriteFrame,
                      null,
                      function (e, n) {
                          var s = n[0];
                          if (s && cc.isValid(i)) {
                              o.spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                          }
                      }
                  )
                : 3 === n
                ? $assetsLoader.default.instance.loadRes(
                      $assetsMap.BundleNames.Public_Res,
                      ["/equipment_icon/zb0"],
                      cc.SpriteFrame,
                      null,
                      function (e, n) {
                          var s = n[0];
                          if (s && cc.isValid(i)) {
                              o.spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                          }
                      }
                  )
                : 4 === n
                ? $assetsLoader.default.instance.loadRes(
                      $assetsMap.BundleNames.Public_Res,
                      ["/skill_book/jn0"],
                      cc.SpriteFrame,
                      null,
                      function (e, n) {
                          var s = n[0];
                          if (s && cc.isValid(i)) {
                              o.spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                          }
                      }
                  )
                : 5 === n &&
                  $assetsLoader.default.instance.loadRes(
                      $assetsMap.BundleNames.Public,
                      ["/textures/gem/wenhao"],
                      cc.SpriteFrame,
                      null,
                      function (e, n) {
                          var s = n[0];
                          if (s && cc.isValid(i)) {
                              o.getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(s, t.node);
                          }
                      }
                  );
        };
        var c = this;
        for (n = 0; n < this.levelInfoConfig.rewardtype.length; n++) {
            s(n);
        }
    };
    e.prototype.addEvent = function () {
        for (var t = 0; t < this.levelInfoConfig.Monsterspool.length; t++) {
            this.enemyLayer.children[t].on(cc.Node.EventType.TOUCH_START, this.touchItem, this);
        }
        this.btnCloseTip.on("click", this.closeTip, this);
    };
    e.prototype.removeEvent = function () {
        for (var t = 0; t < this.levelInfoConfig.Monsterspool.length; t++) {
            this.enemyLayer.children[t].on(cc.Node.EventType.TOUCH_START, this.touchItem, this);
        }
        this.btnCloseTip.off("click", this.closeTip, this);
    };
    e.prototype.touchItem = function (t) {
        var e = this;
        var i = this.enemyLayer.children.indexOf(t.target);
        var o = this.levelInfoConfig.Monsterspool[i];
        var n = $configContext.default.instance.enemyConfigs.find(function (t) {
            return t.id === o;
        });
        $assetsLoader.default.instance.loadRes(
            $assetsMap.BundleNames.Public_Res,
            ["/enemy_icon/gw_" + o],
            cc.SpriteFrame,
            null,
            function (t, i) {
                var o = i[0];
                if (o && cc.isValid(e.headSp)) {
                    e.headSp.spriteFrame = $resUtil.ResUtil.assignWith(o, e.node);
                }
            }
        );
        this.descLable.string = n.describe;
        this.nameLable.string = n.name;
        this.descLable.node.parent.active = !0;
    };
    e.prototype.closeTip = function () {
        this.descLable.node.parent.active = !1;
    };
    __decorate([f(cc.Node)], e.prototype, "enemyLayer", void 0);
    __decorate([f(cc.Node)], e.prototype, "rewardLayer", void 0);
    __decorate([f(cc.Sprite)], e.prototype, "headSp", void 0);
    __decorate([f(cc.Label)], e.prototype, "nameLable", void 0);
    __decorate([f(cc.Label)], e.prototype, "descLable", void 0);
    __decorate([f(cc.Node)], e.prototype, "btnCloseTip", void 0);
    return __decorate([p], e);
})($popupView.PopupView);
exports.default = h;
