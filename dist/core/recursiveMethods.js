"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneRecursively = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var cloneRecursively = function cloneRecursively(child, conditionFnc, renderFnc) {
  var ignoreFnc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return false;
  };
  return child && /*#__PURE__*/(0, _react.isValidElement)(child) ? recursivelyFindRealChildren({
    child: child,
    renderFnc: renderFnc,
    conditionFnc: conditionFnc,
    ignoreFnc: ignoreFnc
  }) : null;
};

exports.cloneRecursively = cloneRecursively;

var recursivelyFindRealChildren = function recursivelyFindRealChildren(_ref) {
  var child = _ref.child,
      props = _objectWithoutProperties(_ref, ["child"]);

  // Extract props for local usage but remain in props to get passed forward
  var conditionFnc = props.conditionFnc,
      renderFnc = props.renderFnc,
      ignoreFnc = props.ignoreFnc;

  if (conditionFnc(child)) {
    // Clone current layout element and continue traversing children
    return /*#__PURE__*/(0, _react.cloneElement)(child, {
      children: _react.Children.map(child.props.children, function (innerChild) {
        return recursivelyFindRealChildren(_objectSpread({
          child: innerChild
        }, props));
      })
    });
  }

  if (ignoreFnc(child)) {
    return child; // Just simple return, no recursion or applying the field props
  } // Non-layout element found - recursion's bottom


  return renderFnc(child, props);
};