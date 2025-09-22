"use strict";
cc._RF.push(module, '7de65OglQ9GFrgYXaEM5MSQ', 'TaskQueue');
// game_script/scripts/TaskQueue.js

"use strict";

exports.TaskManager = exports.TaskQueue = void 0;

var o = function o(t, e) {
  this.task = t;
  this.priority = e;
};

var n = function () {
  function t() {
    this._curTask = null;
    this._taskQueue = Array();
  }

  t.prototype.pushTask = function (t, e) {
    if (void 0 === e) {
      e = 0;
    }

    var i = new o(t, e);

    if (this._taskQueue.length > 0) {
      for (var n = this._taskQueue.length - 1; n >= 0; --n) {
        if (this._taskQueue[n].priority <= e) {
          return void this._taskQueue.splice(n + 1, 0, i);
        }
      }
    }

    this._taskQueue.splice(0, 0, i);

    if (null == this._curTask) {
      this.executeNextTask();
    }
  };

  t.prototype.clearTask = function () {
    this._curTask = null;
    this._taskQueue.length = 0;
  };

  t.prototype.executeNextTask = function () {
    var t = this;
    var e = this._taskQueue.shift() || null;
    this._curTask = e;

    if (e) {
      e.task(function () {
        e === t._curTask ? t.executeNextTask() : console.warn("your task finish twice!");
      });
    }
  };

  return t;
}();

exports.TaskQueue = n;

var s = function () {
  function t() {
    this._taskQueues = {};
  }

  t.getInstance = function () {
    if (!this._instance) {
      this._instance = new t();
    }

    return this._instance;
  };

  t.destory = function () {
    this._instance = null;
  };

  t.prototype.pushTask = function (t, e) {
    if (void 0 === e) {
      e = 0;
    }

    return this.getTaskQueue().pushTask(t, e);
  };

  t.prototype.pushTaskByTag = function (t, e, i) {
    if (void 0 === i) {
      i = 0;
    }

    return this.getTaskQueue(e).pushTask(t, i);
  };

  t.prototype.clearTaskQueue = function (t) {
    if (void 0 === t) {
      t = 0;
    }

    var e = this._taskQueues[t];

    if (e) {
      e.clearTask();
    }
  };

  t.prototype.clearAllTaskQueue = function () {
    for (var t in this._taskQueues) {
      this._taskQueues[t].clearTask();
    }

    this._taskQueues = {};
  };

  t.prototype.getTaskQueue = function (t) {
    if (void 0 === t) {
      t = 0;
    }

    var e = this._taskQueues[t];

    if (null == e) {
      e = new n();
      this._taskQueues[t] = e;
    }

    return e;
  };

  t._instance = null;
  return t;
}();

exports.TaskManager = s;

cc._RF.pop();