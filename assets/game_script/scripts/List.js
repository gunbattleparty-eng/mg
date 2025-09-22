var o;
var r;
var a;
var l;
var c;
var u;
var d;
var p = cc._decorator;
var f = p.ccclass;
var h = p.property;
var m = p.disallowMultiple;
var y = p.menu;
var g = p.executionOrder;
var _ = p.requireComponent;
var $listItem = require("./ListItem");
(d = r || (r = {}))[(d.NODE = 1)] = "NODE";
d[(d.PREFAB = 2)] = "PREFAB";
(u = a || (a = {}))[(u.NORMAL = 1)] = "NORMAL";
u[(u.ADHERING = 2)] = "ADHERING";
u[(u.PAGE = 3)] = "PAGE";
(c = l || (l = {}))[(c.NONE = 0)] = "NONE";
c[(c.SINGLE = 1)] = "SINGLE";
c[(c.MULT = 2)] = "MULT";
var v = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.templateType = r.NODE;
        e.tmpNode = null;
        e.tmpPrefab = null;
        e._slideMode = a.NORMAL;
        e.pageDistance = 0.3;
        e.pageChangeEvent = new cc.Component.EventHandler();
        e._virtual = !0;
        e.cyclic = !1;
        e.lackCenter = !1;
        e.lackSlide = !1;
        e._updateRate = 0;
        e.frameByFrameRenderNum = 0;
        e.renderEvent = new cc.Component.EventHandler();
        e.selectedMode = l.NONE;
        e.repeatEventSingle = !1;
        e.selectedEvent = new cc.Component.EventHandler();
        e._selectedId = -1;
        e._forceUpdate = !1;
        e._updateDone = !0;
        e._numItems = 0;
        e._inited = !1;
        e._needUpdateWidget = !1;
        e._aniDelRuning = !1;
        e._doneAfterUpdate = !1;
        e.adhering = !1;
        e._adheringBarrier = !1;
        e.curPageNum = 0;
        return e;
    }
    __extends(e, t);
    Object.defineProperty(e.prototype, "slideMode", {
        get: function () {
            return this._slideMode;
        },
        set: function (t) {
            this._slideMode = t;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        set: function (t) {
            if (null != t) {
                this._virtual = t;
            }
            if (0 != this._numItems) {
                this._onScrolling();
            }
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "updateRate", {
        get: function () {
            return this._updateRate;
        },
        set: function (t) {
            if (t >= 0 && t <= 6) {
                this._updateRate = t;
            }
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "selectedId", {
        get: function () {
            return this._selectedId;
        },
        set: function (t) {
            var e;
            var i = this;
            switch (i.selectedMode) {
                case l.SINGLE:
                    if (!i.repeatEventSingle && t == i._selectedId) {
                        return;
                    }
                    e = i.getItemByListId(t);
                    var o = void 0;
                    i._selectedId >= 0 ? (i._lastSelectedId = i._selectedId) : (i._lastSelectedId = null);
                    i._selectedId = t;
                    if (e) {
                        (o = e.getComponent($listItem.default)).selected = !0;
                    }
                    if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
                        var n = i.getItemByListId(i._lastSelectedId);
                        if (n) {
                            n.getComponent($listItem.default).selected = !1;
                        }
                    }
                    if (i.selectedEvent) {
                        cc.Component.EventHandler.emitEvents(
                            [i.selectedEvent],
                            e,
                            t % this._actualNumItems,
                            null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems
                        );
                    }
                    break;
                case l.MULT:
                    if (!(e = i.getItemByListId(t))) {
                        return;
                    }
                    o = e.getComponent($listItem.default);
                    if (i._selectedId >= 0) {
                        i._lastSelectedId = i._selectedId;
                    }
                    i._selectedId = t;
                    var s = !o.selected;
                    o.selected = s;
                    var r = i.multSelected.indexOf(t);
                    s && r < 0 ? i.multSelected.push(t) : !s && r >= 0 && i.multSelected.splice(r, 1);
                    if (i.selectedEvent) {
                        cc.Component.EventHandler.emitEvents(
                            [i.selectedEvent],
                            e,
                            t % this._actualNumItems,
                            null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems,
                            s
                        );
                    }
            }
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "numItems", {
        get: function () {
            return this._actualNumItems;
        },
        set: function (t) {
            var e = this;
            if (e.checkInited(!1)) {
                if (null == t || t < 0) {
                    cc.error("numItems set the wrong::", t);
                } else {
                    e._actualNumItems = e._numItems = t;
                    e._forceUpdate = !0;
                    if (e._virtual) {
                        e._resizeContent();
                        e.cyclic && (e._numItems = e._cyclicNum * e._numItems);
                        e._onScrolling();
                        e.frameByFrameRenderNum || e.slideMode != a.PAGE || (e.curPageNum = e.nearestListId);
                    } else {
                        {
                            if (e.cyclic) {
                                e._resizeContent();
                                e._numItems = e._cyclicNum * e._numItems;
                            }
                            var i = e.content.getComponent(cc.Layout);
                            if (i) {
                                i.enabled = !0;
                            }
                            e._delRedundantItem();
                            e.firstListId = 0;
                            if (e.frameByFrameRenderNum > 0) {
                                var o = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum;
                                for (var n = 0; n < o; n++) {
                                    e._createOrUpdateItem2(n);
                                }
                                if (e.frameByFrameRenderNum < e._numItems) {
                                    e._updateCounter = e.frameByFrameRenderNum;
                                    e._updateDone = !1;
                                }
                            } else {
                                for (n = 0; n < e._numItems; n++) {
                                    e._createOrUpdateItem2(n);
                                }
                                e.displayItemNum = e._numItems;
                            }
                        }
                    }
                }
            }
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(e.prototype, "scrollView", {
        get: function () {
            return this._scrollView;
        },
        enumerable: !1,
        configurable: !0
    });
    e.prototype.onLoad = function () {
        this._init();
    };
    e.prototype.onDestroy = function () {
        var t = this;
        if (cc.isValid(t._itemTmp)) {
            t._itemTmp.destroy();
        }
        if (cc.isValid(t.tmpNode)) {
            t.tmpNode.destroy();
        }
        if (t._pool) {
            t._pool.clear();
        }
    };
    e.prototype.onEnable = function () {
        this._registerEvent();
        this._init();
        if (this._aniDelRuning) {
            this._aniDelRuning = !1;
            if (this._aniDelItem) {
                if (this._aniDelBeforePos) {
                    this._aniDelItem.position = this._aniDelBeforePos;
                    delete this._aniDelBeforePos;
                }
                if (this._aniDelBeforeScale) {
                    this._aniDelItem.scale = this._aniDelBeforeScale;
                    delete this._aniDelBeforeScale;
                }
                delete this._aniDelItem;
            }
            if (this._aniDelCB) {
                this._aniDelCB();
                delete this._aniDelCB;
            }
        }
    };
    e.prototype.onDisable = function () {
        this._unregisterEvent();
    };
    e.prototype._registerEvent = function () {
        var t = this;
        t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0);
        t.node.on("touch-up", t._onTouchUp, t);
        t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0);
        t.node.on("scroll-began", t._onScrollBegan, t, !0);
        t.node.on("scroll-ended", t._onScrollEnded, t, !0);
        t.node.on("scrolling", t._onScrolling, t, !0);
        t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    e.prototype._unregisterEvent = function () {
        var t = this;
        t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0);
        t.node.off("touch-up", t._onTouchUp, t);
        t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0);
        t.node.off("scroll-began", t._onScrollBegan, t, !0);
        t.node.off("scroll-ended", t._onScrollEnded, t, !0);
        t.node.off("scrolling", t._onScrolling, t, !0);
        t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    e.prototype._init = function () {
        var t = this;
        if (!t._inited) {
            t._scrollView = t.node.getComponent(cc.ScrollView);
            t.content = t._scrollView.content;
            if (t.content) {
                t._layout = t.content.getComponent(cc.Layout);
                t._align = t._layout.type;
                t._resizeMode = t._layout.resizeMode;
                t._startAxis = t._layout.startAxis;
                t._topGap = t._layout.paddingTop;
                t._rightGap = t._layout.paddingRight;
                t._bottomGap = t._layout.paddingBottom;
                t._leftGap = t._layout.paddingLeft;
                t._columnGap = t._layout.spacingX;
                t._lineGap = t._layout.spacingY;
                t._colLineNum;
                t._verticalDir = t._layout.verticalDirection;
                t._horizontalDir = t._layout.horizontalDirection;
                t.setTemplateItem(cc.instantiate(t.templateType == r.PREFAB ? t.tmpPrefab : t.tmpNode));
                if (!(t._slideMode != a.ADHERING && t._slideMode != a.PAGE)) {
                    t._scrollView.inertia = !1;
                    t._scrollView._onMouseWheel = function () {};
                }
                if (!t.virtual) {
                    t.lackCenter = !1;
                }
                t._lastDisplayData = [];
                t.displayData = [];
                t._pool = new cc.NodePool();
                t._forceUpdate = !1;
                t._updateCounter = 0;
                t._updateDone = !0;
                t.curPageNum = 0;
                if (t.cyclic) {
                    t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
                    t._scrollView._startBounceBackIfNeeded = function () {
                        return !1;
                    };
                }
                switch (t._align) {
                    case cc.Layout.Type.HORIZONTAL:
                        switch (t._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                t._alignCalcType = 1;
                                break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                t._alignCalcType = 2;
                        }
                        break;
                    case cc.Layout.Type.VERTICAL:
                        switch (t._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                t._alignCalcType = 3;
                                break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                t._alignCalcType = 4;
                        }
                        break;
                    case cc.Layout.Type.GRID:
                        switch (t._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                                switch (t._verticalDir) {
                                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                        t._alignCalcType = 3;
                                        break;
                                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                        t._alignCalcType = 4;
                                }
                                break;
                            case cc.Layout.AxisDirection.VERTICAL:
                                switch (t._horizontalDir) {
                                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                        t._alignCalcType = 1;
                                        break;
                                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                        t._alignCalcType = 2;
                                }
                        }
                }
                t.content.removeAllChildren();
                t._inited = !0;
            } else {
                cc.error(t.node.name + "'s cc.ScrollView unset content!");
            }
        }
    };
    e.prototype._processAutoScrolling = function (t) {
        this._scrollView._autoScrollAccumulatedTime += 1 * t;
        var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
        if (this._scrollView._autoScrollAttenuate) {
            var i = e - 1;
            e = i * i * i * i * i + 1;
        }
        var o = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e));
        var n = this._scrollView.getScrollEndedEventTiming();
        var s = Math.abs(e - 1) <= n;
        if (
            Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() &&
            !this._scrollView._isScrollEndedWithThresholdEventFired
        ) {
            this._scrollView._dispatchEvent("scroll-ended-with-threshold");
            this._scrollView._isScrollEndedWithThresholdEventFired = !0;
        }
        if (s) {
            this._scrollView._autoScrolling = !1;
        }
        var r = o.sub(this._scrollView.getContentPosition());
        this._scrollView._moveContent(this._scrollView._clampDelta(r), s);
        this._scrollView._dispatchEvent("scrolling");
        if (!this._scrollView._autoScrolling) {
            this._scrollView._isBouncing = !1;
            this._scrollView._scrolling = !1;
            this._scrollView._dispatchEvent("scroll-ended");
        }
    };
    e.prototype.setTemplateItem = function (t) {
        if (t) {
            var e = this;
            e._itemTmp = t;
            e._resizeMode == cc.Layout.ResizeMode.CHILDREN
                ? (e._itemSize = e._layout.cellSize)
                : (e._itemSize = cc.size(t.width, t.height));
            var i = t.getComponent($listItem.default);
            var o = !1;
            if (!i) {
                o = !0;
            }
            if (o) {
                e.selectedMode = l.NONE;
            }
            if ((i = t.getComponent(cc.Widget)) && i.enabled) {
                e._needUpdateWidget = !0;
            }
            if (e.selectedMode == l.MULT) {
                e.multSelected = [];
            }
            switch (e._align) {
                case cc.Layout.Type.HORIZONTAL:
                    e._colLineNum = 1;
                    e._sizeType = !1;
                    break;
                case cc.Layout.Type.VERTICAL:
                    e._colLineNum = 1;
                    e._sizeType = !0;
                    break;
                case cc.Layout.Type.GRID:
                    switch (e._startAxis) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            var n = e.content.width - e._leftGap - e._rightGap;
                            e._colLineNum = Math.floor((n + e._columnGap) / (e._itemSize.width + e._columnGap));
                            e._sizeType = !0;
                            break;
                        case cc.Layout.AxisDirection.VERTICAL:
                            var s = e.content.height - e._topGap - e._bottomGap;
                            e._colLineNum = Math.floor((s + e._lineGap) / (e._itemSize.height + e._lineGap));
                            e._sizeType = !1;
                    }
            }
        }
    };
    e.prototype.checkInited = function (t) {
        if (void 0 === t) {
            t = !0;
        }
        return !!this._inited || (t && cc.error("List initialization not completed!"), !1);
    };
    e.prototype._resizeContent = function () {
        var t;
        var e = this;
        switch (e._align) {
            case cc.Layout.Type.HORIZONTAL:
                if (e._customSize) {
                    var i = e._getFixedSize(null);
                    t =
                        e._leftGap +
                        i.val +
                        e._itemSize.width * (e._numItems - i.count) +
                        e._columnGap * (e._numItems - 1) +
                        e._rightGap;
                } else {
                    t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
                }
                break;
            case cc.Layout.Type.VERTICAL:
                e._customSize
                    ? ((i = e._getFixedSize(null)),
                      (t =
                          e._topGap +
                          i.val +
                          e._itemSize.height * (e._numItems - i.count) +
                          e._lineGap * (e._numItems - 1) +
                          e._bottomGap))
                    : (t =
                          e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap);
                break;
            case cc.Layout.Type.GRID:
                switch ((e.lackCenter && (e.lackCenter = !1), e._startAxis)) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        var o = Math.ceil(e._numItems / e._colLineNum);
                        t = e._topGap + e._itemSize.height * o + e._lineGap * (o - 1) + e._bottomGap;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        var n = Math.ceil(e._numItems / e._colLineNum);
                        t = e._leftGap + e._itemSize.width * n + e._columnGap * (n - 1) + e._rightGap;
                }
        }
        var s = e.content.getComponent(cc.Layout);
        if (s) {
            s.enabled = !1;
        }
        e._allItemSize = t;
        e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap);
        if (e.cyclic) {
            var r = e._sizeType ? e.node.height : e.node.width;
            e._cyclicPos1 = 0;
            r -= e._cyclicPos1;
            e._cyclicNum = Math.ceil(r / e._allItemSizeNoEdge) + 1;
            var a = e._sizeType ? e._lineGap : e._columnGap;
            e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + a;
            e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + a * (e._cyclicNum - 1);
            e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum;
            e._cycilcAllItemSizeNoEdge += a * (e._cyclicNum - 1);
        }
        e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height : e.node.width);
        var l = (e._lack && e.lackCenter) || !e.lackSlide ? 0.1 : 0;
        var c = e._lack
            ? (e._sizeType ? e.node.height : e.node.width) - l
            : e.cyclic
            ? e._cyclicAllItemSize
            : e._allItemSize;
        if (c < 0) {
            c = 0;
        }
        e._sizeType ? (e.content.height = c) : (e.content.width = c);
    };
    e.prototype._onScrolling = function (t) {
        if (void 0 === t) {
            t = null;
        }
        if (null == this.frameCount) {
            this.frameCount = this._updateRate;
        }
        if (!this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) {
            this.frameCount--;
        } else {
            this.frameCount = this._updateRate;
            if (!this._aniDelRuning) {
                if (this.cyclic) {
                    var e = this.content.getPosition();
                    e = this._sizeType ? e.y : e.x;
                    var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
                    var o = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0);
                    switch (this._alignCalcType) {
                        case 1:
                            e > -this._cyclicPos1
                                ? ((this.content.x = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(o)))
                                : e < -this._cyclicPos2 &&
                                  ((this.content.x = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(o)));
                            break;
                        case 2:
                            e < this._cyclicPos1
                                ? ((this.content.x = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(o)))
                                : e > this._cyclicPos2 &&
                                  ((this.content.x = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(o)));
                            break;
                        case 3:
                            e < this._cyclicPos1
                                ? ((this.content.y = this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(o)))
                                : e > this._cyclicPos2 &&
                                  ((this.content.y = this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(o)));
                            break;
                        case 4:
                            e > -this._cyclicPos1
                                ? ((this.content.y = -this._cyclicPos2),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.sub(o)))
                                : e < -this._cyclicPos2 &&
                                  ((this.content.y = -this._cyclicPos1),
                                  this._scrollView.isAutoScrolling() &&
                                      (this._scrollView._autoScrollStartPosition =
                                          this._scrollView._autoScrollStartPosition.add(o)));
                    }
                }
                var n;
                var s;
                var r;
                var a;
                this._calcViewPos();
                this._sizeType
                    ? ((n = this.viewTop), (r = this.viewBottom))
                    : ((s = this.viewRight), (a = this.viewLeft));
                if (this._virtual) {
                    this.displayData = [];
                    var l = void 0;
                    var c = 0;
                    var u = this._numItems - 1;
                    if (this._customSize) {
                        for (var d = !1; c <= u && !d; c++) {
                            l = this._calcItemPos(c);
                            switch (this._align) {
                                case cc.Layout.Type.HORIZONTAL:
                                    l.right >= a && l.left <= s
                                        ? this.displayData.push(l)
                                        : 0 != c && this.displayData.length > 0 && (d = !0);
                                    break;
                                case cc.Layout.Type.VERTICAL:
                                    l.bottom <= n && l.top >= r
                                        ? this.displayData.push(l)
                                        : 0 != c && this.displayData.length > 0 && (d = !0);
                                    break;
                                case cc.Layout.Type.GRID:
                                    switch (this._startAxis) {
                                        case cc.Layout.AxisDirection.HORIZONTAL:
                                            l.bottom <= n && l.top >= r
                                                ? this.displayData.push(l)
                                                : 0 != c && this.displayData.length > 0 && (d = !0);
                                            break;
                                        case cc.Layout.AxisDirection.VERTICAL:
                                            l.right >= a && l.left <= s
                                                ? this.displayData.push(l)
                                                : 0 != c && this.displayData.length > 0 && (d = !0);
                                    }
                            }
                        }
                    } else {
                        {
                            var p = this._itemSize.width + this._columnGap;
                            var f = this._itemSize.height + this._lineGap;
                            switch (this._alignCalcType) {
                                case 1:
                                    c = (a - this._leftGap) / p;
                                    u = (s - this._leftGap) / p;
                                    break;
                                case 2:
                                    c = (-s - this._rightGap) / p;
                                    u = (-a - this._rightGap) / p;
                                    break;
                                case 3:
                                    c = (-n - this._topGap) / f;
                                    u = (-r - this._topGap) / f;
                                    break;
                                case 4:
                                    c = (r - this._bottomGap) / f;
                                    u = (n - this._bottomGap) / f;
                            }
                            c = Math.floor(c) * this._colLineNum;
                            u = Math.ceil(u) * this._colLineNum;
                            if (c < 0) {
                                c = 0;
                            }
                            for (--u >= this._numItems && (u = this._numItems - 1); c <= u; c++) {
                                this.displayData.push(this._calcItemPos(c));
                            }
                        }
                    }
                    this._delRedundantItem();
                    if (this.displayData.length <= 0 || !this._numItems) {
                        return void (this._lastDisplayData = []);
                    }
                    this.firstListId = this.displayData[0].id;
                    this.displayItemNum = this.displayData.length;
                    var h = this._lastDisplayData.length;
                    var m = this.displayItemNum != h;
                    if (m) {
                        if (this.frameByFrameRenderNum > 0) {
                            this._lastDisplayData.sort(function (t, e) {
                                return t - e;
                            });
                        }
                        m =
                            this.firstListId != this._lastDisplayData[0] ||
                            this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[h - 1];
                    }
                    if (this._forceUpdate || m) {
                        if (this.frameByFrameRenderNum > 0) {
                            this._numItems > 0
                                ? (this._updateDone ? (this._updateCounter = 0) : (this._doneAfterUpdate = !0),
                                  (this._updateDone = !1))
                                : ((this._updateCounter = 0), (this._updateDone = !0));
                        } else {
                            {
                                this._lastDisplayData = [];
                                for (var y = 0; y < this.displayItemNum; y++) {
                                    this._createOrUpdateItem(this.displayData[y]);
                                }
                                this._forceUpdate = !1;
                            }
                        }
                    }
                    this._calcNearestItem();
                }
            }
        }
    };
    e.prototype._calcViewPos = function () {
        var t = this.content.getPosition();
        switch (this._alignCalcType) {
            case 1:
                this.elasticLeft = t.x > 0 ? t.x : 0;
                this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft;
                this.viewRight = this.viewLeft + this.node.width;
                this.elasticRight =
                    this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
                this.viewRight += this.elasticRight;
                break;
            case 2:
                this.elasticRight = t.x < 0 ? -t.x : 0;
                this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight;
                this.viewLeft = this.viewRight - this.node.width;
                this.elasticLeft =
                    this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
                this.viewLeft -= this.elasticLeft;
                break;
            case 3:
                this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0;
                this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop;
                this.viewBottom = this.viewTop - this.node.height;
                this.elasticBottom =
                    this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
                this.viewBottom += this.elasticBottom;
                break;
            case 4:
                this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0;
                this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom;
                this.viewTop = this.viewBottom + this.node.height;
                this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
                this.viewTop -= this.elasticTop;
        }
    };
    e.prototype._calcItemPos = function (t) {
        var e;
        var i;
        var o;
        var n;
        var s;
        var r;
        var a;
        var l;
        switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
                switch (this._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        if (this._customSize) {
                            var c = this._getFixedSize(t);
                            s =
                                this._leftGap +
                                (this._itemSize.width + this._columnGap) * (t - c.count) +
                                (c.val + this._columnGap * c.count);
                            e = (u = this._customSize[t]) > 0 ? u : this._itemSize.width;
                        } else {
                            s = this._leftGap + (this._itemSize.width + this._columnGap) * t;
                            e = this._itemSize.width;
                        }
                        if (this.lackCenter) {
                            s -= this._leftGap;
                            s += this.content.width / 2 - this._allItemSizeNoEdge / 2;
                        }
                        return {
                            id: t,
                            left: s,
                            right: (r = s + e),
                            x: s + this._itemTmp.anchorX * e,
                            y: this._itemTmp.y
                        };
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        this._customSize
                            ? ((c = this._getFixedSize(t)),
                              (r =
                                  -this._rightGap -
                                  (this._itemSize.width + this._columnGap) * (t - c.count) -
                                  (c.val + this._columnGap * c.count)),
                              (e = (u = this._customSize[t]) > 0 ? u : this._itemSize.width))
                            : ((r = -this._rightGap - (this._itemSize.width + this._columnGap) * t),
                              (e = this._itemSize.width));
                        if (this.lackCenter) {
                            r += this._rightGap;
                            r -= this.content.width / 2 - this._allItemSizeNoEdge / 2;
                        }
                        return {
                            id: t,
                            right: r,
                            left: (s = r - e),
                            x: s + this._itemTmp.anchorX * e,
                            y: this._itemTmp.y
                        };
                }
                break;
            case cc.Layout.Type.VERTICAL:
                switch (this._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                        this._customSize
                            ? ((c = this._getFixedSize(t)),
                              (o =
                                  -this._topGap -
                                  (this._itemSize.height + this._lineGap) * (t - c.count) -
                                  (c.val + this._lineGap * c.count)),
                              (i = (u = this._customSize[t]) > 0 ? u : this._itemSize.height))
                            : ((o = -this._topGap - (this._itemSize.height + this._lineGap) * t),
                              (i = this._itemSize.height));
                        if (this.lackCenter) {
                            o += this._topGap;
                            o -= this.content.height / 2 - this._allItemSizeNoEdge / 2;
                        }
                        return {
                            id: t,
                            top: o,
                            bottom: (n = o - i),
                            x: this._itemTmp.x,
                            y: n + this._itemTmp.anchorY * i
                        };
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                        var u;
                        this._customSize
                            ? ((c = this._getFixedSize(t)),
                              (n =
                                  this._bottomGap +
                                  (this._itemSize.height + this._lineGap) * (t - c.count) +
                                  (c.val + this._lineGap * c.count)),
                              (i = (u = this._customSize[t]) > 0 ? u : this._itemSize.height))
                            : ((n = this._bottomGap + (this._itemSize.height + this._lineGap) * t),
                              (i = this._itemSize.height));
                        if (this.lackCenter) {
                            n -= this._bottomGap;
                            n += this.content.height / 2 - this._allItemSizeNoEdge / 2;
                        }
                        return {
                            id: t,
                            top: (o = n + i),
                            bottom: n,
                            x: this._itemTmp.x,
                            y: n + this._itemTmp.anchorY * i
                        };
                }
            case cc.Layout.Type.GRID:
                var d = Math.floor(t / this._colLineNum);
                switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                l =
                                    (n =
                                        (o = -this._topGap - (this._itemSize.height + this._lineGap) * d) -
                                        this._itemSize.height) +
                                    this._itemTmp.anchorY * this._itemSize.height;
                                break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                o =
                                    (n = this._bottomGap + (this._itemSize.height + this._lineGap) * d) +
                                    this._itemSize.height;
                                l = n + this._itemTmp.anchorY * this._itemSize.height;
                        }
                        switch (
                            ((a = this._leftGap + (t % this._colLineNum) * (this._itemSize.width + this._columnGap)),
                            this._horizontalDir)
                        ) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                a += this._itemTmp.anchorX * this._itemSize.width;
                                a -= this.content.anchorX * this.content.width;
                                break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                a += (1 - this._itemTmp.anchorX) * this._itemSize.width;
                                a -= (1 - this.content.anchorX) * this.content.width;
                                a *= -1;
                        }
                        return {
                            id: t,
                            top: o,
                            bottom: n,
                            x: a,
                            y: l
                        };
                    case cc.Layout.AxisDirection.VERTICAL:
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                r =
                                    (s = this._leftGap + (this._itemSize.width + this._columnGap) * d) +
                                    this._itemSize.width;
                                a = s + this._itemTmp.anchorX * this._itemSize.width;
                                a -= this.content.anchorX * this.content.width;
                                break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                a =
                                    (s =
                                        (r = -this._rightGap - (this._itemSize.width + this._columnGap) * d) -
                                        this._itemSize.width) +
                                    this._itemTmp.anchorX * this._itemSize.width;
                                a += (1 - this.content.anchorX) * this.content.width;
                        }
                        switch (
                            ((l = -this._topGap - (t % this._colLineNum) * (this._itemSize.height + this._lineGap)),
                            this._verticalDir)
                        ) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                l -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
                                l += (1 - this.content.anchorY) * this.content.height;
                                break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                l -= this._itemTmp.anchorY * this._itemSize.height;
                                l += this.content.anchorY * this.content.height;
                                l *= -1;
                        }
                        return {
                            id: t,
                            left: s,
                            right: r,
                            x: a,
                            y: l
                        };
                }
        }
    };
    e.prototype._calcExistItemPos = function (t) {
        var e = this.getItemByListId(t);
        if (!e) {
            return null;
        }
        var i = {
            id: t,
            x: e.x,
            y: e.y
        };
        this._sizeType
            ? ((i.top = e.y + e.height * (1 - e.anchorY)), (i.bottom = e.y - e.height * e.anchorY))
            : ((i.left = e.x - e.width * e.anchorX), (i.right = e.x + e.width * (1 - e.anchorX)));
        return i;
    };
    e.prototype.getItemPos = function (t) {
        return this._virtual || this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t);
    };
    e.prototype._getFixedSize = function (t) {
        if (!this._customSize) {
            return null;
        }
        if (null == t) {
            t = this._numItems;
        }
        var e = 0;
        var i = 0;
        for (var o in this._customSize)
            if (parseInt(o) < t) {
                e += this._customSize[o];
                i++;
            }
        return {
            val: e,
            count: i
        };
    };
    e.prototype._onScrollBegan = function () {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
    };
    e.prototype._onScrollEnded = function () {
        var t = this;
        t.curScrollIsTouch = !1;
        if (null != t.scrollToListId) {
            var e = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (e) {
                cc.tween(e)
                    .to(0.1, {
                        scale: 1.06
                    })
                    .to(0.1, {
                        scale: 1
                    })
                    .start();
            }
        }
        t._onScrolling();
        t._slideMode != a.ADHERING || t.adhering
            ? t._slideMode == a.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere())
            : t.adhere();
    };
    e.prototype._onTouchStart = function (t, e) {
        if (
            !this._scrollView.hasNestedViewGroup(t, e) &&
            ((this.curScrollIsTouch = !0), t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)
        ) {
            for (var i = t.target; null == i._listId && i.parent; ) {
                i = i.parent;
            }
            this._scrollItem = null != i._listId ? i : t.target;
        }
    };
    e.prototype._onTouchUp = function () {
        var t = this;
        t._scrollPos = null;
        t._slideMode == a.ADHERING
            ? (this.adhering && (this._adheringBarrier = !0), t.adhere())
            : t._slideMode == a.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere());
        this._scrollItem = null;
    };
    e.prototype._onTouchCancelled = function (t, e) {
        var i = this;
        if (!(i._scrollView.hasNestedViewGroup(t, e) || t.simulate)) {
            i._scrollPos = null;
            i._slideMode == a.ADHERING
                ? (i.adhering && (i._adheringBarrier = !0), i.adhere())
                : i._slideMode == a.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
            this._scrollItem = null;
        }
    };
    e.prototype._onSizeChanged = function () {
        if (this.checkInited(!1)) {
            this._onScrolling();
        }
    };
    e.prototype._onItemAdaptive = function (t) {
        if (
            (!this._sizeType && t.width != this._itemSize.width) ||
            (this._sizeType && t.height != this._itemSize.height)
        ) {
            if (!this._customSize) {
                this._customSize = {};
            }
            var e = this._sizeType ? t.height : t.width;
            if (this._customSize[t._listId] != e) {
                this._customSize[t._listId] = e;
                this._resizeContent();
                this.updateAll();
                if (null != this._scrollToListId) {
                    this._scrollPos = null;
                    this.unschedule(this._scrollToSo);
                    this.scrollTo(
                        this._scrollToListId,
                        Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3)
                    );
                }
            }
        }
    };
    e.prototype._pageAdhere = function () {
        var t = this;
        if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
            var e = t._sizeType ? t.viewTop : t.viewLeft;
            var i = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
            if (Math.abs(t._beganPos - e) > i) {
                switch (t._alignCalcType) {
                    case 1:
                    case 4:
                        t._beganPos > e ? t.prePage(0.5) : t.nextPage(0.5);
                        break;
                    case 2:
                    case 3:
                        t._beganPos < e ? t.prePage(0.5) : t.nextPage(0.5);
                }
            } else {
                if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
                    t.adhere();
                }
            }
            t._beganPos = null;
        }
    };
    e.prototype.adhere = function () {
        var t = this;
        if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
            t.adhering = !0;
            t._calcNearestItem();
            var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
            t.scrollTo(t.nearestListId, 0.7, e);
        }
    };
    e.prototype.update = function () {
        if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) {
            if (this._virtual) {
                var t =
                    this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum
                        ? this.displayItemNum
                        : this._updateCounter + this.frameByFrameRenderNum;
                for (var e = this._updateCounter; e < t; e++) {
                    var i = this.displayData[e];
                    if (i) {
                        this._createOrUpdateItem(i);
                    }
                }
                this._updateCounter >= this.displayItemNum - 1
                    ? this._doneAfterUpdate
                        ? ((this._updateCounter = 0), (this._updateDone = !1), (this._doneAfterUpdate = !1))
                        : ((this._updateDone = !0),
                          this._delRedundantItem(),
                          (this._forceUpdate = !1),
                          this._calcNearestItem(),
                          this.slideMode == a.PAGE && (this.curPageNum = this.nearestListId))
                    : (this._updateCounter += this.frameByFrameRenderNum);
            } else {
                if (this._updateCounter < this._numItems) {
                    t =
                        this._updateCounter + this.frameByFrameRenderNum > this._numItems
                            ? this._numItems
                            : this._updateCounter + this.frameByFrameRenderNum;
                    for (e = this._updateCounter; e < t; e++) {
                        this._createOrUpdateItem2(e);
                    }
                    this._updateCounter += this.frameByFrameRenderNum;
                } else {
                    this._updateDone = !0;
                    this._calcNearestItem();
                    this.slideMode == a.PAGE && (this.curPageNum = this.nearestListId);
                }
            }
        }
    };
    e.prototype._createOrUpdateItem = function (t) {
        var e = this.getItemByListId(t.id);
        if (e) {
            if (this._forceUpdate && this.renderEvent) {
                e.setPosition(cc.v2(t.x, t.y));
                this._resetItemSize(e);
                if (this.renderEvent) {
                    cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems);
                }
            }
        } else {
            {
                var i = this._pool.size() > 0;
                e = i ? this._pool.get() : cc.instantiate(this._itemTmp);
                if (!(i && cc.isValid(e))) {
                    e = cc.instantiate(this._itemTmp);
                    i = !1;
                }
                if (e._listId != t.id) {
                    e._listId = t.id;
                    e.setContentSize(this._itemSize);
                }
                e.setPosition(cc.v2(t.x, t.y));
                this._resetItemSize(e);
                this.content.addChild(e);
                if (i && this._needUpdateWidget) {
                    var o = e.getComponent(cc.Widget);
                    if (o) {
                        o.updateAlignment();
                    }
                }
                e.setSiblingIndex(this.content.childrenCount - 1);
                var n = e.getComponent($listItem.default);
                e.listItem = n;
                if (n) {
                    n.listId = t.id;
                    n.list = this;
                    n._registerEvent();
                }
                if (this.renderEvent) {
                    cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems);
                }
            }
        }
        this._resetItemSize(e);
        this._updateListItem(e.listItem);
        if (this._lastDisplayData.indexOf(t.id) < 0) {
            this._lastDisplayData.push(t.id);
        }
    };
    e.prototype._createOrUpdateItem2 = function (t) {
        var e;
        var i = this.content.children[t];
        i
            ? this._forceUpdate &&
              this.renderEvent &&
              ((i._listId = t),
              e && (e.listId = t),
              this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], i, t % this._actualNumItems))
            : (((i = cc.instantiate(this._itemTmp))._listId = t),
              this.content.addChild(i),
              (e = i.getComponent($listItem.default)),
              (i.listItem = e),
              e && ((e.listId = t), (e.list = this), e._registerEvent()),
              this.renderEvent &&
                  cc.Component.EventHandler.emitEvents([this.renderEvent], i, t % this._actualNumItems));
        this._updateListItem(e);
        if (this._lastDisplayData.indexOf(t) < 0) {
            this._lastDisplayData.push(t);
        }
    };
    e.prototype._updateListItem = function (t) {
        if (t && this.selectedMode > l.NONE) {
            var e = t.node;
            switch (this.selectedMode) {
                case l.SINGLE:
                    t.selected = this.selectedId == e._listId;
                    break;
                case l.MULT:
                    t.selected = this.multSelected.indexOf(e._listId) >= 0;
            }
        }
    };
    e.prototype._resetItemSize = function () {};
    e.prototype._updateItemPos = function (t) {
        var e = isNaN(t) ? t : this.getItemByListId(t);
        var i = this.getItemPos(e._listId);
        e.setPosition(i.x, i.y);
    };
    e.prototype.setMultSelected = function (t, e) {
        var i = this;
        if (i.checkInited()) {
            if (!Array.isArray(t)) {
                t = [t];
            }
            if (null == e) {
                i.multSelected = t;
            } else {
                {
                    var o = void 0;
                    var n = void 0;
                    if (e) {
                        for (var s = t.length - 1; s >= 0; s--) {
                            o = t[s];
                            (n = i.multSelected.indexOf(o)) < 0 && i.multSelected.push(o);
                        }
                    } else {
                        for (s = t.length - 1; s >= 0; s--) {
                            o = t[s];
                            (n = i.multSelected.indexOf(o)) >= 0 && i.multSelected.splice(n, 1);
                        }
                    }
                }
            }
            i._forceUpdate = !0;
            i._onScrolling();
        }
    };
    e.prototype.getMultSelected = function () {
        return this.multSelected;
    };
    e.prototype.hasMultSelected = function (t) {
        return this.multSelected && this.multSelected.indexOf(t) >= 0;
    };
    e.prototype.updateItem = function (t) {
        if (this.checkInited()) {
            if (!Array.isArray(t)) {
                t = [t];
            }
            var e = 0;
            for (var i = t.length; e < i; e++) {
                var o = t[e];
                var n = this.getItemByListId(o);
                if (n) {
                    cc.Component.EventHandler.emitEvents([this.renderEvent], n, o % this._actualNumItems);
                }
            }
        }
    };
    e.prototype.updateAll = function () {
        if (this.checkInited()) {
            this.numItems = this.numItems;
        }
    };
    e.prototype.getItemByListId = function (t) {
        if (this.content) {
            for (var e = this.content.childrenCount - 1; e >= 0; e--) {
                var i = this.content.children[e];
                if (i._listId == t) {
                    return i;
                }
            }
        }
    };
    e.prototype._getOutsideItem = function () {
        var t;
        var e = [];
        for (var i = this.content.childrenCount - 1; i >= 0; i--) {
            t = this.content.children[i];
            this.displayData.find(function (e) {
                return e.id == t._listId;
            }) || e.push(t);
        }
        return e;
    };
    e.prototype._delRedundantItem = function () {
        if (this._virtual) {
            var t = this._getOutsideItem();
            for (var e = t.length - 1; e >= 0; e--) {
                var i = t[e];
                if (!this._scrollItem || i._listId != this._scrollItem._listId) {
                    i.isCached = !0;
                    this._pool.put(i);
                    for (var o = this._lastDisplayData.length - 1; o >= 0; o--) {
                        if (this._lastDisplayData[o] == i._listId) {
                            this._lastDisplayData.splice(o, 1);
                            break;
                        }
                    }
                }
            }
        } else {
            for (; this.content.childrenCount > this._numItems; ) {
                this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
            }
        }
    };
    e.prototype._delSingleItem = function (t) {
        t.removeFromParent();
        if (t.destroy) {
            t.destroy();
        }
        t = null;
    };
    e.prototype.aniDelItem = function (t, e, i) {
        var o = this;
        if (!o.checkInited() || o.cyclic || !o._virtual) {
            return cc.error("This function is not allowed to be called!");
        }
        if (!e) {
            return cc.error(
                "CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!"
            );
        }
        if (o._aniDelRuning) {
            return cc.warn("Please wait for the current deletion to finish!");
        }
        var n;
        var s = o.getItemByListId(t);
        if (s) {
            n = s.getComponent($listItem.default);
            o._aniDelRuning = !0;
            o._aniDelCB = e;
            o._aniDelItem = s;
            o._aniDelBeforePos = s.position;
            o._aniDelBeforeScale = s.scale;
            var r = o.displayData[o.displayData.length - 1].id;
            var a = n.selected;
            n.showAni(
                i,
                function () {
                    var i;
                    var n;
                    var c;
                    if (r < o._numItems - 2) {
                        i = r + 1;
                    }
                    if (null != i) {
                        var u = o._calcItemPos(i);
                        o.displayData.push(u);
                        o._virtual ? o._createOrUpdateItem(u) : o._createOrUpdateItem2(i);
                    } else {
                        o._numItems--;
                    }
                    if (o.selectedMode == l.SINGLE) {
                        a ? (o._selectedId = -1) : o._selectedId - 1 >= 0 && o._selectedId--;
                    } else {
                        if (o.selectedMode == l.MULT && o.multSelected.length) {
                            var d = o.multSelected.indexOf(t);
                            if (d >= 0) {
                                o.multSelected.splice(d, 1);
                            }
                            for (var p = o.multSelected.length - 1; p >= 0; p--) {
                                if ((m = o.multSelected[p]) >= t) {
                                    o.multSelected[p]--;
                                }
                            }
                        }
                    }
                    if (o._customSize) {
                        if (o._customSize[t]) {
                            delete o._customSize[t];
                        }
                        var f = {};
                        var h = void 0;
                        for (var m in o._customSize) {
                            h = o._customSize[m];
                            var y = parseInt(m);
                            f[y - (y >= t ? 1 : 0)] = h;
                        }
                        o._customSize = f;
                    }
                    for (p = null != i ? i : r; p >= t + 1; p--) {
                        if ((s = o.getItemByListId(p))) {
                            var g = o._calcItemPos(p - 1);
                            n = cc.tween(s).to(0.2333, {
                                position: cc.v2(g.x, g.y)
                            });
                            if (p <= t + 1) {
                                c = !0;
                                n.call(function () {
                                    o._aniDelRuning = !1;
                                    e(t);
                                    delete o._aniDelCB;
                                });
                            }
                            n.start();
                        }
                    }
                    if (!c) {
                        o._aniDelRuning = !1;
                        e(t);
                        o._aniDelCB = null;
                    }
                },
                !0
            );
        } else {
            e(t);
        }
    };
    e.prototype.scrollTo = function (t, e, i, o) {
        if (void 0 === e) {
            e = 0.5;
        }
        if (void 0 === i) {
            i = null;
        }
        if (void 0 === o) {
            o = !1;
        }
        var n = this;
        if (n.checkInited(!1)) {
            null == e ? (e = 0.5) : e < 0 && (e = 0);
            t < 0 ? (t = 0) : t >= n._numItems && (t = n._numItems - 1);
            if (!n._virtual && n._layout && n._layout.enabled) {
                n._layout.updateLayout();
            }
            var s;
            var r;
            var a = n.getItemPos(t);
            if (!a) {
                return !1;
            }
            switch (n._alignCalcType) {
                case 1:
                    s = a.left;
                    s -= null != i ? n.node.width * i : n._leftGap;
                    a = cc.v2(s, 0);
                    break;
                case 2:
                    s = a.right - n.node.width;
                    s += null != i ? n.node.width * i : n._rightGap;
                    a = cc.v2(s + n.content.width, 0);
                    break;
                case 3:
                    r = a.top;
                    r += null != i ? n.node.height * i : n._topGap;
                    a = cc.v2(0, -r);
                    break;
                case 4:
                    r = a.bottom + n.node.height;
                    r -= null != i ? n.node.height * i : n._bottomGap;
                    a = cc.v2(0, -r + n.content.height);
            }
            var l = n.content.getPosition();
            l = Math.abs(n._sizeType ? l.y : l.x);
            var c = n._sizeType ? a.y : a.x;
            if (Math.abs((null != n._scrollPos ? n._scrollPos : l) - c) > 0.5) {
                n._scrollView.scrollToOffset(a, e);
                n._scrollToListId = t;
                n._scrollToEndTime = new Date().getTime() / 1e3 + e;
                n._scrollToSo = n.scheduleOnce(function () {
                    if (!n._adheringBarrier) {
                        n.adhering = n._adheringBarrier = !1;
                    }
                    n._scrollPos = n._scrollToListId = n._scrollToEndTime = n._scrollToSo = null;
                    if (o) {
                        var e = n.getItemByListId(t);
                        if (e) {
                            cc.tween(e)
                                .to(0.1, {
                                    scale: 1.05
                                })
                                .to(0.1, {
                                    scale: 1
                                })
                                .start();
                        }
                    }
                }, e + 0.1);
                if (e <= 0) {
                    n._onScrolling();
                }
            }
        }
    };
    e.prototype._calcNearestItem = function () {
        var t;
        var e;
        var i;
        var o;
        var n;
        var s;
        var r = this;
        r.nearestListId = null;
        if (r._virtual) {
            r._calcViewPos();
        }
        i = r.viewTop;
        o = r.viewRight;
        n = r.viewBottom;
        s = r.viewLeft;
        var a = !1;
        for (var l = 0; l < r.content.childrenCount && !a; l += r._colLineNum) {
            if ((t = r._virtual ? r.displayData[l] : r._calcExistItemPos(l))) {
                e = r._sizeType ? (t.top + t.bottom) / 2 : (e = (t.left + t.right) / 2);
                switch (r._alignCalcType) {
                    case 1:
                        if (t.right >= s) {
                            r.nearestListId = t.id;
                            if (s > e) {
                                r.nearestListId += r._colLineNum;
                            }
                            a = !0;
                        }
                        break;
                    case 2:
                        if (t.left <= o) {
                            r.nearestListId = t.id;
                            if (o < e) {
                                r.nearestListId += r._colLineNum;
                            }
                            a = !0;
                        }
                        break;
                    case 3:
                        if (t.bottom <= i) {
                            r.nearestListId = t.id;
                            if (i < e) {
                                r.nearestListId += r._colLineNum;
                            }
                            a = !0;
                        }
                        break;
                    case 4:
                        if (t.top >= n) {
                            r.nearestListId = t.id;
                            if (n > e) {
                                r.nearestListId += r._colLineNum;
                            }
                            a = !0;
                        }
                }
            }
        }
        if (
            (t = r._virtual ? r.displayData[r.displayItemNum - 1] : r._calcExistItemPos(r._numItems - 1)) &&
            t.id == r._numItems - 1
        ) {
            e = r._sizeType ? (t.top + t.bottom) / 2 : (e = (t.left + t.right) / 2);
            switch (r._alignCalcType) {
                case 1:
                    if (o > e) {
                        r.nearestListId = t.id;
                    }
                    break;
                case 2:
                    if (s < e) {
                        r.nearestListId = t.id;
                    }
                    break;
                case 3:
                    if (n < e) {
                        r.nearestListId = t.id;
                    }
                    break;
                case 4:
                    if (i > e) {
                        r.nearestListId = t.id;
                    }
            }
        }
    };
    e.prototype.prePage = function (t) {
        if (void 0 === t) {
            t = 0.5;
        }
        if (this.checkInited()) {
            this.skipPage(this.curPageNum - 1, t);
        }
    };
    e.prototype.nextPage = function (t) {
        if (void 0 === t) {
            t = 0.5;
        }
        if (this.checkInited()) {
            this.skipPage(this.curPageNum + 1, t);
        }
    };
    e.prototype.skipPage = function (t, e) {
        var i = this;
        if (i.checkInited()) {
            return i._slideMode != a.PAGE
                ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!")
                : void (
                      t < 0 ||
                      t >= i._numItems ||
                      (i.curPageNum != t &&
                          ((i.curPageNum = t),
                          i.pageChangeEvent && cc.Component.EventHandler.emitEvents([i.pageChangeEvent], t),
                          i.scrollTo(t, e)))
                  );
        }
    };
    e.prototype.calcCustomSize = function (t) {
        var e = this;
        if (e.checkInited()) {
            if (!e._itemTmp) {
                return cc.error("Unset template item!");
            }
            if (!e.renderEvent) {
                return cc.error("Unset Render-Event!");
            }
            e._customSize = {};
            var i = cc.instantiate(e._itemTmp);
            e.content.addChild(i);
            for (var o = 0; o < t; o++) {
                cc.Component.EventHandler.emitEvents([e.renderEvent], i, o);
                (i.height == e._itemSize.height && i.width == e._itemSize.width) ||
                    (e._customSize[o] = e._sizeType ? i.height : i.width);
            }
            if (!Object.keys(e._customSize).length) {
                e._customSize = null;
            }
            i.removeFromParent();
            if (i.destroy) {
                i.destroy();
            }
            return e._customSize;
        }
    };
    __decorate(
        [
            h({
                type: cc.Enum(r)
            })
        ],
        e.prototype,
        "templateType",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Node,
                visible: function () {
                    return this.templateType == r.NODE;
                }
            })
        ],
        e.prototype,
        "tmpNode",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Prefab,
                visible: function () {
                    return this.templateType == r.PREFAB;
                }
            })
        ],
        e.prototype,
        "tmpPrefab",
        void 0
    );
    __decorate([h()], e.prototype, "_slideMode", void 0);
    __decorate(
        [
            h({
                type: cc.Enum(a)
            })
        ],
        e.prototype,
        "slideMode",
        null
    );
    __decorate(
        [
            h({
                type: cc.Float,
                range: [0, 1, 0.1],
                slide: !0,
                visible: function () {
                    return this._slideMode == a.PAGE;
                }
            })
        ],
        e.prototype,
        "pageDistance",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Component.EventHandler,
                visible: function () {
                    return this._slideMode == a.PAGE;
                }
            })
        ],
        e.prototype,
        "pageChangeEvent",
        void 0
    );
    __decorate([h()], e.prototype, "_virtual", void 0);
    __decorate(
        [
            h({
                type: cc.Boolean
            })
        ],
        e.prototype,
        "virtual",
        null
    );
    __decorate(
        [
            h({
                visible: function () {
                    var t = this.slideMode == a.NORMAL;
                    if (!t) {
                        this.cyclic = !1;
                    }
                    return t;
                }
            })
        ],
        e.prototype,
        "cyclic",
        void 0
    );
    __decorate(
        [
            h({
                visible: function () {
                    return this.virtual;
                }
            })
        ],
        e.prototype,
        "lackCenter",
        void 0
    );
    __decorate(
        [
            h({
                visible: function () {
                    var t = this.virtual && !this.lackCenter;
                    if (!t) {
                        this.lackSlide = !1;
                    }
                    return t;
                }
            })
        ],
        e.prototype,
        "lackSlide",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Integer
            })
        ],
        e.prototype,
        "_updateRate",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Integer,
                range: [0, 6, 1],
                slide: !0
            })
        ],
        e.prototype,
        "updateRate",
        null
    );
    __decorate(
        [
            h({
                type: cc.Integer,
                range: [0, 12, 1],
                slide: !0
            })
        ],
        e.prototype,
        "frameByFrameRenderNum",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Component.EventHandler
            })
        ],
        e.prototype,
        "renderEvent",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Enum(l)
            })
        ],
        e.prototype,
        "selectedMode",
        void 0
    );
    __decorate(
        [
            h({
                visible: function () {
                    return this.selectedMode == l.SINGLE;
                }
            })
        ],
        e.prototype,
        "repeatEventSingle",
        void 0
    );
    __decorate(
        [
            h({
                type: cc.Component.EventHandler,
                visible: function () {
                    return this.selectedMode > l.NONE;
                }
            })
        ],
        e.prototype,
        "selectedEvent",
        void 0
    );
    __decorate(
        [
            h({
                serializable: !1
            })
        ],
        e.prototype,
        "_numItems",
        void 0
    );
    return __decorate([f, m(), y("自定义组件/List"), _(cc.ScrollView), g(-5e3)], e);
})(cc.Component);
exports.default = v;
