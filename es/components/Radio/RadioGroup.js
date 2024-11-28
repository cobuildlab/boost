import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { PureComponent } from 'react';
import { FlexLayout } from '../FlexLayout';
import { RadioItem } from './RadioItem';

var RadioGroup =
/*#__PURE__*/
function (_PureComponent) {
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
      } // $FlowFixMe


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