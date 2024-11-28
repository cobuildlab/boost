import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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