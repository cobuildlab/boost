import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import * as formUtils from '../../utils/forms';
import { Switch } from '../Switch';
import { FormField } from '../Form/FormField';
var SwitchField = function SwitchField(_ref) {
  var label = _ref.label,
    input = _ref.input,
    meta = _ref.meta,
    showErrorOnTouched = _ref.showErrorOnTouched,
    rest = _objectWithoutProperties(_ref, ["label", "input", "meta", "showErrorOnTouched"]);
  var name = input.name,
    value = input.value,
    onChange = input.onChange,
    onFocus = input.onFocus,
    onBlur = input.onBlur;
  var hasError = formUtils.hasError(meta, showErrorOnTouched);
  return ___EmotionJSX(FormField, _extends({}, rest, {
    input: input,
    meta: meta,
    showErrorOnTouched: showErrorOnTouched
  }), ___EmotionJSX(Switch, {
    name: name,
    label: label,
    value: Boolean(value),
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    hasError: hasError
  }));
};
SwitchField.defaultProps = {
  showErrorOnTouched: true
};
export { SwitchField };