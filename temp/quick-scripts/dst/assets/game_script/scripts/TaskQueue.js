
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/TaskQueue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFRhc2tRdWV1ZS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiVGFza01hbmFnZXIiLCJUYXNrUXVldWUiLCJvIiwidCIsImUiLCJ0YXNrIiwicHJpb3JpdHkiLCJuIiwiX2N1clRhc2siLCJfdGFza1F1ZXVlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJwdXNoVGFzayIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJleGVjdXRlTmV4dFRhc2siLCJjbGVhclRhc2siLCJzaGlmdCIsImNvbnNvbGUiLCJ3YXJuIiwicyIsIl90YXNrUXVldWVzIiwiZ2V0SW5zdGFuY2UiLCJfaW5zdGFuY2UiLCJkZXN0b3J5IiwiZ2V0VGFza1F1ZXVlIiwicHVzaFRhc2tCeVRhZyIsImNsZWFyVGFza1F1ZXVlIiwiY2xlYXJBbGxUYXNrUXVldWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsV0FBUixHQUFzQkQsT0FBTyxDQUFDRSxTQUFSLEdBQW9CLEtBQUssQ0FBL0M7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHLFNBQUpBLENBQUksQ0FBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0VBQ3BCLEtBQUtDLElBQUwsR0FBWUYsQ0FBWjtFQUNBLEtBQUtHLFFBQUwsR0FBZ0JGLENBQWhCO0FBQ0gsQ0FIRDs7QUFJQSxJQUFJRyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTSixDQUFULEdBQWE7SUFDVCxLQUFLSyxRQUFMLEdBQWdCLElBQWhCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQkMsS0FBSyxFQUF2QjtFQUNIOztFQUNEUCxDQUFDLENBQUNRLFNBQUYsQ0FBWUMsUUFBWixHQUF1QixVQUFVVCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDbkMsSUFBSSxLQUFLLENBQUwsS0FBV0EsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsQ0FBSjtJQUNIOztJQUNELElBQUlTLENBQUMsR0FBRyxJQUFJWCxD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QUFDLENBQUNRLFNBQUYsQ0FBWWlCLGNBQVosR0FBNkIsVUFBVXpCLENBQVYsRUFBYTtJQUN0QyxJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFKO0lBQ0g7O0lBQ0QsSUFBSUMsQ0FBQyxHQUFHLEtBQUtrQixXQUFMLENBQWlCbkIsQ0FBakIsQ0FBUjs7SUFDQSxJQUFJQyxDQUFKLEVBQU87TUFDSEEsQ0FBQyxDQUFDYSxTQUFGO0lBQ0g7RUFDSixDQVJEOztFQVNBZCxDQUFDLENBQUNRLFNBQUYsQ0FBWWtCLGlCQUFaLEdBQWdDLFlBQVk7SUFDeEMsS0FBSyxJQUFJMUIsQ0FBVCxJQUFjLEtBQUttQixXQUFuQjtNQUFnQyxLQUFLQSxXQUFMLENBQWlCbkIsQ0FBakIsRUFBb0JjLFNBQXBCO0lBQWhDOztJQUNBLEtBQUtLLFdBQUwsR0FBbUIsRUFBbkI7RUFDSCxDQUhEOztFQUlBbkIsQ0FBQyxDQUFDUSxTQUFGLENBQVllLFlBQVosR0FBMkIsVUFBVXZCLENBQVYsRUFBYTtJQUNwQyxJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFKO0lBQ0g7O0lBQ0QsSUFBSUMsQ0FBQyxHQUFHLEtBQUtrQixXQUFMLENBQWlCbkIsQ0FBakIsQ0FBUjs7SUFDQSxJQUFJLFFBQVFDLENBQVosRUFBZTtNQUNYQSxDQUFDLEdBQUcsSUFBSUcsQ0FBSixFQUFKO01BQ0EsS0FBS2UsV0FBTCxDQUFpQm5CLENBQWpCLElBQXNCQyxDQUF0QjtJQUNIOztJQUNELE9BQU9BLENBQVA7RUFDSCxDQVZEOztFQVdBRCxDQUFDLENBQUNxQixTQUFGLEdBQWMsSUFBZDtFQUNBLE9BQU9yQixDQUFQO0FBQ0gsQ0FuRE8sRUFBUjs7QUFvREFKLE9BQU8sQ0FBQ0MsV0FBUixHQUFzQnFCLENBQXRCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLlRhc2tNYW5hZ2VyID0gZXhwb3J0cy5UYXNrUXVldWUgPSB2b2lkIDA7XHJcbnZhciBvID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgIHRoaXMudGFzayA9IHQ7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gZTtcclxufTtcclxudmFyIG4gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICB0aGlzLl9jdXJUYXNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLl90YXNrUXVldWUgPSBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgdC5wcm90b3R5cGUucHVzaFRhc2sgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcclxuICAgICAgICAgICAgZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpID0gbmV3IG8odCwgZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Rhc2tRdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSB0aGlzLl90YXNrUXVldWUubGVuZ3RoIC0gMTsgbiA+PSAwOyAtLW4pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90YXNrUXVldWVbbl0ucHJpb3JpdHkgPD0gZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuX3Rhc2tRdWV1ZS5zcGxpY2UobiArIDEsIDAsIGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Rhc2tRdWV1ZS5zcGxpY2UoMCwgMCwgaSk7XHJcbiAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5fY3VyVGFzaykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVOZXh0VGFzaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5jbGVhclRhc2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fY3VyVGFzayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdGFza1F1ZXVlLmxlbmd0aCA9IDA7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZXhlY3V0ZU5leHRUYXNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB2YXIgZSA9IHRoaXMuX3Rhc2tRdWV1ZS5zaGlmdCgpIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY3VyVGFzayA9IGU7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgZS50YXNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGUgPT09IHQuX2N1clRhc2sgPyB0LmV4ZWN1dGVOZXh0VGFzaygpIDogY29uc29sZS53YXJuKFwieW91ciB0YXNrIGZpbmlzaCB0d2ljZSFcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5UYXNrUXVldWUgPSBuO1xyXG52YXIgcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge1xyXG4gICAgICAgIHRoaXMuX3Rhc2tRdWV1ZXMgPSB7fTtcclxuICAgIH1cclxuICAgIHQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyB0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICB0LmRlc3RvcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLnB1c2hUYXNrID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XHJcbiAgICAgICAgICAgIGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYXNrUXVldWUoKS5wdXNoVGFzayh0LCBlKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5wdXNoVGFza0J5VGFnID0gZnVuY3Rpb24gKHQsIGUsIGkpIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBpKSB7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYXNrUXVldWUoZSkucHVzaFRhc2sodCwgaSk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuY2xlYXJUYXNrUXVldWUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcclxuICAgICAgICAgICAgdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlID0gdGhpcy5fdGFza1F1ZXVlc1t0XTtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBlLmNsZWFyVGFzaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5jbGVhckFsbFRhc2tRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciB0IGluIHRoaXMuX3Rhc2tRdWV1ZXMpIHRoaXMuX3Rhc2tRdWV1ZXNbdF0uY2xlYXJUYXNrKCk7XHJcbiAgICAgICAgdGhpcy5fdGFza1F1ZXVlcyA9IHt9O1xyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmdldFRhc2tRdWV1ZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xyXG4gICAgICAgICAgICB0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLl90YXNrUXVldWVzW3RdO1xyXG4gICAgICAgIGlmIChudWxsID09IGUpIHtcclxuICAgICAgICAgICAgZSA9IG5ldyBuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tRdWV1ZXNbdF0gPSBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH07XHJcbiAgICB0Ll9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5UYXNrTWFuYWdlciA9IHM7XHJcbiJdfQ==