"use strict";
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_app_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Global_Endpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global/Endpoint */ "./Global/Endpoint.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\app\\Frontend\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();








var Signup = function Signup(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var submit = /*#__PURE__*/function () {
    var _ref = (0,E_app_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var register;
      return E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              e.preventDefault();
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post("http://localhost:3002/api/auth/signup", {
                email: email,
                password: password
              });

            case 4:
              register = _context.sent;
              console.log(register);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.data);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function submit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
      value: email,
      onChange: function onChange(e) {
        setEmail(e.target.value);
      },
      placeholder: "Enter Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
      value: password,
      onChange: function onChange(e) {
        setPassword(e.target.value);
      },
      placeholder: "Enter Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      onClick: submit,
      children: "SUBMIT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Signup, "4oS/pRfT+uEOilmPqrlSK7MrzRU=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmQ2MTZhMjhiNzFiZDEzN2MzZWViLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNSyxNQUFNLEdBQUMsU0FBUEEsTUFBTyxDQUFDQyxLQUFELEVBQVM7QUFBQTs7QUFDdEIsa0JBQXVCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0I7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFDQSxtQkFBNkJQLCtDQUFRLENBQUMsRUFBRCxDQUFyQztBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFnQkMsV0FBaEI7O0FBRUEsTUFBTUMsTUFBTTtBQUFBLCtPQUFDLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUxBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUZLO0FBQUEscUJBR1lWLGlEQUFBLDBDQUFtRDtBQUFDSSxnQkFBQUEsS0FBSyxFQUFDQSxLQUFQO0FBQWFFLGdCQUFBQSxRQUFRLEVBQUNBO0FBQXRCLGVBQW5ELENBSFo7O0FBQUE7QUFHSE0sY0FBQUEsUUFIRztBQUlUQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUpTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUxDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQU1DLElBQWxCOztBQU5LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUEsb0JBQU5QLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFXQSxzQkFDSTtBQUFBLDRCQUNJO0FBQU8sV0FBSyxFQUFFSixLQUFkO0FBQXFCLGNBQVEsRUFBRSxrQkFBQ0ssQ0FBRCxFQUFLO0FBQUNKLFFBQUFBLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUF5QixPQUE5RDtBQUFnRSxpQkFBVyxFQUFDO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQU8sV0FBSyxFQUFFWCxRQUFkO0FBQXdCLGNBQVEsRUFBRSxrQkFBQ0csQ0FBRCxFQUFLO0FBQUNGLFFBQUFBLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE0QixPQUFwRTtBQUFzRSxpQkFBVyxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQUtJO0FBQVEsYUFBTyxFQUFFVCxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUMsQ0F6QkQ7O0dBQU1OOztLQUFBQTtBQTRCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBsYWNlaG9sZGVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGF1dGhfZG9tYWluIH0gZnJvbSAnLi4vR2xvYmFsL0VuZHBvaW50J1xyXG5cclxuXHJcbmNvbnN0IFNpZ251cD0ocHJvcHMpPT57XHJcbmNvbnN0IFtlbWFpbCxzZXRFbWFpbF09dXNlU3RhdGUoJycpXHJcbmNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF09dXNlU3RhdGUoJycpXHJcblxyXG5jb25zdCBzdWJtaXQ9YXN5bmMoZSk9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCByZWdpc3Rlcj1hd2FpdCBBeGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDIvYXBpL2F1dGgvc2lnbnVwYCx7ZW1haWw6ZW1haWwscGFzc3dvcmQ6cGFzc3dvcmR9KVxyXG4gICAgY29uc29sZS5sb2cocmVnaXN0ZXIpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmRhdGEpXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxucmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpPT57c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0gcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKT0+e3NldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19IHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIj48L2lucHV0PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3VibWl0fT5TVUJNSVQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQbGFjZWhvbGRlciIsIkF4aW9zIiwiYXV0aF9kb21haW4iLCJTaWdudXAiLCJwcm9wcyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInJlZ2lzdGVyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=