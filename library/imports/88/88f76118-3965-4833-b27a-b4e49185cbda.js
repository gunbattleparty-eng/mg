"use strict";
cc._RF.push(module, '88f76EYOWVIM7J6tOSRhcva', 'ComponentProxy');
// game_script/scripts/ComponentProxy.js

"use strict";

var o = function () {
  function t() {
    this.objList = [];
  }

  t.prototype.pushObj = function (t) {
    this.objList.push(t);
  };

  t.prototype.removeObj = function (t) {
    var e = this.objList.indexOf(t);

    if (-1 !== e) {
      this.objList.splice(e, 1);
    }
  };

  t.prototype.clear = function () {
    this.objList.length = 0;
  };

  t.prototype.gameLoop = function (t) {
    for (var e = 0; e < this.objList.length; e++) {
      this.objList[e].updateFrame(t);
    }
  };

  t.Ins = new t();
  return t;
}();

exports["default"] = o;

cc._RF.pop();