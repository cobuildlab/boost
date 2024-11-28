import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { IconsProvider } from './components/Icon/IconsProvider';
import { ModalProvider } from './components/Modal/ModalProvider';
import { createTheme, Globals } from './theme';
var BoostProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(BoostProvider, _React$Component);
  function BoostProvider(props) {
    var _this;
    _classCallCheck(this, BoostProvider);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(BoostProvider).call(this, props));
    _this.theme = props.theme || createTheme();
    return _this;
  }
  _createClass(BoostProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        icons = _this$props.icons;
      return ___EmotionJSX(ThemeProvider, {
        theme: this.theme
      }, ___EmotionJSX(Globals, {
        components: this.theme.components
      }), ___EmotionJSX(ModalProvider, null, ___EmotionJSX(IconsProvider, {
        icons: icons
      }, children)));
    }
  }]);
  return BoostProvider;
}(React.Component);
export { BoostProvider };