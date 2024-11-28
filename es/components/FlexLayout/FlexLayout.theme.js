import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
import { paddingSizes, gapSizes, justifyContentStyles, alignContentStyles, alignItemsStyles } from '../../constants';
var name = 'flex-layout';
var getGapStyle = function getGapStyle(direction, gapProp) {
  if (gapProp !== 'noSet') {
    return direction === 'row' ? {
      '&:not(:last-child)': {
        marginRight: gapSizes[gapProp]
      }
    } : {
      '&:not(:last-child)': {
        marginBottom: gapSizes[gapProp]
      }
    };
  }
  return {};
};
var getGrowChildrenStyles = function getGrowChildrenStyles(growChildren) {
  return growChildren ? {
    flexGrow: '1'
  } : {};
};
var _createThemeTag = createThemeTag(name, {
    root: function root(props) {
      return {
        display: 'flex',
        flexDirection: props.direction,
        justifyContent: justifyContentStyles[props.justifyContent],
        alignContent: alignContentStyles[props.alignContent],
        alignItems: alignItemsStyles[props.alignItems],
        flexWrap: props.flexWrap,
        paddingLeft: paddingSizes[props.offsetX] || paddingSizes[props.offsetLeft],
        paddingRight: paddingSizes[props.offsetX] || paddingSizes[props.offsetRight],
        paddingTop: paddingSizes[props.offsetY] || paddingSizes[props.offsetTop],
        paddingBottom: paddingSizes[props.offsetY] || paddingSizes[props.offsetBottom],
        cursor: props.cursor,
        '& > *': _objectSpread({}, getGapStyle(props.direction, props.gap), {}, getGrowChildrenStyles(props.growChildren))
      };
    },
    modifiers: {
      stretch: {
        width: '100%',
        height: '100%'
      },
      inline: {
        display: 'inline-flex'
      },
      grow: {
        flexGrow: '1'
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  FlexLayoutTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
export { FlexLayoutTag, justifyContentStyles, alignContentStyles, alignItemsStyles, theme };