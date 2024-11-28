import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { ButtonTag } from './Button.theme';

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          loading = _this$props.loading;
      !disabled && !loading && onClick && onClick(event);
    };

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          tagName = _this$props2.tagName,
          loading = _this$props2.loading,
          rest = _objectWithoutProperties(_this$props2, ["children", "tagName", "loading"]);

      return ___EmotionJSX(ButtonTag, _extends({}, rest, {
        tagName: tagName,
        loading: loading,
        onClick: this.onClick,
        "aria-busy": Boolean(loading).toString()
      }), React.Children.map(children, function (child) {
        return typeof child === 'string' ? ___EmotionJSX("span", null, child) : child;
      }));
    }
  }]);

  return Button;
}(Component);

Button.defaultProps = {
  variant: 'raised',
  color: 'primary',
  size: 'md',
  tagName: 'button',
  withIconAutosize: true
};
export { Button };