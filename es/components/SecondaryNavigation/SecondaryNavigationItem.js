import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { Dropdown } from '../Dropdown';
import { Menu } from '../Menu';
import { Icon } from '../Icon';
import { SecondaryNavigationItemTag, SecondaryNavigationItemLabelTag, SecondaryNavigationItemActionsTag } from './SecondaryNavigationItem.theme';

var SecondaryNavigationItem =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SecondaryNavigationItem, _React$PureComponent);

  function SecondaryNavigationItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SecondaryNavigationItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SecondaryNavigationItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      openedActions: false,
      hovered: false
    };

    _this.openActions = function () {
      _this.setState({
        openedActions: true
      });
    };

    _this.closeActions = function () {
      _this.setState({
        openedActions: false
      });
    };

    _this.onMouseLeave = function () {
      _this.setState({
        hovered: false
      });

      var active = _this.props.active;

      if (!active) {
        _this.closeActions();
      }
    };

    _this.onMouseEnter = function () {
      _this.setState({
        hovered: true
      });
    };

    _this.createOnMenuItemClick = function (onClick) {
      return function (event) {
        event.stopPropagation();
        onClick(event);

        _this.closeActions();
      };
    };

    return _this;
  }

  _createClass(SecondaryNavigationItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          actions = _this$props.actions,
          rest = _objectWithoutProperties(_this$props, ["label", "actions"]);

      var _this$state = this.state,
          openedActions = _this$state.openedActions,
          hovered = _this$state.hovered;
      var finalActions = typeof actions === 'function' ? actions(this.closeActions) : actions;
      return ___EmotionJSX(SecondaryNavigationItemTag, _extends({}, rest, {
        hovered: hovered,
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      }), ___EmotionJSX(SecondaryNavigationItemLabelTag, {
        tagName: "span",
        modifiers: rest
      }, label), finalActions && ___EmotionJSX(SecondaryNavigationItemActionsTag, null, ___EmotionJSX(Dropdown, {
        isOpen: openedActions,
        onCloseDropdown: this.closeActions,
        onOpenDropdown: this.openActions
      }, ___EmotionJSX(Dropdown.Head, {
        stopClickPropagation: true
      }, ___EmotionJSX(Icon, {
        size: "sm",
        name: "More",
        color: "GRAY_40"
      })), ___EmotionJSX(Dropdown.Body, {
        preventOverflow: true,
        withPortal: true
      }, ___EmotionJSX(Menu, null, finalActions.map(function (_ref) {
        var label = _ref.label,
            onClick = _ref.onClick,
            rest = _objectWithoutProperties(_ref, ["label", "onClick"]);

        return ___EmotionJSX(Menu.Item, _extends({
          key: label,
          onClick: _this2.createOnMenuItemClick(onClick)
        }, rest), label);
      }))))));
    }
  }]);

  return SecondaryNavigationItem;
}(React.PureComponent);

export { SecondaryNavigationItem };
export { theme } from './SecondaryNavigationItem.theme';