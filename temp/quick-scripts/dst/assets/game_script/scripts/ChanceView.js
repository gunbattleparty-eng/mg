
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/ChanceView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39c89qMWllE8JKmjJd7mmjs', 'ChanceView');
// game_script/scripts/ChanceView.js

"use strict";

var o;

var $popupView = require("./PopupView");

var $configContext = require("./ConfigContext");

var l = cc._decorator;
var c = l.ccclass;
var u = l.property;

var d = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.contentLable = null;
    e.btnLayer = null;
    e.currId = 1;
    return e;
  }

  __extends(e, t);

  e.prototype.onResetView = function () {
    this.currId = this.uiParam.param.id;
    this.render(this.currId);
  };

  e.prototype.addEvent = function () {
    for (var t = 0; t < this.btnLayer.children.length; t++) {
      this.btnLayer.children[t].on("click", this.clickBtn, this);
    }
  };

  e.prototype.clickBtn = function (t) {
    var e = this.btnLayer.children.indexOf(t.node) + 1;

    if (this.currId !== e) {
      this.currId = e;
      this.render(e);
    }
  };

  e.prototype.render = function (t) {
    for (var e = 0; e < $configContext["default"].instance.chanceConfig.length; e++) {
      var i = $configContext["default"].instance.chanceConfig[e];

      if (t === i.id) {
        this.contentLable.string = i.text;
      }

      this.btnLayer.children[e].children[0].active = t === i.id;
    }
  };

  __decorate([u(cc.Label)], e.prototype, "contentLable", void 0);

  __decorate([u(cc.Node)], e.prototype, "btnLayer", void 0);

  return __decorate([c], e);
}($popupView.PopupView);

exports["default"] = d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXENoYW5jZVZpZXcuanMiXSwibmFtZXMiOlsibyIsIiRwb3B1cFZpZXciLCJyZXF1aXJlIiwiJGNvbmZpZ0NvbnRleHQiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJkIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImNvbnRlbnRMYWJsZSIsImJ0bkxheWVyIiwiY3VycklkIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25SZXNldFZpZXciLCJ1aVBhcmFtIiwicGFyYW0iLCJpZCIsInJlbmRlciIsImFkZEV2ZW50IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJvbiIsImNsaWNrQnRuIiwiaW5kZXhPZiIsIm5vZGUiLCJpbnN0YW5jZSIsImNoYW5jZUNvbmZpZyIsImkiLCJzdHJpbmciLCJ0ZXh0IiwiYWN0aXZlIiwiX19kZWNvcmF0ZSIsIkxhYmVsIiwiTm9kZSIsIlBvcHVwVmlldyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlFLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csWUFBRixHQUFpQixJQUFqQjtJQUNBSCxDQUFDLENBQUNJLFFBQUYsR0FBYSxJQUFiO0lBQ0FKLENBQUMsQ0FBQ0ssTUFBRixHQUFXLENBQVg7SUFDQSxPQUFPTCxDQUFQO0VBQ0g7O0VBQ0RNLFNBQVMsQ0FBQ04sQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ08sU0FBRixDQUFZQyxXQUFaLEdBQTBCLFlBQVk7SUFDbEMsS0FBS0gsTUFBTCxHQUFjLEtBQUtJLE9BQUwsQ0FBYUMsS0FBYixDQUFtQkMsRUFBakM7SUFDQSxLQUFLQyxNQUFMLENBQVksS0FBS1AsTUFBakI7RUFDSCxDQUhEOztFQUlBTCxDQUFDLENBQUNPLFNBQUYsQ0FBWU0sUUFBWixHQUF1QixZQUFZO0lBQy9CLEtBQUssSUFBSWQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLSyxRQUFMLENBQWNVLFFBQWQsQ0FBdUJDLE1BQTNDLEVBQW1EaEIsQ0FBQyxFQUFwRCxFQUF3RDtNQUNwRCxLQUFLSyxRQUFMLENBQWNVLFFBQWQsQ0FBdUJmLENBQXZCLEVBQTBCaUIsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0MsUUFBM0MsRUFBcUQsSUFBckQ7SUFDSDtFQUNKLENBSkQ7O0VBS0FqQixDQUFDLENBQUNPLFNBQUYsQ0FBWVUsUUFBWixHQUF1QixVQUFVbEIsQ0FBVixFQUFhO0lBQ2hDLElBQUlDLENBQUMsR0FBRyxLQUFLSSxRQUFMLENBQWNVLFFBQWQsQ0FBdUJJLE9BQXZCLENBQStCbkIsQ0FBQyxDQUFDb0IsSUFBakMsSUFBeUMsQ0FBakQ7O0lBQ0EsSUFBSSxLQUFLZCxNQUFMLEtBQWdCTCxDQUFwQixFQUF1QjtNQUNuQixLQUFLSyxNQUFMLEdBQWNMLENBQWQ7TUFDQSxLQUFLWSxNQUFMLENBQVlaLENBQVo7SUFDSDtFQUNKLENBTkQ7O0VBT0FBLENBQUMsQ0FBQ08sU0FBRixDQUFZSyxNQUFaLEdBQXFCLFVBQVViLENBQVYsRUFBYTtJQUM5QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLGNBQWMsV0FBZCxDQUF1QjhCLFFBQXZCLENBQWdDQyxZQUFoQyxDQUE2Q04sTUFBakUsRUFBeUVmLENBQUMsRUFBMUUsRUFBOEU7TUFDMUUsSUFBSXNCLENBQUMsR0FBR2hDLGNBQWMsV0FBZCxDQUF1QjhCLFFBQXZCLENBQWdDQyxZQUFoQyxDQUE2Q3JCLENBQTdDLENBQVI7O01BQ0EsSUFBSUQsQ0FBQyxLQUFLdUIsQ0FBQyxDQUFDWCxFQUFaLEVBQWdCO1FBQ1osS0FBS1IsWUFBTCxDQUFrQm9CLE1BQWxCLEdBQTJCRCxDQUFDLENBQUNFLElBQTdCO01BQ0g7O01BQ0QsS0FBS3BCLFFBQUwsQ0FBY1UsUUFBZCxDQUF1QmQsQ0FBdkIsRUFBMEJjLFFBQTFCLENBQW1DLENBQW5DLEVBQXNDVyxNQUF0QyxHQUErQzFCLENBQUMsS0FBS3VCLENBQUMsQ0FBQ1gsRUFBdkQ7SUFDSDtFQUNKLENBUkQ7O0VBU0FlLFVBQVUsQ0FBQyxDQUFDOUIsQ0FBQyxDQUFDSixFQUFFLENBQUNtQyxLQUFKLENBQUYsQ0FBRCxFQUFnQjNCLENBQUMsQ0FBQ08sU0FBbEIsRUFBNkIsY0FBN0IsRUFBNkMsS0FBSyxDQUFsRCxDQUFWOztFQUNBbUIsVUFBVSxDQUFDLENBQUM5QixDQUFDLENBQUNKLEVBQUUsQ0FBQ29DLElBQUosQ0FBRixDQUFELEVBQWU1QixDQUFDLENBQUNPLFNBQWpCLEVBQTRCLFVBQTVCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQSxPQUFPbUIsVUFBVSxDQUFDLENBQUNoQyxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBckNPLENBcUNMWixVQUFVLENBQUN5QyxTQXJDTixDQUFSOztBQXNDQUMsT0FBTyxXQUFQLEdBQWtCaEMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBvO1xyXG52YXIgJHBvcHVwVmlldyA9IHJlcXVpcmUoXCIuL1BvcHVwVmlld1wiKTtcclxudmFyICRjb25maWdDb250ZXh0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29udGV4dFwiKTtcclxudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xyXG52YXIgYyA9IGwuY2NjbGFzcztcclxudmFyIHUgPSBsLnByb3BlcnR5O1xyXG52YXIgZCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgZnVuY3Rpb24gZSgpIHtcclxuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICBlLmNvbnRlbnRMYWJsZSA9IG51bGw7XHJcbiAgICAgICAgZS5idG5MYXllciA9IG51bGw7XHJcbiAgICAgICAgZS5jdXJySWQgPSAxO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgZS5wcm90b3R5cGUub25SZXNldFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJySWQgPSB0aGlzLnVpUGFyYW0ucGFyYW0uaWQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5jdXJySWQpO1xyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5idG5MYXllci5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxheWVyLmNoaWxkcmVuW3RdLm9uKFwiY2xpY2tcIiwgdGhpcy5jbGlja0J0biwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGUucHJvdG90eXBlLmNsaWNrQnRuID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgZSA9IHRoaXMuYnRuTGF5ZXIuY2hpbGRyZW4uaW5kZXhPZih0Lm5vZGUpICsgMTtcclxuICAgICAgICBpZiAodGhpcy5jdXJySWQgIT09IGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJySWQgPSBlO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8ICRjb25maWdDb250ZXh0LmRlZmF1bHQuaW5zdGFuY2UuY2hhbmNlQ29uZmlnLmxlbmd0aDsgZSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5jaGFuY2VDb25maWdbZV07XHJcbiAgICAgICAgICAgIGlmICh0ID09PSBpLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRMYWJsZS5zdHJpbmcgPSBpLnRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5idG5MYXllci5jaGlsZHJlbltlXS5jaGlsZHJlblswXS5hY3RpdmUgPSB0ID09PSBpLmlkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFt1KGNjLkxhYmVsKV0sIGUucHJvdG90eXBlLCBcImNvbnRlbnRMYWJsZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZShbdShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImJ0bkxheWVyXCIsIHZvaWQgMCk7XHJcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xyXG59KSgkcG9wdXBWaWV3LlBvcHVwVmlldyk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XHJcbiJdfQ==