import _isNil from "lodash/fp/isNil";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { compose, withStateHandlers, branch } from 'recompose';
import { TabsContext } from './TabsContext';
import { TabPanel } from './TabPanel';
import { TabTitle } from './TabTitle';
var tabsEnhancer = compose(branch(function (props) {
  return !_isNil(props.defaultSelectedTabId);
}, withStateHandlers(function (props) {
  return {
    selectedTabId: props.defaultSelectedTabId
  };
}, {
  onSelect: function onSelect() {
    return function (tabId) {
      return {
        selectedTabId: tabId
      };
    };
  }
})));
var TabsPlate = tabsEnhancer(function (_ref) {
  var children = _ref.children,
      onSelect = _ref.onSelect,
      selectedTabId = _ref.selectedTabId;
  var contextData = {
    selectedTabId: selectedTabId,
    onSelect: onSelect
  };
  return ___EmotionJSX(TabsContext.Provider, {
    value: contextData
  }, children);
});

var Tabs = function Tabs(props) {
  return ___EmotionJSX(TabsPlate, props);
};

Tabs.displayName = 'Tabs';
Tabs.Title = TabTitle;
Tabs.Panel = TabPanel;
export { Tabs };