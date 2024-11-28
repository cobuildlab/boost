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
import { theme as tableActionTheme } from './TableAction';
import { TableHeader, theme as tableHeaderTheme } from './TableHeader';
import { TableBody, theme as tableBodyTheme } from './TableBody';
import { TableBodyRow, theme as tableBodyRowTheme } from './TableBodyRow';
import { TableFooter, theme as tableFooterTheme } from './TableFooter';
import { TableHeaderCell, theme as tableHeaderCellTheme } from './TableHeaderCell';
import { TableBodyCell, theme as tableBodyCellTheme } from './TableBodyCell';
var name = 'tablePlate';
var _createThemeTag = createThemeTag(name, {
    modifiers: {
      stretch: {
        width: '100%',
        height: '100%'
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  TableTag = _createThemeTag2[0],
  tableTheme = _createThemeTag2[1];
var theme = _objectSpread({}, tableTheme, {}, tableActionTheme, {}, tableHeaderTheme, {}, tableBodyTheme, {}, tableBodyRowTheme, {}, tableFooterTheme, {}, tableHeaderCellTheme, {}, tableBodyCellTheme);
function Table(_ref) {
  var action = _ref.action,
    children = _ref.children,
    columns = _ref.columns,
    data = _ref.data,
    onActionClick = _ref.onActionClick,
    rest = _objectWithoutProperties(_ref, ["action", "children", "columns", "data", "onActionClick"]);
  return ___EmotionJSX(TableTag, _extends({}, rest, {
    tagName: Grid.Layout
  }), children);
}
Table.defaultProps = {
  rows: 'auto 1fr auto',
  stretch: true
};
Table.Header = TableHeader;
Table.Body = TableBody;
Table.BodyRow = TableBodyRow;
Table.Footer = TableFooter;
Table.HeaderCell = TableHeaderCell;
Table.BodyCell = TableBodyCell;
export { Table, theme };