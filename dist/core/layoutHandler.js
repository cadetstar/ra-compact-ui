"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentsNames = exports.isLayoutComponent = exports.isComponentInNamedAry = void 0;
var EMPTY_LAYOUT_NODE_ERROR = 'Layout node has no found children! Nesting layout components should always end with a ra-field of any type!';

var isComponentInNamedAry = function isComponentInNamedAry(child, namesArr) {
  return child.type && namesArr.filter(function (name) {
    return name === child.type.displayName;
  }).length > 0;
};

exports.isComponentInNamedAry = isComponentInNamedAry;

var isLayoutComponent = function isLayoutComponent(child, layoutComponentsNamesArr) {
  if (child == null) {
    throw EMPTY_LAYOUT_NODE_ERROR;
  }

  return isComponentInNamedAry(child, layoutComponentsNamesArr);
};

exports.isLayoutComponent = isLayoutComponent;

var getComponentsNames = function getComponentsNames(componentsArr) {
  return componentsArr.map(function (x) {
    return x.displayName;
  });
};

exports.getComponentsNames = getComponentsNames;