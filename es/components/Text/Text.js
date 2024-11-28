import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TextTag } from './Text.theme';
import { COLORS } from '../../theme';
var TAG_NAMES = {
  'overline-2': 'span',
  'overline-1': 'span',
  'small-2': 'span',
  'small-1': 'span',
  body: 'span',
  subtitle: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5'
};
function Text(_ref) {
  var text = _ref.text,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["text", "children"]);
  return ___EmotionJSX(TextTag, _extends({}, rest, {
    tagName: TAG_NAMES[rest.kind || 'body']
  }), children || text);
}
Text.defaultProps = {
  kind: 'body',
  ellipsis: false
};
export { Text };