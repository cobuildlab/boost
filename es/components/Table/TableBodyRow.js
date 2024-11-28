import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';
import { gapSizes } from '../../constants';
var name = 'tableBodyRow';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS;
  return {
    root: function root(props) {
      return {
        display: 'grid',
        minHeight: '48px',
        borderBottom: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR),
        columnGap: gapSizes[props.columnGap]
      };
    },
    modifiers: {
      condensed: {
        minHeight: '36px'
      },
      hidden: {
        display: 'none'
      },
      expanded: {
        backgroundColor: "".concat(COLORS.GRAY_10)
      },
      bordered: {
        borderLeft: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR),
        borderRight: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
      },
      borderedLess: {
        border: 'none'
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TableBodyRowTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

function TableBodyRow(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return ___EmotionJSX(TableBodyRowTag, _extends({}, rest, {
    tagName: Grid.Layout
  }), children);
}

export { TableBodyRow, theme };