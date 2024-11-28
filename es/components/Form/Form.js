import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
import { FlexLayout } from '../FlexLayout';
import { FormField, theme as formFieldTheme } from './FormField';
import { FormSection } from './FormSection';
import { FormSectionBody } from './FormSectionBody';
import { FormError, theme as formErrorTheme } from './FormError';
import { FormSectionTitle, theme as formSectionTitleTheme } from './FormSectionTitle';
var name = 'form';
var _createThemeTag = createThemeTag(name, {
    root: {
      flex: 1
    },
    modifiers: {
      stretch: {
        height: '100%',
        width: '100%'
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  FormTag = _createThemeTag2[0],
  formTheme = _createThemeTag2[1];
var theme = _objectSpread({}, formTheme, {}, formFieldTheme, {}, formSectionTitleTheme, {}, formErrorTheme);
var Form = function Form(_ref) {
  var children = _ref.children,
    onSubmit = _ref.onSubmit,
    component = _ref.component,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "onSubmit", "component", "className"]);
  return ___EmotionJSX(FormTag, {
    tagName: component,
    onSubmit: onSubmit,
    className: className
  }, ___EmotionJSX(FlexLayout, rest, children));
};
Form.defaultProps = {
  stretch: false,
  component: 'form',
  direction: 'column',
  gap: 'md',
  alignItems: 'stretch'
};
Form.displayName = 'Form';
Form.Field = FormField;
Form.Section = FormSection;
Form.SectionBody = FormSectionBody;
Form.SectionTitle = FormSectionTitle;
Form.Error = FormError;
export { Form, theme };