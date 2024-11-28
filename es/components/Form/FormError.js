import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
import { Row } from '../FlexLayout';
import { Text } from '../Text';
import { Icon } from '../Icon';
var name = 'formError';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES;
  return {
    root: {
      border: "1px solid ".concat(COLORS.DANGER),
      borderRadius: SIZES.MAIN_BORDER_RADIUS,
      padding: '16px'
    },
    modifiers: {}
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    FormErrorPlateTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

function FormError(_ref2) {
  var error = _ref2.error,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["error", "children"]);

  var errorText = error || children;
  return errorText ? ___EmotionJSX(FormErrorPlateTag, _extends({
    tagName: "div"
  }, rest), ___EmotionJSX(Row, {
    gap: "md"
  }, ___EmotionJSX(Icon, {
    name: "Alert",
    color: "DANGER"
  }), ___EmotionJSX(Text, {
    color: "SECONDARY_TEXT_COLOR"
  }, errorText))) : null;
}

FormError.defaultProps = {
  component: 'form',
  direction: 'column'
};
export { FormError, theme };