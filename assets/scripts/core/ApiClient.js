// assets/scripts/core/ApiClient.js
const Config  = require('./Config');
const Storage = require('./Storage');

function withTimeout(promise, ms){
  return new Promise((resolve,reject)=>{
    const t = setTimeout(()=>reject(new Error('timeout')), ms);
    promise.then(v=>{clearTimeout(t);resolve(v);},e=>{clearTimeout(t);reject(e);});
  });
}

async function request(path, {method='GET', data=null, headers={}} = {}){
  const url = Config.API_BASE + path.replace(/^\/+/,'');
  const token = Storage.getToken();
  const opts = {
    method,
    headers: Object.assign({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token ? {'Authorization': 'Bearer '+token} : {})
    }, headers)
  };
  if(data) opts.body = JSON.stringify(data);
  const res = await withTimeout(fetch(url, opts), Config.REQ_TIMEOUT);
  if(!res.ok){
    const text = await res.text().catch(()=> '');
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return res.json();
}

module.exports = {
  get: (p)=>request(p,{method:'GET'}),
  post:(p,d)=>request(p,{method:'POST', data:d}),
};
