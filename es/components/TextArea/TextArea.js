import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { TextAreaTag } from './TextArea.theme';

var TextArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextArea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;
      onChange && onChange(event.target.value, event);
    };

    return _this;
  }

  _createClass(TextArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          hasError = _this$props.hasError,
          rest = _objectWithoutProperties(_this$props, ["onChange", "hasError"]);

      return ___EmotionJSX(TextAreaTag, _extends({}, rest, {
        onChange: this.onChange,
        tagName: "textarea"
      }));
    }
  }]);

  return TextArea;
}(React.Component);

export { TextArea };