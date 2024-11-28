import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
var name = 'secondaryNavigationItem';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var _root;

  var COLORS = _ref.COLORS;
  return {
    root: (_root = {
      height: 28,
      display: 'flex',
      backgroundColor: 'inherit',
      textDecoration: 'none',
      userSelect: 'none',
      position: 'relative',
      paddingLeft: 4,
      paddingRight: 20,
      justifyContent: 'space-between',
      alignItems: 'center'
    }, _defineProperty(_root, "&.active ".concat(SecondaryNavigationItemActionsTag), {
      visibility: 'visible'
    }), _defineProperty(_root, '&.active', {
      backgroundColor: COLORS.WHITE,
      paddingLeft: 0,
      borderLeft: "4px solid ".concat(COLORS.GRAY_70)
    }), _root),
    modifiers: {
      hovered: _defineProperty({
        backgroundColor: COLORS.WHITE
      }, "& ".concat(SecondaryNavigationItemActionsTag), {
        visibility: 'visible'
      })
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    SecondaryNavigationItemTag = _createThemeTag2[0],
    rootTheme = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Label"), function (_ref2) {
  var FONTS = _ref2.FONTS;
  return {
    root: _objectSpread({
      paddingLeft: '20px',
      backgroundColor: 'inherit',
      opacity: '0.9',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0,
      marginRight: 8
    }, FONTS.BODY_1)
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    SecondaryNavigationItemLabelTag = _createThemeTag4[0],
    labelTheme = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "Actions"), function () {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      visibility: 'hidden'
    }
  };
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    SecondaryNavigationItemActionsTag = _createThemeTag6[0],
    actionsTheme = _createThemeTag6[1];

var theme = _objectSpread({}, rootTheme, {}, labelTheme, {}, actionsTheme);

export { theme, SecondaryNavigationItemTag, SecondaryNavigationItemLabelTag, SecondaryNavigationItemActionsTag };