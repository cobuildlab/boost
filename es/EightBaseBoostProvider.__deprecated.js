import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { BoostProvider } from './BoostProvider';
export var EightBaseBoostProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(EightBaseBoostProvider, _React$Component);
  function EightBaseBoostProvider() {
    _classCallCheck(this, EightBaseBoostProvider);
    return _possibleConstructorReturn(this, _getPrototypeOf(EightBaseBoostProvider).apply(this, arguments));
  }
  _createClass(EightBaseBoostProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line
      console.error('DEPRECATION WARNING: EightBaseBoostProvider has been renamed to BoostProvider.');
    }
  }, {
    key: "render",
    value: function render() {
      return ___EmotionJSX(BoostProvider, this.props);
    }
  }]);
  return EightBaseBoostProvider;
}(React.Component);