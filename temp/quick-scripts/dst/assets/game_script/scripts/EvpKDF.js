
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/EvpKDF.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5590EHn+NHm79ZV13Zezys', 'EvpKDF');
// game_script/scripts/EvpKDF.js

"use strict";

exports.EvpKDF = void 0;

var $wordArray = require("./WordArray");

var $mD5 = require("./MD5");

var s = function () {
  function t(t) {
    this.cfg = Object.assign({
      keySize: 4,
      hasher: $mD5.MD5,
      iterations: 1
    }, t);
  }

  t.prototype.compute = function (t, e) {
    var i;
    var n = new this.cfg.hasher();

    for (var s = new $wordArray.WordArray(); s.words.length < this.cfg.keySize;) {
      if (i) {
        n.update(i);
      }

      i = n.update(t).finalize(e);
      n.reset();

      for (var r = 1; r < this.cfg.iterations; r++) {
        i = n.finalize(i);
        n.reset();
      }

      s.concat(i);
    }

    s.sigBytes = 4 * this.cfg.keySize;
    return s;
  };

  return t;
}();

exports.EvpKDF = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEV2cEtERi5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiRXZwS0RGIiwiJHdvcmRBcnJheSIsInJlcXVpcmUiLCIkbUQ1IiwicyIsInQiLCJjZmciLCJPYmplY3QiLCJhc3NpZ24iLCJrZXlTaXplIiwiaGFzaGVyIiwiTUQ1IiwiaXRlcmF0aW9ucyIsInByb3RvdHlwZSIsImNvbXB1dGUiLCJlIiwiaSIsIm4iLCJXb3JkQXJyYXkiLCJ3b3JkcyIsImxlbmd0aCIsInVwZGF0ZSIsImZpbmFsaXplIiwicmVzZXQiLCJyIiwiY29uY2F0Iiwic2lnQnl0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixLQUFLLENBQXRCOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsT0FBRCxDQUFsQjs7QUFDQSxJQUFJRSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULENBQVdBLENBQVgsRUFBYztJQUNWLEtBQUtDLEdBQUwsR0FBV0MsTUFBTSxDQUFDQyxNQUFQLENBQ1A7TUFDSUMsT0FBTyxFQUFFLENBRGI7TUFFSUMsTUFBTSxFQUFFUCxJQUFJLENBQUNRLEdBRmpCO01BR0lDLFVBQVUsRUFBRTtJQUhoQixDQURPLEVBTVBQLENBTk8sQ0FBWDtFQVFIOztFQUNEQSxDQUFDLENBQUNRLFNBQUYsQ0FBWUMsT0FBWixHQUFzQixVQUFVVCxDQUFWLEVBQWFVLENBQWIsRUFBZ0I7SUFDbEMsSUFBSUMsQ0FBSjtJQUNBLElBQUlDLENBQUMsR0FBRyxJQUFJLEtBQUtYLEdBQUwsQ0FBU0ksTUFBYixFQUFSOztJQUNBLEtBQUssSUFBSU4sQ0FBQyxHQUFHLElBQUlILFVBQVUsQ0FBQ2lCLFNBQWYsRUFBYixFQUF5Q2QsQ0FBQyxDQUFDZSxLQUFGLENBQVFDLE1BQVIsR0FBaUIsS0FBS2QsR0FBTCxDQUFTRyxPQUFuRSxHQUE4RTtNQUMxRSxJQUFJTyxDQUFKLEVBQU87UUFDSEMsQ0FBQyxDQUFDSSxNQUFGLENBQVNMLENBQVQ7TUFDSDs7TUFDREEsQ0FBQyxHQUFHQyxDQUFDLENBQUNJLE1BQUYsQ0FBU2hCLENBQVQsRUFBWWlCLFFBQVosQ0FBcUJQLENBQXJCLENBQUo7TUFDQUUsQ0FBQyxDQUFDTSxLQUFGOztNQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLbEIsR0FBTCxDQUFTTSxVQUE3QixFQUF5Q1ksQ0FBQyxFQUExQyxFQUE4QztRQUMxQ1IsQ0FBQyxHQUFHQyxDQUFDLENBQUNLLFFBQUYsQ0FBV04sQ0FBWCxDQUFKO1FBQ0FDLENBQUMsQ0FBQ00sS0FBRjtNQUNIOztNQUNEbkIsQ0FBQyxDQUFDcUIsTUFBRixDQUFTVCxDQUFUO0lBQ0g7O0lBQ0RaLENBQUMsQ0FBQ3NCLFFBQUYsR0FBYSxJQUFJLEtBQUtwQixHQUFMLENBQVNHLE9BQTFCO0lBQ0EsT0FBT0wsQ0FBUDtFQUNILENBakJEOztFQWtCQSxPQUFPQyxDQUFQO0FBQ0gsQ0E5Qk8sRUFBUjs7QUErQkFOLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQkksQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuRXZwS0RGID0gdm9pZCAwO1xyXG52YXIgJHdvcmRBcnJheSA9IHJlcXVpcmUoXCIuL1dvcmRBcnJheVwiKTtcclxudmFyICRtRDUgPSByZXF1aXJlKFwiLi9NRDVcIik7XHJcbnZhciBzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQodCkge1xyXG4gICAgICAgIHRoaXMuY2ZnID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5U2l6ZTogNCxcclxuICAgICAgICAgICAgICAgIGhhc2hlcjogJG1ENS5NRDUsXHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdC5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgdGhpcy5jZmcuaGFzaGVyKCk7XHJcbiAgICAgICAgZm9yICh2YXIgcyA9IG5ldyAkd29yZEFycmF5LldvcmRBcnJheSgpOyBzLndvcmRzLmxlbmd0aCA8IHRoaXMuY2ZnLmtleVNpemU7ICkge1xyXG4gICAgICAgICAgICBpZiAoaSkge1xyXG4gICAgICAgICAgICAgICAgbi51cGRhdGUoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSA9IG4udXBkYXRlKHQpLmZpbmFsaXplKGUpO1xyXG4gICAgICAgICAgICBuLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAxOyByIDwgdGhpcy5jZmcuaXRlcmF0aW9uczsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gbi5maW5hbGl6ZShpKTtcclxuICAgICAgICAgICAgICAgIG4ucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLmNvbmNhdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcy5zaWdCeXRlcyA9IDQgKiB0aGlzLmNmZy5rZXlTaXplO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLkV2cEtERiA9IHM7XHJcbiJdfQ==