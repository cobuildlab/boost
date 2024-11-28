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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* eslint-disable react/jsx-key */
import React, { Fragment, PureComponent } from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
import { getBreadcrumbs } from './Breadcrumbs.utils';
import { BreadcrumbsItem } from './BreadcrumbsItem';
import { BreadcrumbsDividerTag } from './BreadcrumbsDivider';
var name = 'breadcrumbs';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var FONTS = _ref.FONTS;
    return {
      root: _objectSpread({}, FONTS.SUBTITLE_1)
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  BreadcrumbsTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
var Breadcrumbs = /*#__PURE__*/function (_PureComponent) {
  _inherits(Breadcrumbs, _PureComponent);
  function Breadcrumbs() {
    _classCallCheck(this, Breadcrumbs);
    return _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumbs).apply(this, arguments));
  }
  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        itemTagName = _this$props.itemTagName,
        pathname = _this$props.pathname,
        routes = _this$props.routes,
        matchPath = _this$props.matchPath,
        rest = _objectWithoutProperties(_this$props, ["itemTagName", "pathname", "routes", "matchPath"]);
      var breadcrumbs = getBreadcrumbs(pathname, routes, matchPath);
      return ___EmotionJSX(BreadcrumbsTag, rest, React.Children.toArray(breadcrumbs.map(function (item, index) {
        return ___EmotionJSX(Fragment, null, ___EmotionJSX(BreadcrumbsItem, _extends({
          to: item.originalPath
        }, _objectSpread({}, rest, {}, item, {
          tagName: itemTagName
        }))), index !== breadcrumbs.length - 1 && ___EmotionJSX(BreadcrumbsDividerTag, {
          tagName: "span"
        }, ">"));
      })));
    }
  }]);
  return Breadcrumbs;
}(PureComponent);
export { Breadcrumbs, theme };