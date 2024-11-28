import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _getOr from "lodash/fp/getOr";
import _omit from "lodash/fp/omit";
import _isEmpty from "lodash/fp/isEmpty";
import _equals from "lodash/fp/equals";
import _findIndex from "lodash/fp/findIndex";
import _uniq from "lodash/fp/uniq";
import _xor from "lodash/fp/xor";
import _map from "lodash/fp/map";
import _memoize from "lodash/fp/memoize";
import _isNil from "lodash/fp/isNil";
import _find from "lodash/fp/find";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { PureComponent } from 'react';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableBuilderBodyRow } from './TableBuilderBodyRow';
import { TableHeaderCell } from './TableHeaderCell';
import { Table } from './Table';
import { Checkbox } from '../Checkbox';
import { Pagination } from '../Pagination';
import { TableBodyRow } from './TableBodyRow';
import { TableBodyCell } from './TableBodyCell';
import { Heading } from '../Heading';
var DEFAULT_SORT_ENABLE = true;
var TABLE_BUILDER_PROPS = ['columns', 'columnGap', 'data', 'onActionClick', 'action', 'onChange', 'tableState', 'withSelection', 'withMultipleSort', 'withPagination', 'loading', 'renderCell', 'renderHeadCell', 'condensed', 'noData', 'expandedRowKeys', 'expandedRowRender', 'onExpand'];

var TableBuilder =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableBuilder, _PureComponent);

  function TableBuilder() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableBuilder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableBuilder)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      expandedRowKeys: []
    };

    _this.getGridColumns = function () {
      var _this$props = _this.props,
          columns = _this$props.columns,
          withSelection = _this$props.withSelection;
      var gridColumns = [];

      if (withSelection) {
        gridColumns.push('72px');
      }

      for (var i = 0; i < columns.length; i++) {
        gridColumns.push(columns[i].width || '1fr');
      }

      return gridColumns.join(' ');
    };

    _this.getColumn = function (columnName) {
      var columns = _this.props.columns;
      return _find(function (_ref) {
        var name = _ref.name;
        return columnName === name;
      }, columns) || {};
    };

    _this.getColumnSortEnable = function (name) {
      var column = _this.getColumn(name);

      var sortEnable = _isNil(column.sortEnable) ? DEFAULT_SORT_ENABLE : column.sortEnable;
      return sortEnable;
    };

    _this.onChange = function (tableState) {
      var onChange = _this.props.onChange;
      onChange && onChange(tableState);
    };

    _this.onSort = _memoize(function (name) {
      return function (orderDirection) {
        var _this$props2 = _this.props,
            _this$props2$tableSta = _this$props2.tableState,
            tableState = _this$props2$tableSta === void 0 ? {} : _this$props2$tableSta,
            withMultipleSort = _this$props2.withMultipleSort;
        var previousSort = tableState.sort || [];
        var currentSort = [{
          name: name,
          order: orderDirection
        }];
        var sort = withMultipleSort ? previousSort.filter(function (_ref2) {
          var columnName = _ref2.name;
          return columnName !== name;
        }).concat(currentSort) : currentSort;

        _this.onChange(_objectSpread({}, tableState, {
          sort: sort
        }));
      };
    });

    _this.getColumnOrder = function (name) {
      var _this$props$tableStat = _this.props.tableState,
          tableState = _this$props$tableStat === void 0 ? {} : _this$props$tableStat;
      var sort = tableState.sort || [];

      var _ref3 = sort.find(function (_ref4) {
        var columnName = _ref4.name;
        return columnName === name;
      }) || {},
          order = _ref3.order;

      return order;
    };

    _this.onSelectAllRows = function () {
      var _this$props3 = _this.props,
          _this$props3$tableSta = _this$props3.tableState,
          tableState = _this$props3$tableSta === void 0 ? {} : _this$props3$tableSta,
          data = _this$props3.data;

      var isAllRowsSelected = _this.hasAllRowsSelection();

      var allIds = _map('id', data);

      var selectedIds = isAllRowsSelected ? [] : allIds;

      _this.onChange(_objectSpread({}, tableState, {
        selectedIds: selectedIds
      }));
    };

    _this.onSelectRow = function (id) {
      var _this$props$tableStat2 = _this.props.tableState,
          tableState = _this$props$tableStat2 === void 0 ? {} : _this$props$tableStat2;
      var previousSelectedIds = tableState.selectedIds || [];

      var isRowSelected = _this.hasRowSelection(id);

      var selectedIds = isRowSelected ? _xor(previousSelectedIds, [id]) : _uniq([].concat(_toConsumableArray(previousSelectedIds), [id]));

      _this.onChange(_objectSpread({}, tableState, {
        selectedIds: selectedIds
      }));
    };

    _this.onExpand = function (id) {
      var callback = function callback(_ref5) {
        var isExpanded = _ref5.isExpanded;
        typeof _this.props.onExpand === 'function' && _this.props.onExpand({
          key: id,
          isExpanded: isExpanded
        });
      };

      if (_this.isExpandedRowsControlled()) {
        // $FlowFixMe We know that `this.props.expandedRowKeys` is Array here
        var rowIsExpanded = _this.isRowExpanded(id, _this.props.expandedRowKeys);

        callback({
          isExpanded: !rowIsExpanded
        });
        return;
      }

      _this.setState(function (s) {
        var rowIsExpanded = _this.isRowExpanded(id, s.expandedRowKeys);

        return {
          expandedRowKeys: rowIsExpanded ? s.expandedRowKeys.filter(function (key) {
            return key !== id;
          }) : [].concat(_toConsumableArray(s.expandedRowKeys), [id])
        };
      }, function () {
        var rowIsExpanded = _this.isRowExpanded(id, _this.state.expandedRowKeys);

        callback({
          isExpanded: rowIsExpanded
        });
      });
    };

    _this.hasRowSelection = function (id) {
      var _this$props$tableStat3 = _this.props.tableState,
          tableState = _this$props$tableStat3 === void 0 ? {} : _this$props$tableStat3;
      var _tableState$selectedI = tableState.selectedIds,
          selectedIds = _tableState$selectedI === void 0 ? [] : _tableState$selectedI;
      return _findIndex(_equals(id), selectedIds) >= 0;
    };

    _this.hasAllRowsSelection = function () {
      var _this$props4 = _this.props,
          _this$props4$tableSta = _this$props4.tableState,
          tableState = _this$props4$tableSta === void 0 ? {} : _this$props4$tableSta,
          data = _this$props4.data;
      var _tableState$selectedI2 = tableState.selectedIds,
          selectedIds = _tableState$selectedI2 === void 0 ? [] : _tableState$selectedI2;

      var allIds = _map('id', data);

      return !_isEmpty(allIds) && _isEmpty(_xor(selectedIds, allIds));
    };

    _this.renderHeader = function () {
      var _this$props5 = _this.props,
          columns = _this$props5.columns,
          withSelection = _this$props5.withSelection,
          renderHeadCell = _this$props5.renderHeadCell,
          restTableProps = _objectWithoutProperties(_this$props5, ["columns", "withSelection", "renderHeadCell"]);

      var rest = _omit(TABLE_BUILDER_PROPS, _this.props);

      var modifiers = _objectSpread({}, restTableProps, {}, rest);

      return ___EmotionJSX(TableHeader, {
        columns: _this.getGridColumns(),
        modifiers: modifiers
      }, !!withSelection ? ___EmotionJSX(TableHeaderCell, {
        justifyContent: "center",
        modifiers: modifiers
      }, ___EmotionJSX(Checkbox, {
        onChange: _this.onSelectAllRows,
        checked: _this.hasAllRowsSelection()
      })) : null, columns.map(function (column) {
        return ___EmotionJSX(TableHeaderCell, {
          key: column.name,
          cursor: "pointer",
          enableSort: _this.getColumnSortEnable(column.name),
          onSort: _this.onSort(column.name),
          order: _this.getColumnOrder(column.name),
          modifiers: modifiers
        }, renderHeadCell ? renderHeadCell(column) : column.title || '');
      }));
    };

    _this.renderBody = function (data) {
      var _this$props6 = _this.props,
          columns = _this$props6.columns,
          onActionClick = _this$props6.onActionClick,
          action = _this$props6.action,
          withSelection = _this$props6.withSelection,
          renderCell = _this$props6.renderCell,
          noData = _this$props6.noData,
          expandedRowRender = _this$props6.expandedRowRender,
          loading = _this$props6.loading,
          condensed = _this$props6.condensed;

      var rest = _omit(TABLE_BUILDER_PROPS, _this.props);

      return ___EmotionJSX(TableBody, {
        data: data,
        onActionClick: onActionClick,
        action: action,
        loading: loading,
        noData: noData,
        modifiers: rest
      }, function (rowData) {
        var rowIsExpanded = _this.isRowExpanded(rowData.id, _this.getExpandedRows());

        return ___EmotionJSX(TableBuilderBodyRow, _extends({
          key: rowData.id,
          gridColumns: _this.getGridColumns(),
          columns: columns,
          withSelection: withSelection,
          rowData: rowData,
          renderCell: renderCell,
          onExpand: _this.onExpand,
          isExpanded: rowIsExpanded,
          expandedRowRender: expandedRowRender,
          onSelectRow: _this.onSelectRow,
          isSelected: _this.hasRowSelection(rowData.id),
          condensed: condensed
        }, rest));
      });
    };

    _this.renderContent = function () {
      var _this$props7 = _this.props,
          groupBy = _this$props7.groupBy,
          data = _this$props7.data,
          renderGroupTitle = _this$props7.renderGroupTitle;

      if (data && data.length !== 0 && groupBy && typeof groupBy === 'function') {
        var groupedData = groupBy(data) || {};
        return ___EmotionJSX("div", {
          style: {
            overflow: 'auto'
          }
        }, Object.keys(groupedData).map(function (key) {
          return ___EmotionJSX("div", {
            key: key
          }, renderGroupTitle && typeof renderGroupTitle === 'function' ? renderGroupTitle(key, groupedData[key]) : ___EmotionJSX(TableBodyRow, {
            borderedLess: true
          }, ___EmotionJSX(TableBodyCell, null, ___EmotionJSX(Heading, {
            type: "h4"
          }, key))), _this.renderBody(groupedData[key]));
        }));
      }

      return _this.renderBody(data);
    };

    _this.onChangePagination = function (page, pageSize) {
      var _this$props8 = _this.props,
          onChange = _this$props8.onChange,
          tableState = _this$props8.tableState;

      if (typeof onChange === 'function') {
        onChange(_objectSpread({}, tableState, {
          pagination: _objectSpread({}, tableState.pagination, {
            page: page,
            pageSize: pageSize
          })
        }));
      }
    };

    _this.getPage = function () {
      return _getOr(1, 'tableState.pagination.page', _this.props);
    };

    _this.getPageSize = function () {
      return _getOr(10, 'tableState.pagination.pageSize', _this.props);
    };

    _this.getTotal = function () {
      return _getOr(0, 'tableState.pagination.total', _this.props);
    };

    _this.renderFooter = function () {
      var withPagination = _this.props.withPagination;
      var footer = null;

      if (withPagination && _this.getTotal()) {
        footer = ___EmotionJSX(TableFooter, {
          justifyContent: "center"
        }, ___EmotionJSX(Pagination, {
          page: _this.getPage(),
          pageSize: _this.getPageSize(),
          total: _this.getTotal(),
          onChange: _this.onChangePagination,
          showSizeChanger: true
        }));
      }

      return footer;
    };

    return _this;
  }

  _createClass(TableBuilder, [{
    key: "isExpandedRowsControlled",
    value: function isExpandedRowsControlled() {
      return !!this.props.expandedRowKeys;
    }
  }, {
    key: "getExpandedRows",
    value: function getExpandedRows() {
      // $FlowFixMe
      return this.isExpandedRowsControlled() ? this.props.expandedRowKeys : this.state.expandedRowKeys;
    }
  }, {
    key: "isRowExpanded",
    value: function isRowExpanded(id, expandedRowKeys) {
      return expandedRowKeys.includes(id);
    }
  }, {
    key: "render",
    value: function render() {
      var rest = _omit(TABLE_BUILDER_PROPS, this.props);

      return ___EmotionJSX(Table, {
        modifiers: rest
      }, this.renderHeader(), this.renderContent(), this.renderFooter());
    }
  }]);

  return TableBuilder;
}(PureComponent);

TableBuilder.defaultProps = {
  columns: [],
  data: [],
  withMultipleSort: false,
  withSelection: false,
  tableState: {
    sort: [],
    selectedIds: [],
    pagination: {
      page: 1,
      pageSize: 10
    }
  }
};
export { TableBuilder };