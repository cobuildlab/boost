import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { theme, TopBarTag, TopBarCloseTag } from './TopBar.theme';
import { Row } from '../FlexLayout';
import { Icon } from '../Icon';
var TopBar = function TopBar(_ref) {
  var children = _ref.children,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    rest = _objectWithoutProperties(_ref, ["children", "isOpen", "onClose"]);
  var rendered = null;
  if (isOpen) {
    rendered = ___EmotionJSX(TopBarTag, _extends({
      tagName: Row,
      alignItems: "center",
      justifyContent: "center",
      gap: "lg"
    }, rest), typeof onClose === 'function' ? ___EmotionJSX(TopBarCloseTag, {
      onClick: onClose
    }, ___EmotionJSX(Icon, {
      name: "Delete",
      color: "WHITE"
    })) : null, children);
  }
  return rendered;
};
TopBar.defaultProps = {
  isOpen: true
};
export { TopBar, theme };