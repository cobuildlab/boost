import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { SwitchTag, SwitchInputTag, SwitchApperanceTag, SwitchLabelTag } from './Switch.theme';

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onChange = function (e) {
      var onChange = _this.props.onChange;

      if (typeof onChange === 'function') {
        onChange(e.target.checked, e);
      }
    };

    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          name = _this$props.name,
          onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["label", "value", "name", "onChange"]);

      return ___EmotionJSX(SwitchTag, _extends({
        tagName: "label"
      }, rest), ___EmotionJSX(SwitchInputTag, {
        modifiers: rest,
        tagName: "input",
        type: "checkbox",
        name: name,
        checked: value,
        onChange: this.onChange
      }), ___EmotionJSX(SwitchApperanceTag, {
        modifiers: rest,
        value: value
      }), label && ___EmotionJSX(SwitchLabelTag, {
        modifiers: rest
      }, label));
    }
  }]);

  return Switch;
}(React.Component);

export { Switch };