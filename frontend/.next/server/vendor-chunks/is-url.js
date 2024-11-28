"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-url";
exports.ids = ["vendor-chunks/is-url"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-url/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-url/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/**\n * Expose `isUrl`.\n */ \nmodule.exports = isUrl;\n/**\n * RegExps.\n * A URL must match #1 and then at least one of #2/#3.\n * Use two levels of REs to avoid REDOS.\n */ var protocolAndDomainRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;\nvar localhostDomainRE = /^localhost[\\:?\\d]*(?:[^\\:?\\d]\\S*)?$/;\nvar nonLocalhostDomainRE = /^[^\\s\\.]+\\.\\S{2,}$/;\n/**\n * Loosely validate a URL `string`.\n *\n * @param {String} string\n * @return {Boolean}\n */ function isUrl(string) {\n    if (typeof string !== \"string\") {\n        return false;\n    }\n    var match = string.match(protocolAndDomainRE);\n    if (!match) {\n        return false;\n    }\n    var everythingAfterProtocol = match[1];\n    if (!everythingAfterProtocol) {\n        return false;\n    }\n    if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) {\n        return true;\n    }\n    return false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtdXJsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUNBOztDQUVDO0FBRURBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakI7Ozs7Q0FJQyxHQUVELElBQUlDLHNCQUFzQjtBQUUxQixJQUFJQyxvQkFBb0I7QUFDeEIsSUFBSUMsdUJBQXVCO0FBRTNCOzs7OztDQUtDLEdBRUQsU0FBU0gsTUFBTUksTUFBTTtJQUNuQixJQUFJLE9BQU9BLFdBQVcsVUFBVTtRQUM5QixPQUFPO0lBQ1Q7SUFFQSxJQUFJQyxRQUFRRCxPQUFPQyxLQUFLLENBQUNKO0lBQ3pCLElBQUksQ0FBQ0ksT0FBTztRQUNWLE9BQU87SUFDVDtJQUVBLElBQUlDLDBCQUEwQkQsS0FBSyxDQUFDLEVBQUU7SUFDdEMsSUFBSSxDQUFDQyx5QkFBeUI7UUFDNUIsT0FBTztJQUNUO0lBRUEsSUFBSUosa0JBQWtCSyxJQUFJLENBQUNELDRCQUN2QkgscUJBQXFCSSxJQUFJLENBQUNELDBCQUEwQjtRQUN0RCxPQUFPO0lBQ1Q7SUFFQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc2lzdGVudGUtdmlydHVhbC1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9pcy11cmwvaW5kZXguanM/NWNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhwb3NlIGBpc1VybGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc1VybDtcblxuLyoqXG4gKiBSZWdFeHBzLlxuICogQSBVUkwgbXVzdCBtYXRjaCAjMSBhbmQgdGhlbiBhdCBsZWFzdCBvbmUgb2YgIzIvIzMuXG4gKiBVc2UgdHdvIGxldmVscyBvZiBSRXMgdG8gYXZvaWQgUkVET1MuXG4gKi9cblxudmFyIHByb3RvY29sQW5kRG9tYWluUkUgPSAvXig/Olxcdys6KT9cXC9cXC8oXFxTKykkLztcblxudmFyIGxvY2FsaG9zdERvbWFpblJFID0gL15sb2NhbGhvc3RbXFw6P1xcZF0qKD86W15cXDo/XFxkXVxcUyopPyQvXG52YXIgbm9uTG9jYWxob3N0RG9tYWluUkUgPSAvXlteXFxzXFwuXStcXC5cXFN7Mix9JC87XG5cbi8qKlxuICogTG9vc2VseSB2YWxpZGF0ZSBhIFVSTCBgc3RyaW5nYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzVXJsKHN0cmluZyl7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChwcm90b2NvbEFuZERvbWFpblJFKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBldmVyeXRoaW5nQWZ0ZXJQcm90b2NvbCA9IG1hdGNoWzFdO1xuICBpZiAoIWV2ZXJ5dGhpbmdBZnRlclByb3RvY29sKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGxvY2FsaG9zdERvbWFpblJFLnRlc3QoZXZlcnl0aGluZ0FmdGVyUHJvdG9jb2wpIHx8XG4gICAgICBub25Mb2NhbGhvc3REb21haW5SRS50ZXN0KGV2ZXJ5dGhpbmdBZnRlclByb3RvY29sKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpc1VybCIsInByb3RvY29sQW5kRG9tYWluUkUiLCJsb2NhbGhvc3REb21haW5SRSIsIm5vbkxvY2FsaG9zdERvbWFpblJFIiwic3RyaW5nIiwibWF0Y2giLCJldmVyeXRoaW5nQWZ0ZXJQcm90b2NvbCIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-url/index.js\n");

/***/ })

};
;