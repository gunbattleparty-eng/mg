"use strict";
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