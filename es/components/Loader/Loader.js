import _extends from "@babel/runtime/helpers/esm/extends";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { LoaderTag, LoaderWrapperTag, LoaderCircleTag } from './Loader.theme';
import { COLORS } from '../../theme';

function Loader(props) {
  var uiLoader = ___EmotionJSX(LoaderTag, _extends({}, props, {
    tagName: "div",
    role: "loader"
  }), ___EmotionJSX(LoaderCircleTag, _extends({}, props, {
    delay: "0"
  })), ___EmotionJSX(LoaderCircleTag, _extends({}, props, {
    delay: "0.9s"
  })));

  if (props.stretch) {
    return ___EmotionJSX(LoaderWrapperTag, {
      role: "loader"
    }, uiLoader);
  }

  return uiLoader;
}

Loader.defaultProps = {
  stretch: false,
  size: 'md',
  color: 'RED'
};
export { Loader };