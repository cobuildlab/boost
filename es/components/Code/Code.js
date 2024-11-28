import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { CodeNumberPlateTag, CodeWrapperTag, CodeBodyTag, CodeNumericTag, CodePlateTag, CodeLineCounterTag, CodeBodyWrapperTag, CodeNumberWrapperTag, CodeCopyButtonWrapper } from './Code.theme';
import { Button } from '../Button';

var Code =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Code, _PureComponent);

  function Code() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Code);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Code)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.setNumbersRef = function (ref) {
      return _this.numbersRef = ref;
    };

    _this.setBodyRef = function (ref) {
      return _this.bodyRef = ref;
    };

    _this.onBodyScroll = function () {
      _this.numbersRef.scrollTop = _this.bodyRef.scrollTop;
    };

    _this.getLinesCount = function (codeText) {
      return typeof codeText === 'string' ? codeText.replace(/\n$/, '').split(/\r\n|\r|\n/).length : 0;
    };

    _this.renderNumbs = function () {
      var linesCount = _this.getLinesCount(_this.props.children);

      var counters = [];

      for (var index = 0; index < linesCount; index++) {
        counters.push(___EmotionJSX(CodeLineCounterTag, {
          key: index + 1
        }, index + 1));
      }

      return counters;
    };

    _this.handleCopyButtonClick = function () {
      var tempTextarea = document.createElement('TEXTAREA');
      var lastFocusedElement = document.activeElement; // $FlowIgnore

      tempTextarea.value = _this.bodyRef.innerText; // $FlowIgnore

      document.body.appendChild(tempTextarea); // $FlowIgnore

      tempTextarea.select();
      document.execCommand('copy'); // $FlowIgnore

      document.body.removeChild(tempTextarea);

      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    };

    return _this;
  }

  _createClass(Code, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          withCopyButton = _this$props.withCopyButton,
          rest = _objectWithoutProperties(_this$props, ["children", "withCopyButton"]);

      return ___EmotionJSX(CodeWrapperTag, rest, ___EmotionJSX(CodePlateTag, null, ___EmotionJSX(CodeNumberWrapperTag, {
        modifiers: rest
      }, ___EmotionJSX(CodeNumberPlateTag, {
        imodifiers: rest,
        insideRef: this.setNumbersRef
      }, ___EmotionJSX(CodeNumericTag, {
        modifiers: rest
      }, this.renderNumbs()))), ___EmotionJSX(CodeBodyWrapperTag, {
        modifiers: rest
      }, ___EmotionJSX(CodeBodyTag, {
        modifiers: rest,
        tagName: "pre",
        insideRef: this.setBodyRef,
        onScroll: this.onBodyScroll
      }, children)), !!withCopyButton ? ___EmotionJSX(CodeCopyButtonWrapper, null, ___EmotionJSX(Button, {
        type: "button",
        size: "sm",
        onClick: this.handleCopyButtonClick
      }, "Copy")) : null));
    }
  }]);

  return Code;
}(PureComponent);

export { Code };