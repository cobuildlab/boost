import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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