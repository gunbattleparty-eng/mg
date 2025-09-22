"use strict";
cc._RF.push(module, '9a916zlDvFLdb0gVqtFKFw1', 'HealthBar');
// game_script/scripts/HealthBar.js

"use strict";

var o;
var r = cc._decorator;
var a = r.ccclass;
var l = r.property;

var c = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.progressBar = null;
    e.currBar = null;
    e.secBar = null;
    e.layerCount = null;
    e.hp = 0;
    e.layer = 0;
    e.unit = 0;
    e.colors = [new cc.Color().fromHEX("#e62e2e"), new cc.Color().fromHEX("#e8891c"), new cc.Color().fromHEX("#7cba18"), new cc.Color().fromHEX("#2a91eb"), new cc.Color().fromHEX("#aa71f5")];
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    this.hp = t;
    this.layer = e;
    this.unit = this.hp / this.layer;
    this.render(t);
  };

  e.prototype.render = function (t) {
    var e = Math.floor(t / this.unit);
    e <= 0 ? (this.layerCount.node.active = !1, this.secBar.active = !1) : (this.secBar.active = !0, this.layerCount.node.active = !0, this.layerCount.string = "x" + e);
    var i = (e + 1) % this.colors.length - 1;

    if (-1 === i) {
      i = this.colors.length - 1;
    }

    if (!this.currBar.color.equals(this.colors[i])) {
      this.currBar.color = this.colors[i];
    }

    if (this.secBar.active) {
      if (-1 == (i = e % this.colors.length - 1)) {
        i = this.colors.length - 1;
      }

      if (!this.secBar.color.equals(this.colors[i])) {
        this.secBar.color = this.colors[i];
      }
    }

    this.progressBar.progress = t % this.unit / this.unit;
  };

  __decorate([l(cc.ProgressBar)], e.prototype, "progressBar", void 0);

  __decorate([l(cc.Node)], e.prototype, "currBar", void 0);

  __decorate([l(cc.Node)], e.prototype, "secBar", void 0);

  __decorate([l(cc.Label)], e.prototype, "layerCount", void 0);

  return __decorate([a], e);
}(cc.Component);

exports["default"] = c;

cc._RF.pop();