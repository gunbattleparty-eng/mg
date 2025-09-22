var o;
var i = cc._decorator;
var u = i.ccclass;
var f =
    (i.property,
    (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            t.isLoaded = !1;
            return t;
        }
        __extends(t, e);
        t.prototype.onLoad = function () {
            var e = this;
            setTimeout(function () {
                e.isLoaded ? cc.director.loadScene("LoginScene") : (e.isLoaded = !0);
            }, 1e3);
            cc.assetManager.loadBundle("game_script", function () {
                console.log("脚本加载完成");
                e.isLoaded ? cc.director.loadScene("LoginScene") : (e.isLoaded = !0);
            });
        };
        return __decorate([u], t);
    })(cc.Component));
exports.default = f;
