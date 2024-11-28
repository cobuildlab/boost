import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _omit from "lodash/fp/omit";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import InputMask from 'react-input-mask';
import { Icon } from '../Icon';
import { InputWrapperTag, InputTag, InputIndicatorTag, InputRightIconTag, InputLeftIconTag, InputClearButtonTag, InputArrowsTag, InputArrowTag } from './Input.theme';

var Input =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          type = _this$props.type,
          maxLength = _this$props.maxLength;
      var value = event.target.value;
      var hasNotMaxLength = maxLength === undefined;

      if (value.toString().length <= maxLength || hasNotMaxLength) {
        if (type === 'number') {
          onChange && onChange(!value ? value : Number(value), event);
        } else {
          onChange && onChange(value, event);
        }
      }
    };

    _this.onArrowClick = function (changeNumber) {
      if (_this.props.type !== 'number') {
        return;
      }

      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          maxLength = _this$props2.maxLength;
      var value = _this.props.value || 0;
      var hasNotMaxLength = maxLength === undefined; // $FlowFixMe thinks that maxLength can be undefined in second statement

      if (hasNotMaxLength || value.toString().length <= maxLength) {
        onChange && onChange(Number(value) + changeNumber);
      }
    };

    _this.onIncrementValue = function () {
      _this.onArrowClick(1);
    };

    _this.onDecrementValue = function () {
      _this.onArrowClick(-1);
    };

    _this.onClear = function () {
      var _this$props3 = _this.props,
          onClear = _this$props3.onClear,
          onChange = _this$props3.onChange;

      if (typeof onChange === 'function') {
        onChange('');
      }

      if (typeof onClear === 'function') {
        onClear();
      }
    };

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          align = _this$props4.align,
          autoComplete = _this$props4.autoComplete,
          errorText = _this$props4.errorText,
          hasError = _this$props4.hasError,
          hideErrorIndicator = _this$props4.hideErrorIndicator,
          insideRef = _this$props4.insideRef,
          leftIcon = _this$props4.leftIcon,
          mask = _this$props4.mask,
          onBlur = _this$props4.onBlur,
          onFocus = _this$props4.onFocus,
          placeholder = _this$props4.placeholder,
          rightIcon = _this$props4.rightIcon,
          width = _this$props4.width,
          stretch = _this$props4.stretch,
          type = _this$props4.type,
          value = _this$props4.value,
          name = _this$props4.name,
          kind = _this$props4.kind,
          disabled = _this$props4.disabled,
          readOnly = _this$props4.readOnly,
          clearable = _this$props4.clearable,
          onClear = _this$props4.onClear,
          autoFocus = _this$props4.autoFocus,
          step = _this$props4.step,
          min = _this$props4.min,
          max = _this$props4.max,
          hideNumberArrows = _this$props4.hideNumberArrows,
          rest = _objectWithoutProperties(_this$props4, ["align", "autoComplete", "errorText", "hasError", "hideErrorIndicator", "insideRef", "leftIcon", "mask", "onBlur", "onFocus", "placeholder", "rightIcon", "width", "stretch", "type", "value", "name", "kind", "disabled", "readOnly", "clearable", "onClear", "autoFocus", "step", "min", "max", "hideNumberArrows"]);

      var hasLeftIcon = !!leftIcon;
      var hasRightIcon = !!rightIcon;
      var inputProps = {
        align: align,
        autoComplete: typeof autoComplete === 'string' ? autoComplete : Boolean(autoComplete) ? 'on' : 'off',
        hasError: hasError,
        hasLeftIcon: hasLeftIcon,
        hasRightIcon: hasRightIcon,
        onBlur: onBlur,
        onChange: this.onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        width: width,
        type: type,
        value: value,
        insideRef: insideRef,
        name: name,
        kind: kind,
        disabled: disabled,
        readOnly: readOnly,
        stretch: stretch,
        autoFocus: autoFocus,
        step: step,
        min: min,
        max: max
      };
      return ___EmotionJSX(InputWrapperTag, _extends({}, _omit(['onChange'], rest), {
        stretch: stretch,
        width: width,
        tagName: "div"
      }), ___EmotionJSX(InputTag, _extends({}, inputProps, {
        modifiers: rest,
        mask: mask,
        tagName: mask ? InputMask : 'input',
        hideNumberArrows: hideNumberArrows
      })), !!hasError && !hideErrorIndicator ? ___EmotionJSX(InputIndicatorTag, {
        modifiers: rest,
        hasError: hasError,
        tagName: "div"
      }) : null, hasLeftIcon ? ___EmotionJSX(InputLeftIconTag, {
        modifiers: rest,
        tagName: "div"
      }, leftIcon) : null, hasRightIcon && !clearable && type !== 'number' ? ___EmotionJSX(InputRightIconTag, {
        modifiers: rest,
        tagName: "div"
      }, rightIcon) : null, type !== 'number' && !!clearable && !!value ? ___EmotionJSX(InputClearButtonTag, {
        modifiers: rest,
        onClick: this.onClear,
        tagName: "div"
      }, ___EmotionJSX(Icon, {
        name: "Delete",
        size: "sm"
      })) : null, type === 'number' && !hideNumberArrows ? ___EmotionJSX(InputArrowsTag, {
        modifiers: rest,
        tagName: "div"
      }, ___EmotionJSX(InputArrowTag, {
        modifiers: rest,
        onClick: this.onIncrementValue,
        tagName: "div"
      }, ___EmotionJSX(Icon, {
        name: "ChevronTop",
        size: "stretch"
      })), ___EmotionJSX(InputArrowTag, {
        modifiers: rest,
        onClick: this.onDecrementValue,
        tagName: "div"
      }, ___EmotionJSX(Icon, {
        name: "ChevronDown",
        size: "stretch"
      }))) : null);
    }
  }]);

  return Input;
}(PureComponent);

Input.defaultProps = {
  align: 'left',
  autoComplete: false,
  hasError: false,
  hideErrorIndicator: false,
  stretch: true,
  type: 'text',
  kind: 'bordered',
  hideNumberArrows: true
};
export { Input };