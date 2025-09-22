
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dce23hqjNNpoltSksBFNEF', 'List');
// game_script/scripts/List.js

"use strict";

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

(d = r || (r = {}))[d.NODE = 1] = "NODE";
d[d.PREFAB = 2] = "PREFAB";
(u = a || (a = {}))[u.NORMAL = 1] = "NORMAL";
u[u.ADHERING = 2] = "ADHERING";
u[u.PAGE = 3] = "PAGE";
(c = l || (l = {}))[c.NONE = 0] = "NONE";
c[c.SINGLE = 1] = "SINGLE";
c[c.MULT = 2] = "MULT";

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
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
    get: function get() {
      return this._slideMode;
    },
    set: function set(t) {
      this._slideMode = t;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "virtual", {
    get: function get() {
      return this._virtual;
    },
    set: function set(t) {
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
    get: function get() {
      return this._updateRate;
    },
    set: function set(t) {
      if (t >= 0 && t <= 6) {
        this._updateRate = t;
      }
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "selectedId", {
    get: function get() {
      return this._selectedId;
    },
    set: function set(t) {
      var e;
      var i = this;

      switch (i.selectedMode) {
        case l.SINGLE:
          if (!i.repeatEventSingle && t == i._selectedId) {
            return;
          }

          e = i.getItemByListId(t);
          var o = void 0;
          i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null;
          i._selectedId = t;

          if (e) {
            (o = e.getComponent($listItem["default"])).selected = !0;
          }

          if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
            var n = i.getItemByListId(i._lastSelectedId);

            if (n) {
              n.getComponent($listItem["default"]).selected = !1;
            }
          }

          if (i.selectedEvent) {
            cc.Component.EventHandler.emitEvents([i.selectedEvent], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
          }

          break;

        case l.MULT:
          if (!(e = i.getItemByListId(t))) {
            return;
          }

          o = e.getComponent($listItem["default"]);

          if (i._selectedId >= 0) {
            i._lastSelectedId = i._selectedId;
          }

          i._selectedId = t;
          var s = !o.selected;
          o.selected = s;
          var r = i.multSelected.indexOf(t);
          s && r < 0 ? i.multSelected.push(t) : !s && r >= 0 && i.multSelected.splice(r, 1);

          if (i.selectedEvent) {
            cc.Component.EventHandler.emitEvents([i.selectedEvent], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, s);
          }

      }
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "numItems", {
    get: function get() {
      return this._actualNumItems;
    },
    set: function set(t) {
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
    get: function get() {
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

    if (Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
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
      e._resizeMode == cc.Layout.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = cc.size(t.width, t.height);
      var i = t.getComponent($listItem["default"]);
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

          t = e._leftGap + i.val + e._itemSize.width * (e._numItems - i.count) + e._columnGap * (e._numItems - 1) + e._rightGap;
        } else {
          t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
        }

        break;

      case cc.Layout.Type.VERTICAL:
        e._customSize ? (i = e._getFixedSize(null), t = e._topGap + i.val + e._itemSize.height * (e._numItems - i.count) + e._lineGap * (e._numItems - 1) + e._bottomGap) : t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
        break;

      case cc.Layout.Type.GRID:
        switch (e.lackCenter && (e.lackCenter = !1), e._startAxis) {
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
    var l = e._lack && e.lackCenter || !e.lackSlide ? 0.1 : 0;
    var c = e._lack ? (e._sizeType ? e.node.height : e.node.width) - l : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;

    if (c < 0) {
      c = 0;
    }

    e._sizeType ? e.content.height = c : e.content.width = c;
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
              e > -this._cyclicPos1 ? (this.content.x = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o))) : e < -this._cyclicPos2 && (this.content.x = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o)));
              break;

            case 2:
              e < this._cyclicPos1 ? (this.content.x = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o))) : e > this._cyclicPos2 && (this.content.x = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o)));
              break;

            case 3:
              e < this._cyclicPos1 ? (this.content.y = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o))) : e > this._cyclicPos2 && (this.content.y = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o)));
              break;

            case 4:
              e > -this._cyclicPos1 ? (this.content.y = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(o))) : e < -this._cyclicPos2 && (this.content.y = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(o)));
          }
        }

        var n;
        var s;
        var r;
        var a;

        this._calcViewPos();

        this._sizeType ? (n = this.viewTop, r = this.viewBottom) : (s = this.viewRight, a = this.viewLeft);

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
                  l.right >= a && l.left <= s ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
                  break;

                case cc.Layout.Type.VERTICAL:
                  l.bottom <= n && l.top >= r ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
                  break;

                case cc.Layout.Type.GRID:
                  switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                      l.bottom <= n && l.top >= r ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
                      break;

                    case cc.Layout.AxisDirection.VERTICAL:
                      l.right >= a && l.left <= s ? this.displayData.push(l) : 0 != c && this.displayData.length > 0 && (d = !0);
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

            m = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[h - 1];
          }

          if (this._forceUpdate || m) {
            if (this.frameByFrameRenderNum > 0) {
              this._numItems > 0 ? (this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0, this._updateDone = !1) : (this._updateCounter = 0, this._updateDone = !0);
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
        this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
        this.viewRight += this.elasticRight;
        break;

      case 2:
        this.elasticRight = t.x < 0 ? -t.x : 0;
        this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight;
        this.viewLeft = this.viewRight - this.node.width;
        this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
        this.viewLeft -= this.elasticLeft;
        break;

      case 3:
        this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0;
        this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop;
        this.viewBottom = this.viewTop - this.node.height;
        this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
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

              s = this._leftGap + (this._itemSize.width + this._columnGap) * (t - c.count) + (c.val + this._columnGap * c.count);
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
              right: r = s + e,
              x: s + this._itemTmp.anchorX * e,
              y: this._itemTmp.y
            };

          case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            this._customSize ? (c = this._getFixedSize(t), r = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - c.count) - (c.val + this._columnGap * c.count), e = (u = this._customSize[t]) > 0 ? u : this._itemSize.width) : (r = -this._rightGap - (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width);

            if (this.lackCenter) {
              r += this._rightGap;
              r -= this.content.width / 2 - this._allItemSizeNoEdge / 2;
            }

            return {
              id: t,
              right: r,
              left: s = r - e,
              x: s + this._itemTmp.anchorX * e,
              y: this._itemTmp.y
            };
        }

        break;

      case cc.Layout.Type.VERTICAL:
        switch (this._verticalDir) {
          case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
            this._customSize ? (c = this._getFixedSize(t), o = -this._topGap - (this._itemSize.height + this._lineGap) * (t - c.count) - (c.val + this._lineGap * c.count), i = (u = this._customSize[t]) > 0 ? u : this._itemSize.height) : (o = -this._topGap - (this._itemSize.height + this._lineGap) * t, i = this._itemSize.height);

            if (this.lackCenter) {
              o += this._topGap;
              o -= this.content.height / 2 - this._allItemSizeNoEdge / 2;
            }

            return {
              id: t,
              top: o,
              bottom: n = o - i,
              x: this._itemTmp.x,
              y: n + this._itemTmp.anchorY * i
            };

          case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
            var u;
            this._customSize ? (c = this._getFixedSize(t), n = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - c.count) + (c.val + this._lineGap * c.count), i = (u = this._customSize[t]) > 0 ? u : this._itemSize.height) : (n = this._bottomGap + (this._itemSize.height + this._lineGap) * t, i = this._itemSize.height);

            if (this.lackCenter) {
              n -= this._bottomGap;
              n += this.content.height / 2 - this._allItemSizeNoEdge / 2;
            }

            return {
              id: t,
              top: o = n + i,
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
                l = (n = (o = -this._topGap - (this._itemSize.height + this._lineGap) * d) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
                break;

              case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                o = (n = this._bottomGap + (this._itemSize.height + this._lineGap) * d) + this._itemSize.height;
                l = n + this._itemTmp.anchorY * this._itemSize.height;
            }

            switch (a = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap), this._horizontalDir) {
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
                r = (s = this._leftGap + (this._itemSize.width + this._columnGap) * d) + this._itemSize.width;
                a = s + this._itemTmp.anchorX * this._itemSize.width;
                a -= this.content.anchorX * this.content.width;
                break;

              case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                a = (s = (r = -this._rightGap - (this._itemSize.width + this._columnGap) * d) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
                a += (1 - this.content.anchorX) * this.content.width;
            }

            switch (l = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap), this._verticalDir) {
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
    this._sizeType ? (i.top = e.y + e.height * (1 - e.anchorY), i.bottom = e.y - e.height * e.anchorY) : (i.left = e.x - e.width * e.anchorX, i.right = e.x + e.width * (1 - e.anchorX));
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

    for (var o in this._customSize) {
      if (parseInt(o) < t) {
        e += this._customSize[o];
        i++;
      }
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
        cc.tween(e).to(0.1, {
          scale: 1.06
        }).to(0.1, {
          scale: 1
        }).start();
      }
    }

    t._onScrolling();

    t._slideMode != a.ADHERING || t.adhering ? t._slideMode == a.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere()) : t.adhere();
  };

  e.prototype._onTouchStart = function (t, e) {
    if (!this._scrollView.hasNestedViewGroup(t, e) && (this.curScrollIsTouch = !0, t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)) {
      for (var i = t.target; null == i._listId && i.parent;) {
        i = i.parent;
      }

      this._scrollItem = null != i._listId ? i : t.target;
    }
  };

  e.prototype._onTouchUp = function () {
    var t = this;
    t._scrollPos = null;
    t._slideMode == a.ADHERING ? (this.adhering && (this._adheringBarrier = !0), t.adhere()) : t._slideMode == a.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere());
    this._scrollItem = null;
  };

  e.prototype._onTouchCancelled = function (t, e) {
    var i = this;

    if (!(i._scrollView.hasNestedViewGroup(t, e) || t.simulate)) {
      i._scrollPos = null;
      i._slideMode == a.ADHERING ? (i.adhering && (i._adheringBarrier = !0), i.adhere()) : i._slideMode == a.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
      this._scrollItem = null;
    }
  };

  e.prototype._onSizeChanged = function () {
    if (this.checkInited(!1)) {
      this._onScrolling();
    }
  };

  e.prototype._onItemAdaptive = function (t) {
    if (!this._sizeType && t.width != this._itemSize.width || this._sizeType && t.height != this._itemSize.height) {
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
          this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
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
        var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;

        for (var e = this._updateCounter; e < t; e++) {
          var i = this.displayData[e];

          if (i) {
            this._createOrUpdateItem(i);
          }
        }

        this._updateCounter >= this.displayItemNum - 1 ? this._doneAfterUpdate ? (this._updateCounter = 0, this._updateDone = !1, this._doneAfterUpdate = !1) : (this._updateDone = !0, this._delRedundantItem(), this._forceUpdate = !1, this._calcNearestItem(), this.slideMode == a.PAGE && (this.curPageNum = this.nearestListId)) : this._updateCounter += this.frameByFrameRenderNum;
      } else {
        if (this._updateCounter < this._numItems) {
          t = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum;

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
        var n = e.getComponent($listItem["default"]);
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
    i ? this._forceUpdate && this.renderEvent && (i._listId = t, e && (e.listId = t), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], i, t % this._actualNumItems)) : ((i = cc.instantiate(this._itemTmp))._listId = t, this.content.addChild(i), e = i.getComponent($listItem["default"]), i.listItem = e, e && (e.listId = t, e.list = this, e._registerEvent()), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], i, t % this._actualNumItems));

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
      for (; this.content.childrenCount > this._numItems;) {
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
      return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
    }

    if (o._aniDelRuning) {
      return cc.warn("Please wait for the current deletion to finish!");
    }

    var n;
    var s = o.getItemByListId(t);

    if (s) {
      n = s.getComponent($listItem["default"]);
      o._aniDelRuning = !0;
      o._aniDelCB = e;
      o._aniDelItem = s;
      o._aniDelBeforePos = s.position;
      o._aniDelBeforeScale = s.scale;
      var r = o.displayData[o.displayData.length - 1].id;
      var a = n.selected;
      n.showAni(i, function () {
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
          a ? o._selectedId = -1 : o._selectedId - 1 >= 0 && o._selectedId--;
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
          if (s = o.getItemByListId(p)) {
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
      }, !0);
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
      null == e ? e = 0.5 : e < 0 && (e = 0);
      t < 0 ? t = 0 : t >= n._numItems && (t = n._numItems - 1);

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
              cc.tween(e).to(0.1, {
                scale: 1.05
              }).to(0.1, {
                scale: 1
              }).start();
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
      if (t = r._virtual ? r.displayData[l] : r._calcExistItemPos(l)) {
        e = r._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;

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

    if ((t = r._virtual ? r.displayData[r.displayItemNum - 1] : r._calcExistItemPos(r._numItems - 1)) && t.id == r._numItems - 1) {
      e = r._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;

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
      return i._slideMode != a.PAGE ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!") : void (t < 0 || t >= i._numItems || i.curPageNum != t && (i.curPageNum = t, i.pageChangeEvent && cc.Component.EventHandler.emitEvents([i.pageChangeEvent], t), i.scrollTo(t, e)));
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
        i.height == e._itemSize.height && i.width == e._itemSize.width || (e._customSize[o] = e._sizeType ? i.height : i.width);
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

  __decorate([h({
    type: cc.Enum(r)
  })], e.prototype, "templateType", void 0);

  __decorate([h({
    type: cc.Node,
    visible: function visible() {
      return this.templateType == r.NODE;
    }
  })], e.prototype, "tmpNode", void 0);

  __decorate([h({
    type: cc.Prefab,
    visible: function visible() {
      return this.templateType == r.PREFAB;
    }
  })], e.prototype, "tmpPrefab", void 0);

  __decorate([h()], e.prototype, "_slideMode", void 0);

  __decorate([h({
    type: cc.Enum(a)
  })], e.prototype, "slideMode", null);

  __decorate([h({
    type: cc.Float,
    range: [0, 1, 0.1],
    slide: !0,
    visible: function visible() {
      return this._slideMode == a.PAGE;
    }
  })], e.prototype, "pageDistance", void 0);

  __decorate([h({
    type: cc.Component.EventHandler,
    visible: function visible() {
      return this._slideMode == a.PAGE;
    }
  })], e.prototype, "pageChangeEvent", void 0);

  __decorate([h()], e.prototype, "_virtual", void 0);

  __decorate([h({
    type: cc.Boolean
  })], e.prototype, "virtual", null);

  __decorate([h({
    visible: function visible() {
      var t = this.slideMode == a.NORMAL;

      if (!t) {
        this.cyclic = !1;
      }

      return t;
    }
  })], e.prototype, "cyclic", void 0);

  __decorate([h({
    visible: function visible() {
      return this.virtual;
    }
  })], e.prototype, "lackCenter", void 0);

  __decorate([h({
    visible: function visible() {
      var t = this.virtual && !this.lackCenter;

      if (!t) {
        this.lackSlide = !1;
      }

      return t;
    }
  })], e.prototype, "lackSlide", void 0);

  __decorate([h({
    type: cc.Integer
  })], e.prototype, "_updateRate", void 0);

  __decorate([h({
    type: cc.Integer,
    range: [0, 6, 1],
    slide: !0
  })], e.prototype, "updateRate", null);

  __decorate([h({
    type: cc.Integer,
    range: [0, 12, 1],
    slide: !0
  })], e.prototype, "frameByFrameRenderNum", void 0);

  __decorate([h({
    type: cc.Component.EventHandler
  })], e.prototype, "renderEvent", void 0);

  __decorate([h({
    type: cc.Enum(l)
  })], e.prototype, "selectedMode", void 0);

  __decorate([h({
    visible: function visible() {
      return this.selectedMode == l.SINGLE;
    }
  })], e.prototype, "repeatEventSingle", void 0);

  __decorate([h({
    type: cc.Component.EventHandler,
    visible: function visible() {
      return this.selectedMode > l.NONE;
    }
  })], e.prototype, "selectedEvent", void 0);

  __decorate([h({
    serializable: !1
  })], e.prototype, "_numItems", void 0);

  return __decorate([f, m(), y("自定义组件/List"), _(cc.ScrollView), g(-5e3)], e);
}(cc.Component);

exports["default"] = v;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXExpc3QuanMiXSwibmFtZXMiOlsibyIsInIiLCJhIiwibCIsImMiLCJ1IiwiZCIsInAiLCJjYyIsIl9kZWNvcmF0b3IiLCJmIiwiY2NjbGFzcyIsImgiLCJwcm9wZXJ0eSIsIm0iLCJkaXNhbGxvd011bHRpcGxlIiwieSIsIm1lbnUiLCJnIiwiZXhlY3V0aW9uT3JkZXIiLCJfIiwicmVxdWlyZUNvbXBvbmVudCIsIiRsaXN0SXRlbSIsInJlcXVpcmUiLCJOT0RFIiwiUFJFRkFCIiwiTk9STUFMIiwiQURIRVJJTkciLCJQQUdFIiwiTk9ORSIsIlNJTkdMRSIsIk1VTFQiLCJ2IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInRlbXBsYXRlVHlwZSIsInRtcE5vZGUiLCJ0bXBQcmVmYWIiLCJfc2xpZGVNb2RlIiwicGFnZURpc3RhbmNlIiwicGFnZUNoYW5nZUV2ZW50IiwiQ29tcG9uZW50IiwiRXZlbnRIYW5kbGVyIiwiX3ZpcnR1YWwiLCJjeWNsaWMiLCJsYWNrQ2VudGVyIiwibGFja1NsaWRlIiwiX3VwZGF0ZVJhdGUiLCJmcmFtZUJ5RnJhbWVSZW5kZXJOdW0iLCJyZW5kZXJFdmVudCIsInNlbGVjdGVkTW9kZSIsInJlcGVhdEV2ZW50U2luZ2xlIiwic2VsZWN0ZWRFdmVudCIsIl9zZWxlY3RlZElkIiwiX2ZvcmNlVXBkYXRlIiwiX3VwZGF0ZURvbmUiLCJfbnVtSXRlbXMiLCJfaW5pdGVkIiwiX25lZWRVcGRhdGVXaWRnZXQiLCJfYW5pRGVsUnVuaW5nIiwiX2RvbmVBZnRlclVwZGF0ZSIsImFkaGVyaW5nIiwiX2FkaGVyaW5nQmFycmllciIsImN1clBhZ2VOdW0iLCJfX2V4dGVuZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvdHlwZSIsImdldCIsInNldCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJfb25TY3JvbGxpbmciLCJpIiwiZ2V0SXRlbUJ5TGlzdElkIiwiX2xhc3RTZWxlY3RlZElkIiwiZ2V0Q29tcG9uZW50Iiwic2VsZWN0ZWQiLCJuIiwiZW1pdEV2ZW50cyIsIl9hY3R1YWxOdW1JdGVtcyIsInMiLCJtdWx0U2VsZWN0ZWQiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImNoZWNrSW5pdGVkIiwiZXJyb3IiLCJfcmVzaXplQ29udGVudCIsIl9jeWNsaWNOdW0iLCJzbGlkZU1vZGUiLCJuZWFyZXN0TGlzdElkIiwiY29udGVudCIsIkxheW91dCIsImVuYWJsZWQiLCJfZGVsUmVkdW5kYW50SXRlbSIsImZpcnN0TGlzdElkIiwiX2NyZWF0ZU9yVXBkYXRlSXRlbTIiLCJfdXBkYXRlQ291bnRlciIsImRpc3BsYXlJdGVtTnVtIiwiX3Njcm9sbFZpZXciLCJvbkxvYWQiLCJfaW5pdCIsIm9uRGVzdHJveSIsImlzVmFsaWQiLCJfaXRlbVRtcCIsImRlc3Ryb3kiLCJfcG9vbCIsImNsZWFyIiwib25FbmFibGUiLCJfcmVnaXN0ZXJFdmVudCIsIl9hbmlEZWxJdGVtIiwiX2FuaURlbEJlZm9yZVBvcyIsInBvc2l0aW9uIiwiX2FuaURlbEJlZm9yZVNjYWxlIiwic2NhbGUiLCJfYW5pRGVsQ0IiLCJvbkRpc2FibGUiLCJfdW5yZWdpc3RlckV2ZW50Iiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX29uVG91Y2hTdGFydCIsIl9vblRvdWNoVXAiLCJUT1VDSF9DQU5DRUwiLCJfb25Ub3VjaENhbmNlbGxlZCIsIl9vblNjcm9sbEJlZ2FuIiwiX29uU2Nyb2xsRW5kZWQiLCJTSVpFX0NIQU5HRUQiLCJfb25TaXplQ2hhbmdlZCIsIm9mZiIsIlNjcm9sbFZpZXciLCJfbGF5b3V0IiwiX2FsaWduIiwidHlwZSIsIl9yZXNpemVNb2RlIiwicmVzaXplTW9kZSIsIl9zdGFydEF4aXMiLCJzdGFydEF4aXMiLCJfdG9wR2FwIiwicGFkZGluZ1RvcCIsIl9yaWdodEdhcCIsInBhZGRpbmdSaWdodCIsIl9ib3R0b21HYXAiLCJwYWRkaW5nQm90dG9tIiwiX2xlZnRHYXAiLCJwYWRkaW5nTGVmdCIsIl9jb2x1bW5HYXAiLCJzcGFjaW5nWCIsIl9saW5lR2FwIiwic3BhY2luZ1kiLCJfY29sTGluZU51bSIsIl92ZXJ0aWNhbERpciIsInZlcnRpY2FsRGlyZWN0aW9uIiwiX2hvcml6b250YWxEaXIiLCJob3Jpem9udGFsRGlyZWN0aW9uIiwic2V0VGVtcGxhdGVJdGVtIiwiaW5zdGFudGlhdGUiLCJpbmVydGlhIiwiX29uTW91c2VXaGVlbCIsInZpcnR1YWwiLCJfbGFzdERpc3BsYXlEYXRhIiwiZGlzcGxheURhdGEiLCJOb2RlUG9vbCIsIl9wcm9jZXNzQXV0b1Njcm9sbGluZyIsImJpbmQiLCJfc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQiLCJUeXBlIiwiSE9SSVpPTlRBTCIsIkhvcml6b250YWxEaXJlY3Rpb24iLCJMRUZUX1RPX1JJR0hUIiwiX2FsaWduQ2FsY1R5cGUiLCJSSUdIVF9UT19MRUZUIiwiVkVSVElDQUwiLCJWZXJ0aWNhbERpcmVjdGlvbiIsIlRPUF9UT19CT1RUT00iLCJCT1RUT01fVE9fVE9QIiwiR1JJRCIsIkF4aXNEaXJlY3Rpb24iLCJyZW1vdmVBbGxDaGlsZHJlbiIsIm5hbWUiLCJfYXV0b1Njcm9sbEFjY3VtdWxhdGVkVGltZSIsIk1hdGgiLCJtaW4iLCJfYXV0b1Njcm9sbFRvdGFsVGltZSIsIl9hdXRvU2Nyb2xsQXR0ZW51YXRlIiwiX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uIiwiYWRkIiwiX2F1dG9TY3JvbGxUYXJnZXREZWx0YSIsIm11bCIsImdldFNjcm9sbEVuZGVkRXZlbnRUaW1pbmciLCJhYnMiLCJfaXNTY3JvbGxFbmRlZFdpdGhUaHJlc2hvbGRFdmVudEZpcmVkIiwiX2Rpc3BhdGNoRXZlbnQiLCJfYXV0b1Njcm9sbGluZyIsInN1YiIsImdldENvbnRlbnRQb3NpdGlvbiIsIl9tb3ZlQ29udGVudCIsIl9jbGFtcERlbHRhIiwiX2lzQm91bmNpbmciLCJfc2Nyb2xsaW5nIiwiUmVzaXplTW9kZSIsIkNISUxEUkVOIiwiX2l0ZW1TaXplIiwiY2VsbFNpemUiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJXaWRnZXQiLCJfc2l6ZVR5cGUiLCJmbG9vciIsIl9jdXN0b21TaXplIiwiX2dldEZpeGVkU2l6ZSIsInZhbCIsImNvdW50IiwiY2VpbCIsIl9hbGxJdGVtU2l6ZSIsIl9hbGxJdGVtU2l6ZU5vRWRnZSIsIl9jeWNsaWNQb3MxIiwiX2N5Y2xpY1BvczIiLCJfY3ljbGljQWxsSXRlbVNpemUiLCJfY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UiLCJfbGFjayIsImZyYW1lQ291bnQiLCJnZXRQb3NpdGlvbiIsIngiLCJ2MiIsImlzQXV0b1Njcm9sbGluZyIsIl9jYWxjVmlld1BvcyIsInZpZXdUb3AiLCJ2aWV3Qm90dG9tIiwidmlld1JpZ2h0Iiwidmlld0xlZnQiLCJfY2FsY0l0ZW1Qb3MiLCJyaWdodCIsImxlZnQiLCJsZW5ndGgiLCJib3R0b20iLCJ0b3AiLCJpZCIsInNvcnQiLCJfY3JlYXRlT3JVcGRhdGVJdGVtIiwiX2NhbGNOZWFyZXN0SXRlbSIsImVsYXN0aWNMZWZ0IiwiZWxhc3RpY1JpZ2h0IiwiZWxhc3RpY1RvcCIsImVsYXN0aWNCb3R0b20iLCJhbmNob3JYIiwiYW5jaG9yWSIsIl9jYWxjRXhpc3RJdGVtUG9zIiwiZ2V0SXRlbVBvcyIsInBhcnNlSW50IiwiX2JlZ2FuUG9zIiwiY3VyU2Nyb2xsSXNUb3VjaCIsInNjcm9sbFRvTGlzdElkIiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiX3BhZ2VBZGhlcmUiLCJhZGhlcmUiLCJoYXNOZXN0ZWRWaWV3R3JvdXAiLCJldmVudFBoYXNlIiwiRXZlbnQiLCJBVF9UQVJHRVQiLCJ0YXJnZXQiLCJfbGlzdElkIiwicGFyZW50IiwiX3Njcm9sbEl0ZW0iLCJfc2Nyb2xsUG9zIiwic2ltdWxhdGUiLCJfb25JdGVtQWRhcHRpdmUiLCJ1cGRhdGVBbGwiLCJfc2Nyb2xsVG9MaXN0SWQiLCJ1bnNjaGVkdWxlIiwiX3Njcm9sbFRvU28iLCJzY3JvbGxUbyIsIm1heCIsIl9zY3JvbGxUb0VuZFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInByZVBhZ2UiLCJuZXh0UGFnZSIsInVwZGF0ZSIsInNldFBvc2l0aW9uIiwiX3Jlc2V0SXRlbVNpemUiLCJzZXRDb250ZW50U2l6ZSIsImFkZENoaWxkIiwidXBkYXRlQWxpZ25tZW50Iiwic2V0U2libGluZ0luZGV4IiwiY2hpbGRyZW5Db3VudCIsImxpc3RJdGVtIiwibGlzdElkIiwibGlzdCIsIl91cGRhdGVMaXN0SXRlbSIsImNoaWxkcmVuIiwic2VsZWN0ZWRJZCIsIl91cGRhdGVJdGVtUG9zIiwiaXNOYU4iLCJzZXRNdWx0U2VsZWN0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRNdWx0U2VsZWN0ZWQiLCJoYXNNdWx0U2VsZWN0ZWQiLCJ1cGRhdGVJdGVtIiwibnVtSXRlbXMiLCJfZ2V0T3V0c2lkZUl0ZW0iLCJmaW5kIiwiaXNDYWNoZWQiLCJwdXQiLCJfZGVsU2luZ2xlSXRlbSIsInJlbW92ZUZyb21QYXJlbnQiLCJhbmlEZWxJdGVtIiwid2FybiIsInNob3dBbmkiLCJjYWxsIiwidXBkYXRlTGF5b3V0Iiwic2Nyb2xsVG9PZmZzZXQiLCJzY2hlZHVsZU9uY2UiLCJza2lwUGFnZSIsImNhbGNDdXN0b21TaXplIiwia2V5cyIsIl9fZGVjb3JhdGUiLCJFbnVtIiwidmlzaWJsZSIsIlByZWZhYiIsIkZsb2F0IiwicmFuZ2UiLCJzbGlkZSIsIkJvb2xlYW4iLCJJbnRlZ2VyIiwic2VyaWFsaXphYmxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjtBQUNBLElBQUlDLENBQUo7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjtBQUNBLElBQUlDLENBQUo7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElB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QyxDQUFDLEdBQUYsQ0FBN0MsQ0FBRCxFQUF1RGdCLENBQXZELENBQWpCO0FBQ0gsQ0E3d0RPLENBNndETDFCLEVBQUUsQ0FBQ21DLFNBN3dERSxDQUFSOztBQTh3REFvUyxPQUFPLFdBQVAsR0FBa0IvUyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG87XHJcbnZhciByO1xyXG52YXIgYTtcclxudmFyIGw7XHJcbnZhciBjO1xyXG52YXIgdTtcclxudmFyIGQ7XHJcbnZhciBwID0gY2MuX2RlY29yYXRvcjtcclxudmFyIGYgPSBwLmNjY2xhc3M7XHJcbnZhciBoID0gcC5wcm9wZXJ0eTtcclxudmFyIG0gPSBwLmRpc2FsbG93TXVsdGlwbGU7XHJcbnZhciB5ID0gcC5tZW51O1xyXG52YXIgZyA9IHAuZXhlY3V0aW9uT3JkZXI7XHJcbnZhciBfID0gcC5yZXF1aXJlQ29tcG9uZW50O1xyXG52YXIgJGxpc3RJdGVtID0gcmVxdWlyZShcIi4vTGlzdEl0ZW1cIik7XHJcbihkID0gciB8fCAociA9IHt9KSlbKGQuTk9ERSA9IDEpXSA9IFwiTk9ERVwiO1xyXG5kWyhkLlBSRUZBQiA9IDIpXSA9IFwiUFJFRkFCXCI7XHJcbih1ID0gYSB8fCAoYSA9IHt9KSlbKHUuTk9STUFMID0gMSldID0gXCJOT1JNQUxcIjtcclxudVsodS5BREhFUklORyA9IDIpXSA9IFwiQURIRVJJTkdcIjtcclxudVsodS5QQUdFID0gMyldID0gXCJQQUdFXCI7XHJcbihjID0gbCB8fCAobCA9IHt9KSlbKGMuTk9ORSA9IDApXSA9IFwiTk9ORVwiO1xyXG5jWyhjLlNJTkdMRSA9IDEpXSA9IFwiU0lOR0xFXCI7XHJcbmNbKGMuTVVMVCA9IDIpXSA9IFwiTVVMVFwiO1xyXG52YXIgdiA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLnRlbXBsYXRlVHlwZSA9IHIuTk9ERTtcclxuICAgICAgICBlLnRtcE5vZGUgPSBudWxsO1xyXG4gICAgICAgIGUudG1wUHJlZmFiID0gbnVsbDtcclxuICAgICAgICBlLl9zbGlkZU1vZGUgPSBhLk5PUk1BTDtcclxuICAgICAgICBlLnBhZ2VEaXN0YW5jZSA9IDAuMztcclxuICAgICAgICBlLnBhZ2VDaGFuZ2VFdmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZS5fdmlydHVhbCA9ICEwO1xyXG4gICAgICAgIGUuY3ljbGljID0gITE7XHJcbiAgICAgICAgZS5sYWNrQ2VudGVyID0gITE7XHJcbiAgICAgICAgZS5sYWNrU2xpZGUgPSAhMTtcclxuICAgICAgICBlLl91cGRhdGVSYXRlID0gMDtcclxuICAgICAgICBlLmZyYW1lQnlGcmFtZVJlbmRlck51bSA9IDA7XHJcbiAgICAgICAgZS5yZW5kZXJFdmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZS5zZWxlY3RlZE1vZGUgPSBsLk5PTkU7XHJcbiAgICAgICAgZS5yZXBlYXRFdmVudFNpbmdsZSA9ICExO1xyXG4gICAgICAgIGUuc2VsZWN0ZWRFdmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZS5fc2VsZWN0ZWRJZCA9IC0xO1xyXG4gICAgICAgIGUuX2ZvcmNlVXBkYXRlID0gITE7XHJcbiAgICAgICAgZS5fdXBkYXRlRG9uZSA9ICEwO1xyXG4gICAgICAgIGUuX251bUl0ZW1zID0gMDtcclxuICAgICAgICBlLl9pbml0ZWQgPSAhMTtcclxuICAgICAgICBlLl9uZWVkVXBkYXRlV2lkZ2V0ID0gITE7XHJcbiAgICAgICAgZS5fYW5pRGVsUnVuaW5nID0gITE7XHJcbiAgICAgICAgZS5fZG9uZUFmdGVyVXBkYXRlID0gITE7XHJcbiAgICAgICAgZS5hZGhlcmluZyA9ICExO1xyXG4gICAgICAgIGUuX2FkaGVyaW5nQmFycmllciA9ICExO1xyXG4gICAgICAgIGUuY3VyUGFnZU51bSA9IDA7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgICBfX2V4dGVuZHMoZSwgdCk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsIFwic2xpZGVNb2RlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2xpZGVNb2RlID0gdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcInZpcnR1YWxcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgaWYgKG51bGwgIT0gdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlydHVhbCA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKDAgIT0gdGhpcy5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcInVwZGF0ZVJhdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlUmF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgaWYgKHQgPj0gMCAmJiB0IDw9IDYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJhdGUgPSB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcclxuICAgICAgICBjb25maWd1cmFibGU6ICEwXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJzZWxlY3RlZElkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHZhciBlO1xyXG4gICAgICAgICAgICB2YXIgaSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoaS5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgbC5TSU5HTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpLnJlcGVhdEV2ZW50U2luZ2xlICYmIHQgPT0gaS5fc2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUgPSBpLmdldEl0ZW1CeUxpc3RJZCh0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICBpLl9zZWxlY3RlZElkID49IDAgPyAoaS5fbGFzdFNlbGVjdGVkSWQgPSBpLl9zZWxlY3RlZElkKSA6IChpLl9sYXN0U2VsZWN0ZWRJZCA9IG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGkuX3NlbGVjdGVkSWQgPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChvID0gZS5nZXRDb21wb25lbnQoJGxpc3RJdGVtLmRlZmF1bHQpKS5zZWxlY3RlZCA9ICEwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaS5fbGFzdFNlbGVjdGVkSWQgPj0gMCAmJiBpLl9sYXN0U2VsZWN0ZWRJZCAhPSBpLl9zZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gaS5nZXRJdGVtQnlMaXN0SWQoaS5fbGFzdFNlbGVjdGVkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDb21wb25lbnQoJGxpc3RJdGVtLmRlZmF1bHQpLnNlbGVjdGVkID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaS5zZWxlY3RlZEV2ZW50XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsID09IGkuX2xhc3RTZWxlY3RlZElkID8gbnVsbCA6IGkuX2xhc3RTZWxlY3RlZElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGwuTVVMVDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlID0gaS5nZXRJdGVtQnlMaXN0SWQodCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbyA9IGUuZ2V0Q29tcG9uZW50KCRsaXN0SXRlbS5kZWZhdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaS5fc2VsZWN0ZWRJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuX2xhc3RTZWxlY3RlZElkID0gaS5fc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaS5fc2VsZWN0ZWRJZCA9IHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSAhby5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICBvLnNlbGVjdGVkID0gcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGkubXVsdFNlbGVjdGVkLmluZGV4T2YodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcyAmJiByIDwgMCA/IGkubXVsdFNlbGVjdGVkLnB1c2godCkgOiAhcyAmJiByID49IDAgJiYgaS5tdWx0U2VsZWN0ZWQuc3BsaWNlKHIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpLnNlbGVjdGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2kuc2VsZWN0ZWRFdmVudF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSBpLl9sYXN0U2VsZWN0ZWRJZCA/IG51bGwgOiBpLl9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogITEsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsIFwibnVtSXRlbXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0dWFsTnVtSXRlbXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGUuY2hlY2tJbml0ZWQoITEpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSB0IHx8IHQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJudW1JdGVtcyBzZXQgdGhlIHdyb25nOjpcIiwgdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuX2FjdHVhbE51bUl0ZW1zID0gZS5fbnVtSXRlbXMgPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGUuX2ZvcmNlVXBkYXRlID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5fcmVzaXplQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmN5Y2xpYyAmJiAoZS5fbnVtSXRlbXMgPSBlLl9jeWNsaWNOdW0gKiBlLl9udW1JdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIHx8IGUuc2xpZGVNb2RlICE9IGEuUEFHRSB8fCAoZS5jdXJQYWdlTnVtID0gZS5uZWFyZXN0TGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jeWNsaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fbnVtSXRlbXMgPSBlLl9jeWNsaWNOdW0gKiBlLl9udW1JdGVtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmVuYWJsZWQgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZmlyc3RMaXN0SWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiBlLl9udW1JdGVtcyA/IGUuX251bUl0ZW1zIDogZS5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBvOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fY3JlYXRlT3JVcGRhdGVJdGVtMihuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDwgZS5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fdXBkYXRlQ291bnRlciA9IGUuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl91cGRhdGVEb25lID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgZS5fbnVtSXRlbXM7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRpc3BsYXlJdGVtTnVtID0gZS5fbnVtSXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcInNjcm9sbFZpZXdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVmlldztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcclxuICAgIH0pO1xyXG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQuX2l0ZW1UbXApKSB7XHJcbiAgICAgICAgICAgIHQuX2l0ZW1UbXAuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0LnRtcE5vZGUpKSB7XHJcbiAgICAgICAgICAgIHQudG1wTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0Ll9wb29sKSB7XHJcbiAgICAgICAgICAgIHQuX3Bvb2wuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICAgICBpZiAodGhpcy5fYW5pRGVsUnVuaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaURlbFJ1bmluZyA9ICExO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW5pRGVsSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaURlbEJlZm9yZVBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaURlbEl0ZW0ucG9zaXRpb24gPSB0aGlzLl9hbmlEZWxCZWZvcmVQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbEJlZm9yZVBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmlEZWxCZWZvcmVTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaURlbEl0ZW0uc2NhbGUgPSB0aGlzLl9hbmlEZWxCZWZvcmVTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYW5pRGVsQmVmb3JlU2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYW5pRGVsSXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW5pRGVsQ0IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaURlbENCKCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYW5pRGVsQ0I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUub25EaXNhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3VucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLl9yZWdpc3RlckV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgITApO1xyXG4gICAgICAgIHQubm9kZS5vbihcInRvdWNoLXVwXCIsIHQuX29uVG91Y2hVcCwgdCk7XHJcbiAgICAgICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgITApO1xyXG4gICAgICAgIHQubm9kZS5vbihcInNjcm9sbC1iZWdhblwiLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCAhMCk7XHJcbiAgICAgICAgdC5ub2RlLm9uKFwic2Nyb2xsLWVuZGVkXCIsIHQuX29uU2Nyb2xsRW5kZWQsIHQsICEwKTtcclxuICAgICAgICB0Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdC5fb25TY3JvbGxpbmcsIHQsICEwKTtcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fdW5yZWdpc3RlckV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsICEwKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKFwidG91Y2gtdXBcIiwgdC5fb25Ub3VjaFVwLCB0KTtcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgITApO1xyXG4gICAgICAgIHQubm9kZS5vZmYoXCJzY3JvbGwtYmVnYW5cIiwgdC5fb25TY3JvbGxCZWdhbiwgdCwgITApO1xyXG4gICAgICAgIHQubm9kZS5vZmYoXCJzY3JvbGwtZW5kZWRcIiwgdC5fb25TY3JvbGxFbmRlZCwgdCwgITApO1xyXG4gICAgICAgIHQubm9kZS5vZmYoXCJzY3JvbGxpbmdcIiwgdC5fb25TY3JvbGxpbmcsIHQsICEwKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdC5fb25TaXplQ2hhbmdlZCwgdCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5faW5pdGVkKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcgPSB0Lm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQgPSB0Ll9zY3JvbGxWaWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmICh0LmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHQuX2xheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAgICAgICAgIHQuX2FsaWduID0gdC5fbGF5b3V0LnR5cGU7XHJcbiAgICAgICAgICAgICAgICB0Ll9yZXNpemVNb2RlID0gdC5fbGF5b3V0LnJlc2l6ZU1vZGU7XHJcbiAgICAgICAgICAgICAgICB0Ll9zdGFydEF4aXMgPSB0Ll9sYXlvdXQuc3RhcnRBeGlzO1xyXG4gICAgICAgICAgICAgICAgdC5fdG9wR2FwID0gdC5fbGF5b3V0LnBhZGRpbmdUb3A7XHJcbiAgICAgICAgICAgICAgICB0Ll9yaWdodEdhcCA9IHQuX2xheW91dC5wYWRkaW5nUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0Ll9ib3R0b21HYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIHQuX2xlZnRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0xlZnQ7XHJcbiAgICAgICAgICAgICAgICB0Ll9jb2x1bW5HYXAgPSB0Ll9sYXlvdXQuc3BhY2luZ1g7XHJcbiAgICAgICAgICAgICAgICB0Ll9saW5lR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdZO1xyXG4gICAgICAgICAgICAgICAgdC5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgIHQuX3ZlcnRpY2FsRGlyID0gdC5fbGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdC5faG9yaXpvbnRhbERpciA9IHQuX2xheW91dC5ob3Jpem9udGFsRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdC5zZXRUZW1wbGF0ZUl0ZW0oY2MuaW5zdGFudGlhdGUodC50ZW1wbGF0ZVR5cGUgPT0gci5QUkVGQUIgPyB0LnRtcFByZWZhYiA6IHQudG1wTm9kZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEodC5fc2xpZGVNb2RlICE9IGEuQURIRVJJTkcgJiYgdC5fc2xpZGVNb2RlICE9IGEuUEFHRSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LmluZXJ0aWEgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdC52aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5sYWNrQ2VudGVyID0gITE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0Ll9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIHQuZGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIHQuX3Bvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICAgICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gITE7XHJcbiAgICAgICAgICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIHQuX3VwZGF0ZURvbmUgPSAhMDtcclxuICAgICAgICAgICAgICAgIHQuY3VyUGFnZU51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5jeWNsaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9wcm9jZXNzQXV0b1Njcm9sbGluZyA9IHRoaXMuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nLmJpbmQodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHQuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgdC5faW5pdGVkID0gITA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcih0Lm5vZGUubmFtZSArIFwiJ3MgY2MuU2Nyb2xsVmlldyB1bnNldCBjb250ZW50IVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fcHJvY2Vzc0F1dG9TY3JvbGxpbmcgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxBY2N1bXVsYXRlZFRpbWUgKz0gMSAqIHQ7XHJcbiAgICAgICAgdmFyIGUgPSBNYXRoLm1pbigxLCB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lIC8gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFRvdGFsVGltZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxBdHRlbnVhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGkgPSBlIC0gMTtcclxuICAgICAgICAgICAgZSA9IGkgKiBpICogaSAqIGkgKiBpICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5hZGQodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFRhcmdldERlbHRhLm11bChlKSk7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzLl9zY3JvbGxWaWV3LmdldFNjcm9sbEVuZGVkRXZlbnRUaW1pbmcoKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguYWJzKGUgLSAxKSA8PSBuO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgTWF0aC5hYnMoZSAtIDEpIDw9IHRoaXMuX3Njcm9sbFZpZXcuZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZygpICYmXHJcbiAgICAgICAgICAgICF0aGlzLl9zY3JvbGxWaWV3Ll9pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudChcInNjcm9sbC1lbmRlZC13aXRoLXRocmVzaG9sZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5faXNTY3JvbGxFbmRlZFdpdGhUaHJlc2hvbGRFdmVudEZpcmVkID0gITA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxpbmcgPSAhMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHIgPSBvLnN1Yih0aGlzLl9zY3JvbGxWaWV3LmdldENvbnRlbnRQb3NpdGlvbigpKTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9tb3ZlQ29udGVudCh0aGlzLl9zY3JvbGxWaWV3Ll9jbGFtcERlbHRhKHIpLCBzKTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9kaXNwYXRjaEV2ZW50KFwic2Nyb2xsaW5nXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbGluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9pc0JvdW5jaW5nID0gITE7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX3Njcm9sbGluZyA9ICExO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9kaXNwYXRjaEV2ZW50KFwic2Nyb2xsLWVuZGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5zZXRUZW1wbGF0ZUl0ZW0gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcztcclxuICAgICAgICAgICAgZS5faXRlbVRtcCA9IHQ7XHJcbiAgICAgICAgICAgIGUuX3Jlc2l6ZU1vZGUgPT0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ0hJTERSRU5cclxuICAgICAgICAgICAgICAgID8gKGUuX2l0ZW1TaXplID0gZS5fbGF5b3V0LmNlbGxTaXplKVxyXG4gICAgICAgICAgICAgICAgOiAoZS5faXRlbVNpemUgPSBjYy5zaXplKHQud2lkdGgsIHQuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIHZhciBpID0gdC5nZXRDb21wb25lbnQoJGxpc3RJdGVtLmRlZmF1bHQpO1xyXG4gICAgICAgICAgICB2YXIgbyA9ICExO1xyXG4gICAgICAgICAgICBpZiAoIWkpIHtcclxuICAgICAgICAgICAgICAgIG8gPSAhMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobykge1xyXG4gICAgICAgICAgICAgICAgZS5zZWxlY3RlZE1vZGUgPSBsLk5PTkU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChpID0gdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KSkgJiYgaS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBlLl9uZWVkVXBkYXRlV2lkZ2V0ID0gITA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUuc2VsZWN0ZWRNb2RlID09IGwuTVVMVCkge1xyXG4gICAgICAgICAgICAgICAgZS5tdWx0U2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2ggKGUuX2FsaWduKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5fY29sTGluZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5fc2l6ZVR5cGUgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5fY29sTGluZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5fc2l6ZVR5cGUgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUuY29udGVudC53aWR0aCAtIGUuX2xlZnRHYXAgLSBlLl9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKChuICsgZS5fY29sdW1uR2FwKSAvIChlLl9pdGVtU2l6ZS53aWR0aCArIGUuX2NvbHVtbkdhcCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fc2l6ZVR5cGUgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBlLmNvbnRlbnQuaGVpZ2h0IC0gZS5fdG9wR2FwIC0gZS5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fY29sTGluZU51bSA9IE1hdGguZmxvb3IoKHMgKyBlLl9saW5lR2FwKSAvIChlLl9pdGVtU2l6ZS5oZWlnaHQgKyBlLl9saW5lR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9zaXplVHlwZSA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jaGVja0luaXRlZCA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xyXG4gICAgICAgICAgICB0ID0gITA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2luaXRlZCB8fCAodCAmJiBjYy5lcnJvcihcIkxpc3QgaW5pdGlhbGl6YXRpb24gbm90IGNvbXBsZXRlZCFcIiksICExKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fcmVzaXplQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdDtcclxuICAgICAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICAgICAgc3dpdGNoIChlLl9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5fZ2V0Rml4ZWRTaXplKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLl9sZWZ0R2FwICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaS52YWwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLl9pdGVtU2l6ZS53aWR0aCAqIChlLl9udW1JdGVtcyAtIGkuY291bnQpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5fY29sdW1uR2FwICogKGUuX251bUl0ZW1zIC0gMSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLl9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdCA9IGUuX2xlZnRHYXAgKyBlLl9pdGVtU2l6ZS53aWR0aCAqIGUuX251bUl0ZW1zICsgZS5fY29sdW1uR2FwICogKGUuX251bUl0ZW1zIC0gMSkgKyBlLl9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgZS5fY3VzdG9tU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gKChpID0gZS5fZ2V0Rml4ZWRTaXplKG51bGwpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICh0ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLl90b3BHYXAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkudmFsICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9pdGVtU2l6ZS5oZWlnaHQgKiAoZS5fbnVtSXRlbXMgLSBpLmNvdW50KSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fbGluZUdhcCAqIChlLl9udW1JdGVtcyAtIDEpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9ib3R0b21HYXApKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKHQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3RvcEdhcCArIGUuX2l0ZW1TaXplLmhlaWdodCAqIGUuX251bUl0ZW1zICsgZS5fbGluZUdhcCAqIChlLl9udW1JdGVtcyAtIDEpICsgZS5fYm90dG9tR2FwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKChlLmxhY2tDZW50ZXIgJiYgKGUubGFja0NlbnRlciA9ICExKSwgZS5fc3RhcnRBeGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBNYXRoLmNlaWwoZS5fbnVtSXRlbXMgLyBlLl9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGUuX3RvcEdhcCArIGUuX2l0ZW1TaXplLmhlaWdodCAqIG8gKyBlLl9saW5lR2FwICogKG8gLSAxKSArIGUuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBNYXRoLmNlaWwoZS5fbnVtSXRlbXMgLyBlLl9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGUuX2xlZnRHYXAgKyBlLl9pdGVtU2l6ZS53aWR0aCAqIG4gKyBlLl9jb2x1bW5HYXAgKiAobiAtIDEpICsgZS5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzID0gZS5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgICAgIHMuZW5hYmxlZCA9ICExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLl9hbGxJdGVtU2l6ZSA9IHQ7XHJcbiAgICAgICAgZS5fYWxsSXRlbVNpemVOb0VkZ2UgPSBlLl9hbGxJdGVtU2l6ZSAtIChlLl9zaXplVHlwZSA/IGUuX3RvcEdhcCArIGUuX2JvdHRvbUdhcCA6IGUuX2xlZnRHYXAgKyBlLl9yaWdodEdhcCk7XHJcbiAgICAgICAgaWYgKGUuY3ljbGljKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gZS5fc2l6ZVR5cGUgPyBlLm5vZGUuaGVpZ2h0IDogZS5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICBlLl9jeWNsaWNQb3MxID0gMDtcclxuICAgICAgICAgICAgciAtPSBlLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICBlLl9jeWNsaWNOdW0gPSBNYXRoLmNlaWwociAvIGUuX2FsbEl0ZW1TaXplTm9FZGdlKSArIDE7XHJcbiAgICAgICAgICAgIHZhciBhID0gZS5fc2l6ZVR5cGUgPyBlLl9saW5lR2FwIDogZS5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICBlLl9jeWNsaWNQb3MyID0gZS5fY3ljbGljUG9zMSArIGUuX2FsbEl0ZW1TaXplTm9FZGdlICsgYTtcclxuICAgICAgICAgICAgZS5fY3ljbGljQWxsSXRlbVNpemUgPSBlLl9hbGxJdGVtU2l6ZSArIGUuX2FsbEl0ZW1TaXplTm9FZGdlICogKGUuX2N5Y2xpY051bSAtIDEpICsgYSAqIChlLl9jeWNsaWNOdW0gLSAxKTtcclxuICAgICAgICAgICAgZS5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgPSBlLl9hbGxJdGVtU2l6ZU5vRWRnZSAqIGUuX2N5Y2xpY051bTtcclxuICAgICAgICAgICAgZS5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgKz0gYSAqIChlLl9jeWNsaWNOdW0gLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5fbGFjayA9ICFlLmN5Y2xpYyAmJiBlLl9hbGxJdGVtU2l6ZSA8IChlLl9zaXplVHlwZSA/IGUubm9kZS5oZWlnaHQgOiBlLm5vZGUud2lkdGgpO1xyXG4gICAgICAgIHZhciBsID0gKGUuX2xhY2sgJiYgZS5sYWNrQ2VudGVyKSB8fCAhZS5sYWNrU2xpZGUgPyAwLjEgOiAwO1xyXG4gICAgICAgIHZhciBjID0gZS5fbGFja1xyXG4gICAgICAgICAgICA/IChlLl9zaXplVHlwZSA/IGUubm9kZS5oZWlnaHQgOiBlLm5vZGUud2lkdGgpIC0gbFxyXG4gICAgICAgICAgICA6IGUuY3ljbGljXHJcbiAgICAgICAgICAgID8gZS5fY3ljbGljQWxsSXRlbVNpemVcclxuICAgICAgICAgICAgOiBlLl9hbGxJdGVtU2l6ZTtcclxuICAgICAgICBpZiAoYyA8IDApIHtcclxuICAgICAgICAgICAgYyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUuX3NpemVUeXBlID8gKGUuY29udGVudC5oZWlnaHQgPSBjKSA6IChlLmNvbnRlbnQud2lkdGggPSBjKTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fb25TY3JvbGxpbmcgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcclxuICAgICAgICAgICAgdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudWxsID09IHRoaXMuZnJhbWVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2ZvcmNlVXBkYXRlICYmIHQgJiYgXCJzY3JvbGwtZW5kZWRcIiAhPSB0LnR5cGUgJiYgdGhpcy5mcmFtZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQtLTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FuaURlbFJ1bmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3ljbGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlID0gdGhpcy5fc2l6ZVR5cGUgPyBlLnkgOiBlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSArICh0aGlzLl9zaXplVHlwZSA/IHRoaXMuX2xpbmVHYXAgOiB0aGlzLl9jb2x1bW5HYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy5fc2l6ZVR5cGUgPyBjYy52MigwLCBpKSA6IGNjLnYyKGksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID4gLXRoaXMuX2N5Y2xpY1BvczFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgodGhpcy5jb250ZW50LnggPSAtdGhpcy5fY3ljbGljUG9zMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uc3ViKG8pKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGUgPCAtdGhpcy5fY3ljbGljUG9zMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5hZGQobykpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlIDwgdGhpcy5fY3ljbGljUG9zMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZChvKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlID4gdGhpcy5fY3ljbGljUG9zMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihvKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPCB0aGlzLl9jeWNsaWNQb3MxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKG8pKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGUgPiB0aGlzLl9jeWNsaWNQb3MyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uc3ViKG8pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA+IC10aGlzLl9jeWNsaWNQb3MxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihvKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlIDwgLXRoaXMuX2N5Y2xpY1BvczIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKG8pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG47XHJcbiAgICAgICAgICAgICAgICB2YXIgcztcclxuICAgICAgICAgICAgICAgIHZhciByO1xyXG4gICAgICAgICAgICAgICAgdmFyIGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjVmlld1BvcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZVR5cGVcclxuICAgICAgICAgICAgICAgICAgICA/ICgobiA9IHRoaXMudmlld1RvcCksIChyID0gdGhpcy52aWV3Qm90dG9tKSlcclxuICAgICAgICAgICAgICAgICAgICA6ICgocyA9IHRoaXMudmlld1JpZ2h0KSwgKGEgPSB0aGlzLnZpZXdMZWZ0KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSB0aGlzLl9udW1JdGVtcyAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9ICExOyBjIDw9IHUgJiYgIWQ7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHRoaXMuX2NhbGNJdGVtUG9zKGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5yaWdodCA+PSBhICYmIGwubGVmdCA8PSBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGlzcGxheURhdGEucHVzaChsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwICE9IGMgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwICYmIChkID0gITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLmJvdHRvbSA8PSBuICYmIGwudG9wID49IHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDAgIT0gYyAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDAgJiYgKGQgPSAhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLmJvdHRvbSA8PSBuICYmIGwudG9wID49IHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmRpc3BsYXlEYXRhLnB1c2gobClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwICE9IGMgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwICYmIChkID0gITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnJpZ2h0ID49IGEgJiYgbC5sZWZ0IDw9IHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmRpc3BsYXlEYXRhLnB1c2gobClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwICE9IGMgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwICYmIChkID0gITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gKGEgLSB0aGlzLl9sZWZ0R2FwKSAvIHA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSAocyAtIHRoaXMuX2xlZnRHYXApIC8gcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gKC1zIC0gdGhpcy5fcmlnaHRHYXApIC8gcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9ICgtYSAtIHRoaXMuX3JpZ2h0R2FwKSAvIHA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICgtbiAtIHRoaXMuX3RvcEdhcCkgLyBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gKC1yIC0gdGhpcy5fdG9wR2FwKSAvIGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChyIC0gdGhpcy5fYm90dG9tR2FwKSAvIGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSAobiAtIHRoaXMuX2JvdHRvbUdhcCkgLyBmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguZmxvb3IoYykgKiB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IE1hdGguY2VpbCh1KSAqIHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoLS11ID49IHRoaXMuX251bUl0ZW1zICYmICh1ID0gdGhpcy5fbnVtSXRlbXMgLSAxKTsgYyA8PSB1OyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2godGhpcy5fY2FsY0l0ZW1Qb3MoYykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPD0gMCB8fCAhdGhpcy5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdExpc3RJZCA9IHRoaXMuZGlzcGxheURhdGFbMF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SXRlbU51bSA9IHRoaXMuZGlzcGxheURhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5fbGFzdERpc3BsYXlEYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHRoaXMuZGlzcGxheUl0ZW1OdW0gIT0gaDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEuc29ydChmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0IC0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdExpc3RJZCAhPSB0aGlzLl9sYXN0RGlzcGxheURhdGFbMF0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGFbdGhpcy5kaXNwbGF5SXRlbU51bSAtIDFdLmlkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVtoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSB8fCBtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX251bUl0ZW1zID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHRoaXMuX3VwZGF0ZURvbmUgPyAodGhpcy5fdXBkYXRlQ291bnRlciA9IDApIDogKHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9ICEwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl91cGRhdGVEb25lID0gITEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKCh0aGlzLl91cGRhdGVDb3VudGVyID0gMCksICh0aGlzLl91cGRhdGVEb25lID0gITApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuZGlzcGxheUl0ZW1OdW07IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0odGhpcy5kaXNwbGF5RGF0YVt5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2NhbGNWaWV3UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcy5jb250ZW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSB0LnggPiAwID8gdC54IDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSAodC54IDwgMCA/IC10LnggOiAwKSAtIHRoaXMuZWxhc3RpY0xlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IHRoaXMudmlld0xlZnQgKyB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNSaWdodCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPiB0aGlzLmNvbnRlbnQud2lkdGggPyBNYXRoLmFicyh0aGlzLnZpZXdSaWdodCAtIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgKz0gdGhpcy5lbGFzdGljUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSB0LnggPCAwID8gLXQueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9ICh0LnggPiAwID8gLXQueCA6IDApICsgdGhpcy5lbGFzdGljUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMZWZ0ID0gdGhpcy52aWV3UmlnaHQgLSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNMZWZ0ID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdMZWZ0IDwgLXRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld0xlZnQgKyB0aGlzLmNvbnRlbnQud2lkdGgpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgLT0gdGhpcy5lbGFzdGljTGVmdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSB0LnkgPCAwID8gTWF0aC5hYnModC55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSAodC55ID4gMCA/IC10LnkgOiAwKSArIHRoaXMuZWxhc3RpY1RvcDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0JvdHRvbSA9IHRoaXMudmlld1RvcCAtIHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNCb3R0b20gPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0JvdHRvbSA8IC10aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3Qm90dG9tICsgdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tICs9IHRoaXMuZWxhc3RpY0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNCb3R0b20gPSB0LnkgPiAwID8gTWF0aC5hYnModC55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSAodC55IDwgMCA/IC10LnkgOiAwKSAtIHRoaXMuZWxhc3RpY0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCA9IHRoaXMudmlld0JvdHRvbSArIHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSB0aGlzLnZpZXdUb3AgPiB0aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3VG9wIC0gdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VG9wIC09IHRoaXMuZWxhc3RpY1RvcDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2NhbGNJdGVtUG9zID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZTtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgbztcclxuICAgICAgICB2YXIgbjtcclxuICAgICAgICB2YXIgcztcclxuICAgICAgICB2YXIgcjtcclxuICAgICAgICB2YXIgYTtcclxuICAgICAgICB2YXIgbDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5fZ2V0Rml4ZWRTaXplKHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGVmdEdhcCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqICh0IC0gYy5jb3VudCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjLnZhbCArIHRoaXMuX2NvbHVtbkdhcCAqIGMuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9ICh1ID0gdGhpcy5fY3VzdG9tU2l6ZVt0XSkgPiAwID8gdSA6IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHRoaXMuX2xlZnRHYXAgKyAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzIC09IHRoaXMuX2xlZnRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzICs9IHRoaXMuY29udGVudC53aWR0aCAvIDIgLSB0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAociA9IHMgKyBlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHMgKyB0aGlzLl9pdGVtVG1wLmFuY2hvclggKiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbVRtcC55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21TaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgoYyA9IHRoaXMuX2dldEZpeGVkU2l6ZSh0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC10aGlzLl9yaWdodEdhcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogKHQgLSBjLmNvdW50KSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYy52YWwgKyB0aGlzLl9jb2x1bW5HYXAgKiBjLmNvdW50KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlID0gKHUgPSB0aGlzLl9jdXN0b21TaXplW3RdKSA+IDAgPyB1IDogdGhpcy5faXRlbVNpemUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoKHIgPSAtdGhpcy5fcmlnaHRHYXAgLSAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlID0gdGhpcy5faXRlbVNpemUud2lkdGgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciArPSB0aGlzLl9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgLT0gdGhpcy5jb250ZW50LndpZHRoIC8gMiAtIHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IChzID0gciAtIGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcyArIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1c3RvbVNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKChjID0gdGhpcy5fZ2V0Rml4ZWRTaXplKHQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG8gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXRoaXMuX3RvcEdhcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAodCAtIGMuY291bnQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjLnZhbCArIHRoaXMuX2xpbmVHYXAgKiBjLmNvdW50KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID0gKHUgPSB0aGlzLl9jdXN0b21TaXplW3RdKSA+IDAgPyB1IDogdGhpcy5faXRlbVNpemUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKChvID0gLXRoaXMuX3RvcEdhcCAtICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvICs9IHRoaXMuX3RvcEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gLT0gdGhpcy5jb250ZW50LmhlaWdodCAvIDIgLSB0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAobiA9IG8gLSBpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IG4gKyB0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1c3RvbVNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKChjID0gdGhpcy5fZ2V0Rml4ZWRTaXplKHQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm90dG9tR2FwICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqICh0IC0gYy5jb3VudCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMudmFsICsgdGhpcy5fbGluZUdhcCAqIGMuY291bnQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSAodSA9IHRoaXMuX2N1c3RvbVNpemVbdF0pID4gMCA/IHUgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoKG4gPSB0aGlzLl9ib3R0b21HYXAgKyAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiB0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbiAtPSB0aGlzLl9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuICs9IHRoaXMuY29udGVudC5oZWlnaHQgLyAyIC0gdGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogKG8gPSBuICsgaSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IG4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9pdGVtVG1wLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBuICsgdGhpcy5faXRlbVRtcC5hbmNob3JZICogaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IE1hdGguZmxvb3IodCAvIHRoaXMuX2NvbExpbmVOdW0pO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvID0gLXRoaXMuX3RvcEdhcCAtICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGQpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1TaXplLmhlaWdodCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IHRoaXMuX2JvdHRvbUdhcCArICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGQpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBuICsgdGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGEgPSB0aGlzLl9sZWZ0R2FwICsgKHQgJSB0aGlzLl9jb2xMaW5lTnVtKSAqICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faG9yaXpvbnRhbERpcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIC09IHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclgpICogdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSAtPSAoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzID0gdGhpcy5fbGVmdEdhcCArICh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBkKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBzICsgdGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSAtPSB0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSAtdGhpcy5fcmlnaHRHYXAgLSAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogZCkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbVNpemUud2lkdGgpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSArPSAoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChsID0gLXRoaXMuX3RvcEdhcCAtICh0ICUgdGhpcy5fY29sTGluZU51bSkgKiAodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVydGljYWxEaXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsIC09ICgxIC0gdGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsICs9ICgxIC0gdGhpcy5jb250ZW50LmFuY2hvclkpICogdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCAtPSB0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCArPSB0aGlzLmNvbnRlbnQuYW5jaG9yWSAqIHRoaXMuY29udGVudC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCAqPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fY2FsY0V4aXN0SXRlbVBvcyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZCh0KTtcclxuICAgICAgICBpZiAoIWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpID0ge1xyXG4gICAgICAgICAgICBpZDogdCxcclxuICAgICAgICAgICAgeDogZS54LFxyXG4gICAgICAgICAgICB5OiBlLnlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NpemVUeXBlXHJcbiAgICAgICAgICAgID8gKChpLnRvcCA9IGUueSArIGUuaGVpZ2h0ICogKDEgLSBlLmFuY2hvclkpKSwgKGkuYm90dG9tID0gZS55IC0gZS5oZWlnaHQgKiBlLmFuY2hvclkpKVxyXG4gICAgICAgICAgICA6ICgoaS5sZWZ0ID0gZS54IC0gZS53aWR0aCAqIGUuYW5jaG9yWCksIChpLnJpZ2h0ID0gZS54ICsgZS53aWR0aCAqICgxIC0gZS5hbmNob3JYKSkpO1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmdldEl0ZW1Qb3MgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsIHx8IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID8gdGhpcy5fY2FsY0l0ZW1Qb3ModCkgOiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKHQpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLl9nZXRGaXhlZFNpemUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG51bGwgPT0gdCkge1xyXG4gICAgICAgICAgICB0ID0gdGhpcy5fbnVtSXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlID0gMDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgbyBpbiB0aGlzLl9jdXN0b21TaXplKVxyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQobykgPCB0KSB7XHJcbiAgICAgICAgICAgICAgICBlICs9IHRoaXMuX2N1c3RvbVNpemVbb107XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWw6IGUsXHJcbiAgICAgICAgICAgIGNvdW50OiBpXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fb25TY3JvbGxCZWdhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9iZWdhblBvcyA9IHRoaXMuX3NpemVUeXBlID8gdGhpcy52aWV3VG9wIDogdGhpcy52aWV3TGVmdDtcclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fb25TY3JvbGxFbmRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdC5jdXJTY3JvbGxJc1RvdWNoID0gITE7XHJcbiAgICAgICAgaWYgKG51bGwgIT0gdC5zY3JvbGxUb0xpc3RJZCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuc2Nyb2xsVG9MaXN0SWQpO1xyXG4gICAgICAgICAgICB0LnNjcm9sbFRvTGlzdElkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4wNlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICB0Ll9zbGlkZU1vZGUgIT0gYS5BREhFUklORyB8fCB0LmFkaGVyaW5nXHJcbiAgICAgICAgICAgID8gdC5fc2xpZGVNb2RlID09IGEuUEFHRSAmJiAobnVsbCAhPSB0Ll9iZWdhblBvcyAmJiB0LmN1clNjcm9sbElzVG91Y2ggPyB0aGlzLl9wYWdlQWRoZXJlKCkgOiB0LmFkaGVyZSgpKVxyXG4gICAgICAgICAgICA6IHQuYWRoZXJlKCk7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5fc2Nyb2xsVmlldy5oYXNOZXN0ZWRWaWV3R3JvdXAodCwgZSkgJiZcclxuICAgICAgICAgICAgKCh0aGlzLmN1clNjcm9sbElzVG91Y2ggPSAhMCksIHQuZXZlbnRQaGFzZSAhPT0gY2MuRXZlbnQuQVRfVEFSR0VUIHx8IHQudGFyZ2V0ICE9PSB0aGlzLm5vZGUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0LnRhcmdldDsgbnVsbCA9PSBpLl9saXN0SWQgJiYgaS5wYXJlbnQ7ICkge1xyXG4gICAgICAgICAgICAgICAgaSA9IGkucGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsICE9IGkuX2xpc3RJZCA/IGkgOiB0LnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX29uVG91Y2hVcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICB0Ll9zbGlkZU1vZGUgPT0gYS5BREhFUklOR1xyXG4gICAgICAgICAgICA/ICh0aGlzLmFkaGVyaW5nICYmICh0aGlzLl9hZGhlcmluZ0JhcnJpZXIgPSAhMCksIHQuYWRoZXJlKCkpXHJcbiAgICAgICAgICAgIDogdC5fc2xpZGVNb2RlID09IGEuUEFHRSAmJiAobnVsbCAhPSB0Ll9iZWdhblBvcyA/IHRoaXMuX3BhZ2VBZGhlcmUoKSA6IHQuYWRoZXJlKCkpO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLl9vblRvdWNoQ2FuY2VsbGVkID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB2YXIgaSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCEoaS5fc2Nyb2xsVmlldy5oYXNOZXN0ZWRWaWV3R3JvdXAodCwgZSkgfHwgdC5zaW11bGF0ZSkpIHtcclxuICAgICAgICAgICAgaS5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICAgICAgaS5fc2xpZGVNb2RlID09IGEuQURIRVJJTkdcclxuICAgICAgICAgICAgICAgID8gKGkuYWRoZXJpbmcgJiYgKGkuX2FkaGVyaW5nQmFycmllciA9ICEwKSwgaS5hZGhlcmUoKSlcclxuICAgICAgICAgICAgICAgIDogaS5fc2xpZGVNb2RlID09IGEuUEFHRSAmJiAobnVsbCAhPSBpLl9iZWdhblBvcyA/IGkuX3BhZ2VBZGhlcmUoKSA6IGkuYWRoZXJlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX29uU2l6ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJbml0ZWQoITEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLl9vbkl0ZW1BZGFwdGl2ZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoIXRoaXMuX3NpemVUeXBlICYmIHQud2lkdGggIT0gdGhpcy5faXRlbVNpemUud2lkdGgpIHx8XHJcbiAgICAgICAgICAgICh0aGlzLl9zaXplVHlwZSAmJiB0LmhlaWdodCAhPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5fc2l6ZVR5cGUgPyB0LmhlaWdodCA6IHQud2lkdGg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplW3QuX2xpc3RJZF0gIT0gZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZVt0Ll9saXN0SWRdID0gZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZUNvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLl9zY3JvbGxUb0xpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFBvcyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3Njcm9sbFRvU28pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTGlzdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgwLCB0aGlzLl9zY3JvbGxUb0VuZFRpbWUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDFlMylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLl9wYWdlQWRoZXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICBpZiAodC5jeWNsaWMgfHwgISh0LmVsYXN0aWNUb3AgPiAwIHx8IHQuZWxhc3RpY1JpZ2h0ID4gMCB8fCB0LmVsYXN0aWNCb3R0b20gPiAwIHx8IHQuZWxhc3RpY0xlZnQgPiAwKSkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHQuX3NpemVUeXBlID8gdC52aWV3VG9wIDogdC52aWV3TGVmdDtcclxuICAgICAgICAgICAgdmFyIGkgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAqIHQucGFnZURpc3RhbmNlO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModC5fYmVnYW5Qb3MgLSBlKSA+IGkpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2JlZ2FuUG9zID4gZSA/IHQucHJlUGFnZSgwLjUpIDogdC5uZXh0UGFnZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9iZWdhblBvcyA8IGUgPyB0LnByZVBhZ2UoMC41KSA6IHQubmV4dFBhZ2UoMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0LmVsYXN0aWNUb3AgPD0gMCAmJiB0LmVsYXN0aWNSaWdodCA8PSAwICYmIHQuZWxhc3RpY0JvdHRvbSA8PSAwICYmIHQuZWxhc3RpY0xlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5fYmVnYW5Qb3MgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5hZGhlcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0LmNoZWNrSW5pdGVkKCkgJiYgISh0LmVsYXN0aWNUb3AgPiAwIHx8IHQuZWxhc3RpY1JpZ2h0ID4gMCB8fCB0LmVsYXN0aWNCb3R0b20gPiAwIHx8IHQuZWxhc3RpY0xlZnQgPiAwKSkge1xyXG4gICAgICAgICAgICB0LmFkaGVyaW5nID0gITA7XHJcbiAgICAgICAgICAgIHQuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9ICh0Ll9zaXplVHlwZSA/IHQuX3RvcEdhcCA6IHQuX2xlZnRHYXApIC8gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHQuc2Nyb2xsVG8odC5uZWFyZXN0TGlzdElkLCAwLjcsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPD0gMCB8fCB0aGlzLl91cGRhdGVEb25lKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IHRoaXMuZGlzcGxheUl0ZW1OdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmRpc3BsYXlJdGVtTnVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IGUgPCB0OyBlKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMuZGlzcGxheURhdGFbZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPj0gdGhpcy5kaXNwbGF5SXRlbU51bSAtIDFcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2RvbmVBZnRlclVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICgodGhpcy5fdXBkYXRlQ291bnRlciA9IDApLCAodGhpcy5fdXBkYXRlRG9uZSA9ICExKSwgKHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9ICExKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoKHRoaXMuX3VwZGF0ZURvbmUgPSAhMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9mb3JjZVVwZGF0ZSA9ICExKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlTW9kZSA9PSBhLlBBR0UgJiYgKHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdExpc3RJZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5fdXBkYXRlQ291bnRlciArPSB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA8IHRoaXMuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IHRoaXMuX251bUl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX251bUl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGUgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBlIDwgdDsgZSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbTIoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKz0gdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlTW9kZSA9PSBhLlBBR0UgJiYgKHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdExpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2NyZWF0ZU9yVXBkYXRlSXRlbSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZCh0LmlkKTtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgZS5zZXRQb3NpdGlvbihjYy52Mih0LngsIHQueSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgZSwgdC5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5fcG9vbC5zaXplKCkgPiAwO1xyXG4gICAgICAgICAgICAgICAgZSA9IGkgPyB0aGlzLl9wb29sLmdldCgpIDogY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShpICYmIGNjLmlzVmFsaWQoZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSAhMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlLl9saXN0SWQgIT0gdC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuX2xpc3RJZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnNldFBvc2l0aW9uKGNjLnYyKHQueCwgdC55KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgJiYgdGhpcy5fbmVlZFVwZGF0ZVdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuc2V0U2libGluZ0luZGV4KHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGUuZ2V0Q29tcG9uZW50KCRsaXN0SXRlbS5kZWZhdWx0KTtcclxuICAgICAgICAgICAgICAgIGUubGlzdEl0ZW0gPSBuO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBuLmxpc3RJZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5saXN0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBuLl9yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGUsIHQuaWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShlKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0SXRlbShlLmxpc3RJdGVtKTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YodC5pZCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKHQuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fY3JlYXRlT3JVcGRhdGVJdGVtMiA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGU7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bdF07XHJcbiAgICAgICAgaVxyXG4gICAgICAgICAgICA/IHRoaXMuX2ZvcmNlVXBkYXRlICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudCAmJlxyXG4gICAgICAgICAgICAgICgoaS5fbGlzdElkID0gdCksXHJcbiAgICAgICAgICAgICAgZSAmJiAoZS5saXN0SWQgPSB0KSxcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50ICYmIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGksIHQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcykpXHJcbiAgICAgICAgICAgIDogKCgoaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApKS5fbGlzdElkID0gdCksXHJcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGkpLFxyXG4gICAgICAgICAgICAgIChlID0gaS5nZXRDb21wb25lbnQoJGxpc3RJdGVtLmRlZmF1bHQpKSxcclxuICAgICAgICAgICAgICAoaS5saXN0SXRlbSA9IGUpLFxyXG4gICAgICAgICAgICAgIGUgJiYgKChlLmxpc3RJZCA9IHQpLCAoZS5saXN0ID0gdGhpcyksIGUuX3JlZ2lzdGVyRXZlbnQoKSksXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpLCB0ICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0SXRlbShlKTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YodCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fdXBkYXRlTGlzdEl0ZW0gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh0ICYmIHRoaXMuc2VsZWN0ZWRNb2RlID4gbC5OT05FKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdC5ub2RlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGwuU0lOR0xFOlxyXG4gICAgICAgICAgICAgICAgICAgIHQuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSWQgPT0gZS5fbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBsLk1VTFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdC5zZWxlY3RlZCA9IHRoaXMubXVsdFNlbGVjdGVkLmluZGV4T2YoZS5fbGlzdElkKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLl9yZXNldEl0ZW1TaXplID0gZnVuY3Rpb24gKCkge307XHJcbiAgICBlLnByb3RvdHlwZS5fdXBkYXRlSXRlbVBvcyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSBpc05hTih0KSA/IHQgOiB0aGlzLmdldEl0ZW1CeUxpc3RJZCh0KTtcclxuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0SXRlbVBvcyhlLl9saXN0SWQpO1xyXG4gICAgICAgIGUuc2V0UG9zaXRpb24oaS54LCBpLnkpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnNldE11bHRTZWxlY3RlZCA9IGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpLmNoZWNrSW5pdGVkKCkpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gW3RdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChudWxsID09IGUpIHtcclxuICAgICAgICAgICAgICAgIGkubXVsdFNlbGVjdGVkID0gdDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHRbc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IGkubXVsdFNlbGVjdGVkLmluZGV4T2YobykpIDwgMCAmJiBpLm11bHRTZWxlY3RlZC5wdXNoKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gdC5sZW5ndGggLSAxOyBzID49IDA7IHMtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHRbc107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IGkubXVsdFNlbGVjdGVkLmluZGV4T2YobykpID49IDAgJiYgaS5tdWx0U2VsZWN0ZWQuc3BsaWNlKG4sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkuX2ZvcmNlVXBkYXRlID0gITA7XHJcbiAgICAgICAgICAgIGkuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmdldE11bHRTZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0U2VsZWN0ZWQ7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuaGFzTXVsdFNlbGVjdGVkID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0U2VsZWN0ZWQgJiYgdGhpcy5tdWx0U2VsZWN0ZWQuaW5kZXhPZih0KSA+PSAwO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnVwZGF0ZUl0ZW0gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrSW5pdGVkKCkpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gW3RdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlID0gMDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHQubGVuZ3RoOyBlIDwgaTsgZSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHRbZV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKG8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBuLCBvICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnVwZGF0ZUFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0luaXRlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtSXRlbXMgPSB0aGlzLm51bUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5nZXRJdGVtQnlMaXN0SWQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMTsgZSA+PSAwOyBlLS0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW2VdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkuX2xpc3RJZCA9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2dldE91dHNpZGVJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0O1xyXG4gICAgICAgIHZhciBlID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdCA9IHRoaXMuY29udGVudC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5pZCA9PSB0Ll9saXN0SWQ7XHJcbiAgICAgICAgICAgIH0pIHx8IGUucHVzaCh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2RlbFJlZHVuZGFudEl0ZW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9nZXRPdXRzaWRlSXRlbSgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlID0gdC5sZW5ndGggLSAxOyBlID49IDA7IGUtLSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSB0W2VdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9zY3JvbGxJdGVtIHx8IGkuX2xpc3RJZCAhPSB0aGlzLl9zY3JvbGxJdGVtLl9saXN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpLmlzQ2FjaGVkID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9vbC5wdXQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGggLSAxOyBvID49IDA7IG8tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhW29dID09IGkuX2xpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNwbGljZShvLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICg7IHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50ID4gdGhpcy5fbnVtSXRlbXM7ICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsU2luZ2xlSXRlbSh0aGlzLmNvbnRlbnQuY2hpbGRyZW5bdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuX2RlbFNpbmdsZUl0ZW0gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmICh0LmRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgdC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmFuaURlbEl0ZW0gPSBmdW5jdGlvbiAodCwgZSwgaSkge1xyXG4gICAgICAgIHZhciBvID0gdGhpcztcclxuICAgICAgICBpZiAoIW8uY2hlY2tJbml0ZWQoKSB8fCBvLmN5Y2xpYyB8fCAhby5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIkNhbGxGdW5jIGFyZSBub3QgYWxsb3dlZCB0byBiZSBOVUxMLCBZb3UgbmVlZCB0byBkZWxldGUgdGhlIGNvcnJlc3BvbmRpbmcgaW5kZXggaW4gdGhlIGRhdGEgYXJyYXkgaW4gdGhlIENhbGxGdW5jIVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvLl9hbmlEZWxSdW5pbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLndhcm4oXCJQbGVhc2Ugd2FpdCBmb3IgdGhlIGN1cnJlbnQgZGVsZXRpb24gdG8gZmluaXNoIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG47XHJcbiAgICAgICAgdmFyIHMgPSBvLmdldEl0ZW1CeUxpc3RJZCh0KTtcclxuICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICBuID0gcy5nZXRDb21wb25lbnQoJGxpc3RJdGVtLmRlZmF1bHQpO1xyXG4gICAgICAgICAgICBvLl9hbmlEZWxSdW5pbmcgPSAhMDtcclxuICAgICAgICAgICAgby5fYW5pRGVsQ0IgPSBlO1xyXG4gICAgICAgICAgICBvLl9hbmlEZWxJdGVtID0gcztcclxuICAgICAgICAgICAgby5fYW5pRGVsQmVmb3JlUG9zID0gcy5wb3NpdGlvbjtcclxuICAgICAgICAgICAgby5fYW5pRGVsQmVmb3JlU2NhbGUgPSBzLnNjYWxlO1xyXG4gICAgICAgICAgICB2YXIgciA9IG8uZGlzcGxheURhdGFbby5kaXNwbGF5RGF0YS5sZW5ndGggLSAxXS5pZDtcclxuICAgICAgICAgICAgdmFyIGEgPSBuLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICBuLnNob3dBbmkoXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyIDwgby5fbnVtSXRlbXMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSByICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IG8uX2NhbGNJdGVtUG9zKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmRpc3BsYXlEYXRhLnB1c2godSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uX3ZpcnR1YWwgPyBvLl9jcmVhdGVPclVwZGF0ZUl0ZW0odSkgOiBvLl9jcmVhdGVPclVwZGF0ZUl0ZW0yKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uX251bUl0ZW1zLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLnNlbGVjdGVkTW9kZSA9PSBsLlNJTkdMRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhID8gKG8uX3NlbGVjdGVkSWQgPSAtMSkgOiBvLl9zZWxlY3RlZElkIC0gMSA+PSAwICYmIG8uX3NlbGVjdGVkSWQtLTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5zZWxlY3RlZE1vZGUgPT0gbC5NVUxUICYmIG8ubXVsdFNlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBvLm11bHRTZWxlY3RlZC5pbmRleE9mKHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ubXVsdFNlbGVjdGVkLnNwbGljZShkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSBvLm11bHRTZWxlY3RlZC5sZW5ndGggLSAxOyBwID49IDA7IHAtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobSA9IG8ubXVsdFNlbGVjdGVkW3BdKSA+PSB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ubXVsdFNlbGVjdGVkW3BdLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLl9jdXN0b21TaXplW3RdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgby5fY3VzdG9tU2l6ZVt0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBvLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gby5fY3VzdG9tU2l6ZVttXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VJbnQobSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmW3kgLSAoeSA+PSB0ID8gMSA6IDApXSA9IGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgby5fY3VzdG9tU2l6ZSA9IGY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAocCA9IG51bGwgIT0gaSA/IGkgOiByOyBwID49IHQgKyAxOyBwLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzID0gby5nZXRJdGVtQnlMaXN0SWQocCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IG8uX2NhbGNJdGVtUG9zKHAgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBjYy50d2VlbihzKS50bygwLjIzMzMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoZy54LCBnLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwIDw9IHQgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY2FsbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uX2FuaURlbFJ1bmluZyA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgby5fYW5pRGVsQ0I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uX2FuaURlbFJ1bmluZyA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlKHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLl9hbmlEZWxDQiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICEwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZSh0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAodCwgZSwgaSwgbykge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcclxuICAgICAgICAgICAgZSA9IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkge1xyXG4gICAgICAgICAgICBpID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICBvID0gITE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuID0gdGhpcztcclxuICAgICAgICBpZiAobi5jaGVja0luaXRlZCghMSkpIHtcclxuICAgICAgICAgICAgbnVsbCA9PSBlID8gKGUgPSAwLjUpIDogZSA8IDAgJiYgKGUgPSAwKTtcclxuICAgICAgICAgICAgdCA8IDAgPyAodCA9IDApIDogdCA+PSBuLl9udW1JdGVtcyAmJiAodCA9IG4uX251bUl0ZW1zIC0gMSk7XHJcbiAgICAgICAgICAgIGlmICghbi5fdmlydHVhbCAmJiBuLl9sYXlvdXQgJiYgbi5fbGF5b3V0LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIG4uX2xheW91dC51cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcztcclxuICAgICAgICAgICAgdmFyIHI7XHJcbiAgICAgICAgICAgIHZhciBhID0gbi5nZXRJdGVtUG9zKHQpO1xyXG4gICAgICAgICAgICBpZiAoIWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2ggKG4uX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzID0gYS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHMgLT0gbnVsbCAhPSBpID8gbi5ub2RlLndpZHRoICogaSA6IG4uX2xlZnRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYSA9IGNjLnYyKHMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBhLnJpZ2h0IC0gbi5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gbnVsbCAhPSBpID8gbi5ub2RlLndpZHRoICogaSA6IG4uX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIGEgPSBjYy52MihzICsgbi5jb250ZW50LndpZHRoLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICByID0gYS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgciArPSBudWxsICE9IGkgPyBuLm5vZGUuaGVpZ2h0ICogaSA6IG4uX3RvcEdhcDtcclxuICAgICAgICAgICAgICAgICAgICBhID0gY2MudjIoMCwgLXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBhLmJvdHRvbSArIG4ubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgciAtPSBudWxsICE9IGkgPyBuLm5vZGUuaGVpZ2h0ICogaSA6IG4uX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgICAgICBhID0gY2MudjIoMCwgLXIgKyBuLmNvbnRlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbCA9IG4uY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBsID0gTWF0aC5hYnMobi5fc2l6ZVR5cGUgPyBsLnkgOiBsLngpO1xyXG4gICAgICAgICAgICB2YXIgYyA9IG4uX3NpemVUeXBlID8gYS55IDogYS54O1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoKG51bGwgIT0gbi5fc2Nyb2xsUG9zID8gbi5fc2Nyb2xsUG9zIDogbCkgLSBjKSA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgbi5fc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChhLCBlKTtcclxuICAgICAgICAgICAgICAgIG4uX3Njcm9sbFRvTGlzdElkID0gdDtcclxuICAgICAgICAgICAgICAgIG4uX3Njcm9sbFRvRW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzICsgZTtcclxuICAgICAgICAgICAgICAgIG4uX3Njcm9sbFRvU28gPSBuLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuLl9hZGhlcmluZ0JhcnJpZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hZGhlcmluZyA9IG4uX2FkaGVyaW5nQmFycmllciA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBuLl9zY3JvbGxQb3MgPSBuLl9zY3JvbGxUb0xpc3RJZCA9IG4uX3Njcm9sbFRvRW5kVGltZSA9IG4uX3Njcm9sbFRvU28gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gbi5nZXRJdGVtQnlMaXN0SWQodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZSArIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5fY2FsY05lYXJlc3RJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0O1xyXG4gICAgICAgIHZhciBlO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBvO1xyXG4gICAgICAgIHZhciBuO1xyXG4gICAgICAgIHZhciBzO1xyXG4gICAgICAgIHZhciByID0gdGhpcztcclxuICAgICAgICByLm5lYXJlc3RMaXN0SWQgPSBudWxsO1xyXG4gICAgICAgIGlmIChyLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIHIuX2NhbGNWaWV3UG9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkgPSByLnZpZXdUb3A7XHJcbiAgICAgICAgbyA9IHIudmlld1JpZ2h0O1xyXG4gICAgICAgIG4gPSByLnZpZXdCb3R0b207XHJcbiAgICAgICAgcyA9IHIudmlld0xlZnQ7XHJcbiAgICAgICAgdmFyIGEgPSAhMTtcclxuICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHIuY29udGVudC5jaGlsZHJlbkNvdW50ICYmICFhOyBsICs9IHIuX2NvbExpbmVOdW0pIHtcclxuICAgICAgICAgICAgaWYgKCh0ID0gci5fdmlydHVhbCA/IHIuZGlzcGxheURhdGFbbF0gOiByLl9jYWxjRXhpc3RJdGVtUG9zKGwpKSkge1xyXG4gICAgICAgICAgICAgICAgZSA9IHIuX3NpemVUeXBlID8gKHQudG9wICsgdC5ib3R0b20pIC8gMiA6IChlID0gKHQubGVmdCArIHQucmlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHIuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LnJpZ2h0ID49IHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIubmVhcmVzdExpc3RJZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocyA+IGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm5lYXJlc3RMaXN0SWQgKz0gci5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmxlZnQgPD0gbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5uZWFyZXN0TGlzdElkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvIDwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIubmVhcmVzdExpc3RJZCArPSByLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9ICEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuYm90dG9tIDw9IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIubmVhcmVzdExpc3RJZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm5lYXJlc3RMaXN0SWQgKz0gci5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LnRvcCA+PSBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm5lYXJlc3RMaXN0SWQgPSB0LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5uZWFyZXN0TGlzdElkICs9IHIuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0ID0gci5fdmlydHVhbCA/IHIuZGlzcGxheURhdGFbci5kaXNwbGF5SXRlbU51bSAtIDFdIDogci5fY2FsY0V4aXN0SXRlbVBvcyhyLl9udW1JdGVtcyAtIDEpKSAmJlxyXG4gICAgICAgICAgICB0LmlkID09IHIuX251bUl0ZW1zIC0gMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlID0gci5fc2l6ZVR5cGUgPyAodC50b3AgKyB0LmJvdHRvbSkgLyAyIDogKGUgPSAodC5sZWZ0ICsgdC5yaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgc3dpdGNoIChyLl9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8gPiBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIubmVhcmVzdExpc3RJZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzIDwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLm5lYXJlc3RMaXN0SWQgPSB0LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAobiA8IGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5uZWFyZXN0TGlzdElkID0gdC5pZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIubmVhcmVzdExpc3RJZCA9IHQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnByZVBhZ2UgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcclxuICAgICAgICAgICAgdCA9IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJbml0ZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNraXBQYWdlKHRoaXMuY3VyUGFnZU51bSAtIDEsIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5uZXh0UGFnZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xyXG4gICAgICAgICAgICB0ID0gMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGVja0luaXRlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtICsgMSwgdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLnNraXBQYWdlID0gZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICB2YXIgaSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGkuY2hlY2tJbml0ZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaS5fc2xpZGVNb2RlICE9IGEuUEFHRVxyXG4gICAgICAgICAgICAgICAgPyBjYy5lcnJvcihcIlRoaXMgZnVuY3Rpb24gaXMgbm90IGFsbG93ZWQgdG8gYmUgY2FsbGVkLCBNdXN0IFNsaWRlTW9kZSA9IFBBR0UhXCIpXHJcbiAgICAgICAgICAgICAgICA6IHZvaWQgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgdCA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQgPj0gaS5fbnVtSXRlbXMgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIChpLmN1clBhZ2VOdW0gIT0gdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoaS5jdXJQYWdlTnVtID0gdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wYWdlQ2hhbmdlRXZlbnQgJiYgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFtpLnBhZ2VDaGFuZ2VFdmVudF0sIHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkuc2Nyb2xsVG8odCwgZSkpKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBlLnByb3RvdHlwZS5jYWxjQ3VzdG9tU2l6ZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgIGlmIChlLmNoZWNrSW5pdGVkKCkpIHtcclxuICAgICAgICAgICAgaWYgKCFlLl9pdGVtVG1wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoXCJVbnNldCB0ZW1wbGF0ZSBpdGVtIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWUucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcihcIlVuc2V0IFJlbmRlci1FdmVudCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZS5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgaSA9IGNjLmluc3RhbnRpYXRlKGUuX2l0ZW1UbXApO1xyXG4gICAgICAgICAgICBlLmNvbnRlbnQuYWRkQ2hpbGQoaSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdDsgbysrKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW2UucmVuZGVyRXZlbnRdLCBpLCBvKTtcclxuICAgICAgICAgICAgICAgIChpLmhlaWdodCA9PSBlLl9pdGVtU2l6ZS5oZWlnaHQgJiYgaS53aWR0aCA9PSBlLl9pdGVtU2l6ZS53aWR0aCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoZS5fY3VzdG9tU2l6ZVtvXSA9IGUuX3NpemVUeXBlID8gaS5oZWlnaHQgOiBpLndpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGUuX2N1c3RvbVNpemUpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZS5fY3VzdG9tU2l6ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChpLmRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgIGkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlLl9jdXN0b21TaXplO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjYy5FbnVtKHIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlLnByb3RvdHlwZSxcclxuICAgICAgICBcInRlbXBsYXRlVHlwZVwiLFxyXG4gICAgICAgIHZvaWQgMFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVUeXBlID09IHIuTk9ERTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIGUucHJvdG90eXBlLFxyXG4gICAgICAgIFwidG1wTm9kZVwiLFxyXG4gICAgICAgIHZvaWQgMFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gci5QUkVGQUI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlLnByb3RvdHlwZSxcclxuICAgICAgICBcInRtcFByZWZhYlwiLFxyXG4gICAgICAgIHZvaWQgMFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoW2goKV0sIGUucHJvdG90eXBlLCBcIl9zbGlkZU1vZGVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNjLkVudW0oYSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIGUucHJvdG90eXBlLFxyXG4gICAgICAgIFwic2xpZGVNb2RlXCIsXHJcbiAgICAgICAgbnVsbFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IFswLCAxLCAwLjFdLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zbGlkZU1vZGUgPT0gYS5QQUdFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJwYWdlRGlzdGFuY2VcIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICBfX2RlY29yYXRlKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zbGlkZU1vZGUgPT0gYS5QQUdFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJwYWdlQ2hhbmdlRXZlbnRcIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICBfX2RlY29yYXRlKFtoKCldLCBlLnByb3RvdHlwZSwgXCJfdmlydHVhbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIGgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY2MuQm9vbGVhblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJ2aXJ0dWFsXCIsXHJcbiAgICAgICAgbnVsbFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuc2xpZGVNb2RlID09IGEuTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN5Y2xpYyA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIGUucHJvdG90eXBlLFxyXG4gICAgICAgIFwiY3ljbGljXCIsXHJcbiAgICAgICAgdm9pZCAwXHJcbiAgICApO1xyXG4gICAgX19kZWNvcmF0ZShcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIGgoe1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlLnByb3RvdHlwZSxcclxuICAgICAgICBcImxhY2tDZW50ZXJcIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICBfX2RlY29yYXRlKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgaCh7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnZpcnR1YWwgJiYgIXRoaXMubGFja0NlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWNrU2xpZGUgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlLnByb3RvdHlwZSxcclxuICAgICAgICBcImxhY2tTbGlkZVwiLFxyXG4gICAgICAgIHZvaWQgMFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdLFxyXG4gICAgICAgIGUucHJvdG90eXBlLFxyXG4gICAgICAgIFwiX3VwZGF0ZVJhdGVcIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICBfX2RlY29yYXRlKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICAgICAgcmFuZ2U6IFswLCA2LCAxXSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiAhMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJ1cGRhdGVSYXRlXCIsXHJcbiAgICAgICAgbnVsbFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXHJcbiAgICAgICAgICAgICAgICByYW5nZTogWzAsIDEyLCAxXSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiAhMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJmcmFtZUJ5RnJhbWVSZW5kZXJOdW1cIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICBfX2RlY29yYXRlKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlLnByb3RvdHlwZSxcclxuICAgICAgICBcInJlbmRlckV2ZW50XCIsXHJcbiAgICAgICAgdm9pZCAwXHJcbiAgICApO1xyXG4gICAgX19kZWNvcmF0ZShcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIGgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY2MuRW51bShsKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJzZWxlY3RlZE1vZGVcIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICBfX2RlY29yYXRlKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgaCh7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID09IGwuU0lOR0xFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJyZXBlYXRFdmVudFNpbmdsZVwiLFxyXG4gICAgICAgIHZvaWQgMFxyXG4gICAgKTtcclxuICAgIF9fZGVjb3JhdGUoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID4gbC5OT05FO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJzZWxlY3RlZEV2ZW50XCIsXHJcbiAgICAgICAgdm9pZCAwXHJcbiAgICApO1xyXG4gICAgX19kZWNvcmF0ZShcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIGgoe1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphYmxlOiAhMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZS5wcm90b3R5cGUsXHJcbiAgICAgICAgXCJfbnVtSXRlbXNcIixcclxuICAgICAgICB2b2lkIDBcclxuICAgICk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbZiwgbSgpLCB5KFwi6Ieq5a6a5LmJ57uE5Lu2L0xpc3RcIiksIF8oY2MuU2Nyb2xsVmlldyksIGcoLTVlMyldLCBlKTtcclxufSkoY2MuQ29tcG9uZW50KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdjtcclxuIl19