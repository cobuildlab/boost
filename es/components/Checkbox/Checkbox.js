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
import { Icon } from '../Icon';
import { CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag } from './Checkbox.theme';

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      iconName: _this.props.indeterminate ? 'Minus' : 'Check'
    };
    _this.inputRef = React.createRef();

    _this.onChange = function (event) {
      var checked = event.target.checked;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled;
      onChange && !disabled && onChange(checked, event);
    };

    return _this;
  }

  _createClass(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleIndeterminate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.indeterminate !== this.props.indeterminate) {
        this.handleIndeterminate();
      }
    }
  }, {
    key: "handleIndeterminate",
    value: function handleIndeterminate() {
      var inputElement = this.inputRef.current;

      if (inputElement) {
        inputElement.indeterminate = this.props.indeterminate;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          label = _this$props2.label,
          rest = _objectWithoutProperties(_this$props2, ["onChange", "label"]);

      var iconModifiers = _objectSpread({}, rest, {
        isShown: rest.checked || rest.indeterminate
      });

      return ___EmotionJSX(CheckboxWrapperTag, _extends({}, rest, {
        tagName: "label"
      }), ___EmotionJSX(CheckboxTag, {
        modifiers: rest,
        checked: rest.indeterminate ? false : rest.checked,
        disabled: rest.disabled,
        onChange: this.onChange,
        insideRef: this.inputRef,
        type: "checkbox",
        tagName: "input"
      }), ___EmotionJSX(CheckboxSquareTag, {
        modifiers: rest,
        tagName: "div"
      }, ___EmotionJSX(CheckboxIconTag, {
        modifiers: iconModifiers,
        tagName: "div"
      }, ___EmotionJSX(Icon, {
        name: this.state.iconName,
        size: "xs"
      }))), !!label ? ___EmotionJSX(CheckboxTextTag, {
        modifiers: rest,
        tagName: "div"
      }, label) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if (props.indeterminate) {
        return {
          iconName: 'Minus'
        };
      }

      if (props.checked) {
        return {
          iconName: 'Check'
        };
      }

      return null;
    }
  }]);

  return Checkbox;
}(PureComponent);

Checkbox.defaultProps = {
  checked: false,
  hasError: false,
  disabled: false,
  indeterminate: false
};
export { Checkbox };