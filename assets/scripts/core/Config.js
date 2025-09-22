// assets/scripts/core/Config.js
// 统一配置入口：环境 + API/WS 基址
const Config = {
  ENV: 'dev', // dev | prod
  API_BASE: (window.GB_API_BASE || 'http://127.0.0.1:8000/api/').replace(/\/+$/, '/') ,
  WS_URL:   (window.GB_WS_URL   || 'ws://127.0.0.1:9502/ws'),
  REQ_TIMEOUT: 12000
};
module.exports = Config;
