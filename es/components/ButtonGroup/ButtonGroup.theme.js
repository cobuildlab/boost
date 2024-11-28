import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'buttonGroup';
var _createThemeTag = createThemeTag(name, {
    root: function root(props) {
      return {
        display: 'flex',
        flexDirection: props.direction,
        '& > *': {
          '&:not(:last-child)': {
            borderRightColor: 'none',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          '&:not(:first-of-type)': {
            borderLeftColor: 'none',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            marginLeft: '-1px'
          }
        }
      };
    },
    modifiers: {
      stretch: {
        width: '100%'
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  ButtonGroupTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
export { theme, ButtonGroupTag };