import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'dropdownBody';
var _createThemeTag = createThemeTag(name, {
    root: {
      borderRadius: '4px'
    },
    modifiers: {
      stretch: {
        width: '100%'
      },
      background: {
        white: {
          backgroundColor: '#fff',
          border: '1px solid #d0d7dd',
          boxShadow: '0 1px 3px 0 rgba(50,50,93,.14), 0 4px 6px 0 rgba(112,157,199,.08)'
        },
        dark: {
          backgroundColor: '#323c47',
          color: '#fff'
        },
        none: {
          backgroundColor: 'transparent'
        }
      },
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
        }
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  DropdownBodyTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
var offsetSizes = {
  none: '0',
  xs: '0, 2px',
  sm: '0, 4px',
  md: '0, 8px',
  lg: '0, 16px',
  xl: '0, 24px'
};
export { theme, offsetSizes, DropdownBodyTag };