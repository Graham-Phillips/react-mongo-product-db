/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 219);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/react/react.js ***!
  \**************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'D:\\\\randd\\\\jsfullstack\\\\fresh\\\\node_modules\\\\react\\\\react.js'\\n    at Error (native)\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 214:
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchProductList = exports.fetchProduct = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ 92);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fetchProduct = exports.fetchProduct = function fetchProduct(productId) {\n  console.log(\"fetchProduct\");\n  return _axios2.default.get('/api/products/' + productId).then(function (resp) {\n    return resp.data;\n  });\n};\n\nvar fetchProductList = exports.fetchProductList = function fetchProductList() {\n  return _axios2.default.get('/api/products').then(function (resp) {\n    console.log(\"fetchProductList resp.data:\" + JSON.stringify(resp.data));\n    console.log(\"fetchProductList resp.data.products:\" + JSON.stringify(resp.data.products));\n    return resp.data.products;\n  });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcGkuanM/ZTFkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdCA9IHByb2R1Y3RJZCA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJmZXRjaFByb2R1Y3RcIik7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gKVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5kYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcHJvZHVjdHMnKVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaFByb2R1Y3RMaXN0IHJlc3AuZGF0YTpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3AuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaFByb2R1Y3RMaXN0IHJlc3AuZGF0YS5wcm9kdWN0czpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3AuZGF0YS5wcm9kdWN0cykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3AuZGF0YS5wcm9kdWN0c30pO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwaS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 215:
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 18);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 23);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(_ref) {\n  var message = _ref.message;\n\n  return _react2.default.createElement(\n    'h2',\n    { className: 'Header text-center' },\n    message\n  );\n};\n\nHeader.propTypes = {\n  message: _propTypes2.default.string\n};\n\nexports.default = Header;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcz82ZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe21lc3NhZ2V9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMiBjbGFzc05hbWU9XCJIZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICB7bWVzc2FnZX1cclxuICAgIDwvaDI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 216:
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 18);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 23);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Product = function (_Component) {\n  _inherits(Product, _Component);\n\n  function Product() {\n    _classCallCheck(this, Product);\n\n    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));\n  }\n\n  _createClass(Product, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'Product' },\n        _react2.default.createElement(\n          'div',\n          { className: 'contest-description' },\n          this.props.description\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'home-link link',\n            onClick: this.props.productListClick },\n          'Product List'\n        )\n      );\n    }\n  }]);\n\n  return Product;\n}(_react.Component);\n\nProduct.PropTypes = {\n  id: _propTypes2.default.number.isRequired,\n  productListClick: _propTypes2.default.func.isRequired\n};\n\nexports.default = Product;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QuanM/ZWUyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJQcm9kdWN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXN0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtbGluayBsaW5rXCJcclxuICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJvZHVjdExpc3RDbGlja30+XHJcbiAgICAgICAgICBQcm9kdWN0IExpc3RcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUHJvZHVjdC5Qcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBwcm9kdWN0TGlzdENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBVUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 217:
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/components/ProductList.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ 18);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ProductPreview = __webpack_require__(/*! ./ProductPreview */ 218);\n\nvar _ProductPreview2 = _interopRequireDefault(_ProductPreview);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 23);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ProductList = function ProductList(_ref) {\n  var products = _ref.products,\n      onProductClick = _ref.onProductClick;\n  return _react2.default.createElement(\n    'div',\n    { className: 'ProductList' },\n    Object.keys(products).map(function (productId) {\n      return _react2.default.createElement(_ProductPreview2.default, _extends({\n        key: productId,\n        onClick: onProductClick\n      }, products[productId]));\n    })\n  );\n};\n\nProductList.propTypes = {\n  products: _propTypes2.default.object,\n  onProductClick: _propTypes2.default.func.isRequired\n};\n\nexports.default = ProductList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzP2E4NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RQcmV2aWV3IGZyb20gJy4vUHJvZHVjdFByZXZpZXcnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBwcm9kdWN0cywgb25Qcm9kdWN0Q2xpY2t9KSA9PiAoXHJcbjxkaXYgY2xhc3NOYW1lID0gXCJQcm9kdWN0TGlzdFwiPlxyXG4gICAgeyBPYmplY3Qua2V5cyhwcm9kdWN0cykubWFwKHByb2R1Y3RJZCA9PlxyXG4gICAgICA8UHJvZHVjdFByZXZpZXdcclxuICAgICAgICBrZXk9e3Byb2R1Y3RJZH1cclxuICAgICAgICBvbkNsaWNrPXtvblByb2R1Y3RDbGlja31cclxuICAgICAgICB7Li4ucHJvZHVjdHNbcHJvZHVjdElkXX0gLz5cclxuICAgICl9XHJcbjwvZGl2PlxyXG4pO1xyXG5cclxuUHJvZHVjdExpc3QucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uUHJvZHVjdENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFEQTtBQURBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 218:
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./src/components/ProductPreview.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 18);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 23);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductPreview = function (_Component) {\n  _inherits(ProductPreview, _Component);\n\n  function ProductPreview() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, ProductPreview);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductPreview.__proto__ || Object.getPrototypeOf(ProductPreview)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {\n      console.log(_this.props.productName);\n      _this.props.onClick(_this.props.id);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  // on click send the id back for navigation purposes\n\n\n  _createClass(ProductPreview, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'link ProductPreview', onClick: this.handleClick },\n        _react2.default.createElement(\n          'div',\n          { className: 'product-name' },\n          this.props.productName\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'product-description' },\n          this.props.productDescription\n        )\n      );\n    }\n  }]);\n\n  return ProductPreview;\n}(_react.Component);\n\nProductPreview.propTypes = {\n  id: _propTypes2.default.number.isRequired,\n  productName: _propTypes2.default.string.isRequired,\n  productDescription: _propTypes2.default.string.isRequired,\n  onClick: _propTypes2.default.func.isRequired\n};\n\nexports.default = ProductPreview;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RQcmV2aWV3LmpzPzExNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jbGFzcyBQcm9kdWN0UHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8vIG9uIGNsaWNrIHNlbmQgdGhlIGlkIGJhY2sgZm9yIG5hdmlnYXRpb24gcHVycG9zZXNcclxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucHJvZHVjdE5hbWUpO1xyXG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuaWQpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rIFByb2R1Y3RQcmV2aWV3JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LW5hbWUnPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMucHJvZHVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblByb2R1Y3RQcmV2aWV3LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHByb2R1Y3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcHJvZHVjdERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UHJldmlldztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1Byb2R1Y3RQcmV2aWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUpBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 219:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 18);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 90);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = __webpack_require__(/*! ./components/App */ 91);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_App2.default, { initialData: window.initialData }), document.getElementById('products')); // entry point to the client side app//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qcz8xZmRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVudHJ5IHBvaW50IHRvIHRoZSBjbGllbnQgc2lkZSBhcHBcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxBcHAgaW5pdGlhbERhdGE9e3dpbmRvdy5pbml0aWFsRGF0YX0gLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RzJylcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 23:
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/prop-types/index.js ***!
  \*******************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'D:\\\\randd\\\\jsfullstack\\\\fresh\\\\node_modules\\\\prop-types\\\\index.js'\\n    at Error (native)\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 90:
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/react-dom/index.js ***!
  \******************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'D:\\\\randd\\\\jsfullstack\\\\fresh\\\\node_modules\\\\react-dom\\\\index.js'\\n    at Error (native)\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 91:
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 18);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./Header */ 215);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _ProductList = __webpack_require__(/*! ./ProductList */ 217);\n\nvar _ProductList2 = _interopRequireDefault(_ProductList);\n\nvar _Product = __webpack_require__(/*! ./Product */ 216);\n\nvar _Product2 = _interopRequireDefault(_Product);\n\nvar _api = __webpack_require__(/*! ../api */ 214);\n\nvar api = _interopRequireWildcard(_api);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 23);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// function to utilise the html5 history api. this app is very simple so we can use this instead of React router\nvar pushState = function pushState(obj, url) {\n  return window.history.pushState(obj, '', url);\n};\n\n// assign a handler to the onPopState event\nvar onPopState = function onPopState(handler) {\n  window.onpopstate = handler;\n};\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.props.initialData, _this.fetchProduct = function (productId) {\n      // change route to product page\n      pushState({ currentProductId: productId }, // state object\n      '/product/' + productId // url\n      );\n      // get the product info\n      api.fetchProduct(productId).then(function (product) {\n        _this.setState({\n          currentProductId: product.id,\n          products: _extends({}, _this.state.products, _defineProperty({}, product.id, product))\n        });\n      });\n    }, _this.fetchProductList = function () {\n      // first, navigate:\n      pushState({ currentProductId: null }, '/' // new url pushed to history state\n      );\n      api.fetchProductList().then(function (products) {\n        _this.setState({\n          currentProductId: null, // current product being null causes UI to change\n          products: products\n        });\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n  // as we are using babel-stage-2 we can use class properties\n\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // deal with browser back button:\n      onPopState(function (event) {\n        _this2.setState({\n          currentProductId: (event.state || {}).currentProductId\n        });\n      });\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      // when component is unloaded, ensure the nav history handler is cleared\n      onPopState(null);\n    }\n  }, {\n    key: 'currentProduct',\n    value: function currentProduct() {\n      return this.state.products[this.state.currentProductId];\n    }\n  }, {\n    key: 'pageHeader',\n    value: function pageHeader() {\n      if (this.state.currentProductId) {\n        return this.currentProduct().productName;\n      }\n      return 'Products';\n    }\n    // either show the list of products, or if we have a current product, show it\n\n  }, {\n    key: 'currentContent',\n    value: function currentContent() {\n      if (this.state.currentProductId) {\n        return _react2.default.createElement(_Product2.default, _extends({\n          productListClick: this.fetchProductList\n        }, this.currentProduct()));\n      }\n\n      return _react2.default.createElement(_ProductList2.default, {\n        onProductClick: this.fetchProduct,\n        products: this.state.products });\n    }\n\n    // iterate over products with map to pass through each product to ProductPreview\n\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'App' },\n        _react2.default.createElement(_Header2.default, { message: this.pageHeader() }),\n        this.currentContent()\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nApp.propTypes = {\n  initialData: _propTypes2.default.object.isRequired\n};\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwLmpzPzU3YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL1Byb2R1Y3RMaXN0JztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG4vLyBmdW5jdGlvbiB0byB1dGlsaXNlIHRoZSBodG1sNSBoaXN0b3J5IGFwaS4gdGhpcyBhcHAgaXMgdmVyeSBzaW1wbGUgc28gd2UgY2FuIHVzZSB0aGlzIGluc3RlYWQgb2YgUmVhY3Qgcm91dGVyXHJcbmNvbnN0IHB1c2hTdGF0ZSA9IChvYmosIHVybCkgPT5cclxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUob2JqLCAnJywgdXJsKTtcclxuXHJcbi8vIGFzc2lnbiBhIGhhbmRsZXIgdG8gdGhlIG9uUG9wU3RhdGUgZXZlbnRcclxuY29uc3Qgb25Qb3BTdGF0ZSA9IGhhbmRsZXIgPT4ge1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gaGFuZGxlcjtcclxufTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG4gIC8vIGFzIHdlIGFyZSB1c2luZyBiYWJlbC1zdGFnZS0yIHdlIGNhbiB1c2UgY2xhc3MgcHJvcGVydGllc1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBpbml0aWFsRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgfTtcclxuXHJcbiAgc3RhdGUgPSB0aGlzLnByb3BzLmluaXRpYWxEYXRhO1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyBkZWFsIHdpdGggYnJvd3NlciBiYWNrIGJ1dHRvbjpcclxuICAgIG9uUG9wU3RhdGUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGN1cnJlbnRQcm9kdWN0SWQ6IChldmVudC5zdGF0ZSB8fCB7fSkuY3VycmVudFByb2R1Y3RJZFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAvLyB3aGVuIGNvbXBvbmVudCBpcyB1bmxvYWRlZCwgZW5zdXJlIHRoZSBuYXYgaGlzdG9yeSBoYW5kbGVyIGlzIGNsZWFyZWRcclxuICAgIG9uUG9wU3RhdGUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBmZXRjaFByb2R1Y3QgPSAocHJvZHVjdElkKSA9PiB7XHJcbiAgICAvLyBjaGFuZ2Ugcm91dGUgdG8gcHJvZHVjdCBwYWdlXHJcbiAgICBwdXNoU3RhdGUoXHJcbiAgICAgIHsgY3VycmVudFByb2R1Y3RJZDogcHJvZHVjdElkIH0sIC8vIHN0YXRlIG9iamVjdFxyXG4gICAgICBgL3Byb2R1Y3QvJHtwcm9kdWN0SWR9YCAvLyB1cmxcclxuICAgICk7XHJcbiAgICAvLyBnZXQgdGhlIHByb2R1Y3QgaW5mb1xyXG4gICAgYXBpLmZldGNoUHJvZHVjdChwcm9kdWN0SWQpLnRoZW4ocHJvZHVjdCA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGN1cnJlbnRQcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgICBbcHJvZHVjdC5pZF06IHByb2R1Y3RcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmV0Y2hQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuICAgIC8vIGZpcnN0LCBuYXZpZ2F0ZTpcclxuICAgIHB1c2hTdGF0ZShcclxuICAgICAgeyBjdXJyZW50UHJvZHVjdElkOiBudWxsIH0sXHJcbiAgICAgICcvJyAvLyBuZXcgdXJsIHB1c2hlZCB0byBoaXN0b3J5IHN0YXRlXHJcbiAgICApO1xyXG4gICAgYXBpLmZldGNoUHJvZHVjdExpc3QoKS50aGVuKHByb2R1Y3RzID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY3VycmVudFByb2R1Y3RJZDogbnVsbCwgLy8gY3VycmVudCBwcm9kdWN0IGJlaW5nIG51bGwgY2F1c2VzIFVJIHRvIGNoYW5nZVxyXG4gICAgICAgIHByb2R1Y3RzXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY3VycmVudFByb2R1Y3QoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByb2R1Y3RzW3RoaXMuc3RhdGUuY3VycmVudFByb2R1Y3RJZF07XHJcbiAgICB9XHJcbiAgICBwYWdlSGVhZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UHJvZHVjdElkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2R1Y3QoKS5wcm9kdWN0TmFtZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJ1Byb2R1Y3RzJztcclxuICAgIH1cclxuICAvLyBlaXRoZXIgc2hvdyB0aGUgbGlzdCBvZiBwcm9kdWN0cywgb3IgaWYgd2UgaGF2ZSBhIGN1cnJlbnQgcHJvZHVjdCwgc2hvdyBpdFxyXG4gIGN1cnJlbnRDb250ZW50KCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jdXJyZW50UHJvZHVjdElkKXtcclxuICAgICAgcmV0dXJuIDxQcm9kdWN0XHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0Q2xpY2s9e3RoaXMuZmV0Y2hQcm9kdWN0TGlzdH1cclxuICAgICAgICAgICAgey4uLnRoaXMuY3VycmVudFByb2R1Y3QoKX0gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxQcm9kdWN0TGlzdFxyXG4gICAgICAgICAgICBvblByb2R1Y3RDbGljayA9IHt0aGlzLmZldGNoUHJvZHVjdH1cclxuICAgICAgICAgICAgcHJvZHVjdHM9e3RoaXMuc3RhdGUucHJvZHVjdHN9IC8+O1xyXG4gIH1cclxuXHJcbiAgLy8gaXRlcmF0ZSBvdmVyIHByb2R1Y3RzIHdpdGggbWFwIHRvIHBhc3MgdGhyb3VnaCBlYWNoIHByb2R1Y3QgdG8gUHJvZHVjdFByZXZpZXdcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cclxuICAgICAgICA8SGVhZGVyIG1lc3NhZ2U9e3RoaXMucGFnZUhlYWRlcigpfSAvPlxyXG4gICAgICAgIHt0aGlzLmN1cnJlbnRDb250ZW50KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQWlCQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFuREE7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQWtDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUFwRkE7QUFDQTtBQURBO0FBR0E7QUFEQTtBQXFGQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 92:
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/axios/index.js ***!
  \**************************/
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'D:\\\\randd\\\\jsfullstack\\\\fresh\\\\node_modules\\\\axios\\\\index.js'\\n    at Error (native)\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTIuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

/******/ });