"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-property-descriptors";
exports.ids = ["vendor-chunks/has-property-descriptors"];
exports.modules = {

/***/ "(ssr)/./node_modules/has-property-descriptors/index.js":
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $defineProperty = __webpack_require__(/*! es-define-property */ \"(ssr)/./node_modules/es-define-property/index.js\");\nvar hasPropertyDescriptors = function hasPropertyDescriptors() {\n    return !!$defineProperty;\n};\nhasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {\n    // node v0.6 has a bug where array lengths can be Set but not Defined\n    if (!$defineProperty) {\n        return null;\n    }\n    try {\n        return $defineProperty([], \"length\", {\n            value: 1\n        }).length !== 1;\n    } catch (e) {\n        // In Firefox 4-22, defining length on an array throws an exception.\n        return true;\n    }\n};\nmodule.exports = hasPropertyDescriptors;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsa0JBQWtCQyxtQkFBT0EsQ0FBQztBQUU5QixJQUFJQyx5QkFBeUIsU0FBU0E7SUFDckMsT0FBTyxDQUFDLENBQUNGO0FBQ1Y7QUFFQUUsdUJBQXVCQyx1QkFBdUIsR0FBRyxTQUFTQTtJQUN6RCxxRUFBcUU7SUFDckUsSUFBSSxDQUFDSCxpQkFBaUI7UUFDckIsT0FBTztJQUNSO0lBQ0EsSUFBSTtRQUNILE9BQU9BLGdCQUFnQixFQUFFLEVBQUUsVUFBVTtZQUFFSSxPQUFPO1FBQUUsR0FBR0MsTUFBTSxLQUFLO0lBQy9ELEVBQUUsT0FBT0MsR0FBRztRQUNYLG9FQUFvRTtRQUNwRSxPQUFPO0lBQ1I7QUFDRDtBQUVBQyxPQUFPQyxPQUFPLEdBQUdOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNpc3RlbnRlLXZpcnR1YWwtZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzL2luZGV4LmpzP2Q5N2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnZXMtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzID0gZnVuY3Rpb24gaGFzUHJvcGVydHlEZXNjcmlwdG9ycygpIHtcblx0cmV0dXJuICEhJGRlZmluZVByb3BlcnR5O1xufTtcblxuaGFzUHJvcGVydHlEZXNjcmlwdG9ycy5oYXNBcnJheUxlbmd0aERlZmluZUJ1ZyA9IGZ1bmN0aW9uIGhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnKCkge1xuXHQvLyBub2RlIHYwLjYgaGFzIGEgYnVnIHdoZXJlIGFycmF5IGxlbmd0aHMgY2FuIGJlIFNldCBidXQgbm90IERlZmluZWRcblx0aWYgKCEkZGVmaW5lUHJvcGVydHkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiAkZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHZhbHVlOiAxIH0pLmxlbmd0aCAhPT0gMTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIEluIEZpcmVmb3ggNC0yMiwgZGVmaW5pbmcgbGVuZ3RoIG9uIGFuIGFycmF5IHRocm93cyBhbiBleGNlcHRpb24uXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUHJvcGVydHlEZXNjcmlwdG9ycztcbiJdLCJuYW1lcyI6WyIkZGVmaW5lUHJvcGVydHkiLCJyZXF1aXJlIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9ycyIsImhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnIiwidmFsdWUiLCJsZW5ndGgiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/has-property-descriptors/index.js\n");

/***/ })

};
;