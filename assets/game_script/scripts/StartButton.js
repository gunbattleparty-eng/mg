var o;
var r = cc._decorator;
var a = r.ccclass;
var l =
    (r.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.delay = 0;
            e.time = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.start = function () {
            this._material = this.node.getComponent(cc.Sprite).getMaterial(0);
        };
        e.prototype.update = function (t) {
            this.delay >= 0
                ? (this.delay -= t)
                : this.node.active &&
                  this._material &&
                  ((this.time += t), this.time >= 1.5 && ((this.delay = 3), (this.time = 0)), this._setShaderTime(t));
        };
        e.prototype._setShaderTime = function () {
            this._material.setProperty("rtime", this.time);
        };
        return __decorate([a], e);
    })(cc.Component));
exports.default = l;
