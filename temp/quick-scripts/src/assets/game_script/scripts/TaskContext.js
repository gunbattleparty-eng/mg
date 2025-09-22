"use strict";
cc._RF.push(module, '55a2412NxpNyqYUv0EoJgNF', 'TaskContext');
// game_script/scripts/TaskContext.js

"use strict";

var $eventManager = require("./EventManager");

var $storageUtil = require("./StorageUtil");

var $util = require("./Util");

var $startView = require("./StartView");

var $configContext = require("./ConfigContext");

var $localEventName = require("./LocalEventName");

var $localName = require("./LocalName");

var u = function () {
  function t() {
    this.taskRecord = [];
    this.taskTime = 0;
    this.taskRecord = $storageUtil.StorageUtil.getItem($localName["default"].TAKS_RECORD, this.taskRecord);
    this.taskTime = $storageUtil.StorageUtil.getItem($localName["default"].TASK_TIME, this.taskTime);
    var t = $util["default"].startDayTimestamp();

    if (this.taskTime < t) {
      this.taskRecord.length = 0;
      this.taskTime = t;
    }
  }

  Object.defineProperty(t, "Ins", {
    get: function get() {
      if (!t.instance) {
        t.instance = new t();
      }

      return t.instance;
    },
    enumerable: !1,
    configurable: !0
  });

  t.prototype.getTaskRecord = function (t) {
    return this.taskRecord[t - 1] ? this.taskRecord[t - 1] : {
      isGain: !1,
      num: 0
    };
  };

  t.prototype.setTaskRecord = function (t, e) {
    if (void 0 === e) {
      e = 1;
    }

    if (0 !== e) {
      if (!this.taskRecord[t - 1]) {
        this.taskRecord[t - 1] = {
          isGain: !1,
          num: 0
        };
      }

      this.taskRecord[t - 1].num += e;
      $storageUtil.StorageUtil.setItem($localName["default"].TAKS_RECORD, this.taskRecord);
      $eventManager["default"].send($localEventName["default"].RENDER_DOT, $startView.MenuType.Battle);
    }
  };

  t.prototype.hasRedDot = function () {
    for (var t = 0; t < $configContext["default"].instance.taskConfigs.length; t++) {
      var e = $configContext["default"].instance.taskConfigs[t];
      var i = this.getTaskRecord(e.id);

      if (!i.isGain && i.num >= e.target_num) {
        return !0;
      }
    }

    return !1;
  };

  t.prototype.gainTask = function (t) {
    this.taskRecord[t - 1].isGain = !0;
    $storageUtil.StorageUtil.setItem($localName["default"].TASK_TIME, this.taskTime);
  };

  return t;
}();

exports["default"] = u;

cc._RF.pop();