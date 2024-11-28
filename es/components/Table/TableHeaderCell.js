import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { PureComponent } from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
import { Row } from '../FlexLayout';
import { justifyContentStyles, alignItemsStyles } from '../../constants';
import { Icon } from '../Icon';
var DEFAULT_SORT = 'DESC';
var name = 'tableHeaderCell';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS,
      FONTS = _ref.FONTS;
  return {
    root: function root(props) {
      return _objectSpread({
        display: 'flex',
        justifyContent: justifyContentStyles[props.justifyContent],
        alignItems: alignItemsStyles[props.alignItems],
        cursor: props.cursor,
        padding: '0 24px'
      }, FONTS.OVERLINE_2);
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
    TableHeaderCellTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

var TableHeaderCell =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableHeaderCell, _PureComponent);

  function TableHeaderCell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableHeaderCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableHeaderCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onSort = function () {
      var _this$props = _this.props,
          onSort = _this$props.onSort,
          order = _this$props.order,
          enableSort = _this$props.enableSort;

      if (enableSort && onSort) {
        switch (order) {
          case 'ASC':
            return onSort && onSort('DESC');

          case 'DESC':
            return onSort && onSort('ASC');

          default:
            return onSort && onSort(DEFAULT_SORT);
        }
      }
    };

    return _this;
  }

  _createClass(TableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      return ___EmotionJSX(TableHeaderCellTag, _extends({}, rest, {
        onClick: this.onSort,
        tagName: Row
      }), ___EmotionJSX("span", null, children), !!rest.order ? ___EmotionJSX(Icon, {
        name: rest.order === 'ASC' ? 'ChevronTop' : 'ChevronDown',
        size: "xs"
      }) : null);
    }
  }]);

  return TableHeaderCell;
}(PureComponent);

TableHeaderCell.defaultProps = {
  alignItems: 'center',
  justifyContent: 'start'
};
export { TableHeaderCell, theme };