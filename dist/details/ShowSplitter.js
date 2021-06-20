"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ShowSplitter = function ShowSplitter(_ref) {
  var leftSide = _ref.leftSide,
      _ref$leftSideProps = _ref.leftSideProps,
      _ref$leftSideProps$co = _ref$leftSideProps.component,
      LeftContainer = _ref$leftSideProps$co === void 0 ? _Card.default : _ref$leftSideProps$co,
      restLeftProps = _objectWithoutProperties(_ref$leftSideProps, ["component"]),
      rightSide = _ref.rightSide,
      _ref$rightSideProps = _ref.rightSideProps,
      _ref$rightSideProps$c = _ref$rightSideProps.component,
      RightContainer = _ref$rightSideProps$c === void 0 ? _Card.default : _ref$rightSideProps$c,
      restRightProps = _objectWithoutProperties(_ref$rightSideProps, ["component"]),
      props = _objectWithoutProperties(_ref, ["leftSide", "leftSideProps", "rightSide", "rightSideProps"]);

  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 4
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, _extends({
    item: true
  }, restLeftProps), /*#__PURE__*/_react.default.createElement(LeftContainer, null, /*#__PURE__*/(0, _react.cloneElement)(leftSide, props))), /*#__PURE__*/_react.default.createElement(_Grid.default, _extends({
    item: true
  }, restRightProps), /*#__PURE__*/_react.default.createElement(RightContainer, null, /*#__PURE__*/(0, _react.cloneElement)(rightSide, props))));
};

ShowSplitter.defaultProps = {
  leftSideProps: {
    lg: 4,
    md: 6,
    xl: 4,
    xs: 12,
    component: _Card.default
  },
  rightSideProps: {
    lg: 8,
    md: 6,
    xl: 8,
    xs: 12,
    component: _Card.default
  }
};
ShowSplitter.propTypes = {
  leftSide: _propTypes.default.element,
  leftSideProps: _propTypes.default.object,
  rightSide: _propTypes.default.element,
  rightSideProps: _propTypes.default.object
};
var _default = ShowSplitter;
exports.default = _default;