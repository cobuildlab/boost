import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { useCallback, useState, useEffect } from 'react';
import { Checkbox } from '../Checkbox';
import { TableBodyCell } from './TableBodyCell';
import { TableBodyRow } from './TableBodyRow';
// eslint-disable-next-line prefer-arrow-callback
var TableBuilderBodyRow = React.memo(function TableBuilderBodyRow(_ref) {
  var gridColumns = _ref.gridColumns,
      columns = _ref.columns,
      withSelection = _ref.withSelection,
      _ref$rowData = _ref.rowData,
      rowData = _ref$rowData === void 0 ? {} : _ref$rowData,
      renderCell = _ref.renderCell,
      isExpanded = _ref.isExpanded,
      expandedRowRender = _ref.expandedRowRender,
      onExpand = _ref.onExpand,
      onSelectRow = _ref.onSelectRow,
      isSelected = _ref.isSelected,
      rest = _objectWithoutProperties(_ref, ["gridColumns", "columns", "withSelection", "rowData", "renderCell", "isExpanded", "expandedRowRender", "onExpand", "onSelectRow", "isSelected"]);

  var expandRow = useCallback(function () {
    onExpand && onExpand(rowData.id);
  }, [onExpand, rowData.id]);
  var onChangeSelect = useCallback(function () {
    onSelectRow && onSelectRow(rowData.id);
  }, [onSelectRow, rowData.id]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      expandRowIsRendered = _useState2[0],
      setExpandRowIsRendered = _useState2[1];

  useEffect(function () {
    if (isExpanded) {
      setExpandRowIsRendered(true);
    }
  }, [isExpanded]);
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(TableBodyRow, {
    columns: gridColumns,
    expanded: isExpanded,
    modifiers: rest
  }, !!withSelection ? ___EmotionJSX(TableBodyCell, {
    justifyContent: "center",
    modifiers: rest
  }, ___EmotionJSX(Checkbox, {
    onChange: onChangeSelect,
    checked: isSelected
  })) : null, columns.map(function (column) {
    return ___EmotionJSX(TableBodyCell, {
      key: column.name,
      modifiers: rest
    }, renderCell ? renderCell(column, rowData, {
      expandRow: expandRow,
      isExpanded: isExpanded
    }) : rowData[column.name]);
  })), expandRowIsRendered ? ___EmotionJSX(TableBodyRow, {
    columns: gridColumns,
    hidden: !isExpanded,
    modifiers: rest
  }, expandedRowRender({
    rowData: rowData,
    isExpanded: isExpanded
  })) : null);
});
export { TableBuilderBodyRow };