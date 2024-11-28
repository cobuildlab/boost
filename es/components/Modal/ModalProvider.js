import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { ModalContext } from './ModalContext';

var ModalProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalProvider, _Component);

  function ModalProvider(props) {
    var _this;

    _classCallCheck(this, ModalProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalProvider).call(this, props));

    _this.openModal = function (id) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _this.setState(_defineProperty({}, id, {
        isOpen: true,
        args: args
      }));
    };

    _this.closeModal = function (id) {
      _this.setState(_defineProperty({}, id, {
        isOpen: false
      }));
    };

    _this.collectContextValue = function () {
      return {
        openModal: _this.openModal,
        closeModal: _this.closeModal,
        state: _this.state
      };
    };

    _this.state = {};
    return _this;
  }

  _createClass(ModalProvider, [{
    key: "render",
    value: function render() {
      var contextValue = this.collectContextValue();
      return ___EmotionJSX(ModalContext.Provider, {
        value: contextValue
      }, this.props.children);
    }
  }]);

  return ModalProvider;
}(Component);

export { ModalProvider };