import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { forwardRef } from 'react';
import { LogsContainerTag, LogMessageTag } from './Logs.theme';
var Logs = forwardRef(function (_ref, ref) {
  var _ref$messages = _ref.messages,
      messages = _ref$messages === void 0 ? [] : _ref$messages,
      stretch = _ref.stretch,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["messages", "stretch", "children"]);

  return ___EmotionJSX(LogsContainerTag, _extends({
    stretch: stretch,
    insideRef: ref
  }, rest), React.Children.toArray(messages.map(function (message) {
    return ___EmotionJSX(LogMessageTag, null, message) // eslint-disable-line
    ;
  })));
});
export { Logs };