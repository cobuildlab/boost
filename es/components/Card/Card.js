import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardSection } from './CardSection';
import { CardFooter } from './CardFooter';
import { Paper } from '../Paper';
var Card = /*#__PURE__*/function (_PureComponent) {
  _inherits(Card, _PureComponent);
  function Card() {
    _classCallCheck(this, Card);
    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }
  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        paddingOuter = _this$props.paddingOuter,
        rest = _objectWithoutProperties(_this$props, ["children", "paddingOuter"]);
      return ___EmotionJSX(Paper, _extends({}, rest, {
        padding: paddingOuter
      }), typeof children === 'function' ? children(rest) : children);
    }
  }]);
  return Card;
}(PureComponent);
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Section = CardSection;
Card.Footer = CardFooter;
export { Card };