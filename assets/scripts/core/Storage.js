// assets/scripts/core/Storage.js
const KEY = {
  TOKEN: 'auth_token',
  PLAYER: 'player_cache',
};
const Storage = {
  setToken(t){ cc.sys.localStorage.setItem(KEY.TOKEN, t || ''); },
  getToken(){ return cc.sys.localStorage.getItem(KEY.TOKEN) || ''; },
  setPlayer(p){ cc.sys.localStorage.setItem(KEY.PLAYER, JSON.stringify(p||{})); },
  getPlayer(){ try { return JSON.parse(cc.sys.localStorage.getItem(KEY.PLAYER)||'{}'); } catch(e){ return {}; } },
  clear(){ Object.values(KEY).forEach(k=>cc.sys.localStorage.removeItem(k)); }
};
module.exports = Storage;
