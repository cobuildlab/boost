import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { FlexLayout } from '../FlexLayout';

var FormSection = function FormSection(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return ___EmotionJSX(FlexLayout, _extends({}, rest, {
    stretch: true,
    direction: "column"
  }), children);
};

FormSection.defaultProps = {
  gap: 'sm'
};
export { FormSection };