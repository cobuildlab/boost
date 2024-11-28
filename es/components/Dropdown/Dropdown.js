import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _isNil from "lodash/fp/isNil";

var _class, _temp;

import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { compose, withStateHandlers, branch } from 'recompose';
import { Manager } from 'react-popper';
import { DropdownContext } from './DropdownContext';
import { DropdownTag } from './Dropdown.theme';
import { DropdownHead } from './DropdownHead';
import { DropdownBody } from './DropdownBody';

/** When component has defaultOpen prop then adds hoc with isOpen state */
var dropDownEnhancer = compose(branch(function (props) {
  return !_isNil(props.defaultOpen);
}, withStateHandlers(function (props) {
  return {
    isOpen: props.defaultOpen
  };
}, {
  onOpenDropdown: function onOpenDropdown() {
    return function () {
      return {
        isOpen: true
      };
    };
  },
  onCloseDropdown: function onCloseDropdown() {
    return function () {
      return {
        isOpen: false
      };
    };
  }
})));
var DropdownPlate = dropDownEnhancer((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownPlate, _Component);

  /** needs for the onclickoutside ignore target */
  function DropdownPlate(props) {
    var _this;

    _classCallCheck(this, DropdownPlate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownPlate).call(this, props));

    _this.toggleDropdown = function () {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onOpenDropdown = _this$props.onOpenDropdown,
          onCloseDropdown = _this$props.onCloseDropdown;
      isOpen ? onCloseDropdown && onCloseDropdown() : onOpenDropdown && onOpenDropdown();
    };

    _this.setDropdownRef = function (ref) {
      _this.dropdownRef = ref;
    };

    _this.getDropdownWidth = function () {
      return _this.dropdownRef ? _this.dropdownRef.offsetWidth : undefined;
    };

    _this.getIgnoreClickOutsideClass = function () {
      return "ignore-react-onclickoutside-".concat(_this.instanceIndex);
    };

    _this.instanceIndex = DropdownPlate.instancesCount++;
    return _this;
  }

  _createClass(DropdownPlate, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          onCloseDropdown = _this$props2.onCloseDropdown,
          onOpenDropdown = _this$props2.onOpenDropdown,
          isOpen = _this$props2.isOpen,
          rest = _objectWithoutProperties(_this$props2, ["children", "onCloseDropdown", "onOpenDropdown", "isOpen"]);

      var contextData = {
        isOpen: isOpen,
        toggleDropdown: this.toggleDropdown,
        closeDropdown: onCloseDropdown,
        openDropdown: onOpenDropdown,
        targetWidth: this.getDropdownWidth(),
        outsideClickIgnoreClass: this.getIgnoreClickOutsideClass()
      };
      return ___EmotionJSX(DropdownContext.Provider, {
        value: contextData
      }, ___EmotionJSX(DropdownTag, _extends({}, rest, {
        tag: "div",
        insideRef: this.setDropdownRef
      }), ___EmotionJSX(Manager, {
        tag: false
      }, children)));
    }
  }]);

  return DropdownPlate;
}(Component), _class.instancesCount = 0, _temp));

var Dropdown = function Dropdown(props) {
  return ___EmotionJSX(DropdownPlate, props);
};

Dropdown.displayName = 'Dropdown';
Dropdown.Head = DropdownHead;
Dropdown.Body = DropdownBody;
export { Dropdown };