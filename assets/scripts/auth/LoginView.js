// assets/scripts/auth/LoginView.js
const Auth = require('./AuthService');
cc.Class({
  extends: cc.Component,
  properties:{
    edtEmail:   cc.EditBox,
    edtPass:    cc.EditBox,
    btnLogin:   cc.Node,
    btnRegister:cc.Node,
    lblTips:    cc.Label,
  },
  onLoad(){
    this._busy = false;
    this.lblTips && (this.lblTips.string = '');
    this.btnLogin && this.btnLogin.on('click', ()=>this.onLogin(), this);
    this.btnRegister && this.btnRegister.on('click', ()=>this.onRegister(), this);
  },
  _setBusy(b){ this._busy = !!b; if(this.lblTips) this.lblTips.string = b ? '处理中...' : ''; },
  async onLogin(){
    if(this._busy) return;
    const email = (this.edtEmail && this.edtEmail.string || '').trim();
    const pass  = (this.edtPass  && this.edtPass.string  || '').trim();
    if(!email || !pass){ this._toast('请输入邮箱与密码'); return; }
    try{
      this._setBusy(true);
      await Auth.login({email, password: pass});
      await Auth.me();
      this._toast('登录成功，正在进入游戏...');
      cc.director.loadScene('Main'); // 你的主场景名
    }catch(e){
      this._toast('登录失败：'+ (e && e.message || ''));
    }finally{ this._setBusy(false); }
  },
  async onRegister(){
    if(this._busy) return;
    const email = (this.edtEmail && this.edtEmail.string || '').trim();
    const pass  = (this.edtPass  && this.edtPass.string  || '').trim();
    if(!email || !pass){ this._toast('请输入邮箱与密码'); return; }
    try{
      this._setBusy(true);
      await Auth.register({email, password: pass});
      this._toast('注册成功，请登录');
    }catch(e){
      this._toast('注册失败：'+ (e && e.message || ''));
    }finally{ this._setBusy(false); }
  },
  _toast(msg){ if(this.lblTips) this.lblTips.string = msg; cc.log('[Login]', msg); }
});
