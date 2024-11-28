import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { FlexLayoutTag } from './FlexLayout.theme';

/**
 * @prop {*} justifyContent css justify-content rule
 * @prop {*} alignContent css align-content rule
 * @prop {*} alignItems css align-items rule
 * @prop {*} gap offset between children
 * @prop {*} offsetX offset between the container and his parent
 * @prop {*} offsetX offset between the container and his parent
 * @prop {*} cursor cursor pointer
 * @prop {*} stretch if true when stretch the container
 * @prop {*} grow set flex-grow: 1
 * @prop {*} growChildren set flex-grow: 1 to all children
 */

var FlexLayout = function FlexLayout(_ref) {
  var tagName = _ref.tagName,
    rest = _objectWithoutProperties(_ref, ["tagName"]);
  return ___EmotionJSX(FlexLayoutTag, _extends({}, rest, {
    tagName: tagName
  }));
};
FlexLayout.defaultProps = {
  tagName: 'div',
  gap: 'sm',
  direction: 'row',
  justifyContent: 'start',
  alignContent: 'start',
  alignItems: 'start',
  flexWrap: 'nowrap',
  offestX: 'none',
  offestY: 'none',
  cursor: 'inherit',
  stretch: false,
  grow: false,
  growChildren: false
};
var Row = function Row(props) {
  return ___EmotionJSX(FlexLayout, _extends({}, props, {
    direction: "row"
  }));
};
var Column = function Column(props) {
  return ___EmotionJSX(FlexLayout, _extends({}, props, {
    direction: "column"
  }));
};
export { Row, Column, FlexLayout };