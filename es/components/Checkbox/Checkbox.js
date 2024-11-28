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
import { Icon } from '../Icon';
import { CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag } from './Checkbox.theme';
var Checkbox = /*#__PURE__*/function (_PureComponent) {
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
    } // $FlowFixMe
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