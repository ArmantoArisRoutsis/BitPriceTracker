webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "C:\\Users\\arrou\\Desktop\\BitsPrice\\components\\Prices.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var list = '';

      if (this.state.currency === 'USD') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.bpi.USD.description, ":", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.bpi.USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.bpi.USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), console.log(this.props.bpi.bpi.USD.rate)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 20
        }, this);
      } else if (this.state.currency === 'GBP') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.bpi.USD.description, ":", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.bpi.USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.bpi.USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), console.log(this.props.bpi.bpi.USD.rate)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 20
        }, this);
      } else if (this.state.currency === 'EUR') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", this.props.bpi.bpi.USD.description, ":", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: this.props.bpi.bpi.USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: this.props.bpi.bpi.USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), console.log(this.props.bpi.bpi.USD.rate)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
          className: "list-group"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }, this);
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiY3VycmVuY3kiLCJsaXN0Iiwic3RhdGUiLCJwcm9wcyIsImJwaSIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEs7Ozs7Ozs7NkJBSUE7QUFDSixVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFFQSxVQUFHLEtBQUtDLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUEzQixFQUFpQztBQUM3QkMsWUFBSSxnQkFBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQ0FDVyxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJDLFdBRGxDLG9CQUVQO0FBQU0scUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxzQkFBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJDLEdBQW5CLENBQXVCRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZPLGVBR1A7QUFBQSxzQkFBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJHO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSE8sRUFJTkMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJDLEdBQW5CLENBQXVCRyxJQUFuQyxDQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQU9ILE9BUkQsTUFRTSxJQUFHLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUEzQixFQUFpQztBQUNuQ0MsWUFBSSxnQkFBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQ0FDVyxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJDLFdBRGxDLG9CQUVQO0FBQU0scUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxzQkFBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJDLEdBQW5CLENBQXVCRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZPLGVBR1A7QUFBQSxzQkFBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJHO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSE8sRUFJTkMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJDLEdBQW5CLENBQXVCRyxJQUFuQyxDQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQU9ILE9BUkssTUFRQSxJQUFHLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUEzQixFQUFpQztBQUNuQ0MsWUFBSSxnQkFBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQ0FDVyxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJDLFdBRGxDLG9CQUVQO0FBQU0scUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxzQkFBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJDLEdBQW5CLENBQXVCRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZPLGVBR1A7QUFBQSxzQkFBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUEsR0FBZixDQUFtQkMsR0FBbkIsQ0FBdUJHO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSE8sRUFJTkMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsS0FBTCxDQUFXQyxHQUFYLENBQWVBLEdBQWYsQ0FBbUJDLEdBQW5CLENBQXVCRyxJQUFuQyxDQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQU1IOztBQUNELDBCQUFPO0FBQUEsK0JBQ0g7QUFBSSxtQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQU1IOzs7O0VBdENnQkcsNENBQUssQ0FBQ0MsUzs7QUF5Q1piLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmNzQ1ODUwYjZkNTExYThhOTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgbGlzdCA9ICcnO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+IFxyXG4gICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5icGkuVVNELmRlc2NyaXB0aW9ufTpcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5icGkuVVNELmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzLmJwaS5icGkuVVNELnJhdGUpfVxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdHQlAnKXtcclxuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj4gXHJcbiAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLmJwaS5VU0QuZGVzY3JpcHRpb259OlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLmJwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMucHJvcHMuYnBpLmJwaS5VU0QucmF0ZSl9XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpe1xyXG4gICAgICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPiBcclxuICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuYnBpLlVTRC5kZXNjcmlwdGlvbn06XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5wcm9wcy5icGkuYnBpLlVTRC5yYXRlKX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+IEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPiBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259PC9saT4gKi99XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzOyJdLCJzb3VyY2VSb290IjoiIn0=