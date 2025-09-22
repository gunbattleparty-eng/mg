"use strict";
cc._RF.push(module, '83963KxNFxKyLEnUhsF/rQz', 'CountDownUtil');
// game_script/scripts/CountDownUtil.js

"use strict";

exports.CountDownUtil = void 0;

var s = function () {
  function t() {}

  t.scheduleOnce = function (t, e, i) {
    if (this.countDownManager.has(e)) {
      console.warn("该定时器已存在,执行时间叠加", e);
      this.addTime(e, i);
    } else {
      {
        var o = new r();
        o.scheduleOnce(t, e, i);
        this.countDownManager.set(e, o);
      }
    }
  };

  t.scheduleOnceForReplace = function (t, e, i) {
    if (this.countDownManager.has(e)) {
      this.replaceTime(e, i);
    } else {
      {
        var o = new r();
        o.scheduleOnce(t, e, i);
        this.countDownManager.set(e, o);
      }
    }
  };

  t.replaceTime = function (t, e) {
    this.countDownManager.has(t) ? this.countDownManager.get(t).replaceTime(e) : console.error("定时器不存在", t);
  };

  t.addTime = function (t, e) {
    this.countDownManager.has(t) ? this.countDownManager.get(t).addTime(e) : console.error("定时器不存在", t);
  };

  t.unSchedule = function (t) {
    if (this.countDownManager.has(t)) {
      this.countDownManager["delete"](t);
    }
  };

  t.update = function (t) {
    var e;
    var i;
    var s = [];

    try {
      var r = __values(this.countDownManager);

      for (var a = r.next(); !a.done; a = r.next()) {
        var l = __read(a.value, 2);

        var c = l[0];

        if (l[1].update(t)) {
          s.push(c);
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (a && !a.done && (i = r["return"])) {
          i.call(r);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }

    for (var u = 0; u < s.length; u++) {
      if (this.countDownManager.get(s[u]).residueTime <= 0) {
        this.countDownManager["delete"](s[u]);
      }
    }
  };

  t.time = 0;
  t.currTime = 0;
  t.countDownManager = new Map();
  return t;
}();

exports.CountDownUtil = s;

var r = function () {
  function t() {}

  t.prototype.addTime = function (t) {
    this.residueTime += t;
  };

  t.prototype.replaceTime = function (t) {
    this.residueTime = t;
  };

  t.prototype.scheduleOnce = function (t, e, i) {
    this.successCb = t.bind(e);
    this.residueTime = i;
  };

  t.prototype.update = function (t) {
    return !(this.residueTime <= 0) && (this.residueTime -= t, this.residueTime <= 0 && (this.successCb && this.successCb(), !0));
  };

  return t;
}();

cc._RF.pop();