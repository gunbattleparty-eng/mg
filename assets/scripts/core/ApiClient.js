const Config  = require('scripts/core/Config');
const Storage = require('scripts/core/Storage');

function withTimeout(p, ms){
  return new Promise((resolve,reject)=>{
    const t = setTimeout(()=>reject(new Error('timeout')), ms);
    p.then(v=>{clearTimeout(t);resolve(v);},e=>{clearTimeout(t);reject(e);});
  });
}

async function request(path, {method='GET', data=null, headers={}} = {}){
  const url = Config.API_BASE + path.replace(/^\/+/, '');
  const token = Storage.getToken();
  const opts = {
    method,
    headers: Object.assign({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token ? {'Authorization': 'Bearer '+token} : {})
    }, headers)
  };
  if (data) opts.body = JSON.stringify(data);
  const res = await withTimeout(fetch(url, opts), Config.REQ_TIMEOUT);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text().catch(()=> '')}`);
  return res.json();
}

module.exports = {
  get:  (p)=>request(p,{method:'GET'}),
  post: (p,d)=>request(p,{method:'POST', data:d}),
};
