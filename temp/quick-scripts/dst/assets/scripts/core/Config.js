
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '601e5y6COdOU5nlW/GNiP93', 'Config');
// game_script/scripts/core/Config.js

"use strict";

// assets/scripts/core/Config.js
// 统一配置入口：环境 + API/WS 基址
var Config = {
  ENV: 'dev',
  // dev | prod
  API_BASE: (window.GB_API_BASE || 'http://127.0.0.1:8000/api/').replace(/\/+$/, '/'),
  WS_URL: window.GB_WS_URL || 'ws://127.0.0.1:9502/ws',
  REQ_TIMEOUT: 12000
};
module.exports = Config;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXGNvcmVcXENvbmZpZy5qcyJdLCJuYW1lcyI6WyJDb25maWciLCJFTlYiLCJBUElfQkFTRSIsIndpbmRvdyIsIkdCX0FQSV9CQVNFIiwicmVwbGFjZSIsIldTX1VSTCIsIkdCX1dTX1VSTCIsIlJFUV9USU1FT1VUIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0VBQ2JDLEdBQUcsRUFBRSxLQURRO0VBQ0Q7RUFDWkMsUUFBUSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQiw0QkFBdkIsRUFBcURDLE9BQXJELENBQTZELE1BQTdELEVBQXFFLEdBQXJFLENBRkc7RUFHYkMsTUFBTSxFQUFLSCxNQUFNLENBQUNJLFNBQVAsSUFBc0Isd0JBSHBCO0VBSWJDLFdBQVcsRUFBRTtBQUpBLENBQWY7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixNQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXNzZXRzL3NjcmlwdHMvY29yZS9Db25maWcuanNcbi8vIOe7n+S4gOmFjee9ruWFpeWPo++8mueOr+WigyArIEFQSS9XUyDln7rlnYBcbmNvbnN0IENvbmZpZyA9IHtcbiAgRU5WOiAnZGV2JywgLy8gZGV2IHwgcHJvZFxuICBBUElfQkFTRTogKHdpbmRvdy5HQl9BUElfQkFTRSB8fCAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS8nKS5yZXBsYWNlKC9cXC8rJC8sICcvJykgLFxuICBXU19VUkw6ICAgKHdpbmRvdy5HQl9XU19VUkwgICB8fCAnd3M6Ly8xMjcuMC4wLjE6OTUwMi93cycpLFxuICBSRVFfVElNRU9VVDogMTIwMDBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZztcbiJdfQ==