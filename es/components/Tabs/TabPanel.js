import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { createThemeTag } from '../../theme/createThemeTag';
import { withTabsContext } from './TabsContext';

var _createThemeTag = createThemeTag('tabPlate', {
  root: function root(props) {
    return {
      display: props.selected ? 'block' : 'none'
    };
  }
}),
    _createThemeTag2 = _slicedToArray(_createThemeTag, 2),
    TabPanelTag = _createThemeTag2[0],
    themeTabPanel = _createThemeTag2[1];

var tabPanelEnhancer = compose(setDisplayName('TabPanel'), withTabsContext);

var TabPanelBase = function TabPanelBase(_ref) {
  var children = _ref.children,
      selectedTabId = _ref.tabs.selectedTabId,
      tabId = _ref.tabId,
      forceRender = _ref.forceRender,
      rest = _objectWithoutProperties(_ref, ["children", "tabs", "tabId", "forceRender"]);

  var selected = selectedTabId === tabId;

  if (forceRender) {
    return ___EmotionJSX(TabPanelTag, _extends({}, rest, {
      selected: selected,
      tagName: "div"
    }), children);
  } else {
    return selected ? ___EmotionJSX(TabPanelTag, _extends({}, rest, {
      selected: selected,
      tagName: "div"
    }), children) : null;
  }
};

TabPanelBase.defaultProps = {
  selected: false,
  forceRender: false
};
var TabPanel = tabPanelEnhancer(TabPanelBase);
export { TabPanel, themeTabPanel };