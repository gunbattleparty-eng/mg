var o;
var r = cc._decorator;
var a = r.ccclass;
var l =
    (r.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.reuse = function () {};
        e.prototype.unuse = function () {};
        return __decorate([a], e);
    })(cc.Component));
exports.default = l;
