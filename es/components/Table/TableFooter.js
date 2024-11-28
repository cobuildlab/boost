import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'tableFooter';

var _createThemeTag = createThemeTag(name, {
  root: {
    display: 'grid',
    padding: '16px'
  }
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TableFooterTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

function TableFooter(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return ___EmotionJSX(TableFooterTag, _extends({}, rest, {
    tagName: Grid.Box
  }), children);
}

export { TableFooter, theme };