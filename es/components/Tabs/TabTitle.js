import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _omit from "lodash/fp/omit";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { PureComponent } from 'react';
import { compose, setDisplayName } from 'recompose';
import { createThemeTag } from '../../theme/createThemeTag';
import { withTabsContext } from './TabsContext';
/**
 * @prop {*} children component to be displayed in Tab
 * @prop {*} disabled if true, element is disabled
 * @prop {*} tabId ID of Tab element
 */

var _createThemeTag = createThemeTag('tabTitle', {}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 1),
    TabTitleTag = _createThemeTag2[0];

var tabTitleEnhancer = compose(setDisplayName('TabTitle'), withTabsContext);

var TabTitleBase =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TabTitleBase, _PureComponent);

  function TabTitleBase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabTitleBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabTitleBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.passSelectedTabId = function () {
      var _this$props = _this.props,
          tabId = _this$props.tabId,
          onSelect = _this$props.tabs.onSelect;
      onSelect && onSelect(tabId);
    };

    _this.getChildren = function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          tabId = _this$props2.tabId,
          disabled = _this$props2.disabled,
          selectedTabId = _this$props2.tabs.selectedTabId;
      var selected = selectedTabId === tabId;
      return typeof children === 'function' ? children({
        selected: selected,
        disabled: !!disabled
      }) : children;
    };

    return _this;
  }

  _createClass(TabTitleBase, [{
    key: "render",
    value: function render() {
      var rest = _omit(['children', 'disabled', 'tabId', 'tabs'], this.props);

      return ___EmotionJSX(TabTitleTag, _extends({}, rest, {
        onClick: this.passSelectedTabId,
        tagName: "div"
      }), this.getChildren());
    }
  }]);

  return TabTitleBase;
}(PureComponent);

var TabTitle = tabTitleEnhancer(TabTitleBase);
export { TabTitle };