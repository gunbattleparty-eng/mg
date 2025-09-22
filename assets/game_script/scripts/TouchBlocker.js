var o;
var r = cc._decorator;
var a = r.ccclass;
var l = r.property;
var c = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.target = null;
        e.isBlockAll = !1;
        e.isPassAll = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.registerEvent();
    };
    e.prototype.start = function () {
        this.reset();
    };
    e.prototype.onDestroy = function () {
        this.unregisterEvent();
    };
    e.prototype.registerEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEvent, this);
    };
    e.prototype.unregisterEvent = function () {
        this.node.targetOff(this);
    };
    e.prototype.reset = function () {
        this.setSwallowTouches(!1);
    };
    e.prototype.onTouchEvent = function (t) {
        if (!this.isPassAll) {
            !this.isBlockAll && this.target
                ? cc.isValid(this.target) &&
                  (this.target.getBoundingBoxToWorld().contains(t.getLocation()) || t.stopPropagationImmediate())
                : t.stopPropagationImmediate();
        }
    };
    e.prototype.blockAll = function () {
        this.isBlockAll = !0;
        this.isPassAll = !1;
    };
    e.prototype.passAll = function () {
        this.isPassAll = !0;
        this.isBlockAll = !1;
    };
    e.prototype.setTarget = function (t) {
        this.target = t;
        this.isBlockAll = !1;
        this.isPassAll = !1;
    };
    e.prototype.setSwallowTouches = function (t) {
        if (this.node._touchListener) {
            this.node._touchListener.setSwallowTouches(t);
        }
    };
    __decorate(
        [
            l({
                type: cc.Node
            })
        ],
        e.prototype,
        "target",
        void 0
    );
    return __decorate([a], e);
})(cc.Component);
exports.default = c;
