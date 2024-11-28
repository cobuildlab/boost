import { jsx as ___EmotionJSX } from "@emotion/core";
import React from 'react'; // $FlowFixMe

var IconsContext = React.createContext({});

var IconsProvider = function IconsProvider(props) {
  return ___EmotionJSX(IconsContext.Provider, {
    value: {
      icons: props.icons || {}
    }
  }, props.children);
};

var IconsConsumer = IconsContext.Consumer;
export { IconsProvider, IconsConsumer };