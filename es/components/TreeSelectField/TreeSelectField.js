import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import * as formUtils from '../../utils/forms';
import { TreeSelect } from '../TreeSelect';
import { FormField } from '../Form/FormField';
var TreeSelectField = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeSelectField, _React$Component);
  function TreeSelectField() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, TreeSelectField);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TreeSelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.onChange = function (currenNode, selectedNodes) {
      var input = _this.props.input;
      var value = selectedNodes.map(function (_ref) {
        var value = _ref.value;
        return value;
      });
      input.onChange && input.onChange(value);
    };
    return _this;
  }
  _createClass(TreeSelectField, [{
    key: "collectFormFieldProps",
    value: function collectFormFieldProps() {
      var _this$props = this.props,
        meta = _this$props.meta,
        input = _this$props.input,
        stretch = _this$props.stretch,
        label = _this$props.label,
        showErrorOnTouched = _this$props.showErrorOnTouched;
      return {
        meta: meta,
        input: input,
        stretch: stretch,
        label: label,
        showErrorOnTouched: showErrorOnTouched
      };
    }
  }, {
    key: "collectSelectProps",
    value: function collectSelectProps() {
      var _this$props2 = this.props,
        input = _this$props2.input,
        meta = _this$props2.meta,
        placeholder = _this$props2.placeholder,
        options = _this$props2.options,
        stretch = _this$props2.stretch,
        showErrorOnTouched = _this$props2.showErrorOnTouched;
      var hasError = formUtils.hasError(meta, showErrorOnTouched);
      return _objectSpread({}, this.props, {
        name: input.name,
        value: input.value,
        hasError: hasError,
        placeholder: placeholder,
        options: options,
        stretch: stretch,
        onChange: this.onChange
      });
    }
  }, {
    key: "render",
    value: function render() {
      var collectedFormFieldProps = this.collectFormFieldProps();
      var collectedSelectProps = this.collectSelectProps();
      return ___EmotionJSX(FormField, collectedFormFieldProps, ___EmotionJSX(TreeSelect, collectedSelectProps));
    }
  }]);
  return TreeSelectField;
}(React.Component);
TreeSelectField.defaultProps = {
  showErrorOnTouched: true
};
export { TreeSelectField };