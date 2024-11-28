import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { PureComponent } from 'react';
import { AsyncContent } from '../AsyncContent';
import { NoData } from '../NoData';
import { TableAction } from './TableAction';
import { Grid } from '../Grid';
import { Button } from '../Button';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'tableBody';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: function root(_ref2) {
        var action = _ref2.action;
        return {
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'auto',
          borderBottom: action ? "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR) : 'none'
        };
      },
      modifiers: {
        bordered: {
          '&:first-of-type': {
            borderTop: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
          }
        }
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  TableBodyTag = _createThemeTag2[0],
  themeBody = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Inner"), {
    root: {
      display: 'grid',
      position: 'relative',
      gridAutoRows: 'min-content',
      height: '100%'
    }
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  TableBodyInnerTag = _createThemeTag4[0],
  themeInner = _createThemeTag4[1];
var theme = _objectSpread({}, themeBody, {}, themeInner);
var TableBody = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableBody, _PureComponent);
  function TableBody() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, TableBody);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableBody)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.renderTableAction = function () {
      var _this$props = _this.props,
        action = _this$props.action,
        onActionClick = _this$props.onActionClick,
        modifiers = _this$props.modifiers,
        rest = _objectWithoutProperties(_this$props, ["action", "onActionClick", "modifiers"]);
      if (typeof action === 'string') {
        return ___EmotionJSX(TableAction, {
          modifiers: _objectSpread({}, rest, {}, modifiers)
        }, ___EmotionJSX(Button, {
          onClick: onActionClick
        }, action));
      } else if (!!action) {
        return ___EmotionJSX(TableAction, {
          modifiers: rest
        }, action);
      } else {
        return null;
      }
    };
    _this.renderContent = function () {
      var _this$props2 = _this.props,
        data = _this$props2.data,
        children = _this$props2.children,
        noData = _this$props2.noData,
        rest = _objectWithoutProperties(_this$props2, ["data", "children", "noData"]);
      var rendered = children || null;
      if (typeof children === 'function' && Array.isArray(data) && data.length > 0) {
        rendered = ___EmotionJSX(TableBodyInnerTag, {
          modifiers: rest,
          tagName: Grid.Layout
        }, React.Children.toArray(data.map(children)));
      } else if (!children || Array.isArray(data) && data.length === 0) {
        rendered = noData ? noData : ___EmotionJSX(NoData, null);
      }
      return rendered;
    };
    return _this;
  }
  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        loading = _this$props3.loading,
        rest = _objectWithoutProperties(_this$props3, ["loading"]);
      return ___EmotionJSX(TableBodyTag, rest, ___EmotionJSX(AsyncContent, {
        loading: loading,
        stretch: true
      }, this.renderContent()), this.renderTableAction());
    }
  }]);
  return TableBody;
}(PureComponent);
export { TableBody, theme };