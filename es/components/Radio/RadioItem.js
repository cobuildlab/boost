import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { RadioCircleTag, RadioTag, RadioWrapperTag, RadioCircleInnerTag, RadioTextTag } from './Radio.theme';
var RadioItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(RadioItem, _PureComponent);
  function RadioItem() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, RadioItem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.onChange = function (event) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        value = _this$props.value,
        disabled = _this$props.disabled;
      onChange && !disabled && onChange(value, event);
    };
    return _this;
  }
  _createClass(RadioItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        name = _this$props2.name,
        label = _this$props2.label,
        value = _this$props2.value,
        selectedValue = _this$props2.selectedValue,
        equalsFunc = _this$props2.equalsFunc,
        onChange = _this$props2.onChange,
        children = _this$props2.children,
        rest = _objectWithoutProperties(_this$props2, ["name", "label", "value", "selectedValue", "equalsFunc", "onChange", "children"]);
      var hasLabel = !!label;
      var checked = value !== undefined && equalsFunc && equalsFunc({
        selectedValue: selectedValue,
        value: value
      });
      return ___EmotionJSX(RadioWrapperTag, _extends({
        tagName: "label"
      }, rest), ___EmotionJSX(RadioTag, {
        modifiers: rest,
        name: name,
        tagName: "input",
        type: "radio",
        onChange: this.onChange,
        checked: checked
      }), typeof children === 'function' ? children({
        checked: checked
      }) : !!children ? children : [___EmotionJSX(RadioCircleTag, {
        modifiers: rest,
        tagName: "div",
        key: "0"
      }, ___EmotionJSX(RadioCircleInnerTag, {
        modifiers: rest,
        tagName: "div",
        checked: checked
      })), hasLabel ? ___EmotionJSX(RadioTextTag, {
        modifiers: rest,
        tagName: "div",
        key: "1"
      }, label) : null]);
    }
  }]);
  return RadioItem;
}(PureComponent);
RadioItem.defaultProps = {
  color: 'primary',
  equalsFunc: function equalsFunc(_ref) {
    var selectedValue = _ref.selectedValue,
      value = _ref.value;
    return selectedValue === value;
  }
};
export { RadioItem };