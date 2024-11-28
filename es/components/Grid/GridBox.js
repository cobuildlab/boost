import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { createThemeTag } from '../../theme/createThemeTag';
var name = 'gridBox';
var _createThemeTag = createThemeTag(name, {
    root: function root(props) {
      var style = {
        display: 'flex',
        position: 'relative'
      };
      if (props.columnStart) {
        style.gridColumnStart = props.columnStart;
      }
      if (props.columnEnd) {
        style.gridColumnEnd = props.columnEnd;
      }
      if (props.rowStart) {
        style.gridRowStart = props.rowStart;
      }
      if (props.rowEnd) {
        style.gridRowEnd = props.rowEnd;
      }
      if (props.column) {
        style.gridColumn = props.column;
      }
      if (props.row) {
        style.gridRow = props.row;
      }
      if (props.justifySelf) {
        style.justifySelf = props.justifySelf;
      }
      if (props.alignSelf) {
        style.alignSelf = props.alignSelf;
      }
      if (props.justifyContent) {
        style.justifyContent = props.justifyContent;
      }
      if (props.alignItems) {
        style.alignItems = props.alignItems;
      }
      if (props.alignContent) {
        style.alignContent = props.alignContent;
      }
      if (props.area) {
        style.gridArea = props.area;
      }
      if (props.textAlign) {
        style.textAlign = props.textAlign;
      }
      return style;
    },
    modifiers: {
      direction: {
        column: {
          flexDirection: 'column'
        },
        row: {
          flexDirection: 'row'
        }
      }
    }
  }),
  _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
  GridBoxTag = _createThemeTag2[0],
  theme = _createThemeTag2[1];
var GridBox = /*#__PURE__*/function (_PureComponent) {
  _inherits(GridBox, _PureComponent);
  function GridBox() {
    _classCallCheck(this, GridBox);
    return _possibleConstructorReturn(this, _getPrototypeOf(GridBox).apply(this, arguments));
  }
  _createClass(GridBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        scrollable = _this$props.scrollable,
        _this$props$direction = _this$props.direction,
        direction = _this$props$direction === void 0 ? 'column' : _this$props$direction,
        rest = _objectWithoutProperties(_this$props, ["children", "scrollable", "direction"]);
      if (scrollable) {
        return ___EmotionJSX(GridBoxTag, _extends({}, rest, {
          tagName: "div",
          direction: direction
        }), ___EmotionJSX("div", {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: direction
          }
        }, children));
      }
      return ___EmotionJSX(GridBoxTag, _extends({}, rest, {
        tagName: "div",
        direction: direction
      }), children);
    }
  }]);
  return GridBox;
}(PureComponent);
GridBox.defaultProps = {
  direction: 'column'
};
export { GridBox, theme };