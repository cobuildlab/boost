import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import * as formUtils from '../../utils/forms';
import { TreeSelect } from '../TreeSelect';
import { FormField } from '../Form/FormField';

var TreeSelectField =
/*#__PURE__*/
function (_React$Component) {
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