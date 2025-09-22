"use strict";
cc._RF.push(module, '4ecaemYAbtLfIVKn++fTl3Q', 'EditorAsset');
// game_script/scripts/EditorAsset.js

"use strict";

var o = function () {
  function t() {}

  t.load = function () {
    return new Promise(function (t) {
      t(null);
      return void cc.warn("[EditorAsset]", "该函数只在编辑器环境内有效！");
    });
  };

  return t;
}();

exports["default"] = o;

cc._RF.pop();