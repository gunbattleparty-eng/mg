
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/GlobalHttp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5771hU72pPfqi3xh01G5hu', 'GlobalHttp');
// game_script/scripts/GlobalHttp.js

"use strict";

exports.GlobalHttp = void 0;

var $util = require("./Util");

var n = function () {
  function t() {}

  t.init = function () {
    fly.config.timeout = 3e3;
    fly.interceptors.request.use(t.onSend);
    fly.interceptors.response.use(t.onSucceed, t.onError);
  };

  t.onSend = function (t) {
    if (!(t.url.includes("/rank") || t.url.includes("/auth"))) {
      t.headers["Content-Type"] = "application/json";
    }
  };

  t.onSucceed = function (t) {
    var e = t.data;

    if ($util["default"].isJSON(e)) {
      e = JSON.parse(e);
    }

    return e;
  };

  t.onError = function (t) {
    throw new Error("接口请求失败:" + JSON.stringify(t));
  };

  return t;
}();

exports.GlobalHttp = n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEdsb2JhbEh0dHAuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIkdsb2JhbEh0dHAiLCIkdXRpbCIsInJlcXVpcmUiLCJuIiwidCIsImluaXQiLCJmbHkiLCJjb25maWciLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsIm9uU2VuZCIsInJlc3BvbnNlIiwib25TdWNjZWVkIiwib25FcnJvciIsInVybCIsImluY2x1ZGVzIiwiaGVhZGVycyIsImUiLCJkYXRhIiwiaXNKU09OIiwiSlNPTiIsInBhcnNlIiwiRXJyb3IiLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixLQUFLLENBQTFCOztBQUNBLElBQUlDLEtBQUssR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBbkI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsSUFBRixHQUFTLFlBQVk7SUFDakJDLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxPQUFYLEdBQXFCLEdBQXJCO0lBQ0FGLEdBQUcsQ0FBQ0csWUFBSixDQUFpQkMsT0FBakIsQ0FBeUJDLEdBQXpCLENBQTZCUCxDQUFDLENBQUNRLE1BQS9CO0lBQ0FOLEdBQUcsQ0FBQ0csWUFBSixDQUFpQkksUUFBakIsQ0FBMEJGLEdBQTFCLENBQThCUCxDQUFDLENBQUNVLFNBQWhDLEVBQTJDVixDQUFDLENBQUNXLE9BQTdDO0VBQ0gsQ0FKRDs7RUFLQVgsQ0FBQyxDQUFDUSxNQUFGLEdBQVcsVUFBVVIsQ0FBVixFQUFhO0lBQ3BCLElBQUksRUFBRUEsQ0FBQyxDQUFDWSxHQUFGLENBQU1DLFFBQU4sQ0FBZSxPQUFmLEtBQTJCYixDQUFDLENBQUNZLEdBQUYsQ0FBTUMsUUFBTixDQUFlLE9BQWYsQ0FBN0IsQ0FBSixFQUEyRDtNQUN2RGIsQ0FBQyxDQUFDYyxPQUFGLENBQVUsY0FBVixJQUE0QixrQkFBNUI7SUFDSDtFQUNKLENBSkQ7O0VBS0FkLENBQUMsQ0FBQ1UsU0FBRixHQUFjLFVBQVVWLENBQVYsRUFBYTtJQUN2QixJQUFJZSxDQUFDLEdBQUdmLENBQUMsQ0FBQ2dCLElBQVY7O0lBQ0EsSUFBSW5CLEtBQUssV0FBTCxDQUFjb0IsTUFBZCxDQUFxQkYsQ0FBckIsQ0FBSixFQUE2QjtNQUN6QkEsQ0FBQyxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osQ0FBWCxDQUFKO0lBQ0g7O0lBQ0QsT0FBT0EsQ0FBUDtFQUNILENBTkQ7O0VBT0FmLENBQUMsQ0FBQ1csT0FBRixHQUFZLFVBQVVYLENBQVYsRUFBYTtJQUNyQixNQUFNLElBQUlvQixLQUFKLENBQVUsWUFBWUYsSUFBSSxDQUFDRyxTQUFMLENBQWVyQixDQUFmLENBQXRCLENBQU47RUFDSCxDQUZEOztFQUdBLE9BQU9BLENBQVA7QUFDSCxDQXZCTyxFQUFSOztBQXdCQUwsT0FBTyxDQUFDQyxVQUFSLEdBQXFCRyxDQUFyQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5HbG9iYWxIdHRwID0gdm9pZCAwO1xyXG52YXIgJHV0aWwgPSByZXF1aXJlKFwiLi9VdGlsXCIpO1xyXG52YXIgbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0KCkge31cclxuICAgIHQuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmbHkuY29uZmlnLnRpbWVvdXQgPSAzZTM7XHJcbiAgICAgICAgZmx5LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSh0Lm9uU2VuZCk7XHJcbiAgICAgICAgZmx5LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodC5vblN1Y2NlZWQsIHQub25FcnJvcik7XHJcbiAgICB9O1xyXG4gICAgdC5vblNlbmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICghKHQudXJsLmluY2x1ZGVzKFwiL3JhbmtcIikgfHwgdC51cmwuaW5jbHVkZXMoXCIvYXV0aFwiKSkpIHtcclxuICAgICAgICAgICAgdC5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHQub25TdWNjZWVkID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHQuZGF0YTtcclxuICAgICAgICBpZiAoJHV0aWwuZGVmYXVsdC5pc0pTT04oZSkpIHtcclxuICAgICAgICAgICAgZSA9IEpTT04ucGFyc2UoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfTtcclxuICAgIHQub25FcnJvciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5o6l5Y+j6K+35rGC5aSx6LSlOlwiICsgSlNPTi5zdHJpbmdpZnkodCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0O1xyXG59KSgpO1xyXG5leHBvcnRzLkdsb2JhbEh0dHAgPSBuO1xyXG4iXX0=