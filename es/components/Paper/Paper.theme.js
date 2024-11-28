import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'paper';

var _createThemeTag = createThemeTag(name, function (_ref) {
  var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES;
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100%',
      background: COLORS.WHITE,
      color: COLORS.BLACK,
      boxShadow: '0px 2px 10px rgb(50 60 71 / 10%)',
      position: 'relative',
      overflow: 'hidden'
    },
    modifiers: {
      padding: {
        none: {
          padding: '0'
        },
        xs: {
          padding: '4px'
        },
        sm: {
          padding: '8px'
        },
        md: {
          padding: '16px'
        },
        lg: {
          padding: '24px'
        },
        xl: {
          padding: '32px'
        },
        xxl: {
          padding: '48px'
        }
      },
      borderRadius: {
        top: {
          borderTopLeftRadius: SIZES.MAIN_BORDER_RADIUS,
          borderTopRightRadius: SIZES.MAIN_BORDER_RADIUS
        },
        bottom: {
          borderBottomLeftRadius: SIZES.MAIN_BORDER_RADIUS,
          borderBottomhtRadius: SIZES.MAIN_BORDER_RADIUS
        },
        all: {
          borderRadius: SIZES.MAIN_BORDER_RADIUS
        }
      },
      stretch: {
        flex: 1,
        width: '100%',
        height: '100%'
      }
    }
  };
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    PaperTag = _createThemeTag2[0],
    theme = _createThemeTag2[1];

export { PaperTag, theme };