import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Modal } from '../Modal';
import { Card } from '../Card';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTag, DialogInnerTag } from './Dialog.theme';
var Dialog = function Dialog(_ref) {
  var children = _ref.children,
    id = _ref.id,
    isOpen = _ref.isOpen,
    onOpen = _ref.onOpen,
    onClose = _ref.onClose,
    shouldCloseOnOverlayClick = _ref.shouldCloseOnOverlayClick,
    shouldCloseOnEscPress = _ref.shouldCloseOnEscPress,
    size = _ref.size,
    args = _ref.args,
    padding = _ref.padding,
    tagName = _ref.tagName,
    stretch = _ref.stretch,
    rest = _objectWithoutProperties(_ref, ["children", "id", "isOpen", "onOpen", "onClose", "shouldCloseOnOverlayClick", "shouldCloseOnEscPress", "size", "args", "padding", "tagName", "stretch"]);
  return ___EmotionJSX(Modal, _extends({}, rest, {
    id: id,
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    args: args,
    shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
    shouldCloseOnEscPress: shouldCloseOnEscPress,
    stretch: stretch
  }), function (_ref2) {
    var args = _ref2.args,
      onClose = _ref2.onClose;
    return ___EmotionJSX(DialogTag, {
      tagName: tagName,
      size: size,
      stretch: stretch
    }, ___EmotionJSX(Card, {
      padding: padding,
      args: args,
      onClose: onClose,
      stretch: stretch
    }, typeof children === 'function' ? function (args) {
      return ___EmotionJSX(DialogInnerTag, null, children(args));
    } : ___EmotionJSX(DialogInnerTag, null, children)));
  });
};
Dialog.defaultProps = {
  size: 'md',
  padding: 'md',
  tagName: 'div'
};
Dialog.displayName = 'Dialog';
Dialog.Body = DialogBody;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;
export { Dialog };