exports.Utf8 = void 0;
var $latin1 = require("./Latin1");
var n = (function () {
    function t() {}
    t.stringify = function (t) {
        try {
            return decodeURIComponent(escape($latin1.Latin1.stringify(t)));
        } catch (t) {
            throw new Error("Malformed UTF-8 data");
        }
    };
    t.parse = function (t) {
        return $latin1.Latin1.parse(unescape(encodeURIComponent(t)));
    };
    return t;
})();
exports.Utf8 = n;
