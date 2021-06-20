"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

var _RaField = _interopRequireDefault(require("./RaField"));

var _core = require("../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
  var children = _ref.children,
      className = _ref.className,
      record = _ref.record,
      resource = _ref.resource,
      basePath = _ref.basePath,
      version = _ref.version,
      initialValues = _ref.initialValues,
      translate = _ref.translate,
      rest = _objectWithoutProperties(_ref, ["children", "className", "record", "resource", "basePath", "version", "initialValues", "translate"]);

  return rest;
};

var CompactShowLayout = function CompactShowLayout(_ref2) {
  var layoutComponents = _ref2.layoutComponents,
      ignoredComponents = _ref2.ignoredComponents,
      basePath = _ref2.basePath,
      className = _ref2.className,
      children = _ref2.children,
      record = _ref2.record,
      resource = _ref2.resource,
      version = _ref2.version,
      rest = _objectWithoutProperties(_ref2, ["layoutComponents", "ignoredComponents", "basePath", "className", "children", "record", "resource", "version"]);

  var layoutComponentsNamesArr = (0, _core.getComponentsNames)(layoutComponents);
  var ignoredComponentsNamesArr = (0, _core.getComponentsNames)(ignoredComponents);
  return /*#__PURE__*/_react.default.createElement(_reactAdmin.CardContentInner, _extends({
    className: className,
    key: version
  }, sanitizeRestProps(rest)), _react.Children.map(children, function (child) {
    return (0, _core.cloneRecursively)(child, function (x) {
      return (0, _core.isLayoutComponent)(x, layoutComponentsNamesArr);
    }, function (x) {
      return /*#__PURE__*/_react.default.createElement(_RaField.default, {
        field: x,
        basePath: basePath,
        record: record,
        resource: resource
      });
    }, function (x) {
      return (0, _core.isComponentInNamedAry)(x, ignoredComponentsNamesArr);
    });
  }));
};

CompactShowLayout.propTypes = {
  basePath: _propTypes.default.string,
  record: _propTypes.default.object,
  resource: _propTypes.default.string,
  version: _propTypes.default.number,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  layoutComponents: _propTypes.default.array,
  ignoredComponents: _propTypes.default.array
};
var _default = CompactShowLayout;
exports.default = _default;