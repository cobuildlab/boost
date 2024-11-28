import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'gridLayout';
var _createThemeTag = createThemeTag(name, {
    root: function root(props) {
      var style = props.style || {};
      style.display = props.inline ? 'inline-grid' : 'grid';
      if (props.columns) {
        style.gridTemplateColumns = props.columns;
      }
      if (props.rows) {
        style.gridTemplateRows = props.rows;
      }
      if (props.autoColumns) {
        style.gridAutoColumns = props.autoColumns;
      }
      if (props.areas) {
        style.gridTemplateAreas = props.areas.map(function (item) {
          return "\"".concat(item.join(' '), "\"");
        }).join(' ');
      }
      if (props.justifyContent) {
        style.justifyContent = props.justifyContent;
      }
      if (props.alignContent) {
        style.alignContent = props.alignContent;
      }
      if (props.justifyItems) {
        style.justifyItems = props.justifyItems;
      }
      if (props.alignItems) {
        style.alignItems = props.alignItems;
      }
      if (props.autoFlow) {
        style.gridAutoFlow = props.autoFlow;
      }
      return style;
    },
    modifiers: function modifiers(props) {
      return {
        gap: {
          xs: {
            gridGap: '4px'
          },
          sm: {
            gridGap: '8px'
          },
          md: {
            gridGap: '16px'
          },
          lg: {
            gridGap: '24px'
          },
          xl: {
            gridGap: '32px'
          },
          xxl: {
            gridGap: '40px'
          },
          none: {},
          custom: {
            gridGap: props.customGap
          }
        },
        padding: {
          none: {},
          xs: {
            padding: '4px'
          },
          sm: {
            padding: '8px'
          },
          md: {
            padding: '12px'
          },
          lg: {
            padding: '20px'
          },
          xl: {
            padding: '28px'
          }
        },
        stretch: {
          flex: 1,
          width: '100%',
          maxWidth: '100%'
        }
      };
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  StyledTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
var GridLayout = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(GridLayout, _React$PureComponent);
  function GridLayout() {
    _classCallCheck(this, GridLayout);
    return _possibleConstructorReturn(this, _getPrototypeOf(GridLayout).apply(this, arguments));
  }
  _createClass(GridLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutProperties(_this$props, ["children"]);
      return ___EmotionJSX(StyledTag, _extends({}, rest, {
        tagName: "div"
      }), children);
    }
  }]);
  return GridLayout;
}(React.PureComponent);
GridLayout.defaultProps = {
  gap: 'none',
  padding: 'none'
};
export { GridLayout, theme };