import _extends from "@babel/runtime/helpers/esm/extends";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { createContext } from 'react';
var DropdownContext = createContext({
  dropdown: {
    outsideClickIgnoreClass: ''
  }
});
var withDropdownContext = function withDropdownContext(Component) {
  return function (props) {
    return ___EmotionJSX(DropdownContext.Consumer, null, function (dropdownData) {
      return ___EmotionJSX(Component, _extends({}, props, {
        dropdown: dropdownData
      }));
    });
  };
};
export { DropdownContext, withDropdownContext };