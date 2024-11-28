import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { useCallback } from 'react';
import { RadioTag, RadioButtonTag } from './Radio.theme';
import { Button } from '../Button';
var RadioButton = function RadioButton(_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    disabled = _ref.disabled,
    selectedValue = _ref.selectedValue,
    _ref$equalsFunc = _ref.equalsFunc,
    equalsFunc = _ref$equalsFunc === void 0 ? function (_ref2) {
      var selectedValue = _ref2.selectedValue,
        value = _ref2.value;
      return selectedValue === value;
    } : _ref$equalsFunc,
    name = _ref.name,
    label = _ref.label,
    rest = _objectWithoutProperties(_ref, ["onChange", "value", "disabled", "selectedValue", "equalsFunc", "name", "label"]);
  var handleChange = useCallback(function (event) {
    if (typeof onChange === 'function' && !disabled) {
      onChange(value, event);
    }
  }, [disabled, onChange, value]);
  var checked = value !== undefined && equalsFunc && equalsFunc({
    selectedValue: selectedValue,
    value: value
  });
  return ___EmotionJSX(RadioButtonTag, {
    tagName: "label"
  }, ___EmotionJSX(Button, _extends({
    tagName: "div"
  }, checked ? {} : {
    variant: 'outlined'
  }, {
    disabled: disabled
  }, rest), ___EmotionJSX(RadioTag, {
    tagName: "input",
    type: "radio",
    name: name,
    onChange: handleChange,
    checked: checked
  }), label));
};
export { RadioButton };