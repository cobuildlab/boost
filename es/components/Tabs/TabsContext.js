import _extends from "@babel/runtime/helpers/esm/extends";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react';
var TabsContext = React.createContext({
  tabs: {}
});
var withTabsContext = function withTabsContext(Component) {
  return function (props) {
    return ___EmotionJSX(TabsContext.Consumer, null, function (TabsData) {
      return ___EmotionJSX(Component, _extends({}, props, {
        tabs: TabsData
      }));
    });
  };
};
export { TabsContext, withTabsContext };