import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import { ThemeProvider } from '../../';
import { createThemeTag } from '../createThemeTag';
import { parseThemes } from '../createTheme';
describe('createThemeTag', function () {
  var _createThemeTag = createThemeTag('text', function (_ref) {
      var COLORS = _ref.COLORS,
        SIZES = _ref.SIZES;
      return {
        root: {
          fontFamily: 'serif',
          backgroundColor: 'white'
        },
        modifiers: {
          kind: {
            primary: {
              color: COLORS.PRIMARY
            },
            secondary: {
              color: 'gray'
            }
          },
          large: {
            height: SIZES.LARGE
          }
        }
      };
    }),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    Text = _createThemeTag2[0],
    themeText = _createThemeTag2[1];
  var _createThemeTag3 = createThemeTag('subtitle', {
      root: function root(props) {
        return {
          color: 'black',
          height: props.height
        };
      }
    }),
    _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
    Subtitle = _createThemeTag4[0],
    themeSubtitle = _createThemeTag4[1];
  var originalTheme = {
    COLORS: {
      PRIMARY: 'blue',
      SECONDARY: 'green'
    },
    SIZES: {
      SMALL: '10px',
      MEDIUM: '14px',
      LARGE: '20px'
    },
    Z_INDEX: {},
    FONTS: {},
    components: _objectSpread({}, themeText, {}, themeSubtitle)
  };
  it('should create custom theme with extended colors and root', function () {
    var theme = parseThemes(originalTheme, {
      SIZES: {
        LARGE: '60px'
      },
      components: {
        text: {
          root: {
            fontFamily: 'calibry',
            textDecoration: 'underline'
          }
        }
      }
    });
    var wrapper = render(___EmotionJSX(ThemeProvider, {
      theme: theme
    }, ___EmotionJSX(Text, {
      large: true,
      kind: "primary"
    })));
    expect(wrapper).toMatchInlineSnapshot("\n.emotion-0 {\n  font-family: calibry;\n  background-color: white;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n  color: blue;\n  height: 60px;\n}\n\n<div\n  class=\"emotion-0 emotion-1\"\n  kind=\"primary\"\n/>\n");
  });
  it('should create custom theme with extended modifiers', function () {
    var theme = parseThemes(originalTheme, {
      components: {
        text: function text(_ref2) {
          var SIZES = _ref2.SIZES;
          return {
            root: {
              fontFamily: 'calibry'
            },
            modifiers: {
              large: {
                height: SIZES.MEDIUM
              }
            }
          };
        }
      }
    });
    var wrapper = render(___EmotionJSX(ThemeProvider, {
      theme: theme
    }, ___EmotionJSX(Text, {
      large: true
    })));
    expect(wrapper).toMatchInlineSnapshot("\n.emotion-0 {\n  font-family: calibry;\n  background-color: white;\n  height: 14px;\n}\n\n<div\n  class=\"emotion-0 emotion-1\"\n/>\n");
  });
  it('should create custom theme with extended modifiers', function () {
    var theme = parseThemes(originalTheme, {
      components: {
        subtitle: function subtitle(_ref3) {
          var SIZES = _ref3.SIZES;
          return {
            root: function root(props, styles) {
              return _objectSpread({}, styles, {
                heihgt: SIZES.SMALL
              });
            }
          };
        }
      }
    });
    var wrapper = render(___EmotionJSX(ThemeProvider, {
      theme: theme
    }, ___EmotionJSX(Subtitle, null)));
    expect(wrapper).toMatchInlineSnapshot("\n.emotion-0 {\n  color: black;\n  heihgt: 10px;\n}\n\n<div\n  class=\"emotion-0 emotion-1\"\n/>\n");
  });
});