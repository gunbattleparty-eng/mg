var o = window.tt;
var n = (function () {
    function t() {}
    t.prototype.report = function (t, e) {
        e ? o.reportAnalytics(t, e) : o.reportAnalytics(t, {});
    };
    return t;
})();
exports.default = n;
