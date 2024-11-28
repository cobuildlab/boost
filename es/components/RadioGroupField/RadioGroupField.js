import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import * as formUtils from '../../utils/forms';
import { Radio } from '../Radio';
import { FormField } from '../Form/FormField';

var RadioGroupField = function RadioGroupField(_ref) {
  var children = _ref.children,
      direction = _ref.direction,
      gap = _ref.gap,
      hideErrorLabel = _ref.hideErrorLabel,
      input = _ref.input,
      meta = _ref.meta,
      options = _ref.options,
      disabled = _ref.disabled,
      stretch = _ref.stretch,
      justifyContent = _ref.justifyContent,
      alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      flexWrap = _ref.flexWrap,
      showErrorOnTouched = _ref.showErrorOnTouched,
      rest = _objectWithoutProperties(_ref, ["children", "direction", "gap", "hideErrorLabel", "input", "meta", "options", "disabled", "stretch", "justifyContent", "alignContent", "alignItems", "flexWrap", "showErrorOnTouched"]);

  var name = input.name,
      value = input.value,
      onChange = input.onChange;
  var hasError = formUtils.hasError(meta, showErrorOnTouched);
  return ___EmotionJSX(FormField, _extends({}, rest, {
    hideErrorLabel: hideErrorLabel,
    input: input,
    meta: meta,
    showErrorOnTouched: showErrorOnTouched
  }), ___EmotionJSX(Radio.Group, {
    direction: direction,
    gap: gap,
    hasError: hasError,
    name: name,
    onChange: onChange,
    options: options,
    value: value,
    disabled: disabled,
    stretch: stretch,
    justifyContent: justifyContent,
    alignContent: alignContent,
    alignItems: alignItems,
    flexWrap: flexWrap
  }, children));
};

RadioGroupField.defaultProps = {
  showErrorOnTouched: true
};
export { RadioGroupField };