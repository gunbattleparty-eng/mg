"use strict";
cc._RF.push(module, '601e5y6COdOU5nlW/GNiP93', 'Config');
// scripts/core/Config.js

"use strict";

// assets/scripts/core/Config.js
// 统一配置入口：环境 + API/WS 基址
var Config = {
  ENV: 'dev',
  // dev | prod
  API_BASE: (window.GB_API_BASE || 'http://150.129.80.73:8000/api/').replace(/\/+$/, '/'),
  WS_URL: window.GB_WS_URL || 'ws://127.0.0.1:9502/ws',
  REQ_TIMEOUT: 12000
};
module.exports = Config;

cc._RF.pop();