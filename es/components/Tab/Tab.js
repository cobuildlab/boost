import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TabOuter } from './Tab.theme';

var Tab = function Tab(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return ___EmotionJSX(TabOuter, rest, children);
};

export { Tab };