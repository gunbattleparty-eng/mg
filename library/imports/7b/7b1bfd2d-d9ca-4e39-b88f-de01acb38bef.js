"use strict";
cc._RF.push(module, '7b1bf0t2cpOObiP3gGss4vv', 'Enemy_14');
// game_script/scripts/Enemy_14.js

"use strict";

var o;

var $baseBullet = require("./BaseBullet");

var $enemy_13 = require("./Enemy_13");

var l = cc._decorator;
var c = l.ccclass;
var u = (l.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.buttleType = $baseBullet.BulletType.e_bullet_14;
    return e;
  }

  __extends(e, t);

  return __decorate([c], e);
}($enemy_13["default"]));
exports["default"] = u;

cc._RF.pop();