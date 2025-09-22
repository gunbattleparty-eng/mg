var o;
exports.PoolKey = void 0;
(o = exports.PoolKey || (exports.PoolKey = {})).HURT = "HURT";
o.BURN = "BURN";
o.FREEZE = "FREEZE";
o.PARALYSIS = "PARALYSIS";
o.THUNDER_PUNCTURE_ANIMS = "THUNDER_PUNCTURE_ANIMS";
o.STUN = "STUN";
o.DIE = "DIE";
o.RECOVER = "Heal";
o.Shield = "Shield";
o.THUNDER_CHAIN_ANIMS = "THUNDER_CHAIN_ANIMS";
var n = (function () {
    function t() {
        this.pools = new Map();
    }
    t.prototype.put = function (t, e) {
        if (!this.pools.has(t)) {
            this.pools.set(t, new cc.NodePool());
        }
        this.pools.get(t).put(e);
    };
    t.prototype.get = function (t) {
        return this.pools.has(t) && this.pools.get(t).size() > 0 ? this.pools.get(t).get() : null;
    };
    t.prototype.clear = function (t) {
        if (this.pools.has(t)) {
            this.pools.get(t).clear();
        }
    };
    t.prototype.clearAll = function () {
        this.pools.forEach(function (t) {
            t.clear();
        });
    };
    t.instance = new t();
    return t;
})();
exports.default = n;
