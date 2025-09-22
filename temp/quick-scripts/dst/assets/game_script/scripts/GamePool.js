
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/GamePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '845dapoVl5MP6f1WeM4bfRW', 'GamePool');
// game_script/scripts/GamePool.js

"use strict";

var o;
exports.PoolKey = void 0;
(o = exports.PoolKey || (exports.PoolKey = {})).HURT = "HURT";
o.BURN = "BURN";
o.FREEZE = "FREEZE";
o.PARALYSIS = "PARALYSIS";
o.THUNDER_PUNCTURE_ANIMS = "THUNDER_PUNCTURE_ANIMS";
o.STUN = "STUN";
o.DIE = "DIE";
o.RECOVER = "Heal";
o.Shield = "Shield";
o.THUNDER_CHAIN_ANIMS = "THUNDER_CHAIN_ANIMS";

var n = function () {
  function t() {
    this.pools = new Map();
  }

  t.prototype.put = function (t, e) {
    if (!this.pools.has(t)) {
      this.pools.set(t, new cc.NodePool());
    }

    this.pools.get(t).put(e);
  };

  t.prototype.get = function (t) {
    return this.pools.has(t) && this.pools.get(t).size() > 0 ? this.pools.get(t).get() : null;
  };

  t.prototype.clear = function (t) {
    if (this.pools.has(t)) {
      this.pools.get(t).clear();
    }
  };

  t.prototype.clearAll = function () {
    this.pools.forEach(function (t) {
      t.clear();
    });
  };

  t.instance = new t();
  return t;
}();

exports["default"] = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEdhbWVQb29sLmpzIl0sIm5hbWVzIjpbIm8iLCJleHBvcnRzIiwiUG9vbEtleSIsIkhVUlQiLCJCVVJOIiwiRlJFRVpFIiwiUEFSQUxZU0lTIiwiVEhVTkRFUl9QVU5DVFVSRV9BTklNUyIsIlNUVU4iLCJESUUiLCJSRUNPVkVSIiwiU2hpZWxkIiwiVEhVTkRFUl9DSEFJTl9BTklNUyIsIm4iLCJ0IiwicG9vbHMiLCJNYXAiLCJwcm90b3R5cGUiLCJwdXQiLCJlIiwiaGFzIiwic2V0IiwiY2MiLCJOb2RlUG9vbCIsImdldCIsInNpemUiLCJjbGVhciIsImNsZWFyQWxsIiwiZm9yRWFjaCIsImluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsT0FBTyxDQUFDQyxPQUFSLEdBQWtCLEtBQUssQ0FBdkI7QUFDQSxDQUFDRixDQUFDLEdBQUdDLE9BQU8sQ0FBQ0MsT0FBUixLQUFvQkQsT0FBTyxDQUFDQyxPQUFSLEdBQWtCLEVBQXRDLENBQUwsRUFBZ0RDLElBQWhELEdBQXVELE1BQXZEO0FBQ0FILENBQUMsQ0FBQ0ksSUFBRixHQUFTLE1BQVQ7QUFDQUosQ0FBQyxDQUFDSyxNQUFGLEdBQVcsUUFBWDtBQUNBTCxDQUFDLENBQUNNLFNBQUYsR0FBYyxXQUFkO0FBQ0FOLENBQUMsQ0FBQ08sc0JBQUYsR0FBMkIsd0JBQTNCO0FBQ0FQLENBQUMsQ0FBQ1EsSUFBRixHQUFTLE1BQVQ7QUFDQVIsQ0FBQyxDQUFDUyxHQUFGLEdBQVEsS0FBUjtBQUNBVCxDQUFDLENBQUNVLE9BQUYsR0FBWSxNQUFaO0FBQ0FWLENBQUMsQ0FBQ1csTUFBRixHQUFXLFFBQVg7QUFDQVgsQ0FBQyxDQUFDWSxtQkFBRixHQUF3QixxQkFBeEI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsS0FBTCxHQUFhLElBQUlDLEdBQUosRUFBYjtFQUNIOztFQUNERixDQUFDLENBQUNHLFNBQUYsQ0FBWUMsR0FBWixHQUFrQixVQUFVSixDQUFWLEVBQWFLLENBQWIsRUFBZ0I7SUFDOUIsSUFBSSxDQUFDLEtBQUtKLEtBQUwsQ0FBV0ssR0FBWCxDQUFlTixDQUFmLENBQUwsRUFBd0I7TUFDcEIsS0FBS0MsS0FBTCxDQUFXTSxHQUFYLENBQWVQLENBQWYsRUFBa0IsSUFBSVEsRUFBRSxDQUFDQyxRQUFQLEVBQWxCO0lBQ0g7O0lBQ0QsS0FBS1IsS0FBTCxDQUFXUyxHQUFYLENBQWVWLENBQWYsRUFBa0JJLEdBQWxCLENBQXNCQyxDQUF0QjtFQUNILENBTEQ7O0VBTUFMLENBQUMsQ0FBQ0csU0FBRixDQUFZTyxHQUFaLEdBQWtCLFVBQVVWLENBQVYsRUFBYTtJQUMzQixPQUFPLEtBQUtDLEtBQUwsQ0FBV0ssR0FBWCxDQUFlTixDQUFmLEtBQXFCLEtBQUtDLEtBQUwsQ0FBV1MsR0FBWCxDQUFlVixDQUFmLEVBQWtCVyxJQUFsQixLQUEyQixDQUFoRCxHQUFvRCxLQUFLVixLQUFMLENBQVdTLEdBQVgsQ0FBZVYsQ0FBZixFQUFrQlUsR0FBbEIsRUFBcEQsR0FBOEUsSUFBckY7RUFDSCxDQUZEOztFQUdBVixDQUFDLENBQUNHLFNBQUYsQ0FBWVMsS0FBWixHQUFvQixVQUFVWixDQUFWLEVBQWE7SUFDN0IsSUFBSSxLQUFLQyxLQUFMLENBQVdLLEdBQVgsQ0FBZU4sQ0FBZixDQUFKLEVBQXVCO01BQ25CLEtBQUtDLEtBQUwsQ0FBV1MsR0FBWCxDQUFlVixDQUFmLEVBQWtCWSxLQUFsQjtJQUNIO0VBQ0osQ0FKRDs7RUFLQVosQ0FBQyxDQUFDRyxTQUFGLENBQVlVLFFBQVosR0FBdUIsWUFBWTtJQUMvQixLQUFLWixLQUFMLENBQVdhLE9BQVgsQ0FBbUIsVUFBVWQsQ0FBVixFQUFhO01BQzVCQSxDQUFDLENBQUNZLEtBQUY7SUFDSCxDQUZEO0VBR0gsQ0FKRDs7RUFLQVosQ0FBQyxDQUFDZSxRQUFGLEdBQWEsSUFBSWYsQ0FBSixFQUFiO0VBQ0EsT0FBT0EsQ0FBUDtBQUNILENBekJPLEVBQVI7O0FBMEJBYixPQUFPLFdBQVAsR0FBa0JZLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxuZXhwb3J0cy5Qb29sS2V5ID0gdm9pZCAwO1xyXG4obyA9IGV4cG9ydHMuUG9vbEtleSB8fCAoZXhwb3J0cy5Qb29sS2V5ID0ge30pKS5IVVJUID0gXCJIVVJUXCI7XHJcbm8uQlVSTiA9IFwiQlVSTlwiO1xyXG5vLkZSRUVaRSA9IFwiRlJFRVpFXCI7XHJcbm8uUEFSQUxZU0lTID0gXCJQQVJBTFlTSVNcIjtcclxuby5USFVOREVSX1BVTkNUVVJFX0FOSU1TID0gXCJUSFVOREVSX1BVTkNUVVJFX0FOSU1TXCI7XHJcbm8uU1RVTiA9IFwiU1RVTlwiO1xyXG5vLkRJRSA9IFwiRElFXCI7XHJcbm8uUkVDT1ZFUiA9IFwiSGVhbFwiO1xyXG5vLlNoaWVsZCA9IFwiU2hpZWxkXCI7XHJcbm8uVEhVTkRFUl9DSEFJTl9BTklNUyA9IFwiVEhVTkRFUl9DSEFJTl9BTklNU1wiO1xyXG52YXIgbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge1xyXG4gICAgICAgIHRoaXMucG9vbHMgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICB0LnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5wb29scy5oYXModCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wb29scy5zZXQodCwgbmV3IGNjLk5vZGVQb29sKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvb2xzLmdldCh0KS5wdXQoZSk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29scy5oYXModCkgJiYgdGhpcy5wb29scy5nZXQodCkuc2l6ZSgpID4gMCA/IHRoaXMucG9vbHMuZ2V0KHQpLmdldCgpIDogbnVsbDtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbHMuaGFzKHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbHMuZ2V0KHQpLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQucHJvdG90eXBlLmNsZWFyQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9vbHMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB0LmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdC5pbnN0YW5jZSA9IG5ldyB0KCk7XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbjtcclxuIl19