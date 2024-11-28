import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Global } from '@emotion/core';
import { resetStyles } from './index';

var Globals =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Globals, _React$PureComponent);

  function Globals() {
    _classCallCheck(this, Globals);

    return _possibleConstructorReturn(this, _getPrototypeOf(Globals).apply(this, arguments));
  }

  _createClass(Globals, [{
    key: "render",
    value: function render() {
      var components = this.props.components;
      return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Global, {
        styles: resetStyles
      }), Object.keys(components).map(function (name) {
        var globals = components[name].globals;
        return globals ? ___EmotionJSX(Global, {
          key: name,
          styles: globals
        }) : null;
      }));
    }
  }]);

  return Globals;
}(React.PureComponent);

export { Globals };