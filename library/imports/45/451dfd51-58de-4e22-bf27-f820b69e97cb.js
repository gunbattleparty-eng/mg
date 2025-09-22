"use strict";
cc._RF.push(module, '451df1RWN5OIr8n+CC2npfL', 'ResKeeper');
// game_script/scripts/ResKeeper.js

"use strict";

var o;
exports.ResKeeper = void 0;
var r = cc._decorator;
var a = r.ccclass;
var l = (r.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.cacheAssets = new Set();
    return e;
  }

  __extends(e, t);

  e.prototype.cacheAsset = function (t) {
    if (!this.cacheAssets.has(t)) {
      t.addRef();
      this.cacheAssets.add(t);
    }
  };

  e.prototype.releaseAssets = function () {
    this.cacheAssets.forEach(function (t) {
      t.decRef();
    });
    this.cacheAssets.clear();
  };

  e.prototype.onDestroy = function () {
    this.releaseAssets();
  };

  return __decorate([a], e);
}(cc.Component));
exports.ResKeeper = l;

cc._RF.pop();