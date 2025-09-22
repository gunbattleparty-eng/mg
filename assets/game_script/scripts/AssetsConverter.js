exports.AssetsConverter = void 0;
var $resManager = require("./ResManager");
var $assetsMap = require("./AssetsMap");
var s = (function () {
    function t() {
        this.isInit = !1;
    }
    t.prototype.execute = function () {
        if (this.isInit) {
            console.warn("资源初始化已执行过，请勿重复执行");
        } else {
            var t = Object.keys($assetsMap.AssetsMap.bundleAssetsMap);
            for (var e = 0; e < t.length; e++) {
                var i = $assetsMap.AssetsMap.bundleAssetsMap[t[e]];
                for (var o in i) {
                    var s = i[o];
                    this.assetsLists(t[e], s.assetsType, s.assetsList);
                }
            }
        }
    };
    t.prototype.assetsLists = function (t, e, i) {
        for (var n in i) $resManager.ResManager.instance.putAssets(t, e, i[n]);
    };
    t.instance = new t();
    return t;
})();
exports.AssetsConverter = s;
