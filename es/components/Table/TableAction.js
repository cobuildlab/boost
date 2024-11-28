import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'tableAction';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: {
        position: 'sticky',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        paddingTop: '16px',
        paddingBottom: '16px'
      },
      modifiers: {
        bordered: {
          borderLeft: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR),
          borderRight: "1px solid ".concat(COLORS.SECONDARY_BORDER_COLOR)
        }
      },
      defaults: {}
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  TableActionTag = _createThemeTag2[0],
  themeAction = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Inner"), {
    root: {
      pointerEvents: 'all'
    }
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  TableActionInnerTag = _createThemeTag4[0],
  themeInner = _createThemeTag4[1];
var theme = _objectSpread({}, themeAction, {}, themeInner);
function TableAction(_ref2) {
  var children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, ["children"]);
  return ___EmotionJSX(TableActionTag, _extends({
    tagName: "div"
  }, rest), ___EmotionJSX(TableActionInnerTag, {
    modifiers: rest
  }, children));
}
export { TableAction, theme };