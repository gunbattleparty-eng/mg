
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ResKeeper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFJlc0tlZXBlci5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIlJlc0tlZXBlciIsInIiLCJjYyIsIl9kZWNvcmF0b3IiLCJhIiwiY2NjbGFzcyIsImwiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjYWNoZUFzc2V0cyIsIlNldCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImNhY2hlQXNzZXQiLCJoYXMiLCJhZGRSZWYiLCJhZGQiLCJyZWxlYXNlQXNzZXRzIiwiZm9yRWFjaCIsImRlY1JlZiIsImNsZWFyIiwib25EZXN0cm95IiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixLQUFLLENBQXpCO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxXQUFGLEdBQWdCLElBQUlDLEdBQUosRUFBaEI7SUFDQSxPQUFPSixDQUFQO0VBQ0g7O0VBQ0RLLFNBQVMsQ0FBQ0wsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxVQUFaLEdBQXlCLFVBQVVSLENBQVYsRUFBYTtJQUNsQyxJQUFJLENBQUMsS0FBS0ksV0FBTCxDQUFpQkssR0FBakIsQ0FBcUJULENBQXJCLENBQUwsRUFBOEI7TUFDMUJBLENBQUMsQ0FBQ1UsTUFBRjtNQUNBLEtBQUtOLFdBQUwsQ0FBaUJPLEdBQWpCLENBQXFCWCxDQUFyQjtJQUNIO0VBQ0osQ0FMRDs7RUFNQUMsQ0FBQyxDQUFDTSxTQUFGLENBQVlLLGFBQVosR0FBNEIsWUFBWTtJQUNwQyxLQUFLUixXQUFMLENBQWlCUyxPQUFqQixDQUF5QixVQUFVYixDQUFWLEVBQWE7TUFDbENBLENBQUMsQ0FBQ2MsTUFBRjtJQUNILENBRkQ7SUFHQSxLQUFLVixXQUFMLENBQWlCVyxLQUFqQjtFQUNILENBTEQ7O0VBTUFkLENBQUMsQ0FBQ00sU0FBRixDQUFZUyxTQUFaLEdBQXdCLFlBQVk7SUFDaEMsS0FBS0osYUFBTDtFQUNILENBRkQ7O0VBR0EsT0FBT0ssVUFBVSxDQUFDLENBQUNyQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBdkJELENBdUJHUCxFQUFFLENBQUN3QixTQXZCTixDQUZDLENBQUw7QUEwQkEzQixPQUFPLENBQUNDLFNBQVIsR0FBb0JNLENBQXBCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxuZXhwb3J0cy5SZXNLZWVwZXIgPSB2b2lkIDA7XHJcbnZhciByID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGEgPSByLmNjY2xhc3M7XHJcbnZhciBsID1cclxuICAgIChyLnByb3BlcnR5LFxyXG4gICAgKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XHJcbiAgICAgICAgICAgIGUuY2FjaGVBc3NldHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICAgICAgZS5wcm90b3R5cGUuY2FjaGVBc3NldCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYWNoZUFzc2V0cy5oYXModCkpIHtcclxuICAgICAgICAgICAgICAgIHQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlQXNzZXRzLmFkZCh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUucmVsZWFzZUFzc2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZUFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB0LmRlY1JlZigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZUFzc2V0cy5jbGVhcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2VBc3NldHMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFthXSwgZSk7XHJcbiAgICB9KShjYy5Db21wb25lbnQpKTtcclxuZXhwb3J0cy5SZXNLZWVwZXIgPSBsO1xyXG4iXX0=