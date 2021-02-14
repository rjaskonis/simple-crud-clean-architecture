/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecrud"]("sa",{

/***/ "./src/presentation/web/App.js":
/*!*************************************!*\
  !*** ./src/presentation/web/App.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* provided dependency */ var React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\n\nfunction App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  function fetchData() {\n    return _fetchData.apply(this, arguments);\n  }\n\n  function _fetchData() {\n    _fetchData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var response, json;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"/api/data\");\n\n            case 2:\n              response = _context.sent;\n              _context.next = 5;\n              return response.json();\n\n            case 5:\n              json = _context.sent;\n              setData(json);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchData.apply(this, arguments);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {// fetchData();\n  }, []);\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h4\", {\n    style: {\n      color: \"#2d63b5\"\n    }\n  }, \"Hello from React\"), /*#__PURE__*/React.createElement(\"br\", null), data && /*#__PURE__*/React.createElement(\"h3\", null, data.message));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://crud/./src/presentation/web/App.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b96360f88537d5881035")
/******/ 	})();
/******/ 	
/******/ }
);