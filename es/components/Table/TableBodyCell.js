import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
import { Row } from '../FlexLayout';
import { justifyContentStyles, alignItemsStyles } from '../../constants';
var name = 'tableBodyCell';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: function root(props) {
        return {
          display: 'flex',
          wordBreak: 'break-all',
          padding: '8px 24px',
          justifyContent: justifyContentStyles[props.justifyContent],
          alignItems: alignItemsStyles[props.alignItems]
        };
      },
      modifiers: {
        bordered: {
          '&:not(:first-of-type)': {
            borderLeft: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
          }
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  TableBodyCellTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
function TableBodyCell(_ref2) {
  var children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, ["children"]);
  return ___EmotionJSX(TableBodyCellTag, _extends({}, rest, {
    tagName: Row
  }), children);
}
TableBodyCell.defaultProps = {
  alignItems: 'center',
  justifyContent: 'start'
};
export { TableBodyCell, theme };