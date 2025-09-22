
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/WeekCardService.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58e1c9SEZNLvr+i/Q+xg3Iy', 'WeekCardService');
// game_script/scripts/WeekCardService.js

"use strict";

var $storageUtil = require("./StorageUtil");

var $util = require("./Util");

var $localName = require("./LocalName");

var r = function () {
  function t() {
    this.weekCardInfo = {
      isLock: !1,
      lockNum: 0,
      time: 0,
      day: 1
    };
    this.weekCardInfo = $storageUtil.StorageUtil.getItem($localName["default"].WEEK_CARD, this.weekCardInfo);
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

  t.prototype.unlock = function () {
    this.weekCardInfo.lockNum++;
    return this.weekCardInfo.lockNum >= 5 && (this.weekCardInfo = {
      isLock: !0,
      lockNum: 0,
      time: 0,
      day: 1
    }, $storageUtil.StorageUtil.setItem($localName["default"].WEEK_CARD, this.weekCardInfo), !0);
  };

  t.prototype.sign = function () {
    this.weekCardInfo.day++;
    this.weekCardInfo.time = $util["default"].startDayTimestamp();
    $storageUtil.StorageUtil.setItem($localName["default"].WEEK_CARD, this.weekCardInfo);
  };

  t.prototype.isLock = function () {
    var t = $util["default"].startDayTimestamp();

    if (this.weekCardInfo.day > 7 && this.weekCardInfo.time < t) {
      this.weekCardInfo.isLock = !1;
    }

    return this.weekCardInfo.isLock;
  };

  t.prototype.isSign = function () {
    var t = $util["default"].startDayTimestamp();
    return this.weekCardInfo.day > 7 || this.weekCardInfo.time >= t;
  };

  return t;
}();

exports["default"] = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXFdlZWtDYXJkU2VydmljZS5qcyJdLCJuYW1lcyI6WyIkc3RvcmFnZVV0aWwiLCJyZXF1aXJlIiwiJHV0aWwiLCIkbG9jYWxOYW1lIiwiciIsInQiLCJ3ZWVrQ2FyZEluZm8iLCJpc0xvY2siLCJsb2NrTnVtIiwidGltZSIsImRheSIsIlN0b3JhZ2VVdGlsIiwiZ2V0SXRlbSIsIldFRUtfQ0FSRCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaW5zdGFuY2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJvdG90eXBlIiwidW5sb2NrIiwic2V0SXRlbSIsInNpZ24iLCJzdGFydERheVRpbWVzdGFtcCIsImlzU2lnbiIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQW5COztBQUNBLElBQUlFLFVBQVUsR0FBR0YsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsWUFBTCxHQUFvQjtNQUNoQkMsTUFBTSxFQUFFLENBQUMsQ0FETztNQUVoQkMsT0FBTyxFQUFFLENBRk87TUFHaEJDLElBQUksRUFBRSxDQUhVO01BSWhCQyxHQUFHLEVBQUU7SUFKVyxDQUFwQjtJQU1BLEtBQUtKLFlBQUwsR0FBb0JOLFlBQVksQ0FBQ1csV0FBYixDQUF5QkMsT0FBekIsQ0FBaUNULFVBQVUsV0FBVixDQUFtQlUsU0FBcEQsRUFBK0QsS0FBS1AsWUFBcEUsQ0FBcEI7RUFDSDs7RUFDRFEsTUFBTSxDQUFDQyxjQUFQLENBQXNCVixDQUF0QixFQUF5QixLQUF6QixFQUFnQztJQUM1QlcsR0FBRyxFQUFFLGVBQVk7TUFDYixJQUFJLENBQUNYLENBQUMsQ0FBQ1ksUUFBUCxFQUFpQjtRQUNiWixDQUFDLENBQUNZLFFBQUYsR0FBYSxJQUFJWixDQUFKLEVBQWI7TUFDSDs7TUFDRCxPQUFPQSxDQUFDLENBQUNZLFFBQVQ7SUFDSCxDQU4yQjtJQU81QkMsVUFBVSxFQUFFLENBQUMsQ0FQZTtJQVE1QkMsWUFBWSxFQUFFLENBQUM7RUFSYSxDQUFoQzs7RUFVQWQsQ0FBQyxDQUFDZSxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3QixLQUFLZixZQUFMLENBQWtCRSxPQUFsQjtJQUNBLE9BQ0ksS0FBS0YsWUFBTCxDQUFrQkUsT0FBbEIsSUFBNkIsQ0FBN0IsS0FDRSxLQUFLRixZQUFMLEdBQW9CO01BQ2xCQyxNQUFNLEVBQUUsQ0FBQyxDQURTO01BRWxCQyxPQUFPLEVBQUUsQ0FGUztNQUdsQkMsSUFBSSxFQUFFLENBSFk7TUFJbEJDLEdBQUcsRUFBRTtJQUphLENBQXJCLEVBTURWLFlBQVksQ0FBQ1csV0FBYixDQUF5QlcsT0FBekIsQ0FBaUNuQixVQUFVLFdBQVYsQ0FBbUJVLFNBQXBELEVBQStELEtBQUtQLFlBQXBFLENBTkMsRUFPRCxDQUFDLENBUkQsQ0FESjtFQVdILENBYkQ7O0VBY0FELENBQUMsQ0FBQ2UsU0FBRixDQUFZRyxJQUFaLEdBQW1CLFlBQVk7SUFDM0IsS0FBS2pCLFlBQUwsQ0FBa0JJLEdBQWxCO0lBQ0EsS0FBS0osWUFBTCxDQUFrQkcsSUFBbEIsR0FBeUJQLEtBQUssV0FBTCxDQUFjc0IsaUJBQWQsRUFBekI7SUFDQXhCLFlBQVksQ0FBQ1csV0FBYixDQUF5QlcsT0FBekIsQ0FBaUNuQixVQUFVLFdBQVYsQ0FBbUJVLFNBQXBELEVBQStELEtBQUtQLFlBQXBFO0VBQ0gsQ0FKRDs7RUFLQUQsQ0FBQyxDQUFDZSxTQUFGLENBQVliLE1BQVosR0FBcUIsWUFBWTtJQUM3QixJQUFJRixDQUFDLEdBQUdILEtBQUssV0FBTCxDQUFjc0IsaUJBQWQsRUFBUjs7SUFDQSxJQUFJLEtBQUtsQixZQUFMLENBQWtCSSxHQUFsQixHQUF3QixDQUF4QixJQUE2QixLQUFLSixZQUFMLENBQWtCRyxJQUFsQixHQUF5QkosQ0FBMUQsRUFBNkQ7TUFDekQsS0FBS0MsWUFBTCxDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBQyxDQUE1QjtJQUNIOztJQUNELE9BQU8sS0FBS0QsWUFBTCxDQUFrQkMsTUFBekI7RUFDSCxDQU5EOztFQU9BRixDQUFDLENBQUNlLFNBQUYsQ0FBWUssTUFBWixHQUFxQixZQUFZO0lBQzdCLElBQUlwQixDQUFDLEdBQUdILEtBQUssV0FBTCxDQUFjc0IsaUJBQWQsRUFBUjtJQUNBLE9BQU8sS0FBS2xCLFlBQUwsQ0FBa0JJLEdBQWxCLEdBQXdCLENBQXhCLElBQTZCLEtBQUtKLFlBQUwsQ0FBa0JHLElBQWxCLElBQTBCSixDQUE5RDtFQUNILENBSEQ7O0VBSUEsT0FBT0EsQ0FBUDtBQUNILENBbkRPLEVBQVI7O0FBb0RBcUIsT0FBTyxXQUFQLEdBQWtCdEIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc3RvcmFnZVV0aWwgPSByZXF1aXJlKFwiLi9TdG9yYWdlVXRpbFwiKTtcclxudmFyICR1dGlsID0gcmVxdWlyZShcIi4vVXRpbFwiKTtcclxudmFyICRsb2NhbE5hbWUgPSByZXF1aXJlKFwiLi9Mb2NhbE5hbWVcIik7XHJcbnZhciByID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHQoKSB7XHJcbiAgICAgICAgdGhpcy53ZWVrQ2FyZEluZm8gPSB7XHJcbiAgICAgICAgICAgIGlzTG9jazogITEsXHJcbiAgICAgICAgICAgIGxvY2tOdW06IDAsXHJcbiAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgIGRheTogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy53ZWVrQ2FyZEluZm8gPSAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuZ2V0SXRlbSgkbG9jYWxOYW1lLmRlZmF1bHQuV0VFS19DQVJELCB0aGlzLndlZWtDYXJkSW5mbyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJJbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXQuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHQuaW5zdGFuY2UgPSBuZXcgdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0Lmluc3RhbmNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogITEsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgfSk7XHJcbiAgICB0LnByb3RvdHlwZS51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53ZWVrQ2FyZEluZm8ubG9ja051bSsrO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMud2Vla0NhcmRJbmZvLmxvY2tOdW0gPj0gNSAmJlxyXG4gICAgICAgICAgICAoKHRoaXMud2Vla0NhcmRJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgaXNMb2NrOiAhMCxcclxuICAgICAgICAgICAgICAgIGxvY2tOdW06IDAsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICAgICAgZGF5OiAxXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAkc3RvcmFnZVV0aWwuU3RvcmFnZVV0aWwuc2V0SXRlbSgkbG9jYWxOYW1lLmRlZmF1bHQuV0VFS19DQVJELCB0aGlzLndlZWtDYXJkSW5mbyksXHJcbiAgICAgICAgICAgICEwKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLndlZWtDYXJkSW5mby5kYXkrKztcclxuICAgICAgICB0aGlzLndlZWtDYXJkSW5mby50aW1lID0gJHV0aWwuZGVmYXVsdC5zdGFydERheVRpbWVzdGFtcCgpO1xyXG4gICAgICAgICRzdG9yYWdlVXRpbC5TdG9yYWdlVXRpbC5zZXRJdGVtKCRsb2NhbE5hbWUuZGVmYXVsdC5XRUVLX0NBUkQsIHRoaXMud2Vla0NhcmRJbmZvKTtcclxuICAgIH07XHJcbiAgICB0LnByb3RvdHlwZS5pc0xvY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSAkdXRpbC5kZWZhdWx0LnN0YXJ0RGF5VGltZXN0YW1wKCk7XHJcbiAgICAgICAgaWYgKHRoaXMud2Vla0NhcmRJbmZvLmRheSA+IDcgJiYgdGhpcy53ZWVrQ2FyZEluZm8udGltZSA8IHQpIHtcclxuICAgICAgICAgICAgdGhpcy53ZWVrQ2FyZEluZm8uaXNMb2NrID0gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtDYXJkSW5mby5pc0xvY2s7XHJcbiAgICB9O1xyXG4gICAgdC5wcm90b3R5cGUuaXNTaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gJHV0aWwuZGVmYXVsdC5zdGFydERheVRpbWVzdGFtcCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtDYXJkSW5mby5kYXkgPiA3IHx8IHRoaXMud2Vla0NhcmRJbmZvLnRpbWUgPj0gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdDtcclxufSkoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gcjtcclxuIl19