
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/Storage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31c1dyZPG9GpoKBjrwlo10O', 'Storage');
// game_script/scripts/core/Storage.js

"use strict";

// assets/scripts/core/Storage.js
var KEY = {
  TOKEN: 'auth_token',
  PLAYER: 'player_cache'
};
var Storage = {
  setToken: function setToken(t) {
    cc.sys.localStorage.setItem(KEY.TOKEN, t || '');
  },
  getToken: function getToken() {
    return cc.sys.localStorage.getItem(KEY.TOKEN) || '';
  },
  setPlayer: function setPlayer(p) {
    cc.sys.localStorage.setItem(KEY.PLAYER, JSON.stringify(p || {}));
  },
  getPlayer: function getPlayer() {
    try {
      return JSON.parse(cc.sys.localStorage.getItem(KEY.PLAYER) || '{}');
    } catch (e) {
      return {};
    }
  },
  clear: function clear() {
    Object.values(KEY).forEach(function (k) {
      return cc.sys.localStorage.removeItem(k);
    });
  }
};
module.exports = Storage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXGNvcmVcXFN0b3JhZ2UuanMiXSwibmFtZXMiOlsiS0VZIiwiVE9LRU4iLCJQTEFZRVIiLCJTdG9yYWdlIiwic2V0VG9rZW4iLCJ0IiwiY2MiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwic2V0UGxheWVyIiwicCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQbGF5ZXIiLCJwYXJzZSIsImUiLCJjbGVhciIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJrIiwicmVtb3ZlSXRlbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxHQUFHLEdBQUc7RUFDVkMsS0FBSyxFQUFFLFlBREc7RUFFVkMsTUFBTSxFQUFFO0FBRkUsQ0FBWjtBQUlBLElBQU1DLE9BQU8sR0FBRztFQUNkQyxRQURjLG9CQUNMQyxDQURLLEVBQ0g7SUFBRUMsRUFBRSxDQUFDQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCVCxHQUFHLENBQUNDLEtBQWhDLEVBQXVDSSxDQUFDLElBQUksRUFBNUM7RUFBa0QsQ0FEakQ7RUFFZEssUUFGYyxzQkFFSjtJQUFFLE9BQU9KLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QlgsR0FBRyxDQUFDQyxLQUFoQyxLQUEwQyxFQUFqRDtFQUFzRCxDQUZwRDtFQUdkVyxTQUhjLHFCQUdKQyxDQUhJLEVBR0Y7SUFBRVAsRUFBRSxDQUFDQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCVCxHQUFHLENBQUNFLE1BQWhDLEVBQXdDWSxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsQ0FBQyxJQUFFLEVBQWxCLENBQXhDO0VBQWlFLENBSGpFO0VBSWRHLFNBSmMsdUJBSUg7SUFBRSxJQUFJO01BQUUsT0FBT0YsSUFBSSxDQUFDRyxLQUFMLENBQVdYLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QlgsR0FBRyxDQUFDRSxNQUFoQyxLQUF5QyxJQUFwRCxDQUFQO0lBQW1FLENBQXpFLENBQTBFLE9BQU1nQixDQUFOLEVBQVE7TUFBRSxPQUFPLEVBQVA7SUFBWTtFQUFFLENBSmpHO0VBS2RDLEtBTGMsbUJBS1A7SUFBRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNyQixHQUFkLEVBQW1Cc0IsT0FBbkIsQ0FBMkIsVUFBQUMsQ0FBQztNQUFBLE9BQUVqQixFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQmdCLFVBQXBCLENBQStCRCxDQUEvQixDQUFGO0lBQUEsQ0FBNUI7RUFBbUU7QUFMOUQsQ0FBaEI7QUFPQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsT0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9zY3JpcHRzL2NvcmUvU3RvcmFnZS5qc1xuY29uc3QgS0VZID0ge1xuICBUT0tFTjogJ2F1dGhfdG9rZW4nLFxuICBQTEFZRVI6ICdwbGF5ZXJfY2FjaGUnLFxufTtcbmNvbnN0IFN0b3JhZ2UgPSB7XG4gIHNldFRva2VuKHQpeyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLlRPS0VOLCB0IHx8ICcnKTsgfSxcbiAgZ2V0VG9rZW4oKXsgcmV0dXJuIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkuVE9LRU4pIHx8ICcnOyB9LFxuICBzZXRQbGF5ZXIocCl7IGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVkuUExBWUVSLCBKU09OLnN0cmluZ2lmeShwfHx7fSkpOyB9LFxuICBnZXRQbGF5ZXIoKXsgdHJ5IHsgcmV0dXJuIEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWS5QTEFZRVIpfHwne30nKTsgfSBjYXRjaChlKXsgcmV0dXJuIHt9OyB9IH0sXG4gIGNsZWFyKCl7IE9iamVjdC52YWx1ZXMoS0VZKS5mb3JFYWNoKGs9PmNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKSk7IH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JhZ2U7XG4iXX0=