import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { HeaderCloseTag } from './Dialog.theme';
import { Card } from '../Card';
import { Text } from '../Text';
import { Icon } from '../Icon';

function DialogHeader(_ref) {
  var title = _ref.title,
      onClose = _ref.onClose,
      rest = _objectWithoutProperties(_ref, ["title", "onClose"]);

  return ___EmotionJSX(Card.Header, _extends({
    offset: "lg"
  }, rest), ___EmotionJSX(Text, {
    weight: "semibold"
  }, title), ___EmotionJSX(HeaderCloseTag, {
    onClick: onClose
  }, ___EmotionJSX(Icon, {
    size: "sm",
    name: "Delete",
    title: "Close Dialog"
  })));
}

export { DialogHeader };