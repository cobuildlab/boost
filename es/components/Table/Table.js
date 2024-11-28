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