import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createThemeTag } from '../../theme/createThemeTag';
import { Z_INDEX } from '../../theme';
var name = 'tooltip';

var _createThemeTag = createThemeTag("".concat(name, "Message"), function (_ref) {
  var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES;
  return {
    root: {
      padding: '12px 16px',
      backgroundColor: '#3D4751',
      color: COLORS.WHITE,
      borderRadius: SIZES.MAIN_BORDER_RADIUS,
      boxShadow: '2px 0 10px 0 rgba(0, 0, 0, 0.16)',
      zIndex: Z_INDEX.TOOLTIP
    },
    modifiers: {
      placement: {
        bottom: {
          marginTop: '8px'
        },
        top: {
          marginBottom: '8px'
        },
        right: {
          marginLeft: '8px'
        },
        left: {
          marginRight: '8px'
        }
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TooltipMessageTag = _createThemeTag2[0],
    tooltipMessageTheme = _createThemeTag2[1];

var _createThemeTag3 = createThemeTag("".concat(name, "Arrow"), function () {
  return {
    root: {
      position: 'absolute',
      height: '0',
      width: '0',
      borderStyle: 'solid'
    },
    modifiers: {
      placement: {
        bottom: {
          top: '-8px',
          borderWidth: '0 4px 8px 4px',
          borderColor: 'transparent transparent #3D4751 transparent'
        },
        top: {
          bottom: '-8px',
          borderWidth: '8px 4px 0 4px',
          borderColor: '#3D4751 transparent transparent transparent'
        },
        right: {
          left: '-8px',
          borderWidth: '4px 8px 4px 0',
          borderColor: 'transparent #3D4751  transparent transparent'
        },
        left: {
          right: '-8px',
          borderWidth: '4px 0 4px 8px',
          borderColor: 'transparent transparent transparent #3D4751'
        }
      }
    }
  };
}),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    TooltipArrowTag = _createThemeTag4[0],
    tooltipArrowTheme = _createThemeTag4[1];

var _createThemeTag5 = createThemeTag("".concat(name, "Target"), {
  root: {
    display: 'inline-flex'
  }
}),
    _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
    TooltipTargetTag = _createThemeTag6[0],
    themeTarget = _createThemeTag6[1];

var theme = _objectSpread({}, tooltipMessageTheme, {}, tooltipArrowTheme, {}, themeTarget);

export { theme, TooltipMessageTag, TooltipTargetTag, TooltipArrowTag };