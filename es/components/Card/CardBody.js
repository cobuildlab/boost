import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { CardBodyTag } from './Card.theme';
var CardBody = /*#__PURE__*/function (_PureComponent) {
  _inherits(CardBody, _PureComponent);
  function CardBody() {
    _classCallCheck(this, CardBody);
    return _possibleConstructorReturn(this, _getPrototypeOf(CardBody).apply(this, arguments));
  }
  _createClass(CardBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutProperties(_this$props, ["children"]);
      return ___EmotionJSX(CardBodyTag, _extends({}, rest, {
        tagName: "div"
      }), children);
    }
  }]);
  return CardBody;
}(PureComponent);
CardBody.defaultProps = {
  padding: 'md',
  scrollable: true
};
export { CardBody };