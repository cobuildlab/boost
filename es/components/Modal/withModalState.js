import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import { ModalContext } from './ModalContext';

var withModalState = function withModalState(BaseComponent) {
  var ModalStateConsumer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ModalStateConsumer, _React$Component);

    function ModalStateConsumer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ModalStateConsumer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalStateConsumer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.renderBaseComponentWithModalProps = function (modalContext) {
        var id = _this.props.id;

        var props = _objectSpread({
          onClose: function onClose() {
            return modalContext.closeModal(id);
          }
        }, _this.props, {
          isOpen: modalContext.state[id] ? modalContext.state[id].isOpen : false,
          args: modalContext.state[id] ? modalContext.state[id].args : undefined
        });

        return ___EmotionJSX(BaseComponent, props);
      };

      return _this;
    }

    _createClass(ModalStateConsumer, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            rest = _objectWithoutProperties(_this$props, ["id"]);

        if (id) {
          return ___EmotionJSX(ModalContext.Consumer, null, this.renderBaseComponentWithModalProps);
        }

        return ___EmotionJSX(BaseComponent, rest);
      }
    }]);

    return ModalStateConsumer;
  }(React.Component);

  return ModalStateConsumer;
};

export { withModalState };