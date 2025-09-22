
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsIkVOViIsIkFQSV9CQVNFIiwid2luZG93IiwiR0JfQVBJX0JBU0UiLCJyZXBsYWNlIiwiV1NfVVJMIiwiR0JfV1NfVVJMIiwiUkVRX1RJTUVPVVQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUc7RUFDYkMsR0FBRyxFQUFFLEtBRFE7RUFDRDtFQUNaQyxRQUFRLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxXQUFQLElBQXNCLGdDQUF2QixFQUF5REMsT0FBekQsQ0FBaUUsTUFBakUsRUFBeUUsR0FBekUsQ0FGRztFQUdiQyxNQUFNLEVBQUtILE1BQU0sQ0FBQ0ksU0FBUCxJQUFzQix3QkFIcEI7RUFJYkMsV0FBVyxFQUFFO0FBSkEsQ0FBZjtBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLE1BQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvc2NyaXB0cy9jb3JlL0NvbmZpZy5qc1xuLy8g57uf5LiA6YWN572u5YWl5Y+j77ya546v5aKDICsgQVBJL1dTIOWfuuWdgFxuY29uc3QgQ29uZmlnID0ge1xuICBFTlY6ICdkZXYnLCAvLyBkZXYgfCBwcm9kXG4gIEFQSV9CQVNFOiAod2luZG93LkdCX0FQSV9CQVNFIHx8ICdodHRwOi8vMTUwLjEyOS44MC43Mzo4MDAwL2FwaS8nKS5yZXBsYWNlKC9cXC8rJC8sICcvJykgLFxuICBXU19VUkw6ICAgKHdpbmRvdy5HQl9XU19VUkwgICB8fCAnd3M6Ly8xMjcuMC4wLjE6OTUwMi93cycpLFxuICBSRVFfVElNRU9VVDogMTIwMDBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZztcbiJdfQ==