import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TextArea } from '../TextArea';
import { FormField } from '../Form/FormField';
import * as formUtils from '../../utils/forms';
function TextAreaField(_ref) {
  var cols = _ref.cols,
    input = _ref.input,
    label = _ref.label,
    meta = _ref.meta,
    placeholder = _ref.placeholder,
    rows = _ref.rows,
    stretch = _ref.stretch,
    showErrorOnTouched = _ref.showErrorOnTouched,
    rest = _objectWithoutProperties(_ref, ["cols", "input", "label", "meta", "placeholder", "rows", "stretch", "showErrorOnTouched"]);
  var name = input.name,
    value = input.value,
    onChange = input.onChange;
  var hasError = formUtils.hasError(meta, showErrorOnTouched);
  return ___EmotionJSX(FormField, {
    label: label,
    stretch: stretch,
    input: input,
    meta: meta,
    showErrorOnTouched: showErrorOnTouched
  }, ___EmotionJSX(TextArea, _extends({}, rest, {
    hasError: hasError,
    name: name,
    onChange: onChange,
    placeholder: placeholder,
    value: value,
    cols: cols,
    rows: rows,
    stretch: stretch
  })));
}
TextAreaField.defaultProps = {
  showErrorOnTouched: true
};
export { TextAreaField };