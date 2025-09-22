const Api     = require('scripts/core/ApiClient');
const Storage = require('scripts/core/Storage');

const AuthService = {
  async register({email, password}){
    return Api.post('auth/register', {email, password});
  },
  async login({email, password}){
    const res = await Api.post('auth/login', {email, password});
    if (res && res.token){
      Storage.setToken(res.token);
      if (res.user) Storage.setPlayer(res.user);
    }
    return res;
  },
  async me(){
    const me = await Api.get('me');
    Storage.setPlayer(me || {});
    return me;
  },
  logout(){ Storage.clear(); }
};
module.exports = AuthService;
