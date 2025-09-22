var o;
exports.cObject = exports.MaskBitByGroup = exports.GroupIdxByName = exports.Dirty = exports.Trigger = void 0;
var r;
var a;
var l;
var c;
var $collider = require("./Collider");
var $shape = require("./Shape");
var p = cc._decorator;
var f = p.ccclass;
var h = p.property;
cc.Enum($shape.ShapeType);
(c = r = exports.Trigger || (exports.Trigger = {}))[(c.default = 0)] = "default";
c[(c.enter = 1)] = "enter";
c[(c.stay = 2)] = "stay";
c[(c.exit = 3)] = "exit";
(l = a = exports.Dirty || (exports.Dirty = {}))[(l.R = 1)] = "R";
l[(l.T = 2)] = "T";
l[(l.S = 4)] = "S";
l[(l.RTS = 7)] = "RTS";
l[(l.RS = 5)] = "RS";
l[(l.NON = 0)] = "NON";
exports.GroupIdxByName = function (t) {
    var e = cc.game.groupList.indexOf(t);
    return e >= 0 ? 1 << e : 0;
};
exports.MaskBitByGroup = function (t) {
    var e = 0;
    var i = cc.game.collisionMatrix[t];
    for (var o = 0; o < i.length; o++) {
        if (i[o]) {
            e |= 1 << o;
        }
    }
    return e;
};
var m = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.trigger = !1;
        e._type = $shape.ShapeType.Box;
        e.center = new cc.Vec3();
        e.size = new cc.Vec3();
        e.radius = 0;
        e.points = [];
        e.agent = !1;
        e.priority = 0;
        e.maxRadius = 0;
        e.maxVelocity = 0;
        e.velocity = new cc.Vec3(0, 0, 0);
        e.speed = 0;
        e.angle = 0;
        e.isDirty = a.RTS;
        e.shape = null;
        e.body = null;
        e._worldScale = new cc.Vec3();
        e._worldRTMat3 = new cc.Mat3();
        e._worldMatrix = new cc.Mat4();
        e._worldPosition = new cc.Vec3();
        e._worldRotation = new cc.Quat();
        e._scale = new cc.Vec3();
        e._rotation = new cc.Quat();
        e._position = new cc.Vec3();
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (t) {
            if (this._type != t) {
                this._type = t;
            }
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.onLoad = function () {
        switch (this.type) {
            case $shape.ShapeType.Box:
                this.shape = new $shape.cBox(this.center, this.size);
                break;
            case $shape.ShapeType.Sphere:
                this.shape = new $shape.cSphere(this.center, this.radius);
                break;
            case $shape.ShapeType.Polygon:
                this.shape = new $shape.cPolygon(this.center, this.points);
        }
        this.body = $collider.cCollider.inst.create(this);
        this.body.isAgent = this.agent;
        this.body.priority = this.priority;
        this.body.neighborDist = this.maxRadius;
        this.body.maxVelocity = this.maxVelocity;
        this.body.shape = this.shape;
        this.body.group = 1 << this.node.groupIndex;
        this.body.mask = exports.MaskBitByGroup(this.node.groupIndex);
        $collider.cCollider.inst.insert(this.body);
        this.isDirty = a.RTS;
    };
    Object.defineProperty(e.prototype, "worldScale", {
        get: function () {
            this.updateWorldRTS();
            return this._worldScale;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "worldPosition", {
        get: function () {
            this.updateWorldRTS();
            return this._worldPosition;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "worldRotation", {
        get: function () {
            this.updateWorldRTS();
            return this._worldRotation;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "worldRotatioMat3", {
        get: function () {
            this.updateWorldRTS();
            return this._worldRTMat3;
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.setAnchor = function (t) {
        var e = this.center;
        var i = this.shape.center;
        this.node.setAnchorPoint(t);
        var o = this.node.getContentSize();
        i.x = (0.5 - t.x) * o.width + e.x;
        i.y = (0.5 - t.y) * o.height + e.y;
        this.isDirty |= a.T;
    };
    e.prototype.setAngle = function (t) {
        this.node.angle = t;
        this.isDirty |= a.R;
    };
    e.prototype.getAngle = function () {
        return this.node.angle;
    };
    e.prototype.setPosition = function (t) {
        this.node.setPosition(t);
        this.isDirty |= a.T;
    };
    e.prototype.setRotation = function (t) {
        this.node.setRotation(t);
        this.isDirty |= a.R;
    };
    e.prototype.setScale = function (t) {
        this.node.setScale(t);
        this.isDirty |= a.S;
    };
    e.prototype.getRotation = function () {
        this.node.getRotation(this._rotation);
        return this._rotation;
    };
    e.prototype.getPosition = function () {
        this.node.getPosition(this._position);
        return this._position;
    };
    e.prototype.getScale = function () {
        this.node.getScale(this._scale);
        return this._scale;
    };
    e.prototype.remove = function (t) {
        if (void 0 === t) {
            t = !0;
        }
        $collider.cCollider.inst.remove(this.body, t);
        this.node.removeFromParent(!1);
        return this.node;
    };
    e.prototype.insert = function (t) {
        $collider.cCollider.inst.insert(this.body, !0);
        if (this.node.parent != t) {
            t.addChild(this.node);
        }
    };
    e.prototype.setAnimation = function () {};
    e.prototype.setColor = function () {};
    e.prototype.init = function () {};
    e.prototype.onTrigger = function (t, e) {
        switch (e) {
            case r.enter:
            case r.stay:
            case r.exit:
        }
    };
    e.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        this.shape = null;
        this.body = null;
    };
    e.prototype.updateWorldRTS = function (t) {
        if (void 0 === t) {
            t = a.NON;
        }
        if ((t |= this.isDirty) != a.NON) {
            this.node._calculWorldMatrix();
            var e = this.node._worldMatrix.m;
            if (t & a.T) {
                var i = this._worldPosition;
                i.x = e[12];
                i.y = e[13];
                i.z = e[14];
            }
            var o = this._worldScale;
            if (t & a.S) {
                o.x = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
                o.y = Math.sqrt(e[4] * e[4] + e[5] * e[5] + e[6] * e[6]);
                o.z = Math.sqrt(e[8] * e[8] + e[9] * e[9] + e[10] * e[10]);
            }
            var n = this._worldRTMat3.m;
            if (t & a.R) {
                var s = 1 / o.x;
                var r = 1 / o.y;
                var l = 1 / o.z;
                n[0] = e[0] * s;
                n[1] = e[1] * s;
                n[2] = e[2] * s;
                n[3] = e[4] * r;
                n[4] = e[5] * r;
                n[5] = e[6] * r;
                n[6] = e[8] * l;
                n[7] = e[9] * l;
                n[8] = e[10] * l;
                cc.Quat.fromMat3(this._worldRotation, this._worldRTMat3);
            }
        }
    };
    __decorate([h()], e.prototype, "trigger", void 0);
    __decorate(
        [
            h({
                type: $shape.ShapeType
            })
        ],
        e.prototype,
        "type",
        null
    );
    __decorate([h({})], e.prototype, "center", void 0);
    __decorate(
        [
            h({
                visible: function () {
                    return this.type == $shape.ShapeType.Box;
                }
            })
        ],
        e.prototype,
        "size",
        void 0
    );
    __decorate(
        [
            h({
                visible: function () {
                    return this.type == $shape.ShapeType.Sphere;
                }
            })
        ],
        e.prototype,
        "radius",
        void 0
    );
    __decorate(
        [
            h({
                type: [cc.Vec2],
                visible: function () {
                    return this.type == $shape.ShapeType.Polygon;
                }
            })
        ],
        e.prototype,
        "points",
        void 0
    );
    __decorate([h()], e.prototype, "agent", void 0);
    __decorate(
        [
            h({
                type: cc.Integer,
                visible: function () {
                    return this.agent;
                }
            })
        ],
        e.prototype,
        "priority",
        void 0
    );
    __decorate(
        [
            h({
                visible: function () {
                    return this.agent;
                }
            })
        ],
        e.prototype,
        "maxRadius",
        void 0
    );
    __decorate(
        [
            h({
                visible: function () {
                    return this.agent;
                }
            })
        ],
        e.prototype,
        "maxVelocity",
        void 0
    );
    __decorate([h()], e.prototype, "velocity", void 0);
    return __decorate([f], e);
})(cc.Component);
exports.cObject = m;
