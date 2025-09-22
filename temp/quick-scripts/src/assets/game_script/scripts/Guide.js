"use strict";
cc._RF.push(module, '79cc1B9cgFCTK134at6d6i7', 'Guide');
// game_script/scripts/Guide.js

"use strict";

var o;

var $hollowOut = require("./HollowOut");

var $touchBlocker = require("./TouchBlocker");

var u = cc._decorator;
var d = u.ccclass;
var p = u.property;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.hollowOut = null;
    e.touchBlocker = null;
    e.arrowTargetParent = null;
    e.arrowTarget = null;
    return e;
  }

  var i;

  __extends(e, t);

  i = e;

  e.prototype.onLoad = function () {
    i.currentStep = 1;
  };

  e.prototype.start = function () {
    this.reset();
    i.self = this;
  };

  e.prototype.remove = function () {
    this.hollowOut.node.destroy();
  };

  e.prototype.reset = function () {
    console.log("======================");
    this.hollowOut.node.active = !1;
    this.hollowOut.setNodeSize();
    this.touchBlocker.passAll();
  };

  e.prototype.startGuideMask = function (t, e) {
    var i = this;

    if (void 0 === e) {
      e = -1;
    }

    this.scheduleOnce(function () {
      i.hollowOut.node.active = !0;
      i.touchBlocker.blockAll();
      var o = t;
      var n = o.width + 10;
      var s = o.height + 10;
      i.touchBlocker.target = t;
      var l = i.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec3.ZERO).clone());
      i.hollowOut.node.children.forEach(function (t, i) {
        t.active = i === e;
      });
      new Promise(function () {
        return __awaiter(i, void 0, void 0, function () {
          return __generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.hollowOut.rectTo(0.3, cc.v2(l), n, s, 5, 5)];

              case 1:
                t.sent();
                return [2];
            }
          });
        });
      });
      i.touchBlocker.setTarget(o);
    }, 0.1);
  };

  e.prototype.startGuideTest = function (t, e) {
    var i = this;
    this.scheduleOnce(function () {
      i.hollowOut.node.active = !0;
      i.touchBlocker.blockAll();
      var o = t;
      var n = o.width + 10;
      var s = o.height + 10;
      i.touchBlocker.target = t;
      var l = i.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec3.ZERO).clone());
      i.hollowOut.node.children.forEach(function (t) {
        t.active = !1;
      });
      var c = i.hollowOut.node.children[2];
      c.active = !0;
      c.position = l.add(cc.v3(0, o.height));
      c.getComponent(cc.Label).string = e;
      new Promise(function () {
        return __awaiter(i, void 0, void 0, function () {
          return __generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.hollowOut.rectTo(0.3, cc.v2(l), n, s, 5, 5)];

              case 1:
                t.sent();
                return [2];
            }
          });
        });
      });
      i.touchBlocker.setTarget(o);
    }, 0.1);
  };

  e.prototype.stopGuide = function () {
    this.hollowOut.node.children.forEach(function (t) {
      t.active = !1;
    });

    if (cc.isValid(this.arrowTarget)) {
      this.arrowTarget.position = this.arrowTargetParent.convertToNodeSpaceAR(this.arrowTarget.convertToWorldSpaceAR(cc.Vec3.ZERO).clone());
      this.arrowTarget.parent = this.arrowTargetParent;
      this.arrowTarget = null;
      this.arrowTargetParent = null;
    }

    this.hollowOut.setNodeSize();
    this.hollowOut.node.active = !1;
    this.touchBlocker.target = null;
    this.touchBlocker.passAll();
  };

  e.setGuideStep = function (t) {
    if (!(t < i.currentStep)) {
      i.currentStep = t;
    }
  };

  e.isEnd = function () {
    return this.currentStep >= 12;
  };

  e.currentStep = 1;
  e.self = null;

  __decorate([p($hollowOut["default"])], e.prototype, "hollowOut", void 0);

  __decorate([p($touchBlocker["default"])], e.prototype, "touchBlocker", void 0);

  return i = __decorate([d], e);
}(cc.Component);

exports["default"] = f;

cc._RF.pop();