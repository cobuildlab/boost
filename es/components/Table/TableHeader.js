import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';
import { gapSizes } from '../../constants';
var name = 'tableHeader';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
  return {
    root: function root(props) {
      return _objectSpread({
        display: 'grid',
        height: '48px',
        backgroundColor: COLORS.GRAY_10,
        borderBottom: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
      }, FONTS.OVERLINE_2, {
        columnGap: gapSizes[props.columnGap]
      });
    },
    modifiers: {
      condensed: {
        height: '36px'
      },
      bordered: {
        borderLeft: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR),
        borderRight: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR),
        '&:first-of-type': {
          borderTop: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
        }
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TableHeaderTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

function TableHeader(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return ___EmotionJSX(TableHeaderTag, _extends({}, rest, {
    tagName: Grid.Layout
  }), children);
}

export { TableHeader, theme };