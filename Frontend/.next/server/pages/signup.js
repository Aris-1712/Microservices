"use strict";
(() => {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./Global/Endpoint.js":
/*!****************************!*\
  !*** ./Global/Endpoint.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth_domain": () => (/* binding */ auth_domain)
/* harmony export */ });
const auth_domain = "http://kubernetes.docker.internal/api/auth";

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Global_Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Global/Endpoint */ "./Global/Endpoint.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\app\\Frontend\\pages\\signup.js";






const Signup = props => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: errors,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const submit = async e => {
    try {
      e.preventDefault();
      const register = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`/api/auth/signup`, {
        email: email,
        password: password
      });
      console.log(register);
    } catch (error) {
      setErrors([...error.response.data.error]);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
      value: email,
      onChange: e => {
        setEmail(e.target.value);
      },
      placeholder: "Enter Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
      value: password,
      onChange: e => {
        setPassword(e.target.value);
      },
      placeholder: "Enter Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), errors.length > 0 ? errors.map(err => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: [err.param, ": ", err.msg, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 20
      }, undefined);
    }) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      onClick: submit,
      children: "SUBMIT"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsV0FBVyxHQUFDLDRDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE1BQU1LLE1BQU0sR0FBRUMsS0FBRCxJQUFTO0FBQ3RCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFpQk4sK0NBQVEsQ0FBQyxFQUFELENBQS9CO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFFBQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXVCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBckM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsTUFBRDtBQUFBLE9BQVFDO0FBQVIsTUFBbUJWLCtDQUFRLENBQUMsRUFBRCxDQUFqQzs7QUFDQSxRQUFNVyxNQUFNLEdBQUMsTUFBTUMsQ0FBTixJQUFVO0FBQ25CLFFBQUk7QUFDQUEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0osWUFBTUMsUUFBUSxHQUFDLE1BQU1aLGlEQUFBLENBQVksa0JBQVosRUFBOEI7QUFBQ0csUUFBQUEsS0FBSyxFQUFDQSxLQUFQO0FBQWFFLFFBQUFBLFFBQVEsRUFBQ0E7QUFBdEIsT0FBOUIsQ0FBckI7QUFDQVMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDQyxLQUpELENBSUUsT0FBT0ksS0FBUCxFQUFjO0FBQ1pSLE1BQUFBLFNBQVMsQ0FBQyxDQUFDLEdBQUdRLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxJQUFmLENBQW9CRixLQUF4QixDQUFELENBQVQ7QUFDSDtBQUVKLEdBVEQ7O0FBV0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFPLFdBQUssRUFBRWIsS0FBZDtBQUFxQixjQUFRLEVBQUdPLENBQUQsSUFBSztBQUFDTixRQUFBQSxRQUFRLENBQUNNLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFBeUIsT0FBOUQ7QUFBZ0UsaUJBQVcsRUFBQztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQU8sV0FBSyxFQUFFZixRQUFkO0FBQXdCLGNBQVEsRUFBR0ssQ0FBRCxJQUFLO0FBQUNKLFFBQUFBLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE0QixPQUFwRTtBQUFzRSxpQkFBVyxFQUFDO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLEVBS0tiLE1BQU0sQ0FBQ2MsTUFBUCxHQUFjLENBQWQsR0FBZ0JkLE1BQU0sQ0FBQ2UsR0FBUCxDQUFZQyxHQUFELElBQU87QUFDL0IsMEJBQU87QUFBQSxtQkFBSUEsR0FBRyxDQUFDQyxLQUFSLFFBQWlCRCxHQUFHLENBQUNFLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILEtBRmdCLENBQWhCLEdBRUUsSUFQUCxlQVFJO0FBQVEsYUFBTyxFQUFFaEIsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhQyxDQTVCRDs7QUErQkEsaUVBQWVSLE1BQWY7Ozs7Ozs7Ozs7QUNyQ0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL0dsb2JhbC9FbmRwb2ludC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXV0aF9kb21haW49XCJodHRwOi8va3ViZXJuZXRlcy5kb2NrZXIuaW50ZXJuYWwvYXBpL2F1dGhcIiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQbGFjZWhvbGRlciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBhdXRoX2RvbWFpbiB9IGZyb20gJy4uL0dsb2JhbC9FbmRwb2ludCdcclxuXHJcblxyXG5jb25zdCBTaWdudXA9KHByb3BzKT0+e1xyXG5jb25zdCBbZW1haWwsc2V0RW1haWxdPXVzZVN0YXRlKCcnKVxyXG5jb25zdCBbcGFzc3dvcmQsc2V0UGFzc3dvcmRdPXVzZVN0YXRlKCcnKVxyXG5jb25zdCBbZXJyb3JzLHNldEVycm9yc109dXNlU3RhdGUoW10pXHJcbmNvbnN0IHN1Ym1pdD1hc3luYyhlKT0+e1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHJlZ2lzdGVyPWF3YWl0IEF4aW9zLnBvc3QoYC9hcGkvYXV0aC9zaWdudXBgLHtlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZH0pXHJcbiAgICBjb25zb2xlLmxvZyhyZWdpc3RlcilcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0RXJyb3JzKFsuLi5lcnJvci5yZXNwb25zZS5kYXRhLmVycm9yXSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCI+PC9pbnB1dD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpPT57c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfX0gcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2Vycm9ycy5sZW5ndGg+MD9lcnJvcnMubWFwKChlcnIpPT57XHJcbiAgICAgICAgICAgIHJldHVybig8cD57ZXJyLnBhcmFtfToge2Vyci5tc2d9IDwvcD4pXHJcbiAgICAgICAgfSk6bnVsbH1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0+U1VCTUlUPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF1dGhfZG9tYWluIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBsYWNlaG9sZGVyIiwiQXhpb3MiLCJTaWdudXAiLCJwcm9wcyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXIiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVzcG9uc2UiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJlcnIiLCJwYXJhbSIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=