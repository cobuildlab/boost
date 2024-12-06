import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import { ModalContext } from './ModalContext';
var withModalState = function withModalState(BaseComponent) {
  var ModalStateConsumer = /*#__PURE__*/function (_React$Component) {
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