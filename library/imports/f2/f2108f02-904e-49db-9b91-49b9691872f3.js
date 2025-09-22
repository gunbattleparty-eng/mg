"use strict";
cc._RF.push(module, 'f21088CkE5J25uRSblpGHLz', 'RankView');
// game_script/scripts/RankView.js

"use strict";

var o;

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resUtil = require("./ResUtil");

var $list = require("./List");

var $popupView = require("./PopupView");

var $util = require("./Util");

var $rankService = require("./RankService");

var f = cc._decorator;
var h = f.ccclass;
var m = f.property;

var y = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.list = null;
    e.selfLayer = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = $rankService["default"].instance.getRankList($rankService.RankTypeEnum.Level);

    if (t.length > 0) {
      this.list.numItems = t.length;
    }
  };

  e.prototype.onListRender = function (t, e) {
    var i = $rankService["default"].instance.getRankList($rankService.RankTypeEnum.Level)[e];
    this.rankItem(t, i, e + 1);
  };

  e.prototype.onResetView = function () {
    var t = this;
    this.renderSelf();
    $rankService["default"].instance.refreshAllRankList(function () {
      var e = $rankService["default"].instance.getRankList($rankService.RankTypeEnum.Level);

      if (e.length > 0) {
        t.list.numItems = e.length;
        t.list.updateAll();
      }

      t.renderSelf();
    });
  };

  e.prototype.renderSelf = function () {
    var t = $rankService["default"].instance.getRankSelf($rankService.RankTypeEnum.Level);

    if (t) {
      this.rankItem(this.selfLayer, t, t.rank);
    }
  };

  e.prototype.rankItem = function (t, e, i) {
    var o = this;
    var n = $util["default"].parseObject(e.extendParams);
    t.children[0].children[0].active = 2 === i;
    t.children[0].children[1].active = 3 === i;
    t.children[0].children[2].active = i > 3;
    var s = t.getChildByName("rank_label");

    if (s) {
      var c = s.getComponent(cc.Label);
      var u = i <= 100 ? i.toString() : "-";
      c.string = u;
    }

    t.getChildByName("name_label").getComponent(cc.Label).string = this.nameProccess(n.un);
    t.getChildByName("grade_label").getComponent(cc.Label).string = n.g;
    t.getChildByName("level_label").getComponent(cc.Label).string = n.l;
    var p = t.getChildByName("head_icon").getComponent(cc.Sprite);
    $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Public_Res, ["/head_icon/tx" + n.h], cc.SpriteFrame, null, function (t, e) {
      var i = e[0];

      if (i && cc.isValid(p)) {
        p.spriteFrame = $resUtil.ResUtil.assignWith(i, o.node);
      }
    });
  };

  e.prototype.nameProccess = function (t) {
    var e = t;
    return t.length <= 8 ? e : t.substring(0, 4) + "..." + t.substring(t.length - 3);
  };

  __decorate([m($list["default"])], e.prototype, "list", void 0);

  __decorate([m(cc.Node)], e.prototype, "selfLayer", void 0);

  return __decorate([h], e);
}($popupView.PopupView);

exports["default"] = y;

cc._RF.pop();