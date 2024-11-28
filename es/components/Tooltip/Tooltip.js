import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
var _class;
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import onClickOutside from 'react-onclickoutside';
import { Portal } from 'react-portal';
import { TooltipTargetTag, TooltipMessageTag, TooltipArrowTag } from './Tooltip.theme';
var Tooltip = onClickOutside((_class = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);
  function Tooltip(props) {
    var _this;
    _classCallCheck(this, Tooltip);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));
    _this.openTooltip = function () {
      return _this.setState({
        isOpen: true
      });
    };
    _this.closeTooltip = function () {
      return _this.setState({
        isOpen: false
      });
    };
    _this.toggleTooltip = function () {
      return _this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return {
          isOpen: !isOpen
        };
      });
    };
    _this.handleClickOutside = function (event) {
      _this.closeTooltip();
      event.stopPropagation();
    };
    _this.renderTooltipMessage = function () {
      var _this$props = _this.props,
        placement = _this$props.placement,
        withPortal = _this$props.withPortal,
        message = _this$props.message,
        eventsEnabled = _this$props.eventsEnabled,
        modifiers = _this$props.modifiers,
        rest = _objectWithoutProperties(_this$props, ["placement", "withPortal", "message", "eventsEnabled", "modifiers"]);
      var isOpen = _this.state.isOpen;
      var PortalCondComponent = withPortal ? Portal : React.Fragment;
      return ___EmotionJSX(PortalCondComponent, null, ___EmotionJSX(Popper, {
        placement: placement,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      }, function (_ref2) {
        var ref = _ref2.ref,
          style = _ref2.style,
          placement = _ref2.placement,
          arrowProps = _ref2.arrowProps;
        return isOpen ? ___EmotionJSX(TooltipMessageTag, {
          modifiers: rest,
          className: "ignore-react-onclickoutside",
          tagName: "div",
          insideRef: ref,
          "data-placement": placement,
          placement: placement,
          onClick: function onClick(event) {
            return event.stopPropagation();
          },
          style: style
        }, message, ___EmotionJSX(TooltipArrowTag, {
          placement: placement,
          insideRef: arrowProps.ref,
          style: arrowProps.style
        })) : null;
      }));
    };
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    return _this;
  }
  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        children = _this$props2.children,
        tagName = _this$props2.tagName,
        cursor = _this$props2.cursor,
        placement = _this$props2.placement,
        message = _this$props2.message,
        trigger = _this$props2.trigger,
        eventsEnabled = _this$props2.eventsEnabled,
        modifiers = _this$props2.modifiers,
        rest = _objectWithoutProperties(_this$props2, ["children", "tagName", "cursor", "placement", "message", "trigger", "eventsEnabled", "modifiers"]);
      var isOpen = this.state.isOpen;
      var targetTriggerEvents = typeof children === 'function' ? {} : trigger === 'hover' ? {
        onMouseEnter: this.openTooltip,
        onMouseLeave: this.closeTooltip
      } : {
        onClick: this.toggleTooltip
      };
      var renderedChildren = typeof children === 'function' ? children({
        isOpen: isOpen,
        openTooltip: this.openTooltip,
        closeTooltip: this.closeTooltip,
        toggleTooltip: this.toggleTooltip
      }) : children;
      return ___EmotionJSX(Manager, {
        tag: false
      }, ___EmotionJSX(Reference, null, function (_ref3) {
        var ref = _ref3.ref;
        return ___EmotionJSX(TooltipTargetTag, _extends({}, rest, targetTriggerEvents, {
          style: {
            cursor: cursor
          },
          tagName: tagName,
          insideRef: ref
        }), renderedChildren, _this2.renderTooltipMessage());
      }));
    }
  }]);
  return Tooltip;
}(React.PureComponent), _class.defaultProps = {
  defaultOpen: false,
  withPortal: true,
  trigger: 'hover',
  tagName: 'div',
  cursor: 'default'
}, _class));
export { Tooltip };