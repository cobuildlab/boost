import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { IndicatorContainerTag, IndicatorTag } from './Indicator.theme';
import { Text } from '../Text';

var Indicator = function Indicator(_ref) {
  var children = _ref.children,
      status = _ref.status,
      rest = _objectWithoutProperties(_ref, ["children", "status"]);

  return ___EmotionJSX(IndicatorContainerTag, _extends({
    tagName: "span"
  }, rest), ___EmotionJSX(IndicatorTag, {
    tagName: "span",
    status: status
  }), ___EmotionJSX(Text, null, children));
};

Indicator.defaultProps = {
  status: 'disabled'
};
export { Indicator };