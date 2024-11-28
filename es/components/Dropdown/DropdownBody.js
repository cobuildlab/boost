import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _pipe from "lodash/fp/pipe";
import _identity from "lodash/fp/identity";
import _merge from "lodash/fp/merge";

var _class, _temp;

import { jsx as ___EmotionJSX } from "@emotion/core";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { PureComponent, Fragment } from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import onClickOutside from 'react-onclickoutside';
import { Popper } from 'react-popper';
import { Portal } from 'react-portal';
import { withDropdownContext } from './DropdownContext';
import { offsetSizes, DropdownBodyTag } from './DropdownBody.theme';
import { Z_INDEX } from '../../theme';

var setPreventOverflow = function setPreventOverflow(preventOverflow) {
  return preventOverflow ? _merge({
    preventOverflow: {
      enabled: false
    },
    hide: {
      enabled: false
    }
  }) : _identity;
};

var setOffset = function setOffset(offset) {
  return offset && offset !== 'none' ? _merge({
    offset: {
      enabled: true,
      offset: offsetSizes[offset]
    }
  }) : _identity;
};

var setFlip = _merge({
  flip: {
    behavior: ['bottom'],
    boundariesElement: 'viewport'
  }
});

var dropdownBodyEnhancer = compose(setDisplayName('Dropdown.Body'), withDropdownContext, withProps(function (_ref) {
  var outsideClickIgnoreClass = _ref.dropdown.outsideClickIgnoreClass;
  return {
    outsideClickIgnoreClass: outsideClickIgnoreClass
  };
}), onClickOutside);
var DropdownBody = dropdownBodyEnhancer((_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DropdownBodyBase, _PureComponent);

  function DropdownBodyBase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownBodyBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownBodyBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClickOutside = function () {
      var _this$props = _this.props,
          closeOnClickOutside = _this$props.closeOnClickOutside,
          closeDropdown = _this$props.dropdown.closeDropdown;
      closeOnClickOutside && closeDropdown && closeDropdown();
    };

    _this.getPopperPlacement = function () {
      var _this$props2 = _this.props,
          pin = _this$props2.pin,
          _this$props2$placemen = _this$props2.placement,
          placement = _this$props2$placemen === void 0 ? '' : _this$props2$placemen;
      var popperPin = pin === 'left' ? 'start' : 'end';
      return "".concat(placement, "-").concat(popperPin);
    };

    _this.getPopperModifiers = function () {
      var _this$props3 = _this.props,
          preventOverflow = _this$props3.preventOverflow,
          offset = _this$props3.offset,
          modifiers = _this$props3.modifiers;
      return _pipe(setFlip, setPreventOverflow(preventOverflow), setOffset(offset), _merge(modifiers))({});
    };

    _this.getBodyWidth = function () {
      var _this$props4 = _this.props,
          stretch = _this$props4.stretch,
          targetWidth = _this$props4.dropdown.targetWidth,
          width = _this$props4.width;
      return stretch ? targetWidth : width && "".concat(width, "px");
    };

    _this.getBodyChildren = function () {
      var _this$props5 = _this.props,
          children = _this$props5.children,
          _this$props5$dropdown = _this$props5.dropdown,
          toggleDropdown = _this$props5$dropdown.toggleDropdown,
          closeDropdown = _this$props5$dropdown.closeDropdown,
          openDropdown = _this$props5$dropdown.openDropdown,
          isOpen = _this$props5$dropdown.isOpen;
      return typeof children === 'function' ? children({
        toggleDropdown: toggleDropdown,
        closeDropdown: closeDropdown,
        openDropdown: openDropdown,
        isOpen: isOpen
      }) : children;
    };

    return _this;
  }

  _createClass(DropdownBodyBase, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          withPortal = _this$props6.withPortal,
          forceRender = _this$props6.forceRender,
          positionFixed = _this$props6.positionFixed,
          isOpen = _this$props6.dropdown.isOpen,
          rest = _objectWithoutProperties(_this$props6, ["withPortal", "forceRender", "positionFixed", "dropdown"]);

      var popperPlacement = this.getPopperPlacement();
      var popperModifiers = this.getPopperModifiers();
      var bodyWidth = this.getBodyWidth();
      var renderChildren = this.getBodyChildren();
      var PortalCondComponent = withPortal ? Portal : Fragment;
      return forceRender || isOpen ? ___EmotionJSX(PortalCondComponent, null, ___EmotionJSX(Popper, {
        placement: popperPlacement,
        modifiers: popperModifiers,
        positionFixed: positionFixed
      }, function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement;
        return ___EmotionJSX(DropdownBodyTag, _extends({}, rest, {
          insideRef: ref,
          "data-placement": placement,
          tagName: "div",
          style: _objectSpread({}, style, {
            zIndex: DropdownBodyBase.zIndex,
            width: bodyWidth,
            display: isOpen ? 'block' : 'none'
          })
        }), renderChildren);
      })) : null;
    }
  }]);

  return DropdownBodyBase;
}(PureComponent), _class.zIndex = Z_INDEX.DROPDOWN, _class.defaultProps = {
  background: 'none',
  padding: 'none',
  borderRadius: 'md',
  placement: 'bottom',
  pin: 'left',
  offset: 'xs',
  isOpen: false,
  forceRender: false,
  withPortal: false,
  positionFixed: false,
  closeOnClickOutside: true
}, _temp));
export { DropdownBody };