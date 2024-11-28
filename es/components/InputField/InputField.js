import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import * as formUtils from '../../utils/forms';
import { Input } from '../Input';
import { FormField } from '../Form/FormField';
var InputField = function InputField(_ref) {
  var align = _ref.align,
    direction = _ref.direction,
    hideErrorIndicator = _ref.hideErrorIndicator,
    hideErrorLabel = _ref.hideErrorLabel,
    input = _ref.input,
    insideRef = _ref.insideRef,
    label = _ref.label,
    maxLength = _ref.maxLength,
    meta = _ref.meta,
    placeholder = _ref.placeholder,
    square = _ref.square,
    stretch = _ref.stretch,
    clearable = _ref.clearable,
    width = _ref.width,
    type = _ref.type,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    disabled = _ref.disabled,
    readOnly = _ref.readOnly,
    autoComplete = _ref.autoComplete,
    autoFocus = _ref.autoFocus,
    onClear = _ref.onClear,
    step = _ref.step,
    min = _ref.min,
    max = _ref.max,
    mask = _ref.mask,
    showErrorOnTouched = _ref.showErrorOnTouched,
    rest = _objectWithoutProperties(_ref, ["align", "direction", "hideErrorIndicator", "hideErrorLabel", "input", "insideRef", "label", "maxLength", "meta", "placeholder", "square", "stretch", "clearable", "width", "type", "leftIcon", "rightIcon", "disabled", "readOnly", "autoComplete", "autoFocus", "onClear", "step", "min", "max", "mask", "showErrorOnTouched"]);
  var name = input.name,
    value = input.value,
    onChange = input.onChange,
    onFocus = input.onFocus,
    onBlur = input.onBlur;
  var hasError = formUtils.hasError(meta, showErrorOnTouched);
  return ___EmotionJSX(FormField, _extends({}, rest, {
    label: label,
    stretch: stretch,
    direction: direction,
    hideErrorLabel: hideErrorLabel,
    input: input,
    meta: meta,
    showErrorOnTouched: showErrorOnTouched
  }), ___EmotionJSX(Input, {
    align: align,
    hasError: hasError,
    hideErrorIndicator: hideErrorIndicator,
    insideRef: insideRef,
    maxLength: maxLength,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    square: square,
    value: value,
    width: width,
    type: input.type || type,
    stretch: stretch,
    clearable: clearable,
    disabled: disabled,
    readOnly: readOnly,
    autoComplete: autoComplete,
    leftIcon: leftIcon,
    rightIcon: rightIcon,
    onClear: onClear,
    autoFocus: autoFocus,
    step: step,
    min: min,
    max: max,
    mask: mask
  }));
};
InputField.defaultProps = {
  stretch: true,
  type: 'text',
  input: {},
  meta: {},
  showErrorOnTouched: true
};
export { InputField };