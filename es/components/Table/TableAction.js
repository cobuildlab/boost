import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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