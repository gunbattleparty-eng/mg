
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/crypto-ts.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15a81feK41HPrD5M0NtMdwp', 'crypto-ts');
// game_script/scripts/crypto-ts.js

"use strict";

exports.SHA256 = exports.AES = exports.mode = exports.pad = exports.enc = exports.algo = exports.lib = void 0;

var $wordArray = require("./WordArray");

var $blockCipher = require("./BlockCipher");

var $cipherParams = require("./CipherParams");

var $hasher = require("./Hasher");

var $serializableCipher = require("./SerializableCipher");

var $passwordBasedCipher = require("./PasswordBasedCipher");

exports.lib = {
  BlockCipher: $blockCipher.BlockCipher,
  WordArray: $wordArray.WordArray,
  CipherParams: $cipherParams.CipherParams,
  Hasher: $hasher.Hasher,
  SerializableCipher: $serializableCipher.SerializableCipher,
  PasswordBasedCipher: $passwordBasedCipher.PasswordBasedCipher
};

var $aES = require("./AES");

var $sHA256 = require("./SHA256");

var $mD5 = require("./MD5");

exports.algo = {
  AES: $aES.AES,
  SHA256: $sHA256.SHA256,
  MD5: $mD5.MD5
};

var $utf8 = require("./Utf8");

var $hex = require("./Hex");

exports.enc = {
  Utf8: $utf8.Utf8,
  Hex: $hex.Hex
};

var $noPadding = require("./NoPadding");

var $pKCS7 = require("./PKCS7");

exports.pad = {
  NoPadding: $noPadding.NoPadding,
  PKCS7: $pKCS7.PKCS7
};

var $cBC = require("./CBC");

var $eCB = require("./ECB");

exports.mode = {
  CBC: $cBC.CBC,
  ECB: $eCB.ECB
};
exports.AES = exports.lib.BlockCipher._createHelper(exports.algo.AES);
exports.SHA256 = exports.lib.Hasher._createHelper(exports.algo.SHA256);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXGNyeXB0by10cy5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiU0hBMjU2IiwiQUVTIiwibW9kZSIsInBhZCIsImVuYyIsImFsZ28iLCJsaWIiLCIkd29yZEFycmF5IiwicmVxdWlyZSIsIiRibG9ja0NpcGhlciIsIiRjaXBoZXJQYXJhbXMiLCIkaGFzaGVyIiwiJHNlcmlhbGl6YWJsZUNpcGhlciIsIiRwYXNzd29yZEJhc2VkQ2lwaGVyIiwiQmxvY2tDaXBoZXIiLCJXb3JkQXJyYXkiLCJDaXBoZXJQYXJhbXMiLCJIYXNoZXIiLCJTZXJpYWxpemFibGVDaXBoZXIiLCJQYXNzd29yZEJhc2VkQ2lwaGVyIiwiJGFFUyIsIiRzSEEyNTYiLCIkbUQ1IiwiTUQ1IiwiJHV0ZjgiLCIkaGV4IiwiVXRmOCIsIkhleCIsIiRub1BhZGRpbmciLCIkcEtDUzciLCJOb1BhZGRpbmciLCJQS0NTNyIsIiRjQkMiLCIkZUNCIiwiQ0JDIiwiRUNCIiwiX2NyZWF0ZUhlbHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxNQUFSLEdBQWlCRCxPQUFPLENBQUNFLEdBQVIsR0FBY0YsT0FBTyxDQUFDRyxJQUFSLEdBQWVILE9BQU8sQ0FBQ0ksR0FBUixHQUFjSixPQUFPLENBQUNLLEdBQVIsR0FBY0wsT0FBTyxDQUFDTSxJQUFSLEdBQWVOLE9BQU8sQ0FBQ08sR0FBUixHQUFjLEtBQUssQ0FBNUc7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlFLGFBQWEsR0FBR0YsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlHLE9BQU8sR0FBR0gsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUksbUJBQW1CLEdBQUdKLE9BQU8sQ0FBQyxzQkFBRCxDQUFqQzs7QUFDQSxJQUFJSyxvQkFBb0IsR0FBR0wsT0FBTyxDQUFDLHVCQUFELENBQWxDOztBQUNBVCxPQUFPLENBQUNPLEdBQVIsR0FBYztFQUNWUSxXQUFXLEVBQUVMLFlBQVksQ0FBQ0ssV0FEaEI7RUFFVkMsU0FBUyxFQUFFUixVQUFVLENBQUNRLFNBRlo7RUFHVkMsWUFBWSxFQUFFTixhQUFhLENBQUNNLFlBSGxCO0VBSVZDLE1BQU0sRUFBRU4sT0FBTyxDQUFDTSxNQUpOO0VBS1ZDLGtCQUFrQixFQUFFTixtQkFBbUIsQ0FBQ00sa0JBTDlCO0VBTVZDLG1CQUFtQixFQUFFTixvQkFBb0IsQ0FBQ007QUFOaEMsQ0FBZDs7QUFRQSxJQUFJQyxJQUFJLEdBQUdaLE9BQU8sQ0FBQyxPQUFELENBQWxCOztBQUNBLElBQUlhLE9BQU8sR0FBR2IsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSWMsSUFBSSxHQUFHZCxPQUFPLENBQUMsT0FBRCxDQUFsQjs7QUFDQVQsT0FBTyxDQUFDTSxJQUFSLEdBQWU7RUFDWEosR0FBRyxFQUFFbUIsSUFBSSxDQUFDbkIsR0FEQztFQUVYRCxNQUFNLEVBQUVxQixPQUFPLENBQUNyQixNQUZMO0VBR1h1QixHQUFHLEVBQUVELElBQUksQ0FBQ0M7QUFIQyxDQUFmOztBQUtBLElBQUlDLEtBQUssR0FBR2hCLE9BQU8sQ0FBQyxRQUFELENBQW5COztBQUNBLElBQUlpQixJQUFJLEdBQUdqQixPQUFPLENBQUMsT0FBRCxDQUFsQjs7QUFDQVQsT0FBTyxDQUFDSyxHQUFSLEdBQWM7RUFDVnNCLElBQUksRUFBRUYsS0FBSyxDQUFDRSxJQURGO0VBRVZDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRTtBQUZBLENBQWQ7O0FBSUEsSUFBSUMsVUFBVSxHQUFHcEIsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSXFCLE1BQU0sR0FBR3JCLE9BQU8sQ0FBQyxTQUFELENBQXBCOztBQUNBVCxPQUFPLENBQUNJLEdBQVIsR0FBYztFQUNWMkIsU0FBUyxFQUFFRixVQUFVLENBQUNFLFNBRFo7RUFFVkMsS0FBSyxFQUFFRixNQUFNLENBQUNFO0FBRkosQ0FBZDs7QUFJQSxJQUFJQyxJQUFJLEdBQUd4QixPQUFPLENBQUMsT0FBRCxDQUFsQjs7QUFDQSxJQUFJeUIsSUFBSSxHQUFHekIsT0FBTyxDQUFDLE9BQUQsQ0FBbEI7O0FBQ0FULE9BQU8sQ0FBQ0csSUFBUixHQUFlO0VBQ1hnQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FEQztFQUVYQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0U7QUFGQyxDQUFmO0FBSUFwQyxPQUFPLENBQUNFLEdBQVIsR0FBY0YsT0FBTyxDQUFDTyxHQUFSLENBQVlRLFdBQVosQ0FBd0JzQixhQUF4QixDQUFzQ3JDLE9BQU8sQ0FBQ00sSUFBUixDQUFhSixHQUFuRCxDQUFkO0FBQ0FGLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQkQsT0FBTyxDQUFDTyxHQUFSLENBQVlXLE1BQVosQ0FBbUJtQixhQUFuQixDQUFpQ3JDLE9BQU8sQ0FBQ00sSUFBUixDQUFhTCxNQUE5QyxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5TSEEyNTYgPSBleHBvcnRzLkFFUyA9IGV4cG9ydHMubW9kZSA9IGV4cG9ydHMucGFkID0gZXhwb3J0cy5lbmMgPSBleHBvcnRzLmFsZ28gPSBleHBvcnRzLmxpYiA9IHZvaWQgMDtcclxudmFyICR3b3JkQXJyYXkgPSByZXF1aXJlKFwiLi9Xb3JkQXJyYXlcIik7XHJcbnZhciAkYmxvY2tDaXBoZXIgPSByZXF1aXJlKFwiLi9CbG9ja0NpcGhlclwiKTtcclxudmFyICRjaXBoZXJQYXJhbXMgPSByZXF1aXJlKFwiLi9DaXBoZXJQYXJhbXNcIik7XHJcbnZhciAkaGFzaGVyID0gcmVxdWlyZShcIi4vSGFzaGVyXCIpO1xyXG52YXIgJHNlcmlhbGl6YWJsZUNpcGhlciA9IHJlcXVpcmUoXCIuL1NlcmlhbGl6YWJsZUNpcGhlclwiKTtcclxudmFyICRwYXNzd29yZEJhc2VkQ2lwaGVyID0gcmVxdWlyZShcIi4vUGFzc3dvcmRCYXNlZENpcGhlclwiKTtcclxuZXhwb3J0cy5saWIgPSB7XHJcbiAgICBCbG9ja0NpcGhlcjogJGJsb2NrQ2lwaGVyLkJsb2NrQ2lwaGVyLFxyXG4gICAgV29yZEFycmF5OiAkd29yZEFycmF5LldvcmRBcnJheSxcclxuICAgIENpcGhlclBhcmFtczogJGNpcGhlclBhcmFtcy5DaXBoZXJQYXJhbXMsXHJcbiAgICBIYXNoZXI6ICRoYXNoZXIuSGFzaGVyLFxyXG4gICAgU2VyaWFsaXphYmxlQ2lwaGVyOiAkc2VyaWFsaXphYmxlQ2lwaGVyLlNlcmlhbGl6YWJsZUNpcGhlcixcclxuICAgIFBhc3N3b3JkQmFzZWRDaXBoZXI6ICRwYXNzd29yZEJhc2VkQ2lwaGVyLlBhc3N3b3JkQmFzZWRDaXBoZXJcclxufTtcclxudmFyICRhRVMgPSByZXF1aXJlKFwiLi9BRVNcIik7XHJcbnZhciAkc0hBMjU2ID0gcmVxdWlyZShcIi4vU0hBMjU2XCIpO1xyXG52YXIgJG1ENSA9IHJlcXVpcmUoXCIuL01ENVwiKTtcclxuZXhwb3J0cy5hbGdvID0ge1xyXG4gICAgQUVTOiAkYUVTLkFFUyxcclxuICAgIFNIQTI1NjogJHNIQTI1Ni5TSEEyNTYsXHJcbiAgICBNRDU6ICRtRDUuTUQ1XHJcbn07XHJcbnZhciAkdXRmOCA9IHJlcXVpcmUoXCIuL1V0ZjhcIik7XHJcbnZhciAkaGV4ID0gcmVxdWlyZShcIi4vSGV4XCIpO1xyXG5leHBvcnRzLmVuYyA9IHtcclxuICAgIFV0Zjg6ICR1dGY4LlV0ZjgsXHJcbiAgICBIZXg6ICRoZXguSGV4XHJcbn07XHJcbnZhciAkbm9QYWRkaW5nID0gcmVxdWlyZShcIi4vTm9QYWRkaW5nXCIpO1xyXG52YXIgJHBLQ1M3ID0gcmVxdWlyZShcIi4vUEtDUzdcIik7XHJcbmV4cG9ydHMucGFkID0ge1xyXG4gICAgTm9QYWRkaW5nOiAkbm9QYWRkaW5nLk5vUGFkZGluZyxcclxuICAgIFBLQ1M3OiAkcEtDUzcuUEtDUzdcclxufTtcclxudmFyICRjQkMgPSByZXF1aXJlKFwiLi9DQkNcIik7XHJcbnZhciAkZUNCID0gcmVxdWlyZShcIi4vRUNCXCIpO1xyXG5leHBvcnRzLm1vZGUgPSB7XHJcbiAgICBDQkM6ICRjQkMuQ0JDLFxyXG4gICAgRUNCOiAkZUNCLkVDQlxyXG59O1xyXG5leHBvcnRzLkFFUyA9IGV4cG9ydHMubGliLkJsb2NrQ2lwaGVyLl9jcmVhdGVIZWxwZXIoZXhwb3J0cy5hbGdvLkFFUyk7XHJcbmV4cG9ydHMuU0hBMjU2ID0gZXhwb3J0cy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoZXhwb3J0cy5hbGdvLlNIQTI1Nik7XHJcbiJdfQ==