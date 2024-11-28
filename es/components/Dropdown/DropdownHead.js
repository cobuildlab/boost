import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";

var _temp;

import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { Reference } from 'react-popper';
import { compose, setDisplayName } from 'recompose';
import { withDropdownContext } from './DropdownContext';
import { DropdownHeadTag, DropdownPopperTarget } from './DropdownHead.theme';
var dropdownHeadEnhancer = compose(setDisplayName('Dropdown.Head'), withDropdownContext);
var DropdownHead = dropdownHeadEnhancer((_temp =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DropdownHead, _PureComponent);

  function DropdownHead() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownHead)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function (event) {
      var _this$props = _this.props,
          toggleDropdown = _this$props.dropdown.toggleDropdown,
          disabled = _this$props.disabled,
          stopClickPropagation = _this$props.stopClickPropagation,
          onClick = _this$props.onClick,
          children = _this$props.children;

      if (!!disabled || typeof children === 'function') {
        return;
      }

      if (typeof onClick === 'function') {
        onClick(event);
      } else {
        toggleDropdown && toggleDropdown();
      }

      event.preventDefault();
      stopClickPropagation && event.stopPropagation();
    };

    _this.getHeadChildren = function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          _this$props2$dropdown = _this$props2.dropdown,
          toggleDropdown = _this$props2$dropdown.toggleDropdown,
          closeDropdown = _this$props2$dropdown.closeDropdown,
          openDropdown = _this$props2$dropdown.openDropdown,
          isOpen = _this$props2$dropdown.isOpen;
      return typeof children === 'function' ? children({
        toggleDropdown: toggleDropdown,
        closeDropdown: closeDropdown,
        openDropdown: openDropdown,
        isOpen: isOpen
      }) : children;
    };

    return _this;
  }

  _createClass(DropdownHead, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          outsideClickIgnoreClass = _this$props3.dropdown.outsideClickIgnoreClass,
          children = _this$props3.children,
          rest = _objectWithoutProperties(_this$props3, ["dropdown", "children"]);

      var renderChildren = this.getHeadChildren();
      return ___EmotionJSX(DropdownHeadTag, _extends({}, rest, {
        tagName: "div",
        className: outsideClickIgnoreClass,
        onClick: this.onClick
      }), ___EmotionJSX(Reference, null, function (_ref) {
        var ref = _ref.ref;
        return ___EmotionJSX(DropdownPopperTarget, {
          tagName: "div",
          insideRef: ref
        }, renderChildren);
      }));
    }
  }]);

  return DropdownHead;
}(PureComponent), _temp));
export { DropdownHead };