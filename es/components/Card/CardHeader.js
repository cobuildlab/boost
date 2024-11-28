import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { CardHeaderTag } from './Card.theme';

var CardHeader =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CardHeader, _PureComponent);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardHeader).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      return ___EmotionJSX(CardHeaderTag, _extends({}, rest, {
        tagName: "div"
      }), children);
    }
  }]);

  return CardHeader;
}(PureComponent);

CardHeader.defaultProps = {
  padding: 'md'
};
export { CardHeader };