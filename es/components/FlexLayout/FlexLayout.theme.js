import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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