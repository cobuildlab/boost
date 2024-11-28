import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { Portal } from 'react-portal';
import { ModalTag, OverlayTag } from './Modal.theme';
import { withModalState } from './withModalState';
var ESCAPE_KEY = 'Escape';

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClose = function () {
      if (typeof _this.props.onClose === 'function') {
        _this.props.onClose();
      }
    };

    _this.addEscPressEventListener = function () {
      document.addEventListener('keydown', _this.onDocumentKeyPress);
    };

    _this.removeEscPressEventListener = function () {
      document.removeEventListener('keydown', _this.onDocumentKeyPress);
    };

    _this.onDocumentKeyPress = function (event) {
      if (_this.props.shouldCloseOnEscPress && event.key === ESCAPE_KEY) {
        _this.onClose();
      }
    };

    _this.onOverlayMouseDown = function () {
      if (_this.props.shouldCloseOnOverlayClick) {
        _this.onClose();
      }
    };

    _this.onModalMouseDown = function (event) {
      event.stopPropagation();
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.addEscPressEventListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEscPressEventListener();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          rest = _objectWithoutProperties(_this$props, ["children", "isOpen"]);

      return isOpen ? ___EmotionJSX(Portal, null, ___EmotionJSX(OverlayTag, {
        modifiers: rest,
        tagName: "div",
        onMouseDown: this.onOverlayMouseDown,
        "data-e2e-id": rest['data-e2e-id']
      }, ___EmotionJSX(ModalTag, {
        modifiers: rest,
        tagName: "div",
        onMouseDown: this.onModalMouseDown
      }, typeof children === 'function' ? children(rest) : children))) : null;
    }
  }]);

  return Modal;
}(PureComponent);

Modal.openedModals = 0;
Modal.defaultProps = {
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscPress: true,
  isOpen: false
};
Modal = withModalState(Modal);
export { Modal };