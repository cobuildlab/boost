import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _mapValues from "lodash/fp/mapValues";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import color from 'color';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'navigation';
var _createThemeTag = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS;
    return {
      root: function root(_ref2) {
        var controllable = _ref2.controllable,
          expanded = _ref2.expanded,
          expandedWidth = _ref2.expandedWidth,
          collapsedWidth = _ref2.collapsedWidth;
        return _objectSpread({
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'width 0.3s'
        }, controllable ? _objectSpread({
          width: expanded ? expandedWidth : collapsedWidth
        }, expanded ? {
          '.NavigationItem-label': {
            transitionDelay: '0.15s',
            opacity: '1',
            visibility: 'visible'
          }
        } : {}) : {
          '&:hover': {
            '.NavigationItem-label': {
              transitionDelay: '0.15s',
              opacity: '1',
              visibility: 'visible'
            }
          }
        });
      },
      modifiers: {
        color: _mapValues(function (color) {
          return {
            backgroundColor: color
          };
        }, COLORS)
      }
    };
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  NavigationTag = _createThemeTag2[0],
  themeNavigation = _createThemeTag2[1];
var _createThemeTag3 = createThemeTag("".concat(name, "Item"), function (_ref3) {
    var COLORS = _ref3.COLORS;
    return {
      root: function root(props) {
        return {
          cursor: 'pointer',
          position: 'relative',
          textDecoration: 'none',
          userSelect: 'none',
          display: 'flex',
          color: COLORS.LIGHT_PRIMARY_TEXT_COLOR,
          '&:hover, &.active': {
            backgroundColor: color(COLORS[props.color]).darken(0.2).hex()
          }
        };
      },
      modifiers: {
        color: _mapValues(function (color) {
          return {
            backgroundColor: color
          };
        }, COLORS)
      }
    };
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  NavigationItemTag = _createThemeTag4[0],
  themeItemMain = _createThemeTag4[1];
var _createThemeTag5 = createThemeTag("".concat(name, "ItemIcon"), function (_ref4) {
    var COLORS = _ref4.COLORS;
    return {
      root: {
        display: 'flex',
        width: '60px',
        height: '60px',
        flexShrink: '0',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.LIGHT_PRIMARY_TEXT_COLOR
      }
    };
  }),
  _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
  NavigationItemIcon = _createThemeTag6[0],
  themeItemIcon = _createThemeTag6[1];
var _createThemeTag7 = createThemeTag("".concat(name, "ItemLabel"), function (_ref5) {
    var COLORS = _ref5.COLORS,
      FONTS = _ref5.FONTS;
    return {
      root: _objectSpread({
        display: 'flex',
        alignItems: 'center',
        paddingRight: '20px',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.1s',
        whiteSpace: 'nowrap'
      }, FONTS.OVERLINE_2, {
        color: COLORS.WHITE
      })
    };
  }),
  _createThemeTag8 = _slicedToArray(_createThemeTag7, 2),
  NavigationItemLabel = _createThemeTag8[0],
  themeItemLabel = _createThemeTag8[1];
var _createThemeTag9 = createThemeTag("".concat(name, "ItemLabelPreview"), function (_ref6) {
    var COLORS = _ref6.COLORS,
      FONTS = _ref6.FONTS;
    return {
      root: _objectSpread({
        alignItems: 'center'
      }, FONTS.OVERLINE_2, {
        color: COLORS.WHITE
      })
    };
  }),
  _createThemeTag10 = _slicedToArray(_createThemeTag9, 2),
  NavigationItemLabelPreview = _createThemeTag10[0],
  themeItemLabelPreview = _createThemeTag10[1];
var theme = _objectSpread({}, themeNavigation, {}, themeItemMain, {}, themeItemLabel, {}, themeItemIcon, {}, themeItemLabelPreview);
export { theme, NavigationTag, NavigationItemTag, NavigationItemLabel, NavigationItemIcon, NavigationItemLabelPreview };