import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createThemeTag } from '../../theme/createThemeTag';
import 'react-dropdown-tree-select/dist/styles.css';
var CLASS_NAME = 'tree-select';
var CLASS_NAME_FILLED = 'tree-select--filled';
var name = 'treeSelect';
var _createThemeTag = createThemeTag("".concat(name, "Wrapper"), {
    root: function root(props) {
      return {
        width: props.stretch ? '100%' : 'auto'
      };
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  TreeSelectWrapperTag = _createThemeTag2[0],
  treeSelectWrapperTheme = _createThemeTag2[1]; // eslint-disable-next-line
var _createThemeTag3 = createThemeTag(name, function (_ref) {
    var COLORS = _ref.COLORS,
      SIZES = _ref.SIZES,
      FONTS = _ref.FONTS;
    return {
      globals: function globals(theme) {
        var _ref2;
        return _ref2 = {}, _defineProperty(_ref2, ".".concat(CLASS_NAME), {
          '.dropdown': {
            width: '100%',
            paddingRight: '0 !important'
          },
          '.dropdown-trigger': {
            width: '100%',
            display: 'flex !important',
            alignItems: 'center',
            padding: '2px 8px !important',
            backgroundColor: COLORS.WHITE,
            minHeight: '36px',
            fontWeight: 400,
            transition: 'all .15s ease-in-out',
            border: "1px solid ".concat(COLORS.PRIMARY_BORDER_COLOR, " !important"),
            borderRadius: '5px',
            '&.top': {
              borderColor: "".concat(COLORS.PRIMARY, " !important")
            },
            '&:after': {
              content: '\'\'',
              display: 'inline-block',
              borderRight: '2px solid hsl(0,0%,80%)',
              borderBottom: '2px solid hsl(0,0%,80%)',
              width: '8px',
              height: '8px',
              transform: 'rotate(45deg)',
              marginLeft: '8px'
            },
            '&.top:after': {
              borderColor: 'hsl(0,0%, 20%)'
            },
            '&:after:hover': {
              borderColor: 'hsl(0,0%, 60%)'
            }
          },
          '.tag-list': {
            display: 'flex !important',
            flexWrap: 'wrap',
            width: '100%',
            '.tag-item': {
              margin: '0 !important',
              '& input': _objectSpread({
                height: '26px',
                margin: '2px 2px 2px 4px',
                borderBottom: 'none !important'
              }, FONTS.BODY_1, {
                '&, &::placeholder': {
                  color: COLORS.PLACEHOLDER_COLOR
                }
              })
            }
          },
          '.tag': _objectSpread({
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            minHeight: '26px',
            margin: '2px',
            borderRadius: '12px',
            padding: '0 24px 0 12px',
            color: COLORS.SECONDARY_TEXT_COLOR,
            border: "1px solid ".concat(COLORS.PRIMARY_BORDER_COLOR)
          }, FONTS.SMALL_1, {
            backgroundColor: '#fff',
            textOverflow: 'ellipsis',
            '& button': {
              position: 'absolute',
              top: '50%',
              right: '8px',
              padding: 0,
              fontSize: 0,
              height: '10px',
              marginTop: '-5px',
              width: '8px',
              '&:after': {
                content: '"\\2715"',
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: '10px',
                lineHeight: 1,
                fontWeight: 500
              }
            }
          }),
          'input.checkbox-item': {
            position: 'absolute',
            opacity: 0,
            '& + span': {
              position: 'relative',
              cursor: 'pointer',
              padding: '0'
            },
            '& + span:before': _objectSpread({
              content: '\'\''
            }, theme.components.checkboxSquare.root, {
              marginRight: '10px',
              display: 'inline-block',
              verticalAlign: 'text-top'
            }),
            '&:disabled + span': _objectSpread({}, theme.components.checkboxSquare.modifiers.disabled),
            '&:disabled + span:before': {
              background: COLORS.DISABLED_COLOR
            },
            '& + span:after': {
              content: '\'\'',
              position: 'absolute',
              left: '6px',
              top: '11px',
              width: '3px',
              height: '3px',
              background: COLORS.PRIMARY,
              boxShadow: "2px 0 0 ".concat(COLORS.PRIMARY, ", 4px 0 0 ").concat(COLORS.PRIMARY, ", 4px -2px 0 ").concat(COLORS.PRIMARY, ", 4px -4px 0 ").concat(COLORS.PRIMARY, ", 4px -6px 0 ").concat(COLORS.PRIMARY, ", 4px -8px 0 ").concat(COLORS.PRIMARY),
              transform: 'rotate(45deg)',
              transition: 'all .15s ease-in-out',
              opacity: 0
            },
            '&:checked + span:after': {
              opacity: 1
            }
          },
          '.node': {
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            '.node-label': {
              display: 'flex',
              alignItems: 'start',
              color: '#7E828B',
              whiteSpace: 'normal'
            },
            '&:hover': {
              backgroundColor: COLORS.PRIMARY_HOVER_GRAY_COLOR,
              '.node-labe': {
                color: '#323C47'
              }
            },
            '.toggle': {
              position: 'relative',
              color: COLORS.GRAY_40,
              border: "2px solid ".concat(COLORS.GRAY_40),
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              marginLeft: '8px !important',
              opacity: 0,
              flexShrink: 0,
              '&:after': {
                content: '""',
                position: 'absolute',
                top: '5px',
                left: '2px',
                height: '2px',
                width: '8px',
                backgroundColor: COLORS.GRAY_40
              },
              '&.collapsed:before': {
                content: '""',
                position: 'absolute',
                top: '2px',
                left: '5px',
                height: '8px',
                width: '2px',
                backgroundColor: COLORS.GRAY_40
              }
            },
            '&.tree .toggle': {
              opacity: 1,
              cursor: 'pointer'
            }
          },
          '.dropdown-content': {
            display: 'block',
            boxShadow: "".concat(theme.components.paper.root.boxShadow, " !important"),
            borderRadius: SIZES.MAIN_BORDER_RADIUS,
            width: '100%',
            marginTop: '8px',
            padding: '4px 0 !important'
          }
        }), _defineProperty(_ref2, ".".concat(CLASS_NAME_FILLED), {
          '.tag-item input': {
            display: 'none'
          }
        }), _ref2;
      }
    };
  }),
  _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
  _ = _createThemeTag4[0],
  treeSelectTheme = _createThemeTag4[1];
var theme = _objectSpread({}, treeSelectTheme, {}, treeSelectWrapperTheme);
export { CLASS_NAME, CLASS_NAME_FILLED, TreeSelectWrapperTag, theme };