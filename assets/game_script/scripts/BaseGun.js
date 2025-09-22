var o = (function () {
    function t(t) {
        this.pointNode = null;
        this.timeLeft = 0;
        this.isAttacking = !1;
        this.count = 0;
        this.skillId = 1;
        this.releaseing = !1;
        this.schedules = [];
        this.pointNode = t;
    }
    t.prototype.schedulesOnce = function (t, e) {
        this.schedules.push({
            cb: t,
            sec: e
        });
    };
    t.prototype.updateF = function (t) {
        this.count = this.schedules.length;
        for (var e = 0; e < this.count; e++) {
            var i = this.schedules.shift();
            i.sec = i.sec - t;
            i.sec <= 0 ? i.cb() : this.schedules.push(i);
        }
    };
    return t;
})();
exports.default = o;
