import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ThemeProvider } from '../../';
import { createThemeTag } from '../';
import { parseThemes } from '../createTheme';
describe('createThemeTag', function () {
  var themeMock = {
    root: {
      height: '10px'
    },
    modifiers: {
      kind: {
        primary: {
          color: '#000'
        },
        secondary: {
          color: '#fff'
        }
      },
      size: {
        xs: {
          width: '100px'
        },
        md: {
          width: '200px'
        }
      }
    }
  };
  it('should create tag with root object and modifeirs', function () {
    var _createThemeTag = createThemeTag('name', themeMock),
      _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
      StyledTag = _createThemeTag2[0],
      theme = _createThemeTag2[1];
    var wrapper = render(___EmotionJSX(ThemeProvider, {
      theme: {
        components: theme
      }
    }, ___EmotionJSX(StyledTag, {
      tagName: "div",
      size: "md",
      kind: "secondary"
    })));
    expect(wrapper).toMatchInlineSnapshot("\n.emotion-0 {\n  height: 10px;\n  color: #fff;\n  width: 200px;\n}\n\n<div\n  class=\"emotion-0 emotion-1\"\n  kind=\"secondary\"\n/>\n");
  });
  it('should create tag with root function', function () {
    var _createThemeTag3 = createThemeTag('name', function () {
        return {
          root: function root(props) {
            return {
              height: '10px',
              gridGap: props.gap
            };
          }
        };
      }),
      _createThemeTag4 = _slicedToArray(_createThemeTag3, 2),
      StyledTag = _createThemeTag4[0],
      theme = _createThemeTag4[1];
    var wrapper = render(___EmotionJSX(ThemeProvider, {
      theme: {
        components: theme
      }
    }, ___EmotionJSX(StyledTag, {
      tagName: "div",
      gap: "10px"
    })));
    expect(wrapper).toMatchInlineSnapshot("\n<div\n  class=\"emotion-0 emotion-1\"\n/>\n");
  });
  it('should create tag with custom colors and zisez', function () {
    var _createThemeTag5 = createThemeTag('name', function (_ref) {
        var COLORS = _ref.COLORS,
          SIZES = _ref.SIZES;
        return {
          root: {
            color: 'black',
            backgroundColor: COLORS.PRIMARY,
            height: SIZES.MAIN
          }
        };
      }),
      _createThemeTag6 = _slicedToArray(_createThemeTag5, 2),
      StyledTag = _createThemeTag6[0],
      theme = _createThemeTag6[1];
    var wrapper = render(___EmotionJSX(ThemeProvider, {
      theme: parseThemes({
        COLORS: {
          PRIMARY: 'blue'
        },
        SIZES: {
          MAIN: '14px'
        },
        components: theme
      })
    }, ___EmotionJSX(StyledTag, {
      tagName: "div"
    })));
    expect(wrapper).toMatchInlineSnapshot("\n.emotion-0 {\n  color: black;\n  background-color: blue;\n  height: 14px;\n}\n\n<div\n  class=\"emotion-0 emotion-1\"\n/>\n");
  });
});