var o;
var r;
var a;
var l = cc._decorator;
var c = l.ccclass;
var u = l.property;
var d = l.disallowMultiple;
var p = l.menu;
var f = l.executionOrder;
(a = r || (r = {}))[(a.NONE = 0)] = "NONE";
a[(a.TOGGLE = 1)] = "TOGGLE";
a[(a.SWITCH = 2)] = "SWITCH";
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.selectedMode = r.NONE;
        e.selectedFlag = null;
        e.selectedSpriteFrame = null;
        e._unselectedSpriteFrame = null;
        e.adaptiveSize = !1;
        e._selected = !1;
        e._eventReg = !1;
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (t) {
            this._selected = t;
            if (this.selectedFlag) {
                switch (this.selectedMode) {
                    case r.TOGGLE:
                        this.selectedFlag.active = t;
                        break;
                    case r.SWITCH:
                        var e = this.selectedFlag.getComponent(cc.Sprite);
                        if (e) {
                            e.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                        }
                }
            }
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "btnCom", {
        get: function () {
            if (!this._btnCom) {
                this._btnCom = this.node.getComponent(cc.Button);
            }
            return this._btnCom;
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.onLoad = function () {
        if (this.selectedMode == r.SWITCH) {
            var t = this.selectedFlag.getComponent(cc.Sprite);
            this._unselectedSpriteFrame = t.spriteFrame;
        }
    };
    e.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
    };
    e.prototype._registerEvent = function () {
        if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
                this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis"));
            }
            if (this.adaptiveSize) {
                this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }
            this._eventReg = !0;
        }
    };
    e.prototype._onSizeChange = function () {
        this.list._onItemAdaptive(this.node);
    };
    e.prototype.createEvt = function (t, e, i) {
        if (void 0 === i) {
            i = null;
        }
        if (t.isValid) {
            t.comName =
                t.comName ||
                t.name
                    .match(/\<(.*?)\>/g)
                    .pop()
                    .replace(/\<|>/g, "");
            var o = new cc.Component.EventHandler();
            o.target = i || t.node;
            o.component = t.comName;
            o.handler = e;
            return o;
        }
    };
    e.prototype.showAni = function (t, e, i) {
        var o;
        var n = this;
        switch (t) {
            case 0:
                o = cc
                    .tween(n.node)
                    .to(0.2, {
                        scale: 0.7
                    })
                    .by(0.3, {
                        y: 2 * n.node.height
                    });
                break;
            case 1:
                o = cc
                    .tween(n.node)
                    .to(0.2, {
                        scale: 0.7
                    })
                    .by(0.3, {
                        x: 2 * n.node.width
                    });
                break;
            case 2:
                o = cc
                    .tween(n.node)
                    .to(0.2, {
                        scale: 0.7
                    })
                    .by(0.3, {
                        y: -2 * n.node.height
                    });
                break;
            case 3:
                o = cc
                    .tween(n.node)
                    .to(0.2, {
                        scale: 0.7
                    })
                    .by(0.3, {
                        x: -2 * n.node.width
                    });
                break;
            default:
                o = cc.tween(n.node).to(0.3, {
                    scale: 0.1
                });
        }
        if (e || i) {
            o.call(function () {
                if (i) {
                    n.list._delSingleItem(n.node);
                    for (var t = n.list.displayData.length - 1; t >= 0; t--) {
                        if (n.list.displayData[t].id == n.listId) {
                            n.list.displayData.splice(t, 1);
                            break;
                        }
                    }
                }
                e();
            });
        }
        o.start();
    };
    e.prototype.onClickThis = function () {
        this.list.selectedId = this.listId;
    };
    __decorate(
        [
            u({
                type: cc.Enum(r)
            })
        ],
        e.prototype,
        "selectedMode",
        void 0
    );
    __decorate(
        [
            u({
                type: cc.Node,
                visible: function () {
                    return this.selectedMode > r.NONE;
                }
            })
        ],
        e.prototype,
        "selectedFlag",
        void 0
    );
    __decorate(
        [
            u({
                type: cc.SpriteFrame,
                visible: function () {
                    return this.selectedMode == r.SWITCH;
                }
            })
        ],
        e.prototype,
        "selectedSpriteFrame",
        void 0
    );
    __decorate([u({})], e.prototype, "adaptiveSize", void 0);
    return __decorate([c, d(), p("自定义组件/List Item"), f(-5001)], e);
})(cc.Component);
exports.default = h;
