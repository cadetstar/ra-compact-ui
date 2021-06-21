"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _raCore = require("ra-core");

var _reactAdmin = require("react-admin");

var _core = require("../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CompactForm = function CompactForm(props) {
  return /*#__PURE__*/_react.default.createElement(_raCore.FormWithRedirect, _extends({}, props, {
    render: function render(formProps) {
      return /*#__PURE__*/_react.default.createElement(CompactFormView, formProps);
    }
  }));
};

CompactForm.propTypes = {
  children: _propTypes.default.node,
  initialValues: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  mutationMode: _propTypes.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
  record: _propTypes.default.object,
  redirect: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.func]),
  save: _propTypes.default.func,
  saving: _propTypes.default.bool,
  submitOnEnter: _propTypes.default.bool,
  toolbar: _propTypes.default.element,
  undoable: _propTypes.default.bool,
  validate: _propTypes.default.func,
  version: _propTypes.default.number,
  sanitizeEmptyValues: _propTypes.default.bool
};

var CompactFormView = function CompactFormView(_ref) {
  var basePath = _ref.basePath,
      children = _ref.children,
      className = _ref.className,
      Component = _ref.component,
      handleSubmit = _ref.handleSubmit,
      handleSubmitWithRedirect = _ref.handleSubmitWithRedirect,
      invalid = _ref.invalid,
      margin = _ref.margin,
      mutationMode = _ref.mutationMode,
      pristine = _ref.pristine,
      record = _ref.record,
      redirect = _ref.redirect,
      resource = _ref.resource,
      saving = _ref.saving,
      submitOnEnter = _ref.submitOnEnter,
      toolbar = _ref.toolbar,
      undoable = _ref.undoable,
      variant = _ref.variant,
      layoutComponents = _ref.layoutComponents,
      ignoredComponents = _ref.ignoredComponents,
      rest = _objectWithoutProperties(_ref, ["basePath", "children", "className", "component", "handleSubmit", "handleSubmitWithRedirect", "invalid", "margin", "mutationMode", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "toolbar", "undoable", "variant", "layoutComponents", "ignoredComponents"]);

  var layoutComponentsNamesArr = (0, _core.getComponentsNames)(layoutComponents);
  var ignoredComponentsNamesArr = (0, _core.getComponentsNames)(ignoredComponents);
  return /*#__PURE__*/_react.default.createElement("form", _extends({
    className: (0, _classnames.default)('simple-form', className)
  }, sanitizeRestProps(rest)), /*#__PURE__*/_react.default.createElement(Component, null, _react.Children.map(children, function (child) {
    return (0, _core.cloneRecursively)(child, function (x) {
      return (0, _core.isLayoutComponent)(x, layoutComponentsNamesArr);
    }, function (x) {
      return /*#__PURE__*/_react.default.createElement(_reactAdmin.FormInput, {
        input: x,
        basePath: basePath,
        record: record,
        resource: resource,
        variant: x.props.variant || variant,
        margin: x.props.margin || margin
      });
    }, function (x) {
      return (0, _core.isComponentInNamedAry)(x, ignoredComponentsNamesArr);
    });
  })), toolbar && /*#__PURE__*/(0, _react.cloneElement)(toolbar, {
    basePath: basePath,
    handleSubmitWithRedirect: handleSubmitWithRedirect,
    handleSubmit: handleSubmit,
    invalid: invalid,
    mutationMode: mutationMode,
    pristine: pristine,
    record: record,
    redirect: redirect,
    resource: resource,
    saving: saving,
    submitOnEnter: submitOnEnter,
    undoable: undoable
  }));
};

CompactFormView.propTypes = {
  basePath: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  handleSubmit: _propTypes.default.func,
  // passed by react-final-form
  handleSubmitWithRedirect: _propTypes.default.func,
  invalid: _propTypes.default.bool,
  mutationMode: _propTypes.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
  pristine: _propTypes.default.bool,
  record: _propTypes.default.object,
  resource: _propTypes.default.string,
  redirect: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.func]),
  save: _propTypes.default.func,
  // the handler defined in the parent, which triggers the REST submission
  saving: _propTypes.default.bool,
  submitOnEnter: _propTypes.default.bool,
  toolbar: _propTypes.default.element,
  undoable: _propTypes.default.bool,
  validate: _propTypes.default.func,
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.node]),
  variant: _propTypes.default.string,
  margin: _propTypes.default.string,
  layoutComponents: _propTypes.default.array,
  ignoredComponents: _propTypes.default.array
};
CompactFormView.defaultProps = {
  submitOnEnter: true,
  toolbar: /*#__PURE__*/_react.default.createElement(_reactAdmin.Toolbar, null),
  component: _reactAdmin.CardContentInner
};

var sanitizeRestProps = function sanitizeRestProps(_ref2) {
  var active = _ref2.active,
      dirty = _ref2.dirty,
      dirtyFields = _ref2.dirtyFields,
      dirtyFieldsSinceLastSubmit = _ref2.dirtyFieldsSinceLastSubmit,
      dirtySinceLastSubmit = _ref2.dirtySinceLastSubmit,
      error = _ref2.error,
      errors = _ref2.errors,
      form = _ref2.form,
      hasSubmitErrors = _ref2.hasSubmitErrors,
      hasValidationErrors = _ref2.hasValidationErrors,
      initialValues = _ref2.initialValues,
      modified = _ref2.modified,
      modifiedSinceLastSubmit = _ref2.modifiedSinceLastSubmit,
      save = _ref2.save,
      submitError = _ref2.submitError,
      submitErrors = _ref2.submitErrors,
      submitFailed = _ref2.submitFailed,
      submitSucceeded = _ref2.submitSucceeded,
      submitting = _ref2.submitting,
      touched = _ref2.touched,
      valid = _ref2.valid,
      validating = _ref2.validating,
      values = _ref2.values,
      visited = _ref2.visited,
      __versions = _ref2.__versions,
      props = _objectWithoutProperties(_ref2, ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "form", "hasSubmitErrors", "hasValidationErrors", "initialValues", "modified", "modifiedSinceLastSubmit", "save", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited", "__versions"]);

  return props;
};

var _default = CompactForm;
exports.default = _default;