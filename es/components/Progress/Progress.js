import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ProgressTag, ProgressBodyTag, ProgressInnerTag, ProgressValueTag, ProgressSeparatorTag, ProgressTextTag, ProgressLabelTag, ProgressDescriptionTag } from './Progress.theme';

var Progress = function Progress(_ref) {
  var value = _ref.value,
      label = _ref.label,
      valueText = _ref.valueText,
      valueWidth = _ref.valueWidth,
      description = _ref.description,
      rest = _objectWithoutProperties(_ref, ["value", "label", "valueText", "valueWidth", "description"]);

  value = value > 100 ? value % 100 : value;
  return ___EmotionJSX(ProgressTag, rest, label && ___EmotionJSX(ProgressLabelTag, {
    modifiers: rest
  }, label), ___EmotionJSX(ProgressBodyTag, {
    modifiers: rest
  }, ___EmotionJSX(ProgressInnerTag, {
    modifiers: rest,
    style: valueWidth ? {
      minWidth: valueWidth,
      maxWidth: valueWidth
    } : {}
  }, ___EmotionJSX(ProgressValueTag, {
    modifiers: rest,
    style: {
      width: "".concat(value, "%")
    }
  }), !!rest.showSeparator ? ___EmotionJSX(ProgressSeparatorTag, {
    modifiers: rest,
    style: {
      left: "".concat(value, "%")
    }
  }) : null), ___EmotionJSX(ProgressTextTag, {
    modifiers: rest
  }, valueText ? valueText : "".concat(value, " %"))), description && ___EmotionJSX(ProgressDescriptionTag, null, " ", description, " "));
};

Progress.defaultProps = {
  size: 'md',
  color: 'PRIMARY',
  backgroundColor: 'GRAY_20',
  showSeparator: false
};
export { Progress };