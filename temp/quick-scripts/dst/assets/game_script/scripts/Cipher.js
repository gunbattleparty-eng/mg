
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/Cipher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49fa8pp3vBNXoTWK3xTpiMz', 'Cipher');
// game_script/scripts/Cipher.js

"use strict";

var o;
exports.Cipher = void 0;

var $bufferedBlockAlgorithm = require("./BufferedBlockAlgorithm");

var $serializableCipher = require("./SerializableCipher");

var $passwordBasedCipher = require("./PasswordBasedCipher");

var l = function (t) {
  function e(e, i, o) {
    var n = t.call(this, Object.assign({
      blockSize: 1
    }, o)) || this;
    n._xformMode = e;
    n._key = i;
    n.reset();
    return n;
  }

  __extends(e, t);

  e.createEncryptor = function (t, e) {
    return new this(this._ENC_XFORM_MODE, t, e);
  };

  e.createDecryptor = function (t, e) {
    return new this(this._DEC_XFORM_MODE, t, e);
  };

  e._createHelper = function (t) {
    return {
      encrypt: function encrypt(e, i, o) {
        return "string" == typeof i ? $passwordBasedCipher.PasswordBasedCipher.encrypt(t, e, i, o) : $serializableCipher.SerializableCipher.encrypt(t, e, i, o);
      },
      decrypt: function decrypt(e, i, o) {
        return "string" == typeof i ? $passwordBasedCipher.PasswordBasedCipher.decrypt(t, e, i, o) : $serializableCipher.SerializableCipher.decrypt(t, e, i, o);
      }
    };
  };

  e.prototype.process = function (t) {
    this._append(t);

    return this._process();
  };

  e.prototype.finalize = function (t) {
    if (t) {
      this._append(t);
    }

    return this._doFinalize();
  };

  e._ENC_XFORM_MODE = 1;
  e._DEC_XFORM_MODE = 2;
  e.keySize = 4;
  e.ivSize = 4;
  return e;
}($bufferedBlockAlgorithm.BufferedBlockAlgorithm);

exports.Cipher = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENpcGhlci5qcyJdLCJuYW1lcyI6WyJvIiwiZXhwb3J0cyIsIkNpcGhlciIsIiRidWZmZXJlZEJsb2NrQWxnb3JpdGhtIiwicmVxdWlyZSIsIiRzZXJpYWxpemFibGVDaXBoZXIiLCIkcGFzc3dvcmRCYXNlZENpcGhlciIsImwiLCJ0IiwiZSIsImkiLCJuIiwiY2FsbCIsIk9iamVjdCIsImFzc2lnbiIsImJsb2NrU2l6ZSIsIl94Zm9ybU1vZGUiLCJfa2V5IiwicmVzZXQiLCJfX2V4dGVuZHMiLCJjcmVhdGVFbmNyeXB0b3IiLCJfRU5DX1hGT1JNX01PREUiLCJjcmVhdGVEZWNyeXB0b3IiLCJfREVDX1hGT1JNX01PREUiLCJfY3JlYXRlSGVscGVyIiwiZW5jcnlwdCIsIlBhc3N3b3JkQmFzZWRDaXBoZXIiLCJTZXJpYWxpemFibGVDaXBoZXIiLCJkZWNyeXB0IiwicHJvdG90eXBlIiwicHJvY2VzcyIsIl9hcHBlbmQiLCJfcHJvY2VzcyIsImZpbmFsaXplIiwiX2RvRmluYWxpemUiLCJrZXlTaXplIiwiaXZTaXplIiwiQnVmZmVyZWRCbG9ja0FsZ29yaXRobSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixLQUFLLENBQXRCOztBQUNBLElBQUlDLHVCQUF1QixHQUFHQyxPQUFPLENBQUMsMEJBQUQsQ0FBckM7O0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUdELE9BQU8sQ0FBQyxzQkFBRCxDQUFqQzs7QUFDQSxJQUFJRSxvQkFBb0IsR0FBR0YsT0FBTyxDQUFDLHVCQUFELENBQWxDOztBQUNBLElBQUlHLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxDQUFXQSxDQUFYLEVBQWNDLENBQWQsRUFBaUJWLENBQWpCLEVBQW9CO0lBQ2hCLElBQUlXLENBQUMsR0FDREgsQ0FBQyxDQUFDSSxJQUFGLENBQ0ksSUFESixFQUVJQyxNQUFNLENBQUNDLE1BQVAsQ0FDSTtNQUNJQyxTQUFTLEVBQUU7SUFEZixDQURKLEVBSUlmLENBSkosQ0FGSixLQVFLLElBVFQ7SUFVQVcsQ0FBQyxDQUFDSyxVQUFGLEdBQWVQLENBQWY7SUFDQUUsQ0FBQyxDQUFDTSxJQUFGLEdBQVNQLENBQVQ7SUFDQUMsQ0FBQyxDQUFDTyxLQUFGO0lBQ0EsT0FBT1AsQ0FBUDtFQUNIOztFQUNEUSxTQUFTLENBQUNWLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNXLGVBQUYsR0FBb0IsVUFBVVosQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ2hDLE9BQU8sSUFBSSxJQUFKLENBQVMsS0FBS1ksZUFBZCxFQUErQmIsQ0FBL0IsRUFBa0NDLENBQWxDLENBQVA7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNhLGVBQUYsR0FBb0IsVUFBVWQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0lBQ2hDLE9BQU8sSUFBSSxJQUFKLENBQVMsS0FBS2MsZUFBZCxFQUErQmYsQ0FBL0IsRUFBa0NDLENBQWxDLENBQVA7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNlLGFBQUYsR0FBa0IsVUFBVWhCLENBQVYsRUFBYTtJQUMzQixPQUFPO01BQ0hpQixPQUFPLEVBQUUsaUJBQVVoQixDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLENBQWhCLEVBQW1CO1FBQ3hCLE9BQU8sWUFBWSxPQUFPVSxDQUFuQixHQUNESixvQkFBb0IsQ0FBQ29CLG1CQUFyQixDQUF5Q0QsT0FBekMsQ0FBaURqQixDQUFqRCxFQUFvREMsQ0FBcEQsRUFBdURDLENBQXZELEVBQTBEVixDQUExRCxDQURDLEdBRURLLG1CQUFtQixDQUFDc0Isa0JBQXBCLENBQXVDRixPQUF2QyxDQUErQ2pCLENBQS9DLEVBQWtEQyxDQUFsRCxFQUFxREMsQ0FBckQsRUFBd0RWLENBQXhELENBRk47TUFHSCxDQUxFO01BTUg0QixPQUFPLEVBQUUsaUJBQVVuQixDQUFWLEVBQWFDLENBQWIsRUFBZ0JWLENBQWhCLEVBQW1CO1FBQ3hCLE9BQU8sWUFBWSxPQUFPVSxDQUFuQixHQUNESixvQkFBb0IsQ0FBQ29CLG1CQUFyQixDQUF5Q0UsT0FBekMsQ0FBaURwQixDQUFqRCxFQUFvREMsQ0FBcEQsRUFBdURDLENBQXZELEVBQTBEVixDQUExRCxDQURDLEdBRURLLG1CQUFtQixDQUFDc0Isa0JBQXBCLENBQXVDQyxPQUF2QyxDQUErQ3BCLENBQS9DLEVBQWtEQyxDQUFsRCxFQUFxREMsQ0FBckQsRUFBd0RWLENBQXhELENBRk47TUFHSDtJQVZFLENBQVA7RUFZSCxDQWJEOztFQWNBUyxDQUFDLENBQUNvQixTQUFGLENBQVlDLE9BQVosR0FBc0IsVUFBVXRCLENBQVYsRUFBYTtJQUMvQixLQUFLdUIsT0FBTCxDQUFhdkIsQ0FBYjs7SUFDQSxPQUFPLEtBQUt3QixRQUFMLEVBQVA7RUFDSCxDQUhEOztFQUlBdkIsQ0FBQyxDQUFDb0IsU0FBRixDQUFZSSxRQUFaLEdBQXVCLFVBQVV6QixDQUFWLEVBQWE7SUFDaEMsSUFBSUEsQ0FBSixFQUFPO01BQ0gsS0FBS3VCLE9BQUwsQ0FBYXZCLENBQWI7SUFDSDs7SUFDRCxPQUFPLEtBQUswQixXQUFMLEVBQVA7RUFDSCxDQUxEOztFQU1BekIsQ0FBQyxDQUFDWSxlQUFGLEdBQW9CLENBQXBCO0VBQ0FaLENBQUMsQ0FBQ2MsZUFBRixHQUFvQixDQUFwQjtFQUNBZCxDQUFDLENBQUMwQixPQUFGLEdBQVksQ0FBWjtFQUNBMUIsQ0FBQyxDQUFDMkIsTUFBRixHQUFXLENBQVg7RUFDQSxPQUFPM0IsQ0FBUDtBQUNILENBckRPLENBcURMTix1QkFBdUIsQ0FBQ2tDLHNCQXJEbkIsQ0FBUjs7QUFzREFwQyxPQUFPLENBQUNDLE1BQVIsR0FBaUJLLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxuZXhwb3J0cy5DaXBoZXIgPSB2b2lkIDA7XHJcbnZhciAkYnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IHJlcXVpcmUoXCIuL0J1ZmZlcmVkQmxvY2tBbGdvcml0aG1cIik7XHJcbnZhciAkc2VyaWFsaXphYmxlQ2lwaGVyID0gcmVxdWlyZShcIi4vU2VyaWFsaXphYmxlQ2lwaGVyXCIpO1xyXG52YXIgJHBhc3N3b3JkQmFzZWRDaXBoZXIgPSByZXF1aXJlKFwiLi9QYXNzd29yZEJhc2VkQ2lwaGVyXCIpO1xyXG52YXIgbCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZShlLCBpLCBvKSB7XHJcbiAgICAgICAgdmFyIG4gPVxyXG4gICAgICAgICAgICB0LmNhbGwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHx8IHRoaXM7XHJcbiAgICAgICAgbi5feGZvcm1Nb2RlID0gZTtcclxuICAgICAgICBuLl9rZXkgPSBpO1xyXG4gICAgICAgIG4ucmVzZXQoKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH1cclxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcclxuICAgIGUuY3JlYXRlRW5jcnlwdG9yID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXModGhpcy5fRU5DX1hGT1JNX01PREUsIHQsIGUpO1xyXG4gICAgfTtcclxuICAgIGUuY3JlYXRlRGVjcnlwdG9yID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IHRoaXModGhpcy5fREVDX1hGT1JNX01PREUsIHQsIGUpO1xyXG4gICAgfTtcclxuICAgIGUuX2NyZWF0ZUhlbHBlciA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW5jcnlwdDogZnVuY3Rpb24gKGUsIGksIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkcGFzc3dvcmRCYXNlZENpcGhlci5QYXNzd29yZEJhc2VkQ2lwaGVyLmVuY3J5cHQodCwgZSwgaSwgbylcclxuICAgICAgICAgICAgICAgICAgICA6ICRzZXJpYWxpemFibGVDaXBoZXIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQodCwgZSwgaSwgbyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlY3J5cHQ6IGZ1bmN0aW9uIChlLCBpLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgaVxyXG4gICAgICAgICAgICAgICAgICAgID8gJHBhc3N3b3JkQmFzZWRDaXBoZXIuUGFzc3dvcmRCYXNlZENpcGhlci5kZWNyeXB0KHQsIGUsIGksIG8pXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkc2VyaWFsaXphYmxlQ2lwaGVyLlNlcmlhbGl6YWJsZUNpcGhlci5kZWNyeXB0KHQsIGUsIGksIG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLl9hcHBlbmQodCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3MoKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5maW5hbGl6ZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXBwZW5kKHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9GaW5hbGl6ZSgpO1xyXG4gICAgfTtcclxuICAgIGUuX0VOQ19YRk9STV9NT0RFID0gMTtcclxuICAgIGUuX0RFQ19YRk9STV9NT0RFID0gMjtcclxuICAgIGUua2V5U2l6ZSA9IDQ7XHJcbiAgICBlLml2U2l6ZSA9IDQ7XHJcbiAgICByZXR1cm4gZTtcclxufSkoJGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uQnVmZmVyZWRCbG9ja0FsZ29yaXRobSk7XHJcbmV4cG9ydHMuQ2lwaGVyID0gbDtcclxuIl19