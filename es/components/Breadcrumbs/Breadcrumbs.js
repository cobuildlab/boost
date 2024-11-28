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

var Breadcrumbs =
/*#__PURE__*/
function (_PureComponent) {
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