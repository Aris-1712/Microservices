"use strict";
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_app_Frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_app_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Global_Endpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Global/Endpoint */ "./Global/Endpoint.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\app\\Frontend\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();








var Signup = function Signup(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      errors = _useState3[0],
      setErrors = _useState3[1];

  var submit = /*#__PURE__*/function () {
    var _ref = (0,E_app_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var register;
      return E_app_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              e.preventDefault();
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/auth/signup", {
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
              setErrors((0,E_app_Frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_context.t0.response.data.error));

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
      value: email,
      onChange: function onChange(e) {
        setEmail(e.target.value);
      },
      placeholder: "Enter Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
      value: password,
      onChange: function onChange(e) {
        setPassword(e.target.value);
      },
      placeholder: "Enter Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this), errors.length > 0 ? errors.map(function (err) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
        children: [err.param, ": ", err.msg, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 20
      }, _this);
    }) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: submit,
      children: "SUBMIT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Signup, "24CsATdAO/9pjHnEt0anW7DFZxI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmRlZDM0ZmFkNTk2MGNjNzUxNmVmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1LLE1BQU0sR0FBQyxTQUFQQSxNQUFPLENBQUNDLEtBQUQsRUFBUztBQUFBOztBQUN0QixrQkFBdUJMLCtDQUFRLENBQUMsRUFBRCxDQUEvQjtBQUFBLE1BQU9NLEtBQVA7QUFBQSxNQUFhQyxRQUFiOztBQUNBLG1CQUE2QlAsK0NBQVEsQ0FBQyxFQUFELENBQXJDO0FBQUEsTUFBT1EsUUFBUDtBQUFBLE1BQWdCQyxXQUFoQjs7QUFDQSxtQkFBeUJULCtDQUFRLENBQUMsRUFBRCxDQUFqQztBQUFBLE1BQU9VLE1BQVA7QUFBQSxNQUFjQyxTQUFkOztBQUNBLE1BQU1DLE1BQU07QUFBQSwrT0FBQyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVMQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFGSztBQUFBLHFCQUdZWixpREFBQSxxQkFBOEI7QUFBQ0ksZ0JBQUFBLEtBQUssRUFBQ0EsS0FBUDtBQUFhRSxnQkFBQUEsUUFBUSxFQUFDQTtBQUF0QixlQUE5QixDQUhaOztBQUFBO0FBR0hRLGNBQUFBLFFBSEc7QUFJVEMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFKUztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1MTCxjQUFBQSxTQUFTLENBQUMsaUhBQUksWUFBTVEsUUFBTixDQUFlQyxJQUFmLENBQW9CQyxLQUF6QixFQUFUOztBQU5LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUEsb0JBQU5ULE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFXQSxzQkFDSTtBQUFBLDRCQUNJO0FBQU8sV0FBSyxFQUFFTixLQUFkO0FBQXFCLGNBQVEsRUFBRSxrQkFBQ08sQ0FBRCxFQUFLO0FBQUNOLFFBQUFBLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUF5QixPQUE5RDtBQUFnRSxpQkFBVyxFQUFDO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQU8sV0FBSyxFQUFFZixRQUFkO0FBQXdCLGNBQVEsRUFBRSxrQkFBQ0ssQ0FBRCxFQUFLO0FBQUNKLFFBQUFBLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE0QixPQUFwRTtBQUFzRSxpQkFBVyxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixFQUtLYixNQUFNLENBQUNjLE1BQVAsR0FBYyxDQUFkLEdBQWdCZCxNQUFNLENBQUNlLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU87QUFDL0IsMEJBQU87QUFBQSxtQkFBSUEsR0FBRyxDQUFDQyxLQUFSLFFBQWlCRCxHQUFHLENBQUNFLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGZ0IsQ0FBaEIsR0FFRSxJQVBQLGVBUUk7QUFBUSxhQUFPLEVBQUVoQixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUMsQ0E1QkQ7O0dBQU1SOztLQUFBQTtBQStCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBsYWNlaG9sZGVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGF1dGhfZG9tYWluIH0gZnJvbSAnLi4vR2xvYmFsL0VuZHBvaW50J1xyXG5cclxuXHJcbmNvbnN0IFNpZ251cD0ocHJvcHMpPT57XHJcbmNvbnN0IFtlbWFpbCxzZXRFbWFpbF09dXNlU3RhdGUoJycpXHJcbmNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF09dXNlU3RhdGUoJycpXHJcbmNvbnN0IFtlcnJvcnMsc2V0RXJyb3JzXT11c2VTdGF0ZShbXSlcclxuY29uc3Qgc3VibWl0PWFzeW5jKGUpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgcmVnaXN0ZXI9YXdhaXQgQXhpb3MucG9zdChgL2FwaS9hdXRoL3NpZ251cGAse2VtYWlsOmVtYWlsLHBhc3N3b3JkOnBhc3N3b3JkfSlcclxuICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRFcnJvcnMoWy4uLmVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JdKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbnJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKT0+e3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19IHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIj48L2lucHV0PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSk9PntzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fSBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCI+PC9pbnB1dD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7ZXJyb3JzLmxlbmd0aD4wP2Vycm9ycy5tYXAoKGVycik9PntcclxuICAgICAgICAgICAgcmV0dXJuKDxwPntlcnIucGFyYW19OiB7ZXJyLm1zZ30gPC9wPilcclxuICAgICAgICB9KTpudWxsfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3VibWl0fT5TVUJNSVQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQbGFjZWhvbGRlciIsIkF4aW9zIiwiYXV0aF9kb21haW4iLCJTaWdudXAiLCJwcm9wcyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInJlZ2lzdGVyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJlcnIiLCJwYXJhbSIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=