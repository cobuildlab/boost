import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import * as formUtils from '../../utils/forms';
import { Checkbox } from '../Checkbox';
import { FormField } from '../Form/FormField';
var CheckboxField = function CheckboxField(_ref) {
  var label = _ref.label,
    stretch = _ref.stretch,
    input = _ref.input,
    meta = _ref.meta,
    disabled = _ref.disabled,
    color = _ref.color,
    nowrap = _ref.nowrap,
    showErrorOnTouched = _ref.showErrorOnTouched,
    rest = _objectWithoutProperties(_ref, ["label", "stretch", "input", "meta", "disabled", "color", "nowrap", "showErrorOnTouched"]);
  var name = input.name,
    value = input.value,
    onChange = input.onChange,
    onFocus = input.onFocus,
    onBlur = input.onBlur;
  var hasError = formUtils.hasError(meta, showErrorOnTouched);
  return ___EmotionJSX(FormField, _extends({}, rest, {
    input: input,
    meta: meta,
    stretch: stretch,
    showErrorOnTouched: showErrorOnTouched
  }), ___EmotionJSX(Checkbox, {
    label: label,
    name: name,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    checked: value,
    hasError: hasError,
    disabled: disabled,
    color: color,
    nowrap: nowrap,
    indeterminate: value === null
  }));
};
CheckboxField.defaultProps = {
  showErrorOnTouched: true
};
export { CheckboxField };