var o = (function () {
    function t() {}
    t.load = function () {
        return new Promise(function (t) {
            t(null);
            return void cc.warn("[EditorAsset]", "该函数只在编辑器环境内有效！");
        });
    };
    return t;
})();
exports.default = o;
