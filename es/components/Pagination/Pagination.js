import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            margin-left: 12px;\n          "]);
  _templateObject4 = function _templateObject4() {
    return data;
  };
  return data;
}
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              width: 64px;\n              margin-left: 12px;\n            "]);
  _templateObject3 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            flex-shrink: 0;\n          "]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            flex-shrink: 0;\n          "]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
import React from 'react';
import memoize from 'lodash/memoize';
import { css } from '@emotion/react';
import { Select } from '../Select';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { theme, PaginationTag, PaginationItemsTag, PaginationItemTag } from './Pagination.theme';
var VISIBLE_RANGE = 2;
var formatter = new Intl.NumberFormat('en-EN', {
  useGrouping: true,
  maximumFractionDigits: 0
});
var Pagination = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination, _React$Component);
  function Pagination(props) {
    var _this;
    _classCallCheck(this, Pagination);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));
    _this.createOnChange = memoize(function (page) {
      return function () {
        var _this$props = _this.props,
          onChange = _this$props.onChange,
          pageSizeFormProps = _this$props.pageSize;
        var pageSizeFromState = _this.state.pageSize;
        var pageSize = pageSizeFormProps || pageSizeFromState;
        _this.setState(function () {
          return {
            page: page
          };
        });
        if (typeof onChange === 'function') {
          onChange(page, pageSize);
        }
      };
    });
    _this.onChangePageSize = function (value) {
      var pageSize = parseInt(value, 10);
      var _this$props2 = _this.props,
        total = _this$props2.total,
        onChange = _this$props2.onChange;
      var page = _this.state.page;
      var nextPage = Math.min(page, Math.ceil(total / pageSize));
      _this.setState(function () {
        return {
          pageSize: pageSize,
          page: nextPage
        };
      });
      if (typeof onChange === 'function') {
        onChange(nextPage, pageSize);
      }
    };
    _this.getPageSizeOptions = function (pageSizeOptions) {
      return pageSizeOptions.map(function (value) {
        return {
          value: value,
          label: String(value)
        };
      });
    };
    _this.state = {
      page: props.defaultPage,
      pageSize: props.defaultPageSize
    };
    return _this;
  }

  // $FlowFixMe

  // $FlowFixMe
  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        pageFromProps = _this$props3.page,
        pageSizeFormProps = _this$props3.pageSize,
        total = _this$props3.total,
        _this$props3$pageSize = _this$props3.pageSizeOptions,
        pageSizeOptions = _this$props3$pageSize === void 0 ? [] : _this$props3$pageSize,
        showSizeChanger = _this$props3.showSizeChanger;
      var _this$state = this.state,
        pageFromState = _this$state.page,
        pageSizeFromState = _this$state.pageSize;
      var page = pageFromProps || pageFromState;
      var pageSize = pageSizeFormProps || pageSizeFromState;
      var numberOfPages = Math.ceil(total / pageSize);
      var leftSide = Math.min(page - VISIBLE_RANGE, numberOfPages - VISIBLE_RANGE * 2);
      var rightSide = page + VISIBLE_RANGE;
      var showLeftMore = leftSide > 2;
      var showRightMore = rightSide < numberOfPages - 1;
      var start = leftSide > 1 ? leftSide : 1;
      var pages = _toConsumableArray(Array(VISIBLE_RANGE * 2 + 1).keys()).slice(0, numberOfPages);
      var firstRecordIndex = (page - 1) * pageSize + 1;
      var lastRecordIndex = Math.min(total, page * pageSize);
      return ___EmotionJSX(PaginationTag, {
        tagName: "div"
      }, ___EmotionJSX(Button, {
        size: "sm",
        css: css(_templateObject()),
        onClick: this.createOnChange(page - 1),
        color: "neutral",
        variant: "outlined",
        squared: true,
        disabled: page <= 1,
        withIconAutosize: false
      }, ___EmotionJSX(Icon, {
        name: "ChevronLeft",
        size: "xs"
      })), ___EmotionJSX(PaginationItemsTag, null, leftSide > 1 ? ___EmotionJSX(PaginationItemTag, {
        active: page === 1,
        onClick: this.createOnChange(1)
      }, "1") : null, showLeftMore ? ___EmotionJSX(PaginationItemTag, {
        disabled: true
      }, ___EmotionJSX(Icon, {
        name: "More"
      })) : null, pages.map(function (index) {
        return ___EmotionJSX(PaginationItemTag, {
          key: index + start,
          active: index + start === page,
          onClick: _this2.createOnChange(index + start)
        }, index + start);
      }), showRightMore ? ___EmotionJSX(PaginationItemTag, {
        disabled: true
      }, ___EmotionJSX(Icon, {
        name: "More"
      })) : null, rightSide < numberOfPages ? ___EmotionJSX(PaginationItemTag, {
        active: page === numberOfPages,
        onClick: this.createOnChange(numberOfPages)
      }, numberOfPages) : null), ___EmotionJSX(Button, {
        size: "sm",
        css: css(_templateObject2()),
        onClick: this.createOnChange(page + 1),
        color: "neutral",
        variant: "outlined",
        squared: true,
        disabled: page >= numberOfPages,
        withIconAutosize: false
      }, ___EmotionJSX(Icon, {
        name: "ChevronRight",
        size: "xs"
      })), !!showSizeChanger ? ___EmotionJSX(Select, {
        css: css(_templateObject3()),
        value: pageSize,
        options: this.getPageSizeOptions(pageSizeOptions),
        onChange: this.onChangePageSize,
        isSearchable: false
      }) : null, ___EmotionJSX(Text, {
        css: css(_templateObject4())
      }, formatter.format(firstRecordIndex), " - ", formatter.format(lastRecordIndex), " of ", formatter.format(total), " records"));
    }
  }]);
  return Pagination;
}(React.Component);
Pagination.defaultProps = {
  defaultPage: 1,
  defaultPageSize: 10,
  total: 0,
  showSizeChanger: false,
  pageSizeOptions: [10, 20, 30, 40]
};
export { Pagination, theme };