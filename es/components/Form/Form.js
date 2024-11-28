import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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