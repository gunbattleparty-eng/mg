var o;
var r = cc._decorator;
var a = r.ccclass;
var l =
    (r.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e._timeElapsed = 0;
            e.time = 1;
            return e;
        }
        __extends(e, t);
        e.prototype.start = function () {
            this._timeElapsed = 0;
        };
        e.prototype.update = function (t) {
            var e = this.easeOutSine(this._timeElapsed, 1, 0.5, this.time);
            this.node.scale = e;
            this._timeElapsed += t;
            if (this._timeElapsed > this.time) {
                this._timeElapsed = 0;
            }
        };
        e.prototype.easeOutSine = function (t, e, i, o) {
            return i * Math.sin((t / o) * Math.PI) + e;
        };
        return __decorate([a], e);
    })(cc.Component));
exports.default = l;
