import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { PureComponent } from 'react';
import { FlexLayout } from '../FlexLayout';
import { RadioItem } from './RadioItem';
var RadioGroup = /*#__PURE__*/function (_PureComponent) {
  _inherits(RadioGroup, _PureComponent);
  function RadioGroup() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, RadioGroup);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.getGroupName = function () {
      var name = _this.props.name;
      return name || "radio-group-".concat(RadioGroup.instanceCounter);
    };
    _this.renderChildren = function () {
      var _this$props = _this.props,
        options = _this$props.options,
        children = _this$props.children;
      if (!options) {
        return children;
      }

      // $FlowFixMe
      return options.map(function (_ref) {
        var value = _ref.value,
          label = _ref.label,
          disabled = _ref.disabled;
        return ___EmotionJSX(RadioItem, {
          key: value,
          label: label,
          value: value,
          disabled: disabled || _this.props.disabled
        });
      });
    };
    return _this;
  }
  _createClass(RadioGroup, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      RadioGroup.instanceCounter++;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        children = _this$props2.children,
        value = _this$props2.value,
        direction = _this$props2.direction,
        gap = _this$props2.gap,
        onChange = _this$props2.onChange,
        hasError = _this$props2.hasError,
        disabled = _this$props2.disabled,
        stretch = _this$props2.stretch,
        rest = _objectWithoutProperties(_this$props2, ["children", "value", "direction", "gap", "onChange", "hasError", "disabled", "stretch"]);
      return ___EmotionJSX(FlexLayout, _extends({}, rest, {
        direction: direction,
        gap: gap,
        stretch: stretch,
        inline: true
      }), React.Children.map(this.renderChildren(), function (child) {
        return React.cloneElement(child, _objectSpread({
          onChange: onChange,
          selectedValue: value,
          name: _this2.getGroupName(),
          hasError: hasError
        }, disabled ? {
          disabled: disabled
        } : {}));
      }));
    }
  }]);
  return RadioGroup;
}(PureComponent);
RadioGroup.instanceCounter = 0;
RadioGroup.defaultProps = {
  direction: 'column',
  gap: 'md'
};
export { RadioGroup };