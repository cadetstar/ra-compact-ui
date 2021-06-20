"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sanitizeRestProps = function sanitizeRestProps(_ref) {
  var layoutComponentName = _ref.layoutComponentName,
      rest = _objectWithoutProperties(_ref, ["layoutComponentName"]);

  return rest;
};

var RaField = function RaField(_ref2) {
  var field = _ref2.field,
      record = _ref2.record,
      resource = _ref2.resource,
      basePath = _ref2.basePath,
      props = _objectWithoutProperties(_ref2, ["field", "record", "resource", "basePath"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    key: field.props.source,
    className: (0, _classnames.default)("ra-field ra-field-".concat(field.props.source), field.props.className)
  }, sanitizeRestProps(props)), field.props.addLabel ? /*#__PURE__*/_react.default.createElement(_reactAdmin.Labeled, {
    record: record,
    resource: resource,
    basePath: basePath,
    label: field.props.label,
    source: field.props.source,
    disabled: false
  }, field) : typeof field.type === 'string' ? field : /*#__PURE__*/_react.default.cloneElement(field, {
    record: record,
    resource: resource,
    basePath: basePath
  }));
};

RaField.propTypes = {
  basePath: _propTypes.default.string,
  record: _propTypes.default.object,
  resource: _propTypes.default.string,
  field: _propTypes.default.object
};
var _default = RaField;
exports.default = _default;