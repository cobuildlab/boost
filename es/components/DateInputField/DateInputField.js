import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { DateInput } from '../DateInput';
import { FormField } from '../Form/FormField';
function DateInputField(_ref) {
  var label = _ref.label,
    input = _ref.input,
    meta = _ref.meta,
    rest = _objectWithoutProperties(_ref, ["label", "input", "meta"]);
  var _ref2 = input || {},
    name = _ref2.name,
    value = _ref2.value,
    onChange = _ref2.onChange;
  return ___EmotionJSX(FormField, {
    label: label,
    input: input,
    meta: meta
  }, ___EmotionJSX(DateInput, _extends({}, rest, {
    name: name,
    value: value,
    onChange: onChange
  })));
}
export { DateInputField };